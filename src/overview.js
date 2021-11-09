'use strict';

const { Shell, Gio, Meta } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;


var OverviewBlur = class OverviewBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.effects = [];
        this.prefs = prefs;
    }

    enable() {
        this._log("blurring overview");

        // connect to every background change (even without changing image)
        this.connections.connect(Main.layoutManager._backgroundGroup, 'notify', () => {
            this._log("updated background");
            this.update_backgrounds();
        })

        // connect to monitors change
        this.connections.connect(Main.layoutManager, 'monitors-changed', () => {
            if (Main.screenShield && !Main.screenShield.locked) {
                this._log("changed monitors");
                this.update_backgrounds();
            }
        });

        // add css class name, to change folders background
        Main.overview._overview.add_style_class_name("blurred-overview");

        // update background on extension activation
        this.update_backgrounds();
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

        // adds new backgrounds
        let do_overview_blur = monitor => {
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
        }

        // apply to each monitor
        Main.layoutManager.monitors.forEach(monitor => {
            // fixes a waking-from-sleep error, by trying again if wallpaper is not ready
            try {
                do_overview_blur(monitor)
            } catch (error) {
                try {
                    Utils.setTimeout(() => { do_overview_blur(monitor) }, 500);
                } catch (error) {
                    this._log(`could not blur overview: ${error}`);
                }
            }
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
        Main.overview._overview.remove_style_class_name("blurred-overview");
        this.effects = [];
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}