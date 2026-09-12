import GLib from 'gi://GLib';

const Signals = imports.signals;

function new_id(prefix) {
    return `${prefix}_${GLib.uuid_string_random()}`;
}

function clone_effect(effect) {
    return {
        ...effect,
        params: Object.fromEntries(
            Object.entries(effect.params ?? {}).map(([key, value]) => [
                key,
                Array.isArray(value) ? [...value] : value,
            ])
        ),
    };
}

function values_equal(first, second) {
    if (Object.is(first, second))
        return true;
    if (!Array.isArray(first) || !Array.isArray(second) || first.length !== second.length)
        return false;

    return first.every((value, index) => values_equal(value, second[index]));
}

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
        const id = new_id('pipeline');
        effects = effects.map(effect => ({
            ...clone_effect(effect),
            id: new_id('effect'),
        }));

        const pipelines = {
            ...this.pipelines,
            [id]: { name, effects },
        };
        if (!this.settings.set_pipelines(pipelines))
            return;

        return id;
    }

    duplicate_pipeline(id) {
        if (!Object.hasOwn(this.pipelines, id)) {
            this._warn(`could not duplicate pipeline, id ${id} does not exist`);
            return;
        }
        const pipeline = this.pipelines[id];
        return this.create_pipeline(
            `${pipeline.name} - duplicate`,
            pipeline.effects.map(clone_effect)
        );
    }

    delete_pipeline(id) {
        if (!Object.hasOwn(this.pipelines, id)) {
            this._warn(`could not delete pipeline, id ${id} does not exist`);
            return;
        }
        if (id == "pipeline_default") {
            this._warn(`could not delete pipeline "pipeline_default" as it is immutable`);
            return;
        }
        const replaced_references = this.replace_pipeline_references(id, 'pipeline_default');
        if (!replaced_references)
            return false;

        const pipelines = { ...this.pipelines };
        delete pipelines[id];
        if (!this.settings.set_pipelines(pipelines)) {
            this.restore_pipeline_references(replaced_references, id);
            return false;
        }

        return true;
    }

    replace_pipeline_references(id, replacement) {
        const replaced = [];
        for (const bundle of this.settings.keys) {
            if (!bundle.schemas.some(key => key.name === 'pipeline'))
                continue;

            const component_name = bundle.component.replaceAll('-', '_');
            const component = this.settings[component_name];
            if (component.PIPELINE !== id)
                continue;
            if (!component.settings.set_string('pipeline', replacement)) {
                this._warn(`could not replace pipeline reference for ${bundle.component}`);
                this.restore_pipeline_references(replaced, id);
                return null;
            }
            replaced.push({ component, name: bundle.component });
        }

        return replaced;
    }

    restore_pipeline_references(references, id) {
        for (const { component, name } of references) {
            if (!component.settings.set_string('pipeline', id))
                this._warn(`could not restore pipeline reference for ${name}`);
        }
    }

    update_pipeline_effects(id, effects) {
        if (!Object.hasOwn(this.pipelines, id)) {
            this._warn(`could not update pipeline effects, id ${id} does not exist`);
            return false;
        }

        return this.settings.set_pipelines({
            ...this.pipelines,
            [id]: {
                ...this.pipelines[id],
                effects: effects.map(clone_effect),
            },
        });
    }

    rename_pipeline(id, name) {
        if (!Object.hasOwn(this.pipelines, id)) {
            this._warn(`could not rename pipeline, id ${id} does not exist`);
            return false;
        }

        return this.settings.set_pipelines({
            ...this.pipelines,
            [id]: {
                ...this.pipelines[id],
                name,
            },
        });
    }

    on_pipeline_update() {
        const old_pipelines = this.pipelines;
        this.pipelines = this.settings.PIPELINES;
        const old_ids = Object.keys(old_pipelines);
        const new_ids = Object.keys(this.pipelines);
        const list_changed = old_ids.length !== new_ids.length
            || old_ids.some(id => !Object.hasOwn(this.pipelines, id));
        let names_changed = false;

        for (const pipeline_id of new_ids) {
            if (!Object.hasOwn(old_pipelines, pipeline_id)) {
                this._emit('pipeline-created', pipeline_id, this.pipelines[pipeline_id]);
                this._emit(
                    pipeline_id + '::pipeline-updated',
                    this.pipelines[pipeline_id]
                );
            }
        }

        for (const pipeline_id of old_ids) {
            // if we find a pipeline that does not exist anymore, signal it
            if (!Object.hasOwn(this.pipelines, pipeline_id)) {
                this._emit(pipeline_id + '::pipeline-destroyed');
                continue;
            }

            const old_pipeline = old_pipelines[pipeline_id];
            const new_pipeline = this.pipelines[pipeline_id];

            if (old_pipeline.name !== new_pipeline.name) {
                this._emit(pipeline_id + '::pipeline-renamed', new_pipeline.name);
                names_changed = true;
            }

            // verify if both pipelines have effects in the same order
            // if they have, then check for their parameters
            if (
                old_pipeline.effects.length == new_pipeline.effects.length &&
                old_pipeline.effects.every((effect, i) =>
                    effect.id === new_pipeline.effects[i].id
                    && effect.type === new_pipeline.effects[i].type
                )
            ) {
                for (let i = 0; i < old_pipeline.effects.length; i++) {
                    const old_effect = old_pipeline.effects[i];
                    const new_effect = new_pipeline.effects[i];
                    const id = old_effect.id;
                    for (const key of Object.keys(old_effect.params)) {
                        // if a key was removed, we emit to tell the effect to use the default value
                        if (!Object.hasOwn(new_effect.params, key))
                            this._emit(
                                pipeline_id + '::effect-' + id + '-key-removed', key
                            );
                        // if a key was updated, we emit to tell the effect to change its value
                        else if (!values_equal(old_effect.params[key], new_effect.params[key]))
                            this._emit(
                                pipeline_id + '::effect-' + id + '-key-updated', key, new_effect.params[key]
                            );
                    }
                    for (const key of Object.keys(new_effect.params)) {
                        // if a key was added, we emit to tell the effect the key and its value
                        if (!Object.hasOwn(old_effect.params, key))
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

        if (list_changed)
            this._emit('pipeline-list-changed');
        if (names_changed)
            this._emit('pipeline-names-changed');
    }

    destroy() {
        this.settings.PIPELINES_disconnect();
        this.disconnectAll();
    }

    _emit(signal, ...args) {
        this.emit(signal, ...args);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > pipelines]    ${str}`);
    }
}

Signals.addSignalMethods(PipelinesManager.prototype);
