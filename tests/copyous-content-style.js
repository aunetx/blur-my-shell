// Run with: gjs -m tests/copyous-content-style.js
import { CopyousContentStyle, is_copyous_surface } from '../src/components/popup/copyous_style.js';

function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}

class Actor {
    constructor(classes = '', style = null) {
        this.classes = classes;
        this.style = style;
        this.children = [];
        this.signals = new Map();
        this.states = new Set();
        this.next_id = 0;
    }
    get_style_class_name() { return this.classes; }
    get_style() { return this.style; }
    set_style(value) { this.style = value; this.emit('style-changed'); }
    get_children() { return this.children; }
    get_parent() { return this.parent ?? null; }
    has_style_pseudo_class(state) { return this.states.has(state); }
    connect(signal, callback) { this.signals.set(++this.next_id, [signal, callback]); return this.next_id; }
    disconnect(id) { this.signals.delete(id); }
    emit(signal, ...args) {
        [...this.signals.values()].forEach(([name, callback]) => {
            if (name === signal)
                callback(this, ...args);
        });
    }
    add(child) { child.parent = this; this.children.push(child); this.emit('child-added', child); }
    remove(child) { child.parent = null; this.children = this.children.filter(c => c !== child); this.emit('child-removed', child); }
}

const root = new Actor('clipboard-dialog', 'margin: 6px;');
const card = new Actor('clipboard-item', 'padding: 8px;');
const text = new Actor('text-item-content');
const image = new Actor('image-item-image', 'background-image: url(test.png);');
card.add(text);
card.add(image);
root.add(card);
let background = 2;
const surface = { target: root, settings: { popup: { OVERRIDE_BACKGROUND: true } }, get_background_style: () => background };
const styles = new CopyousContentStyle(surface);
styles.update();
assert(card.style.includes('rgba(255, 255, 255, 0.12)'), 'Card becomes translucent');
assert(text.style === null && image.style === 'background-image: url(test.png);', 'Clipboard content stays untouched');
assert(root.style === 'margin: 6px;', 'Dialog styling stays separate');
card.states.add('hover');
card.emit('style-changed');
assert(card.style.includes('0.2)'), 'Hover feedback remains visible');
card.states.add('active');
card.emit('style-changed');
assert(card.style.includes('0.28)'), 'Pressed state is distinct');
const button = new Actor('dialog-footer-button');
root.add(button);
assert(button.style.includes('background-color'), 'New controls are styled immediately');
card.set_style('padding: 12px;');
assert(card.style.startsWith('padding: 12px;'), 'Copyous inline changes are retained');
background = 1;
styles.update();
assert(button.style.includes('rgba(0, 0, 0,'), 'Light background uses a dark translucent tint');
root.remove(card);
assert(card.style === 'padding: 12px;' && card.signals.size === 0 && text.signals.size === 0, 'Removed cards and descendants are restored and disconnected');
root.add(card);
surface.settings.popup.OVERRIDE_BACKGROUND = false;
styles.update();
assert(card.style === 'padding: 12px;' && button.style === null && styles.actors.size === 0, 'Disabling override restores all controls');
surface.settings.popup.OVERRIDE_BACKGROUND = true;
styles.update();
button.emit('destroy');
assert(!styles.actors.has(button), 'Destroyed actors are released');
styles.destroy();
assert(card.style === 'padding: 12px;' && root.signals.size === 0, 'Disabling blur restores styles and disconnects observers');
print('Copyous content styling lifecycle checks passed');

// Copyous menus are separate top-level actors, outside the clipboard dialog.
const menuRoot = new Actor('popup-menu clipboard-item-menu');
const menu = new Actor('popup-menu-content');
const item = new Actor('popup-menu-item');
menuRoot.add(menu);
menu.add(item);
assert(is_copyous_surface(menu), 'Recognize a three-dot menu by its ancestor');
assert(!is_copyous_surface(new Actor('popup-menu-content')), 'Leave unrelated menus alone');
assert(!is_copyous_surface(new Actor('modal-dialog clipboard-item-edit-dialog')), 'Keep edit dialogs on the standard modal styling path');
const menuStyles = new CopyousContentStyle({ ...surface, target: menu });
menuStyles.update();
assert(item.style.includes('0)'), 'Menu rows stay transparent at rest');
item.states.add('hover');
item.emit('style-changed');
assert(item.style.includes('0.2)'), 'Menu hover feedback stays translucent');
menuStyles.destroy();
assert(item.style === null, 'Menu row styles restore on disable');
print('Copyous menu scope and restoration checks passed');
