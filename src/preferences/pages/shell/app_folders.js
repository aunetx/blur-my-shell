import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

import { bind_settings } from '../../bind_settings.js';


export const AppFolders = GObject.registerClass({
    GTypeName: 'AppFolders',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../../ui/pages/shell/app-folders.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'blur',
        'pipeline_choose_row',
        'style_dialogs'
    ],
}, class AppFolders extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this._pipeline_choose_row.initialize(preferences.appfolder, pipelines_manager, pipelines_page);

        bind_settings(preferences.appfolder, [
            ['blur', this._blur, 'active'],
            ['style-dialogs', this._style_dialogs, 'selected'],
        ]);
    }
});
