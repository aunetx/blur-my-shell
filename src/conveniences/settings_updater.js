import { Settings } from './settings.js';
import { KEYS, DEPRECATED_KEYS } from './keys.js';

const CURRENT_SETTINGS_VERSION = 3;

export function update_from_old_settings(gsettings) {
    const preferences = new Settings(KEYS, gsettings);
    const deprecated_preferences = new Settings(DEPRECATED_KEYS, gsettings);
    const old_version = preferences.settings.get_int('settings-version');

    if (old_version < CURRENT_SETTINGS_VERSION) {
        // set artifacts hacks to be 1 at most, as it should be suitable now that most big bugs have
        // been resolved (and especially because hack levels to 2 now means disabling clipped
        // redraws entirely, which is very much not what we want for users that update)
        if (preferences.HACKS_LEVEL > 1)
            preferences.HACKS_LEVEL = 1;

        // Legacy Dash to Dock users could have custom values that need to survive the refactor away
        // from the dedicated dash schema. Keep the values available to the popup-based dash handling,
        // while removing the old runtime DashBlur implementation from the active code base.
        try {
            const dash_settings = gsettings.get_child('dash-to-dock');
            const dash_customized = {
                BLUR: dash_settings.get_boolean('blur'),
                STATIC_BLUR: dash_settings.get_boolean('static-blur'),
                PIPELINE: dash_settings.get_string('pipeline'),
                SIGMA: dash_settings.get_int('sigma'),
                BRIGHTNESS: dash_settings.get_double('brightness'),
                OVERRIDE_BACKGROUND: dash_settings.get_boolean('override-background'),
                UNBLUR_IN_OVERVIEW: dash_settings.get_boolean('unblur-in-overview'),
                CORNER_RADIUS: dash_settings.get_int('corner-radius'),
            };

            if (dash_customized.BLUR)
                preferences.popup.BLUR = true;
            if (dash_customized.STATIC_BLUR)
                preferences.popup.STATIC_BLUR = true;
            if (dash_customized.PIPELINE && dash_customized.PIPELINE !== 'pipeline_default_rounded')
                preferences.popup.PIPELINE = dash_customized.PIPELINE;
            preferences.popup.SIGMA = dash_customized.SIGMA;
            preferences.popup.BRIGHTNESS = dash_customized.BRIGHTNESS;
            preferences.popup.DASH_CORNER_RADIUS = dash_customized.CORNER_RADIUS;
            preferences.popup.UNBLUR_IN_OVERVIEW_DASH = dash_customized.UNBLUR_IN_OVERVIEW;
            preferences.popup.OVERRIDE_BACKGROUND = dash_customized.OVERRIDE_BACKGROUND;
        } catch (e) {
            console.warn(`[Blur my Shell > settings updater] Could not migrate dash-to-dock settings: ${e}`);
        }

        // 'customize' has been removed: we merge the current used settings
        ['appfolder', 'panel', 'applications', 'window_list'].forEach(
            component_name => {
                const deprecated_component = deprecated_preferences[component_name];
                const new_component = preferences[component_name];
                if (!deprecated_component.CUSTOMIZE) {
                    new_component.SIGMA = deprecated_preferences.SIGMA;
                    new_component.BRIGHTNESS = deprecated_preferences.BRIGHTNESS;
                    new_component.CORNER_RADIUS = deprecated_preferences.CORNER_RADIUS;
                }
            });

        // remove old preferences in order not to clutter the gsettings
        deprecated_preferences.reset();
    }

    preferences.settings.set_int('settings-version', CURRENT_SETTINGS_VERSION);
}
