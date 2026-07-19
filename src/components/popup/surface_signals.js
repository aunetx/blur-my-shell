import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import GLib from 'gi://GLib';

const SURFACE_SIGNALS = [
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
    'notify::pseudo-class',
    'style-changed',
];

export const PopupBlurSurfaceSignals = class PopupBlurSurfaceSignals {
    constructor(surface) {
        this.surface = surface;
        this.signal_ids = [];
        this.signal_actors = new WeakSet();
        this.destroyed_actors = new WeakSet();
        this.pendingIdles = new Set();
    }

    connect_actor(actor) {
        if (!actor || this.signal_actors.has(actor))
            return;

        this.signal_actors.add(actor);
        this.track_destroy(actor);

        const is_excluded_from_deferring_surface = this.surface.is_excluded_from_deferring_surface();

        SURFACE_SIGNALS.forEach(signal => {
            try {
                let id = actor.connect(signal, () => {
                    if (is_excluded_from_deferring_surface) {
                        this.surface.queue_update();
                    } else {
                        if (this.pendingIdles.size > 0)
                            return;

                        let updateId = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                            this.pendingIdles.delete(updateId);
                            this.surface.queue_update();
                            return GLib.SOURCE_REMOVE;
                        });

                        if (updateId)
                            this.pendingIdles.add(updateId);
                    }
                });
                this.signal_ids.push([actor, id, signal]);
            } catch (e) { }
        });
    }

    track_destroy(actor) {
        try {
            const id = actor.connect('destroy', () => this.destroyed_actors.add(actor));
            this.signal_ids.push([actor, id]);
        } catch (e) { }
    }

    connect_ancestors(actor) {
        try {
            actor = actor?.get_parent?.();
        } catch (e) {
            return;
        }

        while (actor && actor !== this.surface.parent) {
            this.connect_actor(actor);
            try {
                actor = actor.get_parent?.();
            } catch (e) {
                return;
            }
        }
    }

    connect_layout() {
        if (!this.surface.static_blur)
            return;

        try {
            this.signal_ids.push([
                Main.layoutManager,
                Main.layoutManager.connect('monitors-changed', () => this.surface.queue_update()),
            ]);
        } catch (e) { }
    }

    connect_settings() {
        [
            this.surface.corner_radius.key,
            'override-background',
            'style-popup',
        ].forEach(key => {
            const id = this.surface.settings.popup.settings.connect(
                `changed::${key}`,
                () => this.surface.update_settings()
            );
            this.signal_ids.push([this.surface.settings.popup.settings, id]);
        });
    }

    disconnect_all() {
        if (this.pendingIdles.size > 0) {
            for (const updateId of this.pendingIdles) {
                if (updateId) {
                    GLib.source_remove(updateId);
                }
            }
            this.pendingIdles.clear();
        };
        this.signal_ids.forEach(([signal_actor, signal_id]) => {
            if (this.destroyed_actors.has(signal_actor))
                return;

            try {
                signal_actor.disconnect(signal_id);
            } catch (e) { }
        });
        this.signal_ids = [];
        this.signal_actors = new WeakSet();
        this.destroyed_actors = new WeakSet();
    }
};
