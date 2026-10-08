import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GObject from 'gi://GObject';

/// Draws the captured backdrop in place of its actor. This is an effect rather than a content or an
/// actor painting itself: those are handed a root node holding the framebuffer being painted, which
/// GJS keeps alive until the next garbage collection, along with every framebuffer a screencast
/// paints the stage into.
export const BackdropOutputEffect = GObject.registerClass({
    GTypeName: 'BmsBackdropOutputEffect',
}, class BackdropOutputEffect extends Clutter.Effect {
    _init(capture) {
        super._init();
        this.capture = capture;
    }

    vfunc_paint_node(node, _paintContext, _flags) {
        const target = this.capture.target;
        if (target === null)
            return;

        const actor = this.get_actor();
        const opacity = actor.get_paint_opacity() / 255;
        const color = new Cogl.Color();
        color.init_from_4f(opacity, opacity, opacity, opacity);
        target.pipeline.set_color(color);
        const textureNode = new Clutter.PipelineNode(target.pipeline);
        textureNode.add_texture_rectangle(new Clutter.ActorBox({
            x1: 0, y1: 0, x2: actor.width, y2: actor.height,
        }), 0, 0, target.usedWidth / target.width, target.usedHeight / target.height);
        node.add_child(textureNode);
    }
});
