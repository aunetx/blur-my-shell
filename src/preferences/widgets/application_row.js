import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

import { pick } from '../../dbus/client.js';


export const ApplicationRow = GObject.registerClass({
    GTypeName: 'ApplicationRow',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/widgets/application-row.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'window_picker',
        'remove',
        'picking_failure_toast',
        'window_not_found_toast'
    ],
}, class ApplicationRow extends Adw.EntryRow {
    constructor(window, app_name, { on_changed, on_removed }) {
        super({});
        this._window = window;
        this._on_removed = on_removed;
        this._cancel_pick = null;
        this._pick_timeout_id = null;

        this._remove.connect('clicked', () => this._remove_row());
        this._window_picker.connect('clicked', () => this._do_pick_window());

        if (app_name)
            this.text = app_name;
        else
            this._do_pick_window(true);

        this.connect('changed', on_changed);
    }

    _remove_row() {
        this._on_removed(this);
    }

    _do_pick_window(remove_if_failed = false) {
        this._cancel_window_pick(false);

        const show_failure = () => {
            this._cancel_window_pick();
            this._window.add_toast(this._picking_failure_toast);
            if (remove_if_failed)
                this._remove_row();
        };

        this._pick_timeout_id = setTimeout(show_failure, 1000);
        this._cancel_pick = pick({
            on_picking: () => {
                this._clear_pick_timeout();
                this._pick_timeout_id = setTimeout(
                    () => this._cancel_window_pick(),
                    60_000
                );
            },
            on_picked: wm_class => {
                this._finish_window_pick();
                if (wm_class == 'window-not-found') {
                    console.warn("Can't pick window from here");
                    this._window.add_toast(this._window_not_found_toast);
                    return;
                }
                this.text = wm_class;
            },
            on_error: show_failure,
            on_cancelled: () => {
                this._finish_window_pick();
                if (remove_if_failed)
                    this._remove_row();
            },
        });
    }

    _clear_pick_timeout() {
        if (this._pick_timeout_id) {
            clearTimeout(this._pick_timeout_id);
            this._pick_timeout_id = null;
        }
    }

    _finish_window_pick() {
        this._clear_pick_timeout();
        this._cancel_pick = null;
    }

    _cancel_window_pick(cancel_remote = true) {
        this._clear_pick_timeout();
        if (this._cancel_pick) {
            const cancel = this._cancel_pick;
            this._cancel_pick = null;
            cancel(cancel_remote);
        }
    }

    cleanup() {
        this._cancel_window_pick();
    }
});
