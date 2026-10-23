import Gio from 'gi://Gio';


/// Rows keep their sensitivity bound to the switches they depend on in the templates, instead of the
/// key writability that Gio would otherwise sync onto them.
export function bind_settings(component_preferences, bindings) {
    for (const [key, widget, property] of bindings) {
        component_preferences.settings.bind(
            key, widget, property,
            Gio.SettingsBindFlags.DEFAULT | Gio.SettingsBindFlags.NO_SENSITIVITY
        );
    }
}
