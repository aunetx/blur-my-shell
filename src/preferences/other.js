'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;


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

        const Preferences = new Prefs(Keys);

        Preferences.lockscreen.settings.bind(
            'blur', this._lockscreen_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._lockscreen_customize.connect_to(Preferences.lockscreen);

        Preferences.screenshot.settings.bind(
            'blur', this._screenshot_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._screenshot_customize.connect_to(Preferences.screenshot);

        Preferences.window_list.settings.bind(
            'blur', this._window_list_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._window_list_customize.connect_to(Preferences.window_list, false);
    }
});