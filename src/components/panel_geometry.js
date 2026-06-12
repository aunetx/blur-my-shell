export function updatePanelStaticSize(actors, panel, panel_box, monitor) {
    if (actors.blur_surface.destroyed)
        return;

    const [width, height] = panel_box.get_size();
    if (width <= 0 || height <= 0 || panel.width <= 0 || panel.height <= 0) {
        actors.blur_surface.hide_surface();
        return;
    }

    if (actors.blur_surface.monitor_index !== monitor.index)
        actors.blur_surface.recreate_static(monitor.index);

    const background = actors.blur_surface.actor;
    const [panel_box_x, panel_box_y] = panel_box.get_position();
    const [parent_x, parent_y] = panel_box.get_parent().get_position();
    const x = panel_box_x + parent_x - monitor.x + (width - panel.width) / 2;
    const y = panel_box_y + parent_y - monitor.y + (height - panel.height) / 2;

    try {
        background.set_clip(
            Math.round(x),
            Math.round(y),
            Math.ceil(panel.width),
            Math.ceil(panel.height)
        );
        background.x = Math.round((width - panel.width) / 2 - x);
        background.y = Math.round(.5 + (height - panel.height) / 2 - y);
        actors.blur_surface.show_surface();
    } catch (e) { }
}

export function updatePanelDynamicSize(actors, panel) {
    if (actors.blur_surface.destroyed)
        return;

    const geometry = getPanelBlurGeometry(actors.widgets.blur_parent, panel);
    if (!geometry) {
        actors.blur_surface.hide_surface();
        return;
    }

    actors.blur_surface.update_local_geometry(geometry);
}

export function getPanelBlurGeometry(blur_parent, panel) {
    if (!blur_parent || !panel)
        return null;

    return getPanelGeometryInContainer(blur_parent, panel);
}

function getPanelSize(panel) {
    const width = Math.ceil(panel.width);
    const height = Math.ceil(panel.height);
    if (width <= 0 || height <= 0)
        return null;

    return { width, height };
}

export function getPanelGeometryInContainer(container, panel) {
    if (!container || !panel)
        return null;

    const size = getPanelSize(panel);
    if (!size)
        return null;

    try {
        if (panel.get_parent?.() === container) {
            return {
                x: Math.round(panel.x),
                y: Math.round(panel.y),
                width: size.width,
                height: size.height,
            };
        }
    } catch (e) { }

    try {
        const [container_x, container_y] = container.get_transformed_position();
        const [panel_x, panel_y] = panel.get_transformed_position();

        if (
            !Number.isFinite(container_x) || !Number.isFinite(container_y)
            || !Number.isFinite(panel_x) || !Number.isFinite(panel_y)
        )
            return null;

        return {
            x: Math.round(panel_x - container_x),
            y: Math.round(panel_y - container_y),
            width: size.width,
            height: size.height,
        };
    } catch (e) {
        return {
            x: Math.round(panel.x),
            y: Math.round(panel.y),
            width: size.width,
            height: size.height,
        };
    }
}