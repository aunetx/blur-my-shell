import GLib from 'gi://GLib';

import { has_any_style_class, has_style_class, is_internal_actor } from './actors.js';
import { StackMaskEffect, get_cover_geometry } from './stack_mask.js';

const STACKED_PSEUDO_CLASSES = ['second-in-stack', 'lower-in-stack'];
const MESSAGE_CONTAINER_STYLE_CLASSES = ['message-list', 'message-view', 'message-notification-group'];
const VISIBLE_STACK_SIZE = 3;

export const PopupBlurMessageStacks = class PopupBlurMessageStacks {
    constructor(connections) {
        this.connections = connections;
        this.containers = new Set();
        this.groups = new Map();
        this.messages = new Set();
        this.watched_actors = new WeakSet();
        this.stack_effects = new Map();
        this.update_ids = new Map();
        this.original_clips = new WeakMap();
        this.original_child_opacity = new WeakMap();
        this.original_message_opacity = new WeakMap();
        this.original_header_opacity = new WeakMap();
    }

    track_container(container, scan_children = true) {
        if (this.containers.has(container))
            return;

        this.watch_actor(container);
        this.containers.add(container);
        if (scan_children)
            this.scan(container);

        this.connections.connect(
            container,
            'child-added',
            (_, child) => {
                this.scan(child);
                this.queue_update_all();
            }
        );
        this.connections.connect(
            container,
            'child-removed',
            () => this.queue_update_all()
        );
    }

    scan(actor, seen = new WeakSet()) {
        if (is_internal_actor(actor) || seen.has(actor))
            return;

        seen.add(actor);

        if (has_any_style_class(actor, MESSAGE_CONTAINER_STYLE_CLASSES))
            this.track_container(actor, false);

        if (has_style_class(actor, 'message-notification-group'))
            this.track_group(actor);

        if (has_style_class(actor, 'message'))
            this.track_message(actor);

        actor.get_children().forEach(child => this.scan(child, seen));
    }

    track_message(message) {
        if (this.messages.has(message))
            return;

        this.watch_actor(message);
        this.messages.add(message);
        this.update_message(message);

        this.connections.connect(
            message,
            ['style-changed', 'notify::allocation'],
            () => this.queue_update_all()
        );
        this.connections.connect(
            message,
            'notify::pseudo-class',
            () => this.queue_update_message(message)
        );
    }

    track_group(group) {
        if (this.groups.has(group))
            return;

        this.watch_actor(group);
        const layout = group.layout_manager;
        this.groups.set(group, {
            layout,
            expansion_id: this.connections.connect(layout, 'notify::expansion', () => {
                this.update_group_header(group);
                this.update_group_messages(group);
            }),
        });
        this.update_group_header(group);

        this.connections.connect(
            group,
            'notify::expanded',
            () => this.update_all()
        );
        this.connections.connect(
            group,
            'notify::allocation',
            () => this.update_group_header(group)
        );
    }

    watch_actor(actor) {
        if (this.watched_actors.has(actor))
            return;

        this.watched_actors.add(actor);
        this.connections.connect(actor, 'destroy', () => this.forget_actor(actor));
    }

    forget_actor(actor) {
        this.containers.delete(actor);
        this.messages.delete(actor);
        this.stack_effects.delete(actor);
        this.cancel_update(actor);

        const group = this.groups.get(actor);
        if (group) {
            this.connections.disconnect(group.layout, group.expansion_id);
            this.groups.delete(actor);
        }

        this.stack_effects.forEach((effects, message) => {
            const effect = effects.get(actor);
            if (!effect)
                return;

            message.remove_effect(effect);
            effects.delete(actor);
            this.queue_update_message(message);
        });
    }

    update_all() {
        this.groups.forEach((_, group) => {
            this.update_group_header(group);
            this.update_group_messages(group);
        });
        this.messages.forEach(message => {
            if (!this.get_message_group(message))
                this.update_message(message);
        });
    }

    update_group_header(group) {
        const header = group._headerBox;
        if (!this.original_header_opacity.has(header))
            this.original_header_opacity.set(header, header.opacity);

        header.opacity = Math.round(
            group.layout_manager.expansion * this.original_header_opacity.get(header)
        );
    }

    restore_group_header(group) {
        const header = group._headerBox;
        if (!this.original_header_opacity.has(header))
            return;

        header.opacity = this.original_header_opacity.get(header);
        this.original_header_opacity.delete(header);
    }

    get_group_messages(group) {
        const messages = [];
        const find_messages = actor => {
            if (has_style_class(actor, 'message'))
                messages.push(actor);
            else
                actor.get_children().forEach(find_messages);
        };
        find_messages(group);
        return messages;
    }

    update_group_messages(group) {
        const expansion = group.layout_manager.expansion;
        this.get_group_messages(group).forEach((message, index) =>
            this.update_message_with_expansion(message, index, expansion, group)
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

            if (this.messages.has(message))
                this.update_message(message);

            return GLib.SOURCE_REMOVE;
        });

        this.update_ids.set(message, id);
    }

    cancel_update(message) {
        const id = this.update_ids.get(message);
        if (!id)
            return;

        GLib.source_remove(id);
        this.update_ids.delete(message);
    }

    update_message(message) {
        const group = this.get_message_group(message);
        if (group) {
            const index = this.get_group_messages(group).indexOf(message);
            this.update_message_with_expansion(
                message, Math.max(index, 0), group.layout_manager.expansion, group
            );
        } else if (this.is_stacked(message)) {
            this.collapse_message(message, null, -1);
        } else {
            this.remove_stack_mask(message);
        }
    }

    update_message_with_expansion(message, index, expansion, group) {
        this.watch_actor(message);

        if ((!this.is_stacked(message) && index === 0) || expansion >= 0.99) {
            this.remove_stack_mask(message);
            return;
        }

        if (expansion <= 0.01) {
            this.collapse_message(message, group, index);
            return;
        }

        if (message.width <= 0 || message.height <= 0)
            return;

        this.apply_rounded_stack_mask(message, group, index);

        // Stagger the fade so each card appears as the stack unravels.
        const stagger_start = Math.min(0.8, index * 0.04);
        const progress = Math.min(1.0, Math.max(0.0, (expansion - stagger_start) / (1.0 - stagger_start)));
        const target_alpha = Math.round(255 * progress);

        this.set_child_opacity(message, target_alpha);

        if (index >= VISIBLE_STACK_SIZE)
            this.set_message_opacity(message, target_alpha);
        else
            this.restore_message_opacity(message);
    }

    collapse_message(message, group, index) {
        this.apply_stack_mask(message, group, index);
        this.set_child_opacity(message, 0);
        this.restore_message_opacity(message);
    }

    apply_stack_mask(message, group, index) {
        const { width, height } = message;
        if (height <= 0 || width <= 0)
            return;

        if (group && index > 0 && index < VISIBLE_STACK_SIZE) {
            this.apply_rounded_stack_mask(message, group, index);
            return;
        }

        this.remove_stack_effects(message);

        if (index >= VISIBLE_STACK_SIZE) {
            // Hide cards past the third so they don't pile up behind it.
            this.set_stack_clip(message, 0, height, width, 0);
        } else {
            // Messages outside notification groups keep the legacy edge clip.
            const visible_edge = message.has_style_pseudo_class('second-in-stack') ? 10 : 6;
            this.set_stack_clip(message, 0, Math.max(0, height - visible_edge), width, visible_edge);
        }
    }

    apply_rounded_stack_mask(message, group, index) {
        this.restore_clip(message);

        let effects = this.stack_effects.get(message);
        if (!effects) {
            effects = new Map();
            this.stack_effects.set(message, effects);
        }

        // Subtract every overlapping card above this one. This also handles
        // large radii where the nearest card does not cover the whole overlap.
        const active = new Set();
        this.get_group_messages(group).slice(0, index).forEach(cover => {
            if (!cover.visible)
                return;
            const geometry = get_cover_geometry(message, cover);
            if (!geometry)
                return;

            active.add(cover);
            let effect = effects.get(cover);
            if (!effect) {
                this.watch_actor(cover);
                effect = new StackMaskEffect();
                effects.set(cover, effect);
                message.add_effect(effect);
            }
            effect.set_geometry(geometry);
        });

        effects.forEach((effect, cover) => {
            if (!active.has(cover)) {
                message.remove_effect(effect);
                effects.delete(cover);
            }
        });
    }

    remove_stack_effects(message) {
        const effects = this.stack_effects.get(message);
        if (!effects)
            return;

        effects.forEach(effect => message.remove_effect(effect));
        this.stack_effects.delete(message);
    }

    remove_stack_mask(message) {
        this.remove_stack_effects(message);
        this.restore_clip(message);
        this.restore_child_opacity(message);
        this.restore_message_opacity(message);
    }

    set_stack_clip(message, x, y, width, height) {
        if (!this.original_clips.has(message))
            this.original_clips.set(message, message.has_clip ? message.get_clip() : null);
        message.set_clip(x, y, width, height);
    }

    restore_clip(message) {
        if (!this.original_clips.has(message))
            return;

        const clip = this.original_clips.get(message);
        if (clip)
            message.set_clip(...clip);
        else
            message.remove_clip();
        this.original_clips.delete(message);
    }

    set_child_opacity(message, opacity) {
        if (!this.original_child_opacity.has(message))
            this.original_child_opacity.set(message, message.child.opacity);
        message.child.opacity = opacity;
    }

    restore_child_opacity(message) {
        if (!this.original_child_opacity.has(message))
            return;

        message.child.opacity = this.original_child_opacity.get(message);
        this.original_child_opacity.delete(message);
    }

    set_message_opacity(message, opacity) {
        if (!this.original_message_opacity.has(message))
            this.original_message_opacity.set(message, message.opacity);
        message.opacity = opacity;
    }

    restore_message_opacity(message) {
        if (!this.original_message_opacity.has(message))
            return;

        message.opacity = this.original_message_opacity.get(message);
        this.original_message_opacity.delete(message);
    }

    get_message_group(message) {
        for (let actor = message.get_parent(); actor; actor = actor.get_parent()) {
            if (has_style_class(actor, 'message-notification-group'))
                return actor;
        }
        return null;
    }

    is_stacked(message) {
        return STACKED_PSEUDO_CLASSES.some(pseudo_class => message.has_style_pseudo_class(pseudo_class));
    }

    disable() {
        this.update_ids.forEach(id => GLib.source_remove(id));
        this.update_ids.clear();
        this.messages.forEach(message => this.remove_stack_mask(message));
        this.groups.forEach((_, group) => this.restore_group_header(group));
        this.messages.clear();
        this.groups.clear();
        this.containers.clear();
        this.stack_effects.clear();
        this.watched_actors = new WeakSet();
        this.original_clips = new WeakMap();
        this.original_child_opacity = new WeakMap();
        this.original_message_opacity = new WeakMap();
        this.original_header_opacity = new WeakMap();
    }
};
