import Gio from 'gi://Gio';
import GLib from 'gi://GLib';

Gio._promisify(Gio.DBusConnection.prototype, 'call', 'call_finish');

const DOCK_UUIDS = ['dash-to-dock@micxgx.gmail.com', 'ubuntu-dock@ubuntu.com'];
const DOCK_SCHEMA = 'org.gnome.shell.extensions.dash-to-dock';
// ENABLED before GNOME 48, ACTIVE since
const ACTIVE_STATE = 1;

async function get_extension_info(uuid) {
    const reply = await Gio.DBus.session.call(
        'org.gnome.Shell',
        '/org/gnome/Shell',
        'org.gnome.Shell.Extensions',
        'GetExtensionInfo',
        new GLib.Variant('(s)', [uuid]),
        new GLib.VariantType('(a{sv})'),
        Gio.DBusCallFlags.NONE,
        -1,
        null
    );
    return reply.recursiveUnpack()[0];
}

/// Ubuntu Dock installs its schema system-wide, Dash to Dock ships it in its own folder.
function lookup_schema(extension_path) {
    const default_source = Gio.SettingsSchemaSource.get_default();
    const directory = GLib.build_filenamev([extension_path, 'schemas']);
    const source = GLib.file_test(directory, GLib.FileTest.IS_DIR)
        ? Gio.SettingsSchemaSource.new_from_directory(directory, default_source, false)
        : default_source;
    return source.lookup(DOCK_SCHEMA, true);
}

/// The settings of Dash to Dock or Ubuntu Dock, if one of them is running.
export async function get_running_dock_settings() {
    for (const uuid of DOCK_UUIDS) {
        const info = await get_extension_info(uuid);
        if (info.state !== ACTIVE_STATE)
            continue;

        const schema = lookup_schema(info.path);
        return schema ? new Gio.Settings({ settings_schema: schema }) : null;
    }
    return null;
}

/// Without its built-in theme, Dash to Dock paints a custom opacity or color over the background
/// styles.
export function dock_overrides_background(settings) {
    return !settings.get_boolean('apply-custom-theme')
        && (settings.get_string('transparency-mode') !== 'DEFAULT'
            || settings.get_boolean('custom-background-color'));
}
