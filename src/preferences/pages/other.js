import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { Connections } from '../../conveniences/connections.js';


export const Other = GObject.registerClass({
    GTypeName: 'Other',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/other.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'lockscreen_blur',
        'lockscreen_pipeline_choose_row',

        'screenshot_blur',
        'screenshot_pipeline_choose_row',

        'window_list_group',
        'window_list_blur',
        'window_list_pipeline_choose_row',

        'coverflow_alt_tab_group',
        'coverflow_alt_tab_blur',
        'coverflow_alt_tab_pipeline_choose_row',

        'debug',
        'reset'
    ],
}, class Other extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page, extension_state) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.pipelines_page = pipelines_page;
        this.extension_state = extension_state;
        this.connections = new Connections();

        this.preferences.lockscreen.settings.bind(
            'blur', this._lockscreen_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._lockscreen_pipeline_choose_row.initialize(
            this.preferences.lockscreen, this.pipelines_manager, this.pipelines_page
        );

        this.preferences.screenshot.settings.bind(
            'blur', this._screenshot_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._screenshot_pipeline_choose_row.initialize(
            this.preferences.screenshot, this.pipelines_manager, this.pipelines_page
        );

        this.preferences.window_list.settings.bind(
            'blur', this._window_list_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this._window_list_pipeline_choose_row.initialize(
            this.preferences.window_list, this.pipelines_manager, this.pipelines_page
        );

        this.preferences.coverflow_alt_tab.settings.bind(
            'blur', this._coverflow_alt_tab_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this._coverflow_alt_tab_pipeline_choose_row.initialize(
            this.preferences.coverflow_alt_tab, this.pipelines_manager, this.pipelines_page
        );

        this.preferences.settings.bind(
            'debug', this._debug, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._reset.connect('clicked', () => this.confirm_reset());

        this.connections.connect(extension_state, 'changed', () => this.update_extension_sensitivity());
        this.update_extension_sensitivity();
    }

    update_extension_sensitivity() {
        this._window_list_group.sensitive = this.extension_state.get(
            'window-list@gnome-shell-extensions.gcampax.github.com'
        )?.active ?? false;
        this._coverflow_alt_tab_group.sensitive = this.extension_state.get(
            'CoverflowAltTab@palatis.blogspot.com'
        )?.active ?? false;
    }

    cleanup() {
        this.connections.disconnect_all();
        this.extension_state = null;
    }

    confirm_reset() {
        const dialog = new Adw.AlertDialog({
            heading: _('Reset all preferences?'),
            body: _('Pipelines and component settings will return to their defaults.'),
        });
        dialog.add_response('cancel', _('Cancel'));
        dialog.add_response('reset', _('Reset'));
        dialog.set_response_appearance('reset', Adw.ResponseAppearance.DESTRUCTIVE);
        dialog.set_default_response('cancel');
        dialog.set_close_response('cancel');
        dialog.connect('response', (_dialog, response) => {
            if (response === 'reset')
                this.preferences.reset();
        });
        dialog.present(this);
    }
});
