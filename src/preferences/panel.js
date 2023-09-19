import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const Panel = GObject.registerClass({
    GTypeName: 'Panel',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/panel.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'blur',
        'customize',
        'static_blur',
        'unblur_in_overview',
        'override_background',
        'style_panel',
        'override_background_dynamically',
        'hidetopbar_compatibility',
        'dtp_blur_original_panel'
    ],
}, class Panel extends Adw.PreferencesPage {
    constructor(preferences) {
        super({});

        this.preferences = preferences;

        this.preferences.panel.settings.bind(
            'blur', this._blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'static-blur', this._static_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'unblur-in-overview', this._unblur_in_overview, 'active',
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

        this._customize.connect_to(this.preferences, this.preferences.panel, this._static_blur);

        this.preferences.hidetopbar.settings.bind(
            'compatibility', this._hidetopbar_compatibility, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.dash_to_panel.settings.bind(
            'blur-original-panel', this._dtp_blur_original_panel, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
    }
});