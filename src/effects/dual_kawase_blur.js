import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import { getEffectBounds } from '../render/effect_bounds.js';
import { getKawaseConfiguration, getKawaseOffset } from './kawase_sampling.js';

const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');
const St = await utils.import_in_shell_only('gi://St');

const DOWNSAMPLE_DECLARATIONS = `
uniform vec2 halfpixel;
uniform float offset;
`;

const DOWNSAMPLE_CODE = `
vec2 uv = cogl_tex_coord_in[0].xy;
vec4 sum = texture2D(cogl_sampler0, uv) * 4.0;
sum += texture2D(cogl_sampler0, uv - halfpixel * offset);
sum += texture2D(cogl_sampler0, uv + halfpixel * offset);
sum += texture2D(cogl_sampler0, uv + vec2(halfpixel.x, -halfpixel.y) * offset);
sum += texture2D(cogl_sampler0, uv - vec2(halfpixel.x, -halfpixel.y) * offset);
cogl_color_out = sum / 8.0;
`;

const UPSAMPLE_DECLARATIONS = `
uniform vec2 halfpixel;
uniform float offset;
uniform float level_blend;
`;

const UPSAMPLE_BODY = `
vec2 uv = cogl_tex_coord_in[0].xy;
vec4 sum = texture2D(cogl_sampler0, uv + vec2(-halfpixel.x * 2.0, 0.0) * offset);
sum += texture2D(cogl_sampler0, uv + vec2(-halfpixel.x, halfpixel.y) * offset) * 2.0;
sum += texture2D(cogl_sampler0, uv + vec2(0.0, halfpixel.y * 2.0) * offset);
sum += texture2D(cogl_sampler0, uv + vec2(halfpixel.x, halfpixel.y) * offset) * 2.0;
sum += texture2D(cogl_sampler0, uv + vec2(halfpixel.x * 2.0, 0.0) * offset);
sum += texture2D(cogl_sampler0, uv + vec2(halfpixel.x, -halfpixel.y) * offset) * 2.0;
sum += texture2D(cogl_sampler0, uv + vec2(0.0, -halfpixel.y * 2.0) * offset);
sum += texture2D(cogl_sampler0, uv + vec2(-halfpixel.x, -halfpixel.y) * offset) * 2.0;
vec4 color = sum / 12.0;
`;

const UPSAMPLE_CODE = `${UPSAMPLE_BODY}
if (level_blend < 1.0)
    color = mix(texture2D(cogl_sampler1, cogl_tex_coord1_in.xy), color, level_blend);
cogl_color_out = color;
`;

const UPSAMPLE_OUTPUT_DECLARATIONS = `${UPSAMPLE_DECLARATIONS}
uniform float opacity_factor;
uniform float brightness;
`;

const UPSAMPLE_OUTPUT_CODE = `
vec4 sourceColor = texture2D(cogl_sampler1, cogl_tex_coord1_in.xy);
vec4 filteredColor = sourceColor;
if (level_blend > 0.0) {
    ${UPSAMPLE_BODY}
    filteredColor = mix(sourceColor, color, level_blend);
}
filteredColor.rgb *= brightness;
cogl_color_out = mix(sourceColor, filteredColor, opacity_factor) * cogl_color_in.a;
`;

const DEFAULT_PARAMS = {
    unscaled_radius: 30,
    brightness: 0.6,
    opacity_factor: 1,
};

const SNIPPETS = new Map();

function createSnippet(declarations, code) {
    const key = `${declarations}\n${code}`;
    if (SNIPPETS.has(key))
        return SNIPPETS.get(key);

    const snippet = Cogl.Snippet.new(Cogl.SnippetHook.FRAGMENT, declarations, null);
    snippet.set_replace(code);
    SNIPPETS.set(key, snippet);
    return snippet;
}

function configureFramebuffer(framebuffer, width, height, bounds) {
    framebuffer.set_viewport(0, 0, width, height);
    framebuffer.orthographic(bounds.x, bounds.y,
        bounds.x + bounds.width, bounds.y + bounds.height, -1, 1);
}

