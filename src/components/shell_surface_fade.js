import Clutter from 'gi://Clutter';
import { POPUP_ANIMATION_TIME } from 'resource:///org/gnome/shell/ui/boxpointer.js';

export const ShellSurfaceFade = class ShellSurfaceFade {
    constructor(actor, target, root_actor, parent, is_visible, followers = []) {
        this.actor = actor;
        this.actors = [actor, ...followers];
        this.target = target;
        this.root_actor = root_actor;
        this.parent = parent;
        this.is_visible = is_visible;
        this.serial = 0;
        this.hiding = false;
    }

    hide() {
        if (this.hiding || !this.is_actor_visible(this.actor))
            return;

        this.hiding = true;
        const serial = ++this.serial;
        this.actors.forEach(actor => actor.ease({
            opacity: 0,
            duration: POPUP_ANIMATION_TIME,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                if (actor !== this.actor)
                    return;
                if (this.serial !== serial)
                    return;

                this.hiding = false;

                if (!this.is_visible_actor())
                    this.hide_actors();
                else
                    this.set_opacity(this.get_opacity());
            },
        }));
    }

    cancel() {
        if (!this.hiding)
            return;

        this.serial++;
        this.hiding = false;
        this.actors.forEach(actor => actor.remove_transition?.('opacity'));
        this.set_opacity(this.get_opacity());
    }

    is_visible_actor() {
        try {
            return this.is_visible();
        } catch (e) {
            return false;
        }
    }

    is_actor_visible(actor) {
        try {
            return actor?.visible;
        } catch (e) {
            return false;
        }
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

        return opacity;
    }

    set_opacity(opacity) {
        this.actors.forEach(actor => actor.opacity = opacity);
    }

    hide_actors() {
        this.actors.forEach(actor => actor.hide());
    }

    apply_actor_opacity(opacity, actor, visited) {
        if (!actor || visited.has(actor))
            return opacity;

        visited.add(actor);

        try {
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

    destroy() {
        this.serial++;
        this.cancel();
    }
};
