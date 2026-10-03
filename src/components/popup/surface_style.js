import { getRoundedCorners } from '../../render/corner_policy.js';
import { has_style_class } from './actors.js';

const LIQUID_GLASS_STYLE_CLASS = 'bms-popup-liquid-glass';

export const PopupBlurSurfaceStyle = class PopupBlurSurfaceStyle {
    constructor(surface) {
        this.surface = surface;
        this.original_target_style = null;
        this.target_style_set = false;
        this.liquid_glass = false;
    }

    capture_target_style() {
        this.original_target_style = this.surface.target.get_style();
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

        const base_style = this.original_target_style ?? '';
        const separator = base_style.trim() && !base_style.trim().endsWith(';') ? '; ' : '';
        const corners = getRoundedCorners(settings.popup.ROUNDED_CORNERS);
        const radius = this.surface.get_corner_radius();
        const top = corners.corners_top ? radius : 0;
        const bottom = corners.corners_bottom ? radius : 0;

        target.set_style(
            `${base_style}${separator}border-radius: ${top}px ${top}px ${bottom}px ${bottom}px;`
        );
        this.target_style_set = true;
    }

    restore_target_style() {
        this.set_liquid_glass(false);

        if (!this.target_style_set)
            return;

        this.surface.target.set_style(this.original_target_style);
        this.target_style_set = false;
    }

    forget_target_style() {
        this.liquid_glass = false;
        this.target_style_set = false;
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
