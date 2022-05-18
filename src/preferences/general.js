'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;
const { CustomizeRow } = Me.imports.preferences.customize_row;

const Preferences = new Prefs(Keys);

var General = GObject.registerClass({
    GTypeName: 'General',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'general.ui'])}`,
    InternalChildren: [
        'sigma',
        'brightness',
        'color',
        'color_row',
        'noise_amount',
        'noise_amount_row',
        'noise_lightness',
        'noise_lightness_row',
        'color_and_noise',
        'hack_level',
        'debug'
    ],
}, class General extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        const prefs = Preferences.settings;

        CustomizeRow.prototype.connect_to.call(this, Preferences);
        prefs.bind('color-and-noise', this._color_and_noise, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('hacks-level', this._hack_level, 'selected', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('debug', this._debug, 'state', Gio.SettingsBindFlags.DEFAULT);
    }
});