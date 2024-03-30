import * as Signals from 'resource:///org/gnome/shell/misc/signals.js';

export class PipelinesManager extends Signals.EventEmitter {
    constructor(settings) {
        super();

        this._settings = settings;
        this._pipelines = this._settings.PIPELINES;
        this._settings.PIPELINES_changed(_ => this._on_pipeline_update());
    }

    _create_pipeline(name, effects_list = []) {
        if (name in this._pipelines) {
            this._warn(`could not create pipeline ${name}, name already exists`);
            return;
        }
        // add a random ID for each effect, to help tracking them
        effects_list.forEach(effect => effect.id = ("" + Math.random()).slice(2, 16));
        this._pipelines[name] = effects_list;
        this._settings.PIPELINES = this._pipelines;
    }

    _delete_pipeline(name) {
        if (!(name in this._pipelines)) {
            this._warn(`could not delete pipeline ${name}, it does not exist`);
            return;
        }
        delete this._pipelines[name];
        this._settings.PIPELINES = this._pipelines;
    }

    _update_pipeline(name, effects_list) {
        if (!(name in this._pipelines)) {
            this._warn(`could not update pipeline ${name}, it does not exist`);
            return;
        }
        this._pipelines[name] = effects_list;
        this._settings.PIPELINES = this._pipelines;
    }

    _on_pipeline_update() {
        const old_pipelines = this._pipelines;
        this._pipelines = this._settings.PIPELINES;

        for (var pipeline_name in old_pipelines) {
            // if we find a pipeline that does not exist anymore, signal it
            if (!(pipeline_name in this._pipelines)) {
                this.emit(pipeline_name + '::destroyed');
                continue;
            }

            const old_pipeline = old_pipelines[pipeline_name];
            const new_pipeline = this._pipelines[pipeline_name];

            // verify if both pipelines have effects in the same order
            // if they have, then check for their parameters
            if (
                old_pipeline.length == new_pipeline.length &&
                old_pipeline.every((effect, index) => effect.id === new_pipeline[index].id)
            ) {
                for (let i = 0; i < old_pipeline.length; i++) {
                    const old_effect = old_pipeline[i];
                    const new_effect = new_pipeline[i];
                    const id = old_effect.id;
                    for (let key in old_effect.params) {
                        // if a key was removed, we emit to tell the effect to use the default value
                        if (!(key in new_effect.params))
                            this.emit(
                                pipeline_name + '::effect-' + id + '-key-removed', key
                            );
                        // if a key was updated, we emit to tell the effect to change its value
                        else if (old_effect.params[key] != new_effect.params[key])
                            this.emit(
                                pipeline_name + '::effect-' + id + '-key-updated', key, new_effect.params[key]
                            );
                    }
                    for (let key in new_effect.params) {
                        // if a key was added, we emit to tell the effect the key and its value
                        if (!(key in old_effect.params))
                            this.emit(
                                pipeline_name + '::effect-' + id + '-key-added', key, new_effect.params[key]
                            );
                    }
                }
            }
            // if either the order has changed, or there are new effects, then rebuild it
            else
                this.emit(pipeline_name + '::pipeline-changed', new_pipeline);
        }
    }

    destroy() {
        this._settings.PIPELINES_disconnect();
    }

    _warn(str) {
        console.warn(`[Blur my Shell > pipelines]    ${str}`);
    }
}