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

test('both real templates render without unexpanded tokens or invalid numbers', async () => {
    for (const kind of ['overview', 'appfolders']) {
        const template = await readFile(new URL(`../src/styles/custom-${kind}.css`, import.meta.url), 'utf8');
        for (const background of [[0, 0, 0, 0], [1, 1, 1, 1], [1, 0, 0.7, 0.3], [NaN, -2, 20, Infinity]]) {
            const css = colors.renderCustomStyle(template, background, [0.2, 0.4, 0.6, 1]);
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
        for (const property of ['color', 'background-color']) {
            const opponent = competing.filter(rule => new RegExp(`(?:^|;)\\s*${property}:`).test(rule.declarations));
            const ours = custom.filter(rule => new RegExp(`(?:^|;)\\s*${property}:`).test(rule.declarations));
            if (!opponent.length) continue;
            assert.ok(ours.length, `${property} must remain independently configurable`);
            assert.ok(Math.max(...ours.map(rule => specificity(rule.selector))) >
                Math.max(...opponent.map(rule => specificity(rule.selector))), `${property} ${state} must not depend on load order`);
        }
    }
});
