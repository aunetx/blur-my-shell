'use strict';

const { Adw, Gdk, GLib, Gtk, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs, Type } = Me.imports.conveniences.settings;

// This lists the preferences keys
const Keys = [
    { type: Type.I, name: "sigma" },
    { type: Type.D, name: "brightness" },
    { type: Type.I, name: "hacks-level" },

    { type: Type.B, name: "overview-blur" },
    { type: Type.B, name: "overview-customize" },
    { type: Type.I, name: "overview-sigma" },
    { type: Type.D, name: "overview-brightness" },

    { type: Type.B, name: "appfolder-blur" },
    { type: Type.B, name: "appfolder-customize" },
    { type: Type.I, name: "appfolder-sigma" },
    { type: Type.D, name: "appfolder-brightness" },
    { type: Type.D, name: "appfolder-dialog-opacity" },

    { type: Type.B, name: "panel-blur" },
    { type: Type.B, name: "panel-customize" },
    { type: Type.I, name: "panel-sigma" },
    { type: Type.D, name: "panel-brightness" },
    { type: Type.B, name: "panel-static-blur" },

    { type: Type.B, name: "dash-blur" },
    { type: Type.B, name: "dash-to-dock-customize" },
    { type: Type.I, name: "dash-to-dock-sigma" },
    { type: Type.D, name: "dash-to-dock-brightness" },
    { type: Type.B, name: "dash-to-dock-static-blur" },
    { type: Type.D, name: "dash-opacity" },

    { type: Type.B, name: "applications-blur" },
    { type: Type.B, name: "applications-customize" },
    { type: Type.I, name: "applications-sigma" },
    { type: Type.D, name: "applications-brightness" },
    { type: Type.S, name: "applications-whitelist" },

    { type: Type.B, name: "lockscreen-blur" },
    { type: Type.B, name: "lockscreen-customize" },
    { type: Type.I, name: "lockscreen-sigma" },
    { type: Type.D, name: "lockscreen-brightness" },

    { type: Type.B, name: "window-list-blur" },
    { type: Type.B, name: "window-list-customize" },
    { type: Type.I, name: "window-list-sigma" },
    { type: Type.D, name: "window-list-brightness" },


    { type: Type.B, name: "screenshot-blur" },
    { type: Type.B, name: "screenshot-customize" },
    { type: Type.I, name: "screenshot-sigma" },
    { type: Type.D, name: "screenshot-brightness" },

    { type: Type.B, name: "hidetopbar-blur" },

    { type: Type.B, name: "debug" },
];

const Preferences = new Prefs(Keys);

const parse_color_from_setting = function (setting, widget) {
    let color_string = setting.get();
    let color_parsed = new Gdk.RGBA;
    let is_parsed = color_parsed.parse(color_string);

    if (is_parsed) {
        widget.set_rgba(color_parsed);
    } else {
        // could not parse color, defaulting to black
        setting.set('#000000ff');
    }
};

var MainPage = GObject.registerClass({
    GTypeName: 'MainPage',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'main_page.ui'])}`,
    InternalChildren: [
        'panel_corners',
        'panel_corner_color',
        'panel_radius_adjustment',
        'panel_opacity_adjustment',

        'screen_corners',
        'screen_corner_color',
        'screen_radius_adjustment',
        'screen_opacity_adjustment',

        'force_extension_values',
        'debug',
    ],
}, class MainPage extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);

        // Panel corners
        Preferences.settings.bind('panel-corners', this._panel_corners, 'state', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('panel-corner-radius', this._panel_radius_adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('panel-corner-opacity', this._panel_opacity_adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.PANEL_CORNER_BACKGROUND_COLOR.changed(_ => {
            parse_color_from_setting(Preferences.PANEL_CORNER_BACKGROUND_COLOR, this._panel_corner_color);
        });
        this._panel_corner_color.connect('color-set', _ => {
            let color = this._panel_corner_color.rgba.to_string();
            Preferences.PANEL_CORNER_BACKGROUND_COLOR.set(color);
        });
        parse_color_from_setting(Preferences.PANEL_CORNER_BACKGROUND_COLOR, this._panel_corner_color);

        // Screen corners
        Preferences.settings.bind('screen-corners', this._screen_corners, 'state', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('screen-corner-radius', this._screen_radius_adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('screen-corner-opacity', this._screen_opacity_adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);
        Preferences.SCREEN_CORNER_BACKGROUND_COLOR.changed(_ => {
            parse_color_from_setting(Preferences.SCREEN_CORNER_BACKGROUND_COLOR, this._screen_corner_color);
        });
        this._screen_corner_color.connect('color-set', _ => {
            let color = this._screen_corner_color.rgba.to_string();
            Preferences.SCREEN_CORNER_BACKGROUND_COLOR.set(color);
        });
        parse_color_from_setting(Preferences.SCREEN_CORNER_BACKGROUND_COLOR, this._screen_corner_color);

        // Advanced
        Preferences.settings.bind('force-extension-values', this._force_extension_values, 'state', Gio.SettingsBindFlags.DEFAULT);
        Preferences.settings.bind('debug', this._debug, 'state', Gio.SettingsBindFlags.DEFAULT);
    }
});


function init() { }

function fillPreferencesWindow(window) {
    let main_page = new MainPage();
    window.add(main_page);
    window.search_enabled = true;
    window.set_default_size(720, 530);
}
