import * as uniforms from '../../conveniences/shader_uniforms.js';

export const PopupBlurStaticCorner = class PopupBlurStaticCorner {
    constructor(effects_manager, get_radius) {
        this.effects_manager = effects_manager;
        this.get_radius = get_radius;
        this.pipeline = null;
        this.actor = null;
        this.effect = null;
        this.tight_bounds = null;
    }

    bind(pipeline, actor) {
        this.pipeline = pipeline;
        this.actor = actor;
        this.update();
    }

    update() {
        if (!this.pipeline || !this.actor)
            return;

        this.pipeline.apply_effect_overrides('corner');

        if (this.pipeline_has_corner_effect()) {
            this.apply_tight_bounds_to_pipeline_corner();
            this.destroy_external_effect();
            this.invalidate_effects();
            return;
        }

        if (!this.effect) {
            this.effect = this.effects_manager.new_corner_effect({
                radius: this.get_radius(),
            });
            this.attach_external_effect_as_outermost();
            this.apply_tight_bounds_to_effect(this.effect);
            this.invalidate_effects();
            return;
        }

        this.effect.radius = this.get_radius();
        this.apply_tight_bounds_to_effect(this.effect);
        this.invalidate_effects();
    }

    set_tight_bounds(x, y, width, height) {
        this.tight_bounds = { x, y, width, height };
        this.update();
    }

    apply_tight_bounds_to_pipeline_corner() {
        const corner = this.get_pipeline_corner_effect();
        if (!corner || !this.tight_bounds)
            return;

        const { x, y, width, height } = this.tight_bounds;
        corner.lock_actor_clip = true;
        corner.clip = [
            Math.floor(x),
            Math.floor(y),
            Math.ceil(width),
            Math.ceil(height),
        ];
        corner.radius = this.get_radius();
    }

    apply_tight_bounds_to_effect(effect) {
        if (!effect || !this.tight_bounds)
            return;

        const { x, y, width, height } = this.tight_bounds;
        effect.lock_actor_clip = true;
        effect.clip = [
            Math.floor(x),
            Math.floor(y),
            Math.ceil(width),
            Math.ceil(height),
        ];
    }

    // Clutter treats the first-attached effect as outermost, and the blur is
    // already attached by the time this runs. Re-attach everything so the
    // corner mask ends up outermost regardless of attach order.
    attach_external_effect_as_outermost() {
        const existing_effects = this.pipeline?.effects ?? [];

        existing_effects.forEach(effect => {
            try {
                this.actor.remove_effect(effect);
            } catch (e) { }
        });

        this.actor.add_effect(this.effect);

        existing_effects.forEach(effect => {
            try {
                this.actor.add_effect(effect);
            } catch (e) { }
        });
    }

    pipeline_has_corner_effect() {
        const corner_class = this.effects_manager.SUPPORTED_EFFECTS.corner.class;
        return this.pipeline.effects.some(effect => effect instanceof corner_class);
    }

    get_pipeline_corner_effect() {
        const corner_class = this.effects_manager.SUPPORTED_EFFECTS.corner.class;
        return this.pipeline.effects.find(effect => effect instanceof corner_class) ?? null;
    }

    invalidate_effects() {
        try {
            this.pipeline?.effects?.forEach(effect => {
                uniforms.mark_dirty(effect);
                effect.queue_repaint?.();
            });
            this.effect?.queue_repaint?.();
            this.actor?.queue_redraw?.();
        } catch (e) { }
    }

    destroy_external_effect() {
        if (!this.effect)
            return;

        this.effects_manager.remove(this.effect);
        this.effect = null;
    }

    destroy() {
        this.destroy_external_effect();
        this.pipeline = null;
        this.actor = null;
        this.tight_bounds = null;
    }
};
