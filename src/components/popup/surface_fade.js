import * as Main from 'resource:///org/gnome/shell/ui/main.js';

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
            const [, stage_y] = this.target.get_transformed_position();

            if (!Main.panel)
                return 1;

            const monitor = Main.layoutManager.findMonitorForActor(Main.panel)
                ?? Main.layoutManager.primaryMonitor;

            if (!monitor)
                return 1;

            const [, panel_y] = Main.panel.get_transformed_position();
            const panel_width = Main.panel.width || Main.panel.get_width() || 0;
            const panel_height = Main.panel.height || Main.panel.get_height() || 36;

            // Must be a horizontal panel anchored at the monitor's top edge
            const is_horizontal = panel_width > panel_height;
            const is_at_monitor_top = Math.abs(panel_y - monitor.y) <= 5;

            if (!is_horizontal || !is_at_monitor_top)
                return 1;

            const panel_bottom = panel_y + panel_height;
            const threshold = panel_bottom + 5;

            if (stage_y <= panel_y)
                return 0;
            if (stage_y >= threshold)
                return 1;

            return Math.clamp((stage_y - panel_y) / (threshold - panel_y), 0, 1);
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
            let visible = actor.visible;
            let mapped = actor.mapped;
            if (!visible && this.is_keyboard_actor(actor)) {
                const parent = actor.get_parent?.();
                visible = parent?.visible && parent?.mapped;
                mapped = parent?.mapped;
            }
            if (!visible || !mapped)
                return 0;

            return Math.round(opacity * (actor.opacity ?? 255) / 255);
        } catch (e) {
            return opacity;
        }
    }

    is_keyboard_actor(actor) {
        return (
            actor?.has_style_class_name?.('bms-keyboard-surface')
        );
    }

    get_paint_opacity(actor) {
        try {
            if (this.is_keyboard_actor(actor) && (!actor.visible || !actor.mapped)) {
                const parent = actor.get_parent?.();
                if (parent?.visible && parent?.mapped)
                    return null;
            }
            if (actor?.get_paint_opacity)
                return actor.get_paint_opacity();
        } catch (e) { }

        return null;
    }
};