import Adw from 'gi://Adw';
import GObject from 'gi://GObject';

import { ui_template } from '../../resources.js';
import { bind_settings } from '../../bind_settings.js';


export const AppFolders = GObject.registerClass({
    GTypeName: 'AppFolders',
    Template: ui_template('pages/shell/app-folders.ui'),
    InternalChildren: [
        'blur',
        'pipeline_choose_row',
        'style_dialogs',
        'blur_behind_folders',
    ],
}, class AppFolders extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this._pipeline_choose_row.initialize(preferences.appfolder, pipelines_manager, pipelines_page);

        bind_settings(preferences.appfolder, [
            ['blur', this._blur, 'active'],
            ['style-dialogs', this._style_dialogs, 'selected'],
            ['blur-behind-folders', this._blur_behind_folders, 'active'],
        ]);
    }
});
