'use strict';

const St = imports.gi.St;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;
const Background = imports.ui.background;

const default_sigma = 30;
const default_brightness = 0.6;

const original_createBackground = imports.ui.unlockDialog.UnlockDialog.prototype._createBackground;

var LockscreenBlur = class LockscreenBlur {
    constructor(connections) {
        this.connections = connections;
        this.sigma = default_sigma;
        this.brightness = default_brightness;
    }

    enable() {
        this._log("blurring lockscreen");

        imports.ui.unlockDialog.UnlockDialog.prototype._createBackground = this._createBackground;
    }

    _createBackground(monitorIndex) {
        this._log("locking screen (using `this`)");
        log("locking screen (without `this`)");

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

        const themeContext = St.ThemeContext.get_for_stage(global.stage);

        let effect = new Shell.BlurEffect({
            brightness: this.brightness,
            sigma: this.sigma * themeContext.scale_factor,
            mode: 0
        });

        this._scaleChangedId = themeContext.connect('notify::scale-factor', () => { effect.sigma = this.sigma * themeContext.scale_factor; });

        widget.add_effect(effect);
    }

    set_sigma(sigma) { this.sigma = sigma }

    set_brightness(brightness) { this.brightness = brightness }

    disable() {
        this._log("removing blur from lockscreen");

        imports.ui.unlockDialog.UnlockDialog.prototype._createBackground = original_createBackground;
    }

    _log(str) { log("[Blur my Shell] " + str) }
}