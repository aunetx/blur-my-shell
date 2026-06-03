// Live blur surfaces compose wallpaper and window clones, then blur that source with a
// static shader. Native dynamic effects are mapped to native_static for this path because
// framebuffer sampling is not used once the source is composed manually.
const SOURCE_EFFECT_TYPES = [
    'native_dynamic_gaussian_blur',
    'native_static_gaussian_blur',
];

export function map_source_effect(effect) {
    if (SOURCE_EFFECT_TYPES.includes(effect.type))
        return { ...effect, type: 'native_static_gaussian_blur' };

    return effect;
}

export function map_source_effects(effects) {
    return effects.map(effect => map_source_effect(effect));
}