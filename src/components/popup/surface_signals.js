import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import St from 'gi://St';

import { Connections } from '../../conveniences/connections.js';

const ACTOR_SIGNALS = [
    'notify::allocation',
    'notify::position',
    'notify::size',
    'notify::x',
    'notify::y',
    'notify::width',
    'notify::height',
    'notify::clip-rect',
    'notify::visible',
    'notify::mapped',
    'notify::opacity',
    'notify::translation-x',
    'notify::translation-y',
    'notify::scale-x',
    'notify::scale-y',
];
const WIDGET_SIGNALS = [
    ...ACTOR_SIGNALS,
    'notify::pseudo-class',
    'style-changed',
];
const VISIBILITY_SIGNALS = new Set([
    'notify::visible',
    'notify::mapped',
]);
const ANIMATION_SIGNALS = new Set([
    'notify::opacity',
    'notify::translation-x',
    'notify::translation-y',
    'notify::scale-x',
    'notify::scale-y',
]);

export const PopupBlurSurfaceSignals = class PopupBlurSurfaceSignals {
    constructor(surface) {
        this.surface = surface;
        this.connections = new Connections();
        this.connected_actors = new WeakSet();
        this.idle_update_id = 0;
    }

    connect_destroy(actor, callback) {
        this.connections.connect(actor, 'destroy', callback);
    }

    connect_actor(actor) {
        if (this.connected_actors.has(actor))
            return;

        this.connected_actors.add(actor);

        const is_heavy_surface = this.surface.is_heavy_surface();
        const signals = actor instanceof St.Widget ? WIDGET_SIGNALS : ACTOR_SIGNALS;
        signals.forEach(signal => this.connections.connect(
            actor,
            signal,
            () => this.on_actor_changed(actor, signal, is_heavy_surface)
        ));
    }

    connect_ancestors(actor) {
        for (
            let ancestor = actor.get_parent();
            ancestor && ancestor !== this.surface.parent;
            ancestor = ancestor.get_parent()
        )
            this.connect_actor(ancestor);
    }

    on_actor_changed(actor, signal, is_heavy_surface) {
        const is_visibility_change = VISIBILITY_SIGNALS.has(signal);
        if (is_visibility_change && (!actor.visible || !actor.mapped)) {
            this.remove_idle_update();
            this.surface.hide_surface();
            return;
        }

        if (is_visibility_change || is_heavy_surface || ANIMATION_SIGNALS.has(signal)) {
            this.remove_idle_update();
            this.surface.queue_update();
            return;
        }

        this.queue_idle_update();
    }

    queue_idle_update() {
        this.remove_idle_update();
        this.idle_update_id = global.compositor.get_laters().add(
            Meta.LaterType.IDLE,
            () => {
                this.idle_update_id = 0;
                this.surface.queue_update();
                return GLib.SOURCE_REMOVE;
            }
        );
    }

    remove_idle_update() {
        if (!this.idle_update_id)
            return;

        global.compositor.get_laters().remove(this.idle_update_id);
        this.idle_update_id = 0;
    }

    destroy() {
        this.remove_idle_update();
        this.connections.disconnect_all();
    }
};
