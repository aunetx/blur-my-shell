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
        return [...new Set([this.surface.target, this.surface.root_actor])]
            .filter(actor => actor?.set_style);
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

        try {
            actor.set_style(`${base_style}${separator}border-radius: ${this.surface.get_corner_radius()}px;`);
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
};
