import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../src/conveniences/custom_colors.js', import.meta.url), 'utf8');
const colors = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));

test('RGBA conversion clamps hostile/malformed values rather than interpolating CSS', () => {
    assert.equal(colors.rgba([2, -1, 0.5, 4]), 'rgba(255, 0, 128, 1)');
    for (const value of [undefined, null, ['red); background: red;', NaN, Infinity, '-1']]) {
        const result = colors.rgba(value);
        assert.match(result, /^rgba\(\d+, \d+, \d+, [\d.]+\)$/);
        assert.equal(result, colors.rgba(colors.DEFAULT_BACKGROUND_COLOR));
    }
});

test('transparent backgrounds retain visible, distinct interaction states', () => {
    const result = colors.customColorTokens([0.1, 0.2, 0.3, 0], [1, 1, 1, 1]);
    assert.match(result.BACKGROUND, /, 0\)$/);
    assert.notEqual(result.BACKGROUND, result.HOVER);
    assert.notEqual(result.HOVER, result.ACTIVE);
    assert.notEqual(result.ACTIVE, result.PRESSED);
    assert.match(result.HOVER, /, 0.15\)$/);
    assert.equal(result.TEXT, 'rgba(255, 255, 255, 1)');
});

test('matching background and text still produce distinct hover/focus colors', () => {
    for (const rgb of [0, 0.4, 1]) {
        const result = colors.customColorTokens([rgb, rgb, rgb, 1], [rgb, rgb, rgb, 1]);
        assert.notEqual(result.BACKGROUND, result.HOVER);
        assert.notEqual(result.HOVER, result.ACTIVE);
    }
});

test('text color never changes tile hover, checked, or pressed backgrounds', () => {
    for (const background of [[0.1, 0.2, 0.3, 0], [0.4, 0.4, 0.4, 0.35], [1, 1, 1, 1]]) {
        const white = colors.customColorTokens(background, [1, 1, 1, 1]);
        for (const foreground of [[1, 0, 0, 1], [0, 1, 0, 1], [0, 0, 0, 1]]) {
            const changed = colors.customColorTokens(background, foreground);
            for (const property of ['BACKGROUND', 'HOVER', 'ACTIVE', 'PRESSED'])
                assert.equal(changed[property], white[property]);
            assert.notEqual(changed.TEXT, white.TEXT);
        }
    }
});

test('theme mode emits no foreground overrides while retaining custom backgrounds', async () => {
    for (const kind of ['overview', 'appfolders']) {
        const template = await readFile(new URL(`../src/styles/custom-${kind}.css`, import.meta.url), 'utf8');
        for (const textStyle of [0, undefined, -1, 20, '1']) {
            const css = colors.renderCustomStyle(template, [0.1, 0.2, 0.3, 0.4], [1, 0, 0, 1], { textStyle });
            assert.doesNotMatch(css, /(?:^|[;{])\s*color\s*:/);
            assert.match(css, /background-color: rgba\(26, 51, 77, 0.4\)/);
            assert.doesNotMatch(css, /CUSTOM_TEXT_(?:BEGIN|END)|@[A-Z_]+@/);
            assert.doesNotMatch(css, /selected-color|selection-background-color|font-weight|opacity\s*:/);
        }
    }
});

test('secondary text retains distinct hint, description, status and disabled levels', () => {
    const automatic = colors.customColorTokens([0, 0, 0, 0.3], [1, 0, 0, 1],
        { textStyle: 1, secondaryStrength: 100 });
    assert.equal(automatic.TEXT, 'rgba(255, 0, 0, 1)');
    assert.equal(automatic.HINT, 'rgba(255, 0, 0, 0.7)');
    assert.equal(automatic.DESCRIPTION, 'rgba(255, 0, 0, 0.63)');
    assert.equal(automatic.STATUS, 'rgba(255, 0, 0, 0.8)');
    assert.equal(automatic.DISABLED, 'rgba(255, 0, 0, 0.5)');
    const manual = colors.customColorTokens([0, 0, 0, 0.3], [1, 0, 0, 1],
        { textStyle: 2, secondary: [0, 1, 0, 0.8], secondaryStrength: 50 });
    assert.equal(manual.TEXT, automatic.TEXT);
    assert.equal(manual.HINT, 'rgba(0, 255, 0, 0.28)');
    assert.equal(manual.DESCRIPTION, 'rgba(0, 255, 0, 0.252)');
    assert.equal(manual.STATUS, 'rgba(0, 255, 0, 0.32)');
    assert.equal(manual.DISABLED, 'rgba(0, 255, 0, 0.2)');
});

test('custom highlights are independent and retain distinct opaque pressed states', () => {
    for (const highlight of [[1, 0, 0, 1], [0, 0, 0, 1], [1, 1, 1, 1], [0, 1, 0, 0.2]]) {
        const options = { textStyle: 2, secondary: [0, 0, 1, 1], highlightStyle: 1, highlight };
        const first = colors.customColorTokens([0, 0, 0, 0.3], [1, 1, 1, 1], options);
        const second = colors.customColorTokens([0.8, 0.5, 1, 0.8], [1, 0, 0, 1], options);
        assert.notEqual(first.HOVER, first.ACTIVE);
        assert.notEqual(first.ACTIVE, first.PRESSED);
        for (const state of ['HOVER', 'ACTIVE', 'PRESSED']) assert.equal(first[state], second[state]);
    }
});

test('malformed secondary and highlight options cannot inject CSS', async () => {
    const template = await readFile(new URL('../src/styles/custom-overview.css', import.meta.url), 'utf8');
    const css = colors.renderCustomStyle(template, [0, 0, 0, 0.3], [1, 1, 1, 1], {
        textStyle: 2, secondary: ['red; color: green', Infinity, -1, NaN],
        secondaryStrength: '}; bad-css {', highlightStyle: 1,
        highlight: [20, -5, 0, Infinity],
    });
    assert.doesNotMatch(css, /bad-css|NaN|Infinity|undefined|@[A-Z_]+@/);
});

test('GNOME 50 placeholder and overview labels have direct foreground rules', async () => {
    const template = await readFile(new URL('../src/styles/custom-overview.css', import.meta.url), 'utf8');
    const css = colors.renderCustomStyle(template, [0, 0, 0, 0.35], [1, 0, 0, 1], { textStyle: 1 });
    const rules = css.replace(/\/\*[\s\S]*?\*\//g, '').split('}').filter(block => block.trim()).flatMap(block => {
        const [selectors, declarations] = block.split('{');
        return selectors.split(',').map(selector => ({ selector: selector.trim(), declarations }));
    });
    for (const target of ['.bms-overview-color-scope .overview-icon StLabel',
        '.grid-search-result .overview-icon StLabel', '.list-search-result-title StLabel',
        '.list-search-provider-details StLabel', '.dash-label', '.window-caption']) {
        assert.ok(rules.some(rule => rule.selector === '.overview-components-custom ' + target &&
            /(?:^|;)\s*color:\s*rgba\(255, 0, 0, 1\)/.test(rule.declarations)),
        `${target} must receive the selected text color directly`);
    }
});

