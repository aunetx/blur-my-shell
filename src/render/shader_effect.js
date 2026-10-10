import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GObject from 'gi://GObject';
import Graphene from 'gi://Graphene';
import { getEffectBounds } from './effect_bounds.js';
import { get_view_framebuffer } from './painted_view.js';
import {
    getTextureCapacity,
    largestViewSize,
    SURFACE_TEXTURE_REGION,
    TextureRegion,
    textureFits,
} from './texture_region.js';

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
        const usedWidth = Math.max(1, Math.ceil(width * scale));
        const usedHeight = Math.max(1, Math.ceil(height * scale));
        const current = this.target !== null && this.target.context === context ? this.target : null;
        if (current === null) {
            this.createTarget(context, usedWidth, usedHeight);
        } else if (!textureFits(usedWidth, current.width) || !textureFits(usedHeight, current.height)) {
            const limit = largestViewSize();
            this.createTarget(context,
                getTextureCapacity(usedWidth, current.width, limit.width),
                getTextureCapacity(usedHeight, current.height, limit.height));
        }

        const target = this.target;
        const resized = target.usedWidth !== usedWidth || target.usedHeight !== usedHeight;
        if (!resized && target.logicalWidth === width && target.logicalHeight === height
            && target.x === x && target.y === y)
            return;

        if (resized) {
            target.usedWidth = usedWidth;
            target.usedHeight = usedHeight;
            target.framebuffer.set_viewport(0, 0, usedWidth, usedHeight);
            target.region.update(target);
        }
        target.framebuffer.orthographic(x, y, x + width, y + height, -1, 1);
        Object.assign(target, { x, y, logicalWidth: width, logicalHeight: height });
        this.sourceValid = false;
    }

    createTarget(context, textureWidth, textureHeight) {
        const texture = Cogl.Texture2D.new_with_size(context, textureWidth, textureHeight);
        texture.set_components(Cogl.TextureComponents.RGBA);
        texture.allocate();
        const framebuffer = Cogl.Offscreen.new_with_texture(texture);
        framebuffer.allocate();
        framebuffer.set_modelview_matrix(new Graphene.Matrix().init_identity());

        const pipeline = Cogl.Pipeline.new(context);
        pipeline.set_layer_texture(0, texture);
        pipeline.set_layer_filters(0, Cogl.PipelineFilter.LINEAR, Cogl.PipelineFilter.LINEAR);
        pipeline.set_layer_wrap_mode(0, Cogl.PipelineWrapMode.CLAMP_TO_EDGE);
        pipeline.add_snippet(this.surfaceSnippet);
        this.target = {
            context, texture, framebuffer, pipeline,
            width: textureWidth, height: textureHeight,
            usedWidth: 0, usedHeight: 0,
        };
        this.target.region = new TextureRegion(pipeline, SURFACE_TEXTURE_REGION);
        this.target.viewportWidthLocation = pipeline.get_uniform_location('bms_viewport_width');
        this.target.viewportHeightLocation = pipeline.get_uniform_location('bms_viewport_height');
        this.target.originXLocation = pipeline.get_uniform_location('bms_origin_x');
        this.target.originYLocation = pipeline.get_uniform_location('bms_origin_y');
        this.sourceValid = false;
        this._bms_uniforms_dirty = true;
    }

    get_pipeline() {
        return this.target?.pipeline ?? null;
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
        const bounds = getEffectBounds(actor);
        const {width, height} = bounds;
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
        return bounds;
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
        const framebuffer = get_view_framebuffer(paintContext);
        const context = framebuffer ? framebuffer.get_context() : this.target?.context;
        if (!context) {
            node.add_child(new Clutter.ActorNode(actor, -1));
            return;
        }
        this.ensureTarget(context, bounds, actor.get_resource_scale());
        // outside of a stage view, like in a screencast, the input from the last view paint is reused
        const refreshes_input = framebuffer !== null
            && (actor._bms_live_input || flags & Clutter.EffectPaintFlags.ACTOR_DIRTY);
        if (!this.sourceValid || refreshes_input) {
            const layer = Clutter.LayerNode.new_to_framebuffer(
                this.target.framebuffer, this.target.pipeline);
            layer.set_name('BmsShader input');
            layer.add_child(new Clutter.ActorNode(actor, 255));
            node.add_child(layer);
            this.sourceValid = true;
        }
        this.vfunc_paint_target(node, paintContext);
    }

    vfunc_paint_target(node, paintContext) {
        const framebuffer = get_view_framebuffer(paintContext);
        if (framebuffer) {
            const width = framebuffer.get_viewport_width();
            const height = framebuffer.get_viewport_height();
            if (this.target.viewportWidth !== width || this.target.viewportHeight !== height) {
                this.target.pipeline.set_uniform_1f(this.target.viewportWidthLocation, width);
                this.target.pipeline.set_uniform_1f(this.target.viewportHeightLocation, height);
                this.target.viewportWidth = width;
                this.target.viewportHeight = height;
            }
        }
        if (this.target.originX !== this.target.x || this.target.originY !== this.target.y) {
            this.target.pipeline.set_uniform_1f(this.target.originXLocation, this.target.x);
            this.target.pipeline.set_uniform_1f(this.target.originYLocation, this.target.y);
            this.target.originX = this.target.x;
            this.target.originY = this.target.y;
        }
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
