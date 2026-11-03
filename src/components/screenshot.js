import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from '../pipelines/pipeline.js';
import { get_pipeline_id, connect_system_style_changes } from '../conveniences/style.js';

export const ScreenshotBlur = class ScreenshotBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.backgrounds = new Map();
        this.effects_manager = effects_manager;
        this.enabled = false;
    }

    enable() {
        if (this.enabled)
            return;

        this._log("blurring screenshot's window selector");
        this.enabled = true;

        this.connections.connect(Main.layoutManager, 'monitors-changed',
            _ => this.update_backgrounds()
        );
        connect_system_style_changes(this.connections, () => {
            if (this.settings.screenshot.PIPELINE_AUTO_MODE)
                this.update_pipeline();
        });

        this.update_backgrounds();
    }

    update_backgrounds() {
        this.remove_background_actors();
        for (const window_selector of Main.screenshotUI._windowSelectors) {
            const pipeline = new Pipeline(
                this.effects_manager,
                global.blur_my_shell._pipelines_manager,
                get_pipeline_id(this.settings.screenshot)
            );
            const background_managers = [];
            const blur_widget = pipeline.create_background_with_effects(
                window_selector._monitorIndex, background_managers,
                window_selector, 'bms-screenshot-blurred-widget', false
            );
            this.backgrounds.set(window_selector, {
                pipeline,
                background_manager: background_managers[0],
                blur_widget,
            });
            // the selectors are rebuilt by the shell when monitors change
            this.connections.connect(
                window_selector,
                'destroy',
                _ => this.remove_background(window_selector)
            );
        }
    }

    update_pipeline() {
        this.backgrounds.forEach(({ pipeline }) =>
            pipeline.change_pipeline_to(get_pipeline_id(this.settings.screenshot))
        );
    }

    remove_background(window_selector) {
        const { pipeline, background_manager, blur_widget } = this.backgrounds.get(window_selector);
        this.backgrounds.delete(window_selector);
        this.connections.disconnect_all_for(window_selector);

        pipeline.destroy();
        background_manager.destroy();
        blur_widget.destroy();
    }

    remove_background_actors() {
        [...this.backgrounds.keys()].forEach(
            window_selector => this.remove_background(window_selector)
        );
    }

    disable() {
        this._log("removing blur from screenshot's window selector");
        this.enabled = false;

        this.remove_background_actors();
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > screenshot]   ${str}`);
    }
};
