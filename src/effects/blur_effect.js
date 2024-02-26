import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';
import Shell from 'gi://Shell';

const SHADER_PATH = GLib.filename_from_uri(GLib.uri_resolve_relative(import.meta.url, 'blur_effect.glsl', GLib.UriFlags.NONE))[0];


const get_shader_source = _ => {
    try {
        return Shell.get_file_contents_utf8_sync(SHADER_PATH);
    } catch (e) {
        console.warn(`[Blur my Shell] error loading shader from ${SHADER_PATH}: ${e}`);
        return null;
    }
};

export const BlurEffect = new GObject.registerClass({
    GTypeName: "BlurEffect",
    Properties: {
        'width': GObject.ParamSpec.double(
            `width`,
            `Width`,
            `Actor width`,
            GObject.ParamFlags.READWRITE,
            0.0, Number.MAX_SAFE_INTEGER,
            0.0,
        ),
        'height': GObject.ParamSpec.double(
            `height`,
            `Height`,
            `Actor height`,
            GObject.ParamFlags.READWRITE,
            0.0, Number.MAX_SAFE_INTEGER,
            0.0,
        ),
        'sigma': GObject.ParamSpec.double(
            `sigma`,
            `sigma`,
            `Blur sigma`,
            GObject.ParamFlags.READWRITE,
            0.0, 2000.0,
            200.0,
        ),
        'brightness': GObject.ParamSpec.double(
            `brightness`,
            `Brightness`,
            `Blur brightness`,
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            0.6,
        ),
        'direction': GObject.ParamSpec.double(
            `direction`,
            `Direction`,
            `Blur direction`,
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            0.0,
        ),
    }
}, class BlurEffect extends Clutter.ShaderEffect {
    constructor(params, settings) {
        super(params);

        this._width = null;
        this._height = null;
        this._sigma = null;
        this._brightness = null;
        this._direction = null;

        this._static = true;
        this._settings = settings;

        if (params.width)
            this.width = params.width;
        if (params.height)
            this.height = params.height;
        if (params.sigma)
            this.sigma = params.sigma;
        if (params.brightness)
            this.brightness = params.brightness;
        if (params.direction)
            this.direction = params.direction;

        // set shader source
        this._source = get_shader_source();
        if (this._source)
            this.set_shader_source(this._source);
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (this._width !== value) {
            this._width = value;

            this.set_uniform_value('width', this._width);
        }
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (this._height !== value) {
            this._height = value;

            this.set_uniform_value('height', this._height);
        }
    }

    get sigma() {
        return this._sigma;
    }

    set sigma(value) {
        value = 30 * value / 200;
        if (this._sigma !== value) {
            this.set_enabled(
                value > 0
            );

            this._sigma = value;

            this.set_uniform_value('radius', parseFloat(this._sigma - 1e-6));
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

    get direction() {
        return this._direction;
    }

    set direction(value) {
        if (this._direction !== value) {
            this._direction = value;

            this.set_uniform_value('dir', this._direction);
        }
    }


    vfunc_paint_target(paint_node = null, paint_context = null) {
        this.set_uniform_value("tex", 0);

        if (paint_node && paint_context)
            super.vfunc_paint_target(paint_node, paint_context);
        else if (paint_node)
            super.vfunc_paint_target(paint_node);
        else
            super.vfunc_paint_target();
    }
});