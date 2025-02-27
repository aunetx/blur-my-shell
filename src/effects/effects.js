import { NativeDynamicBlurEffect } from '../effects/native_dynamic_gaussian_blur.js';
import { NativeStaticBlurEffect } from '../effects/native_static_gaussian_blur.js';
import { GaussianBlurEffect } from '../effects/gaussian_blur.js';
import { MonteCarloBlurEffect } from '../effects/monte_carlo_blur.js';
import { ColorEffect } from '../effects/color.js';
import { NoiseEffect } from '../effects/noise.js';
import { CornerEffect } from '../effects/corner.js';
import { DownscaleEffect } from './downscale.js';
import { UpscaleEffect } from './upscale.js';
import { PixelizeEffect } from './pixelize.js';
import { DerivativeEffect } from './derivative.js';
import { RgbToHslEffect } from './rgb_to_hsl.js';
import { HslToRgbEffect } from './hsl_to_rgb.js';

// We do in this way because I've not found another way to store our preferences in a dictionnary
// while calling `gettext` on it while in preferences. Not so pretty, but works.
export function get_effects_groups(_ = _ => "") {
    return {
        blur_effects: {
            name: _("Blur effects"),
            contains: [
                "native_static_gaussian_blur",
                "gaussian_blur",
                "monte_carlo_blur"
            ]
        },
        texture_effects: {
            name: _("Texture effects"),
            contains: [
                "downscale",
                "upscale",
                "pixelize",
                "derivative",
                "noise",
                "color",
                "rgb_to_hsl",
                "hsl_to_rgb"
            ]
        },
        shape_effects: {
            name: _("Shape effects"),
            contains: [
                "corner"
            ]
        }
    };
};

