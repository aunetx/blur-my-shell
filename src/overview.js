'use strict';

const { Shell, GLib, Gio, Meta } = imports.gi;
const Main = imports.ui.main;
const backgroundSettings = new Gio.Settings({ schema: 'org.gnome.desktop.background' });

// useful
const setTimeout = function (func, delay, ...args) {
    return GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
        func(...args);
        return GLib.SOURCE_REMOVE;
    });
};

const default_sigma = 30;
const default_brightness = 0.6;

var OverviewBlur = class OverviewBlur {
    constructor(connections) {
        this.connections = connections;
        this.effect = new Shell.BlurEffect({
            brightness: default_brightness,
            sigma: default_sigma,
            mode: 0
        });
        this.overview_bg = new Meta.BackgroundActor;
    }

    enable() {
        this._log("blurring overview");

        this.connections.connect(backgroundSettings, 'changed', () => {
            this._log("updated background");
            setTimeout(() => { this.update_background() }, 100);
        });

        this.connections.connect(backgroundSettings, 'changed::picture-uri', () => {
            this._log("updated background");
            setTimeout(() => { this.update_background() }, 100);
        });

        this.connections.connect(Main.layoutManager, 'monitors-changed', () => {
            if (!Main.screenShield.locked) {
                this._log("changed monitors");
                this.update_background()
            }
        });

        this.update_background();
        Main.overview._overview.get_parent().insert_child_at_index(this.overview_bg, 0);
    }

    update_background() {
        let bg = Main.layoutManager._backgroundGroup.get_child_at_index(0);
        this.overview_bg.set_content(bg.get_content());
        this.overview_bg.add_effect(this.effect);
    }

    set_sigma(s) {
        this.effect.sigma = s
    }

    set_brightness(b) {
        this.effect.brightness = b
    }

    disable() {
        this._log("removing blur from overview");
        Main.overview._overview.get_parent().remove_child(this.overview_bg);
    }

    _log(str) {
        log(`[Blur my Shell] ${str}`)
    }
}
