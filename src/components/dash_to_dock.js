'use strict';

const { St, Shell, GLib } = imports.gi;
const Main = imports.ui.main;
const Signals = imports.signals;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { PaintSignals } = Me.imports.effects.paint_signals;

const DASH_STYLES = [
    "transparent-dash",
    "light-dash",
    "dark-dash"
];


/// This type of object is created for every dash found, and talks to the main
/// DashBlur thanks to signals.
///
/// This allows to dynamically track the created dashes for each screen.
class DashInfos {
    constructor(dash_blur, dash, background_parent, effect, prefs) {
        // the parent DashBlur object, to communicate
        this.dash_blur = dash_blur;
        // the blurred dash
        this.dash = dash;
        this.background_parent = background_parent;
        this.effect = effect;
        this.prefs = prefs;
        this.old_style = this.dash._background.style;

        dash_blur.connections.connect(dash_blur, 'remove-dashes', () => {
            this._log("removing blur from dash");
            this.dash.get_parent().remove_child(this.background_parent);
            this.dash._background.style = this.old_style;

            DASH_STYLES.forEach(
                style => this.dash.remove_style_class_name(style)
            );
        });

        dash_blur.connections.connect(dash_blur, 'update-sigma', () => {
            this.effect.sigma = this.dash_blur.sigma;
        });

        dash_blur.connections.connect(dash_blur, 'update-brightness', () => {
            this.effect.brightness = this.dash_blur.brightness;
        });

        dash_blur.connections.connect(dash_blur, 'override-background', () => {
            this.dash._background.style = null;

            DASH_STYLES.forEach(
                style => this.dash.remove_style_class_name(style)
            );

            this.dash.set_style_class_name(
                DASH_STYLES[this.prefs.dash_to_dock.STYLE_DASH_TO_DOCK]
            );
        });

        dash_blur.connections.connect(dash_blur, 'reset-background', () => {
            this.dash._background.style = this.old_style;

            DASH_STYLES.forEach(
                style => this.dash.remove_style_class_name(style)
            );
        });

        dash_blur.connections.connect(dash_blur, 'show', () => {
            this.effect.sigma = this.dash_blur.sigma;
        });

        dash_blur.connections.connect(dash_blur, 'hide', () => {
            this.effect.sigma = 0;
        });
    }

    _log(str) {
        if (this.prefs.DEBUG)
            log(`[Blur my Shell > dash]         ${str}`);
    }
}

