'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);


var Overview = GObject.registerClass({
    GTypeName: 'Overview',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'overview.ui'])}`,
    InternalChildren: [
        'overview_blur',
        'overview_customize',
        'overview_style_components',

        'appfolder_blur',
        'appfolder_customize',
        'appfolder_dialog_opacity'
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        const prefs_overview = Preferences.settings.get_child('overview');

        prefs_overview.bind('blur', this._overview_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs_overview.bind('customize', this._overview_customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        prefs_overview.bind('sigma', this._overview_customize._sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        prefs_overview.bind('brightness', this._overview_customize._brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        prefs_overview.bind('style-components', this._overview_style_components, 'selected', Gio.SettingsBindFlags.DEFAULT);

        const prefs_appfolder = Preferences.settings.get_child('appfolder');

        prefs_appfolder.bind('blur', this._appfolder_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs_appfolder.bind('customize', this._appfolder_customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        prefs_appfolder.bind('sigma', this._appfolder_customize._sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        prefs_appfolder.bind('brightness', this._appfolder_customize._brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        prefs_appfolder.bind('dialog-opacity', this._appfolder_dialog_opacity, 'value', Gio.SettingsBindFlags.DEFAULT);
    }
});