import { ColorEffect } from '../effects/color_effect.js';
import { NoiseEffect } from '../effects/noise_effect.js';


/// An object to manage effects (by not destroying them all the time)
export const EffectsManager = class EffectsManager {
    constructor(connections) {
        this.connections = connections;
        this.used = [];
        this.color_effects = [];
        this.noise_effects = [];
    }

    connect_to_destroy(effect) {
        this.connections.connect(effect, 'notify::parent', _ => {
            let parent = effect.get_parent();

            if (effect.old_parent && parent != effect.old_parent)
                effect.old_parent.disconnect(effect.old_parent_id);

            if (parent) {
                this.connections.connect(parent, 'destroy', _ => {
                    this.remove(effect);
                });
            }
        });
    }

    new_color_effect(params, settings) {
        let effect;
        if (this.color_effects.length > 0) {
            effect = this.color_effects.splice(0, 1)[0];
            effect.set(params);
        } else
            effect = new ColorEffect(params, settings);

        this.used.push(effect);
        this.connect_to_destroy(effect);
        return effect;
    }

    new_noise_effect(params, settings) {
        let effect;
        if (this.noise_effects.length > 0) {
            effect = this.noise_effects.splice(0, 1)[0];
            effect.set(params);
        } else
            effect = new NoiseEffect(params, settings);

        this.used.push(effect);
        this.connect_to_destroy(effect);
        return effect;
    }

    remove(effect) {
        effect.get_actor()?.remove_effect(effect);

        let index = this.used.indexOf(effect);
        if (index >= 0) {
            this.used.splice(index, 1);

            if (effect instanceof ColorEffect)
                this.color_effects.push(effect);
            else if (effect instanceof NoiseEffect)
                this.noise_effects.push(effect);
        }
    }

    destroy_all() {
        this.used.forEach(effect => { this.remove(effect); });
        [
            this.used,
            this.color_effects,
            this.noise_effects
        ].forEach(array => {
            array.splice(0, array.length);
        });
    }
};