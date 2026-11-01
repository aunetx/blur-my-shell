import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

import { bind_settings } from '../../bind_settings.js';

import '../../widgets/blur_mode_row.js';


export const Dash = GObject.registerClass({
    GTypeName: 'Dash',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../../ui/pages/shell/dash.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'blur',
        'blur_mode_row',
        'pipeline_choose_row',
        'unblur_in_overview',
        'override_background',
        'style_dash_to_dock'
    ],
}, class Dash extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this._blur_mode_row.initialize(preferences.dash_to_dock);
        this._pipeline_choose_row.initialize(preferences.dash_to_dock, pipelines_manager, pipelines_page);

        bind_settings(preferences.dash_to_dock, [
            ['blur', this._blur, 'active'],
            ['unblur-in-overview', this._unblur_in_overview, 'active'],
            ['override-background', this._override_background, 'active'],
            ['style-dash-to-dock', this._style_dash_to_dock, 'selected'],
        ]);
    }
});
