import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const Other = GObject.registerClass({
    GTypeName: 'Other',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/other.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'lockscreen_blur',
        'lockscreen_pipeline_choose_row',

        'screenshot_blur',
        'screenshot_pipeline_choose_row',

        'window_list_blur',
        'window_list_sigma',
        'window_list_brightness',

        'coverflow_alt_tab_blur',
        'coverflow_alt_tab_pipeline_choose_row',

        'hack_level',
        'debug',
        'reset'
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.pipelines_page = pipelines_page;

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
        this.preferences.window_list.settings.bind(
            'sigma', this._window_list_sigma, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.window_list.settings.bind(
            'brightness', this._window_list_brightness, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );

        this.preferences.coverflow_alt_tab.settings.bind(
            'blur', this._coverflow_alt_tab_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this._coverflow_alt_tab_pipeline_choose_row.initialize(
            this.preferences.coverflow_alt_tab, this.pipelines_manager, this.pipelines_page
        );

        this.preferences.settings.bind(
            'hacks-level', this._hack_level, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.settings.bind(
            'debug', this._debug, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._reset.connect('clicked', () => this.preferences.reset());
    }
});