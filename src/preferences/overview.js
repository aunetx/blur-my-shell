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
        'overview_sigma',
        'overview_brightness',
        'overview_style_components',

        'appfolder_blur',
        'appfolder_customize',
        'appfolder_sigma',
        'appfolder_brightness',
        'appfolder_dialog_opacity'
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        Preferences.settings.bind('overview-blur', this._overview_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('overview-customize', this._overview_customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('overview-sigma', this._overview_sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('overview-brightness', this._overview_brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('overview-style-components', this._overview_style_components, 'selected', Gio.SettingsBindFlags.DEFAULT);

        Preferences.settings.bind('appfolder-blur', this._appfolder_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('appfolder-customize', this._appfolder_customize, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('appfolder-sigma', this._appfolder_sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('appfolder-brightness', this._appfolder_brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('appfolder-dialog-opacity', this._appfolder_dialog_opacity, 'value', Gio.SettingsBindFlags.DEFAULT);
    }
});