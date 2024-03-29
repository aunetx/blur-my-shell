import St from 'gi://St';
import Shell from 'gi://Shell';
import Meta from 'gi://Meta';
import Mtk from 'gi://Mtk';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
const Signals = imports.signals;

import { PaintSignals } from '../effects/paint_signals.js';
import { GaussianBlurEffect } from '../effects/gaussian_blur.js';

const DASH_STYLES = [
    "transparent-dash",
    "light-dash",
    "dark-dash"
];


// An helper function to find the monitor in which an actor is situated,
/// there might be a pre-existing function in GLib already
function find_monitor_for(actor) {
    let extents = actor.get_transformed_extents();
    let rect = new Mtk.Rectangle({
        x: extents.get_x(),
        y: extents.get_y(),
        width: extents.get_width(),
        height: extents.get_height(),
    });

    let index = global.display.get_monitor_index_for_rect(rect);

    return Main.layoutManager.monitors[index];
}


/// This type of object is created for every dash found, and talks to the main
/// DashBlur thanks to signals.
///
/// This allows to dynamically track the created dashes for each screen.
class DashInfos {
    constructor(dash_blur, dash, dash_container, dash_background, background, background_parent, effect) {
        // the parent DashBlur object, to communicate
        this.dash_blur = dash_blur;
        this.dash_container = dash_container;
        // the blurred dash
        this.dash = dash;
        this.dash_background = dash_background;
        this.background_parent = background_parent;
        this.background = background;
        this.effect = effect;
        this.settings = dash_blur.settings;
        this.old_style = this.dash._background.style;

        dash_blur.connections.connect(dash_blur, 'remove-dashes', () => {
            this._log("removing blur from dash");
            this.dash.get_parent().remove_child(this.background_parent);
            this.remove_style();
        });

        dash_blur.connections.connect(dash_blur, 'update-sigma', () => {
            if (this.dash_blur.is_static) {
                this.dash_blur.update_size();
            }
            this.effect.radius = 2 * this.dash_blur.sigma * this.effect.scale;
        });

        dash_blur.connections.connect(dash_blur, 'update-brightness', () => {
            this.effect.brightness = this.dash_blur.brightness;
        });

        dash_blur.connections.connect(dash_blur, 'update-corner-radius', () => {
            if (this.dash_blur.is_static) {
                let monitor = find_monitor_for(this.dash);
                let corner_radius = this.dash_blur.corner_radius * monitor.geometry_scale;
                this.effect.corner_radius = Math.min(
                    corner_radius, this.effect.width / 2, this.effect.height / 2
                );
            }
        });

        dash_blur.connections.connect(dash_blur, 'override-background', () => {
            this.remove_style();

            this.dash.set_style_class_name(
                DASH_STYLES[this.settings.dash_to_dock.STYLE_DASH_TO_DOCK]
            );
        });

        dash_blur.connections.connect(dash_blur, 'reset-background', () => this.remove_style());

        dash_blur.connections.connect(dash_blur, 'show', () => {
            if (this.dash_blur.is_static)
                this.background_parent.show();
            else
                this.effect.radius = this.dash_blur.sigma * 2 * this.effect.scale;
        });

        dash_blur.connections.connect(dash_blur, 'hide', () => {
            if (this.dash_blur.is_static)
                this.background_parent.hide();
            else
                this.effect.radius = 0;
        });

        dash_blur.connections.connect(dash_blur, 'update-wallpaper', () => {
            if (this.dash_blur.is_static) {
                let bg = Main.layoutManager._backgroundGroup.get_child_at_index(
                    Main.layoutManager.monitors.length
                    - find_monitor_for(this.dash).index - 1
                );
                if (bg && bg.get_content()) {
                    this.background.content.set({
                        background: bg.get_content().background
                    });
                    this._log('wallpaper updated');
                } else {
                    this._warn("could not get background for dash-to-dock");
                }
            }
        });

        dash_blur.connections.connect(dash_blur, 'update-size', () => {
            if (this.dash_blur.is_static) {
                let [x, y] = this.get_dash_position(this.dash_container, this.dash_background);

                this.background.x = -x;
                this.background.y = -y;

                this.effect.width = this.dash_background.width;
                this.effect.height = this.dash_background.height;

                this.dash_blur.set_corner_radius(this.dash_blur.corner_radius);

                if (dash_container.get_style_class_name().includes("top")) {
                    this.background.set_clip(x, y + this.dash.y + this.dash_background.y, this.dash_background.width, this.dash_background.height);
                } else if (dash_container.get_style_class_name().includes("bottom")) {
                    this.background.set_clip(x, y + this.dash.y + this.dash_background.y, this.dash_background.width, this.dash_background.height);
                } else if (dash_container.get_style_class_name().includes("left")) {
                    this.background.set_clip(x + this.dash.x + this.dash_background.x, y + this.dash.y + this.dash_background.y, this.dash_background.width, this.dash_background.height);
                } else if (dash_container.get_style_class_name().includes("right")) {
                    this.background.set_clip(x + this.dash.x + this.dash_background.x, y + this.dash.y + this.dash_background.y, this.dash_background.width, this.dash_background.height);
                }
            } else {
                this.background.width = this.dash_background.width;
                this.background.height = this.dash_background.height;

                this.background.x = this.dash_background.x;
                this.background.y = this.dash_background.y + this.dash.y;
            }
        });

        dash_blur.connections.connect(dash_blur, 'change-blur-type', () => {
            this.background_parent.remove_child(this.background);
            if (this.effect.chained_effect)
                this.effect.get_actor()?.remove_effect(this.effect.chained_effect);
            this.effect.get_actor()?.remove_effect(this.effect);

            let [background, effect] = this.dash_blur.add_blur(this.dash, this.dash_background, this.dash_container);
            this.background = background;
            this.effect = effect;
            this.background_parent.add_child(this.background);
        });
    }

