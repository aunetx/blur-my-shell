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
        this.live_pipeline = null;
        this.actor = null;
        this.bg_manager = null;
        this.source_paint_id = 0;
        this.sync_until = 0;
        this.tracking = false;
        this.destroyed = false;
        this.visible_id = 0;
        this.repaint_loop = null;
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
            if (this.actor.visible) {
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
        if (this.destroyed || !this.actor)
            return false;
        if (!this.has_valid_geometry(geometry))
            return false;

        const updated = this.live_pipeline?.update_geometry?.({
            x: Math.round(geometry.x),
            y: Math.round(geometry.y),
            width: Math.ceil(geometry.width),
            height: Math.ceil(geometry.height),
        });
        if (!updated)
            return false;

        this.show_surface();
        this.prepare_visible();
        return true;
    }

    update_stage_geometry(geometry) {
        if (this.destroyed || !this.actor || !geometry)
            return false;
        if (!this.has_valid_geometry(geometry))
            return false;

        this.live_pipeline?.update_stage_geometry?.(geometry);
        this.show_surface();
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
        if (
            !this.actor?.visible
            || (!this.tracking && GLib.get_monotonic_time() > this.sync_until)
        ) {
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
        if (this.destroyed || !this.actor?.visible)
            return;

        invalidate_stacked_window_actors();
        this.live_pipeline?.sync?.();
        if (force_redraw || this.live_pipeline?.window_source?.changed)
            this.live_pipeline?.invalidate_source?.();
        this.repaint();
    }

    queue_source_paint_sync() {
        if (this.destroyed || !this.actor?.visible || this.source_paint_id)
            return;

        this.source_paint_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.source_paint_id = 0;
            this.sync(true);
            this.request_frame_sync(120);
            return GLib.SOURCE_REMOVE;
        });
    }

    repaint() {
        try {
            this.live_pipeline?.effects?.forEach(effect => effect.queue_repaint?.());
            this.actor?.queue_redraw?.();
        } catch (e) { }
    }

    show_surface() {
        const was_visible = this.actor?.visible;
        try {
            this.actor?.show?.();
        } catch (e) { }
        return !was_visible && this.actor?.visible;
    }

    hide_surface() {
        try {
            this.actor?.hide?.();
        } catch (e) { }
        this.repaint_loop?.stop();
        this.tracking = false;
    }

    hide(clear_source = false) {
        this.hide_surface();
        if (clear_source)
            this.live_pipeline?.clear_source?.();
    }

    show() {
        try {
            this.actor?.show?.();
            this.sync();
        } catch (e) { }
    }

    set_opacity(opacity) {
        try {
            this.actor.opacity = opacity;
        } catch (e) { }
    }

    has_opacity(opacity) {
        try {
            return this.actor?.opacity === opacity;
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
    }

    has_valid_geometry(geometry) {
        return geometry?.width > 0 && geometry?.height > 0;
    }

    destroy({ actor_destroyed = false } = {}) {
        this.destroyed = true;
        if (this.source_paint_id)
            GLib.source_remove(this.source_paint_id);
        this.repaint_loop?.stop();
        this.tracking = false;

        const actor = this.actor;
        try {
            if (actor && this.visible_id)
                actor.disconnect(this.visible_id);
        } catch (e) { }
        try {
            this.live_pipeline?.destroy?.({ actor_destroyed });
        } catch (e) { }

        if (!actor_destroyed) {
            try {
                actor?.get_parent?.()?.remove_child?.(actor);
            } catch (e) { }
            try {
                actor?.destroy?.();
            } catch (e) { }
        }

        this.live_pipeline = null;
        this.actor = null;
        this.bg_manager = null;
        this.source_paint_id = 0;
        this.visible_id = 0;
        this.repaint_loop = null;
    }
};