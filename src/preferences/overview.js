'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;


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

        const Preferences = new Prefs(Keys);

        Preferences.overview.settings.bind(
            'blur', this._overview_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        Preferences.overview.settings.bind(
            'style-components', this._overview_style_components, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._overview_customize.connect_to(Preferences.overview);

        Preferences.appfolder.settings.bind(
            'blur', this._appfolder_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        Preferences.appfolder.settings.bind(
            'dialog-opacity', this._appfolder_dialog_opacity, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._appfolder_customize.connect_to(Preferences.appfolder, false);
    }
});