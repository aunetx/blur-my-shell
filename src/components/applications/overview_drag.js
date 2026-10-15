import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { WindowPreview } from 'resource:///org/gnome/shell/ui/windowPreview.js';

/// GNOME moves a window preview dropped in the overview back into its workspace as soon as it is
/// back in place, which stops its fade one step short of opaque. Until the overview closes, it is
/// then painted offscreen, where there is no backdrop for its blur to capture.
export function finish_preview_fade(meta_window) {
    const actors = [Main.layoutManager.overviewGroup];
    while (actors.length > 0) {
        const actor = actors.pop();
        if (actor instanceof WindowPreview && actor.metaWindow === meta_window) {
            actor.opacity = 255;
            return;
        }
        actors.push(...actor.get_children());
    }
}
