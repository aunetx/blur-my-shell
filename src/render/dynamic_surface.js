import Clutter from 'gi://Clutter';
import St from 'gi://St';

import { Pipeline } from '../conveniences/pipeline.js';
import { BackdropCaptureEffect } from './backdrop_capture.js';
import { RoundedPipeline } from './rounded_pipeline.js';

export class DynamicPipeline {
    constructor(effectsManager, pipelinesManager, pipelineId, options = {}) {
        this.effectsManager = effectsManager;
        this.pipelinesManager = pipelinesManager;
        this.pipelineId = pipelineId;
        this.fixedBlurPasses = options.fixed_blur_passes ?? false;
        this.cornerRadius = options.corner_radius ?? null;
        this.opacityFactor = 1;
        this.actor = null;
        this.contentActor = null;
        this.captureEffect = null;
        this.pipeline = null;
        this.roundedPipeline = null;
        this.pipelineChangedIds = [];
        this.mapId = 0;
        this.allocationId = 0;
        this.container = null;
        this.ownsActor = false;
    }

    create_actor(name) {
        this.actor = new St.Widget({
            name,
            reactive: false,
            clip_to_allocation: true,
            layout_manager: new Clutter.BinLayout(),
        });
        this.contentActor = new St.Widget({
            reactive: false,
            x_align: Clutter.ActorAlign.FILL,
            y_align: Clutter.ActorAlign.FILL,
            x_expand: true,
            y_expand: true,
            content_gravity: Clutter.ContentGravity.RESIZE_FILL,
        });
        this.contentActor._bms_live_input = true;
        this.actor.add_child(this.contentActor);
        this.actor.connect('destroy', () => {
            this.disconnectPipelineChanged();
            this.roundedPipeline?.destroy();
            this.pipeline?.destroy();
            this.roundedPipeline = null;
            this.pipeline = null;
            this.actor = null;
            this.contentActor = null;
            this.captureEffect = null;
            this.mapId = 0;
        });

        this.captureEffect = new BackdropCaptureEffect(this.contentActor);
        this.actor.add_effect(this.captureEffect);
        return this.actor;
    }

    attach_pipeline() {
        if (this.pipeline || !this.contentActor)
            return;
        if (!this.actor?.get_stage()) {
            if (!this.mapId)
                this.mapId = this.actor.connect('notify::mapped', () => {
                    if (!this.actor?.mapped)
                        return;
                    this.actor.disconnect(this.mapId);
                    this.mapId = 0;
                    this.attach_pipeline();
                });
            return;
        }
        this.pipeline = new Pipeline(
            this.effectsManager,
            this.pipelinesManager,
            this.pipelineId,
            this.contentActor,
            { on_effect_updated: () => this.set_opacity_factor(this.opacityFactor, true) }
        );
        this.pipelineId = this.pipeline.pipeline_id;
        if (this.cornerRadius !== null) {
            this.roundedPipeline = new RoundedPipeline(
                this.effectsManager,
                () => this.cornerRadius
            );
            this.roundedPipeline.bind(this.pipeline, this.contentActor);
        }
        this.connectPipelineChanged();
        this.set_opacity_factor(this.opacityFactor, true);
    }

    create_background_with_effect(container, name) {
        const actor = this.create_actor(name);
        let manager = null;
        try {
            manager = new Clutter.Actor();
            manager.backgroundActor = actor;
            manager._bms_pipeline = this;
            container.insert_child_at_index(actor, 0);
            this.attach_pipeline();
            return [actor, manager];
        } catch (error) {
            if (manager) {
                manager._bms_pipeline = null;
                manager.destroy();
            }
            this.destroy();
            actor.destroy();
            throw error;
        }
    }

    attach_to_container(container, name) {
        const actor = this.create_actor(name);
        try {
            container.insert_child_at_index(actor, 0);
            const updateSize = () => actor.set_size(
                Math.max(1, container.width),
                Math.max(1, container.height)
            );
            this.allocationId = container.connect(
                'notify::allocation', updateSize
            );
            this.container = container;
            this.ownsActor = true;
            updateSize();
            this.attach_pipeline();
            return actor;
        } catch (error) {
            this.ownsActor = true;
            this.destroy();
            throw error;
        }
    }

