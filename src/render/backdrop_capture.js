import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GObject from 'gi://GObject';
import Graphene from 'gi://Graphene';
import Mtk from 'gi://Mtk';
import { BackdropContent } from './backdrop_content.js';

const PIXEL_EPSILON = 1 / 1024;

function captureGeometry(actor, framebuffer) {
    const modelview = framebuffer.get_modelview_matrix();
    const projection = framebuffer.get_projection_matrix();
    const viewportX = framebuffer.get_viewport_x();
    const viewportY = framebuffer.get_viewport_y();
    const viewportWidth = framebuffer.get_viewport_width();
    const viewportHeight = framebuffer.get_viewport_height();
    const corners = [[0, 0], [actor.width, 0], [0, actor.height], [actor.width, actor.height]]
        .map(([x, y]) => {
            const local = new Graphene.Vec4().init(x, y, 0, 1);
            const projected = projection.transform_vec4(modelview.transform_vec4(local));
            const w = projected.get_w();
            return [
                viewportX + (projected.get_x() / w + 1) * viewportWidth / 2,
                viewportY + (1 - projected.get_y() / w) * viewportHeight / 2,
            ];
        });
    if (!corners.flat().every(Number.isFinite))
        return null;

    const xs = corners.map(point => point[0]);
    const ys = corners.map(point => point[1]);
    const sourceX = Math.floor(Math.min(...xs) + PIXEL_EPSILON);
    const sourceY = Math.floor(Math.min(...ys) + PIXEL_EPSILON);
    const width = Math.max(1, Math.ceil(Math.max(...xs) - PIXEL_EPSILON) - sourceX);
    const height = Math.max(1, Math.ceil(Math.max(...ys) - PIXEL_EPSILON) - sourceY);

    const clippedSourceX = Math.max(0, sourceX);
    const clippedSourceY = Math.max(0, sourceY);
    const destinationX = clippedSourceX - sourceX;
    const destinationY = clippedSourceY - sourceY;
    const copyWidth = Math.max(0, Math.min(
        width - destinationX,
        framebuffer.get_width() - clippedSourceX
    ));
    const copyHeight = Math.max(0, Math.min(
        height - destinationY,
        framebuffer.get_height() - clippedSourceY
    ));

    return {
        sourceX: clippedSourceX,
        sourceY: clippedSourceY,
        destinationX,
        destinationY,
        copyWidth,
        copyHeight,
        width,
        height,
    };
}

function captureRectangles(paintContext, view, geometry) {
    const { sourceX, sourceY, copyWidth, copyHeight } = geometry;
    const full = { x: sourceX, y: sourceY, width: copyWidth, height: copyHeight };
    const damage = paintContext.get_redraw_clip();
    if (!damage || !view)
        return [full];

    const layout = view.layout;
    const scale = view.get_scale();
    const rectangles = [];
    const iterator = new Mtk.RegionIterator();
    for (iterator.init(damage); !iterator.at_end(); iterator.next()) {
        const rect = iterator.rectangle;
        const x = Math.max(sourceX, Math.floor((rect.x - layout.x) * scale));
        const y = Math.max(sourceY, Math.floor((rect.y - layout.y) * scale));
        const right = Math.min(sourceX + copyWidth,
            Math.ceil((rect.x + rect.width - layout.x) * scale));
        const bottom = Math.min(sourceY + copyHeight,
            Math.ceil((rect.y + rect.height - layout.y) * scale));
        if (right > x && bottom > y)
            rectangles.push({ x, y, width: right - x, height: bottom - y });
    }
    return rectangles;
}

export const BackdropCaptureEffect = GObject.registerClass({
    GTypeName: 'BmsBackdropCaptureEffect',
}, class BackdropCaptureEffect extends Clutter.Effect {
    _init(contentActor) {
        super._init();
        this.contentActor = contentActor;
        this.target = null;
        this.targets = new Map();
        contentActor.set_content(new BackdropContent(this));
    }

    get texture() {
        return this.target?.texture ?? null;
    }

    get pipeline() {
        return this.target?.pipeline ?? null;
    }

    ensureFramebuffer(width, height, sourceFramebuffer, view) {
        const context = sourceFramebuffer.get_context();
        const cached = this.targets.get(view);
        if (cached?.width === width && cached?.height === height
            && cached.context === context
            && (!view || cached.sourceFramebuffer === sourceFramebuffer)) {
            this.target = cached;
            return;
        }
        const texture = Cogl.Texture2D.new_with_size(context, width, height);
        texture.set_components(Cogl.TextureComponents.RGBA);
        texture.allocate();

        const framebuffer = Cogl.Offscreen.new_with_texture(texture);
        framebuffer.allocate();
        framebuffer.clear4f(Cogl.BufferBit.COLOR, 0, 0, 0, 0);

        const pipeline = Cogl.Pipeline.new(context);
        pipeline.set_layer_texture(0, texture);
        pipeline.set_layer_filters(
            0,
            Cogl.PipelineFilter.LINEAR,
            Cogl.PipelineFilter.LINEAR
        );
        pipeline.set_layer_wrap_mode(0, Cogl.PipelineWrapMode.CLAMP_TO_EDGE);

        this.target = {
            texture, framebuffer, pipeline, width, height, context,
            sourceFramebuffer: view ? sourceFramebuffer : null,
            destroyId: cached?.destroyId
                ?? view?.connect('destroy', () => this.releaseTarget(view)) ?? 0,
        };
        this.targets.set(view, this.target);
    }

    releaseTarget(view) {
        const target = this.targets.get(view);
        if (!target)
            return;

        this.targets.delete(view);
        if (target.destroyId)
            view.disconnect(target.destroyId);
        if (this.target === target)
            this.target = null;
    }

    vfunc_paint_node(node, paintContext) {
        const actor = this.get_actor();
        const sourceFramebuffer = paintContext.get_framebuffer();
        const geometry = captureGeometry(actor, sourceFramebuffer);
        if (!geometry)
            return;

        const view = global.stage.peek_stage_views().find(
            stageView => stageView.get_framebuffer() === sourceFramebuffer
        ) ?? null;
        this.ensureFramebuffer(
            geometry.width,
            geometry.height,
            sourceFramebuffer,
            view
        );

        for (const rect of captureRectangles(paintContext, view, geometry)) {
            if (rect.width <= 0 || rect.height <= 0)
                continue;
            sourceFramebuffer.blit(
                this.target.framebuffer,
                rect.x,
                rect.y,
                geometry.destinationX + rect.x - geometry.sourceX,
                geometry.destinationY + rect.y - geometry.sourceY,
                rect.width,
                rect.height
            );
        }

        node.add_child(new Clutter.ActorNode(actor, -1));
    }

    vfunc_set_actor(actor) {
        if (!actor)
            this.release(false);

        super.vfunc_set_actor(actor);
    }

    release(clearContent = true) {
        if (clearContent)
            this.contentActor?.set_content(null);
        this.contentActor = null;
        for (const view of this.targets.keys())
            this.releaseTarget(view);
        this.target = null;
    }
});
