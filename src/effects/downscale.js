import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');

const SHADER_FILENAME = 'downscale.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    divider: 8, downsampling_mode: 0, opacity_factor: 1, width: 0, height: 0
};


const DOWNSCALE_EFFECT_META = {
        GTypeName: "DownscaleEffect",
        Properties: {
            'divider': GObject.ParamSpec.int(
                `divider`,
                `Divider`,
                `Divider`,
                GObject.ParamFlags.READWRITE,
                0, 64,
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

const SHADER_BASE = utils.IS_IN_PREFERENCES
    ? null
    : utils.get_shader_effect_base(Clutter, Cogl, "DownscaleEffect", SHADER_SOURCE);

const DownscaleEffectClass = utils.IS_IN_PREFERENCES ? null : class DownscaleEffect extends SHADER_BASE {

        constructor(params) {
            super(utils.shader_effect_super_args(SHADER_SOURCE, Clutter));

            utils.initialize_shader_effect(this, SHADER_SOURCE, Clutter);


            utils.setup_params(this, params);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get divider() {
            return this._divider;
        }

        set divider(value) {
            const v = Math.max(1, value || 1);
            if (this._divider !== v) {
                this._divider = v;

                uniforms.set_uniform(this, 'divider', this._divider);
            }
        }

        get downsampling_mode() {
            return this._downsampling_mode;
        }

        set downsampling_mode(value) {
            if (this._downsampling_mode !== value) {
                this._downsampling_mode = value;

                uniforms.set_uniform(this, 'downsampling_mode', this._downsampling_mode);
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

        get width() {
            return this._width;
        }

        set width(value) {
            const v = Math.max(1, value || 1);
            if (this._width !== v) {
                this._width = v;

                uniforms.set_uniform(this, 'width', parseFloat(this._width - 1e-6));
            }
        }

        get height() {
            return this._height;
        }

        set height(value) {
            const v = Math.max(1, value || 1);
            if (this._height !== v) {
                this._height = v;

                uniforms.set_uniform(this, 'height', parseFloat(this._height - 1e-6));
            }
        }

        vfunc_set_actor(actor) {
            if (this._actor_connection_size_id) {
                let old_actor = this.get_actor();
                old_actor?.disconnect(this._actor_connection_size_id);
            }
            if (actor) {
                this.width = actor.width;
                this.height = actor.height;
                this._actor_connection_size_id = actor.connect('notify::size', _ => {
                    this.width = actor.width;
                    this.height = actor.height;
                });
            }
            else
                this._actor_connection_size_id = null;

            super.vfunc_set_actor(actor);
        }

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);

            const pipeline = this.get_pipeline();
            if (pipeline) {
                try {
                    pipeline.set_layer_filters(0, 9728, 9728);
                } catch (e) { }
            }

            super.vfunc_paint_target(paint_node, paint_context);
        }
};

export const DownscaleEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(DOWNSCALE_EFFECT_META, DownscaleEffectClass, Cogl, SHADER_SOURCE, Clutter);
