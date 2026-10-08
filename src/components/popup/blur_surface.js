import GLib from 'gi://GLib';
import Meta from 'gi://Meta';

import { DynamicPipeline } from '../../render/dynamic_surface.js';
import { has_any_style_class, has_style_class } from './actors.js';
import { PopupBlurSurfaceFade } from './surface_fade.js';
import { PopupBlurSurfacePlacement } from './surface_placement.js';
import { PopupBlurSurfaceSignals } from './surface_signals.js';
import { PopupBlurSurfaceStyle } from './surface_style.js';
import { PopupBlurSurfaceTransitions } from './surface_transitions.js';
import { PopupBlurStaticActor } from './static_actor.js';
import { getSurfaceSibling, registerSurface, unregisterSurface } from './surface_stack.js';

const NOTIFICATION_STYLE_CLASSES = ['notification-banner'];
const FULL_GEOMETRY_STYLE_CLASSES = [
    'popup-menu-content', 'candidate-popup-content',
    'quick-settings', 'quick-toggle-menu', 'screenshot-ui-panel',
    'notification-banner', 'snap-assistant',
    'osd-window', 'resize-popup', 'workspace-switcher',
    'modal-dialog', 'run-dialog', 'clipboard-dialog',
    'bms-keyboard-surface',
];
const HEAVY_SURFACE_STYLE_CLASSES = [
    'datemenu-popover', 'quick-settings', 'modal-dialog',
    'candidate-popup-content', 'candidate-popup-boxpointer',
];
const QUICK_SETTINGS_STYLE_CLASSES = [
    'quick-toggle-menu', 'quick-settings', 'datemenu-popover',
];

