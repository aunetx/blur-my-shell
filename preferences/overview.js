import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const Overview = GObject.registerClass({
    GTypeName: 'Overview',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/overview.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'overview_blur',
        'pipeline_choose_row',
        'overview_style_components',

        'appfolder_blur',
        'appfolder_sigma',
        'appfolder_brightness',
        'appfolder_style_dialogs'
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.pipelines_page = pipelines_page;

        this.preferences.overview.settings.bind(
            'blur', this._overview_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._pipeline_choose_row.initialize(
            this.preferences.overview, this.pipelines_manager, this.pipelines_page
        );

        this.preferences.overview.settings.bind(
            'style-components', this._overview_style_components, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );

        this.preferences.appfolder.settings.bind(
            'blur', this._appfolder_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.appfolder.settings.bind(
            'sigma', this._appfolder_sigma, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.appfolder.settings.bind(
            'brightness', this._appfolder_brightness, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.appfolder.settings.bind(
            'style-dialogs', this._appfolder_style_dialogs, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );
    }
});