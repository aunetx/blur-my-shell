import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');

const SHADER_FILENAME = 'luminosity.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    brightness_shift: 0., brightness_multiplicator: 1., contrast: 1., contrast_center: 0.5, saturation_multiplicator: 1., opacity_factor: 1.
};


const LUMINOSITY_EFFECT_META = {
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
    : utils.get_shader_effect_base(Clutter, Cogl, "LuminosityEffect", SHADER_SOURCE);

const LuminosityEffectClass = utils.IS_IN_PREFERENCES ? null : class LuminosityEffect extends SHADER_BASE {

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
            return utils.get_or_create_shader_snippet("LuminosityEffect", Cogl, SHADER_SOURCE);
        }

        get brightness_shift() {
            return this._brightness;
        }

        set brightness_shift(value) {
            if (this._brightness_shift !== value) {
                this._brightness_shift = value;

                uniforms.set_uniform(this, 'brightness_shift', parseFloat(this._brightness_shift - 1e-6));
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
                uniforms.set_uniform(this, 'brightness_multiplicator', parseFloat(brightness_mul - 1e-6));
            }
        }

        get contrast() {
            return this._contrast;
        }

        set contrast(value) {
            if (this._contrast !== value) {
                this._contrast = value;

                uniforms.set_uniform(this, 'contrast', parseFloat(this._contrast - 1e-6));
            }
        }

        get contrast_center() {
            return this._contrast_center;
        }

        set contrast_center(value) {
            if (this._contrast_center !== value) {
                this._contrast_center = value;

                uniforms.set_uniform(this, 'contrast_center', parseFloat(this._contrast_center - 1e-6));
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
                uniforms.set_uniform(this, 'saturation_multiplicator', parseFloat(saturation_mul - 1e-6));
            }
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

export const LuminosityEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(LUMINOSITY_EFFECT_META, LuminosityEffectClass, Cogl, SHADER_SOURCE, Clutter);
