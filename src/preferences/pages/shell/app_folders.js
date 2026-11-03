import Adw from 'gi://Adw';
import GObject from 'gi://GObject';

import { ui_template } from '../../resources.js';
import { bind_settings } from '../../bind_settings.js';


export const AppFolders = GObject.registerClass({
    GTypeName: 'AppFolders',
    Template: ui_template('pages/shell/app-folders.ui'),
    InternalChildren: [
        'blur',
        'pipeline_auto_mode_switch',
        'pipeline_choose_row',
        'pipeline_choose_auto_light_row',
        'pipeline_choose_auto_dark_row',
        'style_dialogs',
        'blur_behind_folders',
    ],
}, class AppFolders extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this._pipeline_choose_row.initialize(
            preferences.appfolder, 'PIPELINE', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_light_row.initialize(
            preferences.appfolder, 'PIPELINE_LIGHT', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_dark_row.initialize(
            preferences.appfolder, 'PIPELINE_DARK', pipelines_manager, pipelines_page
        );

        bind_settings(preferences.appfolder, [
            ['blur', this._blur, 'active'],
            ['pipeline-auto-mode', this._pipeline_auto_mode_switch, 'active'],
            ['style-dialogs', this._style_dialogs, 'selected'],
            ['blur-behind-folders', this._blur_behind_folders, 'active'],
        ]);
    }
});
