import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const DESKTOP_APP_IDS = new Set([
    'com.rastersoft.ding',
    'com.rastersoft.dingtest',
    'com.desktop.ding'
]);

// Check if a window is a desktop window (DING, Nautilus desktop, Nemo, etc.)
export function is_desktop_window(meta_window) {
    if (
        meta_window.get_window_type() === Meta.WindowType.DESKTOP
        || meta_window.get_layer() === Meta.StackLayer.DESKTOP
        || meta_window.customJS_ding !== undefined
        || DESKTOP_APP_IDS.has(meta_window.get_gtk_application_id())
    )
        return true;

    // DING keeps track of its own windows, which are not always flagged as desktop windows
    const ding = Main.extensionManager.lookup('ding@rastersoft.com')
        ?? Main.extensionManager.lookup('dingubuntu@rastersoft.com');
    const data = ding?.stateObj?.data;
    return Boolean(
        data?.x11Manager?._windowList?.includes(meta_window)
        || data?.currentProcess?._waylandClient?.owns_window(meta_window)
    );
}
