import Graphene from 'gi://Graphene';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { PopupBlurSurfaceGeometry, transform_to_actor_space } from './geometry.js';
import { PopupBlurAllocation } from './allocation.js';

const MIN_SURFACE_DIMENSION = 2;

export const PopupBlurSurfacePlacement = class PopupBlurSurfacePlacement {
    constructor(surface) {
        this.surface = surface;
        this.geometry = new PopupBlurSurfaceGeometry();
        this.allocation_constraint = null;
        this.ready = false;
        this.clear();
    }

    get_surface_geometry() {
        this.offscreen = false;

        const geometry = this.get_unclipped_surface_geometry();
        if (!this.has_valid_geometry(geometry))
            return null;

        const clipped_geometry = this.get_clipped_surface_geometry(geometry);
        if (!this.has_valid_geometry(clipped_geometry))
            return null;

        return this.get_monitor_surface_geometry(clipped_geometry);
    }

    get_unclipped_monitor_surface_geometry() {
        this.offscreen = false;

        const geometry = this.get_unclipped_surface_geometry();
        if (!this.has_valid_geometry(geometry))
            return null;

        return this.get_monitor_surface_geometry(geometry);
    }

    get_monitor_surface_geometry(geometry) {
        const monitor_geometry = this.get_monitor_clipped_surface_geometry(geometry);
        if (!this.has_valid_geometry(monitor_geometry)) {
            this.offscreen = true;
            return null;
        }

        return monitor_geometry;
    }

    get_unclipped_surface_geometry() {
        const geometry = this.geometry.get(
            this.surface.target,
            !this.surface.uses_full_actor_geometry()
        );
        if (!this.has_valid_geometry(geometry))
            return null;

        return this.create_surface_geometry(geometry);
    }

    create_surface_geometry(geometry) {
        const local_geometry = transform_to_actor_space(this.surface.parent, geometry);

        return {
            target_x: geometry.x,
            target_y: geometry.y,
            target_width: geometry.width,
            target_height: geometry.height,
            x: Math.round(local_geometry.x),
            y: Math.round(local_geometry.y),
            width: Math.ceil(local_geometry.width),
            height: Math.ceil(local_geometry.height),
        };
    }

    get_target_rect(geometry) {
        return {
            x: geometry.target_x,
            y: geometry.target_y,
            width: geometry.target_width,
            height: geometry.target_height,
        };
    }

    get_clipped_surface_geometry(geometry) {
        let clipped = this.get_target_rect(geometry);

        for (
            let actor = this.surface.target;
            actor && actor !== this.surface.parent;
            actor = actor.get_parent()
        ) {
            const clip = this.geometry.get_transformed_clip(actor);
            if (!clip)
                continue;

            clipped = this.geometry.intersect(clipped, clip);
            if (!this.has_valid_geometry(clipped))
                return null;
        }

        return this.create_surface_geometry(clipped);
    }

    get_monitor_clipped_surface_geometry(geometry) {
        const rect = this.get_target_rect(geometry);
        const cached_monitor = this.get_cached_monitor();
        const match = (cached_monitor
            ? this.get_monitor_intersection(rect, cached_monitor, this.monitor_index)
            : null) ?? this.find_best_monitor_intersection(rect);

        if (!match)
            return null;

        this.monitor_index = match.monitor_index;

        const surface_geometry = this.create_surface_geometry(rect);
        surface_geometry.monitor_index = match.monitor_index;
        return surface_geometry;
    }

    get_cached_monitor() {
        if (this.monitor_index === null)
            return null;

        const monitor = Main.layoutManager.monitors[this.monitor_index];
        if (monitor)
            return monitor;

        this.monitor_index = null;
        return null;
    }

    find_best_monitor_intersection(rect) {
        let best_match = null;
        let best_area = 0;

        Main.layoutManager.monitors.forEach((monitor, index) => {
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

        return { monitor_index, intersection };
    }

    has_valid_geometry(geometry) {
        return geometry?.width >= MIN_SURFACE_DIMENSION
            && geometry.height >= MIN_SURFACE_DIMENSION;
    }

    keep_transition_visible(transition_state) {
        if (this.offscreen || !this.ready || !this.has_cached_geometry() || !transition_state.running)
            return false;

        if (this.surface.update_opacity() <= 0)
            return false;

        if (this.surface.static_blur)
            this.surface.blur_actor.show();
        this.surface.actor.show();
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
                || this.surface_x !== geometry.x
                || this.surface_y !== geometry.y
                || this.surface_width !== geometry.width
                || this.surface_height !== geometry.height
            )
        );
    }

    store_surface_geometry(geometry) {
        this.surface_x = geometry.x;
        this.surface_y = geometry.y;
        this.surface_width = geometry.width;
        this.surface_height = geometry.height;
    }

    prepare_visible_geometry() {
        if (this.ready)
            return true;

        this.ready = true;
        this.surface.opacity = 0;
        this.surface.update_surface_opacity(0);
        this.surface.actor.hide();
        this.surface.queue_update();
        return false;
    }

    update_surface_geometry(geometry) {
        const updated = this.surface.static_blur
            ? this.update_static_geometry(geometry)
            : this.update_dynamic_geometry(geometry);
        if (!updated)
            return false;

        this.store_surface_geometry(geometry);
        return true;
    }

    update_dynamic_geometry(geometry) {
        const local = this.get_target_local_geometry(geometry);
        if (!this.has_valid_geometry(local))
            return false;

        const blur_actor = this.surface.blur_actor;
        if (this.surface.parent === Main.layoutManager.modalDialogGroup
            && (!this.allocation_constraint || this.width !== local.width || this.height !== local.height)) {
            if (!this.allocation_constraint) {
                this.allocation_constraint = new PopupBlurAllocation();
                blur_actor.add_constraint(this.allocation_constraint);
            }
            // The transform positions the blur; constrain its local bounds only.
            this.allocation_constraint.set_geometry(0, 0, local.width, local.height);
        }

        blur_actor.set_position(0, 0);
        blur_actor.set_size(local.width, local.height);
        blur_actor.set_pivot_point(0, 0);
        blur_actor.set_transform(this.get_target_transform(local));
        this.x = geometry.x;
        this.y = geometry.y;
        this.width = local.width;
        this.height = local.height;
        return true;
    }

    get_target_local_geometry(geometry) {
        const target = this.surface.target;
        const [top_left_ok, x1, y1] = target.transform_stage_point(
            geometry.target_x,
            geometry.target_y
        );
        const [bottom_right_ok, x2, y2] = target.transform_stage_point(
            geometry.target_x + geometry.target_width,
            geometry.target_y + geometry.target_height
        );
        if (!top_left_ok || !bottom_right_ok)
            return null;

        return {
            x: x1,
            y: y1,
            width: x2 - x1,
            height: y2 - y1,
        };
    }

    get_target_transform(local) {
        const target = this.surface.target;
        const parent = this.surface.parent;
        const origin = target.apply_relative_transform_to_point(
            parent,
            new Graphene.Point3D({ x: local.x, y: local.y })
        );
        const horizontal = target.apply_relative_transform_to_point(
            parent,
            new Graphene.Point3D({ x: local.x + local.width, y: local.y })
        );
        const vertical = target.apply_relative_transform_to_point(
            parent,
            new Graphene.Point3D({ x: local.x, y: local.y + local.height })
        );

        const matrix = new Graphene.Matrix();
        matrix.init_from_2d(
            (horizontal.x - origin.x) / local.width,
            (horizontal.y - origin.y) / local.width,
            (vertical.x - origin.x) / local.height,
            (vertical.y - origin.y) / local.height,
            origin.x,
            origin.y
        );
        return matrix;
    }

    update_static_geometry(geometry) {
        const clip = this.surface.static_actor.update_geometry(
            this.get_target_rect(geometry),
            this.monitor_index
        );
        this.surface.sync_static_actor();

        if (!clip) {
            this.surface.actor.hide();
            return false;
        }

        this.x = clip.x;
        this.y = clip.y;
        this.width = clip.width;
        this.height = clip.height;
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
