'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);

var General = GObject.registerClass({
    GTypeName: 'General',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'general.ui'])}`,
    InternalChildren: [
        'sigma',
        'brightness',
        'hack_level',
        'debug'
    ],
}, class General extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        Preferences.settings.bind('sigma', this._sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('brightness', this._brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('hacks-level', this._hack_level, 'selected', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('debug', this._debug, 'state', Gio.SettingsBindFlags.DEFAULT);
    }
});