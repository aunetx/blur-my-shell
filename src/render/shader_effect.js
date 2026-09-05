import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GObject from 'gi://GObject';
import Graphene from 'gi://Graphene';

export const SurfaceShaderEffect = GObject.registerClass({
    GTypeName: 'BmsSurfaceShaderEffect',
}, class SurfaceShaderEffect extends Clutter.ShaderEffect {
    _init() {
        super._init();
        this.target = null;
        this.sourceValid = false;
    }

    ensureTarget(context, bounds, scale) {
        const { x, y, width, height } = bounds;
        const textureWidth = Math.max(1, Math.ceil(width * scale));
        const textureHeight = Math.max(1, Math.ceil(height * scale));
        if (this.target?.context === context
            && this.target.width === textureWidth
            && this.target.height === textureHeight) {
            if (this.target.logicalWidth !== width || this.target.logicalHeight !== height
                || this.target.x !== x || this.target.y !== y) {
                this.target.framebuffer.orthographic(x, y, x + width, y + height, -1, 1);
                this.target.x = x;
                this.target.y = y;
                this.target.logicalWidth = width;
                this.target.logicalHeight = height;
                this.sourceValid = false;
            }
            return;
        }

        const texture = Cogl.Texture2D.new_with_size(context, textureWidth, textureHeight);
        texture.set_components(Cogl.TextureComponents.RGBA);
        texture.allocate();
        const framebuffer = Cogl.Offscreen.new_with_texture(texture);
        framebuffer.allocate();
        framebuffer.set_viewport(0, 0, textureWidth, textureHeight);
        framebuffer.set_modelview_matrix(new Graphene.Matrix().init_identity());
        framebuffer.orthographic(x, y, x + width, y + height, -1, 1);

        const pipeline = Cogl.Pipeline.new(context);
        pipeline.set_layer_texture(0, texture);
        pipeline.set_layer_filters(0, Cogl.PipelineFilter.LINEAR, Cogl.PipelineFilter.LINEAR);
        pipeline.set_layer_wrap_mode(0, Cogl.PipelineWrapMode.CLAMP_TO_EDGE);
        pipeline.add_snippet(this.surfaceSnippet);
        this.target = {
            context, texture, framebuffer, pipeline, x, y,
            width: textureWidth, height: textureHeight,
            logicalWidth: width, logicalHeight: height,
        };
        this.sourceValid = false;
        this._bms_uniforms_dirty = true;
    }

    get_pipeline() {
        return this.target?.pipeline ?? null;
    }

    get_texture() {
        return this.target?.texture ?? null;
    }

    set_surface_uniform(name, value, integral) {
        const pipeline = this.get_pipeline();
        const location = pipeline.get_uniform_location(name);
        if (integral)
            pipeline.set_uniform_1i(location, Math.trunc(value));
        else
            pipeline.set_uniform_1f(location, value);
    }

    syncGeometry(actor) {
        const [x, y, width, height] = actor.has_clip
            ? actor.get_clip() : [0, 0, actor.width, actor.height];
        const defaults = this.constructor.default_params;
        if (Object.hasOwn(defaults, 'width'))
            this.width = width;
        if (Object.hasOwn(defaults, 'height'))
            this.height = height;
        if (Object.hasOwn(defaults, 'clip')) {
            const clip = [0, 0, -1, -1];
            if (clip.some((value, index) => value !== this.clip[index]))
                this.clip = clip;
        }
        return {x, y, width, height};
    }

    vfunc_paint(node, paintContext, flags) {
        const actor = this.get_actor();
        if (flags & Clutter.EffectPaintFlags.BYPASS_EFFECT || actor.width <= 0 || actor.height <= 0) {
            node.add_child(new Clutter.ActorNode(actor, -1));
            this.sourceValid = false;
            return;
        }

        const bounds = this.syncGeometry(actor);
        if (bounds.width <= 0 || bounds.height <= 0)
            return;
        this.ensureTarget(paintContext.get_framebuffer().get_context(),
            bounds, actor.get_resource_scale());
        if (!this.sourceValid || actor._bms_live_input
            || flags & Clutter.EffectPaintFlags.ACTOR_DIRTY) {
            const layer = Clutter.LayerNode.new_to_framebuffer(
                this.target.framebuffer, this.target.pipeline);
            layer.set_name('BmsShader input');
            layer.add_child(new Clutter.ActorNode(actor, 255));
            node.add_child(layer);
            this.sourceValid = true;
        }
        this.vfunc_paint_target(node, paintContext);
    }

    vfunc_paint_target(node, _paintContext) {
        const actor = this.get_actor();
        const opacity = actor.get_paint_opacity() / 255;
        const color = new Cogl.Color();
        color.init_from_4f(opacity, opacity, opacity, opacity);
        this.target.pipeline.set_color(color);
        const output = new Clutter.PipelineNode(this.target.pipeline);
        output.set_name('BmsShader output');
        output.add_rectangle(new Clutter.ActorBox({
            x1: this.target.x, y1: this.target.y,
            x2: this.target.x + this.target.logicalWidth,
            y2: this.target.y + this.target.logicalHeight,
        }));
        node.add_child(output);
    }

    vfunc_set_actor(actor) {
        this.target = null;
        this.sourceValid = false;
        super.vfunc_set_actor(actor);
    }
});
