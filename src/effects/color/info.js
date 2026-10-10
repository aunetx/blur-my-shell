import { ColorEffect } from './color.js';
import { LuminosityEffect } from './luminosity.js';
import { RgbToHslEffect } from './rgb_to_hsl.js';
import { HslToRgbEffect } from './hsl_to_rgb.js';

export function get_color_effects(_) {
    return {
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
        },
    };
}
