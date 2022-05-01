'use strict';

const { St, Shell } = imports.gi;
const Main = imports.ui.main;
const Background = imports.ui.background;

let sigma = 30;
let brightness = 0.6;

const UnlockDialog_proto = imports.ui.unlockDialog.UnlockDialog.prototype;
const original_createBackground = UnlockDialog_proto._updateBackgroundEffects;


const Me = imports.misc.extensionUtils.getCurrentExtension();
const ColorEffect = Me.imports.conveniences.color_effect.ColorEffect;

// When we override _createBackground we can't call this.prefs anymore as "this"
// refers to the UnlockDialog_proto class now, so if we cache the values
// before we override the function we can still access the rbg values
let color_blur; // true/false to add color
let red;        // red value
let blue;       // blue value
let green;      // green value
let blend;

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
        UnlockDialog_proto._updateBackgroundEffects = this._createBackground;

        color_blur = this.prefs.COLOR_BLUR.get();
        red = this.prefs.RED.get();
        green = this.prefs.GREEN.get();
        blue = this.prefs.BLUE.get();
        blend = this.prefs.BLEND.get();

        // Color effect does not work when we apply it after the blur in this case?
        // widget.add_effect() did not work ether for the ColorEffect so I overrided the function
        // instead to call it 

        UnlockDialog_proto._createBackground =
            this._createBackground_with_color;
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

    _createBackground_with_color(monitorIndex) {
        let monitor = Main.layoutManager.monitors[monitorIndex];
        let widget = new St.Widget({
            style_class: "screen-shield-background",
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height,
        });

        if (color_blur) {

            widget.add_effect(new ColorEffect({
                'red': red,
                'green': green,
                'blue': blue,
                'blend' : blend,
            }));
        }

        widget.add_effect(new Shell.BlurEffect({ name: "blur" }));

        let bgManager = new Background.BackgroundManager({
            container: widget,
            monitorIndex,
            controlPosition: false,
        });

        this._bgManagers.push(bgManager);

        this._backgroundGroup.add_child(widget);
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

        UnlockDialog_proto._updateBackgroundEffects = original_createBackground;

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`);
    }
};
