import GLib from 'gi://GLib';
import Meta from 'gi://Meta';

export const ApplicationsGeometryScheduler = class ApplicationsGeometryScheduler {
    constructor(update_size) {
        this.update_size = update_size;
        this.update_size_ids = new Map();
        this.settle_update_ids = new Map();
    }

    queue(meta_window, immediate = false) {
        if (!meta_window)
            return;

        if (immediate) {
            this.clear_update(meta_window);
            this.update_size(meta_window);
            return;
        }

        if (this.update_size_ids.has(meta_window))
            return;

        const id = global.compositor.get_laters().add(
            Meta.LaterType.BEFORE_REDRAW,
            () => {
                this.update_size_ids.delete(meta_window);
                this.update_size(meta_window);
                return GLib.SOURCE_REMOVE;
            }
        );
        this.update_size_ids.set(meta_window, id);
    }

    clear_update(meta_window) {
        const later_id = this.update_size_ids.get(meta_window);
        if (later_id)
            global.compositor.get_laters().remove(later_id);
        this.update_size_ids.delete(meta_window);
    }

    schedule_settle(meta_window) {
        if (this.settle_update_ids.has(meta_window))
            return;

        const ids = new Set();
        this.settle_update_ids.set(meta_window, ids);

        [50, 150, 400].forEach(delay => {
            const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT_IDLE, delay, () => {
                ids.delete(id);
                if (ids.size === 0)
                    this.settle_update_ids.delete(meta_window);
                this.update_size(meta_window);
                return GLib.SOURCE_REMOVE;
            });
            ids.add(id);
        });
    }

    clear(meta_window) {
        this.clear_update(meta_window);

        const timeout_ids = this.settle_update_ids.get(meta_window);
        timeout_ids?.forEach(id => GLib.source_remove(id));
        this.settle_update_ids.delete(meta_window);
    }
};