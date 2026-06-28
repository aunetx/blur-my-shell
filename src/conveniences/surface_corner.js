export const SURFACE_CORNER_EFFECT_ID = '__bms_surface_corner';

function get_radius(get_corner_radius) {
    const radius = get_corner_radius?.() ?? 0;
    return Number.isFinite(radius) ? Math.max(0, radius) : 0;
}

export function with_surface_corner(effects, get_corner_radius, options = {}) {
    const mapped_effects = effects.filter(effect =>
        effect.type !== 'corner' && effect.id !== SURFACE_CORNER_EFFECT_ID
    );

    if (options.enabled === false)
        return mapped_effects;

    if (!options.always && get_radius(get_corner_radius) <= 0)
        return mapped_effects;

    return [
        ...mapped_effects,
        {
            type: 'corner',
            id: SURFACE_CORNER_EFFECT_ID,
            params: {
                radius: get_radius(get_corner_radius),
                ...(options.params ?? {}),
            },
        },
    ];
}

export function get_surface_corner_overrides(get_corner_radius, options = {}) {
    return () => ({
        radius: get_radius(get_corner_radius),
        ...(options.params ?? {}),
    });
}
