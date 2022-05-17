'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);


var Panel = GObject.registerClass({
    GTypeName: 'Panel',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'panel.ui'])}`,
    InternalChildren: [
        'blur',
        'customize',
        'static_blur',
        'unblur_in_overview',
        'hidetopbar_compatibility'
    ],
}, class Panel extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        const prefs_panel = Preferences.panel.settings;

        prefs_panel.bind('blur', this._blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs_panel.bind('static-blur', this._static_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
        prefs_panel.bind('unblur-in-overview', this._unblur_in_overview, 'state', Gio.SettingsBindFlags.DEFAULT);
        this._customize.connect_to(Preferences.panel, this._static_blur);

        const prefs_hidetopbar = Preferences.hidetopbar.settings;

        prefs_hidetopbar.bind('compatibility', this._hidetopbar_compatibility, 'state', Gio.SettingsBindFlags.DEFAULT);
    }
});