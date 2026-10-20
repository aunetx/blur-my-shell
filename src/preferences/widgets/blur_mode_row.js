import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const BlurModeRow = GObject.registerClass({
    GTypeName: 'BlurModeRow',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/widgets/blur-mode-row.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'mode_static',
        'mode_dynamic'
    ],
}, class BlurModeRow extends Adw.ActionRow {
    initialize(component_preferences) {
        this._mode_static.bind_property(
            'active', this._mode_dynamic, 'active',
            GObject.BindingFlags.SYNC_CREATE
            | GObject.BindingFlags.BIDIRECTIONAL
            | GObject.BindingFlags.INVERT_BOOLEAN
        );
        component_preferences.settings.bind(
            'static-blur', this._mode_static, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
    }
});
