import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import * as uniforms from '../conveniences/shader_uniforms.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');
const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');

const SHADER_FILENAME = 'corner.glsl';
const DEFAULT_PARAMS = {
    radius: 12, width: 0, height: 0,
    corners_top: true, corners_bottom: true,
    clip: [0, 0, -1, -1]
};


export const CornerEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    (() => {
        const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
        const SHADER_SNIPPET = utils.create_shader_snippet_for_source(Clutter, Cogl, SHADER_SOURCE);
        const gtype_spec = {
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
            'corners_top': GObject.ParamSpec.boolean(
                `corners_top`,
                `Round top corners`,
                `Round top corners`,
                GObject.ParamFlags.READWRITE,
                true,
            ),
            'corners_bottom': GObject.ParamSpec.boolean(
                `corners_bottom`,
                `Round bottom corners`,
                `Round bottom corners`,
                GObject.ParamFlags.READWRITE,
                true,
            ),
        }
    };

        if (utils.uses_shader_snippets(Clutter)) {
            class CornerEffect extends Clutter.ShaderEffect {
                vfunc_get_static_snippet() {
                    return SHADER_SNIPPET;
                }


                    constructor(params) {
                        super();

                        this._clip_x0 = null;
                        this._clip_y0 = null;
                        this._clip_width = null;
                        this._clip_height = null;
                        this._actor_connection_actor = null;
                        this._actor_connection_size_id = 0;
                        this._actor_connection_allocation_id = 0;
                        this._actor_connection_clip_rect_id = 0;
                        this._actor_connection_destroy_id = 0;

                        utils.setup_params(this, params);
                        this.straight_corners = false;

                        const theme_context = St.ThemeContext.get_for_stage(global.stage);
                        theme_context.connectObject('notify::scale-factor', _ => this.update_radius(), this);
                    }

                    static get default_params() {
                        return DEFAULT_PARAMS;
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
                        let radius = this.radius * theme_context.scale_factor;
                        if (this._clip_width > 0 || this._clip_height > 0)
                            radius = Math.min(radius, this._clip_width / 2, this._clip_height / 2);

                        uniforms.set_uniform(this, 'radius', parseFloat(radius - 1e-6));
                    }

                    get width() {
                        return this._width;
                    }

                    set width(value) {
                        const v = Math.max(1, value || 1);
                        if (this._width !== v) {
                            this._width = v;

                            uniforms.set_uniform(this, 'width', parseFloat(this._width + 3.0 - 1e-6));
                            this.update_radius();
                        }
                    }

                    get height() {
                        return this._height;
                    }

                    set height(value) {
                        const v = Math.max(1, value || 1);
                        if (this._height !== v) {
                            this._height = v;

                            uniforms.set_uniform(this, 'height', parseFloat(this._height + 3.0 - 1e-6));
                            this.update_radius();
                        }
                    }

                    get corners_top() {
                        return this._corners_top;
                    }

                    set corners_top(value) {
                        if (this._corners_top !== value) {
                            this._corners_top = value;

                            uniforms.set_uniform(this, 'corners_top', this._corners_top ? 1 : 0);
                        }
                    }

                    get corners_bottom() {
                        return this._corners_bottom;
                    }

                    set corners_bottom(value) {
                        if (this._corners_bottom !== value) {
                            this._corners_bottom = value;

                            uniforms.set_uniform(this, 'corners_bottom', this._corners_bottom ? 1 : 0);
                        }
                    }

                    get straight_corners() {
                        return this._straight_corners;
                    }

                    set straight_corners(value) {
                        if (this._straight_corners !== value) {
                            this._straight_corners = value;

                            uniforms.set_uniform(this, 'straight_corners', this._straight_corners ? 1 : 0);
                        }
                    }

                    get clip() {
                        return [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height];
                    }

                    set clip(value) {
                        const [clip_x0, clip_y0, clip_width, clip_height] = value;
                        if (
                            this._clip_x0 === clip_x0
                            && this._clip_y0 === clip_y0
                            && this._clip_width === clip_width
                            && this._clip_height === clip_height
                        )
                            return;

                        [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height] = [clip_x0, clip_y0, clip_width, clip_height];
                        uniforms.set_uniform(this, 'clip_x0', parseFloat(this._clip_x0 - 1e-6));
                        uniforms.set_uniform(this, 'clip_y0', parseFloat(this._clip_y0 - 1e-6));
                        uniforms.set_uniform(this, 'clip_width', parseFloat(this._clip_width <= 0 ? -1 : this._clip_width + 3 - 1e-6));
                        uniforms.set_uniform(this, 'clip_height', parseFloat(this._clip_height <= 0 ? -1 : this._clip_height + 3 - 1e-6));
                        this.update_radius();
                    }

                    update_actor_geometry(actor = this.get_actor?.()) {
                        if (!actor)
                            return;

                        this.width = actor.width;
                        this.height = actor.height;
                        this.clip = actor.has_clip ? actor.get_clip() : [0, 0, -10, -10];
                    }

                    disconnect_actor_signals() {
                        const actor = this._actor_connection_actor;
                        [
                            this._actor_connection_size_id,
                            this._actor_connection_allocation_id,
                            this._actor_connection_clip_rect_id,
                            this._actor_connection_destroy_id,
                        ].forEach(id => {
                            if (!actor || !id)
                                return;
                            try { actor.disconnect(id); } catch (e) { }
                        });

                        this._actor_connection_actor = null;
                        this._actor_connection_size_id = 0;
                        this._actor_connection_allocation_id = 0;
                        this._actor_connection_clip_rect_id = 0;
                        this._actor_connection_destroy_id = 0;
                    }

                    connect_actor_signals(actor) {
                        if (!actor)
                            return;

                        this._actor_connection_actor = actor;
                        this.update_actor_geometry(actor);
                        this._actor_connection_size_id = actor.connect('notify::size', _ => this.update_actor_geometry(actor));
                        this._actor_connection_allocation_id = actor.connect('notify::allocation', _ => this.update_actor_geometry(actor));
                        this._actor_connection_clip_rect_id = actor.connect('notify::clip-rect', _ => this.update_actor_geometry(actor));
                        this._actor_connection_destroy_id = actor.connect('destroy', () => {
                            this._actor_connection_actor = null;
                            this._actor_connection_size_id = 0;
                            this._actor_connection_allocation_id = 0;
                            this._actor_connection_clip_rect_id = 0;
                            this._actor_connection_destroy_id = 0;
                        });
                    }

                    vfunc_set_actor(actor) {
                        this.disconnect_actor_signals();
                        this.connect_actor_signals(actor);
                        super.vfunc_set_actor(actor);
                    }

                    vfunc_paint_target(paint_node, paint_context) {
                        this.update_actor_geometry();
                        uniforms.upload_uniforms(this);
                        super.vfunc_paint_target(paint_node, paint_context);
                    }

            }
            return GObject.registerClass(gtype_spec, CornerEffect);
        }

        class CornerEffect extends Clutter.ShaderEffect {
            vfunc_get_static_shader_source() {
                return SHADER_SOURCE;
            }


                    constructor(params) {
                        super();

                        this._clip_x0 = null;
                        this._clip_y0 = null;
                        this._clip_width = null;
                        this._clip_height = null;
                        this._actor_connection_actor = null;
                        this._actor_connection_size_id = 0;
                        this._actor_connection_allocation_id = 0;
                        this._actor_connection_clip_rect_id = 0;
                        this._actor_connection_destroy_id = 0;

                        utils.setup_params(this, params);
                        this.straight_corners = false;

                        const theme_context = St.ThemeContext.get_for_stage(global.stage);
                        theme_context.connectObject('notify::scale-factor', _ => this.update_radius(), this);
                    }

                    static get default_params() {
                        return DEFAULT_PARAMS;
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
                        let radius = this.radius * theme_context.scale_factor;
                        if (this._clip_width > 0 || this._clip_height > 0)
                            radius = Math.min(radius, this._clip_width / 2, this._clip_height / 2);

                        uniforms.set_uniform(this, 'radius', parseFloat(radius - 1e-6));
                    }

                    get width() {
                        return this._width;
                    }

                    set width(value) {
                        const v = Math.max(1, value || 1);
                        if (this._width !== v) {
                            this._width = v;

                            uniforms.set_uniform(this, 'width', parseFloat(this._width + 3.0 - 1e-6));
                            this.update_radius();
                        }
                    }

                    get height() {
                        return this._height;
                    }

                    set height(value) {
                        const v = Math.max(1, value || 1);
                        if (this._height !== v) {
                            this._height = v;

                            uniforms.set_uniform(this, 'height', parseFloat(this._height + 3.0 - 1e-6));
                            this.update_radius();
                        }
                    }

                    get corners_top() {
                        return this._corners_top;
                    }

                    set corners_top(value) {
                        if (this._corners_top !== value) {
                            this._corners_top = value;

                            uniforms.set_uniform(this, 'corners_top', this._corners_top ? 1 : 0);
                        }
                    }

                    get corners_bottom() {
                        return this._corners_bottom;
                    }

                    set corners_bottom(value) {
                        if (this._corners_bottom !== value) {
                            this._corners_bottom = value;

                            uniforms.set_uniform(this, 'corners_bottom', this._corners_bottom ? 1 : 0);
                        }
                    }

                    get straight_corners() {
                        return this._straight_corners;
                    }

                    set straight_corners(value) {
                        if (this._straight_corners !== value) {
                            this._straight_corners = value;

                            uniforms.set_uniform(this, 'straight_corners', this._straight_corners ? 1 : 0);
                        }
                    }

                    get clip() {
                        return [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height];
                    }

                    set clip(value) {
                        const [clip_x0, clip_y0, clip_width, clip_height] = value;
                        if (
                            this._clip_x0 === clip_x0
                            && this._clip_y0 === clip_y0
                            && this._clip_width === clip_width
                            && this._clip_height === clip_height
                        )
                            return;

                        [this._clip_x0, this._clip_y0, this._clip_width, this._clip_height] = [clip_x0, clip_y0, clip_width, clip_height];
                        uniforms.set_uniform(this, 'clip_x0', parseFloat(this._clip_x0 - 1e-6));
                        uniforms.set_uniform(this, 'clip_y0', parseFloat(this._clip_y0 - 1e-6));
                        uniforms.set_uniform(this, 'clip_width', parseFloat(this._clip_width <= 0 ? -1 : this._clip_width + 3 - 1e-6));
                        uniforms.set_uniform(this, 'clip_height', parseFloat(this._clip_height <= 0 ? -1 : this._clip_height + 3 - 1e-6));
                        this.update_radius();
                    }

                    update_actor_geometry(actor = this.get_actor?.()) {
                        if (!actor)
                            return;

                        this.width = actor.width;
                        this.height = actor.height;
                        this.clip = actor.has_clip ? actor.get_clip() : [0, 0, -10, -10];
                    }

                    disconnect_actor_signals() {
                        const actor = this._actor_connection_actor;
                        [
                            this._actor_connection_size_id,
                            this._actor_connection_allocation_id,
                            this._actor_connection_clip_rect_id,
                            this._actor_connection_destroy_id,
                        ].forEach(id => {
                            if (!actor || !id)
                                return;
                            try { actor.disconnect(id); } catch (e) { }
                        });

                        this._actor_connection_actor = null;
                        this._actor_connection_size_id = 0;
                        this._actor_connection_allocation_id = 0;
                        this._actor_connection_clip_rect_id = 0;
                        this._actor_connection_destroy_id = 0;
                    }

                    connect_actor_signals(actor) {
                        if (!actor)
                            return;

                        this._actor_connection_actor = actor;
                        this.update_actor_geometry(actor);
                        this._actor_connection_size_id = actor.connect('notify::size', _ => this.update_actor_geometry(actor));
                        this._actor_connection_allocation_id = actor.connect('notify::allocation', _ => this.update_actor_geometry(actor));
                        this._actor_connection_clip_rect_id = actor.connect('notify::clip-rect', _ => this.update_actor_geometry(actor));
                        this._actor_connection_destroy_id = actor.connect('destroy', () => {
                            this._actor_connection_actor = null;
                            this._actor_connection_size_id = 0;
                            this._actor_connection_allocation_id = 0;
                            this._actor_connection_clip_rect_id = 0;
                            this._actor_connection_destroy_id = 0;
                        });
                    }

                    vfunc_set_actor(actor) {
                        this.disconnect_actor_signals();
                        this.connect_actor_signals(actor);
                        super.vfunc_set_actor(actor);
                    }

                    vfunc_paint_target(paint_node, paint_context) {
                        this.update_actor_geometry();
                        uniforms.upload_uniforms(this);
                        super.vfunc_paint_target(paint_node, paint_context);
                    }

        }
        return GObject.registerClass(gtype_spec, CornerEffect);
    })();
