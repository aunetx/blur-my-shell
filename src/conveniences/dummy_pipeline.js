import St from 'gi://St';
import Clutter from 'gi://Clutter';

/// A dummy `Pipeline`, for dynamic blur only.
/// Instead of a pipeline id, we take the settings of the component we want to blur.
export const DummyPipeline = class DummyPipeline {
    constructor(effects_manager, settings, actor = null) {
        this.effects_manager = effects_manager;
        this.settings = settings;
        this.effect = null;
        this.attach_effect_to_actor(actor);
    }

    create_background_with_effect(
        background_group,
        widget_name
    ) {
        // create the new actor
        this.actor = new St.Widget({ name: widget_name });

        this.attach_effect_to_actor(this.actor);

        // a dummy `BackgroundManager`, just to access the pipeline easily
        let bg_manager = new Clutter.Actor;
        bg_manager.backgroundActor = this.actor;
        bg_manager._bms_pipeline = this;

        background_group.insert_child_at_index(this.actor, 0);

        return [this.actor, bg_manager];
    };

    attach_effect_to_actor(actor) {
        // set the actor
        if (actor)
            this.actor = actor;
        else {
            this.remove_pipeline_from_actor();
            return;
        }

        // build the new effect to be added
        this.build_effect({
            unscaled_radius: 2 * this.settings.SIGMA,
            brightness: this.settings.BRIGHTNESS,
        });

        this.actor_destroy_id = this.actor.connect(
            "destroy", () => this.remove_pipeline_from_actor()
        );

        // add the effect to the actor
        if (this.actor)
            this.actor.add_effect(this.effect);
        else
            this._warn(`could not add effect to actor, actor does not exist anymore`);
    }

    remove_pipeline_from_actor() {
        this.remove_effect();
        if (this.actor && this.actor_destroy_id)
            this.actor.disconnect(this.actor_destroy_id);
        this.actor_destroy_id = null;
        this.actor = null;
    }

    build_effect(params) {
        // create the effect
        this.effect = this.effects_manager.new_native_dynamic_gaussian_blur_effect(params);

        // connect to settings changes, using the true gsettings object
        this._sigma_changed_id = this.settings.settings.connect(
            'changed::sigma', () => this.effect.unscaled_radius = 2 * this.settings.SIGMA
        );
        this._brightness_changed_id = this.settings.settings.connect(
            'changed::brightness', () => this.effect.brightness = this.settings.BRIGHTNESS
        );
    }

    repaint_effect() {
        this.effect?.queue_repaint();
    }

    /// Remove every effect from the actor it is attached to. Please note that they are not
    /// destroyed, but rather stored (thanks to the `EffectManager` class) to be reused later.
    remove_effect() {
        if (this.effect)
            this.effects_manager.remove(this.effect);
        this.effect = null;

        if (this._sigma_changed_id)
            this.settings.settings.disconnect(this._sigma_changed_id);
        if (this._brightness_changed_id)
            this.settings.settings.disconnect(this._brightness_changed_id);
        delete this._sigma_changed_id;
        delete this._brightness_changed_id;
    }

    /// Do nothing for this dummy pipeline.
    /// Note: exposed to public API.
    change_pipeline_to() { return; }

    /// Note: exposed to public API.
    destroy() {
        this.remove_effect();
        this.remove_pipeline_from_actor();
    }

    _warn(str) {
        console.warn(`[Blur my Shell > dummy pip]    ${str}`);
    }
};