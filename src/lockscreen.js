'use strict';

const { St, Shell } = imports.gi;
const Main = imports.ui.main;
const Background = imports.ui.background;

let sigma = 30;
let brightness = 0.6;

const original_createBackground = imports.ui.unlockDialog.UnlockDialog.prototype._updateBackgroundEffects;


var LockscreenBlur = class LockscreenBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.prefs = prefs;
    }

    enable() {
        this._log("blurring lockscreen");

        this.update_lockscreen();
    }

    update_lockscreen() {
        imports.ui.unlockDialog.UnlockDialog.prototype._updateBackgroundEffects = this._createBackground;
    }

    _createBackground() {
        for (const widget of this._backgroundGroup) {
            const effect = widget.get_effect('blur');

            if (effect) {
                effect.set({
                    brightness: brightness,
                    sigma: sigma,
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

    disable() {
        this._log("removing blur from lockscreen");

        imports.ui.unlockDialog.UnlockDialog.prototype._updateBackgroundEffects = original_createBackground;

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}