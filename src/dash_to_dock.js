'use strict';

const St = imports.gi.St;
const GLib = imports.gi.GLib;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;

class DashInfos {
    constructor() {
        this.dash = null; // St.BoxLayout
        this.background_parent = null; // St.Widget
        this.effect = null; // Shell.BlurEffect
        this.connections = []; // [{St.Actor, integer}]
    }

    set_dash(dash) { this.dash = dash }
    set_background_parent(background_parent) { this.background_parent = background_parent }
    set_effect(effect) { this.effect = effect }
    push_connection(connection) { this.connections.push(connection) }
    remove_dash() {
        this.background_parent.destroy();
        this.connections.forEach((connection) => {
            if (connection.actor.has_allocation()) {
                connection.actor.disconnect(connection.id);
            }
        });
    }

    show() {
        this.effect.sigma = 30;
    }
    hide() {
        this.effect.sigma = 0;
    }
}

var DashBlur = class DashBlur {
    constructor() {
        this.blurred = [];
        this.dashes = [];
        this.dash_searching_id = 0;
    }

    enable() {
        this.blur_dashes();

        this.dash_searching_id = Main.uiGroup.connect('actor-added', (_, actor) => {
            this.try_blur(actor);
        })
    }

    // Finds all existing dashes on every monitor, and call `blur_dash_from` on them
    blur_dashes() {
        this._log("searching for dash");
        // blur every dash found
        Main.uiGroup.get_children().forEach(child => {
            this.try_blur(child);
        });
    }

    try_blur(dash) {
        if (dash.get_name() == "dashtodockContainer") {
            if (this.is_not_blurred(dash)) {
                this._log("dash to dock found, blurring it");
                this.dashes.push(this.blur_dash_from(dash));
            } else {
                this._log("dash to dock found, already blurred");
            }
        }
    }

    is_not_blurred(dash) {
        if (!this.blurred.includes(dash) && (dash.constructor.name == 'DashToDock')) {
            this.blurred.push(dash);
            return true;
        } else {
            return false;
        };
    }

    // Returns a `DashInfos` containing informations about the newly created dash blur
    blur_dash_from(dash_container) {
        // stores infos about the dash
        let dash_infos = new DashInfos;

        // the actual styled dash
        let dash = dash_container.get_child_at_index(0).get_child_at_index(0).get_child_at_index(0);
        dash_infos.set_dash(dash);

        // the effect applied
        let effect = new Shell.BlurEffect({
            brightness: 0.6,
            sigma: 30,
            mode: 1
        });
        dash_infos.set_effect(effect);

        // dash background parent, not visible
        let background_parent = new St.Widget({
            style_class: 'dash-blurred-background-parent',
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        });
        dash_infos.set_background_parent(background_parent);

        // dash background widget
        let background = new St.Widget({
            style_class: 'dash-blurred-background',
            x: 0,
            y: 0,
            width: dash.width,
            height: dash.height,
        });

        let dash_icons_container = dash.get_child_at_index(0).get_child_at_index(0).get_child_at_index(2);

        // updates size on change
        dash_infos.push_connection({
            actor: dash_icons_container,
            id: dash_icons_container.connect_after('notify', () => {
                background.height = dash.height;
                background.width = dash.width;
            })
        });

        // ! DIRTY PART: hack because `Shell.BlurEffect` does not repaint when shadows are under it
        // ! this does not entirely fix this bug (shadows caused by windows still cause artefacts)
        // ! but it prevents the shadows of the dash buttons to cause artefacts on the dash itself
        // ! note: issue opened at https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

        // repaint background on mouseover (required until `Shell.BlurEffect` is fixed)
        dash_icons_container.get_children().forEach((icon) => {
            let zone = icon.get_child_at_index(0);
            dash_infos.push_connection({
                actor: zone,
                id: zone.connect('enter-event', () => { effect.queue_repaint() })
            });
            dash_infos.push_connection({
                actor: zone,
                id: zone.connect('leave-event', () => { effect.queue_repaint() })
            });
            dash_infos.push_connection({
                actor: zone,
                id: zone.connect('button-press-event', () => { effect.queue_repaint() })
            });
        })

        dash_infos.push_connection({
            actor: dash_icons_container,
            id: dash_icons_container.connect_after('actor-added', (_, actor) => {
                let zone = actor.get_child_at_index(0);
                dash_infos.push_connection({
                    actor: zone,
                    id: zone.connect('enter-event', () => { effect.queue_repaint() })
                });
                dash_infos.push_connection({
                    actor: zone,
                    id: zone.connect('leave-event', () => { effect.queue_repaint() })
                });
                dash_infos.push_connection({
                    actor: zone,
                    id: zone.connect('button-press-event', () => { effect.queue_repaint() })
                });
            })
        });

        let dash_show_apps = dash.get_child_at_index(0).get_child_at_index(1);

        dash_infos.push_connection({
            actor: dash_show_apps,
            id: dash_show_apps.connect('enter-event', () => { effect.queue_repaint() })
        });
        dash_infos.push_connection({
            actor: dash_show_apps,
            id: dash_show_apps.connect('leave-event', () => { effect.queue_repaint() })
        });
        dash_infos.push_connection({
            actor: dash_show_apps,
            id: dash_show_apps.connect('button-press-event', () => { effect.queue_repaint() })
        });

        dash_infos.push_connection({
            actor: dash,
            id: dash.connect('leave-event', () => { effect.queue_repaint() })
        });

        // ! END OF DITRY PART

        // add the widget to the dash
        background.add_effect(effect);
        background_parent.add_child(background);
        dash.get_parent().insert_child_at_index(background_parent, 0);

        // returns infos
        return dash_infos;
    }

    disable() {
        this._log("removing blur from dashes");

        this.dashes.forEach((dash) => { dash.remove_dash() });
        Main.uiGroup.disconnect(this.dash_searching_id);
    }

    show() {
        this.dashes.forEach((dash) => { dash.show() });
    }
    hide() {
        this.dashes.forEach((dash) => { dash.hide() });
    }

    _log(str) { log("[Blur my Gnome] " + str) }
}