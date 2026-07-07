import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');

const SHADER_FILENAME = 'monte_carlo_blur.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    radius: 2., iterations: 5, brightness: .6,
    width: 0, height: 0, use_base_pixel: true,
    prefer_closer_pixels: true,
};


const MONTE_CARLO_BLUR_EFFECT_META = {
        GTypeName: "MonteCarloBlurEffect",
        Properties: {
            'radius': GObject.ParamSpec.double(
                `radius`,
                `Radius`,
                `Blur radius`,
                GObject.ParamFlags.READWRITE,
                0.0, 2000.0,
                2.0,
            ),
            'iterations': GObject.ParamSpec.int(
                `iterations`,
                `Iterations`,
                `Blur iterations`,
                GObject.ParamFlags.READWRITE,
                0, 64,
                5,
            ),
            'brightness': GObject.ParamSpec.double(
                `brightness`,
                `Brightness`,
                `Blur brightness`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.6,
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
            ),
            'use_base_pixel': GObject.ParamSpec.boolean(
                `use_base_pixel`,
                `Use base pixel`,
                `Use base pixel`,
                GObject.ParamFlags.READWRITE,
                true,
            ),
            'prefer_closer_pixels': GObject.ParamSpec.boolean(
                `prefer_closer_pixels`,
                `Prefer closer pixels`,
                `Prefer closer pixels`,
                GObject.ParamFlags.READWRITE,
                true,
            ),
        }
};

const SHADER_BASE = utils.IS_IN_PREFERENCES
    ? null
    : utils.get_shader_effect_base(Clutter, Cogl, "MonteCarloBlurEffect", SHADER_SOURCE);

const MonteCarloBlurEffectClass = utils.IS_IN_PREFERENCES ? null : class MonteCarloBlurEffect extends SHADER_BASE {

        constructor(params) {
            super(utils.shader_effect_super_args(SHADER_SOURCE, Clutter));

            utils.initialize_shader_effect(this, SHADER_SOURCE, Clutter);


            utils.setup_params(this, params);

            const theme_context = St.ThemeContext.get_for_stage(global.stage);
            theme_context.connectObject(
                'notify::scale-factor',
                _ => uniforms.set_uniform(this, 'radius',
                    parseFloat(this._radius * theme_context.scale_factor - 1e-6)
                ),
                this
            );
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        // Declared here (not inherited) so GJS wires up this optional vfunc.
        vfunc_get_static_snippet() {
            return utils.get_or_create_shader_snippet("MonteCarloBlurEffect", Cogl, SHADER_SOURCE);
        }

        get radius() {
            return this._radius;
        }

        set radius(value) {
            if (this._radius !== value) {
                this._radius = value;

                const scale_factor = St.ThemeContext.get_for_stage(global.stage).scale_factor;

                uniforms.set_uniform(this, 'radius', parseFloat(this._radius * scale_factor - 1e-6));
                this.set_enabled(this.radius > 0. && this.iterations > 0);
            }
        }

        get iterations() {
            return this._iterations;
        }

        set iterations(value) {
            if (this._iterations !== value) {
                this._iterations = value;

                uniforms.set_uniform(this, 'iterations', this._iterations);
                this.set_enabled(this.radius > 0. && this.iterations > 0);
            }
        }

        get brightness() {
            return this._brightness;
        }

        set brightness(value) {
            if (this._brightness !== value) {
                this._brightness = value;

                uniforms.set_uniform(this, 'brightness', parseFloat(this._brightness - 1e-6));
            }
        }

        get width() {
            return this._width;
        }

        set width(value) {
            const v = Math.max(1, value || 1);
            if (this._width !== v) {
                this._width = v;

                uniforms.set_uniform(this, 'width', parseFloat(this._width + 3.0 - 1e-6));
            }
        }

        get height() {
            return this._height;
        }

        set height(value) {
            const v = Math.max(1, value || 1);
            if (this._height !== v) {
                this._height = v;

                uniforms.set_uniform(this, 'height', parseFloat(this._height + 3.0 - 1e-6));
            }
        }

        get use_base_pixel() {
            return this._use_base_pixel;
        }

        set use_base_pixel(value) {
            if (this._use_base_pixel !== value) {
                this._use_base_pixel = value;

                uniforms.set_uniform(this, 'use_base_pixel', this._use_base_pixel ? 1 : 0);
            }
        }

        get prefer_closer_pixels() {
            return this._prefer_closer_pixels;
        }

        set prefer_closer_pixels(value) {
            if (this._prefer_closer_pixels !== value) {
                this._prefer_closer_pixels = value;

                uniforms.set_uniform(this, 'prefer_closer_pixels', this._prefer_closer_pixels ? 1 : 0);
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
            super.vfunc_paint_target(paint_node, paint_context);
        }
};

export const MonteCarloBlurEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(MONTE_CARLO_BLUR_EFFECT_META, MonteCarloBlurEffectClass, Cogl, SHADER_SOURCE, Clutter);
