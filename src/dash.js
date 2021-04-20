'use strict';

const { St, Shell, Meta } = imports.gi;
const Main = imports.ui.main;

const default_sigma = 30;
const default_brightness = 0.6;

var DashBlur = class DashBlur {
    constructor(connections) {
        this.connections = connections;
    }

    enable() {
        this._log("blurring dash");

        if (Main.overview.dash.constructor.name == "Dash") {
            Main.overview.dash.get_child_at_index(0).style = "background-color:rgba(0,0,0,0.0)";
        }
    }

    disable() {
        this._log("removing blur from dash");

        if (Main.overview.dash.constructor.name == "Dash") {
            if (!Main.screenShield.locked) {
                try {
                    Main.overview.dash.get_child_at_index(0).style = none;
                } catch (e) {
                    this._log(e)
                }
            }
        }
    }

    _log(str) {
        log(`[Blur my Shell] ${str}`)
    }
}