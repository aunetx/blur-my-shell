import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
const Shell = await utils.import_in_shell_only('gi://Shell');

const SHADER_FILENAME = 'noise.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    noise: 0.4, lightness: 0.4, opacity_factor: 1
};


const NOISE_EFFECT_META = {
        GTypeName: "NoiseEffect",
        Properties: {
            'noise': GObject.ParamSpec.double(
                `noise`,
                `Noise`,
                `Amount of noise integrated with the image`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.4,
            ),
            'lightness': GObject.ParamSpec.double(
                `lightness`,
                `Lightness`,
                `Lightness of the grey used for the noise`,
                GObject.ParamFlags.READWRITE,
                0.0, 2.0,
                0.4,
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

const NoiseEffectClass = utils.IS_IN_PREFERENCES ? null : class NoiseEffect extends utils.ShaderEffect {

        constructor(params) {
            super();

            utils.initialize_shader_effect(this, SHADER_SOURCE);


            utils.setup_params(this, params);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get noise() {
            return this._noise;
        }

        set noise(value) {
            const noise = utils.clamp(value, 0, 1, DEFAULT_PARAMS.noise);
            if (this._noise !== noise) {
                this._noise = noise;

                uniforms.set_uniform(this, 'noise', parseFloat(this._noise - 1e-6));
                this.set_enabled(this.noise > 0. && this.lightness != 1);
            }
        }

        get lightness() {
            return this._lightness;
        }

        set lightness(value) {
            const lightness = utils.clamp(value, 0, 2, DEFAULT_PARAMS.lightness);
            if (this._lightness !== lightness) {
                this._lightness = lightness;

                uniforms.set_uniform(this, 'lightness', parseFloat(this._lightness - 1e-6));
                this.set_enabled(this.noise > 0. && this.lightness != 1);
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

export const NoiseEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(NOISE_EFFECT_META, NoiseEffectClass);
