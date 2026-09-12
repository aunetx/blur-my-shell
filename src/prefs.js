import Gdk from 'gi://Gdk';
import Gtk from 'gi://Gtk';
import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { update_from_old_settings } from './conveniences/settings_updater.js';
import { PipelinesManager } from './conveniences/pipelines_manager.js';
import { Settings } from './conveniences/settings.js';
import { KEYS } from './conveniences/keys.js';
import { cancel_pick } from './dbus/client.js';

import { addMenu } from './preferences/menu.js';
import { Pipelines } from './preferences/pipelines.js';
import { Panel } from './preferences/panel.js';
import { Overview } from './preferences/overview.js';
import { Dash } from './preferences/dash.js';
import { Applications } from './preferences/applications.js';
import { PopupBlur } from './preferences/popup.js';
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

        // Update stored pipelines before building the editor.
        update_from_old_settings(this.getSettings());

        const preferences = new Settings(KEYS, this.getSettings());
        const pipelines_manager = new PipelinesManager(preferences);

        const pipelines_page = new Pipelines(preferences, pipelines_manager, window);

        window.add(pipelines_page);
        window.add(new Panel(preferences, pipelines_manager, pipelines_page));
        window.add(new Overview(preferences, pipelines_manager, pipelines_page));
        window.add(new Dash(preferences, pipelines_manager, pipelines_page));
        const applications_page = new Applications(
            preferences, window, pipelines_manager, pipelines_page
        );
        window.add(applications_page);
        window.add(new PopupBlur(preferences, pipelines_manager, pipelines_page));
        window.add(new Other(preferences, pipelines_manager, pipelines_page));

        let cleaned_up = false;
        window.connect('close-request', () => {
            if (!cleaned_up) {
                cleaned_up = true;
                cancel_pick();
                applications_page.cleanup();
                pipelines_page.cleanup();
                pipelines_manager.destroy();
                preferences.disconnect_all_settings();
            }
            return false;
        });

        window.search_enabled = true;
    }
}
