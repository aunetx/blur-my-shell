'use strict';

const St = imports.gi.St;
const Meta = imports.gi.Meta;
const Shell = imports.gi.Shell;
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
            Main.overview.dash.get_child_at_index(0).style = none;
        }
    }

    _log(str) { log("[Blur my Shell] " + str) }
}