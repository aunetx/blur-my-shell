import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { POPUP_CORNER_RADII } from './targets.js';

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

const CORNER_RADIUS_KEYS = [
    'corner-radius',
    ...POPUP_CORNER_RADII.map(radius => radius.key),
];

export const PopupBlurSurfaceSignals = class PopupBlurSurfaceSignals {
    constructor(surface) {
        this.surface = surface;
        this.signal_ids = [];
        this.signal_actors = new WeakSet();
        this.removal_actors = new WeakSet();
        this.descendant_actors = new WeakSet();
        this.destroyed_actors = new WeakSet();
    }

    connect_actor(actor) {
        if (!actor || this.signal_actors.has(actor))
            return;

        this.signal_actors.add(actor);
        this.track_destroy(actor);

        SURFACE_SIGNALS.forEach(signal => {
            try {
                const id = actor.connect(signal, () => this.surface.queue_update());
                this.signal_ids.push([actor, id]);
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

    connect_parent_removal(actor) {
        let parent = null;

        try {
            parent = actor?.get_parent?.() ?? null;
        } catch (e) {
            return;
        }

        if (!parent || this.removal_actors.has(parent))
            return;

        this.removal_actors.add(parent);
        this.track_destroy(parent);

        try {
            const id = parent.connect('child-removed', (_, child) => {
                if (
                    child === this.surface.target
                    || child === this.surface.root_actor
                    || !this.surface.has_stage_actor(this.surface.target)
                    || !this.surface.has_stage_actor(this.surface.root_actor)
                )
                    this.surface.queue_update({ force: true });
            });
            this.signal_ids.push([parent, id]);
        } catch (e) { }
    }

    connect_descendants(actor, seen = new WeakSet()) {
        if (!actor || seen.has(actor))
            return;

        seen.add(actor);
        this.connect_descendant_container(actor);

        this.get_children(actor).forEach(child => {
            this.connect_actor(child);
            this.connect_descendants(child, seen);
        });
    }

    connect_descendant_container(actor) {
        if (this.descendant_actors.has(actor))
            return;

        this.descendant_actors.add(actor);
        this.track_destroy(actor);

        try {
            const id = actor.connect('child-added', (_, child) => {
                this.connect_actor(child);
                this.connect_descendants(child);
                this.surface.queue_update({ force: true });
            });
            this.signal_ids.push([actor, id]);
        } catch (e) { }

        try {
            const id = actor.connect('child-removed', () => this.surface.queue_update({ force: true }));
            this.signal_ids.push([actor, id]);
        } catch (e) { }
    }

    get_children(actor) {
        try {
            return actor?.get_children?.() ?? [];
        } catch (e) {
            return [];
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
            ...CORNER_RADIUS_KEYS,
            'override-background',
        ].forEach(key => {
            const id = this.surface.blur_settings.settings.connect(
                `changed::${key}`,
                () => this.surface.update_settings()
            );
            this.signal_ids.push([this.surface.blur_settings.settings, id]);
        });

        ['style-popup'].forEach(key => {
            const id = this.surface.settings.popup.settings.connect(
                `changed::${key}`,
                () => this.surface.update_settings()
            );
            this.signal_ids.push([this.surface.settings.popup.settings, id]);
        });
    }

    disconnect_all() {
        this.signal_ids.forEach(([signal_actor, signal_id]) => {
            if (this.destroyed_actors.has(signal_actor))
                return;

            try {
                signal_actor.disconnect(signal_id);
            } catch (e) { }
        });
        this.signal_ids = [];
        this.signal_actors = new WeakSet();
        this.removal_actors = new WeakSet();
        this.descendant_actors = new WeakSet();
        this.destroyed_actors = new WeakSet();
    }
};
