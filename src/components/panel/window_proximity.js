import Meta from 'gi://Meta';
import St from 'gi://St';

import { is_desktop_window } from '../../conveniences/window.js';

// system overlays, like on-screen keyboards or desktop icons, never make a panel opaque
const PROXIMITY_WINDOW_TYPES = [
    Meta.WindowType.NORMAL,
    Meta.WindowType.DIALOG,
    Meta.WindowType.MODAL_DIALOG,
];

/// The windows of the active workspace that can touch a panel.
export function get_proximity_windows() {
    return global.workspace_manager.get_active_workspace().list_windows().filter(meta_window =>
        meta_window.showing_on_its_workspace()
        && !meta_window.is_hidden()
        && PROXIMITY_WINDOW_TYPES.includes(meta_window.get_window_type())
        && !is_desktop_window(meta_window)
    );
}

/// Whether a window touches the panel, or comes within a few pixels of it, for panels at the top
/// or at the bottom of their monitor.
export function has_window_near_panel(actors, windows) {
    const margin = 5 * St.ThemeContext.get_for_stage(global.stage).scale_factor;
    const panel = actors.widgets.panel;
    const panel_top = panel.get_transformed_position()[1];
    const panel_bottom = panel_top + panel.get_height();
    const is_top_panel = panel_top === actors.monitor.y;

    return windows.some(meta_window => {
        if (meta_window.get_monitor() !== actors.monitor.index)
            return false;

        const frame = meta_window.get_frame_rect();
        return is_top_panel
            ? frame.y < panel_bottom + margin
            : panel_top > actors.monitor.y && frame.y + frame.height > panel_top - margin;
    });
}
