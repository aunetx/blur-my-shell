import St from 'gi://St';

export function transform_to_actor_space(actor, { x, y, width, height }) {
    const [actor_x, actor_y] = actor.get_transformed_position();
    const [actor_width, actor_height] = actor.get_size();
    const [transformed_width, transformed_height] = actor.get_transformed_size();
    const scale_x = actor_width > 0 ? transformed_width / actor_width : 1;
    const scale_y = actor_height > 0 ? transformed_height / actor_height : 1;

    return {
        x: (x - actor_x) / scale_x,
        y: (y - actor_y) / scale_y,
        width: width / scale_x,
        height: height / scale_y,
    };
}

export const PopupBlurSurfaceGeometry = class PopupBlurSurfaceGeometry {
    get(actor, use_content) {
        const actor_geometry = this.get_transformed_actor(actor);
        if (!use_content || !this.has_valid_geometry(actor_geometry))
            return actor_geometry;

        const margin_geometry = this.get_margin_adjusted(actor, actor_geometry);
        const content_geometry = this.get_transformed_content(actor, margin_geometry);

        return this.should_use_content(margin_geometry, content_geometry)
            ? content_geometry
            : margin_geometry;
    }

    get_transformed_actor(actor) {
        const extents = actor.get_transformed_extents();
        const top_left = extents.get_top_left();
        const bottom_right = extents.get_bottom_right();

        return {
            x: top_left.x,
            y: top_left.y,
            width: bottom_right.x - top_left.x,
            height: bottom_right.y - top_left.y,
        };
    }

    get_transformed_clip(actor) {
        if (!actor.has_clip)
            return null;

        const [clip_x, clip_y, clip_width, clip_height] = actor.get_clip();
        if (clip_width <= 0 || clip_height <= 0)
            return null;

        const [actor_x, actor_y] = actor.get_transformed_position();
        const [actor_width, actor_height] = actor.get_transformed_size();
        const scale_x = this.get_actor_scale(actor.width, actor_width);
        const scale_y = this.get_actor_scale(actor.height, actor_height);

        return {
            x: actor_x + clip_x * scale_x,
            y: actor_y + clip_y * scale_y,
            width: clip_width * scale_x,
            height: clip_height * scale_y,
        };
    }

    get_margin_adjusted(actor, geometry) {
        const { margin_top, margin_right, margin_bottom, margin_left } = actor;
        if (Math.max(margin_top, margin_right, margin_bottom, margin_left) <= 0)
            return geometry;

        const scale_x = this.get_actor_scale(actor.width, geometry.width);
        const scale_y = this.get_actor_scale(actor.height, geometry.height);

        return this.shrink(geometry,
            margin_top * scale_y,
            margin_right * scale_x,
            margin_bottom * scale_y,
            margin_left * scale_x
        ) ?? geometry;
    }

    get_transformed_content(actor, boundary) {
        const children = this.get_transformed_children(actor);
        if (!this.has_valid_geometry(children))
            return null;

        const scale_x = this.get_actor_scale(actor.width, boundary.width);
        const scale_y = this.get_actor_scale(actor.height, boundary.height);
        const theme_node = actor.get_theme_node();
        const inset = side => theme_node.get_padding(side) + theme_node.get_border_width(side);

        const geometry = this.inflate(
            children,
            inset(St.Side.TOP) * scale_y,
            inset(St.Side.RIGHT) * scale_x,
            inset(St.Side.BOTTOM) * scale_y,
            inset(St.Side.LEFT) * scale_x
        );

        return this.intersect(geometry, boundary);
    }

    get_transformed_children(actor) {
        let geometry = null;

        actor.get_children().forEach(child => {
            if (!child.visible || !child.mapped)
                return;

            const child_geometry = this.get_transformed_actor(child);
            if (this.has_valid_geometry(child_geometry))
                geometry = this.union(geometry, child_geometry);
        });

        return geometry;
    }

    get_actor_scale(size, transformed_size) {
        return size > 0 ? transformed_size / size : 1;
    }

    should_use_content(outer, content) {
        if (!this.has_valid_geometry(content))
            return false;

        if (
            content.width > outer.width + 1
            || content.height > outer.height + 1
        )
            return false;

        return outer.width - content.width > 2 || outer.height - content.height > 2;
    }

    has_valid_geometry(geometry) {
        return geometry?.width > 0 && geometry.height > 0;
    }

    shrink(geometry, top, right, bottom, left) {
        const width = geometry.width - left - right;
        const height = geometry.height - top - bottom;

        if (width <= 0 || height <= 0)
            return null;

        return {
            x: geometry.x + left,
            y: geometry.y + top,
            width,
            height,
        };
    }

    inflate(geometry, top, right, bottom, left) {
        return {
            x: geometry.x - left,
            y: geometry.y - top,
            width: geometry.width + left + right,
            height: geometry.height + top + bottom,
        };
    }

    intersect(a, b) {
        const x1 = Math.max(a.x, b.x);
        const y1 = Math.max(a.y, b.y);
        const x2 = Math.min(a.x + a.width, b.x + b.width);
        const y2 = Math.min(a.y + a.height, b.y + b.height);

        if (x2 <= x1 || y2 <= y1)
            return null;

        return {
            x: x1,
            y: y1,
            width: x2 - x1,
            height: y2 - y1,
        };
    }

    union(a, b) {
        if (!a)
            return b;

        const x1 = Math.min(a.x, b.x);
        const y1 = Math.min(a.y, b.y);
        const x2 = Math.max(a.x + a.width, b.x + b.width);
        const y2 = Math.max(a.y + a.height, b.y + b.height);

        return {
            x: x1,
            y: y1,
            width: x2 - x1,
            height: y2 - y1,
        };
    }
};
