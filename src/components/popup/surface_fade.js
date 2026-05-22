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

        return opacity;
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
