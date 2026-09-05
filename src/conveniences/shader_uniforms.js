const INTEGRAL_UNIFORMS = new Set([
    'corners_bottom',
    'corners_top',
    'divider',
    'dir',
    'downsampling_mode',
    'factor',
    'iterations',
    'mode',
    'operation',
    'prefer_closer_pixels',
    'straight_corners',
    'texture_repeat',
    'use_base_pixel',
]);

export function set_uniform(effect, name, value) {
    if (!effect._bms_uniforms)
        effect._bms_uniforms = new Map();

    if (effect._bms_uniforms.get(name) === value)
        return;
    effect._bms_uniforms.set(name, value);
    effect._bms_uniforms_dirty = true;
    try {
        effect.queue_repaint();
    } catch (e) { }
}

export function mark_dirty(effect) {
    if (effect._bms_uniforms)
        effect._bms_uniforms_dirty = true;
}

export function upload_uniforms(effect) {
    if (!effect._bms_uniforms_dirty || !effect._bms_uniforms || !effect.get_actor?.())
        return;

    for (const [name, value] of effect._bms_uniforms) {
        try {
            effect.set_surface_uniform(name, value, INTEGRAL_UNIFORMS.has(name));
        } catch (e) {
            if (!effect._bms_uniform_warning_shown) {
                effect._bms_uniform_warning_shown = true;
                console.warn(`[Blur my Shell] shader uniform upload failed for ${effect.constructor.name}`, e);
            }
        }
    }

    effect._bms_uniforms_dirty = false;
}
