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
/// clipped to the window frame.
export function place_static_blur(blur_actor, meta_window, monitor, scale) {
    const frame = meta_window.get_frame_rect();
    const buffer = meta_window.get_buffer_rect();
    blur_actor.set_scale(1 / scale, 1 / scale);
    blur_actor.x = (monitor.x - buffer.x) / scale;
    blur_actor.y = (monitor.y - buffer.y) / scale;
    blur_actor.set_clip(frame.x - monitor.x, frame.y - monitor.y, frame.width, frame.height);
}