var DashBlur = class DashBlur {
    constructor(connections, prefs) {
        this.dashes = [];
        this.connections = connections;
        this.prefs = prefs;
        this.paint_signals = new PaintSignals(connections);
        this.sigma = this.prefs.dash_to_dock.CUSTOMIZE
            ? this.prefs.dash_to_dock.SIGMA
            : this.prefs.SIGMA;
        this.brightness = this.prefs.dash_to_dock.CUSTOMIZE
            ? this.prefs.dash_to_dock.BRIGHTNESS
            : this.prefs.BRIGHTNESS;
        this.enabled = false;
    }

    enable() {
        this.connections.connect(Main.uiGroup, 'actor-added', (_, actor) => {
            if (
                (actor.get_name() === "dashtodockContainer") &&
                (actor.constructor.name === 'DashToDock')
            )
                this.try_blur(actor);
        });

        this.blur_existing_dashes();
        this.connect_to_overview();

        this.enabled = true;
    }

    // Finds all existing dashes on every monitor, and call `try_blur` on them
    // We cannot only blur `Main.overview.dash`, as there could be several
    blur_existing_dashes() {
        this._log("searching for dash");

        // blur every dash found, filtered by name
        Main.uiGroup.get_children().filter((child) => {
            return (child.get_name() === "dashtodockContainer") &&
                (child.constructor.name === 'DashToDock');
        }).forEach(this.try_blur.bind(this));
    }

    // Tries to blur the dash contained in the given actor
    try_blur(dash_container) {
        let dash_box = dash_container._slider.get_child();

        // verify that we did not already blur that dash
        if (!dash_box.get_children().some((child) => {
            return child.get_name() === "dash-blurred-background-parent";
        })) {
            this._log("dash to dock found, blurring it");

            // finally blur the dash
            let dash = dash_box.get_children().find(child => {
                return child.get_name() === 'dash';
            });

            this.dashes.push(this.blur_dash_from(dash, dash_container));
        }
    }

    // Blurs the dash and returns a `DashInfos` containing its information
    blur_dash_from(dash, dash_container) {
        // the effect to be applied
        let effect = new Shell.BlurEffect({
            brightness: this.brightness,
            sigma: this.sigma,
            mode: Shell.BlurMode.BACKGROUND
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

        // add the widget to the dash
        background.add_effect(effect);
        background_parent.add_child(background);
        dash.get_parent().insert_child_at_index(background_parent, 0);

        // HACK
        //
        //`Shell.BlurEffect` does not repaint when shadows are under it. [1]
        //
        // This does not entirely fix this bug (shadows caused by windows
        // still cause artifacts), but it prevents the shadows of the panel
        // buttons to cause artifacts on the panel itself
        //
        // [1]: https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

        if (this.prefs.HACKS_LEVEL === 1) {
            this._log("dash hack level 1");
            this.paint_signals.disconnect_all();

            let rp = () => {
                effect.queue_repaint();
            };

            dash._box.get_children().forEach((icon) => {
                try {
                    let zone = icon.get_child_at_index(0);

                    this.connections.connect(zone, [
                        'enter-event', 'leave-event', 'button-press-event'
                    ], rp);
                } catch (e) {
                    this._log(`${e}, continuing`);
                }
            });

            this.connections.connect(dash._box, 'actor-added', (_, actor) => {
                try {
                    let zone = actor.get_child_at_index(0);

                    this.connections.connect(zone, [
                        'enter-event', 'leave-event', 'button-press-event'
                    ], rp);
                } catch (e) {
                    this._log(`${e}, continuing`);
                }
            });

            let show_apps = dash._showAppsIcon;

            this.connections.connect(show_apps, [
                'enter-event', 'leave-event', 'button-press-event'
            ], rp);

            this.connections.connect(dash, 'leave-event', rp);
        } else if (this.prefs.HACKS_LEVEL === 2) {
            this._log("dash hack level 2");

            this.paint_signals.connect(background, effect);
        } else {
            this.paint_signals.disconnect_all();
        }

        // create infos
        let infos = new DashInfos(
            this, dash, background_parent, effect, this.prefs
        );

        // update the background
        this.update_background();

        // returns infos
        return infos;
    }

    /// Connect when overview if opened/closed to hide/show the blur accordingly
    connect_to_overview() {
        this.connections.disconnect_all_for(Main.overview);

        if (this.prefs.dash_to_dock.UNBLUR_IN_OVERVIEW) {
            this.connections.connect(
                Main.overview, 'showing', this.hide.bind(this)
            );
            this.connections.connect(
                Main.overview, 'hidden', this.show.bind(this)
            );
        }
    };

    /// Updates the background to either remove it or not, according to the
    /// user preferences.
    update_background() {
        if (this.prefs.dash_to_dock.OVERRIDE_BACKGROUND)
            this.emit('override-background', true);
        else
            this.emit('reset-background', true);
    }

    set_sigma(sigma) {
        this.sigma = sigma;
        this.emit('update-sigma', true);
    }

    set_brightness(brightness) {
        this.brightness = brightness;
        this.emit('update-brightness', true);
    }

    // not implemented for dynamic blur
    set_color(c) { }
    set_noise_amount(n) { }
    set_noise_lightness(l) { }

    disable() {
        this._log("removing blur from dashes");

        this.emit('remove-dashes', true);

        this.dashes = [];
        this.connections.disconnect_all();

        this.enabled = false;
    }

    show() {
        this.emit('show', true);
    }
    hide() {
        this.emit('hide', true);
    }

    _log(str) {
        if (this.prefs.DEBUG)
            log(`[Blur my Shell > dash manager] ${str}`);
    }
};

Signals.addSignalMethods(DashBlur.prototype);