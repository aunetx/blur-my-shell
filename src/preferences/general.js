'use strict';

import * as Adw from 'gi://Adw';
import * as GLib from 'gi://GLib';
import * as GObject from 'gi://GObject';
import * as Gio from 'gi://Gio';

import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { CustomizeRow } from './preferences/customize_row.js';


export var General = GObject.registerClass({
    GTypeName: 'General',
    Template: `file://${GLib.build_filenamev([ExtensionPreferences.path, 'ui', 'general.ui'])}`,
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

        CustomizeRow.prototype.connect_to.call(this, this.preferences);

        this.preferences.settings.bind(
            'color-and-noise', this._color_and_noise, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.settings.bind(
            'hacks-level', this._hack_level, 'selected',
            Gio.SettingsBindFlags.DEFAULT
        );
        this.preferences.settings.bind(
            'debug', this._debug, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._reset.connect('clicked', _ => this.preferences.reset());
    }
});