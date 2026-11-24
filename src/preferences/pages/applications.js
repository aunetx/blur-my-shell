import Adw from 'gi://Adw';
import GObject from 'gi://GObject';

import { ui_template } from '../resources.js';
import { bind_settings } from '../bind_settings.js';
import { ApplicationRow } from '../widgets/application_row.js';

import '../widgets/blur_mode_row.js';

export const Applications = GObject.registerClass({
    GTypeName: 'Applications',
    Template: ui_template('pages/applications.ui'),
    InternalChildren: [
        'blur',
        'blur_mode_row',
        'pipeline_auto_mode_switch',
        'pipeline_choose_row',
        'pipeline_choose_auto_light_row',
        'pipeline_choose_auto_dark_row',
        'corner_radius',
        'rounded_corners',
        'corner_when_maximized',
        'opacity',
        'dynamic_opacity',
        'blur_on_overview',
        'solid_on_workspace_switch',
        'unblur_when_fullscreen',
        'blur_menus',
        'menu_corner_radius',
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
            this.preferences.applications, 'PIPELINE',
            this.pipelines_manager, this.pipelines_page
        );
        this._pipeline_choose_auto_light_row.initialize(
            this.preferences.applications, 'PIPELINE_LIGHT',
            this.pipelines_manager, this.pipelines_page
        );
        this._pipeline_choose_auto_dark_row.initialize(
            this.preferences.applications, 'PIPELINE_DARK',
            this.pipelines_manager, this.pipelines_page
        );

        bind_settings(this.preferences.applications, [
            ['blur', this._blur, 'active'],
            ['pipeline-auto-mode', this._pipeline_auto_mode_switch, 'active'],
            ['opacity', this._opacity, 'value'],
            ['dynamic-opacity', this._dynamic_opacity, 'active'],
            ['corner-radius', this._corner_radius, 'value'],
            ['rounded-corners', this._rounded_corners, 'selected'],
            ['corner-when-maximized', this._corner_when_maximized, 'active'],
            ['blur-on-overview', this._blur_on_overview, 'active'],
            ['solid-on-workspace-switch', this._solid_on_workspace_switch, 'active'],
            ['unblur-when-fullscreen', this._unblur_when_fullscreen, 'active'],
            ['blur-menus', this._blur_menus, 'active'],
            ['menu-corner-radius', this._menu_corner_radius, 'value'],
            ['enable-all', this._enable_all, 'active'],
        ]);

        // Keep both whitelist and blacklist groups always visible
        this._whitelist.visible = true;
        this._blacklist.visible = true;

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
        let whitelist = this.preferences.applications.WHITELIST || [];
        let blacklist = this.preferences.applications.BLACKLIST || [];

        const seen_w = new Set();
        const clean_whitelist = [];
        whitelist.forEach(item => {
            const clean = item?.trim() || '';
            const lower = clean.toLowerCase();
            if (clean !== '' && !seen_w.has(lower)) {
                seen_w.add(lower);
                clean_whitelist.push(clean);
            }
        });

        const seen_b = new Set();
        const clean_blacklist = [];
        blacklist.forEach(item => {
            const clean = item?.trim() || '';
            const lower = clean.toLowerCase();
            if (clean !== '' && !seen_w.has(lower) && !seen_b.has(lower)) {
                seen_b.add(lower);
                clean_blacklist.push(clean);
            }
        });

        if (clean_whitelist.length !== whitelist.length)
            this.preferences.applications.WHITELIST = clean_whitelist;
        if (clean_blacklist.length !== blacklist.length)
            this.preferences.applications.BLACKLIST = clean_blacklist;

        clean_whitelist.forEach(app_name => this.add_window(this._lists.whitelist, app_name));
        clean_blacklist.forEach(app_name => this.add_window(this._lists.blacklist, app_name));
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
        if (this._saving_lists)
            return;
        this._saving_lists = true;

        try {
            const seen = new Set();
            const unique_rows = [];
            const duplicate_rows = [];

            list.rows.forEach(row => {
                const text = row.text?.trim() || '';
                if (text !== '') {
                    const text_lower = text.toLowerCase();
                    if (seen.has(text_lower)) {
                        duplicate_rows.push(row);
                    } else {
                        seen.add(text_lower);
                        unique_rows.push(row);
                    }
                }
            });

            // Remove internal duplicate rows
            duplicate_rows.forEach(row => {
                row.cleanup();
                list.group.remove(row);
                list.rows.splice(list.rows.indexOf(row), 1);
            });

            this.preferences.applications[list.key] = unique_rows
                .map(row => row.text.trim())
                .filter(name => name !== '');

            // Cross-list conflict prevention: an app cannot be in both whitelist and blacklist
            const other = list.key === 'WHITELIST' ? this._lists.blacklist : this._lists.whitelist;
            const other_conflict_rows = [];

            other.rows.forEach(row => {
                const text = row.text?.trim() || '';
                if (text !== '' && seen.has(text.toLowerCase())) {
                    other_conflict_rows.push(row);
                }
            });

            if (other_conflict_rows.length > 0) {
                other_conflict_rows.forEach(row => {
                    const text = row.text.trim();
                    row.cleanup();
                    other.group.remove(row);
                    other.rows.splice(other.rows.indexOf(row), 1);
                    if (this._preferences_window?.add_toast) {
                        const target_list_name = other.key === 'BLACKLIST' ? 'Excluded windows' : 'Blurred windows';
                        this._preferences_window.add_toast(
                            new Adw.Toast({ title: `"${text}" removed from ${target_list_name}` })
                        );
                    }
                });

                this.preferences.applications[other.key] = other.rows
                    .map(row => row.text.trim())
                    .filter(name => name !== '');
            }
        } finally {
            this._saving_lists = false;
        }
    }

    cleanup() {
        Object.values(this._lists).forEach(list => list.rows.forEach(row => row.cleanup()));
    }
});
