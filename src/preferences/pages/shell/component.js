import Adw from 'gi://Adw';
import GObject from 'gi://GObject';

import { ui_template } from '../../resources.js';
import { bind_settings } from '../../bind_settings.js';


export const ComponentPage = GObject.registerClass({
    GTypeName: 'ComponentPage',
    Template: ui_template('pages/shell/component.ui'),
    InternalChildren: [
        'blur',
        'pipeline_choose_row'
    ],
}, class ComponentPage extends Adw.PreferencesPage {
    constructor(component_preferences, pipelines_manager, pipelines_page) {
        super({});

        bind_settings(component_preferences, [['blur', this._blur, 'active']]);
        this._pipeline_choose_row.initialize(
            component_preferences, pipelines_manager, pipelines_page
        );
    }
});
