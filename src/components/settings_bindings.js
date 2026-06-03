export const SettingsBindings = class SettingsBindings {
    constructor(extension) {
        this.extension = extension;
        this.settings = extension._settings;
    }

    connect() {
        this.connect_global_profile();
        this.connect_overview();
        this.connect_appfolders();
        this.connect_panel();
        this.connect_dash();
        this.connect_applications();
        this.connect_lockscreen();
        this.connect_window_list();
        this.connect_coverflow_alt_tab();
        this.connect_hidetopbar();
        this.connect_dash_to_panel();
        this.connect_screenshot();
        this.connect_popup();
    }

    if_enabled(settings, callback) {
        if (settings.BLUR)
            callback();
    }

    if_global(settings, callback) {
        if (settings.BLUR && settings.USE_GLOBAL)
            callback();
    }

    toggle(settings, component) {
        if (settings.BLUR)
            component.enable();
        else
            component.disable();
    }

    connect_global_profile() {
        const settings = this.settings;
        const extension = this.extension;

        settings.DISABLE_CLIPPED_REDRAWS_changed(() => extension._restart());

        settings.PROFILE_STATIC_BLUR_changed(() => {
            this.if_global(settings.panel, () => extension._panel_blur.reset());
            this.if_global(settings.dash_to_dock, () => extension._dash_to_dock_blur.change_blur_type());
            this.if_global(settings.applications, () => extension._applications_blur.change_blur_type());
            this.if_global(settings.popup, () => extension._popup.reset());
        });

        settings.PROFILE_PIPELINE_changed(() => {
            this.if_global(settings.panel, () => extension._panel_blur.update_pipeline());
            this.if_global(settings.dash_to_dock, () => extension._dash_to_dock_blur.update_pipeline());
            this.if_global(settings.applications, () => extension._applications_blur.change_pipeline());
            this.if_global(settings.window_list, () => extension._window_list_blur.update_pipeline());
            this.if_global(settings.popup, () => extension._popup.update_pipeline());
        });

        settings.PROFILE_OVERRIDE_BACKGROUND_changed(() => {
            this.if_global(settings.panel, () => extension._panel_blur.connect_to_windows_and_overview());
            this.if_global(settings.dash_to_dock, () => extension._dash_to_dock_blur.update_background());
            this.if_global(settings.popup, () => extension._popup.update_background());
        });

        settings.PROFILE_BACKGROUND_STYLE_changed(() => {
            this.if_global(settings.panel, () => extension._panel_blur.connect_to_windows_and_overview());
            this.if_global(settings.dash_to_dock, () => extension._dash_to_dock_blur.update_background());
            this.if_global(settings.popup, () => extension._popup.update_background());
        });
    }

    connect_overview() {
        const settings = this.settings.overview;
        const component = this.extension._overview_blur;

        settings.BLUR_changed(() => this.toggle(settings, component));
        settings.PIPELINE_changed(() => this.if_enabled(settings, () => component.update_backgrounds()));
        settings.STYLE_COMPONENTS_changed(() => this.if_enabled(settings, () => component.update_components_classname()));
    }

    connect_appfolders() {
        const settings = this.settings.appfolder;
        const component = this.extension._appfolder_blur;

        settings.BLUR_changed(() => this.toggle(settings, component));
        settings.SIGMA_changed(() => this.if_enabled(settings, () => component.set_sigma(settings.SIGMA)));
        settings.BRIGHTNESS_changed(() => this.if_enabled(settings, () => component.set_brightness(settings.BRIGHTNESS)));
        settings.STYLE_DIALOGS_changed(() => this.if_enabled(settings, () => component.blur_appfolders()));
    }

    connect_panel() {
        const settings = this.settings.panel;
        const component = this.extension._panel_blur;

        settings.BLUR_changed(() => this.toggle(settings, component));
        settings.STATIC_BLUR_changed(() => this.if_enabled(settings, () => component.reset()));
        settings.USE_GLOBAL_changed(() => this.if_enabled(settings, () => component.reset()));
        settings.PIPELINE_changed(() => this.if_enabled(settings, () => component.update_pipeline()));
        settings.CORNER_RADIUS_changed(() => this.if_enabled(settings, () => component.update_corner_radius()));
        settings.UNBLUR_IN_OVERVIEW_changed(() => component.connect_to_windows_and_overview());
        settings.FORCE_LIGHT_TEXT_changed(() => this.if_enabled(settings, () => component.update_light_text_classname()));
        settings.OVERRIDE_BACKGROUND_changed(() => this.if_enabled(settings, () => component.connect_to_windows_and_overview()));
        settings.STYLE_PANEL_changed(() => this.if_enabled(settings, () => component.connect_to_windows_and_overview()));
        settings.OVERRIDE_BACKGROUND_DYNAMICALLY_changed(() => this.if_enabled(settings, () => component.connect_to_windows_and_overview()));
        settings.OVERRIDE_BACKGROUND_DYNAMICALLY_MODE_changed(() => this.if_enabled(settings, () => component.connect_to_windows_and_overview()));
    }

    connect_dash() {
        const settings = this.settings.dash_to_dock;
        const component = this.extension._dash_to_dock_blur;

        settings.BLUR_changed(() => this.toggle(settings, component));
        settings.STATIC_BLUR_changed(() => this.if_enabled(settings, () => component.change_blur_type()));
        settings.USE_GLOBAL_changed(() => this.if_enabled(settings, () => component.change_blur_type()));
        settings.PIPELINE_changed(() => this.if_enabled(settings, () => component.update_pipeline()));
        settings.CORNER_RADIUS_changed(() => this.if_enabled(settings, () => component.update_corner_radius()));
        settings.OVERRIDE_BACKGROUND_changed(() => this.if_enabled(settings, () => component.update_background()));
        settings.STYLE_DASH_TO_DOCK_changed(() => this.if_enabled(settings, () => component.update_background()));
        settings.UNBLUR_IN_OVERVIEW_changed(() => this.if_enabled(settings, () => component.connect_to_overview()));
    }

    connect_applications() {
        const settings = this.settings.applications;
        const component = this.extension._applications_blur;

        settings.BLUR_changed(() => this.toggle(settings, component));
        settings.STATIC_BLUR_changed(() => this.if_enabled(settings, () => component.change_blur_type()));
        settings.USE_GLOBAL_changed(() => this.if_enabled(settings, () => component.change_blur_type()));
        settings.PIPELINE_changed(() => this.if_enabled(settings, () => component.change_pipeline()));
        settings.CORNER_WHEN_MAXIMIZED_changed(() => this.if_enabled(settings, () => component.update_all_corner_radii()));
        settings.OPACITY_changed(() => this.if_enabled(settings, () => component.set_opacity(settings.OPACITY)));
        settings.DYNAMIC_OPACITY_changed(() => this.if_enabled(settings, () => component.init_dynamic_opacity()));
        settings.BLUR_ON_OVERVIEW_changed(() => this.if_enabled(settings, () => component.connect_to_overview()));
        settings.ENABLE_ALL_changed(() => this.if_enabled(settings, () => component.update_all_windows()));
        settings.WHITELIST_changed(() => {
            if (settings.BLUR && !settings.ENABLE_ALL)
                component.update_all_windows();
        });
        settings.BLACKLIST_changed(() => {
            if (settings.BLUR && settings.ENABLE_ALL)
                component.update_all_windows();
        });
    }

    connect_lockscreen() {
        const settings = this.settings.lockscreen;
        const component = this.extension._lockscreen_blur;

        settings.BLUR_changed(() => this.toggle(settings, component));
        settings.PIPELINE_changed(() => this.if_enabled(settings, () => component.update_lockscreen()));
    }

    connect_window_list() {
        const settings = this.settings.window_list;
        const component = this.extension._window_list_blur;

        settings.BLUR_changed(() => this.toggle(settings, component));
        settings.USE_GLOBAL_changed(() => this.if_enabled(settings, () => {
            component.disable();
            component.enable();
        }));
        settings.PIPELINE_changed(() => this.if_enabled(settings, () => component.update_pipeline()));
    }

    connect_coverflow_alt_tab() {
        const settings = this.settings.coverflow_alt_tab;
        const component = this.extension._coverflow_alt_tab_blur;

        settings.BLUR_changed(() => this.toggle(settings, component));
        settings.PIPELINE_changed(() => this.if_enabled(settings, () => component.update_pipeline()));
    }

    connect_hidetopbar() {
        this.settings.hidetopbar.COMPATIBILITY_changed(() =>
            this.extension._panel_blur.connect_to_windows_and_overview()
        );
    }

    connect_dash_to_panel() {
        this.settings.dash_to_panel.BLUR_ORIGINAL_PANEL_changed(() =>
            this.if_enabled(this.settings.panel, () => this.extension._panel_blur.reset())
        );
    }

    connect_screenshot() {
        const settings = this.settings.screenshot;
        const component = this.extension._screenshot_blur;

        settings.BLUR_changed(() => this.toggle(settings, component));
        settings.PIPELINE_changed(() => this.if_enabled(settings, () => component.update_pipeline()));
    }

    connect_popup() {
        const settings = this.settings.popup;
        const component = this.extension._popup;

        settings.BLUR_changed(() => this.toggle(settings, component));
        settings.STATIC_BLUR_changed(() => this.if_enabled(settings, () => component.reset()));
        settings.USE_GLOBAL_changed(() => this.if_enabled(settings, () => component.reset()));
        settings.PIPELINE_changed(() => this.if_enabled(settings, () => component.update_pipeline()));
        settings.OVERRIDE_BACKGROUND_changed(() => this.if_enabled(settings, () => component.update_background()));
        settings.STYLE_POPUP_changed(() => this.if_enabled(settings, () => component.update_background()));
    }
};
