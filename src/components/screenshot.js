import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import {
    create_static_background,
    destroy_background_manager,
    remove_child_by_name,
    update_background_managers_pipeline,
} from '../conveniences/static_background.js';

const WIDGET_NAME = 'bms-screenshot-blurred-widget';

export const ScreenshotBlur = class ScreenshotBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.screenshot_background_managers = [];
        this.effects_manager = effects_manager;
        this.enabled = false;
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this._log("blurring screenshot's window selector");

        // connect to monitors change
        this.connections.connect(Main.layoutManager, 'monitors-changed',
            _ => this.update_backgrounds()
        );

        // update backgrounds when the component is enabled
        this.update_backgrounds();
        this.enabled = true;
    }

    update_backgrounds() {
        // remove every old background
        this.remove_background_actors();
        // create new backgrounds for the screenshot window selector
        for (let i = 0; i < Main.screenshotUI._windowSelectors.length; i++) {
            const window_selector = Main.screenshotUI._windowSelectors[i];
            create_static_background({
                effects_manager: this.effects_manager,
                pipelines_manager: global.blur_my_shell._pipelines_manager,
                pipeline_id: this.settings.screenshot.PIPELINE,
                monitor_index: window_selector._monitorIndex,
                background_managers: this.screenshot_background_managers,
                container: window_selector,
                widget_name: WIDGET_NAME,
                use_absolute_position: false,
            });

            this.connections.connect(window_selector.get_parent(), 'destroy', _ => {
                this.screenshot_background_managers = this.screenshot_background_managers.filter(background_manager => {
                    const widget = background_manager.backgroundActor?.get_parent?.();
                    const parent = widget?.get_parent?.();
                    if (parent !== window_selector)
                        return true;

                    parent.remove_child(widget);
                    destroy_background_manager(background_manager);
                    return false;
                });

                remove_child_by_name(window_selector, WIDGET_NAME);
            });
        }
    }

    update_pipeline() {
        update_background_managers_pipeline(
            this.screenshot_background_managers,
            this.settings.screenshot.PIPELINE
        );
    }

    remove_background_actors() {
        this.screenshot_background_managers.forEach(background_manager => {
            const widget = background_manager.backgroundActor?.get_parent?.();
            widget?.get_parent?.()?.remove_child(widget);
            destroy_background_manager(background_manager);
        });

        Main.screenshotUI._windowSelectors.forEach(window_selector =>
            remove_child_by_name(window_selector, WIDGET_NAME)
        );

        this.screenshot_background_managers = [];
    }

    disable() {
        if (!this.enabled) {
            this._log("blur already removed");
            return;
        }

        this._log("removing blur from screenshot's window selector");

        this.remove_background_actors();
        this.connections.disconnect_all();
        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > screenshot]   ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > screenshot]   ${str}`);
    }
};