test('both real templates render without unexpanded tokens or invalid numbers', async () => {
    for (const kind of ['overview', 'appfolders']) {
        const template = await readFile(new URL(`../src/styles/custom-${kind}.css`, import.meta.url), 'utf8');
        for (const background of [[0, 0, 0, 0], [1, 1, 1, 1], [1, 0, 0.7, 0.3], [NaN, -2, 20, Infinity]]) {
            const css = colors.renderCustomStyle(template, background, [0.2, 0.4, 0.6, 1], { textStyle: 1 });
            assert.doesNotMatch(css, /@[A-Z_]+@|NaN|Infinity|undefined/);
            assert.match(css, /color: rgba\(51, 102, 153, 1\)/);
            assert.doesNotMatch(css, /(?:^|[;{])\s*opacity\s*:/, 'text must not inherit whole-actor opacity');
            const noComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
            for (const block of noComments.split('}').filter(block => block.trim())) {
                const [selectors] = block.split('{');
                for (const selector of selectors.split(','))
                    assert.match(selector.trim(), /^\.(overview-components-custom|appfolder-dialogs-custom)\b/, 'rules must be scoped to custom mode');
            }
        }
    }
});

test('custom folder button colors outrank every overview style regardless of reload order', async () => {
    const overview = await readFile(new URL('../src/styles/overview.css', import.meta.url), 'utf8') +
        await readFile(new URL('../src/styles/custom-overview.css', import.meta.url), 'utf8');
    const folders = await readFile(new URL('../src/styles/custom-appfolders.css', import.meta.url), 'utf8');
    const rules = css => css.replace(/\/\*[\s\S]*?\*\//g, '').split('}').filter(block => block.trim()).flatMap(block => {
        const [selectors, declarations] = block.split('{');
        return selectors.split(',').map(selector => ({ selector: selector.trim(), declarations }));
    });
    const specificity = selector => (selector.match(/\.[\w-]+|:(?!:)[\w-]+/g) || []).length;
    for (const state of ['', ':hover', ':focus', ':active', ':focus:hover', ':focus:active']) {
        const suffix = '.icon-button' + state;
        const competing = rules(overview).filter(rule => rule.selector.endsWith(suffix) && rule.selector.includes('.app-folder-dialog'));
        const custom = rules(folders).filter(rule => rule.selector.endsWith(suffix));
        assert.ok(custom.length, `folder ${state || 'idle'} must have an explicit rule`);
        for (const property of ['background-color']) {
            const opponent = competing.filter(rule => new RegExp(`(?:^|;)\\s*${property}:`).test(rule.declarations));
            const ours = custom.filter(rule => new RegExp(`(?:^|;)\\s*${property}:`).test(rule.declarations));
            if (!opponent.length) continue;
            assert.ok(ours.length, `${property} must remain independently configurable`);
            assert.ok(Math.max(...ours.map(rule => specificity(rule.selector))) >
                Math.max(...opponent.map(rule => specificity(rule.selector))), `${property} ${state} must not depend on load order`);
        }
    }
});
