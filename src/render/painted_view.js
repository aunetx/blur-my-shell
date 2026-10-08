let painted_view = null;

export function track_painted_views(connections) {
    connections.connect(global.stage, 'before-paint', (_, view) => painted_view = view);
    connections.connect(global.stage, 'after-paint', () => painted_view = null);
}

/// The framebuffer being painted, but only while a stage view is painted. Screencasts using shared
/// memory paint the stage into a new framebuffer for every frame, and holding one from JS would keep
/// each of them alive until the next garbage collection.
export function get_view_framebuffer(paint_context) {
    return painted_view ? paint_context.get_framebuffer() : null;
}
