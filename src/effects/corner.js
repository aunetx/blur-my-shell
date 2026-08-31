import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const SHADER_FILENAME = 'corner.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    radius: 12, width: 0, height: 0,
    corners_top: true, corners_bottom: true,
    clip: [0, 0, -1, -1],
    straight_corners: false,
};


const CORNER_EFFECT_META = {
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
        }
};

const CornerEffectClass = utils.IS_IN_PREFERENCES ? null : class CornerEffect extends Clutter.ShaderEffect {

        constructor(params) {
            super();

            utils.initialize_shader_effect(this, SHADER_SOURCE);

            this._clip_x0 = null;
            this._clip_y0 = null;
            this._clip_width = null;
            this._clip_height = null;

            utils.setup_params(this, params);

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
            const radius = utils.clamp(
                value, 0, Number.MAX_SAFE_INTEGER, DEFAULT_PARAMS.radius
            );
            if (this._radius !== radius) {
                this._radius = radius;

                this.update_radius();
            }
        }

        update_radius() {
            const theme_context = St.ThemeContext.get_for_stage(global.stage);
            let radius = Math.min(
                this.radius * theme_context.scale_factor,
                this.width / 2, this.height / 2
            );
            if (Number.isFinite(this._clip_width) && this._clip_width >= 0)
                radius = Math.min(radius, this._clip_width / 2);
            if (Number.isFinite(this._clip_height) && this._clip_height >= 0)
                radius = Math.min(radius, this._clip_height / 2);

            uniforms.set_uniform(this, 'radius', parseFloat(radius - 1e-6));
        }

        get width() {
            return this._width;
        }

        set width(value) {
            const v = utils.clamp(value, 1, Number.MAX_SAFE_INTEGER, 1);
            if (this._width !== v) {
                this._width = v;

                uniforms.set_uniform(this, 'width', parseFloat(this._width));
                this.update_radius();
            }
        }

        get height() {
            return this._height;
        }

        set height(value) {
            const v = utils.clamp(value, 1, Number.MAX_SAFE_INTEGER, 1);
            if (this._height !== v) {
                this._height = v;

                uniforms.set_uniform(this, 'height', parseFloat(this._height));
                this.update_radius();
            }
        }

        get corners_top() {
            return this._corners_top;
        }

        set corners_top(value) {
            const cornersTop = typeof value === 'boolean'
                ? value
                : DEFAULT_PARAMS.corners_top;
            if (this._corners_top !== cornersTop) {
                this._corners_top = cornersTop;

                uniforms.set_uniform(this, 'corners_top', this._corners_top ? 1 : 0);
            }
        }

        get corners_bottom() {
            return this._corners_bottom;
        }

        set corners_bottom(value) {
            const cornersBottom = typeof value === 'boolean'
                ? value
                : DEFAULT_PARAMS.corners_bottom;
            if (this._corners_bottom !== cornersBottom) {
                this._corners_bottom = cornersBottom;

                uniforms.set_uniform(this, 'corners_bottom', this._corners_bottom ? 1 : 0);
            }
        }

        get straight_corners() {
            return this._straight_corners;
        }

        set straight_corners(value) {
            const straightCorners = typeof value === 'boolean'
                ? value
                : DEFAULT_PARAMS.straight_corners;
            if (this._straight_corners !== straightCorners) {
                this._straight_corners = straightCorners;

                uniforms.set_uniform(this, 'straight_corners', this._straight_corners ? 1 : 0);
            }
        }

        detach_actor_clip_sync(actor = this.get_actor()) {
            if (!actor || !this._actor_connection_clip_rect_id)
                return;

            try {
                actor.disconnect(this._actor_connection_clip_rect_id);
            } catch (e) { }

            this._actor_connection_clip_rect_id = null;
        }

        sync_actor_clip(actor) {
            this.detach_actor_clip_sync(actor);
            this.clip = actor.has_clip ? actor.get_clip() : [0, 0, -10, -10];
            this._actor_connection_clip_rect_id = actor.connect('notify::clip-rect', _ => {
                this.clip = actor.has_clip ? actor.get_clip() : [0, 0, -10, -10];
            });
        }

        get clip() {
            return [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height];
        }

        set clip(value) {
            const rawClip = Array.isArray(value)
                && value.length === 4
                && value.every(Number.isFinite)
                ? value
                : DEFAULT_PARAMS.clip;
            const clip = rawClip.map((component, index) => utils.clamp(
                component,
                -Number.MAX_SAFE_INTEGER,
                Number.MAX_SAFE_INTEGER,
                DEFAULT_PARAMS.clip[index]
            ));
            [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height] = clip;
            uniforms.set_uniform(this, 'clip_x0', parseFloat(this._clip_x0 - 1e-6));
            uniforms.set_uniform(this, 'clip_y0', parseFloat(this._clip_y0 - 1e-6));
            uniforms.set_uniform(this, 'clip_width', parseFloat(this._clip_width <= 0 ? -1 : this._clip_width));
            uniforms.set_uniform(this, 'clip_height', parseFloat(this._clip_height <= 0 ? -1 : this._clip_height));
            this.update_radius();
        }

        vfunc_set_actor(actor) {
            if (this._actor_connection_size_id) {
                try {
                    this.get_actor()?.disconnect(this._actor_connection_size_id);
                } catch (e) { }
                this._actor_connection_size_id = null;
            }
            this.detach_actor_clip_sync();

            if (actor) {
                this.width = actor.width;
                this.height = actor.height;
                this._actor_connection_size_id = actor.connect('notify::size', _ => {
                    this.width = actor.width;
                    this.height = actor.height;
                });

                this.sync_actor_clip(actor);
            }
            super.vfunc_set_actor(actor);
        }

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);
            super.vfunc_paint_target(paint_node, paint_context);
        }
};

export const CornerEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(CORNER_EFFECT_META, CornerEffectClass, SHADER_SOURCE);
