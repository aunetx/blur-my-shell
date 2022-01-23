'use strict';

const { St, Shell, Meta, Gio } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
const PaintSignals = Me.imports.paint_signals;


var WindowListBlur = class WindowListBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.prefs = prefs;
        this.paint_signals = new PaintSignals.PaintSignals(connections);
        this.blur_effects = [];
    }

    enable() {
        this._log("blurring window list");

        // add the blur if window-list found
        Main.layoutManager.uiGroup.get_children().forEach(child => this.try_blur(child));

        // listen to new actors in `Main.layoutManager.uiGroup` and blur if window-list
        this.connections.connect(Main.layoutManager.uiGroup, 'actor-added', (_, child) => this.try_blur(child));

        // connect to overview
        this.connections.connect(Main.overview, 'showing', () => {
            this.hide();
        });
        this.connections.connect(Main.overview, 'hidden', () => {
            this.show();
        });
    }

    try_blur(child) {
        if (child.constructor.name == "WindowList" && child.style != "background:transparent;") {
            this._log("found window list to blur");

            child.style = "background:transparent;";
            let effect = new Shell.BlurEffect({
                name: 'window-list-blur',
                sigma: this.prefs.SIGMA.get(),
                brightness: this.prefs.BRIGHTNESS.get(),
                mode: 1
            });
            child.add_effect(effect);
            this.blur_effects.push(effect);

            // ! DIRTY PART: hack because `Shell.BlurEffect` does not repaint when shadows are under it
            // ! this does not entirely fix this bug (shadows caused by windows still cause artefacts)
            // ! but it prevents the shadows of the panel buttons to cause artefacts on the panel itself
            // ! note: issue opened at https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (this.prefs.HACKS_LEVEL.get() == 1) {
                this._log("window list hack level 1");

                child._windowList.get_children().forEach(child => {
                    this.connections.connect(child, 'button-press-event', () => { effect.queue_repaint(); });
                });
            } else if (this.prefs.HACKS_LEVEL.get() == 2) {
                this._log("window list hack level 2");

                this.paint_signals.connect(child, effect);
            } else {
                this.paint_signals.disconnect_all();
            }

            // ! END OF DIRTY PART

            child._windowList.get_children().forEach(window => this.blur_window_button(window));
            this.connections.connect(child._windowList, 'actor-added', (_, window) => {
                this.blur_window_button(window);
            })
        }
    }

    blur_window_button(window) {
        window.get_child_at_index(0).style = "box-shadow:none;background-color:rgba(0,0,0,0.2);border-radius:5px;";
    }

    try_remove_blur(child) {
        if (child.constructor.name == "WindowList" && child.style == "background:transparent;") {
            child.style = null;
            child.remove_effect_by_name('window-list-blur');

            child._windowList.get_children().forEach(child => {
                child.get_child_at_index(0).style = null;
            });
        }
    }

    set_sigma(s) {
        this.blur_effects.forEach(effect => {
            effect.sigma = s;
        });
    }

    set_brightness(b) {
        this.blur_effects.forEach(effect => {
            effect.brightness = b;
        });
    }

    hide() {
        this.set_sigma(0);
    }

    show() {
        this.set_sigma(this.prefs.SIGMA.get());
    }

    disable() {
        this._log("removing blur from window list");

        Main.layoutManager.uiGroup.get_children().forEach(child => this.try_remove_blur(child))

        this.blur_effects = [];
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}