import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GObject from 'gi://GObject';

function currentStageView(actor, framebuffer) {
    const views = actor.peek_stage_views();
    return views.find(view => view.get_framebuffer() === framebuffer)
        ?? views.find(view => {
            const viewFramebuffer = view.get_framebuffer();
            return viewFramebuffer.get_width() === framebuffer.get_width()
                && viewFramebuffer.get_height() === framebuffer.get_height();
        })
        ?? views[0]
        ?? null;
}

function captureGeometry(actor, framebuffer) {
    const [stageX, stageY] = actor.get_transformed_position();
    const [stageWidth, stageHeight] = actor.get_transformed_size();
    const view = currentStageView(actor, framebuffer);
    const scale = view?.get_scale() ?? actor.get_resource_scale();
    const layout = view?.layout;
    const viewX = layout?.x ?? 0;
    const viewY = layout?.y ?? 0;

    const sourceX = Math.floor((stageX - viewX) * scale);
    const sourceY = Math.floor((stageY - viewY) * scale);
    const width = Math.max(1, Math.ceil(stageWidth * scale));
    const height = Math.max(1, Math.ceil(stageHeight * scale));

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

export const BackdropCaptureEffect = GObject.registerClass({
    GTypeName: 'BmsBackdropCaptureEffect',
}, class BackdropCaptureEffect extends Clutter.Effect {
    _init(contentActor) {
        super._init();
        this.contentActor = contentActor;
        this.width = 0;
        this.height = 0;
        this.context = null;
    }

    ensureFramebuffer(width, height, context) {
        if (
            this.framebuffer
            && this.width === width
            && this.height === height
            && this.context === context
        )
            return;

        const texture = Cogl.Texture2D.new_with_size(context, width, height);
        texture.set_components(Cogl.TextureComponents.RGBA);
        texture.allocate();

        const framebuffer = Cogl.Offscreen.new_with_texture(texture);
        framebuffer.allocate();

        const pipeline = Cogl.Pipeline.new(context);
        pipeline.set_layer_texture(0, texture);
        pipeline.set_layer_filters(
            0,
            Cogl.PipelineFilter.LINEAR,
            Cogl.PipelineFilter.LINEAR
        );
        pipeline.set_layer_wrap_mode(0, Cogl.PipelineWrapMode.CLAMP_TO_EDGE);

        this.texture = texture;
        this.framebuffer = framebuffer;
        this.pipeline = pipeline;
        this.width = width;
        this.height = height;
        this.context = context;
        this.contentActor.set_content(
            Clutter.TextureContent.new_from_texture(texture, null)
        );
    }

    vfunc_paint_node(node, paintContext) {
        const actor = this.get_actor();
        const sourceFramebuffer = paintContext.get_framebuffer();
        const geometry = captureGeometry(actor, sourceFramebuffer);

        this.ensureFramebuffer(
            geometry.width,
            geometry.height,
            sourceFramebuffer.get_context()
        );

        const captureNode = Clutter.LayerNode.new_to_framebuffer(
            this.framebuffer,
            this.pipeline
        );
        captureNode.set_name('BmsBackdropCapture');
        node.add_child(captureNode);

        if (geometry.copyWidth > 0 && geometry.copyHeight > 0) {
            const blitNode = new Clutter.BlitNode(sourceFramebuffer);
            blitNode.set_name('BmsBackdropBlit');
            blitNode.add_blit_rectangle(
                geometry.sourceX,
                geometry.sourceY,
                geometry.destinationX,
                geometry.destinationY,
                geometry.copyWidth,
                geometry.copyHeight
            );
            captureNode.add_child(blitNode);
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
        this.texture = null;
        this.framebuffer = null;
        this.pipeline = null;
        this.width = 0;
        this.height = 0;
        this.context = null;
    }
});
