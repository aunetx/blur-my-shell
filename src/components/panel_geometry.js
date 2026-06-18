export function updatePanelStaticSize(actors, panel, panel_box, monitor, panel_blur = null) {
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

    // Use the larger of the panel's frozen "natural" height and its
    // current height, so the blur keeps its visual height when the
    // panel widget itself collapses (e.g. while a fullscreen window
    // makes the auto-hide panel shrink to the icon row).
    const natural_h = panel_blur?.natural_panel_height ?? 0;
    const observed_h = Math.ceil(panel.height);
    const blur_h = Math.max(1, Math.max(natural_h, observed_h));

    const [panel_box_x, panel_box_y] = panel_box.get_position();
    const [parent_x, parent_y] = panel_box.get_parent().get_position();
    const x = panel_box_x + parent_x - monitor.x + (width - panel.width) / 2;
    const y = panel_box_y + parent_y - monitor.y + (height - blur_h) / 2;

    try {
        background.set_clip(
            Math.round(x),
            Math.round(y),
            Math.ceil(panel.width),
            blur_h
        );
        background.x = Math.round((width - panel.width) / 2 - x);
        background.y = Math.round(.5 + (height - blur_h) / 2 - y);
        actors.blur_surface.show_surface();
        // Force a redraw so the blur reflects the new clip/size even
        // when nothing else in the scene graph has invalidated it.
        try {
            background.queue_redraw?.();
            actors.blur_surface.bg_manager?.backgroundActor?.queue_redraw?.();
        } catch (e) { }
    } catch (e) { }
}

export function updatePanelDynamicSize(actors, panel, panel_blur = null) {
    if (actors.blur_surface.destroyed)
        return;

    const natural_h = panel_blur?.natural_panel_height ?? 0;
    const observed_h = Math.ceil(panel.height);
    const reference_height = Math.max(natural_h, observed_h);

    const geometry = getPanelBlurGeometry(actors.widgets.blur_parent, panel, {
        reference_height,
    });
    if (!geometry) {
        actors.blur_surface.hide_surface();
        return;
    }

    actors.blur_surface.update_local_geometry(geometry);
}

export function getPanelBlurGeometry(blur_parent, panel, options = {}) {
    if (!blur_parent || !panel)
        return null;

    return getPanelGeometryInContainer(blur_parent, panel, options);
}

function getPanelSize(panel, reference_height = 0) {
    const width = Math.ceil(panel.width);
    const observed_height = Math.ceil(panel.height);
    const height = reference_height > 0
        ? Math.max(reference_height, observed_height)
        : observed_height;
    if (width <= 0 || height <= 0)
        return null;

    return { width, height };
}

export function getPanelGeometryInContainer(container, panel, options = {}) {
    if (!container || !panel)
        return null;

    const reference_height = options.reference_height ?? 0;
    const size = getPanelSize(panel, reference_height);
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
