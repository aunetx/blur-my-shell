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
import { track_painted_views } from './render/painted_view.js';


/// The main extension class, created when the GNOME Shell is loaded.
export default class BlurMyShell extends Extension {
    /// Enables the extension.
    enable() {
        // exposed to other extensions, and useful when debugging
        global.blur_my_shell = this;

        const gsettings = this.getSettings();
        update_from_old_settings(gsettings);

        // needs to be created before logging, as it checks for DEBUG
        this._settings = new Settings(KEYS, gsettings);

        this._log("enabling extension...");

        this._connection = new Connections;
        this._connections = [this._connection];
        this._startup_complete_id = 0;
        this._user_session_mode_enabled = false;

        // the shell destroys its UI on shutdown without disabling extensions, and runs the idle
        // callbacks queued during that teardown afterwards, when every actor is already disposed
        this._connection.connect(Main.uiGroup, 'destroy', () => this.disable());
        track_painted_views(this._connection);

        // shared by every component so that effects are pooled instead of re-created
        this._effects_manager = new EffectsManager(this._connection);
        this._pipelines_manager = new PipelinesManager(this._settings);

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

        connect_component_settings(this);

        // the lockscreen blur is the only one needed in both `user` and `unlock-dialog` modes
        this._enable_component(this._lockscreen_blur, this._settings.lockscreen.BLUR);

        this._on_session_mode_changed(Main.sessionMode);
        this._connection.connect(Main.sessionMode, 'updated',
            () => this._on_session_mode_changed(Main.sessionMode)
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
        this._log("disabling extension...");

        if (this._user_session_mode_enabled)
            this._disable_user_session();
        this._overview_blur.restore_patched_proto();

        // these stay active outside of the user session
        this._popup.disable();
        this._lockscreen_blur.disable();
        this._applications_blur.destroy();

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

        this._effects_manager.destroy_all();
        this._effects_manager = null;
        this._pipelines_manager.destroy();
        this._pipelines_manager = null;

        // make sure no settings change can re-enable a component
        this._settings.disconnect_all_settings();

        // disconnect every signal, even those a crashed component could not clean
        this._connections.forEach(connections => connections.disconnect_all());
        this._connections = null;
        this._connection = null;

        delete global.blur_my_shell;

        this._log("extension disabled.");

        this._settings = null;
    }

    /// Enables the components related to the user session (everything except lockscreen blur).
    _enable_user_session() {
        this._log("changing mode to user session...");
        this._user_session_mode_enabled = true;
        this._applications_blur.enable_service();

        if (!Main.layoutManager._startingUp) {
            this._enable_components();
            return;
        }

        // wait for the shell to be entirely loaded, this should prevent bugs like #136 and #137
        this._startup_complete_id = this._connection.connect(
            Main.layoutManager,
            'startup-complete',
            () => {
                this._startup_complete_id = 0;
                this._enable_components();
            }
        );

        // try to enable those anyway, so that the overview may load before the user sees it
        this._enable_before_startup(this._overview_blur, this._settings.overview.BLUR, 'overview');
        this._enable_before_startup(
            this._dash_to_dock_blur, this._settings.dash_to_dock.BLUR, 'dash-to-dock'
        );
        this._enable_before_startup(this._panel_blur, this._settings.panel.BLUR, 'panel');
    }

    /// The shell is not fully loaded yet, so this may fail; the component is then enabled again
    /// once startup is complete.
    _enable_before_startup(component, should_enable, name) {
        try {
            this._enable_component(component, should_enable);
        } catch (error) {
            logError(error, `[Blur my Shell > extension] could not enable ${name} during startup`);
            component.disable();
        }
    }

    /// Disables the components related to the user session (everything except lockscreen blur and
    /// popup blur).
    _disable_user_session() {
        this._log("disabling user session mode...");

        if (this._startup_complete_id) {
            this._connection.disconnect(Main.layoutManager, this._startup_complete_id);
            this._startup_complete_id = 0;
        }

        this._applications_blur.disable_service();

        this._panel_blur.disable();
        this._dash_to_dock_blur.disable();
        this._overview_blur.disable();
        this._appfolder_blur.disable();
        this._window_list_blur.disable();
        this._coverflow_alt_tab_blur.disable();
        this._applications_blur.disable();
        this._screenshot_blur.disable();

        this._user_session_mode_enabled = false;
    }

    /// Changes the extension to operate either on 'user' mode or 'unlock-dialog' mode, switching
    /// from one to the other means enabling/disabling every component except lockscreen blur.
    _on_session_mode_changed(session) {
        if (session.currentMode === 'user' || session.parentMode === 'user') {
            if (!this._user_session_mode_enabled)
                this._enable_user_session();
        } else if (session.currentMode === 'unlock-dialog') {
            if (this._user_session_mode_enabled)
                this._disable_user_session();
        }
    }

    /// Enables every component from the user session needed, should be called when the shell is
    /// entirely loaded as the `enable` methods interact with it.
    _enable_components() {
        this._enable_component(this._panel_blur, this._settings.panel.BLUR);
        this._enable_component(this._dash_to_dock_blur, this._settings.dash_to_dock.BLUR);
        this._enable_component(this._overview_blur, this._settings.overview.BLUR);
        this._enable_component(this._appfolder_blur, this._settings.appfolder.BLUR);
        this._enable_component(this._applications_blur, this._settings.applications.BLUR);
        this._enable_component(this._window_list_blur, this._settings.window_list.BLUR);
        this._enable_component(this._coverflow_alt_tab_blur, this._settings.coverflow_alt_tab.BLUR);
        this._enable_component(this._screenshot_blur, this._settings.screenshot.BLUR);
        this._enable_component(this._popup, this._settings.popup.BLUR);

        this._log("all components enabled.");
    }

    _enable_component(component, should_enable) {
        if (should_enable && !component.enabled)
            component.enable();
    }

    _log(str) {
        if (this._settings.DEBUG)
            console.log(`[Blur my Shell > extension]    ${str}`);
    }
}
