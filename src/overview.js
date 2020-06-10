'use strict';

const St = imports.gi.St;
const Meta = imports.gi.Meta;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;
const Clutter = imports.gi.Clutter;

const old_brightness = Main.overview._backgroundGroup.get_child_at_index(0).brightness;

const old_shadeBackgrounds = Main.overview._shadeBackgrounds;
const old_unshadeBackgrounds = Main.overview._unshadeBackgrounds;

const default_sigma = 30;
const default_brightness = 0.6;

const ANIMATION_DURATION = 200;

var OverviewBlur = class OverviewBlur {
    constructor(connections) {
        this.connections = connections;
        this.sigma = default_sigma;
        this.brightness = default_brightness;
    }

    enable() {
        this._log("blurring overview");

        Main.overview._shadeBackgrounds = function () {
            this._backgroundGroup.get_children().forEach((background) => {
                background.ease_property('opacity', 255, {
                    duration: ANIMATION_DURATION,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                });
            })
        }

        // FIXME GNOME Shell bug there: changing opacity to an inferior level does not update the opcaity (and causes a lot of weird bugs)
        Main.overview._unshadeBackgrounds = function () {
            this._backgroundGroup.get_children().forEach((background) => {
                background.ease_property('opacity', 0, {
                    duration: ANIMATION_DURATION,
                    mode: Clutter.AnimationMode.EASE_OUT_QUAD,
                });
            })
        }


        this.connections.connect(Main.layoutManager._bgManagers[Main.layoutManager.primaryIndex], 'changed', () => {
            this._log("updated background");
            this.update_backgrounds();
        });

        this.connections.connect(Main.layoutManager, 'monitors-changed', () => {
            if (!Main.screenShield.locked) {
                this._log("changed monitors");
                this.update_backgrounds();
            }
        });

        this.update_backgrounds();
    }

    update_backgrounds() {
        Main.overview._backgroundGroup.get_children().forEach(
            (bg) => {
                bg.vignette = false;
                bg.brightness = 1.0;

                bg.remove_effect_by_name('blur');

                // apply blur effect
                bg.add_effect_with_name('blur', new Shell.BlurEffect({
                    brightness: this.brightness,
                    sigma: this.sigma,
                    mode: 0
                }));
            }
        );
    }

    set_sigma(sigma) {
        this.sigma = sigma;
        this.update_backgrounds();
    }

    set_brightness(brightness) {
        this.brightness = brightness;
        this.update_backgrounds();
    }

    disable() {
        this._log("removing blur from overview");

        Main.overview._shadeBackgrounds = old_shadeBackgrounds;
        Main.overview._unshadeBackgrounds = old_unshadeBackgrounds;

        Main.overview._backgroundGroup.get_children().forEach(
            (bg) => {
                bg.vignette = true;
                bg.brightness = old_brightness;

                // remove blur effect
                bg.remove_effect_by_name('blur');
            }
        );
    }

    _log(str) { log(`[Blur my Shell] ${str}`) }
}