const INTEGRAL_UNIFORMS = new Set([
    'corners_bottom',
    'corners_top',
    'divider',
    'downsampling_mode',
    'factor',
    'fresnel_two_sided',
    'image_mode',
    'mode',
    'operation',
    'straight_corners',
    'texture_repeat',
    'octaves',
    'vapor_octaves',
]);

export function uniform_type(name) {
    return INTEGRAL_UNIFORMS.has(name) ? 'int' : 'float';
}

export function set_pipeline_uniform(pipeline, location, name, value) {
    if (INTEGRAL_UNIFORMS.has(name))
        pipeline.set_uniform_1i(location, Math.trunc(value));
    else
        pipeline.set_uniform_1f(location, value);
}

export function set_uniform(effect, name, value) {
    if (!effect._bms_uniforms)
        effect._bms_uniforms = new Map();

    if (effect._bms_uniforms.get(name) === value)
        return;
    effect._bms_uniforms.set(name, value);
    effect._bms_uniforms_dirty = true;
    effect.queue_repaint();
}

export function mark_dirty(effect) {
    if (effect._bms_uniforms)
        effect._bms_uniforms_dirty = true;
}

/// Uploads the uniforms changed since the last paint, must be called while painting.
export function upload_uniforms(effect) {
    if (!effect._bms_uniforms_dirty)
        return;

    const pipeline = effect.get_pipeline();
    for (const [name, value] of effect._bms_uniforms)
        set_pipeline_uniform(pipeline, pipeline.get_uniform_location(name), name, value);

    effect._bms_uniforms_dirty = false;
}
