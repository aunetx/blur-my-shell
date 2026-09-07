import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const SHADER_FILENAME = 'glass.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    radius: 24, depth: 20,
    refraction: 50, dispersion: 20, splay: 0,
    light_angle: 45, light_intensity: 20, light_ambient: 50,
    light_depth: 1.5, light_feather: 70,
    width: 0, height: 0, 
    clip: [0, 0, -1, -1]
};

const GLASS_EFFECT_META = {
        GTypeName: "BMSGlassEffect",
        Properties: {
            'radius': GObject.ParamSpec.double(
                `radius`,
                `Corner Radius`,
                `Corner Radius`,
                GObject.ParamFlags.READWRITE,
                0.0, Number.MAX_SAFE_INTEGER,
                24.0,
            ),
            'refraction': GObject.ParamSpec.double(
                `refraction`,
                `Refraction`,
                `Refraction`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                50.0,
            ),
            'depth': GObject.ParamSpec.double(
                `depth`,
                `Depth`,
                `Depth`,
                GObject.ParamFlags.READWRITE,
                0.0, 50.0,
                20.0,
            ),
            'dispersion': GObject.ParamSpec.double(
                `dispersion`,
                `Dispersion`,
                `Dispersion`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                20.0,
            ),
            'splay': GObject.ParamSpec.double(
                `splay`,
                `Splay`,
                `Splay`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                0.0,
            ),
            'light_angle': GObject.ParamSpec.int(
                'light_angle',
                'Light Angle',
                'Light Angle',
                GObject.ParamFlags.READWRITE,
                0, 360,
                45,
            ),
            'light_intensity': GObject.ParamSpec.double(
                'light_intensity',
                'Light Intensity',
                'Light Intensity',
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                20.0,
            ),
            'light_ambient': GObject.ParamSpec.double(
                'light_ambient',
                'Light Ambient',
                'Light Ambient',
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                50.0,
            ),
            'light_depth': GObject.ParamSpec.double(
                'light_depth',
                'Light Depth',
                'Light Depth',
                GObject.ParamFlags.READWRITE,
                0.0, 10.0,
                1.5,
            ),
            'light_feather': GObject.ParamSpec.double(
                'light_feather',
                'Light Feather',
                'Light Feather',
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                70.0,
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
            // The shader stores the clip rectangle separately;
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

const GlassEffectClass = utils.IS_IN_PREFERENCES ? null : class GlassEffect extends Clutter.ShaderEffect {

        constructor(params) {
            super(params);

            utils.initialize_shader_effect(this, SHADER_SOURCE);

            this._clip_x0 = null;
            this._clip_y0 = null;
            this._clip_width = null;
            this._clip_height = null;

            utils.setup_params(this, params);
        
            const theme_context = St.ThemeContext.get_for_stage(global.stage);
            this._scale_factor = theme_context.scale_factor;

            theme_context.connectObject('notify::scale-factor', _ => {
                this._scale_factor = theme_context.scale_factor;
                this.update_radius();
            }, this);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get refraction() {
            return this._refraction;
        }

        set refraction(value) {
            if (this._refraction !== value) {
                this._refraction = value;

                this.update_displacement();
            }
        }

        get depth() {
             return this._depth;
        }

        set depth(value) {
            if (this._depth !== value) {
                this._depth = value;
            
                this.update_displacement();
            }
        }

        get dispersion() {
            return this._dispersion;
        }

        set dispersion(value) {
            if (this._dispersion !== value) {
                this._dispersion = value;

                this.update_displacement();   
            }
        }

        get splay() {
             return this._splay;
        }

        set splay(value) {
            if (this._splay !== value) {
                this._splay = value;

                this.update_displacement();
            }
        }

        update_displacement(){
            uniforms.set_uniform(this, "refraction", parseFloat(this._refraction / 100 - 1e-6));
            uniforms.set_uniform(this, "depth", parseFloat(this._depth - 1e-6));
            uniforms.set_uniform(this, "dispersion", parseFloat(this._dispersion / 100 - 1e-6));
            uniforms.set_uniform(this, "splay", parseFloat((this._splay / 100 * 2.0)- 1e-6));
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
            let radius = Math.min(
                this.radius * this._scale_factor,
                this.width / 2, this.height / 2
            );

            if (this._clip_width >= 0 || this._clip_height >= 0)
                radius = Math.min(radius, this._clip_width / 2, this._clip_height / 2);

            uniforms.set_uniform(this, 'radius', parseFloat(radius - 1e-6));
        }

        get light_angle() {
            return this._light_angle;
        }

        set light_angle(value) {
            if (this._light_angle !== value) {
                this._light_angle = value;

                this.update_light();
            }
        }

        get light_intensity() {
            return this._light_intensity;
        }

        set light_intensity(value) {
            if (this._light_intensity !== value) {
                this._light_intensity = value;

                this.update_light();
            }
        }

        get light_ambient() {
            return this._light_ambient;
        }

        set light_ambient(value) {
            if (this._light_ambient !== value) {
                this._light_ambient = value;

                this.update_light();
            }
        }

        get light_depth() {
            return this._light_depth;
        }
        
        set light_depth(value) {
            if (this._light_depth !== value) {
                this._light_depth = value;

                this.update_light();
            }
        }
        
        get light_feather() {
            return this._light_feather;
        }
        
        set light_feather(value) {
            if (this._light_feather !== value) {
                this._light_feather = value;

                this.update_light();
            }
        }

        update_light(){
            uniforms.set_uniform(this, 'light_angle', parseFloat(this._light_angle * Math.PI / 180.0));
            uniforms.set_uniform(this, 'light_intensity', parseFloat(this._light_intensity / 100.0 - 1e-6));
            uniforms.set_uniform(this, 'light_ambient', parseFloat(this._light_ambient / 100.0 - 1e-6));
            uniforms.set_uniform(this, "light_depth", parseFloat(this._light_depth - 1e-6));
            uniforms.set_uniform(this, "light_feather", parseFloat(this._light_feather / 100 - 1e-6));
        }

        get width() {
            return this._width;
        }

        set width(value) {
            const clamped = Math.max(1, value || 1);
            if (this._width !== clamped) {
                this._width = clamped;

                uniforms.set_uniform(this, 'width', parseFloat(this._width + 3.0 - 1e-6));
                this.update_radius();
            }
        }

        get height() {
            return this._height;
        }

        set height(value) {
            const clamped = Math.max(1, value || 1);
            if (this._height !== clamped) {
                this._height = clamped;

                uniforms.set_uniform(this, 'height', parseFloat(this._height + 3.0 - 1e-6));
                this.update_radius();
            }
        }

        get clip() {
            return [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height];
        }

        set clip(value) {
            [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height] = value;
            uniforms.set_uniform(this, 'clip_x0', parseFloat(this._clip_x0 - 1e-6));
            uniforms.set_uniform(this, 'clip_y0', parseFloat(this._clip_y0 - 1e-6));
            uniforms.set_uniform(this, 'clip_width', parseFloat(this._clip_width + 3.0 - 1e-6));
            uniforms.set_uniform(this, 'clip_height', parseFloat(this._clip_height + 3.0 - 1e-6));
            this.update_radius();
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

        vfunc_set_actor(actor) {
            if (this._actor_connection_size_id) {
                let old_actor = this.get_actor();
                old_actor?.disconnect(this._actor_connection_size_id);
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
            else {
                this._actor_connection_size_id = null;
            }

            super.vfunc_set_actor(actor);
        }

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);
            super.vfunc_paint_target(paint_node, paint_context);
        }
}



export const GlassEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(GLASS_EFFECT_META, GlassEffectClass, SHADER_SOURCE);
