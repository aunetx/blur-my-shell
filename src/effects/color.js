import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';

const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const SHADER_FILENAME = 'color.glsl';
const DEFAULT_PARAMS = {
    color: [0.0, 0.0, 0.0, 0.0],
    blend_mode: 0
};


export const ColorEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
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
            )
        }
        // Normal (0), Multiply (1), Screen (2), Overlay (3), Darken (4), Lighten (5), Plus darker (6), Plus lighter (7), Color dodge (8),
        // Color burn (9), Hard light (10), Soft light (11), Difference (12), Exclusion (13), Hue (14), Saturation (15), Color (16),
        // Luminosity (17)
    }, class ColorEffect extends Clutter.ShaderEffect {
        constructor(params) {
            // initialize without color as a parameter
            const { color, ...parent_params } = params;
            super(parent_params);

            this._red = null;
            this._green = null;
            this._blue = null;
            this._blend = null;
            this._blend_mode = null;

            // set shader source
            this._source = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
            if (this._source)
                this.set_shader_source(this._source);

            // set params; utils.setup_params doesn't work here with color
            this.color = 'color' in params ? color : this.constructor.default_params.color;
            this.blend_mode = 'blend_mode' in params ?  params.blend_mode : this.constructor.default_params.blend_mode;
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get red() {
            return this._red;
        }

        set red(value) {
            if (this._red !== value) {
                this._red = value;

                this.set_uniform_value('red', parseFloat(this._red - 1e-6));
            }
        }

        get green() {
            return this._green;
        }

        set green(value) {
            if (this._green !== value) {
                this._green = value;

                this.set_uniform_value('green', parseFloat(this._green - 1e-6));
            }
        }

        get blue() {
            return this._blue;
        }

        set blue(value) {
            if (this._blue !== value) {
                this._blue = value;

                this.set_uniform_value('blue', parseFloat(this._blue - 1e-6));
            }
        }

        get blend() {
            return this._blend;
        }

        set blend(value) {
            if (this._blend !== value) {
                this._blend = value;

                this.set_uniform_value('blend', parseFloat(this._blend - 1e-6));
                this.set_enabled(this.blend > 0);
            }
        }

        get blend_mode() {
            return this._blend_mode;
        }

        set blend_mode(value) {
            if (this._blend_mode !== value) {
                this._blend_mode = value;

                this.set_uniform_value('mode', this._blend_mode);
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
        }
    });