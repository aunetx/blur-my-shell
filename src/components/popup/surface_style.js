const LIQUID_GLASS_STYLE_CLASS = 'bms-popup-liquid-glass';

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
        this.update_liquid_glass_style();

        if (
            !this.surface.target.set_style
            || !this.surface.settings.popup.OVERRIDE_BACKGROUND
        ) {
            this.restore_target_style();
            return;
        }

        if (
            this.has_style_class(this.surface.target, 'bms-keyboard-surface')
        )
            return;

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
        this.remove_liquid_glass_style();

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

    update_liquid_glass_style() {
        const enabled = this.surface.settings.popup.OVERRIDE_BACKGROUND
            && (this.surface.pipeline?.effects ?? []).some(effect =>
                effect._bms_effect_type === 'refraction'
                && effect._bms_pixelize_role !== 'refraction-blur'
            );

        try {
            if (enabled)
                this.surface.target.add_style_class_name(LIQUID_GLASS_STYLE_CLASS);
            else
                this.remove_liquid_glass_style();
        } catch (e) { }
    }

    remove_liquid_glass_style() {
        try {
            this.surface.target.remove_style_class_name(LIQUID_GLASS_STYLE_CLASS);
        } catch (e) { }
    }
};
