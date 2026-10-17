import { get_internal_effects, get_supported_effects } from '../effects/effects.js';

/// An object to manage effects (by not destroying them all the time)
export const EffectsManager = class EffectsManager {
    constructor(connections) {
        this.connections = connections;
        this.used = new Set();
        this.PIPELINE_EFFECTS = get_supported_effects();
        this.SUPPORTED_EFFECTS = {
            ...this.PIPELINE_EFFECTS,
            ...get_internal_effects(),
        };

        Object.keys(this.SUPPORTED_EFFECTS).forEach(effect_name => {
            // the unused effects, ready to be reused
            this[effect_name + '_effects'] = [];

            this['new_' + effect_name + '_effect'] = function (params) {
                const effect_class = this.SUPPORTED_EFFECTS[effect_name].class;
                params = { ...effect_class.default_params, ...params };

                let effect = this[effect_name + '_effects'].pop();
                if (effect)
                    effect.set(params);
                else {
                    effect = new effect_class(params);
                    this.connect_to_destroy(effect);
                }

                effect._bms_manager_type = effect_name;
                this.used.add(effect);
                return effect;
            };
        });
    }

    /// Puts the effect back in the pool when the actor it is attached to is destroyed.
    connect_to_destroy(effect) {
        const update_actor = () => {
            const actor = effect.get_actor();
            if (actor === effect._bms_actor)
                return;

            this.disconnect_actor_destroy(effect);
            effect._bms_actor = actor;
            if (actor)
                effect._bms_actor_destroy_id = actor.connect('destroy', () => this.remove(effect));
        };

        this.connections.connect(effect, 'notify::actor', update_actor);
        update_actor();
    }

    disconnect_actor_destroy(effect) {
        if (effect._bms_actor_destroy_id)
            effect._bms_actor.disconnect(effect._bms_actor_destroy_id);
        effect._bms_actor = null;
        effect._bms_actor_destroy_id = 0;
    }

    remove(effect) {
        effect.get_actor()?.remove_effect(effect);
        this.disconnect_actor_destroy(effect);

        if (this.used.delete(effect))
            this[effect._bms_manager_type + '_effects'].push(effect);
    }

    destroy_all() {
        [...this.used].forEach(effect => this.remove(effect));
        Object.keys(this.SUPPORTED_EFFECTS).forEach(effect_name => {
            this[effect_name + '_effects'] = [];
        });
    }
};
