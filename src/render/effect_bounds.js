export function getEffectBounds(actor) {
    const [x, y, width, height] = actor.has_clip
        ? actor.get_clip() : [0, 0, actor.width, actor.height];
    return {x, y, width, height};
}
