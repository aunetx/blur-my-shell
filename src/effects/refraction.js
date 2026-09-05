import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
import {
    DEFAULT_PARAMS,
    MAX_BLUR_RADIUS,
    REFRACTION_EFFECT_META,
} from './refraction_config.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');

const SHADER_FILENAME = 'refraction.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);

const RefractionEffectClass = utils.IS_IN_PREFERENCES ? null : class RefractionEffect extends utils.ShaderEffect {

        constructor(params) {
            super();
            utils.initialize_shader_effect(this, SHADER_SOURCE);

            this._clip_x0 = null;
            this._clip_y0 = null;
            this._clip_width = null;
            this._clip_height = null;

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

        static get max_blur_radius() {
            return MAX_BLUR_RADIUS;
        }

        get strength() {
            return this._strength;
        }

        set strength(value) {
            const strength = utils.clamp(value, 0, 1, DEFAULT_PARAMS.strength);
            if (this._strength !== strength) {
                this._strength = strength;

                uniforms.set_uniform(this, 'strength', parseFloat(this._strength));
            }
        }

        get edge_size() {
            return this._edge_size;
        }

        set edge_size(value) {
            const edgeSize = utils.clamp(value, 1, 200, DEFAULT_PARAMS.edge_size);
            if (this._edge_size !== edgeSize) {
                this._edge_size = edgeSize;

                this.update_scaled_uniforms();

            }
        }

        get blur_radius() {
            return this._blur_radius;
        }

        set blur_radius(value) {
            const blurRadius = utils.clamp(
                value, 0, MAX_BLUR_RADIUS, DEFAULT_PARAMS.blur_radius
            );
            if (this._blur_radius !== blurRadius) {
                this._blur_radius = blurRadius;

            }
        }

        get falloff() {
            return this._falloff;
        }

        set falloff(value) {
            const falloff = utils.clamp(value, 0.25, 8, DEFAULT_PARAMS.falloff);
            if (this._falloff !== falloff) {
                this._falloff = falloff;

                uniforms.set_uniform(this, 'falloff', parseFloat(this._falloff - 1e-6));

            }
        }

        get corner_radius() {
            return this._corner_radius;
        }

        set corner_radius(value) {
            const cornerRadius = utils.clamp(
                value, 0, 200, DEFAULT_PARAMS.corner_radius
            );
            if (this._corner_radius !== cornerRadius) {
                this._corner_radius = cornerRadius;

                this.update_scaled_uniforms();

            }
        }

        get rim_width() {
            return this._rim_width;
        }

        set rim_width(value) {
            const rim_width = utils.clamp(value, 1, 6.5, DEFAULT_PARAMS.rim_width);
            if (this._rim_width !== rim_width) {
                this._rim_width = rim_width;

                uniforms.set_uniform(this, 'rim_width', parseFloat(this._rim_width - 1e-6));

            }
        }

        get rgb_fringing() {
            return this._rgb_fringing;
        }

        set rgb_fringing(value) {
            const rgbFringing = utils.clamp(
                value, 0, 1, DEFAULT_PARAMS.rgb_fringing
            );
            if (this._rgb_fringing !== rgbFringing) {
                this._rgb_fringing = rgbFringing;

                uniforms.set_uniform(this, 'rgb_fringing', parseFloat(this._rgb_fringing - 1e-6));
            }
        }

        get gloss() {
            return this._gloss;
        }

        set gloss(value) {
            const gloss = utils.clamp(value, 0, 1, DEFAULT_PARAMS.gloss);
            if (this._gloss !== gloss) {
                this._gloss = gloss;

                uniforms.set_uniform(this, 'gloss', parseFloat(this._gloss - 1e-6));
            }
        }

        get webcam_gloss() {
            return this._webcam_gloss;
        }

        set webcam_gloss(value) {
            this._webcam_gloss = typeof value === 'boolean'
                ? value
                : DEFAULT_PARAMS.webcam_gloss;
        }

        get webcam_device() {
            return this._webcam_device;
        }

        set webcam_device(value) {
            this._webcam_device = typeof value === 'string'
                ? value
                : DEFAULT_PARAMS.webcam_device;
        }

        get tint() {
            return this._tint;
        }

        set tint(value) {
            const tint = utils.clamp(value, 0, 1, DEFAULT_PARAMS.tint);
            if (this._tint !== tint) {
                this._tint = tint;

                uniforms.set_uniform(this, 'tint', parseFloat(this._tint - 1e-6));
            }
        }

        get tint_red() {
            return this._tint_red;
        }

        set tint_red(value) {
            const red = utils.clamp(value, 0, 1, DEFAULT_PARAMS.tint_color[0]);
            if (this._tint_red !== red) {
                this._tint_red = red;

                uniforms.set_uniform(this, 'tint_r', parseFloat(this._tint_red - 1e-6));
            }
        }

        get tint_green() {
            return this._tint_green;
        }

        set tint_green(value) {
            const green = utils.clamp(value, 0, 1, DEFAULT_PARAMS.tint_color[1]);
            if (this._tint_green !== green) {
                this._tint_green = green;

                uniforms.set_uniform(this, 'tint_g', parseFloat(this._tint_green - 1e-6));
            }
        }

        get tint_blue() {
            return this._tint_blue;
        }

        set tint_blue(value) {
            const blue = utils.clamp(value, 0, 1, DEFAULT_PARAMS.tint_color[2]);
            if (this._tint_blue !== blue) {
                this._tint_blue = blue;

                uniforms.set_uniform(this, 'tint_b', parseFloat(this._tint_blue - 1e-6));
            }
        }

        get tint_alpha() {
            return this._tint_alpha;
        }

        set tint_alpha(value) {
            const alpha = utils.clamp(value, 0, 1, DEFAULT_PARAMS.tint_color[3]);
            if (this._tint_alpha !== alpha) {
                this._tint_alpha = alpha;

                uniforms.set_uniform(this, 'tint_a', parseFloat(this._tint_alpha - 1e-6));
            }
        }

        get tint_color() {
            return [this.tint_red, this.tint_green, this.tint_blue, this.tint_alpha];
        }

        set tint_color(rgba) {
            const [r, g, b, a] = Array.isArray(rgba)
                ? rgba
                : DEFAULT_PARAMS.tint_color;
            this.tint_red = r;
            this.tint_green = g;
            this.tint_blue = b;
            this.tint_alpha = a ?? 1.0;
        }

        get backdrop_zoom() {
            return this._backdrop_zoom;
        }

        set backdrop_zoom(value) {
            const backdropZoom = utils.clamp(
                value, 0.1, 4, DEFAULT_PARAMS.backdrop_zoom
            );
            if (this._backdrop_zoom !== backdropZoom) {
                this._backdrop_zoom = backdropZoom;

                uniforms.set_uniform(this, 'backdrop_zoom', parseFloat(this._backdrop_zoom - 1e-6));
            }
        }

        get shadow() {
            return this._shadow;
        }

        set shadow(value) {
            const shadow = utils.clamp(value, 0, 1, DEFAULT_PARAMS.shadow);
            if (this._shadow !== shadow) {
                this._shadow = shadow;

                uniforms.set_uniform(this, 'shadow', parseFloat(this._shadow - 1e-6));
            }
        }

        get opacity_factor() {
            return this._opacity_factor;
        }

        set opacity_factor(value) {
            const opacityFactor = utils.clamp(
                value, 0, 1, DEFAULT_PARAMS.opacity_factor
            );
            if (this._opacity_factor !== opacityFactor) {
                this._opacity_factor = opacityFactor;

                uniforms.set_uniform(this, 'opacity_factor', parseFloat(this._opacity_factor));
            }
        }

        get texture_repeat() {
            return this._texture_repeat;
        }

        set texture_repeat(value) {
            const textureRepeat = utils.clamp_integer(
                value, 0, 1, DEFAULT_PARAMS.texture_repeat
            );
            if (this._texture_repeat !== textureRepeat) {
                this._texture_repeat = textureRepeat;

                uniforms.set_uniform(this, 'texture_repeat', this._texture_repeat);

            }
        }

        set(params) {
            utils.setup_params(this, params);
        }

        get width() {
            return this._width;
        }

        set width(value) {
            const width = utils.clamp(value, 1, Number.MAX_SAFE_INTEGER, 1);
            if (this._width !== width) {
                this._width = width;

                uniforms.set_uniform(this, 'width', parseFloat(this._width - 1e-6));
                this.update_scaled_uniforms();

            }
        }

        get height() {
            return this._height;
        }

        set height(value) {
            const height = utils.clamp(value, 1, Number.MAX_SAFE_INTEGER, 1);
            if (this._height !== height) {
                this._height = height;

                uniforms.set_uniform(this, 'height', parseFloat(this._height - 1e-6));
                this.update_scaled_uniforms();

            }
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

            const shader_clip = clip;

            uniforms.set_uniform(this, 'clip_x0', parseFloat(shader_clip[0] - 1e-6));
            uniforms.set_uniform(this, 'clip_y0', parseFloat(shader_clip[1] - 1e-6));
            uniforms.set_uniform(this, 'clip_width', parseFloat(shader_clip[2] - 1e-6));
            uniforms.set_uniform(this, 'clip_height', parseFloat(shader_clip[3] - 1e-6));
            this.update_scaled_uniforms();
        }

        update_scaled_uniforms() {
            const scale_factor = St.ThemeContext.get_for_stage(global.stage).scale_factor;
            const rect_width =
                this._clip_width >= 0 ? this._clip_width : this.width;
            const rect_height =
                this._clip_height >= 0 ? this._clip_height : this.height;
            const max_edge = Math.max(1, Math.min(rect_width, rect_height) / 2);
            const edge_size = Math.min(this.edge_size * scale_factor, max_edge);
            const corner_radius = Math.min(this.corner_radius * scale_factor, max_edge);

            uniforms.set_uniform(this, 'edge_size', parseFloat(edge_size - 1e-6));
            uniforms.set_uniform(this, 'corner_radius', parseFloat(corner_radius - 1e-6));
        }

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);
            super.vfunc_paint_target(paint_node, paint_context);
        }

};

export const RefractionEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(REFRACTION_EFFECT_META, RefractionEffectClass);
