/// Mutter runs its laters when the stage starts an update, so a handler connected afterwards runs
/// once they are all done, still before the stage is laid out and painted. The dock forces a layout
/// to read its geometry, which from a later would also lay out actors whose own laters didn't run
/// yet, like the app grid before it is filled.
export function queue_after_laters(callback) {
    const id = global.stage.connect('before-update', () => {
        global.stage.disconnect(id);
        callback();
    });
    global.stage.schedule_update();
    return id;
}
