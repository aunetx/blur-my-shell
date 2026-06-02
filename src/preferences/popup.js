import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const PopupBlur = GObject.registerClass({
    GTypeName: 'PopupBlur',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/popup.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'blur',
        'pipeline_choose_row',
        'mode_static',
        'mode_dynamic',
        'sigma_row',
        'sigma',
        'brightness_row',
        'brightness',
        'corner_radius_row',
        'corner_radius',
        'menu_corner_radius',
        'quick_settings_corner_radius',
        'notification_corner_radius',
        'osd_corner_radius',
        'dialog_corner_radius',
        'corner_radius_not_found_row',
        'override_background',
        'style_popup'
    ],
}, class PopupBlur extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.pipelines_page = pipelines_page;

        this.preferences.popup.settings.bind(
            'blur', this._blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._pipeline_choose_row.initialize(
            this.preferences.popup, this.pipelines_manager, this.pipelines_page
        );

        this.change_blur_mode(this.preferences.popup.STATIC_BLUR, true);

        this._mode_static.connect('toggled',
            () => this.preferences.popup.STATIC_BLUR = this._mode_static.active
        );
        this.preferences.popup.STATIC_BLUR_changed(
            () => this.change_blur_mode(this.preferences.popup.STATIC_BLUR, false)
        );

        this.preferences.popup.settings.bind(
            'sigma', this._sigma, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.popup.settings.bind(
            'brightness', this._brightness, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.popup.settings.bind(
            'corner-radius', this._corner_radius, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.popup.settings.bind(
            'menu-corner-radius', this._menu_corner_radius, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.popup.settings.bind(
            'quick-settings-corner-radius', this._quick_settings_corner_radius, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.popup.settings.bind(
            'notification-corner-radius', this._notification_corner_radius, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.popup.settings.bind(
            'osd-corner-radius', this._osd_corner_radius, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.popup.settings.bind(
            'dialog-corner-radius', this._dialog_corner_radius, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.popup.settings.bind(
            'override-background',
            this._override_background, 'enable-expansion',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.popup.settings.bind(
            'style-popup', this._style_popup, 'selected',
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
        this._corner_radius_row.set_visible(is_static_blur || this.preferences.ROUNDED_BLUR_FOUND);
        this._corner_radius_not_found_row.set_visible(!is_static_blur && !this.preferences.ROUNDED_BLUR_FOUND);
    }
});
