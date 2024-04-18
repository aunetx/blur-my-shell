import GLib from 'gi://GLib';
const Signals = imports.signals;

/// An enum non-extensively describing the type of gsettings key.
export const Type = {
    B: 'Boolean',
    I: 'Integer',
    D: 'Double',
    S: 'String',
    C: 'Color',
    AS: 'StringArray',
    PIPELINES: 'Pipelines'
};

/// An object to get and manage the gsettings preferences.
///
/// Should be initialized with an array of keys, for example:
///
/// let settings = new Settings([
///     { type: Type.I, name: "panel-corner-radius" },
///     { type: Type.B, name: "debug" }
/// ]);
///
/// Each {type, name} object represents a gsettings key, which must be created
/// in the gschemas.xml file of the extension.
export const Settings = class Settings {
    constructor(keys, settings) {
        this.settings = settings;
        this.keys = keys;

        this.keys.forEach(bundle => {
            let component = this;
            let component_settings = settings;
            if (bundle.component !== "general") {
                let bundle_component = bundle.component.replaceAll('-', '_');
                this[bundle_component] = {
                    settings: this.settings.get_child(bundle.component)
                };
                component = this[bundle_component];
                component_settings = settings.get_child(bundle.component);
            }


            bundle.schemas.forEach(key => {
                let property_name = this.get_property_name(key.name);

                switch (key.type) {
                    case Type.B:
                        Object.defineProperty(component, property_name, {
                            get() {
                                return component_settings.get_boolean(key.name);
                            },
                            set(v) {
                                component_settings.set_boolean(key.name, v);
                            }
                        });
                        break;

                    case Type.I:
                        Object.defineProperty(component, property_name, {
                            get() {
                                return component_settings.get_int(key.name);
                            },
                            set(v) {
                                component_settings.set_int(key.name, v);
                            }
                        });
                        break;

                    case Type.D:
                        Object.defineProperty(component, property_name, {
                            get() {
                                return component_settings.get_double(key.name);
                            },
                            set(v) {
                                component_settings.set_double(key.name, v);
                            }
                        });
                        break;

                    case Type.S:
                        Object.defineProperty(component, property_name, {
                            get() {
                                return component_settings.get_string(key.name);
                            },
                            set(v) {
                                component_settings.set_string(key.name, v);
                            }
                        });
                        break;

                    case Type.C:
                        Object.defineProperty(component, property_name, {
                            // returns the array [red, blue, green, alpha] with
                            // values between 0 and 1
                            get() {
                                let val = component_settings.get_value(key.name);
                                return val.deep_unpack();
                            },
                            // takes an array [red, blue, green, alpha] with
                            // values between 0 and 1
                            set(v) {
                                let val = new GLib.Variant("(dddd)", v);
                                component_settings.set_value(key.name, val);
                            }
                        });
                        break;

                    case Type.AS:
                        Object.defineProperty(component, property_name, {
                            get() {
                                let val = component_settings.get_value(key.name);
                                return val.deep_unpack();
                            },
                            set(v) {
                                let val = new GLib.Variant("as", v);
                                component_settings.set_value(key.name, val);
                            }
                        });
                        break;

                    case Type.PIPELINES:
                        Object.defineProperty(component, property_name, {
                            get() {
                                let pips = component_settings.get_value(key.name).deep_unpack();
                                Object.keys(pips).forEach(pipeline_id => {
                                    let pipeline = pips[pipeline_id];

                                    if (!('name' in pipeline)) {
                                        this._warn('impossible to get pipelines, pipeline has not name, resetting');
                                        component[property_name + '_reset']();
                                        return component[property_name];
                                    }
                                    let name = pipeline.name.deep_unpack();
                                    if (typeof name !== 'string') {
                                        this._warn('impossible to get pipelines, pipeline name is not a string, resetting');
                                        component[property_name + '_reset']();
                                        return component[property_name];
                                    }

                                    if (!('effects' in pipeline)) {
                                        this._warn('impossible to get pipelines, pipeline has not effects, resetting');
                                        component[property_name + '_reset']();
                                        return component[property_name];
                                    }
                                    let effects = pipeline.effects.deep_unpack();
                                    if (!Array.isArray(effects)) {
                                        this._warn('impossible to get pipelines, pipeline effects is not an array, resetting');
                                        component[property_name + '_reset']();
                                        return component[property_name];
                                    }

                                    effects = effects.map(effect => effect.deep_unpack());
                                    effects.forEach(effect => {
                                        if (!('type' in effect)) {
                                            this._warn('impossible to get pipelines, effect has not type, resetting');
                                            component[property_name + '_reset']();
                                            return component[property_name];
                                        }
                                        let type = effect.type.deep_unpack();
                                        if (typeof type !== 'string') {
                                            this._warn('impossible to get pipelines, effect type is not a string, resetting');
                                            component[property_name + '_reset']();
                                            return component[property_name];
                                        }

                                        if (!('id' in effect)) {
                                            this._warn('impossible to get pipelines, effect has not id, resetting');
                                            component[property_name + '_reset']();
                                            return component[property_name];
                                        }
                                        let id = effect.id.deep_unpack();
                                        if (typeof id !== 'string') {
                                            this._warn('impossible to get pipelines, effect id is not a string, resetting');
                                            component[property_name + '_reset']();
                                            return component[property_name];
                                        }

                                        let params = {};
                                        if ('params' in effect)
                                            params = effect.params.deep_unpack();
                                        if (!(params && typeof params === 'object' && params.constructor === Object)) {
                                            this._warn('impossible to get pipelines, effect params is not an object, resetting');
                                            component[property_name + '_reset']();
                                            return component[property_name];
                                        }
                                        Object.keys(params).forEach(param_key => {
                                            params[param_key] = params[param_key].deep_unpack();
                                        });

                                        effect.type = type;
                                        effect.id = id;
                                        effect.params = params;
                                    });
                                    pipeline.name = name;
                                    pipeline.effects = effects;
                                });
                                return pips;
                            },
                            set(pips) {
                                let pipelines = {};
                                Object.keys(pips).forEach(pipeline_id => {
                                    let pipeline = pips[pipeline_id];
                                    if (!(pipeline && typeof pipeline === 'object' && pipeline.constructor === Object)) {
                                        this._warn('impossible to set pipelines, pipeline is not an object');
                                        return;
                                    }

                                    if (!('name' in pipeline)) {
                                        this._warn('impossible to set pipelines, pipeline has no name');
                                        return;
                                    }
                                    if (typeof pipeline.name !== 'string') {
                                        this._warn('impossible to set pipelines, pipeline name is not a string');
                                        return;
                                    }

                                    if (!('effects' in pipeline)) {
                                        this._warn('impossible to set pipelines, pipeline has no effect');
                                        return;
                                    }
                                    if (!Array.isArray(pipeline.effects)) {
                                        this._warn('impossible to set pipelines, effects is not an array');
                                        return;
                                    }

                                    let gvariant_effects = [];
                                    pipeline.effects.forEach(effect => {
                                        if (!(effect instanceof Object)) {
                                            this._warn('impossible to set pipelines, effect is not an object');
                                            return;
                                        }

                                        if (!('type' in effect)) {
                                            this._warn('impossible to set pipelines, effect has not type');
                                            return;
                                        }
                                        if (typeof effect.type !== 'string') {
                                            this._warn('impossible to set pipelines, effect type is not a string');
                                            return;
                                        }

                                        if (!('id' in effect)) {
                                            this._warn('impossible to set pipelines, effect has not id');
                                            return;
                                        }
                                        if (typeof effect.id !== 'string') {
                                            this._warn('impossible to set pipelines, effect id is not a string');
                                            return;
                                        }

                                        let params = {};
                                        if ('params' in effect) {
                                            params = effect.params;
                                        }
                                        let gvariant_params = {};
                                        Object.keys(params).forEach(param_key => {
                                            let param = params[param_key];
                                            if (typeof param === 'boolean')
                                                gvariant_params[param_key] = GLib.Variant.new_boolean(param);
                                            else if (typeof param === 'number') {
                                                if (Number.isInteger(param))
                                                    gvariant_params[param_key] = GLib.Variant.new_int32(param);
                                                else
                                                    gvariant_params[param_key] = GLib.Variant.new_double(param);
                                            } else if (typeof param === 'string')
                                                gvariant_params[param_key] = GLib.Variant.new_string(param);
                                            else if (Array.isArray(param) && param.length == 4)
                                                gvariant_params[param_key] = new GLib.Variant("(dddd)", param);
                                            else
                                                this._warn('impossible to set pipeline, effect parameter type is unknown');
                                        });

                                        gvariant_effects.push(
                                            new GLib.Variant("a{sv}", {
                                                type: GLib.Variant.new_string(effect.type),
                                                id: GLib.Variant.new_string(effect.id),
                                                params: new GLib.Variant("a{sv}", gvariant_params)
                                            })
                                        );
                                    });

                                    pipelines[pipeline_id] = {
                                        name: GLib.Variant.new_string(pipeline.name),
                                        effects: new GLib.Variant("av", gvariant_effects)
                                    };
                                });
                                let val = new GLib.Variant("a{sa{sv}}", pipelines);
                                component_settings.set_value(key.name, val);
                            }
                        });
                        break;
                }


                component[property_name + '_reset'] = function () {
                    return component_settings.reset(key.name);
                };

                component[property_name + '_signal_ids'] = [];
                component[property_name + '_changed'] = function (cb) {
                    component[property_name + '_signal_ids'].push(
                        component_settings.connect('changed::' + key.name, cb)
                    );
                };

                component[property_name + '_disconnect'] = function () {
                    component[property_name + '_signal_ids'].forEach(
                        id => component_settings.disconnect(id)
                    );
                    component[property_name + '_signal_ids'] = [];
                };
            });
        });
    };

    /// Reset the preferences.
    reset() {
        this.keys.forEach(bundle => {
            let component = this;
            if (bundle.component !== "general") {
                let bundle_component = bundle.component.replaceAll('-', '_');
                component = this[bundle_component];
            }

            bundle.schemas.forEach(key => {
                let property_name = this.get_property_name(key.name);
                component[property_name + '_reset']();
            });
        });

        this.emit('reset', true);
    }

    /// From the gschema name, returns the name of the associated property on
    /// the Settings object.
    get_property_name(name) {
        return name.replaceAll('-', '_').toUpperCase();
    }

    /// Remove all connections managed by the Settings object, i.e. created with
    /// `settings.PROPERTY_changed(callback)`.
    disconnect_all_settings() {
        this.keys.forEach(bundle => {
            let component = this;
            if (bundle.component !== "general") {
                let bundle_component = bundle.component.replaceAll('-', '_');
                component = this[bundle_component];
            }

            bundle.schemas.forEach(key => {
                let property_name = this.get_property_name(key.name);
                component[property_name + '_disconnect']();
            });
        });
    }

    _warn(str) {
        console.warn(`[Blur my Shell > settings]     ${str}`);
    }
};

Signals.addSignalMethods(Settings.prototype);