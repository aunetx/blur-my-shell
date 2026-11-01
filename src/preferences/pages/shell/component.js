import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

import { bind_settings } from '../../bind_settings.js';


export const ComponentPage = GObject.registerClass({
    GTypeName: 'ComponentPage',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../../ui/pages/shell/component.ui', GLib.UriFlags.NONE),
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
