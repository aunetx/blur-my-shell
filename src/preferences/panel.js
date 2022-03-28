'use strict';

const { Adw, GLib, GObject } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);


var Panel = GObject.registerClass({
    GTypeName: 'Panel',
    // TODO use gresources to load ui files
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'panel.ui'])}`,
    InternalChildren: [
        'blur',
        'sigma',
        'brightness',
        'static_blur',
        'sigma_adjustment',
        'brightness_adjustment',
    ],
}, class Panel extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);
    }
});