import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const DEFAULT_PARAMS = {
    factor: 8, downsampling_mode: 0, opacity_factor: 1
};


const PixelizeEffectClass = utils.IS_IN_PREFERENCES ? null : class PixelizeEffect extends Clutter.Effect {
    constructor(params) {
        super();

        utils.setup_params(this, params);
    }

    static get default_params() {
        return DEFAULT_PARAMS;
    }

    get factor() {
        return this._factor;
    }

    set factor(value) {
        this._factor = utils.clamp_integer(value, 1, 50, DEFAULT_PARAMS.factor);
    }

    get downsampling_mode() {
        return this._downsampling_mode;
    }

    set downsampling_mode(value) {
        this._downsampling_mode = utils.clamp_integer(
            value, 0, 2, DEFAULT_PARAMS.downsampling_mode
        );
    }

    get opacity_factor() {
        return this._opacity_factor;
    }

    set opacity_factor(value) {
        this._opacity_factor = utils.clamp(value, 0, 1, DEFAULT_PARAMS.opacity_factor);
    }
};

export const PixelizeEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : GObject.registerClass({
        GTypeName: "PixelizeEffect",
        Properties: {
            'factor': GObject.ParamSpec.int(
                `factor`,
                `Factor`,
                `Factor`,
                GObject.ParamFlags.READWRITE,
                1, 50,
                8,
            ),
            'downsampling_mode': GObject.ParamSpec.int(
                `downsampling_mode`,
                `Downsampling mode`,
                `Downsampling mode`,
                GObject.ParamFlags.READWRITE,
                0, 2,
                0,
            ),
            'opacity_factor': GObject.ParamSpec.double(
                `opacity_factor`,
                `Opacity factor`,
                `Opacity factor`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                1.0,
            )
        }
    }, PixelizeEffectClass);