export const PopupBlurSurface = class PopupBlurSurface {
    constructor(settings, effects_manager, target, root_actor, parent, sibling, corner_radius, request_destroy) {
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.target = target;
        this.root_actor = root_actor;
        this.parent = parent;
        this.sibling = sibling;
        this.corner_radius = corner_radius;
        this.request_destroy = request_destroy;
        this.fade = new PopupBlurSurfaceFade(target, root_actor, parent);
        this.placement = new PopupBlurSurfacePlacement(this);
        this.signals = new PopupBlurSurfaceSignals(this);
        this.style = new PopupBlurSurfaceStyle(this);
        this.transitions = new PopupBlurSurfaceTransitions(this);
        this.repaint_id = 0;
        this.update_id = 0;
        this.transition_update_id = 0;
        this.opacity = null;
        this.static_blur = settings.popup.STATIC_BLUR;
        this.static_actor = null;
        this.pipeline = null;
        this.blur_actor = null;
        this.actor = null;
    }

    enable() {
        if (!this.create_actor())
            return false;

        this.actor.hide();
        registerSurface(this);
        this.parent.add_child(this.actor);
        if (!this.static_blur)
            this.pipeline.attach_pipeline();
        this.set_actor_position();
        this.style.update_target_style();

        this.signals.connections.connect(
            this.settings.settings, 'changed::pipelines',
            () => this.style.update_liquid_glass_style()
        );
        this.connect_lifetime();
        this.signals.connect_actor(this.target);
        this.signals.connect_actor(this.root_actor);
        this.signals.connect_ancestors(this.target);
        this.signals.connect_ancestors(this.root_actor);
        if (has_style_class(this.target, 'screenshot-ui-panel'))
            this.signals.connect_actor(this.parent);
        this.queue_update();

        return true;
    }

    // Our overlay lives in `parent`, so tear it down before a destroyed
    // parent disposes of it as one of its children.
    connect_lifetime() {
        this.signals.connect_destroy(this.target, () => {
            this.style.forget_target_style();
            this.request_destroy();
        });
        new Set([this.root_actor, this.parent]).forEach(actor => {
            if (actor !== this.target)
                this.signals.connect_destroy(actor, () => this.request_destroy());
        });
    }

    create_actor() {
        if (this.static_blur)
            return this.create_static_actor();

        this.pipeline = new DynamicPipeline(
            this.effects_manager,
            global.blur_my_shell._pipelines_manager,
            this.settings.popup.PIPELINE,
            {
                corner_radius: this.get_corner_radius(),
                get_corners: () => this.settings.popup.ROUNDED_CORNERS,
            }
        );
        this.blur_actor = this.pipeline.create_actor('bms-popup-blurred-widget');
        this.blur_actor.add_style_class_name('bms-popup-blurred-widget');
        this.actor = this.blur_actor;
        return true;
    }

    create_static_actor() {
        const static_actor = new PopupBlurStaticActor(
            this.settings,
            this.effects_manager,
            this.target,
            this.root_actor,
            this.parent,
            () => this.get_corner_radius()
        );
        if (!static_actor.create())
            return false;

        this.static_actor = static_actor;
        this.sync_static_actor();
        return true;
    }

    sync_static_actor() {
        this.actor = this.static_actor.actor;
        this.blur_actor = this.static_actor.blur_actor;
        this.pipeline = this.static_actor.pipeline;
    }

    set_actor_position() {
        const anchor = this.sibling?.get_parent() === this.parent ? this.sibling : null;
        const sibling = getSurfaceSibling(this, anchor);
        if (!this.is_below_sibling(sibling))
            this.parent.set_child_below_sibling(this.actor, sibling);
    }

    is_below_sibling(sibling) {
        if (this.actor.get_parent() !== this.parent)
            return false;
        if (!sibling)
            return this.parent.get_first_child() === this.actor;
        return this.actor.get_next_sibling() === sibling;
    }

    matches_any_style_class(style_classes) {
        return has_any_style_class(this.target, style_classes)
            || has_any_style_class(this.root_actor, style_classes);
    }

    is_quick_settings() {
        return this.matches_any_style_class(QUICK_SETTINGS_STYLE_CLASSES);
    }

    is_heavy_surface() {
        return this.matches_any_style_class(HEAVY_SURFACE_STYLE_CLASSES);
    }

    is_notification_surface() {
        return this.matches_any_style_class(NOTIFICATION_STYLE_CLASSES);
    }

    is_keyboard_surface() {
        return this.matches_any_style_class(['bms-keyboard-surface']);
    }

    uses_full_actor_geometry() {
        return this.matches_any_style_class(FULL_GEOMETRY_STYLE_CLASSES);
    }

    update() {
        if (this.is_notification_surface()) {
            this.update_live_surface();
            return;
        }

        let transition_state = this.transitions.get_state();
        const geometry = this.placement.get_surface_geometry();
        const visible = this.is_visible();
        const geometry_changed = this.placement.has_surface_geometry_changed(geometry);
        if (
            !visible
            || !this.placement.has_valid_geometry(geometry)
            || (!transition_state.geometry && geometry_changed)
        )
            transition_state = this.transitions.complete_state(transition_state);
        if (!visible && !transition_state.running) {
            this.hide_surface();
            return;
        }
        if (!this.placement.has_valid_geometry(geometry)) {
            if (this.placement.offscreen) {
                this.hide_surface();
            } else if (this.placement.keep_transition_visible(transition_state)) {
                this.queue_repaint(true);
                this.queue_transition_update(transition_state);
            } else if (transition_state.running) {
                this.queue_transition_update(transition_state);
            } else {
                this.hide_surface();
            }
            return;
        }
        this.set_actor_position();
        if (!this.placement.update_surface_geometry(geometry))
            return;
        if (!this.placement.prepare_visible_geometry())
            return;
        this.update_actors_visibility();
        this.queue_repaint(!visible);
        this.queue_transition_update(transition_state);
    }

    update_live_surface() {
        if (!this.is_visible()) {
            this.hide_surface();
            return;
        }
        this.set_actor_position();
        const geometry = this.placement.get_unclipped_monitor_surface_geometry();
        if (!this.placement.has_valid_geometry(geometry)) {
            this.hide_surface();
            return;
        }
        if (!this.placement.update_surface_geometry(geometry))
            return;
        if (!this.placement.prepare_visible_geometry())
            return;
        this.update_actors_visibility();
        this.queue_repaint();
        this.queue_transition_update();
    }

    update_actors_visibility() {
        if (this.update_opacity() > 0)
            this.actor.show();
        else
            this.actor.hide();
    }

    hide_surface() {
        this.opacity = 0;
        this.update_surface_opacity(0);
        this.actor.hide();
        this.placement.hide();
    }

    update_opacity() {
        const opacity = this.fade.get_opacity();
        if (this.opacity !== opacity || !this.has_surface_opacity(opacity)) {
            this.update_surface_opacity(opacity);
            this.opacity = opacity;
        }
        return opacity;
    }

    has_surface_opacity(opacity) {
        if (this.static_blur)
            return this.static_actor.has_opacity(opacity);
        return this.actor.opacity === opacity
            && this.pipeline.opacityFactor === this.get_pipeline_opacity(opacity) / 255;
    }

    update_surface_opacity(opacity) {
        if (this.static_blur) {
            this.static_actor.set_opacity(opacity);
            return;
        }
        this.actor.opacity = opacity;
        this.pipeline.set_opacity_factor(this.get_pipeline_opacity(opacity) / 255);
    }

    get_pipeline_opacity(opacity) {
        if (!has_style_class(this.target, 'screenshot-ui-panel'))
            return opacity;
        return Math.round(opacity * this.parent.opacity / 255);
    }

    queue_update() {
        if (this.update_id || this.transition_update_id)
            return;
        this.update_id = global.compositor.get_laters().add(
            Meta.LaterType.BEFORE_REDRAW,
            () => {
                this.update_id = 0;
                this.update();
                return GLib.SOURCE_REMOVE;
            }
        );
    }

    queue_transition_update(transition_state = null) {
        const has_running_transition = transition_state?.running ?? this.transitions.has_running();
        if (this.transition_update_id || this.update_id || !has_running_transition)
            return;
        this.transition_update_id = global.compositor.get_laters().add(
            Meta.LaterType.BEFORE_REDRAW,
            () => {
                this.transition_update_id = 0;
                this.update();
                return GLib.SOURCE_REMOVE;
            }
        );
    }

    queue_repaint(force = false) {
        if (this.static_blur || this.repaint_id || (!force && !this.is_visible()))
            return;
        this.repaint_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.repaint_id = 0;
            if (force || this.is_visible())
                this.pipeline.repaint_effect();
            return GLib.SOURCE_REMOVE;
        });
    }

    update_settings() {
        this.style.update_target_style();
        if (this.static_blur)
            this.static_actor.update_settings();
        else
            this.pipeline.set_corner_radius(this.get_corner_radius());
    }

    get_corner_radius() {
        return this.settings.popup[this.corner_radius.property];
    }

    is_visible() {
        return this.is_actor_visible(this.target) && this.is_actor_visible(this.root_actor);
    }

    is_actor_visible(actor) {
        if (actor.visible && actor.mapped)
            return true;
        if (!this.is_keyboard_surface())
            return false;

        const parent = actor.get_parent();
        return parent !== null && parent.visible && parent.mapped;
    }

    update_pipeline() {
        if (this.static_blur)
            this.static_actor.update_pipeline();
        else
            this.pipeline.change_pipeline_to(this.settings.popup.PIPELINE);
        this.style.update_target_style();
    }

    destroy() {
        const laters = global.compositor.get_laters();
        if (this.update_id)
            laters.remove(this.update_id);
        if (this.transition_update_id)
            laters.remove(this.transition_update_id);
        if (this.repaint_id)
            GLib.source_remove(this.repaint_id);
        this.update_id = 0;
        this.transition_update_id = 0;
        this.repaint_id = 0;

        this.signals.destroy();
        this.style.restore_target_style();
        unregisterSurface(this);

        if (this.static_blur) {
            this.static_actor.destroy();
        } else {
            this.pipeline.destroy();
            this.blur_actor.destroy();
        }
        this.static_actor = null;
        this.pipeline = null;
        this.blur_actor = null;
        this.actor = null;
    }
};
