const DASH_TO_DOCK_CONTAINER = 'dashtodockContainer';
const DHRUVA_CONTAINER = 'DhruvaContainer';

function find_child(actor, name) {
    return actor?.get_children?.().find(child => child.get_name?.() === name) ?? null;
}

function resolve_dash_to_dock(container) {
    if (
        container?.get_name?.() !== DASH_TO_DOCK_CONTAINER ||
        container.constructor?.name !== 'DashToDock'
    )
        return null;

    const slider = container._slider ?? null;
    const content_parent = slider?.get_child?.() ?? null;
    const content = find_child(content_parent, 'dash');
    const background = content?._background ??
        content?.get_children?.().find(child =>
            child.get_style_class_name?.()?.includes('dash-background')
        ) ?? content;

    return { content, content_parent, background, slider };
}

function resolve_dhruva(container) {
    if (container?.get_name?.() !== DHRUVA_CONTAINER)
        return null;

    const content = container.boxActor ?? find_child(container, 'Dhruva');
    const background = container.bgActor ?? find_child(container, 'DhruvaBackground');

    return {
        content,
        content_parent: container,
        background,
        slider: null,
    };
}

export function is_supported_dock_container(actor) {
    const name = actor?.get_name?.();
    return (
        name === DASH_TO_DOCK_CONTAINER &&
        actor.constructor?.name === 'DashToDock'
    ) || name === DHRUVA_CONTAINER;
}

export function resolve_dock_target(container) {
    return resolve_dash_to_dock(container) ?? resolve_dhruva(container);
}
