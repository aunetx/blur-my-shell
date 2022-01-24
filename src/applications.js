'use strict';

const {Shell, Clutter, Meta, GLib} = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
const PaintSignals = Me.imports.paint_signals;

var ApplicationsBlur = class ApplicationsBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.prefs = prefs;
        this.paint_signals = new PaintSignals.PaintSignals(connections);
        this.effect = new Shell.BlurEffect({
            brightness: prefs.BRIGHTNESS.get(),
            sigma: prefs.SIGMA.get(),
            mode: Shell.BlurMode.BACKGROUND
        });

        // TODO rehaul this code, 3 maps is not an elegant solution (just legacy code from blur-provider for testing)
        this.actorMap = new Map();
        //this._windowMap = new Map();
        this.blurActorMap = new Map();
        // this._on_actor_visibleMap = new Map();
    }

    enable() {
        this._log("blurring applications...");
        // iterate through existing windows and add blur as needed
        for (let workspace = 0; workspace < global.workspace_manager.get_n_workspaces(); ++workspace){
            let metaWorkspace = global.workspace_manager.get_workspace_by_index(workspace);
            let windows = metaWorkspace.list_windows();
            windows.forEach((meta_window) => {
                let window_actor = meta_window.get_compositor_private();
                this.track_new(window_actor, meta_window);
            })
        }

        this.connections.connect(global.display, 'window-created', (meta_display, meta_window) => {
            log("window created");
            if (!meta_window) {
                this._log("no meta window");
                return;
            }
            let window_actor = meta_window.get_compositor_private();
            this.track_new(window_actor, meta_window);
        });

        // workaround for blur being in front of target windows
        this.connections.connect(global.display, 'notify::focus-window', () => {
            if (this.blurActorMap.size > 0) {
                let callbackId = Meta.later_add(Meta.LaterType.BEFORE_REDRAW, () => {
                    this.blurActorMap.forEach((blurActor, pid) => {
                        let actor = this.actorMap.get(pid);
                        if (actor.get_parent() === blurActor.get_parent()){
                            global.window_group.set_child_below_sibling(blurActor, actor);
                        }
                    })
                })
            }
        })


    }

    track_new(window_actor, meta_window) {
        let pid = new Date().valueOf();

        window_actor['blur_provider_pid'] = pid;
        meta_window['blur_provider_pid'] = pid;
        // this._actorMap.set(pid, actor);
        //this._windowMap.set(pid, window);
        // might be able to use connections class, need to make sure we can get the on actor destroyed signal to
        // cleanup blur
        this.connections.connect(window_actor, 'destroy', (window_actor) => {
            let pid = window_actor.blur_provider_pid;
            if (this.blurActorMap.has(pid)) {
                // Blur.remove_blur(pid);
                this.remove_blur(pid)
            }
        });
        //this._on_actor_destroyedMap.set(pid, actor.connect('destroy', _actor_destroyed));

        this.connections.connect(meta_window, 'notify::mutter-hints', (meta_window) => {
            this._log("mutter-hint changed");
            // Blur.update_blur(meta_window, meta_window.blur_provider_pid)
            let pid = meta_window.blur_provider_pid;
            let window_actor = meta_window.get_compositor_private();
            this.update_blur(window_actor, meta_window, pid)
        });
        //this._on_mutter_hint_changedMap.set(pid, window.connect('notify::mutter-hints', _mutter_hint_changed));

        // Blur.update_blur(window, pid)
        this.update_blur(window_actor, meta_window, pid);
    }

    // this method is basically a catch-all for blurring windows. It handles the decisions to call different methods
    // that handle removing, setting, and blurActorMapupdating blur
    update_blur(window_actor, meta_window, pid) {
        let mutter_hint = meta_window.get_mutter_hints();
        this._log("updating blur for blur-pid " + pid)
        if (mutter_hint != null && mutter_hint.includes("blur-provider")) {
            let sigma = this.parse_sigma_value(mutter_hint);
            // let brightness = this.prefs.BRIGHTNESS.get();
            let use_extension_blur = false;
            if (sigma == null || (sigma < 0 && sigma > 111)) {
                this._log("sigma value is null or outside of range (0-111), defaulting to extension setting")
                use_extension_blur = true;
                sigma = -1;
            }

            if (this.blurActorMap.has(pid)) {
                if (sigma === 0) {
                    this.remove_blur(pid);
                } else {
                    this._update_blur(this.blurActorMap.get(pid), sigma, use_extension_blur);
                }
            } else if (sigma !== 0) { // don't set blur if it is 0
                this._set_blur(pid, window_actor, meta_window, sigma, use_extension_blur)
            }
        } else if (this.blurActorMap.has(pid)) {
            this.remove_blur(pid); // remove blur if the mutter_hint no longer contains our blur-provider value
        }
    }

    _set_blur(pid, window_actor, meta_window, sigma, use_extension_blur){
        let blurActor = this._create_blur_actor(meta_window, window_actor, sigma, use_extension_blur);
        // if (this.prefs.HACKS_LEVEL.get() === 2){
        //     this._log("applications hack level 2");
        //     this.paint_signals.disconnect_all();
        //     this.paint_signals.connect(blurActor, this.effect);
        // } else {
        //     this.paint_signals.disconnect_all();
        // }

        global.window_group.insert_child_below(blurActor, window_actor);

        blurActor['blur_provider_pid'] = pid;
        this.blurActorMap.set(pid, blurActor);
        this.actorMap.set(pid, window_actor);

        this.connections.connect(window_actor, 'notify::visible', (window_actor) => {
            let pid = window_actor.blur_provider_pid;
            if (window_actor.visible) {
                //log("actor visible");
                this.blurActorMap.get(pid).show();
                // global.window_group.set_child_below_sibling(this.blurActorMap.get(pid), window_actor);
            } else {
                //log("actor not visible");
                this.blurActorMap.get(pid).hide();
            }
        });
        //Tracking.connect_actor_visible(pid);
    }

    _create_blur_actor(meta_window, window_actor, sigma, use_extension_blur) {
        let blurEffect = this.effect;
        if (!use_extension_blur){
            // if sigma is not null, use the provided sigma value
            blurEffect = new Shell.BlurEffect({sigma: sigma, mode: Shell.BlurMode.BACKGROUND});
        }

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


        let blurActor = new Clutter.Actor();
        // blurActor.paint = function() {
        //     global.window_group.set_child_below_sibling(_blurActorMap.get(pid), _actorMap.get(pid));
        //     log("vfunc_paint");
        //     this.paint();
        // }
        blurActor.add_constraint(constraintPosX);
        blurActor.add_constraint(constraintPosY);
        blurActor.add_constraint(constraintSizeX);
        blurActor.add_constraint(constraintSizeY);

        blurActor.add_effect_with_name('blur-effect', blurEffect);
        return blurActor;
    }

    _update_blur(blur_actor, sigma, use_extension_blur) {
        let blurEffect = this.effect;
        if (!use_extension_blur){
            // if sigma is not null, use the provided sigma value
            blurEffect = new Shell.BlurEffect({sigma: sigma, mode: Shell.BlurMode.BACKGROUND});
        }
        blur_actor.remove_effect_by_name('blur-effect');
        blur_actor.add_effect_with_name('blur-effect', blurEffect);
    }

    remove_blur(pid){
        global.window_group.remove_actor(this.blurActorMap.get(pid));
        this.blurActorMap.delete(pid);
    }

    parse_sigma_value(property) {
        let result = property.match("(blur-provider=)(\\d{1,3})")
        //log(result);
        if (result == null) { // return -1 if result is null
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

    set_sigma(s) {
        this.effect.sigma = s;
    }

    set_brightness(b) {
        this.effect.brightness = b;
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}