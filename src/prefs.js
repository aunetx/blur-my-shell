'use strict';

const { Adw, Gdk, GLib, Gtk, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);

const { General } = Me.imports.preferences.general;
const { Panel } = Me.imports.preferences.panel;

// TODO use gresources to load ui files

function init() { }

function fillPreferencesWindow(window) {
    window.add(new General);
    window.add(new Panel);

    window.search_enabled = true;
    window.set_default_size(720, 530);
}
