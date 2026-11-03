import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';


/// The components that pick a pipeline, with the names the preferences show for them.
function get_pipeline_components(preferences) {
    return [
        ['panel', _('Panel'), [
            ['PIPELINE_LIGHT', _('Panel (Light mode)')],
            ['PIPELINE_DARK', _('Panel (Dark mode)')],
        ]],
        ['dash_to_dock', _('Dock'), [
            ['PIPELINE_LIGHT', _('Dock (Light mode)')],
            ['PIPELINE_DARK', _('Dock (Dark mode)')],
        ]],
        ['popup', _('Popups'), [
            ['PIPELINE_LIGHT', _('Popups (Light mode)')],
            ['PIPELINE_DARK', _('Popups (Dark mode)')],
        ]],
        ['overview', _('Overview'), [
            ['PIPELINE_LIGHT', _('Overview (Light mode)')],
            ['PIPELINE_DARK', _('Overview (Dark mode)')],
        ]],
        ['appfolder', _('App folders'), [
            ['PIPELINE_LIGHT', _('App folders (Light mode)')],
            ['PIPELINE_DARK', _('App folders (Dark mode)')],
        ]],
        ['lockscreen', _('Lock screen'), [
            ['PIPELINE_LIGHT', _('Lock screen (Light mode)')],
            ['PIPELINE_DARK', _('Lock screen (Dark mode)')],
        ]],
        ['screenshot', _('Screenshot'), [
            ['PIPELINE_LIGHT', _('Screenshot (Light mode)')],
            ['PIPELINE_DARK', _('Screenshot (Dark mode)')],
        ]],
        ['window_list', _('Window List'), [
            ['PIPELINE_LIGHT', _('Window List (Light mode)')],
            ['PIPELINE_DARK', _('Window List (Dark mode)')],
        ]],
        ['coverflow_alt_tab', _('Coverflow Alt-Tab'), [
            ['PIPELINE_LIGHT', _('Coverflow Alt-Tab (Light mode)')],
            ['PIPELINE_DARK', _('Coverflow Alt-Tab (Dark mode)')],
        ]],
        ['applications', _('Applications'), [
            ['PIPELINE_LIGHT', _('Applications (Light mode)')],
            ['PIPELINE_DARK', _('Applications (Dark mode)')],
        ]],
    ].map(([key, name, additional_pipelines = []]) => ({
        component: preferences[key],
        pipelines: [
            ['PIPELINE', name],
            ...additional_pipelines,
        ],
    }));
}

export function get_pipeline_users(preferences, pipeline_id) {
    return get_pipeline_components(preferences)
        .flatMap(({ component, pipelines }) => pipelines
            .filter(([property]) => component[property] === pipeline_id)
            .map(([property, name]) => ({ component, property, name })));
}
