'use strict';

const { St, Shell, Meta, Gio, GLib } = imports.gi;
const Main = imports.ui.main;
const backgroundSettings = new Gio.Settings({ schema: 'org.gnome.desktop.background' })

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
let prefs = new Settings.Prefs;

const dash_to_panel_uuid = 'dash-to-panel@jderose9.github.com';
const default_sigma = 30;
const default_brightness = 0.6;

let sigma = 30;

var PanelBlur = class PanelBlur {
    constructor(connections) {
        this.connections = connections;
        this.effect = new Shell.BlurEffect({
            brightness: default_brightness,
            sigma: default_sigma,
            mode: prefs.STATIC_BLUR.get() ? 0 : 1
        });
        this.background_parent = new St.Widget({
            style_class: 'topbar-blurred-background-parent',
            x: 0,
            y: 0,
            width: this.monitor.width,
            height: 0,
        });
        this.background = prefs.STATIC_BLUR.get() ? new Meta.BackgroundActor : new St.Widget({
            style_class: 'topbar-blurred-background',
            x: Main.panel.position.x,
            y: Main.panel.position.y,
            width: Main.panel.width,
            height: Main.panel.height,
        });
        this.background_parent.add_child(this.background);
    }

    enable() {
        this._log("blurring top panel");

        // insert background parent
        Main.panel.get_parent().insert_child_at_index(this.background_parent, 0);
        // hide corners, can't style them
        Main.panel._leftCorner.hide();
        Main.panel._rightCorner.hide();
        // remove background
        Main.panel.add_style_class_name('transparent-panel');

        // perform updates
        this.change_blur_type();

        // connect to size, monitor or wallpaper changes
        this.connections.connect(Main.panel, 'notify::height', () => {
            this.update_size(prefs.STATIC_BLUR.get());
        });
        this.connections.connect(Main.panel, 'notify::width', () => {
            this.update_size(prefs.STATIC_BLUR.get());
        });
        this.connections.connect(Main.panel, 'notify::position', () => {
            this.update_size(prefs.STATIC_BLUR.get());
        });
        this.connections.connect(Main.layoutManager, 'monitors-changed', () => {
            this.update_wallpaper(prefs.STATIC_BLUR.get());
            this.update_size(prefs.STATIC_BLUR.get());
        });
        this.connections.connect(backgroundSettings, 'changed', () => {
            Utils.setTimeout(() => { this.update_wallpaper(prefs.STATIC_BLUR.get()) }, 100);
        });

        // connect to overview
        this.connections.connect(Main.overview, 'showing', () => {
            this.hide();
        });
        this.connections.connect(Main.overview, 'hidden', () => {
            this.show();
        });

        // not needed for now, but may be needed later
        //this._connect_to_dash_to_panel();
    }

    change_blur_type() {
        let is_static = prefs.STATIC_BLUR.get();

        this.background_parent.remove_child(this.background);
        this.background.remove_effect(this.effect);
        this.background = is_static ? new Meta.BackgroundActor : new St.Widget({
            style_class: 'topbar-blurred-background',
            x: Main.panel.position.x,
            y: Main.panel.position.y,
            width: Main.panel.width,
            height: Main.panel.height,
        });
        this.effect.set_mode(is_static ? 0 : 1);
        this.background.add_effect(this.effect);
        this.background_parent.add_child(this.background);

        this.update_wallpaper(is_static);
        this.update_size(is_static);

        // HACK
        if (!is_static) {
            // ! DIRTY PART: hack because `Shell.BlurEffect` does not repaint when shadows are under it
            // ! this does not entirely fix this bug (shadows caused by windows still cause artefacts)
            // ! but it prevents the shadows of the panel buttons to cause artefacts on the panel itself
            // ! note: issue opened at https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (prefs.HACKS_LEVEL.get() == 1) {
                this._log("panel hack level 1");

                let rp = () => {
                    this.effect.queue_repaint()
                };

                this.connections.connect(Main.panel, 'enter-event', rp);
                this.connections.connect(Main.panel, 'leave-event', rp);
                this.connections.connect(Main.panel, 'button-press-event', rp);

                Main.panel.get_children().forEach(child => {
                    this.connections.connect(child, 'enter-event', rp);
                    this.connections.connect(child, 'leave-event', rp);
                    this.connections.connect(child, 'button-press-event', rp);
                });
            } else if (prefs.HACKS_LEVEL.get() == 2) {
                this._log("panel hack level 2");

                // disabled because of #31
                /*
                Main.panel.get_children().forEach(child => {
                    this.connections.connect(child, 'paint', () => {
                        this.effect.queue_repaint();
                    });
                });
                */
            }

            // ! END OF DIRTY PART
        }
    }

    update_wallpaper(is_static) {
        if (is_static) {
            let bg = Main.layoutManager._backgroundGroup.get_child_at_index(this.monitor.index);
            this.background.set_content(bg.get_content());
        }
    }

    update_size(is_static) {
        this.background_parent.width = this.monitor.width;
        this.background_parent.height = 0;
        this.background_parent.position.x=0;
        this.background_parent.position.y=0;
        this.background.width = Main.panel.width;
        this.background.height = Main.panel.height;
        this.background.position.x=Main.panel.position.x;
        this.background.position.y=Main.panel.position.y;
        if (is_static) {
            this.background.set_clip(
                Main.panel.position.x,
                Main.panel.position.y,
                Main.panel.width,
                Main.panel.height
            );
        }
    }

    _connect_to_dash_to_panel() {
        this.connections.connect(Main.extensionManager, 'extension-state-changed', (data, extension) => {
            if (extension.uuid === dash_to_panel_uuid/* && extension.state === 1*/) {
                this._log("Dash to Panel detected, resetting panel blur");
                Utils.setTimeout(() => {
                    this.disable();
                    this.enable();
                }, 300);
            }
        });
    }

    get monitor() {
        return Main.layoutManager.primaryMonitor
    }

    set_sigma(s) {
        this.effect.sigma = s;
    }

    set_brightness(b) {
        this.effect.brightness = b;
    }

    disable() {
        this._log("removing blur from top panel");
        Main.panel._leftCorner.show();
        Main.panel._rightCorner.show();
        Main.panel.remove_style_class_name('transparent-panel');

        try {
            this.background_parent.get_parent().remove_child(this.background_parent);
        } catch (e) { }

        this.connections.disconnect_all();
    }

    show() {
        this.background_parent.show();
    }
    hide() {
        this.background_parent.hide();
    }

    _log(str) {
        log(`[Blur Me] ${str}`)
    }
}
