import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Mtk from 'gi://Mtk';
import St from 'gi://St';
import { BackdropOutputEffect } from './output.js';
import { registerBackdrop, unregisterBackdrop, queueBackdropRedraw } from './damage.js';
import { get_painted_view, get_view_framebuffer, get_view_paint } from './painted_view.js';
import { get_snippet } from '../shader/snippet_cache.js';
import {
    getTextureCapacity,
    largestViewSize,
    TEXTURE_REGION_SOURCE,
    TextureRegion,
    textureFits,
    textureRegionDeclarations,
} from '../shader/texture_region.js';

const PIXEL_EPSILON = 1 / 1024;
// a clone that stopped being painted, like a workspace thumbnail once the overview closes
const CLONE_TARGET_LIFETIME_US = 1000000;
const CAPTURE_TEXTURE_REGION = 'bms_capture_region';

function getCaptureSnippet() {
    return get_snippet(CAPTURE_TEXTURE_REGION, () => {
        const snippet = Cogl.Snippet.new(
            Cogl.SnippetHook.TEXTURE_LOOKUP,
            `${textureRegionDeclarations(CAPTURE_TEXTURE_REGION)}\n${TEXTURE_REGION_SOURCE}`,
            null
        );
        snippet.set_replace(
            `cogl_texel = bms_sample_region(cogl_sampler, cogl_tex_coord.st, ${CAPTURE_TEXTURE_REGION});`
        );
        return snippet;
    });
}

// Mutter 48 renamed `cogl_blit_framebuffer()` to `cogl_framebuffer_blit()`
const blitFramebuffer = Cogl.Framebuffer.prototype.blit
    ? (source, ...args) => source.blit(...args)
    : Cogl.blit_framebuffer;

function captureGeometry(actor, framebuffer) {
    // rows of the modelview-projection matrix, which transforms row vectors
    const m = framebuffer.get_modelview_matrix()
        .multiply(framebuffer.get_projection_matrix())
        .to_float();
    const viewportX = framebuffer.get_viewport_x();
    const viewportY = framebuffer.get_viewport_y();
    const viewportWidth = framebuffer.get_viewport_width();
    const viewportHeight = framebuffer.get_viewport_height();
    const corners = [[0, 0], [actor.width, 0], [0, actor.height], [actor.width, actor.height]]
        .map(([x, y]) => {
            const w = x * m[3] + y * m[7] + m[15];
            return [
                viewportX + ((x * m[0] + y * m[4] + m[12]) / w + 1) * viewportWidth / 2,
                viewportY + (1 - (x * m[1] + y * m[5] + m[13]) / w) * viewportHeight / 2,
            ];
        });
    return geometryFromCorners(corners, framebuffer);
}

/// The geometry of the actor in a stage view's framebuffer, from its position on the stage.
function viewCaptureGeometry(actor, view) {
    const layout = view.layout;
    const scale = view.get_scale();
    const corners = actor.get_abs_allocation_vertices()
        .map(vertex => [(vertex.x - layout.x) * scale, (vertex.y - layout.y) * scale]);
    return geometryFromCorners(corners, view.get_framebuffer());
}

/// Like a window dimmed by GNOME Shell while it has an attached modal dialog.
function hasOffscreenAncestor(actor) {
    for (let ancestor = actor.get_parent(); ancestor; ancestor = ancestor.get_parent()) {
        if (ancestor.get_effects()
            .some(effect => effect instanceof Clutter.OffscreenEffect && effect.enabled))
            return true;
    }
    return false;
}

