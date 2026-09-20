import Gio from 'gi://Gio';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const interface_settings = new Gio.Settings({ schema_id: 'org.gnome.desktop.interface' });

export function get_background_style() {
    const theme = St.ThemeContext.get_for_stage(global.stage).get_theme?.();
    let uri = theme?.default_stylesheet?.get_uri?.();
    if (theme?.application_stylesheet)
        uri = theme?.application_stylesheet?.get_uri?.();
    const lower_uri = typeof uri === 'string' ? uri.toLowerCase() : '';
    if (lower_uri.includes('yaru'))
        return lower_uri.includes('dark') ? 2 : 1;

    const shell_style = Main.getStyleVariant?.();
    if (shell_style === 'light')
        return 1;

    if (shell_style === 'dark')
        return 2;

    return interface_settings.get_string('color-scheme') === 'prefer-dark' ? 2 : 1;
}

export function get_component_style(style, avail_styles = 3) {
    const style_num = Array.isArray(avail_styles) ? avail_styles.length : avail_styles;

    if (style >= 0 && style < style_num)
        return style;

    return get_background_style();
}

export function connect_system_style_changes(connections, callback) {
    connections.connect(
        interface_settings,
        ['changed::color-scheme', 'changed::gtk-theme'],
        callback
    );

    const st_settings = St.Settings.get();
    if (st_settings) {
        connections.connect(st_settings, 'notify::color-scheme', callback);
    }

    const theme_context = St.ThemeContext.get_for_stage(global.stage);
    if (theme_context)
        connections.connect(theme_context, 'changed', callback);

    if (Main.sessionMode)
        connections.connect(Main.sessionMode, 'updated', callback);
}