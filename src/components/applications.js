import Meta from 'gi://Meta';
import Mtk from 'gi://Mtk';
import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import Clutter from 'gi://Clutter';
import St from 'gi://St';
import GObject from 'gi://GObject';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Config from 'resource:///org/gnome/shell/misc/config.js';

import { ApplicationsService } from '../dbus/services.js';
import { PaintSignals } from '../conveniences/paint_signals.js';
import { DummyPipeline } from '../conveniences/dummy_pipeline.js';
import { Pipeline } from '../conveniences/pipeline.js';
import * as shader_uniforms from '../conveniences/shader_uniforms.js';
import { GaussianBlurEffect } from '../effects/gaussian_blur.js';

// Magic-lamp minimize/unminimize effect names. The animations come from the
// compiz-alike-magic-lamp-effect extension; we hook the window-manager
// minimize/unminimize signals to ride on top of them.
const MINIMIZE_EFFECT_NAME = 'minimize-magic-lamp-effect';
const UNMINIMIZE_EFFECT_NAME = 'unminimize-magic-lamp-effect';

// Silhouette mask GLSL: analytically inverts magic-lamp's BOTTOM-branch deform
// so a flat (undeformed) blur texture is clipped to the curved silhouette of
// the animating window. k/j semantics: (0,0) is the window fully open and
// (1,1) is collapsed to the icon, for both minimize and unminimize, so the
// mask does not need to know the direction. fL/fT/fR/fB clip the silhouette to
// the visible frame rect (inside the CSD shadow), and cornerRad rounds corners
// like BMS's resting blur. Other dock sides pass through (rectangle blur).
const ANIM_MASK_GLSL = `
uniform sampler2D tex;
uniform float iconPos;     // St.Side: 2 = BOTTOM
uniform float k;
uniform float j;
uniform float winX, winY, winW, winH;
uniform float iconX, iconW;
uniform float iconMonH;
uniform float actorH;      // sweep height = iconMonH - winY
uniform float actorW;      // sampler actor width (window + icon + margin)
uniform float xOff;        // window-local x at the actor's left edge (<=0)
uniform float effectMode;  // 0 = default, 1 = sine
uniform float fL, fT, fR, fB; // frame insets (buffer px)
uniform float cornerRad;   // BMS corner radius (buffer px)

const float PI = 3.14159265359;

void main(void) {
    vec2 uv = cogl_tex_coord_in[0].xy;
    vec4 c = texture2D(tex, uv);

    if (iconPos < 1.5 || iconPos > 2.5) {
        cogl_color_out = c;
        return;
    }

    float lx = uv.x * actorW + xOff;
    float ly = uv.y * actorH;

    float expandH = iconMonH - winY - winH;
    float fullH   = (iconMonH - winY) - expandH * (1.0 - k);
    float height  = fullH * (1.0 - j);
    float offsetY = (iconMonH - winY) - height - expandH * (1.0 - k);

    float ty = (ly - offsetY) / max(height, 0.0001);

    float A = iconW + (winW - iconW) * ((1.0 - j) * (1.0 - ty) + (1.0 - k) * ty);
    float offsetX = (iconX - winX) * (ty * (1.0 - j)) * k + (iconX - winX) * j;
    float B = offsetX;
    if (effectMode > 0.5) {
        B += sin((1.0 - j) * (1.0 - ty) * 4.0 * PI) * (winW / 14.0) * k;
    } else {
        float P = sin((1.0 - j) * (1.0 - ty) * 2.0 * PI + PI) * (k / 7.0);
        A += P * (winW - iconW);
        B += P * (winX - iconX);
    }

    float fx0 = fL / max(winW, 1.0);
    float fx1 = 1.0 - fR / max(winW, 1.0);
    float fy0 = fT / max(winH, 1.0);
    float fy1 = 1.0 - fB / max(winH, 1.0);
    float rawTx = (lx - B) / max(A, 0.0001);
    float rawTy = ty;
    float tx = (rawTx - fx0) / max(fx1 - fx0, 0.0001);
    ty = (rawTy - fy0) / max(fy1 - fy0, 0.0001);

    // Screen-space antialiased silhouette coverage. The hard 0/1 'inside' step,
    // sampled by Clutter's linear filter, would interpolate into a ~1px soft
    // ramp leaking the gaussian tail past the edge. Recompute the boundary as a
    // smoothstep exactly one screen pixel wide (via fwidth) so the transition
    // lands on the silhouette and is fully transparent immediately outside it.
    float awX = max(fwidth(tx), 1e-6);
    float awY = max(fwidth(ty), 1e-6);
    float dx = min(tx, 1.0 - tx);
    float dy = min(ty, 1.0 - ty);
    float covX = smoothstep(-awX, awX, dx);
    float covY = smoothstep(-awY, awY, dy);
    float inside = covX * covY;

    if (inside > 0.0 && cornerRad > 0.5) {
        float r = cornerRad;
        vec2 p  = vec2(tx * winW, ty * winH);
        float cl = r, cr = winW - r, ct = r, cb = winH - r;
        vec2 center = p;
        bool inCorner = false;
        if (p.x < cl)      { center.x = cl + 2.0; inCorner = true; }
        else if (p.x > cr) { center.x = cr - 1.0; inCorner = true; }
        if (inCorner) {
            if (p.y < ct)      { center.y = ct + 2.0; }
            else if (p.y > cb) { center.y = cb - 1.0; }
            else               { inCorner = false; }
        }
        if (inCorner) {
            float dist = length(p - center);
            float outer = r + 0.5, inner = r - 0.5;
            float corner = 1.0;
            if (dist >= outer)      corner = 0.0;
            else if (dist > inner)  corner = outer - dist;
            inside *= corner;
        }
    }

    cogl_color_out = vec4(c.rgb * inside, min(inside, c.a));
}
`;

