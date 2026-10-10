import { CornerEffect } from './corner/corner.js';
import { get_blur_effects } from './blur/info.js';
import { get_color_effects } from './color/info.js';
import { get_texture_effects } from './texture/info.js';
import { get_refraction_effects } from './refraction/info.js';
import { get_wave_effects } from './wave/info.js';

export { get_effects_groups } from './effect_groups.js';

export function get_supported_effects(_ = () => "") {
    return {
        ...get_blur_effects(_),
        ...get_color_effects(_),
        ...get_texture_effects(_),
        ...get_refraction_effects(_),
        ...get_wave_effects(_),
    };
}

export function get_internal_effects() {
    return {
        corner: {
            class: CornerEffect,
        },
    };
}
