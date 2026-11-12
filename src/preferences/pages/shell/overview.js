import Adw from 'gi://Adw';
import GObject from 'gi://GObject';

import { ui_template } from '../../resources.js';
import { bind_settings } from '../../bind_settings.js';


export const Overview = GObject.registerClass({
    GTypeName: 'Overview',
    Template: ui_template('pages/shell/overview.ui'),
    InternalChildren: [
        'blur',
        'pipeline_auto_mode_switch',
        'pipeline_choose_row',
        'pipeline_choose_auto_light_row',
        'pipeline_choose_auto_dark_row',
        'style_components',
        'workspace_corner_radius'
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this._pipeline_choose_row.initialize(
            preferences.overview, 'PIPELINE', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_light_row.initialize(
            preferences.overview, 'PIPELINE_LIGHT', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_dark_row.initialize(
            preferences.overview, 'PIPELINE_DARK', pipelines_manager, pipelines_page
        );

        bind_settings(preferences.overview, [
            ['blur', this._blur, 'active'],
            ['pipeline-auto-mode', this._pipeline_auto_mode_switch, 'active'],
            ['style-components', this._style_components, 'selected'],
            ['workspace-corner-radius', this._workspace_corner_radius, 'value'],
        ]);

    }
});
