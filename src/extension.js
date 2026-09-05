import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

import { update_from_old_settings } from './conveniences/settings_updater.js';
import { PipelinesManager } from './conveniences/pipelines_manager.js';
import { EffectsManager } from './conveniences/effects_manager.js';
import { Connections } from './conveniences/connections.js';
import { Settings } from './conveniences/settings.js';
import { KEYS } from './conveniences/keys.js';

import { PanelBlur } from './components/panel.js';
import { OverviewBlur } from './components/overview.js';
import { DashBlur } from './components/dash_to_dock.js';
import { LockscreenBlur } from './components/lockscreen.js';
import { AppFoldersBlur } from './components/appfolders.js';
import { WindowListBlur } from './components/window_list.js';
import { CoverflowAltTabBlur } from './components/coverflow_alt_tab.js';
import { ApplicationsBlur } from './components/applications.js';
import { ScreenshotBlur } from './components/screenshot.js';
import { PopupBlur } from './components/popup.js';
import { connect_component_settings } from './components/settings_connections.js';


/// The main extension class, created when the GNOME Shell is loaded.
export default class BlurMyShell extends Extension {
    /// Enables the extension.
    enable() {
        this._settings = null;
        this._connection = null;
        this._connections = [];
        this._startup_complete_id = 0;
        this._effects_manager = null;
        this._pipelines_manager = null;
        this._panel_blur = null;
        this._dash_to_dock_blur = null;
        this._overview_blur = null;
        this._lockscreen_blur = null;
        this._appfolder_blur = null;
        this._window_list_blur = null;
        this._coverflow_alt_tab_blur = null;
        this._applications_blur = null;
        this._screenshot_blur = null;
        this._popup = null;
        this._user_session_mode_enabled = false;

        try {
            // add the extension to global to make it accessible to other extensions
            // create it first as it is very useful when debugging crashes
            global.blur_my_shell = this;

            const gsettings = this.getSettings();

            // Update stored pipelines before any component reads them.
            update_from_old_settings(gsettings);

            // create a Settings instance, to manage extension's preferences
            // it needs to be loaded before logging, as it checks for DEBUG
            this._settings = new Settings(KEYS, gsettings);

            this._log("enabling extension...");

            // create main extension Connections instance
            this._connection = new Connections;

            // store it in a global array
            this._connections.push(this._connection);

            // create a global effects manager (to prevent RAM bleeding)
            this._effects_manager = new EffectsManager(this._connection);

            // create a global pipelines manager, that helps talking with preferences
            this._pipelines_manager = new PipelinesManager(this._settings);

            // create an instance of each component, with its associated Connections
            const init = () => {
                const connection = new Connections;
                this._connections.push(connection);
                return [connection, this._settings, this._effects_manager];
            };

            this._panel_blur = new PanelBlur(...init());
            this._dash_to_dock_blur = new DashBlur(...init());
            this._overview_blur = new OverviewBlur(...init());
            this._lockscreen_blur = new LockscreenBlur(...init());
            this._appfolder_blur = new AppFoldersBlur(...init());
            this._window_list_blur = new WindowListBlur(...init());
            this._coverflow_alt_tab_blur = new CoverflowAltTabBlur(...init());
            this._applications_blur = new ApplicationsBlur(...init());
            this._screenshot_blur = new ScreenshotBlur(...init());
            this._popup = new PopupBlur(...init());

            // connect each component to preferences change
            connect_component_settings(this);

            // enable the lockscreen blur, only one important in both `user` session and `unlock-dialog`
            if (this._settings.lockscreen.BLUR && !this._lockscreen_blur.enabled)
                this._lockscreen_blur.enable();

            // ensure we take the correct action for the current session mode
            this._on_session_mode_changed(Main.sessionMode);

            // watch for changes to the session mode
            this._connection.connect(Main.sessionMode, 'updated',
                () => this._on_session_mode_changed(Main.sessionMode)
            );
        } catch (error) {
            logError(error, '[Blur my Shell > extension] enable failed; rolling back');
            this._teardown(true);
            throw error;
        }
    }

