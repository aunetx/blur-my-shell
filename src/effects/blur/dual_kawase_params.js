import GObject from 'gi://GObject';

export const DEFAULT_PARAMS = {
    unscaled_radius: 30,
    brightness: 0.6,
    opacity_factor: 1,
    corner_radius: 0,
    corners_top: true,
    corners_bottom: true,
    straight_corners: false,
};

export const PROPERTIES = {
    'unscaled-radius': GObject.ParamSpec.double(
        'unscaled-radius', null, null,
        GObject.ParamFlags.READWRITE,
        0, 200, DEFAULT_PARAMS.unscaled_radius
    ),
    'radius': GObject.ParamSpec.double(
        'radius', null, null,
        GObject.ParamFlags.READWRITE,
        0, 200, DEFAULT_PARAMS.unscaled_radius
    ),
    'brightness': GObject.ParamSpec.double(
        'brightness', null, null,
        GObject.ParamFlags.READWRITE,
        0, 1, DEFAULT_PARAMS.brightness
    ),
    'opacity-factor': GObject.ParamSpec.double(
        'opacity-factor', null, null,
        GObject.ParamFlags.READWRITE,
        0, 1, DEFAULT_PARAMS.opacity_factor
    ),
    'corner-radius': GObject.ParamSpec.double(
        'corner-radius', null, null,
        GObject.ParamFlags.READWRITE,
        0, Number.MAX_SAFE_INTEGER, DEFAULT_PARAMS.corner_radius
    ),
    'corners-top': GObject.ParamSpec.boolean(
        'corners-top', null, null,
        GObject.ParamFlags.READWRITE,
        DEFAULT_PARAMS.corners_top
    ),
    'corners-bottom': GObject.ParamSpec.boolean(
        'corners-bottom', null, null,
        GObject.ParamFlags.READWRITE,
        DEFAULT_PARAMS.corners_bottom
    ),
    'straight-corners': GObject.ParamSpec.boolean(
        'straight-corners', null, null,
        GObject.ParamFlags.READWRITE,
        DEFAULT_PARAMS.straight_corners
    ),
};
