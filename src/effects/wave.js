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
    vapor_octaves: 4, vapor_speed: 1.5,
    zoom: 1.0, grain: 15, dispersion: 20,
    saturation: 1.0, brightness: 1.0,
    flow_animation_enabled: true, flow_speed_factor: 0.5,
    resize_duration: 1000,
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
                1.5,
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
            'flow_animation_enabled': GObject.ParamSpec.boolean(
                `flow_animation_enabled`,
                `Flow Animation Enabled`,
                `Flow Animation Enabled`,
                GObject.ParamFlags.READWRITE,
                true,
            ),      
            'flow_speed_factor': GObject.ParamSpec.double(
                `flow_speed_factor`,
                `Flow Speed Factor`,
                `Flow Speed Factor`,
                GObject.ParamFlags.READWRITE,
                0.0, 5.0,
                0.5,
            ),
            'resize_duration': GObject.ParamSpec.int(
                `resize_duration`,
                `Resize Duration`,
                `Resize Duration`,
                GObject.ParamFlags.READWRITE,
                0, 10000,
                1000,
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
    
        static _update_frame() {
            const delta = this._timeline.get_delta();
            for (const task of this.tasks) task(delta);
        }

        static _initialize() {
            this._timeline = new Clutter.Timeline({
                actor: Main.layoutManager.uiGroup,
                duration: 5000,
                repeat_count: -1,
            });

            this._connection_id = this._timeline.connect(
                "new-frame",
                this._update_frame.bind(this),
            );

            this._timeline.start();
        }

        static _destroy() {
            if(this._timeline){
                this._timeline.stop();
                this._timeline.disconnect(this._connection_id);
            }

            this._timeline = null;
            this._connection_id = null;
            this.tasks.clear();
        }
}

// Small utils for animation 
const lerp = (a, b, t) => a + (b - a) * t;

const TAU = Math.PI * 2;
const TIME_FACTOR = 0.001;

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

        get flow_animation_enabled() {
            return this._flow_animation_enabled;
        }

        set flow_animation_enabled(value) {
            if (this._flow_animation_enabled !== value) {
                this._flow_animation_enabled = value;

                this._flow_update_animation_state();   
            }
        }

        get flow_speed_factor() {
            return this._flow_speed_factor;
        }

        set flow_speed_factor(value) {
            if (this._flow_speed_factor !== value) {
                this._flow_speed_factor = value;

                this._flow_update_animation_state();
            }
        }


        _can_animate() {
            const actor = this.get_actor();

            return this.enabled &&
                   !!actor &&
                     actor.is_mapped() &&
                     actor.get_paint_opacity() !== 0;
        }

        _flow_update_animation_state() {
            if (!this._flow_update_ref) {
                this._flow_update_ref = this._flow_animation_update.bind(this)
            }

            const active = 
                this._flow_animation_enabled && 
                this._flow_speed_factor !== 0 && 
                this._can_animate();
            
            if (active === this._prev_active_state) return;
            this._prev_active_state = active;
            
            if (active) {
                WaveTicker.add(this._flow_update_ref)
            } else {
                WaveTicker.remove(this._flow_update_ref)
            }
        }

        _flow_animation_update(delta) {
            this._flow_update_animation_state();
            if (!this._prev_active_state) return;

            this._flow_time = ((this._flow_time || 0) + delta * TIME_FACTOR * this._flow_speed_factor) % TAU;
            uniforms.set_uniform(this, 'time', this._flow_time);
        }

        get resize_duration() {
            return this._resize_duration;
        }

        set resize_duration(value) {
            if (this._resize_duration !== value) {
                this._resize_duration = value;
            }
        }

        get surface_max_size() {
            return this._surface_max_size;
        }

        set surface_max_size(value) {
            if (this._surface_max_size !== value) {
                this._surface_max_size = value;

                uniforms.set_uniform(this, "surface_max_size", parseFloat(this._surface_max_size));
            }
        }
        
        _resize_animation_start() {
            if (!this._resize_update_ref) {
                this._resize_update_ref = this._resize_animation_update.bind(this)
            }

            const max_size = Math.max(this._width, this._height);
            WaveTicker.remove(this._resize_update_ref);

            // Set it instantly and return to avoid unnecessary animation;
            if (
                !this._can_animate() ||
                !this._resize_duration ||  
                this.surface_max_size <= 1 ||
                this.surface_max_size === max_size
            ) {
                this.surface_max_size = max_size;
                return;
            }

            // _resize_from is using current max size for smooth interuption
            this._resize_from = this.surface_max_size;
            this._resize_to = max_size;
            this._resize_elapsed = 0;
    
            WaveTicker.add(this._resize_update_ref);
        }

        _resize_animation_update(delta) {
            this._resize_elapsed += delta;
            const progress = Math.min(this._resize_elapsed / this._resize_duration, 1);
            const eased_progress = 1 - (1 - progress) ** 3;
            
            this.surface_max_size = lerp(this._resize_from, this._resize_to, eased_progress);

            if (progress >= 1 || !this._can_animate()) {
                this.surface_max_size = this._resize_to;
                WaveTicker.remove(this._resize_update_ref);
            }
        }

        get width() {
            return this._width;
        }

        set width(value) {
            const clamped = utils.clamp(value, 1, Number.MAX_SAFE_INTEGER, 1);
            if (this._width !== clamped) {
                this._width = clamped;

                uniforms.set_uniform(this, 'width', parseFloat(this._width))
                this._resize_animation_start();
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
                this._resize_animation_start();
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

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);
            this._flow_update_animation_state();
            super.vfunc_paint_target(paint_node, paint_context);
        }
}

export const WaveEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(WAVE_EFFECT_META, WaveEffectClass);