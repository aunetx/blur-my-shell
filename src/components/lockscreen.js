import St from 'gi://St';
import Shell from 'gi://Shell';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Background from 'resource:///org/gnome/shell/ui/background.js';
import { UnlockDialog } from 'resource:///org/gnome/shell/ui/unlockDialog.js';

import { Pipeline } from '../conveniences/pipeline.js';

const original_createBackground =
    UnlockDialog.prototype._createBackground;
const original_updateBackgroundEffects =
    UnlockDialog.prototype._updateBackgroundEffects;


export const LockscreenBlur = class LockscreenBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.enabled = false;
    }

    enable() {
        this._log("blurring lockscreen");

        this.update_lockscreen();

        this.enabled = true;
    }

    update_lockscreen() {
        UnlockDialog.prototype._createBackground =
            this._createBackground;
        UnlockDialog.prototype._updateBackgroundEffects =
            this._updateBackgroundEffects;
    }

    _createBackground(monitorIndex) {
        let monitor = Main.layoutManager.monitors[monitorIndex];
        let widget = new St.Widget({
            style_class: "screen-shield-background",
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height,
        });

        const pipeline = new Pipeline(
            global.blur_my_shell._effects_manager, global.blur_my_shell._pipelines_manager
        );
        pipeline.attach_pipeline_to_actor(widget, 'pipeline_000000000000');

        let bgManager = new Background.BackgroundManager({
            container: widget,
            monitorIndex,
            controlPosition: false,
        });

        this._bgManagers.push(bgManager);

        this._backgroundGroup.add_child(widget);
    }

    _updateBackgroundEffects() { }

    set_sigma(s) { }
    set_brightness(b) { }
    set_color(c) { }
    set_noise_amount(n) { }
    set_noise_lightness(l) { }

    disable() {
        this._log("removing blur from lockscreen");

        UnlockDialog.prototype._createBackground =
            original_createBackground;
        UnlockDialog.prototype._updateBackgroundEffects =
            original_updateBackgroundEffects;

        this.connections.disconnect_all();

        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > lockscreen]   ${str}`);
    }
};
