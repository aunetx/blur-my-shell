'use strict';

const Gio = imports.gi.Gio;

const ExtensionUtils = imports.misc.extensionUtils;

/// An enum non-extensively describing the type of a gsettings key.
var Type = {
    B: 'Boolean',
    I: 'Integer',
    D: 'Double',
    S: 'String'
};

/// An object to get and manage the gsettings preferences.
///
/// Should be initialized with an array of keys, for example:
///
/// let prefs = new Prefs([
///     { type: Type.I, name: "panel-corner-radius" },
///     { type: Type.B, name: "debug" }
/// ]);
///
/// Each {type, name} object represents a gsettings key, which must be created
/// in the gschemas.xml file of the extension.
var Prefs = class Prefs {
    constructor(keys) {
        let settings = this.settings = ExtensionUtils.getSettings();
        this.keys = keys;

        this.keys.forEach(key => {
            let property_name = this.get_property_name(key.name);

            switch (key.type) {
                case Type.B:
                    this[property_name] = {
                        key: key.name,
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
                            return settings.disconnect.apply(
                                settings, arguments
                            );
                        }
                    };
                    break;

                case Type.I:
                    this[property_name] = {
                        key: key.name,
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
                            return settings.disconnect.apply(
                                settings, arguments
                            );
                        },
                    };
                    break;

                case Type.D:
                    this[property_name] = {
                        key: key.name,
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
                            return settings.disconnect.apply(
                                settings, arguments
                            );
                        },
                    };
                    break;

                case Type.S:
                    this[property_name] = {
                        key: key.name,
                        get: function () {
                            return settings.get_string(this.key);
                        },
                        set: function (v) {
                            settings.set_string(this.key, v);
                        },
                        changed: function (cb) {
                            return settings.connect('changed::' + this.key, cb);
                        },
                        disconnect: function () {
                            return settings.disconnect.apply(
                                settings, arguments
                            );
                        },
                    };
                    break;
            }
        });
    }

    /// From the gschema name, returns the name of the associated property on
    /// the Prefs object.
    get_property_name(name) {
        return name.replaceAll('-', '_').toUpperCase();
    }

    /// From the gschema name, returns the associated property on the Prefs
    /// object.
    get_property(name) {
        return this[this.get_property_name(name)];
    }

    /// Remove all connections managed by the Prefs object, i.e. created with
    /// `prefs.PROPERTY.changed(callback)`.
    disconnect_all_settings() {
        this.keys.forEach(key => {
            this.get_property(key.name).disconnect();
        });
    }
};