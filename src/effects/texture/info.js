import { PixelizeEffect } from './pixelize.js';
import { DownscaleEffect } from './downscale.js';
import { UpscaleEffect } from './upscale.js';
import { DerivativeEffect } from './derivative.js';
import { NoiseEffect } from './noise.js';

export function get_texture_effects(_) {
    return {
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
    };
}
