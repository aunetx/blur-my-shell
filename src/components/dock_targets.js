import St from 'gi://St';

const DASH_TO_DOCK_CONTAINER = 'dashtodockContainer';
const DHRUVA_CONTAINER = 'DhruvaContainer';
const SIMPLE_TASKBAR_CONTAINER = 'SimpleTaskbarDock';
const SIMPLE_TASKBAR_DOCK = 'panel';

function find_child(actor, name) {
    return actor.get_children().find(child => child.get_name() === name);
}

function is_dash_to_dock(actor) {
    return actor.get_name() === DASH_TO_DOCK_CONTAINER &&
        actor.constructor.name === 'DashToDock';
}

function is_dhruva(actor) {
    return actor.get_name() === DHRUVA_CONTAINER;
}

function is_simple_taskbar(actor) {
    return actor.get_name() === SIMPLE_TASKBAR_CONTAINER;
}

function is_native_dash(actor) {
    return actor.get_name() === 'dash' && Boolean(actor._background);
}

function resolve_dash_to_dock(container) {
    if (!is_dash_to_dock(container))
        return null;

    const slider = container._slider;
    const content_parent = slider.get_child();
    const content = content_parent && find_child(content_parent, 'dash');
    if (!content)
        return null;

    return {
        content,
        content_parent,
        background: content._background,
        slider,
        theme_manager: container._themeManager,
    };
}

function resolve_dhruva(container) {
    if (!is_dhruva(container))
        return null;

    // Dhruva releases before August 2026 don't expose boxActor and bgActor
    const content = container.boxActor ?? find_child(container, 'Dhruva');
    const background = container.bgActor ?? find_child(container, 'DhruvaBackground');
    if (!content || !background)
        return null;

    return {
        content,
        content_parent: container,
        background,
        slider: null,
        theme_manager: null,
    };
}

function resolve_simple_taskbar(container) {
    if (!is_simple_taskbar(container))
        return null;

    const content = find_child(container, SIMPLE_TASKBAR_DOCK);
    if (!content)
        return null;

    return {
        content,
        content_parent: container,
        background: content,
        slider: null,
        theme_manager: null,
    };
}

function resolve_native_dash(container) {
    if (!is_native_dash(container))
        return null;
    let ancestor = container.get_parent();
    while (ancestor) {
        if (is_supported_dock_container(ancestor))
            return null;
        ancestor = ancestor.get_parent();
    }
    let sibling = container;
    let parent = sibling.get_parent();
    while (parent && !['uiGroup', 'overviewGroup'].includes(parent.get_name())) {
        sibling = parent;
        parent = parent.get_parent();
    }
    if (!parent)
        return null;
    return {
        content: container,
        content_parent: parent,
        background: container._background,
        slider: null,
        theme_manager: null,
        sibling,
    };
}

export function has_valid_allocation(actor) {
    return actor.has_allocation() && actor.width > 0 && actor.height > 0;
}

export function get_dock_corners(background) {
    const node = background.get_theme_node();
    const scale = St.ThemeContext.get_for_stage(global.stage).scale_factor;
    const top = Math.max(node.get_border_radius(St.Corner.TOPLEFT), node.get_border_radius(St.Corner.TOPRIGHT));
    const bottom = Math.max(node.get_border_radius(St.Corner.BOTTOMLEFT), node.get_border_radius(St.Corner.BOTTOMRIGHT));
    const radius = Math.floor(Math.min(Math.max(top, bottom), background.width / 2, background.height / 2)) / scale;
    let corners = 0;
    if (top > 0 && bottom === 0)
        corners = 1;
    else if (bottom > 0 && top === 0)
        corners = 2;
    return { radius, corners };
}

export function is_dock_ready(container, target) {
    return Boolean(target) && [
        container, target.content_parent, target.content, target.background,
    ].every(has_valid_allocation);
}

export function is_supported_dock_container(actor) {
    return is_dash_to_dock(actor) || is_dhruva(actor) || is_simple_taskbar(actor)
        || is_native_dash(actor);
}

export function resolve_dock_target(container) {
    return resolve_dash_to_dock(container) ?? resolve_dhruva(container)
        ?? resolve_simple_taskbar(container) ?? resolve_native_dash(container);
}
