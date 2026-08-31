import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');

const SHADER_FILENAME = 'derivative.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    operation: 0, opacity_factor: 1, width: 0, height: 0
};


const DERIVATIVE_EFFECT_META = {
        GTypeName: "DerivativeEffect",
        Properties: {
            'operation': GObject.ParamSpec.int(
                `operation`,
                `Operation`,
                `Operation`,
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
            ),
            'width': GObject.ParamSpec.double(
                `width`,
                `Width`,
                `Width`,
                GObject.ParamFlags.READWRITE,
                0.0, Number.MAX_SAFE_INTEGER,
                0.0,
            ),
            'height': GObject.ParamSpec.double(
                `height`,
                `Height`,
                `Height`,
                GObject.ParamFlags.READWRITE,
                0.0, Number.MAX_SAFE_INTEGER,
                0.0,
            )
        }
};

const DerivativeEffectClass = utils.IS_IN_PREFERENCES ? null : class DerivativeEffect extends Clutter.ShaderEffect {

        constructor(params) {
            super();

            utils.initialize_shader_effect(this, SHADER_SOURCE);

            this._filtered_pipeline = null;
            utils.setup_params(this, params);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get operation() {
            return this._operation;
        }

        set operation(value) {
            const operation = utils.clamp_integer(value, 0, 2, DEFAULT_PARAMS.operation);
            if (this._operation !== operation) {
                this._operation = operation;

                uniforms.set_uniform(this, 'operation', this._operation);
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

        get width() {
            return this._width;
        }

        set width(value) {
            const v = utils.clamp(value, 1, Number.MAX_SAFE_INTEGER, 1);
            if (this._width !== v) {
                this._width = v;

                uniforms.set_uniform(this, 'width', parseFloat(this._width - 1e-6));
            }
        }

        get height() {
            return this._height;
        }

        set height(value) {
            const v = utils.clamp(value, 1, Number.MAX_SAFE_INTEGER, 1);
            if (this._height !== v) {
                this._height = v;

                uniforms.set_uniform(this, 'height', parseFloat(this._height - 1e-6));
            }
        }

        vfunc_set_actor(actor) {
            if (this._actor_connection_size_id) {
                try {
                    this.get_actor()?.disconnect(this._actor_connection_size_id);
                } catch (e) { }
                this._actor_connection_size_id = null;
            }
            if (actor) {
                this.width = actor.width;
                this.height = actor.height;
                this._actor_connection_size_id = actor.connect('notify::size', _ => {
                    this.width = actor.width;
                    this.height = actor.height;
                });
            }
            super.vfunc_set_actor(actor);
        }

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);

            const pipeline = this.get_pipeline();
            if (pipeline && pipeline !== this._filtered_pipeline) {
                try {
                    pipeline.set_layer_filters(
                        0,
                        Cogl.PipelineFilter.NEAREST,
                        Cogl.PipelineFilter.NEAREST
                    );
                    this._filtered_pipeline = pipeline;
                } catch (e) { }
            }

            super.vfunc_paint_target(paint_node, paint_context);
        }
};

export const DerivativeEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(DERIVATIVE_EFFECT_META, DerivativeEffectClass, SHADER_SOURCE);
