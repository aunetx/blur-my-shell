import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';
import { addTextureRectangle, setPaintOpacity } from '../paint_nodes.js';

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
        const actor = this.get_actor();
        const opacity = actor.get_paint_opacity() / 255;
        const current = this.capture.target;
        if (!current)
            return;

        // clones and offscreen paints only show their own capture
        const targets = current.inClone || current === this.capture.targets.get(null)
            ? [current]
            : [...this.capture.targets.entries()].filter(([view]) => view).map(([, target]) => target);

        // Each view only captures its intersection with the actor. Compose those intersections
        // before filtering, so offscreen paints can reuse a complete backdrop without wrapping
        // the temporary screenshot or screencast framebuffer in JS.
        for (const target of targets) {
            const geometry = target.geometry;
            if (!geometry || geometry.copyWidth <= 0 || geometry.copyHeight <= 0)
                continue;

            const { destinationX: x, destinationY: y, copyWidth: width, copyHeight: height } = geometry;
            setPaintOpacity(target.pipeline, opacity);
            const textureNode = new Clutter.PipelineNode(target.pipeline);
            addTextureRectangle(textureNode,
                actor.width * x / target.usedWidth,
                actor.height * y / target.usedHeight,
                actor.width * (x + width) / target.usedWidth,
                actor.height * (y + height) / target.usedHeight,
                x / target.width, y / target.height,
                (x + width) / target.width, (y + height) / target.height);
            node.add_child(textureNode);
        }
    }
});
