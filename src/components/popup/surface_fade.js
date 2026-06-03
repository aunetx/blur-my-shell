export const PopupBlurSurfaceFade = class PopupBlurSurfaceFade {
    constructor(actor, target, root_actor, parent) {
        this.actor = actor;
        this.target = target;
        this.root_actor = root_actor;
        this.parent = parent;
    }

    get_opacity(opacity_actors = []) {
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

        const transition_opacity = this.get_transition_opacity(opacity_actors, visited);
        if (transition_opacity !== null) {
            if (opacity_actors.length > 0 && opacity <= 0)
                opacity = transition_opacity;
            else
                opacity = Math.min(opacity, transition_opacity);
        }

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
            const paint_opacity = this.get_paint_opacity(actor);

            if (!actor.visible) {
                if (paint_opacity !== null)
                    return Math.round(opacity * paint_opacity / 255);

                return 0;
            }

            if (!actor.mapped) {
                if (paint_opacity !== null)
                    return Math.round(opacity * paint_opacity / 255);

                return Math.round(opacity * (actor.opacity ?? 255) / 255);
            }

            if (paint_opacity !== null)
                return Math.round(opacity * Math.min(actor.opacity ?? 255, paint_opacity) / 255);

            return Math.round(opacity * (actor.opacity ?? 255) / 255);
        } catch (e) {
            return opacity;
        }
    }

    get_transition_opacity(opacity_actors, visited) {
        let opacity = null;

        opacity_actors.forEach(actor => {
            const actor_opacity = this.get_actor_opacity(actor, visited);
            if (actor_opacity === null)
                return;

            opacity = Math.max(opacity ?? 0, actor_opacity);
        });

        return opacity;
    }

    get_actor_opacity(actor, visited) {
        if (!actor || visited.has(actor))
            return null;

        try {
            const paint_opacity = this.get_paint_opacity(actor);

            if (!actor.visible) {
                if (paint_opacity !== null)
                    return paint_opacity;

                return 0;
            }

            if (!actor.mapped) {
                if (paint_opacity !== null)
                    return paint_opacity;

                return actor.opacity ?? 255;
            }

            return Math.min(actor.opacity ?? 255, paint_opacity ?? 255);
        } catch (e) {
            return null;
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
