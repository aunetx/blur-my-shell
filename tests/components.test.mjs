import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

class Actor {
    constructor() { this.classes = new Set(['another-extension-class']); }
    add_style_class_name(name) { this.classes.add(name); }
    remove_style_class_name(name) { this.classes.delete(name); }
    remove_all_children() {}
    get_parent() { return null; }
    get_effect() { return null; }
    remove_effect_by_name() {}
    remove_transition() {}
}
async function loadComponents() {
    const folder = () => ({ _dialog: Object.assign(new Actor(), { _viewBox: new Actor() }) });
    const appDisplay = Object.assign(new Actor(), { _folderIcons: [folder(), { _dialog: null }], _folderIconsLoaded: false });
    const Main = {
        uiGroup: new Actor(),
        layoutManager: { overviewGroup: new Actor() },
        overview: { _overview: { controls: { _appDisplay: appDisplay } } },
    };
    class CustomStyle {
        constructor(kind) { this.kind = kind; this.loaded = false; this.fail = false; this.updates = 0; }
        update(background, text, options) { this.options = options; this.updates++; if (!this.fail) this.loaded = true; return this.loaded; }
        clear() { this.loaded = false; }
    }
    const mocks = {
        'gi://Meta': { BackgroundGroup: Actor },
        'gi://Clutter': { Color: { from_pixel: () => ({}) } },
        'gi://Cogl': {}, 'gi://Shell': {},
        'resource:///org/gnome/shell/ui/main.js': Main,
        'resource:///org/gnome/shell/ui/workspaceAnimation.js': { WorkspaceAnimationController: class {} },
        '../conveniences/pipeline.js': { Pipeline: class {} },
        '../conveniences/custom_style.js': { CustomStyle },
        '../conveniences/custom_colors.js': { customStyleOptions: component => ({
            textStyle: component.CUSTOM_TEXT_STYLE ?? 0,
            secondaryStrength: component.CUSTOM_SECONDARY_TEXT_STRENGTH ?? 100,
            highlightStyle: component.CUSTOM_HIGHLIGHT_STYLE ?? 0,
        }) },
        '../conveniences/paint_signals.js': { PaintSignals: class { disconnect_all() {} } },
    };
    const context = vm.createContext({ console });
    async function load(name) {
        const source = await readFile(new URL(`../src/components/${name}.js`, import.meta.url), 'utf8');
        const module = new vm.SourceTextModule(source, { context });
        await module.link(specifier => {
            const values = mocks[specifier];
            assert.ok(values, specifier);
            const names = specifier.startsWith('gi://') ? ['default'] : Object.keys(values);
            return new vm.SyntheticModule(names, function () {
                for (const exportName of names)
                    this.setExport(exportName, exportName === 'default' ? values : values[exportName]);
            }, { context });
        });
        await module.evaluate(); return module.namespace;
    }
    const connections = { disconnect_all() {}, disconnect_all_for() {} };
    const settings = {
        DEBUG: false,
        overview: { STYLE_COMPONENTS: 4, CUSTOM_BACKGROUND_COLOR: [0, 0, 0, .3], CUSTOM_TEXT_COLOR: [1, 1, 1, 1] },
        appfolder: { STYLE_DIALOGS: 4, CUSTOM_BACKGROUND_COLOR: [1, 0, 0, .3], CUSTOM_TEXT_COLOR: [1, 1, 1, 1] },
    };
    const overview = new (await load('overview')).OverviewBlur(connections, settings, {});
    const folders = new (await load('appfolders')).AppFoldersBlur(connections, settings);
    return { overview, folders, Main, appDisplay, folder, settings };
}

test('overview preset switching and disable remove Custom while retaining unrelated classes', async () => {
    const h = await loadComponents();
    h.overview.update_components_classname();
    assert.ok(h.Main.uiGroup.classes.has('overview-components-custom'));
    assert.ok(h.appDisplay.classes.has('bms-overview-color-scope'));
    assert.equal(h.overview._custom_style.options.textStyle, 0);
    for (const [value, expected] of [[1, 'light'], [2, 'dark'], [3, 'transparent'], [0, null]]) {
        h.settings.overview.STYLE_COMPONENTS = value;
        h.overview.update_components_classname();
        assert.equal(h.overview._custom_style.loaded, false);
        assert.equal(h.appDisplay.classes.has('bms-overview-color-scope'), false);
        const actual = [...h.Main.uiGroup.classes].filter(name => name.startsWith('overview-components-'));
        assert.deepEqual(actual, expected ? ['overview-components-' + expected] : []);
    }
    h.settings.overview.STYLE_COMPONENTS = 4;
    h.overview.update_components_classname();
    h.overview.disable();
    assert.equal(h.overview._custom_style.loaded, false);
    assert.deepEqual([...h.Main.uiGroup.classes], ['another-extension-class']);
    assert.deepEqual([...h.appDisplay.classes], ['another-extension-class']);
});

test('folder Custom reaches recreated dialogs and preset/disable cleanup leaves other styles', async () => {
    const h = await loadComponents();
    h.folders.update_dialog_styles();
    assert.ok(h.appDisplay._folderIcons[0]._dialog._viewBox.classes.has('appfolder-dialogs-custom'));
    h.appDisplay._folderIcons[1] = h.folder();
    h.folders.update_dialog_styles();
    assert.ok(h.appDisplay._folderIcons[1]._dialog._viewBox.classes.has('appfolder-dialogs-custom'));
    h.settings.appfolder.STYLE_DIALOGS = 2;
    h.folders.update_dialog_styles();
    for (const icon of h.appDisplay._folderIcons) {
        assert.equal(icon._dialog._viewBox.classes.has('appfolder-dialogs-custom'), false);
        assert.equal(icon._dialog._viewBox.classes.has('appfolder-dialogs-light'), true);
    }
    assert.equal(h.folders._custom_style.loaded, false);
    h.settings.appfolder.STYLE_DIALOGS = 4;
    h.folders.update_dialog_styles();
    h.folders.disable();
    for (const icon of h.appDisplay._folderIcons)
        assert.deepEqual([...icon._dialog._viewBox.classes], ['another-extension-class']);
    assert.equal(h.folders._custom_style.loaded, false);
});

test('failed first stylesheet load does not add an unstyled Custom class', async () => {
    const h = await loadComponents();
    h.overview._custom_style.fail = true;
    h.folders._custom_style.fail = true;
    h.overview.update_components_classname(); h.folders.update_dialog_styles();
    assert.equal(h.Main.uiGroup.classes.has('overview-components-custom'), false);
    assert.equal(h.appDisplay._folderIcons[0]._dialog._viewBox.classes.has('appfolder-dialogs-custom'), false);
});
