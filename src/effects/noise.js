import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');

const SHADER_FILENAME = 'noise.glsl';
const DEFAULT_PARAMS = {
    noise: 0.4, lightness: 0.4, opacity_factor: 1
};


export const NoiseEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    (() => {
        const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
        const SHADER_SNIPPET = utils.create_shader_snippet_for_source(Clutter, Cogl, SHADER_SOURCE);
        const gtype_spec = {
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

        if (utils.uses_shader_snippets(Clutter)) {
            class NoiseEffect extends Clutter.ShaderEffect {
                vfunc_get_static_snippet() {
                    return SHADER_SNIPPET;
                }


                    constructor(params) {
                        super();

                        utils.setup_params(this, params);
                    }

                    static get default_params() {
                        return DEFAULT_PARAMS;
                    }

                    get noise() {
                        return this._noise;
                    }

                    set noise(value) {
                        if (this._noise !== value) {
                            this._noise = value;

                            uniforms.set_uniform(this, 'noise', parseFloat(this._noise - 1e-6));
                            this.set_enabled(this.noise > 0. && this.lightness != 1);
                        }
                    }

                    get lightness() {
                        return this._lightness;
                    }

                    set lightness(value) {
                        if (this._lightness !== value) {
                            this._lightness = value;

                            uniforms.set_uniform(this, 'lightness', parseFloat(this._lightness - 1e-6));
                            this.set_enabled(this.noise > 0. && this.lightness != 1);
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

            }
            return GObject.registerClass(gtype_spec, NoiseEffect);
        }

        class NoiseEffect extends Clutter.ShaderEffect {
            vfunc_get_static_shader_source() {
                return SHADER_SOURCE;
            }


                    constructor(params) {
                        super();

                        utils.setup_params(this, params);
                    }

                    static get default_params() {
                        return DEFAULT_PARAMS;
                    }

                    get noise() {
                        return this._noise;
                    }

                    set noise(value) {
                        if (this._noise !== value) {
                            this._noise = value;

                            uniforms.set_uniform(this, 'noise', parseFloat(this._noise - 1e-6));
                            this.set_enabled(this.noise > 0. && this.lightness != 1);
                        }
                    }

                    get lightness() {
                        return this._lightness;
                    }

                    set lightness(value) {
                        if (this._lightness !== value) {
                            this._lightness = value;

                            uniforms.set_uniform(this, 'lightness', parseFloat(this._lightness - 1e-6));
                            this.set_enabled(this.noise > 0. && this.lightness != 1);
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

        }
        return GObject.registerClass(gtype_spec, NoiseEffect);
    })();
