'use strict';

const { Adw, GLib, GObject, Gio, Gtk } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;


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
        'color_row',
        'noise_amount',
        'noise_amount_row',
        'noise_lightness',
        'noise_lightness_row',
        'noise_color_notice'
    ],
}, class CustomizeRow extends Adw.ExpanderRow {
    /// Makes the required connections between the widgets and the preferences.
    ///
    /// This function may be bound to another object than CustomizeRow, if we
    /// are using it for the General page; some things will then change (no
    /// expansion row, and no notice)
    ///
    /// The color_and_noise parameter is either a boolean (true by default) or
    /// a widget; and permits selecting weather or not we want to show the color
    /// and noise buttons to the user. If it is a widget, it means we need to
    /// dynamically update their visibility, according to the widget's state.
    connect_to(component_prefs, color_and_noise = true) {
        let s = component_prefs.settings;

        // is not fired if in General page
        if (this instanceof CustomizeRow)
            // bind the customize button
            s.bind(
                'customize', this, 'enable-expansion',
                Gio.SettingsBindFlags.DEFAULT
            );

        // bind sigma and brightness
        s.bind(
            'sigma', this._sigma, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        s.bind(
            'brightness', this._brightness, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );

        // bind the color button
        bind_color(component_prefs, 'color', this._color);

        // bind noise sliders
        s.bind(
            'noise-amount', this._noise_amount, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        s.bind(
            'noise-lightness', this._noise_lightness, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );

        // color_and_noise is either a boolean or a widget, if true, or it is a
        // widget, this will appropriately show the required preferences about
        // setting the color and noise
        if (color_and_noise) {
            // if we gave the static_blur widget, we are dealing with the panel,
            // and binding it to enable/disable the required components when
            // switching between static and dynamic blur
            if (color_and_noise instanceof Gtk.Switch) {
                // bind its state to dynamically toggle the notice and rows
                color_and_noise.bind_property(
                    'state', this._color_row, 'visible',
                    GObject.BindingFlags.SYNC_CREATE
                );
                color_and_noise.bind_property(
                    'state', this._noise_amount_row, 'visible',
                    GObject.BindingFlags.SYNC_CREATE
                );
                color_and_noise.bind_property(
                    'state', this._noise_lightness_row, 'visible',
                    GObject.BindingFlags.SYNC_CREATE
                );
                color_and_noise.bind_property(
                    'state', this._noise_color_notice, 'visible',
                    GObject.BindingFlags.INVERT_BOOLEAN
                );

                // only way to get the correct state when first opening the
                // window...
                setTimeout(_ => {
                    let is_visible = color_and_noise.state;
                    this._color_row.visible = is_visible;
                    this._noise_amount_row.visible = is_visible;
                    this._noise_lightness_row.visible = is_visible;
                    this._noise_color_notice.visible = !is_visible;
                }, 10);
            }

            // if in General page, there is no notice at all
            if (this instanceof CustomizeRow) {
                // disable the notice
                this._noise_color_notice.visible = false;
            }
        } else {
            // enable the notice and disable color and noise preferences
            this._color_row.visible = false;
            this._noise_amount_row.visible = false;
            this._noise_lightness_row.visible = false;
            this._noise_color_notice.visible = true;
        }

        const Preferences = new Prefs(Keys);

        // now we bind the color-and-noise preference to the sensitivity of the
        // associated widgets, this will grey them out if the user choose not to
        // have color and noise enabled
        // note: I would love to bind to the visibility instead, but this part
        //       is already dirty enough, it would look like I obfuscate my code
        //       intentionally... (I am not)
        Preferences.settings.bind(
            'color-and-noise',
            this._color_row, 'sensitive',
            Gio.SettingsBindFlags.DEFAULT
        );
        Preferences.settings.bind(
            'color-and-noise',
            this._noise_amount_row, 'sensitive',
            Gio.SettingsBindFlags.DEFAULT
        );
        Preferences.settings.bind(
            'color-and-noise',
            this._noise_lightness_row, 'sensitive',
            Gio.SettingsBindFlags.DEFAULT
        );
    };
});
