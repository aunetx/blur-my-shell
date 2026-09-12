import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from '../conveniences/pipeline.js';

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
        for (const window_selector of Main.screenshotUI?._windowSelectors ?? []) {
            let pipeline = null;
            let background_manager = null;
            let blur_widget = null;
            const background_managers = [];
            try {
                pipeline = new Pipeline(
                    this.effects_manager,
                    global.blur_my_shell._pipelines_manager,
                    this.settings.screenshot.PIPELINE
                );
                blur_widget = pipeline.create_background_with_effects(
                    window_selector._monitorIndex, background_managers,
                    window_selector, 'bms-screenshot-blurred-widget', false
                );
                background_manager = background_managers[0];
                const parent = window_selector.get_parent();

                if (!background_manager || !parent)
                    throw new Error('screenshot selector has no background owner');

                const destroy_id = this.connections.connect(
                    parent,
                    'destroy',
                    _ => this.remove_background(window_selector, true)
                );
                this.backgrounds.set(window_selector, {
                    background_manager,
                    blur_widget,
                    parent,
                    destroy_id,
                });
            } catch (error) {
                const partial_widget = blur_widget ?? pipeline?.actor;
                pipeline?.destroy();
                background_managers.forEach(manager => {
                    try {
                        manager.destroy();
                    } catch (e) { }
                });
                partial_widget?.destroy();
                this._log(`could not create screenshot background: ${error}`);
            }
        }
    }

    update_pipeline() {
        this.backgrounds.values().forEach(({ background_manager }) =>
            background_manager._bms_pipeline?.change_pipeline_to(
                this.settings.screenshot.PIPELINE
            )
        );
    }

    remove_background(window_selector, parent_destroyed = false) {
        const entry = this.backgrounds.get(window_selector);
        if (!entry)
            return;

        this.backgrounds.delete(window_selector);
        if (!parent_destroyed)
            this.connections.disconnect(entry.parent, entry.destroy_id);

        const { background_manager, blur_widget } = entry;
        try {
            background_manager._bms_pipeline?.destroy();
        } catch (error) {
            this._log(`screenshot pipeline was already destroyed: ${error}`);
        }
        try {
            if (parent_destroyed)
                background_manager.backgroundActor = null;
            background_manager.destroy();
        } catch (error) {
            this._log(`screenshot background was already destroyed: ${error}`);
        }
        if (!parent_destroyed) {
            try {
                blur_widget?.destroy();
            } catch (error) {
                this._log(`screenshot widget was already destroyed: ${error}`);
            }
        }
    }

    remove_background_actors() {
        [...this.backgrounds.keys()].forEach(
            window_selector => this.remove_background(window_selector)
        );

        (Main.screenshotUI?._windowSelectors ?? []).forEach(window_selector =>
            window_selector.get_children().forEach(child => {
                if (child.get_name() === 'bms-screenshot-blurred-widget')
                    child.destroy();
            })
        );
    }

    disable() {
        if (!this.enabled)
            return;

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
