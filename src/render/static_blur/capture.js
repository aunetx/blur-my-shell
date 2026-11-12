import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Graphene from 'gi://Graphene';

import { get_painted_view, get_view_framebuffer } from '../backdrop/painted_view.js';

const IDLE_RELEASE_DELAY_MS = 5000;

/// Keeps what its actor draws in a texture for other actors to show, without drawing anything
/// itself. The actor is only drawn again once it or one of its effects has changed, and the textures
/// its effects need to draw are released once it hasn't changed for a while.
export const CaptureEffect = GObject.registerClass({
    GTypeName: 'BmsCaptureEffect',
}, class CaptureEffect extends Clutter.Effect {
    _init(releaseEffects) {
        super._init();
        this.releaseEffects = releaseEffects;
        this.target = null;
        this.valid = false;
        this.releaseId = 0;
        this.lastCapture = 0;
    }

    vfunc_paint_node(node, paintContext, flags) {
        // outside of a stage view, like in a screencast, the capture from the last view paint is kept
        const framebuffer = get_view_framebuffer(paintContext);
        if (!framebuffer)
            return;

        // the resource scale is rounded up, which would make the capture larger than the view
        const actor = this.get_actor();
        const scale = get_painted_view().get_scale();
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
        this.queueRelease();
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

    /// Captures can follow each other on every frame, like for an animated effect, so the timeout
    /// isn't replaced for each of them but waits for the delay since the last one.
    queueRelease() {
        this.lastCapture = GLib.get_monotonic_time();
        if (this.releaseId)
            return;
        this.scheduleRelease(IDLE_RELEASE_DELAY_MS);
    }

    scheduleRelease(delay) {
        this.releaseId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay, () => {
            const idle = (GLib.get_monotonic_time() - this.lastCapture) / 1000;
            if (idle < IDLE_RELEASE_DELAY_MS) {
                this.scheduleRelease(Math.ceil(IDLE_RELEASE_DELAY_MS - idle));
            } else {
                this.releaseId = 0;
                this.releaseEffects();
            }
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
        this.cancelRelease();
        this.target = null;
        this.valid = false;
        super.vfunc_set_actor(actor);
    }
});
