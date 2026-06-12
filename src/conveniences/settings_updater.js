import { Settings } from './settings.js';
import { KEYS, DEPRECATED_KEYS } from './keys.js';

const CURRENT_SETTINGS_VERSION = 6;
const REMOVED_ROUNDED_PIPELINE = 'pipeline_default_rounded';
const GLOBAL_PROFILE_COMPONENTS = [
    ['panel', 'panel'],
    ['dash-to-dock', 'dash_to_dock'],
    ['applications', 'applications'],
    ['window-list', 'window_list'],
    ['popup', 'popup'],
];
const GLOBAL_PROFILE_LOCAL_KEYS = {
    'panel': ['static-blur', 'pipeline', 'override-background', 'style-panel'],
    'dash-to-dock': ['static-blur', 'pipeline', 'override-background', 'style-dash-to-dock'],
    'applications': ['static-blur', 'pipeline'],
    'window-list': ['pipeline'],
    'popup': ['static-blur', 'pipeline', 'override-background', 'style-popup'],
};
const COMPONENTS_WITH_PIPELINES = [
    'overview',
    'panel',
    'dash_to_dock',
    'applications',
    'lockscreen',
    'window_list',
    'coverflow_alt_tab',
    'screenshot',
    'popup',
];

export function update_from_old_settings(gsettings) {
    const preferences = new Settings(KEYS, gsettings);
    const deprecated_preferences = new Settings(DEPRECATED_KEYS, gsettings);
    const old_version = preferences.settings.get_int('settings-version');

    if (old_version < 2) {
        preferences.dash_to_dock.BLUR = true;
        preferences.dash_to_dock.STATIC_BLUR = true;
        preferences.dash_to_dock.STYLE_DASH_TO_DOCK = 0;
        preferences.dash_to_panel.BLUR_ORIGINAL_PANEL = true;

        // 'customize' has been removed: we merge the current used settings
        ['appfolder', 'panel', 'dash_to_dock', 'applications', 'window_list'].forEach(
            component_name => {
                const deprecated_component = deprecated_preferences[component_name];
                const new_component = preferences[component_name];
                if (!deprecated_component.CUSTOMIZE) {
                    new_component.SIGMA = deprecated_preferences.SIGMA;
                    new_component.BRIGHTNESS = deprecated_preferences.BRIGHTNESS;
                    if ('CORNER_RADIUS' in new_component)
                        new_component.CORNER_RADIUS = deprecated_preferences.CORNER_RADIUS;
                }
            });

        // remove old preferences in order not to clutter the gsettings
        deprecated_preferences.reset();
    }

    if (old_version < 3)
        GLOBAL_PROFILE_COMPONENTS.forEach(([settings_name, component_name]) => {
            const component_settings = gsettings.get_child(settings_name);
            if (component_settings.get_user_value('use-global'))
                return;

            preferences[component_name].USE_GLOBAL =
                !has_local_profile_values(component_settings, settings_name);
        });

    if (old_version < 5) {
        if (preferences.PROFILE_PIPELINE === REMOVED_ROUNDED_PIPELINE)
            preferences.PROFILE_PIPELINE = 'pipeline_default';

        COMPONENTS_WITH_PIPELINES.forEach(component_name => {
            const component = preferences[component_name];
            if (component?.PIPELINE === REMOVED_ROUNDED_PIPELINE)
                component.PIPELINE = 'pipeline_default';
        });

        const pipelines = { ...preferences.PIPELINES };
        delete pipelines[REMOVED_ROUNDED_PIPELINE];
        preferences.PIPELINES = pipelines;
    }

    if (old_version < 6) {
        let disable_clipped_redraws = false;
        if (gsettings.settings_schema.has_key('hacks-level'))
            disable_clipped_redraws = gsettings.get_int('hacks-level') === 2;

        preferences.DISABLE_CLIPPED_REDRAWS = disable_clipped_redraws;
    }

    preferences.settings.set_int('settings-version', CURRENT_SETTINGS_VERSION);
}

function has_local_profile_values(component_settings, settings_name) {
    return (GLOBAL_PROFILE_LOCAL_KEYS[settings_name] ?? [])
        .some(key => component_settings.get_user_value(key) !== null);
}
