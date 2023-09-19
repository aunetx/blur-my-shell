import Gio from 'gi://Gio';

const bus_name = 'org.gnome.Shell';
const iface_name = 'dev.aunetx.BlurMyShell';
const obj_path = '/dev/aunetx/BlurMyShell';


/// Call pick() from the DBus service, it will open the Inspector from
/// gnome-shell to pick an actor on stage.
export function pick() {
    Gio.DBus.session.call(
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

/// Connect to DBus 'picking' signal, which will be emitted when the inspector
/// is picking a window.
export function on_picking(cb) {
    const id = Gio.DBus.session.signal_subscribe(
        bus_name,
        iface_name,
        'picking',
        obj_path,
        null,
        Gio.DBusSignalFlags.NONE,
        _ => {
            cb();
            Gio.DBus.session.signal_unsubscribe(id);
        }
    );
}

/// Connect to DBus 'picked' signal, which will be emitted when a window is
/// picked.
export function on_picked(cb) {
    const id = Gio.DBus.session.signal_subscribe(
        bus_name,
        iface_name,
        'picked',
        obj_path,
        null,
        Gio.DBusSignalFlags.NONE,
        (conn, sender, obj_path, iface, signal, params) => {
            const val = params.get_child_value(0);
            cb(val.get_string()[0]);
            Gio.DBus.session.signal_unsubscribe(id);
        }
    );
}
