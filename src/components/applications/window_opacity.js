export const BLUR_ACTOR_NAME = 'bms-application-blurred-widget';

/// Changes the opacity of a window's content above its blur, remembering the original opacity of
/// each child to restore it.
export class WindowOpacity {
    constructor() {
        this.originals = new WeakMap();
    }

    /// A window has no actor before it is mapped and after it is unmanaged, and then nothing is shown
    /// to change.
    set(window_actor, opacity, blur_actor) {
        if (!window_actor)
            return;

        let originals = this.originals.get(window_actor);
        if (!originals) {
            originals = new Map();
            this.originals.set(window_actor, originals);
        }

        window_actor.get_children().forEach(child => {
            if (child === blur_actor || child.name === BLUR_ACTOR_NAME)
                return;

            if (opacity === 255) {
                if (originals.has(child)) {
                    child.opacity = originals.get(child);
                    originals.delete(child);
                }
                return;
            }

            if (!originals.has(child))
                originals.set(child, child.opacity);
            if (child.opacity !== opacity)
                child.opacity = opacity;
        });

        if (opacity === 255)
            this.originals.delete(window_actor);
    }

    restore(window_actor, child) {
        const originals = this.originals.get(window_actor);
        if (!originals?.has(child))
            return;

        child.opacity = originals.get(child);
        originals.delete(child);
        if (originals.size === 0)
            this.originals.delete(window_actor);
    }

    clear() {
        this.originals = new WeakMap();
    }
}
