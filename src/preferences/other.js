'use strict';

import * as Adw from 'gi://Adw';
import * as GLib from 'gi://GLib';
import * as GObject from 'gi://GObject';
import * as Gio from 'gi://Gio';

import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';


export var Other = GObject.registerClass({
    GTypeName: 'Other',
    Template: `file://${GLib.build_filenamev([ExtensionPreferences.path, 'ui', 'other.ui'])}`,
    InternalChildren: [
        'lockscreen_blur',
        'lockscreen_customize',

        'screenshot_blur',
        'screenshot_customize',

        'window_list_blur',
        'window_list_customize',
    ],
}, class Overview extends Adw.PreferencesPage {
    constructor(preferences) {
        super({});

        this.preferences = preferences;

        this.preferences.lockscreen.settings.bind(
            'blur', this._lockscreen_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._lockscreen_customize.connect_to(this.preferences.lockscreen);

        this.preferences.screenshot.settings.bind(
            'blur', this._screenshot_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._screenshot_customize.connect_to(this.preferences.screenshot);

        this.preferences.window_list.settings.bind(
            'blur', this._window_list_blur, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._window_list_customize.connect_to(
            this.preferences.window_list, false
        );
    }
});