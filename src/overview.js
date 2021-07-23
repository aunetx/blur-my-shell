'use strict';

const { Shell, GLib, Gio, Meta } = imports.gi;
const St = imports.gi.St;
const Main = imports.ui.main;
const Overview = imports.ui.overview;
const Clutter = imports.gi.Clutter;

const backgroundSettings = new Gio.Settings({ schema: 'org.gnome.desktop.background' });

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;

// save old functions
const old_brightness = Main.overview._backgroundGroup.get_child_at_index(0).brightness;
const old_shadeBackgrounds = Main.overview._shadeBackgrounds;
const old_unshadeBackgrounds = Main.overview._unshadeBackgrounds;

// numeric values
let sigma = 30;
let brightness = 0.6;


var OverviewBlur = class OverviewBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.prefs = prefs;
    }

    enable() {
        this._log("blurring overview");

        // get ANIMATE_OVERVIEW setting
        let ANIMATE_OVERVIEW = this.prefs.ANIMATE_OVERVIEW.get();
        this.prefs.ANIMATE_OVERVIEW.changed(() => {
            ANIMATE_OVERVIEW = this.prefs.ANIMATE_OVERVIEW.get();
        })

        // Move the background group one level up, so that it isn't a child of the window_group anymore,
        // but a sibling. We then also set the background group below all actors on that level.
        let backgroundGroup = Main.layoutManager._backgroundGroup;
        global.window_group.remove_child(backgroundGroup);
        Main.layoutManager.uiGroup.add_child(backgroundGroup);
        Main.layoutManager.uiGroup.set_child_below_sibling(backgroundGroup, null);


        // FIXME GNOME shell bug here: changing opacity to an inferior level does not update the opacity
        Main.overview._shadeBackgrounds = function () {
            this._backgroundGroup.get_children().forEach((background) => {
                if (ANIMATE_OVERVIEW) {
                    background.opacity = 0;
                    background.ease_property('opacity', 255, {
                        duration: Overview.SHADE_ANIMATION_TIME,
                        mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                    });
                } else {
                    background.opacity = 255;
                }
            })
        }

        Main.overview._overview.add_style_class_name("cosmic-transparent-bg");


        this.connections.connect(Main.overview._backgroundGroup.get_child_at_index(0), 'hide', () => {
            if (this.is_cosmic) {
                Main.overview._backgroundGroup.get_child_at_index(0).show();
            }
        });

        Main.overview._unshadeBackgrounds = function () {
            this._backgroundGroup.get_children().forEach((background) => {
                if (ANIMATE_OVERVIEW) {
                    background.opacity = 255;
                    background.ease_property('opacity', 0, {
                        duration: Overview.SHADE_ANIMATION_TIME,
                        mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                    });
                } else {
                    background.opacity = 0;
                }
            })
        }

        Main.overview._updateBackgroundsBlur = function () {
            Main.overview._backgroundGroup.get_children().forEach(
                (bg) => {
                    if (bg.content == undefined) {
                        // Shell version 3.36
                        bg.vignette = false;
                        bg.brightness = 1.0;
                    } else {
                        // Shell version >= 3.38
                        bg.content.vignette = false;
                        bg.content.brightness = 1.0;
                    }

                    bg.remove_effect_by_name('blur');

                    bg.add_effect_with_name('blur', new Shell.BlurEffect({
                        brightness: brightness,
                        sigma: sigma,
                        mode: 0
                    }));
                }
            );
        };

        this.connections.connect(backgroundSettings, 'changed', () => {
            this._log("updated background");
            Utils.setTimeout(() => { Main.overview._updateBackgroundsBlur() }, 100);
        });

        this.connections.connect(Main.layoutManager, 'monitors-changed', () => {
            if (!Main.screenShield.locked) {
                this._log("changed monitors");
                Main.overview._updateBackgroundsBlur();
            }
        });

        Main.overview._updateBackgroundsBlur();
        Utils.setTimeout(() => { Main.overview._updateBackgroundsBlur() }, 100);
        Utils.setTimeout(() => { Main.overview._updateBackgroundsBlur() }, 500);
    }

    get is_cosmic() {
        return Main.overview._overview.get_style_class_name().includes("cosmic-solid-bg");
    }

    set_sigma(s) {
        sigma = s;
        Main.overview._updateBackgroundsBlur();
    }

    set_brightness(b) {
        brightness = b;
        Main.overview._updateBackgroundsBlur();
    }

    disable() {
        this._log("removing blur from overview");

        Main.overview._shadeBackgrounds = old_shadeBackgrounds;
        Main.overview._unshadeBackgrounds = old_unshadeBackgrounds;

        // Move the background group back to its original position
        let backgroundGroup = Main.layoutManager._backgroundGroup;
        Main.layoutManager.uiGroup.remove_child(backgroundGroup);
        global.window_group.add_child(backgroundGroup);
        global.window_group.set_child_below_sibling(backgroundGroup, null);

        Main.overview._overview.remove_style_class_name("cosmic-transparent-bg");

        Main.overview._updateBackgrounds();
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}