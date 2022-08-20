'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;


var Panel = GObject.registerClass({
    GTypeName: 'Panel',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'panel.ui'])}`,
    InternalChildren: [
        'blur',
        'customize',
        'static_blur',
        'unblur_in_overview',
        'unblur_dynamically',
        'hidetopbar_compatibility'
    ],
}, class Panel extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        const Preferences = new Prefs(Keys);

        Preferences.panel.settings.bind(
            'blur', this._blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        Preferences.panel.settings.bind(
            'static-blur', this._static_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        Preferences.panel.settings.bind(
            'unblur-in-overview', this._unblur_in_overview, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        Preferences.panel.settings.bind(
            'unblur-dynamically', this._unblur_dynamically, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._customize.connect_to(Preferences.panel, this._static_blur);

        Preferences.hidetopbar.settings.bind(
            'compatibility', this._hidetopbar_compatibility, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
    }
});