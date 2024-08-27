import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const SHADER_FILENAME = 'corner.glsl';
const DEFAULT_PARAMS = {
    radius: 12, width: 0, height: 0,
    corners_top: true, corners_bottom: true,
    clip: [0, 0, -1, -1]
};


export const CornerEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "CornerEffect",
        Properties: {
            'radius': GObject.ParamSpec.double(
                `radius`,
                `Corner Radius`,
                `Corner Radius`,
                GObject.ParamFlags.READWRITE,
                0, Number.MAX_SAFE_INTEGER,
                12,
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
            'corners_top': GObject.ParamSpec.boolean(
                `corners_top`,
                `Round top corners`,
                `Round top corners`,
                GObject.ParamFlags.READWRITE,
                true,
            ),
            'corners_bottom': GObject.ParamSpec.boolean(
                `corners_bottom`,
                `Round bottom corners`,
                `Round bottom corners`,
                GObject.ParamFlags.READWRITE,
                true,
            ),
            // FIXME this works but it logs an error, because I'm not a double...
            // I don't want to fiddle with GVariants again
            'clip': GObject.ParamSpec.double(
                `clip`,
                `Clip`,
                `Clip`,
                GObject.ParamFlags.READWRITE,
                0.0, Number.MAX_SAFE_INTEGER,
                0.0,
            ),
        }
    }, class CornerEffect extends Clutter.ShaderEffect {
        constructor(params) {
            super(params);

            this._clip_x0 = null;
            this._clip_y0 = null;
            this._clip_width = null;
            this._clip_height = null;

            utils.setup_params(this, params);

            // set shader source
            this._source = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
            if (this._source)
                this.set_shader_source(this._source);

            const theme_context = St.ThemeContext.get_for_stage(global.stage);
            theme_context.connectObject('notify::scale-factor', _ => this.update_radius(), this);
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

                this.update_radius();
            }
        }

        update_radius() {
            const theme_context = St.ThemeContext.get_for_stage(global.stage);
            let radius = Math.min(
                this.radius * theme_context.scale_factor,
                this.width / 2, this.height / 2
            );
            if (this._clip_width >= 0 || this._clip_height >= 0)
                radius = Math.min(radius, this._clip_width / 2, this._clip_height / 2);

            this.set_uniform_value('radius', parseFloat(radius - 1e-6));
        }

        get width() {
            return this._width;
        }

        set width(value) {
            if (this._width !== value) {
                this._width = value;

                this.set_uniform_value('width', parseFloat(this._width + 3.0 - 1e-6));
                this.update_radius();
            }
        }

        get height() {
            return this._height;
        }

        set height(value) {
            if (this._height !== value) {
                this._height = value;

                this.set_uniform_value('height', parseFloat(this._height + 3.0 - 1e-6));
                this.update_radius();
            }
        }

        get corners_top() {
            return this._corners_top;
        }

        set corners_top(value) {
            if (this._corners_top !== value) {
                this._corners_top = value;

                this.set_uniform_value('corners_top', this._corners_top ? 1 : 0);
            }
        }

        get corners_bottom() {
            return this._corners_bottom;
        }

        set corners_bottom(value) {
            if (this._corners_bottom !== value) {
                this._corners_bottom = value;

                this.set_uniform_value('corners_bottom', this._corners_bottom ? 1 : 0);
            }
        }

        get clip() {
            return [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height];
        }

        set clip(value) {
            [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height] = value;
            this.set_uniform_value('clip_x0', parseFloat(this._clip_x0 - 1e-6));
            this.set_uniform_value('clip_y0', parseFloat(this._clip_y0 - 1e-6));
            this.set_uniform_value('clip_width', parseFloat(this._clip_width + 3 - 1e-6));
            this.set_uniform_value('clip_height', parseFloat(this._clip_height + 3 - 1e-6));
            this.update_radius();
        }

        vfunc_set_actor(actor) {
            if (this._actor_connection_size_id) {
                let old_actor = this.get_actor();
                old_actor?.disconnect(this._actor_connection_size_id);
            }
            if (this._actor_connection_clip_rect_id) {
                let old_actor = this.get_actor();
                old_actor?.disconnect(this._actor_connection_clip_rect_id);
            }

            if (actor) {
                this.width = actor.width;
                this.height = actor.height;
                this._actor_connection_size_id = actor.connect('notify::size', _ => {
                    this.width = actor.width;
                    this.height = actor.height;
                });

                this.clip = actor.has_clip ? actor.get_clip() : [0, 0, -10, -10];
                this._actor_connection_clip_rect_id = actor.connect('notify::clip-rect', _ => {
                    this.clip = actor.has_clip ? actor.get_clip() : [0, 0, -10, -10];
                });
            }
            else {
                this._actor_connection_size_id = null;
                this._actor_connection_clip_rect_id = null;
            }

            super.vfunc_set_actor(actor);
        }
    });