import GObject from 'gi://GObject';
import GLib from 'gi://GLib';

import * as utils from '../conveniences/utils.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const SHADER_FILENAME = 'refraction.glsl';
const DEFAULT_PARAMS = {
    strength: 0.42,
    blur_radius: 10,
    edge_size: 22,
    falloff: 2.4,
    corner_radius: 22,
    rgb_fringing: 0.08,
    gloss: 0.55,
    tint: 0.18,
    shadow: 0.28,
    mode: 0,
    texture_repeat: 0,
    width: 0,
    height: 0,
    clip: [0, 0, -1, -1]
};


export const RefractionEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "RefractionEffect",
        Properties: {
            'strength': GObject.ParamSpec.double(
                `strength`,
                `Strength`,
                `Refraction strength`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.42,
            ),
            'edge_size': GObject.ParamSpec.double(
                `edge_size`,
                `Edge Size`,
                `Refraction edge size`,
                GObject.ParamFlags.READWRITE,
                1.0, 200.0,
                22.0,
            ),
            'blur_radius': GObject.ParamSpec.double(
                `blur_radius`,
                `Blur Radius`,
                `Internal glass blur radius`,
                GObject.ParamFlags.READWRITE,
                0.0, 80.0,
                10.0,
            ),
            'falloff': GObject.ParamSpec.double(
                `falloff`,
                `Falloff`,
                `Refraction falloff`,
                GObject.ParamFlags.READWRITE,
                0.25, 8.0,
                2.4,
            ),
            'corner_radius': GObject.ParamSpec.double(
                `corner_radius`,
                `Corner Radius`,
                `Refraction corner radius`,
                GObject.ParamFlags.READWRITE,
                0.0, 200.0,
                22.0,
            ),
            'rgb_fringing': GObject.ParamSpec.double(
                `rgb_fringing`,
                `RGB Fringing`,
                `Chromatic offset strength`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.08,
            ),
            'gloss': GObject.ParamSpec.double(
                `gloss`,
                `Gloss`,
                `Specular highlight strength`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.55,
            ),
            'tint': GObject.ParamSpec.double(
                `tint`,
                `Tint`,
                `Glass tint strength`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.18,
            ),
            'shadow': GObject.ParamSpec.double(
                `shadow`,
                `Shadow`,
                `Inner shadow strength`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.28,
            ),
            'mode': GObject.ParamSpec.int(
                `mode`,
                `Mode`,
                `Refraction mode`,
                GObject.ParamFlags.READWRITE,
                0, 1,
                0,
            ),
            'texture_repeat': GObject.ParamSpec.int(
                `texture_repeat`,
                `Texture Repeat`,
                `Texture repeat behavior`,
                GObject.ParamFlags.READWRITE,
                0, 1,
                0,
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
            // See corner.js: this is backed by an array setter, but represented
            // as a dummy property so pipeline parameter assignment can reach it.
            'clip': GObject.ParamSpec.double(
                `clip`,
                `Clip`,
                `Clip`,
                GObject.ParamFlags.READWRITE,
                0.0, Number.MAX_SAFE_INTEGER,
                0.0,
            ),
        }
    }, class RefractionEffect extends Clutter.ShaderEffect {
        constructor(params) {
            super(params);

            this._clip_x0 = null;
            this._clip_y0 = null;
            this._clip_width = null;
            this._clip_height = null;
            this._stable_clip_x0 = null;
            this._stable_clip_y0 = null;
            this._stable_clip_width = null;
            this._stable_clip_height = null;
            this._clip_settle_timeout_id = null;

            utils.setup_params(this, params);

            this._source = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
            if (this._source)
                this.set_shader_source(this._source);

            const theme_context = St.ThemeContext.get_for_stage(global.stage);
            theme_context.connectObject(
                'notify::scale-factor', _ => this.update_scaled_uniforms(),
                this
            );
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get strength() {
            return this._strength;
        }

        set strength(value) {
            if (this._strength !== value) {
                this._strength = value;

                this.set_uniform_value('strength', parseFloat(this._strength - 1e-6));
                this.set_enabled(this.strength > 0.);
            }
        }

        get edge_size() {
            return this._edge_size;
        }

        set edge_size(value) {
            if (this._edge_size !== value) {
                this._edge_size = value;

                this.update_scaled_uniforms();
            }
        }

        get blur_radius() {
            return this._blur_radius;
        }

        set blur_radius(value) {
            if (this._blur_radius !== value) {
                this._blur_radius = value;

                this.update_scaled_uniforms();
            }
        }

        get falloff() {
            return this._falloff;
        }

        set falloff(value) {
            if (this._falloff !== value) {
                this._falloff = value;

                this.set_uniform_value('falloff', parseFloat(this._falloff - 1e-6));
            }
        }

        get corner_radius() {
            return this._corner_radius;
        }

        set corner_radius(value) {
            if (this._corner_radius !== value) {
                this._corner_radius = value;

                this.update_scaled_uniforms();
            }
        }

        get rgb_fringing() {
            return this._rgb_fringing;
        }

        set rgb_fringing(value) {
            if (this._rgb_fringing !== value) {
                this._rgb_fringing = value;

                this.set_uniform_value('rgb_fringing', parseFloat(this._rgb_fringing - 1e-6));
            }
        }

        get mode() {
            return this._mode;
        }

        set mode(value) {
            if (this._mode !== value)
                this._mode = value;
        }

        get gloss() {
            return this._gloss;
        }

        set gloss(value) {
            if (this._gloss !== value) {
                this._gloss = value;

                this.set_uniform_value('gloss', parseFloat(this._gloss - 1e-6));
            }
        }

        get tint() {
            return this._tint;
        }

        set tint(value) {
            if (this._tint !== value) {
                this._tint = value;

                this.set_uniform_value('tint', parseFloat(this._tint - 1e-6));
            }
        }

        get shadow() {
            return this._shadow;
        }

        set shadow(value) {
            if (this._shadow !== value) {
                this._shadow = value;

                this.set_uniform_value('shadow', parseFloat(this._shadow - 1e-6));
            }
        }

        get texture_repeat() {
            return this._texture_repeat;
        }

        set texture_repeat(value) {
            if (this._texture_repeat !== value) {
                this._texture_repeat = value;

                this.set_uniform_value('texture_repeat', this._texture_repeat);
            }
        }

        set(params) {
            utils.setup_params(this, params);
        }

        get width() {
            return this._width;
        }

        set width(value) {
            if (this._width !== value) {
                this._width = value;

                this.set_uniform_value('width', parseFloat(this._width + 3.0 - 1e-6));
                this.update_scaled_uniforms();
            }
        }

        get height() {
            return this._height;
        }

        set height(value) {
            if (this._height !== value) {
                this._height = value;

                this.set_uniform_value('height', parseFloat(this._height + 3.0 - 1e-6));
                this.update_scaled_uniforms();
            }
        }

        get clip() {
            return [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height];
        }

        set clip(value) {
            [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height] = value;

            let shader_clip = this._stabilized_clip();

            this.set_uniform_value('clip_x0', parseFloat(shader_clip[0] - 1e-6));
            this.set_uniform_value('clip_y0', parseFloat(shader_clip[1] - 1e-6));
            this.set_uniform_value('clip_width', parseFloat(shader_clip[2] + 3.0 - 1e-6));
            this.set_uniform_value('clip_height', parseFloat(shader_clip[3] + 3.0 - 1e-6));
            this.update_scaled_uniforms();
        }

        _stabilized_clip() {
            if (this._clip_width < 0 || this._clip_height < 0)
                return [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height];

            const x1 = this._clip_x0 + this._clip_width;
            const y1 = this._clip_y0 + this._clip_height;

            this._stable_clip_x0 = Math.min(this._stable_clip_x0 ?? this._clip_x0, this._clip_x0);
            this._stable_clip_y0 = Math.min(this._stable_clip_y0 ?? this._clip_y0, this._clip_y0);
            const stable_x1 = Math.max((this._stable_clip_x0 ?? this._clip_x0) + (this._stable_clip_width ?? 0), x1);
            const stable_y1 = Math.max((this._stable_clip_y0 ?? this._clip_y0) + (this._stable_clip_height ?? 0), y1);
            this._stable_clip_width = stable_x1 - this._stable_clip_x0;
            this._stable_clip_height = stable_y1 - this._stable_clip_y0;

            if (this._clip_settle_timeout_id)
                GLib.Source.remove(this._clip_settle_timeout_id);

            this._clip_settle_timeout_id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 220, () => {
                this._stable_clip_x0 = this._clip_x0;
                this._stable_clip_y0 = this._clip_y0;
                this._stable_clip_width = this._clip_width;
                this._stable_clip_height = this._clip_height;
                this._clip_settle_timeout_id = null;
                this.clip = [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height];
                this.queue_repaint();
                return GLib.SOURCE_REMOVE;
            });

            return [
                this._stable_clip_x0,
                this._stable_clip_y0,
                this._stable_clip_width,
                this._stable_clip_height
            ];
        }

        update_scaled_uniforms() {
            const scale_factor = St.ThemeContext.get_for_stage(global.stage).scale_factor;
            const rect_width = this._stable_clip_width ?? (this._clip_width >= 0 ? this._clip_width : this.width);
            const rect_height = this._stable_clip_height ?? (this._clip_height >= 0 ? this._clip_height : this.height);
            const max_edge = Math.max(1, Math.min(rect_width, rect_height) / 2);
            const edge_size = Math.min(this.edge_size * scale_factor, max_edge);
            const corner_radius = Math.min(this.corner_radius * scale_factor, max_edge);

            this.set_uniform_value('edge_size', parseFloat(edge_size - 1e-6));
            this.set_uniform_value('corner_radius', parseFloat(corner_radius - 1e-6));
            this.set_uniform_value('blur_radius', parseFloat(this.blur_radius * scale_factor - 1e-6));
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
            if (this._clip_settle_timeout_id) {
                GLib.Source.remove(this._clip_settle_timeout_id);
                this._clip_settle_timeout_id = null;
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
                this._stable_clip_x0 = null;
                this._stable_clip_y0 = null;
                this._stable_clip_width = null;
                this._stable_clip_height = null;
            }

            super.vfunc_set_actor(actor);
        }

        vfunc_dispose() {
            if (super.vfunc_dispose)
                super.vfunc_dispose();
        }
    });
