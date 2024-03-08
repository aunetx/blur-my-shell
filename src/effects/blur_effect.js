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
        'radius': GObject.ParamSpec.double(
            `radius`,
            `Radius`,
            `Blur radius`,
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
        'corner_radius': GObject.ParamSpec.double(
            `corner_radius`,
            `Corner Radius`,
            `Corner Radius`,
            GObject.ParamFlags.READWRITE,
            0, Number.MAX_SAFE_INTEGER,
            0,
        ),
        'direction': GObject.ParamSpec.int(
            `direction`,
            `Direction`,
            `Direction`,
            GObject.ParamFlags.READWRITE,
            0, 1,
            0,
        ),
        'chained_effect': GObject.ParamSpec.object(
            `chained_effect`,
            `Chained Effect`,
            `Chained Effect`,
            GObject.ParamFlags.READABLE,
            GObject.Object,
        ),
    }
}, class BlurEffect extends Clutter.ShaderEffect {
    constructor(params, settings) {
        super(params);

        this._sigma = null;
        this._brightness = null;
        this._width = null;
        this._height = null;
        this._corner_radius = null;

        this._static = true;
        this._settings = settings;

        this._direction = 0;

        this._chained_effect = null;

        if (params.sigma)
            this.sigma = params.sigma;
        if (params.brightness)
            this.brightness = params.brightness;
        if (params.width)
            this.width = params.width;
        if (params.height)
            this.height = params.height;
        if (params.corner_radius)
            this.corner_radius = params.corner_radius;
        if (params.direction)
            this.direction = params.direction;

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

            // like Clutter, we use the assumption radius = 2*sigma
            this.set_uniform_value('sigma', parseFloat(this._radius / 2 - 1e-6));

            if (this._chained_effect) {
                this._chained_effect.radius = value;
            }
        }
    }

    get brightness() {
        return this._brightness;
    }

    set brightness(value) {
        if (this._brightness !== value) {
            this._brightness = value;

            this.set_uniform_value('brightness', parseFloat(this._brightness - 1e-6));

            if (this._chained_effect) {
                this._chained_effect.brightness = value;
            }
        }
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (this._width !== value) {
            this._width = value;

            this.set_uniform_value('width', parseFloat(this._width + 3.0 - 1e-6));

            if (this._chained_effect) {
                this._chained_effect.width = value;
            }
        }
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (this._height !== value) {
            this._height = value;

            this.set_uniform_value('height', parseFloat(this._height + 3.0 - 1e-6));

            if (this._chained_effect) {
                this._chained_effect.height = value;
            }
        }
    }

    get corner_radius() {
        return this._corner_radius;
    }

    set corner_radius(value) {
        if (this._corner_radius !== value) {
            this._corner_radius = value;

            this.set_uniform_value('corner_radius', parseFloat(this._corner_radius - 1e-6));

            if (this._chained_effect) {
                this._chained_effect.corner_radius = value;
            }
        }
    }

    get direction() {
        return this._direction;
    }

    set direction(value) {
        if (this._direction !== value) {
            this._direction = value;
        }
    }

    get chained_effect() {
        return this._chained_effect;
    }

    vfunc_set_actor(actor) {
        super.vfunc_set_actor(actor);

        if (this._direction == 0) {
            this._chained_effect = new BlurEffect({
                radius: this.radius,
                brightness: this.brightness,
                width: this.width,
                height: this.height,
                corner_radius: this.corner_radius,
                direction: 1
            });
            if(actor !== null)
                actor.add_effect(this._chained_effect);
        }
    }

    vfunc_paint_target(paint_node = null, paint_context = null) {
        this.set_uniform_value("tex", 0);
        this.set_uniform_value("dir", this._direction);

        if (paint_node && paint_context)
            super.vfunc_paint_target(paint_node, paint_context);
        else if (paint_node)
            super.vfunc_paint_target(paint_node);
        else
            super.vfunc_paint_target();
    }
});