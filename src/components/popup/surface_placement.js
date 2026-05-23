import { PopupBlurSurfaceGeometry } from './surface_geometry.js';

export const PopupBlurSurfacePlacement = class PopupBlurSurfacePlacement {
    constructor(surface) {
        this.surface = surface;
        this.geometry = new PopupBlurSurfaceGeometry();
        this.clear();
        this.ready = false;
    }

    get_surface_geometry() {
        const geometry = this.get_unclipped_surface_geometry();
        if (!this.has_valid_geometry(geometry))
            return null;

        return this.get_clipped_surface_geometry(geometry);
    }

    get_unclipped_surface_geometry() {
        try {
            let parent_x = 0;
            let parent_y = 0;

            if (this.surface.parent.get_transformed_position)
                [parent_x, parent_y] = this.surface.parent.get_transformed_position();

            const geometry_actor = this.surface.get_geometry_actor();
            const geometry = this.geometry.get(geometry_actor, {
                use_content: this.surface.should_use_content_geometry(),
                use_margins: this.surface.should_use_margin_geometry(),
            });
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

    has_valid_geometry(geometry) {
        return geometry?.width > 0 && geometry?.height > 0;
    }

    keep_transition_visible(transition_state) {
        if (!this.ready || !this.has_cached_geometry() || !transition_state.running)
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
        this.surface.opacity = 0;
        this.surface.update_surface_opacity(0);
        this.surface.hide_actors();
        this.surface.queue_update();
        return false;
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
            if (!this.update_dynamic_geometry(geometry.x, geometry.y, geometry.width, geometry.height))
                return false;
        }

        this.store_surface_geometry(geometry);
        return true;
    }

    update_dynamic_geometry(x, y, width, height) {
        try {
            if (this.x !== x || this.y !== y) {
                this.surface.blur_actor.set_position(x, y);
                this.x = x;
                this.y = y;
            }

            if (this.width !== width || this.height !== height) {
                this.surface.blur_actor.set_size(width, height);
                this.width = width;
                this.height = height;
            }
        } catch (e) {
            return false;
        }

        return true;
    }

    update_static_geometry(target_x, target_y, width, height) {
        const geometry = this.surface.static_actor.update_geometry(target_x, target_y, width, height);
        this.surface.sync_static_actor();

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
    }
};
