'use strict';

const { Shell, GLib, Gio, Meta } = imports.gi;
const Main = imports.ui.main;
const backgroundSettings = new Gio.Settings({ schema: 'org.gnome.desktop.background' });

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
let prefs = new Settings.Prefs;

const default_sigma = 30;
const default_brightness = 0.6;

var OverviewBlur = class OverviewBlur {
    constructor(connections) {
        this.connections = connections;
        this.effects = [];
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
                this.update_backgrounds()
            }
        });

        this.update_backgrounds();
    }

    update_backgrounds() {
        // remove every old background
        Main.layoutManager.overviewGroup.get_children().forEach(actor => {
            if (actor.constructor.name == 'Meta_BackgroundActor') {
                Main.layoutManager.overviewGroup.remove_child(actor)
            }
            this.effects = [];
        });

        // add new backgrounds
        Main.layoutManager.monitors.forEach(monitor => {
            let bg_actor = new Meta.BackgroundActor
            let background = Main.layoutManager._backgroundGroup.get_child_at_index(Main.layoutManager.monitors.length - monitor.index - 1);
            bg_actor.set_content(background.get_content());
            let effect = new Shell.BlurEffect({
                brightness: prefs.BRIGHTNESS.get(),
                sigma: prefs.SIGMA.get(),
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
        log(`[Blur Me] ${str}`)
    }
}