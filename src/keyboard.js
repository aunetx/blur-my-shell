'use strict';

const { St, Shell, Meta, Gio, GLib } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
const PaintSignals = Me.imports.paint_signals;


var KeyboardBlur = class KeyboardBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.paint_signals = new PaintSignals.PaintSignals(connections);
        this.prefs = prefs;
        this.sigma = this.prefs.SIGMA.get();
        this.brightness = this.prefs.BRIGHTNESS.get();
        this.first_blurred = false;
    }

    enable() {
        this._log("blurring keyboard");

        this.connections.connect(Main.uiGroup, "actor-added", (_, actor) => {
            this.init_blur();
        });

        this.init_blur();
    }

    init_blur() {
        if (!this.first_blurred && Main.layoutManager.keyboardBox) {
            this.connections.connect(Main.layoutManager.keyboardBox, 'show', () => {
                Utils.setTimeout(() => { this.blur_keyboard(); }, 100);
            });
            this.connections.connect(Main.layoutManager.keyboardBox, 'hide', () => {
                Utils.setTimeout(() => { this.unblur_keyboard(); }, 100);
            });
            this.first_blurred = true;
        };
    }

    blur_keyboard() {
        let effect = new Shell.BlurEffect({
            name: "keyboard-blur",
            sigma: this.sigma,
            brightness: this.brightness,
            mode: 1
        });
        Main.layoutManager.keyboardBox.get_child_at_index(0).add_effect(effect);
        this.paint_signals.connect(Main.layoutManager.keyboardBox.get_child_at_index(0), effect);
        Main.layoutManager.keyboardBox.get_child_at_index(0).style = "background:transparent;";
    }

    unblur_keyboard() {
        this.paint_signals.disconnect_all();
        try {
            Main.layoutManager.keyboardBox.get_child_at_index(0).remove_effect_by_name("keyboard-blur");
        } catch (e) { }
    }

    set_sigma(s) {
        this.sigma = s;
    }

    set_brightness(b) {
        this.brightness = b;
    }

    disable() {
        this._log("removing blur from keyboard");

        this.connections.disconnect_all();
    }

    show() {
        this.background_parent.show();
    }
    hide() {
        this.background_parent.hide();
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}
