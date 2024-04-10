import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const Panel = GObject.registerClass({
    GTypeName: 'Panel',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/panel.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'blur',
        'pipeline_choose_row',
        'mode_static',
        'mode_dynamic',
        'sigma_row',
        'sigma',
        'brightness_row',
        'brightness',
        'unblur_in_overview',
        'force_light_text',
        'override_background',
        'style_panel',
        'override_background_dynamically',
        'hidetopbar_compatibility',
        'dtp_blur_original_panel'
    ],
}, class Panel extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.pipelines_page = pipelines_page;

        this.preferences.panel.settings.bind(
            'blur', this._blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._pipeline_choose_row.initialize(
            this.preferences.panel, this.pipelines_manager, this.pipelines_page
        );

        this.change_blur_mode(this.preferences.panel.STATIC_BLUR, true);

        this._mode_static.connect('toggled',
            () => this.preferences.panel.STATIC_BLUR = this._mode_static.active
        );
        this.preferences.panel.STATIC_BLUR_changed(
            () => this.change_blur_mode(this.preferences.panel.STATIC_BLUR, false)
        );

        this.preferences.panel.settings.bind(
            'sigma', this._sigma, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'brightness', this._brightness, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'unblur-in-overview', this._unblur_in_overview, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'force-light-text', this._force_light_text, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'override-background',
            this._override_background, 'enable-expansion',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'style-panel', this._style_panel, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'override-background-dynamically',
            this._override_background_dynamically, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.hidetopbar.settings.bind(
            'compatibility', this._hidetopbar_compatibility, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.dash_to_panel.settings.bind(
            'blur-original-panel', this._dtp_blur_original_panel, 'active',
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