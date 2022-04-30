'use strict';

const { Shell, Gio, Meta } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();


var ScreenshotBlur = class ScreenshotBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.effects = [];
        this.prefs = prefs;
    }

    enable() {
        this._log("blurring screenshot's window selector");

        // connect to every background change (even without changing image)
        this.connections.connect(
            Main.layoutManager._backgroundGroup,
            'notify',
            _ => {
                this._log("updated background for screenshot's window selector");
                this.update_backgrounds();
            }
        );

        // connect to monitors change
        this.connections.connect(
            Main.layoutManager,
            'monitors-changed',
            _ => {
                if (Main.screenShield && !Main.screenShield.locked) {
                    this._log("changed monitors for screenshot's window selector");
                    this.update_backgrounds();
                }
            }
        );

        // update backgrounds when the component is enabled
        this.update_backgrounds();
    }

    update_backgrounds() {
        // remove every old background
        Main.screenshotUI._windowSelectors.forEach(actor => {
            if (actor._blur_actor)
                actor.remove_child(actor._blur_actor);
        });
        this.effects = [];

        // add new backgrounds
        for (let i = 0; i < Main.screenshotUI._windowSelectors.length; i++) {
            const actor = Main.screenshotUI._windowSelectors[i];
            const monitor = Main.layoutManager.monitors[i];
            const bg_actor = this.create_background_actor(monitor);
            actor.insert_child_at_index(bg_actor, 0);
            actor._blur_actor = bg_actor;
        }
    }

    create_background_actor(monitor) {
        let bg_actor = new Meta.BackgroundActor;
        let background = Main.layoutManager._backgroundGroup.get_child_at_index(
            Main.layoutManager.monitors.length - monitor.index - 1
        );

        if (!background) {
            this._log("could not get background for screenshot's window selector");
            return bg_actor;
        }

        bg_actor.set_content(background.get_content());

        let effect = new Shell.BlurEffect({
            brightness: this.prefs.SCREENSHOT_CUSTOMIZE.get()
                ? this.prefs.SCREENSHOT_BRIGHTNESS.get()
                : this.prefs.BRIGHTNESS.get(),
            sigma: this.prefs.SCREENSHOT_CUSTOMIZE.get()
                ? this.prefs.SCREENSHOT_SIGMA.get()
                : this.prefs.SIGMA.get(),
            mode: Shell.BlurMode.ACTOR
        });

        bg_actor.add_effect(effect);
        this.effects.push(effect);

        bg_actor.set_x(monitor.x);
        bg_actor.set_y(monitor.y);

        return bg_actor;
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
        this._log("removing blur from screenshot's window selector");

        Main.screenshotUI._windowSelectors.forEach(actor => {
            if (actor._blur_actor)
                actor.remove_child(actor._blur_actor);
        });
        this.effects = [];
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`);
    }
};
