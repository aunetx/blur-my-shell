'use strict';

const { St, Shell, GLib } = imports.gi;
const Main = imports.ui.main;
const Signals = imports.signals;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
const PaintSignals = Me.imports.paint_signals;

// This type of object is created for every dash found, and talks to the main DashBlur thanks
// to signals. This allows to dynamically track the created dashes for each screen.
class DashInfos {
    constructor(dash_blur, dash, dash_box, background_parent, effect, prefs) {
        // the parent DashBlur object, to communicate
        this.dash_blur = dash_blur;
        // the blurred dash
        this.dash = dash;
        // the actually blurred box
        this.dash_box = dash_box;
        this.background_parent = background_parent;
        this.effect = effect;
        this.prefs = prefs;

        dash_blur.connections.connect(dash_blur, 'remove-dashes', () => {
            this._log("removing blur from dash");
            this.dash.get_parent().remove_child(this.background_parent);
            this.dash.remove_style_class_name('blurred-dash');
        });

        dash_blur.connections.connect(dash_blur, 'update-sigma', () => {
            this.effect.sigma = this.dash_blur.sigma;
        });

        dash_blur.connections.connect(dash_blur, 'update-brightness', () => {
            this.effect.brightness = this.dash_blur.brightness;
        });

        dash_blur.connections.connect(dash_blur, 'show', () => {
            this.effect.sigma = this.dash_blur.sigma;
        });

        dash_blur.connections.connect(dash_blur, 'hide', () => {
            this.effect.sigma = 0;
        });
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}

var DashBlur = class DashBlur {
    constructor(connections, prefs) {
        this.dashes = [];
        this.connections = connections;
        this.prefs = prefs;
        this.paint_signals = new PaintSignals.PaintSignals(connections);
        this.sigma = prefs.SIGMA.get();
        this.brightness = prefs.BRIGHTNESS.get();
    }

    enable() {
        this.connections.connect(Main.uiGroup, 'actor-added', (_, actor) => {
            if ((actor.get_name() == "dashtodockContainer") && (actor.constructor.name == 'DashToDock'))
                this.try_blur(actor);
        });

        this.blur_existing_dashes();
    }

    // Finds all existing dashes on every monitor, and call `try_blur` on them
    // We cannot only blur `Main.overview.dash`, as there could be multiple screens
    blur_existing_dashes() {
        this._log("searching for dash");
        // blur every dash found
        Main.uiGroup.get_children().filter((child) => {
            // filter by name
            return (child.get_name() == "dashtodockContainer") && (child.constructor.name == 'DashToDock')
        }).forEach(this.try_blur.bind(this));
    }

    // Tries to blur the dash contained in the given actor
    try_blur(dash_container) {
        let dash_box = dash_container._slider.get_child();
        // verify that we did not already blur that dash
        if (!dash_box.get_children().some((c) => {
            return c.get_name() == "dash-blurred-background-parent"
        })) {
            // finally blur the dash
            this._log("dash to dock found, blurring it");
            let dash = dash_box.get_children().find(c => { return c.get_name() == 'dash' })
            this.dashes.push(this.blur_dash_from(dash, dash_container));
        }
    }

    // Blurs the dash and returns a `DashInfos` containing its informations
    blur_dash_from(dash, dash_container) {
        // the effect to be applied
        let effect = new Shell.BlurEffect({
            brightness: this.brightness,
            sigma: this.sigma,
            mode: 1
        });

        // dash background parent, not visible
        let background_parent = new St.Widget({
            name: 'dash-blurred-background-parent',
            style_class: 'dash-blurred-background-parent',
            width: 0,
            height: 0
        });

        // dash background widget
        let background = new St.Widget({
            name: 'dash-blurred-background',
            style_class: 'dash-blurred-background',
            x: 0,
            y: dash_container._slider.y,
            width: dash.width,
            height: dash.height,
        });

        // updates size and position on change
        this.connections.connect(dash_container._slider, 'notify::y', _ => {
            background.y = dash_container._slider.y;
        });
        this.connections.connect(dash, 'notify::width', _ => {
            background.width = dash.width;
        });
        this.connections.connect(dash, 'notify::height', _ => {
            background.height = dash.height;
        });


        // HACK
        {
            // ! DIRTY PART: hack because `Shell.BlurEffect` does not repaint when shadows are under it
            // ! this does not entirely fix this bug (shadows caused by windows still cause artefacts)
            // ! but it prevents the shadows of the dash buttons to cause artefacts on the dash itself
            // ! note: issue opened at https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (this.prefs.HACKS_LEVEL.get() == 1) {
                this._log("dash hack level 1");
                this.paint_signals.disconnect_all();

                let rp = () => {
                    effect.queue_repaint()
                };

                dash._box.get_children().forEach((icon) => {
                    try {
                        let zone = icon.get_child_at_index(0);
                        this.connections.connect(zone, 'enter-event', rp);
                        this.connections.connect(zone, 'leave-event', rp);
                        this.connections.connect(zone, 'button-press-event', rp);
                    } catch (e) {
                        this._log(`${e}, continuing`);
                    }
                })

                this.connections.connect(dash._box, 'actor-added', (_, actor) => {
                    try {
                        let zone = actor.get_child_at_index(0);
                        this.connections.connect(zone, 'enter-event', rp);
                        this.connections.connect(zone, 'leave-event', rp);
                        this.connections.connect(zone, 'button-press-event', rp);
                    } catch (e) {
                        this._log(`${e}, continuing`);
                    }
                })

                this.connections.connect(dash._showAppsIcon, 'enter-event', rp);
                this.connections.connect(dash._showAppsIcon, 'leave-event', rp);
                this.connections.connect(dash._showAppsIcon, 'button-press-event', rp);

                this.connections.connect(dash, 'leave-event', rp);
            } else if (this.prefs.HACKS_LEVEL.get() == 2) {
                this._log("dash hack level 2");

                this.paint_signals.connect(background, effect);
            } else {
                this.paint_signals.disconnect_all();
            }

            // ! END OF DIRTY PART
        }

        // add the widget to the dash
        background.add_effect(effect);
        background_parent.add_child(background);
        dash.get_parent().insert_child_at_index(background_parent, 0);

        // remove background color
        dash.set_style_class_name('blurred-dash');

        // returns infos
        return new DashInfos(this, dash, dash._background, background_parent, effect, this.prefs);
    }

    set_sigma(sigma) {
        this.sigma = sigma;
        this.emit('update-sigma', true);
    }

    set_brightness(brightness) {
        this.brightness = brightness;
        this.emit('update-brightness', true);
    }

    disable() {
        this._log("removing blur from dashes");

        this.emit('remove-dashes', true);

        this.dashes = [];
        this.connections.disconnect_all();
    }

    show() {
        this.emit('show', true);
    }
    hide() {
        this.emit('hide', true);
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}

Signals.addSignalMethods(DashBlur.prototype);