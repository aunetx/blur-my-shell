import { LiveBlurSurface } from '../conveniences/live_blur_surface.js';

export const ApplicationsLiveSurface = class ApplicationsLiveSurface {
    constructor({
        effects_manager,
        blur_settings,
        pipeline_manager,
        meta_window,
        window_actor,
        get_corner_radius,
    }) {
        this.meta_window = meta_window;
        this.window_actor = window_actor;
        this.surface = new LiveBlurSurface({
            effects_manager,
            pipelines_manager: pipeline_manager,
            pipeline_id: blur_settings.PIPELINE,
            widget_name: 'bms-application-blurred-widget',
            corner_radius_getter: get_corner_radius,
            has_corner_radius: true,
            overview_source_getter: false,
            window_source_options: {
                stop_at: actor => this.is_own_window_actor(actor),
                on_source_paint: () => this.surface.queue_source_paint_sync(),
                decompose_windows: true,
            },
        });
    }

    is_own_window_actor(actor) {
        try {
            return actor === this.window_actor || actor.get_meta_window?.() === this.meta_window;
        } catch (e) {
            return actor === this.window_actor;
        }
    }

    create() {
        this.surface.create({ container: this.window_actor, insert_index: 0 });
        return this;
    }

    get actor() {
        return this.surface.actor;
    }

    update_local_geometry(geometry) {
        return this.surface.update_local_geometry(geometry);
    }

    start_tracking() {
        this.surface.start_tracking();
    }

    stop_tracking() {
        this.surface.stop_tracking();
    }

    sync(force_redraw = false) {
        this.surface.sync(force_redraw);
    }

    prepare_visible() {
        this.surface.prepare_visible();
    }

    request_frame_sync(duration_ms = 300) {
        this.surface.request_frame_sync(duration_ms);
    }

    update_corner_radius() {
        this.surface.update_corner_radius();
    }

    update_pipeline(pipeline_id) {
        this.surface.update_pipeline(pipeline_id);
    }

    destroy() {
        this.surface.destroy();
        this.meta_window = null;
        this.window_actor = null;
    }
};