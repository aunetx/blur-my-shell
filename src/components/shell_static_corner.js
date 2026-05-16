export const ShellStaticCorner = class ShellStaticCorner {
    constructor(effects_manager, get_radius) {
        this.effects_manager = effects_manager;
        this.get_radius = get_radius;
        this.pipeline = null;
        this.actor = null;
        this.effect = null;
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
            this.destroy_effect();
            return;
        }

        if (!this.effect) {
            this.effect = this.effects_manager.new_corner_effect({
                radius: this.get_radius(),
            });
            this.actor.add_effect(this.effect);
            return;
        }

        this.effect.radius = this.get_radius();
    }

    pipeline_has_corner_effect() {
        const corner_class = this.effects_manager.SUPPORTED_EFFECTS.corner.class;
        return this.pipeline.effects.some(effect => effect instanceof corner_class);
    }

    destroy_effect() {
        if (!this.effect)
            return;

        this.effects_manager.remove(this.effect);
        this.effect = null;
    }

    destroy() {
        this.destroy_effect();
        this.pipeline = null;
        this.actor = null;
    }
};
