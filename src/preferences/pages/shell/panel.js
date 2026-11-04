import Adw from 'gi://Adw';
import GObject from 'gi://GObject';

import { ui_template } from '../../resources.js';
import { bind_settings } from '../../bind_settings.js';

import '../../widgets/blur_mode_row.js';


export const Panel = GObject.registerClass({
    GTypeName: 'Panel',
    Template: ui_template('pages/shell/panel.ui'),
    InternalChildren: [
        'blur',
        'blur_mode_row',
        'pipeline_auto_mode_switch',
        'pipeline_choose_row',
        'pipeline_choose_auto_light_row',
        'pipeline_choose_auto_dark_row',
        'unblur_in_overview',
        'corner_radius',
        'rounded_corners',
        'force_light_text',
        'match_theme_in_overview',
        'override_background',
        'style_panel',
        'square_buttons',
        'override_background_dynamically',
        'override_background_dynamically_mode',
        'gradient_panel',
        'gradient_panel_mode',
        'hidetopbar_compatibility',
        'dtp_blur_original_panel'
    ],
}, class Panel extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this.preferences = preferences;

        this._blur_mode_row.initialize(preferences.panel);
        this._pipeline_choose_row.initialize(
            preferences.panel, 'PIPELINE', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_light_row.initialize(
            preferences.panel, 'PIPELINE_LIGHT', pipelines_manager, pipelines_page
        );
        this._pipeline_choose_auto_dark_row.initialize(
            preferences.panel, 'PIPELINE_DARK', pipelines_manager, pipelines_page
        );

        bind_settings(preferences.panel, [
            ['blur', this._blur, 'active'],
            ['unblur-in-overview', this._unblur_in_overview, 'active'],
            ['pipeline-auto-mode', this._pipeline_auto_mode_switch, 'active'],
            ['corner-radius', this._corner_radius, 'value'],
            ['rounded-corners', this._rounded_corners, 'selected'],
            ['force-light-text', this._force_light_text, 'active'],
            ['match-theme-in-overview', this._match_theme_in_overview, 'active'],
            ['override-background', this._override_background, 'active'],
            ['style-panel', this._style_panel, 'selected'],
            ['square-buttons', this._square_buttons, 'active'],
            ['override-background-dynamically', this._override_background_dynamically, 'active'],
            ['override-background-dynamically-mode', this._override_background_dynamically_mode, 'selected'],
            ['gradient-panel', this._gradient_panel, 'active'],
            ['gradient-panel-mode', this._gradient_panel_mode, 'selected'],
        ]);
        bind_settings(preferences.hidetopbar, [
            ['compatibility', this._hidetopbar_compatibility, 'active'],
        ]);
        bind_settings(preferences.dash_to_panel, [
            ['blur-original-panel', this._dtp_blur_original_panel, 'active'],
        ]);

        preferences.panel.OVERRIDE_BACKGROUND_DYNAMICALLY_changed(() => this.update_proximity_rows());
        preferences.panel.OVERRIDE_BACKGROUND_DYNAMICALLY_MODE_changed(() => this.update_proximity_rows());
        preferences.panel.GRADIENT_PANEL_changed(() => this.update_proximity_rows());
        this.update_proximity_rows();

        preferences.panel.STYLE_PANEL_changed(() => this.update_square_buttons_row());
        this.update_square_buttons_row();
    }

    update_proximity_rows() {
        const panel = this.preferences.panel;
        const dynamic = panel.OVERRIDE_BACKGROUND_DYNAMICALLY;
        const blur_on_proximity = dynamic && panel.OVERRIDE_BACKGROUND_DYNAMICALLY_MODE === 0;
        this._override_background_dynamically_mode.visible = dynamic;
        this._gradient_panel.visible = blur_on_proximity;
        this._gradient_panel_mode.visible = blur_on_proximity && panel.GRADIENT_PANEL;
    }

    update_square_buttons_row() {
        // only the contrasted style draws button backgrounds
        this._square_buttons.visible = this.preferences.panel.STYLE_PANEL === 3;
    }

});
