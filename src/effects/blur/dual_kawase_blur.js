import GLib from 'gi://GLib';
import GObject from 'gi://GObject';

import * as utils from '../../conveniences/utils.js';
import { getEffectBounds } from '../../render/effect_bounds.js';
import { get_view_framebuffer } from '../../render/backdrop/painted_view.js';
import { getKawaseConfiguration, getKawaseInputBounds } from './kawase_sampling.js';
import {
    DOWNSAMPLE_CODE,
    DOWNSAMPLE_DECLARATIONS,
    ORIGINAL_REGION,
    SOURCE_REGION,
    UPSAMPLE_CODE,
    UPSAMPLE_DECLARATIONS,
    UPSAMPLE_OUTPUT_CODE,
    UPSAMPLE_OUTPUT_DECLARATIONS,
    addPassNode,
    createPassPipeline,
    createRenderTarget,
    levelSize,
    projectRenderTarget,
    resizeRenderTarget,
    setFloat,
    setInt,
    setVector2,
} from './kawase_passes.js';
import {
    getTextureCapacity,
    largestViewSize,
    TextureRegion,
    textureFits,
} from '../../render/shader/texture_region.js';

const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');
const St = await utils.import_in_shell_only('gi://St');

const HIDDEN_RELEASE_DELAY_S = 5;

