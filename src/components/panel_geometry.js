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
    const wrapper = actors.widgets.wrapper;
    const [panel_box_x, panel_box_y] = panel_box.get_position();
    const [parent_x, parent_y] = panel_box.get_parent().get_position();

    let g_x, g_y;
    if (actors.is_dtp_panel && wrapper) {
        const [w_x, w_y] = wrapper.get_position();
        const [pan_x, pan_y] = panel.get_position();
        g_x = w_x + pan_x;
        g_y = w_y + pan_y;
    } else {
        [g_x, g_y] = panel.get_position();
    }

    const x = panel_box_x + parent_x - monitor.x + g_x;
    const y = panel_box_y + parent_y - monitor.y + g_y;

    try {
        background.set_clip(
            Math.round(x),
            Math.round(y),
            Math.ceil(panel.width),
            Math.ceil(panel.height)
        );
        background.x = Math.round(g_x - x);
        background.y = Math.round(.5 + g_y - y);
        actors.blur_surface.show_surface();
    } catch (e) { }
}

export function updatePanelDynamicSize(actors, panel) {
    if (actors.blur_surface.destroyed)
        return;

    let geometry = getPanelBlurGeometry(actors.widgets.blur_parent, panel);
    if (actors.is_dtp_panel && actors.widgets.wrapper && geometry) {
        const wrapper = actors.widgets.wrapper;
        geometry = {
            ...geometry,
            x: Math.round(geometry.x + wrapper.x),
            y: Math.round(geometry.y + wrapper.y),
        };
    }
    if (!geometry) {
        actors.blur_surface.hide_surface();
        return;
    }

    actors.blur_surface.update_local_geometry(geometry);
}

export function getPanelBlurGeometry(blur_parent, panel) {
    if (!blur_parent || !panel)
        return null;

    try {
        if (panel.get_parent?.() === blur_parent) {
            const alloc = panel.get_allocation_box();
            const width = alloc.x2 - alloc.x1;
            const height = alloc.y2 - alloc.y1;
            if (width > 0 && height > 0) {
                return {
                    x: Math.round(alloc.x1),
                    y: Math.round(alloc.y1),
                    width: Math.ceil(width),
                    height: Math.ceil(height),
                };
            }
        }
    } catch (e) { }

    return getPanelGeometryInContainer(blur_parent, panel);
}

export function getPanelGeometryInContainer(container, panel) {
    try {
        const [container_x, container_y] = container.get_transformed_position();
        const [panel_x, panel_y] = panel.get_transformed_position();
        const [width, height] = panel.get_transformed_size();

        if (
            !Number.isFinite(container_x) || !Number.isFinite(container_y)
            || !Number.isFinite(panel_x) || !Number.isFinite(panel_y)
            || width <= 0 || height <= 0
        )
            return null;

        return {
            x: Math.round(panel_x - container_x),
            y: Math.round(panel_y - container_y),
            width: Math.ceil(width),
            height: Math.ceil(height),
        };
    } catch (e) {
        try {
            const alloc = panel.get_allocation_box();
            const width = alloc.x2 - alloc.x1;
            const height = alloc.y2 - alloc.y1;
            if (width > 0 && height > 0) {
                return {
                    x: Math.round(alloc.x1),
                    y: Math.round(alloc.y1),
                    width: Math.ceil(width),
                    height: Math.ceil(height),
                };
            }
        } catch (e) { }

        return {
            x: Math.round(panel.x),
            y: Math.round(panel.y),
            width: Math.ceil(panel.width),
            height: Math.ceil(panel.height),
        };
    }
}