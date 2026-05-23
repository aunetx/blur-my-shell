import St from 'gi://St';

export const PopupBlurSurfaceGeometry = class PopupBlurSurfaceGeometry {
    get(actor, { use_content = true, use_margins = true } = {}) {
        const actor_geometry = this.get_transformed_actor(actor);
        if (!this.has_valid_geometry(actor_geometry))
            return actor_geometry;

        const margin_geometry = use_margins
            ? this.get_margin_adjusted(actor, actor_geometry)
            : actor_geometry;
        if (!use_content)
            return margin_geometry;

        const content_geometry = this.get_transformed_content(actor, margin_geometry);

        if (!this.should_use_content(margin_geometry, content_geometry))
            return margin_geometry;

        return content_geometry;
    }

    get_transformed_actor(actor) {
        try {
            const extents = actor.get_transformed_extents?.();
            const top_left = extents?.get_top_left?.();
            const bottom_right = extents?.get_bottom_right?.();

            if (top_left && bottom_right) {
                return {
                    x: top_left.x,
                    y: top_left.y,
                    width: bottom_right.x - top_left.x,
                    height: bottom_right.y - top_left.y,
                };
            }
        } catch (e) { }

        try {
            const [x, y] = actor.get_transformed_position();
            const [width, height] = actor.get_transformed_size();
            return { x, y, width, height };
        } catch (e) {
            return null;
        }
    }

    get_transformed_clip(actor) {
        try {
            if (!actor?.has_clip)
                return null;

            const [clip_x, clip_y, clip_width, clip_height] = actor.get_clip();
            if (clip_width <= 0 || clip_height <= 0)
                return null;

            const [actor_x, actor_y] = actor.get_transformed_position();
            const [actor_width, actor_height] = actor.get_transformed_size();
            const scale_x = this.get_actor_scale(actor, actor_width, 'width');
            const scale_y = this.get_actor_scale(actor, actor_height, 'height');

            return {
                x: actor_x + clip_x * scale_x,
                y: actor_y + clip_y * scale_y,
                width: clip_width * scale_x,
                height: clip_height * scale_y,
            };
        } catch (e) {
            return null;
        }
    }

    get_margin_adjusted(actor, geometry) {
        const margins = this.get_margins(actor);
        if (!margins)
            return geometry;

        const scale_x = this.get_actor_scale(actor, geometry.width, 'width');
        const scale_y = this.get_actor_scale(actor, geometry.height, 'height');

        return this.shrink(geometry,
            margins.top * scale_y,
            margins.right * scale_x,
            margins.bottom * scale_y,
            margins.left * scale_x
        ) ?? geometry;
    }

    get_transformed_content(actor, boundary) {
        const children = this.get_transformed_children(actor);
        if (!this.has_valid_geometry(children))
            return null;

        const insets = this.get_paint_insets(actor, boundary);
        const geometry = this.inflate(
            children,
            insets.top,
            insets.right,
            insets.bottom,
            insets.left
        );

        return this.intersect(geometry, boundary);
    }

    get_transformed_children(actor) {
        let geometry = null;

        this.get_children(actor).forEach(child => {
            if (!this.is_visible(child))
                return;

            const child_geometry = this.get_transformed_actor(child);
            if (!this.has_valid_geometry(child_geometry))
                return;

            geometry = this.union(geometry, child_geometry);
        });

        return geometry;
    }

    get_margins(actor) {
        const margins = {
            top: this.get_margin(actor, 'top', St.Side.TOP),
            right: this.get_margin(actor, 'right', St.Side.RIGHT),
            bottom: this.get_margin(actor, 'bottom', St.Side.BOTTOM),
            left: this.get_margin(actor, 'left', St.Side.LEFT),
        };

        return Object.values(margins).some(margin => margin > 0) ? margins : null;
    }

    get_margin(actor, side_name, side) {
        const property_names = [
            `margin_${side_name}`,
            `margin${side_name[0].toUpperCase()}${side_name.slice(1)}`,
        ];

        for (const property of property_names) {
            try {
                const value = actor[property];
                if (typeof value === 'number')
                    return value;
            } catch (e) { }
        }

        try {
            const getter = actor[`get_margin_${side_name}`];
            if (getter) {
                const value = getter.call(actor);
                if (typeof value === 'number')
                    return value;
            }
        } catch (e) { }

        try {
            const theme_node = actor.get_theme_node?.();
            if (!theme_node?.get_margin)
                return 0;

            return theme_node.get_margin(side);
        } catch (e) {
            return 0;
        }
    }

    get_paint_insets(actor, geometry) {
        const scale_x = this.get_actor_scale(actor, geometry.width, 'width');
        const scale_y = this.get_actor_scale(actor, geometry.height, 'height');

        return {
            top: this.get_inset(actor, St.Side.TOP) * scale_y,
            right: this.get_inset(actor, St.Side.RIGHT) * scale_x,
            bottom: this.get_inset(actor, St.Side.BOTTOM) * scale_y,
            left: this.get_inset(actor, St.Side.LEFT) * scale_x,
        };
    }

    get_inset(actor, side) {
        try {
            const theme_node = actor.get_theme_node?.();
            if (!theme_node)
                return 0;

            let inset = 0;
            if (theme_node.get_padding)
                inset += theme_node.get_padding(side);
            if (theme_node.get_border_width)
                inset += theme_node.get_border_width(side);
            return inset;
        } catch (e) {
            return 0;
        }
    }

    get_actor_scale(actor, transformed_size, property) {
        try {
            const size = actor[property] ?? actor[`get_${property}`]?.();
            return size > 0 ? transformed_size / size : 1;
        } catch (e) {
            return 1;
        }
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

    is_visible(actor) {
        try {
            return actor?.visible && actor.mapped;
        } catch (e) {
            return false;
        }
    }

    get_children(actor) {
        try {
            return actor?.get_children?.() ?? [];
        } catch (e) {
            return [];
        }
    }

    has_valid_geometry(geometry) {
        return geometry?.width > 0 && geometry?.height > 0;
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
