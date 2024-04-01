import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';
import Shell from 'gi://Shell';
import St from 'gi://St';

const SHADER_PATH = GLib.filename_from_uri(GLib.uri_resolve_relative(import.meta.url, 'gaussian_blur.glsl', GLib.UriFlags.NONE))[0];


const get_shader_source = _ => {
    try {
        return Shell.get_file_contents_utf8_sync(SHADER_PATH);
    } catch (e) {
        console.warn(`[Blur my Shell] error loading shader from ${SHADER_PATH}: ${e}`);
        return null;
    }
};

export const GaussianBlurEffect = new GObject.registerClass({
    GTypeName: "GaussianBlurEffect",
    Properties: {
        'radius': GObject.ParamSpec.double(
            `radius`,
            `Radius`,
            `Blur radius`,
            GObject.ParamFlags.READWRITE,
            0.0, 2000.0,
            30.0,
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
}, class GaussianBlurEffect extends Clutter.ShaderEffect {
    constructor(params) {
        super(params);

        this._radius = null;
        this._brightness = null;
        this._width = null;
        this._height = null;
        this._direction = null;

        this._chained_effect = null;

        this.radius = 'radius' in params ? params.radius : this.default_params.radius;
        this.brightness = 'brightness' in params ? params.brightness : this.default_params.brightness;
        this.width = 'width' in params ? params.width : this.default_params.width;
        this.height = 'height' in params ? params.height : this.default_params.height;
        this.direction = 'direction' in params ? params.direction : this.default_params.direction;

        // set shader source
        this._source = get_shader_source();
        if (this._source)
            this.set_shader_source(this._source);

        const theme_context = St.ThemeContext.get_for_stage(global.stage);
        theme_context.connectObject(
            'notify::scale-factor', _ =>
            this.set_uniform_value('sigma',
                parseFloat(this.radius * theme_context.scale_factor / 2 - 1e-6)
            ),
            this
        );
    }

    get default_params() {
        return { radius: 30, brightness: .6, width: 0, height: 0, direction: 0 };
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (this._radius !== value) {
            this._radius = value;

            const scale_factor = St.ThemeContext.get_for_stage(global.stage).scale_factor;

            // like Clutter, we use the assumption radius = 2*sigma
            this.set_uniform_value('sigma', parseFloat(this._radius * scale_factor / 2 - 1e-6));
            this.set_enabled(this.radius > 0.);

            if (this._chained_effect)
                this._chained_effect.radius = value;
        }
    }

    get brightness() {
        return this._brightness;
    }

    set brightness(value) {
        if (this._brightness !== value) {
            this._brightness = value;

            this.set_uniform_value('brightness', parseFloat(this._brightness - 1e-6));

            if (this._chained_effect)
                this._chained_effect.brightness = value;
        }
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (this._width !== value) {
            this._width = value;

            this.set_uniform_value('width', parseFloat(this._width + 4.0 - 1e-6));

            if (this._chained_effect)
                this._chained_effect.width = value;
        }
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (this._height !== value) {
            this._height = value;

            this.set_uniform_value('height', parseFloat(this._height + 4.0 - 1e-6));

            if (this._chained_effect)
                this._chained_effect.height = value;
        }
    }

    get direction() {
        return this._direction;
    }

    set direction(value) {
        if (this._direction !== value)
            this._direction = value;
    }

    get chained_effect() {
        return this._chained_effect;
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
        else
            this._actor_connection_size_id = null;

        super.vfunc_set_actor(actor);

        if (this.direction == 0) {
            if (this.chained_effect)
                this._chained_effect.get_actor()?.remove_effect(this._chained_effect);
            else
                this._chained_effect = new GaussianBlurEffect({
                    radius: this.radius,
                    brightness: this.brightness,
                    width: this.width,
                    height: this.height,
                    direction: 1
                });
            if (actor !== null)
                actor.add_effect(this._chained_effect);
        }
    }

    vfunc_paint_target(paint_node = null, paint_context = null) {
        //this.set_uniform_value("tex", 0);
        this.set_uniform_value("dir", this._direction);

        if (paint_node && paint_context)
            super.vfunc_paint_target(paint_node, paint_context);
        else if (paint_node)
            super.vfunc_paint_target(paint_node);
        else
            super.vfunc_paint_target();
    }
});