    /// Enables the components related to the user session (everything except lockscreen blur).
    _enable_user_session() {
        this._log("changing mode to user session...");
        this._user_session_mode_enabled = true;
        this._applications_blur.enable_service();

        // enable every component
        // if the shell is still starting up, wait for it to be entirely loaded;
        // this should prevent bugs like #136 and #137
        if (Main.layoutManager._startingUp) {
            if (!this._startup_complete_id) {
                this._startup_complete_id = this._connection.connect(
                    Main.layoutManager,
                    'startup-complete',
                    () => {
                        this._startup_complete_id = 0;
                        if (this._user_session_mode_enabled)
                            this._enable_components();
                    }
                );
            }
        } else
            this._enable_components();

        // try to enable the components as soon as possible anyway, this way the
        // overview may load before the user sees it
        this._enable_component(
            this._overview_blur,
            this._settings.overview.BLUR,
            'overview'
        );
        this._enable_component(
            this._dash_to_dock_blur,
            this._settings.dash_to_dock.BLUR,
            'dash-to-dock'
        );
        this._enable_component(
            this._panel_blur,
            this._settings.panel.BLUR,
            'panel'
        );

    }

    /// Disables the extension.
    ///
    /// This extension needs to use the 'unlock-dialog' session mode in order to change the blur on
    /// the lockscreen. We have kind of two states of enablement for this extension:
    /// - the 'enabled' state, which means that we have created the necessary components (which only
    ///   are js objects) and enabled the lockscreen blur (which means swapping two functions from
    ///   the `UnlockDialog` constructor with our ones;
    /// - the 'user session enabled` mode, which means that we are in the 'enabled' mode AND we are
    ///   in the user mode, and so we enable all the other components that we created before.
    /// We switch from one state to the other thanks to `this._on_session_mode_changed`, and we
    /// track wether or not we are in the user mode with `this._user_session_mode_enabled` (because
    /// `this._on_session_mode_changed` might be called multiple times while in the user session
    /// mode, typically when going back from simple lockscreen and not sleep mode).
    disable() {
        this._teardown(false);
    }

    _teardown(rollback) {
        this._log(rollback ? "rolling back extension..." : "disabling extension...");

        // disable every component from user session mode
        this._run_cleanup('disable user session', () => this._disable_user_session());
        this._run_cleanup(
            'restore overview workspace switch',
            () => this._overview_blur?.restore_patched_proto()
        );

        // disable components that stay active outside the user session
        this._disable_component(this._popup, 'popup');
        this._disable_component(this._lockscreen_blur, 'lockscreen');
        this._run_cleanup(
            'destroy applications',
            () => this._applications_blur?.destroy()
        );

        // untrack them
        this._panel_blur = null;
        this._dash_to_dock_blur = null;
        this._overview_blur = null;
        this._appfolder_blur = null;
        this._lockscreen_blur = null;
        this._window_list_blur = null;
        this._coverflow_alt_tab_blur = null;
        this._applications_blur = null;
        this._screenshot_blur = null;
        this._popup = null;

        this._run_cleanup(
            'destroy effects',
            () => this._effects_manager?.destroy_all()
        );
        this._run_cleanup(
            'destroy pipelines manager',
            () => this._pipelines_manager?.destroy()
        );
        this._effects_manager = null;
        this._pipelines_manager = null;

        // make sure no settings change can re-enable them
        this._run_cleanup(
            'disconnect settings',
            () => this._settings?.disconnect_all_settings()
        );

        // force disconnecting every signal, even if component crashed
        const connections = this._connections ?? [];
        this._connections = [];
        connections.forEach((connection, index) => {
            this._run_cleanup(
                `disconnect signal group ${index}`,
                () => connection.disconnect_all()
            );
        });
        this._connection = null;
        this._startup_complete_id = 0;
        this._user_session_mode_enabled = false;

        // remove the extension from GJS's global
        this._run_cleanup('remove global extension reference', () => {
            if (global.blur_my_shell === this)
                delete global.blur_my_shell;
        });

        this._log(rollback ? "extension rollback complete." : "extension disabled.");

        this._settings = null;
    }

