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

        'screenshot_blur',
        'screenshot_customize',

        'window_list_blur',
        'window_list_customize',
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        const prefs_lockscreen = Preferences.lockscreen.settings;

        prefs_lockscreen.bind('blur', this._lockscreen_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs_lockscreen.bind('customize', this._lockscreen_customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        prefs_lockscreen.bind('sigma', this._lockscreen_customize._sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        prefs_lockscreen.bind('brightness', this._lockscreen_customize._brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.bind_color(Preferences.lockscreen, 'color', this._lockscreen_customize._color);

        const prefs_screenshot = Preferences.screenshot.settings;

        prefs_screenshot.bind('blur', this._screenshot_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs_screenshot.bind('customize', this._screenshot_customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        prefs_screenshot.bind('sigma', this._screenshot_customize._sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        prefs_screenshot.bind('brightness', this._screenshot_customize._brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.bind_color(Preferences.screenshot, 'color', this._screenshot_customize._color);

        const prefs_window_list = Preferences.window_list.settings;

        prefs_window_list.bind('blur', this._window_list_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs_window_list.bind('customize', this._window_list_customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        prefs_window_list.bind('sigma', this._window_list_customize._sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        prefs_window_list.bind('brightness', this._window_list_customize._brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.bind_color(Preferences.window_list, 'color', this._window_list_customize._color);
    }
});