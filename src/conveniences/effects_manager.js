import { GaussianBlurEffect } from '../effects/gaussian_blur.js';
import { MonteCarloBlurEffect } from '../effects/monte_carlo_blur.js';
import { ColorEffect } from '../effects/color.js';
import { NoiseEffect } from '../effects/noise.js';
import { CornerEffect } from '../effects/corner.js';

export const SUPPORTED_EFFECT = {
    gaussian_blur: GaussianBlurEffect,
    monte_carlo_blur: MonteCarloBlurEffect,
    color: ColorEffect,
    noise: NoiseEffect,
    corner: CornerEffect
};


/// An object to manage effects (by not destroying them all the time)
export const EffectsManager = class EffectsManager {
    constructor(connections) {
        this.connections = connections;
        this.used = [];

        Object.keys(SUPPORTED_EFFECT).forEach(effect_name => {
            // init the arrays containing each unused effect
            this[effect_name + '_effects'] = [];

            // init the functions for each effect
            this['new_' + effect_name + '_effect'] = function (params) {
                let effect;
                if (this[effect_name + '_effects'].length > 0) {
                    effect = this[effect_name + '_effects'].splice(0, 1)[0];
                    effect.set({ ...effect.default_params, ...params });
                } else;
                effect = new SUPPORTED_EFFECT[effect_name](params);

                this.used.push(effect);
                this.connect_to_destroy(effect);
                return effect;
            };
        });
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

    remove(effect) {
        effect.get_actor()?.remove_effect(effect);
        if (effect.old_actor)
            effect.old_actor.disconnect(effect.old_actor_id);
        delete effect.old_actor;
        delete effect.old_actor_id;

        let index = this.used.indexOf(effect);
        if (index >= 0) {
            this.used.splice(index, 1);

            Object.keys(SUPPORTED_EFFECT).forEach(effect_name => {
                if (effect instanceof SUPPORTED_EFFECT[effect_name])
                    this[effect_name + '_effects'].push(effect);
            });
        }
    }

    destroy_all() {
        this.used.forEach(effect => { this.remove(effect); });
        Object.keys(SUPPORTED_EFFECT).forEach(effect_name => {
            this[effect_name + '_effects'].splice(0, this[effect_name + '_effects'].length);
        });
    }
};
