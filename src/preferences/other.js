'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);


var Other = GObject.registerClass({
    GTypeName: 'Other',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'other.ui'])}`,
    InternalChildren: [
        'lockscreen_blur',
        'lockscreen_customize',
        'lockscreen_sigma',
        'lockscreen_brightness',

        'screenshot_blur',
        'screenshot_customize',
        'screenshot_sigma',
        'screenshot_brightness',

        'window_list_blur',
        'window_list_customize',
        'window_list_sigma',
        'window_list_brightness'
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        Preferences.settings.bind('lockscreen-blur', this._lockscreen_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('lockscreen-customize', this._lockscreen_customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('lockscreen-sigma', this._lockscreen_sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('lockscreen-brightness', this._lockscreen_brightness, 'value', Gio.SettingsBindFlags.DEFAULT);

        Preferences.settings.bind('screenshot-blur', this._screenshot_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('screenshot-customize', this._screenshot_customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('screenshot-sigma', this._screenshot_sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('screenshot-brightness', this._screenshot_brightness, 'value', Gio.SettingsBindFlags.DEFAULT);

        Preferences.settings.bind('window-list-blur', this._window_list_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('window-list-customize', this._window_list_customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('window-list-sigma', this._window_list_sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('window-list-brightness', this._window_list_brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
    }
});