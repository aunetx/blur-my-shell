import Clutter from 'gi://Clutter';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { WindowPreview } from 'resource:///org/gnome/shell/ui/windowPreview.js';

const BLUR_FADE_IN_TIME = 200;

/// GNOME moves a window preview dropped in the overview back into its workspace as soon as it is
/// back in place, which stops its fade one step short of opaque. Until the overview closes, it is
/// then painted offscreen, where there is no backdrop for its blur to capture.
export function finish_preview_fade(meta_window) {
    const actors = [Main.layoutManager.overviewGroup];
    while (actors.length > 0) {
        const actor = actors.pop();
        if (actor instanceof WindowPreview && actor.metaWindow === meta_window) {
            actor.opacity = 255;
            break;
        }
        actors.push(...actor.get_children());
    }

    const blur_actor = meta_window.blur_actor;
    if (!blur_actor)
        return;

    // the blur couldn't be drawn while the preview was animating back, so it fades in afterwards
    blur_actor.opacity = 0;
    blur_actor.ease({
        opacity: 255,
        duration: BLUR_FADE_IN_TIME,
        mode: Clutter.AnimationMode.EASE_OUT_QUAD,
    });
}
