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

        // NOTE: Do NOT clamp by get_paint_opacity() here.  When the blur actor
        // is a child of this.parent (e.g. a BoxPointer), get_paint_opacity()
        // includes this.parent's opacity — but the blur actor already inherits
        // that opacity by being its child.  Clamping here would double-count
        // the parent's opacity, making the blur+tint too dark during opacity
        // transitions (e.g. quick settings fade-in).  The walk above already
        // computes the correct combined opacity from target to (not including)
        // parent, and get_transition_opacity below handles the parent's
        // opacity transition separately.

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
            const actor_opacity = actor.opacity ?? 255;

            if (!actor.visible) {
                // Actor is not visible — if it has a paint opacity (e.g. it's
                // in a fade-out transition), use that; otherwise it contributes
                // zero opacity.
                const paint_opacity = this.get_paint_opacity(actor);
                if (paint_opacity !== null)
                    return Math.round(opacity * paint_opacity / 255);
                return 0;
            }

            if (!actor.mapped) {
                const paint_opacity = this.get_paint_opacity(actor);
                if (paint_opacity !== null)
                    return Math.round(opacity * paint_opacity / 255);
                return Math.round(opacity * actor_opacity / 255);
            }

            // Use the actor's OWN opacity only — the walk from target to
            // parent already traverses the full chain, so multiplying each
            // actor's own opacity gives the correct combined opacity relative
            // to the parent.  Using get_paint_opacity() here would include
            // ancestors' opacities (including the parent's), causing
            // double-counting when the blur actor is also a child of the
            // parent.
            return Math.round(opacity * actor_opacity / 255);
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
