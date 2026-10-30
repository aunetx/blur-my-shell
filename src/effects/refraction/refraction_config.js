import GObject from 'gi://GObject';

export const MAX_BLUR_RADIUS = 48;

export const DEFAULT_PARAMS = {
    strength: 1,
    blur_radius: 3,
    edge_size: 32,
    falloff: 1.25,
    refraction_style: 0,
    corner_radius: 0,
    corners_top: true,
    corners_bottom: true,
    rim_width: 4.8,
    rgb_fringing: 0.13,
    gloss: 1,
    fresnel_angle: 0,
    fresnel_width: 1.50,
    specular_strength: 0.10,
    edge_shadow: 0.7,
    edge_glow: 0.5,
    tint: 0.1,
    tint_color: [0.71373, 0.71373, 0.71373, 1],
    backdrop_zoom: 1,
    shadow: 0.3,
    opacity_factor: 1,
    texture_repeat: 0,
    width: 0,
    height: 0,
    clip: [0, 0, -1, -1],
};

function doubleProperty(name, nick, description, minimum, maximum, defaultValue) {
    return GObject.ParamSpec.double(
        name,
        nick,
        description,
        GObject.ParamFlags.READWRITE,
        minimum,
        maximum,
        defaultValue
    );
}

export const REFRACTION_EFFECT_META = {
    GTypeName: 'RefractionEffect',
    Properties: {
        strength: doubleProperty(
            'strength', 'Strength', 'Refraction strength',
            0, 1, DEFAULT_PARAMS.strength
        ),
        edge_size: doubleProperty(
            'edge_size', 'Edge Size', 'Refraction edge size',
            1, 500, DEFAULT_PARAMS.edge_size
        ),
        blur_radius: doubleProperty(
            'blur_radius', 'Blur Radius', 'Internal glass blur radius',
            0, MAX_BLUR_RADIUS, DEFAULT_PARAMS.blur_radius
        ),
        falloff: doubleProperty(
            'falloff', 'Falloff', 'Refraction falloff',
            0.25, 20, DEFAULT_PARAMS.falloff
        ),
        refraction_style: doubleProperty(
            'refraction_style', 'Refraction Style', '0 is vanilla 0.1.1b profile; higher blends toward the old Snell-style S-curve',
            0, 1, DEFAULT_PARAMS.refraction_style
        ),
        corner_radius: doubleProperty(
            'corner_radius', 'Corner Radius', 'Refraction corner radius',
            0, 200, DEFAULT_PARAMS.corner_radius
        ),
        corners_top: GObject.ParamSpec.boolean(
            'corners_top', 'Round top corners', 'Round top corners',
            GObject.ParamFlags.READWRITE, DEFAULT_PARAMS.corners_top
        ),
        corners_bottom: GObject.ParamSpec.boolean(
            'corners_bottom', 'Round bottom corners', 'Round bottom corners',
            GObject.ParamFlags.READWRITE, DEFAULT_PARAMS.corners_bottom
        ),
        rim_width: doubleProperty(
            'rim_width', 'Rim Width', 'Refraction rim width',
            1, 6.5, DEFAULT_PARAMS.rim_width
        ),
        rgb_fringing: doubleProperty(
            'rgb_fringing', 'RGB Fringing', 'Chromatic offset strength',
            0, 1, DEFAULT_PARAMS.rgb_fringing
        ),
        gloss: doubleProperty(
            'gloss', 'Gloss', 'Specular highlight strength',
            0, 1, DEFAULT_PARAMS.gloss
        ),
        fresnel_angle: doubleProperty(
            'fresnel_angle', 'Fresnel Angle', 'Axis of the fresnel glare edge pair, in degrees',
            -180, 180, DEFAULT_PARAMS.fresnel_angle
        ),
        fresnel_width: doubleProperty(
            'fresnel_width', 'Fresnel Width', 'Thickness multiplier of the fresnel glare ring',
            0.5, 6, DEFAULT_PARAMS.fresnel_width
        ),
        specular_strength: doubleProperty(
            'specular_strength', 'Specular Glare Strength', 'Strength of the specular glare',
            0, 1, DEFAULT_PARAMS.specular_strength
        ),
        edge_shadow: doubleProperty(
            'edge_shadow', 'Edge Border', 'Strength of the thin dark line along the glass edge',
            0, 1, DEFAULT_PARAMS.edge_shadow
        ),
        edge_glow: doubleProperty(
            'edge_glow', 'Edge Glow', 'Strength of the colored light picked up by the glass edge',
            0, 1, DEFAULT_PARAMS.edge_glow
        ),
        tint: doubleProperty(
            'tint', 'Tint', 'Glass tint strength', 0, 1, DEFAULT_PARAMS.tint
        ),
        tint_red: doubleProperty(
            'tint_red', 'Tint Red', 'Glass tint color red',
            0, 1, DEFAULT_PARAMS.tint_color[0]
        ),
        tint_green: doubleProperty(
            'tint_green', 'Tint Green', 'Glass tint color green',
            0, 1, DEFAULT_PARAMS.tint_color[1]
        ),
        tint_blue: doubleProperty(
            'tint_blue', 'Tint Blue', 'Glass tint color blue',
            0, 1, DEFAULT_PARAMS.tint_color[2]
        ),
        tint_alpha: doubleProperty(
            'tint_alpha', 'Tint Alpha', 'Glass tint color alpha',
            0, 1, DEFAULT_PARAMS.tint_color[3]
        ),
        backdrop_zoom: doubleProperty(
            'backdrop_zoom', 'Backdrop Zoom', 'Zoom level of the refracted backdrop',
            0.1, 4, DEFAULT_PARAMS.backdrop_zoom
        ),
        shadow: doubleProperty(
            'shadow', 'Shadow', 'Inner shadow strength',
            0, 1, DEFAULT_PARAMS.shadow
        ),
        opacity_factor: doubleProperty(
            'opacity_factor', 'Opacity Factor', 'Refraction blend strength',
            0, 1, DEFAULT_PARAMS.opacity_factor
        ),
        texture_repeat: GObject.ParamSpec.int(
            'texture_repeat',
            'Texture Repeat',
            'Texture repeat behavior',
            GObject.ParamFlags.READWRITE,
            0,
            1,
            DEFAULT_PARAMS.texture_repeat
        ),
        width: doubleProperty(
            'width', 'Width', 'Width',
            0, Number.MAX_SAFE_INTEGER, DEFAULT_PARAMS.width
        ),
        height: doubleProperty(
            'height', 'Height', 'Height',
            0, Number.MAX_SAFE_INTEGER, DEFAULT_PARAMS.height
        ),
    },
};
