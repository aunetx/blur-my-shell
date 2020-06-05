'use strict';

const St = imports.gi.St;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const DashToDock = Me.imports.dash_to_dock;
const TopPanel = Me.imports.top_panel;


class Extension {
    constructor() {
        this._topbar_blur = new TopPanel.PanelBlur;
        this._dash_blur = new DashToDock.DashBlur;
    }

    enable() {
        // blur the top panel
        this._topbar_blur.blur();

        // blur the dash
        this._dash_blur.search_dashes();
    }

    disable() {
        this._topbar_blur.remove();
        this._dash_blur.remove();
    }

    _log(str) { log("[Blur my Gnome] " + str) }
};


// Called on gnome-shell loading, even if extension is deactivated
function init() {
    return new Extension();
}
