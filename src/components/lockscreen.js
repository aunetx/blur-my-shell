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

const original_createBackground =
    UnlockDialog.prototype._createBackground;
const original_updateBackgroundEffects =
    UnlockDialog.prototype._updateBackgroundEffects;


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
        UnlockDialog.prototype._createBackground =
            this._createBackground;
        UnlockDialog.prototype._updateBackgroundEffects =
            this._updateBackgroundEffects;
    }

    _createBackground(monitorIndex) {
        let monitor = Main.layoutManager.monitors[monitorIndex];
        let widget = new St.Widget({
            style_class: "screen-shield-background",
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height,
        });

        let blur_effect = new Shell.BlurEffect({
            name: 'blur',
            sigma: sigma,
            brightness: brightness
        });

        // store the scale in the effect in order to retrieve later
        blur_effect.scale = monitor.geometry_scale;

        let color_effect = new ColorEffect({
            name: 'color',
            color: color
        });

        let noise_effect = new NoiseEffect({
            name: 'noise',
            noise: noise,
            lightness: lightness
        });

        widget.add_effect(color_effect);
        widget.add_effect(noise_effect);
        widget.add_effect(blur_effect);

        let bgManager = new Background.BackgroundManager({
            container: widget,
            monitorIndex,
            controlPosition: false,
        });

        this._bgManagers.push(bgManager);

        this._backgroundGroup.add_child(widget);
    }

    _updateBackgroundEffects() {
        for (const widget of this._backgroundGroup) {
            const color_effect = widget.get_effect('blur');
            const noise_effect = widget.get_effect('blur');
            const blur_effect = widget.get_effect('blur');

            if (color_effect)
                color_effect.set({
                    color: color
                });

            if (noise_effect) {
                noise_effect.set({
                    noise: noise,
                    lightness: lightness,
                });
            }

            if (blur_effect) {
                blur_effect.set({
                    brightness: brightness,
                    sigma: sigma * blur_effect.scale,
                });
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

        UnlockDialog.prototype._createBackground =
            original_createBackground;
        UnlockDialog.prototype._updateBackgroundEffects =
            original_updateBackgroundEffects;

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG)
            log(`[Blur my Shell > lockscreen]   ${str}`);
    }
};
