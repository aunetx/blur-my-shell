import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const Other = GObject.registerClass({
    GTypeName: 'Other',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/other.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'lockscreen_blur',
        'lockscreen_customize',

        'screenshot_blur',
        'screenshot_customize',

        'window_list_blur',
        'window_list_customize',
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(preferences) {
        super({});

        this.preferences = preferences;

        this.preferences.lockscreen.settings.bind(
            'blur', this._lockscreen_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._lockscreen_customize.connect_to(this.preferences, this.preferences.lockscreen);

        this.preferences.screenshot.settings.bind(
            'blur', this._screenshot_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._screenshot_customize.connect_to(this.preferences, this.preferences.screenshot);

        this.preferences.window_list.settings.bind(
            'blur', this._window_list_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._window_list_customize.connect_to(
            this.preferences, this.preferences.window_list, false
        );
    }
});