import { LiveBlurSurface } from '../../conveniences/live_blur_surface.js';

export const PopupBlurLiveActor = class PopupBlurLiveActor {
    constructor(effects_manager, blur_settings, get_corner_radius) {
        this.blur_settings = blur_settings;
        this.surface = new LiveBlurSurface({
            effects_manager,
            pipelines_manager: global.blur_my_shell._pipelines_manager,
            pipeline_id: blur_settings.PIPELINE,
            widget_name: 'bms-popup-blurred-widget',
            corner_radius_getter: get_corner_radius,
            has_corner_radius: true,
            style_class_name: 'bms-popup-blurred-widget',
            overview_source_getter: false,
            window_source_options: {
                on_source_paint: () => this.surface.queue_source_paint_sync(),
            },
        });
        this.geometry = null;
        this.destroyed = false;
    }

    create() {
        this.destroyed = false;
        this.surface.create();
        return true;
    }

    get actor() {
        return this.surface.actor;
    }

    get pipeline() {
        return this.surface.effects_pipeline;
    }

    update_geometry(geometry) {
        this.geometry = geometry;
        this.sync();
    }

    sync() {
        if (this.destroyed || !this.geometry)
            return;
        this.surface.update_stage_geometry(this.geometry);
    }

    prepare_visible() {
        if (this.geometry)
            this.sync();
        else
            this.surface.prepare_visible();
    }

    repaint() {
        this.surface.repaint();
    }

    show() {
        this.surface.show();
        this.prepare_visible();
    }

    hide(clear_source = false) {
        this.surface.hide(clear_source);
    }

    set_opacity(opacity) {
        this.surface.set_opacity(opacity);
    }

    has_opacity(opacity) {
        return this.surface.has_opacity(opacity);
    }

    update_settings() {
        this.surface.update_corner_radius();
    }

    update_pipeline() {
        this.surface.update_pipeline(this.blur_settings.PIPELINE);
        this.update_settings();
    }

    destroy({ actor_destroyed = false } = {}) {
        this.destroyed = true;
        this.surface.destroy({ actor_destroyed });
        this.geometry = null;
    }
};