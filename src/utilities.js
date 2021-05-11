"use strict";
const { GLib } = imports.gi;

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
const get_process_name_from_window = function (v) {
  try {
    let pwithnew = GLib.spawn_command_line_sync(
      `ps -p ${v.get_pid()} -o comm=`
    )[1]+"";
    return pwithnew.replace(/\n/g, "");
  } catch (e) {
    return "";
  }
};
