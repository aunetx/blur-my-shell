'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);


var Applications = GObject.registerClass({
    GTypeName: 'Applications',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'applications.ui'])}`,
    InternalChildren: [
        'blur',
        'customize',
        'sigma',
        'brightness',
        'whitelist'
    ],
}, class Applications extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        const prefs = Preferences.settings.get_child('applications');

        prefs.bind('blur', this._blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('customize', this._customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('sigma', this._sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('brightness', this._brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('whitelist', this._whitelist.buffer, 'text', Gio.SettingsBindFlags.DEFAULT);
    }
});