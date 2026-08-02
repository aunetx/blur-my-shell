import GLib from 'gi://GLib';

const STACKED_PSEUDO_CLASSES = ['second-in-stack', 'lower-in-stack'];
const MESSAGE_CONTAINER_STYLE_CLASSES = ['message-list', 'message-view', 'message-notification-group'];
const INTERNAL_STYLE_CLASSES = ['bms-popup-blurred-widget', 'bms-popup-backgroundgroup'];
const INTERNAL_NAMES = ['bms-popup-blurred-widget', 'bms-popup-backgroundgroup'];

export const PopupBlurMessageStacks = class PopupBlurMessageStacks {
    constructor(connections) {
        this.connections = connections;
        this.containers = new Set();
        this.groups = new Set();
        this.messages = new Set();
        this.queued_actors = new WeakSet();
        this.watched_actors = new WeakSet();
        this.destroyed_actors = new WeakSet();
        this.update_ids = new Map();
        this.original_opacity = new WeakMap();
        this.enabled = false;
    }

    enable() {
        this.enabled = true;
    }

    track_container(container) {
        if (!container || this.containers.has(container))
            return;
        if (!this.watch_actor(container))
            return;

        this.containers.add(container);
        this.scan(container);

        this.connect(
            container,
            'child-added',
            (_, child) => {
                this.queue_scan(child);
                this.queue_update_all();
            }
        );

        this.connect(
            container,
            'child-removed',
            () => this.queue_update_all()
        );
    }

    queue_scan(actor) {
        if (this.is_internal_actor(actor) || !this.watch_actor(actor) || this.queued_actors.has(actor))
            return;

        this.queued_actors.add(actor);
        this.scan(actor);
        this.queued_actors.delete(actor);
    }

    scan(actor, seen = new WeakSet()) {
        if (this.is_internal_actor(actor) || !this.watch_actor(actor) || seen.has(actor))
            return;

        seen.add(actor);

        if (this.has_any_style_class(actor, MESSAGE_CONTAINER_STYLE_CLASSES))
            this.track_container(actor);

        if (this.has_style_class(actor, 'message-notification-group'))
            this.track_group(actor);

        if (this.has_style_class(actor, 'message'))
            this.track_message(actor);

        this.get_children(actor).forEach(child => this.scan(child, seen));

        const child = this.get_child(actor);
        if (child)
            this.scan(child, seen);
    }

    track_message(message) {
        if (this.is_internal_actor(message) || !this.watch_actor(message) || this.messages.has(message))
            return;

        this.messages.add(message);
        this.update_message(message);

        this.connect(
            message,
            'style-changed',
            () => this.queue_update_message(message)
        );

        this.connect(
            message,
            'notify::pseudo-class',
            () => this.queue_update_message(message)
        );

        this.connect(
            message,
            'notify::allocation',
            () => this.queue_update_message(message)
        );

        this.connect(
            message,
            'destroy',
            () => {
                this.cancel_update(message);
                this.remove_stack_mask(message);
                this.restore_message(message);
                this.messages.delete(message);
            }
        );
    }

    track_group(group) {
        if (!this.watch_actor(group) || this.groups.has(group))
            return;

        this.groups.add(group);

        this.connect(
            group,
            'notify::expanded',
            () => this.update_all()
        );
    }

    update_all() {
        this.messages.forEach(message => this.update_message(message));
    }

    queue_update_all() {
        this.messages.forEach(message => this.queue_update_message(message));
    }

    queue_update_message(message) {
        if (this.update_ids.has(message))
            return;

        const id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.update_ids.delete(message);

            if (this.enabled && this.messages.has(message))
                this.update_message(message);

            return GLib.SOURCE_REMOVE;
        });

        this.update_ids.set(message, id);
    }

    update_message(message) {
        if (!this.enabled) {
            this.remove_stack_mask(message);
            return;
        }

        const group = this.get_message_group(message);
        const is_expanded = group ? group.expanded : this.is_in_expanded_group(message);

        if (this.is_stacked(message) && !is_expanded) {
            this.apply_stack_mask(message);
            this.hide_message_content(message);
        } else {
            this.remove_stack_mask(message);
            this.restore_message_content(message);
        }
    }

    apply_stack_mask(message) {
        if (!this.watch_actor(message))
            return;

        try {
            const height = message.height || message.get_height() || 0;
            const width = message.width || message.get_width() || 0;

            if (height <= 0 || width <= 0)
                return;

            const index = this.get_message_index_in_group(message);

            if (index === 1) {
                // 2nd card: tight visible strip of 10px (matches exact 10px bottom offset below card 1)
                const visible_edge = 10;
                const clip_y = Math.max(0, height - visible_edge);
                message.set_clip(0, clip_y, width, visible_edge);
            } else if (index === 2) {
                // 3rd card: tight visible strip of 6px (matches exact 6px bottom offset below card 2)
                const visible_edge = 7;
                const clip_y = Math.max(0, height - visible_edge);
                message.set_clip(0, clip_y, width, visible_edge);
            } else if (index >= 3) {
                // 4th+ cards: hidden when collapsed so they don't stack behind card 3
                message.set_clip(0, height, width, 0);
            } else {
                // Fallback by pseudo class
                const is_second = this.has_pseudo_class(message, 'second-in-stack');
                const visible_edge = is_second ? 10 : 6;
                const clip_y = Math.max(0, height - visible_edge);
                message.set_clip(0, clip_y, width, visible_edge);
            }
        } catch (e) { }
    }

    remove_stack_mask(message) {
        if (!message || this.destroyed_actors.has(message))
            return;

        try {
            message.remove_clip();
        } catch (e) { }

        try {
            message.get_parent?.()?.remove_clip();
        } catch (e) { }

        this.restore_message_content(message);
    }

    hide_message_content(message) {
        const child = this.get_child(message);
        if (!child)
            return;

        try {
            if (!this.original_opacity.has(child))
                this.original_opacity.set(child, child.opacity ?? 255);

            child.opacity = 0;
        } catch (e) { }
    }

    restore_message_content(message) {
        const child = this.get_child(message);
        if (!child)
            return;

        try {
            if (this.original_opacity.has(child)) {
                child.opacity = this.original_opacity.get(child);
                this.original_opacity.delete(child);
            } else {
                child.opacity = 255;
            }
        } catch (e) { }
    }

    get_message_index_in_group(message) {
        const group = this.get_message_group(message);
        if (!group)
            return -1;

        try {
            const list = [];
            const find_messages = actor => {
                if (this.has_style_class(actor, 'message')) {
                    list.push(actor);
                    return;
                }
                actor.get_children?.().forEach(find_messages);
            };
            find_messages(group);
            return list.indexOf(message);
        } catch (e) {
            return -1;
        }
    }

    has_pseudo_class(actor, pseudo_class) {
        if (!actor || this.destroyed_actors.has(actor))
            return false;
        try {
            if (actor.has_style_pseudo_class)
                return actor.has_style_pseudo_class(pseudo_class);
            return (actor.get_style_pseudo_class?.() ?? '').split(/\s+/).includes(pseudo_class);
        } catch (e) {
            return false;
        }
    }

    get_message_group(message) {
        let actor = message;
        while (actor) {
            try {
                actor = actor.get_parent?.();
            } catch (e) {
                return null;
            }

            if (this.has_style_class(actor, 'message-notification-group'))
                return actor;
        }
        return null;
    }

    is_in_expanded_group(message) {
        let actor = message;

        while (actor) {
            try {
                actor = actor.get_parent?.();
            } catch (e) {
                return false;
            }

            if (
                this.has_style_class(actor, 'message-notification-group')
                && actor.expanded
            )
                return true;
        }

        return false;
    }

    is_stacked(message) {
        return STACKED_PSEUDO_CLASSES.some(pseudo_class => {
            try {
                if (message.has_style_pseudo_class)
                    return message.has_style_pseudo_class(pseudo_class);

                return (message.get_style_pseudo_class?.() ?? '').split(/\s+/).includes(pseudo_class);
            } catch (e) {
                return false;
            }
        });
    }

    has_any_style_class(actor, style_classes) {
        return style_classes.some(style_class => this.has_style_class(actor, style_class));
    }

    is_internal_actor(actor) {
        if (!actor)
            return false;

        if (this.has_any_style_class(actor, INTERNAL_STYLE_CLASSES))
            return true;

        try {
            return INTERNAL_NAMES.includes(actor.name ?? actor.get_name?.());
        } catch (e) {
            return false;
        }
    }

    restore_message(message) {
        const child = this.get_child(message);
        if (child)
            this.restore_child(child);
    }

    restore_child(child) {
        const current_opacity = this.get_opacity(child);
        if (!this.original_opacity.has(child) && current_opacity !== 0)
            return;

        const opacity = this.original_opacity.get(child);

        this.set_opacity(child, opacity > 0 ? opacity : 255);
        this.original_opacity.delete(child);
    }

    has_style_class(actor, style_class) {
        if (!actor || this.destroyed_actors.has(actor))
            return false;

        try {
            if (actor?.has_style_class_name)
                return actor.has_style_class_name(style_class);

            return (actor?.get_style_class_name?.() ?? '').split(/\s+/).includes(style_class);
        } catch (e) {
            return false;
        }
    }

    watch_actor(actor) {
        if (!actor || this.destroyed_actors.has(actor))
            return false;
        if (this.watched_actors.has(actor))
            return true;

        try {
            this.connections.connect(actor, 'destroy', () => {
                this.destroyed_actors.add(actor);
                this.containers.delete(actor);
                this.groups.delete(actor);
                this.messages.delete(actor);
                this.cancel_update(actor);
            });
        } catch (e) {
            return false;
        }

        this.watched_actors.add(actor);
        return true;
    }

    get_children(actor) {
        if (this.is_internal_actor(actor) || !this.watch_actor(actor))
            return [];

        try {
            return actor.get_children?.() ?? [];
        } catch (e) {
            return [];
        }
    }

    get_child(actor) {
        if (!this.watch_actor(actor))
            return null;

        try {
            return actor.get_child?.() ?? actor.child ?? null;
        } catch (e) {
            return null;
        }
    }

    get_opacity(actor) {
        if (!this.watch_actor(actor))
            return 255;

        try {
            return actor.opacity ?? 255;
        } catch (e) {
            return 255;
        }
    }

    set_opacity(actor, opacity) {
        if (!this.watch_actor(actor))
            return;

        try {
            actor.opacity = opacity;
        } catch (e) { }
    }

    cancel_update(message) {
        const id = this.update_ids.get(message);
        if (!id)
            return;

        GLib.source_remove(id);
        this.update_ids.delete(message);
    }

    connect(actor, signal, handler) {
        try {
            this.connections.connect(actor, signal, handler);
        } catch (e) { }
    }

    disable() {
        this.update_ids.forEach(id => GLib.source_remove(id));
        this.update_ids.clear();
        this.messages.forEach(message => this.restore_message(message));
        this.messages.clear();
        this.groups.clear();
        this.containers.clear();
        this.watched_actors = new WeakSet();
        this.destroyed_actors = new WeakSet();
        this.original_opacity = new WeakMap();
        this.enabled = false;
    }
};
