import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { DynamicPipeline } from '../render/dynamic_surface.js';

const WINDOW_LIST_STYLE = 'background:transparent;';
const WINDOW_BUTTON_STYLE =
    'box-shadow:none; background-color:rgba(0,0,0,0.2); border-radius:5px;';

export const WindowListBlur = class WindowListBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.entries = new Map();
        this.enabled = false;
    }

    enable() {
        if (this.enabled)
            return;

        this._log('blurring window list');
        this.enabled = true;

        Main.layoutManager.uiGroup.get_children().forEach(
            child => this.try_blur(child)
        );

        this.connections.connect(
            Main.layoutManager.uiGroup,
            'child-added',
            (_, child) => this.try_blur(child)
        );

        this.connections.connect(Main.overview, 'showing', () => this.hide());
        this.connections.connect(Main.overview, 'hidden', () => this.show());
        if (Main.overview.visible)
            this.hide();
    }

    try_blur(actor) {
        if (actor.constructor.name !== 'WindowList' || this.entries.has(actor))
            return;

        this._log('found window list to blur');

        const pipeline = new DynamicPipeline(
            this.effects_manager,
            global.blur_my_shell._pipelines_manager,
            this.settings.window_list.PIPELINE
        );
        try {
            pipeline.attach_to_container(actor, 'bms-window-list-blurred-widget');
        } catch (error) {
            pipeline.destroy();
            logError(error, '[Blur my Shell > window list] failed to create background');
            return;
        }

        const entry = {
            actor,
            pipeline,
            actor_style: actor.style,
            button_styles: new Map(),
        };
        this.entries.set(actor, entry);
        actor.set_style(WINDOW_LIST_STYLE);

        actor._windowList?.get_children().forEach(
            window => this.style_window_button(entry, window)
        );

        if (actor._windowList) {
            this.connections.connect(
                actor._windowList,
                'child-added',
                (_, window) => this.style_window_button(entry, window)
            );
            this.connections.connect(
                actor._windowList,
                'child-removed',
                (_, window) => this.restore_window_button(entry, window)
            );
        }

        this.connections.connect(
            actor,
            'destroy',
            () => this.destroy_blur(actor, true)
        );

        if (Main.overview.visible)
            pipeline.actor?.hide();
    }

    style_window_button(entry, window) {
        const button = window?.get_child_at_index?.(0);
        if (!button)
            return;

        if (!entry.button_styles.has(button))
            entry.button_styles.set(button, button.style);
        button.set_style(WINDOW_BUTTON_STYLE);
    }

    restore_window_button(entry, window) {
        const button = window?.get_child_at_index?.(0);
        if (!button || !entry.button_styles.has(button))
            return;

        try {
            button.set_style(entry.button_styles.get(button));
        } catch (e) { }
        entry.button_styles.delete(button);
    }

    destroy_blur(actor, actor_destroyed = false) {
        const entry = this.entries.get(actor);
        if (!entry)
            return;
        this.entries.delete(actor);

        if (!actor_destroyed) {
            try {
                actor.set_style(entry.actor_style);
            } catch (e) { }
            entry.button_styles.forEach((style, button) => {
                try {
                    button.set_style(style);
                } catch (e) { }
            });
        }
        entry.button_styles.clear();
        entry.pipeline.destroy();
    }

    hide() {
        this.entries.forEach(({ pipeline }) => pipeline.actor?.hide());
    }

    show() {
        this.entries.forEach(({ pipeline }) => pipeline.actor?.show());
    }

    update_pipeline() {
        this.entries.forEach(({ pipeline }) =>
            pipeline.change_pipeline_to(this.settings.window_list.PIPELINE)
        );
    }

    disable() {
        if (!this.enabled)
            return;

        this._log('removing blur from window list');
        this.enabled = false;

        [...this.entries.keys()].forEach(actor => this.destroy_blur(actor));
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > window list]  ${str}`);
    }
};
