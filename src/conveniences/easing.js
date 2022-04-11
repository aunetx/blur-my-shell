'use strict';

const GLib = imports.gi.GLib;

/// An object to easily manage easing, like Tweener but which works for me.
var EasingManager = class EasingManager {
    constructor() {
        this.buffer = {};
    }

    /// The mathematical ease function
    ease_out_quad(t, begin, end, duration) {
        t /= duration;
        return begin + (t * (2 - t) * (end - begin));
    };

    /// Permits to ease a given property from the object.
    ease_property(object, property, end, duration, update) {
        // acts as a PID for the easing manager, and is used to compute too
        let start = Date.now();

        // add the timeout and store the id
        let id = GLib.timeout_add(
            GLib.PRIORITY_DEFAULT,
            update,
            _ => this.update_property(
                object, property, object[property], end, duration, start
            )
        );

        // track the timeout to remove it later
        this.buffer[start] = id;
    };

    update_property(object, property, begin, end, duration, start) {
        let time = Date.now() - start;

        if (time < duration) {
            object[property] = this.ease_out_quad(time, begin, end, duration);

            return GLib.SOURCE_CONTINUE;
        } else {
            object[property] = end;
            this.remove_source(start);

            return GLib.SOURCE_REMOVE;
        }
    }

    remove_source(pid) {
        let id = this.buffer[pid];
        GLib.Source.remove(id);

        delete this.buffer[pid];
    }

    remove_all_sources() {
        for (const pid in this.buffer) {
            this.remove_source(pid);
        }
    }

    _log(str) {
        // no need to check if DEBUG here as this._log is only used on error
        log(`[Blur my Shell] ${str}`);
    }
};
