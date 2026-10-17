import { get_component_style } from '../../conveniences/style.js';
import { getRoundedCorners } from '../../render/corner_policy.js';

const PANEL_STYLES = [
    "transparent-panel",
    "light-panel",
    "dark-panel",
    "contrasted-panel"
];

const GRADIENT_PANEL_STYLES = [
    "gradient-panel",
    "gradient-panel-reverse"
];

export const TRANSPARENT_PANEL_STYLE = PANEL_STYLES[0];

export function panel_style(settings) {
    return PANEL_STYLES[get_component_style(settings.panel.STYLE_PANEL, PANEL_STYLES)];
}

/// The panel style, or a transparent panel while the blur is removed in the overview.
export function overview_aware_style(settings, in_overview) {
    return settings.panel.UNBLUR_IN_OVERVIEW && in_overview
        ? TRANSPARENT_PANEL_STYLE
        : panel_style(settings);
}

/// The style of a panel whose blur is hidden because no window is near it.
export function unblurred_style(settings, in_overview) {
    const gradient_style = GRADIENT_PANEL_STYLES[settings.panel.GRADIENT_PANEL_MODE];
    if (settings.panel.GRADIENT_PANEL) {
        if (!in_overview)
            return gradient_style;
        return settings.panel.UNBLUR_IN_OVERVIEW ? TRANSPARENT_PANEL_STYLE : gradient_style;
    }
    return !settings.panel.UNBLUR_IN_OVERVIEW && in_overview
        ? panel_style(settings)
        : TRANSPARENT_PANEL_STYLE;
}

export function set_panel_style_class(actors, target_class, settings) {
    const panel = actors.widgets.panel;

    [...PANEL_STYLES, ...GRADIENT_PANEL_STYLES].forEach(style => {
        if (style !== target_class)
            panel.remove_style_class_name(style);
    });

    if (target_class && !panel.has_style_class_name(target_class))
        panel.add_style_class_name(target_class);

    actors.last_target_class = target_class;
    update_panel_border_radius(actors, target_class, settings);
}

export function update_panel_border_radius(actors, target_class, settings) {
    const panel = actors.widgets.panel;

    const should_round = !!target_class && settings.panel.OVERRIDE_BACKGROUND;

    let top = 0;
    let bottom = 0;
    if (should_round) {
        const radius = settings.panel.CORNER_RADIUS;
        const panel_height = panel.get_height();
        const max_radius = panel_height > 0 ? Math.floor(panel_height / 2) : radius;
        const clamped_radius = Math.min(radius, max_radius);

        const corners = getRoundedCorners(settings.panel.ROUNDED_CORNERS);
        top = corners.corners_top ? clamped_radius : 0;
        bottom = corners.corners_bottom ? clamped_radius : 0;
    }

    const new_radius_style = should_round
        ? `border-radius: ${top}px ${top}px ${bottom}px ${bottom}px;`
        : null;

    const others = (panel.get_style() ?? '').replace(actors.radius_style ?? '', '').replace(/[\s;]+$/, '');
    actors.radius_style = new_radius_style;
    const target_style = [others, new_radius_style].filter(Boolean).join('; ') || null;
    if (panel.get_style() === target_style)
        return;
    panel.set_style(target_style);
}

export function update_light_text(actors_list, enabled) {
    actors_list.forEach(actors => {
        const panel_box = actors.widgets.panel_box;
        if (enabled)
            panel_box.add_style_class_name("panel-light-text");
        else
            panel_box.remove_style_class_name("panel-light-text");
    });
}
