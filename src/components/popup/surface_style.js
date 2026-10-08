import { getRoundedCorners } from '../../render/corner_policy.js';
import { has_style_class } from './actors.js';

const LIQUID_GLASS_STYLE_CLASS = 'bms-popup-liquid-glass';

export const PopupBlurSurfaceStyle = class PopupBlurSurfaceStyle {
    constructor(surface) {
        this.surface = surface;
        this.radius_style = null;
        this.style_before_radius = null;
        this.style_with_radius = null;
        this.liquid_glass = false;
    }

    update_target_style() {
        const { target, settings } = this.surface;
        this.update_liquid_glass_style();

        if (!settings.popup.OVERRIDE_BACKGROUND) {
            this.restore_target_style();
            return;
        }

        if (has_style_class(target, 'bms-keyboard-surface'))
            return;

        const base_style = this.get_style_without_radius() ?? '';
        const separator = base_style.trim() && !base_style.trim().endsWith(';') ? '; ' : '';
        const corners = getRoundedCorners(settings.popup.ROUNDED_CORNERS);
        const radius = this.surface.get_corner_radius();
        const top = corners.corners_top ? radius : 0;
        const bottom = corners.corners_bottom ? radius : 0;

        this.style_before_radius = this.get_style_without_radius();
        this.radius_style = `${separator}border-radius: ${top}px ${top}px ${bottom}px ${bottom}px;`;
        this.style_with_radius = `${base_style}${this.radius_style}`;
        target.set_style(this.style_with_radius);
    }

    restore_target_style() {
        this.set_liquid_glass(false);

        if (!this.radius_style)
            return;

        this.surface.target.set_style(this.get_style_without_radius());
        this.forget_radius_style();
    }

    forget_target_style() {
        this.liquid_glass = false;
        this.forget_radius_style();
    }

    get_style_without_radius() {
        const style = this.surface.target.get_style();
        if (!this.radius_style || style === null)
            return style;
        if (style === this.style_with_radius)
            return this.style_before_radius;

        const index = style.lastIndexOf(this.radius_style);
        return index < 0 ? style
            : style.slice(0, index) + style.slice(index + this.radius_style.length);
    }

    forget_radius_style() {
        this.radius_style = null;
        this.style_before_radius = null;
        this.style_with_radius = null;
    }

    update_liquid_glass_style() {
        this.set_liquid_glass(
            this.surface.settings.popup.OVERRIDE_BACKGROUND
            && this.surface.pipeline.effects.some(effect =>
                effect._bms_effect_type === 'refraction'
                && effect._bms_pixelize_role !== 'refraction-blur'
            )
        );
    }

    set_liquid_glass(enabled) {
        if (this.liquid_glass === enabled)
            return;

        this.liquid_glass = enabled;
        if (enabled)
            this.surface.target.add_style_class_name(LIQUID_GLASS_STYLE_CLASS);
        else
            this.surface.target.remove_style_class_name(LIQUID_GLASS_STYLE_CLASS);
    }
};
