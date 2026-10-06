import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';

async function harness() {
    const files = new Map();
    const directories = new Set();
    const warnings = [];
    const signals = new Map();
    let nextId = 1;
    let tempSerial = 0;
    const context = {
        theme: null,
        get_theme() { return this.theme; },
        connect(name, callback) {
            assert.equal(name, 'changed');
            const id = nextId++; signals.set(id, callback); return id;
        },
        disconnect(id) { assert.ok(signals.delete(id)); },
        notify() { for (const callback of [...signals.values()]) callback(); },
    };
    function theme() {
        return {
            loaded: new Set(), loads: 0, fail: false,
            load_stylesheet(file) {
                if (this.fail) throw new Error('simulated stylesheet load failure');
                assert.ok(files.has(file.get_path()));
                this.loaded.add(file.get_path()); this.loads++;
                context.notify(); // Loading can notify the theme context.
            },
            unload_stylesheet(file) { this.loaded.delete(file.get_path()); context.notify(); },
        };
    }
    context.theme = theme();
    const templates = {};
    for (const kind of ['overview', 'appfolders'])
        templates[`custom-${kind}.css`] = await readFile(new URL(`../src/styles/custom-${kind}.css`, import.meta.url), 'utf8');
    function file(filename) {
        return {
            get_path: () => filename,
            delete() {
                if (directories.has(filename)) {
                    assert.equal([...files.keys()].some(key => key.startsWith(filename + '/')), false);
                    directories.delete(filename);
                } else assert.ok(files.delete(filename));
            },
        };
    }
    const globals = vm.createContext({
        TextDecoder, console: { warn: message => warnings.push(message) },
        global: { stage: {}, blur_my_shell: { dir: {
            get_child(name) {
                assert.equal(name, 'styles');
                return { get_child(name) { return { load_contents: () => [true, Buffer.from(templates[name])] }; } };
            },
        } } },
    });
    const modules = new Map();
    const mocks = {
        'gi://Gio': { File: { new_for_path: file } },
        'gi://GLib': {
            dir_make_tmp() { const name = '/mock/temp-' + ++tempSerial; directories.add(name); return name; },
            build_filenamev: names => path.join(...names),
            file_set_contents(filename, contents) { files.set(filename, contents); return true; },
        },
        'gi://St': { ThemeContext: { get_for_stage: () => context } },
    };
    const colorSource = await readFile(new URL('../src/conveniences/custom_colors.js', import.meta.url), 'utf8');
    const colorModule = new vm.SourceTextModule(colorSource, { context: globals });
    await colorModule.link(() => { throw new Error('Unexpected dependency'); });
    const source = await readFile(new URL('../src/conveniences/custom_style.js', import.meta.url), 'utf8');
    const module = new vm.SourceTextModule(source, { context: globals });
    await module.link(async specifier => {
        if (specifier === './custom_colors.js') return colorModule;
        if (!modules.has(specifier))
            modules.set(specifier, new vm.SyntheticModule(['default'], function () {
                assert.ok(mocks[specifier], 'only documented GI imports');
                this.setExport('default', mocks[specifier]);
            }, { context: globals }));
        return modules.get(specifier);
    });
    await module.evaluate();
    return { CustomStyle: module.namespace.CustomStyle, files, directories, signals, context, theme, warnings };
}

test('settings changes replace rather than accumulate stylesheets; clear is idempotent', async () => {
    const h = await harness();
    const style = new h.CustomStyle('overview');
    const originalTheme = h.context.theme;
    assert.equal(style.update([0, 0, 0, 0.3], [1, 1, 1, 1]), true);
    assert.equal(style.update([0, 0, 0, 0.3], [1, 1, 1, 1]), true);
    assert.equal(originalTheme.loads, 1, 'identical settings should not rewrite files');
    for (let i = 1; i <= 100; i++)
        assert.equal(style.update([i / 100, 0.4, 0.2, 0.3], [1, 1, 1, 1]), true);
    assert.equal(h.files.size, 1);
    assert.equal(h.directories.size, 1);
    assert.equal(originalTheme.loaded.size, 1);
    assert.equal(h.signals.size, 1);
    style.clear(); style.clear();
    assert.equal(h.files.size, 0); assert.equal(h.directories.size, 0);
    assert.equal(originalTheme.loaded.size, 0); assert.equal(h.signals.size, 0);
    assert.equal(h.warnings.length, 0);
});

