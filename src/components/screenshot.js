import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { StaticBlur } from '../render/static_blur/static_blur.js';
import { get_pipeline_id, connect_system_style_changes } from '../conveniences/style.js';

export const ScreenshotBlur = class ScreenshotBlur {
    constructor(connections, settings) {
        this.connections = connections;
        this.settings = settings;
        this.backgrounds = new Map();
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
            const background = new StaticBlur({
                name: 'bms-screenshot-blurred-widget',
                monitorIndex: window_selector._monitorIndex,
                pipelineId: get_pipeline_id(this.settings.screenshot),
                wholeMonitor: true,
            });
            window_selector.insert_child_at_index(background, 0);
            this.backgrounds.set(window_selector, background);
            // the selectors are rebuilt by the shell when monitors change
            this.connections.connect(
                window_selector,
                'destroy',
                _ => this.remove_background(window_selector)
            );
        }
    }

    update_pipeline() {
        this.backgrounds.forEach(background =>
            background.setPipeline(get_pipeline_id(this.settings.screenshot))
        );
    }

    remove_background(window_selector) {
        const background = this.backgrounds.get(window_selector);
        this.backgrounds.delete(window_selector);
        this.connections.disconnect_all_for(window_selector);
        background.destroy();
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
