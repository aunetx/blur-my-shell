import { Pipeline } from './pipeline.js';
import { map_source_effects } from './source_effects.js';

export function create_static_background({
    effects_manager,
    pipelines_manager,
    pipeline_id,
    monitor_index,
    background_managers,
    container,
    widget_name,
    use_absolute_position = true,
}) {
    const pipeline = new Pipeline(
        effects_manager,
        pipelines_manager,
        pipeline_id,
        null,
        {
            pipeline_effects_mapper: effects => map_source_effects(effects),
        }
    );

    return pipeline.create_background_with_effects(
        monitor_index,
        background_managers,
        container,
        widget_name,
        use_absolute_position
    );
}

export function destroy_background_manager(background_manager) {
    try {
        background_manager?._bms_pipeline?.destroy();
    } catch (e) { }

    try {
        background_manager?.destroy?.();
    } catch (e) { }
}

export function destroy_background_managers(background_managers) {
    background_managers.forEach(destroy_background_manager);
    background_managers.length = 0;
}

export function update_background_managers_pipeline(background_managers, pipeline_id) {
    background_managers.forEach(background_manager =>
        background_manager?._bms_pipeline?.change_pipeline_to(pipeline_id)
    );
}

export function remove_child_by_name(parent, widget_name) {
    parent?.get_children?.().forEach(child => {
        if (child.get_name?.() === widget_name)
            parent.remove_child(child);
    });
}
