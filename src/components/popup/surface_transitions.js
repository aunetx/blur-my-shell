const GEOMETRY_TRANSITION_PROPERTIES = [
    'x',
    'y',
    'width',
    'height',
    'translation-x',
    'translation-y',
    'translation_x',
    'translation_y',
    'scale-x',
    'scale-y',
    'scale_x',
    'scale_y',
];

export const PopupBlurSurfaceTransitions = class PopupBlurSurfaceTransitions {
    constructor(surface) {
        this.surface = surface;
    }

    has_running() {
        return this.get_state().running;
    }

    get_state(include_descendants = false) {
        const surface_actors = this.get_surface_actors();
        const actors = include_descendants
            ? this.get_actors(surface_actors)
            : surface_actors;
        const geometry_properties = this.get_running_properties(
            GEOMETRY_TRANSITION_PROPERTIES,
            actors
        );
        const opacity = this.has_running_for(['opacity'], surface_actors);

        return {
            complete: include_descendants,
            running: opacity || geometry_properties.size > 0,
            geometry: geometry_properties.size > 0,
            geometry_properties,
            opacity,
        };
    }

    complete_state(transition_state) {
        if (transition_state.complete)
            return transition_state;

        return this.get_state(true);
    }

    has_running_for(properties, actors) {
        return actors.some(actor =>
            properties.some(property => this.has_transition(actor, property))
        );
    }

    get_running_properties(properties, actors) {
        const running_properties = new Set();

        actors.forEach(actor => {
            properties.forEach(property => {
                if (this.has_transition(actor, property))
                    running_properties.add(this.normalize_property(property));
            });
        });

        return running_properties;
    }

    normalize_property(property) {
        return property.replace(/_/g, '-');
    }

    get_actors(surface_actors = this.get_surface_actors()) {
        const actors = [...surface_actors];
        const seen = new WeakSet();
        actors.forEach(actor => seen.add(actor));

        this.add_descendants(actors, seen, this.surface.target);
        this.add_descendants(actors, seen, this.surface.root_actor);

        return actors;
    }

    get_surface_actors() {
        const actors = [];
        const seen = new WeakSet();

        this.add_actor(actors, seen, this.surface.target);
        this.add_actor(actors, seen, this.surface.root_actor);
        this.add_actor(actors, seen, this.surface.get_geometry_actor());
        this.add_ancestors(actors, seen, this.surface.target);
        this.add_ancestors(actors, seen, this.surface.root_actor);

        return actors;
    }

    add_actor(actors, seen, actor) {
        if (!actor || seen.has(actor))
            return;

        seen.add(actor);
        actors.push(actor);
    }

    add_ancestors(actors, seen, actor) {
        try {
            actor = actor?.get_parent?.();
            while (actor && actor !== this.surface.parent) {
                this.add_actor(actors, seen, actor);
                actor = actor.get_parent?.();
            }
        } catch (e) { }
    }

    add_descendants(actors, seen, actor) {
        const stack = this.get_children(actor).slice().reverse();

        while (stack.length > 0) {
            const child = stack.pop();
            if (seen.has(child))
                continue;

            this.add_actor(actors, seen, child);
            stack.push(...this.get_children(child).slice().reverse());
        }
    }

    has_transition(actor, property) {
        try {
            return !!actor.get_transition?.(property);
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
};
