import { GaussianBlurEffect } from '../effects/gaussian_blur.js';
import { MonteCarloBlurEffect } from '../effects/monte_carlo_blur.js';
import { ColorEffect } from '../effects/color.js';
import { NoiseEffect } from '../effects/noise.js';
import { CornerEffect } from '../effects/corner.js';


/// An object to manage effects (by not destroying them all the time)
export const EffectsManager = class EffectsManager {
    constructor(connections) {
        this.connections = connections;
        this.used = [];
        this.gaussian_blur_effects = [];
        this.monte_carlo_blur_effects = [];
        this.color_effects = [];
        this.noise_effects = [];
        this.corner_effects = [];
    }

    connect_to_destroy(effect) {
        effect.old_actor = effect.get_actor();
        if (effect.old_actor)
            effect.old_actor_id = effect.old_actor.connect('destroy', _ => {
                this.remove(effect);
            });

        this.connections.connect(effect, 'notify::actor', _ => {
            let actor = effect.get_actor();

            if (effect.old_actor && actor != effect.old_actor)
                effect.old_actor.disconnect(effect.old_actor_id);

            if (actor) {
                effect.old_actor_id = actor.connect('destroy', _ => {
                    this.remove(effect);
                });
            }
        });
    }

    new_gaussian_blur_effect(params) {
        let effect;
        if (this.gaussian_blur_effects.length > 0) {
            effect = this.gaussian_blur_effects.splice(0, 1)[0];
            effect.set(params);
        } else
            effect = new GaussianBlurEffect(params);

        this.used.push(effect);
        this.connect_to_destroy(effect);
        return effect;
    }

    new_monte_carlo_blur_effect(params) {
        let effect;
        if (this.monte_carlo_blur_effects.length > 0) {
            effect = this.monte_carlo_blur_effects.splice(0, 1)[0];
            effect.set(params);
        } else
            effect = new MonteCarloBlurEffect(params);

        this.used.push(effect);
        this.connect_to_destroy(effect);
        return effect;
    }

    new_color_effect(params) {
        let effect;
        if (this.color_effects.length > 0) {
            effect = this.color_effects.splice(0, 1)[0];
            effect.set(params);
        } else
            effect = new ColorEffect(params);

        this.used.push(effect);
        this.connect_to_destroy(effect);
        return effect;
    }

    new_noise_effect(params) {
        let effect;
        if (this.noise_effects.length > 0) {
            effect = this.noise_effects.splice(0, 1)[0];
            effect.set(params);
        } else
            effect = new NoiseEffect(params);

        this.used.push(effect);
        this.connect_to_destroy(effect);
        return effect;
    }

    new_corner_effect(params) {
        let effect;
        if (this.corner_effects.length > 0) {
            effect = this.corner_effects.splice(0, 1)[0];
            effect.set(params);
        } else
            effect = new CornerEffect(params);

        this.used.push(effect);
        this.connect_to_destroy(effect);
        return effect;
    }

    remove(effect) {
        effect.get_actor()?.remove_effect(effect);
        if (effect.old_actor)
            effect.old_actor.disconnect(effect.old_actor_id);
        delete effect.old_actor;
        delete effect.old_actor_id;

        let index = this.used.indexOf(effect);
        if (index >= 0) {
            this.used.splice(index, 1);

            if (effect instanceof GaussianBlurEffect)
                this.gaussian_blur_effects.push(effect);
            else if (effect instanceof MonteCarloBlurEffect)
                this.monte_carlo_blur_effects.push(effect);
            else if (effect instanceof ColorEffect)
                this.color_effects.push(effect);
            else if (effect instanceof NoiseEffect)
                this.noise_effects.push(effect);
            else if (effect instanceof CornerEffect)
                this.corner_effects.push(effect);
        }
    }

    destroy_all() {
        this.used.forEach(effect => { this.remove(effect); });
        [
            this.used,
            this.gaussian_blur_effects,
            this.monte_carlo_blur_effects,
            this.color_effects,
            this.noise_effects,
            this.corner_effects
        ].forEach(array => {
            array.splice(0, array.length);
        });
    }
};
