import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';
import Shell from 'gi://Shell';

const SHADER_PATH = GLib.filename_from_uri(GLib.uri_resolve_relative(import.meta.url, 'monte_carlo_blur.glsl', GLib.UriFlags.NONE))[0];


const get_shader_source = _ => {
    try {
        return Shell.get_file_contents_utf8_sync(SHADER_PATH);
    } catch (e) {
        console.warn(`[Blur my Shell] error loading shader from ${SHADER_PATH}: ${e}`);
        return null;
    }
};

export const MonteCarloBlurEffect = new GObject.registerClass({
    GTypeName: "MonteCarloBlurEffect",
    Properties: {
        'radius': GObject.ParamSpec.double(
            `radius`,
            `Radius`,
            `Blur radius`,
            GObject.ParamFlags.READWRITE,
            0.0, 2000.0,
            200.0,
        ),
        'iterations': GObject.ParamSpec.int(
            `iterations`,
            `Iterations`,
            `Blur iterations`,
            GObject.ParamFlags.READWRITE,
            0, 64,
            16,
        ),
        'brightness': GObject.ParamSpec.double(
            `brightness`,
            `Brightness`,
            `Blur brightness`,
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            0.6,
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
        'use_base_pixel': GObject.ParamSpec.boolean(
            `use_base_pixel`,
            `Use base pixel`,
            `Use base pixel`,
            GObject.ParamFlags.READWRITE,
            false,
        ),
    }
}, class MonteCarloBlurEffect extends Clutter.ShaderEffect {
    constructor(params, settings) {
        super(params);

        this._sigma = null;
        this._iterations = null;
        this._brightness = null;
        this._width = null;
        this._height = null;
        this._use_base_pixel = null;

        this._settings = settings;

        if (params.sigma)
            this.sigma = params.sigma;
        if (params.iterations)
            this.iterations = params.iterations;
        if (params.brightness)
            this.brightness = params.brightness;
        if (params.width)
            this.width = params.width;
        if (params.height)
            this.height = params.height;
        if (params.use_base_pixel)
            this.use_base_pixel = params.use_base_pixel;

        // set shader source
        this._source = get_shader_source();
        if (this._source)
            this.set_shader_source(this._source);
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (this._radius !== value) {
            this._radius = value;

            this.set_uniform_value('radius', parseFloat(this._radius - 1e-6));
        }
    }

    get iterations() {
        return this._iterations;
    }

    set iterations(value) {
        if (this._iterations !== value) {
            this._iterations = value;

            this.set_uniform_value('iterations', this._iterations);
        }
    }

    get brightness() {
        return this._brightness;
    }

    set brightness(value) {
        if (this._brightness !== value) {
            this._brightness = value;

            this.set_uniform_value('brightness', parseFloat(this._brightness - 1e-6));
        }
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (this._width !== value) {
            this._width = value;

            this.set_uniform_value('width', parseFloat(this._width + 3.0 - 1e-6));
        }
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (this._height !== value) {
            this._height = value;

            this.set_uniform_value('height', parseFloat(this._height + 3.0 - 1e-6));
        }
    }

    get use_base_pixel() {
        return this._use_base_pixel;
    }

    set use_base_pixel(value) {
        if (this._use_base_pixel !== value) {
            this._use_base_pixel = value;

            this.set_uniform_value('use_base_pixel', this._use_base_pixel ? 1 : 0);
        }
    }

    vfunc_paint_target(paint_node = null, paint_context = null) {
        this.set_uniform_value("tex", 0);
        log("repainted");

        if (paint_node && paint_context)
            super.vfunc_paint_target(paint_node, paint_context);
        else if (paint_node)
            super.vfunc_paint_target(paint_node);
        else
            super.vfunc_paint_target();
    }
});