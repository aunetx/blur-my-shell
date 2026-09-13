import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';

const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Main = await utils.import_in_shell_only('resource:///org/gnome/shell/ui/main.js');

const SHADER_FILENAME = 'wave.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    frequency: 50, amplitude: 10, octaves: 2,
    vapor_octaves: 4, vapor_speed: 0.5,
    zoom: 1.0, grain: 15, dispersion: 20,
    saturation: 1.0, brightness: 1.0,
    use_animation: true, speed_factor: 0.5,
    clip: [0, 0, -1, -1], width: 0, height: 0, 
};

const WAVE_EFFECT_META = {
        GTypeName: "BMSWaveEffect",
        Properties: {
            'frequency': GObject.ParamSpec.double(
                `frequency`,
                `Frequency`,
                `Frequency`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                50.0,
            ),
            'amplitude': GObject.ParamSpec.double(
                `amplitude`,
                `Amplitude`,
                `Amplitude`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                10.0,
            ),
            'octaves': GObject.ParamSpec.int(
                `octaves`,
                `Octaves`,
                `Octaves`,
                GObject.ParamFlags.READWRITE,
                0, 6,
                2,
            ),
            'vapor_octaves': GObject.ParamSpec.int(
                `vapor_octaves`,
                `Vapor octaves`,
                `Vapor octaves`,
                GObject.ParamFlags.READWRITE,
                0, 6,
                4,
            ),
            'vapor_speed': GObject.ParamSpec.double(
                `vapor_speed`,
                `Vapor speed`,
                `Vapor speed`,
                GObject.ParamFlags.READWRITE,
                0.0, 5.0,
                0.5,
            ),
            'grain': GObject.ParamSpec.double(
                `grain`,
                `Grain`,
                `Grain`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                15.0,
            ),
            'zoom': GObject.ParamSpec.double(
                `zoom`,
                `Zoom`,
                `Zoom`,
                GObject.ParamFlags.READWRITE,
                0.5, 2.0,
                1.0,
            ),
            'dispersion': GObject.ParamSpec.double(
                `dispersion`,
                `Dispersion`,
                `Dispersion`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                20.0,
            ),    
            'saturation': GObject.ParamSpec.double(
                `saturation`,
                `Saturation`,
                `Saturation`,
                GObject.ParamFlags.READWRITE,
                0.0, 2.0,
                1.0,
            ),
            'brightness': GObject.ParamSpec.double(
                `brightness`,
                `Brightness`,
                `Brightness`,
                GObject.ParamFlags.READWRITE,
                0.0, 2.0,
                1.0,
            ),      
            'use_animation': GObject.ParamSpec.boolean(
                `use_animation`,
                `Use Animation`,
                `Use Animation`,
                GObject.ParamFlags.READWRITE,
                true,
            ),      
            'speed_factor': GObject.ParamSpec.double(
                `speed_factor`,
                `Speed Factor`,
                `Speed Factor`,
                GObject.ParamFlags.READWRITE,
                0.0, 5.0,
                0.5,
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
        }
};

// Unified ticker shared across all wave effects, 
// instead of each effect ticking separately, 
// for better efficiency
class WaveTicker {
        static tasks = new Set();

        static add(task) {
            if(this.tasks.has(task)) {
                return
            }

            this.tasks.add(task);
    
            if (this.tasks.size === 1) {
                this._initialize()
            }
        }
    
        static remove(task) {
            if(!this.tasks.has(task)) {
                return
            }

            this.tasks.delete(task);
        
            if (this.tasks.size === 0) {
                this._destroy()
            }
        }
    
        static _updateFrame() {
            this._currentTime += this._timeline.get_delta();
            for (const task of this.tasks) task(this._currentTime);
        }

        static _initialize() {
            this._timeline = new Clutter.Timeline({
                actor: Main.layoutManager.uiGroup,
                duration: 5000,
                repeatCount: -1,
            });

            this._connectionId = this._timeline.connect(
                "new-frame",
                this._updateFrame.bind(this),
            );

            this._currentTime = 0;
            this._timeline.start();
        }

        static _destroy() {
            if(this._timeline){
                this._timeline.stop();
                this._timeline.disconnect(this._connectionId);
                
                this._connectionId = undefined;
            }

            this.tasks.clear();
        }
}

const WaveEffectClass = utils.IS_IN_PREFERENCES ? null : class WaveEffect extends utils.ShaderEffect {

        constructor(params) {
            super();

            utils.initialize_shader_effect(this, SHADER_SOURCE);

            this._clip_x0 = null;
            this._clip_y0 = null;
            this._clip_width = null;
            this._clip_height = null;

            utils.setup_params(this, params);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get frequency() {
            return this._frequency;
        }
        
        set frequency(value) {
            if (this._frequency !== value) {
                this._frequency = value;

                uniforms.set_uniform(this, "frequency", parseFloat(this._frequency / 100));
            }
        }
        
        get amplitude() {
            return this._amplitude;
        }
        
        set amplitude(value) {
            if (this._amplitude !== value) {
                this._amplitude = value;
        
                uniforms.set_uniform(this, "amplitude", parseFloat(this._amplitude / 100));
            }
        }
        
        get octaves() {
            return this._octaves;
        }
        
        set octaves(value) {
            if (this._octaves !== value) {
                this._octaves = value;
        
                uniforms.set_uniform(this, "octaves", this._octaves);
            }
        }
        
        get vapor_octaves() {
            return this._vapor_octaves;
        }
        
        set vapor_octaves(value) {
            if (this._vapor_octaves !== value) {
                this._vapor_octaves = value;
        
                uniforms.set_uniform(this, "vapor_octaves", this._vapor_octaves);
            }
        }
        
        get vapor_speed() {
            return this._vapor_speed;
        }
        
        set vapor_speed(value) {
            if (this._vapor_speed !== value) {
                this._vapor_speed = value;
        
                uniforms.set_uniform(this, "vapor_speed", parseFloat(this._vapor_speed));
            }
        }
        
        get grain() {
             return this._grain;
        }
        
        set grain(value) {
            if (this._grain !== value) {
                this._grain = value;
        
                uniforms.set_uniform(this, "grain", parseFloat(this._grain / 100));
            }
        }
        
        get zoom() {
             return this._zoom;
        }
        
        set zoom(value) {
            if (this._zoom !== value) {
                this._zoom = value;
        
                uniforms.set_uniform(this, "zoom", parseFloat(this._zoom));
            }
        }
        
        get dispersion() {
            return this._dispersion;
        }
        
        set dispersion(value) {
            if (this._dispersion !== value) {
                this._dispersion = value;
        
                uniforms.set_uniform(this, "dispersion", parseFloat(this._dispersion / 100));
            }
        }
        
        get saturation() {
             return this._saturation;
        }
        
        set saturation(value) {
            if (this._saturation !== value) {
                this._saturation = value;
        
                uniforms.set_uniform(this, "saturation", parseFloat(this._saturation));
            }
        }
        
        get brightness() {
             return this._brightness;
        }
        
        set brightness(value) {
            if (this._brightness !== value) {
                this._brightness = value;
        
                uniforms.set_uniform(this, "brightness", parseFloat(this._brightness));
            }
        }
        
        get use_animation() {
            return this._use_animation;
        }

        set use_animation(value) {
            if (this._use_animation !== value) {
                this._use_animation = value;

                this.update_animation_state();   
            }
        }

        get speed_factor() {
            return this._speed_factor;
        }

        set speed_factor(value) {
            if (this._speed_factor !== value) {
                this._speed_factor = value;

                this.update_animation_state();
            }
        }

        update_animation_state() {
            if (!this._update_time_ref) {
                this._update_time_ref = this.update_time.bind(this)
            }

            const actor = this.get_actor();

            const active = 
                this._use_animation && 
                this._speed_factor !== 0 && 
                this.enabled &&
                !!actor &&
                actor.is_mapped() &&
                actor.opacity !== 0;

            if(active === this._prev_active_state) {
                return;
            }

            this._prev_active_state = active;
            
            if (active) {
                WaveTicker.add(this._update_time_ref)
            } else {
                WaveTicker.remove(this._update_time_ref)
            }
        }

        update_time(time) {
            const current_time = time * this._speed_factor;
            uniforms.set_uniform(this, 'time', current_time - 1e-6);
        }

        get width() {
            return this._width;
        }

        set width(value) {
            const clamped = utils.clamp(value, 1, Number.MAX_SAFE_INTEGER, 1);
            if (this._width !== clamped) {
                this._width = clamped;

                uniforms.set_uniform(this, 'width', parseFloat(this._width))
            }
        }

        get height() {
            return this._height;
        }

        set height(value) {
            const clamped = utils.clamp(value, 1, Number.MAX_SAFE_INTEGER, 1);
            if (this._height !== clamped) {
                this._height = clamped;

                uniforms.set_uniform(this, 'height', parseFloat(this._height));
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
            uniforms.set_uniform(this, 'clip_x0', parseFloat(this._clip_x0 - 1e-6));
            uniforms.set_uniform(this, 'clip_y0', parseFloat(this._clip_y0 - 1e-6));
            uniforms.set_uniform(this, 'clip_width', parseFloat(this._clip_width <= 0 ? -1 : this._clip_width));
            uniforms.set_uniform(this, 'clip_height', parseFloat(this._clip_height <= 0 ? -1 : this._clip_height));
        }

        vfunc_set_actor(actor) {
            let old_actor = this.get_actor();

            if (this._actor_connection_mapped_id) {        
                old_actor?.disconnect(this._actor_connection_mapped_id);
            }

            if (this._actor_connection_opacity_id) {        
                old_actor?.disconnect(this._actor_connection_opacity_id);
            }

            if (actor) {
                this._actor_connection_mapped_id = actor.connect('notify::mapped', _ => {
                    this.update_animation_state();
                });

                this._actor_connection_opacity_id = actor.connect('notify::opacity', _ => {
                    this.update_animation_state();
                });
            }
            else {
                this._actor_connection_mapped_id = null;
                this._actor_connection_opacity_id = null;
            }

            super.vfunc_set_actor(actor);

            this.update_animation_state();
        }

        vfunc_set_enabled(enabled) {
            super.vfunc_set_enabled(enabled);  
            
            this.update_animation_state();
        }

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);
            super.vfunc_paint_target(paint_node, paint_context);
        }
}

export const WaveEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(WAVE_EFFECT_META, WaveEffectClass);