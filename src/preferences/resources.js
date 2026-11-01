import Gio from 'gi://Gio';
import GLib from 'gi://GLib';

const RESOURCE_PATH = '/org/gnome/shell/extensions/blur-my-shell';

export const ICONS_RESOURCE_PATH = `${RESOURCE_PATH}/icons/hicolor`;

// Templates are read when their class is registered, as soon as their module is imported.
Gio.resources_register(Gio.Resource.load(GLib.filename_from_uri(
    GLib.uri_resolve_relative(import.meta.url, '../resources.gresource', GLib.UriFlags.NONE)
)[0]));

export function ui_resource(path) {
    return `${RESOURCE_PATH}/ui/${path}`;
}

export function ui_template(path) {
    return `resource://${ui_resource(path)}`;
}
