import * as Main from 'resource:///org/gnome/shell/ui/main.js';

// ENABLED before GNOME 48, ACTIVE since
const ACTIVE_STATE = 1;

export function is_extension_active(uuid) {
    return Main.extensionManager.lookup(uuid)?.state === ACTIVE_STATE;
}
