'use strict';

const GLib = imports.gi.GLib;

var easeOutQuad = function (t, begin, end, duration) {
    t /= duration;
    return begin + (t * (2 - t) * (end - begin));
};

var ease_property = function (object, property, begin, end, duration, update) {
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