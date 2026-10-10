import { WaveEffect } from './wave.js';

export function get_wave_effects(_) {
    return {
        wave: {
            class: WaveEffect,
            name: _("Vapor Wave"),
            description: _("A flowing wave displacement for a lively and dynamic feel with natural movement."),
            is_advanced: false,
            editable_params: {
                frequency: {
                    name: _("Wave frequency"),
                    description: _("How tightly packed the ripples are."),
                    type: "float",
                    min: 0.,
                    max: 100.,
                    increment: 1.,
                    big_increment: 10.,
                    digits: 0
                },
                amplitude: {
                    name: _("Wave amplitude"),
                    description: _("How strongly the image gets displaced by the waves."),
                    type: "float",
                    min: 0.,
                    max: 100.,
                    increment: 1.,
                    big_increment: 10.,
                    digits: 0
                },
                octaves: {
                    name: _("Wave octaves"),
                    description: _("Detail level of the wave shape. Higher adds more detail at the cost of performance."),
                    type: "integer",
                    min: 0,
                    max: 6,
                    increment: 1,
                },
                vapor_octaves: {
                    name: _("Vapor octaves"),
                    description: _("Detail level of the misty texture. Higher adds more detail at the cost of performance."),
                    type: "integer",
                    min: 0,
                    max: 6,
                    increment: 1,
                },
                vapor_speed: {
                    name: _("Vapor speed"),
                    description: _("How quickly the misty vapor texture drifts over time."),
                    type: "float",
                    min: 0.,
                    max: 5.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                grain: {
                    name: _("Texture grain"),
                    description: _("Adds a fine sandblasted texture to the image."),
                    type: "float",
                    min: 0.,
                    max: 100.,
                    increment: 1.,
                    big_increment: 10.,
                    digits: 0
                },
                saturation: {
                    name: _("Saturation"),
                    description: _("The saturation of the effect."),
                    type: "float",
                    min: 0.,
                    max: 2.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                brightness: {
                    name: _("Brightness"),
                    description: _("The brightness of the effect."),
                    type: "float",
                    min: 0.,
                    max: 2.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                zoom: {
                    name: _("Zoom"),
                    description: _("Magnifies the backdrop toward the surface's center."),
                    type: "float",
                    min: 0.5,
                    max: 2.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                dispersion: {
                    name: _("Dispersion"),
                    description: _("Chromatic aberration strength for a glitchy feel."),
                    type: "float",
                    min: 0.,
                    max: 100.,
                    increment: 1.,
                    big_increment: 10.,
                    digits: 0
                },
                flow_animation_enabled: {
                    name: _("Enable flow animation"),
                    description: _("Whether the wave noise continuously flows over time."),
                    type: "boolean"
                },
                flow_speed_factor: {
                    name: _("Flow animation speed"),
                    description: _("The base speed at which the wave pattern flows."),
                    type: "float",
                    min: 0.,
                    max: 5.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                resize_duration: {
                    name: _("Resize ease duration"),
                    description: _("How long the effect takes to adjust when a window changes size (milliseconds)."),
                    type: "integer",
                    min: 0,
                    max: 10000,
                    increment: 1
                }
            }
        },
    };
}
