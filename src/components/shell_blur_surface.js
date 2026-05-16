import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { DummyPipeline } from '../conveniences/dummy_pipeline.js';
import { PaintSignals } from '../conveniences/paint_signals.js';
import { Pipeline } from '../conveniences/pipeline.js';

const SURFACE_SIGNALS = ['notify::allocation', 'notify::position', 'notify::size', 'notify::visible', 'notify::opacity', 'notify::translation-x', 'notify::translation-y', 'notify::scale-x', 'notify::scale-y'];

export const ShellBlurSurface = class ShellBlurSurface {
    constructor(connections, settings, effects_manager, target, root_actor, parent, sibling, is_enabled) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.target = target;
        this.root_actor = root_actor;
        this.parent = parent;
        this.sibling = sibling;
        this.is_enabled = is_enabled;
        this.paint_signals = new PaintSignals(connections);
        this.signal_ids = [];
        this.signal_actors = new WeakSet();
        this.repaint_id = 0;
        this.update_id = 0;
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
        this.opacity = null;
        this.monitor_index = null;
        this.static_blur = settings.shell.STATIC_BLUR;
        this.corner_changed_id = 0;
    }

    enable() {
        if (!this.create_actor()) {
            if (this.static_blur)
                this.destroy_static_actor();
            return false;
        }

        this.parent.add_child(this.actor);
        this.set_actor_position();
        this.target.add_style_class_name?.('bms-shell-blur');

        this.update();
        this.connect_repaints();
        this.connect_actor(this.target);
        this.connect_actor(this.root_actor);
        this.connect_ancestors();
        this.connect_layout();

        return true;
    }

    create_actor() {
        if (this.static_blur)
            return this.create_static_actor();

        this.blur_actor = new St.Widget({
            name: 'bms-shell-blurred-widget',
            reactive: false,
        });
        this.blur_actor.add_style_class_name('bms-shell-blurred-widget');

        this.pipeline = new DummyPipeline(
            this.effects_manager,
            this.settings.shell,
            this.blur_actor
        );
        this.corner_effect = this.create_corner_effect();
        this.actor = this.blur_actor;

        return true;
    }

    create_static_actor() {
        this.background_group = new Meta.BackgroundGroup({
            name: 'bms-shell-backgroundgroup',
            width: 0,
            height: 0,
        });
        this.actor = this.background_group;

        return this.update_static_background();
    }

    update_static_background() {
        const monitor = this.find_monitor();
        if (!monitor)
            return false;

        if (monitor.index === this.monitor_index && this.blur_actor)
            return true;

        this.destroy_static_background();

        const bg_manager_list = [];
        const pipeline = new Pipeline(
            this.effects_manager,
            global.blur_my_shell._pipelines_manager,
            this.settings.shell.PIPELINE
        );
        this.blur_actor = pipeline.create_background_with_effects(
            monitor.index,
            bg_manager_list,
            this.background_group,
            'bms-shell-blurred-widget'
        );
        this.blur_actor.add_style_class_name('bms-shell-blurred-widget');
        this.bg_manager = bg_manager_list[0];
        this.pipeline = pipeline;
        this.monitor_index = monitor.index;

        return true;
    }

    find_monitor() {
        return (
            Main.layoutManager.findMonitorForActor(this.target)
            ?? Main.layoutManager.findMonitorForActor(this.root_actor)
            ?? Main.layoutManager.primaryMonitor
        );
    }

    set_actor_position() {
        if (this.sibling)
            this.parent.set_child_below_sibling(this.actor, this.sibling);
        else
            this.parent.set_child_below_sibling(this.actor, null);
    }

    update() {
        try {
            if (!this.is_visible()) {
                this.actor.hide();
                return;
            }

            let parent_x = 0;
            let parent_y = 0;

            if (this.parent.get_transformed_position)
                [parent_x, parent_y] = this.parent.get_transformed_position();

            const [target_x, target_y] = this.target.get_transformed_position();
            const [target_width, target_height] = this.target.get_transformed_size();
            const x = Math.round(target_x - parent_x);
            const y = Math.round(target_y - parent_y);
            const width = Math.ceil(target_width);
            const height = Math.ceil(target_height);

            if (width <= 0 || height <= 0) {
                this.actor.hide();
                return;
            }

            if (this.static_blur) {
                if (!this.update_static_geometry(target_x, target_y, width, height))
                    return;
            } else {
                this.update_dynamic_geometry(x, y, width, height);
            }

            this.update_opacity();
            this.actor.show();
            this.queue_repaint();
        } catch (e) {
            this.actor.hide();
        }
    }

    update_dynamic_geometry(x, y, width, height) {
        if (this.x !== x || this.y !== y) {
            this.blur_actor.set_position(x, y);
            this.x = x;
            this.y = y;
        }

        if (this.width !== width || this.height !== height) {
            this.blur_actor.set_size(width, height);
            this.width = width;
            this.height = height;
        }
    }

    update_static_geometry(target_x, target_y, width, height) {
        if (!this.update_static_background()) {
            this.actor.hide();
            return false;
        }

        const monitor = Main.layoutManager.monitors[this.monitor_index];
        if (!monitor) {
            this.actor.hide();
            return false;
        }

        const clip_x = Math.round(target_x - monitor.x);
        const clip_y = Math.round(target_y - monitor.y);

        if (this.x !== clip_x || this.y !== clip_y || this.width !== width || this.height !== height) {
            this.blur_actor.set_clip(clip_x, clip_y, width, height);
            this.x = clip_x;
            this.y = clip_y;
            this.width = width;
            this.height = height;
        }

        return true;
    }

    update_opacity() {
        if (this.opacity === this.root_actor.opacity)
            return;

        this.actor.opacity = this.root_actor.opacity;
        this.opacity = this.root_actor.opacity;
    }

    queue_update() {
        if (this.update_id)
            return;

        this.update_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.update_id = 0;

            if (this.is_enabled())
                this.update();

            return GLib.SOURCE_REMOVE;
        });
    }

    connect_ancestors() {
        let actor = this.target.get_parent?.();
        while (actor && actor !== this.parent) {
            this.connect_actor(actor);
            actor = actor.get_parent?.();
        }
    }

    connect_actor(actor) {
        if (!actor || this.signal_actors.has(actor))
            return;

        this.signal_actors.add(actor);

        SURFACE_SIGNALS.forEach(signal => {
            try {
                const id = actor.connect(signal, () => this.queue_update());
                this.signal_ids.push([actor, id]);
            } catch (e) { }
        });
    }

    connect_repaints() {
        if (this.static_blur || this.settings.HACKS_LEVEL !== 1)
            return;

        const repaint_source = {
            queue_repaint: () => this.queue_repaint(),
        };

        [
            this.blur_actor,
            this.target,
        ].forEach(actor => {
            try {
                this.paint_signals.disconnect_all_for_actor(actor);
                this.paint_signals.connect(actor, repaint_source);
            } catch (e) { }
        });
    }

    connect_layout() {
        if (!this.static_blur)
            return;

        this.signal_ids.push([
            Main.layoutManager,
            Main.layoutManager.connect('monitors-changed', () => this.queue_update()),
        ]);
    }

    create_corner_effect() {
        if (this.settings.ROUNDED_BLUR_FOUND || this.settings.shell.CORNER_RADIUS <= 0)
            return null;

        const corner_effect = this.effects_manager.new_corner_effect({
            radius: this.settings.shell.CORNER_RADIUS,
        });
        this.blur_actor.add_effect(corner_effect);

        this.corner_changed_id = this.settings.shell.settings.connect(
            'changed::corner-radius',
            () => corner_effect.radius = this.settings.shell.CORNER_RADIUS
        );

        return corner_effect;
    }

    queue_repaint() {
        if (this.static_blur || this.repaint_id || !this.should_repaint())
            return;

        this.repaint_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.repaint_id = 0;

            if (this.should_repaint())
                this.pipeline.repaint_effect();

            return GLib.SOURCE_REMOVE;
        });
    }

    should_repaint() {
        return this.is_enabled() && this.is_visible();
    }

    is_visible() {
        return this.is_actor_visible(this.target) && this.is_actor_visible(this.root_actor);
    }

    is_actor_visible(actor) {
        return actor && actor.visible && actor.mapped && actor.has_allocation?.();
    }

    update_pipeline() {
        if (this.static_blur)
            this.bg_manager?._bms_pipeline.change_pipeline_to(this.settings.shell.PIPELINE);
    }

    destroy(actor_already_destroyed = false) {
        try {
            this.paint_signals.disconnect_all_for_actor(this.blur_actor);
            this.paint_signals.disconnect_all_for_actor(this.target);
        } catch (e) { }

        if (!actor_already_destroyed)
            this.target.remove_style_class_name?.('bms-shell-blur');

        if (this.corner_changed_id)
            this.settings.shell.settings.disconnect(this.corner_changed_id);

        if (this.repaint_id)
            GLib.source_remove(this.repaint_id);
        this.repaint_id = 0;

        if (this.update_id)
            GLib.source_remove(this.update_id);
        this.update_id = 0;

        this.signal_ids.forEach(([signal_actor, signal_id]) => {
            try {
                signal_actor.disconnect(signal_id);
            } catch (e) { }
        });
        this.signal_ids = [];

        if (this.corner_effect)
            this.effects_manager.remove(this.corner_effect);

        if (this.static_blur)
            this.destroy_static_actor();
        else
            this.destroy_dynamic_actor();
    }

    destroy_dynamic_actor() {
        this.pipeline.destroy();
        this.blur_actor.destroy();
    }

    destroy_static_actor() {
        this.destroy_static_background();
        this.background_group?.destroy();
    }

    destroy_static_background() {
        if (this.bg_manager) {
            this.bg_manager._bms_pipeline.destroy();
            this.bg_manager.destroy();
            this.bg_manager = null;
        }

        this.background_group?.destroy_all_children();
        this.blur_actor = null;
        this.pipeline = null;
        this.monitor_index = null;
    }
};
