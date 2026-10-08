import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
import { getEffectBounds } from '../render/effect_bounds.js';
import { get_view_framebuffer } from '../render/painted_view.js';
import { getKawaseConfiguration } from './kawase_sampling.js';
import {
    getTextureCapacity,
    largestViewSize,
    TEXTURE_REGION_SOURCE,
    TextureRegion,
    textureFits,
    textureRegionDeclarations,
} from '../render/texture_region.js';

const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');
const St = await utils.import_in_shell_only('gi://St');

const SOURCE_REGION = 'source_region';
const ORIGINAL_REGION = 'original_region';

const SOURCE_SAMPLING_DECLARATIONS = `
${textureRegionDeclarations(SOURCE_REGION)}
${TEXTURE_REGION_SOURCE}
#define source_sample(uv) bms_sample_region(cogl_sampler0, uv, ${SOURCE_REGION})
`;

const ORIGINAL_SAMPLING_DECLARATIONS = `
${textureRegionDeclarations(ORIGINAL_REGION)}
#define original_sample() bms_sample_region(cogl_sampler1, cogl_tex_coord1_in.xy * ${ORIGINAL_REGION}.xy, ${ORIGINAL_REGION})
`;

const DOWNSAMPLE_DECLARATIONS = `
uniform float halfpixel_x;
uniform float halfpixel_y;
#define halfpixel vec2(halfpixel_x, halfpixel_y)
${SOURCE_SAMPLING_DECLARATIONS}
`;

const DOWNSAMPLE_CODE = `
vec2 uv = cogl_tex_coord_in[0].xy * ${SOURCE_REGION}.xy;
vec4 sum = source_sample(uv) * 4.0;
sum += source_sample(uv - halfpixel * 2.0);
sum += source_sample(uv + halfpixel * 2.0);
sum += source_sample(uv + vec2(halfpixel.x, -halfpixel.y) * 2.0);
sum += source_sample(uv - vec2(halfpixel.x, -halfpixel.y) * 2.0);
cogl_color_out = sum / 8.0;
`;

const UPSAMPLE_DECLARATIONS = `
uniform float halfpixel_x;
uniform float halfpixel_y;
#define halfpixel vec2(halfpixel_x, halfpixel_y)
uniform float level_blend;
${SOURCE_SAMPLING_DECLARATIONS}
${ORIGINAL_SAMPLING_DECLARATIONS}
`;

const UPSAMPLE_BODY = `
vec2 uv = cogl_tex_coord_in[0].xy * ${SOURCE_REGION}.xy;
vec4 sum = source_sample(uv - halfpixel);
sum += source_sample(uv + halfpixel);
sum += source_sample(uv + vec2(halfpixel.x, -halfpixel.y));
sum += source_sample(uv - vec2(halfpixel.x, -halfpixel.y));
vec4 color = sum / 4.0;
`;

const UPSAMPLE_CODE = `${UPSAMPLE_BODY}
if (level_blend < 1.0)
    color = mix(original_sample(), color, level_blend);
cogl_color_out = color;
`;

const UPSAMPLE_OUTPUT_DECLARATIONS = `${UPSAMPLE_DECLARATIONS}
uniform float opacity_factor;
uniform float brightness;
`;

