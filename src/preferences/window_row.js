'use strict';

const { Adw, GLib, GObject, Gio, Gtk } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { pick, on_picked } = Me.imports.dbus.client;


var WindowRow = GObject.registerClass({
    GTypeName: 'WindowRow',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'window-row.ui'])}`,
    InternalChildren: [
        'window_picker',
        'window_class'
    ],
}, class WindowRow extends Adw.ExpanderRow {
    constructor(list, app_page, app_name) {
        super({});
        this._is_whitelist = list == 'whitelist';
        this._app_page = app_page;
        this._app_name = app_name;

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

        remove_button.connect('clicked', _ => {
            if (this._is_whitelist)
                this._app_page.remove_from_whitelist(this);
            else
                this._app_page.remove_from_blacklist(this);
        });

        action_row.add_prefix(remove_button);

        // bind window name to text buffer
        this._window_class.buffer.bind_property(
            'text', this, 'title',
            Gio.SettingsBindFlags.BIDIRECTIONNAL
        );

        // set application name if it exists, else open the revealer to focus
        if (this._app_name) {
            this._window_class.buffer.text = this._app_name;
        } else {
            this._app_page.close_all_expanded();
            this.set_expanded(true);
            this.do_pick_window();
        }

        this._window_picker.connect('clicked', _ => this.do_pick_window());

        // update list on buffer change
        this._window_class.connect('changed', _ => {
            if (this._is_whitelist)
                this._app_page.update_whitelist_titles(this);
            else
                this._app_page.update_blacklist_titles(this);
        });
    }

    do_pick_window() {
        on_picked(wm_class => {
            if (wm_class == 'window-not-found') {
                log("Can't pick window from here");
                return;
            }
            this._window_class.buffer.text = wm_class;
        });
        pick();
    }
});
