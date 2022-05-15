'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);


var Dash = GObject.registerClass({
    GTypeName: 'Dash',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'dash.ui'])}`,
    InternalChildren: [
        'blur',
        'customize',
        'override_background',
        'unblur_in_overview'
    ],
}, class Dash extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        const prefs = Preferences.dash_to_dock.settings;

        prefs.bind('blur', this._blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('customize', this._customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('sigma', this._customize._sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('brightness', this._customize._brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('override-background', this._override_background, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('unblur-in-overview', this._unblur_in_overview, 'state', Gio.SettingsBindFlags.DEFAULT);
        Preferences.bind_color(Preferences.dash_to_dock, 'color', this._customize._color);
    }
});