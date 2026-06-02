import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from '../../conveniences/pipeline.js';
import { PopupBlurStaticCorner } from './static_corner.js';

export const PopupBlurStaticActor = class PopupBlurStaticActor {
    constructor(settings, effects_manager, target, root_actor, get_corner_radius) {
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.target = target;
        this.root_actor = root_actor;
        this.get_corner_radius = get_corner_radius;
        this.static_corner = new PopupBlurStaticCorner(effects_manager, get_corner_radius);
        this.background_group = null;
        this.blur_actor = null;
        this.bg_manager = null;
        this.pipeline = null;
        this.monitor_index = null;
        this.opacity_factor = 1;
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
            null,
            {
                effect_overrides: {
                    native_static_gaussian_blur: params => this.get_blur_effect_overrides(params, 'unscaled_radius'),
                    gaussian_blur: params => this.get_blur_effect_overrides(params, 'radius'),
                    monte_carlo_blur: params => this.get_blur_effect_overrides(params, 'radius'),
                    downscale: () => this.get_texture_effect_overrides(),
                    upscale: () => this.get_texture_effect_overrides(),
                    pixelize: () => this.get_texture_effect_overrides(),
                    derivative: () => this.get_texture_effect_overrides(),
                    color: params => this.get_color_effect_overrides(params),
                    luminosity: () => this.get_luminosity_effect_overrides(),
                    noise: params => this.get_noise_effect_overrides(params),
                    rgb_to_hsl: () => this.get_texture_effect_overrides(),
                    hsl_to_rgb: () => this.get_texture_effect_overrides(),
                    corner: () => ({ radius: this.get_corner_radius() }),
                },
            }
        );

        this.blur_actor = pipeline.create_background_with_effects(
            monitor.index,
            bg_manager_list,
            this.background_group,
            'bms-popup-blurred-widget'
        );
        this.blur_actor_destroyed = false;
        this.connect_destroy(this.blur_actor, () => this.blur_actor_destroyed = true);
        this.blur_actor.set_position(monitor.x, monitor.y);
        this.blur_actor.hide();
        this.bg_manager = bg_manager_list[0];
        this.pipeline = pipeline;
        this.monitor_index = monitor.index;
        this.static_corner.bind(this.pipeline, this.blur_actor);

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

    update_geometry(target_x, target_y, width, height, monitor_index = null) {
        if (!this.update_background(monitor_index))
            return false;
        if (!this.blur_actor || this.blur_actor_destroyed)
            return false;

        const monitor = Main.layoutManager.monitors[this.monitor_index];
        if (!monitor)
            return false;

        const clip_x = Math.round(target_x - monitor.x);
        const clip_y = Math.round(target_y - monitor.y);

        try {
            if (
                this.x !== clip_x
                || this.y !== clip_y
                || this.width !== width
                || this.height !== height
            ) {
                this.blur_actor.set_clip(clip_x, clip_y, width, height);
                this.x = clip_x;
                this.y = clip_y;
                this.width = width;
                this.height = height;
            }

            this.blur_actor.show();
        } catch (e) {
            return false;
        }

        return { x: clip_x, y: clip_y, width, height };
    }

    has_opacity(opacity) {
        try {
            if (this.background_opacity !== opacity)
                return false;

            const background_actor = this.get_background_actor();
            return !background_actor || background_actor.opacity === opacity;
        } catch (e) {
            return false;
        }
    }

    set_opacity(opacity) {
        try {
            this.set_opacity_factor(opacity / 255);
            if (!this.background_group_destroyed)
                this.background_group.opacity = 255;
            if (this.blur_actor && !this.blur_actor_destroyed)
                this.blur_actor.opacity = 255;

            this.background_opacity = opacity;

            const background_actor = this.get_background_actor();
            if (background_actor)
                background_actor.opacity = opacity;

            if (!this.blur_actor_destroyed)
                this.blur_actor?.get_children?.().forEach(child => child.opacity = opacity);
        } catch (e) { }
    }

    set_opacity_factor(opacity_factor) {
        opacity_factor = Math.max(0, Math.min(1, opacity_factor));
        if (this.opacity_factor === opacity_factor)
            return;

        this.opacity_factor = opacity_factor;
        try {
            this.pipeline?.apply_effect_overrides();
        } catch (e) { }
    }

    get_blur_effect_overrides(params, radius_key) {
        const overrides = {};

        if (radius_key in params)
            overrides[radius_key] = params[radius_key] * this.opacity_factor;
        if ('brightness' in params)
            overrides.brightness = 1 - (1 - params.brightness) * this.opacity_factor;

        return overrides;
    }

    get_color_effect_overrides(params) {
        const overrides = this.get_texture_effect_overrides();

        if (Array.isArray(params.color) && params.color.length >= 4)
            overrides.color = params.color;

        return overrides;
    }

    get_luminosity_effect_overrides() {
        return this.get_texture_effect_overrides();
    }

    get_noise_effect_overrides(params) {
        const overrides = this.get_texture_effect_overrides();

        if ('noise' in params)
            overrides.noise = params.noise;

        return overrides;
    }

    get_texture_effect_overrides() {
        return {
            opacity_factor: this.opacity_factor,
        };
    }

    get_background_actor() {
        try {
            return this.bg_manager?.backgroundActor ?? null;
        } catch (e) {
            return null;
        }
    }

    update_settings() {
        try {
            this.static_corner.update();
        } catch (e) { }
    }

    update_pipeline() {
        try {
            this.bg_manager?._bms_pipeline.change_pipeline_to(this.settings.popup.PIPELINE);
            this.static_corner.update();
        } catch (e) { }
    }

    destroy() {
        const background_group = this.background_group;
        this.destroy_background();
        this.background_group = null;

        try {
            if (!this.background_group_destroyed)
                background_group?.destroy?.();
        } catch (e) { }
    }

    destroy_background() {
        const bg_manager = this.bg_manager;
        const background_group = this.background_group;
        this.bg_manager = null;
        this.blur_actor = null;
        this.pipeline = null;

        try {
            this.static_corner.destroy();
        } catch (e) { }

        if (bg_manager) {
            try {
                bg_manager._bms_pipeline.destroy();
            } catch (e) { }

            try {
                bg_manager.destroy();
            } catch (e) { }
        }

        try {
            if (!this.background_group_destroyed)
                background_group?.destroy_all_children?.();
        } catch (e) { }

        this.monitor_index = null;
        this.background_opacity = null;
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
    }
};
