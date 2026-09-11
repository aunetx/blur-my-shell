// Copyous paints its cards and controls separately from the dialog background.
// Make those surfaces translucent over the dialog's existing blur; leave text,
// images, color swatches, and other clipboard content untouched.
const SURFACE_CLASSES = [
    'clipboard-item', 'content-preview', 'clipboard-search-entry',
    'dialog-header-button', 'dialog-header-icon-button',
    'dialog-footer-button', 'dialog-footer-icon-button',
    'clipboard-item-header-button', 'clipboard-item-tag-button',
    'clipboard-item-title-entry', 'search-entry-button',
    'popup-menu-item', 'popup-sub-menu',
];

export function is_copyous_surface(actor) {
    const has_class = (target, name) =>
        (target?.get_style_class_name?.() ?? '').split(/\s+/).includes(name);
    if (has_class(actor, 'clipboard-dialog'))
        return true;
    if (!has_class(actor, 'popup-menu-content'))
        return false;

    for (let parent = actor.get_parent?.(); parent; parent = parent.get_parent?.()) {
        if (has_class(parent, 'clipboard-item-menu') || has_class(parent, 'search-popup-menu'))
            return true;
    }
    return false;
}

export class CopyousContentStyle {
    constructor(surface) {
        this.surface = surface;
        this.actors = new Map();
    }

    update() {
        if (!this.surface.settings.popup.OVERRIDE_BACKGROUND) {
            this.destroy();
            return;
        }

        this.track(this.surface.target);
        this.actors.forEach((record, actor) => this.update_actor(actor, record));
    }

    track(actor) {
        if (!actor || this.actors.has(actor))
            return;

        const record = { signals: [], original: null, applied: null, updating: false };
        this.actors.set(actor, record);
        const connect = (signal, callback) => record.signals.push(actor.connect(signal, callback));
        connect('destroy', () => this.actors.delete(actor));
        connect('child-added', (_, child) => this.track(child));
        connect('child-removed', (_, child) => this.untrack(child));
        if (actor.get_style) {
            connect('style-changed', () => this.update_actor(actor, record));
            connect('notify::hover', () => this.update_actor(actor, record));
        }

        this.update_actor(actor, record);
        (actor.get_children?.() ?? []).forEach(child => this.track(child));
    }

    update_actor(actor, record) {
        if (record.updating || !this.actors.has(actor) || !actor.set_style)
            return;

        record.updating = true;
        try {
            const current = actor.get_style();
            if (current !== record.applied)
                record.original = current;

            const classes = (actor.get_style_class_name?.() ?? '').split(/\s+/);
            if (!classes.some(name => SURFACE_CLASSES.includes(name))) {
                this.restore(actor, record);
                return;
            }

            // Keep hover/pressed feedback and the theme's existing focus rings.
            const has_state = state => actor.has_style_pseudo_class?.(state);
            const pressed = ['active', 'checked', 'selected'].some(has_state);
            const hover = actor.hover || has_state('hover');
            const is_menu = classes.includes('popup-menu-item') || classes.includes('popup-sub-menu');
            const alpha = has_state('insensitive') ? (is_menu ? 0 : 0.06)
                : pressed ? 0.28 : hover ? 0.20 : is_menu ? 0 : 0.12;
            const rgb = this.surface.get_background_style() === 1 ? '0, 0, 0' : '255, 255, 255';
            const base = record.original ?? '';
            const separator = base.trim() && !base.trim().endsWith(';') ? ';' : '';
            const style = `${base}${separator}background-color: rgba(${rgb}, ${alpha});`;
            if (current !== style) {
                record.applied = style;
                actor.set_style(style);
            }
        } finally {
            record.updating = false;
        }
    }

    restore(actor, record) {
        const applied = record.applied;
        record.applied = null;
        if (applied !== null && actor.get_style?.() === applied)
            actor.set_style(record.original);
    }

    untrack(actor) {
        const record = this.actors.get(actor);
        if (!record)
            return;

        this.actors.delete(actor);
        record.signals.forEach(id => actor.disconnect(id));
        this.restore(actor, record);
        (actor.get_children?.() ?? []).forEach(child => this.untrack(child));
    }

    destroy() {
        // Disconnect before restoring styles so restoration cannot reapply them.
        const actors = [...this.actors];
        this.actors.clear();
        actors.forEach(([actor, record]) => {
            record.signals.forEach(id => actor.disconnect(id));
            this.restore(actor, record);
        });
    }
}
