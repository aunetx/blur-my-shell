import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const SHADER_FILENAME = 'hsl_to_rgb.glsl';
const DEFAULT_PARAMS = {
    opacity_factor: 1
};


export const HslToRgbEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "HslToRgbEffect",
        Properties: {
            'opacity_factor': GObject.ParamSpec.double(
                `opacity_factor`,
                `Opacity factor`,
                `Opacity factor`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                1.0,
            ),
        }
    }, class HslToRgbEffect extends Clutter.ShaderEffect {
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

        get opacity_factor() {
            return this._opacity_factor;
        }

        set opacity_factor(value) {
            if (this._opacity_factor !== value) {
                this._opacity_factor = value;

                this.set_uniform_value('opacity_factor', parseFloat(this._opacity_factor));
            }
        }
    });
