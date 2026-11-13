import Clutter from 'gi://Clutter';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from '../../pipelines/pipeline.js';
import { CaptureEffect } from './capture.js';

/// Blurred monitor backgrounds that are drawn once and shown by every static blur using the same
/// monitor and pipeline. They are drawn below the windows, so that they are up to date by the time
/// the static blurs showing them are drawn, and only while one of these is shown. Mapping an actor
/// marks it as changed, so they are made transparent through a holder of their own instead of being
/// hidden, which keeps their capture.
export class SharedBackgrounds {
    constructor(connections, effectsManager, pipelinesManager) {
        this.effectsManager = effectsManager;
        this.pipelinesManager = pipelinesManager;
        this.backgrounds = new Map();
        this.group = new Clutter.Actor({ name: 'bms-shared-backgrounds' });
        Main.uiGroup.insert_child_below(this.group, global.window_group);

        // the static blurs are rebuilt for the new monitors, and must not find the old backgrounds
        connections.connect(Main.layoutManager, 'monitors-changed', () => this.backgrounds.clear());
    }

    acquire(monitorIndex, pipelineId, view) {
        const key = `${monitorIndex}:${pipelineId}`;
        let background = this.backgrounds.get(key);
        if (!background) {
            background = this.create(monitorIndex, pipelineId);
            background.key = key;
            this.backgrounds.set(key, background);
        }
        background.views.add(view);
        return background;
    }

    release(background, view) {
        background.views.delete(view);
        if (background.views.size > 0) {
            this.updateVisibility(background);
            return;
        }

        if (this.isCurrent(background))
            this.backgrounds.delete(background.key);
        background.pipeline.destroy();
        background.bgManager.destroy();
        background.holder.destroy();
    }

    /// Whether the background was made for the monitors as they are now.
    isCurrent(background) {
        return this.backgrounds.get(background.key) === background;
    }

    updateVisibility(background) {
        const visible = [...background.views].some(view => view.mapped);
        background.holder.opacity = visible ? 255 : 0;
    }

    create(monitorIndex, pipelineId) {
        const monitor = Main.layoutManager.monitors[monitorIndex];
        const holder = new Clutter.Actor({ opacity: 0 });
        this.group.add_child(holder);
        const actor = new Clutter.Actor({
            name: 'bms-shared-background',
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height,
        });
        holder.add_child(actor);

        const pipeline = new Pipeline(this.effectsManager, this.pipelinesManager, pipelineId);
        const bgManagers = [];
        pipeline.create_background_with_effects(
            monitorIndex, bgManagers, actor, 'bms-shared-background-blur', false
        );

        const capture = new CaptureEffect(() => pipeline.effects.forEach(effect => effect.releaseTargets()));
        actor.add_effect(capture);

        return { holder, pipeline, capture, bgManager: bgManagers[0], views: new Set() };
    }

    destroy() {
        this.group.destroy();
        this.backgrounds.clear();
    }
}
