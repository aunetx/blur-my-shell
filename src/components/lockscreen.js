'use strict';

const { St, Shell } = imports.gi;
const Main = imports.ui.main;
const Background = imports.ui.background;
const UnlockDialog = imports.ui.unlockDialog.UnlockDialog;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const ColorEffect = Me.imports.effects.color_effect.ColorEffect;
const NoiseEffect = Me.imports.effects.noise_effect.NoiseEffect;

let sigma;
let brightness;
let color;
let noise;
let lightness;

const original = UnlockDialog.prototype._updateBackgroundEffects;


var LockscreenBlur = class LockscreenBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.prefs = prefs;
    }

    enable() {
        this._log("blurring lockscreen");

        brightness = this.prefs.lockscreen.CUSTOMIZE
            ? this.prefs.lockscreen.BRIGHTNESS
            : this.prefs.BRIGHTNESS;
        sigma = this.prefs.lockscreen.CUSTOMIZE
            ? this.prefs.lockscreen.SIGMA
            : this.prefs.SIGMA;
        color = this.prefs.lockscreen.CUSTOMIZE
            ? this.prefs.lockscreen.COLOR
            : this.prefs.COLOR;
        noise = this.prefs.lockscreen.CUSTOMIZE
            ? this.prefs.lockscreen.NOISE_AMOUNT
            : this.prefs.NOISE_AMOUNT;
        lightness = this.prefs.lockscreen.CUSTOMIZE
            ? this.prefs.lockscreen.NOISE_LIGHTNESS
            : this.prefs.NOISE_LIGHTNESS;

        this.update_lockscreen();
    }

    update_lockscreen() {
        UnlockDialog.prototype._updateBackgroundEffects =
            this._updateBackgroundEffects;
    }

    _updateBackgroundEffects() {
        for (const widget of this._backgroundGroup) {
            log(`OOOOOOOOOOOOOO [Blur my Shell] in the lockscreen!`);

            const blur_effect = widget.get_effect('blur');

            if (blur_effect) {
                blur_effect.set({
                    brightness: brightness,
                    sigma: sigma,
                });

                widget.remove_effect_by_name('color');
                widget.remove_effect_by_name('noise');

                let color_effect = new ColorEffect(color);
                color_effect.set_name('color');

                let noise_effect = new NoiseEffect({
                    name: 'noise',
                    noise: noise,
                    lightness: lightness
                });

                widget.add_effect(color_effect);
                widget.add_effect(noise_effect);
            }
        }
    }

    set_sigma(s) {
        sigma = s;
        this.update_lockscreen();
    }

    set_brightness(b) {
        brightness = b;
        this.update_lockscreen();
    }

    set_color(c) {
        color = c;
        this.update_lockscreen();
    }

    set_noise_amount(n) {
        noise = n;
        this.update_lockscreen();
    }

    set_noise_lightness(l) {
        lightness = l;
        this.update_lockscreen();
    }

    disable() {
        this._log("removing blur from lockscreen");

        UnlockDialog.prototype._updateBackgroundEffects = original;

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG)
            log(`[Blur my Shell] ${str}`);
    }
};
