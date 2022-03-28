'use strict';

const { St, Shell, Meta } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;


var DashBlur = class DashBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.prefs = prefs;
    }

    enable() {
        this._log("blurring dash");
        this.update();
    }

    update() {
        if (Main.overview.dash.constructor.name == "Dash") {
            Main.overview.dash.get_child_at_index(0).style = "background-color:rgba(0,0,0," + this.prefs.DASH_OPACITY.get() + ")";
        }

        // set search entry the same opacity as the dash
        Main.overview._overview._controls._searchEntry.style = "background-color:rgba(0,0,0," + this.prefs.DASH_OPACITY.get() + ")";
    }

    disable() {
        this._log("removing blur from dash");

        if (Main.overview.dash.constructor.name == "Dash") {
            if (Main.screenShield && !Main.screenShield.locked) {
                try {
                    Main.overview.dash.get_child_at_index(0).style = null;
                } catch (e) {
                    this._log(e);
                }
            }
        }
        Main.overview._overview._controls._searchEntry.style = null;

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`);
    }
};