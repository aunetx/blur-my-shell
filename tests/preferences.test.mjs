import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

// These mocks exercise settings synchronization and widget lifetime, not GTK
// rendering. Run a real GNOME preferences session for the visual acceptance test.
class Signals {
    constructor() { this.handlers = new Map(); this.nextId = 1; }
    connect(name, callback) {
        const id = this.nextId++;
        this.handlers.set(id, { name, callback });
        return id;
    }
    disconnect(id) {
        assert.ok(this.handlers.delete(id), 'connection should be disconnected once');
    }
    emit(name) {
        for (const { name: signal, callback } of [...this.handlers.values()])
            if (name === signal) callback();
    }
}
class Widget extends Signals {
    constructor(alpha = false) {
        super(); this.use_alpha = alpha;
        this.color = { red: 0, green: 0, blue: 0, alpha: 1 };
    }
    get_rgba() { return { ...this.color, copy() { return { ...this }; } }; }
    set_rgba(color) {
        this.color = { red: color.red, green: color.green, blue: color.blue, alpha: color.alpha };
    }
}
function component(styleKey) {
    let writes = 0;
    const state = {
        'custom-background-color': [0.4, 0.4, 0.4, 0.35],
        'custom-text-color': [1, 1, 1, 1],
        'custom-secondary-text-color': [1, 1, 1, 1],
        'custom-highlight-color': [1, 1, 1, 0.15],
        'custom-text-style': 0,
        'custom-highlight-style': 0,
        'custom-secondary-text-strength': 100,
    };
    const settings = new Signals();
    settings.bind = (key, widget, property) => {
        widget[property] = key in state ? state[key] : key === styleKey ? 2 : key === 'blur' ? true : 0.6;
    };
    const result = { settings, state, get writes() { return writes; } };
    for (const [property, key] of [['CUSTOM_BACKGROUND_COLOR', 'custom-background-color'],
        ['CUSTOM_TEXT_COLOR', 'custom-text-color'],
        ['CUSTOM_SECONDARY_TEXT_COLOR', 'custom-secondary-text-color'],
        ['CUSTOM_HIGHLIGHT_COLOR', 'custom-highlight-color']])
        Object.defineProperty(result, property, {
            get: () => state[key],
            set(value) { writes++; state[key] = value; settings.emit('changed::' + key); },
        });
    return result;
}

async function createPage() {
    const context = vm.createContext({ console });
    let template;
    const window = new Signals();
    class PreferencesPage {
        constructor() {
            for (const child of template.InternalChildren)
                this['_' + child] = new Widget(child.endsWith('background_color') || child.endsWith('secondary_color') || child.endsWith('highlight_color'));
            this._pipeline_choose_row.initialize = () => {};
        }
        vfunc_root() {}
        vfunc_unroot() {}
        get_root() { return window; }
    }
    const mocks = {
        'gi://Adw': { PreferencesPage },
        'gi://GLib': { UriFlags: { NONE: 0 }, uri_resolve_relative: () => 'test-ui' },
        'gi://GObject': { registerClass(metadata, cls) { template = metadata; return cls; } },
        'gi://Gio': { SettingsBindFlags: { DEFAULT: 0 } },
    };
    const source = await readFile(new URL('../src/preferences/overview.js', import.meta.url), 'utf8');
    const module = new vm.SourceTextModule(source, { context, initializeImportMeta(meta) { meta.url = 'file:///preferences/overview.js'; } });
    await module.link(async specifier => new vm.SyntheticModule(['default'], function () {
        this.setExport('default', mocks[specifier]);
    }, { context }));
    await module.evaluate();
    const preferences = { overview: component('style-components'), appfolder: component('style-dialogs') };
    return { page: new module.namespace.Overview(preferences, {}, {}), preferences, window };
}

