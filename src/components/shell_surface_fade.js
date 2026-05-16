import Clutter from 'gi://Clutter';

const HIDE_ANIMATION_MS = 120;

export const ShellSurfaceFade = class ShellSurfaceFade {
    constructor(actor, target, root_actor, parent, is_visible) {
        this.actor = actor;
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
        this.actor.ease({
            opacity: 0,
            duration: HIDE_ANIMATION_MS,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                if (this.serial !== serial)
                    return;

                this.hiding = false;

                if (!this.is_visible_actor())
                    this.actor.hide();
                else
                    this.actor.opacity = this.get_opacity();
            },
        });
    }

    cancel() {
        if (!this.hiding)
            return;

        this.serial++;
        this.hiding = false;
        this.actor.remove_transition?.('opacity');
        this.actor.opacity = this.get_opacity();
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

        return this.apply_actor_opacity(opacity, this.root_actor, visited);
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

    destroy() {
        this.serial++;
        this.cancel();
    }
};
