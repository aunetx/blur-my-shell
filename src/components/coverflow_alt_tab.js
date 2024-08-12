import * as Main from "resource:///org/gnome/shell/ui/main.js";

import { PaintSignals } from "../conveniences/paint_signals.js";
import { Pipeline } from "../conveniences/pipeline.js";

export const CoverflowAltTabBlur = class CoverflowAltTabBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.paint_signals = new PaintSignals(connections);
        this.effects_manager = effects_manager;
        this.background_actors = [];
        this.background_managers = [];
    }

    enable() {
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
            const pipeline = new Pipeline(
                this.effects_manager,
                global.blur_my_shell._pipelines_manager,
                this.settings.coverflow_alt_tab.PIPELINE
            );

            const background_actor = pipeline.create_background_with_effects(
                i,
                this.background_managers,
                actor,
                "bms-coverflow-alt-tab-blurred-widget"
            );

            this.background_actors.push(background_actor);
        }
    }

    remove_background_actors() {
        this.background_actors.forEach((actor) => actor.destroy);
        this.background_actors = [];

        this.background_managers.forEach((background_manager) => {
            background_manager._bms_pipeline.destroy();
            background_manager.destroy();
        });
        this.background_managers = [];
    }

    disable() {
        this._log("removing blur from coverflow alt-tab");

        this.remove_background_actors();
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG) {
            console.log(`[Blur my Shell > coverflow alt-tab]  ${str}`);
        }
    }
};
