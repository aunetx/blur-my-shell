export const PopupBlurSurfaceStyle = class PopupBlurSurfaceStyle {
    constructor(surface) {
        this.surface = surface;
        this.original_target_style = null;
        this.target_style_set = false;
    }

    capture_target_style() {
        try {
            this.original_target_style = this.surface.target.get_style?.() ?? null;
        } catch (e) {
            this.original_target_style = null;
        }
    }

    update_target_style() {
        if (
            !this.surface.target.set_style
            || !this.surface.settings.popup.OVERRIDE_BACKGROUND
        ) {
            this.restore_target_style();
            return;
        }

        const base_style = this.original_target_style ?? '';
        const separator = base_style.trim() && !base_style.trim().endsWith(';') ? '; ' : '';

        try {
            this.surface.target.set_style(
                `${base_style}${separator}border-radius: ${this.surface.get_corner_radius()}px;`
            );
            this.target_style_set = true;
        } catch (e) {
            return;
        }
    }

    restore_target_style() {
        if (!this.target_style_set || !this.surface.target.set_style)
            return;

        try {
            this.surface.target.set_style(this.original_target_style);
            this.target_style_set = false;
        } catch (e) { }
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
