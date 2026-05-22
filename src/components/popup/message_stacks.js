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
            'destroy',
            () => {
                this.cancel_update(message);
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
        if (!this.enabled)
            return;

        const child = this.get_child(message);
        if (!child)
            return;

        if (this.is_stacked(message) && !this.is_in_expanded_group(message)) {
            if (!this.original_opacity.has(child))
                this.original_opacity.set(child, this.get_opacity(child));

            this.set_opacity(child, 0);
            return;
        }

        this.restore_child(child);
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
