import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from '../../conveniences/pipeline.js';
import { transform_to_actor_space } from './surface_geometry.js';
import { RoundedPipeline } from '../../render/rounded_pipeline.js';

export const PopupBlurStaticActor = class PopupBlurStaticActor {
    constructor(settings, effects_manager, target, root_actor, parent, get_corner_radius) {
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.target = target;
        this.root_actor = root_actor;
        this.parent = parent;
        this.get_corner_radius = get_corner_radius;
        this.rounded_pipeline = new RoundedPipeline(effects_manager, get_corner_radius);
        this.background_group = null;
        this.blur_actor = null;
        this.bg_manager = null;
        this.pipeline = null;
        this.monitor_index = null;
        this.background_opacity = null;
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
        this.background_group_destroyed = false;
        this.blur_actor_destroyed = false;
    }

    create() {
        this.background_group = new Meta.BackgroundGroup({
            name: 'bms-popup-backgroundgroup',
            width: 0,
            height: 0,
        });
        this.background_group.hide();
        this.connect_destroy(this.background_group, () => this.background_group_destroyed = true);

        return this.update_background();
    }

    get actor() {
        return this.background_group;
    }

    update_background(monitor_index = null) {
        const monitor = this.find_monitor(monitor_index);
        if (!monitor)
            return false;

        if (monitor.index === this.monitor_index && this.blur_actor && !this.blur_actor_destroyed)
            return true;

        this.destroy_background();

        const bg_manager_list = [];
        const pipeline = new Pipeline(
            this.effects_manager,
            global.blur_my_shell._pipelines_manager,
            this.settings.popup.PIPELINE,
            null
        );

        this.blur_actor = pipeline.create_background_with_effects(
            monitor.index,
            bg_manager_list,
            this.background_group,
            'bms-popup-blurred-widget'
        );
        this.blur_actor_destroyed = false;
        this.connect_destroy(this.blur_actor, () => this.blur_actor_destroyed = true);
        this.blur_actor.hide();
        this.bg_manager = bg_manager_list[0];
        this.pipeline = pipeline;
        this.monitor_index = monitor.index;
        this.rounded_pipeline.bind(this.pipeline, this.blur_actor);

        return true;
    }

    connect_destroy(actor, callback) {
        try {
            actor.connect('destroy', callback);
        } catch (e) { }
    }

    find_monitor(monitor_index = null) {
        if (monitor_index !== null)
            return Main.layoutManager.monitors?.[monitor_index] ?? null;

        return (
            Main.layoutManager.findMonitorForActor(this.target)
            ?? Main.layoutManager.findMonitorForActor(this.root_actor)
            ?? Main.layoutManager.primaryMonitor
        );
    }

    is_screenshot_ui() {
        return this.target?.has_style_class_name?.('screenshot-ui-panel')
            || this.root_actor?.has_style_class_name?.('screenshot-ui-panel');
    }

    update_geometry(target_x, target_y, width, height, monitor_index = null) {
        if (!this.update_background(monitor_index))
            return false;
        if (!this.blur_actor || this.blur_actor_destroyed)
            return false;

        const monitor = Main.layoutManager.monitors[this.monitor_index];
        if (!monitor)
            return false;

        const monitor_geometry = transform_to_actor_space(this.parent, monitor);
        const target_geometry = transform_to_actor_space(this.parent, {
            x: target_x,
            y: target_y,
            width,
            height,
        });
        if (!monitor_geometry || !target_geometry)
            return false;

        const clip_x = Math.round(target_geometry.x - monitor_geometry.x);
        const clip_y = Math.round(target_geometry.y - monitor_geometry.y);
        const clip_width = Math.ceil(target_geometry.width);
        const clip_height = Math.ceil(target_geometry.height);

        try {
            if (this.is_screenshot_ui() && this.background_group && !this.background_group_destroyed) {
                this.background_group.set_position(0, 0);
                this.background_group.set_size(monitor_geometry.width, monitor_geometry.height);
            }

            if (this.blur_actor.x !== monitor_geometry.x || this.blur_actor.y !== monitor_geometry.y)
                this.blur_actor.set_position(monitor_geometry.x, monitor_geometry.y);
            if (
                this.blur_actor.width !== monitor_geometry.width
                || this.blur_actor.height !== monitor_geometry.height
            )
                this.blur_actor.set_size(monitor_geometry.width, monitor_geometry.height);

            if (
                this.x !== clip_x
                || this.y !== clip_y
                || this.width !== clip_width
                || this.height !== clip_height
            ) {
                this.blur_actor.set_clip(clip_x, clip_y, clip_width, clip_height);
                this.x = clip_x;
                this.y = clip_y;
                this.width = clip_width;
                this.height = clip_height;
            }

            this.blur_actor.show();
        } catch (e) {
            return false;
        }

        return { x: clip_x, y: clip_y, width: clip_width, height: clip_height };
    }

    has_opacity(opacity) {
        try {
            if (this.background_opacity !== opacity)
                return false;

            return this.background_group.opacity === opacity;
        } catch (e) {
            return false;
        }
    }

    set_opacity(opacity) {
        try {
            if (!this.background_group_destroyed)
                this.background_group.opacity = opacity;
            if (this.blur_actor && !this.blur_actor_destroyed)
                this.blur_actor.opacity = 255;

            this.background_opacity = opacity;

        } catch (e) { }
    }

    update_settings() {
        try {
            this.rounded_pipeline.update();
        } catch (e) { }
    }

    update_pipeline() {
        try {
            this.bg_manager?._bms_pipeline.change_pipeline_to(this.settings.popup.PIPELINE);
            this.rounded_pipeline.update();
        } catch (e) { }
    }

    destroy(actor_already_destroyed = false) {
        const background_group = this.background_group;
        this.destroy_background(actor_already_destroyed);
        this.background_group = null;

        // Always destroy our owned overlay — `actor_already_destroyed` is about
        // the popup target, not this background group.
        try {
            if (!this.background_group_destroyed)
                background_group?.destroy?.();
        } catch (e) { }
    }

    destroy_background(actor_already_destroyed = false) {
        const bg_manager = this.bg_manager;
        const background_group = this.background_group;
        const blur_actor = this.blur_actor;
        this.bg_manager = null;
        this.blur_actor = null;
        this.pipeline = null;

        try {
            this.rounded_pipeline.destroy();
        } catch (e) { }

        if (bg_manager) {
            try {
                bg_manager._bms_pipeline?.destroy();
            } catch (e) { }

            try {
                if (actor_already_destroyed || this.blur_actor_destroyed)
                    bg_manager.backgroundActor = null;
                bg_manager.destroy();
            } catch (e) { }
        } else {
            try {
                if (!this.background_group_destroyed)
                    background_group?.destroy_all_children?.();
            } catch (e) { }
        }

        try {
            if (!this.blur_actor_destroyed)
                blur_actor?.destroy?.();
        } catch (e) { }

        this.monitor_index = null;
        this.background_opacity = null;
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
    }
};
