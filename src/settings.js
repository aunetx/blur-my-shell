'use strict';

const Gio = imports.gi.Gio;
const Extension = imports.misc.extensionUtils.getCurrentExtension();

const SCHEMA_PATH = 'org.gnome.shell.extensions.blur-me';

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
        this.SIGMA = {
            key: 'sigma',
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

        this.WINDOW_CLASS_OVERRIDES = {
            key: 'window-class-overrides',
            get: function () {
                try {
                    return JSON.parse(settings.get_string(this.key));
                } catch(e){
                    return {};
                }
            },
            set: function (v) {
                settings.set_string(this.key, JSON.stringify(v));
            },
            changed: function (cb) {
                return settings.connect('changed::' + this.key, cb);
            },
            disconnect: function () {
                return settings.disconnect.apply(settings, arguments);
            },
        };

        this.BRIGHTNESS = {
            key: 'brightness',
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

        this.BLUR_DASH = {
            key: 'blur-dash',
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

        this.BLUR_PANEL = {
            key: 'blur-panel',
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

        this.BLUR_OVERVIEW = {
            key: 'blur-overview',
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

        this.BLUR_LOCKSCREEN = {
            key: 'blur-lockscreen',
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

        this.BLUR_APPLICATIONS = {
          key: 'blur-applications',
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

        this.BLUR_OTHER = {
            key: 'blur-other',
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

        this.TOGGLE_APP_BLUR = {
            key: 'toggle-app-blur',
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

        this.HACKS_LEVEL = {
            key: 'hacks-level',
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

        this.DASH_OPACITY = {
            key: 'dash-opacity',
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

        this.STATIC_BLUR = {
            key: 'static-blur',
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
    }
};
