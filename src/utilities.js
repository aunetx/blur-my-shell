'use strict'

const { GLib, GObject, Clutter } = imports.gi;

let clearTimeout, clearInterval;
clearInterval = clearTimeout = GLib.Source.remove;

var setTimeout = function (func, delay, ...args) {
    return GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
        func(...args);
        return GLib.SOURCE_REMOVE;
    });
};

var setInterval = function (func, delay, ...args) {
    return GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
        func(...args);
        return GLib.SOURCE_CONTINUE;
    });
};

const EmitPaintSignal = GObject.registerClass(
    {
        GTypeName: 'EmitPaintSignal',
        Signals: {
            'update-blur': {
                param_types: []
            },
        }
    },
    class MyEffect extends Clutter.Effect {
        vfunc_paint(node, paint_context, paint_flags) {
            this.emit("update-blur");
            super.vfunc_paint(node, paint_context, paint_flags);
        }
    }
);