import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const Shell = GObject.registerClass({
    GTypeName: 'Shell',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/shell.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'blur',
        'pipeline_choose_row',
        'mode_static',
        'mode_dynamic',
        'sigma_row',
        'sigma',
        'brightness_row',
        'brightness',
        'corner_radius',
        'corner_radius_not_found_row',
        'override_background',
        'style_shell'
    ],
}, class Shell extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.pipelines_page = pipelines_page;

        this.preferences.shell.settings.bind(
            'blur', this._blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._pipeline_choose_row.initialize(
            this.preferences.shell, this.pipelines_manager, this.pipelines_page
        );

        this.change_blur_mode(this.preferences.shell.STATIC_BLUR, true);

        this._mode_static.connect('toggled',
            () => this.preferences.shell.STATIC_BLUR = this._mode_static.active
        );
        this.preferences.shell.STATIC_BLUR_changed(
            () => this.change_blur_mode(this.preferences.shell.STATIC_BLUR, false)
        );

        this.preferences.shell.settings.bind(
            'sigma', this._sigma, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.shell.settings.bind(
            'brightness', this._brightness, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.shell.settings.bind(
            'corner-radius', this._corner_radius, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.shell.settings.bind(
            'override-background',
            this._override_background, 'enable-expansion',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.shell.settings.bind(
            'style-shell', this._style_shell, 'selected',
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
        this._corner_radius.set_visible(!is_static_blur && this.preferences.ROUNDED_BLUR_FOUND);
        this._corner_radius_not_found_row.set_visible(!is_static_blur && !this.preferences.ROUNDED_BLUR_FOUND);
    }
});
