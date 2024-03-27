import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { create_background } from '../conveniences/blur_creator.js';


export const ScreenshotBlur = class ScreenshotBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.screenshot_background_managers = [];
        this.effects_manager = effects_manager;
    }

    enable() {
        this._log("blurring screenshot's window selector");

        // connect to monitors change
        this.connections.connect(Main.layoutManager, 'monitors-changed',
            _ => this.update_backgrounds()
        );

        // update backgrounds when the component is enabled
        this.update_backgrounds();
    }

    update_backgrounds() {
        // remove every old background
        this.remove_background_actors();
        // create new backgrounds for the screenshot window selector
        for (let i = 0; i < Main.screenshotUI._windowSelectors.length; i++) {
            const window_selector = Main.screenshotUI._windowSelectors[i];
            create_background(
                window_selector._monitorIndex, this.screenshot_background_managers,
                window_selector, this.settings,
                this.settings.screenshot, this.effects_manager,
                'bms-screenshot-blurred-widget'
            );

            // prevent old `BackgroundActor` from being accessed, which creates a whole bug of logs
            this.connections.connect(window_selector.get_parent(), 'destroy', _ => {
                this.screenshot_background_managers.forEach(background_manager => {
                    let widget = background_manager.backgroundActor.get_parent();
                    let parent = widget?.get_parent();

                    if (parent == window_selector) {
                        widget.get_effects().forEach(effect => {
                            this.effects_manager.remove(effect);
                        });
                        parent.remove_child(widget);
                    }
                    background_manager.destroy();
                });

                window_selector.get_children().forEach(child => {
                    if (child.get_name() == 'bms-screenshot-blurred-widget')
                        window_selector.remove_child(child);
                });

                let index = this.screenshot_background_managers.indexOf(window_selector);
                this.screenshot_background_managers.splice(index, 1);
            });
        }
    }

    get effects() {
        let effects_list = [];
        this.screenshot_background_managers.forEach(background_manager => {
            let effects_obj = {};
            let widget = background_manager.backgroundActor.get_parent();
            widget.get_effects().forEach(effect => {
                effects_obj[effect.get_name()] = effect;
            });
            effects_list.push(effects_obj);
        });
        return effects_list;
    }

    set_sigma(s) {
        this.effects.forEach(effect => {
            effect.blur.sigma = s * 2 * effect.blur.scale;
        });
    }

    set_brightness(b) {
        this.effects.forEach(effect => {
            effect.blur.brightness = b;
        });
    }

    set_color(c) {
        this.effects.forEach(effect => {
            effect.color.color = c;
        });
    }

    set_noise_amount(n) {
        this.effects.forEach(effect => {
            effect.noise.noise = n;
        });
    }

    set_noise_lightness(l) {
        this.effects.forEach(effect => {
            effect.noise.lightness = l;
        });
    }

    remove_background_actors() {
        this.screenshot_background_managers.forEach(background_manager => {
            let widget = background_manager.backgroundActor.get_parent();
            widget?.get_effects().forEach(effect => {
                this.effects_manager.remove(effect);
            });
            widget?.get_parent()?.remove_child(widget);
            background_manager.destroy();
        });

        Main.screenshotUI._windowSelectors.forEach(window_selector =>
            window_selector.get_children().forEach(child => {
                if (child.get_name() == 'bms-screenshot-blurred-widget')
                    window_selector.remove_child(child);
            })
        );

        this.screenshot_background_managers = [];
    }

    disable() {
        this._log("removing blur from screenshot's window selector");

        this.remove_background_actors();
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > screenshot]   ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > screenshot]   ${str}`);
    }
};
