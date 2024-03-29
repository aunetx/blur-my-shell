import Shell from 'gi://Shell';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Background from 'resource:///org/gnome/shell/ui/background.js';

const effects_from_pipeline = function (pipeline, effects_manager) {
    let effects = [];
    pipeline.forEach(effect_infos => {
        switch (effect_infos.type) {
            case 'gaussian_blur':
                effects.push(
                    effects_manager.new_gaussian_blur_effect({
                        ...{
                            name: effect_infos.type,
                            brightness: 1.,
                            radius: 30,
                        }, ...effect_infos.params
                    })
                );
                break;

            case 'monte_carlo_blur':
                effects.push(
                    effects_manager.new_monte_carlo_blur_effect({
                        ...{
                            name: effect_infos.type,
                            brightness: 1.,
                            iterations: 5,
                            radius: 2.,
                            use_base_pixel: false
                        }, ...effect_infos.params
                    })
                );
                break;

            case 'color':
                effects.push(
                    effects_manager.new_color_effect({
                        ...{
                            name: effect_infos.type,
                            color: [0., 0., 0., 0.]
                        }, ...effect_infos.params
                    })
                );
                break;

            case 'noise':
                effects.push(
                    effects_manager.new_noise_effect({
                        ...{
                            name: effect_infos.type,
                            noise: 0.,
                            lightness: 1.
                        }, ...effect_infos.params
                    })
                );
                break;

            case 'corner':
                effects.push(
                    effects_manager.new_corner_effect({
                        ...{
                            name: effect_infos.type,
                            radius: 12,
                        }, ...effect_infos.params
                    })
                );
                break;

            default:
                throw new Error(`Unknown effect "${effect_infos.type}"`);
        }
    });
    return effects;
};

const apply_pipeline_on_actor = function (pipeline, actor, effects_manager) {
    effects_from_pipeline(pipeline, effects_manager)
        .reverse()
        .forEach(effect => actor.add_effect(effect));
};


export const create_background = function (
    monitor_index,
    background_managers,
    background_group,
    global_settings,
    local_settings,
    effects_manager,
    widget_name
) {
    let monitor = Main.layoutManager.monitors[monitor_index];
    let widget = new St.Widget({
        name: widget_name,
        x: monitor.x,
        y: monitor.y,
        width: monitor.width,
        height: monitor.height
    });

    let pipeline = [
        {
            type: 'monte_carlo_blur',
            params: {
                brightness: .5,
                iterations: 5,
                radius: 2.,
                use_base_pixel: false
            }
        },
        {
            type: 'gaussian_blur',
            params: {
                radius: 5,
                brightness: 1
            }
        },/*
        {
            type: 'color',
            params: {
                color: local_settings.CUSTOMIZE
                    ? local_settings.COLOR
                    : global_settings.COLOR
            }
        },
        {
            type: 'noise',
            params: {
                noise: local_settings.CUSTOMIZE
                    ? local_settings.NOISE_AMOUNT
                    : global_settings.NOISE_AMOUNT,
                lightness: local_settings.CUSTOMIZE
                    ? local_settings.NOISE_LIGHTNESS
                    : global_settings.NOISE_LIGHTNESS
            }
        },*/
    ];

    apply_pipeline_on_actor(pipeline, widget, effects_manager);

    let bgManager = new Background.BackgroundManager({
        container: widget,
        monitorIndex: monitor_index,
        controlPosition: false,
    });

    background_managers.push(bgManager);
    background_group.insert_child_at_index(widget, 0);

    return widget;
};