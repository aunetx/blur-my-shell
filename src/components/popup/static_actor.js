import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from '../../conveniences/pipeline.js';
import { RoundedPipeline } from '../../render/rounded_pipeline.js';
import { getLocalClip } from '../../render/effect_bounds.js';
import { has_style_class } from './actors.js';
import { transform_to_actor_space } from './surface_geometry.js';
import { PopupBlurAllocation } from './surface_allocation.js';

export const PopupBlurStaticActor = class PopupBlurStaticActor {
    constructor(settings, effects_manager, target, root_actor, parent, get_corner_radius) {
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.target = target;
        this.root_actor = root_actor;
        this.parent = parent;
        this.rounded_pipeline = new RoundedPipeline(effects_manager, get_corner_radius,
            () => this.settings.popup.ROUNDED_CORNERS);
        this.background_group = null;
        this.allocation_constraint = null;
        this.blur_actor = null;
        this.bg_manager = null;
        this.pipeline = null;
        this.monitor_index = null;
        this.background_opacity = null;
        this.clip = null;
    }

    create() {
        const monitor = Main.layoutManager.findMonitorForActor(this.target)
            ?? Main.layoutManager.findMonitorForActor(this.root_actor)
            ?? Main.layoutManager.primaryMonitor;
        if (!monitor)
            return false;

        this.background_group = new Meta.BackgroundGroup({
            name: 'bms-popup-backgroundgroup',
            width: 0,
            height: 0,
        });
        this.background_group.hide();
        if (this.parent === Main.layoutManager.modalDialogGroup) {
            this.allocation_constraint = new PopupBlurAllocation();
            this.background_group.add_constraint(this.allocation_constraint);
        }

        this.create_background(monitor);
        return true;
    }

    get actor() {
        return this.background_group;
    }

    create_background(monitor) {
        const bg_managers = [];
        this.pipeline = new Pipeline(
            this.effects_manager,
            global.blur_my_shell._pipelines_manager,
            this.settings.popup.PIPELINE,
            null
        );
        this.blur_actor = this.pipeline.create_background_with_effects(
            monitor.index,
            bg_managers,
            this.background_group,
            'bms-popup-blurred-widget'
        );
        this.blur_actor.hide();
        this.bg_manager = bg_managers[0];
        this.monitor_index = monitor.index;
        this.rounded_pipeline.bind(this.pipeline, this.blur_actor);
    }

    is_screenshot_ui() {
        return has_style_class(this.target, 'screenshot-ui-panel')
            || has_style_class(this.root_actor, 'screenshot-ui-panel');
    }

    update_geometry(target_rect, monitor_index) {
        const monitor = Main.layoutManager.monitors[monitor_index];
        if (!monitor)
            return null;

        if (monitor.index !== this.monitor_index) {
            this.destroy_background();
            this.create_background(monitor);
        }

        const monitor_geometry = transform_to_actor_space(this.parent, monitor);
        const target_geometry = transform_to_actor_space(this.parent, target_rect);

        // The wallpaper child already uses monitor-relative positioning and
        // clipping. Keep its container at the parent's origin under BinLayout.
        this.allocation_constraint?.set_geometry(0, 0, monitor_geometry.width, monitor_geometry.height);
        if (this.allocation_constraint || this.is_screenshot_ui()) {
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

        const clip = getLocalClip(this.blur_actor, target_rect) ?? {
            x: Math.round(target_geometry.x - monitor_geometry.x),
            y: Math.round(target_geometry.y - monitor_geometry.y),
            width: Math.ceil(target_geometry.width),
            height: Math.ceil(target_geometry.height),
        };

        const rounded_rect = this.blur_actor._bms_rounded_rect;
        if (
            rounded_rect?.x !== target_rect.x
            || rounded_rect.y !== target_rect.y
            || rounded_rect.width !== target_rect.width
            || rounded_rect.height !== target_rect.height
        ) {
            this.blur_actor._bms_rounded_rect = { ...target_rect };
            this.blur_actor.queue_redraw();
        }

        if (
            this.clip?.x !== clip.x
            || this.clip.y !== clip.y
            || this.clip.width !== clip.width
            || this.clip.height !== clip.height
        ) {
            this.blur_actor.set_clip(clip.x, clip.y, clip.width, clip.height);
            this.clip = clip;
        }

        this.blur_actor.show();
        return clip;
    }

    has_opacity(opacity) {
        return this.background_opacity === opacity
            && this.background_group.opacity === opacity;
    }

    set_opacity(opacity) {
        this.background_group.opacity = opacity;
        this.blur_actor.opacity = 255;
        this.background_opacity = opacity;
    }

    update_settings() {
        this.rounded_pipeline.update();
    }

    update_pipeline() {
        this.pipeline.change_pipeline_to(this.settings.popup.PIPELINE);
        this.rounded_pipeline.update();
    }

    destroy() {
        this.destroy_background();
        this.background_group.destroy();
        this.background_group = null;
    }

    destroy_background() {
        this.rounded_pipeline.destroy();
        this.pipeline.destroy();
        this.bg_manager.destroy();
        this.blur_actor.destroy();
        this.pipeline = null;
        this.bg_manager = null;
        this.blur_actor = null;
        this.monitor_index = null;
        this.background_opacity = null;
        this.clip = null;
    }
};
