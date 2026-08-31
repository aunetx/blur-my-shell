import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';

const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');

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
uniform float brightness;
uniform float output_pass;
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
color.rgb *= mix(1.0, brightness, output_pass);
`;

const UPSAMPLE_CODE = `${UPSAMPLE_BODY}
cogl_color_out = color;
`;

const UPSAMPLE_OUTPUT_DECLARATIONS = `${UPSAMPLE_DECLARATIONS}
uniform float opacity_factor;
`;

const UPSAMPLE_OUTPUT_CODE = `${UPSAMPLE_BODY}
vec4 sourceColor = texture2D(cogl_sampler1, cogl_tex_coord1_in.xy);
cogl_color_out = mix(sourceColor, color, opacity_factor);
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

function configureFramebuffer(framebuffer, width, height, logicalWidth, logicalHeight) {
    framebuffer.set_viewport(0, 0, width, height);
    framebuffer.orthographic(0, 0, logicalWidth, logicalHeight, -1, 1);
}

function createRenderTarget(context, width, height, logicalWidth, logicalHeight) {
    const texture = Cogl.Texture2D.new_with_size(context, width, height);
    texture.set_components(Cogl.TextureComponents.RGBA);
    texture.allocate();

    const framebuffer = Cogl.Offscreen.new_with_texture(texture);
    framebuffer.allocate();
    configureFramebuffer(framebuffer, width, height, logicalWidth, logicalHeight);

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

function addPassNode(parent, target, pipeline, width, height, name) {
    const layerNode = Clutter.LayerNode.new_to_framebuffer(
        target.framebuffer,
        target.layerPipeline
    );
    layerNode.set_name(name);
    parent.add_child(layerNode);

    const pipelineNode = new Clutter.PipelineNode(pipeline);
    pipelineNode.set_name(`${name} sample`);
    pipelineNode.add_rectangle(new Clutter.ActorBox({
        x1: 0,
        y1: 0,
        x2: width,
        y2: height,
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
        this.scale = 0;
        this.context = null;
        this.appliedOffset = null;
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
        if (this.outputPipeline)
            setFloat(this.outputPipeline, 'opacity_factor', opacityFactor);
        this.queue_repaint();
        this.notify('opacity-factor');
    }

    getPassConfiguration(radius = this.unscaled_radius) {
        radius = utils.clamp(radius, 0, 200, DEFAULT_PARAMS.unscaled_radius);
        if (radius <= 0)
            return { passes: 0, offset: 1 };

        const thresholds = [0, 8, 20, 40, 100];
        let calculatedPasses = thresholds.findIndex(threshold => radius <= threshold);
        if (calculatedPasses < 1)
            calculatedPasses = 4;
        const fixedPasses = utils.clamp_integer(this.fixed_passes, 0, 4, 0);
        const passes = Math.max(calculatedPasses, fixedPasses);
        const offset = 0.5 + Math.min(radius, 100) / 100;

        return { passes, offset };
    }

    ensureTargets(context, logicalWidth, logicalHeight, scale, passes) {
        const width = Math.max(1, Math.ceil(logicalWidth * scale));
        const height = Math.max(1, Math.ceil(logicalHeight * scale));
        const canReuseTargets =
            this.downTargets.length === passes + 1
            && this.width === width
            && this.height === height
            && this.scale === scale
            && this.context === context;
        if (canReuseTargets) {
            if (
                this.logicalWidth !== logicalWidth
                || this.logicalHeight !== logicalHeight
            ) {
                [...this.downTargets, ...this.upTargets].forEach(target => {
                    if (target) {
                        configureFramebuffer(
                            target.framebuffer,
                            target.width,
                            target.height,
                            logicalWidth,
                            logicalHeight
                        );
                    }
                });
                this.logicalWidth = logicalWidth;
                this.logicalHeight = logicalHeight;
            }
            return;
        }

        this.releaseTargets();
        for (let level = 0; level <= passes; level++) {
            const divider = 2 ** level;
            this.downTargets.push(createRenderTarget(
                context,
                Math.max(1, Math.ceil(width / divider)),
                Math.max(1, Math.ceil(height / divider)),
                logicalWidth,
                logicalHeight
            ));
        }

        for (let level = 1; level <= passes; level++) {
            this.downPipelines[level] = this.createPass(
                this.downTargets[level - 1],
                context,
                DOWNSAMPLE_DECLARATIONS,
                DOWNSAMPLE_CODE,
                this.offset
            );
        }

        let upSource = this.downTargets[passes];
        for (let level = passes - 1; level >= 1; level--) {
            const divider = 2 ** level;
            const target = createRenderTarget(
                context,
                Math.max(1, Math.ceil(width / divider)),
                Math.max(1, Math.ceil(height / divider)),
                logicalWidth,
                logicalHeight
            );
            this.upTargets[level] = target;
            this.upPipelines[level] = this.createPass(
                upSource,
                context,
                UPSAMPLE_DECLARATIONS,
                UPSAMPLE_CODE,
                this.offset
            );
            upSource = target;
        }
        this.outputPipeline = this.createPass(
            upSource,
            context,
            UPSAMPLE_OUTPUT_DECLARATIONS,
            UPSAMPLE_OUTPUT_CODE,
            this.offset,
            true
        );
        this.width = width;
        this.height = height;
        this.logicalWidth = logicalWidth;
        this.logicalHeight = logicalHeight;
        this.scale = scale;
        this.context = context;
        this.appliedOffset = this.offset;
    }

    createPass(source, context, declarations, code, offset, outputPass = false) {
        const pipeline = createPassPipeline(context, source.texture, declarations, code);
        setVector2(pipeline, 'halfpixel', 0.5 / source.width, 0.5 / source.height);
        setFloat(pipeline, 'offset', offset);
        if (declarations === UPSAMPLE_DECLARATIONS) {
            setFloat(pipeline, 'brightness', this.brightness);
            setFloat(pipeline, 'output_pass', outputPass ? 1 : 0);
        }
        if (outputPass) {
            pipeline.set_layer_texture(1, this.downTargets[0].texture);
            pipeline.set_layer_filters(
                1,
                Cogl.PipelineFilter.LINEAR,
                Cogl.PipelineFilter.LINEAR
            );
            pipeline.set_layer_wrap_mode(1, Cogl.PipelineWrapMode.CLAMP_TO_EDGE);
            setFloat(pipeline, 'brightness', this.brightness);
            setFloat(pipeline, 'output_pass', 1);
            setFloat(pipeline, 'opacity_factor', this.opacity_factor);
        }
        return pipeline;
    }

    updatePassOffsets(offset) {
        if (this.appliedOffset === offset)
            return;

        this.downPipelines.forEach(pipeline => {
            if (pipeline)
                setFloat(pipeline, 'offset', offset);
        });
        this.upPipelines.forEach(pipeline => {
            if (pipeline)
                setFloat(pipeline, 'offset', offset);
        });
        if (this.outputPipeline)
            setFloat(this.outputPipeline, 'offset', offset);
        this.appliedOffset = offset;
    }

    vfunc_paint_node(node, paintContext, flags) {
        const actor = this.get_actor();
        const logicalWidth = Math.max(1, actor.width);
        const logicalHeight = Math.max(1, actor.height);
        const { passes, offset } = this.getPassConfiguration();
        if (passes === 0) {
            if (this.downTargets.length > 0)
                this.releaseTargets();
            node.add_child(new Clutter.ActorNode(actor, -1));
            return;
        }

        const context = paintContext.get_framebuffer().get_context();
        const scale = actor.get_resource_scale();
        this.offset = offset;
        this.ensureTargets(context, logicalWidth, logicalHeight, scale, passes);
        this.updatePassOffsets(offset);

        const actorLayer = Clutter.LayerNode.new_to_framebuffer(
            this.downTargets[0].framebuffer,
            this.downTargets[0].layerPipeline
        );
        actorLayer.set_name('BmsDualKawase source');
        actorLayer.add_child(new Clutter.ActorNode(actor, 255));
        node.add_child(actorLayer);

        for (let level = 1; level <= passes; level++) {
            addPassNode(
                node,
                this.downTargets[level],
                this.downPipelines[level],
                logicalWidth,
                logicalHeight,
                `BmsDualKawase downsample ${level}`
            );
        }

        for (let level = passes - 1; level >= 1; level--) {
            addPassNode(
                node,
                this.upTargets[level],
                this.upPipelines[level],
                logicalWidth,
                logicalHeight,
                `BmsDualKawase upsample ${level}`
            );
        }

        const outputNode = new Clutter.PipelineNode(this.outputPipeline);
        outputNode.set_name('BmsDualKawase output');
        outputNode.add_rectangle(new Clutter.ActorBox({
            x1: 0,
            y1: 0,
            x2: logicalWidth,
            y2: logicalHeight,
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
        this.appliedOffset = null;
    }

    reset_for_pool() {
        this.fixed_passes = null;
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
