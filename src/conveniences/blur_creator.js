import Shell from 'gi://Shell';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Background from 'resource:///org/gnome/shell/ui/background.js';

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

    let blur_effect = new Shell.BlurEffect({
        name: 'blur',
        brightness: local_settings.CUSTOMIZE
            ? local_settings.BRIGHTNESS
            : global_settings.BRIGHTNESS,
        sigma: (local_settings.CUSTOMIZE
            ? local_settings.SIGMA
            : global_settings.SIGMA) * monitor.geometry_scale,
        mode: Shell.BlurMode.ACTOR
    });

    // store the scale in the effect in order to retrieve it in set_sigma
    blur_effect.scale = monitor.geometry_scale;

    let color_effect = effects_manager.new_color_effect({
        name: 'color',
        color: local_settings.CUSTOMIZE
            ? local_settings.COLOR
            : global_settings.COLOR
    }, global_settings);

    let noise_effect = effects_manager.new_noise_effect({
        name: 'noise',
        noise: local_settings.CUSTOMIZE
            ? local_settings.NOISE_AMOUNT
            : global_settings.NOISE_AMOUNT,
        lightness: local_settings.CUSTOMIZE
            ? local_settings.NOISE_LIGHTNESS
            : global_settings.NOISE_LIGHTNESS
    }, global_settings);

    widget.add_effect(color_effect);
    widget.add_effect(noise_effect);
    widget.add_effect(blur_effect);

    let bgManager = new Background.BackgroundManager({
        container: widget,
        monitorIndex: monitor_index,
        controlPosition: false,
    });

    background_managers.push(bgManager);
    background_group.insert_child_at_index(widget, 0);

    return widget;
};