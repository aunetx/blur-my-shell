import GLib from 'gi://GLib';
import { ANTIALIASING_SOURCE } from '../render/shader_antialiasing.js';
import { SURFACE_SAMPLING_SOURCE } from '../render/texture_region.js';

export const IS_IN_PREFERENCES = typeof global === 'undefined';

export function clamp(value, minimum, maximum, fallback = minimum) {
    const number = Number(value);
    if (!Number.isFinite(number))
        return fallback;
    return Math.max(minimum, Math.min(maximum, number));
}

export function clamp_integer(value, minimum, maximum, fallback = minimum) {
    const number = Number(value);
    if (!Number.isFinite(number))
        return fallback;
    return Math.max(minimum, Math.min(maximum, Math.trunc(number)));
}

// Taken from https://github.com/Schneegans/Burn-My-Windows/blob/main/src/utils.js
// This method can be used to import a module in the GNOME Shell process only. This
// is useful if you want to use a module in extension.js, but not in the preferences
// process. This method returns null if it is called in the preferences process.
export async function import_in_shell_only(module) {
    if (IS_IN_PREFERENCES)
        return null;
    return (await import(module)).default;
}

const Cogl = await import_in_shell_only('gi://Cogl');
export const ShaderEffect = IS_IN_PREFERENCES ? null
    : (await import('../render/shader_effect.js')).SurfaceShaderEffect;
const SHADER_SNIPPETS = new Map();

// In use for the effects, to prevent boilerplate code
export function setup_params(outer_this, params) {
    params ??= {};
    const parameterNames = Object.keys(outer_this.constructor.default_params);
    for (const params_name of parameterNames)
        outer_this["_" + params_name] = null;

    for (const params_name of parameterNames) {
        outer_this[params_name] = Object.hasOwn(params, params_name) ?
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
    return Shell.get_file_contents_utf8_sync(shader_path);
};

/// Splits a fragment shader into its declarations and the body of its `main` function.
function split_fragment_shader(source) {
    const main_index = source.search(/void\s+main\s*(?:\(\s*(?:void)?\s*\))?\s*\{/);
    const brace_index = source.indexOf('{', main_index);

    let depth = 0;
    let end_index = brace_index;
    do {
        if (source[end_index] === '{')
            depth++;
        else if (source[end_index] === '}')
            depth--;
        end_index++;
    } while (depth > 0);

    return {
        declarations: source.slice(0, main_index).trim(),
        body: source.slice(brace_index + 1, end_index - 1).trim(),
    };
}

function create_fragment_shader_snippet(source) {
    const { declarations, body } = split_fragment_shader(source);
    const antialiasing = source.includes('bms_antialias_width(') ? ANTIALIASING_SOURCE : '';
    const sampling = source.includes('bms_texture2D(') ? SURFACE_SAMPLING_SOURCE : '';
    const snippet = Cogl.Snippet.new(
        Cogl.SnippetHook.FRAGMENT,
        `${antialiasing}\n${sampling}\n${declarations}\nvoid bms_fragment() {\n${body}\n}`,
        null
    );
    snippet.set_replace('bms_fragment(); cogl_color_out *= cogl_color_in.a;');
    return snippet;
}

export function initialize_shader_effect(effect, source) {
    if (!source)
        return;
    if (!SHADER_SNIPPETS.has(source))
        SHADER_SNIPPETS.set(source, create_fragment_shader_snippet(source));
    effect.surfaceSnippet = SHADER_SNIPPETS.get(source);
}
