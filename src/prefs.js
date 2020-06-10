'use strict';

const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;

let Extension = imports.misc.extensionUtils.getCurrentExtension();
let Settings = Extension.imports.settings;
let config = new Settings.Prefs();

function init() {
}

function buildPrefsWidget() {
    let widget = new PrefsWidget();
    widget.show_all();
    return widget;
}

var PrefsWidget = new GObject.Class({
    Name: "My.Prefs.Widget",
    GTypeName: "PrefsWidget",
    Extends: Gtk.ScrolledWindow,

    _init: function (params) {
        this.parent(params);

        let builder = new Gtk.Builder();
        builder.set_translation_domain('Blur my Shell preferences');
        builder.add_from_file(Extension.path + '/prefs.ui');
        this.connect("destroy", Gtk.main_quit);

        // ! sigma
        let sigma = config.SIGMA;
        builder.get_object("sigma_scale").set_value(sigma.get());

        // ! brightness
        let brightness = config.BRIGHTNESS;
        builder.get_object("brightness_scale").set_value(brightness.get());

        // ! connect
        let SignalHandler = {
            sigma_changed(w) {
                let value = w.get_value();
                sigma.set(value);
            },

            brightness_changed(w) {
                let value = w.get_value();
                brightness.set(value);
            }
        };

        builder.connect_signals_full((builder, object, signal, handler) => {
            object.connect(signal, SignalHandler[handler].bind(this));
        });

        this.add(builder.get_object('main_frame'));
    }
});