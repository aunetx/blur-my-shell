//'use strict';
//
//const { Adw, GLib, GObject, Gio } = imports.gi;
//const ExtensionUtils = imports.misc.extensionUtils;
//
//const Me = ExtensionUtils.getCurrentExtension();
//const { Prefs } = Me.imports.conveniences.settings;
//const { Keys } = Me.imports.conveniences.keys;
//
//const Preferences = new Prefs(Keys);
//
//
//var ColorBlur = GObject.registerClass({
//    GTypeName: 'ColorBlur',
//    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'colorblur.ui'])}`,
//    InternalChildren: [
//        'color-blur-toggle',
//        'red',
//        'green',
//        'blue',
//    ],
//}, class ColorBlur extends Adw.PreferencesPage {
//    constructor(props = {}) {
//        super(props);
//
//        //Preferences.settings.bind('color-blur-toggle', this._color_blur, 'state', Gio.SettingsBindFlags.DEFAULT);
//
//        Preferences.settings.bind('red', this.red, 'value', Gio.SettingsBindFlags.DEFAULT);
//        //Preferences.settings.bind('green', this.green, 'value', Gio.SettingsBindFlags.DEFAULT);
//        //Preferences.settings.bind('blue', this.blue, 'value', Gio.SettingsBindFlags.DEFAULT);
//    }
//});

'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);


var ColorEffect = GObject.registerClass({
    GTypeName: 'Color_Effect',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'coloreffect.ui'])}`,
    InternalChildren: [
        'color_blur',
        'red',
        'green',
        'blue',
    ],
}, class ColorEffect extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        Preferences.settings.bind('color-blur', this._color_blur, 'state', Gio.SettingsBindFlags.DEFAULT)
        Preferences.settings.bind('red', this._red, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('green', this._green, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('blue', this._blue, 'value', Gio.SettingsBindFlags.DEFAULT);
       
    }
});
