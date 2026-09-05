import GObject from 'gi://GObject';

export const MAX_BLUR_RADIUS = 48;

export const DEFAULT_PARAMS = {
    strength: 1,
    blur_radius: 10,
    edge_size: 22,
    falloff: 2.4,
    corner_radius: 0,
    rim_width: 4.8,
    rgb_fringing: 0.1,
    gloss: 1,
    webcam_gloss: false,
    webcam_device: '',
    tint: 0.2,
    tint_color: [1, 1, 1, 1],
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
            1, 200, DEFAULT_PARAMS.edge_size
        ),
        blur_radius: doubleProperty(
            'blur_radius', 'Blur Radius', 'Internal glass blur radius',
            0, MAX_BLUR_RADIUS, DEFAULT_PARAMS.blur_radius
        ),
        falloff: doubleProperty(
            'falloff', 'Falloff', 'Refraction falloff',
            0.25, 8, DEFAULT_PARAMS.falloff
        ),
        corner_radius: doubleProperty(
            'corner_radius', 'Corner Radius', 'Refraction corner radius',
            0, 200, DEFAULT_PARAMS.corner_radius
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
        webcam_gloss: GObject.ParamSpec.boolean(
            'webcam_gloss',
            'Deprecated Webcam Gloss',
            'Deprecated compatibility property',
            GObject.ParamFlags.READWRITE,
            DEFAULT_PARAMS.webcam_gloss
        ),
        webcam_device: GObject.ParamSpec.string(
            'webcam_device',
            'Deprecated Webcam Device',
            'Deprecated compatibility property',
            GObject.ParamFlags.READWRITE,
            DEFAULT_PARAMS.webcam_device
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
