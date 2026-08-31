import Meta from 'gi://Meta';

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
        this.signal_ids = [];
        this.signal_actors = new WeakSet();
        this.destroyed_actors = new WeakSet();
    }

    connect_actor(actor) {
        if (!actor || this.signal_actors.has(actor))
            return;

        this.signal_actors.add(actor);
        this.track_destroy(actor);

        const is_heavy_surface = this.surface.is_heavy_surface();

        SURFACE_SIGNALS.forEach(signal => {
            try {
                const id = actor.connect(signal, () => {
                    this.clear_pending_idles();
                    const isVisibilityChange = signal === 'notify::visible'
                        || signal === 'notify::mapped';
                    if (isVisibilityChange && (!actor.visible || !actor.mapped)) {
                        this.surface.hide_surface();
                        return;
                    }
                    if (ANIMATION_SIGNALS.has(signal)) {
                        this.surface.update();
                        return;
                    }
                    if (is_heavy_surface || isVisibilityChange) {
                        this.surface.queue_update();
                        return;
                    }
                    this.updateId = global.compositor.get_laters().add(
                        Meta.LaterType.IDLE,
                        () => {
                            this.updateId = 0;
                            this.surface.queue_update();
                            return false;
                        }
                    );
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

    clear_pending_idles() {
        if (this.updateId) {
            global.compositor.get_laters().remove(this.updateId);
            this.updateId = 0;
        }
    }

    disconnect_all() {
        this.clear_pending_idles();
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
