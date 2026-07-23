import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

export const IS_IN_PREFERENCES = typeof global === 'undefined';

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

const Clutter = await import_in_shell_only('gi://Clutter');

export function is_usable_blur_module(ns) {
    if (!ns)
        return false;
    try {
        const { BlurEffect } = ns;
        if (typeof BlurEffect !== 'function' || !BlurEffect.$gtype)
            return false;
        GObject.type_name(BlurEffect.$gtype);
        return true;
    } catch (e) {
        return false;
    }
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

export function shader_uses_snippet_api() {
    // Runtime detection: GNOME 51+ mutter exposes new_with_snippet and drops
    // set_shader_source. GNOME 46–50 only have the legacy shader-source path.
    return typeof Clutter?.ShaderEffect?.new_with_snippet === 'function';
}

export function subpixel_stage_offset() {
    return shader_uses_snippet_api() ? 0 : 0.5;
}

export function static_blur_clip_inset() {
    return shader_uses_snippet_api() ? 1 : 0;
}

const _shader_snippets = new Map();

// `get_static_snippet` is an optional vfunc; GJS only wires it up if every
// leaf effect class declares `vfunc_get_static_snippet()` itself (not
// inherited). This just gets/builds the cached snippet for that class.
export function get_or_create_shader_snippet(key, Cogl, source) {
    if (_shader_snippets.has(key))
        return _shader_snippets.get(key);

    const snippet = create_fragment_shader_snippet(Cogl, source);
    if (!snippet) {
        console.warn(`[Blur my Shell > effect]       could not create shader snippet for ${key}`);
        return null;
    }

    _shader_snippets.set(key, snippet);
    return snippet;
}

export function register_shader_effect(meta, effect_class) {
    if (shader_uses_snippet_api() && typeof effect_class.prototype.vfunc_get_static_snippet !== 'function')
        console.warn(`[Blur my Shell > effect]       ${meta.GTypeName} is missing its own vfunc_get_static_snippet() override, the shader will never be applied`);

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

function adapt_glsl_bool_usages(source, bool_names) {
    let adapted = source;

    for (const name of bool_names) {
        adapted = adapted.replace(
            new RegExp(`\\bif\\s*\\(\\s*${name}\\s*\\)`, 'g'),
            `if (${name} != 0)`
        );
        adapted = adapted.replace(
            new RegExp(`\\b${name}\\s*\\?`, 'g'),
            `${name} != 0 ?`
        );
        adapted = adapted.replace(
            new RegExp(`\\b${name}\\s*&&`, 'g'),
            `${name} != 0 &&`
        );
        adapted = adapted.replace(
            new RegExp(`&&\\s*${name}\\b`, 'g'),
            `&& ${name} != 0`
        );
        adapted = adapted.replace(
            new RegExp(`\\|\\|\\s*${name}\\b`, 'g'),
            `|| ${name} != 0`
        );
        adapted = adapted.replace(
            new RegExp(`!${name}\\b`, 'g'),
            `${name} == 0`
        );
    }

    return adapted;
}

function adapt_bool_uniforms_for_snippet(declarations, body) {
    const bool_names = [...declarations.matchAll(/uniform bool (\w+);/g)].map(match => match[1]);
    if (!bool_names.length)
        return { declarations, body };

    const adapted_declarations = adapt_glsl_bool_usages(
        declarations.replace(/uniform bool (\w+);/g, 'uniform int $1;'),
        bool_names
    );
    const adapted_body = adapt_glsl_bool_usages(body, bool_names);

    return { declarations: adapted_declarations, body: adapted_body };
}

export function create_fragment_shader_snippet(Cogl, source) {
    if (!Cogl || !source)
        return null;

    const parts = split_fragment_shader(source);
    if (!parts) {
        console.warn('[Blur my Shell > effect]       could not split shader source');
        return null;
    }

    try {
        const { declarations, body } = adapt_bool_uniforms_for_snippet(
            parts.declarations,
            parts.body
        );
        const snippet = Cogl.Snippet.new(
            Cogl.SnippetHook.FRAGMENT,
            declarations,
            null
        );
        snippet.set_replace(body);
        return snippet;
    } catch (e) {
        console.warn(`[Blur my Shell > effect]       could not create shader snippet: ${e}`);
        return null;
    }
}

export function bind_shader_source(effect, source) {
    if (!source || !effect || effect._bms_shader_bound || shader_uses_snippet_api())
        return;

    try {
        if (typeof effect.set_shader_source === 'function') {
            effect.set_shader_source(source);
            effect._bms_shader_bound = true;
            return;
        }

        const set_shader_source = Clutter?.ShaderEffect?.prototype?.set_shader_source;
        if (typeof set_shader_source === 'function') {
            set_shader_source.call(effect, source);
            effect._bms_shader_bound = true;
        }
    } catch (e) {
        console.warn(`[Blur my Shell > effect]       set_shader_source failed: ${e}`);
    }
}

export function initialize_shader_effect(effect, source) {
    if (!source || !effect || effect._bms_shader_bound)
        return;

    if (shader_uses_snippet_api()) {
        bind_shader_texture_unit(effect);
        effect._bms_shader_bound = true;
        return;
    }

    bind_shader_source(effect, source);
}

function bind_shader_texture_unit(effect) {
    if (effect._bms_tex_uniform_bound)
        return;

    try {
        if (typeof effect.set_uniform === 'function') {
            effect.set_uniform('tex', GObject.TYPE_INT, 1, 0);
            effect._bms_tex_uniform_bound = true;
            return;
        }

        const int_value = new GObject.Value();
        int_value.init(GObject.TYPE_INT);
        int_value.set_int(0);
        effect.set_uniform_value('tex', int_value);
        effect._bms_tex_uniform_bound = true;
    } catch (e) {
        console.warn(`[Blur my Shell > effect]       could not bind tex uniform: ${e}`);
    }
}
