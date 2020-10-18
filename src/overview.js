'use strict';

const St = imports.gi.St;
const Meta = imports.gi.Meta;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;
const Clutter = imports.gi.Clutter;
const GLib = imports.gi.GLib;

// get ANIMATE_OVERVIEW setting
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const prefs = new Settings.Prefs;
let ANIMATE_OVERVIEW = prefs.ANIMATE_OVERVIEW.get();
prefs.ANIMATE_OVERVIEW.changed(() => {
    ANIMATE_OVERVIEW = prefs.ANIMATE_OVERVIEW.get()
})

// useful
const setTimeout = function (func, delay, ...args) {
    return GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
        func(...args);
        return GLib.SOURCE_REMOVE;
    });
};

// save old functions
const old_brightness = Main.overview._backgroundGroup.get_child_at_index(0).brightness;
const old_shadeBackgrounds = Main.overview._shadeBackgrounds;
const old_unshadeBackgrounds = Main.overview._unshadeBackgrounds;
const old_updateBackgrounds = Main.overview._updateBackgrounds;

// numeric values
const ANIMATION_DURATION = 200;
let sigma = 30;
let brightness = 0.6;

var OverviewBlur = class OverviewBlur {
    constructor(connections) {
        this.connections = connections;
    }

    enable() {
        this._log("blurring overview");

        // FIXME GNOME shell bug here: changing opacity to an inferior level does not update the opacity
        Main.overview._shadeBackgrounds = function () {
            this._backgroundGroup.get_children().forEach((background) => {
                if (ANIMATE_OVERVIEW) {
                    background.opacity = 0;
                    background.ease_property('opacity', 255, {
                        duration: ANIMATION_DURATION,
                        mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                    });
                } else {
                    background.opacity = 255;
                }
            })

        }

        Main.overview._unshadeBackgrounds = function () {
            this._backgroundGroup.get_children().forEach((background) => {
                background.opacity = 255;
            })
        }

        Main.overview._updateBackgrounds = function () {
            Main.overview._backgroundGroup.get_children().forEach(
                (bg) => {
                    bg.vignette = false;
                    bg.brightness = 1.0;

                    bg.remove_effect_by_name('blur');

                    bg.add_effect_with_name('blur', new Shell.BlurEffect({
                        brightness: brightness,
                        sigma: sigma,
                        mode: 0
                    }));
                }
            );
        };

        this.connections.connect(Main.layoutManager._bgManagers[Main.layoutManager.primaryIndex], 'changed', () => {
            this._log("updated background");
            setTimeout(() => { Main.overview._updateBackgrounds() }, 100)
        });

        this.connections.connect(Main.layoutManager, 'monitors-changed', () => {
            if (!Main.screenShield.locked) {
                this._log("changed monitors");
                Main.overview._updateBackgrounds();
            }
        });

        Main.overview._updateBackgrounds();
    }

    set_sigma(s) {
        sigma = s;
        Main.overview._updateBackgrounds();
    }

    set_brightness(b) {
        brightness = b;
        Main.overview._updateBackgrounds();
    }

    disable() {
        this._log("removing blur from overview");

        Main.overview._shadeBackgrounds = old_shadeBackgrounds;
        Main.overview._unshadeBackgrounds = old_unshadeBackgrounds;
        Main.overview._updateBackgrounds = old_updateBackgrounds;

        Main.overview._updateBackgrounds();
    }

    _log(str) {
        log(`[Blur my Shell] ${str}`)
    }
}