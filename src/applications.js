'use strict';

const {Shell, Clutter, Meta, GLib} = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
let prefs = new Settings.Prefs;

var ApplicationsBlur = class ApplicationsBlur {
    constructor(connections) {
        this.connections = connections;
        // TODO rehaul this code, 3 maps is not an elegant solution (just legacy code from blur-provider for testing)
        this._actorMap = new Map();
        //this._windowMap = new Map();
        this.blurActorMap = new Map();
        this._on_actor_visibleMap = new Map();
    }

    enable() {
        this._log("blurring applications...");
        // TODO add code to iterate through existing windows and add blur as needed

        this.connections.connect(global.display, 'window-created', (meta_display, meta_window) => {
            log("window created");
            if (!meta_window) {
                this._log("no meta window");
                return;
            }
            let window_actor = meta_window.get_compositor_private();
            this.track_new(window_actor, meta_window);
        });


    }

    track_new(actor, window) {
        let pid = new Date().valueOf();

        actor['blur_provider_pid'] = pid;
        window['blur_provider_pid'] = pid;
        this._actorMap.set(pid, actor);
        //this._windowMap.set(pid, window);
        // might be able to use connections class, need to make sure we can get the on actor destroyed signal to
        // cleanup blur
        this.connections.connect(actor, 'destroy', (window_actor) => {
            let pid = window_actor.blur_provider_pid;
            if (this.blurActorMap.has(pid)) {
                // TODO Blur.remove_blur(pid);
            }
        });
        //this._on_actor_destroyedMap.set(pid, actor.connect('destroy', _actor_destroyed));

        this.connections.connect(window, 'notify::mutter-hints', (meta_window) => {
            this._log("mutter-hint changed");
            // TODO Blur.update_blur(meta_window, meta_window.blur_provider_pid)
        });
        //this._on_mutter_hint_changedMap.set(pid, window.connect('notify::mutter-hints', _mutter_hint_changed));

        // TODO Blur.update_blur(window, pid)
    }

    update_blur(window, pid) {
        let mutter_hint = window.get_mutter_hints();
        if (mutter_hint != null && mutter_hint.includes("blur-provider")) {
            let sigma = this.parse_sigma_value(mutter_hint);
            let brightness = prefs.BRIGHTNESS.get();
            if (sigma == null || (sigma < 0 && sigma > 111)) {
                this._log("sigma value is null or outside of range (0-111), defaulting to extension setting")
                sigma = prefs.SIGMA.get();
                //Tracking.set_uses_default_blur(pid);
            } else {
                //Tracking.remove_uses_default_blur(pid);
            }

            if (this.blurActorMap.has(pid)) {
                if (sigma === 0) {
                    this.remove_blur(pid);
                } else {
                    this._update_blur(this.blurActorMap.get(pid), sigma, brightness);
                }
            } else if (sigma !== 0) { // don't set blur if it is 0
                _set_blur(pid, Tracking.get_actor(pid), Tracking.get_window(pid), sigma)
            }
        } else if (Tracking.has_blur_actor(pid)) {
            remove_blur(pid); // remove blur if the mutter_hint no longer contains our blur-provider value
        }
    }

    _set_blur(pid, actor, window, sigma, brightness){
        let blurActor = this._create_blur_actor(window, actor, sigma, brightness);
        global.window_group.insert_child_below(blurActor, actor);
        blurActor['blur_provider_pid'] = pid;
        this.blurActorMap.set(pid, blurActor);

        this.connections.connect(actor, 'notify::visible', (window_actor) => {
            let pid = window_actor.blur_provider_pid;
            if (window_actor.visible) {
                //log("actor visible");
                this.blurActorMap.get(pid).show();
            } else {
                //log("actor not visible");
                this.blurActorMap.get(pid).hide();
            }
        });
        //Tracking.connect_actor_visible(pid);
    }

    _create_blur_actor(meta_window, window_actor, sigma_value, brightness_value) {
        let blurEffect = new Shell.BlurEffect({sigma: sigma_value, brightness: brightness_value, mode: Shell.BlurMode.BACKGROUND});

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

    _update_blur(blur_actor, sigma, brightness) {
        let blurEffect = new Shell.BlurEffect({sigma: sigma, brightness: brightness, mode: Shell.BlurMode.BACKGROUND});
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
    }

    set_sigma(s) {
        // TODO
    }

    set_brightness(s) {
        // TODO
    }

    _log(str) {
        log(`[Blur my Shell] ${str}`)
    }
}