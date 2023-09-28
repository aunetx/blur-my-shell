import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';

import { CustomizeRow } from './customize_row.js';


export const General = GObject.registerClass({
    GTypeName: 'General',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/general.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'sigma',
        'brightness',
        'color',
        'color_row',
        'noise_amount',
        'noise_amount_row',
        'noise_lightness',
        'noise_lightness_row',
        'color_and_noise',
        'hack_level',
        'debug',
        'reset'
    ],
}, class General extends Adw.PreferencesPage {
    constructor(preferences) {
        super({});

        this.preferences = preferences;

        CustomizeRow.prototype.connect_to.call(this, preferences, preferences);

        this.preferences.settings.bind(
            'color-and-noise', this._color_and_noise, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.settings.bind(
            'hacks-level', this._hack_level, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.settings.bind(
            'debug', this._debug, 'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._reset.connect('clicked', _ => this.preferences.reset());
    }
});