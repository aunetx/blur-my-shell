import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Config from 'resource:///org/gnome/shell/misc/config.js';

const SHELL_MAJOR_VERSION = parseInt(Config.PACKAGE_VERSION.split('.')[0]);

/// Find the system's window scaling.
/// If `scale-monitor-framebuffer` experimental feature if on, we don't need to manage scaling.
/// Else, on wayland, we need to divide by the scale to get the correct result.
export function compute_scale(meta_window, mutter_settings) {
    // TODO: Drop GNOME <50 compatibility
    const scale_monitor_framebuffer = SHELL_MAJOR_VERSION >= 50
        || mutter_settings.get_strv('experimental-features').includes('scale-monitor-framebuffer');
    const is_wayland = SHELL_MAJOR_VERSION >= 50 || Meta.is_wayland_compositor();
    return !scale_monitor_framebuffer
        && is_wayland
        && meta_window.get_client_type() === Meta.WindowClientType.WAYLAND
        ? Main.layoutManager.monitors[meta_window.get_monitor()]?.geometry_scale ?? 1
        : 1;
}

/// Places a dynamic blur actor over the window frame, in coordinates relative to the window
/// buffer's corner.
export function place_dynamic_blur(blur_actor, meta_window, scale) {
    const frame = meta_window.get_frame_rect();
    const buffer = meta_window.get_buffer_rect();
    blur_actor.x = (frame.x - buffer.x) / scale;
    blur_actor.y = (frame.y - buffer.y) / scale;
    blur_actor.width = frame.width / scale;
    blur_actor.height = frame.height / scale;
}

/// Places a monitor-sized static blur actor so that its background lines up with the monitor,
/// clipped to the window frame. The window actor is scaled and moved around its pivot point while it
/// opens or unminimizes, which the blur undoes to keep its background still.
export function place_static_blur(blur_actor, meta_window, monitor, scale) {
    const window_actor = meta_window.get_compositor_private();
    const { scale_x, scale_y, translation_x, translation_y } = window_actor;
    if (scale_x === 0 || scale_y === 0)
        return;

    const frame = meta_window.get_frame_rect();
    const buffer = meta_window.get_buffer_rect();
    const pivot_x = window_actor.pivot_point.x * window_actor.width;
    const pivot_y = window_actor.pivot_point.y * window_actor.height;
    const monitor_x = (monitor.x - buffer.x) / scale;
    const monitor_y = (monitor.y - buffer.y) / scale;
    const shown_x = pivot_x + scale_x * ((frame.x - buffer.x) / scale - pivot_x) + translation_x;
    const shown_y = pivot_y + scale_y * ((frame.y - buffer.y) / scale - pivot_y) + translation_y;

    blur_actor.set_scale(1 / (scale * scale_x), 1 / (scale * scale_y));
    blur_actor.x = pivot_x + (monitor_x - pivot_x - translation_x) / scale_x;
    blur_actor.y = pivot_y + (monitor_y - pivot_y - translation_y) / scale_y;
    blur_actor.set_clip(
        (shown_x - monitor_x) * scale,
        (shown_y - monitor_y) * scale,
        frame.width * scale_x,
        frame.height * scale_y
    );
}
