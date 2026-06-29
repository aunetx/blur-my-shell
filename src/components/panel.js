import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { BlurSurface } from '../conveniences/blur_surface.js';
import { SurfaceSettings } from '../conveniences/surface_settings.js';
import { findPanelMonitor, getPanelCornerRadius } from './panel_corner.js';
import { updatePanelDynamicSize, updatePanelStaticSize } from './panel_geometry.js';
import { PanelVisibility } from './panel_visibility.js';

const DASH_TO_PANEL_UUID = 'dash-to-panel@jderose9.github.com';

let isMainPanelAlive = true;
Main.panel.connect('destroy', () => isMainPanelAlive = false);

export const PanelBlur = class PanelBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.blur_settings = new SurfaceSettings(settings, 'panel');
        this.effects_manager = effects_manager;
        this.visibility = new PanelVisibility(this);
        this.actors_list = [];
        this.original_panel_blur_ids = new Set();
        this.enabled = false;
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this._log("blurring top panel");

        this.connections.connect(
            Main.extensionManager,
            'extension-state-changed',
            (_, extension) => {
                if (extension.uuid === DASH_TO_PANEL_UUID
                    && extension.state === 1
                ) {
                    this.connections.connect(
                        global.dashToPanel,
                        'panels-created',
                        _ => this.blur_dtp_panels()
                    );

                    this.blur_existing_panels();
                }
            }
        );

        this.blur_existing_panels();

        this.connect_to_windows_and_overview();

        this._dirty = false;
        this.connections.connect(Main.layoutManager, 'monitors-changed',
            _ => this._dirty = true
        );

        this.connections.connect(global.display, 'workareas-changed', _ => {
            if (this._dirty) {
                this.reset();
                this._dirty = false;
            }
            else {
                Main.uiGroup.get_children().forEach(child => {
                    if (child.get_name() === "panelBox" &&
                        child != Main.layoutManager.panelBox &&
                        child.get_n_children() == 1
                    ) {
                        this.maybe_blur_panel(child.get_child_at_index(0));
                    }
                });
            }
        })

        this.enabled = true;
    }

    reset() {
        if (!this.enabled) {
            this._log("reset called but blur is not enabled");
            return;
        }

        this._log("resetting...");

        this.disable();
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.enable();
            return GLib.SOURCE_REMOVE;
        });
    }

    blur_existing_panels() {
        if (global.dashToPanel) {
            if (global.dashToPanel.panels)
                this.blur_dtp_panels();

            if (this.settings.dash_to_panel.BLUR_ORIGINAL_PANEL && isMainPanelAlive)
                this.schedule_original_panel_blur();
        } else {
            if (isMainPanelAlive)
                this.maybe_blur_panel(Main.panel);

            Main.uiGroup.get_children().forEach(actor => {
                if (actor.get_name() === "panelBox" && actor.get_n_children() === 1) {
                    let multi_monitor_panel = actor.get_child_at_index(0);
                    if (isMainPanelAlive && multi_monitor_panel != Main.panel)
                        this.maybe_blur_panel(multi_monitor_panel);
                }
            })
        }
    }

    blur_dtp_panels() {
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            if (!global.dashToPanel?.panels) {
                return GLib.SOURCE_REMOVE;
            }

            this._log("Blurring Dash to Panel panels after idle.");
    
            global.dashToPanel.panels.forEach(p => {
                if (p.panel != Main.panel)
                    this.maybe_blur_panel(p.panel);
            });

            return GLib.SOURCE_REMOVE;
        });
    };

    schedule_original_panel_blur() {
        this.cancel_original_panel_blur();
        [700, 1500].forEach(delay => {
            const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT_IDLE, delay, () => {
                this.original_panel_blur_ids.delete(id);
                if (
                    this.enabled &&
                    this.settings.dash_to_panel.BLUR_ORIGINAL_PANEL &&
                    isMainPanelAlive
                ) {
                    this.maybe_blur_panel(Main.panel);
                    const actors = this.actors_list.find(
                        actors => actors.widgets.panel === Main.panel
                    );
                    if (actors)
                        this.queue_update_size(actors);
                }
                return GLib.SOURCE_REMOVE;
            });
            this.original_panel_blur_ids.add(id);
        });
    }

    cancel_original_panel_blur() {
        this.original_panel_blur_ids.forEach(id => GLib.source_remove(id));
        this.original_panel_blur_ids.clear();
    }

    maybe_blur_panel(panel) {
        let actors = this.actors_list.find(
            actors => actors.widgets.panel == panel
        );

        if (!actors)
            this.blur_panel(panel);
    }

    blur_panel(panel) {
        let panel_box = panel.get_parent();
        let is_dtp_panel = false;
        if (!panel_box.name) {
            is_dtp_panel = true;
            panel_box = panel_box.get_parent();
        }
        const blur_parent = panel_box;

        let monitor = Main.layoutManager.findMonitorForActor(panel);
        if (!monitor)
            return;

        let static_blur = this.blur_settings.STATIC_BLUR;
        const blur_surface = new BlurSurface({
            connections: this.connections,
            component_settings: this.blur_settings,
            effects_manager: this.effects_manager,
            pipeline_manager: global.blur_my_shell._pipelines_manager,
            widget_name: 'bms-panel-blurred-widget',
            group_name: 'bms-panel-backgroundgroup',
            use_absolute_position: false,
            manage_group_allocation: false,
            dynamic_options: {
                corner_radius_getter: () => getPanelCornerRadius(this, panel, panel_box),
            },
        }).create({
            container: blur_parent,
            monitor_index: monitor.index,
            pipeline_id: this.blur_settings.PIPELINE,
            static_blur,
        });

        if (blur_surface.background_group)
            blur_surface.insert_group(blur_parent, 0);
        this.lower_background(blur_surface, panel);

        let actors = {
            widgets: {
                panel,
                panel_box,
                blur_parent,
                background: blur_surface.actor,
                background_group: blur_surface.background_group
            },
            blur_surface,
            static_blur,
            monitor,
            bg_manager: blur_surface.bg_manager,
            is_dtp_panel
        };
        this.actors_list.push(actors);

        this.update_size(actors);
        this.schedule_settle_updates(actors);

        this.connections.connect(
            panel,
            ['notify::position', 'notify::size', 'notify::allocation', 'notify::visible'],
            _ => this.queue_update_size(actors)
        );
        this.connections.connect(
            panel_box,
            ['notify::size', 'notify::position', 'notify::allocation', 'notify::visible'],
            _ => this.queue_update_size(actors)
        );
        this.connections.connect(
            panel_box.get_parent(),
            ['notify::position', 'notify::size', 'notify::allocation'],
            _ => this.queue_update_size(actors)
        );

        this.connections.connect(
            panel,
            'destroy',
            _ => this.destroy_blur(actors, true)
        );
    }

    lower_background(blur_surface, panel) {
        const background = blur_surface?.background_group ?? blur_surface?.actor;
        const parent = background?.get_parent?.();
        if (!parent || !background)
            return;

        const panel_parent = panel.get_parent?.();
        try {
            parent.set_child_at_index(background, 0);
        } catch (e) {
            try {
                parent.set_child_below_sibling(
                    background,
                    panel_parent === parent ? panel : null
                );
            } catch (e) { }
        }
    }

    schedule_settle_updates(actors) {
        actors.settle_update_ids = new Set();
        [50, 150, 400, 900].forEach(delay => {
            const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT_IDLE, delay, () => {
                actors.settle_update_ids?.delete(id);
                if (this.actors_list.includes(actors))
                    this.update_size(actors);
                return GLib.SOURCE_REMOVE;
            });
            actors.settle_update_ids.add(id);
        });
    }

    queue_update_size(actors) {
        if (actors.update_size_id)
            return;

        actors.update_size_id = global.compositor.get_laters().add(
            Meta.LaterType.BEFORE_REDRAW,
            () => {
                actors.update_size_id = 0;
                if (this.actors_list.includes(actors))
                    this.update_size(actors);
                return GLib.SOURCE_REMOVE;
            }
        );
    }

    update_size(actors) {
        let panel = actors.widgets.panel;
        let panel_box = actors.widgets.panel_box;
        let monitor = findPanelMonitor(panel, panel_box);
        if (!monitor)
            return;

        if (actors.static_blur)
            updatePanelStaticSize(actors, panel, panel_box, monitor);
        else
            updatePanelDynamicSize(actors, panel);

        actors.widgets.background = actors.blur_surface.actor;
        actors.bg_manager = actors.blur_surface.bg_manager;
        actors.monitor = monitor;
        this.lower_background(actors.blur_surface, panel);
        actors.blur_surface.update_corner_radius();
    }

    get_panel_geometry(panel, panel_box, monitor) {
        const panel_geometry = this.get_actor_geometry(panel);
        if (panel_geometry)
            return {
                ...panel_geometry,
                monitor_index: monitor.index,
            };

        const geometry = this.get_actor_geometry(panel_box);
        if (geometry)
            return {
                ...geometry,
                monitor_index: monitor.index,
            };

        try {
            const [x, y] = panel.get_transformed_position();
            if (Number.isFinite(x) && Number.isFinite(y))
                return {
                    x,
                    y,
                    width: panel.width,
                    height: panel.height,
                    monitor_index: monitor.index,
                };
        } catch (e) { }

        const [box_x, box_y] = this.get_actor_position(panel_box);
        return {
            x: box_x + panel.x,
            y: box_y + panel.y,
            width: panel.width,
            height: panel.height,
            monitor_index: monitor.index,
        };
    }

    get_actor_position(actor) {
        try {
            const [x, y] = actor.get_transformed_position();
            if (Number.isFinite(x) && Number.isFinite(y))
                return [x, y];
        } catch (e) { }

        try {
            const [x, y] = actor.get_position();
            return [x, y];
        } catch (e) { }

        return [0, 0];
    }

    get_actor_geometry(actor) {
        try {
            const extents = actor.get_transformed_extents?.();
            const top_left = extents?.get_top_left?.();
            const bottom_right = extents?.get_bottom_right?.();

            if (top_left && bottom_right) {
                const geometry = {
                    x: top_left.x,
                    y: top_left.y,
                    width: bottom_right.x - top_left.x,
                    height: bottom_right.y - top_left.y,
                };

                if (geometry.width > 0 && geometry.height > 0)
                    return geometry;
            }
        } catch (e) { }

        try {
            const [x, y] = actor.get_transformed_position();
            const [width, height] = actor.get_transformed_size();
            if (Number.isFinite(x) && Number.isFinite(y) && width > 0 && height > 0)
                return { x, y, width, height };
        } catch (e) { }

        return null;
    }

    connect_to_windows_and_overview() {
        this.visibility.connect_to_windows_and_overview();
    }

    disconnect_from_windows_and_overview() {
        this.visibility.disconnect_from_windows_and_overview();
    }

    update_light_text_classname(disable = false) {
        this.visibility.update_light_text_classname(disable);
    }

    is_main_panel_alive() {
        return isMainPanelAlive;
    }

    update_pipeline() {
        this.actors_list.forEach(actors =>
            actors.blur_surface.update_pipeline(this.blur_settings.PIPELINE)
        );
    }

    update_corner_radius() {
        this.actors_list.forEach(actors =>
            actors.blur_surface.update_corner_radius()
        );
    }

    show() {
        this.actors_list.forEach(actors => {
            actors.blur_surface.actor?.show?.();
        });
    }

    hide() {
        this.actors_list.forEach(actors => {
            actors.blur_surface.actor?.hide?.();
        });
    }

    // IMPORTANT: do never call this in a mutable `this.actors_list.forEach`
    destroy_blur(actors, panel_already_destroyed) {
        this.visibility.set_should_override_panel(actors, false);

        if (actors.update_size_id) {
            global.compositor.get_laters().remove(actors.update_size_id);
            actors.update_size_id = 0;
        }
        actors.settle_update_ids?.forEach(id => GLib.source_remove(id));
        actors.settle_update_ids?.clear();

        actors.blur_surface.destroy({ container_destroyed: panel_already_destroyed });

        let index = this.actors_list.indexOf(actors);
        if (index >= 0)
            this.actors_list.splice(index, 1);
    }

    disable() {
        if (!this.enabled) {
            this._log("blur already removed");
            return;
        }

        this._log("removing blur from top panel");

        this.disconnect_from_windows_and_overview();
        this.cancel_original_panel_blur();

        this.update_light_text_classname(true);

        const immutable_actors_list = [...this.actors_list];
        immutable_actors_list.forEach(actors => this.destroy_blur(actors, false));
        this.actors_list = [];

        this._dirty = true;

        this.connections.disconnect_all();

        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > panel]        ${str}`);
    }

};