test('theme replacement reloads custom CSS without reentrant reload loops', async () => {
    const h = await harness();
    const style = new h.CustomStyle('appfolders');
    style.update([0, 0, 1, 0.4], [1, 1, 1, 1]);
    const old = h.context.theme;
    h.context.theme = h.theme();
    h.context.notify();
    assert.equal(old.loaded.size, 0);
    assert.equal(h.context.theme.loaded.size, 1);
    assert.equal(h.context.theme.loads, 1);
    style.clear();
    assert.equal(h.context.theme.loaded.size, 0);
});

test('initial load failure cleans all resources; failed color update preserves old style', async () => {
    const h = await harness();
    const style = new h.CustomStyle('overview');
    h.context.theme.fail = true;
    assert.equal(style.update([0, 0, 0, 0.4], [1, 1, 1, 1]), false);
    assert.equal(h.files.size, 0); assert.equal(h.directories.size, 0); assert.equal(h.signals.size, 0);
    h.context.theme.fail = false;
    assert.equal(style.update([0, 0, 0, 0.4], [1, 1, 1, 1]), true);
    const original = [...h.files.entries()];
    h.context.theme.fail = true;
    assert.equal(style.update([1, 0, 0, 0.4], [1, 1, 1, 1]), true);
    assert.deepEqual([...h.files.entries()], original);
    assert.equal(h.context.theme.loaded.size, 1);
    style.clear();
    assert.equal(h.files.size, 0); assert.equal(h.directories.size, 0);
});

test('overview and folder style instances have independent lifetimes', async () => {
    const h = await harness();
    assert.throws(() => new h.CustomStyle('popup'), /Unknown custom style/);
    const overview = new h.CustomStyle('overview');
    const folder = new h.CustomStyle('appfolders');
    overview.update([1, 0, 0, 0.4], [1, 1, 1, 1]);
    folder.update([0, 0, 1, 0.4], [0, 0, 0, 1]);
    assert.equal(h.context.theme.loaded.size, 2);
    overview.clear();
    assert.equal(h.context.theme.loaded.size, 1);
    assert.equal(h.files.size, 1);
    assert.match([...h.files.values()][0], /appfolder-dialogs-custom/);
    folder.clear();
    assert.equal(h.files.size, 0); assert.equal(h.signals.size, 0);
});

test('live text mode changes remove overrides without reloading blur or retaining stale sheets', async () => {
    const h = await harness();
    const style = new h.CustomStyle('overview');
    style.update([0, 0, 0, 0.3], [1, 0, 0, 1], { textStyle: 1 });
    assert.match([...h.files.values()][0], /color: rgba\(255, 0, 0, 0.63\)/);
    style.update([0, 0, 0, 0.3], [1, 0, 0, 1], {
        textStyle: 2, secondary: [0, 1, 0, 1], highlightStyle: 1, highlight: [0, 0, 1, 0.3],
    });
    assert.match([...h.files.values()][0], /color: rgba\(0, 255, 0, 0.63\)/);
    assert.equal(h.context.theme.loaded.size, 1);
    style.update([0, 0, 0, 0.3], [1, 0, 0, 1], { textStyle: 0 });
    assert.doesNotMatch([...h.files.values()][0], /(?:^|[;{])\s*color\s*:/);
    const loads = h.context.theme.loads;
    style.update([0, 0, 0, 0.3], [0, 1, 0, 1], { textStyle: 0 });
    assert.equal(h.context.theme.loads, loads, 'hidden foreground changes cannot rewrite theme-mode CSS');
    assert.equal(h.files.size, 1);
    style.clear();
    assert.equal(h.files.size, 0);
    assert.equal(h.signals.size, 0);
});
