import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

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
    try {
        const imported = await import(module);
        return imported.default ?? imported;
    } catch (e) {
        return null;
    }
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
    try {
        return Shell.get_file_contents_utf8_sync(shader_path);
    } catch (e) {
        console.warn(`[Blur my Shell > effect]       error loading shader from ${shader_path}: ${e}`);
        return null;
    }
};

export function register_shader_effect(meta, effect_class) {
    return GObject.registerClass(meta, effect_class);
}

function split_fragment_shader(source) {
    const main_index = source.search(/void\s+main\s*(?:\(\s*(?:void)?\s*\))?\s*\{/);
    if (main_index < 0)
        return null;

    const declarations = source.slice(0, main_index).trim();
    const brace_index = source.indexOf('{', main_index);
    if (brace_index < 0)
        return null;

    let depth = 0;
    for (let i = brace_index; i < source.length; i++) {
        if (source[i] === '{')
            depth++;
        else if (source[i] === '}') {
            depth--;
            if (depth === 0) {
                return {
                    declarations,
                    body: source.slice(brace_index + 1, i).trim(),
                };
            }
        }
    }

    return null;
}

function create_fragment_shader_snippet(source) {
    if (!Cogl || !source)
        return null;

    const parts = split_fragment_shader(source);
    if (!parts) {
        console.warn('[Blur my Shell > effect]       could not split shader source');
        return null;
    }

    try {
        const snippet = Cogl.Snippet.new(
            Cogl.SnippetHook.FRAGMENT,
            `${parts.declarations}\nvoid bms_fragment() {\n${parts.body}\n}`,
            null
        );
        snippet.set_replace('bms_fragment(); cogl_color_out *= cogl_color_in.a;');
        return snippet;
    } catch (e) {
        console.warn(`[Blur my Shell > effect]       could not create shader snippet: ${e}`);
        return null;
    }
}

export function initialize_shader_effect(effect, source) {
    if (!source || !effect)
        return;
    if (!SHADER_SNIPPETS.has(source))
        SHADER_SNIPPETS.set(source, create_fragment_shader_snippet(source));
    effect.surfaceSnippet = SHADER_SNIPPETS.get(source);
}
