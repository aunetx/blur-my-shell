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

export function shader_uses_snippet_api(Clutter) {
    // Runtime detection: GNOME 51+ mutter exposes new_with_snippet and drops
    // set_shader_source. GNOME 46–50 only have the legacy shader-source path.
    return typeof Clutter?.ShaderEffect?.new_with_snippet === 'function';
}

export function subpixel_stage_offset(Clutter) {
    return shader_uses_snippet_api(Clutter) ? 0 : 0.5;
}

export function static_blur_clip_inset(Clutter) {
    return shader_uses_snippet_api(Clutter) ? 1 : 0;
}

export function shader_effect_super_args(source, Clutter) {
    if (shader_uses_snippet_api(Clutter) || !source)
        return {};
    return { shader: source };
}

const _shader_snippets = new Map();

function get_or_create_shader_snippet(key, Cogl, source) {
    if (!_shader_snippets.has(key)) {
        const snippet = create_fragment_shader_snippet(Cogl, source);
        if (!snippet)
            console.warn(`[Blur my Shell > effect]       could not create shader snippet for ${key}`);
        _shader_snippets.set(key, snippet);
    }
    return _shader_snippets.get(key) ?? null;
}

const _snippet_shader_bases = new Map();

export function get_shader_effect_base(Clutter, Cogl, gtype, source) {
    if (!shader_uses_snippet_api(Clutter))
        return Clutter.ShaderEffect;

    if (_snippet_shader_bases.has(gtype))
        return _snippet_shader_bases.get(gtype);

    const Base = GObject.registerClass({
        GTypeName: `BmsSnippet${gtype}`,
    }, class BmsSnippetShaderEffect extends Clutter.ShaderEffect {
        vfunc_get_static_snippet() {
            return get_or_create_shader_snippet(gtype, Cogl, source);
        }
    });

    _snippet_shader_bases.set(gtype, Base);
    return Base;
}

export function register_shader_effect(meta, effect_class, _Cogl, _source, _Clutter) {
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

export function create_fragment_shader_snippet(Cogl, source) {
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
            parts.declarations,
            null
        );
        snippet.set_replace(parts.body);
        return snippet;
    } catch (e) {
        console.warn(`[Blur my Shell > effect]       could not create shader snippet: ${e}`);
        return null;
    }
}

export function bind_shader_source(effect, source, Clutter) {
    if (!source || !effect || effect._bms_shader_bound || shader_uses_snippet_api(Clutter))
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

export function initialize_shader_effect(effect, source, Clutter) {
    if (!source || !effect || effect._bms_shader_bound)
        return;

    if (shader_uses_snippet_api(Clutter)) {
        bind_shader_texture_unit(effect);
        effect._bms_shader_bound = true;
        return;
    }

    bind_shader_source(effect, source, Clutter);
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
