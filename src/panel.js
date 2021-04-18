'use strict';

const St = imports.gi.St;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
let prefs = new Settings.Prefs;

const default_sigma = 30;
const default_brightness = 0.6;

let sigma = 30;

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

        // HACK
        {
            // ! DIRTY PART: hack because `Shell.BlurEffect` does not repaint when shadows are under it
            // ! this does not entirely fix this bug (shadows caused by windows still cause artefacts)
            // ! but it prevents the shadows of the panel buttons to cause artefacts on the panel itself
            // ! note: issue opened at https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (prefs.HACKS_LEVEL.get() == 1) {
                this._log("panel hack level 1");

                this.connections.connect(Main.panel, 'button-press-event', () => {
                    this.effect.queue_repaint()
                });
            } else if (prefs.HACKS_LEVEL.get() == 2) {
                this._log("panel hack level 2");

                Main.panel.get_children().forEach(child => {
                    this.connections.connect(child, 'paint', () => {
                        this.effect.queue_repaint();
                    });
                });
            }

            // ! END OF DIRTY PART
        }
    }

    get monitor() {
        return Main.layoutManager.primaryMonitor
    }

    set_sigma(s) {
        this.effect.sigma = s;
        sigma = s;
    }

    set_brightness(b) {
        this.effect.brightness = b;
    }

    remove_background_color() {
        Main.panel.add_style_class_name('transparent-top-bar--transparent');
    }

    reset_background_color() {
        Main.panel.remove_style_class_name('transparent-top-bar--transparent');
    }

    disable() {
        this._log("removing blur from top panel");

        Main.panel._leftCorner.show();
        Main.panel._rightCorner.show();

        this.reset_background_color();
        this.background_parent.get_parent().remove_child(this.background_parent);
    }

    show() {
        this.background_parent.show();
    }
    hide() {
        this.background_parent.hide();
    }

    _log(str) {
        log(`[Blur my Shell] ${str}`)
    }
}