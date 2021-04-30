'use strict';

const { St, Shell, Meta } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
let prefs = new Settings.Prefs;

const default_sigma = 30;
const default_brightness = 0.6;

var DashBlur = class DashBlur {
    constructor(connections) {
        this.connections = connections;
    }

    enable() {
        this._log("blurring dash");
        this.update()
    }

    update() {
        if (Main.overview.dash.constructor.name == "Dash") {
            Main.overview.dash.get_child_at_index(0).style = "background-color:rgba(0,0,0," + prefs.DASH_OPACITY.get() + ")";
        }
    }

    disable() {
        this._log("removing blur from dash");

        if (Main.overview.dash.constructor.name == "Dash") {
            if (!Main.screenShield.locked) {
                try {
                    Main.overview.dash.get_child_at_index(0).style = null;
                } catch (e) {
                    this._log(e)
                }
            }
        }

        this.connections.disconnect_all();
    }

    _log(str) {
        log(`[Blur Me] ${str}`)
    }
}