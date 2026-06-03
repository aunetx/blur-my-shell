import GLib from 'gi://GLib';
import Meta from 'gi://Meta';

import { invalidate_stacked_window_actors } from './live_window_cache.js';

export const FrameRepaintLoop = class FrameRepaintLoop {
    constructor(repaint, should_repaint) {
        this.repaint = repaint;
        this.should_repaint = should_repaint;
        this.enabled = false;
        this.later_id = 0;
    }

    start() {
        this.enabled = true;
        this.queue();
    }

    stop() {
        this.enabled = false;
        if (this.later_id)
            global.compositor.get_laters().remove(this.later_id);
        this.later_id = 0;
    }

    queue() {
        if (!this.enabled || this.later_id)
            return;

        this.later_id = global.compositor.get_laters().add(
            Meta.LaterType.BEFORE_REDRAW,
            () => this.tick()
        );
    }

    tick() {
        this.later_id = 0;
        if (!this.enabled)
            return GLib.SOURCE_REMOVE;

        invalidate_stacked_window_actors();

        if (this.should_repaint()) {
            try {
                this.repaint();
            } catch (e) { }
        }
        this.queue();
        return GLib.SOURCE_REMOVE;
    }
};