    /// Disables the components related to the user session (everything except lockscreen blur).
    _disable_user_session() {
        this._log("disabling user session mode...");

        if (this._startup_complete_id) {
            const startup_complete_id = this._startup_complete_id;
            this._startup_complete_id = 0;
            this._run_cleanup(
                'disconnect startup handler',
                () => this._connection?.disconnect(
                    Main.layoutManager,
                    startup_complete_id
                )
            );
        }

        this._run_cleanup(
            'disable applications service',
            () => this._applications_blur?.disable_service()
        );

        // disable every component except lockscreen blur and popup blur
        this._disable_component(this._panel_blur, 'panel');
        this._disable_component(this._dash_to_dock_blur, 'dash-to-dock');
        this._disable_component(this._overview_blur, 'overview');
        this._disable_component(this._appfolder_blur, 'appfolder');
        this._disable_component(this._window_list_blur, 'window-list');
        this._disable_component(this._coverflow_alt_tab_blur, 'coverflow-alt-tab');
        this._disable_component(this._applications_blur, 'applications');
        this._disable_component(this._screenshot_blur, 'screenshot');

        // tells the extension we have disabled the user session components, so that we do not
        // disable them later again if they were already disabled
        this._user_session_mode_enabled = false;
    }

    /// Restarts the components related to the user session.
    _restart() {
        this._log("restarting...");

        this._disable_user_session();
        this._enable_user_session();

        this._log("restarted.");
    }

    /// Changes the extension to operate either on 'user' mode or 'unlock-dialog' mode, switching
    /// from one to the other means enabling/disabling every component except lockscreen blur.
    _on_session_mode_changed(session) {
        if (session.currentMode === 'user' || session.parentMode === 'user') {
            if (!this._user_session_mode_enabled)
                // we need to activate everything
                this._enable_user_session();
        }
        else if (session.currentMode === 'unlock-dialog') {
            if (this._user_session_mode_enabled)
                // we need to disable the components related to the user session mode
                this._disable_user_session();
        }
    }

    /// Enables every component from the user session needed, should be called when the shell is
    /// entirely loaded as the `enable` methods interact with it.
    _enable_components() {
        // enable each component if needed, and if it is not already enabled

        [
            [this._panel_blur, this._settings.panel.BLUR, 'panel'],
            [this._dash_to_dock_blur, this._settings.dash_to_dock.BLUR, 'dash-to-dock'],
            [this._overview_blur, this._settings.overview.BLUR, 'overview'],
            [this._appfolder_blur, this._settings.appfolder.BLUR, 'appfolder'],
            [this._applications_blur, this._settings.applications.BLUR, 'applications'],
            [this._window_list_blur, this._settings.window_list.BLUR, 'window-list'],
            [this._coverflow_alt_tab_blur, this._settings.coverflow_alt_tab.BLUR, 'coverflow-alt-tab'],
            [this._screenshot_blur, this._settings.screenshot.BLUR, 'screenshot'],
            [this._popup, this._settings.popup.BLUR, 'popup'],
        ].forEach(([component, should_enable, name]) =>
            this._enable_component(component, should_enable, name)
        );

        this._log("all components enabled.");
    }

    _enable_component(component, should_enable, name) {
        if (!component || !should_enable || component.enabled)
            return;

        try {
            component.enable();
        } catch (error) {
            logError(error, `[Blur my Shell > extension] failed to enable ${name}`);
            this._disable_component(component, name);
        }
    }

    _disable_component(component, name) {
        if (!component)
            return;

        try {
            component.disable();
        } catch (error) {
            logError(error, `[Blur my Shell > extension] failed to disable ${name}`);
        }
    }

    _run_cleanup(name, callback) {
        try {
            callback();
        } catch (error) {
            logError(error, `[Blur my Shell > extension] failed to ${name}`);
        }
    }

    _log(str) {
        if (this._settings?.DEBUG)
            console.log(`[Blur my Shell > extension]    ${str}`);
    }
}
