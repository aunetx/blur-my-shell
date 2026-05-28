import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const OSD_BACKGROUND_OVERRIDES = {
    transparent: 'background: transparent !important; border-color: transparent !important;',
    light: 'background: rgba(255, 255, 255, 0.58) !important; border-color: rgba(0, 0, 0, 0.05) !important;',
    dark: 'background: rgba(45, 45, 50, 0.22) !important; border-color: transparent !important;',
};

const OSD_BACKGROUND_NONE = '';

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
        const is_osd = this.has_style_class(this.surface.target, 'osd-window');
        const osd_background_style = is_osd ? this.get_osd_background_override() : OSD_BACKGROUND_NONE;
        const separator = base_style.trim() && !base_style.trim().endsWith(';') ? '; ' : '';
        try {
            this.surface.target.set_style(
                `${base_style}${separator}` +
                `border-radius: ${this.surface.get_corner_radius()}px; ${osd_background_style}`
            );
            this.target_style_set = true;
        } catch (e) { }
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

    get_osd_background_override() {
        if (!Main.uiGroup?.has_style_class_name)
            return OSD_BACKGROUND_NONE;

        if (Main.uiGroup.has_style_class_name('bms-popup-background-light'))
            return OSD_BACKGROUND_OVERRIDES.light;

        if (Main.uiGroup.has_style_class_name('bms-popup-background-dark'))
            return OSD_BACKGROUND_OVERRIDES.dark;

        if (Main.uiGroup.has_style_class_name('bms-popup-background-transparent'))
            return OSD_BACKGROUND_OVERRIDES.transparent;

        return OSD_BACKGROUND_NONE;
    }
};
