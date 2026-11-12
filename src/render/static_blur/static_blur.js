import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GObject from 'gi://GObject';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from '../../pipelines/pipeline.js';
import { get_view_framebuffer } from '../backdrop/painted_view.js';
import { getRoundedCorners } from '../corner_policy.js';
import { addTextureRectangle, setPaintOpacity } from '../paint_nodes.js';
import { RoundedPipeline } from '../rounded_pipeline.js';
import { ROUNDED_MASK_SOURCE } from '../shader/rounded_mask.js';
import { get_snippet } from '../shader/snippet_cache.js';

/// These effects follow the shape of the surface, so a surface showing a part of the monitor can't
/// take them from the blur of the whole monitor.
const SURFACE_EFFECTS = ['refraction', 'wave'];

const SHARED_DECLARATIONS = `
uniform float view_width;
uniform float view_height;
${ROUNDED_MASK_SOURCE}
`;

const SHARED_CODE = `
cogl_color_out = texture2D(cogl_sampler0, cogl_tex_coord_in[0].xy) * cogl_color_in.a;
if (corner_radius > 0.0)
    cogl_color_out *= corner_coverage(cogl_tex_coord_in[0].xy * vec2(view_width, view_height));
`;

function getSharedSnippet() {
    return get_snippet(`${SHARED_DECLARATIONS}\n${SHARED_CODE}`, () => {
        const snippet = Cogl.Snippet.new(Cogl.SnippetHook.FRAGMENT, SHARED_DECLARATIONS, null);
        snippet.set_replace(SHARED_CODE);
        return snippet;
    });
}

function setFloat(pipeline, name, value) {
    pipeline.set_uniform_1f(pipeline.get_uniform_location(name), value);
}

function setInt(pipeline, name, value) {
    pipeline.set_uniform_1i(pipeline.get_uniform_location(name), value);
}

