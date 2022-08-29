'use strict';

const { Shell, Clutter, Meta, GLib } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { PaintSignals } = Me.imports.effects.paint_signals;
const { ApplicationsService } = Me.imports.dbus.services;

var ApplicationsBlur = class ApplicationsBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.prefs = prefs;
        this.paint_signals = new PaintSignals(connections);

        // stores every blurred window
        this.window_map = new Map();
        // stores every blur actor
        this.blur_actor_map = new Map();
    }

    enable() {
        this._log("blurring applications...");

        // export dbus service for preferences
        this.service = new ApplicationsService;
        this.service.export();

        // blur already existing windows
        this.update_all_windows();

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

        this.connect_to_overview();
    }

    /// Connect to the overview being opened/closed to force the blur being
    /// shown on every window of the workspaces viewer.
    connect_to_overview() {
        this.connections.disconnect_all_for(Main.overview);

        if (this.prefs.applications.BLUR_ON_OVERVIEW) {
            // when the overview is opened, show every window actors (which
            // allows the blur to be shown too)
            this.connections.connect(
                Main.overview, 'showing',
                _ => this.window_map.forEach((meta_window, _pid) => {
                    let window_actor = meta_window.get_compositor_private();
                    window_actor.show();
                })
            );

            // when the overview is closed, hide every actor that is not on the
            // current workspace (to mimic the original behaviour)
            this.connections.connect(
                Main.overview, 'hidden',
                _ => {
                    let active_workspace =
                        global.workspace_manager.get_active_workspace();

                    this.window_map.forEach((meta_window, _pid) => {
                        let window_actor = meta_window.get_compositor_private();

                        if (
                            meta_window.get_workspace() !== active_workspace
                        )
                            window_actor.hide();
                    });
                }
            );
        }
    }

    /// Iterate through all existing windows and add blur as needed.
    update_all_windows() {
        // remove all previously blurred windows, in the case where the
        // whitelist was changed
        this.window_map.forEach(((_meta_window, pid) => {
            this.remove_blur(pid);
        }));

        for (
            let i = 0;
            i < global.workspace_manager.get_n_workspaces();
            ++i
        ) {
            let workspace = global.workspace_manager.get_workspace_by_index(i);
            let windows = workspace.list_windows();

            windows.forEach(meta_window => {
                let window_actor = meta_window.get_compositor_private();

                // disconnect previous signals
                this.connections.disconnect_all_for(window_actor);

                this.track_new(window_actor, meta_window);
            });
        }
    }

    /// Adds the needed signals to every new tracked window, and adds blur if
    /// needed.
    track_new(window_actor, meta_window) {
        let pid = ("" + Math.random()).slice(2, 16);

        window_actor['blur_provider_pid'] = pid;
        meta_window['blur_provider_pid'] = pid;

        // remove the blur when the window is destroyed
        this.connections.connect(window_actor, 'destroy', window_actor => {
            let pid = window_actor.blur_provider_pid;
            if (this.blur_actor_map.has(pid)) {
                this.remove_blur(pid);
            }
            this.window_map.delete(pid);
        });

        // update the blur when mutter-hint or wm-class is changed
        for (const prop of ['mutter-hints', 'wm-class']) {
            this.connections.connect(
                meta_window,
                `notify::${prop}`,
                _ => {
                    let pid = meta_window.blur_provider_pid;
                    this._log(`${prop} changed for pid ${pid}`);

                    let window_actor = meta_window.get_compositor_private();
                    this.check_blur(pid, window_actor, meta_window);
                }
            );
        }

        // update the position and size when the window size changes
        this.connections.connect(meta_window, 'size-changed', () => {
            if (this.blur_actor_map.has(pid)) {
                let allocation = this.compute_allocation(meta_window);
                let blur_actor = this.blur_actor_map.get(pid);
                blur_actor.x = allocation.x;
                blur_actor.y = allocation.y;
                blur_actor.width = allocation.width;
                blur_actor.height = allocation.height;
            }
        });

        this.check_blur(pid, window_actor, meta_window);
    }

    /// Checks if the given actor needs to be blurred.
    ///
    /// In order to be blurred, a window either:
    /// - is whitelisted in the user preferences if not enable-all
    /// - is not blacklisted if enable-all
    /// - has a correct mutter hint, set to `blur-provider=sigma_value`
    check_blur(pid, window_actor, meta_window) {
        let mutter_hint = meta_window.get_mutter_hints();
        let window_wm_class = meta_window.get_wm_class();

        let enable_all = this.prefs.applications.ENABLE_ALL;
        let whitelist = this.prefs.applications.WHITELIST;
        let blacklist = this.prefs.applications.BLACKLIST;

        this._log(`checking blur for ${pid}`);

        // either the window is included in whitelist
        if (window_wm_class !== ""
            && ((enable_all && !blacklist.includes(window_wm_class))
                || (!enable_all && whitelist.includes(window_wm_class))
            )
            && [
                Meta.FrameType.NORMAL,
                Meta.FrameType.DIALOG,
                Meta.FrameType.MODAL_DIALOG
            ].includes(meta_window.get_frame_type())
        ) {
            this._log(`application ${pid} listed, blurring it`);

            // get blur effect parameters

            let brightness, sigma;

            if (this.prefs.applications.CUSTOMIZE) {
                brightness = this.prefs.applications.BRIGHTNESS;
                sigma = this.prefs.applications.SIGMA;
            } else {
                brightness = this.prefs.BRIGHTNESS;
                sigma = this.prefs.SIGMA;
            }

            this.update_blur(pid, window_actor, meta_window, brightness, sigma);
        }

        // or blur is asked by window itself
        else if (
            mutter_hint != null &&
            mutter_hint.includes("blur-provider")
        ) {
            this._log(`application ${pid} has hint ${mutter_hint}, parsing`);

            // get blur effect parameters
            let [brightness, sigma] = this.parse_xprop(mutter_hint);

            this.update_blur(pid, window_actor, meta_window, brightness, sigma);
        }

        // remove blur if the mutter hint is no longer valid, and the window
        // is not explicitly whitelisted or un-blacklisted
        else if (this.blur_actor_map.has(pid)) {
            this.remove_blur(pid);
        }
    }

    /// When given the xprop property, returns the brightness and sigma values
    /// matching. If one of the two values is invalid, or missing, then it uses
    /// default values.
    ///
    /// An xprop property is valid if it is in one of the following formats:
    ///
    ///     blur-provider=sigma:60,brightness:0.9
    ///     blur-provider=s:10,brightness:0.492
    ///     blur-provider=b:1.0,s:16
    ///
    /// Brightness is a floating-point between 0.0 and 1.0 included.
    /// Sigma is an integer between 0 and 999 included.
    ///
    /// If sigma is set to 0, then the blur is removed.
    /// Setting "default" instead of the two values will make the
    /// extension use its default value.
    ///
    /// Note that no space can be inserted.
    ///
    parse_xprop(property) {
        // set brightness and sigma to default values
        let brightness, sigma;
        if (this.prefs.applications.CUSTOMIZE) {
            brightness = this.prefs.applications.BRIGHTNESS;
            sigma = this.prefs.applications.SIGMA;
        } else {
            brightness = this.prefs.BRIGHTNESS;
            sigma = this.prefs.SIGMA;
        }

        // get the argument of the property
        let arg = property.match("blur-provider=(.*)");
        this._log(`argument = ${arg}`);

        // if argument is valid, parse it
        if (arg != null) {
            // verify if there is only one value: in this case, this is sigma
            let maybe_sigma = parseInt(arg[1]);

            if (
                !isNaN(maybe_sigma) &&
                maybe_sigma >= 0 &&
                maybe_sigma <= 999
            ) {
                sigma = maybe_sigma;
            } else {
                // perform pattern matching
                let res_b = arg[1].match("(brightness|b):(default|0?1?\.[0-9]*)");
                let res_s = arg[1].match("(sigma|s):(default|\\d{1,3})");

                // if values are valid and not default, change them to the xprop one
                if (
                    res_b != null && res_b[2] !== 'default'
                ) {
                    brightness = parseFloat(res_b[2]);
                }

                if (
                    res_s != null && res_s[2] !== 'default'
                ) {
                    sigma = parseInt(res_s[2]);
                }
            }
        }

        this._log(`brightness = ${brightness}, sigma = ${sigma}`);

        return [brightness, sigma];
    }

    /// Updates the blur on a window which needs to be blurred.
    update_blur(pid, window_actor, meta_window, brightness, sigma) {
        // the window is already blurred, update its blur effect
        if (this.blur_actor_map.has(pid)) {
            // window is already blurred, but sigma is null: remove the blur
            if (sigma === 0) {
                this.remove_blur(pid);
            }
            // window is already blurred and sigma is non-null: update it
            else {
                this.update_blur_effect(
                    this.blur_actor_map.get(pid),
                    brightness,
                    sigma
                );
            }
        }

        // the window is not blurred, and sigma is a non-null value: blur it
        else if (sigma !== 0) {
            // window is not blurred, blur it
            this.create_blur_effect(
                pid,
                window_actor,
                meta_window,
                brightness,
                sigma
            );
        }
    }

    /// Add the blur effect to the window.
    create_blur_effect(pid, window_actor, meta_window, brightness, sigma) {
        let blur_effect = new Shell.BlurEffect({
            sigma: sigma,
            brightness: brightness,
            mode: Shell.BlurMode.BACKGROUND
        });

        let blur_actor = this.create_blur_actor(
            meta_window,
            window_actor,
            blur_effect
        );

        // if hacks are selected, force to repaint the window
        if (this.prefs.HACKS_LEVEL === 1 || this.prefs.HACKS_LEVEL === 2) {
            this._log("applications hack level 1 or 2");

            this.paint_signals.disconnect_all();
            this.paint_signals.connect(blur_actor, blur_effect);
        } else {
            this.paint_signals.disconnect_all();
        }

        // insert the blurred widget
        window_actor.insert_child_at_index(blur_actor, 0);

        // make sure window is blurred in overview
        if (this.prefs.applications.BLUR_ON_OVERVIEW)
            this.enforce_window_visibility_on_overview_for(window_actor);

        // set the window actor's opacity
        this.set_window_opacity(window_actor, this.prefs.applications.OPACITY);

        // register the blur actor/effect
        blur_actor['blur_provider_pid'] = pid;
        this.blur_actor_map.set(pid, blur_actor);
        this.window_map.set(pid, meta_window);

        // hide the blur if window is invisible
        if (!window_actor.visible) {
            blur_actor.hide();
        }

        // hide the blur if window becomes invisible
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

    /// Makes sure that, when the overview is visible, the window actor will
    /// stay visible no matter what.
    /// We can instead hide the last child of the window actor, which will
    /// improve performances without hiding the blur effect.
    enforce_window_visibility_on_overview_for(window_actor) {
        this.connections.connect(window_actor, 'notify::visible',
            _ => {
                if (this.prefs.applications.BLUR_ON_OVERVIEW) {
                    if (
                        !window_actor.visible
                        && Main.overview.visible
                    ) {
                        window_actor.show();
                        window_actor.get_last_child().hide();
                    }
                    else if (
                        window_actor.visible
                    )
                        window_actor.get_last_child().show();
                }
            }
        );
    }

    /// Set the opacity of the window actor that sits on top of the blur effect.
    set_window_opacity(window_actor, opacity) {
        window_actor.get_children().forEach(child => {
            if (child.name !== "blur-actor")
                child.opacity = opacity;
        });
    }

    /// Compute the size and position for a blur actor.
    /// On wayland, it seems like we need to divide by the scale to get the
    /// correct result.
    compute_allocation(meta_window) {
        const is_wayland = Meta.is_wayland_compositor();
        const monitor_index = meta_window.get_monitor();
        const scale = is_wayland
            ? Main.layoutManager.monitors[monitor_index].geometry_scale
            : 1;

        let frame = meta_window.get_frame_rect();
        let buffer = meta_window.get_buffer_rect();

        return {
            x: (frame.x - buffer.x) / scale,
            y: (frame.y - buffer.y) / scale,
            width: frame.width / scale,
            height: frame.height / scale
        };
    }

    /// Returns a new already blurred widget, configured to follow the size and
    /// position of its target window.
    create_blur_actor(meta_window, window_actor, blur_effect) {
        // compute the size and position
        let allocation = this.compute_allocation(meta_window);

        // create the actor
        let blur_actor = new Clutter.Actor({
            x: allocation.x,
            y: allocation.y,
            width: allocation.width,
            height: allocation.height
        });

        // add the effect
        blur_actor.add_effect_with_name('blur-effect', blur_effect);

        return blur_actor;
    }

    /// Updates the blur effect by overwriting its sigma and brightness values.
    update_blur_effect(blur_actor, brightness, sigma) {
        let effect = blur_actor.get_effect('blur-effect');
        effect.sigma = sigma;
        effect.brightness = brightness;
    }

    /// Removes the blur actor from the shell and unregister it.
    remove_blur(pid) {
        this._log(`removing blur for pid ${pid}`);

        let meta_window = this.window_map.get(pid);
        // disconnect needed signals and untrack window
        if (meta_window) {
            this.window_map.delete(pid);
            let window_actor = meta_window.get_compositor_private();

            let blur_actor = this.blur_actor_map.get(pid);
            if (blur_actor) {
                this.blur_actor_map.delete(pid);

                if (window_actor) {
                    // reset the opacity
                    this.set_window_opacity(window_actor, 255);

                    // remove the blurred actor
                    window_actor.remove_child(blur_actor);

                    // disconnect the signals about overview animation etc
                    this.connections.disconnect_all_for(window_actor);
                }
            }
        }
    }

    disable() {
        this._log("removing blur from applications...");

        this.service?.unexport();

        this.blur_actor_map.forEach(((_blur_actor, pid) => {
            this.remove_blur(pid);
        }));

        this.connections.disconnect_all();
        this.paint_signals.disconnect_all();
    }

    /// Update the opacity of all window actors.
    set_opacity() {
        let opacity = this.prefs.applications.OPACITY;

        this.window_map.forEach(((meta_window, _pid) => {
            let window_actor = meta_window.get_compositor_private();
            this.set_window_opacity(window_actor, opacity);
        }));
    }

    /// Updates each blur effect to use new sigma value
    // FIXME set_sigma and set_brightness are called when the extension is
    // loaded and when sigma is changed, and do not respect the per-app
    // xprop behaviour
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

    // not implemented for dynamic blur
    set_color(c) { }
    set_noise_amount(n) { }
    set_noise_lightness(l) { }

    _log(str) {
        if (this.prefs.DEBUG)
            log(`[Blur my Shell > applications] ${str}`);
    }
};
