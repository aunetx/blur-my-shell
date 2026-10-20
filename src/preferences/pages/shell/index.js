import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { initialize_legacy_blur_notice } from '../../legacy_blur_notice.js';
import { Panel } from './panel.js';
import { Dash } from './dash.js';
import { PopupBlur } from './popup.js';
import { Overview } from './overview.js';
import { AppFolders } from './app_folders.js';
import { ComponentPage } from './component.js';

import '../../widgets/component_row.js';


export const ShellPage = GObject.registerClass({
    GTypeName: 'ShellPage',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../../ui/pages/shell/shell.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'legacy_blur_notice',
        'panel_row',
        'dash_row',
        'popup_row',
        'overview_row',
        'appfolder_row',
        'lockscreen_row',
        'screenshot_row',
        'window_list_row',
        'coverflow_alt_tab_row'
    ],
}, class ShellPage extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page, window) {
        super({});

        this._window = window;
        this._subpages = new Map;

        initialize_legacy_blur_notice(this._legacy_blur_notice, preferences.settings);

        const pipelines = [pipelines_manager, pipelines_page];
        const component = (component_preferences, description) =>
            () => new ComponentPage(component_preferences, description, ...pipelines);

        this.add_component(this._panel_row, preferences.panel,
            () => new Panel(preferences, ...pipelines)
        );
        this.add_component(this._dash_row, preferences.dash_to_dock,
            () => new Dash(preferences, ...pipelines)
        );
        this.add_component(this._popup_row, preferences.popup,
            () => new PopupBlur(preferences, ...pipelines)
        );
        this.add_component(this._overview_row, preferences.overview,
            () => new Overview(preferences, ...pipelines)
        );
        this.add_component(this._appfolder_row, preferences.appfolder,
            () => new AppFolders(preferences, ...pipelines)
        );
        this.add_component(this._lockscreen_row, preferences.lockscreen, component(
            preferences.lockscreen,
            _("Change the blur of the lockscreen to use this extension's preferences.")
        ));
        this.add_component(this._screenshot_row, preferences.screenshot, component(
            preferences.screenshot,
            _("Add blur to the background of the window selector in the screenshot UI.")
        ));
        this.add_component(this._window_list_row, preferences.window_list, component(
            preferences.window_list,
            _("Make the window-list extension blurred, if it is used.")
        ));
        this.add_component(this._coverflow_alt_tab_row, preferences.coverflow_alt_tab, component(
            preferences.coverflow_alt_tab,
            _("Make the coverflow alt-tab extension blurred, if it is used.")
        ));
    }

    add_component(row, component_preferences, create_page) {
        row.initialize(component_preferences, () => this.open_subpage(row, create_page));
    }

    open_subpage(row, create_page) {
        let subpage = this._subpages.get(row);
        if (!subpage) {
            const toolbar = new Adw.ToolbarView({ content: create_page() });
            toolbar.add_top_bar(new Adw.HeaderBar());
            subpage = new Adw.NavigationPage({ title: row.title, child: toolbar });
            this._subpages.set(row, subpage);
        }
        this._window.push_subpage(subpage);
    }
});
