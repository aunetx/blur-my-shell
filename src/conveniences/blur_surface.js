import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { FrameRepaintLoop } from './frame_repaint_loop.js';
import { LivePipeline } from './live_pipeline.js';
import { Pipeline } from './pipeline.js';
import { map_source_effects } from './source_effects.js';
import { get_surface_corner_overrides, with_surface_corner } from './surface_corner.js';

export const BlurSurface = class BlurSurface {
    constructor({
        connections,
        component_settings,
        effects_manager,
        pipeline_manager = null,
        pipelines_manager = null,
        widget_name,
        group_name = null,
        use_absolute_position = true,
        manage_group_allocation = true,
        dynamic_options = {},
        pipeline_options = {},
    }) {
        this.connections = connections;
        this.component_settings = component_settings;
        this.effects_manager = effects_manager;
        this.pipeline_manager = pipelines_manager ?? pipeline_manager;
        this.widget_name = widget_name;
        this.group_name = group_name;
        this.use_absolute_position = use_absolute_position;
        this.manage_group_allocation = manage_group_allocation;
        this.dynamic_options = dynamic_options;
        this.pipeline_options = pipeline_options;
        this.repaint_loop = new FrameRepaintLoop(
            () => this.pipeline?.repaint_effect(),
            () => this.should_repaint()
        );
    }

    create({
        container,
        monitor_index,
        pipeline_id,
        static_blur,
    }) {
        this.destroy();
        this.destroyed = false;

        this.static_blur = static_blur;
        this.pipeline_id = pipeline_id;
        this.container = container;
        this.background_group = this.group_name ?
            new Meta.BackgroundGroup({ name: this.group_name, width: 0, height: 0 }) :
            null;
        if (this.background_group) {
            this.background_group.hide();
            container.insert_child_at_index(this.background_group, 0);
        }

        const target_container = this.background_group ?? container;
        this.target_container = target_container;

        if (static_blur)
            this.create_static(target_container, monitor_index);
        else
            this.create_dynamic(target_container);

        return this;
    }

    create_static(container, monitor_index) {
        const bg_managers = [];
        this.pipeline = new Pipeline(
            this.effects_manager,
            this.pipeline_manager,
            this.pipeline_id,
            null,
            this.get_static_pipeline_options()
        );
        this.actor = this.pipeline.create_background_with_effects(
            monitor_index,
            bg_managers,
            container,
            this.widget_name,
            this.use_absolute_position
        );
        this.bg_manager = bg_managers[0] ?? null;
        this.monitor_index = monitor_index;
        this.actor.hide();
    }

    create_dynamic(container) {
        this.pipeline = new LivePipeline({
            effects_manager: this.effects_manager,
            pipelines_manager: this.pipeline_manager,
            pipeline_id: this.pipeline_id,
            corner_radius_getter: () => this.get_corner_radius(),
            has_corner_radius: this.has_corner_radius(),
            pipeline_options: this.pipeline_options,
            effects_changed: () => this.update_repaint_loop(),
            window_source_options: this.dynamic_options.window_source_options ?? {},
            overview_source_getter: this.dynamic_options.overview_source_getter ?? null,
        });
        [this.actor, this.bg_manager] = this.pipeline.create_background_with_effect(
            container,
            this.widget_name
        );
        this.actor.hide();
        this.update_repaint_loop();
    }

    get_static_pipeline_options() {
        const pipeline_effects_mapper = this.pipeline_options.pipeline_effects_mapper;
        const effect_overrides = this.pipeline_options.effect_overrides ?? {};
        return {
            ...this.pipeline_options,
            effect_overrides: {
                ...effect_overrides,
                corner: get_surface_corner_overrides(() => this.get_corner_radius()),
            },
            pipeline_effects_mapper: effects => {
                const mapped_effects = pipeline_effects_mapper ?
                    pipeline_effects_mapper(effects) :
                    effects;
                return with_surface_corner(map_source_effects(mapped_effects), () => this.get_corner_radius(), {
                    always: this.has_corner_radius(),
                });
            },
        };
    }

    insert_group(parent, index = 0) {
        if (!this.background_group)
            return;
        if (this.background_group.get_parent?.() === parent)
            return;

        parent.insert_child_at_index(this.background_group, index);
    }

    update_static_geometry(parent, geometry) {
        if (this.destroyed)
            return false;
        if (!this.static_blur || !this.actor || !geometry)
            return false;
        if (!this.has_valid_geometry(geometry)) {
            this.hide_surface();
            return false;
        }

        const monitor = Main.layoutManager.monitors?.[geometry.monitor_index];
        if (!monitor) {
            this.hide_surface();
            return false;
        }

        if (this.monitor_index !== geometry.monitor_index)
            this.recreate_static(geometry.monitor_index);

        this.update_group_allocation(parent, geometry);
        const [parent_x, parent_y] = this.get_geometry_parent_position(parent, geometry);
        this.actor.set_position(
            Math.round(monitor.x - parent_x),
            Math.round(monitor.y - parent_y) + .5
        );
        this.actor.set_clip(
            Math.round(geometry.x - monitor.x),
            Math.round(geometry.y - monitor.y),
            Math.ceil(geometry.width),
            Math.ceil(geometry.height)
        );
        try {
            this.actor.queue_redraw?.();
            this.bg_manager?.backgroundActor?.queue_redraw?.();
        } catch (e) { }
        this.show_surface();

        return true;
    }

    update_local_geometry(geometry) {
        if (this.destroyed)
            return false;
        if (this.static_blur || !this.actor)
            return false;
        if (!this.has_valid_geometry(geometry)) {
            this.hide_surface();
            return false;
        }

        const local_geometry = {
            x: Math.round(geometry.x),
            y: Math.round(geometry.y),
            width: Math.ceil(geometry.width),
            height: Math.ceil(geometry.height),
        };

        this.update_group_allocation(this.container, local_geometry);
        try {
            this.background_group?.show?.();
        } catch (e) { }
        this.pipeline?.update_geometry?.(local_geometry);
        this.show_surface();

        return true;
    }

    update_dynamic_geometry(parent, geometry) {
        if (this.destroyed)
            return false;
        if (this.static_blur)
            return false;
        if (!geometry) {
            this.hide_surface();
            return false;
        }

        const [parent_x, parent_y] = this.get_parent_position(parent);
        return this.update_local_geometry({
            x: Math.round(geometry.x - parent_x),
            y: Math.round(geometry.y - parent_y),
            width: geometry.width,
            height: geometry.height,
        });
    }

    recreate_static(monitor_index) {
        const container = this.target_container;
        this.destroy_background();
        this.create_static(container, monitor_index);
    }

    update_pipeline(pipeline_id) {
        this.pipeline_id = pipeline_id;
        this.pipeline?.change_pipeline_to?.(pipeline_id);
        this.update_repaint_loop();
    }

    update_repaint_loop(effects = null) {
        this.repaint_loop.stop();
        if (this.should_run_repaint_loop(effects))
            this.repaint_loop.start();
    }

    should_run_repaint_loop(effects = null) {
        return (
            !this.static_blur
            && this.actor
            && (effects ?? this.pipeline?.effects ?? []).length > 0
        );
    }

    update_corner_radius() {
        this.pipeline?.update_corner_radius?.();
        this.pipeline?.apply_effect_overrides?.('corner');
    }

    get_corner_radius() {
        return this.dynamic_options.corner_radius_getter?.() ??
            this.component_settings.CORNER_RADIUS;
    }

    has_corner_radius() {
        return (
            this.dynamic_options.corner_radius_getter !== undefined
            || this.component_settings.CORNER_RADIUS !== undefined
        );
    }

    should_repaint() {
        return !this.static_blur && this.is_actor_visible(this.actor);
    }

    has_valid_geometry(geometry) {
        return geometry?.width > 0 && geometry?.height > 0;
    }

    update_group_allocation(parent, geometry) {
        if (!this.background_group)
            return;
        if (!this.manage_group_allocation)
            return;

        const width = Math.max(
            1,
            Math.ceil(parent?.width || geometry.x + geometry.width || geometry.width)
        );
        const height = Math.max(
            1,
            Math.ceil(parent?.height || geometry.y + geometry.height || geometry.height)
        );

        try {
            this.background_group.set_position(0, 0);
            this.background_group.set_size(width, height);
        } catch (e) { }
    }

    show_surface() {
        if (this.destroyed)
            return;

        try {
            this.background_group?.show?.();
        } catch (e) { }
        try {
            this.actor?.show?.();
        } catch (e) { }
    }

    hide_surface() {
        try {
            this.actor?.hide?.();
        } catch (e) { }
        try {
            this.background_group?.hide?.();
        } catch (e) { }
        try {
            this.pipeline?.clear_source?.();
        } catch (e) { }
    }

    is_actor_visible(actor) {
        try {
            return actor && actor.visible && actor.mapped;
        } catch (e) {
            return false;
        }
    }

    destroy({ container_destroyed = false } = {}) {
        this.destroyed = true;
        this.repaint_loop?.stop();

        if (container_destroyed && this.bg_manager)
            this.bg_manager.backgroundActor = null;

        this.destroy_background();

        if (!container_destroyed) {
            if (this.background_group)
                this.destroy_group();
        }

        this.actor = null;
        this.bg_manager = null;
        this.pipeline = null;
        this.background_group = null;
        this.container = null;
        this.target_container = null;
        this.monitor_index = null;
    }

    destroy_background({ actor_destroyed = false } = {}) {
        this.repaint_loop?.stop();

        try {
            this.pipeline?.destroy?.({ actor_destroyed });
        } catch (e) { }

        try {
            this.bg_manager?.destroy?.();
        } catch (e) { }

        if (!actor_destroyed) {
            try {
                this.actor?.get_parent?.()?.remove_child?.(this.actor);
            } catch (e) { }

            try {
                this.actor?.destroy?.();
            } catch (e) { }
        }

        this.actor = null;
        this.bg_manager = null;
        this.pipeline = null;
        this.monitor_index = null;
    }

    get_parent_position(parent) {
        try {
            const [x, y] = parent.get_transformed_position();
            if (Number.isFinite(x) && Number.isFinite(y))
                return [x, y];
        } catch (e) { }

        return [0, 0];
    }

    get_geometry_parent_position(parent, geometry) {
        if (Number.isFinite(geometry?.parent_x) && Number.isFinite(geometry?.parent_y))
            return [geometry.parent_x, geometry.parent_y];

        return this.get_parent_position(parent);
    }

    destroy_group() {
        try {
            this.background_group.get_parent()?.remove_child(this.background_group);
        } catch (e) { }

        try {
            this.background_group.destroy_all_children();
        } catch (e) { }

        try {
            this.background_group.destroy();
        } catch (e) { }
    }

};