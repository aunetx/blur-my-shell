const Signals = imports.signals;

/// The `PipelinesManager` object permits to store the list of pipelines and their effects in
/// memory. It is meant to *always* be in sync with the `org.gnome.shell.extensions.blur-my-shell`'s
/// `pipelines` gschema. However, we do not want to re-create every effect each time this schema is
/// changed, so the pipelines manager handles it, and dispatches the updates with targeted signals.
///
/// It is only connected to ONE signal (the pipelines schema being changed), and emits numerous
/// which are connected to by both the different `Pipeline` objects in the extension, and by the
/// different pages of the extension preferences.
/// It emits three different types of signals:
///
/// - general changes to the pipelines list, connected to by the extension preferences:
///     - `pipeline-list-changed`, when the list of pipelines has changed (by creation or deletion)
///     - `pipeline-names-changed`, when the name of a pipeline is changed
///
/// - signals that are targeted towards a given pipeline, with `pipeline_id` being its unique id:
///     - `'pipeline_id'::pipeline-updated`, handing a new pipeline descriptor object, when the
///       pipeline has been changed quite a bit (added/destroyed/reordered the effects)
///     - `'pipeline_id'::pipeline-destroyed`, when the pipeline has been destroyed
///     - `'pipeline_id'::pipeline-renamed`, handing the new name, when the pipeline has been
///       renamed, which is only important for the preferences
///
/// - signals that are targeted towards a given effect, with `effect_id` being its unique id, and
///   `pipeline_id` the unique id of the pipeline it is attached to:
///     - `'pipeline_id'::effect-'effect_id'-key-removed`, handing the key that was removed
///     - `'pipeline_id'::effect-'effect_id'-key-updated`, handing the key that was changed and its
///       new value
///     - `'pipeline_id'::effect-'effect_id'-key-added`, handing the key that was added and its
///       value
export class PipelinesManager {
    constructor(settings) {
        this.settings = settings;
        this.pipelines = this.settings.PIPELINES;
        this.settings.PIPELINES_changed(_ => this.on_pipeline_update());
    }

    create_pipeline(name, effects = []) {
        // select a random id for the pipeline
        let id = "pipeline_" + ("" + Math.random()).slice(2, 16);
        // add a random ID for each effect, to help tracking them
        effects.forEach(effect => effect.id = "effect_" + ("" + Math.random()).slice(2, 16));

        this.pipelines[id] = { name, effects };
        this.settings.PIPELINES = this.pipelines;
        this._emit('pipeline-created', id, this.pipelines[id]);
        this._emit('pipeline-list-changed');
        return id;
    }

    duplicate_pipeline(id) {
        if (!(id in this.pipelines)) {
            this._warn(`could not duplicate pipeline, id ${id} does not exist`);
            return;
        }
        const pipeline = this.pipelines[id];
        this.create_pipeline(pipeline.name + " - duplicate", [...pipeline.effects]);
        this.settings.PIPELINES = this.pipelines;
    }

    delete_pipeline(id) {
        if (!(id in this.pipelines)) {
            this._warn(`could not delete pipeline, id ${id} does not exist`);
            return;
        }
        if (id == "pipeline_default") {
            this._warn(`could not delete pipeline "pipeline_default" as it is immutable`);
            return;
        }
        delete this.pipelines[id];
        this.settings.PIPELINES = this.pipelines;
        this._emit(id + '::pipeline-destroyed');
        this._emit('pipeline-list-changed');
    }

    update_pipeline_effects(id, effects, emit_update_signal = true) {
        if (!(id in this.pipelines)) {
            this._warn(`could not update pipeline effects, id ${id} does not exist`);
            return;
        }
        this.pipelines[id].effects = [...effects];
        this.settings.PIPELINES = this.pipelines;
        if (emit_update_signal)
            this._emit(id + '::pipeline-updated');
    }

    rename_pipeline(id, name) {
        if (!(id in this.pipelines)) {
            this._warn(`could not rename pipeline, id ${id} does not exist`);
            return;
        }
        this.pipelines[id].name = name.slice();
        this.settings.PIPELINES = this.pipelines;
        this._emit(id + '::pipeline-renamed', name);
        this._emit('pipeline-names-changed');
    }

    on_pipeline_update() {
        const old_pipelines = this.pipelines;
        this.pipelines = this.settings.PIPELINES;

        for (var pipeline_id in old_pipelines) {
            // if we find a pipeline that does not exist anymore, signal it
            if (!(pipeline_id in this.pipelines)) {
                this._emit(pipeline_id + '::pipeline-destroyed');
                continue;
            }

            const old_pipeline = old_pipelines[pipeline_id];
            const new_pipeline = this.pipelines[pipeline_id];

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
                            this._emit(
                                pipeline_id + '::effect-' + id + '-key-removed', key
                            );
                        // if a key was updated, we emit to tell the effect to change its value
                        else if (old_effect.params[key] != new_effect.params[key])
                            this._emit(
                                pipeline_id + '::effect-' + id + '-key-updated', key, new_effect.params[key]
                            );
                    }
                    for (let key in new_effect.params) {
                        // if a key was added, we emit to tell the effect the key and its value
                        if (!(key in old_effect.params))
                            this._emit(
                                pipeline_id + '::effect-' + id + '-key-added', key, new_effect.params[key]
                            );
                    }
                }
            }
            // if either the order has changed, or there are new effects, then rebuild it
            else
                this._emit(pipeline_id + '::pipeline-updated', new_pipeline);
        }
    }

    destroy() {
        this.settings.PIPELINES_disconnect();
    }

    _emit(signal, ...args) {
        this.emit(signal, ...args);
        this._log(`signal: '${signal}', arguments: ${args}`);
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > pipelines]    ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > pipelines]    ${str}`);
    }
}

Signals.addSignalMethods(PipelinesManager.prototype);