function geometryFromCorners(corners, framebuffer) {
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
    // Mutter only repaints its framebuffer clip, and hands us that clip grown out to logical pixels.
    // At fractional scales its edges can cover pixels left over from an older frame, so an edge
    // inside the capture steps in by a logical pixel.
    const inset = Number.isInteger(scale) ? 0 : 1;
    const start = (logical, limit) => Math.floor(logical * scale) <= limit
        ? limit : Math.ceil((logical + inset) * scale);
    const end = (logical, limit) => Math.ceil(logical * scale) >= limit
        ? limit : Math.floor((logical - inset) * scale);

    const rectangles = [];
    const iterator = new Mtk.RegionIterator();
    for (iterator.init(damage); !iterator.at_end(); iterator.next()) {
        const rect = iterator.rectangle;
        const x = start(rect.x - layout.x, sourceX);
        const y = start(rect.y - layout.y, sourceY);
        const right = end(rect.x + rect.width - layout.x, sourceX + copyWidth);
        const bottom = end(rect.y + rect.height - layout.y, sourceY + copyHeight);
        if (right > x && bottom > y)
            rectangles.push({ x, y, width: right - x, height: bottom - y });
    }
    return rectangles;
}

function coversCapture(rectangles, geometry) {
    if (rectangles.length === 1) {
        const rect = rectangles[0];
        return rect.x === geometry.sourceX && rect.y === geometry.sourceY
            && rect.width === geometry.copyWidth && rect.height === geometry.copyHeight;
    }
    const bounds = new Mtk.Rectangle({
        x: geometry.sourceX,
        y: geometry.sourceY,
        width: geometry.copyWidth,
        height: geometry.copyHeight,
    });
    const uncovered = Mtk.Region.create_rectangle(bounds);
    for (const rect of rectangles)
        uncovered.subtract_rectangle(new Mtk.Rectangle(rect));
    return uncovered.is_empty();
}

