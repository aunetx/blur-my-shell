import GLib from 'gi://GLib';

import { Type } from './settings.js';
import { unpack_pipelines } from './pipeline_settings.js';
import { CURRENT_SETTINGS_VERSION, update_from_old_settings } from './settings_updater.js';

const VERSION_GROUP = 'general';
const VERSION_KEY = 'settings-version';

function component_settings(preferences, component) {
    return component === 'general'
        ? preferences.settings
        : preferences[component.replaceAll('-', '_')].settings;
}

/// Returns the preferences as text, with a group for each component and the value of each key in
/// the GVariant text format.
export function export_settings(preferences) {
    const file = new GLib.KeyFile();
    file.set_integer(VERSION_GROUP, VERSION_KEY, CURRENT_SETTINGS_VERSION);

    preferences.keys.forEach(({ component, schemas }) => {
        const settings = component_settings(preferences, component);
        schemas.forEach(({ name }) =>
            file.set_value(component, name, settings.get_value(name).print(true))
        );
    });

    return file.to_data()[0];
}

function read_value(file, settings, component, { type, name }) {
    const schema_key = settings.settings_schema.get_key(name);
    const value = GLib.Variant.parse(
        schema_key.get_value_type(), file.get_value(component, name), null, null
    );
    if (!schema_key.range_check(value))
        throw new Error(`${component}/${name} is out of range`);
    if (type === Type.PIPELINES)
        unpack_pipelines(value);

    return { settings, name, value };
}

/// Reads and validates exported preferences, without changing anything, and throws if they can't
/// be imported. Keys missing from them, added since they were exported, are left out.
export function read_settings(preferences, bytes) {
    const file = new GLib.KeyFile();
    file.load_from_bytes(new GLib.Bytes(bytes), GLib.KeyFileFlags.NONE);

    const version = file.get_integer(VERSION_GROUP, VERSION_KEY);
    if (version > CURRENT_SETTINGS_VERSION)
        throw new Error(`settings version ${version} is newer than this extension`);

    const values = preferences.keys
        .filter(({ component }) => file.has_group(component))
        .flatMap(({ component, schemas }) => {
            const settings = component_settings(preferences, component);
            const [names] = file.get_keys(component);
            return schemas
                .filter(({ name }) => names.includes(name))
                .map(key => read_value(file, settings, component, key));
        });

    return { version, values };
}

/// Replaces all the preferences with values from `read_settings`, then brings them up to date.
export function apply_settings(preferences, { version, values }) {
    preferences.reset();
    values.forEach(({ settings, name, value }) => settings.set_value(name, value));
    preferences.settings.set_int(VERSION_KEY, version);
    update_from_old_settings(preferences.settings);
    preferences.emit('reset', true);
}
