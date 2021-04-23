'use strict'
const {GLib} = imports.gi;

let clearTimeout, clearInterval;
clearInterval = clearTimeout = GLib.Source.remove;

const setTimeout = function (func, delay, ...args) {
    return GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
        func(...args);
        return GLib.SOURCE_REMOVE;
    });
};

const setInterval = function (func, delay, ...args) {
    return GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
        func(...args);
        return GLib.SOURCE_CONTINUE;
    });
};
