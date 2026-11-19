import Gio from 'gi://Gio';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

let interface_settings = null;

export function enable_system_style() {
    interface_settings = new Gio.Settings({ schema_id: 'org.gnome.desktop.interface' });
}

export function disable_system_style() {
    interface_settings = null;
}

function get_background_style() {
    const theme = St.ThemeContext.get_for_stage(global.stage).get_theme();
    const stylesheet = theme.application_stylesheet ?? theme.default_stylesheet;
    const uri = stylesheet.get_uri().toLowerCase();
    if (uri.includes('yaru'))
        return uri.includes('dark') ? 2 : 1;

    const shell_style = Main.getStyleVariant();
    if (shell_style === 'light')
        return 1;

    if (shell_style === 'dark')
        return 2;

    return interface_settings.get_string('color-scheme') === 'prefer-dark' ? 2 : 1;
}

export function is_light_style() {
    return get_background_style() !== 2;
}

export function get_pipeline_id(settings) {
    if (!settings.PIPELINE_AUTO_MODE)
        return settings.PIPELINE;

    return is_light_style() ? settings.PIPELINE_LIGHT : settings.PIPELINE_DARK;
}

export function get_component_style(style, avail_styles = 3) {
    const style_num = Array.isArray(avail_styles) ? avail_styles.length : avail_styles;

    if (style >= 0 && style < style_num)
        return style;

    return get_background_style();
}

/// Calls back when the style turns light or dark. These signals also come when nothing changes,
/// like on every lock and unlock, and restyling the components then takes up the whole transition.
export function connect_system_style_changes(connections, callback) {
    let style = get_background_style();
    const on_change = () => {
        const new_style = get_background_style();
        if (new_style === style)
            return;

        style = new_style;
        callback();
    };

    connections.connect(
        interface_settings,
        ['changed::color-scheme', 'changed::gtk-theme'],
        on_change
    );
    connections.connect(St.Settings.get(), 'notify::color-scheme', on_change);
    connections.connect(St.ThemeContext.get_for_stage(global.stage), 'changed', on_change);
    connections.connect(Main.sessionMode, 'updated', on_change);
}
