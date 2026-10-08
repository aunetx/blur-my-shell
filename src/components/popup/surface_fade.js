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
            opacity = Math.round(opacity * this.get_banner_visible_fraction());

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

    /// The message tray clips banners sliding in at its top edge, which our blur, living outside of
    /// the tray, isn't clipped by.
    get_banner_visible_fraction() {
        const [, tray_y] = Main.messageTray.get_transformed_position();
        const [, banner_y] = this.target.get_transformed_position();
        const [, banner_height] = this.target.get_transformed_size();
        if (banner_height <= 0)
            return 0;

        return Math.clamp((banner_y + banner_height - tray_y) / banner_height, 0, 1);
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
