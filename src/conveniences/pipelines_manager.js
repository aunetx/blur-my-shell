import * as Signals from 'resource:///org/gnome/shell/misc/signals.js';

export class PipelinesManager extends Signals.EventEmitter {
    constructor(settings) {
        super();

        this._settings = settings;
        this._pipelines = this._settings.PIPELINES;
        this._settings.PIPELINES_changed(_ => this._on_pipeline_update());
    }

    _create_pipeline(name = "", effects = []) {
        // select a random id for the pipeline
        let id = ("pipeline_" + Math.random()).slice(2, 16);
        // add a random ID for each effect, to help tracking them
        effects.forEach(effect => effect.id = ("effect_" + Math.random()).slice(2, 16));

        this._pipelines[id] = { name, effects };
        this._settings.PIPELINES = this._pipelines;
        return id;
    }

    _delete_pipeline(id) {
        if (!(id in this._pipelines)) {
            this._warn(`could not delete pipeline ${id}, id does not exist`);
            return;
        }
        delete this._pipelines[id];
        this._settings.PIPELINES = this._pipelines;
    }

    _update_pipeline(id, name, effects) {
        if (!(id in this._pipelines)) {
            this._warn(`could not update pipeline ${id}, id does not exist`);
            return;
        }
        this._pipelines[id] = { name, effects };
        this._settings.PIPELINES = this._pipelines;
    }

    _on_pipeline_update() {
        const old_pipelines = this._pipelines;
        this._pipelines = this._settings.PIPELINES;

        for (var pipeline_id in old_pipelines) {
            // if we find a pipeline that does not exist anymore, signal it
            if (!(pipeline_id in this._pipelines)) {
                this.emit(pipeline_id + '::pipeline-destroyed');
                continue;
            }

            const old_pipeline = old_pipelines[pipeline_id];
            const new_pipeline = this._pipelines[pipeline_id];

            // verify if both pipelines have effects in the same order
            // if they have, then check for their parameters
            if (
                old_pipeline.effects.length == new_pipeline.effects.length &&
                old_pipeline.effects.every((effect, i) => effect.id === new_pipeline.effects[i].id)
            ) {
                for (let i = 0; i < old_pipeline.effects.length; i++) {
                    const old_effect = old_pipeline.effects[i];
                    const new_effect = new_pipeline.effects[i];
                    const id = old_effect.id;
                    for (let key in old_effect.params) {
                        // if a key was removed, we emit to tell the effect to use the default value
                        if (!(key in new_effect.params))
                            this.emit(
                                pipeline_id + '::effect-' + id + '-key-removed', key
                            );
                        // if a key was updated, we emit to tell the effect to change its value
                        else if (old_effect.params[key] != new_effect.params[key])
                            this.emit(
                                pipeline_id + '::effect-' + id + '-key-updated', key, new_effect.params[key]
                            );
                    }
                    for (let key in new_effect.params) {
                        // if a key was added, we emit to tell the effect the key and its value
                        if (!(key in old_effect.params))
                            this.emit(
                                pipeline_id + '::effect-' + id + '-key-added', key, new_effect.params[key]
                            );
                    }
                }
            }
            // if either the order has changed, or there are new effects, then rebuild it
            else
                this.emit(pipeline_id + '::pipeline-changed', new_pipeline);
        }
    }

    destroy() {
        this._settings.PIPELINES_disconnect();
    }

    _warn(str) {
        console.warn(`[Blur my Shell > pipelines]    ${str}`);
    }
}