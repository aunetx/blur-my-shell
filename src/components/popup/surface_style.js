import { is_copyous_surface } from './copyous_style.js';

export const PopupBlurSurfaceStyle = class PopupBlurSurfaceStyle {
    constructor(surface) {
        this.surface = surface;
        this.original_target_style = null;
        this.target_style_set = false;
        this.applied_target_style = null;
    }

    capture_target_style() {
        try {
            this.original_target_style = this.surface.target.get_style?.() ?? null;
        } catch (e) {
            this.original_target_style = null;
        }
    }

    update_target_style() {
        if (this.surface.destroyed)
            return;

        // Copyous updates its inline margins when its layout settings change.
        // Keep those updates when applying or removing our corner radius.
        const current_style = this.surface.target.get_style?.() ?? null;
        if (current_style !== this.applied_target_style) {
            this.original_target_style = current_style;
            this.target_style_set = false;
        }

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
            let style = `${base_style}${separator}border-radius: ${this.surface.get_corner_radius()}px;`;
            if (this.surface.settings.popup.BLUR_COPYOUS && is_copyous_surface(this.surface.target)) {
                // Copyous loads its own stylesheet, which can take precedence
                // over our imported popup CSS. Override its opaque background
                // inline, and restore it together with the corner radius.
                const backgrounds = ['transparent', 'rgba(255, 255, 255, 0.58)', 'rgba(45, 45, 50, 0.22)'];
                const background = backgrounds[this.surface.get_background_style()];
                style += `background-color: ${background};`;
            }
            if (current_style === style)
                return;
            this.applied_target_style = style;
            this.target_style_set = true;
            this.surface.target.set_style(style);
        } catch (e) {
            return;
        }
    }

    restore_target_style() {
        if (!this.target_style_set || !this.surface.target.set_style)
            return;

        try {
            const current_style = this.surface.target.get_style?.() ?? null;
            this.target_style_set = false;
            if (current_style === this.applied_target_style)
                this.surface.target.set_style(this.original_target_style);
            this.applied_target_style = null;
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