const UPSAMPLE_OUTPUT_CODE = `
vec4 sourceColor = original_sample();
vec4 filteredColor = sourceColor;
if (level_blend > 0.0) {
    vec4 color = source_sample(cogl_tex_coord_in[0].xy * ${SOURCE_REGION}.xy);
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

function levelSize(size, level) {
    return Math.max(1, Math.ceil(size / 2 ** level));
}

function resizeRenderTarget(target, level, width, height) {
    target.usedWidth = levelSize(width, level);
    target.usedHeight = levelSize(height, level);
    target.framebuffer.set_viewport(0, 0, target.usedWidth, target.usedHeight);
}

function projectRenderTarget(target, bounds) {
    target.framebuffer.orthographic(bounds.x, bounds.y,
        bounds.x + bounds.width, bounds.y + bounds.height, -1, 1);
}

function createRenderTarget(context, width, height) {
    const texture = Cogl.Texture2D.new_with_size(context, width, height);
    texture.set_components(Cogl.TextureComponents.RGBA);
    texture.allocate();

    const framebuffer = Cogl.Offscreen.new_with_texture(texture);
    framebuffer.allocate();

    const layerPipeline = Cogl.Pipeline.new(context);
    layerPipeline.set_layer_texture(0, texture);

    return { texture, framebuffer, layerPipeline, width, height, usedWidth: 0, usedHeight: 0 };
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

// vec2 uniforms are split into two floats, as set_uniform_float() crashes on Mutter < 48.6/49.1
// (broken array introspection)
function setVector2(pipeline, name, x, y) {
    setFloat(pipeline, `${name}_x`, x);
    setFloat(pipeline, `${name}_y`, y);
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
        this.regions = new Map();
        this.width = 0;
        this.height = 0;
        this.logicalWidth = 0;
        this.logicalHeight = 0;
        this.x = 0;
        this.y = 0;
        this.capacityWidth = 0;
        this.capacityHeight = 0;
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
        if (this.context !== context) {
            this.releaseTargets();
            this.capacityWidth = width;
            this.capacityHeight = height;
            this.context = context;
        } else if (!textureFits(width, this.capacityWidth) || !textureFits(height, this.capacityHeight)) {
            const limit = largestViewSize();
            const capacityWidth = getTextureCapacity(width, this.capacityWidth, limit.width);
            const capacityHeight = getTextureCapacity(height, this.capacityHeight, limit.height);
            this.releaseTargets();
            this.capacityWidth = capacityWidth;
            this.capacityHeight = capacityHeight;
            this.context = context;
        }

        const targetCount = this.downTargets.length;
        for (let level = this.downTargets.length; level <= passes; level++) {
            this.downTargets.push(createRenderTarget(
                context,
                levelSize(this.capacityWidth, level),
                levelSize(this.capacityHeight, level)
            ));
        }

        for (let level = Math.max(1, this.downPipelines.length); level <= passes; level++) {
            this.downPipelines[level] = this.createPass(
                this.downTargets[level - 1],
                context,
                DOWNSAMPLE_DECLARATIONS,
                DOWNSAMPLE_CODE
            );
        }

        for (let level = Math.max(1, this.upTargets.length); level < passes; level++) {
            this.upTargets[level] = createRenderTarget(
                context,
                levelSize(this.capacityWidth, level),
                levelSize(this.capacityHeight, level)
            );
            this.upPipelines[level] = this.createPass(
                this.downTargets[level + 1],
                context,
                UPSAMPLE_DECLARATIONS,
                UPSAMPLE_CODE,
                this.downTargets[level]
            );
        }
        if (!this.outputPipeline) {
            this.outputPipeline = this.createPass(
                this.downTargets[1], context,
                UPSAMPLE_OUTPUT_DECLARATIONS, UPSAMPLE_OUTPUT_CODE,
                this.downTargets[0], true
            );
        }

        const resized = targetCount !== this.downTargets.length
            || this.width !== width || this.height !== height;
        if (!resized && this.logicalWidth === logicalWidth && this.logicalHeight === logicalHeight
            && this.x === x && this.y === y)
            return;

        if (resized) {
            this.downTargets.forEach((target, level) =>
                resizeRenderTarget(target, level, width, height));
            this.upTargets.forEach((target, level) =>
                resizeRenderTarget(target, level, width, height));
            this.updateRegions();
        }
        this.downTargets.forEach(target => projectRenderTarget(target, bounds));
        this.upTargets.forEach(target => projectRenderTarget(target, bounds));
        this.width = width;
        this.height = height;
        this.logicalWidth = logicalWidth;
        this.logicalHeight = logicalHeight;
        this.x = x;
        this.y = y;
    }

    updateRegions() {
        this.downPipelines.forEach((pipeline, level) =>
            this.regions.get(pipeline).source.update(this.downTargets[level - 1]));
        this.upPipelines.forEach((pipeline, level) => {
            const regions = this.regions.get(pipeline);
            regions.source.update(this.downTargets[level + 1]);
            regions.original.update(this.downTargets[level]);
        });
        const outputRegions = this.regions.get(this.outputPipeline);
        outputRegions.source.update(this.downTargets[1]);
        outputRegions.original.update(this.downTargets[0]);
    }

    createPass(source, context, declarations, code, original = null, outputPass = false) {
        const pipeline = createPassPipeline(context, source.texture, declarations, code);
        this.regions.set(pipeline, {
            source: new TextureRegion(pipeline, SOURCE_REGION),
            original: original ? new TextureRegion(pipeline, ORIGINAL_REGION) : null,
        });
        setVector2(pipeline, 'halfpixel', 0.5 / source.width, 0.5 / source.height);
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

    updateSampling(passes, blend) {
        if (this.appliedSampling?.passes === passes
            && this.appliedSampling.blend === blend)
            return;

        for (let level = passes - 1; level >= 1; level--)
            this.configureUpsample(this.upPipelines[level], level, passes, blend);
        this.configureUpsample(this.outputPipeline, 0, passes, blend);
        this.appliedSampling = { passes, blend };
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

        const framebuffer = get_view_framebuffer(paintContext);
        const context = framebuffer ? framebuffer.get_context() : this.context;
        if (!context) {
            node.add_child(new Clutter.ActorNode(actor, -1));
            return;
        }
        const scale = actor.get_resource_scale();
        const themeScale = St.ThemeContext.get_for_stage(actor.get_stage()).scale_factor;
        const { passes, blend } = getKawaseConfiguration(this.unscaled_radius * themeScale * scale);
        this.ensureTargets(context, bounds, scale, passes);
        this.updateSampling(passes, blend);

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
        this.regions.clear();
        this.width = 0;
        this.height = 0;
        this.logicalWidth = 0;
        this.logicalHeight = 0;
        this.capacityWidth = 0;
        this.capacityHeight = 0;
        this.context = null;
        this.appliedSampling = null;
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
