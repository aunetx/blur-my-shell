export const make_array = prefs_group => {
    let list_box = prefs_group
        .get_first_child()
        .get_last_child()
        .get_first_child();

    let elements = [];
    let i = 0;
    let element = list_box.get_row_at_index(i);
    while (element) {
        elements.push(element);
        i++;
        element = list_box.get_row_at_index(i);
    }

    return elements;
};

export class ProfilePipelineSettings {
    constructor(preferences) {
        this.preferences = preferences;
    }

    get PIPELINE() {
        return this.preferences.PROFILE_PIPELINE;
    }

    set PIPELINE(value) {
        this.preferences.PROFILE_PIPELINE = value;
    }

    PIPELINE_changed(callback) {
        return this.preferences.PROFILE_PIPELINE_changed(callback);
    }
}

export function watch_profile_visibility(preferences, rows) {
    const update_visibility = () => {
        const is_static = preferences.PROFILE_STATIC_BLUR;
        rows.always?.forEach(row => row.visible = true);
        rows.static_only?.forEach(row => row.visible = is_static);
        rows.dynamic_only?.forEach(row => row.visible = !is_static);
    };

    preferences.PROFILE_STATIC_BLUR_changed(update_visibility);
    update_visibility();
}

export function watch_surface_visibility(surface, rows) {
    const update_visibility = () => {
        const local = !(surface.USE_GLOBAL ?? false);
        const is_static = surface.STATIC_BLUR ?? false;
        rows.always?.forEach(row => row.visible = local);
        rows.static_only?.forEach(row => row.visible = local && is_static);
        rows.dynamic_only?.forEach(row => row.visible = local && !is_static);
        rows.surface_specific?.forEach(row => row.visible = true);
    };

    if ('USE_GLOBAL' in surface)
        surface.settings.connect('changed::use-global', update_visibility);
    surface.STATIC_BLUR_changed?.(update_visibility);
    update_visibility();
}
