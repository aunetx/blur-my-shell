import * as Main from "resource:///org/gnome/shell/ui/main.js";

import {
    create_static_background,
    destroy_background_managers,
    update_background_managers_pipeline,
} from "../conveniences/static_background.js";

const WIDGET_NAME = "bms-coverflow-alt-tab-blurred-widget";

export const CoverflowAltTabBlur = class CoverflowAltTabBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.background_actors = [];
        this.background_managers = [];
        this.enabled = false;
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this._log("blurring coverflow alt-tab");

        this.update_backgrounds();

        this.connections.connect(
            Main.layoutManager.uiGroup,
            "child-added",
            (_, child) => this.try_blur(child)
        );

        this.connections.connect(Main.layoutManager, "monitors-changed", (_) => {
            this.update_backgrounds();
        });
        this.enabled = true;
    }

    update_backgrounds() {
        this.remove_background_actors();

        Main.layoutManager.uiGroup
            .get_children()
            .forEach((child) => this.try_blur(child));
    }

    try_blur(actor) {
        if (
            actor.constructor.name !== "Meta_BackgroundGroup" ||
            actor.get_name() !== "coverflow-alt-tab-background-group"
        ) {
            return;
        }

        this._log("found coverflow alt-tab to blur");

        for (let i = 0; i < Main.layoutManager.monitors.length; i++) {
            const background_actor = create_static_background({
                effects_manager: this.effects_manager,
                pipelines_manager: global.blur_my_shell._pipelines_manager,
                pipeline_id: this.settings.coverflow_alt_tab.PIPELINE,
                monitor_index: i,
                background_managers: this.background_managers,
                container: actor,
                widget_name: WIDGET_NAME,
            });

            this.background_actors.push(background_actor);
        }
    }

    remove_background_actors() {
        this.background_actors.forEach((actor) => actor.destroy());
        this.background_actors = [];
        destroy_background_managers(this.background_managers);
    }

    update_pipeline() {
        update_background_managers_pipeline(
            this.background_managers,
            this.settings.coverflow_alt_tab.PIPELINE
        );
    }

    disable() {
        if (!this.enabled) {
            this._log("blur already removed");
            return;
        }

        this._log("removing blur from coverflow alt-tab");

        this.remove_background_actors();
        this.connections.disconnect_all();
        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG) {
            console.log(`[Blur my Shell > coverflow alt-tab]  ${str}`);
        }
    }
};
