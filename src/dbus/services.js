import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as LookingGlass from 'resource:///org/gnome/shell/ui/lookingGlass.js';

const IFACE_XML = `
<node>
  <interface name="dev.aunetx.BlurMyShell">
    <!-- This method is called in preferences to pick a window -->
    <method name="pick" />
    <method name="cancel" />
    <!-- When window is picking, send a signal to preferences -->
    <signal name="picking"></signal>
    <!-- If window is picked, send a signal to preferences -->
    <signal name="picked">
      <arg name="window" type="s" />
    </signal>
    <signal name="cancelled" />
  </interface>
</node>
`;

const OBJECT_PATH = '/dev/aunetx/BlurMyShell';

export const ApplicationsService = class ApplicationsService {
    constructor() {
        this.DBusImpl = Gio.DBusExportedObject.wrapJSObject(IFACE_XML, this);
        this.exported = false;
        this.inspector = null;
        this.looking_glass = null;
        this.pick_completed = false;
        this.pick_timeout_id = 0;
    }

    /// Pick Window for Preferences Page, exported to DBus client.
    pick() {
        this._cancel_pick(false);
        this.DBusImpl.emit_signal('picking', null);

        const looking_glass = Main.createLookingGlass();
        looking_glass.open();
        looking_glass.hide();

        const inspector = new LookingGlass.Inspector(looking_glass);
        this.inspector = inspector;
        this.looking_glass = looking_glass;
        this.pick_timeout_id = GLib.timeout_add_seconds(
            GLib.PRIORITY_DEFAULT,
            60,
            () => {
                this.pick_timeout_id = 0;
                this._cancel_pick(true);
                return GLib.SOURCE_REMOVE;
            }
        );

        inspector.connect('target', (_inspector, target) => {
            if (this.inspector !== inspector)
                return;

            const window_actor = this._find_window_actor(target);
            const wm_class = window_actor?.meta_window?.get_wm_class()
                ?? 'window-not-found';
            this.pick_completed = true;
            this.DBusImpl.emit_signal(
                'picked',
                new GLib.Variant('(s)', [wm_class])
            );
        });
        inspector.connect('closed', () => this._finish_pick(inspector));
    }

    cancel() {
        this._cancel_pick(false);
    }

    _find_window_actor(target) {
        let actor = target;
        while (actor && !actor.meta_window)
            actor = actor.get_parent?.() ?? null;
        return actor;
    }

    _finish_pick(inspector) {
        if (this.inspector !== inspector)
            return;

        this._clear_pick_timeout();
        this.inspector = null;
        const completed = this.pick_completed;
        this.pick_completed = false;
        const looking_glass = this.looking_glass;
        this.looking_glass = null;
        looking_glass?.close();
        if (!completed)
            this.DBusImpl.emit_signal('cancelled', null);
    }

    _cancel_pick(notify = false) {
        this._clear_pick_timeout();
        const inspector = this.inspector;
        if (!inspector)
            return;

        this.inspector = null;
        const completed = this.pick_completed;
        this.pick_completed = false;
        const looking_glass = this.looking_glass;
        this.looking_glass = null;
        inspector._close();
        looking_glass?.close();
        if (notify && !completed)
            this.DBusImpl.emit_signal('cancelled', null);
    }

    _clear_pick_timeout() {
        if (!this.pick_timeout_id)
            return;

        GLib.Source.remove(this.pick_timeout_id);
        this.pick_timeout_id = 0;
    }

    export() {
        if (this.exported)
            return;

        this.DBusImpl.export(Gio.DBus.session, OBJECT_PATH);
        this.exported = true;
    }

    unexport() {
        if (!this.exported)
            return;

        this._cancel_pick(false);
        this.DBusImpl.unexport();
        this.exported = false;
    }
};
