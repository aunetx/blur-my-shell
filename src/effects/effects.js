import { DualKawaseBlurEffect } from './dual_kawase_blur.js';
import { ColorEffect } from '../effects/color.js';
import { NoiseEffect } from '../effects/noise.js';
import { CornerEffect } from './corner.js';
import { DownscaleEffect } from './downscale.js';
import { UpscaleEffect } from './upscale.js';
import { PixelizeEffect } from './pixelize.js';
import { DerivativeEffect } from './derivative.js';
import { RgbToHslEffect } from './rgb_to_hsl.js';
import { HslToRgbEffect } from './hsl_to_rgb.js';
import { LuminosityEffect } from './luminosity.js';
import { RefractionEffect } from './refraction.js';
export { get_effects_groups } from './effect_groups.js';

export function get_supported_effects(_ = () => "") {
    return {
        dual_kawase_blur: {
            class: DualKawaseBlurEffect,
            name: _("Dual Kawase blur"),
            description: _("A fast multi-resolution blur shared by static and dynamic surfaces."),
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

        color: {
            class: ColorEffect,
            name: _("Color"),
            description: _("An effect that blends a color into the pipeline."),
            is_advanced: false,
            // TODO make this RGB + blend
            editable_params: {
                color: {
                    name: _("Color"),
                    description: _("The color to blend in. The blending amount is controlled by the opacity of the color."),
                    type: "rgba",
                    use_alpha: true
                },
                blend_mode: {
                    name: _("Blend mode"),
                    description: _("How the color is blended in."),
                    type: "dropdown",
                    options: [
                        _("Normal"),
                        _("Multiply"),
                        _("Screen"),
                        _("Overlay"),
                        _("Darken"),
                        _("Lighten"),
                        _("Plus darker"),
                        _("Plus lighter"),
                        _("Color dodge"),
                        _("Color burn"),
                        _("Hard light"),
                        _("Soft light"),
                        _("Difference"),
                        _("Exclusion"),
                        _("Hue"),
                        _("Saturation"),
                        _("Color"),
                        _("Luminosity")
                    ]
                }
            }
        },

        luminosity: {
            class: LuminosityEffect,
            name: _("Luminosity"),
            description: _("An effect that affects the luminosity of the image."),
            is_advanced: false,
            editable_params: {
                brightness_shift: {
                    name: _("Shift brightness"),
                    description: _("The brightness to add or remove from the image."),
                    type: "float",
                    min: -1.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                brightness_multiplicator: {
                    name: _("Brightness multiplier"),
                    description: _("Multiplies image brightness; 0 is black and 1 leaves brightness unchanged."),
                    type: "float",
                    min: 0.,
                    max: 2.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                contrast: {
                    name: _("Contrast"),
                    description: _("Adjusts image contrast around the selected contrast center."),
                    type: "float",
                    min: 0.,
                    max: 2.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                contrast_center: {
                    name: _("Contrast center"),
                    description: _("The center of the contrast to use."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                saturation_multiplicator: {
                    name: _("Saturation"),
                    description: _("Multiplies image saturation; 0 removes all color and 1 leaves saturation unchanged."),
                    type: "float",
                    min: 0.,
                    max: 2.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
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
            description: _("An effect that downscales the image and puts it in the top-left corner."),
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
            description: _("An effect that adds random grain to the image."),
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

        refraction: {
            class: RefractionEffect,
            name: _("Liquid Glass"),
            description: _("A glossy translucent material with edge refraction, rim lighting, tint, and inner shadow."),
            is_advanced: false,
            editable_params: {
                strength: {
                    name: _("Refraction scale"),
                    description: _("How strongly the glass bends the sampled blur texture."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                blur_radius: {
                    name: _("Blur radius"),
                    description: _("Blurs the sampled backdrop before the liquid-glass shader is applied."),
                    type: "float",
                    min: 0.,
                    max: 48.,
                    increment: 1.,
                    big_increment: 10.,
                    digits: 0
                },
                edge_size: {
                    name: _("Bezel width"),
                    description: _("How far the liquid-glass lens reaches inward from the edge."),
                    type: "float",
                    min: 1.,
                    max: 100.,
                    increment: 1.,
                    big_increment: 10.,
                    digits: 0
                },
                rim_width: {
                    name: _("Rim spread"),
                    description: _("How far the refraction eases inward from the glass edge."),
                    type: "float",
                    min: 1.,
                    max: 6.5,
                    increment: 0.1,
                    big_increment: 0.5,
                    digits: 2
                },
                falloff: {
                    name: _("Glass thickness"),
                    description: _("Depth used by the Snell-style refraction profile."),
                    type: "float",
                    min: 0.25,
                    max: 8.,
                    increment: 0.05,
                    big_increment: 0.5,
                    digits: 2
                },
                gloss: {
                    name: _("Fresnel glare"),
                    description: _("Strength of the Schlick fresnel rim glare from the glass edge."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                tint: {
                    name: _("Tint strength"),
                    description: _("Amount of subtle milky glass tint over the blurred texture."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                tint_color: {
                    name: _("Tint color"),
                    description: _("Color blended over the blurred texture, weighted by the tint strength."),
                    type: "rgba",
                    use_alpha: true
                },
                backdrop_zoom: {
                    name: _("Backdrop zoom"),
                    description: _("Zoom level of the backdrop visible through the glass."),
                    type: "float",
                    min: 0.1,
                    max: 4.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                shadow: {
                    name: _("Inner shadow"),
                    description: _("Darkens the lower and inner edge for a deeper glass surface."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                rgb_fringing: {
                    name: _("Chromatic dispersion"),
                    description: _("Physical per-channel refraction dispersion at the glass edge."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                texture_repeat: {
                    name: _("Edge behavior"),
                    description: _("How texture coordinates outside the actor are sampled."),
                    type: "dropdown",
                    options: [
                        _("Clamp"),
                        _("Mirror")
                    ]
                }
            }
        },

        rgb_to_hsl: {
            class: RgbToHslEffect,
            name: _("RGB to HSL (advanced effect)"),
            description: _("Converts the image from RGBA color space to HSLA."),
            is_advanced: true,
            editable_params: {}
        },

        hsl_to_rgb: {
            class: HslToRgbEffect,
            name: _("HSL to RGB (advanced effect)"),
            description: _("Converts the image from HSLA color space to RGBA."),
            is_advanced: true,
            editable_params: {}
        }
    };
};

export function get_internal_effects() {
    return {
        corner: {
            class: CornerEffect,
        },
    };
}
