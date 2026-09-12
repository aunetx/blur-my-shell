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
            // init the arrays containing each unused effect
            this[effect_name + '_effects'] = [];

            // init the functions for each effect
            this['new_' + effect_name + '_effect'] = function (params) {
                let effect;
                if (this[effect_name + '_effects'].length > 0) {
                    effect = this[effect_name + '_effects'].pop();
                    if ('_bms_enabled_before_failed_removal' in effect) {
                        effect.set_enabled(effect._bms_enabled_before_failed_removal);
                        delete effect._bms_enabled_before_failed_removal;
                    }
                    effect.set({
                        ...this.SUPPORTED_EFFECTS[effect_name].class.default_params, ...params
                    });
                } else {
                    effect = new this.SUPPORTED_EFFECTS[effect_name].class({
                        ...this.SUPPORTED_EFFECTS[effect_name].class.default_params, ...params
                    });
                    this.connect_to_destroy(effect);
                }

                effect._bms_manager_type = effect_name;
                this.used.add(effect);
                return effect;
            };
        });
    }

    connect_to_destroy(effect) {
        const update_actor = () => {
            const actor = effect.get_actor();
            if (actor === effect._bms_actor)
                return;

            this.disconnect_actor_destroy(effect);
            effect._bms_actor = actor;
            if (actor)
                effect._bms_actor_destroy_id = actor.connect(
                    'destroy', () => this.remove(effect, true)
                );
        };

        this.connections.connect(effect, 'notify::actor', update_actor);
        update_actor();
    }

    disconnect_actor_destroy(effect) {
        if (effect._bms_actor && effect._bms_actor_destroy_id) {
            try {
                effect._bms_actor.disconnect(effect._bms_actor_destroy_id);
            } catch (e) { }
        }
        effect._bms_actor = null;
        effect._bms_actor_destroy_id = null;
    }

    remove(effect, actor_already_destroyed = false) {
        if (!actor_already_destroyed) {
            try {
                effect.get_actor()?.remove_effect(effect);
            } catch (e) {
                this._warn(`could not remove the effect, continuing: ${e}`);
            }

            if (effect.get_actor?.()) {
                effect._bms_enabled_before_failed_removal = effect.get_enabled?.() ?? true;
                effect.set_enabled?.(false);
                this._warn('effect remained attached and will not be pooled');
                return false;
            }
        }
        this.disconnect_actor_destroy(effect);

        if (this.used.delete(effect)) {
            effect.reset_for_pool?.();
            const effect_name = effect._bms_manager_type;
            if (effect_name && this[effect_name + '_effects'])
                this[effect_name + '_effects'].push(effect);
        }
        return true;
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
