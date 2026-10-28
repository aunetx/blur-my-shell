import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';


/// The components that pick a pipeline, with the names the preferences show for them.
function get_pipeline_components(preferences) {
    return [
        ['panel', _('Panel')],
        ['dash_to_dock', _('Dock')],
        ['popup', _('Popups')],
        ['overview', _('Overview')],
        ['appfolder', _('App folders')],
        ['lockscreen', _('Lock screen')],
        ['screenshot', _('Screenshot')],
        ['window_list', _('Window List')],
        ['coverflow_alt_tab', _('Coverflow Alt-Tab')],
        ['applications', _('Applications')],
    ].map(([key, name]) => ({ component: preferences[key], name }));
}

export function get_pipeline_users(preferences, pipeline_id) {
    return get_pipeline_components(preferences)
        .filter(({ component }) => component.PIPELINE === pipeline_id);
}
