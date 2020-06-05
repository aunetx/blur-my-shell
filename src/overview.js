'use strict';

const St = imports.gi.St;
const Meta = imports.gi.Meta;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;

const old_shadeBackgrounds = Main.overview._shadeBackgrounds;
const old_unshadeBackgrounds = Main.overview._unshadeBackgrounds;

var OverviewBlur = class OverviewBlur {
    constructor() { }

    enable() {
        this._log("blurring overview");

        Main.overview._backgroundGroup.get_children().forEach(
            (bg) => {
                bg.vignette = false;
                bg.brightness = 1.0;

                // apply blur effect
                bg.add_effect_with_name('blur', new Shell.BlurEffect({
                    brightness: 0.6,
                    sigma: 30,
                    mode: 0
                }));
            }
        );
    }

    disable() {
        this._log("removing blur from overview");
    }

    _log(str) { log("[Blur my Gnome] " + str) }
}