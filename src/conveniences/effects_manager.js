import { get_supported_effects } from '../effects/effects.js';

/// An object to manage effects (by not destroying them all the time)
export const EffectsManager = class EffectsManager {
    constructor(connections) {
        this.connections = connections;
        this.used = [];
        this.SUPPORTED_EFFECTS = get_supported_effects();

        Object.keys(this.SUPPORTED_EFFECTS).forEach(effect_name => {
            // init the arrays containing each unused effect
            this[effect_name + '_effects'] = [];

            // init the functions for each effect
            this['new_' + effect_name + '_effect'] = function (params) {
                let effect;
                if (this[effect_name + '_effects'].length > 0) {
                    effect = this[effect_name + '_effects'].splice(0, 1)[0];
                    effect.set({
                        ...this.SUPPORTED_EFFECTS[effect_name].class.default_params, ...params
                    });
                } else
                    effect = new this.SUPPORTED_EFFECTS[effect_name].class({
                        ...this.SUPPORTED_EFFECTS[effect_name].class.default_params, ...params
                    });

                this.used.push(effect);
                this.connect_to_destroy(effect);
                return effect;
            };
        });
    }

    connect_to_destroy(effect) {
        effect.old_actor = effect.get_actor();

        this.connections.connect(effect, 'notify::actor', _ => {
            let actor = effect.get_actor();

            effect.old_actor = actor;
        });
    }

    // IMPORTANT: do never call this in a mutable `this.used.forEach`
    remove(effect, actor_already_destroyed = false) {
        if (!actor_already_destroyed)
            try {
                effect.get_actor()?.remove_effect(effect);
            } catch (e) {
                this._warn(`could not remove the effect, continuing: ${e}`);
            }
        this.connections.disconnect_all_for(effect);

        delete effect.old_actor;

        let index = this.used.indexOf(effect);
        if (index >= 0) {
            this.used.splice(index, 1);

            Object.keys(this.SUPPORTED_EFFECTS).forEach(effect_name => {
                if (effect instanceof this.SUPPORTED_EFFECTS[effect_name].class)
                    this[effect_name + '_effects'].push(effect);
            });
        }
    }

    destroy_all() {
        const immutable_used_list = [...this.used];
        immutable_used_list.forEach(effect => this.remove(effect));
        Object.keys(this.SUPPORTED_EFFECTS).forEach(effect_name => {
            this[effect_name + '_effects'].splice(0, this[effect_name + '_effects'].length);
        });
    }

    _warn(str) {
        console.warn(`[Blur my Shell > effects mng]  ${str}`);
    }
};
