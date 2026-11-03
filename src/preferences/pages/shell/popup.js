import Adw from 'gi://Adw';
import GObject from 'gi://GObject';

import { ui_template } from '../../resources.js';
import { bind_settings } from '../../bind_settings.js';

import '../../widgets/blur_mode_row.js';


const CORNER_RADIUS_KEYS = [
    'menu-corner-radius',
    'candidate-corner-radius',
    'quick-settings-corner-radius',
    'submenu-corner-radius',
    'calendar-corner-radius',
    'notification-corner-radius',
    'osd-corner-radius',
    'osd-window-corner-radius',
    'resize-popup-corner-radius',
    'dialog-corner-radius',
    'osk-corner-radius',
    'corner-radius'
];

const to_child_id = key => key.replaceAll('-', '_');


export const PopupBlur = GObject.registerClass({
    GTypeName: 'PopupBlur',
    Template: ui_template('pages/shell/popup.ui'),
    InternalChildren: [
        'blur',
        'blur_mode_row',
        'pipeline_auto_mode_switch',
        'pipeline_choose_row',
        'pipeline_choose_auto_light_row',
        'pipeline_choose_auto_dark_row',
        'blur_behind_dialogs',
        'override_background',
        'style_popup',
        'preserve_shell_theme',
        'rounded_corners',
        ...CORNER_RADIUS_KEYS.map(to_child_id)
    ],
}, class PopupBlur extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this._blur_mode_row.initialize(preferences.popup);
        this._pipeline_choose_row.initialize(
            preferences.popup, 'PIPELINE', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_light_row.initialize(
            preferences.popup, 'PIPELINE_LIGHT', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_dark_row.initialize(
            preferences.popup, 'PIPELINE_DARK', pipelines_manager, pipelines_page
        );

        bind_settings(preferences.popup, [
            ['blur', this._blur, 'active'],
            ['pipeline-auto-mode', this._pipeline_auto_mode_switch, 'active'],
            ['blur-behind-dialogs', this._blur_behind_dialogs, 'active'],
            ['override-background', this._override_background, 'active'],
            ['style-popup', this._style_popup, 'selected'],
            ['preserve-shell-theme', this._preserve_shell_theme, 'active'],
            ['rounded-corners', this._rounded_corners, 'selected'],
            ...CORNER_RADIUS_KEYS.map(key => [key, this[`_${to_child_id(key)}`], 'value']),
        ]);

    }
});
