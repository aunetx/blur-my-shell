import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { PopupBlurSurfaceGeometry } from './surface_geometry.js';

export const PopupBlurSurfacePlacement = class PopupBlurSurfacePlacement {
    constructor(surface) {
        this.surface = surface;
        this.geometry = new PopupBlurSurfaceGeometry();
        this.clear();
        this.ready = false;
    }

    get_surface_geometry() {
        this.offscreen = false;

        const geometry = this.get_unclipped_surface_geometry();
        if (!this.has_valid_geometry(geometry))
            return null;

        const clipped_geometry = this.get_clipped_surface_geometry(geometry);
        if (!this.has_valid_geometry(clipped_geometry))
            return null;

        const monitor_geometry = this.get_monitor_clipped_surface_geometry(clipped_geometry);
        if (!this.has_valid_geometry(monitor_geometry)) {
            this.offscreen = true;
            return null;
        }

        return monitor_geometry;
    }

    get_unclipped_monitor_surface_geometry() {
        this.offscreen = false;

        const geometry = this.get_unclipped_surface_geometry();
        if (!this.has_valid_geometry(geometry))
            return null;

        const monitor_geometry = this.get_monitor_clipped_surface_geometry(geometry);
        if (!this.has_valid_geometry(monitor_geometry)) {
            this.offscreen = true;
            return null;
        }

        return monitor_geometry;
    }

    get_unclipped_surface_geometry() {
        try {
            let parent_x = 0;
            let parent_y = 0;

            if (this.surface.parent.get_transformed_position)
                [parent_x, parent_y] = this.surface.parent.get_transformed_position();

            const geometry_actor = this.surface.get_geometry_actor();
            let geometry = this.geometry.get(geometry_actor, {
                use_content: this.surface.should_use_content_geometry(),
                use_margins: this.surface.should_use_margin_geometry(),
            });

            const parent_bin = this.surface.parent?.bin;
            if (parent_bin) {
                try {
                    // Use the allocation box for width/height — these are in
                    // the parent's LOCAL coordinate space, so they don't
                    // include the parent's scale.  This is correct because
                    // the blur actor is a child of the parent and set_size()
                    // sets the local size (the parent's scale applies on top).
                    // Using get_transformed_size() here would include the
                    // parent's scale, causing a double-scale blip when the
                    // parent animates scale (e.g. BoxPointer 0.96→1).
                    // The allocation may be one frame stale at BEFORE_REDRAW,
                    // but the before-paint sync corrects it after relayout.
                    const alloc = parent_bin.get_allocation_box?.();
                    if (alloc) {
                        const bw = alloc.x2 - alloc.x1;
                        const bh = alloc.y2 - alloc.y1;
                        if (bw > 0 && bh > 0) {
                            geometry = {
                                x: parent_x + alloc.x1,
                                y: parent_y + alloc.y1,
                                width: bw,
                                height: bh,
                            };
                        }
                    }
                } catch (e) { }
            }

            if (!this.has_valid_geometry(geometry))
                return null;

            return this.create_surface_geometry(
                parent_x,
                parent_y,
                geometry.x,
                geometry.y,
                geometry.width,
                geometry.height
            );
        } catch (e) {
            return null;
        }
    }

    should_prefer_bin(actor_geom, bin_geom) {
        return false;
    }

    create_surface_geometry(parent_x, parent_y, target_x, target_y, width, height) {
        return {
            parent_x,
            parent_y,
            target_x,
            target_y,
            x: Math.round(target_x - parent_x),
            y: Math.round(target_y - parent_y),
            width: Math.ceil(width),
            height: Math.ceil(height),
        };
    }

    get_clipped_surface_geometry(geometry) {
        let clipped = {
            x: geometry.target_x,
            y: geometry.target_y,
            width: geometry.width,
            height: geometry.height,
        };

        let actor = this.surface.get_geometry_actor();
        while (actor && actor !== this.surface.parent) {
            const clip = this.geometry.get_transformed_clip(actor);
            if (clip) {
                clipped = this.geometry.intersect(clipped, clip);
                if (!this.has_valid_geometry(clipped))
                    return null;
            }

            try {
                actor = actor.get_parent?.();
            } catch (e) {
                break;
            }
        }

        return this.create_surface_geometry(
            geometry.parent_x,
            geometry.parent_y,
            clipped.x,
            clipped.y,
            clipped.width,
            clipped.height
        );
    }

    get_monitor_clipped_surface_geometry(geometry) {
        const rect = {
            x: geometry.target_x,
            y: geometry.target_y,
            width: geometry.width,
            height: geometry.height,
        };
        const cached_monitor = this.get_cached_monitor();
        const match = cached_monitor
            ? this.get_monitor_intersection(rect, cached_monitor.monitor, cached_monitor.index)
            : this.find_best_monitor_intersection(rect);

        if (!match)
            return null;

        this.monitor_index = match.monitor_index;

        const surface_geometry = this.create_surface_geometry(
            geometry.parent_x,
            geometry.parent_y,
            match.intersection.x,
            match.intersection.y,
            match.intersection.width,
            match.intersection.height
        );
        surface_geometry.monitor_index = match.monitor_index;
        return surface_geometry;
    }

    get_cached_monitor() {
        if (this.monitor_index === null)
            return null;

        const monitor = Main.layoutManager.monitors?.[this.monitor_index];
        if (!monitor) {
            this.monitor_index = null;
            return null;
        }

        return { monitor, index: this.monitor_index };
    }

    find_best_monitor_intersection(rect) {
        let best_match = null;
        let best_area = 0;

        (Main.layoutManager.monitors ?? []).forEach((monitor, index) => {
            const match = this.get_monitor_intersection(rect, monitor, index);
            if (!match)
                return;

            const area = match.intersection.width * match.intersection.height;
            if (area > best_area) {
                best_match = match;
                best_area = area;
            }
        });

        return best_match;
    }

    get_monitor_intersection(rect, monitor, monitor_index) {
        const intersection = this.geometry.intersect(rect, monitor);
        if (!this.has_valid_geometry(intersection))
            return null;

        return {
            monitor_index,
            intersection,
        };
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

    keep_transition_visible(transition_state) {
        if (
            this.offscreen
            || !this.ready
            || !this.has_cached_geometry()
            || !transition_state.running
            || !this.surface.is_visible()
        )
            return false;
        const opacity = this.surface.update_opacity(transition_state);
        if (opacity <= 0)
            return false;

        if (this.surface.static_blur) {
            try {
                if (!this.surface.static_actor?.blur_actor_destroyed)
                    this.surface.blur_actor?.show?.();
            } catch (e) { }
        }
        this.surface.show_actors();
        return true;
    }

    has_cached_geometry() {
        return (
            this.x !== null
            && this.y !== null
            && this.width > 0
            && this.height > 0
        );
    }

    has_cached_surface_geometry() {
        return (
            this.surface_x !== null
            && this.surface_y !== null
            && this.surface_width > 0
            && this.surface_height > 0
        );
    }

    has_surface_geometry_changed(geometry) {
        return (
            this.has_valid_geometry(geometry)
            && (
                !this.has_cached_surface_geometry()
                || this.surface_x !== geometry.target_x
                || this.surface_y !== geometry.target_y
                || this.surface_width !== geometry.width
                || this.surface_height !== geometry.height
            )
        );
    }

    store_surface_geometry(geometry) {
        this.surface_x = geometry.target_x;
        this.surface_y = geometry.target_y;
        this.surface_width = geometry.width;
        this.surface_height = geometry.height;
    }

    prepare_visible_geometry() {
        if (this.ready)
            return true;

        this.ready = true;
        if (
            this.surface.static_blur
            && !this.surface.is_notification_surface()
        ) {
            this.surface.opacity = 0;
            this.surface.update_surface_opacity(0);
            this.surface.hide_actors();
            this.surface.queue_update({ force: true });
            return false;
        }

        if (!this.surface.static_blur)
            this.surface.live_actor?.prepare_visible?.();
        return true;
    }

    update_surface_geometry(geometry) {
        if (this.surface.static_blur) {
            if (!this.update_static_geometry(
                geometry.target_x,
                geometry.target_y,
                geometry.width,
                geometry.height
            ))
                return false;
        } else {
            if (!this.update_dynamic_geometry(geometry))
                return false;
        }

        this.surface.allocate_actor?.();
        this.store_surface_geometry(geometry);
        return true;
    }

    update_dynamic_geometry(geometry) {
        try {
            const { x, y, width, height } = geometry;
            if (this.x !== x || this.y !== y) {
                this.surface.actor.set_position(x, y);
                this.surface.blur_actor.set_position(0, 0);
                this.x = x;
                this.y = y;
            }

            if (this.width !== width || this.height !== height) {
                this.surface.actor.set_size(width, height);
                this.surface.blur_actor.set_size(width, height);
                this.surface.update_tint_geometry(width, height);
                this.width = width;
                this.height = height;
            }
            this.surface.live_actor?.update_geometry(geometry);
        } catch (e) {
            return false;
        }

        return true;
    }

    update_static_geometry(target_x, target_y, width, height) {
        const geometry = this.surface.static_actor.update_geometry(
            target_x,
            target_y,
            width,
            height,
            this.monitor_index
        );
        this.surface.sync_static_actor();
        this.surface.update_tint_geometry(width, height);

        if (!geometry) {
            this.surface.hide_actors();
            return false;
        }

        this.x = geometry.x;
        this.y = geometry.y;
        this.width = geometry.width;
        this.height = geometry.height;
        return true;
    }

    hide() {
        this.ready = false;
        this.clear();
    }

    clear() {
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
        this.surface_x = null;
        this.surface_y = null;
        this.surface_width = null;
        this.surface_height = null;
        this.monitor_index = null;
        this.offscreen = false;
    }
};
