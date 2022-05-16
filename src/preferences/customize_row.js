'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();

/// Given a component (described by its preferences node), a gschema key and
/// a Gtk.ColorButton, binds everything transparently.
let bind_color = function (component, key, widget) {
    let property_name = key.replaceAll('-', '_').toUpperCase();

    let parse_color = _ => {
        let [r, g, b, a] = component[property_name];
        let w = widget.rgba;
        w.red = r;
        w.green = g;
        w.blue = b;
        w.alpha = a;
        widget.rgba = w;
    };
    component.settings.connect('changed::' + key, parse_color);

    widget.connect('color-set', _ => {
        let c = widget.rgba;
        component[property_name] = [c.red, c.green, c.blue, c.alpha];
    });

    parse_color();
};

var CustomizeRow = GObject.registerClass({
    GTypeName: 'CustomizeRow',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'customize-row.ui'])}`,
    InternalChildren: [
        'sigma',
        'brightness',
        'color',
        'noise_amount',
        'noise_lightness'
    ],
}, class CustomizeRow extends Adw.ExpanderRow {
    connect_to(component_prefs) {
        let s = component_prefs.settings;

        if (this instanceof CustomizeRow)
            s.bind('customize', this, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        s.bind('sigma', this._sigma, 'value', Gio.SettingsBindFlags.DEFAULT);
        s.bind('brightness', this._brightness, 'value', Gio.SettingsBindFlags.DEFAULT);
        s.bind('noise-amount', this._noise_amount, 'value', Gio.SettingsBindFlags.DEFAULT);
        s.bind('noise-lightness', this._noise_lightness, 'value', Gio.SettingsBindFlags.DEFAULT);

        bind_color(component_prefs, 'color', this._color);
    };
});