function createRenderTarget(context, width, height, bounds) {
    const texture = Cogl.Texture2D.new_with_size(context, width, height);
    texture.set_components(Cogl.TextureComponents.RGBA);
    texture.allocate();

    const framebuffer = Cogl.Offscreen.new_with_texture(texture);
    framebuffer.allocate();
    configureFramebuffer(framebuffer, width, height, bounds);

    const layerPipeline = Cogl.Pipeline.new(context);
    layerPipeline.set_layer_texture(0, texture);

    return { texture, framebuffer, layerPipeline, width, height };
}

function createPassPipeline(context, texture, declarations, code) {
    const pipeline = Cogl.Pipeline.new(context);
    pipeline.set_layer_texture(0, texture);
    pipeline.set_layer_filters(0, Cogl.PipelineFilter.LINEAR, Cogl.PipelineFilter.LINEAR);
    pipeline.set_layer_wrap_mode(0, Cogl.PipelineWrapMode.CLAMP_TO_EDGE);
    pipeline.add_snippet(createSnippet(declarations, code));
    return pipeline;
}

function setFloat(pipeline, name, value) {
    pipeline.set_uniform_1f(pipeline.get_uniform_location(name), value);
}

function setVector2(pipeline, name, x, y) {
    pipeline.set_uniform_float(pipeline.get_uniform_location(name), 2, 1, [x, y]);
}

function addPassNode(parent, target, pipeline, bounds, name) {
    const layerNode = Clutter.LayerNode.new_to_framebuffer(
        target.framebuffer,
        target.layerPipeline
    );
    layerNode.set_name(name);
    parent.add_child(layerNode);

    const pipelineNode = new Clutter.PipelineNode(pipeline);
    pipelineNode.set_name(`${name} sample`);
    pipelineNode.add_rectangle(new Clutter.ActorBox({
        x1: bounds.x,
        y1: bounds.y,
        x2: bounds.x + bounds.width,
        y2: bounds.y + bounds.height,
    }));
    layerNode.add_child(pipelineNode);
}

