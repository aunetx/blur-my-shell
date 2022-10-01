'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();


var Overview = GObject.registerClass({
    GTypeName: 'Overview',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'overview.ui'])}`,
    InternalChildren: [
        'overview_blur',
        'overview_customize',
        'overview_style_components',

        'appfolder_blur',
        'appfolder_customize',
        'appfolder_style_dialogs'
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(preferences) {
        super({});

        this.preferences = preferences;

        this.preferences.overview.settings.bind(
            'blur', this._overview_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.overview.settings.bind(
            'style-components', this._overview_style_components, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._overview_customize.connect_to(this.preferences.overview);

        this.preferences.appfolder.settings.bind(
            'blur', this._appfolder_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.appfolder.settings.bind(
            'style-dialogs', this._appfolder_style_dialogs, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._appfolder_customize.connect_to(this.preferences.appfolder, false);
    }
});