import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { DummyPipeline } from '../conveniences/dummy_pipeline.js';
import { PaintSignals } from '../conveniences/paint_signals.js';
import { Pipeline } from '../conveniences/pipeline.js';
import { ShellStaticCorner } from './shell_static_corner.js';
import { ShellSurfaceFade } from './shell_surface_fade.js';

const SURFACE_SIGNALS = ['notify::allocation', 'notify::position', 'notify::size', 'notify::visible', 'notify::mapped', 'notify::opacity', 'notify::translation-x', 'notify::translation-y', 'notify::scale-x', 'notify::scale-y', 'notify::pseudo-class'];
const TRANSITION_PROPERTIES = ['opacity', 'translation-x', 'translation-y', 'scale-x', 'scale-y'];
const ROOT_GEOMETRY_STYLE_CLASSES = ['notification-banner'];

export const ShellBlurSurface = class ShellBlurSurface {
    constructor(connections, settings, effects_manager, target, root_actor, parent, sibling, corner_radius, is_enabled) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.target = target;
        this.root_actor = root_actor;
        this.parent = parent;
        this.sibling = sibling;
        this.corner_radius = corner_radius;
        this.is_enabled = is_enabled;
        this.paint_signals = new PaintSignals(connections);
        this.signal_ids = [];
        this.signal_actors = new WeakSet();
        this.repaint_id = 0;
        this.update_id = 0;
        this.transition_update_id = 0;
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
        this.opacity = null;
        this.static_opacity_factor = 1;
        this.static_background_opacity = null;
        this.monitor_index = null;
        this.static_blur = settings.shell.STATIC_BLUR;
        this.static_corner = new ShellStaticCorner(effects_manager, () => this.get_corner_radius());
        this.original_target_style = null;
        this.target_style_set = false;
        this.corner_changed_id = 0;
    }

    enable() {
        if (!this.create_actor()) {
            if (this.static_blur)
                this.destroy_static_actor();
            return false;
        }

        this.fade = new ShellSurfaceFade(
            this.actor,
            this.target,
            this.root_actor,
            this.parent
        );
        this.actor.hide();
        this.parent.add_child(this.actor);
        this.set_actor_position();
        this.original_target_style = this.target.get_style?.() ?? null;
        this.update_target_style();

        this.update();
        this.connect_repaints();
        this.connect_actor(this.target);
        this.connect_actor(this.root_actor);
        this.connect_ancestors();
        this.connect_layout();
        this.connect_settings();

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
            this.blur_actor,
            {
                corner_radius_key: this.corner_radius.key,
                corner_radius_getter: () => this.get_corner_radius(),
            }
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
        this.background_group.hide();
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
            this.settings.shell.PIPELINE,
            null,
            {
                effect_overrides: {
                    native_static_gaussian_blur: params => this.get_static_blur_effect_overrides(params, 'unscaled_radius'),
                    gaussian_blur: params => this.get_static_blur_effect_overrides(params, 'radius'),
                    monte_carlo_blur: params => this.get_static_blur_effect_overrides(params, 'radius'),
                    color: params => this.get_static_color_effect_overrides(params),
                    luminosity: params => this.get_static_luminosity_effect_overrides(params),
                    noise: params => this.get_static_noise_effect_overrides(params),
                    corner: () => ({ radius: this.get_corner_radius() }),
                },
            }
        );
        this.blur_actor = pipeline.create_background_with_effects(
            monitor.index,
            bg_manager_list,
            this.background_group,
            'bms-shell-blurred-widget'
        );
        this.blur_actor.set_position(monitor.x, monitor.y);
        this.blur_actor.hide();
        this.blur_actor.add_style_class_name('bms-shell-blurred-widget');
        this.bg_manager = bg_manager_list[0];
        this.pipeline = pipeline;
        this.monitor_index = monitor.index;
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
        this.static_corner.bind(this.pipeline, this.blur_actor);

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
        try {
            const sibling = this.sibling?.get_parent?.() === this.parent ? this.sibling : null;
            if (this.is_below_sibling(sibling))
                return;

            this.parent.set_child_below_sibling(this.actor, sibling);
        } catch (e) { }
    }

    is_below_sibling(sibling) {
        const children = this.parent.get_children?.() ?? [];
        const actor_index = children.indexOf(this.actor);

        if (actor_index < 0)
            return false;

        if (!sibling)
            return actor_index === 0;

        const sibling_index = children.indexOf(sibling);
        return sibling_index >= 0 && actor_index < sibling_index;
    }

    update() {
        try {
            if (!this.is_visible()) {
                this.hide_surface();
                return;
            }

            this.set_actor_position();

            let parent_x = 0;
            let parent_y = 0;

            if (this.parent.get_transformed_position)
                [parent_x, parent_y] = this.parent.get_transformed_position();

            const geometry_actor = this.get_geometry_actor();
            const [target_x, target_y] = geometry_actor.get_transformed_position();
            const [target_width, target_height] = geometry_actor.get_transformed_size();
            const x = Math.round(target_x - parent_x);
            const y = Math.round(target_y - parent_y);
            const width = Math.ceil(target_width);
            const height = Math.ceil(target_height);

            if (width <= 0 || height <= 0) {
                this.hide_surface();
                return;
            }

            if (this.static_blur) {
                if (!this.update_static_geometry(target_x, target_y, x, y, width, height))
                    return;
            } else {
                this.update_dynamic_geometry(x, y, width, height);
            }

            if (this.update_opacity() > 0)
                this.show_actors();
            else
                this.hide_actors();
            this.queue_repaint();
            this.queue_transition_update();
        } catch (e) {
            this.hide_surface();
        }
    }

    hide_surface() {
        this.opacity = 0;
        this.update_surface_opacity(0);
        this.hide_actors();
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

    update_static_geometry(target_x, target_y, x, y, width, height) {
        if (!this.update_static_background()) {
            this.hide_actors();
            return false;
        }

        const monitor = Main.layoutManager.monitors[this.monitor_index];
        if (!monitor) {
            this.hide_actors();
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

        this.blur_actor.show();
        return true;
    }

    update_opacity() {
        const opacity = this.fade.get_opacity();

        if (
            this.opacity === opacity
            && this.has_surface_opacity(opacity)
        )
            return opacity;

        this.update_surface_opacity(opacity);
        this.opacity = opacity;
        return opacity;
    }

    has_surface_opacity(opacity) {
        if (this.static_blur)
            return this.has_static_background_opacity(opacity);

        return this.actor.opacity === opacity;
    }

    update_surface_opacity(opacity) {
        if (this.static_blur) {
            this.set_static_opacity_factor(opacity / 255);
            this.actor.opacity = 255;
            if (this.blur_actor)
                this.blur_actor.opacity = 255;
            this.set_static_background_opacity(opacity);
            return;
        }

        this.fade.set_opacity(opacity);

        this.pipeline.set_opacity_factor(opacity / 255);
    }

    set_static_opacity_factor(opacity_factor) {
        opacity_factor = Math.max(0, Math.min(1, opacity_factor));
        if (this.static_opacity_factor === opacity_factor)
            return;

        this.static_opacity_factor = opacity_factor;
        this.pipeline?.apply_effect_overrides();
    }

    get_static_blur_effect_overrides(params, radius_key) {
        const overrides = {};

        if (radius_key in params)
            overrides[radius_key] = params[radius_key] * this.static_opacity_factor;
        if ('brightness' in params)
            overrides.brightness = 1 - (1 - params.brightness) * this.static_opacity_factor;

        return overrides;
    }

    get_static_color_effect_overrides(params) {
        if (!Array.isArray(params.color) || params.color.length < 4)
            return {};

        const [red, green, blue, alpha] = params.color;
        return {
            color: [red, green, blue, alpha * this.static_opacity_factor],
        };
    }

    get_static_luminosity_effect_overrides(params) {
        const factor = this.static_opacity_factor;
        return {
            brightness_shift: params.brightness_shift * factor,
            brightness_multiplicator: 1 + (params.brightness_multiplicator - 1) * factor,
            contrast: 1 + (params.contrast - 1) * factor,
            saturation_multiplicator: 1 + (params.saturation_multiplicator - 1) * factor,
        };
    }

    get_static_noise_effect_overrides(params) {
        return {
            noise: params.noise * this.static_opacity_factor,
        };
    }

    has_static_background_opacity(opacity) {
        if (this.static_background_opacity !== opacity)
            return false;

        const background_actor = this.get_static_background_actor();
        return !background_actor || background_actor.opacity === opacity;
    }

    set_static_background_opacity(opacity) {
        this.static_background_opacity = opacity;

        const background_actor = this.get_static_background_actor();
        if (background_actor)
            background_actor.opacity = opacity;

        this.blur_actor?.get_children?.().forEach(child => child.opacity = opacity);
    }

    get_static_background_actor() {
        try {
            return this.bg_manager?.backgroundActor ?? null;
        } catch (e) {
            return null;
        }
    }

    get_geometry_actor() {
        if (this.has_any_style_class(this.root_actor, ROOT_GEOMETRY_STYLE_CLASSES))
            return this.root_actor;

        return this.target;
    }

    show_actors() {
        this.actor.show();
    }

    hide_actors() {
        this.actor.hide();
    }

    queue_update() {
        if (this.update_id || this.transition_update_id)
            return;

        this.update_id = global.compositor.get_laters().add(
            Meta.LaterType.BEFORE_REDRAW,
            () => {
                this.update_id = 0;

                if (this.is_enabled())
                    this.update();

                return GLib.SOURCE_REMOVE;
            }
        );
    }

    queue_transition_update() {
        if (this.transition_update_id || this.update_id || !this.has_running_transition())
            return;

        this.transition_update_id = global.compositor.get_laters().add(
            Meta.LaterType.BEFORE_REDRAW,
            () => {
                this.transition_update_id = 0;

                if (this.is_enabled())
                    this.update();

                return GLib.SOURCE_REMOVE;
            }
        );
    }

    has_running_transition() {
        return this.get_transition_actors().some(actor =>
            TRANSITION_PROPERTIES.some(property => this.has_transition(actor, property))
        );
    }

    get_transition_actors() {
        return [
            this.target,
            this.root_actor,
            this.get_geometry_actor(),
        ].filter((actor, index, actors) => actor && actors.indexOf(actor) === index);
    }

    has_transition(actor, property) {
        try {
            return !!actor.get_transition?.(property);
        } catch (e) {
            return false;
        }
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

    connect_settings() {
        [
            this.corner_radius.key,
            'override-background',
            'style-shell',
        ].forEach(key => {
            const id = this.settings.shell.settings.connect(
                `changed::${key}`,
                () => this.update_settings()
            );
            this.signal_ids.push([this.settings.shell.settings, id]);
        });
    }

    update_settings() {
        this.update_target_style();
        this.static_corner.update();
    }

    create_corner_effect() {
        if (this.settings.ROUNDED_BLUR_FOUND || this.get_corner_radius() <= 0)
            return null;

        const corner_effect = this.effects_manager.new_corner_effect({
            radius: this.get_corner_radius(),
        });
        this.blur_actor.add_effect(corner_effect);

        this.corner_changed_id = this.settings.shell.settings.connect(
            `changed::${this.corner_radius.key}`,
            () => corner_effect.radius = this.get_corner_radius()
        );

        return corner_effect;
    }

    get_corner_radius() {
        return this.settings.shell[this.corner_radius.property] ?? this.settings.shell.CORNER_RADIUS;
    }

    update_target_style() {
        if (
            !this.target.set_style
            || !this.settings.shell.OVERRIDE_BACKGROUND
        ) {
            this.restore_target_style();
            return;
        }

        const base_style = this.original_target_style ?? '';
        const separator = base_style.trim() && !base_style.trim().endsWith(';') ? '; ' : '';
        this.target.set_style(
            `${base_style}${separator}` +
            `border-radius: ${this.get_corner_radius()}px;`
        );
        this.target_style_set = true;
    }

    has_any_style_class(actor, style_classes) {
        return style_classes.some(style_class => this.has_style_class(actor, style_class));
    }

    has_style_class(actor, style_class) {
        try {
            if (actor?.has_style_class_name)
                return actor.has_style_class_name(style_class);

            return (actor?.get_style_class_name?.() ?? '').split(/\s+/).includes(style_class);
        } catch (e) {
            return false;
        }
    }

    restore_target_style() {
        if (!this.target_style_set || !this.target.set_style)
            return;

        this.target.set_style(this.original_target_style);
        this.target_style_set = false;
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
        try {
            return actor && actor.visible && actor.mapped && actor.has_allocation?.();
        } catch (e) {
            return false;
        }
    }

    update_pipeline() {
        if (this.static_blur) {
            this.bg_manager?._bms_pipeline.change_pipeline_to(this.settings.shell.PIPELINE);
            this.static_corner.update();
        }
    }

    destroy(actor_already_destroyed = false) {
        try {
            this.paint_signals.disconnect_all_for_actor(this.blur_actor);
            this.paint_signals.disconnect_all_for_actor(this.target);
        } catch (e) { }

        if (!actor_already_destroyed)
            this.restore_target_style();

        if (this.corner_changed_id)
            this.settings.shell.settings.disconnect(this.corner_changed_id);

        if (this.repaint_id)
            GLib.source_remove(this.repaint_id);
        this.repaint_id = 0;

        if (this.update_id)
            global.compositor.get_laters().remove(this.update_id);
        this.update_id = 0;

        if (this.transition_update_id)
            global.compositor.get_laters().remove(this.transition_update_id);
        this.transition_update_id = 0;

        this.fade?.destroy();

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
        this.static_corner.destroy();

        if (this.bg_manager) {
            this.bg_manager._bms_pipeline.destroy();
            this.bg_manager.destroy();
            this.bg_manager = null;
        }

        this.background_group?.destroy_all_children();
        this.blur_actor = null;
        this.pipeline = null;
        this.monitor_index = null;
        this.static_background_opacity = null;
    }
};
