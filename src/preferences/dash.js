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
        'sigma',
        'brightness',
        'override_background',
        'unblur_in_overview'
    ],
}, class Dash extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        Preferences.settings.bind('dash-to-dock-blur', this._blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('dash-to-dock-customize', this._customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('dash-to-dock-sigma', this._sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('dash-to-dock-brightness', this._brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('dash-to-dock-override-background', this._override_background, 'state', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('dash-to-dock-unblur-in-overview', this._unblur_in_overview, 'state', Gio.SettingsBindFlags.DEFAULT);
    }
});