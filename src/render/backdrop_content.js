import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GObject from 'gi://GObject';

export const BackdropContent = GObject.registerClass({
    GTypeName: 'BmsBackdropContent',
    Implements: [Clutter.Content],
}, class BackdropContent extends GObject.Object {
    _init(capture) {
        super._init();
        this.capture = capture;
    }

    vfunc_paint_content(actor, node, _paintContext) {
        const pipeline = this.capture.pipeline;
        if (!pipeline)
            return;

        const opacity = actor.get_paint_opacity() / 255;
        const color = new Cogl.Color();
        color.init_from_4f(opacity, opacity, opacity, opacity);
        pipeline.set_color(color);
        const textureNode = new Clutter.PipelineNode(pipeline);
        textureNode.add_rectangle(new Clutter.ActorBox({
            x1: 0, y1: 0, x2: actor.width, y2: actor.height,
        }));
        node.add_child(textureNode);
    }
});
