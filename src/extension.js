'use strict';

const St = imports.gi.St;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Settings = Me.imports.settings;
const Connections = Me.imports.connections;

const Panel = Me.imports.panel;
const Dash = Me.imports.dash;
const Overview = Me.imports.overview;
const DashToDock = Me.imports.dash_to_dock;
const Lockscreen = Me.imports.lockscreen;


class Extension {
    constructor() {
        this._connections = new Connections.Connections;
        this._prefs = new Settings.Prefs;

        this._panel_blur = new Panel.PanelBlur(this._connections);
        this._dash_blur = new Dash.DashBlur(this._connections);
        this._dash_to_dock_blur = new DashToDock.DashBlur(this._connections);
        this._overview_blur = new Overview.OverviewBlur(this._connections);
        this._lockscreen_blur = new Lockscreen.LockscreenBlur(this._connections);
    }

    enable() {
        this._log("enabling extension...");

        this._connect_to_settings();

        this._panel_blur.enable();
        this._dash_blur.enable();
        this._dash_to_dock_blur.enable();
        this._overview_blur.enable();
        this._lockscreen_blur.enable();

        this._update_sigma();
        this._update_brightness();

        this._connect_to_overview();

        this._log("extension enabled.");
    }

    disable() {
        this._log("disabling extension...");

        this._panel_blur.disable();
        this._dash_blur.disable();
        this._dash_to_dock_blur.disable();
        this._overview_blur.disable();
        this._lockscreen_blur.disable();

        this._disconnect_settings();
        this._connections.disconnect_all();

        this._log("extension disabled.");
    }

    _connect_to_settings() {
        this._prefs.SIGMA.changed(() => { this._update_sigma() });
        this._prefs.BRIGHTNESS.changed(() => { this._update_brightness() });
    }

    _disconnect_settings() {
        this._prefs.SIGMA.disconnect();
        this._prefs.BRIGHTNESS.disconnect();
    }

    _update_sigma() {
        let sigma = this._prefs.SIGMA.get();

        this._panel_blur.set_sigma(sigma);
        this._dash_to_dock_blur.set_sigma(sigma);
        this._overview_blur.set_sigma(sigma);
        this._lockscreen_blur.set_sigma(sigma);
    }

    _update_brightness() {
        let brightness = this._prefs.BRIGHTNESS.get();

        this._panel_blur.set_brightness(brightness);
        this._dash_to_dock_blur.set_brightness(brightness);
        this._overview_blur.set_brightness(brightness);
        this._lockscreen_blur.set_brightness(brightness);
    }

    _connect_to_overview() {
        this._connections.connect(Main.overview, 'showing', () => {
            this._panel_blur.hide();
            this._dash_to_dock_blur.hide();
        });
        this._connections.connect(Main.overview, 'hiding', () => {
            this._panel_blur.show();
            this._dash_to_dock_blur.show();
        });
    }

    _log(str) { log(`[Blur my Shell] ${str}`) }
};


// Called on gnome-shell loading, even if extension is deactivated
function init() {
    return new Extension();
}
