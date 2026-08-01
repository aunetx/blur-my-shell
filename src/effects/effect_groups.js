export function get_effects_groups(_ = _ => '') {
    return {
        blur_effects: {
            name: _('Blur effects'),
            contains: [
                'native_static_gaussian_blur',
                'gaussian_blur',
                'monte_carlo_blur',
            ],
        },
        texture_effects: {
            name: _('Texture effects'),
            contains: [
                'downscale',
                'upscale',
                'pixelize',
                'refraction',
                'derivative',
                'noise',
                'color',
                'luminosity',
                'rgb_to_hsl',
                'hsl_to_rgb',
            ],
        },
        shape_effects: {
            name: _('Shape effects'),
            contains: ['corner'],
        },
    };
}
