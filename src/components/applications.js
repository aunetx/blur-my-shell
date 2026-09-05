import Meta from 'gi://Meta';
import Gio from 'gi://Gio';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Config from 'resource:///org/gnome/shell/misc/config.js';

import { ApplicationsService } from '../dbus/services.js';
import { Pipeline } from '../conveniences/pipeline.js';
import { DynamicPipeline } from '../render/dynamic_surface.js';
import { RoundedPipeline } from '../render/rounded_pipeline.js';

const LEGACY_BLUR_ACTOR_NAMES = new Set([
    'blur-actor',
    'bms-application-blurred-widget',
]);


/// Converts a wildcard pattern to a RegExp object.
/// Supports * (matches any sequence) and ? (matches any single character).
/// Matching is case-insensitive.
///
/// @param {string} pattern - The wildcard pattern (e.g., "Firefox*", "*Code*")
/// @returns {RegExp} The compiled regex pattern
function wildcardToRegex(pattern) {
    // Escape special regex characters except * and ?
    const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&');
    // Convert wildcards: * -> .*, ? -> .
    const regex = '^' + escaped.replace(/\*/g, '.*').replace(/\?/g, '.') + '$';
    return new RegExp(regex, 'i');
}


/// Compiles an array of wildcard patterns into RegExp objects.
///
/// @param {string[]} patterns - Array of wildcard patterns
/// @returns {RegExp[]} Array of compiled regex patterns
function compilePatterns(patterns) {
    return patterns.map(wildcardToRegex);
}


/// Tests if a value matches any of the compiled patterns.
///
/// @param {string} value - The value to test (e.g., wm_class)
/// @param {RegExp[]} patterns - Array of compiled regex patterns
/// @returns {boolean} True if value matches any pattern
function matchesAnyPattern(value, patterns) {
    if (!value || patterns.length === 0) {
        return false;
    }
    return patterns.some(pattern => pattern.test(value));
}

