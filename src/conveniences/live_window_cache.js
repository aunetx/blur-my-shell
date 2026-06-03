let cached_actors = null;

function compute_stacked_window_actors() {
    const actors = global.window_group?.get_children?.() ?? [];
    const actor_by_window = new Map();

    actors.forEach(actor => {
        const meta_window = actor.get_meta_window?.();
        if (meta_window)
            actor_by_window.set(meta_window, actor);
    });

    const windows = [...actor_by_window.keys()];
    const sorted_windows = global.display?.sort_windows_by_stacking?.(windows) ?? windows;
    return sorted_windows
        .map(meta_window => actor_by_window.get(meta_window))
        .filter(Boolean);
}

export function get_stacked_window_actors() {
    if (!cached_actors)
        cached_actors = compute_stacked_window_actors();
    return cached_actors;
}

export function invalidate_stacked_window_actors() {
    cached_actors = null;
}