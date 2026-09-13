import Clutter from 'gi://Clutter';
import Shell from 'gi://Shell';
import St from 'gi://St';

import * as utils from '../../conveniences/utils.js';
import * as uniforms from '../../conveniences/shader_uniforms.js';

const SHADER_SOURCE = utils.get_shader_source(Shell, 'stack_mask.glsl', import.meta.url);

// Convert the covering message's allocation to the covered message's space.
// Theme radii are already in physical pixels; do not apply the UI scale again.
export function get_cover_geometry(message, cover) {
    if (!message.has_allocation() || !cover.has_allocation())
        return null;

    const [x, y] = cover.get_transformed_position();
    const [width, height] = cover.get_transformed_size();
    const [ok1, x1, y1] = message.transform_stage_point(x, y);
    const [ok2, x2, y2] = message.transform_stage_point(x + width, y + height);
    if (!ok1 || !ok2 || x2 <= x1 || y2 <= y1
        || x1 >= message.width || y1 >= message.height || x2 <= 0 || y2 <= 0)
        return null;

    const node = cover.get_theme_node();
    const radii = [St.Corner.TOPLEFT, St.Corner.TOPRIGHT,
        St.Corner.BOTTOMRIGHT, St.Corner.BOTTOMLEFT].map(corner =>
        Math.min(node.get_border_radius(corner), cover.width / 2, cover.height / 2));

    return {
        box: [x1, y1, x2 - x1, y2 - y1],
        scale: [(x2 - x1) / cover.width, (y2 - y1) / cover.height],
        radii,
    };
}

const StackMaskEffectClass = class StackMaskEffect extends Clutter.ShaderEffect {
    constructor() {
        super();
        utils.initialize_shader_effect(this, SHADER_SOURCE);
    }

    set_geometry(geometry) {
        const key = JSON.stringify(geometry);
        if (key === this.geometry_key)
            return;
        this.geometry_key = key;
        this.set_vector(['cover_x', 'cover_y', 'cover_width', 'cover_height'], geometry.box);
        this.set_vector(['scale_x', 'scale_y'], geometry.scale);
        this.set_vector(['radius_tl', 'radius_tr', 'radius_br', 'radius_bl'], geometry.radii);
    }

    set_vector(names, values) {
        names.forEach((name, index) => uniforms.set_uniform(this, name, values[index]));
    }

    vfunc_paint_target(node, context) {
        const actor = this.get_actor();
        const volume = actor.get_paint_volume();
        if (volume) {
            const origin = volume.get_origin();
            const width = volume.get_width();
            const height = volume.get_height();
            // Clutter pads offscreen paint volumes by three pixels, anchoring
            // the bottom/right at ceil(edge + .75). Include shadows and the
            // padding when mapping texture coordinates back to actor space.
            const box = [
                Math.ceil(origin.x + width + 0.75) - Math.round(width) - 3,
                Math.ceil(origin.y + height + 0.75) - Math.round(height) - 3,
                Math.round(width) + 3,
                Math.round(height) + 3,
            ];
            const key = box.join(',');
            if (key !== this.texture_key) {
                this.texture_key = key;
                this.set_vector(['texture_x', 'texture_y', 'texture_width', 'texture_height'], box);
            }
        }
        uniforms.upload_uniforms(this);
        super.vfunc_paint_target(node, context);
    }
};

export const StackMaskEffect = utils.register_shader_effect(
    { GTypeName: 'BmsPopupStackMaskEffect' }, StackMaskEffectClass, SHADER_SOURCE);
