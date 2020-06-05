'use strict';

const St = imports.gi.St;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;

var PanelBlur = class PanelBlur {
    constructor() {
        this.monitor = Main.layoutManager.primaryMonitor;
        this.effect = new Shell.BlurEffect({
            brightness: 0.6,
            sigma: 30,
            mode: 1
        });
        this.background_parent = new St.Widget({
            style_class: 'topbar-blurred-background-parent',
            x: this.monitor.x,
            y: this.monitor.y,
            width: this.monitor.width,
            height: 0,
        });
    }

    enable() {
        this._log("blurring top panel");

        let background = new St.Widget({
            style_class: 'topbar-blurred-background',
            x: 0,
            y: 0,
            width: this.monitor.width,
            height: Main.panel.height,
        });

        background.add_effect(this.effect);
        this.background_parent.add_child(background);

        Main.panel.get_parent().insert_child_at_index(this.background_parent, 0);
    }

    disable() {
        this._log("removing blur from top panel");

        this.background_parent.get_parent().remove_child(this.background_parent);
    }

    show() { this.effect.sigma = 30 }
    hide() { this.effect.sigma = 0 }

    _log(str) { log("[Blur my Gnome] " + str) }
}