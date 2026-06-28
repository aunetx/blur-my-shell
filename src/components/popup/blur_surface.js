import GLib from 'gi://GLib';
import Clutter from 'gi://Clutter';
import Meta from 'gi://Meta';
import St from 'gi://St';
import { SurfaceSettings } from '../../conveniences/surface_settings.js';
import { PopupBlurSurfaceFade } from './surface_fade.js';
import { PopupBlurLiveActor } from './live_actor.js';
import { PopupBlurSurfacePlacement } from './surface_placement.js';
import { PopupBlurSurfaceSignals } from './surface_signals.js';
import { PopupBlurSurfaceStyle } from './surface_style.js';
import { PopupBlurSurfaceSwitcherDelay } from './surface_switcher_delay.js';
import { PopupBlurSurfaceTransitions } from './surface_transitions.js';
import { PopupBlurStaticActor } from './static_actor.js';
import { SURFACE_CORNER_EFFECT_ID } from '../../conveniences/surface_corner.js';
const NOTIFICATION_STYLE_CLASSES = [
    'notification-banner', 'notification', 'message',
];
const FULL_GEOMETRY_STYLE_CLASSES = [
    'popup-menu-content', 'popup-menu', 'popup-sub-menu', 'candidate-popup-content',
    'quick-settings', 'quick-toggle-menu',
    'notification-banner', 'notification', 'message', 'snap-assistant',
    'osd-window', 'resize-popup', 'workspace-switcher',
    'modal-dialog', 'run-dialog',
];
export const PopupBlurSurface = class PopupBlurSurface {
    constructor(connections, settings, effects_manager, target, root_actor, parent, sibling, get_corner_radius, is_enabled) {
        this.connections = connections;
        this.settings = settings;
        this.blur_settings = new SurfaceSettings(settings, 'popup');
        this.effects_manager = effects_manager;
        this.target = target;
        this.root_actor = root_actor;
        this.parent = parent;
        this.sibling = sibling;
        this.get_corner_radius_descriptor = get_corner_radius;
        this.corner_radius = null;
        this.corner_radius_getter = () => this.get_corner_radius();
        this.is_enabled = is_enabled;
        this.placement = new PopupBlurSurfacePlacement(this);
        this.signals = new PopupBlurSurfaceSignals(this);
        this.style = new PopupBlurSurfaceStyle(this);
        this.switcher_delay = new PopupBlurSurfaceSwitcherDelay(this);
        this.transitions = new PopupBlurSurfaceTransitions(this);
        this.repaint_id = 0;
        this.update_id = 0;
        this.transition_update_id = 0;
        this.opacity = null;
        this.static_blur = this.blur_settings.STATIC_BLUR;
        this.static_actor = null;
        this.live_actor = null;
        this.surface_corner_effect = null;
        this.surface_actor_destroyed = false;
        this.destroyed = false;
        this.settle_update_ids = new Set();
        this.resolve_corner_radius_descriptor();
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
        this.create_tint_actor();

        this.set_actor_position();
        this.apply_blur_widget_corner_radius();
        this.style.capture_target_style();
        this.style.update_target_style();
        this.signals.connect_actor(this.target);
        this.signals.connect_actor(this.root_actor);
        this.signals.connect_ancestors(this.target);
        this.signals.connect_ancestors(this.root_actor);
        this.signals.connect_parent_removal(this.target);
        this.signals.connect_parent_removal(this.root_actor);
        if (this.is_notification_surface()) {
            this.signals.connect_descendants(this.target);
            this.signals.connect_descendants(this.root_actor);
        }
        this.signals.connect_layout();
        this.signals.connect_settings();

        // BEFORE_REDRAW laters run BEFORE the Clutter relayout pass, so
        // allocations are one frame stale when our update() runs.  The
        // before-paint signal fires AFTER relayout but BEFORE paint — the
        // perfect moment to re-sync geometry with current allocations.
        // This prevents the blur/tint from lagging one frame behind during
        // height animations (e.g. quick settings nested menu expand).
        this.needs_paint_sync = false;
        this.paint_sync_id = global.stage.connect('before-paint', () => {
            if (this.destroyed || !this.is_enabled() || !this.needs_paint_sync)
                return;
            this.needs_paint_sync = false;
            // Lightweight sync — just re-read geometry with current
            // allocations and re-allocate.  The full update() already ran
            // at BEFORE_REDRAW; this just corrects the geometry that was
            // computed with stale allocations.  Running the full update()
            // here would double the per-frame work and cause lag.
            try {
                if (this.static_blur || !this.live_actor)
                    return;
                const geometry = this.placement.get_unclipped_monitor_surface_geometry();
                if (this.placement.has_valid_geometry(geometry))
                    this.placement.update_surface_geometry(geometry);
            } catch (e) { }
        });

        this.queue_update();
        return true;
    }
    create_actor() {
        if (this.static_blur)
            return this.create_static_actor();
        this.create_live_actor_wrapper();
        this.live_actor = new PopupBlurLiveActor(
            this.effects_manager,
            this.blur_settings,
            () => this.get_corner_radius()
        );
        if (!this.live_actor.create(this.actor))
            return false;
        this.sync_live_actor();
        return true;
    }
    create_live_actor_wrapper() {
        this.actor = new St.Widget({
            name: 'bms-popup-surface',
            reactive: false,
            clip_to_allocation: true,
            layout_manager: new Clutter.FixedLayout(),
        });
        this.actor.add_style_class_name('bms-popup-surface');
        try {
            this.actor.set_offscreen_redirect(Clutter.OffscreenRedirect.ALWAYS);
        } catch (e) { }
        this.actor.set_size(1, 1);
        this.actor.hide();
        this.surface_actor_destroyed = false;
        try {
            this.actor.connect('destroy', () => this.surface_actor_destroyed = true);
        } catch (e) { }
        this.surface_corner_effect = this.effects_manager.new_corner_effect({
            radius: this.get_corner_radius(),
        });
        this.actor.add_effect(this.surface_corner_effect);
    }
    create_static_actor() {
        this.static_actor = new PopupBlurStaticActor(
            this.settings,
            this.effects_manager,
            this.target,
            this.root_actor,
            () => this.get_corner_radius(),
            this.blur_settings
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
        this.configure_blur_actor();
        this.attach_tint_actor();
    }
    sync_live_actor() {
        this.blur_actor = this.live_actor.actor;
        this.pipeline = this.live_actor.pipeline;
        this.configure_blur_actor();
        this.attach_tint_actor();
    }
    configure_blur_actor() {
        try {
            this.blur_actor?.set_offscreen_redirect?.(Clutter.OffscreenRedirect.ALWAYS);
        } catch (e) { }
    }
    create_tint_actor() {
        this.tint_actor_destroyed = false;
        this.tint_actor = new St.Widget({
            name: 'bms-popup-tint',
            reactive: false,
        });
        this.tint_actor.add_style_class_name('bms-popup-tint');
        this.tint_actor.hide();
        try {
            this.tint_actor.connect('destroy', () => this.tint_actor_destroyed = true);
        } catch (e) { }
        this.attach_tint_actor();
    }
    ensure_tint_actor() {
        if (!this.tint_actor || this.tint_actor_destroyed)
            this.create_tint_actor();
        else
            this.attach_tint_actor();
    }
    attach_tint_actor() {
        if (!this.tint_actor || this.tint_actor_destroyed || !this.blur_actor)
            return false;

        try {
            const parent = this.tint_actor.get_parent?.();
            if (parent !== this.blur_actor) {
                parent?.remove_child?.(this.tint_actor);
                this.blur_actor.add_child(this.tint_actor);
            }
            this.blur_actor.set_child_above_sibling?.(this.tint_actor, null);
            return true;
        } catch (e) {
            return false;
        }
    }
    set_actor_position() {
        if (this.is_owned_actor_destroyed())
            return;
        try {
            // Only re-insert if our sibling is still tracked; otherwise just
            // rely on add_child at enable-time and skip the assertion.
            let sibling = null;
            if (this.sibling && this.parent?.get_children?.()?.includes?.(this.sibling))
                sibling = this.sibling;
            if (sibling && this.is_below_sibling(sibling))
                return;
            if (sibling)
                this.parent.set_child_below_sibling(this.actor, sibling);
        } catch (e) { }
    }
    allocate_actor() {
        if (this.is_owned_actor_destroyed() || !this.actor)
            return;
        try {
            if (!this.actor.get_stage())
                return;
            const width = this.actor.width;
            const height = this.actor.height;
            const x = this.actor.x;
            const y = this.actor.y;
            // Guard against NaN — width <= 0 is false for NaN, so we must
            // explicitly check Number.isFinite to avoid passing NaN to
            // allocate(), which triggers a CRITICAL assertion and leaves
            // the actor unallocated ("needs an allocation").
            if (
                !Number.isFinite(x) || !Number.isFinite(y)
                || !Number.isFinite(width) || !Number.isFinite(height)
                || width <= 0 || height <= 0
            )
                return;
            const box = new Clutter.ActorBox({
                x1: Math.round(x),
                y1: Math.round(y),
                x2: Math.round(x + width),
                y2: Math.round(y + height),
            });
            this.actor.allocate(box);
            if (!this.static_blur && this.blur_actor && this.blur_actor !== this.actor) {
                this.blur_actor.allocate(new Clutter.ActorBox({
                    x1: 0,
                    y1: 0,
                    x2: Math.round(width),
                    y2: Math.round(height),
                }));
            }
            this.update_tint_geometry(width, height);
            this.update_surface_corner_effect();
        } catch (e) { }
    }
    update_tint_geometry(width = null, height = null) {
        this.ensure_tint_actor();
        if (!this.tint_actor || this.tint_actor_destroyed)
            return;

        try {
            width = Math.max(1, Math.ceil(width ?? this.blur_actor?.width ?? this.actor?.width ?? 1));
            height = Math.max(1, Math.ceil(height ?? this.blur_actor?.height ?? this.actor?.height ?? 1));
            this.tint_actor.set_position(0, 0);
            this.tint_actor.set_size(width, height);
            if (this.tint_actor.get_stage?.()) {
                this.tint_actor.allocate(new Clutter.ActorBox({
                    x1: 0,
                    y1: 0,
                    x2: width,
                    y2: height,
                }));
            }
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
            this.update_corner_radius_source();
            this.apply_blur_widget_corner_radius();
            this.style.update_target_style();
            if (!this.static_blur) {
                this.update_live_surface();
                return;
            }
            let transition_state = this.transitions.get_state(this.is_notification_surface());
            let geometry = this.placement.get_surface_geometry();
            const visible = this.is_visible();
            const geometry_changed = this.placement.has_surface_geometry_changed(geometry);
            if (
                !visible
                || !this.placement.has_valid_geometry(geometry)
                || (!transition_state.geometry && geometry_changed)
            )
                transition_state = this.transitions.complete_state(transition_state);
            if (!visible) {
                if (this.fade_out_during_opacity_transition(transition_state))
                    return;
                this.hide_surface();
                return;
            }
            if (this.switcher_delay.should_delay_show()) {
                this.hide_actors();
                this.switcher_delay.queue();
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
                this.queue_update({ force: true });
                return;
            }
            this.set_actor_position();
            if (!this.placement.update_surface_geometry(geometry))
                return;
            if (!this.placement.prepare_visible_geometry()) {
                this.queue_update({ force: true });
                return;
            }
            const opacity = this.update_opacity(transition_state);
            if (opacity > 0) {
                this.show_actors();
            } else {
                this.hide_actors();
            }
            this.queue_repaint(true);
            this.queue_transition_update(transition_state);
        } catch (e) {
            this.hide_surface();
        }
    }
    update_live_surface() {
        const transition_state = this.transitions.get_state(this.is_notification_surface());
        if (!this.is_visible()) {
            this.switcher_delay.reset();
            if (this.fade_out_during_opacity_transition(transition_state))
                return;
            this.hide_surface();
            return;
        }
        if (this.switcher_delay.should_delay_show()) {
            this.hide_actors();
            this.switcher_delay.queue();
            return;
        }
        this.set_actor_position();
        const geometry = this.placement.get_unclipped_monitor_surface_geometry();
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
            this.schedule_live_settle();
            return;
        }
        if (!this.placement.update_surface_geometry(geometry))
            return;
        if (!this.placement.prepare_visible_geometry()) {
            this.queue_update({ force: true });
            return;
        }
        this.show_live_surface(transition_state);
    }

    show_live_surface(transition_state) {
        const opacity = this.update_opacity(transition_state);

        if (this.placement.has_cached_geometry() || opacity > 0) {
            this.show_actors();
            this.schedule_live_settle();
        } else {
            this.hide_actors();
        }

        this.queue_repaint(true);
        this.queue_transition_update(transition_state);
    }
    hide_surface() {
        this.clear_live_settle();
        this.switcher_delay.reset();
        this.opacity = 0;
        this.update_surface_opacity(0);
        this.hide_actors(true);
        this.placement.hide();
    }
    update_opacity(transition_state = null) {
        let opacity = this.apply_transition_opacity(
            this.fade.get_opacity(transition_state?.opacity_actors),
            transition_state
        );
        opacity = Math.min(opacity, this.get_content_opacity());
        if (
            this.opacity === opacity
            && this.has_surface_opacity(opacity)
        )
            return opacity;
        this.update_surface_opacity(opacity);
        this.opacity = opacity;
        return opacity;
    }

    apply_transition_opacity(opacity, transition_state) {
        if (
            this.static_blur
            || !transition_state?.geometry
            || transition_state.opacity
            || this.opacity == null
            || this.opacity <= 0
            || !this.is_visible()
        )
            return opacity;

        return Math.max(opacity, this.opacity);
    }

    fade_out_during_opacity_transition(transition_state) {
        transition_state = this.transitions.complete_state(transition_state);
        if (!transition_state.opacity || transition_state.opacity_actors.length === 0)
            return false;

        const opacity = this.update_opacity(transition_state);
        if (opacity <= 0 || !this.placement.has_cached_geometry())
            return false;

        this.show_actors();
        this.queue_repaint(true);
        this.queue_transition_update(transition_state);
        return true;
    }
    has_surface_opacity(opacity) {
        if (this.static_blur)
            return this.static_actor.has_opacity(opacity);
        if (this.is_owned_actor_destroyed())
            return false;
        const blur_matches = this.live_actor?.has_opacity(opacity) ?? this.actor.opacity === opacity;
        const tint_matches = this.tint_actor?.opacity === opacity;
        return blur_matches && tint_matches;
    }
    update_surface_opacity(opacity) {
        if (this.static_blur) {
            this.static_actor.set_opacity(opacity);
        } else {
            this.live_actor?.set_opacity(opacity);
        }
        try { this.tint_actor && (this.tint_actor.opacity = opacity); } catch (e) { }
    }
    get_geometry_actor() { return this.target; }
    should_use_content_geometry() { return !this.uses_full_actor_geometry(); }
    should_use_margin_geometry() { return !this.uses_full_actor_geometry(); }
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

    get_content_opacity() {
        if (!this.is_notification_surface())
            return 255;

        const children = [
            ...this.get_actor_children(this.target),
            ...this.get_actor_children(this.root_actor),
        ].filter(child => child !== this.actor && child !== this.tint_actor);

        if (children.length === 0)
            return 0;

        return Math.max(...children.map(child => this.get_actor_opacity(child)));
    }

    get_actor_opacity(actor) {
        let opacity = 255;
        let current = actor;

        while (current) {
            opacity = Math.min(opacity, this.get_single_actor_opacity(current));
            if (opacity <= 0 || current === global.stage)
                break;

            try {
                current = current.get_parent?.() ?? null;
            } catch (e) {
                break;
            }
        }

        return opacity;
    }

    get_single_actor_opacity(actor) {
        try {
            if (!actor.visible || actor.mapped === false)
                return actor.get_paint_opacity?.() ?? 0;

            return Math.min(actor.opacity ?? 255, actor.get_paint_opacity?.() ?? 255);
        } catch (e) {
            return 0;
        }
    }

    get_actor_children(actor) {
        try {
            return actor?.get_children?.() ?? [];
        } catch (e) {
            return [];
        }
    }

    get_live_surface_geometry() {
        if (this.is_notification_surface())
            return this.placement.get_unclipped_monitor_surface_geometry();

        return this.placement.get_surface_geometry();
    }

    apply_blur_widget_corner_radius() {
        const radius = this.get_corner_radius();
        if (!Number.isFinite(radius) || radius <= 0) {
            try { this.tint_actor?.set_style?.(null); } catch (e) { }
            return;
        }

        try { this.tint_actor?.set_style?.(`border-radius: ${radius}px;`); } catch (e) { }
    }

    refresh_surface_effects() {
        try { this.pipeline?.apply_effect_overrides?.('corner'); } catch (e) { }

        this.update_surface_corner_effect();

        try {
            this.pipeline?.effects?.forEach(effect => {
                effect.invalidate_cache?.();

                if (effect._bms_effect_id === SURFACE_CORNER_EFFECT_ID)
                    effect.update_actor_geometry?.(this.blur_actor);
                effect.queue_repaint?.();
            });
            this.blur_actor?.queue_redraw?.();
            this.actor?.queue_redraw?.();
        } catch (e) { }
    }

    update_surface_corner_effect() {
        if (!this.surface_corner_effect)
            return;

        try {
            this.surface_corner_effect.radius = this.get_corner_radius();
            this.surface_corner_effect.update_actor_geometry?.(this.actor);
            this.surface_corner_effect.queue_repaint?.();
        } catch (e) { }
    }

    recreate_surface_corner_effect() {
        if (this.static_blur || this.is_owned_actor_destroyed() || !this.actor)
            return;

        if (this.surface_corner_effect) {
            try {
                this.effects_manager.remove(this.surface_corner_effect);
            } catch (e) { }
            this.surface_corner_effect = null;
        }

        try {
            this.surface_corner_effect = this.effects_manager.new_corner_effect({
                radius: this.get_corner_radius(),
            });
            this.actor.add_effect(this.surface_corner_effect);
            this.update_surface_corner_effect();
        } catch (e) {
            this.surface_corner_effect = null;
        }
    }

    is_surface_actor_visible() {
        try {
            return !this.is_owned_actor_destroyed() && !!this.actor?.visible;
        } catch (e) {
            return false;
        }
    }

    show_actors() {
        const was_visible = this.is_surface_actor_visible();
        this.ensure_tint_actor();
        this.update_tint_geometry();
        try {
            if (!this.is_owned_actor_destroyed()) {
                if (this.static_blur)
                    this.actor?.show?.();
                else {
                    this.actor?.show?.();
                    this.live_actor?.show();
                }
            }
        } catch (e) { }
        try {
            if (this.tint_actor && this.opacity != null)
                this.tint_actor.opacity = this.opacity;
        } catch (e) { }
        try { this.tint_actor?.show?.(); } catch (e) { }
        this.allocate_actor();
        if (!was_visible)
            this.recreate_surface_corner_effect();
        if (!this.static_blur)
            this.live_actor?.prepare_visible?.();
        this.refresh_surface_effects();
        this.update_repaint_loop();
    }
    hide_actors(clear_source = false) {
        try {
            if (!this.is_owned_actor_destroyed())
                this.actor?.hide?.();
        } catch (e) { }
        try {
            if (!this.tint_actor_destroyed)
                this.tint_actor?.hide?.();
        } catch (e) { }
        if (!this.static_blur)
            this.live_actor?.hide(clear_source);
    }

    update_repaint_loop(_effects = null) { }

    is_owned_actor_destroyed() {
        return (
            (this.static_blur && this.static_actor?.background_group_destroyed)
            || (!this.static_blur && this.surface_actor_destroyed)
        );
    }

    queue_update({ force = false } = {}) {
        if (this.destroyed || this.update_id || (!force && this.transition_update_id))
            return;
        // Flag for the before-paint sync — the BEFORE_REDRAW later runs
        // before relayout (stale allocations), so we need a second pass
        // after relayout (before paint) to use current allocations.
        this.needs_paint_sync = true;
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

    schedule_live_settle() {
        if (this.static_blur || this.settle_update_ids.size > 0)
            return;

        [50, 150, 400].forEach(delay => {
            const id = GLib.timeout_add(GLib.PRIORITY_DEFAULT_IDLE, delay, () => {
                this.settle_update_ids.delete(id);
                if (!this.destroyed && this.is_enabled()) {
                    this.live_actor?.prepare_visible?.();
                    this.queue_update({ force: true });
                }
                return GLib.SOURCE_REMOVE;
            });
            this.settle_update_ids.add(id);
        });
    }

    clear_live_settle() {
        this.settle_update_ids.forEach(id => GLib.source_remove(id));
        this.settle_update_ids.clear();
    }

    get_owned_actors() {
        return [
            this.actor,
            this.blur_actor,
            this.tint_actor,
        ].filter(Boolean);
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

    update_settings() {
        if (this.destroyed || !this.has_live_targets())
            return;

        const source_changed = this.update_corner_radius_source();
        this.apply_blur_widget_corner_radius();
        if (source_changed) return;
        this.style.update_target_style();
        this.pipeline?.update_corner_radius?.();
        this.static_actor?.update_settings();
        this.live_actor?.update_settings();
        this.refresh_surface_effects();
    }

    update_corner_radius_source() {
        if (!this.resolve_corner_radius_descriptor())
            return false;

        this.static_actor?.update_settings();
        this.live_actor?.update_settings();
        this.style.update_target_style();
        return true;
    }

    resolve_corner_radius_descriptor() {
        let corner_radius = null;
        try { corner_radius = this.get_corner_radius_descriptor?.() ?? null; } catch (e) { }
        if (!corner_radius)
            return false;

        const current = this.corner_radius;
        const changed = !current || current.key !== corner_radius.key || current.property !== corner_radius.property;
        this.corner_radius = corner_radius;
        return changed;
    }

    get_corner_radius() {
        if (this.corner_radius?.property === 'CORNER_RADIUS')
            return this.blur_settings.CORNER_RADIUS;
        return this.settings.popup[this.corner_radius?.property] ?? this.blur_settings.CORNER_RADIUS;
    }

    queue_repaint(force = false) {
        if (
            this.static_blur
            || !this.pipeline?.effects?.length
            || this.repaint_id
            || (!force && !this.should_repaint())
        )
            return;
        this.repaint_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.repaint_id = 0;
            try {
                if (force || this.should_repaint()) {
                    if (this.live_actor)
                        this.live_actor.repaint();
                    else
                        this.pipeline?.repaint_effect?.();
                }
            } catch (e) { }
            return GLib.SOURCE_REMOVE;
        });
    }

    should_repaint() { return this.is_enabled() && this.is_visible(); }
    is_visible() { return this.is_actor_visible(this.target) && this.is_actor_visible(this.root_actor); }

    has_live_targets() {
        return this.has_stage_actor(this.target) && this.has_stage_actor(this.root_actor);
    }

    is_actor_visible(actor) {
        try {
            return actor && actor.visible && actor.mapped && this.has_stage_actor(actor);
        } catch (e) {
            return false;
        }
    }

    has_stage_actor(actor) {
        try {
            return !!actor?.get_stage?.();
        } catch (e) {
            return false;
        }
    }

    update_pipeline() {
        if (this.static_blur) {
            this.static_actor.update_pipeline();
            this.sync_static_actor();
        } else {
            this.live_actor?.update_pipeline();
            this.update_repaint_loop();
        }
    }

    destroy(actor_already_destroyed = false) {
        this.destroyed = true;
        this.clear_live_settle();
        this.switcher_delay.reset();
        if (this.update_id)
            global.compositor.get_laters().remove(this.update_id);
        this.update_id = 0;
        if (this.transition_update_id)
            global.compositor.get_laters().remove(this.transition_update_id);
        this.transition_update_id = 0;
        if (this.repaint_id)
            GLib.source_remove(this.repaint_id);
        this.repaint_id = 0;
        if (this.paint_sync_id) {
            try { global.stage.disconnect(this.paint_sync_id); } catch (e) { }
            this.paint_sync_id = 0;
        }
        this.needs_paint_sync = false;
        if (!actor_already_destroyed)
            this.style.restore_target_style();
        this.fade = null;
        this.signals.disconnect_all();

        if (this.tint_actor) {
            try {
                if (!actor_already_destroyed && !this.tint_actor_destroyed)
                    this.tint_actor.destroy();
            } catch (e) { }
            this.tint_actor = null;
        }

        if (this.static_blur)
            this.destroy_static_actor(actor_already_destroyed);
        else
            this.destroy_dynamic_actor(actor_already_destroyed);
    }
    destroy_dynamic_actor(actor_already_destroyed = false) {
        const live_actor = this.live_actor;
        const actor = this.actor;
        const actor_destroyed = actor_already_destroyed || this.surface_actor_destroyed;
        if (this.surface_corner_effect) {
            try {
                this.effects_manager.remove(this.surface_corner_effect, actor_destroyed);
            } catch (e) { }
            this.surface_corner_effect = null;
        }
        this.pipeline = null;
        this.blur_actor = null;
        this.actor = null;
        this.live_actor = null;
        if (!live_actor)
            return;

        try {
            live_actor.destroy({ actor_destroyed });
        } catch (e) { }
        try {
            if (!actor_destroyed)
                actor?.destroy?.();
        } catch (e) { }
        this.surface_actor_destroyed = false;
    }

    destroy_static_actor(actor_already_destroyed = false) {
        this.static_actor?.destroy({ actor_destroyed: actor_already_destroyed });
        this.static_actor = null;
        this.actor = null;
        this.blur_actor = null;
        this.pipeline = null;
        this.surface_corner_effect = null;
        this.surface_actor_destroyed = false;
        this.placement.clear();
    }
};
