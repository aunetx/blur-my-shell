import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { UnlockDialog } from 'resource:///org/gnome/shell/ui/unlockDialog.js';

import { Pipeline } from '../conveniences/pipeline.js';

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
        if (this.enabled)
            return;

        this._log("blurring lockscreen");
        this.enabled = true;
        UnlockDialog.prototype._createBackground =
            this._createBackground;
        UnlockDialog.prototype._updateBackgroundEffects =
            this._updateBackgroundEffects;
        UnlockDialog.prototype._updateBackgrounds =
            this._updateBackgrounds;

        this.update_lockscreen();
    }

    update_lockscreen() {
        this._rebuild_active_dialog();
    }

    _createBackground(monitor_index) {
        const extension = global.blur_my_shell;
        if (!extension?._lockscreen_blur?.enabled)
            return original_createBackground.call(this, monitor_index);

        let pipeline = new Pipeline(
            extension._effects_manager, extension._pipelines_manager,
            extension._settings.lockscreen.PIPELINE
        );

        pipeline.create_background_with_effects(
            monitor_index,
            this._bgManagers,
            this._backgroundGroup,
            "screen-shield-background"
        );
    }

    _updateBackgroundEffects() {
        this._updateBackgrounds();
    }

    _updateBackgrounds() {
        const managers = this._bgManagers;
        this._bgManagers = [];
        managers.forEach(manager => {
            try {
                manager._bms_pipeline?.destroy();
                manager.destroy();
            } catch (error) {
                logError(error, '[Blur my Shell > lockscreen] failed to remove background');
            }
        });
        this._backgroundGroup.destroy_all_children();

        for (let i = 0; i < Main.layoutManager.monitors.length; i++)
            this._createBackground(i);
    }

    _rebuild_active_dialog() {
        const dialog = Main.screenShield?._dialog;
        if (!(dialog instanceof UnlockDialog))
            return;

        try {
            dialog._updateBackgrounds();
        } catch (error) {
            logError(error, '[Blur my Shell > lockscreen] failed to rebuild active dialog');
        }
    }

    disable() {
        if (!this.enabled)
            return;

        this._log("removing blur from lockscreen");
        this.enabled = false;

        if (UnlockDialog.prototype._createBackground === this._createBackground)
            UnlockDialog.prototype._createBackground = original_createBackground;
        if (UnlockDialog.prototype._updateBackgroundEffects === this._updateBackgroundEffects)
            UnlockDialog.prototype._updateBackgroundEffects = original_updateBackgroundEffects;
        if (UnlockDialog.prototype._updateBackgrounds === this._updateBackgrounds)
            UnlockDialog.prototype._updateBackgrounds = original_updateBackgrounds;

        this._rebuild_active_dialog();

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > lockscreen]   ${str}`);
    }
};
