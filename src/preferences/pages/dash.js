import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';

import { Connections } from '../../conveniences/connections.js';


function get_dash_to_dock_settings() {
    const schema_id = 'org.gnome.shell.extensions.dash-to-dock';
    const default_source = Gio.SettingsSchemaSource.get_default();
    let schema = default_source.lookup(schema_id, true);

    for (const data_dir of [GLib.get_user_data_dir(), ...GLib.get_system_data_dirs()]) {
        if (schema)
            break;

        const schema_dir = GLib.build_filenamev([
            data_dir, 'gnome-shell', 'extensions', 'dash-to-dock@micxgx.gmail.com', 'schemas'
        ]);
        if (!GLib.file_test(GLib.build_filenamev([schema_dir, 'gschemas.compiled']), GLib.FileTest.IS_REGULAR))
            continue;

        const source = Gio.SettingsSchemaSource.new_from_directory(schema_dir, default_source, false);
        schema = source.lookup(schema_id, false);
    }

    return schema ? new Gio.Settings({ settings_schema: schema }) : null;
}


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
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.pipelines_page = pipelines_page;

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

        this.opacity_connections = new Connections();
        this.dock_settings = get_dash_to_dock_settings();
        this.shell_settings = new Gio.Settings({ schema_id: 'org.gnome.shell' });
        this.opacity_connections.connect(
            this.preferences.dash_to_dock.settings,
            ['changed::blur', 'changed::override-background'],
            () => this.update_opacity_warning()
        );
        this.opacity_connections.connect(
            this.shell_settings,
            ['changed::enabled-extensions', 'changed::disable-user-extensions'],
            () => this.update_opacity_warning()
        );
        if (this.dock_settings)
            this.opacity_connections.connect(
                this.dock_settings,
                ['changed::transparency-mode', 'changed::apply-custom-theme'],
                () => this.update_opacity_warning()
            );
        this.update_opacity_warning();
    }

    update_opacity_warning() {
        this._opacity_warning.visible = Boolean(
            this.preferences.dash_to_dock.BLUR
            && this.preferences.dash_to_dock.OVERRIDE_BACKGROUND
            && !this.shell_settings.get_boolean('disable-user-extensions')
            && this.shell_settings.get_strv('enabled-extensions').includes('dash-to-dock@micxgx.gmail.com')
            && this.dock_settings
            && !this.dock_settings.get_boolean('apply-custom-theme')
            && this.dock_settings.get_string('transparency-mode') !== 'DEFAULT'
        );
    }

    cleanup() {
        this.opacity_connections.disconnect_all();
        this.dock_settings = null;
        this.shell_settings = null;
    }

    change_blur_mode(is_static_blur, first_run) {
        this._mode_static.set_active(is_static_blur);
        if (first_run)
            this._mode_dynamic.set_active(!is_static_blur);

    }
});
