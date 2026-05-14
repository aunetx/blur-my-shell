import GLib from 'gi://GLib';

const STACKED_PSEUDO_CLASSES = ['second-in-stack', 'lower-in-stack'];
const MESSAGE_CONTAINER_STYLE_CLASSES = ['message-list', 'message-view', 'message-notification-group'];

export const ShellMessageStacks = class ShellMessageStacks {
    constructor(connections, has_style_class) {
        this.connections = connections;
        this.has_style_class = has_style_class;
        this.containers = new Set();
        this.groups = new Set();
        this.messages = new Set();
        this.queued_actors = new WeakSet();
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

        this.connect(
            container,
            'destroy',
            () => this.containers.delete(container)
        );
    }

    queue_scan(actor) {
        if (!actor || this.queued_actors.has(actor))
            return;

        this.queued_actors.add(actor);
        this.scan(actor);
        this.queued_actors.delete(actor);
    }

    scan(actor, seen = new WeakSet()) {
        if (!actor || seen.has(actor))
            return;

        seen.add(actor);

        if (this.has_any_style_class(actor, MESSAGE_CONTAINER_STYLE_CLASSES))
            this.track_container(actor);

        if (this.has_style_class(actor, 'message-notification-group'))
            this.track_group(actor);

        if (this.has_style_class(actor, 'message'))
            this.track_message(actor);

        actor.get_children?.().forEach(child => this.scan(child, seen));

        const child = actor.get_child?.() ?? actor.child;
        if (child)
            this.scan(child, seen);
    }

    track_message(message) {
        if (this.messages.has(message))
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
        if (this.groups.has(group))
            return;

        this.groups.add(group);

        this.connect(
            group,
            'notify::expanded',
            () => this.queue_update_all()
        );

        this.connect(
            group,
            'destroy',
            () => this.groups.delete(group)
        );
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

        const child = message.get_child?.() ?? message.child;
        if (!child)
            return;

        if (this.is_stacked(message)) {
            if (!this.original_opacity.has(child))
                this.original_opacity.set(child, child.opacity);

            child.opacity = 0;
            return;
        }

        this.restore_child(child);
    }

    is_stacked(message) {
        return STACKED_PSEUDO_CLASSES.some(pseudo_class => {
            if (message.has_style_pseudo_class)
                return message.has_style_pseudo_class(pseudo_class);

            return (message.get_style_pseudo_class?.() ?? '').split(/\s+/).includes(pseudo_class);
        });
    }

    has_any_style_class(actor, style_classes) {
        return style_classes.some(style_class => this.has_style_class(actor, style_class));
    }

    restore_message(message) {
        const child = message.get_child?.() ?? message.child;
        if (child)
            this.restore_child(child);
    }

    restore_child(child) {
        if (!this.original_opacity.has(child) && child.opacity !== 0)
            return;

        const opacity = this.original_opacity.get(child);

        child.opacity = opacity > 0 ? opacity : 255;
        this.original_opacity.delete(child);
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
        this.enabled = false;
    }
};
