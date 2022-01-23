'use strict'

const GLib = imports.gi.GLib;

let clearTimeout, clearInterval;
clearInterval = clearTimeout = GLib.Source.remove;

var setTimeout = function(func, delay, ...args) {
    return GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
        func(...args);
        return GLib.SOURCE_REMOVE;
    });
};

var setInterval = function(func, delay, ...args) {
    return GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
        func(...args);
        return GLib.SOURCE_CONTINUE;
    });
};

var easeOutQuad = function(t, begin, end, duration) {
    t /= duration
    return begin + (t * (2 - t) * (end - begin))
};

var ease_property = function(object, property, begin, end, duration, update) {
    let start = Date.now();
    GLib.timeout_add(GLib.PRIORITY_DEFAULT, update, () => {
        let time = Date.now() - start;
        if (time < duration) {
            object[property] = easeOutQuad(time, begin, end, duration);
            return GLib.SOURCE_CONTINUE;
        } else {
            object[property] = end;
            return GLib.SOURCE_REMOVE;
        }
    });
};