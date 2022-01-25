'use strict';

const { Shell, Clutter, Meta, GLib } = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
const PaintSignals = Me.imports.paint_signals;
const BlurMode = Shell.BlurMode;

var ApplicationsBlur = class ApplicationsBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.prefs = prefs;
        this.paint_signals = new PaintSignals.PaintSignals(connections);

        this.windowMap = new Map();
        this.blurActorMap = new Map();
    }

    enable() {
        this._log("blurring applications...");

        // iterate through existing windows and add blur as needed
        for (let workspace = 0; workspace < global.workspace_manager.get_n_workspaces(); ++workspace) {
            let metaWorkspace = global.workspace_manager.get_workspace_by_index(workspace);
            let windows = metaWorkspace.list_windows();
            windows.forEach((meta_window) => {
                let window_actor = meta_window.get_compositor_private();
                this.track_new(window_actor, meta_window);
            })
        }

        // blur every new window
        this.connections.connect(global.display, 'window-created', (meta_display, meta_window) => {
            this._log("window created");
            if (meta_window) {
                let window_actor = meta_window.get_compositor_private();
                this.track_new(window_actor, meta_window);
            }
        });

        // workaround for blur being in front of target windows
        this.connections.connect(global.display, 'notify::focus-window', () => {
            if (this.blurActorMap.size > 0) {
                let callbackId = Meta.later_add(Meta.LaterType.BEFORE_REDRAW, () => {
                    this.blurActorMap.forEach((blurActor, pid) => {
                        let actor = this.windowMap.get(pid).get_compositor_private();
                        if (actor !== null && actor.get_parent() === blurActor.get_parent()) {
                            global.window_group.set_child_below_sibling(blurActor, actor);
                        }
                    })
                })
            }
        })
    }

    // Blurs and add the needed signals to every new tracked window
    track_new(window_actor, meta_window) {
        // TODO change the pid to a more unique one, to prevent collisions?
        let pid = Date.now();

        window_actor['blur_provider_pid'] = pid;
        meta_window['blur_provider_pid'] = pid;

        // remove the blur when the window is destroyed
        this.connections.connect(window_actor, 'destroy', (window_actor) => {
            let pid = window_actor.blur_provider_pid;
            if (this.blurActorMap.has(pid)) {
                this.remove_blur(pid)
            }
        });

        // update the blur when the mutter-hint is changed
        this.connections.connect(meta_window, 'notify::mutter-hints', (meta_window) => {
            this._log("mutter-hint changed");
            let pid = meta_window.blur_provider_pid;
            let window_actor = meta_window.get_compositor_private();
            this.update_blur(window_actor, meta_window, pid)
        });

        this.update_blur(window_actor, meta_window, pid);
    }

    // This method is basically a catch-all for blurring windows. It handles the decisions
    // to call different methods that handle removing, setting, and updating blur
    update_blur(window_actor, meta_window, pid) {
        let mutter_hint = meta_window.get_mutter_hints();

        // check if the window wants blur and update it accordingly
        if (mutter_hint != null && mutter_hint.includes("blur-provider")) {
            // get blur effect parameters
            let sigma = this.parse_sigma_value(mutter_hint);
            let brightness = this.prefs.BRIGHTNESS.get();

            // if the provided sigma value is incorrect
            if (sigma == null || sigma < 0 || sigma > 111) {
                this._log("sigma value is null or outside of range (0-111), defaulting to extension setting")
                sigma = this.prefs.SIGMA.get();
            }

            // check wether the actor is already blurred and act consequently
            if (this.blurActorMap.has(pid)) {
                if (sigma == 0) {
                    // actor already blurred, should not be anymore
                    this.remove_blur(pid);
                } else {
                    // actor already blurred, update it
                    this.update_blur_effect(
                        this.blurActorMap.get(pid),
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
                )
            }
        } else if (this.blurActorMap.has(pid)) {
            // remove blur if the mutter_hint no longer contains our blur-provider value
            this.remove_blur(pid);
        }
    }

    // Returns a new blur effect
    create_blur_effect(sigma, brightness) {
        return new Shell.BlurEffect({
            sigma: sigma,
            brightness: brightness,
            mode: BlurMode.BACKGROUND
        });
    }

    // Add the blur effect to the actor
    set_blur(pid, window_actor, meta_window, blurEffect) {
        let blurActor = this.create_blur_actor(meta_window, window_actor, blurEffect);

        // if hacks are selected, force the repaint the window to prevent artifacts
        if (this.prefs.HACKS_LEVEL.get() >= 1) {
            this._log("applications hack level 1 or 2");
            this.paint_signals.disconnect_all();
            this.paint_signals.connect(blurActor, blurEffect);
        } else {
            this.paint_signals.disconnect_all();
        }

        global.window_group.insert_child_below(blurActor, window_actor);

        // registed the blur actor/effect
        blurActor['blur_provider_pid'] = pid;
        this.blurActorMap.set(pid, blurActor);
        this.windowMap.set(pid, meta_window);

        // hide if window become invisible
        this.connections.connect(window_actor, 'notify::visible', (window_actor) => {
            let pid = window_actor.blur_provider_pid;
            if (window_actor.visible) {
                this.blurActorMap.get(pid).show();
            } else {
                this.blurActorMap.get(pid).hide();
            }
        });
    }

    // Returns a new already blurred widget, configured to follow the size and
    // position of its target window
    create_blur_actor(meta_window, window_actor, blurEffect) {
        // create the constraints in size and position to its target window
        let frame = meta_window.get_frame_rect();
        let buffer = meta_window.get_buffer_rect();

        const offsetX = frame.x - buffer.x;
        const offsetY = frame.y - buffer.y;
        const offsetWidth = buffer.width - frame.width;
        const offsetHeight = buffer.height - frame.height;

        let constraintPosX = new Clutter.BindConstraint({
            source: window_actor,
            coordinate: Clutter.BindCoordinate.X,
            offset: offsetX
        });
        let constraintPosY = new Clutter.BindConstraint({
            source: window_actor,
            coordinate: Clutter.BindCoordinate.Y,
            offset: offsetY
        });

        let constraintSizeX = new Clutter.BindConstraint({
            source: window_actor,
            coordinate: Clutter.BindCoordinate.WIDTH,
            offset: -offsetWidth
        });
        let constraintSizeY = new Clutter.BindConstraint({
            source: window_actor,
            coordinate: Clutter.BindCoordinate.HEIGHT,
            offset: -offsetHeight
        });

        // create the actor and add the constraints
        let blurActor = new Clutter.Actor();
        blurActor.add_constraint(constraintPosX);
        blurActor.add_constraint(constraintPosY);
        blurActor.add_constraint(constraintSizeX);
        blurActor.add_constraint(constraintSizeY);

        // add the effect
        blurActor.add_effect_with_name('blur-effect', blurEffect);

        return blurActor;
    }

    // Updates the blur effect by overwriting its sigma and brightness values
    update_blur_effect(blur_actor, sigma, brightness) {
        let effect = blur_actor.get_effect('blur-effect');
        effect.sigma = sigma;
        effect.brightness = brightness;
    }

    // Removes the blur actor from the shell and unregister it
    remove_blur(pid) {
        // global.window_group is null when restarting the shell, causing an innocent crash crash
        if (global.window_group == null)
            return

        global.window_group.remove_actor(this.blurActorMap.get(pid));
        this.blurActorMap.delete(pid);
        this.windowMap.delete(pid);
    }

    // When given the xprop property, returns either a valid sigma value between 0 and 111
    // or null if the parsing is incorrect
    parse_sigma_value(property) {
        let result = property.match("(blur-provider=)(\\d{1,3})")
        if (result == null) {
            return null;
        } else {
            return result[2];
        }
    }

    disable() {
        this._log("removing blur from applications...");

        this.blurActorMap.forEach(((value, key) => {
            this.remove_blur(key)
        }));
        this.connections.disconnect_all();
        this.paint_signals.disconnect_all();
    }

    // Updates each blur effect to use new sigma value
    set_sigma(s) {
        this.blurActorMap.forEach((actor, _) => {
            actor.get_effect('blur-effect').set_sigma(s)
        })
    }

    // Updates each blur effect to use new brightness value
    set_brightness(b) {
        this.blurActorMap.forEach((actor, _) => {
            actor.get_effect('blur-effect').set_brightness(b)
        })
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}