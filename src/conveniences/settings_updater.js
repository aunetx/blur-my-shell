import { Settings } from './settings.js';
import { KEYS, DEPRECATED_KEYS } from './keys.js';

const CURRENT_SETTINGS_VERSION = 6;

const LEGACY_DYNAMIC_COMPONENTS = [
    { name: 'panel', supports_static: true },
    { name: 'dash-to-dock', supports_static: true },
    { name: 'applications', supports_static: true },
    { name: 'window-list', supports_static: false },
    { name: 'popup', supports_static: true },
];

function write_setting(settings, setter, key, value) {
    try {
        if (settings[setter](key, value))
            return true;
    } catch (error) {
        console.warn(
            `[Blur my Shell > settings]     could not migrate ${key}: ${error.message}`
        );
        return false;
    }

    console.warn(`[Blur my Shell > settings]     could not migrate ${key}`);
    return false;
}

function remove_manual_corner_effects(pipelines) {
    let changed = false;
    Object.values(pipelines).forEach(pipeline => {
        const effects = pipeline.effects.filter(effect => effect.type !== 'corner');
        if (effects.length !== pipeline.effects.length) {
            pipeline.effects = effects;
            changed = true;
        }
    });

    return changed;
}

function remove_refraction_corner_params(pipelines) {
    let changed = false;
    Object.values(pipelines).forEach(pipeline =>
        pipeline.effects.forEach(effect => {
            if (effect.type !== 'refraction' || !('corner_radius' in (effect.params ?? {})))
                return;

            delete effect.params.corner_radius;
            changed = true;
        })
    );

    return changed;
}

function params_equal(params, expected) {
    const keys = Object.keys(params ?? {});
    const expected_keys = Object.keys(expected);
    return keys.length === expected_keys.length
        && expected_keys.every(key => Object.is(params[key], expected[key]));
}

function is_stock_default_rounded(pipeline) {
    if (pipeline?.name !== 'Default rounded' || pipeline.effects?.length !== 2)
        return false;

    const [blur, corner] = pipeline.effects;
    const stock_native_blur = blur.type === 'native_static_gaussian_blur'
        && params_equal(blur.params, { radius: 30, brightness: 0.6 });
    const stock_kawase_blur = blur.type === 'dual_kawase_blur'
        && params_equal(blur.params, { unscaled_radius: 30, brightness: 0.6 });
    const stock_blur = blur.id === 'effect_000000000001'
        && (stock_native_blur || stock_kawase_blur);
    const stock_corner = corner.type === 'corner'
        && corner.id === 'effect_000000000002'
        && params_equal(corner.params, { radius: 24 });

    return stock_blur && stock_corner;
}

function is_matching_dynamic_pipeline(pipeline, radius, brightness) {
    if (pipeline?.effects?.length !== 1)
        return false;

    const [effect] = pipeline.effects;
    return effect.type === 'dual_kawase_blur'
        && params_equal(effect.params, {
            unscaled_radius: radius,
            brightness,
        });
}

function next_migrated_pipeline_id(pipelines) {
    const base = 'pipeline_migrated_dynamic_blur';
    let index = 1;
    let id = base;
    while (Object.hasOwn(pipelines, id)) {
        index++;
        id = `${base}_${index}`;
    }
    return { id, index };
}

function migrate_dynamic_blur_pipelines(
    pipelines,
    preferences,
    deprecated_preferences,
    old_version
) {
    const assignments = [];
    let changed = false;

    LEGACY_DYNAMIC_COMPONENTS.forEach(({ name, supports_static }) => {
        const property = name.replaceAll('-', '_');
        const component = preferences[property];
        const legacy = deprecated_preferences[property];
        if (supports_static && component.STATIC_BLUR)
            return;

        const use_global = old_version < 2
            && 'CUSTOMIZE' in legacy
            && !legacy.CUSTOMIZE;
        const sigma = use_global ? deprecated_preferences.SIGMA : legacy.SIGMA;
        const brightness = use_global
            ? deprecated_preferences.BRIGHTNESS
            : legacy.BRIGHTNESS;
        const radius = Math.max(0, Math.min(200, sigma * 2));
        const clamped_brightness = Math.max(0, Math.min(1, brightness));

        let pipeline_id = Object.keys(pipelines).find(id =>
            is_matching_dynamic_pipeline(
                pipelines[id],
                radius,
                clamped_brightness
            )
        );

        if (!pipeline_id) {
            const { id, index } = next_migrated_pipeline_id(pipelines);
            pipeline_id = id;
            pipelines[pipeline_id] = {
                name: index === 1
                    ? 'Migrated dynamic blur'
                    : `Migrated dynamic blur ${index}`,
                effects: [{
                    type: 'dual_kawase_blur',
                    id: 'effect_migrated_dynamic_blur',
                    params: {
                        unscaled_radius: radius,
                        brightness: clamped_brightness,
                    },
                }],
            };
            changed = true;
        }

        assignments.push({ name, pipeline_id });
    });

    return { assignments, changed };
}

function queue_pipeline_assignment(assignments, name, component, pipeline_id) {
    const previous = assignments.get(name);
    assignments.set(name, {
        settings: component.settings,
        old_pipeline: previous?.old_pipeline ?? component.PIPELINE,
        pipeline_id,
    });
}

function queue_pipeline_references(preferences, assignments, from, to) {
    preferences.keys.forEach(bundle => {
        if (!bundle.schemas.some(key => key.name === 'pipeline'))
            return;

        const property = bundle.component.replaceAll('-', '_');
        const component = preferences[property];
        if (component.PIPELINE === from && !assignments.has(bundle.component))
            queue_pipeline_assignment(assignments, bundle.component, component, to);
    });
}

