import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';

const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');

const SHADER_FILENAME = 'color.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    color: [0.0, 0.0, 0.0, 0.0],
    blend_mode: 0,
    opacity_factor: 1
};


const COLOR_EFFECT_META = {
        GTypeName: "ColorEffect",
        Properties: {
            'red': GObject.ParamSpec.double(
                `red`,
                `Red`,
                `Red value in shader`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.0,
            ),
            'green': GObject.ParamSpec.double(
                `green`,
                `Green`,
                `Green value in shader`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.0,
            ),
            'blue': GObject.ParamSpec.double(
                `blue`,
                `Blue`,
                `Blue value in shader`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.0,
            ),
            'blend': GObject.ParamSpec.double(
                `blend`,
                `Blend`,
                `Amount of blending between the colors`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.0,
            ),
            'blend_mode': GObject.ParamSpec.int(
                `blend_mode`,
                `Blend mode`,
                `Blend mode`,
                GObject.ParamFlags.READWRITE,
                0, 17,
                0,
            ),
            'opacity_factor': GObject.ParamSpec.double(
                `opacity_factor`,
                `Opacity factor`,
                `Opacity factor`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                1.0,
            )
        }
};

const SHADER_BASE = utils.IS_IN_PREFERENCES
    ? null
    : utils.get_shader_effect_base(Clutter, Cogl, "ColorEffect", SHADER_SOURCE);

const ColorEffectClass = utils.IS_IN_PREFERENCES ? null : class ColorEffect extends SHADER_BASE {

        constructor(params) {
            super(utils.shader_effect_super_args(SHADER_SOURCE, Clutter));

            utils.initialize_shader_effect(this, SHADER_SOURCE, Clutter);


            this._red = null;
            this._green = null;
            this._blue = null;
            this._blend = null;
            this._blend_mode = null;
            this._opacity_factor = null;

            // set params; utils.setup_params doesn't work here with color
            this.color = 'color' in params ? params.color : this.constructor.default_params.color;
            this.blend_mode = 'blend_mode' in params ?  params.blend_mode : this.constructor.default_params.blend_mode;
            this.opacity_factor = 'opacity_factor' in params ? params.opacity_factor : this.constructor.default_params.opacity_factor;
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        // Declared here (not inherited) so GJS wires up this optional vfunc.
        vfunc_get_static_snippet() {
            return utils.get_or_create_shader_snippet("ColorEffect", Cogl, SHADER_SOURCE);
        }

        get red() {
            return this._red;
        }

        set red(value) {
            if (this._red !== value) {
                this._red = value;

                uniforms.set_uniform(this, 'red', parseFloat(this._red - 1e-6));
            }
        }

        get green() {
            return this._green;
        }

        set green(value) {
            if (this._green !== value) {
                this._green = value;

                uniforms.set_uniform(this, 'green', parseFloat(this._green - 1e-6));
            }
        }

        get blue() {
            return this._blue;
        }

        set blue(value) {
            if (this._blue !== value) {
                this._blue = value;

                uniforms.set_uniform(this, 'blue', parseFloat(this._blue - 1e-6));
            }
        }

        get blend() {
            return this._blend;
        }

        set blend(value) {
            if (this._blend !== value) {
                this._blend = value;

                uniforms.set_uniform(this, 'blend', parseFloat(this._blend - 1e-6));
                this.set_enabled(this.blend > 0);
            }
        }

        get blend_mode() {
            return this._blend_mode;
        }

        set blend_mode(value) {
            if (this._blend_mode !== value) {
                this._blend_mode = value;

                uniforms.set_uniform(this, 'mode', this._blend_mode);
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

        set color(rgba) {
            let [r, g, b, a] = rgba;
            this.red = r;
            this.green = g;
            this.blue = b;
            this.blend = a;
        }

        get color() {
            return [this.red, this.green, this.blue, this.blend];
        }

        /// False set function, only cares about the color. Too hard to change.
        set(params) {
            this.color = params.color;
            this.blend_mode = params.blend_mode;
            if ('opacity_factor' in params)
                this.opacity_factor = params.opacity_factor;
        }

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);
            super.vfunc_paint_target(paint_node, paint_context);
        }
};

export const ColorEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(COLOR_EFFECT_META, ColorEffectClass, Cogl, SHADER_SOURCE, Clutter);
