import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { get_stacked_window_actors } from './live_window_cache.js';

const LiveSourcePaintSignal = GObject.registerClass({
    GTypeName: 'BmsLiveSourcePaintSignal',
    Signals: {
        'source-paint': { param_types: [] },
    },
}, class LiveSourcePaintSignal extends Clutter.Effect {
    vfunc_paint(node, paint_context, paint_flags) {
        this.emit('source-paint');
        super.vfunc_paint(node, paint_context, paint_flags);
    }
});

export function is_bms_blur_child(child) {
    return (
        child?._bms_is_blur_actor
        || child?.name === 'bms-application-blurred-widget'
        || child?.name === 'blur-actor'
    );
}

export { get_stacked_window_actors, invalidate_stacked_window_actors } from './live_window_cache.js';

function is_window_actor_alive(actor) {
    try {
        return !!actor?.get_meta_window?.();
    } catch (e) {
        return false;
    }
}

function allocate_to_box(actor, x, y, width, height) {
    try {
        if (!actor?.get_stage())
            return;
        if (
            !Number.isFinite(x) || !Number.isFinite(y)
            || !Number.isFinite(width) || !Number.isFinite(height)
            || width <= 0 || height <= 0
        )
            return;
        actor.allocate(new Clutter.ActorBox({
            x1: Math.round(x),
            y1: Math.round(y),
            x2: Math.round(x + width),
            y2: Math.round(y + height),
        }));
    } catch (e) { }
}

