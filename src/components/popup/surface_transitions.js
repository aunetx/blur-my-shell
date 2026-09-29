const GEOMETRY_TRANSITION_PROPERTIES = [
    'x',
    'y',
    'width',
    'height',
    'clip-rect',
    'clip_rect',
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
        const opacity = surface_actors.some(actor => this.has_transition(actor, 'opacity'));

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

    get_running_properties(properties, actors) {
        const running_properties = new Set();

        actors.forEach(actor => {
            properties.forEach(property => {
                if (this.has_transition(actor, property))
                    running_properties.add(property.replace(/_/g, '-'));
            });
        });

        return running_properties;
    }

    get_actors(surface_actors) {
        const actors = [...surface_actors];
        const seen = new WeakSet(surface_actors);

        if (!this.surface.is_quick_settings()) {
            this.add_descendants(actors, seen, this.surface.target);
            this.add_descendants(actors, seen, this.surface.root_actor);
        }

        return actors;
    }

    get_surface_actors() {
        const actors = [];
        const seen = new WeakSet();

        this.add_actor(actors, seen, this.surface.target);
        this.add_actor(actors, seen, this.surface.root_actor);
        this.add_ancestors(actors, seen, this.surface.target);
        this.add_ancestors(actors, seen, this.surface.root_actor);

        return actors;
    }

    add_actor(actors, seen, actor) {
        if (seen.has(actor))
            return;

        seen.add(actor);
        actors.push(actor);
    }

    add_ancestors(actors, seen, actor) {
        for (
            let ancestor = actor.get_parent();
            ancestor && ancestor !== this.surface.parent;
            ancestor = ancestor.get_parent()
        )
            this.add_actor(actors, seen, ancestor);
    }

    add_descendants(actors, seen, actor) {
        const stack = actor.get_children().reverse();

        while (stack.length > 0) {
            const child = stack.pop();
            if (seen.has(child))
                continue;

            this.add_actor(actors, seen, child);
            stack.push(...child.get_children().reverse());
        }
    }

    has_transition(actor, property) {
        return actor.get_transition(property) !== null;
    }
};
