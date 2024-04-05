import { NativeBlurEffect } from '../effects/shell_gaussian_blur.js';
import { GaussianBlurEffect } from '../effects/gaussian_blur.js';
import { MonteCarloBlurEffect } from '../effects/monte_carlo_blur.js';
import { ColorEffect } from '../effects/color.js';
import { NoiseEffect } from '../effects/noise.js';
import { CornerEffect } from '../effects/corner.js';

export const SUPPORTED_EFFECTS = {
    native_gaussian_blur: {
        class: NativeBlurEffect,
        name: "Native gaussian blur",
        description: "An optimized blur effect that blend together the pixels around the origin, within a given radius.",
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
                description: "The brightness of the effect.",
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
        description: "A basic blur effect that blend together the pixels around the origin, within a given radius.",
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
                description: "The brightness of the effect.",
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
                description: "The maximum step to go search the next pixel.",
                type: "float",
                min: 0.,
                max: 10.,
                increment: 0.01,
                digits: 2
            },
            iterations: {
                name: "Iterations",
                description: "The number of iterations. The more there are, the more even the blur is.",
                type: "integer",
                min: 0,
                max: 50,
                increment: 1
            },
            brightness: {
                name: "Brightness",
                description: "The brightness of the effect.",
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
                description: "The color to blend in. The blending amount is controled by the alpha value of the color.",
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
                description: "The luminosity of the noise. A setting of '0.5' will make the effect transparent.",
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
        description: "An effect that draws a corner. Add it last not to have the other effects perturb the corner.",
        editable_params: {
            radius: {
                name: "Radius",
                description: "The radius of the corner. GNOME apps use a radius of 12 px by default.",
                type: "integer",
                min: 0,
                max: 50,
                increment: 1,
            }
        }
    }
};