function apply_pipeline_assignments(assignments) {
    const written = [];
    for (const assignment of assignments.values()) {
        if (assignment.old_pipeline === assignment.pipeline_id)
            continue;
        if (!write_setting(
            assignment.settings,
            'set_string',
            'pipeline',
            assignment.pipeline_id
        )) {
            restore_pipeline_assignments(written);
            return false;
        }
        written.push(assignment);
    }
    return true;
}

function restore_pipeline_assignments(assignments) {
    [...assignments].reverse().forEach(assignment =>
        write_setting(
            assignment.settings,
            'set_string',
            'pipeline',
            assignment.old_pipeline
        )
    );
}

function update_native_static_radius(pipelines) {
    let changed = false;
    Object.values(pipelines).forEach(pipeline =>
        pipeline.effects.forEach(effect => {
            if (
                effect.type !== 'native_static_gaussian_blur'
                || !effect.params
                || !('radius' in effect.params)
            )
                return;

            if (!('unscaled_radius' in effect.params))
                effect.params.unscaled_radius = effect.params.radius;
            delete effect.params.radius;
            changed = true;
        })
    );

    return changed;
}

function consolidate_blur_effects(pipelines) {
    let changed = false;
    Object.values(pipelines).forEach(pipeline =>
        pipeline.effects.forEach(effect => {
            if (![
                'native_static_gaussian_blur',
                'gaussian_blur',
                'monte_carlo_blur',
            ].includes(effect.type))
                return;

            const old_type = effect.type;
            const params = effect.params ?? {};
            const radius = params.unscaled_radius
                ?? (old_type === 'monte_carlo_blur' ? (params.radius ?? 3) * 10 : params.radius)
                ?? 30;

            effect.type = 'dual_kawase_blur';
            effect.params = {
                unscaled_radius: Math.max(0, Math.min(100, radius)),
                brightness: params.brightness ?? 0.6,
            };
            changed = true;
        })
    );

    return changed;
}

export function update_from_old_settings(gsettings) {
    const preferences = new Settings(KEYS, gsettings);
    const old_version = preferences.settings.get_int('settings-version');
    if (old_version >= CURRENT_SETTINGS_VERSION)
        return;
    if (old_version < 0) {
        console.warn(
            `[Blur my Shell > settings]     settings migration skipped because version `
            + `${old_version} is invalid`
        );
        return;
    }

    const pipelines = preferences.PIPELINES;
    if (preferences.has_invalid_value('general', 'pipelines')) {
        console.warn(
            '[Blur my Shell > settings]     settings migration skipped because pipelines are invalid'
        );
        return;
    }

    const deprecated_preferences = old_version < 4
        ? new Settings(DEPRECATED_KEYS, gsettings)
        : null;
    const collapse_default_rounded = old_version < 5
        && is_stock_default_rounded(pipelines.pipeline_default_rounded);
    const pipeline_assignments = new Map();

    if (old_version < 2) {
        const writes = [
            [preferences.dash_to_dock.settings, 'set_boolean', 'blur', true],
            [preferences.dash_to_dock.settings, 'set_boolean', 'static-blur', true],
            [preferences.dash_to_dock.settings, 'set_int', 'style-dash-to-dock', 0],
        ];
        if (!deprecated_preferences.appfolder.CUSTOMIZE) {
            writes.push(
                [
                    preferences.appfolder.settings,
                    'set_int',
                    'sigma',
                    deprecated_preferences.SIGMA,
                ],
                [
                    preferences.appfolder.settings,
                    'set_double',
                    'brightness',
                    deprecated_preferences.BRIGHTNESS,
                ]
            );
        }

        if (!writes.every(write => write_setting(...write)))
            return;
    }

    let pipelines_changed = false;
    if (old_version < 3)
        pipelines_changed = update_native_static_radius(pipelines) || pipelines_changed;

    if (old_version < 4) {
        pipelines_changed = consolidate_blur_effects(pipelines) || pipelines_changed;
        const migration = migrate_dynamic_blur_pipelines(
            pipelines,
            preferences,
            deprecated_preferences,
            old_version
        );
        pipelines_changed = migration.changed || pipelines_changed;
        migration.assignments.forEach(({ name, pipeline_id }) => {
            const property = name.replaceAll('-', '_');
            queue_pipeline_assignment(
                pipeline_assignments,
                name,
                preferences[property],
                pipeline_id
            );
        });
    }

    if (old_version < 5)
        pipelines_changed = remove_manual_corner_effects(pipelines) || pipelines_changed;

    if (old_version < 6)
        pipelines_changed = remove_refraction_corner_params(pipelines) || pipelines_changed;

    if (collapse_default_rounded) {
        queue_pipeline_references(
            preferences,
            pipeline_assignments,
            'pipeline_default_rounded',
            'pipeline_default'
        );
        delete pipelines.pipeline_default_rounded;
        pipelines_changed = true;
    }

    if (!apply_pipeline_assignments(pipeline_assignments))
        return;

    if (pipelines_changed && !preferences.set_pipelines(pipelines)) {
        restore_pipeline_assignments(pipeline_assignments.values());
        return;
    }

    if (!preferences.settings.set_int('settings-version', CURRENT_SETTINGS_VERSION)) {
        console.warn('[Blur my Shell > settings]     could not update settings version');
        return;
    }

    deprecated_preferences?.reset();
}
