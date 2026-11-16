import Adw from 'gi://Adw';
import GObject from 'gi://GObject';

import { ui_template } from '../../resources.js';
import { bind_settings } from '../../bind_settings.js';
import { dock_overrides_background, get_running_dock_settings } from '../../dock_settings.js';

import '../../widgets/blur_mode_row.js';


export const Dash = GObject.registerClass({
    GTypeName: 'Dash',
    Template: ui_template('pages/shell/dash.ui'),
    InternalChildren: [
        'blur',
        'blur_mode_row',
        'pipeline_auto_mode_switch',
        'pipeline_choose_row',
        'pipeline_choose_auto_light_row',
        'pipeline_choose_auto_dark_row',
        'unblur_in_overview',
        'override_background',
        'style_dash_to_dock',
        'dock_background_warning'
    ],
}, class Dash extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this._blur_mode_row.initialize(preferences.dash_to_dock);
        this._pipeline_choose_row.initialize(
            preferences.dash_to_dock, 'PIPELINE', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_light_row.initialize(
            preferences.dash_to_dock, 'PIPELINE_LIGHT', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_dark_row.initialize(
            preferences.dash_to_dock, 'PIPELINE_DARK', pipelines_manager, pipelines_page
        );

        bind_settings(preferences.dash_to_dock, [
            ['blur', this._blur, 'active'],
            ['pipeline-auto-mode', this._pipeline_auto_mode_switch, 'active'],
            ['unblur-in-overview', this._unblur_in_overview, 'active'],
            ['override-background', this._override_background, 'active'],
            ['style-dash-to-dock', this._style_dash_to_dock, 'selected'],
        ]);

        get_running_dock_settings().then(dock_settings => {
            if (!dock_settings)
                return;

            const update = () => {
                this._dock_background_warning.visible = preferences.dash_to_dock.OVERRIDE_BACKGROUND
                    && dock_overrides_background(dock_settings);
            };
            ['apply-custom-theme', 'transparency-mode', 'custom-background-color'].forEach(
                key => dock_settings.connect(`changed::${key}`, update)
            );
            preferences.dash_to_dock.OVERRIDE_BACKGROUND_changed(update);
            update();
        }).catch(logError);
    }
});
