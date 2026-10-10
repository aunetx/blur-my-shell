const captures = new Set();

export function registerBackdrop(capture) {
    captures.add(capture);
}

export function unregisterBackdrop(capture) {
    captures.delete(capture);
}

function overlaps(a, b) {
    return a.origin.x < b.origin.x + b.size.width
        && b.origin.x < a.origin.x + a.size.width
        && a.origin.y < b.origin.y + b.size.height
        && b.origin.y < a.origin.y + a.size.height;
}

export function queueBackdropRedraw(actor) {
    const affected = [{ actor, bounds: actor.get_transformed_extents() }];
    const candidates = new Map();
    for (const capture of captures) {
        const other = capture.get_actor();
        if (other !== actor && other?.mapped)
            candidates.set(other, other.get_transformed_extents());
    }

    for (let index = 0; index < affected.length; index++) {
        for (const [other, bounds] of candidates) {
            if (!overlaps(affected[index].bounds, bounds))
                continue;
            affected.push({ actor: other, bounds });
            candidates.delete(other);
        }
    }

    for (const surface of affected)
        surface.actor.queue_redraw();
}