test('custom controls follow the two independent dropdowns', async () => {
    const { page } = await createPage();
    assert.equal(page._overview_custom_background_row.visible, false);
    assert.equal(page._appfolder_custom_text_row.visible, false);
    page._overview_style_components.selected = 4;
    page._overview_style_components.emit('notify::selected');
    assert.equal(page._overview_custom_background_row.visible, true);
    assert.equal(page._overview_custom_text_style_row.visible, true);
    assert.equal(page._overview_custom_text_row.visible, false, 'Theme text is the default');
    page._overview_custom_text_style.selected = 1;
    page._overview_custom_text_style.emit('notify::selected');
    assert.equal(page._overview_custom_text_row.visible, true);
    assert.equal(page._overview_custom_secondary_color_row.visible, false);
    assert.equal(page._overview_custom_secondary_strength_row.visible, true);
    page._overview_custom_text_style.selected = 2;
    page._overview_custom_text_style.emit('notify::selected');
    assert.equal(page._overview_custom_secondary_color_row.visible, true);
    page._overview_custom_highlight_style.selected = 1;
    page._overview_custom_highlight_style.emit('notify::selected');
    assert.equal(page._overview_custom_highlight_color_row.visible, true);
    assert.equal(page._appfolder_custom_background_row.visible, false);
    page._overview_style_components.selected = 0;
    page._overview_style_components.emit('notify::selected');
    assert.equal(page._overview_custom_text_row.visible, false);
});

test('external changes update pickers without writing back; alpha stays on background only', async () => {
    const { page, preferences } = await createPage();
    page.vfunc_root();
    preferences.overview.CUSTOM_BACKGROUND_COLOR = [0.1, 0.2, 0.3, 0.4];
    assert.deepEqual(page._overview_custom_background_color.color, { red: 0.1, green: 0.2, blue: 0.3, alpha: 0.4 });
    assert.equal(preferences.overview.writes, 1);
    page._overview_custom_background_color.set_rgba({ red: 0.7, green: 0.6, blue: 0.5, alpha: 0.2 });
    page._overview_custom_background_color.emit('color-set');
    assert.deepEqual(Array.from(preferences.overview.CUSTOM_BACKGROUND_COLOR), [0.7, 0.6, 0.5, 0.2]);
    page._overview_custom_text_color.set_rgba({ red: 0.2, green: 0.3, blue: 0.4, alpha: 0.1 });
    page._overview_custom_text_color.emit('color-set');
    assert.deepEqual(Array.from(preferences.overview.CUSTOM_TEXT_COLOR), [0.2, 0.3, 0.4, 1]);
    preferences.overview.CUSTOM_SECONDARY_TEXT_COLOR = [0.1, 0.5, 0.8, 0.6];
    assert.deepEqual(page._overview_custom_secondary_color.color, { red: 0.1, green: 0.5, blue: 0.8, alpha: 0.6 });
    page._overview_custom_highlight_color.set_rgba({ red: 0, green: 1, blue: 0, alpha: 0.25 });
    page._overview_custom_highlight_color.emit('color-set');
    assert.deepEqual(Array.from(preferences.overview.CUSTOM_HIGHLIGHT_COLOR), [0, 1, 0, 0.25]);
    page.vfunc_unroot();
});

test('closing/unrooting releases settings signals and rerooting reconnects once', async () => {
    const { page, preferences, window } = await createPage();
    page.vfunc_root();
    assert.equal(preferences.overview.settings.handlers.size, 4);
    assert.equal(preferences.appfolder.settings.handlers.size, 4);
    window.emit('close-request');
    assert.equal(preferences.overview.settings.handlers.size, 0);
    page.vfunc_unroot();
    assert.equal(window.handlers.size, 0);
    preferences.appfolder.CUSTOM_BACKGROUND_COLOR = [0.2, 0.4, 0.6, 0.8];
    page.vfunc_root();
    assert.deepEqual(page._appfolder_custom_background_color.color, { red: 0.2, green: 0.4, blue: 0.6, alpha: 0.8 });
    assert.equal(preferences.appfolder.settings.handlers.size, 4);
    page.vfunc_unroot();
    assert.equal(preferences.appfolder.settings.handlers.size, 0);
});

test('out-of-range or non-finite external tuples cannot reach GTK as invalid values', async () => {
    const { page, preferences } = await createPage();
    page.vfunc_root();
    preferences.overview.CUSTOM_BACKGROUND_COLOR = [-1, 2, Number.NaN, Number.POSITIVE_INFINITY];
    assert.deepEqual(page._overview_custom_background_color.color, { red: 0, green: 1, blue: 0, alpha: 1 });
    page.vfunc_unroot();
});
