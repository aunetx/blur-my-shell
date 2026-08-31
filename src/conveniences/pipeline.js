import St from 'gi://St';
import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Background from 'resource:///org/gnome/shell/ui/background.js';
import * as uniforms from './shader_uniforms.js';
import * as utils from './utils.js';

/// A `Pipeline` object is a handy way to manage the effects attached to an actor. It only manages
/// one actor at a time (so blurring multiple widgets will need multiple `Pipeline`), and is
/// linked to a `pipeline_id` that has been (hopefully) defined in the settings.
///
/// It communicates with the settings through the `PipelinesManager` object, and receives different
/// signals (with `pipeline_id` being an unique string):
/// - `'pipeline_id'::pipeline-updated`, handing a new pipeline descriptor object, when the pipeline
///   has been changed enough that it needs to rebuild the effects configuration
/// - `'pipeline_id'::pipeline-destroyed`, when the pipeline has been destroyed; thus making the
///   `Pipeline` change its id to `pipeline_default`
///
/// And each effect, with an unique `id`, is connected to the `PipelinesManager` for the signals:
/// - `'pipeline_id'::effect-'id'-key-removed`, handing the key that was removed
/// - `'pipeline_id'::effect-'id'-key-updated`, handing the key that was changed and its new value
/// - `'pipeline_id'::effect-'id'-key-added`, handing the key that was added and its value
export const Pipeline = class Pipeline {
    constructor(effects_manager, pipelines_manager, pipeline_id, actor = null, options = {}) {
        this.effects_manager = effects_manager;
        this.pipelines_manager = pipelines_manager;
        this.effects = [];
        this.effect_overrides = options.effect_overrides ?? {};
        this.actor = null;
        this.actor_destroy_id = null;
        this.child_added_id = null;
        this._pipeline_changed_id = null;
        this._pipeline_destroyed_id = null;
        try {
            this.set_pipeline_id(pipeline_id);
            this.attach_pipeline_to_actor(actor);
        } catch (error) {
            this.destroy();
            throw error;
        }
    }

    /// Create a background linked to the monitor with index `monitor_index`, with a
    /// `BackgroundManager` that is appended to the list `background_managers`. The background actor
    /// will be given the name `widget_name` and inserted into the given `background_group`.
    /// If `use_absolute_position` is false, then the position used is at (0,0); useful when the
    /// positioning is relative.
    /// Note: exposed to public API.
    create_background_with_effects(
        monitor_index,
        background_managers,
        background_group,
        widget_name,
        use_absolute_position = true
    ) {
        let monitor = Main.layoutManager.monitors[monitor_index];

        this.remove_pipeline_from_actor();

        // create the new actor
        const actor = new St.Widget({
            name: widget_name,
            x: use_absolute_position ? monitor.x : 0,
            y: utils.subpixel_stage_offset() + (use_absolute_position ? monitor.y : 0),
            z_position: 1, // seems to fix the multi-monitor glitch
            width: monitor.width,
            height: monitor.height
        });
        this.actor = actor;
        let bg_manager = null;

        try {
            if (this.pipeline_id)
                this.attach_pipeline_to_actor(actor);

            bg_manager = new Background.BackgroundManager({
                container: actor,
                monitorIndex: monitor_index,
                controlPosition: false,
            });
            bg_manager._bms_pipeline = this;

            // 'controlPosition: false' skips BackgroundManager's default layout pass, which also diables
            // sibling re-ordering.
            // Without it, new actors render on top while loading, causing a solid color flash through
            // on the surface.
            this.child_added_id = actor.connect(
                'child-added', (container, child) => {
                    if (child instanceof Meta.BackgroundActor)
                        container.set_child_below_sibling(child, null);
                }
            );

            background_group.insert_child_at_index(actor, 0);
            background_managers.push(bg_manager);
            return actor;
        } catch (error) {
            this.remove_pipeline_from_actor();
            if (bg_manager) {
                bg_manager._bms_pipeline = null;
                try {
                    bg_manager.destroy();
                } catch (e) { }
            }
            actor.destroy();
            throw error;
        }
    };

    /// Set the pipeline id, correctly connecting the `Pipeline` object to listen the pipelines
    /// manager for pipeline-wide changes. This does not update the effects in consequence, call
    /// `change_pipeline_to` instead if you want to reconstruct the effects too.
    set_pipeline_id(pipeline_id) {
        // disconnect ancient signals
        this.remove_connections();

        // change the id
        if (!Object.hasOwn(this.pipelines_manager.pipelines, pipeline_id)) {
            this._warn(`pipeline "${pipeline_id}" not found, using "pipeline_default"`);
            pipeline_id = 'pipeline_default';
        }
        this.pipeline_id = pipeline_id;

        // connect to settings changes
        this._pipeline_changed_id = this.pipelines_manager.connect(
            this.pipeline_id + '::pipeline-updated',
            (_, new_pipeline) => this.update_effects_from_pipeline(new_pipeline)
        );
        this._pipeline_destroyed_id = this.pipelines_manager.connect(
            this.pipeline_id + '::pipeline-destroyed',
            _ => this.change_pipeline_to("pipeline_default")
        );
    }

    /// Disconnect the signals for the pipeline changes. Please note that the signals related to the
    /// effects are stored with them and removed with `remove_all_effects`.
    remove_connections() {
        if (this._pipeline_changed_id)
            this.pipelines_manager.disconnect(this._pipeline_changed_id);
        if (this._pipeline_destroyed_id)
            this.pipelines_manager.disconnect(this._pipeline_destroyed_id);
        this._pipeline_changed_id = null;
        this._pipeline_destroyed_id = null;
    }

    /// Attach a Pipeline object with `pipeline_id` already set to an actor.
    attach_pipeline_to_actor(actor) {
        if (!actor) {
            this.remove_pipeline_from_actor();
            return;
        }

        if (this.actor !== actor)
            this.disconnect_child_added();
        this.disconnect_actor_destroy();
        this.actor = actor;

        // attach the pipeline
        let pipeline = this.pipelines_manager.pipelines[this.pipeline_id];
        if (!pipeline) {
            this._warn(`could not attach pipeline to actor, pipeline "${this.pipeline_id}" not found`);
            pipeline = this.pipelines_manager.pipelines.pipeline_default;
            if (!pipeline)
                return;
        }

        this.actor_destroy_id = this.actor.connect(
            "destroy", () => this.remove_pipeline_from_actor()
        );

        // update the effects
        this.update_effects_from_pipeline(pipeline);
    }

    remove_pipeline_from_actor() {
        this.remove_all_effects();
        this.disconnect_actor_destroy();
        this.disconnect_child_added();
        this.actor = null;
    }

    disconnect_actor_destroy() {
        if (this.actor && this.actor_destroy_id) {
            try {
                this.actor.disconnect(this.actor_destroy_id);
            } catch (e) { }
        }
        this.actor_destroy_id = null;
    }

    disconnect_child_added() {
        if (this.actor && this.child_added_id) {
            try {
                this.actor.disconnect(this.child_added_id);
            } catch (e) { }
        }
        this.child_added_id = null;
    }

    /// Update the effects from the given pipeline object, the hard way.
    update_effects_from_pipeline(pipeline) {
        // remove all effects
        this.remove_all_effects();

        if (!this.actor)
            return;
        if (!Array.isArray(pipeline?.effects)) {
            this._warn(`could not update pipeline "${this.pipeline_id}", invalid descriptor`);
            return;
        }

        // build the new effects to be added
        pipeline.effects.forEach(effect => {
            const firstNewEffect = this.effects.length;
            try {
                if (effect.type === 'pixelize')
                    this.build_pixelize_effect(effect);
                else if (effect.type === 'refraction')
                    this.build_refraction_effect(effect);
                else if (
                    Object.hasOwn(this.effects_manager.PIPELINE_EFFECTS, effect.type)
                    && typeof this.effects_manager['new_' + effect.type + '_effect'] === 'function'
                )
                    this.build_effect(effect);
                else
                    this._warn(`could not add effect to actor, effect "${effect.type}" not found`);
            } catch (error) {
                this.effects.splice(firstNewEffect).forEach(
                    partialEffect => this.release_effect(partialEffect)
                );
                this._warn(`could not build effect "${effect.type}": ${error}`);
            }
        });
        this.effects.reverse();

        // add the effects to the actor
        this.effects.forEach(effect => {
            try {
                this.actor.add_effect(effect);
                uniforms.mark_dirty(effect);
            } catch (error) {
                this._warn(`could not attach effect "${effect._bms_effect_type}": ${error}`);
                this.release_effect(effect);
            }
        });
        this.effects = this.effects.filter(effect => effect.get_actor?.() === this.actor);
    }

    build_pixelize_effect(effect_infos) {
        const effect_params = this.get_effect_params(effect_infos);
        const effect_overrides = this.get_effect_overrides(effect_infos.type, effect_params);
        const params = {
            ...effect_params,
            ...effect_overrides,
        };

        const downscale = this.effects_manager.new_downscale_effect({
            divider: params.factor,
            downsampling_mode: params.downsampling_mode,
            opacity_factor: params.opacity_factor,
        });
        const upscale = this.effects_manager.new_upscale_effect({
            factor: params.factor,
            opacity_factor: params.opacity_factor,
        });

        this.setup_effect(downscale, effect_infos, effect_params, 'downscale');
        this.setup_effect(upscale, effect_infos, effect_params, 'upscale');
    }

    build_refraction_effect(effect_infos) {
        const effect_params = this.get_effect_params(effect_infos);
        const effect_overrides = this.get_effect_overrides(effect_infos.type, effect_params);
        const params = { ...effect_params, ...effect_overrides };
        const blurRadius = this.get_refraction_blur_radius(params.blur_radius);

        const blur = this.effects_manager.new_dual_kawase_blur_effect({
            unscaled_radius: blurRadius,
            brightness: 1,
        });
        this.setup_effect(blur, effect_infos, effect_params, 'refraction-blur');

        const effect = this.effects_manager.new_refraction_effect(params);
        this.setup_effect(effect, effect_infos, effect_params);
    }

    /// Given an `effect_infos` object containing the effect type, id and params, build an effect
    /// and append it to the effects list
    build_effect(effect_infos) {
        const effect_params = this.get_effect_params(effect_infos);
        const effect_overrides = this.get_effect_overrides(effect_infos.type, effect_params);
        let effect = this.effects_manager['new_' + effect_infos.type + '_effect']({
            ...effect_params,
            ...effect_overrides,
        });
        this.setup_effect(effect, effect_infos, effect_params);
    }

    setup_effect(effect, effect_infos, effect_params, pixelize_role = null) {
        effect._bms_effect_type = effect_infos.type;
        effect._bms_effect_id = effect_infos.id;
        effect._bms_effect_params = effect_params;
        effect._bms_pixelize_role = pixelize_role;
        this.effects.push(effect);

        // connect to settings changes
        effect._effect_key_removed_id = this.pipelines_manager.connect(
            this.pipeline_id + '::effect-' + effect_infos.id + '-key-removed', (_, key) => {
                if (!this.is_effect_param_supported(effect, key))
                    return;
                const default_value = this.get_effect_default_param(effect, key);
                effect._bms_effect_params[key] = default_value;
                if (!this.apply_effect_override(effect, key))
                    this.set_effect_param(effect, key, default_value);
            }
        );
        effect._effect_key_updated_id = this.pipelines_manager.connect(
            this.pipeline_id + '::effect-' + effect_infos.id + '-key-updated', (_, key, value) => {
                if (!this.is_effect_param_supported(effect, key))
                    return;
                effect._bms_effect_params[key] = value;
                if (!this.apply_effect_override(effect, key))
                    this.set_effect_param(effect, key, value);
            }
        );
        effect._effect_key_added_id = this.pipelines_manager.connect(
            this.pipeline_id + '::effect-' + effect_infos.id + '-key-added', (_, key, value) => {
                if (!this.is_effect_param_supported(effect, key))
                    return;
                effect._bms_effect_params[key] = value;
                if (!this.apply_effect_override(effect, key))
                    this.set_effect_param(effect, key, value);
            }
        );
    }

    get_effect_params(effect_infos) {
        const effect_class = this.effects_manager.SUPPORTED_EFFECTS[effect_infos.type]?.class;
        const defaults = effect_class?.default_params ?? {};
        const params = Object.fromEntries(
            Object.entries(effect_infos.params ?? {}).filter(
                ([key]) => Object.hasOwn(defaults, key)
            )
        );
        return {
            ...defaults,
            ...params,
        };
    }

    get_effect_default_param(effect, key) {
        return this.effects_manager.SUPPORTED_EFFECTS[effect._bms_effect_type]
            ?.class
            ?.default_params
            ?.[key];
    }

    get_effect_overrides(effect_type, effect_params = {}) {
        const overrides = this.effect_overrides[effect_type] ?? {};
        return typeof overrides === 'function' ? overrides(effect_params) : overrides;
    }

    apply_effect_override(effect, key) {
        const overrides = this.get_effect_overrides(effect._bms_effect_type, effect._bms_effect_params);
        if (!(key in overrides))
            return false;

        this.set_effect_param(effect, key, overrides[key]);
        return true;
    }

    apply_effect_overrides(effect_type = null) {
        this.effects.forEach(effect => {
            if (effect_type && effect._bms_effect_type !== effect_type)
                return;

            const overrides = this.get_effect_overrides(effect._bms_effect_type, effect._bms_effect_params);
            Object.keys(overrides).forEach(key => this.set_effect_param(effect, key, overrides[key]));
        });
    }

    set_effect_param(effect, key, value) {
        if (!this.is_effect_param_supported(effect, key))
            return;

        if (effect._bms_pixelize_role === 'refraction-blur') {
            if (key === 'blur_radius')
                effect.unscaled_radius = this.get_refraction_blur_radius(value);
            else if (key === 'opacity_factor' && 'opacity_factor' in effect)
                effect.opacity_factor = value;
            return;
        }

        if (effect._bms_effect_type !== 'pixelize') {
            effect[key] = value;
            return;
        }

        if (key === 'factor') {
            if (effect._bms_pixelize_role === 'downscale')
                effect.divider = value;
            else if (effect._bms_pixelize_role === 'upscale')
                effect.factor = value;
            return;
        }

        if (key === 'downsampling_mode') {
            if (effect._bms_pixelize_role === 'downscale')
                effect.downsampling_mode = value;
            return;
        }

        if (key in effect)
            effect[key] = value;
    }

    is_effect_param_supported(effect, key) {
        const defaultParams = this.effects_manager.SUPPORTED_EFFECTS[effect._bms_effect_type]
            ?.class
            ?.default_params ?? {};
        return Object.hasOwn(defaultParams, key);
    }

    get_refraction_blur_radius(value) {
        const refractionClass = this.effects_manager.SUPPORTED_EFFECTS.refraction.class;
        return utils.clamp(
            value,
            0,
            refractionClass.max_blur_radius,
            refractionClass.default_params.blur_radius
        );
    }

    /// Remove every effect from the actor it is attached to. Please note that they are not
    /// destroyed, but rather stored (thanks to the `EffectManager` class) to be reused later.
    remove_all_effects() {
        this.effects.forEach(effect => this.release_effect(effect));
        this.effects = [];
    }

    release_effect(effect) {
        this.effects_manager.remove(effect);
        [
            effect._effect_key_removed_id,
            effect._effect_key_updated_id,
            effect._effect_key_added_id
        ].forEach(id => {
            if (id)
                this.pipelines_manager.disconnect(id);
        });
        delete effect._effect_key_removed_id;
        delete effect._effect_key_updated_id;
        delete effect._effect_key_added_id;
        delete effect._bms_effect_type;
        delete effect._bms_effect_id;
        delete effect._bms_effect_params;
        delete effect._bms_pixelize_role;
    }

    /// Change the pipeline id, and update the effects according to this change.
    /// Note: exposed to public API.
    change_pipeline_to(pipeline_id) {
        this.set_pipeline_id(pipeline_id);
        this.attach_pipeline_to_actor(this.actor);
    }

    /// Resets the `Pipeline` object to a sane state, removing every effect and signal.
    /// Note: exposed to public API.
    destroy() {
        this.remove_connections();
        this.remove_pipeline_from_actor();
        this.pipeline_id = null;
    }

    _warn(str) {
        console.warn(`[Blur my Shell > pipeline]     ${str}`);
    }
};
