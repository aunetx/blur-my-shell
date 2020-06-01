'use strict';

const St = imports.gi.St;
const GLib = imports.gi.GLib;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;


var Extension = class Extension {
    constructor() {
        this._monitor = Main.layoutManager.primaryMonitor;
        this._topbar_effect = this._new_topbar_effect();
        this._dash_container = null;
    }


    // Called when extension is enabled
    enable() {
        // add effect to panel
        Main.panel.get_parent().insert_child_at_index(this._topbar_effect, 0);

        // find the dash
        // this is used as remplacement to setTimout in order to let the time for the dash to be loaded by the SHELL
        // TODO find a faster and more reliable way to wait for the dash
        GLib.timeout_add(GLib.PRIORITY_DEFAULT, 5000, () => {
            this._find_dash();
            return false; // Don't repeat
        });
    }


    // Called when extension is disabled
    disable() {
        Main.panel.get_parent().remove_child(this._topbar_effect);
    }


    _find_dash() {
        Main.uiGroup.get_children().forEach(child => {
            if (child.get_name() == "dashtodockContainer") {
                this._dash_container = child;
                this._blur_dash();
            }
        });
        if (this._dash_container == null) { this._log("dash to dock not found") }
    }


    _blur_dash() {
        this._log("dash to dock found, blurring it");

        // blur the dash
        let dash = this._dash_container.get_child_at_index(0).get_child_at_index(0).get_child_at_index(0);

        let dash_blurred_background_parent = new St.Widget({
            style_class: 'dash-blurred-background-parent',
            x: 0,
            y: 0,
            width: this._monitor.width,
            height: 0,
        });
        let dash_blurred_background = new St.Widget({
            style_class: 'dash-blurred-background',
            x: 0,
            y: 0,
            width: dash.width,
            height: dash.height,
        });

        let effect = new Shell.BlurEffect({
            brightness: 0.6,
            sigma: 30,
            mode: 1
        });

        dash_blurred_background.add_effect(effect);
        dash_blurred_background_parent.add_child(dash_blurred_background);

        dash.insert_child_at_index(dash_blurred_background_parent, 0);
    }


    _new_topbar_effect() {
        let topbar_blurred_background_parent = new St.Widget({
            style_class: 'topbar-blurred-background-parent',
            x: this._monitor.x,
            y: this._monitor.y,
            width: this._monitor.width,
            height: 0,
        });
        let topbar_blurred_background = new St.Widget({
            style_class: 'topbar-blurred-background',
            x: 0,
            y: 0,
            width: this._monitor.width,
            height: Main.panel.height,
        });

        let effect = new Shell.BlurEffect({
            brightness: 0.6,
            sigma: 30,
            mode: 1
        });

        topbar_blurred_background.add_effect(effect);
        topbar_blurred_background_parent.add_child(topbar_blurred_background);

        return topbar_blurred_background_parent;
    }


    _log(str) { log("[Blur my Gnome] " + str) }
};


// Called on gnome-shell loading, even if extension is deactivated
function init() {
    return new Extension();
}
