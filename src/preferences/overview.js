import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const Overview = GObject.registerClass({
    GTypeName: 'Overview',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/overview.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'overview_blur',
        'overview_customize',
        'overview_style_components',

        'appfolder_blur',
        'appfolder_customize',
        'appfolder_style_dialogs'
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(preferences) {
        super({});

        this.preferences = preferences;

        this.preferences.overview.settings.bind(
            'blur', this._overview_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.overview.settings.bind(
            'style-components', this._overview_style_components, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._overview_customize.connect_to(this.preferences, this.preferences.overview);

        this.preferences.appfolder.settings.bind(
            'blur', this._appfolder_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.appfolder.settings.bind(
            'style-dialogs', this._appfolder_style_dialogs, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._appfolder_customize.connect_to(this.preferences, this.preferences.appfolder, false);
    }
});