import Adw from 'gi://Adw';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';

import { ui_template } from '../resources.js';


export const BlurModeRow = GObject.registerClass({
    GTypeName: 'BlurModeRow',
    Template: ui_template('widgets/blur-mode-row.ui'),
    InternalChildren: [
        'mode_static',
        'mode_dynamic'
    ],
}, class BlurModeRow extends Adw.ActionRow {
    initialize(component_preferences) {
        this._mode_static.bind_property(
            'active', this._mode_dynamic, 'active',
            GObject.BindingFlags.SYNC_CREATE
            | GObject.BindingFlags.BIDIRECTIONAL
            | GObject.BindingFlags.INVERT_BOOLEAN
        );
        component_preferences.settings.bind(
            'static-blur', this._mode_static, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
    }
});
