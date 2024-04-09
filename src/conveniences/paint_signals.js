import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';


export const PaintSignals = class PaintSignals {
    constructor(connections) {
        this.buffer = [];
        this.connections = connections;
    }

    connect(actor, blur_effect) {
        let paint_effect = new EmitPaintSignal();
        let infos = {
            actor: actor,
            paint_effect: paint_effect
        };
        let counter = 0;

        actor.add_effect(paint_effect);
        this.connections.connect(paint_effect, 'update-blur', () => {
            try {
                // checking if blur_effect.queue_repaint() has been recently called
                if (counter === 0) {
                    counter = 2;
                    blur_effect.queue_repaint();
                }
                else counter--;
            } catch (e) { }
        });

        // remove the actor from buffer when it is destroyed
        if (
            actor.connect &&
            (
                !(actor instanceof GObject.Object) ||
                GObject.signal_lookup('destroy', actor)
            )
        )
            this.connections.connect(actor, 'destroy', () => {
                const immutable_buffer = [...this.buffer];
                immutable_buffer.forEach(infos => {
                    if (infos.actor === actor) {
                        // remove from buffer
                        let index = this.buffer.indexOf(infos);
                        this.buffer.splice(index, 1);
                    }
                });
            });

        this.buffer.push(infos);
    }

    disconnect_all_for_actor(actor) {
        const immutable_buffer = [...this.buffer];
        immutable_buffer.forEach(infos => {
            if (infos.actor === actor) {
                this.connections.disconnect_all_for(infos.paint_effect);
                infos.actor.remove_effect(infos.paint_effect);

                // remove from buffer
                let index = this.buffer.indexOf(infos);
                this.buffer.splice(index, 1);
            }
        });
    }

    disconnect_all() {
        this.buffer.forEach(infos => {
            this.connections.disconnect_all_for(infos.paint_effect);
            infos.actor.remove_effect(infos.paint_effect);
        });

        this.buffer = [];
    }
};

export const EmitPaintSignal = GObject.registerClass({
    GTypeName: 'EmitPaintSignal',
    Signals: {
        'update-blur': {
            param_types: []
        },
    }
},
    class EmitPaintSignal extends Clutter.Effect {
        vfunc_paint(node, paint_context, paint_flags) {
            this.emit("update-blur");
            super.vfunc_paint(node, paint_context, paint_flags);
        }
    }
);