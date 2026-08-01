import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';

const PAINTS_BETWEEN_REPAINTS = 2;

export const PaintSignals = class PaintSignals {
    constructor(connections) {
        this.entries = new Map();
        this.connections = connections;
    }

    connect(actor, blur_effect) {
        this.disconnect_all_for_actor(actor);

        let paints_to_skip = 0;
        const paint_effect = new PaintCallbackEffect();
        paint_effect.set_callback(() => {
            if (paints_to_skip > 0) {
                paints_to_skip--;
                return;
            }

            paints_to_skip = PAINTS_BETWEEN_REPAINTS;
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

        vfunc_dispose() {
            this._callback = null;
            if (super.vfunc_dispose)
                super.vfunc_dispose();
        }
    }
);
