import GLib from 'gi://GLib';

function is_plain_object(value) {
    return value !== null
        && typeof value === 'object'
        && value.constructor === Object;
}

function unpack_string(value, label) {
    const unpacked = value?.deep_unpack?.();
    if (typeof unpacked !== 'string')
        throw new Error(`${label} is not a string`);

    return unpacked;
}

function unpack_effect(effect_variant) {
    const effect = effect_variant?.deep_unpack?.();
    if (!is_plain_object(effect))
        throw new Error('effect is not an object');
    if (!('type' in effect))
        throw new Error('effect has no type');
    if (!('id' in effect))
        throw new Error('effect has no id');

    const params = 'params' in effect ? effect.params.deep_unpack() : {};
    if (!is_plain_object(params))
        throw new Error('effect params is not an object');

    return {
        type: unpack_string(effect.type, 'effect type'),
        id: unpack_string(effect.id, 'effect id'),
        params: Object.fromEntries(
            Object.entries(params).map(([key, value]) => [key, value.deep_unpack()])
        ),
    };
}

export function unpack_pipelines(value) {
    const unpacked = value.deep_unpack();
    if (!is_plain_object(unpacked))
        throw new Error('pipelines is not an object');

    const pipelines = {};
    for (const [pipeline_id, pipeline] of Object.entries(unpacked)) {
        if (!is_plain_object(pipeline))
            throw new Error(`pipeline ${pipeline_id} is not an object`);
        if (!('name' in pipeline))
            throw new Error(`pipeline ${pipeline_id} has no name`);
        if (!('effects' in pipeline))
            throw new Error(`pipeline ${pipeline_id} has no effects`);

        const effects = pipeline.effects.deep_unpack();
        if (!Array.isArray(effects))
            throw new Error(`pipeline ${pipeline_id} effects is not an array`);

        pipelines[pipeline_id] = {
            name: unpack_string(pipeline.name, `pipeline ${pipeline_id} name`),
            effects: effects.map(unpack_effect),
        };
    }

    return pipelines;
}

function pack_param(value, label) {
    if (typeof value === 'boolean')
        return GLib.Variant.new_boolean(value);
    if (typeof value === 'number')
        return Number.isInteger(value)
            ? GLib.Variant.new_int32(value)
            : GLib.Variant.new_double(value);
    if (typeof value === 'string')
        return GLib.Variant.new_string(value);
    if (
        Array.isArray(value)
        && value.length === 4
        && value.every(component => typeof component === 'number')
    )
        return new GLib.Variant('(dddd)', value);

    throw new Error(`${label} has an unsupported type`);
}

function pack_effect(effect, label) {
    if (!is_plain_object(effect))
        throw new Error(`${label} is not an object`);
    if (typeof effect.type !== 'string')
        throw new Error(`${label} type is not a string`);
    if (typeof effect.id !== 'string')
        throw new Error(`${label} id is not a string`);

    const params = effect.params ?? {};
    if (!is_plain_object(params))
        throw new Error(`${label} params is not an object`);

    const packed_params = Object.fromEntries(
        Object.entries(params).map(([key, value]) => [
            key,
            pack_param(value, `${label} parameter ${key}`),
        ])
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

    const packed = {};
    for (const [pipeline_id, pipeline] of Object.entries(pipelines)) {
        if (!is_plain_object(pipeline))
            throw new Error(`pipeline ${pipeline_id} is not an object`);
        if (typeof pipeline.name !== 'string')
            throw new Error(`pipeline ${pipeline_id} name is not a string`);
        if (!Array.isArray(pipeline.effects))
            throw new Error(`pipeline ${pipeline_id} effects is not an array`);

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
