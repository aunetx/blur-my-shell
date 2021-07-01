'use strict';

const { St, Shell } = imports.gi;
const Main = imports.ui.main;
const Background = imports.ui.background;

let shell_version = imports.misc.config.PACKAGE_VERSION.split('.');

function verify_function_to_use() {
    if (parseInt(shell_version[1]) <= 36 && parseInt(shell_version[2] <= 3))
        return false
    else
        return true
}

let is_new_function = verify_function_to_use();

let sigma = 30;
let brightness = 0.6;

const original_createBackground = imports.ui.unlockDialog.UnlockDialog.prototype._updateBackgroundEffects;
const original_createBackground_old = imports.ui.unlockDialog.UnlockDialog.prototype._createBackground;


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
        if (is_new_function)
            imports.ui.unlockDialog.UnlockDialog.prototype._updateBackgroundEffects = this._createBackground;
        else
            imports.ui.unlockDialog.UnlockDialog.prototype._createBackground = this._createBackground_old;

    }


    _createBackground() {
        for (const widget of this._backgroundGroup.get_children()) {
            widget.get_effect('blur').set({
                brightness: brightness,
                sigma: sigma,
            });
        }
    }

    _createBackground_old(monitorIndex) {
        let monitor = Main.layoutManager.monitors[monitorIndex];
        let widget = new St.Widget({
            style_class: 'screen-shield-background',
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height,
        });

        let bgManager = new Background.BackgroundManager({
            container: widget,
            monitorIndex,
            controlPosition: false,
        });

        this._bgManagers.push(bgManager);

        this._backgroundGroup.add_child(widget);

        let effect = new Shell.BlurEffect({
            brightness: brightness,
            sigma: sigma,
            mode: 0
        });

        this._scaleChangedId = themeContext.connect('notify::scale-factor', () => {
            effect.sigma = sigma;
        });

        widget.add_effect(effect);
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

        if (is_new_function)
            imports.ui.unlockDialog.UnlockDialog.prototype._updateBackgroundEffects = original_createBackground;
        else
            imports.ui.unlockDialog.UnlockDialog.prototype._createBackground = original_createBackground_old;

        this.connections.disconnect_all();
    }

    _log(str) {
        log(`[Blur my Shell] ${str}`)
    }
}