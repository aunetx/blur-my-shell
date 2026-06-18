import GLib from 'gi://GLib';

export const IS_IN_PREFERENCES = typeof global === 'undefined';

// Taken from https://github.com/Schneegans/Burn-My-Windows/blob/main/src/utils.js
// This method can be used to import a module in the GNOME Shell process only. This
// is useful if you want to use a module in extension.js, but not in the preferences
// process. This method returns null if it is called in the preferences process.
export async function import_in_shell_only(module) {
    if (IS_IN_PREFERENCES)
        return null;
    try {
        return (await import(module)).default;
    } catch (e) {
        return null;
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

function parse_glsl_shader(source) {
    const main_index = source.search(/void\s+main\s*\([^)]*\)\s*\{/);
    if (main_index < 0)
        throw new Error('Could not find main() in GLSL shader');

    const brace_start = source.indexOf('{', main_index);
    let depth = 0;
    let brace_end = -1;

    for (let i = brace_start; i < source.length; i++) {
        if (source[i] === '{')
            depth++;
        else if (source[i] === '}') {
            depth--;
            if (depth === 0) {
                brace_end = i;
                break;
            }
        }
    }

    if (brace_end < 0)
        throw new Error('Could not parse main() body in GLSL shader');

    return {
        declarations: source.slice(0, main_index).trim(),
        body: source.slice(brace_start + 1, brace_end).trim(),
    };
}

function create_shader_snippet(Cogl, source) {
    const { declarations, body } = parse_glsl_shader(source);
    const snippet = Cogl.Snippet.new(Cogl.SnippetHook.FRAGMENT, declarations, null);
    snippet.set_replace(body);
    return snippet;
}

export function create_shader_snippet_for_source(Clutter, Cogl, source) {
    if (
        !source
        || !Clutter
        || !Cogl?.Snippet
        || !uses_shader_snippets(Clutter)
    )
        return null;

    try {
        return create_shader_snippet(Cogl, source);
    } catch (e) {
        console.warn('[Blur my Shell > effect] error creating shader snippet:', e);
        return null;
    }
}

export function uses_shader_snippets(Clutter) {
    return Clutter && typeof Clutter.ShaderEffect.prototype.set_shader_source !== 'function';
}