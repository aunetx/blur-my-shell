import GLib from 'gi://GLib';

import { FrameRepaintLoop } from '../conveniences/frame_repaint_loop.js';

export const ApplicationsDragTracker = class ApplicationsDragTracker {
    constructor(applications) {
        this.applications = applications;
        this.loop = null;
        this.meta_window = null;
        this.tracked_window = null;
        this.settle_sync_ids = new Set();
    }

    enable() {
        this.applications.connections.connect(
            global.display,
            'grab-op-begin',
            (_display, meta_window) => this.start(meta_window)
        );
        this.applications.connections.connect(
            global.display,
            'grab-op-end',
            () => this.stop()
        );
        this.applications.connections.connect(
            global.display,
            'restacked',
            () => {
                this.sync_all_dynamic_surfaces(true);
                this.schedule_all_dynamic_surfaces();
            }
        );
        this.applications.connections.connect(
            global.window_group,
            ['child-added', 'child-removed'],
            () => {
                this.sync_all_dynamic_surfaces(true);
                this.schedule_all_dynamic_surfaces();
            }
        );
    }

    start(meta_window) {
        if (!this.get_window_actor(meta_window))
            return;

        const tracked_window = this.get_tracked_blur_window(meta_window);
        if (!tracked_window && this.get_dynamic_surfaces().length === 0)
            return;

        this.stop();
        this.meta_window = meta_window;
        this.tracked_window = tracked_window;
        this.meta_window?.blur_surface?.start_tracking?.();
        this.loop = new FrameRepaintLoop(
            () => this.update(),
            () => this.should_update()
        );
        this.loop.start();
        this.update();
    }

    should_update() {
        return Boolean(this.get_window_actor(this.meta_window));
    }

    update() {
        if (this.tracked_window)
            this.applications.update_size(this.tracked_window);
        this.sync_all_dynamic_surfaces(true);
    }

    queue_window_update(meta_window) {
        if (meta_window)
            this.applications.geometry_scheduler.queue(
                meta_window,
                this.applications.blur_settings.STATIC_BLUR
            );
        this.sync_all_dynamic_surfaces(true);
    }

    schedule_all_dynamic_surfaces() {
        [0, 50, 150].forEach(delay => {
            const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT_IDLE, delay, () => {
                this.settle_sync_ids.delete(id);
                this.sync_all_dynamic_surfaces(true);
                return GLib.SOURCE_REMOVE;
            });
            this.settle_sync_ids.add(id);
        });
    }

    stop() {
        if (!this.loop && !this.meta_window)
            return;

        const tracked_window = this.tracked_window;
        this.meta_window?.blur_surface?.stop_tracking?.();
        this.loop?.stop();
        this.loop = null;
        this.tracked_window = null;
        this.sync_all_dynamic_surfaces(true);
        this.schedule_all_dynamic_surfaces();
        this.meta_window = null;

        if (tracked_window)
            this.applications.geometry_scheduler.queue(tracked_window, true);
    }

    destroy() {
        this.stop();
        this.settle_sync_ids.forEach(id => GLib.source_remove(id));
        this.settle_sync_ids.clear();
    }

    get_tracked_blur_window(meta_window) {
        if (
            this.applications.is_tracked(meta_window)
            && meta_window.blur_actor
        )
            return meta_window;
        return null;
    }

    sync_all_dynamic_surfaces(force_redraw = false) {
        this.get_dynamic_surfaces().forEach(surface => {
            surface.sync?.(force_redraw);
            surface.request_frame_sync?.();
        });
    }

    get_dynamic_surfaces() {
        if (this.applications.blur_settings.STATIC_BLUR)
            return [];

        const surfaces = [];
        this.applications.tracked_windows.forEach(meta_window => {
            if (!meta_window.blur_actor?.visible)
                return;
            const surface = meta_window.blur_surface;
            if (surface?.sync)
                surfaces.push(surface);
        });
        return surfaces;
    }

    get_window_actor(meta_window) {
        try {
            return meta_window?.get_compositor_private?.() ?? null;
        } catch (e) {
            return null;
        }
    }
};