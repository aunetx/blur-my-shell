import GLib from 'gi://GLib';

export const IS_IN_PREFERENCES = typeof global === 'undefined';

// Taken from https://github.com/Schneegans/Burn-My-Windows/blob/main/src/utils.js
// This method can be used to import a module in the GNOME Shell process only. This
// is useful if you want to use a module in extension.js, but not in the preferences
// process. This method returns null if it is called in the preferences process.
export async function import_in_shell_only(module) {
    if (IS_IN_PREFERENCES)
        return null;
    return (await import(module)).default;
}

// In use for the effects, to prevent boilerplate code
export function setup_params(outer_this, params) {
    // setup each parameter, either with the given or the default value
    for (const params_name in outer_this.constructor.default_params) {
        outer_this["_" + params_name] = null;
        outer_this[params_name] = params_name in params ?
            params[params_name] :
            outer_this.constructor.default_params[params_name];
    }
};

export const get_shader_source = (Shell, shader_filename, self_uri) => {
    if (!Shell)
        return;
    const shader_path = GLib.filename_from_uri(
        GLib.uri_resolve_relative(self_uri, shader_filename, GLib.UriFlags.NONE)
    )[0];
    try {
        return Shell.get_file_contents_utf8_sync(shader_path);
    } catch (e) {
        console.warn(`[Blur my Shell > effect]       error loading shader from ${shader_path}: ${e}`);
        return null;
    }
};