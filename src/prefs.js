import Gdk from 'gi://Gdk';
import Gtk from 'gi://Gtk';
import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { update_from_old_settings } from './settings/settings_updater.js';
import { PipelinesManager } from './pipelines/pipelines_manager.js';
import { Settings } from './settings/settings.js';
import { KEYS } from './settings/keys.js';
import { cancel_pick } from './dbus/client.js';

import { addMenu } from './preferences/menu.js';
import { Pipelines } from './preferences/pages/pipelines.js';
import { Panel } from './preferences/pages/panel.js';
import { Overview } from './preferences/pages/overview.js';
import { Dash } from './preferences/pages/dash.js';
import { Applications } from './preferences/pages/applications.js';
import { PopupBlur } from './preferences/pages/popup.js';
import { Other } from './preferences/pages/other.js';

import './preferences/widgets/pipeline_choose_row.js';


export default class BlurMyShellPreferences extends ExtensionPreferences {
    constructor(metadata) {
        super(metadata);

        let iconPath = this.dir.get_child("icons").get_path();
        let iconTheme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default());
        iconTheme.add_search_path(iconPath);
    }

    fillPreferencesWindow(window) {
        addMenu(window);

        const gsettings = this.getSettings();
        update_from_old_settings(gsettings);

        const preferences = new Settings(KEYS, gsettings);
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

        window.connect('close-request', () => {
            cancel_pick();
            applications_page.cleanup();
            pipelines_page.cleanup();
            pipelines_manager.destroy();
            preferences.disconnect_all_settings();
            return false;
        });

        window.search_enabled = true;
    }
}
