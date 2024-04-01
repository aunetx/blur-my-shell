import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Background from 'resource:///org/gnome/shell/ui/background.js';


export const Pipeline = class Pipeline {
    constructor(effects_manager, pipelines_manager, pipeline_id = null) {
        this.effects_manager = effects_manager;
        this.pipelines_manager = pipelines_manager;
        this.pipeline_id = pipeline_id;
        this.effects = [];
        this.actor = null;
    }

    create_background_with_effects(
        monitor_index,
        background_managers,
        background_group,
        widget_name
    ) {
        if (this.actor)
            this.unattach_pipeline_from_actor();

        let monitor = Main.layoutManager.monitors[monitor_index];
        this.actor = new St.Widget({
            name: widget_name,
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height
        });

        if (this.pipeline_id)
            this.attach_pipeline_to_actor(this.actor, this.pipeline_id);

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

    attach_pipeline_to_actor(actor, pipeline_id) {
        if (this.actor)
            this.unattach_pipeline_from_actor();

        this.actor = actor;
        this.pipeline_id = pipeline_id;

        // attach the pipeline
        let pipeline = this.pipelines_manager._pipelines[pipeline_id];
        if (!pipeline) {
            this._warn(`could not attach pipeline to actor, pipeline "${pipeline_id}" not found`);
            return;
        }
        this.update_effects_from_pipeline(pipeline);

        // connect to settings changes
        this._pipeline_changed_id = this.pipelines_manager.connect(
            pipeline_id + '::pipeline-changed',
            (_, new_pipeline) => this.update_effects_from_pipeline(new_pipeline)
        );
        this._pipeline_destroyed_id = this.pipelines_manager.connect(
            pipeline_id + '::pipeline-destroyed',
            _ => this.destroy()
        );
    }

    remove_effects_from_actor() {
        this.effects.forEach(effect => {
            this.effects_manager.remove(effect);
            [
                effect._effect_key_removed_id,
                effect._effect_key_updated_id,
                effect._effect_key_added_id
            ].forEach(
                id => this.pipelines_manager.disconnect(id)
            );
        });
        this.effects = [];
    }

    update_effects_from_pipeline(pipeline) {
        this.remove_effects_from_actor();

        pipeline.effects.forEach(effect => {
            if ('new_' + effect.type + '_effect' in this.effects_manager)
                this.add_effect_to_actor(effect);
            else
                this._warn(`could not add effect to actor, effect "${effect.type}" not found`);
        });
        this.effects.reverse();
        if (this.actor)
            this.effects.forEach(effect => this.actor.add_effect(effect));
        else
            this._warn(`could not add effect to actor, actor does not exist anymore`);
    }

    add_effect_to_actor(effect_infos) {
        let effect = this.effects_manager['new_' + effect_infos.type + '_effect'](effect_infos.params);
        this.effects.push(effect);

        // connect to settings changes
        effect._effect_key_removed_id = this.pipelines_manager.connect(
            this.pipeline_id + '::effect-' + effect_infos.id + '-key-removed',
            (_, key) => effect[key] = effect.default_params[key]
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

    unattach_pipeline_from_actor() {
        this.remove_effects_from_actor();
        this.actor = null;
    }

    destroy() {
        this.unattach_pipeline_from_actor();
        if (this._pipeline_changed_id)
            this.pipelines_manager.disconnect(this._pipeline_changed_id);
        if (this._pipeline_destroyed_id)
            this.pipelines_manager.disconnect(this._pipeline_destroyed_id);
        this._pipeline_changed_id = null;
        this._pipeline_destroyed_id = null;
        this.pipeline_id = null;
    }

    _warn(str) {
        console.warn(`[Blur my Shell > pipeline]     ${str}`);
    }
};