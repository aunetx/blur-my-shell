import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';

import { ApplicationRow } from './applications_management/application_row.js';


const make_array = prefs_group => {
    let list_box = prefs_group
        .get_first_child()
        .get_last_child()
        .get_first_child();

    let elements = [];
    let i = 0;
    let element = list_box.get_row_at_index(i);
    while (element) {
        elements.push(element);
        i++;
        element = list_box.get_row_at_index(i);
    }

    return elements;
};


export const Applications = GObject.registerClass({
    GTypeName: 'Applications',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/applications.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'blur',
        'sigma',
        'brightness',
        'opacity',
        'dynamic_opacity',
        'blur_on_overview',
        'enable_all',
        'whitelist',
        'add_window_whitelist',
        'blacklist',
        'add_window_blacklist'
    ],
}, class Applications extends Adw.PreferencesPage {
    constructor(preferences, preferences_window) {
        super({});
        this._preferences_window = preferences_window;

        this.preferences = preferences;

        this.preferences.applications.settings.bind(
            'blur', this._blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.applications.settings.bind(
            'opacity', this._opacity, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.applications.settings.bind(
            'dynamic-opacity', this._dynamic_opacity, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.applications.settings.bind(
            'blur-on-overview', this._blur_on_overview, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.applications.settings.bind(
            'enable-all', this._enable_all, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.applications.settings.bind(
            'sigma', this._sigma, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.applications.settings.bind(
            'brightness', this._brightness, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );

        // connect 'enable all' button to whitelist/blacklist visibility
        this._enable_all.bind_property(
            'active', this._whitelist, 'visible',
            GObject.BindingFlags.INVERT_BOOLEAN
        );
        this._enable_all.bind_property(
            'active', this._blacklist, 'visible',
            GObject.BindingFlags.DEFAULT
        );

        // make sure that blacklist / whitelist is correctly hidden
        if (this._enable_all.active)
            this._whitelist.visible = false;
        this._blacklist.visible = !this._whitelist.visible;

        // listen to app row addition
        this._add_window_whitelist.connect('clicked',
            () => this.add_to_whitelist()
        );
        this._add_window_blacklist.connect('clicked',
            () => this.add_to_blacklist()
        );

        // add initial applications
        this.add_widgets_from_lists();

        this.preferences.connect('reset', () => {
            this.remove_all_widgets();
            this.add_widgets_from_lists();
        });
    }

    // A way to retriew the whitelist widgets.
    get _whitelist_elements() {
        return make_array(this._whitelist);
    }

    // A way to retriew the blacklist widgets.
    get _blacklist_elements() {
        return make_array(this._blacklist);
    }

    add_widgets_from_lists() {
        this.preferences.applications.WHITELIST.forEach(
            app_name => this.add_to_whitelist(app_name)
        );

        this.preferences.applications.BLACKLIST.forEach(
            app_name => this.add_to_blacklist(app_name)
        );

    }

    close_all_expanded_rows() {
        this._whitelist_elements.forEach(
            element => element.set_expanded(false)
        );
        this._blacklist_elements.forEach(
            element => element.set_expanded(false)
        );
    }

    remove_all_widgets() {
        this._whitelist_elements.forEach(
            element => this._whitelist.remove(element)
        );
        this._blacklist_elements.forEach(
            element => this._blacklist.remove(element)
        );
    }

    add_to_whitelist(app_name = null) {
        let window_row = new ApplicationRow('whitelist', this, app_name);
        this._whitelist.add(window_row);
    }

    add_to_blacklist(app_name = null) {
        let window_row = new ApplicationRow('blacklist', this, app_name);
        this._blacklist.add(window_row);
    }

    update_whitelist_titles() {
        let titles = this._whitelist_elements
            .map(element => element._window_class.buffer.text)
            .filter(title => title != "");

        this.preferences.applications.WHITELIST = titles;
    }

    update_blacklist_titles() {
        let titles = this._blacklist_elements
            .map(element => element._window_class.buffer.text)
            .filter(title => title != "");

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