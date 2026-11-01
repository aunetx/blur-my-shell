import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

import { bind_settings } from '../../bind_settings.js';

import '../../widgets/blur_mode_row.js';


export const Panel = GObject.registerClass({
    GTypeName: 'Panel',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../../ui/pages/shell/panel.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'blur',
        'blur_mode_row',
        'pipeline_choose_row',
        'unblur_in_overview',
        'corner_radius',
        'rounded_corners',
        'force_light_text',
        'match_theme_in_overview',
        'override_background',
        'style_panel',
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
        this._pipeline_choose_row.initialize(preferences.panel, pipelines_manager, pipelines_page);

        bind_settings(preferences.panel, [
            ['blur', this._blur, 'active'],
            ['unblur-in-overview', this._unblur_in_overview, 'active'],
            ['corner-radius', this._corner_radius, 'value'],
            ['rounded-corners', this._rounded_corners, 'selected'],
            ['force-light-text', this._force_light_text, 'active'],
            ['match-theme-in-overview', this._match_theme_in_overview, 'active'],
            ['override-background', this._override_background, 'active'],
            ['style-panel', this._style_panel, 'selected'],
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
    }

    update_proximity_rows() {
        const panel = this.preferences.panel;
        const dynamic = panel.OVERRIDE_BACKGROUND_DYNAMICALLY;
        const blur_on_proximity = dynamic && panel.OVERRIDE_BACKGROUND_DYNAMICALLY_MODE === 0;
        this._override_background_dynamically_mode.visible = dynamic;
        this._gradient_panel.visible = blur_on_proximity;
        this._gradient_panel_mode.visible = blur_on_proximity && panel.GRADIENT_PANEL;
    }
});
