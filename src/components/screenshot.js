'use strict';

const { Shell, Gio, Meta } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const ColorEffect = Me.imports.effects.color_effect.ColorEffect;
const NoiseEffect = Me.imports.effects.noise_effect.NoiseEffect;


var ScreenshotBlur = class ScreenshotBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.effects = [];
        this.prefs = prefs;
    }

    enable() {
        this._log("blurring screenshot's window selector");

        // connect to every background change (even without changing image)
        // FIXME this signal is fired very often, so we should find another one
        //       fired only when necessary (but that still catches all cases)
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
        this.remove();

        // add new backgrounds
        for (let i = 0; i < Main.screenshotUI._windowSelectors.length; i++) {
            const actor = Main.screenshotUI._windowSelectors[i];
            const monitor = Main.layoutManager.monitors[i];

            if (!monitor)
                continue;

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

        let blur_effect = new Shell.BlurEffect({
            brightness: this.prefs.screenshot.CUSTOMIZE
                ? this.prefs.screenshot.BRIGHTNESS
                : this.prefs.BRIGHTNESS,
            sigma: this.prefs.screenshot.CUSTOMIZE
                ? this.prefs.screenshot.SIGMA
                : this.prefs.SIGMA
                * monitor.geometry_scale,
            mode: Shell.BlurMode.ACTOR
        });

        // store the scale in the effect in order to retrieve it in set_sigma
        blur_effect.scale = monitor.geometry_scale;

        let color_effect = new ColorEffect({
            color: this.prefs.screenshot.CUSTOMIZE
                ? this.prefs.screenshot.COLOR
                : this.prefs.COLOR
        });

        let noise_effect = new NoiseEffect({
            noise: this.prefs.screenshot.CUSTOMIZE
                ? this.prefs.screenshot.NOISE_AMOUNT
                : this.prefs.NOISE_AMOUNT,
            lightness: this.prefs.screenshot.CUSTOMIZE
                ? this.prefs.screenshot.NOISE_LIGHTNESS
                : this.prefs.NOISE_LIGHTNESS
        });

        bg_actor.add_effect(color_effect);
        bg_actor.add_effect(noise_effect);
        bg_actor.add_effect(blur_effect);
        this.effects.push({ blur_effect, color_effect, noise_effect });

        return bg_actor;
    }

    set_sigma(s) {
        this.effects.forEach(effect => {
            effect.blur_effect.sigma = s * effect.blur_effect;
        });
    }

    set_brightness(b) {
        this.effects.forEach(effect => {
            effect.blur_effect.brightness = b;
        });
    }

    set_color(c) {
        this.effects.forEach(effect => {
            effect.color_effect.color = c;
        });
    }

    set_noise_amount(n) {
        this.effects.forEach(effect => {
            effect.noise_effect.noise = n;
        });
    }

    set_noise_lightness(l) {
        this.effects.forEach(effect => {
            effect.noise_effect.lightness = l;
        });
    }

    remove() {
        Main.screenshotUI._windowSelectors.forEach(actor => {
            if (actor._blur_actor)
                actor.remove_child(actor._blur_actor);
        });
        this.effects = [];
    }

    disable() {
        this._log("removing blur from screenshot's window selector");

        this.remove();
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG)
            log(`[Blur my Shell > screenshot]   ${str}`);
    }
};
