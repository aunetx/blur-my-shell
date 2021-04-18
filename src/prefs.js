'use strict';

const { GObject, Gtk } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;
const Extension = ExtensionUtils.getCurrentExtension();
let Settings = Extension.imports.settings;
let config = new Settings.Prefs();

const PrefsWidget = GObject.registerClass({
    GTypeName: 'PrefsWidget',
    Template: Extension.dir.get_child('prefs.ui').get_uri(),
}, class PrefsWidget extends Gtk.Box {

    _init(params = {}) {
        this.parent(params);

        let builder = new Gtk.Builder();
        builder.set_scope(new BuilderScope());
        builder.set_translation_domain('Blur my Shell preferences');

        // ! sigma
        let sigma = config.SIGMA;
        builder.get_object("sigma_scale").set_value(sigma.get());

        // ! brightness
        let brightness = config.BRIGHTNESS;
        builder.get_object("brightness_scale").set_value(brightness.get());

        // ! blur dash
        let blur_dash = config.BLUR_DASH;
        builder.get_object("blur_dash").set_active(blur_dash.get());

        // ! blur panel
        let blur_panel = config.BLUR_PANEL;
        builder.get_object("blur_panel").set_active(blur_panel.get());

        // ! blur overview
        let blur_overview = config.BLUR_OVERVIEW;
        builder.get_object("blur_overview").set_active(blur_overview.get());

        // ! blur lockscreen
        let blur_lockscreen = config.BLUR_LOCKSCREEN;
        builder.get_object("blur_lockscreen").set_active(blur_lockscreen.get());

        // ! dash hacks
        let hack_level = config.HACKS_LEVEL;
        let hack_level_0_button = builder.get_object("hacks_level0")
        let hack_level_1_button = builder.get_object("hacks_level1")
        let hack_level_2_button = builder.get_object("hacks_level2")

        if (hack_level.get() == 0) {
            hack_level_0_button.set_active(true);
        }
        else if (hack_level.get() == 1) {
            hack_level_1_button.set_active(true);
        }
        else if (hack_level.get() == 2) {
            hack_level_2_button.set_active(true);
        }
        else {
            this._log(`hack level out-of-bound: ${hack_level}, defaulting to 1.`);
            hack_level_1_button.set_active(true);
        }

        // ! animate overview
        let animate_overview = config.ANIMATE_OVERVIEW;
        builder.get_object("animate_overview").set_active(animate_overview.get());


        // ! connect
        let SignalHandler = {
            sigma_changed(w) {
                let value = w.get_value();
                sigma.set(value);
            },

            brightness_changed(w) {
                let value = w.get_value();
                brightness.set(value);
            },

            blur_dash_toggled(w) {
                let value = w.get_active();
                blur_dash.set(value);
            },

            blur_panel_toggled(w) {
                let value = w.get_active();
                blur_panel.set(value);
            },

            blur_overview_toggled(w) {
                let value = w.get_active();
                blur_overview.set(value);
            },

            blur_lockscreen_toggled(w) {
                let value = w.get_active();
                blur_lockscreen.set(value);
            },

            hacks_level0_toggled(w) {
                let is_active = w.get_active();
                if (is_active) { hack_level.set(0) }
            },

            hacks_level1_toggled(w) {
                let is_active = w.get_active();
                if (is_active) { hack_level.set(1) }
            },

            hacks_level2_toggled(w) {
                let is_active = w.get_active();
                if (is_active) { hack_level.set(2) }
            },

            animate_overview_toggled(w) {
                let value = w.get_active();
                animate_overview.set(value);
            },
        };

        builder.connect_signals_full((builder, object, signal, handler) => {
            object.connect(signal, SignalHandler[handler].bind(this));
        });

        this.add(builder.get_object('main_frame'));
    }
});

function init() { }

function buildPrefsWidget() {
    return new PrefsWidget();
}