export class RoundedPipeline {
    constructor(effectsManager, getRadius) {
        this.effectsManager = effectsManager;
        this.getRadius = getRadius;
        this.pipeline = null;
        this.actor = null;
        this.effect = null;
        this.pipelineSignalIds = [];
        this.observedPipelineId = null;
        this.actorDestroyId = 0;
    }

    bind(pipeline, actor) {
        if (this.pipeline !== pipeline || this.actor !== actor)
            this.destroyExternalEffect();
        this.disconnectPipelineSignals();
        this.disconnectActorDestroy();
        this.pipeline = pipeline;
        this.actor = actor;
        this.actorDestroyId = actor.connect('destroy', () => {
            this.disconnectPipelineSignals();
            this.actorDestroyId = 0;
            this.effect = null;
            this.pipeline?.destroy();
            this.pipeline = null;
            this.actor = null;
        });
        this.update();
    }

    update() {
        if (!this.pipeline || !this.actor)
            return;

        this.syncPipelineSignals();

        const refractionEffects = this.getRefractionEffects();
        if (refractionEffects.length > 0) {
            this.destroyExternalEffect();
            this.updateRefractionCorners(refractionEffects);
            return;
        }

        if (!this.effect) {
            this.effect = this.effectsManager.new_corner_effect({
                radius: this.getRadius(),
                straight_corners: Boolean(this.straightCorners),
            });
            this.attachEffectAsOutermost(this.effect);
            return;
        }

        this.effect.radius = this.getRadius();
    }

    attachEffectAsOutermost(outermostEffect) {
        const existingEffects = this.pipeline?.effects ?? [];
        if (existingEffects[0] === outermostEffect)
            return;

        existingEffects.forEach(effect => {
            try {
                this.actor.remove_effect(effect);
            } catch (e) { }
        });

        this.actor.add_effect(outermostEffect);

        existingEffects.forEach(effect => {
            if (effect === outermostEffect)
                return;
            try {
                this.actor.add_effect(effect);
            } catch (e) { }
        });

        if (existingEffects.includes(outermostEffect)) {
            this.pipeline.effects = [
                outermostEffect,
                ...existingEffects.filter(effect => effect !== outermostEffect),
            ];
        }
    }

    getRefractionEffects() {
        return this.pipeline.effects.filter(effect =>
            effect._bms_effect_type === 'refraction'
            && effect._bms_pixelize_role !== 'refraction-blur'
        );
    }

    updateRefractionCorners(effects = this.getRefractionEffects()) {
        const radius = this.straightCorners ? 0 : this.getRadius();
        effects.forEach(effect => effect.corner_radius = radius);
    }

    syncPipelineSignals(force = false) {
        const pipelineId = this.pipeline?.pipeline_id ?? null;
        if (!force && this.observedPipelineId === pipelineId)
            return;

        this.disconnectPipelineSignals();
        if (!pipelineId)
            return;

        const manager = this.pipeline.pipelines_manager;
        const refresh = () => {
            this.disconnectPipelineSignals();
            this.update();
        };
        this.pipelineSignalIds.push(
            manager.connect(`${pipelineId}::pipeline-updated`, refresh),
            manager.connect(`${pipelineId}::pipeline-destroyed`, refresh)
        );

        this.getRefractionEffects().forEach(effect => {
            const effectId = effect._bms_effect_id;
            if (!effectId)
                return;

            ['removed', 'updated', 'added'].forEach(change => {
                this.pipelineSignalIds.push(manager.connect(
                    `${pipelineId}::effect-${effectId}-key-${change}`,
                    (_, key) => {
                        if (key === 'corner_radius')
                            this.updateRefractionCorners();
                    }
                ));
            });
        });
        this.observedPipelineId = pipelineId;
    }

    disconnectPipelineSignals() {
        const manager = this.pipeline?.pipelines_manager;
        if (manager) {
            this.pipelineSignalIds.forEach(id => {
                if (id)
                    manager.disconnect(id);
            });
        }
        this.pipelineSignalIds = [];
        this.observedPipelineId = null;
    }

    disconnectActorDestroy() {
        if (this.actor && this.actorDestroyId) {
            try {
                this.actor.disconnect(this.actorDestroyId);
            } catch (e) { }
        }
        this.actorDestroyId = 0;
    }

    setStraightCorners(straightCorners) {
        this.straightCorners = straightCorners;
        if (this.effect)
            this.effect.straight_corners = straightCorners;
        else
            this.updateRefractionCorners();
    }

    destroyExternalEffect() {
        if (!this.effect)
            return;

        this.effectsManager.remove(this.effect);
        this.effect = null;
    }

    destroy() {
        this.disconnectPipelineSignals();
        this.disconnectActorDestroy();
        this.destroyExternalEffect();
        this.pipeline = null;
        this.actor = null;
    }
}
