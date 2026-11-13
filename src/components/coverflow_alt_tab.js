import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { StaticBlur } from '../render/static_blur/static_blur.js';
import { get_pipeline_id, connect_system_style_changes } from '../conveniences/style.js';

export const CoverflowAltTabBlur = class CoverflowAltTabBlur {
    constructor(connections, settings) {
        this.connections = connections;
        this.settings = settings;
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
        connect_system_style_changes(this.connections, () => {
            if (this.settings.coverflow_alt_tab.PIPELINE_AUTO_MODE)
                this.update_pipeline();
        });
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

        const backgrounds = Main.layoutManager.monitors.map(monitor => {
            const background = new StaticBlur({
                name: 'bms-coverflow-alt-tab-blurred-widget',
                monitorIndex: monitor.index,
                pipelineId: get_pipeline_id(this.settings.coverflow_alt_tab),
                wholeMonitor: true,
            });
            background.set_position(monitor.x, monitor.y);
            actor.insert_child_at_index(background, 0);
            return background;
        });
        this.entries.set(actor, backgrounds);

        this.connections.connect(actor, 'destroy', () => this.remove_entry(actor));
    }

    update_pipeline() {
        this.entries.forEach(backgrounds => backgrounds.forEach(background =>
            background.setPipeline(get_pipeline_id(this.settings.coverflow_alt_tab))
        ));
    }

    remove_entry(container) {
        const backgrounds = this.entries.get(container);
        this.entries.delete(container);
        this.connections.disconnect_all_for(container);
        backgrounds.forEach(background => background.destroy());
    }

    remove_background_actors() {
        [...this.entries.keys()].forEach(actor => this.remove_entry(actor));
    }

    disable() {
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
