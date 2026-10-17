const surfaces = new WeakMap();

export function registerSurface(surface) {
    surfaces.set(surface.actor, surface);
}

export function unregisterSurface(surface) {
    surfaces.delete(surface.actor);
}

function actorPath(actor) {
    const path = [];
    while (actor) {
        path.push(actor);
        actor = actor.get_parent();
    }
    return path.reverse();
}

function paintsBefore(target, other) {
    const path = actorPath(target);
    const otherPath = actorPath(other);
    let index = 0;
    while (index < path.length && index < otherPath.length
        && path[index] === otherPath[index])
        index++;

    if (index === path.length)
        return true;
    if (index === otherPath.length || index === 0)
        return false;

    const children = path[index - 1].get_children();
    return children.indexOf(path[index]) < children.indexOf(otherPath[index]);
}

export function getSurfaceSibling(surface, sibling) {
    let insertionPoint = sibling;
    let actor = sibling?.get_previous_sibling();
    while (actor) {
        const other = surfaces.get(actor);
        if (!other || other.parent !== surface.parent || other.sibling !== sibling)
            break;
        if (other !== surface && paintsBefore(surface.target, other.target))
            insertionPoint = actor;
        actor = actor.get_previous_sibling();
    }
    return insertionPoint;
}
