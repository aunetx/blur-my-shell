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
                while (this.can_reuse_effect(effect_name) && this[effect_name + '_effects'].length > 0 && !effect) {
                    const reused_effect = this[effect_name + '_effects'].splice(0, 1)[0];
                    if (this.prepare_reused_effect(reused_effect))
                        effect = reused_effect;
                }

                if (effect) {
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

    can_reuse_effect(effect_name) {
        return effect_name !== 'corner';
    }

    prepare_reused_effect(effect) {
        try {
            const actor = effect.get_actor?.();
            if (!actor)
                return true;

            actor.remove_effect(effect);
            return !effect.get_actor?.();
        } catch (e) {
            this._warn(`discarding attached cached effect: ${e}`);
            return false;
        }
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
        let removed_from_actor = false;
        if (!actor_already_destroyed)
            try {
                const actor = effect.get_actor();
                if (actor) {
                    actor.remove_effect(effect);
                    removed_from_actor = true;
                }
            } catch (e) {
                this._warn(`could not remove the effect, continuing: ${e}`);
            }
        this.connections.disconnect_all_for(effect);

        delete effect.old_actor;

        let index = this.used.indexOf(effect);
        if (index >= 0) {
            this.used.splice(index, 1);

            if (!removed_from_actor)
                return;

            Object.keys(this.SUPPORTED_EFFECTS).forEach(effect_name => {
                if (
                    this.can_reuse_effect(effect_name)
                    && effect instanceof this.SUPPORTED_EFFECTS[effect_name].class
                )
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
