import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';

// Shell.BlurEffect needs explicit invalidation for some shadow updates. Limit
// those refreshes so a constantly painting actor cannot keep the GPU busy.
const REPAINT_INTERVAL_US = 100_000;

export const PaintSignals = class PaintSignals {
    constructor(connections) {
        this.entries = new Map();
        this.connections = connections;
    }

    connect(actor, blur_effect) {
        this.disconnect_all_for_actor(actor);

        let last_repaint_at = 0;
        const paint_effect = new PaintCallbackEffect();
        paint_effect.set_callback(() => {
            const now = GLib.get_monotonic_time();
            if (now - last_repaint_at < REPAINT_INTERVAL_US)
                return;

            last_repaint_at = now;
            try {
                blur_effect.queue_repaint();
            } catch (e) { }
        });

        actor.add_effect(paint_effect);
        const destroy_id = this.connections.connect(actor, 'destroy', () => {
            paint_effect.set_callback(null);
            this.entries.delete(actor);
        });
        this.entries.set(actor, { paint_effect, destroy_id });
    }

    disconnect_all_for_actor(actor) {
        const entry = this.entries.get(actor);
        if (!entry)
            return;

        this.entries.delete(actor);
        entry.paint_effect.set_callback(null);
        this.connections.disconnect(actor, entry.destroy_id);
        try {
            actor.remove_effect(entry.paint_effect);
        } catch (e) { }
    }

    disconnect_all() {
        for (const actor of [...this.entries.keys()])
            this.disconnect_all_for_actor(actor);
    }
};

const PaintCallbackEffect = GObject.registerClass(
    { GTypeName: 'BmsPaintCallbackEffect' },
    class PaintCallbackEffect extends Clutter.Effect {
        set_callback(callback) {
            this._callback = callback;
        }

        vfunc_paint(node, paint_context, paint_flags) {
            this._callback?.();
            super.vfunc_paint(node, paint_context, paint_flags);
        }
    }
);
