'use strict';

const St = imports.gi.St;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Connections = Me.imports.connections;
const Panel = Me.imports.panel;
const Overview = Me.imports.overview;
const DashToDock = Me.imports.dash_to_dock;


class Extension {
    constructor() {
        this._connections = new Connections.Connections;

        this._panel_blur = new Panel.PanelBlur(this._connections);
        this._dash_blur = new DashToDock.DashBlur(this._connections);
        this._overview_blur = new Overview.OverviewBlur(this._connections);
    }

    enable() {
        this._log("enabling extension...");

        this._panel_blur.enable();
        this._dash_blur.enable();
        this._overview_blur.enable();

        this._connect_to_overview();

        this._log("extension enabled.");
    }

    disable() {
        this._log("disabling extension...");

        this._panel_blur.disable();
        this._dash_blur.disable();
        this._overview_blur.disable();

        this._connections.disconnect_all();

        this._log("extension disabled.");
    }

    _connect_to_overview() {
        this._connections.connect(Main.overview, 'showing', () => {
            this._panel_blur.hide();
            this._dash_blur.hide();
        });
        this._connections.connect(Main.overview, 'hiding', () => {
            this._panel_blur.show();
            this._dash_blur.show();
        });
    }

    _log(str) { log("[Blur my Gnome] " + str) }
};


// Called on gnome-shell loading, even if extension is deactivated
function init() {
    return new Extension();
}
