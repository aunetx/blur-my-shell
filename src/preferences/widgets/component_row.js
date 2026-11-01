import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';


export const ComponentRow = GObject.registerClass({
    GTypeName: 'ComponentRow',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/widgets/component-row.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'icon',
        'blur'
    ],
    Properties: {
        'icon': GObject.ParamSpec.string(
            'icon', null, null,
            GObject.ParamFlags.READWRITE,
            null
        ),
    },
}, class ComponentRow extends Adw.ActionRow {
    get icon() {
        return this._icon.icon_name;
    }

    set icon(icon_name) {
        this._icon.icon_name = icon_name;
    }

    initialize(component_preferences, open_page) {
        component_preferences.settings.bind(
            'blur', this._blur, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.connect('activated', open_page);
    }
});
