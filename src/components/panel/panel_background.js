import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from '../../pipelines/pipeline.js';
import { DynamicPipeline } from '../../render/dynamic_surface.js';
import { RoundedPipeline } from '../../render/rounded_pipeline.js';

/// Creates the blur behind a panel, inserted at the bottom of its panel box.
export function create_panel_background(panel_box, monitor, settings, effects_manager) {
    const background_group = new Meta.BackgroundGroup(
        { name: 'bms-panel-backgroundgroup', width: 0, height: 0 }
    );

    let background, bg_manager, pipeline;
    let rounded_pipeline = null;
    const static_blur = settings.panel.STATIC_BLUR;

    if (static_blur) {
        const bg_manager_list = [];
        pipeline = new Pipeline(
            effects_manager,
            global.blur_my_shell._pipelines_manager,
            settings.panel.PIPELINE
        );
        background = pipeline.create_background_with_effects(
            monitor.index, bg_manager_list,
            background_group, 'bms-panel-blurred-widget'
        );
        bg_manager = bg_manager_list[0];
        rounded_pipeline = new RoundedPipeline(
            effects_manager,
            () => settings.panel.CORNER_RADIUS,
            () => settings.panel.ROUNDED_CORNERS
        );
        rounded_pipeline.bind(pipeline, background);
    } else {
        pipeline = new DynamicPipeline(
            effects_manager,
            global.blur_my_shell._pipelines_manager,
            settings.panel.PIPELINE,
            {
                corner_radius: settings.panel.CORNER_RADIUS,
                get_corners: () => settings.panel.ROUNDED_CORNERS,
            }
        );
        [background, bg_manager] = pipeline.create_background_with_effect(
            background_group, 'bms-panel-blurred-widget'
        );
    }

    panel_box.insert_child_at_index(background_group, 0);
    return { background, background_group, bg_manager, pipeline, rounded_pipeline, static_blur };
}

/// Moves the blur under the panel, returning false if the panel isn't allocated yet.
export function place_panel_background(actors) {
    const geometry_actor = actors.widgets.panel;
    const { panel_box, wrapper, background } = actors.widgets;
    const [width, height] = panel_box.get_size();
    const [geometry_width, geometry_height] = geometry_actor.get_size();

    if (!width || !height || !geometry_width || !geometry_height)
        return false;

    if (actors.static_blur) {
        // the static blur shows the whole monitor background, clipped to the panel
        const monitor = Main.layoutManager.findMonitorForActor(geometry_actor);
        if (!monitor)
            return false;

        const [p_x, p_y] = panel_box.get_position();
        const [p_p_x, p_p_y] = panel_box.get_parent().get_position();

        let g_x, g_y;
        if (actors.is_dtp_panel) {
            const [w_x, w_y] = wrapper.get_position();
            const [pan_x, pan_y] = geometry_actor.get_position();
            g_x = w_x + pan_x;
            g_y = w_y + pan_y;
        } else {
            [g_x, g_y] = geometry_actor.get_position();
        }

        const x = p_x + p_p_x - monitor.x + g_x;
        const y = p_y + p_p_y - monitor.y + g_y;
        background.set_clip(
            Math.floor(x), Math.floor(y), Math.ceil(geometry_width), Math.ceil(geometry_height)
        );
        background.x = g_x - x;
        background.y = g_y - y;
    } else {
        if (actors.is_dtp_panel) {
            background.x = wrapper.x + geometry_actor.x;
            background.y = wrapper.y + geometry_actor.y;
        } else {
            background.x = geometry_actor.x;
            background.y = geometry_actor.y;
        }
        background.width = geometry_width;
        background.height = geometry_height;
    }

    return true;
}