export function get_supported_effects(_ = () => "") {
    return {
        native_dynamic_gaussian_blur: {
            class: NativeDynamicBlurEffect
        },

        native_static_gaussian_blur: {
            class: NativeStaticBlurEffect,
            name: _("Native gaussian blur"),
            description: _("An optimized blur effect that smoothly blends pixels within a given radius."),
            is_advanced: false,
            editable_params: {
                unscaled_radius: {
                    name: _("Radius"),
                    description: _("The intensity of the blur effect."),
                    type: "float",
                    min: 0.,
                    max: 100.,
                    increment: 1.0,
                    big_increment: 10.,
                    digits: 0
                },
                brightness: {
                    name: _("Brightness"),
                    description: _("The brightness of the blur effect, a high value might make the text harder to read."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
            }
        },

        gaussian_blur: {
            class: GaussianBlurEffect,
            name: _("Gaussian blur (advanced effect)"),
            description: _("A blur effect that smoothly blends pixels within a given radius. This effect is more precise, but way less optimized."),
            is_advanced: true,
            editable_params: {
                radius: {
                    name: _("Radius"),
                    description: _("The intensity of the blur effect. The bigger it is, the slower it will be."),
                    type: "float",
                    min: 0.,
                    max: 100.,
                    increment: .1,
                    big_increment: 10.,
                    digits: 1
                },
                brightness: {
                    name: _("Brightness"),
                    description: _("The brightness of the blur effect, a high value might make the text harder to read."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
            }
        },

        monte_carlo_blur: {
            class: MonteCarloBlurEffect,
            name: _("Monte Carlo blur"),
            description: _("A blur effect that mimics a random walk, by picking pixels further and further away from its origin and mixing them all together."),
            is_advanced: false,
            editable_params: {
                radius: {
                    name: _("Radius"),
                    description: _("The maximum travel distance for each step in the random walk. A higher value will make the blur more randomized."),
                    type: "float",
                    min: 0.,
                    max: 10.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                iterations: {
                    name: _("Iterations"),
                    description: _("The number of iterations. The more there are, the smoother the blur is."),
                    type: "integer",
                    min: 0,
                    max: 50,
                    increment: 1
                },
                brightness: {
                    name: _("Brightness"),
                    description: _("The brightness of the blur effect, a high value might make the text harder to read."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                use_base_pixel: {
                    name: _("Use base pixel"),
                    description: _("Whether or not the original pixel is counted for the blur. If it is, the image will be more legible."),
                    type: "boolean"
                },
                prefer_closer_pixels: {
                    name: _("Prefer closer pixels"),
                    description: _("Whether or not the pixels that are closer to the original pixel will have more weight."),
                    type: "boolean"
                }
            }
        },

        color: {
            class: ColorEffect,
            name: _("Color"),
            description: _("An effect that blends a color into the pipeline."),
            is_advanced: false,
            // TODO make this RGB + blend
            editable_params: {
                color: {
                    name: _("Color"),
                    description: _("The color to blend in. The blending amount is controled by the opacity of the color."),
                    type: "rgba"
                }
            }
        },

        pixelize: {
            class: PixelizeEffect,
            name: _("Pixelize"),
            description: _("An effect that pixelizes the image."),
            is_advanced: false,
            editable_params: {
                factor: {
                    name: _("Factor"),
                    description: _("How much to scale down the image."),
                    type: "integer",
                    min: 1,
                    max: 50,
                    increment: 1
                },
                downsampling_mode: {
                    name: _("Downsampling mode"),
                    description: _("The downsampling method that is used."),
                    type: "dropdown",
                    options: [
                        _("Boxcar"),
                        _("Triangular"),
                        _("Dirac")
                    ]
                }
            }
        },

        downscale: {
            class: DownscaleEffect,
            name: _("Downscale (advanced effect)"),
            description: _("An effect that downscales the image and put it on the top-left corner."),
            is_advanced: true,
            editable_params: {
                divider: {
                    name: _("Factor"),
                    description: _("How much to scale down the image."),
                    type: "integer",
                    min: 1,
                    max: 50,
                    increment: 1
                },
                downsampling_mode: {
                    name: _("Downsampling mode"),
                    description: _("The downsampling method that is used."),
                    type: "dropdown",
                    options: [
                        _("Boxcar"),
                        _("Triangular"),
                        _("Dirac")
                    ]
                }
            }
        },

        upscale: {
            class: UpscaleEffect,
            name: _("Upscale (advanced effect)"),
            description: _("An effect that upscales the image from the top-left corner."),
            is_advanced: true,
            editable_params: {
                factor: {
                    name: _("Factor"),
                    description: _("How much to scale up the image."),
                    type: "integer",
                    min: 1,
                    max: 50,
                    increment: 1
                }
            }
        },

        derivative: {
            class: DerivativeEffect,
            name: _("Derivative"),
            description: _("Apply a spatial derivative, or a laplacian."),
            is_advanced: false,
            editable_params: {
                operation: {
                    name: _("Operation"),
                    description: _("The mathematical operation to apply."),
                    type: "dropdown",
                    options: [
                        _("1-step derivative"),
                        _("2-step derivative"),
                        _("Laplacian")
                    ]
                }
            }
        },

        noise: {
            class: NoiseEffect,
            name: _("Noise"),
            description: _("An effect that adds a random noise. Prefer the Monte Carlo blur for a more organic effect if needed."),
            is_advanced: false,
            editable_params: {
                noise: {
                    name: _("Noise"),
                    description: _("The amount of noise to add."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                lightness: {
                    name: _("Lightness"),
                    description: _("The luminosity of the noise. A setting of '1.0' will make the effect transparent."),
                    type: "float",
                    min: 0.,
                    max: 2.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                }
            }
        },

        rgb_to_hsl: {
            class: RgbToHslEffect,
            name: _("RGB to HSL (advanced effect)"),
            description: _("Converts the image from RGBA colorspace to HSLA."),
            is_advanced: true,
            editable_params: {}
        },

        hsl_to_rgb: {
            class: HslToRgbEffect,
            name: _("HSL to RGB (advanced effect)"),
            description: _("Converts the image from HSLA colorspace to RGBA."),
            is_advanced: true,
            editable_params: {}
        },

        corner: {
            class: CornerEffect,
            name: _("Corner"),
            description: _("An effect that draws corners. Add it last not to have the other effects perturb the corners."),
            is_advanced: false,
            editable_params: {
                radius: {
                    name: _("Radius"),
                    description: _("The radius of the corner. GNOME apps use a radius of 12 px by default."),
                    type: "integer",
                    min: 0,
                    max: 50,
                    increment: 1,
                },
                corners_top: {
                    name: _("Top corners"),
                    description: _("Whether or not to round the top corners."),
                    type: "boolean"
                },
                corners_bottom: {
                    name: _("Bottom corners"),
                    description: _("Whether or not to round the bottom corners."),
                    type: "boolean"
                }
            }
        }
    };
};