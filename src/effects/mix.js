import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const SHADER_FILENAME = 'color.glsl';
const DEFAULT_PARAMS = {
    color: [0.0, 0.0, 0.0]
};


export const MixEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "MixEffect",
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
            'opacity': GObject.ParamSpec.double(
                `opacity`,
                `Opacity`,
                `Opacity`,
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
        }
        // Normal (0), Multiply (1), Screen (2), Overlay (3), Darken (4), Lighten (5), Color dodge (6), Color burn (7), Hard light (8),
        // Soft light (9), Difference (10), Exclusion (11), Hue (12), Saturation (13), Color (14), Luminosity (15), Plus darker (16),
        // Plus lighter (17)
    }, class MixEffect extends Clutter.ShaderEffect {
        constructor(params) {
            super(params);

            this._red = null;
            this._green = null;
            this._blue = null;
            this._opacity = null;

            // set shader source
            this._source = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
            if (this._source)
                this.set_shader_source(this._source);

            utils.setup_params(this, params);
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

        get opacity() {
            return this._opacity;
        }

        set opacity(value) {
            if (this._opacity !== value) {
                this._opacity = value;

                this.set_uniform_value('blend', parseFloat(this._opacity - 1e-6));
                this.set_enabled(this.opacity > 0);
            }
        }

        set color(rgb) {
            let [r, g, b] = rgb;
            this.red = r;
            this.green = g;
            this.blue = b;
        }

        get color() {
            return [this.red, this.green, this.blue];
        }

        /// False set function, only cares about the color. Too hard to change.
        set(params) {
            this.color = params.color;
        }
    });