'use strict';

const { St, Shell, GLib, Meta } = imports.gi;
const Main = imports.ui.main;
const Signals = imports.signals;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
const PaintSignals = Me.imports.paint_signals;

/// This type of object is created for every dash found, and talks to the main DashBlur thanks
/// to signals.
/// This allows to dynamically track the created dashes for each screen.
class DashInfos {
    constructor(dash_blur, dash, background_parent, effect, prefs) {
        // the parent DashBlur object, to communicate with
        this.dash_blur = dash_blur;
        // the blurred dash
        this.dash = dash;
        // the blurred box's parent
        this.background_parent = background_parent;
        // the effect used individually on this dash
        this.effect = effect;
        // a shortcut for main extension preferences
        this.prefs = prefs;

        // We connect to all the signals that can be sent by DashBlur, and do nothing more than obey

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

        // To hide/show the blur, we simply set its sigma to 0/normal: this is simply efficient,
        // and it is hidden only in overview so performance overhead (if there are any) is minimal

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


/// The main class, used to store and describe the blur of Dash to Dock
///
/// It does not actually blur the normal dash, because it has no need to: its background
/// colour can be set to a strong transparency, and it will use the overview blur behind it.
///
/// As there can be many dashes with Dash to Dock (often one by monitor), they are individually
/// managed by the DashInfos class, and grouped in DashBlur.
var DashBlur = class DashBlur {
    constructor(connections, prefs) {
        // a list of all the children dashes informations
        this.dashes = [];
        // conveniences
        this.connections = connections;
        this.prefs = prefs;
        this.paint_signals = new PaintSignals.PaintSignals(connections);
        // main sigma, updating it updates all the children dashes' sigma
        this.sigma = prefs.SIGMA.get();
        // main brightness, updating it updates all the children dashes' brightness
        this.brightness = prefs.BRIGHTNESS.get();
    }

    /// Called when the dash blur is enabled, either manually, on login or wake up
    enable() {
        // listen to new actors added and blur them if it looks like dash to dock
        this.connections.connect(Main.uiGroup, 'actor-added', (_, actor) => {
            if ((actor.get_name() == "dashtodockContainer") && (actor.constructor.name == 'DashToDock'))
                this.try_blur(actor);
        });

        // blur what is already present before the signal was set up
        this.blur_existing_dashes();

        Main.overview.dash._bms_dash_blur = this;
    }

    /// Finds all existing dashes on every monitor, and call `try_blur` on them
    /// We cannot only blur `Main.overview.dash`, as there could be multiple screens
    blur_existing_dashes() {
        this._log("searching for dash");
        // blur every dash found
        Main.uiGroup.get_children().filter((child) => {
            // filter by name
            return (child.get_name() == "dashtodockContainer") && (child.constructor.name == 'DashToDock')
        }).forEach(this.try_blur.bind(this));
    }

    /// Tries to blur the dash contained in the given actor
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

    /// Blurs the dash and returns a `DashInfos` containing its informations
    blur_dash_from(dash, dash_container) {
        let is_static = true;

        // the effect to be applied
        let effect = new Shell.BlurEffect({
            brightness: this.brightness,
            sigma: this.sigma,
            mode: is_static ? 0 : 1
        });

        // dash background parent, not visible
        let background_parent = new St.Widget({
            name: 'dash-blurred-background-parent',
            style_class: 'dash-blurred-background-parent',
            width: 0,
            height: 0
        });

        // dash background widget
        let background = is_static ? new Meta.BackgroundActor({
            name: 'dash-blurred-background',
            x: -dash_container.x - dash_container._slider.x,
            y: dash._isHorizontal
                ? -dash_container.y - dash_container._slider.y + dash_container.height
                : dash_container.y + dash_container._slider.y,
            width: dash.width,
            height: dash.height,
        }) : new St.Widget({
            name: 'dash-blur-effect-actor',
            style_class: 'dash-blur-effect-actor',
            x: dash_container._slider.x,
            y: dash_container._slider.y,
            width: dash.width,
            height: dash.height,
        });

        let upd = _ => this.update_size_position(is_static, background, dash_container, dash);
        upd();

        // update the static wallpaper if needed
        if (is_static)
            this.update_wallpaper(background);

        // updates size and position on change
        this.connections.connect(dash_container, 'notify::x', upd);
        this.connections.connect(dash_container, 'notify::y', upd);
        this.connections.connect(dash_container._slider, 'notify::x', upd);
        this.connections.connect(dash_container._slider, 'notify::y', upd);
        this.connections.connect(dash, 'notify::width', upd);
        this.connections.connect(dash, 'notify::height', upd);
        this.connections.connect(dash, 'event', upd);


        // HACK
        if (!is_static) {
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

                this.paint_signals.connect(dash, this.effect);
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
        return new DashInfos(this, dash, background_parent, effect, this.prefs);
    }

    /// Updates the size and the position of the blurred widget
    update_size_position(is_static, bg, cont, dash) {
        if (is_static) {
            let x, y, w, h;
            let e = dash.get_transformed_extents();
            if (dash._isHorizontal) {
                x = cont.x + cont._slider.x;
                y = cont.y + cont._slider.y - cont.height;
                w = dash.width;
                h = dash.height;
            } else {
                x = cont.x + cont._slider.x;
                y = cont.y + cont._slider.y;
                w = dash.width;
                h = dash.height;
            }
            this._log(`dash-to-dock position changed: x = ${x}, y = ${y}, width = ${w}, height = ${h}`);
            bg.set_clip(x, y, w, h);
            bg.set_position(-x, -y);
            bg.set_size(w, h);
        } else {
            bg.set_position(cont._slider.x, cont._slider.y);
            bg.set_size(dash.width, dash.height);
        }
    }

    ///! REMOVE
    _update_size_position(is_static, bg, cont, dash) {
        if (is_static) {
            let x, y, w, h;
            if (dash._isHorizontal) {
                x = cont.x + cont._slider.x;
                y = cont.y + cont._slider.y - cont.height;
                w = dash.width;
                h = dash.height;
            } else {
                x = cont.x + cont._slider.x;
                y = cont.y + cont._slider.y;
                w = dash.width;
                h = dash.height;
            }
            this._log(`dash-to-dock position changed: x = ${x}, y = ${y}, width = ${w}, height = ${h}`);
            bg.set_clip(x, y, w, h);
            bg.set_position(-x, -y);
            bg.set_size(w, h);
        } else {
            bg.set_position(cont._slider.x, cont._slider.y);
            bg.set_size(dash.width, dash.height);
        }
    }

    /// Gets the right wallpaper to set it on the dash and blur it
    /// Should only be called when static blur is enabled
    update_wallpaper(background) {
        // the try/catch behaviour is used to prevent bugs like #136 and #137
        try {
            let bg = Main.layoutManager._backgroundGroup.get_child_at_index(Main.layoutManager.monitors.length - this.monitor.index - 1);
            background.set_content(bg.get_content());
        } catch (error) { this._log(`could not blur dash to dock: ${error}`) }
    }

    /// Returns either the primary monitor, or a dummy one if none is connected
    get monitor() {
        if (Main.layoutManager.primaryMonitor != null) {
            return Main.layoutManager.primaryMonitor
        } else {
            return { x: 0, y: 0, width: 0, index: 0 }
        }
    }

    /// Sets the main sigma and update children dashes
    set_sigma(sigma) {
        this.sigma = sigma;
        this.emit('update-sigma', true);
    }

    /// Sets the main brightness and update children dashes
    set_brightness(brightness) {
        this.brightness = brightness;
        this.emit('update-brightness', true);
    }

    /// Called whenever dash blur is disabled: either manually, on logout or suspend
    disable() {
        this._log("removing blur from dashes");

        this.emit('remove-dashes', true);

        this.dashes = [];
        this.connections.disconnect_all();
    }

    /// Call all children dashes to show up
    show() {
        this.emit('show', true);
    }

    /// Call all children dashes to hide out
    hide() {
        this.emit('hide', true);
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}

// A way to add the desired signals to the DashBlur class:
// hide, show, update-brightness, update-sigma and remove-dashes
// TODO change the DashBlur class to directly inherit from gtk to have a more defined API
Signals.addSignalMethods(DashBlur.prototype);