import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { DummyPipeline } from '../../conveniences/dummy_pipeline.js';
import { PaintSignals } from '../../conveniences/paint_signals.js';
import { PopupBlurSurfaceFade } from './surface_fade.js';
import { PopupBlurSurfacePlacement } from './surface_placement.js';
import { PopupBlurSurfaceSignals } from './surface_signals.js';
import { PopupBlurSurfaceStyle } from './surface_style.js';
import { PopupBlurSurfaceTransitions } from './surface_transitions.js';
import { PopupBlurStaticActor } from './static_actor.js';

const NOTIFICATION_STYLE_CLASSES = ['notification-banner'];
const FULL_GEOMETRY_STYLE_CLASSES = [
    'popup-menu-content', 'candidate-popup-content',
    'quick-settings', 'quick-toggle-menu',
    'notification-banner', 'snap-assistant',
    'osd-window', 'resize-popup', 'workspace-switcher',
    'modal-dialog', 'run-dialog',
    'dash-background', 'plank-like-dock-bg',
];

export const PopupBlurSurface = class PopupBlurSurface {
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
        this.corner_changed_id = 0;
        this.actor_destroyed = false;
        this.blur_actor_destroyed = false;
        this.overview_hidden = false;
        this._first_boot = true;
        this.destroyed = false;
    }

    enable() {
        if (!this.create_actor()) {
            if (this.static_blur)
                this.destroy_static_actor();
            return false;
        }

        this.fade = new PopupBlurSurfaceFade(
            this.actor,
            this.target,
            this.root_actor,
            this.parent
        );
        this.actor.hide();
        this.parent.add_child(this.actor);
        this.set_actor_position();
        this.style.capture_target_style();
        this.style.update_target_style();

        this.connect_repaints();
        this.signals.connect_actor(this.target);
        this.signals.connect_actor(this.root_actor);
        this.signals.connect_ancestors(this.target);
        this.signals.connect_ancestors(this.root_actor);
        this.signals.connect_layout();
        this.signals.connect_settings();
        this.queue_update();

        this.connect_to_overview();
        this.hide_dash_first_boot();

        return true;
    }

    create_actor() {
        if (this.static_blur)
            return this.create_static_actor();

        this.blur_actor = new St.Widget({
            name: 'bms-popup-blurred-widget',
            reactive: false,
        });
        this.blur_actor.add_style_class_name('bms-popup-blurred-widget');
        this.track_owned_actor(this.blur_actor, { actor: true, blur_actor: true });
        this.pipeline = new DummyPipeline(
            this.effects_manager,
            this.settings.popup,
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
        this.static_actor = new PopupBlurStaticActor(
            this.settings,
            this.effects_manager,
            this.target,
            this.root_actor,
            () => this.get_corner_radius()
        );
        if (!this.static_actor.create())
            return false;
        this.sync_static_actor();
        return true;
    }

    sync_static_actor() {
        this.actor = this.static_actor.actor;
        this.blur_actor = this.static_actor.blur_actor;
        this.pipeline = this.static_actor.pipeline;
    }

    track_owned_actor(actor, flags = {}) {
        try {
            this.connections.connect(actor, 'destroy', () => {
                if (flags.actor)
                    this.actor_destroyed = true;
                if (flags.blur_actor)
                    this.blur_actor_destroyed = true;
            });
        } catch (e) { }
    }

    set_actor_position() {
        if (this.is_owned_actor_destroyed())
            return;
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
            if (this.overview_hidden)
                return this.hide_surface();

            if (this.is_notification_surface()) {
                this.update_live_surface();
                return;
            }
            let transition_state = this.transitions.get_state();
            let geometry = this.placement.get_surface_geometry();
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
                if (this.placement.offscreen)
                    return this.hide_surface();
                if (this.placement.keep_transition_visible(transition_state)) {
                    this.queue_repaint(true);
                    this.queue_transition_update(transition_state);
                    return;
                }

                if (transition_state.running) {
                    this.queue_transition_update(transition_state);
                    return;
                }
                this.hide_surface();
                return;
            }
            this.set_actor_position();
            if (!this.placement.update_surface_geometry(geometry))
                return;
            if (!this.placement.prepare_visible_geometry())
                return;
            const opacity = this.update_opacity(transition_state);
            if (opacity > 0)
                this.show_actors();
            else
                this.hide_actors();
            this.queue_repaint(!visible);
            this.queue_transition_update(transition_state);
        } catch (e) {
            this.hide_surface();
        }
    }

    update_live_surface() {
        if (this.overview_hidden)
            return this.hide_surface();

        if (!this.is_visible()) {
            this.hide_surface();
            return;
        }
        this.set_actor_position();
        const geometry = this.placement.get_unclipped_monitor_surface_geometry();
        if (!this.placement.has_valid_geometry(geometry))
            return this.hide_surface();
        if (!this.placement.update_surface_geometry(geometry))
            return;
        if (!this.placement.prepare_visible_geometry())
            return;
        if (this.update_opacity() > 0)
            this.show_actors();
        else
            this.hide_actors();
        this.queue_repaint();
        this.queue_transition_update();
    }

    hide_dash_first_boot() {
        if (
            this.settings.popup.BLUR &&
            this.settings.popup.UNBLUR_IN_OVERVIEW_DASH &&
            this._first_boot
        ) {
            const is_dash_surface = () =>
            this.style.has_any_style_class(this.target, ["dash-background", "plank-like-dock-bg"]) ||
            this.style.has_any_style_class(this.root_actor, ["dash-background", "plank-like-dock-bg"]);

            if (!is_dash_surface())
                return;

            this._first_boot = false;

            this.hide_surface_overview();

            // We show the overview to workaround the issue where the dash background is not visible on option enable while the overview is hidden.
            Main.overview.show();
        }
    }

    connect_to_overview() {
        if (
            this.settings.popup.BLUR &&
            this.settings.popup.UNBLUR_IN_OVERVIEW_DASH
        ) {
            const is_dash_surface = () =>
                this.style.has_any_style_class(this.target, ["dash-background", "plank-like-dock-bg"]) ||
                this.style.has_any_style_class(this.root_actor, ["dash-background", "plank-like-dock-bg"]);

            this.connections.connect(
                Main.overview, 'showing', _ => {
                    if (!is_dash_surface())
                        return;
                    this.hide_surface_overview();
                }
            );

            this.connections.connect(
                Main.overview, 'hidden', _ => {
                    if (!is_dash_surface())
                        return;
                    this.show_surface_overview();
                }
            );
        }
    }

    hide_surface_overview() {
        this.overview_hidden = true;
        this.hide_surface();
        this.queue_update();
    }

    show_surface_overview() {
        this.overview_hidden = false;
        this.queue_update();
    }

    hide_surface() {
        this.opacity = 0;
        this.update_surface_opacity(0);
        this.hide_actors();
        this.placement.hide();
    }

    update_opacity(transition_state = null) {
        const opacity = this.fade.get_opacity();
        const transition_opacity = this.get_transition_opacity(opacity, transition_state);
        if (
            this.opacity === transition_opacity
            && this.has_surface_opacity(transition_opacity)
        )
            return transition_opacity;
        this.update_surface_opacity(transition_opacity);
        this.opacity = transition_opacity;
        return transition_opacity;
    }

    get_transition_opacity(opacity, transition_state) {
        if (this.overview_hidden)
            return 0;

        if (
            this.static_blur
            || !transition_state?.geometry
            || transition_state.opacity
            || this.opacity <= 0
        )
            return opacity;
            
        return Math.max(opacity, this.opacity);
    }

    has_surface_opacity(opacity) {
        if (this.static_blur)
            return this.static_actor.has_opacity(opacity);
        if (this.is_owned_actor_destroyed())
            return false;
        return this.actor.opacity === opacity;
    }

    update_surface_opacity(opacity) {
        if (this.static_blur) {
            this.static_actor.set_opacity(opacity);
            return;
        }
        this.fade.set_opacity(opacity);
        try {
            this.pipeline?.set_opacity_factor(opacity / 255);
        } catch (e) { }
    }

    get_geometry_actor() {
        return this.target;
    }

    should_use_content_geometry() {
        return !this.uses_full_actor_geometry();
    }

    should_use_margin_geometry() {
        return !this.uses_full_actor_geometry();
    }

    uses_full_actor_geometry() {
        return (
            this.style.has_any_style_class(this.target, FULL_GEOMETRY_STYLE_CLASSES)
            || this.style.has_any_style_class(this.root_actor, FULL_GEOMETRY_STYLE_CLASSES)
        );
    }

    is_notification_surface() {
        return (
            this.style.has_any_style_class(this.target, NOTIFICATION_STYLE_CLASSES)
            || this.style.has_any_style_class(this.root_actor, NOTIFICATION_STYLE_CLASSES)
        );
    }

    show_actors() {
        try {
            if (!this.is_owned_actor_destroyed())
                this.actor?.show?.();
        } catch (e) { }
    }

    hide_actors() {
        try {
            if (!this.is_owned_actor_destroyed())
                this.actor?.hide?.();
        } catch (e) { }
    }

    is_owned_actor_destroyed() {
        return (
            this.actor_destroyed
            || (this.static_blur && this.static_actor?.background_group_destroyed)
        );
    }

    queue_update() {
        if (this.destroyed || this.update_id || this.transition_update_id)
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

    queue_transition_update(transition_state = null) {
        const has_running_transition = transition_state?.running ?? this.transitions.has_running();
        if (this.destroyed || this.transition_update_id || this.update_id || !has_running_transition)
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

    update_settings() {
        this.style.update_target_style();
        this.static_actor?.update_settings();
    }

    create_corner_effect() {
        if (this.settings.ROUNDED_BLUR_FOUND || this.get_corner_radius() <= 0)
            return null;
        const corner_effect = this.effects_manager.new_corner_effect({
            radius: this.get_corner_radius(),
        });
        this.blur_actor.add_effect(corner_effect);
        this.corner_changed_id = this.settings.popup.settings.connect(
            `changed::${this.corner_radius.key}`,
            () => corner_effect.radius = this.get_corner_radius()
        );
        return corner_effect;
    }

    get_corner_radius() {
        return this.settings.popup[this.corner_radius.property] ?? this.settings.popup.CORNER_RADIUS;
    }

    queue_repaint(force = false) {
        if (this.static_blur || this.repaint_id || (!force && !this.should_repaint()))
            return;
        this.repaint_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.repaint_id = 0;
            try {
                if (force || this.should_repaint())
                    this.pipeline?.repaint_effect();
            } catch (e) { }
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
            return actor && actor.visible && actor.mapped;
        } catch (e) {
            return false;
        }
    }

    update_pipeline() {
        if (this.static_blur) {
            this.static_actor.update_pipeline();
            this.sync_static_actor();
        }
    }

    destroy(actor_already_destroyed = false) {
        this.destroyed = true;
        if (this.update_id)
            global.compositor.get_laters().remove(this.update_id);
        this.update_id = 0;
        if (this.transition_update_id)
            global.compositor.get_laters().remove(this.transition_update_id);
        this.transition_update_id = 0;
        if (this.repaint_id)
            GLib.source_remove(this.repaint_id);
        this.repaint_id = 0;
        try {
            this.paint_signals.disconnect_all_for_actor(this.blur_actor);
            if (!actor_already_destroyed)
                this.paint_signals.disconnect_all_for_actor(this.target);
        } catch (e) { }
        if (!actor_already_destroyed)
            this.style.restore_target_style();
        if (this.corner_changed_id) {
            try {
                this.settings.popup.settings.disconnect(this.corner_changed_id);
            } catch (e) { }
            this.corner_changed_id = 0;
        }
        this.fade = null;
        this.signals.disconnect_all();
        if (this.corner_effect) {
            try {
                this.effects_manager.remove(this.corner_effect);
            } catch (e) { }
            this.corner_effect = null;
        }
        if (this.static_blur)
            this.destroy_static_actor();
        else
            this.destroy_dynamic_actor();
    }

    destroy_dynamic_actor() {
        const pipeline = this.pipeline;
        const blur_actor = this.blur_actor;
        this.pipeline = null;
        this.blur_actor = null;
        this.actor = null;
        try {
            pipeline?.destroy();
        } catch (e) { }
        try {
            if (!this.blur_actor_destroyed)
                blur_actor?.destroy?.();
        } catch (e) { }
    }

    destroy_static_actor() {
        this.static_actor?.destroy();
        this.static_actor = null;
        this.actor = null;
        this.blur_actor = null;
        this.pipeline = null;
        this.placement.clear();
    }
};
