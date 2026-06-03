import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { WorkspaceAnimationController } from 'resource:///org/gnome/shell/ui/workspaceAnimation.js';
const wac_proto = WorkspaceAnimationController.prototype;

import { BlurSurface } from '../conveniences/blur_surface.js';

const OVERVIEW_COMPONENTS_STYLE = [
    "overview-components-light",
    "overview-components-dark",
    "overview-components-transparent"
];


export const OverviewBlur = class OverviewBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.overview_surfaces = [];
        this.overview_background_group = new Meta.BackgroundGroup(
            { name: 'bms-overview-backgroundgroup' }
        );
        this.animation_surfaces = [];
        this.animation_background_group = new Meta.BackgroundGroup(
            { name: 'bms-animation-backgroundgroup' }
        );
        this.enabled = false;
        this.proto_patched = false;
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this._log("blurring overview");

        // add css class name for workspace-switch background
        Main.uiGroup.add_style_class_name("blurred-overview");

        // add css class name to make components semi-transparent if wanted
        this.update_components_classname();

        // update backgrounds when the component is enabled
        this.update_backgrounds();

        // connect to monitors change
        this.connections.connect(Main.layoutManager, 'monitors-changed',
            _ => this.update_backgrounds()
        );

        if (Main.layoutManager._startingUp) {
            this.connections.connect(Main.layoutManager, 'startup-complete', () => {
                if (this.enabled)
                    this.update_backgrounds();
            });
        }

        this.connections.connect(Main.overview, 'showing', () => {
            this.ensure_backgrounds();
            this.repaint_backgrounds();
        });
        this.connections.connect(Main.overview, 'hidden', () => this.repaint_backgrounds());

        // part for the workspace animation switch

        // make sure not to do this part if the functions were patched prior, as
        // the functions would call themselves and cause infinite recursion
        if (!this.proto_patched) {
            // store original workspace switching methods for restoring them on
            // disable()
            this._original_PrepareSwitch = wac_proto._prepareWorkspaceSwitch;
            this._original_FinishSwitch = wac_proto._finishWorkspaceSwitch;

            const w_m = global.workspace_manager;
            const outer_this = this;

            // create a blurred background actor for each monitor during a
            // workspace switch
            wac_proto._prepareWorkspaceSwitch = function (...params) {
                outer_this._log("prepare workspace switch");
                outer_this._original_PrepareSwitch.apply(this, params);

                // this permits to show the blur behind windows that are on
                // workspaces on the left and right
                if (
                    outer_this.settings.applications.BLUR
                ) {
                    let ws_index = w_m.get_active_workspace_index();
                    [ws_index - 1, ws_index + 1].forEach(
                        i => w_m.get_workspace_by_index(i)?.list_windows().forEach(
                            window => window.get_compositor_private().show()
                        )
                    );
                }

                outer_this.show_animation_background_group();

                outer_this.animation_surfaces.forEach(surface => {
                    if (surface.actor)
                        if (
                            Meta.prefs_get_workspaces_only_on_primary() &&
                            surface.monitor_index !== Main.layoutManager.primaryMonitor.index
                        )
                            surface.actor.visible = false;
                        else
                            surface.actor.visible = true;
                });
            };

            // remove the workspace-switch actors when the switch is done
            wac_proto._finishWorkspaceSwitch = function (...params) {
                outer_this._log("finish workspace switch");
                outer_this._original_FinishSwitch.apply(this, params);

                // this hides windows that are not on the current workspace
                if (
                    outer_this.settings.applications.BLUR
                ) {
                    // compile blacklist patterns once for this switch
                    const blacklist = outer_this.settings.applications.BLACKLIST || [];
                    const blacklist_regexes = blacklist.map(pattern => {
                        const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&');
                        return new RegExp('^' + escaped.replace(/\*/g, '.*').replace(/\?/g, '.') + '$', 'i');
                    });

                    for (let i = 0; i < w_m.get_n_workspaces(); i++) {
                        if (i != w_m.get_active_workspace_index())
                            w_m.get_workspace_by_index(i)?.list_windows().forEach(
                                window => {
                                    // skip windows on all workspaces (e.g. secondary
                                    // monitor windows under `workspaces-only-on-primary`);
                                    // hiding them on any inactive workspace hides them globally
                                    if (window.is_on_all_workspaces()) return;

                                    // skip desktop-type windows (e.g. DING, Nautilus desktop):
                                    // they should always remain visible
                                    if (window.get_window_type() === Meta.WindowType.DESKTOP)
                                        return;

                                    // skip blacklisted windows:
                                    // they are not blurred and should always remain visible
                                    const wm_class = window.get_wm_class();
                                    if (wm_class && blacklist_regexes.some(re => re.test(wm_class)))
                                        return;

                                    window.get_compositor_private().hide();
                                }
                            );
                    }
                }

                outer_this.hide_animation_background_group();
            };

            this.proto_patched = true;
        }

        this.enabled = true;
    }

    ensure_backgrounds() {
        const monitor_count = Main.layoutManager.monitors?.length ?? 0;
        if (
            monitor_count > 0
            && this.overview_surfaces.length !== monitor_count
        )
            this.update_backgrounds();
    }

    repaint_backgrounds() {
        this.ensure_backgrounds();
        this.overview_surfaces.forEach(surface => {
            try {
                surface.actor?.queue_redraw?.();
                surface.pipeline?.repaint_effect?.();
            } catch (e) { }
        });
    }

    update_backgrounds() {
        if (!Main.layoutManager.monitors?.length)
            return;
        // remove every old background
        this.remove_background_actors();
        // create new backgrounds for the overview and the animation
        for (let i = 0; i < Main.layoutManager.monitors.length; i++) {
            this.overview_surfaces.push(
                this.create_monitor_surface(
                    this.overview_background_group,
                    i,
                    'bms-overview-blurred-widget'
                )
            );
            this.animation_surfaces.push(
                this.create_monitor_surface(
                    this.animation_background_group,
                    i,
                    'bms-animation-blurred-widget'
                )
            );
        }
        // add the container widget for the overview only to the overview group
        this.insert_overview_background_group();
        // make sure it stays below
        this.connections.connect(Main.layoutManager.overviewGroup, "child-added", (_, child) => {
            if (child !== this.overview_background_group) {
                this.insert_overview_background_group();
            }
        });
    }

    create_monitor_surface(group, monitor_index, widget_name) {
        const monitor = Main.layoutManager.monitors[monitor_index];
        const surface = new BlurSurface({
            connections: this.connections,
            component_settings: this.settings.overview,
            effects_manager: this.effects_manager,
            pipeline_manager: global.blur_my_shell._pipelines_manager,
            widget_name,
            use_absolute_position: false,
        }).create({
            container: group,
            monitor_index,
            pipeline_id: this.settings.overview.PIPELINE,
            static_blur: true,
        });

        surface.update_static_geometry(group, {
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height,
            monitor_index,
        });

        return surface;
    }

    insert_overview_background_group() {
        if (this.overview_background_group.get_parent() !== Main.layoutManager.overviewGroup)
            Main.layoutManager.overviewGroup.insert_child_at_index(this.overview_background_group, 0);
        else
            Main.layoutManager.overviewGroup.set_child_below_sibling(this.overview_background_group, null);
    }

    show_animation_background_group() {
        if (this.animation_background_group.get_parent() !== Main.uiGroup)
            Main.uiGroup.insert_child_above(
                this.animation_background_group,
                global.window_group
            );
        else
            Main.uiGroup.set_child_above_sibling(
                this.animation_background_group,
                global.window_group
            );
    }

    hide_animation_background_group() {
        if (this.animation_background_group.get_parent() === Main.uiGroup)
            Main.uiGroup.remove_child(this.animation_background_group);
    }

    /// Updates the classname to style overview components with semi-transparent
    /// backgrounds.
    update_components_classname() {
        OVERVIEW_COMPONENTS_STYLE.forEach(
            style => Main.uiGroup.remove_style_class_name(style)
        );

        if (this.settings.overview.STYLE_COMPONENTS > 0)
            Main.uiGroup.add_style_class_name(
                OVERVIEW_COMPONENTS_STYLE[this.settings.overview.STYLE_COMPONENTS - 1]
            );
    }

    remove_background_actors() {
        this.connections.disconnect_all_for(Main.layoutManager.overviewGroup);

        if (this.overview_background_group.get_parent())
            Main.layoutManager.overviewGroup.remove_child(this.overview_background_group);
        this.hide_animation_background_group();

        this.overview_surfaces.forEach(surface => surface.destroy());
        this.animation_surfaces.forEach(surface => surface.destroy());
        this.overview_surfaces = [];
        this.animation_surfaces = [];

        this.overview_background_group.remove_all_children();
        this.animation_background_group.remove_all_children();
    }

    disable() {
        if (!this.enabled) {
            this._log("blur already removed");
            return;
        }

        this._log("removing blur from overview");

        this.remove_background_actors();
        Main.uiGroup.remove_style_class_name("blurred-overview");
        OVERVIEW_COMPONENTS_STYLE.forEach(
            style => Main.uiGroup.remove_style_class_name(style)
        );

        this.connections.disconnect_all();
        this.enabled = false;
    }

    restore_patched_proto() {
        if (this.proto_patched) {
            if (this._original_PrepareSwitch)
                wac_proto._prepareWorkspaceSwitch = this._original_PrepareSwitch;
            if (this._original_FinishSwitch)
                wac_proto._finishWorkspaceSwitch = this._original_FinishSwitch;

            this.proto_patched = false;
        }
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > overview]     ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > overview]     ${str}`);
    }
};
