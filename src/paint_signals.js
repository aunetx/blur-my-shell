'use strict'

const { GObject, Clutter } = imports.gi;


var PaintSignals = class PaintSignals {
    constructor(connections) {
        this.buffer = [];
        this.connections = connections
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

        this.buffer.push(infos)
    }

    disconnect_all() {
        this.buffer.forEach((infos) => {
            this.connections.disconnect_all_for(infos.paint_effect);
            infos.actor.remove_effect(infos.paint_effect);
        });

        this.buffer = []
    }
}

var EmitPaintSignal = GObject.registerClass({
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