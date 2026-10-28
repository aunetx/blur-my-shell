import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

import { bind_settings } from '../../bind_settings.js';


export const Overview = GObject.registerClass({
    GTypeName: 'Overview',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../../ui/pages/shell/overview.ui', GLib.UriFlags.NONE),
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
