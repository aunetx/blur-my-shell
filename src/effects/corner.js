import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';
import Shell from 'gi://Shell';
import St from 'gi://St';

const SHADER_PATH = GLib.filename_from_uri(GLib.uri_resolve_relative(import.meta.url, 'corner.glsl', GLib.UriFlags.NONE))[0];


const get_shader_source = _ => {
    try {
        return Shell.get_file_contents_utf8_sync(SHADER_PATH);
    } catch (e) {
        console.warn(`[Blur my Shell] error loading shader from ${SHADER_PATH}: ${e}`);
        return null;
    }
};

export const CornerEffect = new GObject.registerClass({
    GTypeName: "CornerEffect",
    Properties: {
        'radius': GObject.ParamSpec.double(
            `radius`,
            `Corner Radius`,
            `Corner Radius`,
            GObject.ParamFlags.READWRITE,
            0, Number.MAX_SAFE_INTEGER,
            0,
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
}, class CornerEffect extends Clutter.ShaderEffect {
    constructor(params) {
        super(params);

        this._radius = null;
        this._width = null;
        this._height = null;

        this._direction = 0;

        this._chained_effect = null;

        if (params.radius)
            this.radius = params.radius;
        if (params.width)
            this.width = params.width;
        if (params.height)
            this.height = params.height;

        // set shader source
        this._source = get_shader_source();
        if (this._source)
            this.set_shader_source(this._source);

        const theme_context = St.ThemeContext.get_for_stage(global.stage);
        theme_context.connectObject('notify::scale-factor', _ => this.update_radius(), this);
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
        const theme_context = St.ThemeContext.get_for_stage(global.stage);
        const radius = Math.min(
            this.radius * theme_context.scale_factor, this.width / 2, this.height / 2
        );
        this.set_uniform_value('radius', parseFloat(radius - 1e-6));
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (this._width !== value) {
            this._width = value;

            this.set_uniform_value('width', parseFloat(this._width + 3.0 - 1e-6));
            this.update_radius();
        }
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (this._height !== value) {
            this._height = value;

            this.set_uniform_value('height', parseFloat(this._height + 3.0 - 1e-6));
            this.update_radius();
        }
    }

    vfunc_set_actor(actor) {
        if (this._actor_connection_size_id) {
            let old_actor = this.get_actor();
            old_actor?.disconnect(this._actor_connection_id);
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
    }

    vfunc_paint_target(paint_node = null, paint_context = null) {
        //this.set_uniform_value("tex", 0);

        if (paint_node && paint_context)
            super.vfunc_paint_target(paint_node, paint_context);
        else if (paint_node)
            super.vfunc_paint_target(paint_node);
        else
            super.vfunc_paint_target();
    }
});