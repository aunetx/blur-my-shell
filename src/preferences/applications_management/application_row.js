import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';

import { pick } from '../../dbus/client.js';


export const ApplicationRow = GObject.registerClass({
    GTypeName: 'ApplicationRow',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/application-row.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'window_picker',
        'window_class',
        'picking_failure_toast',
        'window_not_found_toast'
    ],
}, class ApplicationRow extends Adw.ExpanderRow {
    constructor(list, app_page, app_name) {
        super({});
        this._list = list;
        this._app_page = app_page;
        this._cancel_pick = null;
        this._pick_timeout_id = null;

        // add a 'remove' button before the text
        let action_row = this.child.get_first_child().get_first_child();
        let remove_button = new Gtk.Button({
            'icon-name': 'remove-row-symbolic',
            'width-request': 38,
            'height-request': 38,
            'margin-top': 6,
            'margin-bottom': 6,
        });
        remove_button.add_css_class('circular');
        remove_button.add_css_class('flat');
        action_row.add_prefix(remove_button);

        // connect the button to the whitelist / blacklist removal
        remove_button.connect('clicked', () => this._remove_row());

        // bind row title to text buffer
        this._window_class.buffer.bind_property(
            'text', this, 'title',
            GObject.BindingFlags.BIDIRECTIONAL | GObject.BindingFlags.SYNC_CREATE
        );

        // set application name if it exists, or open the revealer and pick one
        if (app_name)
            this._window_class.buffer.text = app_name;
        else {
            app_page.close_all_expanded_rows();
            this.set_expanded(true);
            this._do_pick_window(true);
        }

        // pick a window when the picker button is clicked
        this._window_picker.connect('clicked', () => this._do_pick_window());

        // update list on text buffer change
        this._window_class.connect('changed',
            () => this._update_rows_titles()
        );
    }

    _remove_row() {
        this._app_page["remove_from_" + this._list](this);
    }

    _update_rows_titles() {
        this._app_page["update_" + this._list + "_titles"](this);
    }

    _do_pick_window(remove_if_failed = false) {
        this._cancel_window_pick(false);

        const show_failure = () => {
            this._cancel_window_pick();
            this._app_page._preferences_window.add_toast(this._picking_failure_toast);
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
                    this._app_page._preferences_window.add_toast(
                        this._window_not_found_toast
                    );
                    return;
                }
                this._window_class.buffer.text = wm_class;
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
