import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GObject from 'gi://GObject';
import Graphene from 'gi://Graphene';

import { get_painted_view, get_view_framebuffer } from '../backdrop/painted_view.js';
import { DelayedRelease } from '../delayed_release.js';

function showsActor(view, actor) {
    const layout = view.layout;
    const extents = actor.get_transformed_extents();
    return extents.get_x() < layout.x + layout.width
        && extents.get_x() + extents.get_width() > layout.x
        && extents.get_y() < layout.y + layout.height
        && extents.get_y() + extents.get_height() > layout.y;
}

/// Keeps what its actor draws in a texture for other actors to show, without drawing anything
/// itself. The actor is only drawn again once it or one of its effects has changed, and the textures
/// its effects need to draw are released once it hasn't changed for a while.
export const CaptureEffect = GObject.registerClass({
    GTypeName: 'BmsCaptureEffect',
}, class CaptureEffect extends Clutter.Effect {
    _init(releaseEffects) {
        super._init();
        this.idleRelease = new DelayedRelease(releaseEffects);
        this.target = null;
        this.valid = false;
    }

    vfunc_paint_node(node, paintContext, flags) {
        // outside of a stage view, like in a screencast, the capture from the last view paint is kept
        const framebuffer = get_view_framebuffer(paintContext);
        if (!framebuffer)
            return;

        // the actor covers one monitor but Clutter paints it in every stage view; capturing it in a
        // view with another scale would make a new capture every frame, each kept until collected
        const actor = this.get_actor();
        const view = get_painted_view();
        if (!showsActor(view, actor)) {
            // the change is only marked on the first view painted, and must reach the view showing it
            if (flags & Clutter.EffectPaintFlags.ACTOR_DIRTY)
                this.valid = false;
            return;
        }

        // the resource scale is rounded up, which would make the capture larger than the view
        const scale = view.get_scale();
        const width = Math.max(1, Math.ceil(actor.width * scale));
        const height = Math.max(1, Math.ceil(actor.height * scale));
        const context = framebuffer.get_context();
        if (this.target?.context !== context
            || this.target.width !== width || this.target.height !== height)
            this.createTarget(context, width, height);

        if (this.valid && !(flags & Clutter.EffectPaintFlags.ACTOR_DIRTY))
            return;

        this.target.framebuffer.orthographic(0, 0, actor.width, actor.height, -1, 1);
        const layer = Clutter.LayerNode.new_to_framebuffer(
            this.target.framebuffer, this.target.pipeline);
        layer.set_name('BmsCapture');
        layer.add_child(new Clutter.ActorNode(actor, 255));
        node.add_child(layer);
        this.valid = true;
        this.idleRelease.queue();
    }

    createTarget(context, width, height) {
        const texture = Cogl.Texture2D.new_with_size(context, width, height);
        texture.set_components(Cogl.TextureComponents.RGBA);
        texture.allocate();
        const framebuffer = Cogl.Offscreen.new_with_texture(texture);
        framebuffer.allocate();
        framebuffer.set_modelview_matrix(new Graphene.Matrix().init_identity());

        const pipeline = Cogl.Pipeline.new(context);
        pipeline.set_layer_texture(0, texture);
        this.target = { context, texture, framebuffer, pipeline, width, height };
        this.valid = false;
    }

    vfunc_set_actor(actor) {
        this.idleRelease.cancel();
        this.target = null;
        this.valid = false;
        super.vfunc_set_actor(actor);
    }
});
