import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { UnlockDialog } from 'resource:///org/gnome/shell/ui/unlockDialog.js';

import { StaticBlur } from '../render/static_blur/static_blur.js';
import { get_pipeline_id, connect_system_style_changes } from '../conveniences/style.js';

const original_createBackground =
    UnlockDialog.prototype._createBackground;
const original_updateBackgroundEffects =
    UnlockDialog.prototype._updateBackgroundEffects;
const original_updateBackgrounds =
    UnlockDialog.prototype._updateBackgrounds;


export const LockscreenBlur = class LockscreenBlur {
    constructor(connections, settings) {
        this.connections = connections;
        this.settings = settings;
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

        connect_system_style_changes(this.connections, () => {
            if (this.settings.lockscreen.PIPELINE_AUTO_MODE)
                this.update_lockscreen();
        });

        this.update_lockscreen();
    }

    update_lockscreen() {
        this.get_active_dialog()?._updateBackgrounds();
    }

    _createBackground(monitor_index) {
        const extension = global.blur_my_shell;
        // an extension that patched this after us keeps calling it once we are disabled
        if (!extension?._lockscreen_blur.enabled)
            return original_createBackground.call(this, monitor_index);

        const monitor = Main.layoutManager.monitors[monitor_index];
        const background = new StaticBlur({
            name: 'screen-shield-background',
            monitorIndex: monitor_index,
            pipelineId: get_pipeline_id(extension._settings.lockscreen),
            wholeMonitor: true,
        });
        background.set_position(monitor.x, monitor.y);
        this._backgroundGroup.add_child(background);
    }

    _updateBackgroundEffects() {
        this._updateBackgrounds();
    }

    _updateBackgrounds() {
        // the dialog can hold the shell's own backgrounds if it was created before enabling
        this._bgManagers.forEach(manager => manager.destroy());
        this._bgManagers = [];
        this._backgroundGroup.destroy_all_children();

        for (let i = 0; i < Main.layoutManager.monitors.length; i++)
            this._createBackground(i);
    }

    get_active_dialog() {
        const dialog = Main.screenShield?._dialog;
        return dialog instanceof UnlockDialog ? dialog : null;
    }

    disable() {
        this._log("removing blur from lockscreen");
        this.enabled = false;

        if (UnlockDialog.prototype._createBackground === this._createBackground)
            UnlockDialog.prototype._createBackground = original_createBackground;
        if (UnlockDialog.prototype._updateBackgroundEffects === this._updateBackgroundEffects)
            UnlockDialog.prototype._updateBackgroundEffects = original_updateBackgroundEffects;
        if (UnlockDialog.prototype._updateBackgrounds === this._updateBackgrounds)
            UnlockDialog.prototype._updateBackgrounds = original_updateBackgrounds;

        const dialog = this.get_active_dialog();
        if (dialog?._backgroundGroup.get_children().some(child => child instanceof StaticBlur))
            dialog._updateBackgrounds();

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > lockscreen]   ${str}`);
    }
};
