import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');

const SHADER_FILENAME = 'rgb_to_hsl.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    opacity_factor: 1
};


const RGB_TO_HSL_EFFECT_META = {
        GTypeName: "RgbToHslEffect",
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
};

const SHADER_BASE = utils.IS_IN_PREFERENCES
    ? null
    : utils.get_shader_effect_base(Clutter, Cogl, "RgbToHslEffect", SHADER_SOURCE);

const RgbToHslEffectClass = utils.IS_IN_PREFERENCES ? null : class RgbToHslEffect extends SHADER_BASE {

        constructor(params) {
            super(utils.shader_effect_super_args(SHADER_SOURCE, Clutter));

            utils.initialize_shader_effect(this, SHADER_SOURCE, Clutter);


            utils.setup_params(this, params);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        // Declared here (not inherited) so GJS wires up this optional vfunc.
        vfunc_get_static_snippet() {
            return utils.get_or_create_shader_snippet("RgbToHslEffect", Cogl, SHADER_SOURCE);
        }

        get opacity_factor() {
            return this._opacity_factor;
        }

        set opacity_factor(value) {
            if (this._opacity_factor !== value) {
                this._opacity_factor = value;

                uniforms.set_uniform(this, 'opacity_factor', parseFloat(this._opacity_factor));
            }
        }

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);
            super.vfunc_paint_target(paint_node, paint_context);
        }
};

export const RgbToHslEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(RGB_TO_HSL_EFFECT_META, RgbToHslEffectClass, Cogl, SHADER_SOURCE, Clutter);
