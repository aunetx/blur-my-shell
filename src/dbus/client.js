'use strict';

const Gio = imports.gi.Gio;

const connect = Gio.DBus.session;
const bus_name = 'org.gnome.Shell';
const iface_name = 'dev.aunetx.BlurMyShell';
const obj_path = '/dev/aunetx/BlurMyShell';

/**
 * Call pick() of DBus service, it will open Inspector from gnome-shell to
 * Pick actor on stage.
 */
function pick() {
    connect.call(
        bus_name,
        obj_path,
        iface_name,
        'pick',
        null,
        null,
        Gio.DBusCallFlags.NO_AUTO_START,
        -1,
        null,
        null
    );
}

/**
 * Connect to 'picked' signal, it will be emit when window is picked
 */
function on_picked(cb) {
    const id = connect.signal_subscribe(
        bus_name,
        iface_name,
        'picked',
        obj_path,
        null,
        Gio.DBusSignalFlags.NONE,
        (conn, sender, obj_path, iface, signal, params) => {
            const val = params.get_child_value(0);
            cb(val.get_string()[0]);
            connect.signal_unsubscribe(id);
        }
    );
}
