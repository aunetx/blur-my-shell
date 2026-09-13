// Run: node --experimental-vm-modules tests/message_stacks.mjs
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {test} from 'node:test';
import vm from 'node:vm';

const context = vm.createContext({console});
const pending = new Map();
let nextId = 0;
class ShaderEffect {
    get_actor() { return this.actor; }
}
const stubs = {
    'gi://GLib': {default: {
        PRIORITY_DEFAULT_IDLE: 0, SOURCE_REMOVE: false,
        idle_add(_priority, callback) { pending.set(++nextId, callback); return nextId; },
        source_remove(id) { pending.delete(id); },
    }},
    'gi://Clutter': {default: {ShaderEffect}},
    'gi://Shell': {default: {}},
    'gi://St': {default: {Corner: {TOPLEFT: 0, TOPRIGHT: 1, BOTTOMRIGHT: 2, BOTTOMLEFT: 3}}},
    'utils.js': {
        get_shader_source() { return ''; }, initialize_shader_effect() {},
        register_shader_effect(_meta, type) { return type; },
    },
    'shader_uniforms.js': {
        set_uniform(effect, name, value) {
            effect.uniforms ??= {};
            effect.uniforms[name] = value;
        },
        upload_uniforms() {},
    },
};
const modules = new Map();
async function load(url) {
    if (modules.has(url))
        return modules.get(url);
    const stub = stubs[url] ?? stubs[url.split('/').pop()];
    const module = stub
        ? new vm.SyntheticModule(Object.keys(stub), function () {
            for (const [key, value] of Object.entries(stub)) this.setExport(key, value);
        }, {context, identifier: url})
        : new vm.SourceTextModule(await readFile(new URL(url), 'utf8'), {context, identifier: url});
    modules.set(url, module);
    await module.link((specifier, parent) => load(specifier.startsWith('gi:')
        ? specifier : new URL(specifier, parent.identifier).href));
    return module;
}
const module = await load(new URL('../src/components/popup/message_stacks.js', import.meta.url).href);
await module.evaluate();
const {PopupBlurMessageStacks} = module.namespace;
const {get_cover_geometry} = modules.get(new URL('../src/components/popup/stack_mask.js', import.meta.url).href).namespace;

class Actor {
    constructor(style, x = 0, y = 0, width = 500, height = 100) {
        Object.assign(this, {style, x, y, width, height, visible: true, opacity: 255,
            scale: 1, radius: 32, children: [], effects: [], signals: new Map(), allocated: true});
    }
    add(child) { this.children.push(child); child.parent = this; return child; }
    get_parent() { return this.parent; }
    get_children() { return this.children; }
    get_child() { return this.child; }
    has_style_class_name(name) { return name === this.style; }
    has_style_pseudo_class() { return false; }
    has_allocation() { return this.allocated; }
    get_transformed_position() { return [this.x, this.y]; }
    get_transformed_size() { return [this.width * this.scale, this.height * this.scale]; }
    transform_stage_point(x, y) { return [true, (x - this.x) / this.scale, (y - this.y) / this.scale]; }
    get_theme_node() { return {get_border_radius: () => this.radius}; }
    add_effect(effect) { this.effects.push(effect); effect.actor = this; }
    remove_effect(effect) { this.effects.splice(this.effects.indexOf(effect), 1); effect.actor = null; }
    set_clip(...clip) { this.clip = clip; this.has_clip = true; }
    remove_clip() { this.clip = null; this.has_clip = false; }
    connect(signal, callback) {
        const handlers = this.signals.get(signal) ?? [];
        handlers.push(callback); this.signals.set(signal, handlers); return handlers.length;
    }
    emit(signal) { for (const handler of this.signals.get(signal) ?? []) handler(this); }
}
function fixture() {
    pending.clear();
    const connections = {connect: (actor, signal, handler) => actor.connect(signal, handler)};
    const group = new Actor('message-notification-group');
    group.layout_manager = new Actor('layout');
    group.layout_manager.expansion = 0;
    const cards = [0, 1, 2, 3].map(i => {
        const card = group.add(new Actor('message', 100 + i * 6, 100 + Math.min(i * 10, 17), 500 - i * 12));
        card.child = card.add(new Actor('content'));
        return card;
    });
    const controller = new PopupBlurMessageStacks(connections);
    controller.enable(); controller.track_container(group);
    return {group, cards, controller};
}
function flush() {
    while (pending.size) {
        const callbacks = [...pending.values()]; pending.clear();
        callbacks.forEach(callback => callback());
    }
}

