import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');

const SHADER_FILENAME = 'downscale.glsl';
const DEFAULT_PARAMS = {
    divider: 8, downsampling_mode: 0, width: 0, height: 0
};


export const DownscaleEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "DownscaleEffect",
        Properties: {
            'divider': GObject.ParamSpec.int(
                `divider`,
                `Divider`,
                `Divider`,
                GObject.ParamFlags.READWRITE,
                0, 64,
                8,
            ),
            'downsampling_mode': GObject.ParamSpec.int(
                `downsampling_mode`,
                `Downsampling mode`,
                `Downsampling mode`,
                GObject.ParamFlags.READWRITE,
                0, 2,
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
            )
        }
    }, class DownscaleEffect extends Clutter.ShaderEffect {
        constructor(params) {
            super(params);

            utils.setup_params(this, params);

            // set shader source
            this._source = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
            if (this._source)
                this.set_shader_source(this._source);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get divider() {
            return this._divider;
        }

        set divider(value) {
            if (this._divider !== value) {
                this._divider = value;

                this.set_uniform_value('divider', this._divider);
            }
        }

        get downsampling_mode() {
            return this._downsampling_mode;
        }

        set downsampling_mode(value) {
            if (this._downsampling_mode !== value) {
                this._downsampling_mode = value;

                this.set_uniform_value('downsampling_mode', this._downsampling_mode);
            }
        }

        get width() {
            return this._width;
        }

        set width(value) {
            if (this._width !== value) {
                this._width = value;

                this.set_uniform_value('width', parseFloat(this._width - 1e-6));
            }
        }

        get height() {
            return this._height;
        }

        set height(value) {
            if (this._height !== value) {
                this._height = value;

                this.set_uniform_value('height', parseFloat(this._height - 1e-6));
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

        vfunc_paint_target(paint_node, paint_context) {
            // force setting nearest-neighbour texture filtering
            this.get_pipeline().set_layer_filters(0, 9728, 9728);

            super.vfunc_paint_target(paint_node, paint_context);
        }
    });