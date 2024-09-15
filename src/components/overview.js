import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { WorkspaceAnimationController } from 'resource:///org/gnome/shell/ui/workspaceAnimation.js';
const wac_proto = WorkspaceAnimationController.prototype;

import { Pipeline } from '../conveniences/pipeline.js';

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
        this.overview_background_managers = [];
        this.overview_background_group = new Meta.BackgroundGroup(
            { name: 'bms-overview-backgroundgroup' }
        );
        this.animation_background_managers = [];
        this.animation_background_group = new Meta.BackgroundGroup(
            { name: 'bms-animation-backgroundgroup' }
        );
        this.enabled = false;
        this.proto_patched = false;
    }

    enable() {
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

                Main.uiGroup.insert_child_above(
                    outer_this.animation_background_group,
                    global.window_group
                );

                outer_this.animation_background_managers.forEach(bg_manager => {
                    if (bg_manager._bms_pipeline.actor)
                        if (
                            Meta.prefs_get_workspaces_only_on_primary() &&
                            bg_manager._monitorIndex !== Main.layoutManager.primaryMonitor.index
                        )
                            bg_manager._bms_pipeline.actor.visible = false;
                        else
                            bg_manager._bms_pipeline.actor.visible = true;
                });
            };

            // remove the workspace-switch actors when the switch is done
            wac_proto._finishWorkspaceSwitch = function (...params) {
                outer_this._log("finish workspace switch");
                outer_this._original_FinishSwitch.apply(this, params);

                // this hides windows that are not on the current workspace
                if (
                    outer_this.settings.applications.BLUR
                )
                    for (let i = 0; i < w_m.get_n_workspaces(); i++) {
                        if (i != w_m.get_active_workspace_index())
                            w_m.get_workspace_by_index(i)?.list_windows().forEach(
                                window => window.get_compositor_private().hide()
                            );
                    }

                Main.uiGroup.remove_child(outer_this.animation_background_group);
            };

            this.proto_patched = true;
        }

        this.enabled = true;
    }

    update_backgrounds() {
        // remove every old background
        this.remove_background_actors();
        // create new backgrounds for the overview and the animation
        for (let i = 0; i < Main.layoutManager.monitors.length; i++) {
            const pipeline_overview = new Pipeline(
                this.effects_manager,
                global.blur_my_shell._pipelines_manager,
                this.settings.overview.PIPELINE
            );
            pipeline_overview.create_background_with_effects(
                i, this.overview_background_managers,
                this.overview_background_group, 'bms-overview-blurred-widget'
            );

            const pipeline_animation = new Pipeline(
                this.effects_manager,
                global.blur_my_shell._pipelines_manager,
                this.settings.overview.PIPELINE
            );
            pipeline_animation.create_background_with_effects(
                i, this.animation_background_managers,
                this.animation_background_group, 'bms-animation-blurred-widget'
            );
        }
        // add the container widget for the overview only to the overview group
        Main.layoutManager.overviewGroup.insert_child_at_index(this.overview_background_group, 0);
        // make sure it stays below
        this.connections.connect(Main.layoutManager.overviewGroup, "child-added", (_, child) => {
            if (child !== this.overview_background_group) {
                if (this.overview_background_group.get_parent())
                    Main.layoutManager.overviewGroup.remove_child(this.overview_background_group);
                Main.layoutManager.overviewGroup.insert_child_at_index(this.overview_background_group, 0);
            }
        });
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
        this.overview_background_group.remove_all_children();
        this.animation_background_group.remove_all_children();

        this.connections.disconnect_all_for(Main.layoutManager.overviewGroup);
        if (this.overview_background_group.get_parent())
            Main.layoutManager.overviewGroup.remove_child(this.overview_background_group);

        this.overview_background_managers.forEach(background_manager => {
            background_manager._bms_pipeline.destroy();
            background_manager.destroy();
        });
        this.animation_background_managers.forEach(background_manager => {
            background_manager._bms_pipeline.destroy();
            background_manager.destroy();
        });
        this.overview_background_managers = [];
        this.animation_background_managers = [];
    }

    disable() {
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
