import GObject from 'gi://GObject';
import GLib from 'gi://GLib';

import * as utils from '../conveniences/utils.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');

const SHADER_FILENAME = 'refraction.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const CLIP_STABILIZE_EPSILON = 1.0;
const MAX_BLUR_RADIUS = 48.0;

const DEFAULT_PARAMS = {
    strength: 0.42,
    blur_radius: 10,
    edge_size: 22,
    falloff: 2.4,
    corner_radius: 22,
    rim_width: 4.8,
    rgb_fringing: 0.08,
    gloss: 0.55,
    webcam_gloss: false,
    webcam_device: '',
    tint: 0.18,
    shadow: 0.28,
    texture_repeat: 0,
    blur_direction: 0,
    private_pass: 0,
    chained_effect: null,
    width: 0,
    height: 0,
    clip: [0, 0, -1, -1]
};

const REFRACTION_EFFECT_META = {
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
                0.0, MAX_BLUR_RADIUS,
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
            'rim_width': GObject.ParamSpec.double(
                `rim_width`,
                `Rim Width`,
                `Refraction rim width`,
                GObject.ParamFlags.READWRITE,
                1.0, 6.5,
                4.8,
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
            'webcam_gloss': GObject.ParamSpec.boolean(
                `webcam_gloss`,
                `Deprecated Webcam Gloss`,
                `Deprecated compatibility property`,
                GObject.ParamFlags.READWRITE,
                false,
            ),
            'webcam_device': GObject.ParamSpec.string(
                `webcam_device`,
                `Deprecated Webcam Device`,
                `Deprecated compatibility property`,
                GObject.ParamFlags.READWRITE,
                '',
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
            'texture_repeat': GObject.ParamSpec.int(
                `texture_repeat`,
                `Texture Repeat`,
                `Texture repeat behavior`,
                GObject.ParamFlags.READWRITE,
                0, 1,
                0,
            ),
            'blur_direction': GObject.ParamSpec.int(
                `blur_direction`,
                `Blur Direction`,
                `Private Gaussian blur direction`,
                GObject.ParamFlags.READWRITE,
                0, 1,
                0,
            ),
            'private_pass': GObject.ParamSpec.int(
                `private_pass`,
                `Private Pass`,
                `Private Gaussian blur pass`,
                GObject.ParamFlags.READWRITE,
                0, 1,
                0,
            ),
            'chained_effect': GObject.ParamSpec.object(
                `chained_effect`,
                `Chained Effect`,
                `Private chained blur effect`,
                GObject.ParamFlags.READWRITE,
                GObject.Object,
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
};

const RefractionEffectClass = utils.IS_IN_PREFERENCES ? null : class RefractionEffect extends Clutter.ShaderEffect {

        constructor(params) {
            const { webcam_gloss, webcam_device, ...parent_params } = params;
            super({ ...parent_params });
            utils.initialize_shader_effect(this, SHADER_SOURCE);

            this._clip_x0 = null;
            this._clip_y0 = null;
            this._clip_width = null;
            this._clip_height = null;
            this._stable_clip_x0 = null;
            this._stable_clip_y0 = null;
            this._stable_clip_width = null;
            this._stable_clip_height = null;
            this._stabilize_clip_x = false;
            this._stabilize_clip_y = false;
            this._clip_settle_timeout_id = null;

            utils.setup_params(this, params);

            this._theme_context = St.ThemeContext.get_for_stage(global.stage);
            this._theme_context.connectObject(
                'notify::scale-factor',
                _ => this.update_scaled_uniforms(),
                this
            );
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        // Declared here (not inherited) so GJS wires up this optional vfunc.
        vfunc_get_static_snippet() {
            return utils.get_or_create_shader_snippet("RefractionEffect", Cogl, SHADER_SOURCE);
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

                if (this.chained_effect)
                    this.chained_effect.edge_size = value;
            }
        }

        get blur_radius() {
            return this._blur_radius;
        }

        set blur_radius(value) {
            if (this._blur_radius !== value) {
                this._blur_radius = Math.min(value, MAX_BLUR_RADIUS);

                this.update_scaled_uniforms();

                if (this.chained_effect)
                    this.chained_effect.blur_radius = this._blur_radius;
            }
        }

        get falloff() {
            return this._falloff;
        }

        set falloff(value) {
            if (this._falloff !== value) {
                this._falloff = value;

                this.set_uniform_value('falloff', parseFloat(this._falloff - 1e-6));

                if (this.chained_effect)
                    this.chained_effect.falloff = value;
            }
        }

        get corner_radius() {
            return this._corner_radius;
        }

        set corner_radius(value) {
            if (this._corner_radius !== value) {
                this._corner_radius = value;

                this.update_scaled_uniforms();

                if (this.chained_effect)
                    this.chained_effect.corner_radius = value;
            }
        }

        get rim_width() {
            return this._rim_width;
        }

        set rim_width(value) {
            const rim_width = Math.max(1.0, Math.min(value, 6.5));
            if (this._rim_width !== rim_width) {
                this._rim_width = rim_width;

                this.set_uniform_value('rim_width', parseFloat(this._rim_width - 1e-6));

                if (this.chained_effect)
                    this.chained_effect.rim_width = rim_width;
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

        get gloss() {
            return this._gloss;
        }

        set gloss(value) {
            if (this._gloss !== value) {
                this._gloss = value;

                this.set_uniform_value('gloss', parseFloat(this._gloss - 1e-6));
            }
        }

        // Deprecated no-op compatibility properties for old saved pipelines.
        get webcam_gloss() {
            return this._webcam_gloss;
        }

        set webcam_gloss(value) {
            this._webcam_gloss = value;
        }

        get webcam_device() {
            return this._webcam_device;
        }

        set webcam_device(value) {
            this._webcam_device = value ?? '';
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

                if (this.chained_effect)
                    this.chained_effect.texture_repeat = value;
            }
        }

        get blur_direction() {
            return this._blur_direction;
        }

        set blur_direction(value) {
            if (this._blur_direction !== value) {
                this._blur_direction = value;

                this.set_uniform_value('blur_direction', this._blur_direction);
            }
        }

        get private_pass() {
            return this._private_pass;
        }

        set private_pass(value) {
            if (this._private_pass !== value) {
                this._private_pass = value;

                this.set_uniform_value('private_pass', this._private_pass);
                if (this._private_pass === 1)
                    this.set_enabled(this.blur_radius > 0.01);
            }
        }

        get chained_effect() {
            return this._chained_effect;
        }

        set chained_effect(value) {
            this._chained_effect = value;
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
                this.update_scaled_uniforms();

                if (this.chained_effect)
                    this.chained_effect.height = value;
            }
        }

        get clip() {
            return [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height];
        }

        set clip(value) {
            const previous_clip = this.clip;
            [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height] = value;

            let shader_clip = this._stabilized_clip(previous_clip);

            this.set_uniform_value('clip_x0', parseFloat(shader_clip[0] - 1e-6));
            this.set_uniform_value('clip_y0', parseFloat(shader_clip[1] - 1e-6));
            this.set_uniform_value('clip_width', parseFloat(shader_clip[2] + 3.0 - 1e-6));
            this.set_uniform_value('clip_height', parseFloat(shader_clip[3] + 3.0 - 1e-6));
            this.update_scaled_uniforms();
        }

        _stabilized_clip(previous_clip) {
            if (this._clip_width < 0 || this._clip_height < 0) {
                this._stable_clip_x0 = null;
                this._stable_clip_y0 = null;
                this._stable_clip_width = null;
                this._stable_clip_height = null;
                this._stabilize_clip_x = false;
                this._stabilize_clip_y = false;
                if (this._clip_settle_timeout_id) {
                    GLib.Source.remove(this._clip_settle_timeout_id);
                    this._clip_settle_timeout_id = null;
                }
                return [
                    this._clip_x0,
                    this._clip_y0,
                    this._clip_width,
                    this._clip_height
                ];
            }

            const [previous_x0, previous_y0, previous_width, previous_height] = previous_clip;

            [this._stable_clip_x0, this._stable_clip_width, this._stabilize_clip_x] =
                this._stabilized_clip_axis(
                    this._clip_x0,
                    this._clip_width,
                    previous_x0,
                    previous_width,
                    this._stable_clip_x0,
                    this._stable_clip_width,
                    this._stabilize_clip_x
                );
            [this._stable_clip_y0, this._stable_clip_height, this._stabilize_clip_y] =
                this._stabilized_clip_axis(
                    this._clip_y0,
                    this._clip_height,
                    previous_y0,
                    previous_height,
                    this._stable_clip_y0,
                    this._stable_clip_height,
                    this._stabilize_clip_y
                );

            if (this._clip_settle_timeout_id)
                GLib.Source.remove(this._clip_settle_timeout_id);

            if (!this._stabilize_clip_x && !this._stabilize_clip_y) {
                this._clip_settle_timeout_id = null;
                return [
                    this._stable_clip_x0,
                    this._stable_clip_y0,
                    this._stable_clip_width,
                    this._stable_clip_height
                ];
            }

            this._clip_settle_timeout_id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 220, () => {
                this._stable_clip_x0 = this._clip_x0;
                this._stable_clip_y0 = this._clip_y0;
                this._stable_clip_width = this._clip_width;
                this._stable_clip_height = this._clip_height;
                this._stabilize_clip_x = false;
                this._stabilize_clip_y = false;
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

        _stabilized_clip_axis(
            start,
            size,
            previous_start,
            previous_size,
            stable_start,
            stable_size,
            stabilizing
        ) {
            const size_changed =
                previous_size !== null &&
                previous_size >= 0 &&
                Math.abs(size - previous_size) > CLIP_STABILIZE_EPSILON;

            if (!stabilizing && !size_changed)
                return [start, size, false];

            const end = start + size;
            const resolved_stable_start = stable_start ?? previous_start ?? start;
            const resolved_stable_size = stable_size ?? previous_size ?? size;
            const stable_end = resolved_stable_start + resolved_stable_size;
            const resolved_start = Math.min(resolved_stable_start, start);
            const resolved_end = Math.max(stable_end, end);

            return [resolved_start, resolved_end - resolved_start, true];
        }

        update_scaled_uniforms() {
            const scale_factor = St.ThemeContext.get_for_stage(global.stage).scale_factor;
            const rect_width =
                this._stable_clip_width ?? (this._clip_width >= 0 ? this._clip_width : this.width);
            const rect_height =
                this._stable_clip_height ?? (this._clip_height >= 0 ? this._clip_height : this.height);
            const max_edge = Math.max(1, Math.min(rect_width, rect_height) / 2);
            const edge_size = Math.min(this.edge_size * scale_factor, max_edge);
            const corner_radius = Math.min(this.corner_radius * scale_factor, max_edge);

            this.set_uniform_value('edge_size', parseFloat(edge_size - 1e-6));
            this.set_uniform_value('corner_radius', parseFloat(corner_radius - 1e-6));
            const blur_radius = Math.min(this.blur_radius, MAX_BLUR_RADIUS) * scale_factor;
            this.set_uniform_value('blur_radius', parseFloat(blur_radius - 1e-6));
            if (this.private_pass === 1)
                this.set_enabled(blur_radius > 0.01);
        }

        vfunc_set_actor(actor) {
            if (this.chained_effect)
                this.chained_effect.get_actor()?.remove_effect(this.chained_effect);

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
                this._stabilize_clip_x = false;
                this._stabilize_clip_y = false;
            }

            super.vfunc_set_actor(actor);

            if (this.private_pass === 0) {
                if (!this.chained_effect) {
                    const chained_params = {
                        strength: this.strength,
                        blur_radius: this.blur_radius,
                        edge_size: this.edge_size,
                        falloff: this.falloff,
                        corner_radius: this.corner_radius,
                        rim_width: this.rim_width,
                        rgb_fringing: this.rgb_fringing,
                        gloss: this.gloss,
                        tint: this.tint,
                        shadow: this.shadow,
                        texture_repeat: this.texture_repeat,
                        width: this.width,
                        height: this.height,
                        clip: this.clip,
                        blur_direction: 1,
                        private_pass: 1
                    };

                    this.chained_effect = new RefractionEffect(chained_params);
                }

                if (actor !== null)
                    actor.add_effect(this.chained_effect);
            }
        }

        vfunc_paint_target(paint_node, paint_context) {
            this.set_uniform_value('blur_direction', this.blur_direction);
            this.set_uniform_value('private_pass', this.private_pass);

            super.vfunc_paint_target(paint_node, paint_context);
        }

        vfunc_dispose() {
            if (this._clip_settle_timeout_id) {
                GLib.Source.remove(this._clip_settle_timeout_id);
                this._clip_settle_timeout_id = null;
            }

            if (this.chained_effect) {
                this.chained_effect.get_actor()?.remove_effect(this.chained_effect);
                this.chained_effect = null;
            }

            this._theme_context?.disconnectObject(this);
            this._theme_context = null;

            if (super.vfunc_dispose)
                super.vfunc_dispose();
        }
};

export const RefractionEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(REFRACTION_EFFECT_META, RefractionEffectClass);