test('collapsed stack preserves corners, masks all covers, and hides fourth card', () => {
    const {cards, controller} = fixture();
    assert.equal(cards[0].effects.length, 0);
    assert.equal(cards[1].effects.length, 1);
    assert.equal(cards[2].effects.length, 2);
    assert.equal(cards[1].has_clip, undefined);
    assert.equal(cards[2].has_clip, undefined);
    assert.equal(cards[3].clip[3], 0);
    assert.equal(cards[1].child.opacity, 0);
    const u = cards[1].effects[0].uniforms;
    assert.equal(u.cover_x, -6); assert.equal(u.cover_y, -10);
    assert.equal(u.radius_bl, 32);
    controller.disable();
    for (const card of cards) {
        assert.equal(card.effects.length, 0);
        assert.ok(!card.has_clip);
        assert.equal(card.child.opacity, 255);
        assert.equal(card.opacity, 255);
    }
    assert.equal(controller.stack_effects.size, 0);
});

test('cover style and allocation changes refresh lower masks', () => {
    const {cards} = fixture();
    cards[0].radius = 12; cards[0].emit('style-changed'); flush();
    assert.equal(cards[1].effects[0].uniforms.radius_bl, 12);
    cards[0].height = 130; cards[0].emit('notify::allocation'); flush();
    assert.equal(cards[1].effects[0].uniforms.cover_height, 130);
});

test('expansion removes hidden clip and stops masking separated cards', () => {
    const {cards, group, controller} = fixture();
    group.layout_manager.expansion = 0.5;
    cards.forEach((card, i) => { card.y = 100 + i * 120; });
    controller.update_group_messages(group);
    for (const card of cards) {
        assert.equal(card.effects.length, 0);
        assert.ok(!card.has_clip);
    }
    assert.ok(cards[3].opacity > 0 && cards[3].opacity < 255);
    group.layout_manager.expansion = 1; controller.update_group_messages(group);
    assert.equal(cards[3].opacity, 255);
    assert.equal(cards[3].child.opacity, 255);
    assert.equal(controller.stack_effects.size, 0);
});

test('destroyed covering and covered actors release mask references', () => {
    const {cards, group, controller} = fixture();
    group.children.shift(); cards[0].emit('destroy'); flush();
    assert.equal(cards[1].effects.length, 0);
    assert.equal(cards[2].effects.length, 1);
    group.children.splice(group.children.indexOf(cards[2]), 1);
    cards[2].emit('destroy'); flush();
    assert.equal(controller.stack_effects.has(cards[2]), false);
    for (const effects of controller.stack_effects.values()) {
        assert.ok(!effects.has(cards[0])); assert.ok(!effects.has(cards[2]));
    }
});

test('geometry accounts for scale and does not double-scale theme radii', () => {
    const cover = new Actor('message', 100, 100, 500, 100);
    const card = new Actor('message', 112, 120, 488, 100);
    card.scale = cover.scale = 2;
    const geometry = get_cover_geometry(card, cover);
    assert.deepEqual(Array.from(geometry.box), [-6, -10, 500, 100]);
    assert.deepEqual(Array.from(geometry.radii), [32, 32, 32, 32]);
    cover.radius = 999;
    assert.deepEqual(Array.from(get_cover_geometry(card, cover).radii), [50, 50, 50, 50]);
    cover.y = -500;
    assert.equal(get_cover_geometry(card, cover), null);
    cover.allocated = false;
    assert.equal(get_cover_geometry(card, cover), null);
});
