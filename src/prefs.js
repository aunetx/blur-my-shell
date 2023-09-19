import Gdk from 'gi://Gdk';
import Gtk from 'gi://Gtk';
import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { Settings } from './conveniences/settings.js';
import { Keys } from './conveniences/keys.js';

import { addMenu } from './preferences/menu.js';
import { General } from './preferences/general.js';
import { Panel } from './preferences/panel.js';
import { Overview } from './preferences/overview.js';
import { Dash } from './preferences/dash.js';
import { Applications } from './preferences/applications.js';
import { Other } from './preferences/other.js';


export default class BlurMyShellPreferences extends ExtensionPreferences {
    constructor(metadata) {
        super(metadata);

        // load the icon theme
        let iconPath = this.dir.get_child("icons").get_path();
        let iconTheme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default());
        iconTheme.add_search_path(iconPath);
    }

    fillPreferencesWindow(window) {
        addMenu(window);

        const preferences = new Settings(Keys, this.getSettings());

        window.add(new General(preferences));
        window.add(new Panel(preferences));
        window.add(new Overview(preferences));
        window.add(new Dash(preferences));
        window.add(new Applications(preferences, window));
        window.add(new Other(preferences));

        window.search_enabled = true;
    }
}
