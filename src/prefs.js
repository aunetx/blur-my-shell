'use strict';

const { Adw, Gdk, GLib, Gtk, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const { addMenu } = Me.imports.preferences.menu;
const { CustomizeRow } = Me.imports.preferences.customize_row;
const { WindowRow } = Me.imports.preferences.window_row;
const { General } = Me.imports.preferences.general;
const { Panel } = Me.imports.preferences.panel;
const { Overview } = Me.imports.preferences.overview;
const { Dash } = Me.imports.preferences.dash;
const { Applications } = Me.imports.preferences.applications;
const { Other } = Me.imports.preferences.other;


function init() {
    ExtensionUtils.initTranslations(Me.metadata.uuid);

    // load the icon theme
    let iconPath = Me.dir.get_child("icons").get_path();
    let iconTheme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default());
    iconTheme.add_search_path(iconPath);
}

function fillPreferencesWindow(window) {
    addMenu(window);

    const preferences = new Prefs(Keys);

    window.add(new General(preferences));
    window.add(new Panel(preferences));
    window.add(new Overview(preferences));
    window.add(new Dash(preferences));
    window.add(new Applications(preferences, window));
    window.add(new Other(preferences));

    window.search_enabled = true;
}
