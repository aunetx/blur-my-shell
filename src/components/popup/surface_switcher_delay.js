import GLib from 'gi://GLib';

const SWITCHER_STYLE_CLASSES = ['switcher-list', 'workspace-switcher'];
const SWITCHER_SHOW_DELAY_MS = 150;

export const PopupBlurSurfaceSwitcherDelay = class PopupBlurSurfaceSwitcherDelay {
    constructor(surface) {
        this.surface = surface;
        this.delayed_show_id = 0;
        this.show_after_us = 0;
    }

    should_delay_show() {
        if (!this.is_switcher_surface())
            return false;

        if (this.has_switcher_visible_content()) {
            this.show_after_us = 0;
            this.clear();
            return false;
        }

        this.ensure();
        return true;
    }

    ensure() {
        if (!this.show_after_us)
            this.show_after_us = GLib.get_monotonic_time() + SWITCHER_SHOW_DELAY_MS * 1000;
    }

    queue() {
        if (this.delayed_show_id)
            return;

        const now_us = GLib.get_monotonic_time();
        const delay_us = this.show_after_us > now_us
            ? this.show_after_us - now_us
            : 16 * 1000;
        const delay_ms = Math.max(16, Math.ceil(delay_us / 1000));

        this.delayed_show_id = GLib.timeout_add(GLib.PRIORITY_DEFAULT_IDLE, delay_ms, () => {
            this.delayed_show_id = 0;
            if (!this.surface.destroyed && this.surface.is_enabled())
                this.surface.queue_update({ force: true });
            return GLib.SOURCE_REMOVE;
        });
    }

    clear() {
        if (!this.delayed_show_id)
            return;

        GLib.source_remove(this.delayed_show_id);
        this.delayed_show_id = 0;
    }

    reset() {
        this.clear();
        this.show_after_us = 0;
    }

    is_switcher_surface() {
        return (
            this.surface.style.has_any_style_class(this.surface.target, SWITCHER_STYLE_CLASSES)
            || this.surface.style.has_any_style_class(this.surface.root_actor, SWITCHER_STYLE_CLASSES)
            || this.surface.style.has_style_class(this.surface.target, 'switcher-popup')
            || this.surface.style.has_style_class(this.surface.root_actor, 'switcher-popup')
            || this.is_switcher_actor(this.surface.target)
            || this.is_switcher_actor(this.surface.root_actor)
        );
    }

    is_switcher_actor(actor) {
        try {
            return /Switcher/.test(actor?.constructor?.name ?? '');
        } catch (e) {
            return false;
        }
    }

    has_switcher_visible_content() {
        return (
            this.has_visible_content(this.surface.target)
            || (
                this.surface.root_actor !== this.surface.target
                && this.has_visible_content(this.surface.root_actor)
            )
        );
    }

    has_visible_content(actor, seen = new WeakSet(), depth = 0) {
        if (!actor || seen.has(actor) || this.is_owned_content_actor(actor))
            return false;

        seen.add(actor);
        if (!this.is_actor_content_visible(actor))
            return false;

        if (depth > 0 && this.has_actor_size(actor))
            return true;

        return this.surface.get_actor_children(actor)
            .some(child => this.has_visible_content(child, seen, depth + 1));
    }

    is_owned_content_actor(actor) {
        return (
            actor === this.surface.actor
            || actor === this.surface.blur_actor
            || actor === this.surface.tint_actor
            || actor?._bms_is_blur_actor
            || this.surface.style.has_style_class(actor, 'bms-popup-blurred-widget')
            || this.surface.style.has_style_class(actor, 'bms-popup-tint')
        );
    }

    is_actor_content_visible(actor) {
        try {
            return (
                actor.visible
                && actor.mapped !== false
                && this.surface.has_stage_actor(actor)
                && this.surface.get_actor_opacity(actor) > 0
            );
        } catch (e) {
            return false;
        }
    }

    has_actor_size(actor) {
        try {
            if ((actor.width ?? 0) > 0 && (actor.height ?? 0) > 0)
                return true;

            const [width, height] = actor.get_transformed_size?.() ?? [0, 0];
            return width > 0 && height > 0;
        } catch (e) {
            return false;
        }
    }
};
