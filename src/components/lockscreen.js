import St from 'gi://St';
import Shell from 'gi://Shell';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Background from 'resource:///org/gnome/shell/ui/background.js';
import { UnlockDialog } from 'resource:///org/gnome/shell/ui/unlockDialog.js';

let sigma;
let brightness;
let color;
let noise;
let lightness;

const original_createBackground =
    UnlockDialog.prototype._createBackground;
const original_updateBackgroundEffects =
    UnlockDialog.prototype._updateBackgroundEffects;


export const LockscreenBlur = class LockscreenBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
    }

    enable() {
        this._log("blurring lockscreen");

        brightness = this.settings.lockscreen.CUSTOMIZE
            ? this.settings.lockscreen.BRIGHTNESS
            : this.settings.BRIGHTNESS;
        sigma = this.settings.lockscreen.CUSTOMIZE
            ? this.settings.lockscreen.SIGMA
            : this.settings.SIGMA;
        color = this.settings.lockscreen.CUSTOMIZE
            ? this.settings.lockscreen.COLOR
            : this.settings.COLOR;
        noise = this.settings.lockscreen.CUSTOMIZE
            ? this.settings.lockscreen.NOISE_AMOUNT
            : this.settings.NOISE_AMOUNT;
        lightness = this.settings.lockscreen.CUSTOMIZE
            ? this.settings.lockscreen.NOISE_LIGHTNESS
            : this.settings.NOISE_LIGHTNESS;

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

        let color_effect = global.blur_my_shell._lockscreen_blur.effects_manager.new_color_effect({
            name: 'color',
            color: color
        }, this.settings);

        let noise_effect = global.blur_my_shell._lockscreen_blur.effects_manager.new_noise_effect({
            name: 'noise',
            noise: noise,
            lightness: lightness
        }, this.settings);

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
            const color_effect = widget.get_effect('color');
            const noise_effect = widget.get_effect('noise');
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
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > lockscreen]   ${str}`);
    }
};
