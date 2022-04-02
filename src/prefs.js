'use strict';

const { Adw, Gdk, GLib, Gtk, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);

const { General } = Me.imports.preferences.general;
const { Panel } = Me.imports.preferences.panel;
const { Overview } = Me.imports.preferences.overview;
const { Dash } = Me.imports.preferences.dash;
const { Applications } = Me.imports.preferences.applications;
const { Other } = Me.imports.preferences.other;

// TODO use gresources to load ui files

function init() { }

function fillPreferencesWindow(window) {
    window.add(new General);
    window.add(new Panel);
    window.add(new Overview);
    window.add(new Dash);
    window.add(new Applications);
    window.add(new Other);

    window.search_enabled = true;
    window.set_default_size(720, 530);
}
