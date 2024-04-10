import Meta from 'gi://Meta';
import Gio from 'gi://Gio';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { ApplicationsService } from '../dbus/services.js';
import { PaintSignals } from '../conveniences/paint_signals.js';
import { DummyPipeline } from '../conveniences/dummy_pipeline.js';

export const ApplicationsBlur = class ApplicationsBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.paint_signals = new PaintSignals(connections);

        // stores every blurred meta window
        this.meta_window_map = new Map();
    }

    enable() {
        this._log("blurring applications...");

        // export dbus service for preferences
        this.service = new ApplicationsService;
        this.service.export();

        this.mutter_gsettings = new Gio.Settings({ schema: 'org.gnome.mutter' });

        // blur already existing windows
        this.update_all_windows();

        // blur every new window
        this.connections.connect(
            global.display,
            'window-created',
            (_meta_display, meta_window) => {
                this._log("window created");

                if (meta_window)
                    this.track_new(meta_window);
            }
        );

        // update window blur when focus is changed
        this.focused_window_pid = null;
        this.init_dynamic_opacity();
        this.connections.connect(
            global.display,
            'focus-window',
            (_meta_display, meta_window, _p0) => {
                if (meta_window && meta_window.bms_pid != this.focused_window_pid)
                    this.set_focus_for_window(meta_window);
                else if (!meta_window)
                    this.set_focus_for_window(null);
            }
        );

        this.connect_to_overview();
    }

    /// Initializes the dynamic opacity for windows, without touching to the connections.
    /// This is used both when enabling the component, and when changing the dynamic-opacity pref.
    init_dynamic_opacity() {
        if (this.settings.applications.DYNAMIC_OPACITY) {
            // make the currently focused window solid
            if (global.display.focus_window)
                this.set_focus_for_window(global.display.focus_window);
        } else {
            // remove old focused window if the pref was changed
            if (this.focused_window_pid)
                this.set_focus_for_window(null);
        }
    }

    /// Connect to the overview being opened/closed to force the blur being
    /// shown on every window of the workspaces viewer.
    connect_to_overview() {
        this.connections.disconnect_all_for(Main.overview);

        if (this.settings.applications.BLUR_ON_OVERVIEW) {
            // when the overview is opened, show every window actors (which
            // allows the blur to be shown too)
            this.connections.connect(
                Main.overview, 'showing',
                _ => this.meta_window_map.forEach((meta_window, _pid) => {
                    let window_actor = meta_window.get_compositor_private();
                    window_actor?.show();
                })
            );

            // when the overview is closed, hide every actor that is not on the
            // current workspace (to mimic the original behaviour)
            this.connections.connect(
                Main.overview, 'hidden',
                _ => {
                    this.meta_window_map.forEach((meta_window, _pid) => {
                        let window_actor = meta_window.get_compositor_private();

                        if (
                            !meta_window.get_workspace().active
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
        this.meta_window_map.forEach(((_meta_window, pid) => {
            this.remove_blur(pid);
        }));

        for (
            let i = 0;
            i < global.workspace_manager.get_n_workspaces();
            ++i
        ) {
            let workspace = global.workspace_manager.get_workspace_by_index(i);
            let windows = workspace.list_windows();

            windows.forEach(meta_window => this.track_new(meta_window));
        }
    }

    /// Adds the needed signals to every new tracked window, and adds blur if
    /// needed.
    /// Accepts only untracked meta windows (i.e no `bms_pid` set)
    track_new(meta_window) {
        // create a pid that will follow the window during its whole life
        const pid = ("" + Math.random()).slice(2, 16);
        meta_window.bms_pid = pid;

        this._log(`new window tracked, pid: ${pid}`);

        // register the blurred window
        this.meta_window_map.set(pid, meta_window);

        // update the blur when wm-class is changed
        this.connections.connect(
            meta_window, 'notify::wm-class',
            _ => this.check_blur(meta_window)
        );

        // update the position and size when the window size changes
        this.connections.connect(
            meta_window, 'size-changed',
            _ => this.update_size(pid)
        );

        // remove the blur when the window is unmanaged
        this.connections.connect(
            meta_window, 'unmanaging',
            _ => this.untrack_meta_window(pid)
        );

        this.check_blur(meta_window);
    }

    /// Updates the size of the blur actor associated to a meta window from its pid.
    /// Accepts only tracked meta window (i.e `bms_pid` set), be it blurred or not.
    update_size(pid) {
        if (this.meta_window_map.has(pid)) {
            const meta_window = this.meta_window_map.get(pid);
            const blur_actor = meta_window.blur_actor;
            if (blur_actor) {
                const allocation = this.compute_allocation(meta_window);
                blur_actor.x = allocation.x;
                blur_actor.y = allocation.y;
                blur_actor.width = allocation.width;
                blur_actor.height = allocation.height;
            }
        } else
            // the pid was visibly not removed
            this.untrack_meta_window(pid);
    }

    /// Checks if the given actor needs to be blurred.
    /// Accepts only tracked meta window, be it blurred or not.
    ///
    /// In order to be blurred, a window either:
    /// - is whitelisted in the user preferences if not enable-all
    /// - is not blacklisted if enable-all
    check_blur(meta_window) {
        const window_wm_class = meta_window.get_wm_class();
        const enable_all = this.settings.applications.ENABLE_ALL;
        const whitelist = this.settings.applications.WHITELIST;
        const blacklist = this.settings.applications.BLACKLIST;
        if (window_wm_class)
            this._log(`pid ${meta_window.bms_pid} associated to wm class name ${window_wm_class}`);


        // if we are in blacklist mode and the window is not blacklisted
        // or if we are in whitelist mode and the window is whitelisted
        if (
            window_wm_class !== ""
            && ((enable_all && !blacklist.includes(window_wm_class))
                || (!enable_all && whitelist.includes(window_wm_class))
            )
            && [
                Meta.FrameType.NORMAL,
                Meta.FrameType.DIALOG,
                Meta.FrameType.MODAL_DIALOG
            ].includes(meta_window.get_frame_type())
        ) {
            // only blur the window if it is not already done
            if (!meta_window.blur_actor)
                this.create_blur_effect(meta_window);
        }

        // remove blur it is not explicitly whitelisted or un-blacklisted
        else if (meta_window.blur_actor)
            this.remove_blur(meta_window.bms_pid);
    }

    /// Add the blur effect to the window.
    /// Accepts only tracked meta window that is NOT already blurred.
    create_blur_effect(meta_window) {
        const pid = meta_window.bms_pid;
        const window_actor = meta_window.get_compositor_private();

        const pipeline = new DummyPipeline(this.effects_manager, this.settings.applications);
        let [blur_actor, bg_manager] = pipeline.create_background_with_effect(
            window_actor, 'bms-application-blurred-widget'
        );

        meta_window.blur_actor = blur_actor;
        meta_window.bg_manager = bg_manager;

        // if hacks are selected, force to repaint the window
        if (this.settings.HACKS_LEVEL === 1) {
            this._log("hack level 1");

            this.paint_signals.disconnect_all_for_actor(blur_actor);
            this.paint_signals.connect(blur_actor, pipeline.effect);
        } else {
            this.paint_signals.disconnect_all_for_actor(blur_actor);
        }

        // make sure window is blurred in overview
        if (this.settings.applications.BLUR_ON_OVERVIEW)
            this.enforce_window_visibility_on_overview_for(window_actor);

        // update the size
        this.update_size(pid);

        // set the window actor's opacity
        this.set_window_opacity(window_actor, this.settings.applications.OPACITY);

        // now set up the signals, for the window actor only: they are disconnected
        // in `remove_blur`, whereas the signals for the meta window are disconnected
        // only when the whole component is disabled

        // update the window opacity when it changes, else we don't control it fully
        this.connections.connect(
            window_actor, 'notify::opacity',
            _ => {
                if (this.focused_window_pid != pid)
                    this.set_window_opacity(window_actor, this.settings.applications.OPACITY);
            }
        );

        // hide the blur if window becomes invisible
        if (!window_actor.visible)
            blur_actor.hide();

        this.connections.connect(
            window_actor,
            'notify::visible',
            window_actor => {
                if (window_actor.visible)
                    meta_window.blur_actor.show();
                else
                    meta_window.blur_actor.hide();
            }
        );
    }

    /// With `focus=true`, tells us we are focused on said window (which can be null if
    /// we are not focused anymore). It automatically removes the ancient focus.
    /// With `focus=false`, just remove the focus from said window (which can still be null).
    set_focus_for_window(meta_window, focus = true) {
        let blur_actor = null;
        let window_actor = null;
        let new_pid = null;
        if (meta_window) {
            blur_actor = meta_window.blur_actor;
            window_actor = meta_window.get_compositor_private();
            new_pid = meta_window.bms_pid;
        }

        if (focus) {
            // remove old focused window if any
            if (this.focused_window_pid) {
                const old_focused_window = this.meta_window_map.get(this.focused_window_pid);
                if (old_focused_window)
                    this.set_focus_for_window(old_focused_window, false);
            }
            // set new focused window pid
            this.focused_window_pid = new_pid;
            // if we have blur, hide it and make the window opaque
            if (this.settings.applications.DYNAMIC_OPACITY && blur_actor) {
                blur_actor.hide();
                this.set_window_opacity(window_actor, 255);
            }
        }
        // if we remove the focus and have blur, show it and make the window transparent
        else if (blur_actor) {
            blur_actor.show();
            this.set_window_opacity(window_actor, this.settings.applications.OPACITY);
        }
    }

    /// Makes sure that, when the overview is visible, the window actor will
    /// stay visible no matter what.
    /// We can instead hide the last child of the window actor, which will
    /// improve performances without hiding the blur effect.
    enforce_window_visibility_on_overview_for(window_actor) {
        this.connections.connect(window_actor, 'notify::visible',
            _ => {
                if (this.settings.applications.BLUR_ON_OVERVIEW) {
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
        window_actor?.get_children().forEach(child => {
            if (child.name !== "blur-actor" && child.opacity != opacity)
                child.opacity = opacity;
        });
    }

    /// Update the opacity of all window actors.
    set_opacity() {
        let opacity = this.settings.applications.OPACITY;

        this.meta_window_map.forEach(((meta_window, pid) => {
            if (pid != this.focused_window_pid && meta_window.blur_actor) {
                let window_actor = meta_window.get_compositor_private();
                this.set_window_opacity(window_actor, opacity);
            }
        }));
    }

    /// Compute the size and position for a blur actor.
    /// If `scale-monitor-framebuffer` experimental feature if on, we don't need to manage scaling.
    /// Else, on wayland, we need to divide by the scale to get the correct result.
    compute_allocation(meta_window) {
        const scale_monitor_framebuffer = this.mutter_gsettings.get_strv('experimental-features')
            .includes('scale-monitor-framebuffer');
        const is_wayland = Meta.is_wayland_compositor();
        const monitor_index = meta_window.get_monitor();
        // check if the window is using wayland, or xwayland/xorg for rendering
        const scale = !scale_monitor_framebuffer && is_wayland && meta_window.get_client_type() == 0
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

    /// Removes the blur actor to make a blurred window become normal again.
    /// It however does not untrack the meta window itself.
    /// Accepts a pid corresponding (or not) to a blurred (or not) meta window.
    remove_blur(pid) {
        this._log(`removing blur for pid ${pid}`);

        let meta_window = this.meta_window_map.get(pid);
        if (meta_window) {
            let window_actor = meta_window.get_compositor_private();
            let blur_actor = meta_window.blur_actor;
            let bg_manager = meta_window.bg_manager;

            if (blur_actor && window_actor) {
                // reset the opacity
                this.set_window_opacity(window_actor, 255);

                // remove the blurred actor
                window_actor.remove_child(blur_actor);
                bg_manager._bms_pipeline.destroy();
                bg_manager.destroy();
                blur_actor.destroy();

                // kinda untrack the blurred actor, as its presence is how we know
                // whether we are blurred or not
                delete meta_window.blur_actor;
                delete meta_window.bg_manager;

                // disconnect the signals of the window actor
                this.paint_signals.disconnect_all_for_actor(blur_actor);
                this.connections.disconnect_all_for(window_actor);
            }
        }
    }

    /// Kinda the same as `remove_blur`, but better: it also untracks the window.
    /// This needs to be called when the component is being disabled, else it
    /// would cause havoc by having untracked windows during normal operations,
    /// which is not the point at all!
    /// Accepts a pid corresponding (or not) to a blurred (or not) meta window.
    untrack_meta_window(pid) {
        this.remove_blur(pid);
        let meta_window = this.meta_window_map.get(pid);
        if (meta_window) {
            this.connections.disconnect_all_for(meta_window);
            this.meta_window_map.delete(pid);
        }
    }

    disable() {
        this._log("removing blur from applications...");

        this.service?.unexport();
        delete this.mutter_gsettings;

        this.meta_window_map.forEach((_meta_window, pid) => {
            this.untrack_meta_window(pid);
        });

        this.connections.disconnect_all();
        this.paint_signals.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > applications] ${str}`);
    }
};
