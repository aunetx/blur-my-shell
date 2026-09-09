import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';

const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Main = await utils.import_in_shell_only('resource:///org/gnome/shell/ui/main.js');

const SHADER_FILENAME = 'wave.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    strength: 30, noise_scale: 10, grain: 15,
    zoom: 1.05, dispersion: 20,
    use_animation: true, speed_factor: 0.8,
    saturation: 1.5, brightness: 0.0,
    width: 0, height: 0, 
};

const WAVE_EFFECT_META = {
        GTypeName: "BMSWaveEffect",
        Properties: {
            'strength': GObject.ParamSpec.double(
                `strength`,
                `Strength`,
                `Strength`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                30.0,
            ),
            'noise_scale': GObject.ParamSpec.double(
                `noise_scale`,
                `Noise Scale`,
                `Noise Scale`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                10.0,
            ),
            'grain': GObject.ParamSpec.double(
                `grain`,
                `Grain`,
                `Grain`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                15.0,
            ),
            'saturation': GObject.ParamSpec.double(
                `saturation`,
                `Saturation`,
                `Saturation`,
                GObject.ParamFlags.READWRITE,
                0.0, 2.0,
                1.5,
            ),
            'brightness': GObject.ParamSpec.double(
                `brightness`,
                `Brightness`,
                `Brightness`,
                GObject.ParamFlags.READWRITE,
                0.0, 1.0,
                0.0,
            ),
            'zoom': GObject.ParamSpec.double(
                `zoom`,
                `Zoom`,
                `Zoom`,
                GObject.ParamFlags.READWRITE,
                1.0, 2.0,
                1.05,
            ),
            'dispersion': GObject.ParamSpec.double(
                `dispersion`,
                `Dispersion`,
                `Dispersion`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                20.0,
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
                0.0, 2.0,
                0.8,
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
            const deltaMs = this._timeline.get_delta();
            const deltaSec = deltaMs / 1000.0;
    
            this._currentTime = (this._currentTime + deltaSec) % 1000.0;
    
            for (const task of this.tasks) task(this._currentTime, deltaMs);
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

const WaveEffectClass = utils.IS_IN_PREFERENCES ? null : class WaveEffect extends Clutter.ShaderEffect {

        constructor(params) {
            super(params);

            utils.initialize_shader_effect(this, SHADER_SOURCE);

            this._can_animation = true;

            utils.setup_params(this, params);
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

                this.update_displacement();
            }
        }

        get noise_scale() {
             return this._noise_scale;
        }

        set noise_scale(value) {
            if (this._noise_scale !== value) {
                this._noise_scale = value;
            
                this.update_displacement();
            }
        }

        get grain() {
             return this._grain;
        }

        set grain(value) {
            if (this._grain !== value) {
                this._grain = value;
            
                this.update_displacement();
            }
        }

        get saturation() {
             return this._saturation;
        }

        set saturation(value) {
            if (this._saturation !== value) {
                this._saturation = value;
            
                this.update_displacement();
            }
        }

        get brightness() {
             return this._brightness;
        }

        set brightness(value) {
            if (this._brightness !== value) {
                this._brightness = value;
            
                this.update_displacement();
            }
        }

        get zoom() {
             return this._zoom;
        }

        set zoom(value) {
            if (this._zoom !== value) {
                this._zoom = value;

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

        update_displacement(){
            uniforms.set_uniform(this, "strength", parseFloat(this._strength / 100 - 1e-6));
            uniforms.set_uniform(this, "noise_scale", parseFloat(this._noise_scale / 100 - 1e-6));
            uniforms.set_uniform(this, "grain", parseFloat(this._grain / 100 - 1e-6));
            uniforms.set_uniform(this, "saturation", parseFloat(this._saturation - 1e-6));
            uniforms.set_uniform(this, "brightness", parseFloat(this._brightness - 1e-6));
            uniforms.set_uniform(this, "zoom", parseFloat(this._zoom - 1e-6));
            uniforms.set_uniform(this, "dispersion", parseFloat(this._dispersion / 100 - 1e-6));
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
            
            const active = this._can_animation && this._use_animation && this._speed_factor !== 0 && !!this.get_actor();
            
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
            const clamped = Math.max(1, value || 1);
            if (this._width !== clamped) {
                this._width = clamped;

                uniforms.set_uniform(this, 'width', parseFloat(this._width + 3.0 - 1e-6));
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
            }
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
            else {
                this._actor_connection_size_id = null;
            }
           
            super.vfunc_set_actor(actor);

            this.update_animation_state();
        }

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);
            super.vfunc_paint_target(paint_node, paint_context);
        }

        vfunc_set_enabled(enabled) {
            this._can_animation = enabled;
            this.update_animation_state(enabled);

            super.vfunc_set_enabled(enabled);           
        }

        vfunc_dispose() {
            this._can_animation = false;
            this.update_animation_state();

            super.vfunc_dispose();
        }
}

export const WaveEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(WAVE_EFFECT_META, WaveEffectClass, SHADER_SOURCE);