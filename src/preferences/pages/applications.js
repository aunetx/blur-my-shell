import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

import { bind_settings } from '../bind_settings.js';
import { ApplicationRow } from '../widgets/application_row.js';

import '../widgets/blur_mode_row.js';


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
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/pages/applications.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'blur',
        'blur_mode_row',
        'pipeline_choose_row',
        'corner_radius',
        'rounded_corners',
        'corner_when_maximized',
        'opacity',
        'dynamic_opacity',
        'blur_on_overview',
        'unblur_when_fullscreen',
        'enable_all',
        'whitelist',
        'add_window_whitelist',
        'blacklist',
        'add_window_blacklist'
    ],
}, class Applications extends Adw.PreferencesPage {
    constructor(preferences, preferences_window, pipelines_manager, pipelines_page) {
        super({});
        this._preferences_window = preferences_window;

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.pipelines_page = pipelines_page;

        this._blur_mode_row.initialize(this.preferences.applications);
        this._pipeline_choose_row.initialize(
            this.preferences.applications, this.pipelines_manager, this.pipelines_page
        );

        bind_settings(this.preferences.applications, [
            ['blur', this._blur, 'active'],
            ['opacity', this._opacity, 'value'],
            ['dynamic-opacity', this._dynamic_opacity, 'active'],
            ['corner-radius', this._corner_radius, 'value'],
            ['rounded-corners', this._rounded_corners, 'selected'],
            ['corner-when-maximized', this._corner_when_maximized, 'active'],
            ['blur-on-overview', this._blur_on_overview, 'active'],
            ['unblur-when-fullscreen', this._unblur_when_fullscreen, 'active'],
            ['enable-all', this._enable_all, 'active'],
        ]);

        this._enable_all.bind_property(
            'active', this._whitelist, 'visible',
            GObject.BindingFlags.SYNC_CREATE | GObject.BindingFlags.INVERT_BOOLEAN
        );
        this._enable_all.bind_property(
            'active', this._blacklist, 'visible',
            GObject.BindingFlags.SYNC_CREATE
        );

        this._add_window_whitelist.connect('clicked',
            () => this.add_to_whitelist()
        );
        this._add_window_blacklist.connect('clicked',
            () => this.add_to_blacklist()
        );

        this.add_widgets_from_lists();

        this.preferences.connect('reset', () => {
            this.remove_all_widgets();
            this.add_widgets_from_lists();
        });
    }

    get _whitelist_elements() {
        return make_array(this._whitelist);
    }

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
        this._whitelist_elements.forEach(element => {
            element.cleanup();
            this._whitelist.remove(element);
        });
        this._blacklist_elements.forEach(element => {
            element.cleanup();
            this._blacklist.remove(element);
        });
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
        widget.cleanup();
        this._whitelist.remove(widget);
        this.update_whitelist_titles();
    }

    remove_from_blacklist(widget) {
        widget.cleanup();
        this._blacklist.remove(widget);
        this.update_blacklist_titles();
    }

    cleanup() {
        [...this._whitelist_elements, ...this._blacklist_elements]
            .forEach(element => element.cleanup());
    }
});
