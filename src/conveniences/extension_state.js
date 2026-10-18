import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

import { Connections } from './connections.js';

export const ExtensionState = {
    ACTIVE: 1,
    INACTIVE: 2,
    ERROR: 3,
    OUT_OF_DATE: 4,
    DOWNLOADING: 5,
    INITIALIZED: 6,
    DEACTIVATING: 7,
    ACTIVATING: 8,
    UNINSTALLED: 99,
};

const DBUS_BUS_NAME = 'org.gnome.Shell';
const DBUS_OBJECT_PATH = '/org/gnome/Shell';
const DBUS_INTERFACE_NAME = 'org.gnome.Shell.Extensions';


/// Can be used in shell and preferences to track the state of extensions.
/// Pass Main.extensionManager in shell, omit it in preferences to use D-Bus.
export const ExtensionStateTracker = GObject.registerClass({
    Signals: {
        // param: extension UUID (null only for D-Bus snapshot or availability updates)
        'changed': { param_types: [GObject.TYPE_STRING] },
    },
}, class ExtensionStateTracker extends GObject.Object {
    constructor(extension_manager = null) {
        super();

        this.ready = false;
        this.dbus_error = null;
        this._extensions = new Map();
        this._settings = new Map();
        this._connections = new Connections();
        this._dbus_query = null;
        this._dbus_pending_changes = new Map();
        this._dbus_subscription = 0;
        this._dbus_name_watch = 0;
        this._dbus_connection = null;

        if (extension_manager) {
            // running in shell
            this._connections.connect(extension_manager, 'extension-state-changed',
                (_manager, extension) => this._update(extension.uuid, extension));
            for (const uuid of extension_manager.getUuids())
                this._update(uuid, extension_manager.lookup(uuid), false);
            this.ready = true;
        } else {
            // running in preferences
            this._watch_dbus();
        }
    }

    /// Null means absent when ready is true, or unknown when ready is false.
    get(uuid) {
        return this.ready ? this._extensions.get(uuid) ?? null : null;
    }

    /// This simply returns a Gio.Settings object. The caller owns the signals.
    get_settings(uuid, schema_id) {
        const extension = this.get(uuid);
        if (!extension)
            return null;

        let settings = this._settings.get(uuid);
        if (settings?.has(schema_id))
            return settings.get(schema_id);

        let source = Gio.SettingsSchemaSource.get_default();
        const schema_dir = GLib.build_filenamev([extension.path, 'schemas']);
        if (GLib.file_test(GLib.build_filenamev([schema_dir, 'gschemas.compiled']), GLib.FileTest.IS_REGULAR))
            source = Gio.SettingsSchemaSource.new_from_directory(schema_dir, source, false);

        const schema = source?.lookup(schema_id, true);
        if (!schema)
            return null;

        if (!settings) {
            settings = new Map();
            this._settings.set(uuid, settings);
        }
        const result = new Gio.Settings({ settings_schema: schema });
        settings.set(schema_id, result);
        return result;
    }

    _update(uuid, info, notify = true) {
        if (this._extensions.get(uuid)?.path !== info.path || info.state === ExtensionState.UNINSTALLED)
            this._settings.delete(uuid);

        if (info.state === ExtensionState.UNINSTALLED)
            this._extensions.delete(uuid);
        else
            this._extensions.set(uuid, {
                uuid,
                name: info.metadata?.name ?? info.name,
                path: info.path,
                state: info.state,
                active: info.state === ExtensionState.ACTIVE,
            });
        if (notify)
            this.emit('changed', uuid);
    }

    _watch_dbus() {
        this._dbus_connection = Gio.DBus.session;
        this._dbus_subscription = this._dbus_connection.signal_subscribe(
            DBUS_BUS_NAME, DBUS_INTERFACE_NAME, 'ExtensionStateChanged', DBUS_OBJECT_PATH,
            null, Gio.DBusSignalFlags.NONE,
            (_connection, _sender, _path, _interface, _signal, parameters) => {
                const [uuid, values] = parameters.deep_unpack();
                const info = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.deep_unpack()]));
                if (this.dbus_error && !this._dbus_query)
                    this._load_dbus();
                if (this._dbus_query)
                    this._dbus_pending_changes.set(uuid, info);
                this._update(uuid, info);
            }
        );
        this._dbus_name_watch = Gio.bus_watch_name_on_connection(
            this._dbus_connection, DBUS_BUS_NAME, Gio.BusNameWatcherFlags.NONE,
            () => this._load_dbus(),
            () => this._dbus_set_unavailable()
        );
    }

    _load_dbus() {
        const query = new Gio.Cancellable();
        this._dbus_query = query;
        this._dbus_connection.call(
            DBUS_BUS_NAME, DBUS_OBJECT_PATH, DBUS_INTERFACE_NAME, 'ListExtensions',
            null, new GLib.VariantType('(a{sa{sv}})'),
            Gio.DBusCallFlags.NO_AUTO_START, 5000, query,
            (connection, result) => {
                let extensions;
                try {
                    [extensions] = connection.call_finish(result).deep_unpack();
                } catch (error) {
                    if (!query.is_cancelled())
                        this._dbus_set_unavailable(error);
                    return;
                }
                if (query.is_cancelled())
                    return;

                this._dbus_query = null;
                const previous = this._extensions;
                this._extensions = new Map();
                for (const [uuid, values] of Object.entries(extensions)) {
                    const info = Object.fromEntries(
                        Object.entries(values).map(([key, value]) => [key, value.deep_unpack()])
                    );
                    this._update(uuid, info, false);
                }
                // signals received during the request are newer than its snapshot
                for (const [uuid, info] of this._dbus_pending_changes)
                    this._update(uuid, info, false);
                this._dbus_pending_changes.clear();
                for (const [uuid, info] of previous) {
                    if (this._extensions.get(uuid)?.path !== info.path)
                        this._settings.delete(uuid);
                }
                this.ready = true;
                this.dbus_error = null;
                this.emit('changed', null);
            }
        );
    }

    _dbus_set_unavailable(error = null) {
        this._dbus_query?.cancel();
        this._dbus_query = null;
        this._dbus_pending_changes.clear();
        this._extensions.clear();
        this._settings.clear();
        this.ready = false;
        this.dbus_error = error;
        this.emit('changed', null);
    }

    destroy() {
        this._connections.disconnect_all();
        if (this._dbus_name_watch)
            Gio.bus_unwatch_name(this._dbus_name_watch);
        this._dbus_name_watch = 0;
        if (this._dbus_subscription)
            this._dbus_connection.signal_unsubscribe(this._dbus_subscription);
        this._dbus_subscription = 0;
        this._dbus_query?.cancel();
        this._dbus_query = null;
        this._dbus_pending_changes.clear();
        this._extensions.clear();
        this._settings.clear();
        this._dbus_connection = null;
        this.ready = false;
        this.dbus_error = null;
    }
});
