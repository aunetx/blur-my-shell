import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const DESKTOP_APP_IDS = new Set([
    'com.rastersoft.ding',
    'com.rastersoft.dingtest',
    'com.desktop.ding'
]);

// Check if a window is a desktop window (DING, Nautilus desktop, Nemo, etc.)
export function is_desktop_window(meta_window) {
    if (!meta_window)
        return false;

    const window_type = meta_window.get_window_type?.();
    if (window_type === Meta.WindowType.DESKTOP)
        return true;

    const layer = meta_window.get_layer?.();
    if (typeof Meta.StackLayer !== 'undefined')
        if (layer === Meta.StackLayer.DESKTOP)
            return true;
    else if (typeof layer === 'number')
        // Fallback for GNOME < 51 where Meta.StackLayer was not exposed in GJS
        // (0 = META_LAYER_DESKTOP in Mutter's MetaStackLayer enum)
        if (layer === 0)
            return true;

    if (meta_window.customJS_ding !== undefined)
        return true;

    const ding = Main.extensionManager?.lookup('ding@rastersoft.com')
        ?? Main.extensionManager?.lookup('dingubuntu@rastersoft.com');
    if (ding?.stateObj?.data) {
        const data = ding.stateObj.data;
        if (data.x11Manager?._windowList?.includes(meta_window))
            return true;
        if (data.currentProcess?._waylandClient?.owns_window(meta_window))
            return true;
    }

    const app_id = meta_window.get_gtk_application_id?.();
    if (DESKTOP_APP_IDS.has(app_id))
        return true;

    return false;
}
