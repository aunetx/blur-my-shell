import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const SHADER_FILENAME = 'gaussian_blur.glsl';
const DEFAULT_PARAMS = {
    radius: 30, brightness: .6,
    width: 0, height: 0, direction: 0, chained_effect: null
};


export const GaussianBlurEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "GaussianBlurEffect",
        Properties: {
            'radius': GObject.ParamSpec.double(
                `radius`,
                `Radius`,
                `Blur radius`,
                GObject.ParamFlags.READWRITE,
                0.0, 2000.0,
                30.0,
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
            'direction': GObject.ParamSpec.int(
                `direction`,
                `Direction`,
                `Direction`,
                GObject.ParamFlags.READWRITE,
                0, 1,
                0,
            ),
            'chained_effect': GObject.ParamSpec.object(
                `chained_effect`,
                `Chained Effect`,
                `Chained Effect`,
                GObject.ParamFlags.READWRITE,
                GObject.Object,
            ),
        }
    }, class GaussianBlurEffect extends Clutter.ShaderEffect {
        constructor(params) {
            super(params);

            utils.setup_params(this, params);

            // set shader source
            this._source = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
            if (this._source)
                this.set_shader_source(this._source);

            const theme_context = St.ThemeContext.get_for_stage(global.stage);
            theme_context.connectObject(
                'notify::scale-factor', _ =>
                this.set_uniform_value('sigma',
                    parseFloat(this.radius * theme_context.scale_factor / 2 - 1e-6)
                ),
                this
            );
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get radius() {
            return this._radius;
        }

        set radius(value) {
            if (this._radius !== value) {
                this._radius = value;

                const scale_factor = St.ThemeContext.get_for_stage(global.stage).scale_factor;

                // like Clutter, we use the assumption radius = 2*sigma
                this.set_uniform_value('sigma', parseFloat(this._radius * scale_factor / 2 - 1e-6));
                this.set_enabled(this.radius > 0.);

                if (this.chained_effect)
                    this.chained_effect.radius = value;
            }
        }

        get brightness() {
            return this._brightness;
        }

        set brightness(value) {
            if (this._brightness !== value) {
                this._brightness = value;

                this.set_uniform_value('brightness', parseFloat(this._brightness - 1e-6));

                if (this.chained_effect)
                    this.chained_effect.brightness = value;
            }
        }

        get width() {
            return this._width;
        }

        set width(value) {
            if (this._width !== value) {
                this._width = value;

                this.set_uniform_value('width', parseFloat(this._width + 3.0 - 1e-6));

                if (this.chained_effect)
                    this.chained_effect.width = value;
            }
        }

        get height() {
            return this._height;
        }

        set height(value) {
            if (this._height !== value) {
                this._height = value;

                this.set_uniform_value('height', parseFloat(this._height + 3.0 - 1e-6));

                if (this.chained_effect)
                    this.chained_effect.height = value;
            }
        }

        get direction() {
            return this._direction;
        }

        set direction(value) {
            if (this._direction !== value)
                this._direction = value;
        }

        get chained_effect() {
            return this._chained_effect;
        }

        set chained_effect(value) {
            this._chained_effect = value;
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

            if (this.direction == 0) {
                if (this.chained_effect)
                    this.chained_effect.get_actor()?.remove_effect(this.chained_effect);
                else
                    this.chained_effect = new GaussianBlurEffect({
                        radius: this.radius,
                        brightness: this.brightness,
                        width: this.width,
                        height: this.height,
                        direction: 1
                    });
                if (actor !== null)
                    actor.add_effect(this.chained_effect);
            }
        }

        vfunc_paint_target(paint_node, paint_context) {
            this.set_uniform_value("dir", this.direction);

            super.vfunc_paint_target(paint_node, paint_context);
        }
    });