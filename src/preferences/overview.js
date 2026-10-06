import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const Overview = GObject.registerClass({
    GTypeName: 'Overview',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/overview.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'overview_blur',
        'pipeline_choose_row',
        'overview_style_components',
        'overview_custom_background_row',
        'overview_custom_background_color',
        'overview_custom_text_row',
        'overview_custom_text_color',
        'overview_custom_text_style_row',
        'overview_custom_text_style',
        'overview_custom_secondary_color_row',
        'overview_custom_secondary_color',
        'overview_custom_secondary_strength_row',
        'overview_custom_secondary_strength',
        'overview_custom_highlight_style_row',
        'overview_custom_highlight_style',
        'overview_custom_highlight_color_row',
        'overview_custom_highlight_color',

        'appfolder_blur',
        'appfolder_sigma',
        'appfolder_brightness',
        'appfolder_style_dialogs',
        'appfolder_custom_background_row',
        'appfolder_custom_background_color',
        'appfolder_custom_text_row',
        'appfolder_custom_text_color',
        'appfolder_custom_text_style_row',
        'appfolder_custom_text_style',
        'appfolder_custom_secondary_color_row',
        'appfolder_custom_secondary_color',
        'appfolder_custom_secondary_strength_row',
        'appfolder_custom_secondary_strength',
        'appfolder_custom_highlight_style_row',
        'appfolder_custom_highlight_style',
        'appfolder_custom_highlight_color_row',
        'appfolder_custom_highlight_color'
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, pipelines_page) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.pipelines_page = pipelines_page;
        this._custom_color_bindings = [];
        this._custom_settings_connections = [];
        this._custom_window = null;
        this._custom_window_close_id = null;

        this.preferences.overview.settings.bind(
            'blur', this._overview_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._pipeline_choose_row.initialize(
            this.preferences.overview, this.pipelines_manager, this.pipelines_page
        );

        this.preferences.overview.settings.bind(
            'style-components', this._overview_style_components, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );

        this.preferences.appfolder.settings.bind(
            'blur', this._appfolder_blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.appfolder.settings.bind(
            'sigma', this._appfolder_sigma, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.appfolder.settings.bind(
            'brightness', this._appfolder_brightness, 'value',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.appfolder.settings.bind(
            'style-dialogs', this._appfolder_style_dialogs, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._initialize_custom_colors(
            this.preferences.overview,
            this._overview_style_components,
            this._overview_custom_background_row,
            this._overview_custom_background_color,
            this._overview_custom_text_row,
            this._overview_custom_text_color,
            'overview'
        );
        this._initialize_custom_colors(
            this.preferences.appfolder,
            this._appfolder_style_dialogs,
            this._appfolder_custom_background_row,
            this._appfolder_custom_background_color,
            this._appfolder_custom_text_row,
            this._appfolder_custom_text_color,
            'appfolder'
        );
    }

    _initialize_custom_colors(component, style_widget, background_row, background_button,
        text_row, text_button, prefix) {
        const control = name => this[`_${prefix}_custom_${name}`];
        const text_style = control('text_style');
        const highlight_style = control('highlight_style');
        component.settings.bind('custom-text-style', text_style, 'selected', Gio.SettingsBindFlags.DEFAULT);
        component.settings.bind('custom-secondary-text-strength', control('secondary_strength'),
            'value', Gio.SettingsBindFlags.DEFAULT);
        component.settings.bind('custom-highlight-style', highlight_style, 'selected', Gio.SettingsBindFlags.DEFAULT);
        const update_visibility = () => {
            const custom = style_widget.selected == 4;
            background_row.visible = custom;
            control('text_style_row').visible = custom;
            text_row.visible = custom && text_style.selected > 0;
            control('secondary_color_row').visible = custom && text_style.selected == 2;
            control('secondary_strength_row').visible = custom && text_style.selected > 0;
            control('highlight_style_row').visible = custom;
            control('highlight_color_row').visible = custom && highlight_style.selected == 1;
        };
        style_widget.connect('notify::selected', update_visibility);
        text_style.connect('notify::selected', update_visibility);
        highlight_style.connect('notify::selected', update_visibility);
        update_visibility();

        this._initialize_color_button(
            component, 'CUSTOM_BACKGROUND_COLOR', 'custom-background-color', background_button
        );
        this._initialize_color_button(
            component, 'CUSTOM_TEXT_COLOR', 'custom-text-color', text_button
        );
        this._initialize_color_button(component, 'CUSTOM_SECONDARY_TEXT_COLOR',
            'custom-secondary-text-color', control('secondary_color'));
        this._initialize_color_button(component, 'CUSTOM_HIGHLIGHT_COLOR',
            'custom-highlight-color', control('highlight_color'));
    }

    _initialize_color_button(component, property, key, button) {
        const binding = { component, property, key, button };
        this._custom_color_bindings.push(binding);
        this._sync_color_button(binding);

        // Programmatic set_rgba() does not emit color-set, so external changes
        // update the picker without writing rounded float values back to settings.
        button.connect('color-set', () => {
            const color = button.get_rgba();
            component[property] = [
                color.red, color.green, color.blue, button.use_alpha ? color.alpha : 1
            ];
        });
    }

    _sync_color_button({ component, property, button }) {
        const channels = component[property].map((channel, index) => {
            const value = Number.isFinite(channel) ? channel : (index == 3 ? 1 : 0);
            return Math.min(1, Math.max(0, value));
        });
        const color = button.get_rgba().copy();
        [color.red, color.green, color.blue, color.alpha] = channels;
        if (!button.use_alpha)
            color.alpha = 1;
        button.set_rgba(color);
    }

    _connect_custom_color_settings() {
        if (this._custom_settings_connections.length)
            return;

        this._custom_color_bindings.forEach(binding => {
            const settings = binding.component.settings;
            const id = settings.connect(
                'changed::' + binding.key, () => this._sync_color_button(binding)
            );
            this._custom_settings_connections.push({ settings, id });
            this._sync_color_button(binding);
        });
    }

    _disconnect_custom_color_settings() {
        this._custom_settings_connections.forEach(({ settings, id }) => settings.disconnect(id));
        this._custom_settings_connections = [];
    }

    vfunc_root() {
        super.vfunc_root();
        this._connect_custom_color_settings();

        this._custom_window = this.get_root();
        this._custom_window_close_id = this._custom_window.connect('close-request', () => {
            this._disconnect_custom_color_settings();
            return false;
        });
    }

    vfunc_unroot() {
        this._disconnect_custom_color_settings();
        if (this._custom_window_close_id)
            this._custom_window.disconnect(this._custom_window_close_id);
        this._custom_window_close_id = null;
        this._custom_window = null;
        super.vfunc_unroot();
    }
});
