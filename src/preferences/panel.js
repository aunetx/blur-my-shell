'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();


var Panel = GObject.registerClass({
    GTypeName: 'Panel',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'panel.ui'])}`,
    InternalChildren: [
        'blur',
        'customize',
        'static_blur',
        'unblur_in_overview',
        'override_background',
        'style_panel',
        'override_background_dynamically',
        'hidetopbar_compatibility'
    ],
}, class Panel extends Adw.PreferencesPage {
    constructor(preferences) {
        super({});

        this.preferences = preferences;

        this.preferences.panel.settings.bind(
            'blur', this._blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'static-blur', this._static_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'unblur-in-overview', this._unblur_in_overview, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'override-background',
            this._override_background, 'enable-expansion',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'style-panel', this._style_panel, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.panel.settings.bind(
            'override-background-dynamically',
            this._override_background_dynamically, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._customize.connect_to(this.preferences.panel, this._static_blur);

        this.preferences.hidetopbar.settings.bind(
            'compatibility', this._hidetopbar_compatibility, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
    }
});