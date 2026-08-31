import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

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

const LuminosityEffectClass = utils.IS_IN_PREFERENCES ? null : class LuminosityEffect extends Clutter.ShaderEffect {

        constructor(params) {
            super();

            utils.initialize_shader_effect(this, SHADER_SOURCE);


            utils.setup_params(this, params);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get brightness_shift() {
            return this._brightness_shift;
        }

        set brightness_shift(value) {
            const brightnessShift = utils.clamp(
                value, -1, 1, DEFAULT_PARAMS.brightness_shift
            );
            if (this._brightness_shift !== brightnessShift) {
                this._brightness_shift = brightnessShift;

                uniforms.set_uniform(this, 'brightness_shift', parseFloat(this._brightness_shift - 1e-6));
            }
        }


        get brightness_multiplicator() {
            return this._brightness_multiplicator;
        }

        set brightness_multiplicator(value) {
            const brightnessMultiplicator = utils.clamp(
                value, 0, 2, DEFAULT_PARAMS.brightness_multiplicator
            );
            if (this._brightness_multiplicator !== brightnessMultiplicator) {
                this._brightness_multiplicator = brightnessMultiplicator;

                let brightness_mul = 600.;
                if (brightnessMultiplicator < 1.995)
                    brightness_mul = 3. * (1. / (1. - (brightnessMultiplicator / 2.) ** 2) - 1.);
                uniforms.set_uniform(this, 'brightness_multiplicator', parseFloat(brightness_mul - 1e-6));
            }
        }

        get contrast() {
            return this._contrast;
        }

        set contrast(value) {
            const contrast = utils.clamp(value, 0, 2, DEFAULT_PARAMS.contrast);
            if (this._contrast !== contrast) {
                this._contrast = contrast;

                uniforms.set_uniform(this, 'contrast', parseFloat(this._contrast - 1e-6));
            }
        }

        get contrast_center() {
            return this._contrast_center;
        }

        set contrast_center(value) {
            const contrastCenter = utils.clamp(
                value, 0, 1, DEFAULT_PARAMS.contrast_center
            );
            if (this._contrast_center !== contrastCenter) {
                this._contrast_center = contrastCenter;

                uniforms.set_uniform(this, 'contrast_center', parseFloat(this._contrast_center - 1e-6));
            }
        }

        get saturation_multiplicator() {
            return this._saturation_multiplicator;
        }

        set saturation_multiplicator(value) {
            const saturationMultiplicator = utils.clamp(
                value, 0, 2, DEFAULT_PARAMS.saturation_multiplicator
            );
            if (this._saturation_multiplicator !== saturationMultiplicator) {
                this._saturation_multiplicator = saturationMultiplicator;

                let saturation_mul = 600.;
                if (saturationMultiplicator < 1.995)
                    saturation_mul = 3. * (1. / (1. - (saturationMultiplicator / 2.) ** 2) - 1.);
                uniforms.set_uniform(this, 'saturation_multiplicator', parseFloat(saturation_mul - 1e-6));
            }
        }

        get opacity_factor() {
            return this._opacity_factor;
        }

        set opacity_factor(value) {
            const opacityFactor = utils.clamp(value, 0, 1, DEFAULT_PARAMS.opacity_factor);
            if (this._opacity_factor !== opacityFactor) {
                this._opacity_factor = opacityFactor;

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
    : utils.register_shader_effect(LUMINOSITY_EFFECT_META, LuminosityEffectClass, SHADER_SOURCE);
