'use strict';

const { St, Shell, Meta, Gio, GLib } = imports.gi;
const Main = imports.ui.main;
const Config = imports.misc.config;
const backgroundSettings = new Gio.Settings({ schema: 'org.gnome.desktop.background' })

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
const PaintSignals = Me.imports.paint_signals;

const [GS_MAJOR, GS_MINOR] = Config.PACKAGE_VERSION.split('.');


var PanelBlur = class PanelBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.paint_signals = new PaintSignals.PaintSignals(connections);
        this.prefs = prefs;
        this.effect = new Shell.BlurEffect({
            brightness: prefs.BRIGHTNESS.get(),
            sigma: prefs.SIGMA.get(),
            mode: prefs.STATIC_BLUR.get() ? 0 : 1
        });
        this.background_parent = new St.Widget({
            name: 'topbar-blurred-background-parent',
            style_class: 'topbar-blurred-background-parent',
            x: this.monitor.x,
            y: this.monitor.y,
            width: this.monitor.width,
            height: 0,
        });
        this.background = prefs.STATIC_BLUR.get() ? new Meta.BackgroundActor : new St.Widget({
            style_class: 'topbar-blurred-background',
            x: 0,
            y: 0,
            width: this.monitor.width,
            height: Main.panel.height,
        });
        this.background_parent.add_child(this.background);
    }

    enable() {
        this._log("blurring top panel");

        if (GS_MAJOR < 42) {
            // hide corners, can't style them
            Main.panel._leftCorner.hide();
            Main.panel._rightCorner.hide();
            this.connections.connect(Main.panel._leftCorner, 'show', () => { Main.panel._leftCorner.hide(); });
            this.connections.connect(Main.panel._rightCorner, 'show', () => { Main.panel._rightCorner.hide(); });
        }

        // insert background parent
        let children = Main.layoutManager.panelBox.get_children();
        for (let i = 0; i < children.length; ++i)
            if (children[i].name == 'topbar-blurred-background-parent')
                Main.layoutManager.panelBox.remove_child(children[i]);
        Main.layoutManager.panelBox.insert_child_at_index(this.background_parent, 0);

        // remove background
        Main.panel.add_style_class_name('transparent-panel');

        // perform updates
        this.change_blur_type();
        Utils.setTimeout(() => { this.change_blur_type() }, 500);

        // connect to panel size change
        this.connections.connect(Main.panel, 'notify::height', () => {
            this.update_size(this.prefs.STATIC_BLUR.get());
        });

        // connect to every background change (even without changing image)
        this.connections.connect(Main.layoutManager._backgroundGroup, 'notify', () => {
            this.update_wallpaper(this.prefs.STATIC_BLUR.get());
        })

        // connect to monitors change
        this.connections.connect(Main.layoutManager, 'monitors-changed', () => {
            if (Main.screenShield && !Main.screenShield.locked) {
                this.update_wallpaper(this.prefs.STATIC_BLUR.get());
                this.update_size(this.prefs.STATIC_BLUR.get());
            }
        });

        this.connect_to_overview();
    }

    change_blur_type() {
        let is_static = this.prefs.STATIC_BLUR.get();

        // reset widgets to right state
        this.background_parent.remove_child(this.background);
        this.background.remove_effect(this.effect);
        this.background = is_static ? new Meta.BackgroundActor : new St.Widget({
            style_class: 'topbar-blurred-background',
            x: 0,
            y: 0,
            width: this.monitor.width,
            height: Main.panel.height,
        });
        this.effect.set_mode(is_static ? 0 : 1);
        this.background.add_effect(this.effect);
        this.background_parent.add_child(this.background);

        // perform updates
        this.update_wallpaper(is_static);
        this.update_size(is_static);

        // HACK
        if (!is_static) {
            // ! DIRTY PART: hack because `Shell.BlurEffect` does not repaint when shadows are under it
            // ! this does not entirely fix this bug (shadows caused by windows still cause artefacts)
            // ! but it prevents the shadows of the panel buttons to cause artefacts on the panel itself
            // ! note: issue opened at https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (this.prefs.HACKS_LEVEL.get() == 1) {
                this._log("panel hack level 1");
                this.paint_signals.disconnect_all();

                let rp = () => { this.effect.queue_repaint() };

                this.connections.connect(Main.panel, 'enter-event', rp);
                this.connections.connect(Main.panel, 'leave-event', rp);
                this.connections.connect(Main.panel, 'button-press-event', rp);

                Main.panel.get_children().forEach(child => {
                    this.connections.connect(child, 'enter-event', rp);
                    this.connections.connect(child, 'leave-event', rp);
                    this.connections.connect(child, 'button-press-event', rp);
                });
            } else if (this.prefs.HACKS_LEVEL.get() == 2) {
                this._log("panel hack level 2");
                this.paint_signals.disconnect_all();

                this.paint_signals.connect(this.background, this.effect);
            } else {
                this.paint_signals.disconnect_all();
            }

            // ! END OF DIRTY PART
        }
    }

    update_wallpaper(is_static) {
        // if static blur, get right wallpaper and update blur with it
        if (is_static) {
            // the try/catch behaviour is used to prevent bugs like #136 and #137
            try {
                let bg = Main.layoutManager._backgroundGroup.get_child_at_index(Main.layoutManager.monitors.length - this.monitor.index - 1);
                this.background.set_content(bg.get_content());
            } catch (error) { this._log(`could not blur panel: ${error}`) }
        }
    }

    update_size(is_static) {
        this.background_parent.width = Main.panel.width;
        this.background.width = Main.panel.width;
        let panel_box = Main.layoutManager.panelBox;
        this.background.height = panel_box.height;
        let clip_box = panel_box.get_parent();
        if (is_static) {
            this.background.set_clip(
                clip_box.x,
                clip_box.y,
                panel_box.width,
                panel_box.height
            );
            this.background.x = -clip_box.x;
            this.background.y = -clip_box.y;
        }
    }

    // returns either the primary monitor, or a dummy one if none is connected
    get monitor() {
        if (Main.layoutManager.primaryMonitor != null) {
            return Main.layoutManager.primaryMonitor
        } else {
            return { x: 0, y: 0, width: 0, index: 0 }
        }
    }

    // connect when overview if opened/closed to hide/show the blur in consequence
    // if HIDETOPBAR set, we need just to hide the blur when showing appgrid (so no shadow is cropped)
    connect_to_overview() {
        this.connections.disconnect_all_for(Main.overview._overview._controls._appDisplay);
        this.connections.disconnect_all_for(Main.overview);

        if (!this.prefs.HIDETOPBAR.get()) {
            this.connections.connect(Main.overview, 'showing', () => {
                this.hide();
            });
            this.connections.connect(Main.overview, 'hidden', () => {
                this.show();
            });
        } else {
            this.connections.connect(Main.overview._overview._controls._appDisplay, 'show', () => {
                this.hide();
            });
            this.connections.connect(Main.overview._overview._controls._appDisplay, 'hide', () => {
                this.show();
            });
            this.connections.connect(Main.overview, 'hidden', () => {
                this.show();
            });
        }
    }

    set_sigma(s) {
        this.effect.sigma = s;
    }

    set_brightness(b) {
        this.effect.brightness = b;
    }

    disable() {
        this._log("removing blur from top panel");
        Main.panel.remove_style_class_name('transparent-panel');

        if (GS_MAJOR < 42) {
            Main.panel._leftCorner.show();
            Main.panel._rightCorner.show();
        }

        try {
            Main.layoutManager.panelBox.remove_child(this.background_parent);
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
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}
