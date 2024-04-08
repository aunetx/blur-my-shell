import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';

import * as utils from '../conveniences/utils.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const SHADER_FILENAME = 'pixelize.glsl';


export const PixelizeEffect = new GObject.registerClass({
    GTypeName: "PixelizeEffect",
    Properties: {
        'divider': GObject.ParamSpec.int(
            `divider`,
            `Divider`,
            `Divider`,
            GObject.ParamFlags.READWRITE,
            0, 64,
            5,
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
        )
    }
}, class PixelizeEffect extends Clutter.ShaderEffect {
    constructor(params) {
        super(params);

        this._divider = null;
        this._width = null;
        this._height = null;

        this.divider = 'divider' in params ? params.divider : this.constructor.default_params.divider;
        this.width = 'width' in params ? params.width : this.constructor.default_params.width;
        this.height = 'height' in params ? params.height : this.constructor.default_params.height;

        // set shader source
        this._source = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
        if (this._source)
            this.set_shader_source(this._source);
    }

    static get default_params() {
        return { divider: 8, width: 0, height: 0 };
    }

    get divider() {
        return this._width;
    }

    set divider(value) {
        if (this._divider !== value) {
            this._divider = value;

            this.set_uniform_value('divider', this._divider);
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