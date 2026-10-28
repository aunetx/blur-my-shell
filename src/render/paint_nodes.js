// The preferences load the blur effects too, but have no Clutter. This doesn't use utils.js, which
// imports shader_effect.js while being evaluated.
const IN_SHELL = typeof global !== 'undefined';
const Clutter = IN_SHELL ? (await import('gi://Clutter')).default : null;
const Cogl = IN_SHELL ? (await import('gi://Cogl')).default : null;

// Paint nodes and pipelines copy the box and color they are given, so one of each serves every
// paint. Each allocation in a paint is garbage, and on GNOME 46 every JS paint callback is skipped
// while it is being swept.
const box = IN_SHELL ? new Clutter.ActorBox() : null;
const color = IN_SHELL ? new Cogl.Color() : null;

export function addRectangle(node, x, y, width, height) {
    box.init(x, y, x + width, y + height);
    node.add_rectangle(box);
}

export function addTextureRectangle(node, x1, y1, x2, y2, tx1, ty1, tx2, ty2) {
    box.init(x1, y1, x2, y2);
    node.add_texture_rectangle(box, tx1, ty1, tx2, ty2);
}

export function setPaintOpacity(pipeline, opacity) {
    color.init_from_4f(opacity, opacity, opacity, opacity);
    pipeline.set_color(color);
}
