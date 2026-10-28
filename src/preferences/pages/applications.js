import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

import { bind_settings } from '../bind_settings.js';
import { ApplicationRow } from '../widgets/application_row.js';

import '../widgets/blur_mode_row.js';


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
        'add_whitelist',
        'blacklist',
        'add_blacklist'
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

        this._lists = {
            whitelist: { group: this._whitelist, key: 'WHITELIST', rows: [] },
            blacklist: { group: this._blacklist, key: 'BLACKLIST', rows: [] },
        };
        this._add_whitelist.connect('clicked', () => this.add_window(this._lists.whitelist));
        this._add_blacklist.connect('clicked', () => this.add_window(this._lists.blacklist));

        this.add_windows_from_settings();

        this.preferences.connect('reset', () => {
            this.remove_all_windows();
            this.add_windows_from_settings();
        });
    }

    add_windows_from_settings() {
        for (const list of Object.values(this._lists)) {
            this.preferences.applications[list.key].forEach(
                app_name => this.add_window(list, app_name)
            );
        }
    }

    add_window(list, app_name = null) {
        const row = new ApplicationRow(this._preferences_window, app_name, {
            on_changed: () => this.save_list(list),
            on_removed: removed => this.remove_window(list, removed),
        });
        list.rows.push(row);
        list.group.add(row);
    }

    remove_window(list, row) {
        row.cleanup();
        list.group.remove(row);
        list.rows.splice(list.rows.indexOf(row), 1);
        this.save_list(list);
    }

    remove_all_windows() {
        for (const list of Object.values(this._lists)) {
            list.rows.forEach(row => {
                row.cleanup();
                list.group.remove(row);
            });
            list.rows = [];
        }
    }

    save_list(list) {
        this.preferences.applications[list.key] = list.rows
            .map(row => row.text)
            .filter(app_name => app_name !== '');
    }

    cleanup() {
        Object.values(this._lists).forEach(list => list.rows.forEach(row => row.cleanup()));
    }
});
