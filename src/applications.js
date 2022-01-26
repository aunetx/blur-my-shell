'use strict';

const { Shell, Clutter, Meta, GLib } = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
const PaintSignals = Me.imports.paint_signals;

var ApplicationsBlur = class ApplicationsBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.prefs = prefs;
        this.paint_signals = new PaintSignals.PaintSignals(connections);

        // stores every blurred window
        this.window_map = new Map();
        // stores every blur actor
        this.blur_actor_map = new Map();
    }

    enable() {
        this._log("blurring applications...");

        // iterate through existing windows and add blur as needed
        for (
            let i = 0;
            i < global.workspace_manager.get_n_workspaces();
            ++i
        ) {
            let workspace = global.workspace_manager.get_workspace_by_index(i);
            let windows = workspace.list_windows();

            windows.forEach(meta_window => {
                let window_actor = meta_window.get_compositor_private();
                this.track_new(window_actor, meta_window);
            });
        }

        // blur every new window
        this.connections.connect(
            global.display,
            'window-created',
            (_meta_display, meta_window) => {
                this._log("window created");

                if (meta_window) {
                    let window_actor = meta_window.get_compositor_private();
                    this.track_new(window_actor, meta_window);
                }
            }
        );

        // workaround for blur being in front of target windows
        this.connections.connect(global.display, 'notify::focus-window', _ => {
            if (this.blur_actor_map.size > 0) {
                Meta.later_add(Meta.LaterType.BEFORE_REDRAW, _ => {
                    this.blur_actor_map.forEach((blur_actor, pid) => {
                        let window = this.window_map.get(pid);
                        let actor = window.get_compositor_private();

                        if (
                            actor !== null &&
                            actor.get_parent() === blur_actor.get_parent()
                        ) {
                            global.window_group.set_child_below_sibling(
                                blur_actor,
                                actor
                            );
                        }
                    });
                });
            }
        });
    }

    /// Blurs and add the needed signals to every new tracked window.
    track_new(window_actor, meta_window) {
        let pid = Date.now();

        window_actor['blur_provider_pid'] = pid;
        meta_window['blur_provider_pid'] = pid;

        // remove the blur when the window is destroyed
        this.connections.connect(window_actor, 'destroy', (window_actor) => {
            let pid = window_actor.blur_provider_pid;
            if (this.blur_actor_map.has(pid)) {
                this.remove_blur(pid);
            }
        });

        // update the blur when the mutter-hint is changed
        this.connections.connect(
            meta_window,
            'notify::mutter-hints',
            _ => {
                this._log("mutter-hint changed");
                let pid = meta_window.blur_provider_pid;
                let window_actor = meta_window.get_compositor_private();
                this.update_blur(window_actor, meta_window, pid);
            });

        this.update_blur(window_actor, meta_window, pid);
    }

    /// This method is basically a catch-all for blurring windows.
    ///
    /// It handles the decisions to call different methods that handle removing,
    /// setting, and updating blur.
    update_blur(window_actor, meta_window, pid) {
        let mutter_hint = meta_window.get_mutter_hints();

        // check if the window wants blur and update it accordingly
        if (mutter_hint != null && mutter_hint.includes("blur-provider")) {
            // get blur effect parameters
            let sigma = this.parse_sigma_value(mutter_hint);
            let brightness = this.prefs.APPLICATIONS_GENERAL_VALUES.get()
                ? this.prefs.BRIGHTNESS.get()
                : this.prefs.APPLICATIONS_BRIGHTNESS.get();

            // if the provided sigma value is incorrect
            if (sigma == null || sigma < 0 || sigma > 111) {
                this._log("sigma value is null or outside of range (0-111), defaulting to extension setting");

                sigma = this.prefs.APPLICATIONS_GENERAL_VALUES.get()
                    ? this.prefs.SIGMA.get()
                    : this.prefs.APPLICATIONS_SIGMA.get();;
            }

            // check wether the actor is already blurred and act consequently
            if (this.blur_actor_map.has(pid)) {
                if (sigma == 0) {
                    // actor already blurred, should not be anymore
                    this.remove_blur(pid);
                } else {
                    // actor already blurred, update it
                    this.update_blur_effect(
                        this.blur_actor_map.get(pid),
                        sigma,
                        brightness
                    );
                }
            } else if (sigma != 0) {
                // actor not blurred, blur it
                this.set_blur(
                    pid,
                    window_actor,
                    meta_window,
                    this.create_blur_effect(sigma, brightness)
                );
            }
        } else if (this.blur_actor_map.has(pid)) {
            // remove blur if the mutter_hint no is no longer valid
            this.remove_blur(pid);
        }
    }

    /// Returns a new blur effect.
    create_blur_effect(sigma, brightness) {
        return new Shell.BlurEffect({
            sigma: sigma,
            brightness: brightness,
            mode: Shell.BlurMode.BACKGROUND
        });
    }

    /// Add the blur effect to the actor.
    set_blur(pid, window_actor, meta_window, blur_effect) {
        let blur_actor = this.create_blur_actor(
            meta_window,
            window_actor,
            blur_effect
        );

        // if hacks are selected, force to repaint the window
        if (this.prefs.HACKS_LEVEL.get() >= 1) {
            this._log("applications hack level 1 or 2");

            this.paint_signals.disconnect_all();
            this.paint_signals.connect(blur_actor, blur_effect);
        } else {
            this.paint_signals.disconnect_all();
        }

        global.window_group.insert_child_below(blur_actor, window_actor);

        // registed the blur actor/effect
        blur_actor['blur_provider_pid'] = pid;
        this.blur_actor_map.set(pid, blur_actor);
        this.window_map.set(pid, meta_window);

        // hide the blur if window become invisible
        this.connections.connect(
            window_actor,
            'notify::visible',
            window_actor => {
                let pid = window_actor.blur_provider_pid;
                if (window_actor.visible) {
                    this.blur_actor_map.get(pid).show();
                } else {
                    this.blur_actor_map.get(pid).hide();
                }
            }
        );
    }

    /// Returns a new already blurred widget, configured to follow the size and
    /// position of its target window.
    create_blur_actor(meta_window, window_actor, blur_effect) {
        // create the constraints in size and position to its target window
        let frame = meta_window.get_frame_rect();
        let buffer = meta_window.get_buffer_rect();

        const offset_x = frame.x - buffer.x;
        const offset_y = frame.y - buffer.y;
        const offset_width = buffer.width - frame.width;
        const offset_height = buffer.height - frame.height;

        let constraint_x = new Clutter.BindConstraint({
            source: window_actor,
            coordinate: Clutter.BindCoordinate.X,
            offset: offset_x
        });
        let constraint_y = new Clutter.BindConstraint({
            source: window_actor,
            coordinate: Clutter.BindCoordinate.Y,
            offset: offset_y
        });

        let constraint_width = new Clutter.BindConstraint({
            source: window_actor,
            coordinate: Clutter.BindCoordinate.WIDTH,
            offset: -offset_width
        });
        let constraint_height = new Clutter.BindConstraint({
            source: window_actor,
            coordinate: Clutter.BindCoordinate.HEIGHT,
            offset: -offset_height
        });

        // create the actor and add the constraints
        let blur_actor = new Clutter.Actor();
        blur_actor.add_constraint(constraint_x);
        blur_actor.add_constraint(constraint_y);
        blur_actor.add_constraint(constraint_width);
        blur_actor.add_constraint(constraint_height);

        // add the effect
        blur_actor.add_effect_with_name('blur-effect', blur_effect);

        return blur_actor;
    }

    /// Updates the blur effect by overwriting its sigma and brightness values.
    update_blur_effect(blur_actor, sigma, brightness) {
        let effect = blur_actor.get_effect('blur-effect');
        effect.sigma = sigma;
        effect.brightness = brightness;
    }

    /// Removes the blur actor from the shell and unregister it.
    remove_blur(pid) {
        // global.window_group is null when restarting the shell, causing an
        // innocent crash
        if (global.window_group == null)
            return;

        global.window_group.remove_actor(this.blur_actor_map.get(pid));
        this.blur_actor_map.delete(pid);
        this.window_map.delete(pid);
    }

    /// When given the xprop property, returns either a valid sigma value
    /// between 0 and 111, or null if the parsing is incorrect.
    parse_sigma_value(property) {
        let result = property.match("(blur-provider=)(\\d{1,3})");

        if (result == null) {
            return null;
        } else {
            return result[2];
        }
    }

    disable() {
        this._log("removing blur from applications...");

        this.blur_actor_map.forEach(((value, key) => {
            this.remove_blur(key);
        }));

        this.connections.disconnect_all();
        this.paint_signals.disconnect_all();
    }

    /// Updates each blur effect to use new sigma value
    set_sigma(s) {
        this.blur_actor_map.forEach((actor, _) => {
            actor.get_effect('blur-effect').set_sigma(s);
        });
    }

    /// Updates each blur effect to use new brightness value
    set_brightness(b) {
        this.blur_actor_map.forEach((actor, _) => {
            actor.get_effect('blur-effect').set_brightness(b);
        });
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`);
    }
};