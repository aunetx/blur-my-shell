import Adw from 'gi://Adw';
import Gio from 'gi://Gio';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';

import { ApplicationRow } from './applications_management/application_row.js';
import { PipelineChooseRow } from './pipelines_management/pipeline_choose_row.js';
import {
    make_array,
    ProfilePipelineSettings,
    watch_profile_visibility,
    watch_surface_visibility,
} from './surfaces_utils.js';

let _ = str => str;

function sync_settings() {
    try {
        Gio.Settings.sync();
    } catch (e) { }
}

export const Surfaces = GObject.registerClass({
    GTypeName: 'Surfaces',
}, class Surfaces extends Adw.PreferencesPage {
    constructor(preferences, preferences_window, pipelines_manager, pipelines_page, gettext = null) {
        if (gettext)
            _ = gettext;

        super({
            name: 'surfaces',
            title: _("Surfaces"),
            icon_name: 'applications-symbolic',
        });

        this.preferences = preferences;
        this.preferences_window = preferences_window;
        this.pipelines_manager = pipelines_manager;
        this.pipelines_page = pipelines_page;
        this.surface_styles = this.create_surface_styles();

        this.build_global_profile();
        this.build_shell_surfaces();
        this.build_system_surfaces();
        this.build_window_surfaces();
        this.add_widgets_from_lists();

        this.preferences.connect('reset', () => {
            this.remove_all_widgets();
            this.add_widgets_from_lists();
        });
    }

    create_surface_styles() {
        return {
            panel: [_("Transparent"), _("Light"), _("Dark"), _("Contrasted")],
            dash_to_dock: [_("Transparent"), _("Light"), _("Dark")],
            popup: [_("Transparent"), _("Light"), _("Dark"), _("Automatic")],
            overview: [_("Default"), _("Light"), _("Dark"), _("Transparent")],
            global: [_("Transparent"), _("Light"), _("Dark"), _("Automatic")],
        };
    }

    build_global_profile() {
        const group = new Adw.PreferencesGroup({ title: _("Global blur profile") });
        this.add(group);

        const mode = this.create_mode_row(
            () => this.preferences.PROFILE_STATIC_BLUR,
            value => this.preferences.PROFILE_STATIC_BLUR = value,
            callback => this.preferences.PROFILE_STATIC_BLUR_changed(callback)
        );
        group.add(mode.row);

        const pipeline = new PipelineChooseRow();
        pipeline.initialize(
            new ProfilePipelineSettings(this.preferences),
            this.pipelines_manager,
            this.pipelines_page
        );
        group.add(pipeline);

        const background_override = this.create_global_background_row();
        group.add(background_override);
        watch_profile_visibility(this.preferences, {
            always: [pipeline, background_override],
        });
    }

    build_shell_surfaces() {
        const group = new Adw.PreferencesGroup({ title: _("Shell surfaces") });
        this.add(group);

        group.add(this.create_panel_row());
        group.add(this.create_dash_row());
        group.add(this.create_popup_row());
        group.add(this.create_overview_row());
    }

    build_window_surfaces() {
        const group = new Adw.PreferencesGroup({ title: _("Windows") });
        this.add(group);

        group.add(this.create_applications_row());
        group.add(this.create_window_list_row());

        this._whitelist = this.create_application_list_group(_("Whitelist"), () => this.add_to_whitelist());
        this._blacklist = this.create_application_list_group(_("Blacklist"), () => this.add_to_blacklist());

        this.add(this._whitelist);
        this.add(this._blacklist);

        this.preferences.applications.settings.bind('enable-all', this._whitelist, 'visible',
            Gio.SettingsBindFlags.DEFAULT | Gio.SettingsBindFlags.INVERT_BOOLEAN);
        this.preferences.applications.settings.bind('enable-all', this._blacklist, 'visible',
            Gio.SettingsBindFlags.DEFAULT);
    }

    build_system_surfaces() {
        const group = new Adw.PreferencesGroup({ title: _("System surfaces") });
        this.add(group);

        group.add(this.create_pipeline_surface_row(this.preferences.lockscreen,
            _("Lock screen"), _("Lock screen background blur.")));
        group.add(this.create_pipeline_surface_row(this.preferences.screenshot,
            _("Screenshot UI"), _("Window selector background in the screenshot UI.")));
        group.add(this.create_pipeline_surface_row(this.preferences.coverflow_alt_tab,
            _("Coverflow Alt-Tab"), _("Coverflow Alt-Tab extension background blur.")));
    }

    create_panel_row() {
        const row = this.create_surface_row(this.preferences.panel, _("Panel"), _("Top panel blur and background behavior."));
        this.add_common_surface_rows(row, this.preferences.panel);
        row.add_row(this.create_switch_row(_("Light text"), null, this.preferences.panel.settings, 'force-light-text'));
        row.add_row(this.create_background_row(this.preferences.panel, 'style-panel', this.surface_styles.panel));
        row.add_row(this.create_switch_row(_("Change background near windows"), null, this.preferences.panel.settings, 'override-background-dynamically'));
        row.add_row(this.create_switch_row(_("Disable in overview"), null, this.preferences.panel.settings, 'unblur-in-overview'));
        row.add_row(this.create_switch_row(_("Hide Top Bar compatibility"), null, this.preferences.hidetopbar.settings, 'compatibility'));
        return row;
    }

    create_dash_row() {
        const row = this.create_surface_row(this.preferences.dash_to_dock, _("Dock"), _("Dash to Dock blur and background behavior."));
        this.add_common_surface_rows(row, this.preferences.dash_to_dock);
        row.add_row(this.create_background_row(this.preferences.dash_to_dock, 'style-dash-to-dock', this.surface_styles.dash_to_dock));
        row.add_row(this.create_switch_row(_("Disable in overview"), null, this.preferences.dash_to_dock.settings, 'unblur-in-overview'));
        return row;
    }

    create_popup_row() {
        const row = this.create_surface_row(this.preferences.popup, _("Popups"), _("Menus, quick settings, notifications, OSD, switchers, and dialogs."));
        this.add_common_surface_rows(row, this.preferences.popup, { corner_radius: false });
        row.add_row(this.create_background_row(this.preferences.popup, 'style-popup', this.surface_styles.popup));
        const corner_radii = new Adw.ExpanderRow({ title: _("Corner radii") });
        row.add_row(corner_radii);
        [
            ['menu-corner-radius', _("Menus")],
            ['quick-settings-corner-radius', _("Quick settings")],
            ['notification-corner-radius', _("Notifications")],
            ['osd-corner-radius', _("OSD and switchers")],
            ['dialog-corner-radius', _("Dialogs")],
        ].forEach(([key, title]) => {
            corner_radii.add_row(this.create_spin_row(title, null, this.preferences.popup.settings, key, {
                lower: 0, upper: 150, step: 1,
            }));
        });
        watch_surface_visibility(this.preferences.popup, { surface_specific: [corner_radii] });
        return row;
    }

    create_overview_row() {
        const row = this.create_surface_row(
            this.preferences.overview,
            _("Overview"),
            _("Overview background and overview UI surface styling."),
            { global_profile: false, mode: false, dynamic: false }
        );
        const pipeline = new PipelineChooseRow();
        pipeline.initialize(this.preferences.overview, this.pipelines_manager, this.pipelines_page);
        row.add_row(pipeline);
        row.add_row(this.create_combo_row(_("Components style"), null, this.preferences.overview.settings, 'style-components', this.surface_styles.overview));
        row.add_row(this.create_switch_row(_("Application folders"), null, this.preferences.appfolder.settings, 'blur'));
        row.add_row(this.create_scale_row(_("Folder sigma"), null, this.preferences.appfolder.settings, 'sigma', {
            lower: 0, upper: 100, step: 1, digits: 0,
        }));
        row.add_row(this.create_scale_row(_("Folder brightness"), null, this.preferences.appfolder.settings, 'brightness', {
            lower: 0, upper: 1, step: 0.01, digits: 2,
        }));
        return row;
    }

    create_applications_row() {
        const row = this.create_surface_row(this.preferences.applications, _("Applications"), _("Blur behind selected windows."));
        this.add_common_surface_rows(row, this.preferences.applications);
        row.add_row(this.create_scale_row(_("Window opacity"), null, this.preferences.applications.settings, 'opacity', {
            lower: 0, upper: 255, step: 1, digits: 0,
        }));
        row.add_row(this.create_switch_row(_("Opaque focused window"), null, this.preferences.applications.settings, 'dynamic-opacity'));
        row.add_row(this.create_switch_row(_("Blur in overview"), null, this.preferences.applications.settings, 'blur-on-overview'));
        row.add_row(this.create_switch_row(_("Enable all windows"), null, this.preferences.applications.settings, 'enable-all'));
        row.add_row(this.create_switch_row(_("Round maximized windows"), null, this.preferences.applications.settings, 'corner-when-maximized'));
        return row;
    }

    create_window_list_row() {
        const row = this.create_surface_row(this.preferences.window_list, _("Window list"), _("Blur for the Window List extension."), {
            mode: false,
        });
        this.add_common_surface_rows(row, this.preferences.window_list, { mode: false });
        return row;
    }

    create_pipeline_surface_row(surface, title, subtitle) {
        const row = this.create_surface_row(surface, title, subtitle, {
            global_profile: false,
            mode: false,
        });
        const pipeline = new PipelineChooseRow();
        pipeline.initialize(surface, this.pipelines_manager, this.pipelines_page);
        row.add_row(pipeline);
        return row;
    }

    create_surface_row(surface, title, subtitle, options = {}) {
        const row = new Adw.ExpanderRow({
            title,
            subtitle,
            show_enable_switch: true,
        });
        surface.settings.bind('blur', row, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);

        if (options.global_profile !== false && 'USE_GLOBAL' in surface)
            row.add_row(this.create_switch_row(_("Use global profile"), null, surface.settings, 'use-global'));

        return row;
    }

    add_common_surface_rows(row, surface, options = {}) {
        const always = [];

        if (options.mode !== false) {
            const mode = this.create_mode_row(
                () => surface.STATIC_BLUR,
                value => surface.STATIC_BLUR = value,
                callback => surface.STATIC_BLUR_changed(callback)
            );
            row.add_row(mode.row);
            always.push(mode.row);
        }

        if (options.pipeline !== false) {
            const pipeline = new PipelineChooseRow();
            pipeline.initialize(surface, this.pipelines_manager, this.pipelines_page);
            row.add_row(pipeline);
            always.push(pipeline);
        }

        const surface_specific = [];
        if (options.corner_radius !== false) {
            const corner_radius = this.create_spin_row(_("Corner radius"), null, surface.settings, 'corner-radius', {
                lower: 0,
                upper: 150,
                step: 1,
            });
            row.add_row(corner_radius);
            surface_specific.push(corner_radius);
        }

        watch_surface_visibility(surface, {
            always,
            surface_specific,
        });
    }

    create_mode_row(get_value, set_value, connect_changed = null) {
        const mode_static = new Gtk.ToggleButton({ valign: Gtk.Align.CENTER });
        mode_static.child = new Adw.ButtonContent({
            icon_name: 'static-mode-symbolic',
            label: _("Static"),
        });

        const mode_dynamic = new Gtk.ToggleButton({ valign: Gtk.Align.CENTER });
        mode_dynamic.child = new Adw.ButtonContent({
            icon_name: 'dynamic-mode-symbolic',
            label: _("Dynamic"),
        });
        mode_static.group = mode_dynamic;
        mode_static.connect('toggled', () => {
            const value = mode_static.active;
            if (get_value() === value)
                return;

            set_value(value);
            sync_settings();
        });
        const update_active = () => {
            const is_static = get_value();
            mode_static.active = is_static;
            mode_dynamic.active = !is_static;
        };
        connect_changed?.(update_active);
        update_active();

        const box = new Gtk.Box({ valign: Gtk.Align.CENTER });
        box.add_css_class('linked');
        box.append(mode_static);
        box.append(mode_dynamic);

        const row = new Adw.ActionRow({
            title: _("Blur type"),
            subtitle: _("Static uses a wallpaper snapshot. Dynamic follows live content."),
            activatable_widget: box,
        });
        row.add_suffix(box);

        return { row, mode_static, mode_dynamic };
    }

    create_switch_row(title, subtitle, settings, key) {
        const toggle = new Gtk.Switch({ valign: Gtk.Align.CENTER });
        settings.bind(key, toggle, 'active', Gio.SettingsBindFlags.DEFAULT);
        toggle.connect('notify::active', () => sync_settings());

        const row = new Adw.ActionRow({ title, subtitle, activatable_widget: toggle });
        row.add_suffix(toggle);
        return row;
    }

    create_background_row(surface, style_key, styles) {
        const row = new Adw.ExpanderRow({
            title: _("Background override"),
            subtitle: _("Replace the original surface background."),
            show_enable_switch: true,
        });
        surface.settings.bind('override-background', row, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        row.add_row(this.create_combo_row(_("Style"), null, surface.settings, style_key, styles));
        return row;
    }

    create_global_background_row() {
        const row = new Adw.ExpanderRow({
            title: _("Background override"),
            subtitle: _("Default background replacement for surfaces using the global profile."),
            show_enable_switch: true,
        });
        this.preferences.settings.bind('profile-override-background', row, 'enable-expansion', Gio.SettingsBindFlags.DEFAULT);
        row.add_row(this.create_combo_row(_("Style"), null, this.preferences.settings, 'profile-background-style', this.surface_styles.global));
        return row;
    }

    create_combo_row(title, subtitle, settings, key, values) {
        const model = new Gtk.StringList();
        values.forEach(value => model.append(value));

        const row = new Adw.ComboRow({ title, subtitle, model });
        settings.bind(key, row, 'selected', Gio.SettingsBindFlags.DEFAULT);
        row.connect('notify::selected', () => sync_settings());
        return row;
    }

    create_scale_row(title, subtitle, settings, key, { lower, upper, step, digits }) {
        const adjustment = new Gtk.Adjustment({
            lower,
            upper,
            step_increment: step,
        });
        settings.bind(key, adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);
        adjustment.connect('value-changed', () => sync_settings());

        const scale = new Gtk.Scale({
            adjustment,
            valign: Gtk.Align.CENTER,
            hexpand: true,
            width_request: 200,
            draw_value: true,
            value_pos: Gtk.PositionType.RIGHT,
            digits,
        });

        const row = new Adw.ActionRow({ title, subtitle, activatable_widget: scale });
        row.add_suffix(scale);
        return row;
    }

    create_spin_row(title, subtitle, settings, key, { lower, upper, step }) {
        const adjustment = new Gtk.Adjustment({
            lower,
            upper,
            step_increment: step,
        });
        settings.bind(key, adjustment, 'value', Gio.SettingsBindFlags.DEFAULT);
        adjustment.connect('value-changed', () => sync_settings());
        return new Adw.SpinRow({ title, subtitle, adjustment });
    }

    create_application_list_group(title, on_add) {
        const add_button = new Gtk.Button({
            icon_name: 'add-row-symbolic',
            valign: Gtk.Align.CENTER,
        });
        add_button.add_css_class('flat');
        add_button.connect('clicked', on_add);

        return new Adw.PreferencesGroup({
            title,
            header_suffix: add_button,
        });
    }

    get _whitelist_elements() {
        return make_array(this._whitelist);
    }

    get _blacklist_elements() {
        return make_array(this._blacklist);
    }

    add_widgets_from_lists() {
        this.preferences.applications.WHITELIST.forEach(app_name => this.add_to_whitelist(app_name));
        this.preferences.applications.BLACKLIST.forEach(app_name => this.add_to_blacklist(app_name));
    }

    close_all_expanded_rows() {
        this._whitelist_elements.forEach(element => element.set_expanded(false));
        this._blacklist_elements.forEach(element => element.set_expanded(false));
    }

    remove_all_widgets() {
        this._whitelist_elements.forEach(element => this._whitelist.remove(element));
        this._blacklist_elements.forEach(element => this._blacklist.remove(element));
    }

    add_to_whitelist(app_name = null) {
        this._whitelist.add(new ApplicationRow('whitelist', this, app_name));
    }

    add_to_blacklist(app_name = null) {
        this._blacklist.add(new ApplicationRow('blacklist', this, app_name));
    }

    update_whitelist_titles() {
        this.preferences.applications.WHITELIST = this._whitelist_elements
            .map(element => element._window_class.buffer.text)
            .filter(title => title !== "");
    }

    update_blacklist_titles() {
        this.preferences.applications.BLACKLIST = this._blacklist_elements
            .map(element => element._window_class.buffer.text)
            .filter(title => title !== "");
    }

    remove_from_whitelist(widget) {
        this._whitelist.remove(widget);
        this.update_whitelist_titles();
    }

    remove_from_blacklist(widget) {
        this._blacklist.remove(widget);
        this.update_blacklist_titles();
    }

    get _preferences_window() {
        return this.preferences_window;
    }
});
