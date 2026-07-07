import St from 'gi://St';
import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { PaintSignals } from '../conveniences/paint_signals.js';

import { Pipeline } from '../conveniences/pipeline.js';
import { DummyPipeline } from '../conveniences/dummy_pipeline.js';

const DASH_TO_PANEL_UUID = 'dash-to-panel@jderose9.github.com';
const PANEL_STYLES = [
    "transparent-panel",
    "light-panel",
    "dark-panel",
    "contrasted-panel"
];

// global listener, so we don't miss the panel destruction event
let isMainPanelAlive = true;
Main.panel.connect('destroy', () => isMainPanelAlive = false);

export const PanelBlur = class PanelBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.window_signal_ids = new Map();
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.actors_list = [];
        this.queued_updates = new Set();
        this.enabled = false;
        this._first_boot = true;
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this._log("blurring top panel");

        // check for panels when Dash to Panel is activated
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

        // Hide the panel blur first to avoid the panel background from display on login
        this.panel_hide_blur_startup();

        // connect to overview being opened/closed, and dynamically show or not
        // the blur when a window is near a panel
        this.connect_to_windows_and_overview();

        // connect to monitors change, and set a dirty flag to tell the extension that it should be
        // reset on 'workareas-changed' signal
        this._dirty = false;
        this.connections.connect(Main.layoutManager, 'monitors-changed',
            _ => this._dirty = true
        );

        this.connections.connect(global.display, 'workareas-changed', _ => {
            if (this._dirty) {
                // the monitors chaned
                this.reset();
                this._dirty = false;
            }
            else {
                // blur panels created by extension multi-monitors-bar@frederykabryan
                // I would like to connect directly to Main.uiGroup 'child-added' but it seems
                // like the name is updated too late...
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
        setTimeout(_ => this.enable(), 1);
    }

    /// Check for already existing panels and blur them if they are not already
    blur_existing_panels() {
        // check if dash-to-panel is present
        if (global.dashToPanel) {
            // blur already existing ones
            if (global.dashToPanel.panels)
                this.blur_dtp_panels();
        } else {
            // if no dash-to-panel, blur the main panel
            if (isMainPanelAlive)
                this.maybe_blur_panel(Main.panel);

            // blur panels already created by extension multi-monitors-bar@frederykabryan
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
        // Defer the blurring to the next idle cycle.
        // This is crucial to ensure the panel actors have been allocated their
        // final size and position by the compositor, avoiding race conditions
        // during extension startup.
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            if (!global.dashToPanel?.panels) {
                return GLib.SOURCE_REMOVE;
            }

            this._log("Blurring Dash to Panel panels after idle.");
    
            // blur every panel found
            global.dashToPanel.panels.forEach(p => {
                if (
                    p.panel != Main.panel ||
                    this.settings.dash_to_panel.BLUR_ORIGINAL_PANEL
                )
                    this.maybe_blur_panel(p.panel);
            });

            // if main panel is not included in the previous panels, blur it
            if (
                !global.dashToPanel.panels
                    .map(p => p.panel)
                    .includes(Main.panel)
                &&
                this.settings.dash_to_panel.BLUR_ORIGINAL_PANEL
                &&
                isMainPanelAlive
            )
                this.maybe_blur_panel(Main.panel);

            return GLib.SOURCE_REMOVE;
        });
    };

    /// Blur a panel only if it is not already blurred (contained in the list)
    maybe_blur_panel(panel) {
        // check if the panel is contained in the list
        let actors = this.actors_list.find(
            actors => actors.widgets.panel == panel
        );

        if (!actors)
            // if the actors is not blurred, blur it
            this.blur_panel(panel);
    }

    /// Blur a panel
    blur_panel(panel) {
        let geometry_actor = panel;
        let wrapper = null;
        let panel_box = panel.get_parent();
        let is_dtp_panel = false;
        if (!panel_box.name) {
            is_dtp_panel = true;
            wrapper = panel_box;
            geometry_actor = panel; // Track the inner panel dynamically
            panel_box = panel_box.get_parent();
        }

        let monitor = Main.layoutManager.findMonitorForActor(panel);
        if (!monitor)
            return;

        let background_group = new Meta.BackgroundGroup(
            { name: 'bms-panel-backgroundgroup', width: 0, height: 0 }
        );

        let background, bg_manager;
        let static_blur = this.settings.panel.STATIC_BLUR;
        let pipeline; // Hoist the pipeline variable so our proxy can access it

        if (static_blur) {
            let bg_manager_list = [];
            pipeline = new Pipeline(
                this.effects_manager,
                global.blur_my_shell._pipelines_manager,
                this.settings.panel.PIPELINE
            );
            background = pipeline.create_background_with_effects(
                monitor.index, bg_manager_list,
                background_group, 'bms-panel-blurred-widget'
            );
            bg_manager = bg_manager_list[0];
        }
        else {
            pipeline = new DummyPipeline(this.effects_manager, this.settings.panel);
            [background, bg_manager] = pipeline.create_background_with_effect(
                background_group, 'bms-panel-blurred-widget'
            );
        }

        let paint_signals = new PaintSignals(this.connections);

        // HACK
        //
        //`Shell.BlurEffect` does not repaint when shadows are under it. [1]
        //
        // This does not entirely fix this bug (shadows caused by windows
        // still cause artifacts), but it prevents the shadows of the panel
        // buttons to cause artifacts on the panel itself
        //
        // [1]: https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

        {
            if (this.settings.HACKS_LEVEL === 1) {
                this._log("panel hack level 1");

                // Proxy object to dynamically resolve the active blur effect.
                // This ensures repaints continue safely even if pipeline effects are rebuilt.
                let dynamic_target = {
                    queue_repaint: () => {
                        let active_pipeline = (bg_manager && bg_manager._bms_pipeline) ? bg_manager._bms_pipeline : pipeline;

                        if (static_blur && active_pipeline && active_pipeline.effects) {
                            // Repaint all effects in the static pipeline to be agnostic of the active effects
                            for (let i = 0; i < active_pipeline.effects.length; i++) {
                                let eff = active_pipeline.effects[i];
                                if (eff && typeof eff.queue_repaint === 'function') {
                                    eff.queue_repaint();
                                }
                            }
                        } else if (!static_blur && active_pipeline) {
                            let eff = active_pipeline.effect; // Dynamic pipeline uses a single effect
                            if (eff && typeof eff.queue_repaint === 'function') {
                                eff.queue_repaint();
                            }
                        }
                    }
                };

                paint_signals.disconnect_all();
                paint_signals.connect(background, dynamic_target);
            } else {
                paint_signals.disconnect_all();
            }
        }

        // insert the background group to the panel box
        panel_box.insert_child_at_index(background_group, 0);

        // the object that is used to remembering each elements that is linked to the blur effect
        let actors = {
            widgets: {
                panel,
                wrapper,
                panel_box,
                background,
                background_group,
                geometry_actor
            },
            static_blur,
            monitor,
            bg_manager,
            is_dtp_panel
        };
        this.actors_list.push(actors);

        // defer size update to idle to avoid allocation race
        this.queue_update_size(actors);

        // connect to the relevant actors geometry changes
        // this should fire update_size every time one of its params change
        this.connections.connect(
            geometry_actor,
            ['notify::allocation', 'notify::size', 'notify::position'],
            _ => this.queue_update_size(actors)
        );

        if (wrapper) {
            this.connections.connect(
                wrapper,
                ['notify::allocation', 'notify::size', 'notify::position'],
                _ => this.queue_update_size(actors)
            );
        }
        this.connections.connect(
            panel_box,
            ['notify::size', 'notify::position'],
            _ => this.queue_update_size(actors)
        );
        this.connections.connect(
            panel_box.get_parent(),
            'notify::position',
            _ => this.queue_update_size(actors)
        );

        // connect to the panel getting destroyed
        this.connections.connect(
            panel,
            'destroy',
            _ => this.destroy_blur(actors, true)
        );
    }

    queue_update_size(actors) {
        if (this.queued_updates.has(actors))
            return;

        this.queued_updates.add(actors);
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.queued_updates.delete(actors);

            if (!this.enabled || !this.actors_list.includes(actors))
                return GLib.SOURCE_REMOVE;

            this.update_size(actors);
            return GLib.SOURCE_REMOVE;
        });
    }

    update_size(actors) {
        let geometry_actor = actors.widgets.geometry_actor;
        let panel_box = actors.widgets.panel_box;
        let wrapper = actors.widgets.wrapper;
        let background = actors.widgets.background;
        let [width, height] = panel_box.get_size();
        let [geometry_width, geometry_height] = geometry_actor.get_size();

        if (!width || !height || !geometry_width || !geometry_height) {
            this.queue_update_size(actors);
            return;
        }

        // if static blur, need to clip the background
        if (actors.static_blur) {
            let monitor = Main.layoutManager.findMonitorForActor(geometry_actor);
            if (!monitor) {
                this.queue_update_size(actors);
                return;
            }

            let [p_x, p_y] = panel_box.get_position();
            let [p_p_x, p_p_y] = panel_box.get_parent().get_position();

            // updated coordinates for static blur
            let g_x, g_y;
            if (actors.is_dtp_panel) {
                let [w_x, w_y] = wrapper.get_position();
                let [pan_x, pan_y] = geometry_actor.get_position();
                g_x = w_x + pan_x;
                g_y = w_y + pan_y;
            } else {
                [g_x, g_y] = geometry_actor.get_position();
            }

            let x = p_x + p_p_x - monitor.x + g_x;
            let y = p_y + p_p_y - monitor.y + g_y;

            background.set_clip(x, y, geometry_width, geometry_height);
            background.x = g_x - x;
            background.y = .5 + g_y - y;
        } else {
            // updated coordinates for dynamic blur
            if (actors.is_dtp_panel) {
                background.x = wrapper.x + geometry_actor.x;
                background.y = wrapper.y + geometry_actor.y;
            } else {
                background.x = geometry_actor.x;
                background.y = geometry_actor.y;
            }
            background.width = geometry_width;
            background.height = geometry_height;
        }

        // update the monitor panel is on
        actors.monitor = Main.layoutManager.findMonitorForActor(geometry_actor);
    }

    /// Connect when overview if opened/closed to hide/show the blur accordingly
    ///
    /// If HIDETOPBAR is set, we need just to hide the blur when showing appgrid
    /// (so no shadow is cropped)
    connect_to_overview() {
        // may be called when panel blur is disabled, if hidetopbar
        // compatibility is toggled on/off
        // if this is the case, do nothing as only the panel blur interfers with
        // hidetopbar
        if (
            this.settings.panel.BLUR &&
            this.settings.panel.UNBLUR_IN_OVERVIEW
        ) {
            if (!this.settings.hidetopbar.COMPATIBILITY) {
                this.connections.connect(
                    Main.overview, 'showing', _ => this.hide()
                );
                
                this.connections.connect(
                    Main.overview, 'hidden', _ => {
                        this.panel_hide_blur_dynamically();
                        this.update_visibility();
                    }
                );
            } else {
                let appDisplay = Main.overview._overview._controls._appDisplay;
                
                this.connections.connect(
                    appDisplay, 'show', _ => this.hide()
                );

                this.connections.connect(
                    appDisplay, 'hide', _ => this.update_visibility()
                );
                this.connections.connect(
                    Main.overview, 'hidden', _ => this.update_visibility()
                );
            }
        }
    }

    /// Connect to windows disable transparency when a window is too close
    connect_to_windows() {
        if (
            this.settings.panel.OVERRIDE_BACKGROUND_DYNAMICALLY
        ) {
            // connect to overview opening/closing
            this.connections.connect(Main.overview, ['showing', 'hiding'],
                _ => this.update_visibility()
            );

            // connect to session mode update
            this.connections.connect(Main.sessionMode, 'updated',
                _ => this.update_visibility()
            );

            // manage already-existing windows
            for (const meta_window_actor of global.get_window_actors()) {
                this.on_window_actor_added(
                    meta_window_actor.get_parent(), meta_window_actor
                );
            }

            // manage windows at their creation/removal
            this.connections.connect(global.window_group, 'child-added',
                this.on_window_actor_added.bind(this)
            );
            this.connections.connect(global.window_group, 'child-removed',
                this.on_window_actor_removed.bind(this)
            );

            // connect to a workspace change
            this.connections.connect(global.window_manager, 'switch-workspace',
                _ => this.update_visibility()
            );

            // perform early update
            this.update_visibility();
        } else {
            // reset transparency for every panels
            this.actors_list.forEach(
                actors => this.set_should_override_panel(actors, true)
            );
        }
    }

    /// An helper to connect to both the windows and overview signals.
    /// This is the only function that should be directly called, to prevent
    /// inconsistencies with signals not being disconnected.
    connect_to_windows_and_overview() {
        this.disconnect_from_windows_and_overview();
        this.connect_to_overview();
        this.connect_to_windows();
    }

    /// Disconnect all the connections created by connect_to_windows
    disconnect_from_windows_and_overview() {
        // disconnect the connections to actors
        for (const actor of [
            Main.overview, Main.sessionMode,
            global.window_group, global.window_manager,
            Main.overview._overview._controls._appDisplay
        ]) {
            this.connections.disconnect_all_for(actor);
        }

        // disconnect the connections from windows
        for (const [actor, ids] of this.window_signal_ids) {
            for (const id of ids) {
                actor.disconnect(id);
            }
        }
        this.window_signal_ids = new Map();
    }

    /// Update the css classname of the panel for light theme
    update_light_text_classname(disable = false) {
        if (!isMainPanelAlive)
            return;

        if (this.settings.panel.FORCE_LIGHT_TEXT && !disable)
            Main.uiGroup.add_style_class_name("panel-light-text");
        else
            Main.uiGroup.remove_style_class_name("panel-light-text");
    }

    /// Callback when a new window is added
    on_window_actor_added(container, meta_window_actor) {
        this.window_signal_ids.set(meta_window_actor, [
            meta_window_actor.connect('notify::allocation',
                _ => this.update_visibility()
            ),
            meta_window_actor.connect('notify::visible',
                _ => this.update_visibility()
            )
        ]);
        this.update_visibility();
    }

    /// Callback when a window is removed
    on_window_actor_removed(container, meta_window_actor) {
        for (const signalId of this.window_signal_ids.get(meta_window_actor)) {
            meta_window_actor.disconnect(signalId);
        }
        this.window_signal_ids.delete(meta_window_actor);
        this.update_visibility();
    }

    /// Update the visibility of the blur effect
    update_visibility() {
        if (
            isMainPanelAlive && Main.panel.has_style_pseudo_class('overview')
            || !Main.sessionMode.hasWindows
        ) {
            this.actors_list.forEach(
                actors => this.set_should_override_panel(actors, true)
            );
            return;
        }

        if (!Main.layoutManager.primaryMonitor)
            return;

        // get all the windows in the active workspace that are visible
        const workspace = global.workspace_manager.get_active_workspace();
        const windows = workspace.list_windows().filter(meta_window =>
            meta_window.showing_on_its_workspace()
            && !meta_window.is_hidden()
            && meta_window.get_window_type() !== Meta.WindowType.DESKTOP
            // exclude Desktop Icons NG
            && meta_window.get_gtk_application_id() !== "com.rastersoft.ding"
            && meta_window.get_gtk_application_id() !== "com.desktop.ding"
        );

        // check if at least one window is near enough to each panel and act
        // accordingly
        const scale = St.ThemeContext.get_for_stage(global.stage).scale_factor;
        this.actors_list
            // do not apply for dtp panels, as it would only cause bugs and it
            // can be done from its preferences anyway
            .filter(actors => !actors.is_dtp_panel)
            .forEach(actors => {
                let panel = actors.widgets.panel;
                let panel_top = panel.get_transformed_position()[1];
                let panel_bottom = panel_top + panel.get_height();

                // check if at least a window is near enough the panel
                let window_overlap_panel = false;
                windows.forEach(meta_window => {
                    let window_monitor_i = meta_window.get_monitor();
                    let same_monitor = actors.monitor.index == window_monitor_i;

                    let window_vertical_pos = meta_window.get_frame_rect().y;
                    let window_vertical_bottom = window_vertical_pos + meta_window.get_frame_rect().height;

                    // if so, and if in the same monitor, then it overlaps
                    if (same_monitor
                        &&
                        // check if panel is on top (relative to the monitor's Y origin)
                        ((panel_top === actors.monitor.y && window_vertical_pos < panel_bottom + 5 * scale) ||
                        // check if panel is at the bottom
                        (panel_top > actors.monitor.y && window_vertical_bottom > panel_top - 5 * scale))
                    )
                        window_overlap_panel = true;
                });

                // if no window overlaps, then the panel is transparent
                this.set_should_override_panel(
                    actors, !window_overlap_panel
                );
            });
    }

    /// Choose wether or not the panel background should be overriden, in
    /// respect to its argument and the `override-background` setting.
    set_should_override_panel(actors, should_override) {
        let panel = actors.widgets.panel;

        PANEL_STYLES.forEach(style => panel.remove_style_class_name(style));

        if (this.settings.panel.OVERRIDE_BACKGROUND) {
            if (this.settings.panel.OVERRIDE_BACKGROUND_DYNAMICALLY) {
                // This is an invert of the above behavior, 
                // Blur and all styling is hidden when "should_override" is true. 
                if (this.settings.panel.OVERRIDE_BACKGROUND_DYNAMICALLY_MODE == 0) {
                    panel.add_style_class_name(
                        PANEL_STYLES[this.settings.panel.STYLE_PANEL]
                    );
                    if (!should_override) {
                        actors.widgets.background.show();
                    }
                    else {
                        actors.widgets.background.hide();
                    };
                }
                if (this.settings.panel.OVERRIDE_BACKGROUND_DYNAMICALLY_MODE == 1) {
                    PANEL_STYLES.forEach(style => panel.remove_style_class_name(style));
                    if (should_override) {
                        panel.add_style_class_name(
                            PANEL_STYLES[this.settings.panel.STYLE_PANEL]
                        );
                    }
                }
            }
            else {
                panel.add_style_class_name(
                    PANEL_STYLES[this.settings.panel.STYLE_PANEL]
                );
            }
        };

        // update the classname if the panel to have or have not light text
        this.update_light_text_classname(!should_override);
    }

    panel_hide_blur_dynamically(){
        if (this.settings.panel.OVERRIDE_BACKGROUND && this.settings.panel.OVERRIDE_BACKGROUND_DYNAMICALLY) {
            if (this.settings.panel.OVERRIDE_BACKGROUND_DYNAMICALLY_MODE == 0) {
                this.hide()
            }
            else {this.show()}
        }
        else {
            this.show()
        }
    }

    panel_hide_blur_startup(){
        if (this._first_boot) {
            if (this.settings.panel.UNBLUR_IN_OVERVIEW) {
                this.hide();
                this._first_boot = false
            }
            else {
                this._first_boot = false
            }
        }
    }

    update_pipeline() {
        this.actors_list.forEach(actors =>
            actors.bg_manager._bms_pipeline.change_pipeline_to(
                this.settings.panel.PIPELINE
            )
        );
    }

    show() {
        this.actors_list.forEach(actors => {
            actors.widgets.background.show();
        });
    }

    hide() {
        this.actors_list.forEach(actors => {
            actors.widgets.background.hide();
        });
    }

    // IMPORTANT: do never call this in a mutable `this.actors_list.forEach`
    destroy_blur(actors, panel_already_destroyed) {
        this.set_should_override_panel(actors, false);

        actors.bg_manager._bms_pipeline.destroy();

        if (panel_already_destroyed)
            actors.bg_manager.backgroundActor = null;
        actors.bg_manager.destroy();

        if (!panel_already_destroyed) {
            actors.widgets.panel_box.remove_child(actors.widgets.background_group);
            actors.widgets.background_group.destroy_all_children();
            actors.widgets.background_group.destroy();
        }

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

        this.update_light_text_classname(true);

        const immutable_actors_list = [...this.actors_list];
        immutable_actors_list.forEach(actors => this.destroy_blur(actors, false));
        this.actors_list = [];
        this.queued_updates.clear();

        this._dirty = true;

        this.connections.disconnect_all();

        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > panel]        ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > panel]        ${str}`);
    }
};