    remove_style() {
        this.dash._background.style = this.old_style;

        DASH_STYLES.forEach(
            style => this.dash.remove_style_class_name(style)
        );
    }

    get_dash_position(dash_container, dash_background) {
        var x, y;

        let monitor = find_monitor_for(dash_container);
        let dash_box = dash_container._slider.get_child();

        if (dash_container.get_style_class_name().includes("top")) {
            x = (monitor.width - dash_background.width) / 2;
            y = dash_box.y;
        } else if (dash_container.get_style_class_name().includes("bottom")) {
            x = (monitor.width - dash_background.width) / 2;
            y = monitor.height - dash_container.height;
        } else if (dash_container.get_style_class_name().includes("left")) {
            x = dash_box.x;
            y = dash_container.y + (dash_container.height - dash_background.height) / 2 - dash_background.y;
        } else if (dash_container.get_style_class_name().includes("right")) {
            x = monitor.width - dash_container.width;
            y = dash_container.y + (dash_container.height - dash_background.height) / 2 - dash_background.y;
        }

        return [x, y];
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > dash]         ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > dash] ${str}`);
    }
}

export const DashBlur = class DashBlur {
    constructor(connections, settings, _) {
        this.dashes = [];
        this.connections = connections;
        this.settings = settings;
        this.paint_signals = new PaintSignals(connections);
        this.sigma = this.settings.dash_to_dock.CUSTOMIZE
            ? this.settings.dash_to_dock.SIGMA
            : this.settings.SIGMA;
        this.brightness = this.settings.dash_to_dock.CUSTOMIZE
            ? this.settings.dash_to_dock.BRIGHTNESS
            : this.settings.BRIGHTNESS;
        this.corner_radius = this.settings.dash_to_dock.CORNER_RADIUS;
        this.is_static = this.settings.dash_to_dock.STATIC_BLUR;
        this.enabled = false;
    }

    enable() {
        this.connections.connect(Main.uiGroup, 'child-added', (_, actor) => {
            if (
                (actor.get_name() === "dashtodockContainer") &&
                (actor.constructor.name === 'DashToDock')
            )
                this.try_blur(actor);
        });

        this.blur_existing_dashes();
        this.connect_to_overview();

        this.update_wallpaper();
        this.update_size();

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
        // dash background parent, not visible
        let background_parent = new St.Widget({
            name: 'dash-blurred-background-parent',
            style_class: 'dash-blurred-background-parent',
            width: 0,
            height: 0
        });

        // finally blur the dash
        let dash_background = dash.get_children().find(child => {
            return child.get_style_class_name() === 'dash-background';
        });

        let [background, effect] = this.add_blur(dash, dash_background, dash_container);

        this.update_wallpaper();
        this.update_size();

        // updates size and position on change
        this.connections.connect(dash, 'notify::width', _ => {
            this.update_size();
        });
        this.connections.connect(dash, 'notify::height', _ => {
            this.update_size();
        });
        this.connections.connect(dash_container, 'notify::width', _ => {
            this.update_size();
        });
        this.connections.connect(dash_container, 'notify::height', _ => {
            this.update_size();
        });
        this.connections.connect(dash_container, 'notify::y', _ => {
            this.update_wallpaper();
            this.update_size();
        });
        this.connections.connect(dash_container, 'notify::x', _ => {
            this.update_wallpaper();
            this.update_size();
        });

        background_parent.add_child(background);
        dash.get_parent().insert_child_at_index(background_parent, 0);

        // create infos
        let infos = new DashInfos(
            this,
            dash,
            dash_container,
            dash_background,
            background,
            background_parent,
            effect
        );

        // update the background
        this.update_background();

        // returns infos
        return infos;
    }

    add_blur(dash, dash_background, dash_container) {
        let monitor = find_monitor_for(dash);

        // dash background widget
        let background = this.is_static
            ? new Meta.BackgroundActor({
                meta_display: global.display,
                monitor: monitor.index,
            })
            : new St.Widget({
                name: 'dash-blurred-background',
                style_class: 'dash-blurred-background',
                x: dash_background.x,
                y: dash_background.y + dash.y,
                width: dash_background.width,
                height: dash_background.height,
            });

        // the effect to be applied
        let effect;
        if (this.is_static) {
            let corner_radius = this.corner_radius * monitor.geometry_scale;
            corner_radius = Math.min(corner_radius, dash_background.width / 2, dash_background.height / 2);

            effect = new GaussianBlurEffect({
                radius: 2 * this.sigma * monitor.geometry_scale,
                brightness: this.brightness,
                width: dash_background.width,
                height: dash_background.height,
                corner_radius: corner_radius
            });

            // connect to every background change (even without changing image)
            // FIXME this signal is fired very often, so we should find another one
            //       fired only when necessary (but that still catches all cases)
            this.connections.connect(
                Main.layoutManager._backgroundGroup,
                'notify',
                _ => this.update_wallpaper()
            );
        } else {
            effect = new Shell.BlurEffect({
                brightness: this.brightness,
                radius: this.sigma * 2 * monitor.geometry_scale,
                mode: Shell.BlurMode.BACKGROUND
            });

            // HACK
            //
            //`Shell.BlurEffect` does not repaint when shadows are under it. [1]
            //
            // This does not entirely fix this bug (shadows caused by windows
            // still cause artifacts), but it prevents the shadows of the panel
            // buttons to cause artifacts on the panel itself
            //
            // [1]: https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (this.settings.HACKS_LEVEL === 1) {
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
                        this._warn(`${e}, continuing`);
                    }
                });

                this.connections.connect(dash._box, 'actor-added', (_, actor) => {
                    try {
                        let zone = actor.get_child_at_index(0);

                        this.connections.connect(zone, [
                            'enter-event', 'leave-event', 'button-press-event'
                        ], rp);
                    } catch (e) {
                        this._warn(`${e}, continuing`);
                    }
                });

                let show_apps = dash._showAppsIcon;

                this.connections.connect(show_apps, [
                    'enter-event', 'leave-event', 'button-press-event'
                ], rp);

                this.connections.connect(dash, 'leave-event', rp);
            } else if (this.settings.HACKS_LEVEL === 2) {
                this._log("dash hack level 2");

                this.paint_signals.connect(background, effect);
            } else {
                this.paint_signals.disconnect_all();
            }
        }

        // store the scale in the effect in order to retrieve it in set_sigma
        effect.scale = monitor.geometry_scale;

        background.add_effect(effect);

        return [background, effect];
    }

    change_blur_type() {
        this.is_static = this.settings.dash_to_dock.STATIC_BLUR;
        this.emit('change-blur-type', true);

        this.update_wallpaper();
        this.update_background();
        this.update_size();
    }

    /// Connect when overview if opened/closed to hide/show the blur accordingly
    connect_to_overview() {
        this.connections.disconnect_all_for(Main.overview);

        if (this.settings.dash_to_dock.UNBLUR_IN_OVERVIEW) {
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
        if (this.settings.dash_to_dock.OVERRIDE_BACKGROUND)
            this.emit('override-background', true);
        else
            this.emit('reset-background', true);
    }

    update_wallpaper() {
        if (this.is_static)
            this.emit('update-wallpaper', true);
    }

    update_size() {
        this.emit('update-size', true);
    }

    set_sigma(sigma) {
        this.sigma = sigma;
        this.emit('update-sigma', true);
    }

    set_brightness(brightness) {
        this.brightness = brightness;
        this.emit('update-brightness', true);
    }

    set_corner_radius(radius) {
        this.corner_radius = radius;
        this.emit('update-corner-radius', true);
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
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > dash manager] ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > dash manager] ${str}`);
    }
};

Signals.addSignalMethods(DashBlur.prototype);