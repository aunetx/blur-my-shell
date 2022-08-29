'use strict';

const { Adw, GLib, GObject, Gio, Gtk } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { pick, on_picking, on_picked } = Me.imports.dbus.client;


var WindowRow = GObject.registerClass({
    GTypeName: 'WindowRow',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'window-row.ui'])}`,
    InternalChildren: [
        'window_picker',
        'window_class',
        'picking_failure_toast'
    ],
}, class WindowRow extends Adw.ExpanderRow {
    constructor(list, app_page, app_name) {
        super({});
        this._list = list;
        this._app_page = app_page;

        // add a 'remove' button before the text
        let action_row = this.child.get_first_child().get_first_child();
        let remove_button = new Gtk.Button({
            'icon-name': 'remove-window-symbolic',
            'width-request': 38,
            'height-request': 38,
            'margin-top': 6,
            'margin-bottom': 6,
        });
        remove_button.add_css_class('circular');
        remove_button.add_css_class('flat');
        action_row.add_prefix(remove_button);

        // connect the button to the whitelist / blacklist removal
        remove_button.connect('clicked', _ => this._remove_row());

        // bind row title to text buffer
        this._window_class.buffer.bind_property(
            'text', this, 'title',
            Gio.SettingsBindFlags.BIDIRECTIONNAL
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
        this._window_picker.connect('clicked', _ => this._do_pick_window());

        // update list on text buffer change
        this._window_class.connect('changed',
            _ => this._update_rows_titles()
        );
    }

    _remove_row() {
        this._app_page["remove_from_" + this._list](this);
    }

    _update_rows_titles() {
        this._app_page["update_" + this._list + "_titles"](this);
    }

    _do_pick_window(remove_if_failed = false) {
        // a mechanism to know if the extension is listening correcly
        let has_responded = false;
        let should_take_answer = true;
        setTimeout(_ => {
            if (!has_responded) {
                // show toast about failure
                this._app_page._preferences_window.add_toast(
                    this._picking_failure_toast
                );

                // prevent title from changing with later picks
                should_take_answer = false;

                // remove row if asked
                if (remove_if_failed)
                    this._remove_row();
            }
        }, 15);

        on_picking(_ =>
            has_responded = true
        );

        on_picked(wm_class => {
            if (should_take_answer) {
                if (wm_class == 'window-not-found') {
                    log("Can't pick window from here");
                    return;
                }
                this._window_class.buffer.text = wm_class;
            }
        });

        pick();
    }
});
