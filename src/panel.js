'use strict';

const St = imports.gi.St;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;

const default_sigma = 30;
const default_brightness = 0.6;

var PanelBlur = class PanelBlur {
    constructor(connections) {
        this.effect = new Shell.BlurEffect({
            brightness: default_brightness,
            sigma: default_sigma,
            mode: 1
        });
        this.background_parent = new St.Widget({
            style_class: 'topbar-blurred-background-parent',
            x: this.monitor.x,
            y: this.monitor.y,
            width: this.monitor.width,
            height: 0,
        });
        this.background = new St.Widget({
            style_class: 'topbar-blurred-background',
            x: 0,
            y: 0,
            width: this.monitor.width,
            height: Main.panel.height,
        });
        this.background.add_effect(this.effect);
        this.background_parent.add_child(this.background);
        this.connections = connections;
    }

    enable() {
        this._log("blurring top panel");

        // insert child
        Main.panel.get_parent().insert_child_at_index(this.background_parent, 0);

        this.remove_background_color();

        // remove corners, can't style them
        Main.panel._leftCorner.hide();
        Main.panel._rightCorner.hide();

        // connect to size changes
        this.connections.connect(Main.panel, 'notify::height', () => {
            this.background.height = Main.panel.height;
        });
        this.connections.connect(Main.layoutManager, 'monitors-changed', () => {
            this.background_parent.width = this.monitor.width;
            this.background.width = this.monitor.width;
        });

        // hack
        {

            let hacking_level = 2;

            // ! DIRTY PART: hack because `Shell.BlurEffect` does not repaint when shadows are under it
            // ! this does not entirely fix this bug (shadows caused by windows still cause artefacts)
            // ! but it prevents the shadows of the panel buttons to cause artefacts on the panel itself
            // ! note: issue opened at https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (hacking_level == 1) {
                this.connections.connect(Main.panel, 'button-press-event', () => {
                    this.effect.queue_repaint()
                });
            } else

            if (hacking_level == 2) {
                let number = 0;

                Main.panel.get_children().forEach(child => {
                    this.connections.connect(child, 'paint', () => {
                        this.effect.queue_repaint();
                        number += 1;
                        //this._log("repainted the panel " + number + " times since the beginning...");
                    });
                });
            }

            // ! END OF DIRTY PART
        }
    }

    get monitor() {
        return Main.layoutManager.primaryMonitor
    }

    set_sigma(sigma) {
        this.effect.sigma = sigma;
    }

    set_brightness(brightness) {
        this.effect.brightness = brightness;
    }

    remove_background_color() {
        Main.panel.style = "background-color:rgba(0,0,0,0.0);"
    }

    reset_background_color() {
        Main.panel.style = null
    }

    disable() {
        this._log("removing blur from top panel");

        Main.panel._leftCorner.show();
        Main.panel._rightCorner.show();

        this.reset_background_color();
        this.background_parent.get_parent().remove_child(this.background_parent);
    }

    show() {
        this.effect.sigma = 30
    }
    hide() {
        this.effect.sigma = 0
    }

    _log(str) {
        log(`[Blur my Shell] ${str}`)
    }
}