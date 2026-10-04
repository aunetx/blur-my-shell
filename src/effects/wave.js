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
            if (this.tasks.has(task)) {
                return;
            }

            this.tasks.add(task);

            if (this.tasks.size === 1) {
                this._initialize();
            }
        }

        static remove(task) {
            if (!this.tasks.has(task)) {
                return;
            }

            this.tasks.delete(task);

            if (this.tasks.size === 0) {
                this._destroy();
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
            if (this._timeline) {
                this._timeline.stop();
                this._timeline.disconnect(this._connection_id);
            }

            this._timeline = null;
            this._connection_id = null;
            this.tasks.clear();
        }
}

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

            this._flow_time = 0;
            this._resize_from = 0;
            this._resize_to = 0;
            this._resize_elapsed = 0;
            this._flow_update_ref = this._flow_animation_update.bind(this);
            this._resize_update_ref = this._resize_animation_update.bind(this);

            utils.setup_params(this, params);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get frequency() {
            return this._frequency;
        }

        set frequency(value) {
            const frequency = utils.clamp(value, 0, 100, DEFAULT_PARAMS.frequency);
            if (this._frequency !== frequency) {
                this._frequency = frequency;

                uniforms.set_uniform(this, "frequency", parseFloat(this._frequency / 100));
            }
        }

        get amplitude() {
            return this._amplitude;
        }

        set amplitude(value) {
            const amplitude = utils.clamp(value, 0, 100, DEFAULT_PARAMS.amplitude);
            if (this._amplitude !== amplitude) {
                this._amplitude = amplitude;

                uniforms.set_uniform(this, "amplitude", parseFloat(this._amplitude / 100));
            }
        }

        get octaves() {
            return this._octaves;
        }

        set octaves(value) {
            const octaves = utils.clamp(value, 0, 6, DEFAULT_PARAMS.octaves);
            if (this._octaves !== octaves) {
                this._octaves = octaves;

                uniforms.set_uniform(this, "octaves", this._octaves);
            }
        }

        get vapor_octaves() {
            return this._vapor_octaves;
        }

        set vapor_octaves(value) {
            const vapor_octaves = utils.clamp(value, 0, 6, DEFAULT_PARAMS.vapor_octaves);
            if (this._vapor_octaves !== vapor_octaves) {
                this._vapor_octaves = vapor_octaves;

                uniforms.set_uniform(this, "vapor_octaves", this._vapor_octaves);
            }
        }

        get vapor_speed() {
            return this._vapor_speed;
        }

        set vapor_speed(value) {
            const vapor_speed = utils.clamp(value, 0, 5, DEFAULT_PARAMS.vapor_speed);
            if (this._vapor_speed !== vapor_speed) {
                this._vapor_speed = vapor_speed;

                uniforms.set_uniform(this, "vapor_speed", parseFloat(this._vapor_speed));
            }
        }

        get grain() {
            return this._grain;
        }

        set grain(value) {
            const grain = utils.clamp(value, 0, 100, DEFAULT_PARAMS.grain);
            if (this._grain !== grain) {
                this._grain = grain;

                uniforms.set_uniform(this, "grain", parseFloat(this._grain / 100));
            }
        }

        get zoom() {
            return this._zoom;
        }

        set zoom(value) {
            const zoom = utils.clamp(value, 0.5, 2, DEFAULT_PARAMS.zoom);
            if (this._zoom !== zoom) {
                this._zoom = zoom;

                uniforms.set_uniform(this, "zoom", parseFloat(this._zoom));
            }
        }

        get dispersion() {
            return this._dispersion;
        }

        set dispersion(value) {
            const dispersion = utils.clamp(value, 0, 100, DEFAULT_PARAMS.dispersion);
            if (this._dispersion !== dispersion) {
                this._dispersion = dispersion;

                uniforms.set_uniform(this, "dispersion", parseFloat(this._dispersion / 100));
            }
        }

        get saturation() {
            return this._saturation;
        }

        set saturation(value) {
            const saturation = utils.clamp(value, 0, 2, DEFAULT_PARAMS.saturation);
            if (this._saturation !== saturation) {
                this._saturation = saturation;

                uniforms.set_uniform(this, "saturation", parseFloat(this._saturation));
            }
        }

        get brightness() {
            return this._brightness;
        }

        set brightness(value) {
            const brightness = utils.clamp(value, 0, 2, DEFAULT_PARAMS.brightness);
            if (this._brightness !== brightness) {
                this._brightness = brightness;

                uniforms.set_uniform(this, "brightness", parseFloat(this._brightness));
            }
        }

        get flow_animation_enabled() {
            return this._flow_animation_enabled;
        }

        set flow_animation_enabled(value) {
            const enabled = typeof value === "boolean" ?
                  value :
                  DEFAULT_PARAMS.flow_animation_enabled;
            if (this._flow_animation_enabled !== enabled) {
                this._flow_animation_enabled = enabled;

                this._flow_update_animation_state();
            }
        }

        get flow_speed_factor() {
            return this._flow_speed_factor;
        }

        set flow_speed_factor(value) {
            const flow_speed_factor = utils.clamp(value, 0, 5, DEFAULT_PARAMS.flow_speed_factor);
            if (this._flow_speed_factor !== flow_speed_factor) {
                this._flow_speed_factor = flow_speed_factor;

                this._flow_update_animation_state();
            }
        }

        _can_animate() {
            const actor = this.get_actor();

            return this.enabled &&
                   actor &&
                   actor.is_mapped() &&
                   actor.get_paint_opacity() !== 0;
        }

        _flow_update_animation_state() {
            const active =
                this._flow_animation_enabled &&
                this._flow_speed_factor !== 0 &&
                this._can_animate();

            if (active) {
                WaveTicker.add(this._flow_update_ref);
            } else {
                WaveTicker.remove(this._flow_update_ref);
            }
        }

        // Set directly on the pipeline cause going through uniforms.set_uniform
        // would mark all uniforms dirty and re-upload them every frame.
        _flow_upload_time_uniform() {
            const pipeline = this.get_pipeline();
            if (!pipeline || !this._flow_time_dirty) {
                return;
            }
        
            if (this._flow_time_location === undefined) {
                this._flow_time_location = pipeline.get_uniform_location("time");
            }
        
            pipeline.set_uniform_1f(this._flow_time_location, this._flow_time);
            this._flow_time_dirty = false;
        }

        _flow_animation_update(delta) {
            if (!this._can_animate()) {
                WaveTicker.remove(this._flow_update_ref);
                return;
            }

            this._flow_time = (this._flow_time + delta * TIME_FACTOR * this._flow_speed_factor) % TAU;
            this._flow_time_dirty = true;
            this.queue_repaint();
        }

        get resize_duration() {
            return this._resize_duration;
        }

        set resize_duration(value) {
            this._resize_duration = utils.clamp(value, 0, 10000, DEFAULT_PARAMS.resize_duration);
        }

        get surface_max_size() {
            return this._surface_max_size;
        }

        set surface_max_size(value) {
            const max_size = utils.clamp(value, 1, Number.MAX_SAFE_INTEGER, 1);
            if (this._surface_max_size !== max_size) {
                this._surface_max_size = max_size;

                uniforms.set_uniform(this, "surface_max_size", parseFloat(this._surface_max_size));
            }
        }

        _target_max_size() {
            const has_clip = this._clip_width > 0 && this._clip_height > 0;

            return has_clip ?
                   Math.max(this._clip_width, this._clip_height) :
                   Math.max(this._width, this._height);
        }

        _resize_animation_start() {
            WaveTicker.remove(this._resize_update_ref);

            const max_size = this._target_max_size();

            if (
                !this._can_animate() ||
                !this._resize_duration ||
                this.surface_max_size <= 1 ||
                this.surface_max_size === max_size
            ) {
                // Ensure max size is always updated before return
                this.surface_max_size = max_size;
                return;
            }

            // Let resize from use current max size for to avoid sudden jump
            // when animation is interrupted with new one
            this._resize_from = this.surface_max_size;
            this._resize_to = max_size;
            this._resize_elapsed = 0;

            WaveTicker.add(this._resize_update_ref);
        }

        _resize_animation_update(delta) {
            this._resize_elapsed += delta;
            const progress = Math.min(this._resize_elapsed / Math.max(this._resize_duration, 1), 1);
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

                uniforms.set_uniform(this, 'width', parseFloat(this._width));
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
            this._resize_animation_start();
        }

        vfunc_set_actor(actor) {
            super.vfunc_set_actor(actor);

            if (!actor) {
                WaveTicker.remove(this._flow_update_ref);
                WaveTicker.remove(this._resize_update_ref);
            }
        }

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);
            this._flow_upload_time_uniform();
            this._flow_update_animation_state();
            super.vfunc_paint_target(paint_node, paint_context);
        }
};

export const WaveEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : utils.register_shader_effect(WAVE_EFFECT_META, WaveEffectClass);