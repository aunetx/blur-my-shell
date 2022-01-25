'use strict';

const Gio = imports.gi.Gio;
const Extension = imports.misc.extensionUtils.getCurrentExtension();

const SCHEMA_PATH = 'org.gnome.shell.extensions.blur-my-shell';

const Type = {
    B: 'Boolean',
    I: 'Integer',
    D: 'Double'
};

// Each key name can only be made of lowercase characters and "-"
const Keys = [
    { type: Type.I, name: "sigma" },
    { type: Type.D, name: "brightness" },
    { type: Type.I, name: "hacks-level" },

    { type: Type.B, name: "overview-blur" },
    { type: Type.B, name: "overview-general-values" },
    { type: Type.I, name: "overview-sigma" },
    { type: Type.D, name: "overview-brightness" },

    { type: Type.B, name: "appfolder-blur" },
    { type: Type.B, name: "appfolder-general-values" },
    { type: Type.I, name: "appfolder-sigma" },
    { type: Type.D, name: "appfolder-brightness" },
    { type: Type.D, name: "appfolder-icon-opacity" },
    { type: Type.D, name: "appfolder-dialog-opacity" },

    { type: Type.B, name: "panel-blur" },
    { type: Type.B, name: "panel-general-values" },
    { type: Type.I, name: "panel-sigma" },
    { type: Type.D, name: "panel-brightness" },
    { type: Type.B, name: "panel-static-blur" },

    { type: Type.B, name: "dash-blur" },
    { type: Type.B, name: "dash-to-dock-general-values" },
    { type: Type.I, name: "dash-to-dock-sigma" },
    { type: Type.D, name: "dash-to-dock-brightness" },
    { type: Type.B, name: "dash-to-dock-static-blur" },
    { type: Type.D, name: "dash-opacity" },

    { type: Type.B, name: "applications-blur" },
    { type: Type.B, name: "applications-general-values" },
    { type: Type.I, name: "applications-sigma" },
    { type: Type.D, name: "applications-brightness" },

    { type: Type.B, name: "lockscreen-blur" },
    { type: Type.B, name: "lockscreen-general-values" },
    { type: Type.I, name: "lockscreen-sigma" },
    { type: Type.D, name: "lockscreen-brightness" },

    { type: Type.B, name: "window-list-blur" },
    { type: Type.B, name: "window-list-general-values" },
    { type: Type.I, name: "window-list-sigma" },
    { type: Type.D, name: "window-list-brightness" },

    { type: Type.B, name: "hidetopbar-blur" },

    { type: Type.B, name: "debug" },
]

function get_local_gsettings(schema_path) {
    const GioSSS = Gio.SettingsSchemaSource;
    let schemaDir = Extension.dir.get_child('schemas');
    let schemaSource = GioSSS.get_default();

    if (schemaDir.query_exists(null)) {
        schemaSource = GioSSS.new_from_directory(
            schemaDir.get_path(),
            schemaSource,
            false);
    }

    let schemaObj = schemaSource.lookup(schema_path, true);
    if (!schemaObj) {
        throw new Error(
            `Schema ${schema_path} could not be found for extension ${Extension.metadata.uuid}`
        );
    }
    return new Gio.Settings({
        settings_schema: schemaObj
    });
};

var Prefs = class Prefs {
    constructor() {
        var settings = this.settings = get_local_gsettings(SCHEMA_PATH);

        Keys.forEach(key => {
            let property_name = key.name;
            let accessible_name = property_name.replaceAll('-', '_').toUpperCase();

            switch (key.type) {
                case Type.B:
                    this[accessible_name] = {
                        key: property_name,
                        get: function () {
                            return settings.get_boolean(this.key);
                        },
                        set: function (v) {
                            settings.set_boolean(this.key, v);
                        },
                        changed: function (cb) {
                            return settings.connect('changed::' + this.key, cb);
                        },
                        disconnect: function () {
                            return settings.disconnect.apply(settings, arguments);
                        }
                    };
                    break;

                case Type.I:
                    this[accessible_name] = {
                        key: property_name,
                        get: function () {
                            return settings.get_int(this.key);
                        },
                        set: function (v) {
                            settings.set_int(this.key, v);
                        },
                        changed: function (cb) {
                            return settings.connect('changed::' + this.key, cb);
                        },
                        disconnect: function () {
                            return settings.disconnect.apply(settings, arguments);
                        },
                    };
                    break;

                case Type.D:
                    this[accessible_name] = {
                        key: property_name,
                        get: function () {
                            return settings.get_double(this.key);
                        },
                        set: function (v) {
                            settings.set_double(this.key, v);
                        },
                        changed: function (cb) {
                            return settings.connect('changed::' + this.key, cb);
                        },
                        disconnect: function () {
                            return settings.disconnect.apply(settings, arguments);
                        },
                    };
                    break;
            }
        })
    }

    _disconnect_all_settings() {
        Keys.forEach(key => {
            let accessible_name = key.name.replaceAll('-', '_').toUpperCase();
            this[accessible_name].disconnect();
        })
    }
};