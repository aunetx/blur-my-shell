const PIPELINE_SETTINGS = ['PIPELINE', 'PIPELINE_AUTO_MODE', 'PIPELINE_LIGHT', 'PIPELINE_DARK'];
const POPUP_BLUR_SETTINGS = [
    'BLUR_MENUS',
    'BLUR_CANDIDATES',
    'BLUR_QUICK_SETTINGS',
    'BLUR_SUBMENUS',
    'BLUR_SCREENSHOT',
    'BLUR_CALENDAR',
    'BLUR_NOTIFICATIONS',
    'BLUR_SWITCHERS',
    'BLUR_OSDS',
    'BLUR_RESIZE_POPUPS',
    'BLUR_DIALOGS',
    'BLUR_KEYBOARD',
];

function connect(settings, property, callback) {
    settings[`${property}_changed`](callback);
}

function when_enabled(component, callback) {
    return () => {
        if (component.enabled)
            callback();
    };
}

function connect_toggle(extension, settings, component, user_session = true) {
    connect(settings, 'BLUR', () => {
        const allowed = !extension._paused
            && (!user_session || extension._user_session_mode_enabled);
        if (settings.BLUR && allowed)
            component.enable();
        else
            component.disable();
    });
}

export function connect_component_settings(extension) {
    const settings = extension._settings;
    const overview = extension._overview_blur;
    const appfolder = extension._appfolder_blur;
    const panel = extension._panel_blur;
    const dash = extension._dash_to_dock_blur;
    const applications = extension._applications_blur;
    const lockscreen = extension._lockscreen_blur;
    const window_list = extension._window_list_blur;
    const coverflow = extension._coverflow_alt_tab_blur;
    const screenshot = extension._screenshot_blur;
    const popup = extension._popup;

    connect_toggle(extension, settings.overview, overview);
    PIPELINE_SETTINGS.forEach(property =>
        connect(settings.overview, property, when_enabled(
            overview,
            () => overview.update_pipeline()
        ))
    );
    connect(settings.overview, 'STYLE_COMPONENTS', when_enabled(
        overview,
        () => overview.update_components_classname()
    ));
    connect(settings.overview, 'WORKSPACE_CORNER_RADIUS', when_enabled(
        overview,
        () => overview.update_workspace_backgrounds()
    ));

    connect_toggle(extension, settings.appfolder, appfolder);
    PIPELINE_SETTINGS.forEach(property =>
        connect(settings.appfolder, property, when_enabled(
            appfolder,
            () => appfolder.update_pipeline()
        ))
    );
    connect(settings.appfolder, 'STYLE_DIALOGS', when_enabled(
        appfolder,
        () => appfolder.blur_appfolders()
    ));
    connect(settings.appfolder, 'BLUR_BEHIND_FOLDERS', when_enabled(
        appfolder,
        () => appfolder.blur_appfolders()
    ));

    connect_toggle(extension, settings.panel, panel);
    ['STATIC_BLUR', 'OVERRIDE_BACKGROUND',
        'OVERRIDE_BACKGROUND_DYNAMICALLY',
        'OVERRIDE_BACKGROUND_DYNAMICALLY_MODE'].forEach(property =>
        connect(settings.panel, property, when_enabled(panel, () => panel.reset()))
    );
    PIPELINE_SETTINGS.forEach(property =>
        connect(settings.panel, property, when_enabled(
            panel,
            () => panel.update_pipeline()
        ))
    );
    ['CORNER_RADIUS', 'ROUNDED_CORNERS'].forEach(property =>
        connect(settings.panel, property, when_enabled(
            panel,
            () => panel.update_corner_radius()
        ))
    );
    ['UNBLUR_IN_OVERVIEW', 'MATCH_THEME_IN_OVERVIEW', 'STYLE_PANEL'].forEach(property =>
        connect(settings.panel, property, when_enabled(
            panel,
            () => panel.connect_to_windows_and_overview()
        ))
    );
    connect(settings.panel, 'FORCE_LIGHT_TEXT', when_enabled(
        panel,
        () => panel.update_light_text()
    ));
    ['GRADIENT_PANEL', 'GRADIENT_PANEL_MODE'].forEach(property =>
        connect(settings.panel, property, when_enabled(
            panel,
            () => panel.update_visibility()
        ))
    );

    connect_toggle(extension, settings.dash_to_dock, dash);
    connect(settings.dash_to_dock, 'STATIC_BLUR', when_enabled(
        dash,
        () => dash.change_blur_type()
    ));
    PIPELINE_SETTINGS.forEach(property =>
        connect(settings.dash_to_dock, property, when_enabled(
            dash,
            () => dash.update_pipeline()
        ))
    );
    ['OVERRIDE_BACKGROUND', 'STYLE_DASH_TO_DOCK'].forEach(property =>
        connect(settings.dash_to_dock, property, when_enabled(
            dash,
            () => dash.update_background()
        ))
    );
    connect(settings.dash_to_dock, 'UNBLUR_IN_OVERVIEW', when_enabled(
        dash,
        () => dash.connect_to_overview()
    ));

    connect_toggle(extension, settings.applications, applications);
    connect(settings.applications, 'STATIC_BLUR', when_enabled(
        applications,
        () => applications.change_blur_type()
    ));
    PIPELINE_SETTINGS.forEach(property =>
        connect(settings.applications, property, when_enabled(
            applications,
            () => applications.change_pipeline()
        ))
    );
    ['CORNER_WHEN_MAXIMIZED', 'CORNER_RADIUS', 'ROUNDED_CORNERS'].forEach(property =>
        connect(settings.applications, property, when_enabled(
            applications,
            () => applications.update_all_corner_radii()
        ))
    );
    connect(settings.applications, 'OPACITY', when_enabled(
        applications,
        () => applications.set_opacity()
    ));
    connect(settings.applications, 'DYNAMIC_OPACITY', when_enabled(
        applications,
        () => applications.init_dynamic_opacity()
    ));
    connect(settings.applications, 'BLUR_ON_OVERVIEW', when_enabled(
        applications,
        () => applications.connect_to_overview()
    ));
    connect(settings.applications, 'UNBLUR_WHEN_FULLSCREEN', when_enabled(
        applications,
        () => applications.update_fullscreen_status()
    ));
    connect(settings.applications, 'BLUR_MENUS', when_enabled(
        applications,
        () => applications.update_menus()
    ));
    connect(settings.applications, 'MENU_CORNER_RADIUS', when_enabled(
        applications,
        () => applications.menus.update_corner_radius()
    ));
    connect(settings.applications, 'ENABLE_ALL', when_enabled(
        applications,
        () => applications.update_all_windows()
    ));
    connect(settings.applications, 'WHITELIST', when_enabled(
        applications,
        () => {
            if (!settings.applications.ENABLE_ALL)
                applications.update_all_windows();
        }
    ));
    connect(settings.applications, 'BLACKLIST', when_enabled(
        applications,
        () => {
            if (settings.applications.ENABLE_ALL)
                applications.update_all_windows();
        }
    ));

    connect(settings, 'POWER_SAVER', () => extension._update_power_saver());

    connect_toggle(extension, settings.lockscreen, lockscreen, false);
    PIPELINE_SETTINGS.forEach(property =>
        connect(settings.lockscreen, property, when_enabled(
            lockscreen,
            () => lockscreen.update_lockscreen()
        ))
    );

    connect_toggle(extension, settings.window_list, window_list);
    PIPELINE_SETTINGS.forEach(property =>
        connect(settings.window_list, property, when_enabled(
            window_list,
            () => window_list.update_pipeline()
        ))
    );

    connect_toggle(extension, settings.coverflow_alt_tab, coverflow);
    PIPELINE_SETTINGS.forEach(property =>
        connect(settings.coverflow_alt_tab, property, when_enabled(
            coverflow,
            () => coverflow.update_pipeline()
        ))
    );

    connect(settings.hidetopbar, 'COMPATIBILITY', when_enabled(
        panel,
        () => panel.connect_to_windows_and_overview()
    ));
    connect(settings.dash_to_panel, 'BLUR_ORIGINAL_PANEL', when_enabled(
        panel,
        () => panel.reset()
    ));

    connect_toggle(extension, settings.screenshot, screenshot);
    PIPELINE_SETTINGS.forEach(property =>
        connect(settings.screenshot, property, when_enabled(
            screenshot,
            () => screenshot.update_pipeline()
        ))
    );

    connect_toggle(extension, settings.popup, popup, false);
    ['STATIC_BLUR', ...POPUP_BLUR_SETTINGS].forEach(property =>
        connect(settings.popup, property, when_enabled(
            popup,
            () => popup.reset()
        ))
    );
    PIPELINE_SETTINGS.forEach(property =>
        connect(settings.popup, property, when_enabled(
            popup,
            () => popup.update_pipeline()
        ))
    );
    connect(settings.popup, 'BLUR_BEHIND_DIALOGS', when_enabled(
        popup,
        () => popup.update_dialog_backdrops()
    ));
    ['OVERRIDE_BACKGROUND', 'PRESERVE_SHELL_THEME', 'STYLE_POPUP'].forEach(property =>
        connect(settings.popup, property, when_enabled(
            popup,
            () => popup.update_background()
        ))
    );
}
