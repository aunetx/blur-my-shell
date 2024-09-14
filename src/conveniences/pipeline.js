import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Background from 'resource:///org/gnome/shell/ui/background.js';

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
    constructor(effects_manager, pipelines_manager, pipeline_id, actor = null) {
        this.effects_manager = effects_manager;
        this.pipelines_manager = pipelines_manager;
        this.effects = [];
        this.set_pipeline_id(pipeline_id);
        this.attach_pipeline_to_actor(actor);
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

        // create the new actor
        this.actor = new St.Widget({
            name: widget_name,
            x: use_absolute_position ? monitor.x : 0,
            y: .5 + (use_absolute_position ? monitor.y : 0), // add 1 to correct z-position
            z_position: 1, // seems to fix the multi-monitor glitch
            width: monitor.width,
            height: monitor.height
        });

        // remove the effects, wether or not we attach the pipeline to the actor: if they are fired
        // while the actor has changed, this could go bad
        this.remove_all_effects();
        if (this.pipeline_id)
            this.attach_pipeline_to_actor(this.actor);

        let bg_manager = new Background.BackgroundManager({
            container: this.actor,
            monitorIndex: monitor_index,
            controlPosition: false,
        });
        bg_manager._bms_pipeline = this;

        background_managers.push(bg_manager);
        background_group.insert_child_at_index(this.actor, 0);

        return this.actor;
    };

    /// Set the pipeline id, correctly connecting the `Pipeline` object to listen the pipelines
    /// manager for pipeline-wide changes. This does not update the effects in consequence, call
    /// `change_pipeline_to` instead if you want to reconstruct the effects too.
    set_pipeline_id(pipeline_id) {
        // disconnect ancient signals
        this.remove_connections();

        // change the id
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
        // set the actor
        if (actor)
            this.actor = actor;
        else {
            this.remove_pipeline_from_actor();
            return;
        }

        // attach the pipeline
        let pipeline = this.pipelines_manager.pipelines[this.pipeline_id];
        if (!pipeline) {
            this._warn(`could not attach pipeline to actor, pipeline "${this.pipeline_id}" not found`);
            // do not recurse...
            if ("pipeline_default" in this.pipelines_manager.pipelines) {
                this.set_pipeline_id("pipeline_default");
                pipeline = this.pipelines_manager.pipelines["pipeline_default"];
            } else
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
        if (this.actor && this.actor_destroy_id)
            this.actor.disconnect(this.actor_destroy_id);
        this.actor_destroy_id = null;
        this.actor = null;
    }

    /// Update the effects from the given pipeline object, the hard way.
    update_effects_from_pipeline(pipeline) {
        // remove all effects
        this.remove_all_effects();

        // build the new effects to be added
        pipeline.effects.forEach(effect => {
            if ('new_' + effect.type + '_effect' in this.effects_manager)
                this.build_effect(effect);
            else
                this._warn(`could not add effect to actor, effect "${effect.type}" not found`);
        });
        this.effects.reverse();

        // add the effects to the actor
        if (this.actor)
            this.effects.forEach(effect => this.actor.add_effect(effect));
        else
            this._warn(`could not add effect to actor, actor does not exist anymore`);
    }

    /// Given an `effect_infos` object containing the effect type, id and params, build an effect
    /// and append it to the effects list
    build_effect(effect_infos) {
        let effect = this.effects_manager['new_' + effect_infos.type + '_effect'](effect_infos.params);
        this.effects.push(effect);

        // connect to settings changes
        effect._effect_key_removed_id = this.pipelines_manager.connect(
            this.pipeline_id + '::effect-' + effect_infos.id + '-key-removed',
            (_, key) => effect[key] = effect.constructor.default_params[key]
        );
        effect._effect_key_updated_id = this.pipelines_manager.connect(
            this.pipeline_id + '::effect-' + effect_infos.id + '-key-updated',
            (_, key, value) => effect[key] = value
        );
        effect._effect_key_added_id = this.pipelines_manager.connect(
            this.pipeline_id + '::effect-' + effect_infos.id + '-key-added',
            (_, key, value) => effect[key] = value
        );
    }

    /// Remove every effect from the actor it is attached to. Please note that they are not
    /// destroyed, but rather stored (thanks to the `EffectManager` class) to be reused later.
    remove_all_effects() {
        this.effects.forEach(effect => {
            this.effects_manager.remove(effect);
            [
                effect._effect_key_removed_id,
                effect._effect_key_updated_id,
                effect._effect_key_added_id
            ].forEach(
                id => { if (id) this.pipelines_manager.disconnect(id); }
            );
            delete effect._effect_key_removed_id;
            delete effect._effect_key_updated_id;
            delete effect._effect_key_added_id;
        });
        this.effects = [];
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
        this.remove_all_effects();
        this.remove_connections();
        this.remove_pipeline_from_actor();
        this.pipeline_id = null;
    }

    _warn(str) {
        console.warn(`[Blur my Shell > pipeline]     ${str}`);
    }
};