import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const SHADER_FILENAME = 'hsl_to_rgb.glsl';
const DEFAULT_PARAMS = {};


export const HslToRgbEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "HslToRgbEffect",
        Properties: {}
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
    });