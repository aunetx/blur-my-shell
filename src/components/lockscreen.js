import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { UnlockDialog } from 'resource:///org/gnome/shell/ui/unlockDialog.js';

import {
    create_static_background,
    destroy_background_manager,
} from '../conveniences/static_background.js';

const original_createBackground =
    UnlockDialog.prototype._createBackground;
const original_updateBackgroundEffects =
    UnlockDialog.prototype._updateBackgroundEffects;
const original_updateBackgrounds =
    UnlockDialog.prototype._updateBackgrounds;


export const LockscreenBlur = class LockscreenBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.enabled = false;
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this._log("blurring lockscreen");

        this.update_lockscreen();

        this.enabled = true;
    }

    update_lockscreen() {
        UnlockDialog.prototype._createBackground =
            this._createBackground;
        UnlockDialog.prototype._updateBackgroundEffects =
            this._updateBackgroundEffects;
        UnlockDialog.prototype._updateBackgrounds =
            this._updateBackgrounds;
    }

    _createBackground(monitor_index) {
        create_static_background({
            effects_manager: global.blur_my_shell._effects_manager,
            pipelines_manager: global.blur_my_shell._pipelines_manager,
            pipeline_id: global.blur_my_shell._settings.lockscreen.PIPELINE,
            monitor_index,
            background_managers: this._bgManagers,
            container: this._backgroundGroup,
            widget_name: 'screen-shield-background',
        });
    }

    _updateBackgroundEffects() {
        this._updateBackgrounds();
    }

    _updateBackgrounds() {
        this._bgManagers.forEach(destroy_background_manager);

        this._bgManagers = [];
        this._backgroundGroup.destroy_all_children();

        for (let i = 0; i < Main.layoutManager.monitors.length; i++)
            this._createBackground(i);
    }

    disable() {
        if (!this.enabled) {
            this._log("blur already removed");
            return;
        }

        this._log("removing blur from lockscreen");

        UnlockDialog.prototype._createBackground =
            original_createBackground;
        UnlockDialog.prototype._updateBackgroundEffects =
            original_updateBackgroundEffects;
        UnlockDialog.prototype._updateBackgrounds =
            original_updateBackgrounds;

        this.connections.disconnect_all();

        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > lockscreen]   ${str}`);
    }
};
