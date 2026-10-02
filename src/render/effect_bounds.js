export function getEffectBounds(actor) {
    const [x, y, width, height] = actor.has_clip
        ? actor.get_clip() : [0, 0, actor.width, actor.height];
    return {x, y, width, height};
}

export function getLocalClip(actor, rect) {
    const [ok1, x1, y1] = actor.transform_stage_point(rect.x, rect.y);
    const [ok2, x2, y2] = actor.transform_stage_point(rect.x + rect.width, rect.y + rect.height);
    if (!ok1 || !ok2 || ![x1, y1, x2, y2].every(Number.isFinite))
        return null;

    const x = Math.floor(x1);
    const y = Math.floor(y1);
    return { x, y, width: Math.ceil(x2) - x, height: Math.ceil(y2) - y };
}