export const LiveWindowGroupSource = class LiveWindowGroupSource {
    constructor({
        container,
        clone_factory,
        stop_at = null,
        on_source_paint = null,
        decompose_windows = true,
    }) {
        this.container = container;
        this.clone_factory = clone_factory;
        this.stop_at = stop_at;
        this.on_source_paint = on_source_paint;
        this.decompose_windows = decompose_windows;
        this.window_clones = new Map();
        this.paint_signals = new Map();
        this.changed = false;
        this.order = [];
    }

    sync(previous = null) {
        const active = new Set();
        const order = [];
        let last = previous;
        this.changed = false;
        const window_actors = get_stacked_window_actors();

        for (const actor of window_actors) {
            if (!is_window_actor_alive(actor))
                continue;
            if (this.stop_at?.(actor))
                break;
            if (!this.should_clone_window(actor))
                continue;

            active.add(actor);
            order.push(actor);
            const clone = this.ensure_window_clone(actor);
            this.sync_window_clone(actor, clone);
            last = this.stack_after(clone, last);
        }

        if (!this.has_same_order(order))
            this.changed = true;
        this.order = order;
        this.destroy_inactive_clones(active);
        return last;
    }

    has_same_order(order) {
        return (
            order.length === this.order.length
            && order.every((actor, index) => actor === this.order[index])
        );
    }

    should_clone_window(actor) {
        try {
            const meta_window = actor.get_meta_window?.();
            if (
                !meta_window
                || actor._bms_is_blur_actor
                || !actor.visible
                || actor.mapped === false
                || meta_window.minimized
                || meta_window.is_hidden?.() === true
            )
                return false;

            if (meta_window.showing_on_its_workspace?.() !== false)
                return true;

            return Main.overview?.visible || Main.overview?.animationInProgress;
        } catch (e) {
            return false;
        }
    }

    should_decompose_window(actor) {
        if (!this.decompose_windows)
            return false;

        try {
            return (actor?.get_children?.() ?? []).some(child => !is_bms_blur_child(child));
        } catch (e) {
            return false;
        }
    }

    is_decomposed_clone(clone) {
        return clone?._bms_content_clones instanceof Map;
    }

    get_cloneable_children(actor) {
        return (actor?.get_children?.() ?? []).filter(child => this.should_clone_child(child));
    }

    should_clone_child(child) {
        try {
            return (
                !is_bms_blur_child(child)
                && child.visible
                && child.mapped !== false
                && child.width > 0
                && child.height > 0
            );
        } catch (e) {
            return false;
        }
    }

    ensure_window_clone(actor) {
        let clone = this.window_clones.get(actor);
        const should_decompose = this.should_decompose_window(actor);
        if (clone && this.is_decomposed_clone(clone) !== should_decompose) {
            this.destroy_window_clone(actor, clone);
            clone = null;
        }
        if (clone)
            return clone;

        clone = this.create_window_clone(actor);
        if (clone) {
            this.changed = true;
            this.window_clones.set(actor, clone);
            this.track_source_paint(actor);
            this.container?.add_child?.(clone);
        }
        return clone;
    }

    create_window_clone(actor) {
        if (this.should_decompose_window(actor))
            return this.create_decomposed_window_clone(actor);
        return this.clone_factory(actor);
    }

    create_decomposed_window_clone(actor) {
        const clone = new Clutter.Actor({
            reactive: false,
            clip_to_allocation: true,
            layout_manager: new Clutter.FixedLayout(),
        });
        clone._bms_content_clones = new Map();
        clone.sync_source = source => this.sync_decomposed_window_clone(clone, source);
        clone.destroy_source = () => this.destroy_decomposed_window_clone(clone);
        clone.queue_source_redraw = () => this.queue_decomposed_window_clone_redraw(clone);
        return clone;
    }

    sync_decomposed_window_clone(clone, source) {
        const active = new Set();
        let previous = null;
        let changed = false;

        try {
            for (const child of this.get_cloneable_children(source)) {
                active.add(child);
                const child_clone = this.ensure_content_child_clone(clone, child);
                if (!child_clone)
                    continue;

                changed = this.sync_content_child_clone(source, child, child_clone) || changed;
                clone.set_child_above_sibling(child_clone, previous);
                previous = child_clone;
            }
        } catch (e) { }

        return this.destroy_inactive_content_clones(clone, active) || changed;
    }

    ensure_content_child_clone(clone, child) {
        let child_clone = clone._bms_content_clones.get(child);
        if (child_clone)
            return child_clone;

        child_clone = this.clone_factory(child);
        if (!child_clone)
            return null;

        clone._bms_content_clones.set(child, child_clone);
        clone.add_child(child_clone);
        return child_clone;
    }

    sync_content_child_clone(parent, child, child_clone) {
        try {
            const rect = this.get_child_local_rect(parent, child);
            const next_visible = child.visible && child.mapped !== false;
            const changed = (
                child_clone.x !== rect.x
                || child_clone.y !== rect.y
                || child_clone.width !== rect.width
                || child_clone.height !== rect.height
                || child_clone.opacity !== 255
                || child_clone.visible !== next_visible
            );

            child_clone.set_position(rect.x, rect.y);
            child_clone.set_size(rect.width, rect.height);
            child_clone.opacity = 255;
            child_clone.visible = next_visible;
            // Allocate AFTER setting visible — setting visible queues a
            // relayout that invalidates prior allocations.
            allocate_to_box(child_clone, rect.x, rect.y, rect.width, rect.height);

            if (changed)
                child_clone.queue_redraw?.();
            return changed;
        } catch (e) {
            return false;
        }
    }

    get_child_local_rect(parent, child) {
        try {
            const [parent_x, parent_y] = parent.get_transformed_position();
            const [child_x, child_y] = child.get_transformed_position();
            const [width, height] = child.get_transformed_size();
            return {
                x: Math.round(child_x - parent_x),
                y: Math.round(child_y - parent_y),
                width: Math.max(1, Math.ceil(width)),
                height: Math.max(1, Math.ceil(height)),
            };
        } catch (e) {
            return {
                x: Math.round(child.x ?? 0),
                y: Math.round(child.y ?? 0),
                width: Math.max(1, Math.ceil(child.width ?? 1)),
                height: Math.max(1, Math.ceil(child.height ?? 1)),
            };
        }
    }

    destroy_inactive_content_clones(clone, active) {
        let changed = false;
        [...clone._bms_content_clones.entries()].forEach(([child, child_clone]) => {
            if (active.has(child))
                return;

            try {
                child_clone.destroy();
            } catch (e) { }
            clone._bms_content_clones.delete(child);
            changed = true;
        });
        return changed;
    }

    destroy_decomposed_window_clone(clone) {
        try {
            clone?._bms_content_clones?.forEach(child_clone => child_clone.destroy());
        } catch (e) { }
        clone?._bms_content_clones?.clear?.();
    }

    queue_decomposed_window_clone_redraw(clone) {
        try {
            clone?._bms_content_clones?.forEach(child_clone => child_clone.queue_redraw?.());
        } catch (e) { }
    }

    sync_window_clone(actor, clone) {
        if (!clone || !is_window_actor_alive(actor))
            return;

        try {
            const [x, y] = actor.get_transformed_position();
            const [width, height] = actor.get_transformed_size();
            if (
                !Number.isFinite(x) || !Number.isFinite(y)
                || !Number.isFinite(width) || !Number.isFinite(height)
                || width <= 0 || height <= 0
            )
                return;

            const next_x = Math.round(x);
            const next_y = Math.round(y);
            const next_width = Math.max(1, Math.ceil(width));
            const next_height = Math.max(1, Math.ceil(height));
            const next_visible = actor.visible && actor.mapped !== false;

            const changed = (
                clone.x !== next_x
                || clone.y !== next_y
                || clone.width !== next_width
                || clone.height !== next_height
                || clone.opacity !== 255
                || clone.visible !== next_visible
            );

            if (changed) {
                this.changed = true;
                clone.queue_redraw?.();
            }

            clone.set_position(next_x, next_y);
            clone.set_size(next_width, next_height);
            clone.opacity = 255;
            clone.visible = next_visible;
            // Allocate AFTER setting visible — setting visible queues a
            // relayout that invalidates prior allocations.
            allocate_to_box(clone, next_x, next_y, next_width, next_height);
            if (clone.sync_source?.(actor))
                this.changed = true;

            if (changed)
                clone.queue_redraw?.();
        } catch (e) { }
    }

    stack_after(clone, previous) {
        if (!clone)
            return previous;

        try {
            this.container?.set_child_above_sibling?.(clone, previous);
        } catch (e) { }
        return clone;
    }

    destroy_window_clone(actor, clone) {
        this.untrack_source_paint(actor);
        try {
            clone.destroy_source?.();
            clone.destroy();
        } catch (e) { }
        this.window_clones.delete(actor);
        this.changed = true;
    }

    destroy_inactive_clones(active) {
        [...this.window_clones.entries()].forEach(([actor, clone]) => {
            if (active.has(actor) && is_window_actor_alive(actor))
                return;
            this.destroy_window_clone(actor, clone);
        });
    }

    queue_redraw() {
        try {
            this.container?.queue_redraw?.();
            this.window_clones.forEach(clone => {
                clone.queue_redraw?.();
                clone.queue_source_redraw?.();
            });
        } catch (e) { }
    }

    track_source_paint(actor) {
        if (!this.on_source_paint || this.paint_signals.has(actor) || !is_window_actor_alive(actor))
            return;

        try {
            const effect = new LiveSourcePaintSignal();
            const id = effect.connect('source-paint', () => {
                if (is_window_actor_alive(actor))
                    this.on_source_paint?.();
            });
            const destroy_id = actor.connect('destroy', () => this.untrack_source_paint(actor));
            actor.add_effect(effect);
            this.paint_signals.set(actor, { effect, id, destroy_id });
        } catch (e) { }
    }

    untrack_source_paint(actor) {
        const signal = this.paint_signals.get(actor);
        if (!signal)
            return;

        this.paint_signals.delete(actor);
        try {
            signal.effect.disconnect(signal.id);
        } catch (e) { }
        if (!is_window_actor_alive(actor))
            return;

        try {
            if (signal.destroy_id)
                actor.disconnect(signal.destroy_id);
        } catch (e) { }
        try {
            actor.remove_effect(signal.effect);
        } catch (e) { }
    }

    untrack_all_source_paints() {
        [...this.paint_signals.keys()].forEach(actor => this.untrack_source_paint(actor));
    }

    destroy({ actor_destroyed = false } = {}) {
        if (!actor_destroyed)
            this.destroy_inactive_clones(new Set());
        this.untrack_all_source_paints();
        this.window_clones.clear();
        this.paint_signals.clear();
        this.order = [];
        this.container = null;
        this.on_source_paint = null;
    }
};