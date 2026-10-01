import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from '../conveniences/pipeline.js';

export const CoverflowAltTabBlur = class CoverflowAltTabBlur {
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

        this._log('blurring coverflow alt-tab');
        this.enabled = true;

        this.update_backgrounds();

        this.connections.connect(
            Main.layoutManager.uiGroup,
            'child-added',
            (_, child) => this.try_blur(child)
        );

        this.connections.connect(
            Main.layoutManager,
            'monitors-changed',
            () => this.update_backgrounds()
        );
    }

    update_backgrounds() {
        this.remove_background_actors();
        Main.layoutManager.uiGroup
            .get_children()
            .forEach(child => this.try_blur(child));
    }

    try_blur(actor) {
        if (
            actor.constructor.name !== 'Meta_BackgroundGroup'
            || actor.get_name() !== 'coverflow-alt-tab-background-group'
            || this.entries.has(actor)
        ) {
            return;
        }

        this._log('found coverflow alt-tab to blur');

        const entry = {
            actors: [],
            managers: [],
            pipelines: [],
        };
        for (let i = 0; i < Main.layoutManager.monitors.length; i++) {
            const pipeline = new Pipeline(
                this.effects_manager,
                global.blur_my_shell._pipelines_manager,
                this.settings.coverflow_alt_tab.PIPELINE
            );
            entry.pipelines.push(pipeline);
            entry.actors.push(pipeline.create_background_with_effects(
                i,
                entry.managers,
                actor,
                'bms-coverflow-alt-tab-blurred-widget'
            ));
        }
        this.entries.set(actor, entry);

        this.connections.connect(actor, 'destroy', () => this.remove_entry(actor));
    }

    update_pipeline() {
        this.entries.forEach(({ pipelines }) => pipelines.forEach(pipeline =>
            pipeline.change_pipeline_to(this.settings.coverflow_alt_tab.PIPELINE)
        ));
    }

    remove_entry(container) {
        const entry = this.entries.get(container);
        this.entries.delete(container);
        this.connections.disconnect_all_for(container);

        entry.pipelines.forEach(pipeline => pipeline.destroy());
        entry.managers.forEach(manager => manager.destroy());
        entry.actors.forEach(actor => actor.destroy());
    }

    remove_background_actors() {
        [...this.entries.keys()].forEach(actor => this.remove_entry(actor));
    }

    disable() {
        if (!this.enabled)
            return;

        this._log('removing blur from coverflow alt-tab');
        this.enabled = false;

        this.remove_background_actors();
        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > coverflow alt-tab]  ${str}`);
    }
};
