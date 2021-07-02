'use strict';

const { Shell, GLib, Gio, Meta } = imports.gi;
const Main = imports.ui.main;
const backgroundSettings = new Gio.Settings({ schema: 'org.gnome.desktop.background' });

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;

const default_sigma = 30;
const default_brightness = 0.6;

let sigma = default_sigma;

var OverviewBlur = class OverviewBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.effects = [];
        this.prefs = prefs;
    }

    enable() {
        this._log("blurring overview");

        this.connections.connect(backgroundSettings, 'changed', () => {
            this._log("updated background");
            Utils.setTimeout(() => { this.update_backgrounds() }, 100);
        });

        this.connections.connect(Main.layoutManager, 'monitors-changed', () => {
            if (!Main.screenShield.locked) {
                this._log("changed monitors");
                this.update_backgrounds();
            }
        });

        if (Main.overview._overview.controls._appDisplay._folderIcons.length > 0) {
            this.blur_appfolders();
        }
        this.connections.connect(Main.overview._overview.controls._appDisplay, 'view-loaded', () => {
            this.blur_appfolders();
        })

        this.update_backgrounds();
        Utils.setTimeout(() => { this.update_backgrounds() }, 500);
    }

    blur_appfolders() {
        Main.overview._overview.controls._appDisplay._folderIcons.forEach(icon => {
            let effect = new Shell.BlurEffect({
                name: "appfolder-blur",
                sigma: sigma,
                brightness: 1.0,
                mode: 1
            });
            icon._dialog.remove_effect_by_name("appfolder-blur");
            icon._dialog.add_effect(effect);
        });
    }

    update_backgrounds() {
        // remove every old background
        Main.layoutManager.overviewGroup.get_children().forEach(actor => {
            if (actor.constructor.name == 'Meta_BackgroundActor') {
                Main.layoutManager.overviewGroup.remove_child(actor);
                actor.destroy();
            }
            this.effects = [];
        });

        // add new backgrounds
        Main.layoutManager.monitors.forEach(monitor => {
            let bg_actor = new Meta.BackgroundActor
            let background = Main.layoutManager._backgroundGroup.get_child_at_index(Main.layoutManager.monitors.length - monitor.index - 1);
            bg_actor.set_content(background.get_content());
            let effect = new Shell.BlurEffect({
                brightness: this.prefs.BRIGHTNESS.get(),
                sigma: this.prefs.SIGMA.get(),
                mode: 0
            });
            bg_actor.add_effect(effect);
            this.effects.push(effect);

            bg_actor.set_x(monitor.x);
            bg_actor.set_y(monitor.y);

            Main.layoutManager.overviewGroup.insert_child_at_index(bg_actor, monitor.index);
        });
    }

    set_sigma(s) {
        this.effects.forEach(effect => {
            effect.sigma = s;
        });
        sigma = s;
        this.blur_appfolders();
    }

    set_brightness(b) {
        this.effects.forEach(effect => {
            effect.brightness = b;
        });
    }

    disable() {
        this._log("removing blur from overview");
        Main.layoutManager.overviewGroup.get_children().forEach(actor => {
            if (actor.constructor.name == 'Meta_BackgroundActor') {
                Main.layoutManager.overviewGroup.remove_child(actor)
            }
        });
        this.effects = [];
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}
