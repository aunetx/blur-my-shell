import { NativeDynamicBlurEffect } from '../effects/native_dynamic_gaussian_blur.js';
import { NativeStaticBlurEffect } from '../effects/native_static_gaussian_blur.js';
import { GaussianBlurEffect } from '../effects/gaussian_blur.js';
import { MonteCarloBlurEffect } from '../effects/monte_carlo_blur.js';
import { ColorEffect } from '../effects/color.js';
import { NoiseEffect } from '../effects/noise.js';
import { CornerEffect } from '../effects/corner.js';

// TODO add gettext translations for the effects / parameters name and description
export const SUPPORTED_EFFECTS = {
    native_dynamic_gaussian_blur: {
        class: NativeDynamicBlurEffect,
        name: "Native gaussian blur",
        description: "An optimized blur effect that smoothly blends pixels within a given radius.",
        hide_from_effects_list: true
    },

    native_static_gaussian_blur: {
        class: NativeStaticBlurEffect,
        name: "Native gaussian blur",
        description: "An optimized blur effect that smoothly blends pixels within a given radius.",
        editable_params: {
            unscaled_radius: {
                name: "Radius",
                description: "The intensity of the blur effect.",
                type: "float",
                min: 0.,
                max: 200.,
                increment: 1.,
                digits: 0
            },
            brightness: {
                name: "Brightness",
                description: "The brightness of the blur effect, a high value might make the text harder to read.",
                type: "float",
                min: 0.,
                max: 1.,
                increment: 0.01,
                digits: 2
            },
        }
    },

    gaussian_blur: {
        class: GaussianBlurEffect,
        name: "Gaussian blur",
        description: "A blur effect that smoothly blends pixels within a given radius. This effect is more precise, but way less optimized.",
        editable_params: {
            radius: {
                name: "Radius",
                description: "The intensity of the blur effect. The bigger it is, the slower it will be.",
                type: "float",
                min: 0.,
                max: 200.,
                increment: 1.,
                digits: 0
            },
            brightness: {
                name: "Brightness",
                description: "The brightness of the blur effect, a high value might make the text harder to read.",
                type: "float",
                min: 0.,
                max: 1.,
                increment: 0.01,
                digits: 2
            },
        }
    },

    monte_carlo_blur: {
        class: MonteCarloBlurEffect,
        name: "Monte Carlo blur",
        description: "A blur effect that mimics a random walk, by picking pixels further and further away from its origin and mixing them all together.",
        editable_params: {
            radius: {
                name: "Radius",
                description: "The maximum travel distance for each step in the random walk. A higher value will make the blur more randomized.",
                type: "float",
                min: 0.,
                max: 10.,
                increment: 0.01,
                digits: 2
            },
            iterations: {
                name: "Iterations",
                description: "The number of iterations. The more there are, the smoother the blur is.",
                type: "integer",
                min: 0,
                max: 50,
                increment: 1
            },
            brightness: {
                name: "Brightness",
                description: "The brightness of the blur effect, a high value might make the text harder to read.",
                type: "float",
                min: 0.,
                max: 1.,
                increment: 0.01,
                digits: 2
            },
            use_base_pixel: {
                name: "Use base pixel",
                description: "Whether or not the original pixel is counted for the blur. If it is, the image will be more legible.",
                type: "boolean"
            }
        }
    },

    color: {
        class: ColorEffect,
        name: "Color",
        description: "An effect that blends a color into the pipeline.",
        editable_params: {
            color: {
                name: "Color",
                description: "The color to blend in. The blending amount is controled by the opacity of the color.",
                type: "rgba"
            }
        }
    },

    noise: {
        class: NoiseEffect,
        name: "Noise",
        description: "An effect that adds a random noise. Prefer the Monte Carlo blur for a more organic effect if needed.",
        editable_params: {
            noise: {
                name: "Noise",
                description: "The amount of noise to add.",
                type: "float",
                min: 0.,
                max: 1.,
                increment: 0.01,
                digits: 2
            },
            lightness: {
                name: "Lightness",
                description: "The luminosity of the noise. A setting of '1.0' will make the effect transparent.",
                type: "float",
                min: 0.,
                max: 2.,
                increment: 0.01,
                digits: 2
            }
        }
    },

    corner: {
        class: CornerEffect,
        name: "Corner",
        description: "An effect that draws corners. Add it last not to have the other effects perturb the corners.",
        editable_params: {
            radius: {
                name: "Radius",
                description: "The radius of the corner. GNOME apps use a radius of 12 px by default.",
                type: "integer",
                min: 0,
                max: 50,
                increment: 1,
            },
            corners_top: {
                name: "Top corners",
                description: "Whether or not to round the top corners.",
                type: "boolean"
            },
            corners_bottom: {
                name: "Bottom corners",
                description: "Whether or not to round the bottom corners.",
                type: "boolean"
            }
        }
    }
};