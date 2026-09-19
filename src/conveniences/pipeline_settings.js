import GLib from 'gi://GLib';

function is_plain_object(value) {
    if (value === null || typeof value !== 'object')
        return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
}

function unpack_string(value, label) {
    const unpacked = value?.deep_unpack?.();
    if (typeof unpacked !== 'string')
        throw new Error(`${label} is not a string`);

    return unpacked;
}

function validate_id(value, label) {
    if (
        !/^[A-Za-z0-9_-]+$/.test(value)
        || ['__proto__', 'prototype', 'constructor'].includes(value)
    )
        throw new Error(`${label} contains unsupported characters`);
}

function unpack_param(value, label) {
    const unpacked = value?.deep_unpack?.();
    if (
        typeof unpacked === 'boolean'
        || typeof unpacked === 'string'
        || (typeof unpacked === 'number' && Number.isFinite(unpacked))
    )
        return unpacked;

    if (
        Array.isArray(unpacked)
        && unpacked.length === 4
        && unpacked.every(component =>
            typeof component === 'number' && Number.isFinite(component)
        )
    )
        return unpacked;

    throw new Error(`${label} has an unsupported value`);
}

function unpack_effect(effect_variant) {
    const effect = effect_variant?.deep_unpack?.();
    if (!is_plain_object(effect))
        throw new Error('effect is not an object');
    if (!Object.hasOwn(effect, 'type'))
        throw new Error('effect has no type');
    if (!Object.hasOwn(effect, 'id'))
        throw new Error('effect has no id');

    const params = Object.hasOwn(effect, 'params') ? effect.params.deep_unpack() : {};
    if (!is_plain_object(params))
        throw new Error('effect params is not an object');

    const type = unpack_string(effect.type, 'effect type');
    const id = unpack_string(effect.id, 'effect id');
    if (type.length === 0)
        throw new Error('effect type is empty');
    if (id.length === 0)
        throw new Error('effect id is empty');
    validate_id(type, 'effect type');
    validate_id(id, 'effect id');

    return {
        type,
        id,
        params: Object.fromEntries(
            Object.entries(params).map(([key, value]) => {
                validate_id(key, `effect ${id} parameter name`);
                return [
                    key,
                    unpack_param(value, `effect ${id} parameter ${key}`),
                ];
            })
        ),
    };
}

export function unpack_pipelines(value) {
    const unpacked = value.deep_unpack();
    if (!is_plain_object(unpacked))
        throw new Error('pipelines is not an object');

    const pipelines = Object.create(null);
    for (const [pipeline_id, pipeline] of Object.entries(unpacked)) {
        if (pipeline_id.length === 0)
            throw new Error('pipeline id is empty');
        validate_id(pipeline_id, 'pipeline id');
        if (!is_plain_object(pipeline))
            throw new Error(`pipeline ${pipeline_id} is not an object`);
        if (!Object.hasOwn(pipeline, 'name'))
            throw new Error(`pipeline ${pipeline_id} has no name`);
        if (!Object.hasOwn(pipeline, 'effects'))
            throw new Error(`pipeline ${pipeline_id} has no effects`);

        const effects = pipeline.effects.deep_unpack();
        if (!Array.isArray(effects))
            throw new Error(`pipeline ${pipeline_id} effects is not an array`);

        const unpacked_effects = effects.map(unpack_effect);
        const effect_ids = new Set(unpacked_effects.map(effect => effect.id));
        if (effect_ids.size !== unpacked_effects.length)
            throw new Error(`pipeline ${pipeline_id} has duplicate effect ids`);

        pipelines[pipeline_id] = {
            name: unpack_string(pipeline.name, `pipeline ${pipeline_id} name`),
            effects: unpacked_effects,
        };
    }

    if (!Object.hasOwn(pipelines, 'pipeline_default'))
        throw new Error('default pipeline is missing');

    return pipelines;
}

function pack_param(value, label) {
    if (typeof value === 'boolean')
        return GLib.Variant.new_boolean(value);
    if (typeof value === 'number' && Number.isFinite(value))
        return Number.isInteger(value)
            ? GLib.Variant.new_int32(value)
            : GLib.Variant.new_double(value);
    if (typeof value === 'string')
        return GLib.Variant.new_string(value);
    if (
        Array.isArray(value)
        && value.length === 4
        && value.every(component =>
            typeof component === 'number' && Number.isFinite(component)
        )
    )
        return new GLib.Variant('(dddd)', value);

    throw new Error(`${label} has an unsupported type`);
}

function pack_effect(effect, label) {
    if (!is_plain_object(effect))
        throw new Error(`${label} is not an object`);
    if (!Object.hasOwn(effect, 'type'))
        throw new Error(`${label} has no type`);
    if (!Object.hasOwn(effect, 'id'))
        throw new Error(`${label} has no id`);
    if (typeof effect.type !== 'string')
        throw new Error(`${label} type is not a string`);
    if (typeof effect.id !== 'string')
        throw new Error(`${label} id is not a string`);
    if (effect.type.length === 0)
        throw new Error(`${label} type is empty`);
    if (effect.id.length === 0)
        throw new Error(`${label} id is empty`);
    validate_id(effect.type, `${label} type`);
    validate_id(effect.id, `${label} id`);

    const params = Object.hasOwn(effect, 'params') ? effect.params : {};
    if (!is_plain_object(params))
        throw new Error(`${label} params is not an object`);

    const packed_params = Object.fromEntries(
        Object.entries(params).map(([key, value]) => {
            validate_id(key, `${label} parameter name`);
            return [
                key,
                pack_param(value, `${label} parameter ${key}`),
            ];
        })
    );

    return new GLib.Variant('a{sv}', {
        type: GLib.Variant.new_string(effect.type),
        id: GLib.Variant.new_string(effect.id),
        params: new GLib.Variant('a{sv}', packed_params),
    });
}

export function pack_pipelines(pipelines) {
    if (!is_plain_object(pipelines))
        throw new Error('pipelines is not an object');
    if (!Object.hasOwn(pipelines, 'pipeline_default'))
        throw new Error('default pipeline is missing');

    const packed = Object.create(null);
    for (const [pipeline_id, pipeline] of Object.entries(pipelines)) {
        if (pipeline_id.length === 0)
            throw new Error('pipeline id is empty');
        validate_id(pipeline_id, 'pipeline id');
        if (!is_plain_object(pipeline))
            throw new Error(`pipeline ${pipeline_id} is not an object`);
        if (!Object.hasOwn(pipeline, 'name'))
            throw new Error(`pipeline ${pipeline_id} has no name`);
        if (!Object.hasOwn(pipeline, 'effects'))
            throw new Error(`pipeline ${pipeline_id} has no effects`);
        if (typeof pipeline.name !== 'string')
            throw new Error(`pipeline ${pipeline_id} name is not a string`);
        if (!Array.isArray(pipeline.effects))
            throw new Error(`pipeline ${pipeline_id} effects is not an array`);

        const effect_ids = new Set(pipeline.effects.map(effect => effect?.id));
        if (effect_ids.size !== pipeline.effects.length)
            throw new Error(`pipeline ${pipeline_id} has duplicate effect ids`);

        packed[pipeline_id] = {
            name: GLib.Variant.new_string(pipeline.name),
            effects: new GLib.Variant(
                'av',
                pipeline.effects.map((effect, index) =>
                    pack_effect(effect, `pipeline ${pipeline_id} effect ${index}`)
                )
            ),
        };
    }

    return new GLib.Variant('a{sa{sv}}', packed);
}