export const ApplicationsBlur = class ApplicationsBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;

        this.meta_windows = new Set();
        this.blur_signal_ids = new Map();

        this._compiled_whitelist = [];
        this._compiled_blacklist = [];
        this.original_child_opacities = new WeakMap();
        this.enabled = false;

        // compile initial patterns
        this._update_patterns();

        this.service = new ApplicationsService;
    }

    /// Updates the compiled whitelist and blacklist patterns from settings.
    /// Called during initialization and when whitelist/blacklist settings change.
    _update_patterns() {
        const whitelist = this.settings.applications.WHITELIST || [];
        const blacklist = this.settings.applications.BLACKLIST || [];

        this._compiled_whitelist = compilePatterns(whitelist);
        this._compiled_blacklist = compilePatterns(blacklist);

        this._log(`Patterns updated - whitelist: ${whitelist.length}, blacklist: ${blacklist.length}`);
    }

    enable() {
        if (this.enabled)
            return;

        this._log("blurring applications...");
        this.enabled = true;

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
        this.focused_window = null;
        this.init_dynamic_opacity();
        this.connections.connect(
            global.display,
            'focus-window',
            (_meta_display, meta_window, _p0) => {
                if (meta_window !== this.focused_window)
                    this.set_focus_for_window(meta_window);
            }
        );

        this.connect_to_overview();
    }

    enable_service() {
        if (!this.service)
            return;

        try {
            this.service.export();
        } catch (error) {
            logError(error, '[Blur my Shell > applications] failed to export window picker');
        }
    }

    disable_service() {
        if (!this.service)
            return;

        try {
            this.service.unexport();
        } catch (error) {
            logError(error, '[Blur my Shell > applications] failed to unexport window picker');
        }
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
            if (this.focused_window)
                this.set_focus_for_window(null);
        }
    }

    /// Connect to the overview being opened/closed to force the blur being
    /// shown on every window of the workspaces viewer.
    connect_to_overview() {
        this.connections.disconnect_all_for(Main.overview);
        this.overview_visible = Main.overview.visible;

        const reconcile_windows = () => this.meta_windows.forEach(
            meta_window => this.reconcile_window_visibility(meta_window)
        );
        this.connections.connect(Main.overview, 'showing', _ => {
            this.overview_visible = true;
            reconcile_windows();
        });
        this.connections.connect(Main.overview, 'hidden', _ => {
            this.overview_visible = false;
            reconcile_windows();
        });

        this.meta_windows.forEach(meta_window =>
            this.reconcile_window_visibility(meta_window)
        );
    }

    /// Iterate through all existing windows and add blur as needed.
    update_all_windows() {
        this._update_patterns();

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
    track_new(meta_window) {
        if (this.meta_windows.has(meta_window)) {
            this.check_blur(meta_window);
            return;
        }

        this._log('new window tracked');

        // register the blurred window
        this.meta_windows.add(meta_window);

        // update the blur when wm-class is changed
        this.connections.connect(
            meta_window, 'notify::wm-class',
            _ => this.check_blur(meta_window)
        );

        // remove the blur when the window is unmanaged
        this.connections.connect(
            meta_window, 'unmanaging',
            _ => this.untrack_meta_window(meta_window)
        );

        this.check_blur(meta_window);
    }

    connect_blur_signal(meta_window, object, signals, handler) {
        const ids = this.connections.connect(object, signals, handler);
        const records = this.blur_signal_ids.get(meta_window) ?? [];
        (Array.isArray(ids) ? ids : [ids]).forEach(id =>
            records.push({ object, id })
        );
        this.blur_signal_ids.set(meta_window, records);
    }

    connect_blur_signals(meta_window, window_actor) {
        this.blur_signal_ids.set(meta_window, []);
        this.connect_blur_signal(
            meta_window,
            meta_window,
            'size-changed',
            () => this.update_size(meta_window)
        );

        if (this.settings.applications.STATIC_BLUR) {
            this.connect_blur_signal(
                meta_window,
                meta_window,
                'position-changed',
                () => this.update_size(meta_window)
            );
        } else {
            const repaint = () => {
                if (meta_window.blur_actor?.mapped)
                    meta_window.bg_manager?._bms_pipeline?.repaint_effect();
            };
            this.connect_blur_signal(
                meta_window,
                meta_window,
                'position-changed',
                repaint
            );
            this.connect_blur_signal(
                meta_window,
                window_actor,
                [
                    'notify::x',
                    'notify::y',
                    'notify::translation-x',
                    'notify::translation-y',
                    'notify::scale-x',
                    'notify::scale-y',
                ],
                repaint
            );
        }

        this.connect_blur_signal(
            meta_window,
            meta_window,
            ['notify::maximized-horizontally', 'notify::maximized-vertically'],
            () => this.update_corner_radius(meta_window)
        );
        this.connect_blur_signal(
            meta_window,
            meta_window,
            'notify::fullscreen',
            () => {
                this.update_corner_radius(meta_window);
                this.reconcile_window_visibility(meta_window);
            }
        );
        this.connect_blur_signal(
            meta_window,
            window_actor,
            'child-added',
            () => {
                if (this.settings.applications.STATIC_BLUR
                    && meta_window.get_client_type() === Meta.WindowClientType.X11)
                    window_actor.set_child_below_sibling(meta_window.blur_actor, null);
                this.reconcile_window_visibility(meta_window);
            }
        );
        this.connect_blur_signal(
            meta_window,
            window_actor,
            'child-removed',
            (_, child) => this.restore_window_child_opacity(window_actor, child)
        );
        this.connect_blur_signal(
            meta_window,
            window_actor,
            'notify::opacity',
            () => this.reconcile_window_visibility(meta_window)
        );
        this.connect_blur_signal(
            meta_window,
            window_actor,
            'notify::visible',
            () => this.reconcile_window_visibility(meta_window)
        );
    }

    /// Updates the size of the blur actor associated with a tracked window.
    update_size(meta_window) {
        if (!this.meta_windows.has(meta_window))
            return;

        const blur_actor = meta_window.blur_actor;
        if (!blur_actor)
            return;

        if (this.settings.applications.STATIC_BLUR) {
            const bg_manager = meta_window.bg_manager;
            if (!bg_manager?.backgroundActor)
                return;

            const bg_actor_monitor_index = bg_manager.backgroundActor.monitor;
            const window_monitor_index = meta_window.get_monitor();
            const monitor = Main.layoutManager.monitors[window_monitor_index];
            if (!monitor)
                return;

            if (bg_actor_monitor_index !== window_monitor_index) {
                this._log(`application switching to monitor: ${window_monitor_index}`);

                bg_manager._monitorIndex = window_monitor_index;
                bg_manager._updateBackgroundActor();
                blur_actor.width = monitor.width;
                blur_actor.height = monitor.height;
            }

            const frame = meta_window.get_frame_rect();
            const buffer = meta_window.get_buffer_rect();
            blur_actor.x = monitor.x - buffer.x;
            blur_actor.y = monitor.y - buffer.y;
            blur_actor.set_clip(
                frame.x - monitor.x,
                frame.y - monitor.y,
                frame.width,
                frame.height
            );
        } else {
            const allocation = this.compute_allocation(meta_window);
            blur_actor.x = allocation.x;
            blur_actor.y = allocation.y;
            blur_actor.width = allocation.width;
            blur_actor.height = allocation.height;
        }
    }

    /// Checks if the given actor needs to be blurred.
    /// Accepts only tracked meta window, be it blurred or not.
    ///
    /// In order to be blurred, a window either:
    /// - is whitelisted in the user preferences if not enable-all
    /// - is not blacklisted if enable-all
    ///
    /// Whitelist and blacklist support wildcard patterns:
    /// - * matches any sequence of characters
    /// - ? matches any single character
    /// - Matching is case-insensitive
    check_blur(meta_window) {
        const window_wm_class = meta_window.get_wm_class();
        const enable_all = this.settings.applications.ENABLE_ALL;
        if (window_wm_class)
            this._log(`window associated to wm class name ${window_wm_class}`);


        // if we are in blacklist mode and the window is not blacklisted
        // or if we are in whitelist mode and the window is whitelisted
        if (
            window_wm_class !== ""
            && ((enable_all && !matchesAnyPattern(window_wm_class, this._compiled_blacklist))
                || (!enable_all && matchesAnyPattern(window_wm_class, this._compiled_whitelist))
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
            this.remove_blur(meta_window);
    }

    /// Add the blur effect to the window.
    /// Accepts only tracked meta window that is NOT already blurred.
    create_blur_effect(meta_window) {
        const window_actor = meta_window.get_compositor_private();
        if (!window_actor)
            return;

        let blur_actor = null;
        let bg_manager = null;
        let pipeline = null;
        let rounded_pipeline = null;

        try {
            if (this.settings.applications.STATIC_BLUR) {
                pipeline = new Pipeline(
                    this.effects_manager,
                    global.blur_my_shell._pipelines_manager,
                    this.settings.applications.PIPELINE
                );
                const bg_managers = [];
                blur_actor = pipeline.create_background_with_effects(
                    meta_window.get_monitor(), bg_managers, window_actor,
                    'bms-application-blurred-widget'
                );
                bg_manager = bg_managers[0];
                rounded_pipeline = new RoundedPipeline(
                    this.effects_manager,
                    () => this.settings.applications.CORNER_RADIUS
                );
                rounded_pipeline.bind(pipeline, blur_actor);
            } else {
                pipeline = new DynamicPipeline(
                    this.effects_manager,
                    global.blur_my_shell._pipelines_manager,
                    this.settings.applications.PIPELINE,
                    {
                        corner_radius: this.settings.applications.CORNER_RADIUS,
                    }
                );
                [blur_actor, bg_manager] = pipeline.create_background_with_effect(
                    window_actor, 'bms-application-blurred-widget'
                );
            }

            if (!blur_actor || !bg_manager)
                throw new Error('application blur has no background owner');

            meta_window.blur_actor = blur_actor;
            meta_window.bg_manager = bg_manager;
            meta_window.bms_rounded_pipeline = rounded_pipeline;
            this.connect_blur_signals(meta_window, window_actor);

            if (!this.settings.applications.BLUR_ON_OVERVIEW && Main.overview.visible)
                blur_actor.hide();

            this.update_size(meta_window);
            this.update_corner_radius(meta_window);
            this.reconcile_window_visibility(meta_window);
        } catch (error) {
            (this.blur_signal_ids.get(meta_window) ?? []).forEach(({ object, id }) =>
                this.cleanup_resource(() => this.connections.disconnect(object, id))
            );
            this.blur_signal_ids.delete(meta_window);
            this.cleanup_resource(() =>
                this.set_window_opacity(window_actor, 255, blur_actor)
            );
            this.cleanup_resource(() => rounded_pipeline?.destroy());
            this.cleanup_resource(() => pipeline?.destroy());
            if (bg_manager) {
                bg_manager._bms_pipeline = null;
                this.cleanup_resource(() => bg_manager.destroy());
            }
            this.cleanup_resource(() => {
                if (blur_actor?.get_parent() === window_actor)
                    window_actor.remove_child(blur_actor);
                blur_actor?.destroy();
            });
            delete meta_window.blur_actor;
            delete meta_window.bg_manager;
            delete meta_window.bms_rounded_pipeline;
            this._warn(`could not create application blur: ${error}`);
        }
    }

    /// With `focus=true`, tells us we are focused on said window (which can be null if
    /// we are not focused anymore). It automatically removes the ancient focus.
    /// With `focus=false`, just remove the focus from said window (which can still be null).
    set_focus_for_window(meta_window, focus = true) {
        this.focused_window = focus ? meta_window : null;

        this.meta_windows.forEach(tracked_window =>
            this.reconcile_window_visibility(tracked_window)
        );
    }

    /// Update the corner radius based on window state (0 for maximized/fullscreen)
    /// if the preferences say so.
    update_corner_radius(meta_window) {
        const is_maximized = meta_window.maximized_horizontally || meta_window.maximized_vertically;
        const is_fullscreen = meta_window.fullscreen;

        let use_0_radius = !this.settings.applications.CORNER_WHEN_MAXIMIZED && (is_maximized || is_fullscreen);

        if (this.settings.applications.STATIC_BLUR) {
            meta_window.bms_rounded_pipeline?.update();
            meta_window.bms_rounded_pipeline?.setStraightCorners(use_0_radius);
        } else {
            const pipeline = meta_window.bg_manager?._bms_pipeline;
            pipeline?.set_corner_radius(this.settings.applications.CORNER_RADIUS);
            pipeline?.set_straight_corners(use_0_radius);
        }
    }

    reconcile_window_visibility(meta_window, overview_visible = this.overview_visible) {
        const window_actor = meta_window.get_compositor_private();
        const blur_actor = meta_window.blur_actor;
        if (!window_actor || !blur_actor)
            return;

        const is_focused = this.settings.applications.DYNAMIC_OPACITY
            && meta_window === this.focused_window;
        const is_fullscreen = this.settings.applications.UNBLUR_WHEN_FULLSCREEN
            && meta_window.fullscreen;
        const visible_for_blur = meta_window.showing_on_its_workspace()
            || (this.settings.applications.BLUR_ON_OVERVIEW && overview_visible);
        const show_blur = visible_for_blur
            && !is_focused
            && !is_fullscreen
            && (this.settings.applications.BLUR_ON_OVERVIEW || !overview_visible);

        if (show_blur)
            blur_actor.show();
        else
            blur_actor.hide();

        this.set_window_opacity(
            window_actor,
            show_blur ? this.settings.applications.OPACITY : 255,
            blur_actor
        );
    }

    /// Update all corners, to use when the setting has been changed.
    update_all_corner_radii() {
        this.meta_windows.forEach(
            meta_window => this.update_corner_radius(meta_window)
        )
    }

    update_fullscreen_status() {
        this.meta_windows.forEach(
            meta_window => this.reconcile_window_visibility(meta_window)
        );
    }

    /// Set the opacity of the window actor that sits on top of the blur effect.
    set_window_opacity(window_actor, opacity, blur_actor = null) {
        if (!window_actor)
            return;

        let originals = this.original_child_opacities.get(window_actor);
        if (!originals) {
            originals = new Map();
            this.original_child_opacities.set(window_actor, originals);
        }

        window_actor.get_children().forEach(child => {
            if (child === blur_actor || LEGACY_BLUR_ACTOR_NAMES.has(child.name))
                return;

            if (opacity === 255) {
                if (originals.has(child)) {
                    child.opacity = originals.get(child);
                    originals.delete(child);
                }
                return;
            }

            if (!originals.has(child))
                originals.set(child, child.opacity);
            if (child.opacity !== opacity)
                child.opacity = opacity;
        });

        if (opacity === 255)
            this.original_child_opacities.delete(window_actor);
    }

    restore_window_child_opacity(window_actor, child) {
        const originals = this.original_child_opacities.get(window_actor);
        if (!originals?.has(child))
            return;

        try {
            child.opacity = originals.get(child);
        } catch (error) {
            this._log(`window child was already destroyed: ${error}`);
        }
        originals.delete(child);
        if (originals.size === 0)
            this.original_child_opacities.delete(window_actor);
    }

    /// Update the opacity of all window actors.
    set_opacity() {
        this.meta_windows.forEach(meta_window =>
            this.reconcile_window_visibility(meta_window)
        );
    }

    /// Find the system's window scaling.
    /// If `scale-monitor-framebuffer` experimental feature if on, we don't need to manage scaling.
    /// Else, on wayland, we need to divide by the scale to get the correct result.
    compute_scale(meta_window) {
        // TODO: Drop GNOME <50 compatibility
        const gnome_shell_major_version = parseInt(Config.PACKAGE_VERSION.split('.')[0]);
        const scale_monitor_framebuffer =
            gnome_shell_major_version >= 50 ||
            this.mutter_gsettings
                .get_strv('experimental-features')
                .includes('scale-monitor-framebuffer');
        const is_wayland = gnome_shell_major_version >= 50 || Meta.is_wayland_compositor();
        const monitor_index = meta_window.get_monitor();
        // check if the window is using wayland, or xwayland/xorg for rendering
        return !scale_monitor_framebuffer
            && is_wayland
            && meta_window.get_client_type() === Meta.WindowClientType.WAYLAND
            ? Main.layoutManager.monitors[monitor_index]?.geometry_scale ?? 1
            : 1;
    }

    /// Compute the size and position for a blur actor.
    /// Coordinates are relative to window buffer's corner.
    compute_allocation(meta_window) {
        const scale = this.compute_scale(meta_window);

        let frame = meta_window.get_frame_rect();
        let buffer = meta_window.get_buffer_rect();

        return {
            x: (frame.x - buffer.x) / scale,
            y: (frame.y - buffer.y) / scale,
            width: frame.width / scale,
            height: frame.height / scale
        };
    }

    change_blur_type() {
        this._log("resetting...");

        this.disable();
        this.enable();
    }

    change_pipeline() {
        this.meta_windows.forEach(meta_window => {
            meta_window.bg_manager?._bms_pipeline?.change_pipeline_to(
                this.settings.applications.PIPELINE
            );
            this.update_corner_radius(meta_window);
        });
    }

    /// Removes the blur actor to make a blurred window become normal again.
    /// It however does not untrack the meta window itself.
    remove_blur(meta_window) {
        this._log('removing window blur');

        if (this.meta_windows.has(meta_window)) {
            let window_actor = meta_window.get_compositor_private();
            let blur_actor = meta_window.blur_actor;
            let bg_manager = meta_window.bg_manager;

            (this.blur_signal_ids.get(meta_window) ?? []).forEach(({ object, id }) =>
                this.cleanup_resource(() => this.connections.disconnect(object, id))
            );
            this.blur_signal_ids.delete(meta_window);

            if (blur_actor || bg_manager || meta_window.bms_rounded_pipeline) {
                // reset the opacity
                this.set_window_opacity(window_actor, 255, blur_actor);

                // remove the blurred actor
                try {
                    if (blur_actor && window_actor && blur_actor.get_parent() === window_actor)
                        window_actor.remove_child(blur_actor);
                } catch (error) {
                    this._log(`window blur actor was already detached: ${error}`);
                }
                this.cleanup_resource(() => meta_window.bms_rounded_pipeline?.destroy());
                this.cleanup_resource(() => bg_manager?._bms_pipeline?.destroy());
                this.cleanup_resource(() => bg_manager?.destroy());
                this.cleanup_resource(() => blur_actor?.destroy());

                // kinda untrack the blurred actor, as its presence is how we know
                // whether we are blurred or not
                delete meta_window.blur_actor;
                delete meta_window.bg_manager;
                delete meta_window.bms_rounded_pipeline;

            }
        }
    }

    /// Kinda the same as `remove_blur`, but better: it also untracks the window.
    /// This needs to be called when the component is being disabled, else it
    /// would cause havoc by having untracked windows during normal operations,
    /// which is not the point at all!
    untrack_meta_window(meta_window) {
        this.remove_blur(meta_window);
        if (this.meta_windows.has(meta_window)) {
            this.connections.disconnect_all_for(meta_window);
            this.blur_signal_ids.delete(meta_window);
            this.meta_windows.delete(meta_window);
            if (this.focused_window === meta_window)
                this.focused_window = null;
        }
    }

    disable() {
        if (!this.enabled)
            return;

        this._log("removing blur from applications...");
        this.enabled = false;

        delete this.mutter_gsettings;

        [...this.meta_windows].forEach(meta_window =>
            this.untrack_meta_window(meta_window)
        );

        this.connections.disconnect_all();
        this.original_child_opacities = new WeakMap();
    }

    destroy() {
        try {
            this.disable();
        } finally {
            this.disable_service();
            this.service = null;
        }
    }

    cleanup_resource(callback) {
        try {
            callback();
        } catch (error) {
            this._log(`resource was already destroyed: ${error}`);
        }
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > applications] ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > applications] ${str}`);
    }
};
