'use strict';

const St = imports.gi.St;
const GLib = imports.gi.GLib;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const DashToDock = Me.imports.dash_to_dock;

const topbar_effect = new Shell.BlurEffect({
    brightness: 0.6,
    sigma: 30,
    mode: 1
});

class Extension {
    constructor() {
        // shared
        this._monitor = Main.layoutManager.primaryMonitor;
        // topbar
        this._topbar_effect_container = this._new_topbar_effect();
        // dash
        this._dash_blur = new DashBlur;
    }

    // Called when extension is enabled
    enable() {
        // add effect to panel
        Main.panel.get_parent().insert_child_at_index(this._topbar_effect_container, 0);

        // find the dash
        // TODO find a faster and more reliable way to wait for the dash
        GLib.timeout_add(GLib.PRIORITY_DEFAULT, 5000, () => {
            this._dash_blur.find_dashes();
            return false; // don't repeat
        });
    }

    // Called when extension is disabled
    disable() {
        Main.panel.get_parent().remove_child(this._topbar_effect_container);
        this._dash_blur.remove();
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

        topbar_blurred_background.add_effect(topbar_effect);
        topbar_blurred_background_parent.add_child(topbar_blurred_background);

        return topbar_blurred_background_parent;
    }


    _log(str) { log("[Blur my Gnome] " + str) }
};

class DashInfos {
    constructor() {
        this.dash = null; // St.BoxLayout
        this.background_parent = null; // St.Widget
        this.effect = null; // Shell.BlurEffect
        this.connections = []; // [integer]
    }

    set_dash(dash) { this.dash = dash }
    set_background_parent(background_parent) { this.background_parent = background_parent }
    set_effect(effect) { this.effect = effect }
    push_connection(connection) { this.connections.push(connection) }
    remove_dash() {
        this.dash.remove_child(this.background_parent);
        this.background_parent.destroy();
        this.effect.destroy();
        this.connections.forEach((connection) => { this.dash.disconnect(connection) });
    }
}

class DashBlur {
    constructor() {
        this.dashes = [];
    }

    // Finds all existing dashes on every monitor, and call `blur_dash_from` on them
    find_dashes() {
        let dash_container = null;
        // blur every dash found
        Main.uiGroup.get_children().forEach(child => {
            if (child.get_name() == "dashtodockContainer") {
                this._log("dash to dock found, blurring it");
                dash_container = child;
                this.dashes.push(this.blur_dash_from(dash_container));
            }
        });
        if (dash_container == null) { this._log("dash to dock not found") }
    }

    // Returns a `DashInfos` containing informations about the newly created dash blur
    blur_dash_from(dash_container) {
        // stores infos about the dash
        let dash_infos = new DashInfos;

        // the actual styled dash
        let dash = dash_container.get_child_at_index(0).get_child_at_index(0);
        dash_infos.set_dash(dash);

        // the effect applied
        let effect = new Shell.BlurEffect({
            brightness: 0.6,
            sigma: 30,
            mode: 1
        });
        dash_infos.set_effect(effect);

        // dash background parent, not visible
        let background_parent = new St.Widget({
            style_class: 'dash-blurred-background-parent',
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        });
        dash_infos.set_background_parent(background_parent);

        // dash background widget
        let background = new St.Widget({
            style_class: 'dash-blurred-background',
            x: 0,
            y: 0,
            width: dash.width,
            height: dash.height,
        });

        // updates size on change
        // TODO 'notify' does not fire only when size changes, needs to be changed accordingly
        dash_infos.push_connection(dash.connect('notify', () => {
            background.height = dash.height;
            background.width = dash.width;
        }));

        // repaint background on mouseover (required until `Shell.BlurEffect` is fixed)
        // TODO find a way to connect to entry/exit of the cursor on each component, not just motion (CPU very high)
        dash_infos.push_connection(dash.connect('motion-event', () => { effect.queue_repaint() }));
        dash_infos.push_connection(dash.connect('leave-event', () => { effect.queue_repaint() }));


        // add the widget to the dash
        background.add_effect(effect);
        background_parent.add_child(background);
        dash.insert_child_at_index(background_parent, 0);

        // returns infos
        return dash_infos;
    }

    remove() {
        this.dashes.forEach((dash) => { dash.remove_dash() })
    }

    _log(str) { log("[Blur my Gnome] " + str) }
}


// Called on gnome-shell loading, even if extension is deactivated
function init() {
    return new Extension();
}
