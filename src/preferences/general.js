'use strict';

const { Adw, GLib, GObject } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);


var General = GObject.registerClass({
    GTypeName: 'General',
    // TODO use gresources to load ui files
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'general.ui'])}`,
    InternalChildren: [
        'sigma',
        'brightness',
        'debug',
        'sigma_adjustment',
        'brightness_adjustment',
    ],
}, class General extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);
    }
});