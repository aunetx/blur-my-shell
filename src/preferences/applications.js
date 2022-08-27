'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;
const { WindowRow } = Me.imports.preferences.window_row;


var Applications = GObject.registerClass({
    GTypeName: 'Applications',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'applications.ui'])}`,
    InternalChildren: [
        'blur',
        'customize',
        'opacity',
        'blur_on_overview',
        'enable_all',
        'whitelist',
        'add_window_whitelist',
        'blacklist',
        'add_window_blacklist'
    ],
}, class Applications extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        this.preferences = new Prefs(Keys);

        this.preferences.applications.settings.bind(
            'blur', this._blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.applications.settings.bind(
            'opacity', this._opacity, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.applications.settings.bind(
            'blur-on-overview', this._blur_on_overview, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.applications.settings.bind(
            'enable-all', this._enable_all, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._customize.connect_to(this.preferences.applications, false);

        // connect 'enable all' button to whitelist/blacklist visibility
        this._enable_all.bind_property(
            'active', this._whitelist, 'visible',
            GObject.BindingFlags.INVERT_BOOLEAN
        );
        this._enable_all.bind_property(
            'active', this._blacklist, 'visible',
            GObject.BindingFlags.DEFAULT
        );

        if (this._enable_all.active)
            this._whitelist.visible = false;
        this._blacklist.visible = !this._whitelist.visible;

        // the Gtk.ListBox which contains the widgets
        this._whitelist_elements = this._whitelist
            .get_first_child()
            .get_last_child()
            .get_first_child();
        this._blacklist_elements = this._blacklist
            .get_first_child()
            .get_last_child()
            .get_first_child();

        // listen to app addition
        this._add_window_whitelist.connect('clicked',
            _ => this.add_to_whitelist()
        );
        this._add_window_blacklist.connect('clicked',
            _ => this.add_to_blacklist()
        );

        // add initial applications
        this.preferences.applications.WHITELIST.forEach(
            app_name => this.add_to_whitelist(app_name)
        );
        this.preferences.applications.BLACKLIST.forEach(
            app_name => this.add_to_blacklist(app_name)
        );
    }

    close_all_expanded() {
        let i = 0;
        let element_w = this._whitelist_elements.get_row_at_index(i);
        while (element_w) {
            element_w.set_expanded(false);

            i += 1;
            element_w = this._whitelist_elements.get_row_at_index(i);
        }

        let j = 0;
        let element_b = this._blacklist_elements.get_row_at_index(i);
        while (element_b) {
            element_b.set_expanded(false);

            i += 1;
            element_b = this._blacklist_elements.get_row_at_index(i);
        }
    }

    add_to_whitelist(app_name = null) {
        let window_row = new WindowRow('whitelist', this, app_name);
        this._whitelist.add(window_row);
    }

    add_to_blacklist(app_name = null) {
        let window_row = new WindowRow('blacklist', this, app_name);
        this._blacklist.add(window_row);
    }

    update_whitelist_titles() {
        let i = 0;
        let element = this._whitelist_elements.get_row_at_index(i);
        let titles = [];
        while (element) {
            let title = element._window_class.buffer.text;
            if (title != "")
                titles.push(title);

            i += 1;
            element = this._whitelist_elements.get_row_at_index(i);
        }

        this.preferences.applications.WHITELIST = titles;
    }

    update_blacklist_titles() {
        let i = 0;
        let element = this._blacklist_elements.get_row_at_index(i);
        let titles = [];
        while (element) {
            let title = element._window_class.buffer.text;
            if (title != "")
                titles.push(title);

            i += 1;
            element = this._blacklist_elements.get_row_at_index(i);
        }

        this.preferences.applications.BLACKLIST = titles;
    }

    remove_from_whitelist(widget) {
        this._whitelist.remove(widget);
        this.update_whitelist_titles();
    }

    remove_from_blacklist(widget) {
        this._blacklist.remove(widget);
        this.update_blacklist_titles();
    }
});