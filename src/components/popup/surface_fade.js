export const PopupBlurSurfaceFade = class PopupBlurSurfaceFade {
    constructor(actor, target, root_actor, parent) {
        this.actor = actor;
        this.target = target;
        this.root_actor = root_actor;
        this.parent = parent;
    }

    get_opacity() {
        let opacity = 255;
        const visited = new WeakSet();
        let actor = this.target;

        while (actor && actor !== this.parent) {
            opacity = this.apply_actor_opacity(opacity, actor, visited);

            try {
                actor = actor.get_parent?.();
            } catch (e) {
                break;
            }
        }

        opacity = this.apply_actor_opacity(opacity, this.root_actor, visited);

        [
            this.target,
            this.root_actor,
        ].forEach(actor => {
            const paint_opacity = this.get_paint_opacity(actor);
            if (paint_opacity !== null)
                opacity = Math.min(opacity, paint_opacity);
        });

        if (this.is_notification_banner()) {
            opacity = Math.round(opacity * this.get_banner_position_alpha());
        }

        return opacity;
    }

    is_notification_banner() {
        if (this.target?.has_style_class_name?.('notification-banner'))
            return true;
        if (this.root_actor?.name === 'notification-container')
            return true;
        let a = this.target;
        while (a && a !== this.parent) {
            if (a.has_style_class_name?.('notification-banner'))
                return true;
            a = a.get_parent?.();
        }
        return false;
    }

    get_banner_position_alpha() {
        try {
            const [stage_x, stage_y] = this.target.get_transformed_position();
            const panel_height = 36;
            const threshold = panel_height + 5;

            if (stage_y <= 0)
                return 0;
            if (stage_y >= threshold)
                return 1;

            return Math.clamp(stage_y / threshold, 0, 1);
        } catch (e) {
            return 1;
        }
    }

    set_opacity(opacity) {
        try {
            this.actor.opacity = opacity;
        } catch (e) { }
    }

    apply_actor_opacity(opacity, actor, visited) {
        if (!actor || visited.has(actor))
            return opacity;

        visited.add(actor);

        try {
            if (!actor.visible || !actor.mapped)
                return 0;

            return Math.round(opacity * (actor.opacity ?? 255) / 255);
        } catch (e) {
            return opacity;
        }
    }

    get_paint_opacity(actor) {
        try {
            if (actor?.get_paint_opacity)
                return actor.get_paint_opacity();
        } catch (e) { }

        return null;
    }
};
