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
        this.bms_clipped = new WeakSet();
        this.group_connections = new Map();
        this.update_ids = new Map();
        this.original_opacity = new WeakMap();
        this.original_message_opacity = new WeakMap();
        this.original_clips = new WeakMap();
        this.original_header_opacity = new WeakMap();
        this.enabled = false;
    }

    enable() {
        this.enabled = true;
    }

    track_container(container, scan_children = true) {
        if (!container || this.containers.has(container))
            return;
        if (!this.watch_actor(container))
            return;

        this.containers.add(container);
        if (scan_children)
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
            this.track_container(actor, false);

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
                this.messages.delete(message);
            }
        );
    }

    track_group(group) {
        if (!this.watch_actor(group) || this.groups.has(group))
            return;

        this.groups.add(group);
        this.update_group_header(group);

        this.connect(
            group,
            'notify::expanded',
            () => this.update_all()
        );

        this.connect(
            group,
            'notify::allocation',
            () => this.update_group_header(group)
        );

        if (group.layout_manager) {
            const lm = group.layout_manager;
            try {
                const id = lm.connect('notify::expansion', () => {
                    this.update_group_header(group);
                    this.update_group_messages(group);
                });
                this.group_connections.set(group, { lm, id });
            } catch (e) { }
        }
    }

    untrack_group(group, destroyed = false) {
        if (this.group_connections.has(group)) {
            const { lm, id } = this.group_connections.get(group);
            try {
                lm.disconnect(id);
            } catch (e) { }
            this.group_connections.delete(group);
        }
        if (!destroyed)
            this.restore_group_header(group);
        this.groups.delete(group);
    }

    update_all() {
        this.groups.forEach(group => {
            this.update_group_header(group);
            this.update_group_messages(group);
        });
        this.messages.forEach(message => {
            if (!this.get_message_group(message))
                this.update_message(message);
        });
    }

    update_group_header(group) {
        if (!this.watch_actor(group))
            return;

        try {
            const header = group._headerBox;
            if (!header)
                return;

            if (!this.original_header_opacity.has(header))
                this.original_header_opacity.set(header, header.opacity);

            const expansion = group.layout_manager?.expansion ?? (group.expanded ? 1 : 0);
            const original_opacity = this.original_header_opacity.get(header);
            const target_opacity = this.enabled
                ? Math.round(expansion * original_opacity)
                : original_opacity;

            header.opacity = target_opacity;
        } catch (e) { }
    }

    get_group_messages(group) {
        const list = [];
        const find_messages = actor => {
            if (this.has_style_class(actor, 'message')) {
                list.push(actor);
                return;
            }
            this.get_children(actor).forEach(find_messages);
        };
        find_messages(group);
        return list;
    }

    update_group_messages(group) {
        if (!this.enabled || !this.watch_actor(group))
            return;

        const expansion = group.layout_manager?.expansion ?? (group.expanded ? 1.0 : 0.0);
        const messages = this.get_group_messages(group);

        messages.forEach((message, index) => {
            this.update_message_with_expansion(message, index, expansion, group);
        });
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
        if (group) {
            const expansion = group.layout_manager?.expansion ?? (group.expanded ? 1.0 : 0.0);
            const index = this.get_message_index_in_group(message);
            this.update_message_with_expansion(message, index >= 0 ? index : 0, expansion, group);
        } else {
            const is_expanded = this.is_in_expanded_group(message);
            if (this.is_stacked(message) && !is_expanded) {
                this.apply_stack_mask(message);
                this.hide_message_content(message);
                this.restore_message_opacity(message);
            } else {
                this.remove_stack_mask(message);
            }
        }
    }

    update_message_with_expansion(message, index, expansion, group) {
        if (!this.enabled || !this.watch_actor(message))
            return;

        const is_stacked = this.is_stacked(message) || index > 0;

        if (!is_stacked) {
            this.remove_stack_mask(message);
            return;
        }

        if (expansion >= 0.99) {
            this.remove_stack_mask(message);
            return;
        }

        if (expansion <= 0.01) {
            this.apply_stack_mask(message);
            this.hide_message_content(message);
            this.restore_message_opacity(message);
            return;
        }

        // 0.01 < expansion < 0.99: Animating unravel / collapse
        try {
            const height = message.height || message.get_height() || 0;
            const width = message.width || message.get_width() || 0;

            if (height <= 0 || width <= 0)
                return;

            const base_edge = (index === 1) ? 10 : (index === 2 ? 7 : 0);
            const visible_edge = Math.round(base_edge + (height - base_edge) * expansion);
            const clip_y = Math.max(0, height - visible_edge);

            this.set_stack_clip(message, 0, clip_y, width, visible_edge);
            this.bms_clipped.add(message);

            // Staggered opacity progress for cards so they smoothly fade in as they unravel
            const stagger_start = Math.min(0.8, index * 0.04);
            const progress = Math.min(1.0, Math.max(0.0, (expansion - stagger_start) / (1.0 - stagger_start)));
            const target_alpha = Math.round(255 * progress);

            this.set_child_opacity(message, target_alpha);

            if (index >= 3) {
                this.set_message_opacity(message, target_alpha);
            } else {
                this.restore_message_opacity(message);
            }
        } catch (e) { }
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
                this.set_stack_clip(message, 0, clip_y, width, visible_edge);
                this.bms_clipped.add(message);
            } else if (index === 2) {
                // 3rd card: tight visible strip of 7px (matches exact 7px bottom offset below card 2)
                const visible_edge = 7;
                const clip_y = Math.max(0, height - visible_edge);
                this.set_stack_clip(message, 0, clip_y, width, visible_edge);
                this.bms_clipped.add(message);
            } else if (index >= 3) {
                // 4th+ cards: hidden when collapsed so they don't stack behind card 3
                this.set_stack_clip(message, 0, height, width, 0);
                this.bms_clipped.add(message);
            } else {
                // Fallback by pseudo class
                const is_second = this.has_pseudo_class(message, 'second-in-stack');
                const visible_edge = is_second ? 10 : 6;
                const clip_y = Math.max(0, height - visible_edge);
                this.set_stack_clip(message, 0, clip_y, width, visible_edge);
                this.bms_clipped.add(message);
            }
        } catch (e) { }
    }

    remove_stack_mask(message) {
        if (!message || this.destroyed_actors.has(message))
            return;

        if (this.bms_clipped.has(message)) {
            try {
                const clip = this.original_clips.get(message);
                if (clip)
                    message.set_clip(...clip);
                else
                    message.remove_clip();
            } catch (e) { }
            this.bms_clipped.delete(message);
            this.original_clips.delete(message);
        }

        this.restore_message_content(message);
        this.restore_message_opacity(message);
    }

    set_stack_clip(message, x, y, width, height) {
        if (!this.original_clips.has(message)) {
            let clip = null;
            try {
                if (message.has_clip)
                    clip = message.get_clip();
            } catch (e) { }
            this.original_clips.set(message, clip);
        }
        message.set_clip(x, y, width, height);
    }

    restore_group_header(group) {
        try {
            const header = group?._headerBox;
            if (header && this.original_header_opacity.has(header)) {
                header.opacity = this.original_header_opacity.get(header);
                this.original_header_opacity.delete(header);
            }
        } catch (e) { }
    }

    set_child_opacity(message, opacity) {
        const child = this.get_child(message);
        if (!child)
            return;

        try {
            if (!this.original_opacity.has(child))
                this.original_opacity.set(child, child.opacity ?? 255);

            child.opacity = opacity;
        } catch (e) { }
    }

    hide_message_content(message) {
        this.set_child_opacity(message, 0);
    }

    restore_message_content(message) {
        const child = this.get_child(message);
        if (!child)
            return;

        try {
            if (this.original_opacity.has(child)) {
                child.opacity = this.original_opacity.get(child);
                this.original_opacity.delete(child);
            }
        } catch (e) { }
    }

    set_message_opacity(message, opacity) {
        if (!this.watch_actor(message))
            return;
        try {
            if (!this.original_message_opacity.has(message))
                this.original_message_opacity.set(message, message.opacity ?? 255);

            message.opacity = opacity;
        } catch (e) { }
    }

    restore_message_opacity(message) {
        if (!message || this.destroyed_actors.has(message))
            return;
        try {
            if (this.original_message_opacity.has(message)) {
                message.opacity = this.original_message_opacity.get(message);
                this.original_message_opacity.delete(message);
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
                if (this.groups.has(actor)) {
                    this.untrack_group(actor, true);
                }
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
        this.messages.forEach(message => this.remove_stack_mask(message));
        this.groups.forEach(group => {
            this.untrack_group(group);
        });
        this.group_connections.forEach(({ lm, id }) => {
            try {
                lm.disconnect(id);
            } catch (e) { }
        });
        this.group_connections.clear();
        this.messages.clear();
        this.groups.clear();
        this.containers.clear();
        this.watched_actors = new WeakSet();
        this.destroyed_actors = new WeakSet();
        this.bms_clipped = new WeakSet();
        this.original_opacity = new WeakMap();
        this.original_message_opacity = new WeakMap();
        this.original_clips = new WeakMap();
        this.original_header_opacity = new WeakMap();
        this.enabled = false;
    }
};
