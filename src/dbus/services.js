'use strict';

const { Gio, GLib } = imports.gi;
const Main = imports.ui.main;
const LookingGlass = imports.ui.lookingGlass;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const load_file = path => {
    const [, buffer] = GLib.file_get_contents(path);
    const contents = imports.byteArray.toString(buffer);
    GLib.free(buffer);
    return contents;
};

const iface = load_file(Me.dir.get_path() + '/dbus/iface.xml');

var ApplicationsService = class ApplicationsService {
    constructor() {
        this.DBusImpl = Gio.DBusExportedObject.wrapJSObject(iface, this);
    }

    /// Pick Window for Preferences Page, exported to DBus client.
    pick() {
        // emit `picking` signal to know we are listening
        const send_picking_signal = _ =>
            this.DBusImpl.emit_signal(
                'picking',
                null
            );

        // emit `picked` signal to send wm_class
        const send_picked_signal = wm_class =>
            this.DBusImpl.emit_signal(
                'picked',
                new GLib.Variant('(s)', [wm_class])
            );

        // notify the preferences that we are listening
        send_picking_signal();

        // A very interesting way to pick a window:
        // 1. Open LookingGlass to mask all event handles of window
        // 2. Use inspector to pick window, thats is also lookingGlass do
        // 3. Close LookingGlass when done
        // It will restore event handles of window

        // open then hide LookingGlass
        const looking_class = Main.createLookingGlass();
        looking_class.open();
        looking_class.hide();

        // inspect window now
        const inspector = new LookingGlass.Inspector(Main.createLookingGlass());
        inspector.connect('target', (me, target, x, y) => {
            // remove border effect when window is picked.
            const effect_name = 'lookingGlass_RedBorderEffect';
            target
                .get_effects()
                .filter(e => e.toString().includes(effect_name))
                .forEach(e => target.remove_effect(e));

            // get wm_class_instance property of window, then pass it to DBus
            // client
            const type_str = target.toString();

            let actor = target;
            if (type_str.includes('MetaSurfaceActor'))
                actor = target.get_parent();

            if (!actor.toString().includes('WindowActor'))
                return send_picked_signal('window-not-found');

            send_picked_signal(
                actor.meta_window.get_wm_class() ?? 'window-not-found'
            );
        });

        // close LookingGlass when we're done
        inspector.connect('closed', _ => looking_class.close());
    }

    export() {
        this.DBusImpl.export(
            Gio.DBus.session,
            '/dev/aunetx/BlurMyShell'
        );
    }

    unexport() {
        this.DBusImpl.unexport();
    }
};
