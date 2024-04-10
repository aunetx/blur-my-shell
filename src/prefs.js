import Gdk from 'gi://Gdk';
import Gtk from 'gi://Gtk';
import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { update_from_old_settings } from './conveniences/settings_updater.js';
import { PipelinesManager } from './conveniences/pipelines_manager.js';
import { Settings } from './conveniences/settings.js';
import { KEYS } from './conveniences/keys.js';

import { addMenu } from './preferences/menu.js';
import { Pipelines } from './preferences/pipelines.js';
import { Panel } from './preferences/panel.js';
import { Overview } from './preferences/overview.js';
import { Dash } from './preferences/dash.js';
import { Applications } from './preferences/applications.js';
import { Other } from './preferences/other.js';

import './preferences/pipelines_management/pipeline_choose_row.js';


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

        // update from old settings, very important for hacks level specifically
        update_from_old_settings(this.getSettings());

        const preferences = new Settings(KEYS, this.getSettings());
        const pipelines_manager = new PipelinesManager(preferences);

        const pipelines_page = new Pipelines(preferences, pipelines_manager, window);

        window.add(pipelines_page);
        window.add(new Panel(preferences, pipelines_manager, pipelines_page));
        window.add(new Overview(preferences, pipelines_manager, pipelines_page));
        window.add(new Dash(preferences, pipelines_manager, pipelines_page));
        window.add(new Applications(preferences, window));
        window.add(new Other(preferences, pipelines_manager, pipelines_page));

        window.search_enabled = true;
    }
}