const DEFAULT_PARAMS = {
    unscaled_radius: 30,
    brightness: 0.6,
    opacity_factor: 1,
    corner_radius: 0,
    corners_top: true,
    corners_bottom: true,
    straight_corners: false,
};

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
        'corner-radius': GObject.ParamSpec.double(
            'corner-radius', null, null,
            GObject.ParamFlags.READWRITE,
            0, Number.MAX_SAFE_INTEGER, DEFAULT_PARAMS.corner_radius
        ),
        'corners-top': GObject.ParamSpec.boolean(
            'corners-top', null, null,
            GObject.ParamFlags.READWRITE,
            DEFAULT_PARAMS.corners_top
        ),
        'corners-bottom': GObject.ParamSpec.boolean(
            'corners-bottom', null, null,
            GObject.ParamFlags.READWRITE,
            DEFAULT_PARAMS.corners_bottom
        ),
        'straight-corners': GObject.ParamSpec.boolean(
            'straight-corners', null, null,
            GObject.ParamFlags.READWRITE,
            DEFAULT_PARAMS.straight_corners
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
        this.shrinkableSince = 0;
        this.context = null;
        this.appliedSampling = null;
        this.blurValid = false;
        this.appliedOutputUniforms = null;
        this.releaseId = 0;
        this._unscaled_radius = null;
        this._brightness = null;
        this._opacity_factor = null;
        this.unscaled_radius = params.unscaled_radius ?? DEFAULT_PARAMS.unscaled_radius;
        this.brightness = params.brightness ?? DEFAULT_PARAMS.brightness;
        this.opacity_factor = params.opacity_factor ?? DEFAULT_PARAMS.opacity_factor;
        this.corner_radius = params.corner_radius ?? DEFAULT_PARAMS.corner_radius;
        this.corners_top = params.corners_top ?? DEFAULT_PARAMS.corners_top;
        this.corners_bottom = params.corners_bottom ?? DEFAULT_PARAMS.corners_bottom;
        this.straight_corners = params.straight_corners ?? DEFAULT_PARAMS.straight_corners;
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
        this.updateRelease();
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
        this.updateRelease();
        if (this.outputPipeline)
            setFloat(this.outputPipeline, 'opacity_factor', opacityFactor);
        this.queue_repaint();
        this.notify('opacity-factor');
    }

    get corner_radius() {
        return this._corner_radius;
    }

    set corner_radius(value) {
        this.setCornerParam('_corner_radius', 'corner-radius', utils.clamp(value, 0, Number.MAX_SAFE_INTEGER));
    }

    get corners_top() {
        return this._corners_top;
    }

    set corners_top(value) {
        this.setCornerParam('_corners_top', 'corners-top', Boolean(value));
    }

    get corners_bottom() {
        return this._corners_bottom;
    }

    set corners_bottom(value) {
        this.setCornerParam('_corners_bottom', 'corners-bottom', Boolean(value));
    }

    get straight_corners() {
        return this._straight_corners;
    }

    set straight_corners(value) {
        this.setCornerParam('_straight_corners', 'straight-corners', Boolean(value));
    }

    setCornerParam(field, property, value) {
        if (this[field] === value)
            return;
        this[field] = value;
        this.queue_repaint();
        this.notify(property);
    }

    roundsCorners() {
        return this.corner_radius > 0 && !this.straight_corners
            && (this.corners_top || this.corners_bottom);
    }

    /// The output pass cuts out the corners against the surface bounds rather than the padded area
    /// that is blurred, and dithers in the actor's own pixels.
    updateOutputUniforms(actor, outputBounds, framebuffer) {
        const surface = getEffectBounds(actor);
        const resourceScale = actor.get_resource_scale();
        const themeScale = St.ThemeContext.get_for_stage(actor.get_stage()).scale_factor;
        const radius = this.roundsCorners()
            ? Math.min(this.corner_radius * themeScale, surface.width / 2, surface.height / 2)
            : 0;
        const uniforms = [
            radius, this.corners_top, this.corners_bottom,
            outputBounds.width, outputBounds.height, outputBounds.x, outputBounds.y,
            surface.x - outputBounds.x, surface.y - outputBounds.y, surface.width, surface.height,
            framebuffer?.get_viewport_width(), framebuffer?.get_viewport_height(), resourceScale,
        ];
        if (this.appliedOutputUniforms?.every((value, index) => value === uniforms[index]))
            return;

        const pipeline = this.outputPipeline;
        setFloat(pipeline, 'corner_radius', radius);
        setInt(pipeline, 'corners_top', this.corners_top ? 1 : 0);
        setInt(pipeline, 'corners_bottom', this.corners_bottom ? 1 : 0);
        setFloat(pipeline, 'output_width', outputBounds.width);
        setFloat(pipeline, 'output_height', outputBounds.height);
        setFloat(pipeline, 'mask_x', surface.x - outputBounds.x);
        setFloat(pipeline, 'mask_y', surface.y - outputBounds.y);
        setFloat(pipeline, 'mask_width', surface.width);
        setFloat(pipeline, 'mask_height', surface.height);
        setFloat(pipeline, 'bms_origin_x', outputBounds.x);
        setFloat(pipeline, 'bms_origin_y', outputBounds.y);
        setFloat(pipeline, 'bms_resource_scale', resourceScale);
        if (framebuffer) {
            setFloat(pipeline, 'bms_viewport_width', framebuffer.get_viewport_width());
            setFloat(pipeline, 'bms_viewport_height', framebuffer.get_viewport_height());
        }
        this.appliedOutputUniforms = uniforms;
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
        } else if (!textureFits(this, width, height, this.capacityWidth, this.capacityHeight)) {
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

        this.blurValid = false;

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
        this.blurValid = false;
    }

    get_input_bounds(bounds) {
        const actor = this.get_actor();
        if (!actor.has_clip || this.opacity_factor === 0 || this.unscaled_radius === 0)
            return bounds;

        const scale = actor.get_resource_scale();
        const themeScale = St.ThemeContext.get_for_stage(actor.get_stage()).scale_factor;
        const { passes } = getKawaseConfiguration(this.unscaled_radius * themeScale * scale);
        return getKawaseInputBounds(bounds, actor.width, actor.height, scale, passes);
    }

    vfunc_paint_node(node, paintContext, flags) {
        const actor = this.get_actor();
        const bounds = getEffectBounds(actor, this);
        if (bounds.width <= 0 || bounds.height <= 0)
            return;
        const unchanged = this.opacity_factor === 0
            || (this.unscaled_radius === 0 && this.brightness === 1);
        if (unchanged && !this.roundsCorners()) {
            node.add_child(new Clutter.ActorNode(actor, -1));
            this.blurValid = false;
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
        const inputBounds = this.get_input_bounds(bounds);
        if (inputBounds.width <= 0 || inputBounds.height <= 0)
            return;
        this.ensureTargets(context, inputBounds, scale, passes);
        this.updateSampling(passes, blend);

        // outside of a stage view, like in a screencast, the blur from the last view paint is reused
        const refreshes_input = framebuffer !== null
            && (actor._bms_live_input || flags & Clutter.EffectPaintFlags.ACTOR_DIRTY);
        if (!this.blurValid || refreshes_input) {
            this.addBlurPasses(node, actor, inputBounds, passes, blend);
            this.blurValid = true;
        }

        this.updateOutputUniforms(actor, inputBounds, framebuffer);
        const opacity = actor.get_paint_opacity() / 255;
        const outputColor = new Cogl.Color();
        outputColor.init_from_4f(opacity, opacity, opacity, opacity);
        this.outputPipeline.set_color(outputColor);
        const outputNode = new Clutter.PipelineNode(this.outputPipeline);
        outputNode.set_name('BmsDualKawase output');
        outputNode.add_rectangle(new Clutter.ActorBox({
            x1: inputBounds.x,
            y1: inputBounds.y,
            x2: inputBounds.x + inputBounds.width,
            y2: inputBounds.y + inputBounds.height,
        }));
        node.add_child(outputNode);
    }

    addBlurPasses(node, actor, bounds, passes, blend) {
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
        this.shrinkableSince = 0;
        this.context = null;
        this.appliedSampling = null;
        this.appliedOutputUniforms = null;
        this.blurValid = false;
    }

    /// An invisible blur doesn't need its textures, but keeps them a little while in case it shows up
    /// again, like a menu opened right after being closed.
    updateRelease() {
        if (this._unscaled_radius === 0 || this._opacity_factor === 0)
            this.queueRelease();
        else
            this.cancelRelease();
    }

    queueRelease() {
        if (this.releaseId)
            return;
        this.releaseId = GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT, HIDDEN_RELEASE_DELAY_S, () => {
            this.releaseId = 0;
            this.releaseTargets();
            return GLib.SOURCE_REMOVE;
        });
    }

    cancelRelease() {
        if (!this.releaseId)
            return;
        GLib.source_remove(this.releaseId);
        this.releaseId = 0;
    }

    vfunc_set_actor(actor) {
        if (!actor) {
            this.cancelRelease();
            this.releaseTargets();
        }
        super.vfunc_set_actor(actor);
    }
});

export const DualKawaseBlurEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : DualKawaseBlurEffectClass;
