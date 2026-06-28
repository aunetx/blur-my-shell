const STYLE_TARGET_CLASSES = [
    'popup-menu-content', 'popup-menu', 'popup-sub-menu',
    'candidate-popup-content', 'candidate-popup-boxpointer',
    'datemenu-popover',
    'quick-settings', 'quick-toggle-menu',
    'notification-banner', 'notification', 'message',
    'message-view', 'message-list',
    'osd-window', 'resize-popup', 'switcher-list', 'workspace-switcher',
    'modal-dialog', 'run-dialog',
];

const TRANSPARENT_BACKGROUND_STYLE = [
    'background: transparent',
    'background-color: transparent',
    'border-color: transparent',
    'box-shadow: none',
].join('; ');

export const PopupBlurSurfaceStyle = class PopupBlurSurfaceStyle {
    constructor(surface) {
        this.surface = surface;
        this.original_styles = new Map();
        this.styled_actors = new Set();
    }

    capture_target_style() {
        this.get_style_actors().forEach(actor => this.capture_actor_style(actor));
    }

    update_target_style() {
        if (!this.surface.blur_settings.OVERRIDE_BACKGROUND) {
            this.restore_target_style();
            return;
        }

        this.get_style_actors().forEach(actor => this.update_actor_style(actor));
    }

    get_style_actors() {
        const actors = [];
        const styled = new WeakSet();
        const walked = new WeakSet();
        [this.surface.target, this.surface.root_actor].forEach(actor => {
            this.add_style_actor_and_ancestors(actors, styled, actor);
            this.add_style_descendants(actors, styled, walked, actor);
        });

        return actors
            .filter(actor => actor?.set_style);
    }

    add_style_actor_and_ancestors(actors, styled, actor) {
        for (let depth = 0; actor && depth < 12; depth++) {
            this.add_style_actor(actors, styled, actor);

            if (actor === global.stage || actor === this.surface.parent)
                return;

            try {
                actor = actor.get_parent?.();
            } catch (e) {
                return;
            }
        }
    }

    add_style_descendants(actors, styled, walked, actor, depth = 0) {
        if (!actor || walked.has(actor) || depth > 8)
            return;

        walked.add(actor);
        this.add_style_actor(actors, styled, actor);
        this.get_children(actor).forEach(child =>
            this.add_style_descendants(actors, styled, walked, child, depth + 1)
        );
    }

    add_style_actor(actors, styled, actor) {
        if (!actor || styled.has(actor))
            return;

        styled.add(actor);
        if (this.should_style_actor(actor))
            actors.push(actor);
    }

    should_style_actor(actor) {
        return (
            actor === this.surface.target
            || actor === this.surface.root_actor
            || this.has_any_style_class(actor, STYLE_TARGET_CLASSES)
        );
    }

    capture_actor_style(actor) {
        if (this.original_styles.has(actor))
            return;

        try {
            this.original_styles.set(actor, actor.get_style?.() ?? null);
        } catch (e) { }
    }

    update_actor_style(actor) {
        this.capture_actor_style(actor);
        const base_style = this.original_styles.get(actor) ?? '';
        const separator = base_style.trim() && !base_style.trim().endsWith(';') ? '; ' : '';
        const style = `${base_style}${separator}${TRANSPARENT_BACKGROUND_STYLE}; border-radius: ${this.surface.get_corner_radius()}px;`;

        try {
            if (actor.get_style?.() !== style)
                actor.set_style(style);
            this.styled_actors.add(actor);
        } catch (e) { }
    }

    restore_target_style() {
        this.styled_actors.forEach(actor => {
            try {
                actor.set_style(this.original_styles.get(actor) ?? null);
            } catch (e) { }
        });
        this.styled_actors.clear();
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

    get_children(actor) {
        try {
            return actor?.get_children?.() ?? [];
        } catch (e) {
            return [];
        }
    }
};