/// The static blur of a surface: the blurred background of a monitor, covering the monitor and
/// clipped to the surface. It shows its part of the background shared by every static blur of the
/// monitor using the same pipeline, unless the pipeline follows the shape of the surface, in which
/// case it blurs its own copy of the background.
export const StaticBlur = GObject.registerClass({
    GTypeName: 'BmsStaticBlur',
}, class StaticBlur extends Clutter.Actor {
    _init({
        name, monitorIndex, pipelineId,
        wholeMonitor = false, getRadius = () => 0, getCorners = () => 0,
    }) {
        const monitor = Main.layoutManager.monitors[monitorIndex];
        super._init({ name, width: monitor.width, height: monitor.height });
        this.monitorIndex = monitorIndex;
        this.pipelineId = null;
        this.wholeMonitor = wholeMonitor;
        this.getRadius = getRadius;
        this.getCorners = getCorners;
        this.straightCorners = false;
        this.background = null;
        this.own = null;
        this.pipelineUpdatedId = 0;
        this.coglContext = null;
        this.pipeline = null;
        this.texture = null;
        this.appliedUniforms = null;

        this.monitorsChangedId = Main.layoutManager.connect(
            'monitors-changed', () => this.updateMonitor()
        );
        this.connect('notify::mapped', () => this.updateBackgroundVisibility());
        this.connect('notify::clip-rect', () => this.syncOwnClip());
        this.connect('notify::has-clip', () => this.syncOwnClip());
        this.connect('destroy', () => {
            Main.layoutManager.disconnect(this.monitorsChangedId);
            this.disconnectPipelineUpdated();
            this.releaseBackground();
        });
        this.setPipeline(pipelineId);
    }

    get pipelinesManager() {
        return global.blur_my_shell._pipelines_manager;
    }

    setPipeline(pipelineId) {
        if (this.pipelineId === pipelineId)
            return;

        this.pipelineId = pipelineId;
        this.disconnectPipelineUpdated();
        // adding or removing an effect can change whether the background can be shared
        if (!this.wholeMonitor) {
            this.pipelineUpdatedId = this.pipelinesManager.connect(
                `${pipelineId}::pipeline-updated`, () => this.updateBackground()
            );
        }
        this.updateBackground(true);
    }

    /// The shared backgrounds are made anew for the new monitors. A monitor that is gone leaves
    /// nothing to show until the surface is moved to another one.
    updateMonitor() {
        const sharedBackgrounds = global.blur_my_shell._shared_backgrounds;
        if (this.background && sharedBackgrounds.isCurrent(this.background))
            return;

        this.releaseBackground();
        const monitor = Main.layoutManager.monitors[this.monitorIndex];
        if (!monitor)
            return;

        this.set_size(monitor.width, monitor.height);
        this.updateBackground(true);
    }

    /// A pipeline that has been removed is replaced by the default one, like `Pipeline` does.
    sharesBackground() {
        if (this.wholeMonitor)
            return true;

        const pipelines = this.pipelinesManager.pipelines;
        const pipeline = pipelines[this.pipelineId] ?? pipelines.pipeline_default;
        return !pipeline.effects.some(effect => SURFACE_EFFECTS.includes(effect.type));
    }

    updateBackground(rebuild = false) {
        const shared = this.sharesBackground();
        if (!rebuild && shared === (this.background !== null))
            return;

        if (!shared && this.own) {
            this.own.pipeline.change_pipeline_to(this.pipelineId);
            this.own.roundedPipeline.update();
            return;
        }

        this.releaseBackground();
        if (shared) {
            this.background = global.blur_my_shell._shared_backgrounds.acquire(
                this.monitorIndex, this.pipelineId, this
            );
            this.updateBackgroundVisibility();
        } else {
            this.createOwnBackground();
        }
        this.queue_redraw();
    }

    createOwnBackground() {
        const pipeline = new Pipeline(
            global.blur_my_shell._effects_manager, this.pipelinesManager, this.pipelineId
        );
        const bgManagers = [];
        const actor = pipeline.create_background_with_effects(
            this.monitorIndex, bgManagers, this, `${this.name}-own`, false
        );
        actor.add_constraint(new Clutter.BindConstraint({
            source: this,
            coordinate: Clutter.BindCoordinate.SIZE,
        }));
        const roundedPipeline = new RoundedPipeline(
            global.blur_my_shell._effects_manager, this.getRadius, this.getCorners
        );
        roundedPipeline.bind(pipeline, actor);
        roundedPipeline.setStraightCorners(this.straightCorners);
        this.own = { pipeline, actor, roundedPipeline, bgManager: bgManagers[0] };
        this.syncOwnClip();
    }

    /// The clip gives the effects of the own background their bounds.
    syncOwnClip() {
        if (!this.own)
            return;

        if (this.has_clip)
            this.own.actor.set_clip(...this.get_clip());
        else
            this.own.actor.remove_clip();
    }

    releaseBackground() {
        if (this.background) {
            global.blur_my_shell._shared_backgrounds.release(this.background, this);
            this.background = null;
        }
        if (this.own) {
            this.own.roundedPipeline.destroy();
            this.own.pipeline.destroy();
            this.own.bgManager.destroy();
            this.own.actor.destroy();
            this.own = null;
        }
    }

    disconnectPipelineUpdated() {
        if (this.pipelineUpdatedId)
            this.pipelinesManager.disconnect(this.pipelineUpdatedId);
        this.pipelineUpdatedId = 0;
    }

    updateBackgroundVisibility() {
        if (this.background)
            global.blur_my_shell._shared_backgrounds.updateVisibility(this.background);
    }

    /// Takes the radius and corners again from the settings.
    updateCorners() {
        this.own?.roundedPipeline.update();
        this.queue_redraw();
    }

    setStraightCorners(straightCorners) {
        this.straightCorners = straightCorners;
        this.own?.roundedPipeline.setStraightCorners(straightCorners);
        this.queue_redraw();
    }

    vfunc_paint_node(node, paintContext) {
        const target = this.background?.capture.target;
        if (!target)
            return;

        const [clipX, clipY, clipWidth, clipHeight] = this.has_clip
            ? this.get_clip() : [0, 0, this.width, this.height];
        const x1 = Math.max(clipX, 0);
        const y1 = Math.max(clipY, 0);
        const x2 = Math.min(clipX + clipWidth, this.width);
        const y2 = Math.min(clipY + clipHeight, this.height);
        if (x2 <= x1 || y2 <= y1)
            return;

        if (this.coglContext !== target.context) {
            this.coglContext = target.context;
            this.pipeline = Cogl.Pipeline.new(target.context);
            this.pipeline.set_layer_filters(0, Cogl.PipelineFilter.LINEAR, Cogl.PipelineFilter.LINEAR);
            this.pipeline.set_layer_wrap_mode(0, Cogl.PipelineWrapMode.CLAMP_TO_EDGE);
            this.pipeline.add_snippet(getSharedSnippet());
            this.texture = null;
            this.appliedUniforms = null;
        }
        if (this.texture !== target.texture) {
            this.pipeline.set_layer_texture(0, target.texture);
            this.texture = target.texture;
        }
        this.updateUniforms(clipX, clipY, clipWidth, clipHeight,
            get_view_framebuffer(paintContext));

        setPaintOpacity(this.pipeline, this.get_paint_opacity() / 255);
        const output = new Clutter.PipelineNode(this.pipeline);
        output.set_name('BmsStaticBlur');
        addTextureRectangle(output, x1, y1, x2, y2,
            x1 / this.width, y1 / this.height, x2 / this.width, y2 / this.height);
        node.add_child(output);
    }

    updateUniforms(clipX, clipY, clipWidth, clipHeight, framebuffer) {
        const { corners_top: cornersTop, corners_bottom: cornersBottom } =
            getRoundedCorners(this.getCorners());
        const themeScale = St.ThemeContext.get_for_stage(this.get_stage()).scale_factor;
        const radius = !this.straightCorners && (cornersTop || cornersBottom)
            ? Math.min(this.getRadius() * themeScale, clipWidth / 2, clipHeight / 2)
            : 0;
        const uniforms = [
            radius, cornersTop, cornersBottom,
            clipX, clipY, clipWidth, clipHeight, this.width, this.height,
            framebuffer?.get_viewport_width(), framebuffer?.get_viewport_height(),
        ];
        if (this.appliedUniforms?.every((value, index) => value === uniforms[index]))
            return;

        const pipeline = this.pipeline;
        setFloat(pipeline, 'corner_radius', radius);
        setInt(pipeline, 'corners_top', cornersTop ? 1 : 0);
        setInt(pipeline, 'corners_bottom', cornersBottom ? 1 : 0);
        setFloat(pipeline, 'mask_x', clipX);
        setFloat(pipeline, 'mask_y', clipY);
        setFloat(pipeline, 'mask_width', clipWidth);
        setFloat(pipeline, 'mask_height', clipHeight);
        setFloat(pipeline, 'view_width', this.width);
        setFloat(pipeline, 'view_height', this.height);
        if (framebuffer) {
            setFloat(pipeline, 'bms_viewport_width', framebuffer.get_viewport_width());
            setFloat(pipeline, 'bms_viewport_height', framebuffer.get_viewport_height());
        }
        this.appliedUniforms = uniforms;
    }
});
