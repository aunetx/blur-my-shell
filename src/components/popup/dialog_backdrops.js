import Clutter from 'gi://Clutter';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { ModalDialog } from 'resource:///org/gnome/shell/ui/modalDialog.js';

import { Connections } from '../../conveniences/connections.js';
import { DynamicPipeline } from '../../render/dynamic_surface.js';

const BACKDROP_NAME = 'bms-dialog-backdrop';

/// Blurs the whole screen behind modal dialogs that dim it, like the power off dialog. The blur is
/// the bottom child of the dialog, under its dimming, so it fades in and out and goes away with it.
export class DialogBackdrops {
    constructor(settings, effects_manager) {
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.connections = new Connections();
        this.backdrops = new Map();
    }

    enable() {
        const group = Main.layoutManager.modalDialogGroup;
        group.get_children().forEach(dialog => this.track(dialog));
        this.connections.connect(group, 'child-added', (_, dialog) => this.track(dialog));
    }

    /// A dialog joins its group before it creates its dimming, so it is blurred once it is shown.
    track(dialog) {
        if (!(dialog instanceof ModalDialog))
            return;

        if (dialog.visible)
            this.blur_behind(dialog);
        else
            this.connections.connect(dialog, 'notify::visible', () => this.blur_behind(dialog));
        this.connections.connect(dialog, 'destroy', () => this.backdrops.delete(dialog));
    }

    blur_behind(dialog) {
        if (!dialog.visible || !dialog._lightbox || this.backdrops.has(dialog))
            return;

        const pipeline = new DynamicPipeline(
            this.effects_manager,
            global.blur_my_shell._pipelines_manager,
            this.settings.popup.PIPELINE
        );
        const actor = pipeline.create_actor(BACKDROP_NAME);
        actor.add_constraint(new Clutter.BindConstraint({
            source: dialog,
            coordinate: Clutter.BindCoordinate.SIZE,
        }));
        dialog.insert_child_at_index(actor, 0);
        pipeline.attach_pipeline();
        this.backdrops.set(dialog, { pipeline, actor });
    }

    update_pipeline() {
        this.backdrops.forEach(({ pipeline }) =>
            pipeline.change_pipeline_to(this.settings.popup.PIPELINE));
    }

    disable() {
        this.connections.disconnect_all();
        this.backdrops.forEach(({ pipeline, actor }) => {
            pipeline.destroy();
            actor.destroy();
        });
        this.backdrops.clear();
    }
}