const DualKawaseBlurEffectClass = utils.IS_IN_PREFERENCES ? null : GObject.registerClass({
    GTypeName: 'BmsDualKawaseBlurEffect',
    Properties: {
        'unscaled-radius': GObject.ParamSpec.double(
            'unscaled-radius', null, null,
            GObject.ParamFlags.READWRITE,
            0, 200, DEFAULT_PARAMS.unscaled_radius
        ),
        'radius': GObject.ParamSpec.double(
            'radius', null, null,
            GObject.ParamFlags.READWRITE,
            0, 200, DEFAULT_PARAMS.unscaled_radius
        ),
        'brightness': GObject.ParamSpec.double(
            'brightness', null, null,
            GObject.ParamFlags.READWRITE,
            0, 1, DEFAULT_PARAMS.brightness
        ),
        'opacity-factor': GObject.ParamSpec.double(
            'opacity-factor', null, null,
            GObject.ParamFlags.READWRITE,
            0, 1, DEFAULT_PARAMS.opacity_factor
        ),
    },
}, class DualKawaseBlurEffect extends Clutter.Effect {
    _init(params = {}) {
        super._init();
        this.downTargets = [];
        this.upTargets = [];
        this.downPipelines = [];
        this.upPipelines = [];
        this.outputPipeline = null;
        this.width = 0;
        this.height = 0;
        this.logicalWidth = 0;
        this.logicalHeight = 0;
        this.x = 0;
        this.y = 0;
        this.scale = 0;
        this.context = null;
        this.appliedSampling = null;
        this._unscaled_radius = null;
        this._brightness = null;
        this._opacity_factor = null;
        this.unscaled_radius = params.unscaled_radius ?? DEFAULT_PARAMS.unscaled_radius;
        this.brightness = params.brightness ?? DEFAULT_PARAMS.brightness;
        this.opacity_factor = params.opacity_factor ?? DEFAULT_PARAMS.opacity_factor;
    }

    static get default_params() {
        return DEFAULT_PARAMS;
    }

    get unscaled_radius() {
        return this._unscaled_radius;
    }

    set unscaled_radius(value) {
        const radius = utils.clamp(value, 0, 200, DEFAULT_PARAMS.unscaled_radius);
        if (this._unscaled_radius === radius)
            return;
        this._unscaled_radius = radius;
        if (radius === 0)
            this.releaseTargets();
        this.queue_repaint();
        this.notify('unscaled-radius');
        this.notify('radius');
    }

    get radius() {
        return this.unscaled_radius;
    }

    set radius(value) {
        this.unscaled_radius = value;
    }

    get brightness() {
        return this._brightness;
    }

    set brightness(value) {
        const brightness = utils.clamp(value, 0, 1, DEFAULT_PARAMS.brightness);
        if (this._brightness === brightness)
            return;
        this._brightness = brightness;
        if (this.outputPipeline)
            setFloat(this.outputPipeline, 'brightness', brightness);
        this.queue_repaint();
        this.notify('brightness');
    }

    get opacity_factor() {
        return this._opacity_factor;
    }

    set opacity_factor(value) {
        const opacityFactor = utils.clamp(value, 0, 1, DEFAULT_PARAMS.opacity_factor);
        if (this._opacity_factor === opacityFactor)
            return;
        this._opacity_factor = opacityFactor;
        if (opacityFactor === 0)
            this.releaseTargets();
        if (this.outputPipeline)
            setFloat(this.outputPipeline, 'opacity_factor', opacityFactor);
        this.queue_repaint();
        this.notify('opacity-factor');
    }

    ensureTargets(context, bounds, scale, passes) {
        const {x, y, width: logicalWidth, height: logicalHeight} = bounds;
        const width = Math.max(1, Math.ceil(logicalWidth * scale));
        const height = Math.max(1, Math.ceil(logicalHeight * scale));
        const canReuseTargets =
            this.width === width
            && this.height === height
            && this.scale === scale
            && this.context === context;
        if (canReuseTargets) {
            if (
                this.logicalWidth !== logicalWidth
                || this.logicalHeight !== logicalHeight
                || this.x !== x || this.y !== y
            ) {
                [...this.downTargets, ...this.upTargets].forEach(target => {
                    if (target) {
                        configureFramebuffer(
                            target.framebuffer,
                            target.width,
                            target.height,
                            bounds
                        );
                    }
                });
                this.logicalWidth = logicalWidth;
                this.logicalHeight = logicalHeight;
                this.x = x;
                this.y = y;
            }
        } else {
            this.releaseTargets();
        }

        for (let level = this.downTargets.length; level <= passes; level++) {
            const divider = 2 ** level;
            this.downTargets.push(createRenderTarget(
                context,
                Math.max(1, Math.ceil(width / divider)),
                Math.max(1, Math.ceil(height / divider)),
                bounds
            ));
        }

        for (let level = Math.max(1, this.downPipelines.length); level <= passes; level++) {
            this.downPipelines[level] = this.createPass(
                this.downTargets[level - 1],
                context,
                DOWNSAMPLE_DECLARATIONS,
                DOWNSAMPLE_CODE,
                getKawaseOffset(level)
            );
        }

        for (let level = Math.max(1, this.upTargets.length); level < passes; level++) {
            const divider = 2 ** level;
            const target = createRenderTarget(
                context,
                Math.max(1, Math.ceil(width / divider)),
                Math.max(1, Math.ceil(height / divider)),
                bounds
            );
            this.upTargets[level] = target;
            this.upPipelines[level] = this.createPass(
                this.downTargets[level + 1],
                context,
                UPSAMPLE_DECLARATIONS,
                UPSAMPLE_CODE,
                getKawaseOffset(level + 1),
                this.downTargets[level]
            );
        }
        if (!this.outputPipeline) {
            this.outputPipeline = this.createPass(
                this.downTargets[1], context,
                UPSAMPLE_OUTPUT_DECLARATIONS, UPSAMPLE_OUTPUT_CODE,
                getKawaseOffset(1), this.downTargets[0], true
            );
        }
        this.width = width;
        this.height = height;
        this.logicalWidth = logicalWidth;
        this.logicalHeight = logicalHeight;
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.context = context;
    }

    createPass(source, context, declarations, code, offset, original = null, outputPass = false) {
        const pipeline = createPassPipeline(context, source.texture, declarations, code);
        setVector2(pipeline, 'halfpixel', 0.5 / source.width, 0.5 / source.height);
        setFloat(pipeline, 'offset', offset);
        if (original) {
            pipeline.set_layer_texture(1, original.texture);
            pipeline.set_layer_filters(
                1,
                Cogl.PipelineFilter.LINEAR,
                Cogl.PipelineFilter.LINEAR
            );
            pipeline.set_layer_wrap_mode(1, Cogl.PipelineWrapMode.CLAMP_TO_EDGE);
            setFloat(pipeline, 'level_blend', 1);
        }
        if (outputPass) {
            setFloat(pipeline, 'brightness', this.brightness);
            setFloat(pipeline, 'opacity_factor', this.opacity_factor);
        }
        return pipeline;
    }

    configureUpsample(pipeline, level, passes, blend) {
        const source = level === passes - 1
            ? this.downTargets[level + 1] : this.upTargets[level + 1];
        pipeline.set_layer_texture(0, source.texture);
        setFloat(pipeline, 'level_blend', level === passes - 1 ? blend : 1);
    }

    updateSampling(passes, offset, blend) {
        if (this.appliedSampling?.passes === passes
            && this.appliedSampling.offset === offset
            && this.appliedSampling.blend === blend)
            return;

        setFloat(this.downPipelines[1], 'offset', offset);
        setFloat(this.outputPipeline, 'offset', offset);
        for (let level = passes - 1; level >= 1; level--)
            this.configureUpsample(this.upPipelines[level], level, passes, blend);
        this.configureUpsample(this.outputPipeline, 0, passes, blend);
        this.appliedSampling = { passes, offset, blend };
    }

    vfunc_paint_node(node, paintContext, flags) {
        const actor = this.get_actor();
        const bounds = getEffectBounds(actor);
        if (bounds.width <= 0 || bounds.height <= 0)
            return;
        if (this.opacity_factor === 0 || (this.unscaled_radius === 0 && this.brightness === 1)) {
            node.add_child(new Clutter.ActorNode(actor, -1));
            return;
        }

        const context = paintContext.get_framebuffer().get_context();
        const scale = actor.get_resource_scale();
        const themeScale = St.ThemeContext.get_for_stage(actor.get_stage()).scale_factor;
        const { passes, offset, blend } = getKawaseConfiguration(this.unscaled_radius * themeScale * scale);
        this.ensureTargets(context, bounds, scale, passes);
        this.updateSampling(passes, offset, blend);

        const actorLayer = Clutter.LayerNode.new_to_framebuffer(
            this.downTargets[0].framebuffer,
            this.downTargets[0].layerPipeline
        );
        actorLayer.set_name('BmsDualKawase source');
        actorLayer.add_child(new Clutter.ActorNode(actor, 255));
        node.add_child(actorLayer);

        for (let level = 1; level <= passes; level++) {
            if (passes === 1 && blend === 0)
                break;
            addPassNode(
                node,
                this.downTargets[level],
                this.downPipelines[level],
                bounds,
                `BmsDualKawase downsample ${level}`
            );
        }

        for (let level = passes - 1; level >= 1; level--) {
            addPassNode(
                node,
                this.upTargets[level],
                this.upPipelines[level],
                bounds,
                `BmsDualKawase upsample ${level}`
            );
        }

        const opacity = actor.get_paint_opacity() / 255;
        const outputColor = new Cogl.Color();
        outputColor.init_from_4f(opacity, opacity, opacity, opacity);
        this.outputPipeline.set_color(outputColor);
        const outputNode = new Clutter.PipelineNode(this.outputPipeline);
        outputNode.set_name('BmsDualKawase output');
        outputNode.add_rectangle(new Clutter.ActorBox({
            x1: bounds.x,
            y1: bounds.y,
            x2: bounds.x + bounds.width,
            y2: bounds.y + bounds.height,
        }));
        node.add_child(outputNode);
    }

    releaseTargets() {
        this.downTargets = [];
        this.upTargets = [];
        this.downPipelines = [];
        this.upPipelines = [];
        this.outputPipeline = null;
        this.width = 0;
        this.height = 0;
        this.logicalWidth = 0;
        this.logicalHeight = 0;
        this.scale = 0;
        this.context = null;
        this.appliedSampling = null;
    }

    reset_for_pool() {
        this.releaseTargets();
    }

    vfunc_set_actor(actor) {
        if (!actor)
            this.releaseTargets();
        super.vfunc_set_actor(actor);
    }
});

export const DualKawaseBlurEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : DualKawaseBlurEffectClass;
