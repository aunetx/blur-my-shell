import Gio from 'gi://Gio';

const bus_name = 'org.gnome.Shell';
const iface_name = 'dev.aunetx.BlurMyShell';
const obj_path = '/dev/aunetx/BlurMyShell';
let active_pick = null;

export function cancel_pick() {
    active_pick?.(true, true);
}

function cancel_remote_pick() {
    Gio.DBus.session.call(
        bus_name,
        obj_path,
        iface_name,
        'cancel',
        null,
        null,
        Gio.DBusCallFlags.NO_AUTO_START,
        1000,
        null,
        null
    );
}

function subscribe_once(signal, callback) {
    let active = true;
    const id = Gio.DBus.session.signal_subscribe(
        bus_name,
        iface_name,
        signal,
        obj_path,
        null,
        Gio.DBusSignalFlags.NONE,
        (...args) => {
            unsubscribe();
            callback(...args);
        }
    );

    const unsubscribe = () => {
        if (!active)
            return;
        active = false;
        Gio.DBus.session.signal_unsubscribe(id);
    };

    return unsubscribe;
}

/// Call pick() from the DBus service, it will open the Inspector from
/// gnome-shell to pick an actor on stage.
export function pick({ on_picking, on_picked, on_error, on_cancelled }) {
    active_pick?.(true, false);

    let active = true;
    const unsubscribes = [];
    const cancel = (notify = false, cancel_remote = false) => {
        if (!active)
            return;
        active = false;
        unsubscribes.forEach(unsubscribe => unsubscribe());
        if (active_pick === cancel)
            active_pick = null;
        if (cancel_remote)
            cancel_remote_pick();
        if (notify)
            on_cancelled?.();
    };

    unsubscribes.push(
        subscribe_once('picking', () => on_picking?.()),
        subscribe_once('picked', (_connection, _sender, _path, _iface, _signal, params) => {
            const wm_class = params.get_child_value(0).get_string()[0];
            cancel();
            on_picked?.(wm_class);
        }),
        subscribe_once('cancelled', () => {
            cancel();
            on_cancelled?.();
        })
    );
    active_pick = cancel;

    Gio.DBus.session.call(
        bus_name,
        obj_path,
        iface_name,
        'pick',
        null,
        null,
        Gio.DBusCallFlags.NO_AUTO_START,
        1000,
        null,
        (connection, result) => {
            try {
                connection.call_finish(result);
            } catch (error) {
                if (!active)
                    return;
                cancel(false, true);
                on_error?.(error);
            }
        }
    );

    return (cancel_remote = true) => cancel(false, cancel_remote);
}