export const BackdropCaptureEffect = GObject.registerClass({
    GTypeName: 'BmsBackdropCaptureEffect',
}, class BackdropCaptureEffect extends Clutter.Effect {
    _init(contentActor) {
        super._init();
        this.target = null;
        this.targets = new Map();
        this.cloneTargets = new Map();
        this.cloneViewPaint = -1;
        this.clonesPainted = 0;
        this.viewDestroyIds = new Map();
        this.actorGeometry = null;
        this.output = new St.Widget();
        this.output.add_constraint(new Clutter.BindConstraint({
            source: contentActor,
            coordinate: Clutter.BindCoordinate.SIZE,
        }));
        this.output.add_effect(new BackdropOutputEffect(this));
        this.output.connect('destroy', () => this.output = null);
        contentActor.add_child(this.output);
    }

    ensureFramebuffer(targets, key, width, height, sourceFramebuffer, view) {
        const context = sourceFramebuffer.get_context();
        const cached = targets.get(key) ?? null;
        const reusable = cached !== null && cached.context === context
            && (!view || cached.sourceFramebuffer === sourceFramebuffer);
        if (reusable && textureFits(cached, width, height, cached.width, cached.height)) {
            if (cached.usedWidth !== width || cached.usedHeight !== height) {
                cached.usedWidth = width;
                cached.usedHeight = height;
                cached.framebuffer.clear4f(Cogl.BufferBit.COLOR, 0, 0, 0, 0);
                cached.region.update(cached);
            }
            this.target = cached;
            return;
        }

        let textureWidth = width;
        let textureHeight = height;
        if (reusable) {
            const limit = largestViewSize();
            textureWidth = getTextureCapacity(width, cached.width, limit.width);
            textureHeight = getTextureCapacity(height, cached.height, limit.height);
        }
        const texture = Cogl.Texture2D.new_with_size(context, textureWidth, textureHeight);
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
        pipeline.add_layer_snippet(0, getCaptureSnippet());

        this.target = {
            texture, framebuffer, pipeline, context,
            width: textureWidth,
            height: textureHeight,
            usedWidth: width,
            usedHeight: height,
            region: new TextureRegion(pipeline, CAPTURE_TEXTURE_REGION),
            sourceFramebuffer: view ? sourceFramebuffer : null,
        };
        this.target.region.update(this.target);
        targets.set(key, this.target);
        if (view && !this.viewDestroyIds.has(view))
            this.viewDestroyIds.set(view, view.connect('destroy', () => this.releaseView(view)));
    }

    /// Clones are painted at their own size and place, like window previews in the overview and
    /// their workspace thumbnails, so each keeps its own capture instead of overwriting another's.
    /// They are painted in the same order every time, which keeps a clone on the same capture while
    /// it animates.
    cloneTargetsFor(view) {
        let targets = this.cloneTargets.get(view);
        if (!targets) {
            targets = new Map();
            this.cloneTargets.set(view, targets);
        }

        const now = GLib.get_monotonic_time();
        for (const [key, target] of targets) {
            if (now - target.lastUsed > CLONE_TARGET_LIFETIME_US)
                targets.delete(key);
        }
        return targets;
    }

    releaseView(view) {
        if (this.target && [this.targets.get(view), ...this.cloneTargets.get(view)?.values() ?? []]
            .includes(this.target))
            this.target = null;
        this.targets.delete(view);
        this.cloneTargets.delete(view);
        const destroyId = this.viewDestroyIds.get(view);
        if (destroyId)
            view.disconnect(destroyId);
        this.viewDestroyIds.delete(view);
    }

    vfunc_paint_node(node, paintContext) {
        const actor = this.get_actor();
        let sourceFramebuffer = get_view_framebuffer(paintContext);
        if (!sourceFramebuffer) {
            node.add_child(new Clutter.ActorNode(actor, -1));
            return;
        }

        const painted_view = get_painted_view();
        let view = painted_view.get_framebuffer() === sourceFramebuffer ? painted_view : null;
        const inClone = actor.is_in_clone_paint();
        let geometry;
        if (!view && !inClone && hasOffscreenAncestor(actor)) {
            // an ancestor is painted offscreen, so capture what is behind it from the stage view
            view = painted_view;
            sourceFramebuffer = view.get_framebuffer();
            geometry = viewCaptureGeometry(actor, view);
        } else {
            geometry = captureGeometry(actor, sourceFramebuffer);
        }
        if (!geometry)
            return;
        if (inClone) {
            if (this.cloneViewPaint !== get_view_paint()) {
                this.cloneViewPaint = get_view_paint();
                this.clonesPainted = 0;
            }
            this.ensureFramebuffer(this.cloneTargetsFor(view), this.clonesPainted++,
                geometry.width, geometry.height, sourceFramebuffer, view);
        } else {
            const actorGeometry = actor.get_abs_allocation_vertices()
                .flatMap(vertex => [vertex.x, vertex.y, vertex.z]);
            if (!this.actorGeometry?.every((value, i) => value === actorGeometry[i])) {
                for (const target of this.targets.values())
                    target.geometry = null;
                this.actorGeometry = actorGeometry;
            }
            this.ensureFramebuffer(this.targets, view,
                geometry.width, geometry.height, sourceFramebuffer, view);
        }

        this.target.geometry = geometry;
        this.target.inClone = inClone;
        this.target.lastUsed = GLib.get_monotonic_time();
        const rectangles = captureRectangles(paintContext, view, geometry);
        for (const rect of rectangles) {
            if (rect.width <= 0 || rect.height <= 0)
                continue;
            blitFramebuffer(sourceFramebuffer,
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
        if (rectangles.length > 0 && !coversCapture(rectangles, geometry))
            queueBackdropRedraw(actor);
    }

    vfunc_set_actor(actor) {
        if (!actor)
            this.release();

        super.vfunc_set_actor(actor);
        if (actor)
            registerBackdrop(this);
    }

    release() {
        unregisterBackdrop(this);
        if (this.output)
            this.output.destroy();
        for (const view of [...this.viewDestroyIds.keys()])
            this.releaseView(view);
        this.targets.clear();
        this.cloneTargets.clear();
        this.target = null;
        this.actorGeometry = null;
    }
});
