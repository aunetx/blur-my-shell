import Adw from 'gi://Adw';
import GObject from 'gi://GObject';

import { ui_template } from '../../resources.js';
import { bind_settings } from '../../bind_settings.js';


export const Overview = GObject.registerClass({
    GTypeName: 'Overview',
    Template: ui_template('pages/shell/overview.ui'),
    InternalChildren: [
        'blur',
        'pipeline_choose_row',
        'style_components',
        'workspace_corner_radius'
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this._pipeline_choose_row.initialize(preferences.overview, pipelines_manager, pipelines_page);

        bind_settings(preferences.overview, [
            ['blur', this._blur, 'active'],
            ['style-components', this._style_components, 'selected'],
            ['workspace-corner-radius', this._workspace_corner_radius, 'value'],
        ]);
    }
});
