import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export function getPanelCornerRadius(panel_blur, panel, panel_box) {
    const monitor = findPanelMonitor(panel, panel_box);
    if (!monitor)
        return panel_blur.blur_settings.CORNER_RADIUS;

    const geometry = panel_blur.get_panel_geometry(panel, panel_box, monitor);
    if (!geometry)
        return panel_blur.blur_settings.CORNER_RADIUS;

    if (isEdgeToEdgePanel(geometry, monitor))
        return 0;

    return panel_blur.blur_settings.CORNER_RADIUS;
}

export function findPanelMonitor(panel, panel_box) {
    return Main.layoutManager.findMonitorForActor(panel_box) ??
        Main.layoutManager.findMonitorForActor(panel);
}

function isEdgeToEdgePanel(geometry, monitor) {
    const tolerance = 2;
    const full_width = geometry.width >= monitor.width - tolerance;
    const full_height = geometry.height >= monitor.height - tolerance;
    const touches_left = Math.abs(geometry.x - monitor.x) <= tolerance;
    const touches_right = Math.abs(geometry.x + geometry.width - monitor.x - monitor.width) <= tolerance;
    const touches_top = Math.abs(geometry.y - monitor.y) <= tolerance;
    const touches_bottom = Math.abs(geometry.y + geometry.height - monitor.y - monitor.height) <= tolerance;

    return (
        (full_width && touches_left && touches_right && (touches_top || touches_bottom))
        || (full_height && touches_top && touches_bottom && (touches_left || touches_right))
    );
}