    get effects() {
        return this.pipeline?.effects ?? [];
    }

    change_pipeline_to(pipelineId) {
        this.disconnectPipelineChanged();
        this.pipeline?.change_pipeline_to(pipelineId);
        this.pipelineId = this.pipeline?.pipeline_id ?? pipelineId;
        this.roundedPipeline?.update();
        this.connectPipelineChanged();
        this.set_opacity_factor(this.opacityFactor, true);
    }

    connectPipelineChanged() {
        this.disconnectPipelineChanged();
        const pipelineId = this.pipeline?.pipeline_id;
        if (!pipelineId)
            return;

        this.pipelineChangedIds.push(
            this.pipelinesManager.connect(
                `${pipelineId}::pipeline-updated`,
                () => this.set_opacity_factor(this.opacityFactor, true)
            ),
            this.pipelinesManager.connect(
                `${pipelineId}::pipeline-destroyed`,
                () => {
                    this.pipelineId = this.pipeline?.pipeline_id ?? 'pipeline_default';
                    this.connectPipelineChanged();
                    this.set_opacity_factor(this.opacityFactor, true);
                }
            )
        );
    }

    disconnectPipelineChanged() {
        this.pipelineChangedIds.forEach(id => {
            if (id)
                this.pipelinesManager.disconnect(id);
        });
        this.pipelineChangedIds = [];
    }

    set_opacity_factor(opacityFactor, force = false) {
        const factor = Math.max(0, Math.min(1, opacityFactor));
        if (!force && this.opacityFactor === factor)
            return;
        this.opacityFactor = factor;

        this.effects.forEach(effect => {
            const params = effect._bms_effect_params ?? {};
            if ('opacity_factor' in effect)
                effect.opacity_factor = (params.opacity_factor ?? 1) * factor;
            if (effect._bms_pixelize_role === 'refraction-blur') {
                this.set_blur_radius(effect, this.pipeline.get_refraction_blur_radius(
                    params.blur_radius
                ), factor);
                effect.opacity_factor = params.opacity_factor ?? 1;
            }
            if (effect._bms_effect_type === 'dual_kawase_blur') {
                this.set_blur_radius(effect, params.unscaled_radius ?? 30, factor);
                effect.brightness = 1 + ((params.brightness ?? 0.6) - 1) * factor;
                effect.opacity_factor = params.opacity_factor ?? 1;
            }
        });
    }

    set_blur_radius(effect, radius, factor) {
        if (this.fixedBlurPasses) {
            effect.fixed_passes = null;
            effect.fixed_passes = effect.getPassConfiguration(radius).passes;
        }
        effect.unscaled_radius = radius * factor;
    }

    set_straight_corners(straightCorners) {
        this.roundedPipeline?.setStraightCorners(straightCorners);
    }

    set_corner_radius(cornerRadius) {
        if (this.cornerRadius === null)
            return;
        this.cornerRadius = cornerRadius;
        this.roundedPipeline?.update();
    }

    repaint_effect() {
        this.captureEffect?.queue_repaint();
        this.effects.forEach(effect => effect.queue_repaint?.());
        this.actor?.queue_redraw();
    }

    destroy() {
        if (this.container && this.allocationId) {
            try {
                this.container.disconnect(this.allocationId);
            } catch (e) { }
        }
        this.allocationId = 0;
        this.container = null;
        if (this.actor && this.mapId) {
            try {
                this.actor.disconnect(this.mapId);
            } catch (e) { }
        }
        this.mapId = 0;
        this.disconnectPipelineChanged();
        this.roundedPipeline?.destroy();
        this.roundedPipeline = null;
        this.pipeline?.destroy();
        this.captureEffect?.release();
        if (this.actor && this.captureEffect)
            this.actor.remove_effect(this.captureEffect);
        this.captureEffect = null;
        this.pipeline = null;
        this.contentActor = null;
        if (this.ownsActor && this.actor)
            this.actor.destroy();
        this.actor = null;
        this.ownsActor = false;
    }
}
