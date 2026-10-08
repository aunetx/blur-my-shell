import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';

import { Connections } from '../conveniences/connections.js';

const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

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
                `Wave fbm frequency`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                50.0,
            ),
            'amplitude': GObject.ParamSpec.double(
                `amplitude`,
                `Amplitude`,
                `Wave fbm amplitude`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                10.0,
            ),
            'octaves': GObject.ParamSpec.int(
                `octaves`,
                `Octaves`,
                `Wave fbm octave count`,
                GObject.ParamFlags.READWRITE,
                0, 6,
                2,
            ),
            'vapor_octaves': GObject.ParamSpec.int(
                `vapor_octaves`,
                `Vapor octaves`,
                `Vapor fbm octave count`,
                GObject.ParamFlags.READWRITE,
                0, 6,
                4,
            ),
            'vapor_speed': GObject.ParamSpec.double(
                `vapor_speed`,
                `Vapor speed`,
                `Speed of the vapor texture to drift`,
                GObject.ParamFlags.READWRITE,
                0.0, 5.0,
                1.5,
            ),
            'grain': GObject.ParamSpec.double(
                `grain`,
                `Grain`,
                `Fine grain noise added to the displacement`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                15.0,
            ),
            'zoom': GObject.ParamSpec.double(
                `zoom`,
                `Zoom`,
                `Zooms the backdrop toward the surface center`,
                GObject.ParamFlags.READWRITE,
                0.5, 2.0,
                1.0,
            ),
            'dispersion': GObject.ParamSpec.double(
                `dispersion`,
                `Dispersion`,
                `Chromatic aberration shift between the red and blue samples`,
                GObject.ParamFlags.READWRITE,
                0.0, 100.0,
                20.0,
            ),
            'saturation': GObject.ParamSpec.double(
                `saturation`,
                `Saturation`,
                `Final color saturation amount`,
                GObject.ParamFlags.READWRITE,
                0.0, 2.0,
                1.0,
            ),
            'brightness': GObject.ParamSpec.double(
                `brightness`,
                `Brightness`,
                `Final color brightness multiplier`,
                GObject.ParamFlags.READWRITE,
                0.0, 2.0,
                1.0,
            ),
            'flow_animation_enabled': GObject.ParamSpec.boolean(
                `flow_animation_enabled`,
                `Flow animation enabled`,
                `Enable the flow animation`,
                GObject.ParamFlags.READWRITE,
                true,
            ),
            'flow_speed_factor': GObject.ParamSpec.double(
                `flow_speed_factor`,
                `Flow speed factor`,
                `Overall flow speed of the wave and vapor animation`,
                GObject.ParamFlags.READWRITE,
                0.0, 5.0,
                0.5,
            ),
            'resize_duration': GObject.ParamSpec.int(
                `resize_duration`,
                `Resize duration`,
                `Width and height ease duration on resize, in milliseconds`,
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

class WaveTicker {
    static tasks = new Set();
    static timeline = null;

    static add(task) {
        this.tasks.add(task);

        if (this.timeline) {
            return;
        }

        this.timeline = new Clutter.Timeline({
            actor: global.stage,
            duration: 5000,
            repeat_count: -1
        });

        this.timeline.connect('new-frame', timeline => {
            const delta = timeline.get_delta();
            for (const tick of this.tasks) {
                tick(delta);
            }
        });

        this.timeline.start();
    }

    static remove(task) {
        if (!this.tasks.delete(task) || this.tasks.size > 0) {
            return;
        }

        this.timeline.stop();
        this.timeline = null;
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
            this._flow_uploaded_time = 0;
            this._resize_from = 0;
            this._resize_to = 0;
            this._resize_elapsed = 0;
            this._surface_max_size = 0;
            this._uploaded_surface_max_size = 0;
            this._flow_update_ref = this._flow_animation_update.bind(this);
            this._resize_update_ref = this._resize_animation_update.bind(this);
            this._ancestor_connections = new Connections();
            this._current_pipeline = null;

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
            const octaves = utils.clamp_integer(value, 0, 6, DEFAULT_PARAMS.octaves);
            if (this._octaves !== octaves) {
                this._octaves = octaves;

                uniforms.set_uniform(this, "octaves", this._octaves);
            }
        }

        get vapor_octaves() {
            return this._vapor_octaves;
        }

        set vapor_octaves(value) {
            const vapor_octaves = utils.clamp_integer(value, 0, 6, DEFAULT_PARAMS.vapor_octaves);
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

            return actor &&
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

        _flow_animation_update(delta) {
            this._flow_time = (this._flow_time + delta * TIME_FACTOR * this._flow_speed_factor) % TAU;
            this.queue_repaint();
        }

        get resize_duration() {
            return this._resize_duration;
        }

        set resize_duration(value) {
            this._resize_duration = utils.clamp_integer(value, 0, 10000, DEFAULT_PARAMS.resize_duration);
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
                this._surface_max_size <= 1 ||
                this._surface_max_size === max_size
            ) {
                this._surface_max_size = max_size;
                return;
            }

            this._resize_from = this._surface_max_size;
            this._resize_to = max_size;
            this._resize_elapsed = 0;

            WaveTicker.add(this._resize_update_ref);
        }

        _resize_animation_update(delta) {
            this._resize_elapsed += delta;
            const progress = Math.min(this._resize_elapsed / Math.max(this._resize_duration, 1), 1);
            const eased_progress = 1 - (1 - progress) ** 3;

            this._surface_max_size = lerp(this._resize_from, this._resize_to, eased_progress);

            if (progress >= 1 || !this._can_animate()) {
                this._surface_max_size = this._resize_to;
                WaveTicker.remove(this._resize_update_ref);
            }

            this.queue_repaint();
        }

        // Set directly on the pipeline because going through uniforms.set_uniform
        // would mark all uniforms dirty and re-upload them every frame.
        _upload_animated_uniform() {
            const pipeline = this.get_pipeline();
            const pipeline_changed = this._current_pipeline !== pipeline;

            if (pipeline_changed) {
                this._time_location = pipeline.get_uniform_location('time');
                this._surface_max_size_location = pipeline.get_uniform_location('surface_max_size');
            }

            if (pipeline_changed || this._flow_uploaded_time !== this._flow_time) {
                pipeline.set_uniform_1f(this._time_location, this._flow_time);
                this._flow_uploaded_time = this._flow_time;
            }

            if (pipeline_changed || this._uploaded_surface_max_size !== this._surface_max_size) {
                pipeline.set_uniform_1f(this._surface_max_size_location, this._surface_max_size);
                this._uploaded_surface_max_size = this._surface_max_size;
            }

            this._current_pipeline = pipeline;
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
            const clip = Array.isArray(value)
                && value.length === 4
                && value.every(Number.isFinite)
                ? value
                : DEFAULT_PARAMS.clip;
            [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height] = clip;
            uniforms.set_uniform(this, 'clip_x0', parseFloat(this._clip_x0 - 1e-6));
            uniforms.set_uniform(this, 'clip_y0', parseFloat(this._clip_y0 - 1e-6));
            uniforms.set_uniform(this, 'clip_width', parseFloat(this._clip_width <= 0 ? -1 : this._clip_width));
            uniforms.set_uniform(this, 'clip_height', parseFloat(this._clip_height <= 0 ? -1 : this._clip_height));
            this._resize_animation_start();
        }

        _watch_ancestors() {
            this._flow_update_animation_state();
            this._ancestor_connections.disconnect_all();
            for (let actor = this.get_actor(); actor; actor = actor.get_parent()) {
                this._ancestor_connections.connect(actor, ['notify::opacity', 'notify::mapped'],
                    () => this._flow_update_animation_state());
                this._ancestor_connections.connect(actor, 'parent-set', () => this._watch_ancestors());
            }
        }

        vfunc_set_actor(actor) {
            super.vfunc_set_actor(actor);

            if (!actor) {
                WaveTicker.remove(this._flow_update_ref);
                WaveTicker.remove(this._resize_update_ref);
                this._ancestor_connections.disconnect_all();
            } else {
                this._watch_ancestors();
            }
        }

        vfunc_paint_target(paint_node, paint_context) {
            uniforms.upload_uniforms(this);
            this._upload_animated_uniform();
            super.vfunc_paint_target(paint_node, paint_context);
        }
};

export const WaveEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : GObject.registerClass(WAVE_EFFECT_META, WaveEffectClass);
