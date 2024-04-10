import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { PaintSignals } from '../conveniences/paint_signals.js';
import { DummyPipeline } from '../conveniences/dummy_pipeline.js';


export const WindowListBlur = class WindowListBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.paint_signals = new PaintSignals(connections);
        this.effects_manager = effects_manager;
        this.pipelines = [];
    }

    enable() {
        this._log("blurring window list");

        // blur if window-list is found
        Main.layoutManager.uiGroup.get_children().forEach(
            child => this.try_blur(child)
        );

        // listen to new actors in `Main.layoutManager.uiGroup` and blur it if
        // if is window-list
        this.connections.connect(
            Main.layoutManager.uiGroup,
            'child-added',
            (_, child) => this.try_blur(child)
        );

        // connect to overview
        this.connections.connect(Main.overview, 'showing', _ => {
            this.hide();
        });
        this.connections.connect(Main.overview, 'hidden', _ => {
            this.show();
        });
    }

    try_blur(actor) {
        if (
            actor.constructor.name === "WindowList" &&
            actor.style !== "background:transparent;"
        ) {
            this._log("found window list to blur");

            const pipeline = new DummyPipeline(
                this.effects_manager, this.settings.window_list
            );
            pipeline.attach_effect_to_actor(actor);
            this.pipelines.push(pipeline);

            actor.set_style("background:transparent;");

            actor._windowList.get_children().forEach(
                window => this.style_window_button(window)
            );

            this.connections.connect(
                actor._windowList,
                'child-added',
                (_, window) => this.style_window_button(window)
            );

            this.connections.connect(
                actor,
                'destroy',
                _ => this.destroy_blur(pipeline, true)
            );


            // HACK
            //
            //`Shell.BlurEffect` does not repaint when shadows are under it. [1]
            //
            // This does not entirely fix this bug (shadows caused by windows
            // still cause artifacts), but it prevents the shadows of the panel
            // buttons to cause artifacts on the panel itself
            //
            // [1]: https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (this.settings.HACKS_LEVEL === 1) {
                this._log("window list hack level 1");

                this.paint_signals.disconnect_all_for_actor(actor);
                this.paint_signals.connect(actor, pipeline.effect);
            } else {
                this.paint_signals.disconnect_all_for_actor(actor);
            }
        }
    }

    style_window_button(window) {
        window.get_child_at_index(0).set_style(
            "box-shadow:none; background-color:rgba(0,0,0,0.2); border-radius:5px;"
        );
    }

    // IMPORTANT: do never call this in a mutable `this.pipelines.forEach`
    destroy_blur(pipeline, actor_destroyed = false) {
        if (!actor_destroyed) {
            this.remove_style(pipeline.actor);
            this.paint_signals.disconnect_all_for_actor(pipeline.actor);
        }

        pipeline.destroy();

        let index = this.pipelines.indexOf(pipeline);
        if (index >= 0)
            this.pipelines.splice(pipeline, 1);
    }

    remove_style(actor) {
        if (
            actor.constructor.name === "WindowList" &&
            actor.style === "background:transparent;"
        ) {
            actor.style = null;
            actor._windowList.get_children().forEach(
                child => child.get_child_at_index(0).set_style(null)
            );
        }
    }

    hide() {
        this.pipelines.forEach(pipeline => pipeline.effect?.set_enabled(false));
    }

    show() {
        this.pipelines.forEach(pipeline => pipeline.effect?.set_enabled(true));
    }

    disable() {
        this._log("removing blur from window list");

        const immutable_pipelines_list = [...this.pipelines];
        immutable_pipelines_list.forEach(pipeline => this.destroy_blur(pipeline));

        this.pipelines = [];
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > window list]  ${str}`);
    }
};