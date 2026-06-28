import GLib from 'gi://GLib';

import { FrameRepaintLoop } from './frame_repaint_loop.js';
import { LivePipeline } from './live_pipeline.js';
import { invalidate_stacked_window_actors } from './live_window_cache.js';

export const LiveBlurSurface = class LiveBlurSurface {
    constructor({
        effects_manager,
        pipelines_manager,
        pipeline_id,
        widget_name,
        corner_radius_getter,
        has_corner_radius = true,
        pipeline_options = {},
        window_source_options = {},
        overview_source_getter = undefined,
        style_class_name = null,
        prepare_on_visible = true,
    }) {
        this.effects_manager = effects_manager;
        this.pipelines_manager = pipelines_manager;
        this.pipeline_id = pipeline_id;
        this.widget_name = widget_name;
        this.corner_radius_getter = corner_radius_getter;
        this.has_corner_radius = has_corner_radius;
        this.pipeline_options = pipeline_options;
        this.window_source_options = window_source_options;
        this.overview_source_getter = overview_source_getter;
        this.style_class_name = style_class_name;
        this.prepare_on_visible = prepare_on_visible;
        this.live_pipeline = null;
        this.actor = null;
        this.bg_manager = null;
        this.source_paint_id = 0;
        this.sync_until = 0;
        this.tracking = false;
        this.destroyed = false;
        this.visible_id = 0;
        this.actor_destroyed = false;
        this.repaint_loop = null;
        this.geometry = null;
    }

    create({ container = null, insert_index = 0 } = {}) {
        this.destroyed = false;
        this.live_pipeline = new LivePipeline({
            effects_manager: this.effects_manager,
            pipelines_manager: this.pipelines_manager,
            pipeline_id: this.pipeline_id,
            corner_radius_getter: this.corner_radius_getter,
            has_corner_radius: this.has_corner_radius,
            pipeline_options: this.pipeline_options,
            effects_changed: () => this.on_effects_changed(),
            window_source_options: this.window_source_options,
            overview_source_getter: this.overview_source_getter,
        });

        [this.actor, this.bg_manager] = this.live_pipeline.create_background_with_effect(
            container,
            this.widget_name
        );
        this.actor_destroyed = false;
        try {
            this.actor.connect('destroy', () => this.actor_destroyed = true);
        } catch (e) { }

        if (this.style_class_name)
            this.actor.add_style_class_name(this.style_class_name);

        if (container) {
            try {
                container.set_child_at_index(this.actor, insert_index);
            } catch (e) { }
        }

        this.actor.hide();
        this.repaint_loop = new FrameRepaintLoop(
            () => this.sync_frame(),
            () => !this.destroyed
        );
        this.visible_id = this.actor.connect('notify::visible', () => {
            if (this.destroyed)
                return;
            if (this.actor.visible && this.prepare_on_visible) {
                this.prepare_visible();
            } else
                this.repaint_loop?.stop();
        });
        this.on_effects_changed();
        return this;
    }

    get effects_pipeline() {
        return this.live_pipeline?.pipeline ?? null;
    }

    on_effects_changed() {
        this.repaint();
        this.request_frame_sync();
    }

    update_local_geometry(geometry) {
        if (!this.has_actor())
            return false;
        if (!this.has_valid_geometry(geometry))
            return false;

        geometry = this.normalize_geometry(geometry);
        const geometry_changed = !this.has_same_geometry(geometry);
        if (!geometry_changed && this.is_actor_visible())
            return true;

        const updated = this.live_pipeline?.update_geometry?.({
            x: Math.round(geometry.x),
            y: Math.round(geometry.y),
            width: Math.ceil(geometry.width),
            height: Math.ceil(geometry.height),
        });
        if (!updated)
            return false;

        const shown = this.show_surface();
        this.geometry = geometry;
        if (shown || geometry_changed)
            this.prepare_visible();
        return true;
    }

    update_stage_geometry(geometry) {
        if (!this.has_actor() || !geometry)
            return false;
        if (!this.has_valid_geometry(geometry))
            return false;

        geometry = this.normalize_geometry(geometry);
        const geometry_changed = !this.has_same_geometry(geometry);
        if (!geometry_changed && this.is_actor_visible())
            return true;

        this.live_pipeline?.update_stage_geometry?.(geometry);
        this.geometry = geometry;
        if (this.is_actor_visible() && geometry_changed && this.prepare_on_visible)
            this.prepare_visible();
        return true;
    }

    prepare_visible() {
        this.sync(true);
        this.request_frame_sync(400);
        this.queue_source_paint_sync();
    }

    request_frame_sync(duration_ms = 300) {
        this.sync_until = Math.max(
            this.sync_until,
            GLib.get_monotonic_time() + duration_ms * 1000
        );
        this.repaint_loop?.start();
    }

    sync_frame() {
        if (!this.is_actor_visible() || (!this.tracking && GLib.get_monotonic_time() > this.sync_until)) {
            this.repaint_loop?.stop();
            return;
        }

        this.sync();
    }

    start_tracking() {
        this.tracking = true;
        this.repaint_loop?.start();
        this.sync();
    }

    stop_tracking() {
        this.tracking = false;
        this.request_frame_sync(150);
    }

    sync(force_redraw = false) {
        if (!this.is_actor_visible())
            return;

        invalidate_stacked_window_actors();
        this.live_pipeline?.sync?.();
        if (force_redraw || this.live_pipeline?.window_source?.changed)
            this.live_pipeline?.invalidate_source?.();
        this.repaint();
    }

    queue_source_paint_sync() {
        if (!this.is_actor_visible() || this.source_paint_id)
            return;

        this.source_paint_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.source_paint_id = 0;
            this.sync(true);
            return GLib.SOURCE_REMOVE;
        });
    }

    repaint() {
        try {
            this.live_pipeline?.effects?.forEach(effect => effect.queue_repaint?.());
            if (!this.actor_destroyed)
                this.actor?.queue_redraw?.();
        } catch (e) { }
    }

    show_surface() {
        if (!this.has_actor())
            return false;

        const was_visible = this.is_actor_visible();
        try {
            this.actor.show();
        } catch (e) { }
        return !was_visible && this.is_actor_visible();
    }

    hide_surface() {
        try {
            if (this.has_actor())
                this.actor.hide();
        } catch (e) { }
        this.repaint_loop?.stop();
        this.tracking = false;
        this.geometry = null;
    }

    hide(clear_source = false) {
        this.hide_surface();
        if (clear_source)
            this.live_pipeline?.clear_source?.();
    }

    show() {
        try {
            if (this.show_surface())
                this.sync();
        } catch (e) { }
    }

    set_opacity(opacity) {
        try {
            if (this.has_actor())
                this.actor.opacity = opacity;
        } catch (e) { }
    }

    has_opacity(opacity) {
        try {
            return this.has_actor() && this.actor.opacity === opacity;
        } catch (e) {
            return false;
        }
    }

    update_corner_radius() {
        this.live_pipeline?.update_corner_radius?.();
    }

    update_pipeline(pipeline_id = this.pipeline_id) {
        this.pipeline_id = pipeline_id;
        this.live_pipeline?.change_pipeline_to?.(pipeline_id);
        this.update_corner_radius();
    }

    clear_source() {
        this.live_pipeline?.clear_source?.();
        this.geometry = null;
    }

    has_actor() {
        return !this.destroyed && !this.actor_destroyed && !!this.actor;
    }

    is_actor_visible() {
        try {
            return this.has_actor() && this.actor.visible;
        } catch (e) {
            this.actor_destroyed = true;
            return false;
        }
    }

    has_valid_geometry(geometry) {
        return (
            geometry?.width > 0
            && geometry?.height > 0
            && Number.isFinite(geometry.x)
            && Number.isFinite(geometry.y)
            && Number.isFinite(geometry.width)
            && Number.isFinite(geometry.height)
        );
    }

    normalize_geometry(geometry) {
        return {
            ...geometry,
            x: Math.round(geometry.x),
            y: Math.round(geometry.y),
            target_x: Number.isFinite(geometry.target_x) ? Math.round(geometry.target_x) : undefined,
            target_y: Number.isFinite(geometry.target_y) ? Math.round(geometry.target_y) : undefined,
            width: Math.ceil(geometry.width),
            height: Math.ceil(geometry.height),
        };
    }

    has_same_geometry(geometry) {
        return (
            this.geometry
            && this.geometry.x === geometry.x
            && this.geometry.y === geometry.y
            && this.geometry.target_x === geometry.target_x
            && this.geometry.target_y === geometry.target_y
            && this.geometry.width === geometry.width
            && this.geometry.height === geometry.height
        );
    }

    destroy({ actor_destroyed = false } = {}) {
        this.destroyed = true;
        actor_destroyed = actor_destroyed || this.actor_destroyed;
        if (this.source_paint_id)
            GLib.source_remove(this.source_paint_id);
        this.repaint_loop?.stop();
        this.tracking = false;

        const actor = this.actor;
        this.actor = null;
        this.bg_manager = null;
        this.visible_id = 0;
        try {
            this.live_pipeline?.destroy?.({ actor_destroyed });
        } catch (e) { }

        if (!actor_destroyed) {
            try {
                actor?.destroy?.();
            } catch (e) { }
        }

        this.live_pipeline = null;
        this.source_paint_id = 0;
        this.actor_destroyed = false;
        this.repaint_loop = null;
        this.geometry = null;
    }
};
