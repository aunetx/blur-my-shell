import { DualKawaseBlurEffect } from './dual_kawase_blur.js';

export function get_blur_effects(_) {
    return {
        dual_kawase_blur: {
            class: DualKawaseBlurEffect,
            name: _("Dual Kawase blur"),
            description: _("A fast, high-quality blur."),
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
    };
}
