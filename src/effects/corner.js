import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';

import * as utils from '../conveniences/utils.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');
const SHADER_FILENAME = 'corner.glsl';


export const CornerEffect = new GObject.registerClass({
    GTypeName: "CornerEffect",
    Properties: {
        'radius': GObject.ParamSpec.double(
            `radius`,
            `Corner Radius`,
            `Corner Radius`,
            GObject.ParamFlags.READWRITE,
            0, Number.MAX_SAFE_INTEGER,
            12,
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

        this.radius = 'radius' in params ? params.radius : this.constructor.default_params.radius;
        this.width = 'width' in params ? params.width : this.constructor.default_params.width;
        this.height = 'height' in params ? params.height : this.constructor.default_params.height;

        // set shader source
        this._source = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
        if (this._source)
            this.set_shader_source(this._source);

        const theme_context = St.ThemeContext.get_for_stage(global.stage);
        theme_context.connectObject('notify::scale-factor', _ => this.update_radius(), this);
    }

    static get default_params() {
        return { radius: 12, width: 0, height: 0 };
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