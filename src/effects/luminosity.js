import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const SHADER_FILENAME = 'luminosity.glsl';
const DEFAULT_PARAMS = {
    brightness_shift: 0., brightness_multiplicator: 1., contrast: 1., contrast_center: 0.5, saturation_multiplicator: 1.
};


export const LuminosityEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "LuminosityEffect",
        Properties: {
            'brightness_shift': GObject.ParamSpec.double(
                `brightness_shift`,
                `Brightness shift`,
                `Brightness shift value in shader`,
                GObject.ParamFlags.READWRITE,
                -1.0, 1.0,
                0.0,
            ),
            'brightness_multiplicator': GObject.ParamSpec.double(
                `brightness_multiplicator`,
                `Brightness multiplicator`,
                `Brightness multiplicator value in shader`,
                GObject.ParamFlags.READWRITE,
                0.0, 2.0,
                1.0,
            ),
            'contrast': GObject.ParamSpec.double(
                `contrast`,
                `Contrast`,
                `Contrast value in shader`,
                GObject.ParamFlags.READWRITE,
                0.0, 2.0,
                1.0,
            ),
            'contrast_center': GObject.ParamSpec.double(
                `contrast_center`,
                `Contrast center`,
                `Contrast center value in shader`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.5,
            ),
            'saturation_multiplicator': GObject.ParamSpec.double(
                `saturation_multiplicator`,
                `Saturation multiplicator`,
                `Saturation multiplicator value in shader`,
                GObject.ParamFlags.READWRITE,
                0.0, 2.0,
                1.0,
            ),
        }
    }, class LuminosityEffect extends Clutter.ShaderEffect {
        constructor(params) {
            super(params);

            utils.setup_params(this, params);

            // set shader source
            this._source = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
            if (this._source)
                this.set_shader_source(this._source);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get brightness_shift() {
            return this._brightness;
        }

        set brightness_shift(value) {
            if (this._brightness_shift !== value) {
                this._brightness_shift = value;

                this.set_uniform_value('brightness_shift', parseFloat(this._brightness_shift - 1e-6));
            }
        }


        get brightness_multiplicator() {
            return this._brightness_multiplicator;
        }

        set brightness_multiplicator(value) {
            if (this._brightness_multiplicator !== value) {
                this._brightness_multiplicator = value;

                let brightness_mul = 600.;
                if (value < 1.995)
                    brightness_mul = 3. * (1. / (1. - (value / 2.) ** 2) - 1.);
                this.set_uniform_value('brightness_multiplicator', parseFloat(brightness_mul - 1e-6));
            }
        }

        get contrast() {
            return this._contrast;
        }

        set contrast(value) {
            if (this._contrast !== value) {
                this._contrast = value;

                this.set_uniform_value('contrast', parseFloat(this._contrast - 1e-6));
            }
        }

        get contrast_center() {
            return this._contrast_center;
        }

        set contrast_center(value) {
            if (this._contrast_center !== value) {
                this._contrast_center = value;

                this.set_uniform_value('contrast_center', parseFloat(this._contrast_center - 1e-6));
            }
        }

        get saturation_multiplicator() {
            return this._saturation_multiplicator;
        }

        set saturation_multiplicator(value) {
            if (this._saturation_multiplicator !== value) {
                this._saturation_multiplicator = value;

                let saturation_mul = 600.;
                if (value < 1.995)
                    saturation_mul = 3. * (1. / (1. - (value / 2.) ** 2) - 1.);
                this.set_uniform_value('saturation_multiplicator', parseFloat(saturation_mul - 1e-6));
            }
        }
    });