import { RefractionEffect } from './refraction.js';

export function get_refraction_effects(_) {
    return {
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
                    max: 500.,
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
                    description: _("Depth used by the refraction edge profile."),
                    type: "float",
                    min: 0.25,
                    max: 20.,
                    increment: 0.05,
                    big_increment: 0.5,
                    digits: 2
                },
                refraction_style: {
                    name: _("Refraction style"),
                    description: _("Shape of the bend near the edge. Low values bend softly, higher values bend more sharply right at the edge."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.05,
                    big_increment: 0.25,
                    digits: 2
                },
                gloss: {
                    name: _("Fresnel glare"),
                    description: _("Strength of the directional fresnel glare from the glass edge."),
                    type: "float",
                    min: 0.,
                    max: 1.,
                    increment: 0.01,
                    big_increment: 0.1,
                    digits: 2
                },
                fresnel_angle: {
                    name: _("Fresnel glare angle"),
                    description: _("Light direction of the fresnel glare, in degrees (0 is from above, positive rotates clockwise)."),
                    type: "float",
                    min: -180.,
                    max: 180.,
                    increment: 5.,
                    big_increment: 45.,
                    digits: 0
                },
                fresnel_width: {
                    name: _("Fresnel glare width"),
                    description: _("Thickness multiplier of the fresnel glare ring along the glass edge."),
                    type: "float",
                    min: 0.5,
                    max: 6.,
                    increment: 0.1,
                    big_increment: 0.5,
                    digits: 2
                },
                specular_strength: {
                    name: _("Specular glare strength"),
                    description: _("Strength of the specular glare showing the light direction (0 disables it)."),
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
    };
}
