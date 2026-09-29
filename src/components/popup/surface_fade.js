import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { has_style_class } from './actors.js';

export const PopupBlurSurfaceFade = class PopupBlurSurfaceFade {
    constructor(target, root_actor, parent) {
        this.target = target;
        this.root_actor = root_actor;
        this.parent = parent;
    }

    get_opacity() {
        let opacity = 255;
        const visited = new WeakSet();

        for (let actor = this.target; actor && actor !== this.parent; actor = actor.get_parent())
            opacity = this.apply_actor_opacity(opacity, actor, visited);
        opacity = this.apply_actor_opacity(opacity, this.root_actor, visited);

        const parent_opacity = this.parent.get_paint_opacity();
        [this.target, this.root_actor].forEach(actor => {
            const paint_opacity = this.get_paint_opacity(actor);
            if (paint_opacity !== null)
                opacity = Math.min(opacity, parent_opacity > 0
                    ? Math.round(paint_opacity * 255 / parent_opacity) : 0);
        });

        if (this.is_notification_banner())
            opacity = Math.round(opacity * this.get_banner_position_alpha());

        return opacity;
    }

    is_notification_banner() {
        if (this.root_actor.name === 'notification-container')
            return true;

        for (let actor = this.target; actor && actor !== this.parent; actor = actor.get_parent()) {
            if (has_style_class(actor, 'notification-banner'))
                return true;
        }
        return false;
    }

    get_banner_position_alpha() {
        const panel = Main.panel;
        if (!panel.mapped || panel.get_paint_opacity() === 0)
            return 1;

        const monitor = Main.layoutManager.findMonitorForActor(panel)
            ?? Main.layoutManager.primaryMonitor;
        if (!monitor)
            return 1;

        const [, stage_y] = this.target.get_transformed_position();
        const [, panel_y] = panel.get_transformed_position();
        const [panel_width, panel_height] = panel.get_size();

        const is_horizontal = panel_width > panel_height;
        const is_at_monitor_top = Math.abs(panel_y - monitor.y) <= 5;

        if (!is_horizontal || !is_at_monitor_top)
            return 1;

        const threshold = panel_y + panel_height + 5;

        if (stage_y <= panel_y)
            return 0;
        if (stage_y >= threshold)
            return 1;

        return Math.clamp((stage_y - panel_y) / (threshold - panel_y), 0, 1);
    }

    apply_actor_opacity(opacity, actor, visited) {
        if (visited.has(actor))
            return opacity;

        visited.add(actor);

        const shown_actor = !actor.visible && this.is_keyboard_actor(actor)
            ? actor.get_parent()
            : actor;
        if (!shown_actor?.visible || !shown_actor.mapped)
            return 0;

        return Math.round(opacity * actor.opacity / 255);
    }

    is_keyboard_actor(actor) {
        return has_style_class(actor, 'bms-keyboard-surface');
    }

    get_paint_opacity(actor) {
        if (
            this.is_keyboard_actor(actor)
            && (!actor.visible || !actor.mapped)
            && actor.get_parent()?.mapped
        )
            return null;

        return actor.get_paint_opacity();
    }
};
