import St from 'gi://St';

import { get_component_style, is_light_style } from '../../conveniences/style.js';
import { POPUP_BACKGROUND_STYLES } from './targets.js';

const UNBLURRED_STYLE_CLASS = 'bms-popup-unblurred';
const LIGHT_STYLE = 1;

/// The background styles only apply inside `Main.uiGroup`, so a copy of the actor outside of it
/// shows what the shell theme gives it.
function get_theme_background(actor) {
    const style_class = actor.get_style_class_name().split(/\s+/)
        .filter(name => !name.startsWith('bms-'))
        .join(' ');
    const copy = new St.Widget({ style_class, visible: false });
    global.stage.add_child(copy);
    const { red, green, blue, alpha } = copy.get_theme_node().get_background_color();
    copy.destroy();
    return alpha > 0 ? `rgba(${red}, ${green}, ${blue}, ${alpha / 255})` : null;
}

/// Popups of a kind that isn't blurred. The background styles need a blur behind them to be
/// readable, so these get the background of the shell theme, or else the solid one of the
/// stylesheet when the text of the selected style wouldn't suit the theme's.
export class PopupUnblurredSurfaces {
    constructor(settings) {
        this.settings = settings;
        this.original_styles = new Map();
    }

    add(actor) {
        if (this.original_styles.has(actor))
            return;

        this.original_styles.set(actor, actor.get_style());
        actor.add_style_class_name(UNBLURRED_STYLE_CLASS);
        this.update_actor(actor);
    }

    update() {
        this.original_styles.forEach((_, actor) => this.update_actor(actor));
    }

    update_actor(actor) {
        const original_style = this.original_styles.get(actor);
        const background = this.suits_theme_background() ? get_theme_background(actor) : null;
        actor.set_style(background
            ? [original_style, `background: ${background} !important;`].filter(Boolean).join('; ')
            : original_style);
    }

    suits_theme_background() {
        const { OVERRIDE_BACKGROUND, PRESERVE_SHELL_THEME, STYLE_POPUP } = this.settings.popup;
        if (!OVERRIDE_BACKGROUND)
            return false;

        const style = get_component_style(STYLE_POPUP, POPUP_BACKGROUND_STYLES);
        return PRESERVE_SHELL_THEME || (style === LIGHT_STYLE) === is_light_style();
    }

    /// A destroyed actor can't be restored, so it is only forgotten.
    forget(actor) {
        return this.original_styles.delete(actor);
    }

    remove(actor) {
        const original_style = this.original_styles.get(actor);
        if (!this.forget(actor))
            return;

        actor.remove_style_class_name(UNBLURRED_STYLE_CLASS);
        actor.set_style(original_style);
    }

    clear() {
        [...this.original_styles.keys()].forEach(actor => this.remove(actor));
    }
}
