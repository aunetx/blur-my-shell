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
        prefs.bind('override-background', this._override_background, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs.bind('unblur-in-overview', this._unblur_in_overview, 'state', Gio.SettingsBindFlags.DEFAULT);
        this._customize.connect_to(Preferences.dash_to_dock, false);
    }
});