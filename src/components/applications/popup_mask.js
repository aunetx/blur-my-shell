import Cogl from 'gi://Cogl';
import GObject from 'gi://GObject';

import * as utils from '../../conveniences/utils.js';

const MASK_EFFECT_NAME = 'bms-popup-mask';

// a translucent background still counts as covered, while antialiased edges stay smooth
const SHADER_SOURCE = `
uniform sampler2D tex;
uniform sampler2D bms_popup_mask;
uniform float mask_x;
uniform float mask_y;
uniform float mask_w;
uniform float mask_h;

void main() {
    vec2 uv = cogl_tex_coord_in[0].xy;
    vec2 mask_uv = vec2(mask_x, mask_y) + uv * vec2(mask_w, mask_h);
    float coverage = clamp(texture2D(bms_popup_mask, mask_uv).a * 4.0, 0.0, 1.0);
    cogl_color_out = bms_texture2D(tex, uv) * coverage;
}
`;

const MASK_UNIFORMS = ['mask_x', 'mask_y', 'mask_w', 'mask_h'];

/// The texture of the popup's buffer, unless it is split in several planes.
function get_window_texture(meta_window) {
    const texture = meta_window.get_compositor_private().get_texture().get_texture();
    return texture?.get_n_planes() === 1 ? texture.get_plane(0) : null;
}

/// Cuts the blur of a popup to what the popup draws, as the frame of a GTK popover with an arrow
/// also covers the transparent strip around the arrow.
const PopupMaskEffect = GObject.registerClass({
    GTypeName: 'BmsPopupMaskEffect',
}, class PopupMaskEffect extends utils.ShaderEffect {
    constructor(meta_window) {
        super();
        utils.initialize_shader_effect(this, SHADER_SOURCE);
        this._meta_window = meta_window;
        this._mask_texture = null;
        this._mask_values = null;
    }

    // read by the shader effect base class when syncing its geometry
    static get default_params() {
        return {};
    }

    createTarget(context, textureWidth, textureHeight) {
        super.createTarget(context, textureWidth, textureHeight);
        const pipeline = this.target.pipeline;
        pipeline.set_uniform_1i(pipeline.get_uniform_location('bms_popup_mask'), 1);
        this._mask_locations = MASK_UNIFORMS.map(name => pipeline.get_uniform_location(name));
        this._mask_texture = null;
        this._mask_values = null;
    }

    update_mask() {
        const frame = this._meta_window.get_frame_rect();
        const buffer = this._meta_window.get_buffer_rect();
        const window_texture = get_window_texture(this._meta_window);
        // the blur is opaque, so using it as its own mask leaves it whole
        const texture = window_texture ?? this.target.texture;
        const values = window_texture
            ? [
                (frame.x - buffer.x) / buffer.width,
                (frame.y - buffer.y) / buffer.height,
                frame.width / buffer.width,
                frame.height / buffer.height,
            ]
            : [0, 0, 1, 1];

        const pipeline = this.target.pipeline;
        if (texture !== this._mask_texture) {
            pipeline.set_layer_texture(1, texture);
            pipeline.set_layer_filters(1, Cogl.PipelineFilter.LINEAR, Cogl.PipelineFilter.LINEAR);
            pipeline.set_layer_wrap_mode(1, Cogl.PipelineWrapMode.CLAMP_TO_EDGE);
            this._mask_texture = texture;
        }
        values.forEach((value, index) => {
            if (this._mask_values?.[index] !== value)
                pipeline.set_uniform_1f(this._mask_locations[index], value);
        });
        this._mask_values = values;
    }

    vfunc_paint_target(node, paintContext) {
        this.update_mask();
        super.vfunc_paint_target(node, paintContext);
    }
});

/// Adds the mask as the outermost effect of the blur of a popup, so that it applies to the final
/// blurred output. Effects added later by the pipeline are appended, which keeps it outermost.
export function attach_popup_mask(dynamic_pipeline, meta_window) {
    const actor = dynamic_pipeline.contentActor;
    const effects = actor.get_effects();
    effects.forEach(effect => actor.remove_effect(effect));
    actor.add_effect_with_name(MASK_EFFECT_NAME, new PopupMaskEffect(meta_window));
    effects.forEach(effect => actor.add_effect(effect));
}
