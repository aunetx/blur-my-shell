import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { Connections } from '../../conveniences/connections.js';
import { Warning } from '../widgets/warning.js';

const DOCK_UUIDS = ['dash-to-dock@micxgx.gmail.com', 'ubuntu-dock@ubuntu.com'];
const DOCK_SCHEMA = 'org.gnome.shell.extensions.dash-to-dock';


export const Dash = GObject.registerClass({
    GTypeName: 'Dash',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/dash.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'blur',
        'pipeline_choose_row',
        'mode_static',
        'mode_dynamic',
        'override_background',
        'opacity_warning',
        'style_dash_to_dock',
        'unblur_in_overview'
    ],
}, class Dash extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page, extension_state) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.pipelines_page = pipelines_page;
        this.extension_state = extension_state;

        this.preferences.dash_to_dock.settings.bind(
            'blur', this._blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._pipeline_choose_row.initialize(
            this.preferences.dash_to_dock, this.pipelines_manager, this.pipelines_page
        );

        this.change_blur_mode(this.preferences.dash_to_dock.STATIC_BLUR, true);

        this._mode_static.connect('toggled',
            () => this.preferences.dash_to_dock.STATIC_BLUR = this._mode_static.active
        );
        this.preferences.dash_to_dock.STATIC_BLUR_changed(
            () => this.change_blur_mode(this.preferences.dash_to_dock.STATIC_BLUR, false)
        );

        this.preferences.dash_to_dock.settings.bind(
            'override-background',
            this._override_background, 'enable-expansion',
            Gio.SettingsBindFlags.DEFAULT | Gio.SettingsBindFlags.NO_SENSITIVITY
        );
        this.preferences.dash_to_dock.settings.bind(
            'style-dash-to-dock', this._style_dash_to_dock, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.dash_to_dock.settings.bind(
            'unblur-in-overview', this._unblur_in_overview, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this.opacity_warning = new Warning(
            this._opacity_warning,
            _('Dash to Dock controls background opacity'),
            _('To use Blur my Shell\'s background styles, set "Customize opacity" to "Default" in Dash to Dock → Appearance.')
        );
        this.opacity_connections = new Connections();
        this.dock_settings = null;
        this.opacity_connections.connect(extension_state, 'changed', (_tracker, uuid) => {
            if (uuid === null || DOCK_UUIDS.includes(uuid))
                this.update_dock_settings();
        });
        this.opacity_connections.connect(
            this.preferences.dash_to_dock.settings,
            ['changed::blur', 'changed::override-background'],
            () => this.update_opacity_warning()
        );
        this.update_dock_settings();
    }

    update_dock_settings() {
        const uuid = DOCK_UUIDS.find(uuid => this.extension_state.get(uuid)?.active);
        const settings = uuid ? this.extension_state.get_settings(uuid, DOCK_SCHEMA) : null;

        // if the active dock changes, watch the new settings
        // switching between Dash To Dock and Ubuntu Dock maybe is rare, but possible
        if (settings !== this.dock_settings) {
            if (this.dock_settings)
                this.opacity_connections.disconnect_all_for(this.dock_settings);
            this.dock_settings = settings;
            if (settings)
                this.opacity_connections.connect(
                    settings,
                    ['changed::transparency-mode', 'changed::apply-custom-theme'],
                    () => this.update_opacity_warning()
                );
        }
        this.update_opacity_warning();
    }

    update_opacity_warning() {
        this.opacity_warning.update(
            this.preferences.dash_to_dock.BLUR
            && this.preferences.dash_to_dock.OVERRIDE_BACKGROUND
            && this.dock_settings
            && !this.dock_settings.get_boolean('apply-custom-theme')
            && this.dock_settings.get_string('transparency-mode') !== 'DEFAULT'
        );
    }

    cleanup() {
        this.opacity_connections.disconnect_all();
        this.dock_settings = null;
        this.extension_state = null;
        this.opacity_warning = null;
    }

    change_blur_mode(is_static_blur, first_run) {
        this._mode_static.set_active(is_static_blur);
        if (first_run)
            this._mode_dynamic.set_active(!is_static_blur);

    }
});