const AnimMaskEffect = GObject.registerClass({
    GTypeName: 'BmsAnimMaskEffect',
}, class AnimMaskEffect extends Clutter.ShaderEffect {
    _init() {
        super._init();
        this.set_shader_source(ANIM_MASK_GLSL);
    }
    vfunc_paint_target(paint_node, paint_context) {
        try { shader_uniforms.upload_uniforms(this); } catch (e) {}
        super.vfunc_paint_target(paint_node, paint_context);
    }
});


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
/// Caches the results to avoid recompilation on every check.
///
/// @param {string[]} patterns - Array of wildcard patterns
/// @param {Map} cache - Cache map storing pattern -> regex mappings
/// @returns {RegExp[]} Array of compiled regex patterns
function compilePatterns(patterns, cache) {
    return patterns.map(pattern => {
        if (cache.has(pattern)) {
            return cache.get(pattern);
        }
        const regex = wildcardToRegex(pattern);
        cache.set(pattern, regex);
        return regex;
    });
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
        this.paint_signals = new PaintSignals(connections);

        // stores every blurred meta window
        this.meta_window_map = new Map();

        // active magic-lamp animation states (meta_window -> state), for the
        // per-frame deformed blur that follows the minimizing window.
        this._anim_states = new Map();
        this._anim_enabled = false;
        this._anim_wm_handlers = [];

        // cache for compiled patterns to avoid recompilation
        this._whitelist_pattern_cache = new Map();
        this._blacklist_pattern_cache = new Map();
        this._compiled_whitelist = [];
        this._compiled_blacklist = [];

        // compile initial patterns
        this._update_patterns();
    }

    /// Updates the compiled whitelist and blacklist patterns from settings.
    /// Called during initialization and when whitelist/blacklist settings change.
    _update_patterns() {
        const whitelist = this.settings.applications.WHITELIST || [];
        const blacklist = this.settings.applications.BLACKLIST || [];

        this._compiled_whitelist = compilePatterns(whitelist, this._whitelist_pattern_cache);
        this._compiled_blacklist = compilePatterns(blacklist, this._blacklist_pattern_cache);

        this._log(`Patterns updated - whitelist: ${whitelist.length}, blacklist: ${blacklist.length}`);
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

        // animation blur is experimental and opt-in
        if (this.settings.applications.ANIMATION_BLUR)
            this._enable_anim_blur();

        // enable/disable the animation blur when the setting changes; listen
        // on the underlying GSettings object (the Keys wrapper is not a
        // GObject and cannot be connected to)
        this._anim_setting_id = this.settings.applications.settings.connect(
            'changed::animation-blur',
            () => {
                if (this.settings.applications.ANIMATION_BLUR)
                    this._enable_anim_blur();
                else
                    this._disable_anim_blur();
            }
        );
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
                            (!meta_window.get_workspace().active) || meta_window.minimized
                        )
                            window_actor.hide();
                    });
                }
            );
        }
    }

    /// Iterate through all existing windows and add blur as needed.
    update_all_windows() {
        // Recompile patterns in case whitelist/blacklist changed
        this._update_patterns();

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

        // update the clip, position, and/or size when the window changes
        this.connections.connect(
            meta_window, 'size-changed',
            _ => this.update_size(pid)
        );
        if (this.settings.applications.STATIC_BLUR) {
            this.connections.connect(
                meta_window, 'position-changed',
                _ => this.update_size(pid)
            );
        }

        // remove the blur when the window is unmanaged
        this.connections.connect(
            meta_window, 'unmanaging',
            _ => this.untrack_meta_window(pid)
        );

        this.check_blur(meta_window);

        if (this.settings.applications.STATIC_BLUR && meta_window.get_client_type() === Meta.WindowClientType.X11) {
            const window_actor = meta_window.get_compositor_private();
            window_actor.connect('child-added', _ => {
                if (!meta_window.blur_actor) {
                    this._warn("can't move blur actor to back, it doesn't exist");
                    return;
                }

                window_actor.set_child_below_sibling(meta_window.blur_actor, null);
            });
        }
    }

    /// Updates the size of the blur actor associated to a meta window from its pid.
    /// Accepts only tracked meta window (i.e `bms_pid` set), be it blurred or not.
    update_size(pid) {
        if (this.meta_window_map.has(pid)) {
            const meta_window = this.meta_window_map.get(pid);
            const blur_actor = meta_window.blur_actor;
            if (blur_actor) {
                if (this.settings.applications.STATIC_BLUR) {
                    const bg_manager = meta_window.bg_manager;
                    const bg_actor_monitor_index = bg_manager.backgroundActor.monitor;
                    const window_monitor_index = meta_window.get_monitor();
                    const monitor = Main.layoutManager.monitors[window_monitor_index];

                    if (bg_actor_monitor_index !== window_monitor_index) {
                        this._log(`application (pid ${pid}) switching to monitor: ${window_monitor_index}`);

                        // Recreate the BackgroundActor on the right monitor. This is necessary to make sure differently
                        // sized monitors have the correct scaled image of the wallpaper.
                        bg_manager._monitorIndex = window_monitor_index;
                        bg_manager._updateBackgroundActor();

                        // Also to fix differently sized monitor issues.
                        blur_actor.width = monitor.width;
                        blur_actor.height = monitor.height;
                    }

                    const frame = meta_window.get_frame_rect();
                    const buffer = meta_window.get_buffer_rect();
                    blur_actor.x = monitor.x - buffer.x;
                    blur_actor.y = monitor.y - buffer.y;

                    // set_clip(x-offset, y-offset, width, height)
                    blur_actor.set_clip(frame.x - monitor.x, frame.y - monitor.y, frame.width, frame.height);
                } else {
                    const allocation = this.compute_allocation(meta_window);
                    blur_actor.x = allocation.x;
                    blur_actor.y = allocation.y;
                    blur_actor.width = allocation.width;
                    blur_actor.height = allocation.height;
                }
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
    ///
    /// Whitelist and blacklist support wildcard patterns:
    /// - * matches any sequence of characters
    /// - ? matches any single character
    /// - Matching is case-insensitive
    check_blur(meta_window) {
        const window_wm_class = meta_window.get_wm_class();
        const enable_all = this.settings.applications.ENABLE_ALL;
        if (window_wm_class)
            this._log(`pid ${meta_window.bms_pid} associated to wm class name ${window_wm_class}`);


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
            this.remove_blur(meta_window.bms_pid);
    }

    /// Add the blur effect to the window.
    /// Accepts only tracked meta window that is NOT already blurred.
    create_blur_effect(meta_window) {
        const pid = meta_window.bms_pid;
        const window_actor = meta_window.get_compositor_private();

        let blur_actor;

        if (this.settings.applications.STATIC_BLUR) {
            const pipeline = new Pipeline(this.effects_manager, global.blur_my_shell._pipelines_manager, this.settings.applications.PIPELINE);
            const bg_managers = [];
            blur_actor = pipeline.create_background_with_effects(
                meta_window.get_monitor(), bg_managers, window_actor,
                'bms-application-blurred-widget'
            );

            if (bg_managers.length > 0) meta_window.bg_manager = bg_managers[0];
            else // I've never seen this happen, but just in case
                this._warn(`no bg_manager on blur creation for pid ${pid}`);
        } else {
            const pipeline = new DummyPipeline(this.effects_manager, this.settings.applications);
            [blur_actor, meta_window.bg_manager] = pipeline.create_background_with_effect(
                window_actor, 'bms-application-blurred-widget'
            );

            // if hacks are selected, force to repaint the window
            if (this.settings.HACKS_LEVEL === 1) {
                this._log("hack level 1");

                this.paint_signals.disconnect_all_for_actor(blur_actor);
                this.paint_signals.connect(blur_actor, pipeline.effect);
            } else {
                this.paint_signals.disconnect_all_for_actor(blur_actor);
            }
        }

        meta_window.blur_actor = blur_actor;

        // make sure window is blurred in overview
        if (this.settings.applications.BLUR_ON_OVERVIEW)
            this.enforce_window_visibility_on_overview_for(window_actor);

        // update the size
        this.update_size(pid);

        // set the window actor's opacity
        this.set_window_opacity(window_actor, this.settings.applications.OPACITY);

        // update corner radius based on window state
        this.update_corner_radius(meta_window);

        // now set up the signals, for the window actor only: they are disconnected
        // in `remove_blur`, whereas the signals for the meta window are disconnected
        // only when the whole component is disabled

        // listen for window state changes (maximized/fullscreen)
        this.connections.connect(
            meta_window, 'notify::maximized-horizontally',
            _ => this.update_corner_radius(meta_window)
        );
        this.connections.connect(
            meta_window, 'notify::maximized-vertically',
            _ => this.update_corner_radius(meta_window)
        );
        this.connections.connect(
            meta_window, 'notify::fullscreen',
            _ => this.update_corner_radius(meta_window)
        );

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
                // during an animation blur the sampler owns the window's blur;
                // the capture loop toggles this window's visibility every
                // frame, and re-showing the resting blur widget here would
                // stack a static blur on top of the animated one
                if (this._anim_states?.has(meta_window))
                    return;
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
                    } else if (
                        window_actor.visible
                    )
                        window_actor.get_last_child().show();
                }
            }
        );
    }

    /// Update the corner radius based on window state (0 for maximized/fullscreen)
    /// if the preferences say so.
    update_corner_radius(meta_window) {
        const is_maximized = meta_window.maximized_horizontally || meta_window.maximized_vertically;
        const is_fullscreen = meta_window.fullscreen;

        let use_0_radius = !this.settings.applications.CORNER_WHEN_MAXIMIZED && (is_maximized || is_fullscreen);

        if (this.settings.applications.STATIC_BLUR) {
            meta_window.bg_manager?._bms_pipeline?.effects.forEach(effect => {
                if (effect.constructor.name === "CornerEffect")
                    effect.straight_corners = use_0_radius;
            })
        } else {
            if (meta_window.bg_manager?._bms_pipeline?.effect)
                meta_window.bg_manager._bms_pipeline.effect.corner_radius = use_0_radius ?
                    0 : this.settings.applications.CORNER_RADIUS;
        }
    }

    /// Update all corners, to use when the setting has been changed.
    update_all_corner_radii() {
        this.meta_window_map.forEach(
            (meta_window, _pid) => this.update_corner_radius(meta_window)
        )
    }

    /// Set the opacity of the window actor that sits on top of the blur effect.
    set_window_opacity(window_actor, opacity) {
        // Define known blur actor names. This makes it easy to update if names change again.
        const BLUR_ACTOR_NAMES = new Set(["blur-actor", "bms-application-blurred-widget"]);

        window_actor?.get_children().forEach(child => {
            // Check against the Set and the opacity
            if (!BLUR_ACTOR_NAMES.has(child.name) && child.opacity != opacity) {
                child.opacity = opacity;
            }
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
        return !scale_monitor_framebuffer && is_wayland && meta_window.get_client_type() == 0
            ? Main.layoutManager.monitors[monitor_index].geometry_scale
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
        setTimeout(_ => this.enable(), 1);
    }

    change_pipeline() {
        this.update_all_windows();
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

        this._disable_anim_blur();
        if (this._anim_setting_id) {
            try { this.settings.applications.settings.disconnect(this._anim_setting_id); }
            catch (e) {}
            this._anim_setting_id = 0;
        }

        this.service?.unexport();
        delete this.mutter_gsettings;

        this.meta_window_map.forEach((_meta_window, pid) => {
            this.untrack_meta_window(pid);
        });

        this.connections.disconnect_all();
        this.paint_signals.disconnect_all();
    }

    // ---- magic-lamp animation blur ----

    _enable_anim_blur() {
        if (this._anim_enabled) return;
        this._anim_enabled = true;
        const hook = (actor, isMinimize) => {
            if (!this._anim_enabled || !actor) return;
            const mw = actor.meta_window;
            if (!mw || !mw.blur_actor) return;
            const name = isMinimize ? MINIMIZE_EFFECT_NAME : UNMINIMIZE_EFFECT_NAME;
            const effect = actor.get_effect(name);
            if (effect?.timerId) {
                try { this._anim_begin(actor, mw, effect); }
                catch (e) { this._warn(`anim begin: ${e}`); }
                return;
            }
            let tries = 0;
            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                if (!this._anim_enabled) return GLib.SOURCE_REMOVE;
                const e2 = actor.get_effect(
                    isMinimize ? MINIMIZE_EFFECT_NAME : UNMINIMIZE_EFFECT_NAME);
                if (!e2?.timerId) return ++tries > 30 ? GLib.SOURCE_REMOVE : GLib.SOURCE_CONTINUE;
                try { this._anim_begin(actor, mw, e2); }
                catch (e) { this._warn(`anim begin(idle): ${e}`); }
                return GLib.SOURCE_REMOVE;
            });
        };
        this._anim_wm_handlers.push(
            global.window_manager.connect('minimize', (_w, a) => hook(a, true)));
        this._anim_wm_handlers.push(
            global.window_manager.connect('unminimize', (_w, a) => hook(a, false)));
    }

    _disable_anim_blur() {
        if (!this._anim_enabled) return;
        this._anim_enabled = false;
        for (const id of this._anim_wm_handlers) {
            try { global.window_manager.disconnect(id); } catch (e) {}
        }
        this._anim_wm_handlers = [];
        for (const s of this._anim_states.values()) {
            try { this._anim_finish(s); } catch (e) {}
        }
        this._anim_states.clear();
    }

    _find_blur_widget(window_actor) {
        for (const c of window_actor.get_children()) {
            if ((c.name || '').includes('bms-application-blurred')) return c;
        }
        return null;
    }

    _anim_begin(window_actor, meta_window, masterEffect) {
        // only the bottom dock branch of the deform is inverted analytically
        // for now; other dock sides keep the vanilla behaviour (no animated
        // blur at all rather than a wrong rectangle blur)
        if (masterEffect.iconPosition !== St.Side.BOTTOM) return;

        const existing = this._anim_states.get(meta_window);
        if (existing) { try { this._anim_finish(existing); } catch (e) {} this._anim_states.delete(meta_window); }
        for (const [mw2, st2] of this._anim_states) {
            if (!st2.masterEffect || st2.masterEffect.get_actor?.() !== st2.wa) {
                try { this._anim_finish(st2); } catch (e) {} this._anim_states.delete(mw2);
            }
        }

        const ba = this._find_blur_widget(window_actor);
        if (!ba) return;
        const wg = global.window_group;

        const w = masterEffect.window;
        const icon = masterEffect.icon;
        const iconMon = masterEffect.iconMonitor;
        if (!w || !icon || !iconMon) { this._warn('anim: geometry missing'); return; }

        const actorW0 = Math.max(1, Math.round(window_actor.width));
        const actorH0 = Math.max(1, Math.round(window_actor.height));
        const sweepH = Math.max(1, Math.round(iconMon.height - w.y));

        let fL = 0, fT = 0, fR = 0, fB = 0;
        let winW = actorW0;
        try {
            const br = meta_window.get_buffer_rect();
            const fr = meta_window.get_frame_rect();
            const sx = actorW0 / Math.max(1, br.width);
            const sy = actorH0 / Math.max(1, br.height);
            const edgeSafety = 2;
            fL = Math.max(0, Math.round((fr.x - br.x) * sx)) + edgeSafety;
            fT = Math.max(0, Math.round((fr.y - br.y) * sy)) + edgeSafety;
            fR = Math.max(0, Math.round((br.x + br.width - fr.x - fr.width) * sx)) + edgeSafety;
            fB = Math.max(0, Math.round((br.y + br.height - fr.y - fr.height) * sy)) + edgeSafety;
            winW = Math.max(1, actorW0 - fL - fR);
        } catch (e) {}
        if (fL + fR >= actorW0 * 0.8 || fT + fB >= actorH0 * 0.8) {
            fL = fT = fR = fB = 0; winW = actorW0;
        }

        const iconLocalX = icon.x - w.x;
        const iconStageX = window_actor.x + iconLocalX;
        const iconStageR = iconStageX + icon.width;
        const winStageR = window_actor.x + actorW0;
        const margin = Math.max(60, actorW0 / 8);
        const rx0 = Math.round(Math.min(window_actor.x, iconStageX) - margin);
        const rx1 = Math.round(Math.max(winStageR, iconStageR) + margin);
        const actorW = Math.max(1, rx1 - rx0);
        const xOff = rx0 - window_actor.x;
        const X = rx0;
        const Y = Math.round(window_actor.y);

        let scale = 1;
        try { scale = global.stage.get_resource_scale() || 1; } catch (e) {}

        const saved = {
            ba, wa: window_actor, mw: meta_window, masterEffect,
            timeline: masterEffect.timerId,
            sampler: null, content: null, mask: null,
            newFrameId: 0, signals: [], timeoutId: 0, hardTimeoutId: 0, done: false,
            winW, sweepH, rx0: X, actorW, xOff, scale,
            fL, fT, fR, fB,
            isMinimize: masterEffect.isMinimizeEffect === true,
            waVisible: window_actor.visible !== false,
            baVisible: ba.visible !== false,
            baOpacity: Number.isFinite(Number(ba.opacity)) ? ba.opacity : 255,
        };

        const sampler = new St.Widget({ x: X, y: Y, width: actorW, height: sweepH, opacity: 255, reactive: false });
        sampler.add_effect(new GaussianBlurEffect({
            radius: this._anim_read_radius(),
            // GaussianBlurEffect is brighter than Shell.BlurEffect (BMS
            // dynamic) at identical brightness settings; the animation
            // brightness setting compensates (0.8 default, tuned by eye).
            brightness: this._anim_read_anim_brightness(),
            // width/height are not passed: vfunc_set_actor overrides them
            // from the actor's own size anyway
        }));
        const mask = new AnimMaskEffect();
        sampler.add_effect(mask);
        wg.insert_child_below(sampler, window_actor);
        saved.sampler = sampler;
        saved.mask = mask;

        let captured = false;
        try { captured = this._anim_capture(saved); }
        catch (e) { this._warn(`anim capture: ${e}`); }
        if (!captured) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                try { sampler.destroy(); } catch (e) {}
                return GLib.SOURCE_REMOVE;
            });
            try {
                ba.visible = saved.baVisible;
                ba.opacity = saved.baOpacity;
                window_actor.visible = saved.waVisible;
            } catch (e) {}
            saved.sampler = null;
            return;
        }

        // hide BMS's own blur widget for the duration (two-layer = double blur)
        try { ba.visible = false; } catch (e) {}

        shader_uniforms.set_uniform(mask, 'iconPos', masterEffect.iconPosition);
        shader_uniforms.set_uniform(mask, 'winX', w.x);
        shader_uniforms.set_uniform(mask, 'winY', w.y);
        shader_uniforms.set_uniform(mask, 'winW', actorW0);
        shader_uniforms.set_uniform(mask, 'winH', actorH0);
        shader_uniforms.set_uniform(mask, 'iconX', icon.x);
        shader_uniforms.set_uniform(mask, 'iconW', icon.width);
        shader_uniforms.set_uniform(mask, 'iconMonH', iconMon.height);
        shader_uniforms.set_uniform(mask, 'actorH', sweepH);
        shader_uniforms.set_uniform(mask, 'actorW', actorW);
        shader_uniforms.set_uniform(mask, 'xOff', xOff);
        shader_uniforms.set_uniform(mask, 'effectMode', masterEffect.EFFECT === 'sine' ? 1 : 0);
        shader_uniforms.set_uniform(mask, 'fL', fL);
        shader_uniforms.set_uniform(mask, 'fT', fT);
        shader_uniforms.set_uniform(mask, 'fR', fR);
        shader_uniforms.set_uniform(mask, 'fB', fB);
        shader_uniforms.set_uniform(mask, 'cornerRad', this._anim_read_corner());
        shader_uniforms.set_uniform(mask, 'k', masterEffect.k ?? 0);
        shader_uniforms.set_uniform(mask, 'j', masterEffect.j ?? 0);

        const refresh = () => {
            if (saved.done) return;
            try {
                saved.sampler.set_position(
                    Math.round(saved.wa.x + saved.xOff), Math.round(saved.wa.y));
            } catch (e) {}
            try { this._anim_capture(saved); } catch (e) {}
            try {
                saved.sampler.get_parent()?.set_child_below_sibling?.(saved.sampler, saved.wa);
            } catch (e) {}
            try { sampler.queue_redraw(); } catch (e) {}
            try {
                shader_uniforms.set_uniform(saved.mask, 'k', masterEffect.k ?? 0);
                shader_uniforms.set_uniform(saved.mask, 'j', masterEffect.j ?? 0);
            } catch (e) {}
        };
        if (saved.timeline)
            saved.newFrameId = saved.timeline.connect('new-frame', refresh);
        refresh();

        const finish = () => {
            if (saved.done) return;
            saved.done = true;
            this._anim_finish(saved);
            this._anim_states.delete(meta_window);
        };
        saved.timeoutId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 250, () => {
            if (saved.done) return GLib.SOURCE_REMOVE;
            if (!saved.masterEffect || saved.masterEffect.get_actor?.() !== window_actor) {
                if (saved._gone) { finish(); return GLib.SOURCE_REMOVE; }
                saved._gone = true;
            } else {
                saved._gone = false;
            }
            return GLib.SOURCE_CONTINUE;
        });
        if (saved.timeline) {
            saved.signals.push([saved.timeline, saved.timeline.connect('completed', finish)]);
            saved.signals.push([saved.timeline, saved.timeline.connect('stopped', finish)]);
        }
        saved.hardTimeoutId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 15000, () => {
            finish(); return GLib.SOURCE_REMOVE;
        });

        this._anim_states.set(meta_window, saved);
    }

    // Capture the sweep region (background behind the window) into the sampler.
    // Hide window actor + sampler + BMS widget during the synchronous paint so
    // nothing feeds back into its own capture.
    _anim_capture(s) {
        const rect = new Mtk.Rectangle({
            x: s.rx0, y: Math.round(s.wa.y),
            width: s.actorW, height: s.sweepH,
        });
        s.wa.visible = false;
        s.sampler.visible = false;
        let baWas = false;
        if (s.ba && s.ba.visible !== false) { baWas = true; try { s.ba.visible = false; } catch (e) {} }
        let content = null;
        // GNOME 50 signature: paint_to_content(rect, scale, color_state,
        // paint_flags). Older shells take 3 args; the extension only declares
        // shell-version 50, so this arity is fine as-is.
        try { content = global.stage.paint_to_content(rect, s.scale || 1.0, null, 0); }
        catch (e) {
            if (!s._captureWarned) {
                s._captureWarned = true;
                this._warn(`animation capture failed: ${e}`);
            }
        }
        if (baWas) try { s.ba.visible = true; } catch (e) {}
        s.sampler.visible = true;
        s.wa.visible = s.waVisible !== false;
        if (!content) return false;
        const old = s.content;
        s.content = content;
        s.sampler.set_content(content);
        if (old) {
            GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                try { old.destroy?.(); } catch (e) {}
                return GLib.SOURCE_REMOVE;
            });
        }
        return true;
    }

    _anim_finish(s) {
        s.done = true;
        if (s.timeline && s.newFrameId) {
            try { s.timeline.disconnect(s.newFrameId); } catch (e) {}
            s.newFrameId = 0;
        }
        for (const [obj, id] of s.signals) { try { obj.disconnect(id); } catch (e) {} }
        s.signals = [];
        if (s.timeoutId) { try { GLib.source_remove(s.timeoutId); } catch (e) {} s.timeoutId = 0; }
        if (s.hardTimeoutId) { try { GLib.source_remove(s.hardTimeoutId); } catch (e) {} s.hardTimeoutId = 0; }

        const sampler = s.sampler;
        const content = s.content;
        s.sampler = null;
        s.content = null;
        const wa = s.wa;
        const ba = s.ba;
        const baVisible = s.baVisible !== false;
        const baOpacity = s.baOpacity;
        const waVisible = s.waVisible !== false;
        const isMinimize = s.isMinimize;
        // Hand the window back to BMS in ONE idle callback. _anim_finish runs
        // from a timeline signal, where destroying a Clutter actor during a GC
        // sweep can crash gnome-shell, so the swap is deferred to a single
        // callback (single visible frame). If a NEWER animation has already
        // taken over this window (rapid re-minimize), it owns the blur widget
        // now and this stale idle must not re-show it.
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            try { sampler?.destroy?.(); } catch (e) {}
            try { content?.destroy?.(); } catch (e) {}
            try {
                if (!isMinimize) wa.visible = waVisible;
                let superseded = false;
                for (const st of this._anim_states.values()) {
                    if (st !== s && st.wa === wa) { superseded = true; break; }
                }
                if (!superseded && ba) { ba.visible = baVisible; ba.opacity = baOpacity; }
            } catch (e) {}
            try { wa.queue_redraw(); } catch (e) {}
            return GLib.SOURCE_REMOVE;
        });
    }

    _anim_read_radius() {
        const s = this.settings?.applications;
        if (s?.SIGMA !== undefined) return Math.max(0.5, Number(s.SIGMA));
        return 30;
    }

    _anim_read_anim_brightness() {
        const s = this.settings?.applications;
        if (s?.ANIMATION_BRIGHTNESS !== undefined)
            return Math.min(1, Math.max(0.05, Number(s.ANIMATION_BRIGHTNESS)));
        return 0.8;
    }

    _anim_read_corner() {
        const s = this.settings?.applications;
        if (s?.CORNER_RADIUS !== undefined) return s.CORNER_RADIUS;
        return 12;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > applications] ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > applications] ${str}`);
    }
};
