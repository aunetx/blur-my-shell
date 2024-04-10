import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const Dash = GObject.registerClass({
    GTypeName: 'Dash',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/dash.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'blur',
        'pipeline_choose_row',
        'mode_static',
        'mode_dynamic',
        'sigma_row',
        'sigma',
        'brightness_row',
        'brightness',
        'override_background',
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
            'sigma', this._sigma, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.dash_to_dock.settings.bind(
            'brightness', this._brightness, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.dash_to_dock.settings.bind(
            'override-background',
            this._override_background, 'enable-expansion',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.dash_to_dock.settings.bind(
            'style-dash-to-dock', this._style_dash_to_dock, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.dash_to_dock.settings.bind(
            'unblur-in-overview', this._unblur_in_overview, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
    }

    change_blur_mode(is_static_blur, first_run) {
        this._mode_static.set_active(is_static_blur);
        if (first_run)
            this._mode_dynamic.set_active(!is_static_blur);

        this._pipeline_choose_row.set_visible(is_static_blur);
        this._sigma_row.set_visible(!is_static_blur);
        this._brightness_row.set_visible(!is_static_blur);
    }
});