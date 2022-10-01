'use strict';

const { St, Shell, Meta, Gio, GLib } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { PaintSignals } = Me.imports.effects.paint_signals;
const ColorEffect = Me.imports.effects.color_effect.ColorEffect;
const NoiseEffect = Me.imports.effects.noise_effect.NoiseEffect;

const DASH_TO_PANEL_UUID = 'dash-to-panel@jderose9.github.com';

const PANEL_STYLES = [
    "transparent-panel",
    "light-panel",
    "dark-panel"
];


var PanelBlur = class PanelBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.window_signal_ids = new Map();
        this.prefs = prefs;
        this.actors_list = [];
        this.enabled = false;
    }

    enable() {
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

        // connect to overview being opened/closed, and dynamically show or not
        // the blur when a window is near a panel
        this.connect_to_windows_and_overview();

        // connect to every background change (even without changing image)
        // FIXME this signal is fired very often, so we should find another one
        //       fired only when necessary (but that still catches all cases)
        this.connections.connect(
            Main.layoutManager._backgroundGroup,
            'notify',
            _ => this.actors_list.forEach(actors =>
                this.update_wallpaper(actors)
            )
        );

        // connect to monitors change
        this.connections.connect(
            Main.layoutManager,
            'monitors-changed',
            _ => {
                if (Main.screenShield && !Main.screenShield.locked) {
                    this.reset();
                }
            }
        );

        this.enabled = true;
    }

    reset() {
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
            // if no dash-to-panel, blur the main and only panel
            this.maybe_blur_panel(Main.panel);
        }
    }

    blur_dtp_panels() {
        // FIXME when Dash to Panel changes its size, it seems it creates new
        // panels; but I can't get to delete old widgets

        // blur every panel found
        global.dashToPanel.panels.forEach(p => {
            this.maybe_blur_panel(p.panel);
        });

        // if main panel is not included in the previous panels, blur it
        if (
            !global.dashToPanel.panels
                .map(p => p.panel)
                .includes(Main.panel)
        )
            this.maybe_blur_panel(Main.panel);
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
        else
            // if it is blurred, update the blur anyway
            this.change_blur_type(actors);
    }

    /// Blur a panel
    blur_panel(panel) {
        let panel_box = panel.get_parent();
        let is_dtp_panel = false;
        if (!panel_box.name) {
            is_dtp_panel = true;
            panel_box = panel_box.get_parent();
        }

        let monitor = this.find_monitor_for(panel);
        if (!monitor)
            return;

        let background_parent = new St.Widget({
            name: 'topbar-blurred-background-parent',
            x: 0, y: 0, width: 0, height: 0
        });

        let background = this.prefs.panel.STATIC_BLUR
            ? new Meta.BackgroundActor
            : new St.Widget;

        background_parent.add_child(background);

        // insert background parent
        panel_box.insert_child_at_index(background_parent, 0);

        let blur = new Shell.BlurEffect({
            brightness: this.prefs.panel.CUSTOMIZE
                ? this.prefs.panel.BRIGHTNESS
                : this.prefs.BRIGHTNESS,
            sigma: this.prefs.panel.CUSTOMIZE
                ? this.prefs.panel.SIGMA
                : this.prefs.SIGMA
                * monitor.geometry_scale,
            mode: this.prefs.panel.STATIC_BLUR
                ? Shell.BlurMode.ACTOR
                : Shell.BlurMode.BACKGROUND
        });

        // store the scale in the effect in order to retrieve it in set_sigma
        blur.scale = monitor.geometry_scale;

        let color = new ColorEffect({
            color: this.prefs.panel.CUSTOMIZE
                ? this.prefs.panel.COLOR
                : this.prefs.COLOR
        });

        let noise = new NoiseEffect({
            noise: this.prefs.panel.CUSTOMIZE
                ? this.prefs.panel.NOISE_AMOUNT
                : this.prefs.NOISE_AMOUNT,
            lightness: this.prefs.panel.CUSTOMIZE
                ? this.prefs.panel.NOISE_LIGHTNESS
                : this.prefs.NOISE_LIGHTNESS
        });

        let paint_signals = new PaintSignals(this.connections);

        let actors = {
            widgets: { panel, panel_box, background, background_parent },
            effects: { blur, color, noise },
            paint_signals,
            monitor,
            is_dtp_panel
        };

        this.actors_list.push(actors);

        // perform updates
        this.change_blur_type(actors);

        // connect to panel, panel_box and its parent position or size change
        // this should fire update_size every time one of its params change
        this.connections.connect(
            panel,
            'notify::position',
            _ => this.update_size(actors)
        );
        this.connections.connect(
            panel_box,
            ['notify::size', 'notify::position'],
            _ => this.update_size(actors)
        );
        this.connections.connect(
            panel_box.get_parent(),
            'notify::position',
            _ => this.update_size(actors)
        );
    }

    update_all_blur_type() {
        this.actors_list.forEach(actors => this.change_blur_type(actors));
    }

    change_blur_type(actors) {
        let is_static = this.prefs.panel.STATIC_BLUR;

        // reset widgets to right state
        actors.widgets.background_parent.remove_child(actors.widgets.background);
        actors.widgets.background.remove_effect(actors.effects.blur);
        actors.widgets.background.remove_effect(actors.effects.color);
        actors.widgets.background.remove_effect(actors.effects.noise);

        // create new background actor
        actors.widgets.background = is_static
            ? new Meta.BackgroundActor
            : new St.Widget;

        // change blur mode
        actors.effects.blur.set_mode(is_static ? 0 : 1);

        // disable other effects if the blur is dynamic, as they makes it opaque
        actors.effects.color._static = is_static;
        actors.effects.noise._static = is_static;
        actors.effects.color.update_enabled();
        actors.effects.noise.update_enabled();

        // add the effects in order
        actors.widgets.background.add_effect(actors.effects.color);
        actors.widgets.background.add_effect(actors.effects.noise);
        actors.widgets.background.add_effect(actors.effects.blur);

        // add the background actor behing the panel
        actors.widgets.background_parent.add_child(actors.widgets.background);

        // perform updates
        this.update_wallpaper(actors);
        this.update_size(actors);


        // HACK
        //
        //`Shell.BlurEffect` does not repaint when shadows are under it. [1]
        //
        // This does not entirely fix this bug (shadows caused by windows
        // still cause artifacts), but it prevents the shadows of the panel
        // buttons to cause artifacts on the panel itself
        //
        // [1]: https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

        if (!is_static) {
            if (this.prefs.HACKS_LEVEL === 1) {
                this._log("panel hack level 1");
                actors.paint_signals.disconnect_all();

                let rp = () => { actors.effects.blur.queue_repaint(); };

                this.connections.connect(actors.widgets.panel, [
                    'enter-event', 'leave-event', 'button-press-event'
                ], rp);

                actors.widgets.panel.get_children().forEach(child => {
                    this.connections.connect(child, [
                        'enter-event', 'leave-event', 'button-press-event'
                    ], rp);
                });
            } else if (this.prefs.HACKS_LEVEL === 2) {
                this._log("panel hack level 2");
                actors.paint_signals.disconnect_all();

                actors.paint_signals.connect(
                    actors.widgets.background, actors.effects.blur
                );
            } else {
                actors.paint_signals.disconnect_all();
            }
        }
    }

    update_wallpaper(actors) {
        // if static blur, get right wallpaper and update blur with it
        if (this.prefs.panel.STATIC_BLUR) {
            let bg = Main.layoutManager._backgroundGroup.get_child_at_index(
                Main.layoutManager.monitors.length
                - this.find_monitor_for(actors.widgets.panel).index - 1
            );
            if (bg)
                actors.widgets.background.set_content(bg.get_content());
            else
                this._log("could not get background for panel");
        }
    }

    update_size(actors) {
        let panel = actors.widgets.panel;
        let panel_box = actors.widgets.panel_box;
        let background = actors.widgets.background;
        let monitor = this.find_monitor_for(panel);
        if (!monitor)
            return;

        let [width, height] = panel_box.get_size();
        background.width = width;
        background.height = height;

        // if static blur, need to clip the background
        if (this.prefs.panel.STATIC_BLUR) {
            // an alternative to panel.get_transformed_position, because it
            // sometimes yields NaN (probably when the actor is not fully
            // positionned yet)
            let [p_x, p_y] = panel_box.get_position();
            let [p_p_x, p_p_y] = panel_box.get_parent().get_position();
            let x = p_x + p_p_x - monitor.x;
            let y = p_y + p_p_y - monitor.y;

            background.set_clip(x, y, width, height);
            background.x = -x;
            background.y = -y;

            // fixes a bug where the blur is washed away when changing the sigma
            this.invalidate_blur(actors);
        } else {
            background.x = panel.x;
            background.y = panel.y;
        }

        // update the monitor panel is on
        actors.monitor = this.find_monitor_for(panel);
    }

    /// An helper function to find the monitor in which an actor is situated,
    /// there might be a pre-existing function in GLib already
    find_monitor_for(actor) {
        let extents = actor.get_transformed_extents();
        let rect = new Meta.Rectangle({
            x: extents.get_x(),
            y: extents.get_y(),
            width: extents.get_width(),
            height: extents.get_height(),
        });

        let index = global.display.get_monitor_index_for_rect(rect);

        return Main.layoutManager.monitors[index];
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
            this.prefs.panel.BLUR &&
            this.prefs.panel.UNBLUR_IN_OVERVIEW
        ) {
            if (!this.prefs.hidetopbar.COMPATIBILITY) {
                this.connections.connect(
                    Main.overview, 'showing', this.hide.bind(this)
                );
                this.connections.connect(
                    Main.overview, 'hidden', this.show.bind(this)
                );
            } else {
                let appDisplay = Main.overview._overview._controls._appDisplay;

                this.connections.connect(
                    appDisplay, 'show', this.hide.bind(this)
                );
                this.connections.connect(
                    appDisplay, 'hide', this.show.bind(this)
                );
            }

        }
    }

    /// Connect to windows disable transparency when a window is too close
    connect_to_windows() {
        if (
            this.prefs.panel.OVERRIDE_BACKGROUND_DYNAMICALLY
        ) {
            // connect to overview opening/closing
            this.connections.connect(Main.overview, ['showing', 'hiding'],
                this.update_visibility.bind(this)
            );

            // connect to session mode update
            this.connections.connect(Main.sessionMode, 'updated',
                this.update_visibility.bind(this)
            );

            // manage already-existing windows
            for (const meta_window_actor of global.get_window_actors()) {
                this.on_window_actor_added(
                    meta_window_actor.get_parent(), meta_window_actor
                );
            }

            // manage windows at their creation/removal
            this.connections.connect(global.window_group, 'actor-added',
                this.on_window_actor_added.bind(this)
            );
            this.connections.connect(global.window_group, 'actor-removed',
                this.on_window_actor_removed.bind(this)
            );

            // connect to a workspace change
            this.connections.connect(global.window_manager, 'switch-workspace',
                this.update_visibility.bind(this)
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
            Main.panel.has_style_pseudo_class('overview')
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

                    // if so, and if in the same monitor, then it overlaps
                    if (same_monitor
                        &&
                        window_vertical_pos < panel_bottom + 5 * scale
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

        if (
            this.prefs.panel.OVERRIDE_BACKGROUND
            &&
            should_override
        )
            panel.add_style_class_name(
                PANEL_STYLES[this.prefs.panel.STYLE_PANEL]
            );
    }

    /// Fixes a bug where the blur is washed away when changing the sigma, or
    /// enabling/disabling other effects.
    invalidate_blur(actors) {
        if (this.prefs.panel.STATIC_BLUR && actors.widgets.background)
            actors.widgets.background.get_content().invalidate();
    }

    invalidate_all_blur() {
        this.actors_list.forEach(actors => this.invalidate_blur(actors));
    }

    set_sigma(s) {
        this.actors_list.forEach(actors => {
            actors.effects.blur.sigma = s * actors.effects.blur.scale;
            this.invalidate_blur(actors);
        });
    }

    set_brightness(b) {
        this.actors_list.forEach(actors => {
            actors.effects.blur.brightness = b;
        });
    }

    set_color(c) {
        this.actors_list.forEach(actors => {
            actors.effects.color.color = c;
        });
    }

    set_noise_amount(n) {
        this.actors_list.forEach(actors => {
            actors.effects.noise.noise = n;
        });
    }

    set_noise_lightness(l) {
        this.actors_list.forEach(actors => {
            actors.effects.noise.lightness = l;
        });
    }

    show() {
        this.actors_list.forEach(actors => {
            actors.widgets.background_parent.show();
        });
    }

    hide() {
        this.actors_list.forEach(actors => {
            actors.widgets.background_parent.hide();
        });
    }

    disable() {
        this._log("removing blur from top panel");

        this.disconnect_from_windows_and_overview();

        this.actors_list.forEach(actors => {
            this.set_should_override_panel(actors, false);
            try {
                actors.widgets.panel_box.remove_child(
                    actors.widgets.background_parent
                );
            } catch (e) { }

        });

        this.actors_list = [];

        this.connections.disconnect_all();

        this.enabled = false;
    }

    _log(str) {
        if (this.prefs.DEBUG)
            log(`[Blur my Shell > panel]        ${str}`);
    }
};
