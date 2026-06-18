import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from './pipeline.js';
import { LiveWindowGroupSource } from './live_window_source.js';
import { map_source_effects } from './source_effects.js';
import { get_surface_corner_overrides, with_surface_corner } from './surface_corner.js';

const LiveSourceClone = GObject.registerClass({
    GTypeName: 'BmsLiveSourceClone',
}, class LiveSourceClone extends Clutter.Clone {
    vfunc_pick(_pick_context) { }
});

export const LivePipeline = class LivePipeline {
    constructor({
        effects_manager,
        pipelines_manager,
        pipeline_id,
        corner_radius_getter,
        has_corner_radius = true,
        pipeline_options = {},
        effects_changed = null,
        window_source_options = {},
        overview_source_getter = null,
    }) {
        this.effects_manager = effects_manager;
        this.pipelines_manager = pipelines_manager;
        this.pipeline_id = pipeline_id;
        this.corner_radius_getter = corner_radius_getter;
        this.has_corner_radius = has_corner_radius;
        this.pipeline_options = pipeline_options;
        this.effects_changed = effects_changed;
        this.window_source_options = window_source_options;
        this.overview_source_getter = overview_source_getter;
        this.background_clone = null;
        this.window_source = null;
        this.overview_clone = null;
        this.stage_geometry = null;
    }

    create_background_with_effect(container, widget_name) {
        this.actor = new St.Widget({
            name: widget_name,
            reactive: false,
            clip_to_allocation: true,
        });
        this.actor._bms_is_blur_actor = true;
        this.actor.set_size(1, 1);
        this.actor.hide();
        // NOTE: do NOT allocate here — the actor has no parent/stage yet, so
        // allocating triggers "Spurious clutter_actor_allocate ... isn't a
        // descendant of the stage". The real (non-zero) allocation is applied
        // later via allocate_actor()/allocate_to_box() once the actor is shown
        // onstage, which is also before the first paint.

        this.source = new Clutter.Actor({
            reactive: false,
            clip_to_allocation: false,
            layout_manager: new Clutter.FixedLayout(),
        });
        this.source.set_size(1, 1);
        this.actor.add_child(this.source);
        this.build_sources();

        this.pipeline = new Pipeline(
            this.effects_manager,
            this.pipelines_manager,
            this.pipeline_id,
            this.actor,
            this.get_pipeline_options()
        );

        this.bg_manager = new Clutter.Actor();
        this.bg_manager.backgroundActor = this.actor;
        this.bg_manager._bms_pipeline = this;
        if (container) {
            try {
                container.insert_child_at_index(this.actor, 0);
            } catch (e) { }
        }

        return [this.actor, this.bg_manager];
    }

    get_pipeline_options() {
        const pipeline_effects_mapper = this.pipeline_options.pipeline_effects_mapper;
        const effect_overrides = this.pipeline_options.effect_overrides ?? {};

        return {
            ...this.pipeline_options,
            effect_overrides: {
                ...effect_overrides,
                corner: effect_overrides.corner ?? get_surface_corner_overrides(
                    () => this.corner_radius_getter()
                ),
            },
            pipeline_effects_mapper: pipeline_effects_mapper ?? (effects => with_surface_corner(
                map_source_effects(effects),
                () => this.corner_radius_getter(),
                { always: this.has_corner_radius }
            )),
            effects_changed: effects => this.effects_changed?.(effects),
        };
    }

    build_sources() {
        this.destroy_sources();
        this.background_clone = this.create_clone(Main.layoutManager?._backgroundGroup);
        if (this.background_clone)
            this.source.add_child(this.background_clone);
        this.window_source = new LiveWindowGroupSource({
            container: this.source,
            clone_factory: source => this.create_clone(source),
            stop_at: this.window_source_options.stop_at ?? null,
            on_source_paint: this.window_source_options.on_source_paint ?? null,
            decompose_windows: this.window_source_options.decompose_windows ?? true,
        });
    }

    clear_source() {
        this.build_sources();
    }

    create_clone(source) {
        if (!source)
            return null;

        try {
            return new LiveSourceClone({ source, reactive: false });
        } catch (e) {
            return null;
        }
    }

    update_geometry(geometry) {
        if (!this.actor || !this.has_valid_geometry(geometry))
            return false;

        this.stage_geometry = null;
        this.actor.set_position(Math.round(geometry.x), Math.round(geometry.y));
        this.actor.set_size(Math.ceil(geometry.width), Math.ceil(geometry.height));
        this.actor.show();
        // Allocate after show — show() queues a relayout (sets NeedsAllocation);
        // allocating after clears it. allocate_to_box is stage-guarded to avoid
        // Spurious warnings when off-stage.
        this.allocate_to_box(
            this.actor,
            Math.round(geometry.x),
            Math.round(geometry.y),
            Math.ceil(geometry.width),
            Math.ceil(geometry.height)
        );
        this.sync();

        return true;
    }

    update_stage_geometry(geometry) {
        if (!this.actor || !this.has_valid_geometry(geometry))
            return false;
        if (!Number.isFinite(geometry.target_x) || !Number.isFinite(geometry.target_y))
            return false;

        this.stage_geometry = {
            target_x: Math.round(geometry.target_x),
            target_y: Math.round(geometry.target_y),
            width: Math.ceil(geometry.width),
            height: Math.ceil(geometry.height),
        };
        this.sync();
        return true;
    }

    sync() {
        const rect = this.stage_geometry ?? this.get_actor_stage_rect();
        if (!rect)
            return;

        const stage_x = this.stage_geometry?.target_x ?? rect.x;
        const stage_y = this.stage_geometry?.target_y ?? rect.y;
        if (!Number.isFinite(stage_x) || !Number.isFinite(stage_y))
            return;

        const stage_width = Math.max(
            1,
            Math.ceil(global.stage?.width ?? stage_x + rect.width)
        );
        const stage_height = Math.max(
            1,
            Math.ceil(global.stage?.height ?? stage_y + rect.height)
        );
        if (!Number.isFinite(stage_width) || !Number.isFinite(stage_height))
            return;
        this.source.set_position(-stage_x, -stage_y);
        this.source.set_size(stage_width, stage_height);
        this.allocate_to_box(this.source, -stage_x, -stage_y, stage_width, stage_height);
        this.sync_clone(this.background_clone, stage_width, stage_height);
        const previous = this.window_source?.sync(this.background_clone) ?? this.background_clone;
        this.sync_overview(stage_width, stage_height, previous);
        if (this.window_source?.changed)
            this.invalidate_source();
    }

    get_actor_stage_rect() {
        try {
            const [x, y] = this.actor.get_transformed_position();
            const [width, height] = this.actor.get_transformed_size();
            if (!Number.isFinite(x) || !Number.isFinite(y) || width <= 0 || height <= 0)
                return null;

            return {
                x: Math.round(x),
                y: Math.round(y),
                width: Math.ceil(width),
                height: Math.ceil(height),
            };
        } catch (e) {
            return null;
        }
    }

    sync_clone(clone, width, height) {
        try {
            clone.set_position(0, 0);
            clone.set_size(width, height);
            clone.show();
            // Allocate AFTER show — show() queues a relayout that sets
            // NeedsAllocation; allocating after clears it.
            this.allocate_to_box(clone, 0, 0, width, height);
        } catch (e) { }
    }

    allocate_to_box(actor, x, y, width, height) {
        try {
            if (!actor?.get_stage())
                return;
            // Guard against NaN — passing NaN to allocate() triggers a
            // CRITICAL assertion and leaves the actor unallocated.
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

    sync_overview(width, height, previous = null) {
        if (this.overview_source_getter === false)
            return this.destroy_overview_clone();

        const getter = typeof this.overview_source_getter === 'function'
            ? this.overview_source_getter
            : this.get_default_overview_source;
        const source = getter.call(this) ?? null;
        if (!source) {
            this.destroy_overview_clone();
            return;
        }

        if (this.overview_clone?.source !== source) {
            this.destroy_overview_clone();
            this.overview_clone = this.create_clone(source);
            if (this.overview_clone)
                this.source.add_child(this.overview_clone);
        }

        this.sync_clone(this.overview_clone, width, height);
        try {
            this.source?.set_child_above_sibling?.(this.overview_clone, previous);
        } catch (e) { }
    }

    get_default_overview_source() {
        if (!Main.overview?.visible && !Main.overview?.animationInProgress)
            return null;
        return Main.overview?._overview?._controls ?? null;
    }

    destroy_overview_clone() {
        try {
            this.overview_clone?.destroy?.();
        } catch (e) { }
        this.overview_clone = null;
    }

    repaint_effect() {
        this.sync();
        this.effects.forEach(effect => effect.queue_repaint?.());
        this.actor?.queue_redraw?.();
    }

    invalidate_source() {
        try {
            this.source?.queue_redraw?.();
            this.background_clone?.queue_redraw?.();
            this.overview_clone?.queue_redraw?.();
            this.window_source?.queue_redraw?.();
        } catch (e) { }
    }

    update_corner_radius() {
        this.pipeline?.apply_effect_overrides?.('corner');
    }

    change_pipeline_to(pipeline_id) {
        this.pipeline_id = pipeline_id;
        this.pipeline?.change_pipeline_to(pipeline_id);
        this.update_corner_radius();
    }

    hide() {
        try {
            this.actor?.hide?.();
        } catch (e) { }
    }

    destroy_sources() {
        this.window_source?.destroy();
        this.destroy_overview_clone();
        try {
            this.source?.destroy_all_children?.();
        } catch (e) { }
        this.background_clone = null;
        this.window_source = null;
    }

    destroy({ actor_destroyed = false } = {}) {
        if (!actor_destroyed)
            this.destroy_sources();
        try {
            this.pipeline?.destroy?.({ actor_destroyed });
        } catch (e) { }
        this.pipeline = null;
        this.actor = null;
        this.source = null;
        this.bg_manager = null;
        this.stage_geometry = null;
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

    get effects() {
        return this.pipeline?.effects ?? [];
    }
};