import Adw from 'gi://Adw';
import GObject from 'gi://GObject';

import { ui_template } from '../../resources.js';
import { bind_settings } from '../../bind_settings.js';


export const ComponentPage = GObject.registerClass({
    GTypeName: 'ComponentPage',
    Template: ui_template('pages/shell/component.ui'),
    InternalChildren: [
        'blur',
        'pipeline_auto_mode_switch',
        'pipeline_choose_row',
        'pipeline_choose_auto_light_row',
        'pipeline_choose_auto_dark_row',
    ],
}, class ComponentPage extends Adw.PreferencesPage {
    constructor(component_preferences, pipelines_manager, pipelines_page) {
        super({});

        this.preferences = component_preferences;
        this._pipeline_choose_row.initialize(
            component_preferences, 'PIPELINE', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_light_row.initialize(
            component_preferences, 'PIPELINE_LIGHT', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_dark_row.initialize(
            component_preferences, 'PIPELINE_DARK', pipelines_manager, pipelines_page
        );

        bind_settings(component_preferences, [['blur', this._blur, 'active']]);
        bind_settings(component_preferences, [
            ['pipeline-auto-mode', this._pipeline_auto_mode_switch, 'active'],
        ]);

        component_preferences.PIPELINE_AUTO_MODE_changed(() => this.update_rows());
        this.update_rows();
    }

    update_rows() {
        const auto_mode = this.preferences.PIPELINE_AUTO_MODE;
        this._pipeline_choose_row.visible = !auto_mode;
        this._pipeline_choose_auto_light_row.visible = auto_mode;
        this._pipeline_choose_auto_dark_row.visible = auto_mode;
    }
});
