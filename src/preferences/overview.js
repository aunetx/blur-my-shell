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

        const prefs_overview = Preferences.overview.settings;

        prefs_overview.bind('blur', this._overview_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs_overview.bind('style-components', this._overview_style_components, 'selected', Gio.SettingsBindFlags.DEFAULT);
        this._overview_customize.connect_to(Preferences.overview);

        const prefs_appfolder = Preferences.appfolder.settings;

        prefs_appfolder.bind('blur', this._appfolder_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs_appfolder.bind('dialog-opacity', this._appfolder_dialog_opacity, 'value', Gio.SettingsBindFlags.DEFAULT);
        this._appfolder_customize.connect_to(Preferences.appfolder, false);
    }
});