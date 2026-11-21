import { set_pipeline_uniform, uniform_type } from '../../render/shader/uniforms.js';

/// The per-pixel effects drawn right after a blur, which its last pass draws as well so that they
/// don't need a texture and a full-size pass each. Every effect gets uniforms of its own, prefixed
/// with its place in the list.
export class FusedEffects {
    constructor(effects = []) {
        this.effects = effects;
        this.passes = effects.map(effect => effect.constructor.fused_pass);
        this.pipeline = null;
        this.applied = [];
    }

    get declarations() {
        const functions = [...new Set(this.passes.map(pass => pass.functions))];
        const uniforms = this.passes.flatMap((pass, index) => [
            `uniform float fused${index}_enabled;`,
            ...pass.uniforms.map(name => `uniform ${uniform_type(name)} fused${index}_${name};`),
        ]);
        return [...functions, ...uniforms].join('\n');
    }

    get code() {
        return this.passes.map((pass, index) =>
            `if (fused${index}_enabled > 0.5)\n    color = ${pass.call(`fused${index}_`)};`
        ).join('\n');
    }

    /// Uploads the uniforms that changed since the last paint.
    upload(pipeline) {
        if (this.pipeline !== pipeline) {
            this.pipeline = pipeline;
            this.applied = this.effects.map(() => new Map());
        }

        this.effects.forEach((effect, index) => {
            const applied = this.applied[index];
            const set = (name, value) => {
                if (applied.get(name) === value)
                    return;
                set_pipeline_uniform(pipeline,
                    pipeline.get_uniform_location(`fused${index}_${name}`), name, value);
                applied.set(name, value);
            };
            set('enabled', effect.enabled ? 1 : 0);
            this.passes[index].uniforms.forEach(name => set(name, effect._bms_uniforms.get(name)));
        });
    }
}
