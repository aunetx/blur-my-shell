'use strict';

const { St, Shell } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const Settings = Me.imports.settings;
const Connections = Me.imports.connections;

const Panel = Me.imports.panel;
const Dash = Me.imports.dash;
const Overview = Me.imports.overview;
const DashToDock = Me.imports.dash_to_dock;
const Lockscreen = Me.imports.lockscreen;
const AppFolders = Me.imports.appfolders;
const Keyboard = Me.imports.keyboard;

class Extension {
    constructor() { }

    enable() {
        this._prefs = new Settings.Prefs;

        this._log("enabling extension...");
        this._connections = [];

        this._panel_blur = new Panel.PanelBlur(new Connections.Connections, this._prefs);
        this._dash_blur = new Dash.DashBlur(new Connections.Connections, this._prefs);
        this._dash_to_dock_blur = new DashToDock.DashBlur(new Connections.Connections, this._prefs);
        this._overview_blur = new Overview.OverviewBlur(new Connections.Connections, this._prefs);
        this._lockscreen_blur = new Lockscreen.LockscreenBlur(new Connections.Connections, this._prefs);
        this._appfolders_blur = new AppFolders.AppFoldersBlur(new Connections.Connections, this._prefs);
        this._keyboard_blur = new Keyboard.KeyboardBlur(new Connections.Connections, this._prefs);

        this._connections.push(this._panel_blur.connections, this._dash_blur.connections,
            this._dash_to_dock_blur.connections, this._overview_blur.connections,
            this._lockscreen_blur.connections, this._appfolders_blur.connections,
            this._keyboard_blur.connections);

        this._connect_to_settings();

        if (this._prefs.BLUR_PANEL.get()) {
            this._panel_blur.enable();
        }
        if (this._prefs.BLUR_DASH.get()) {
            this._dash_blur.enable();
            this._dash_to_dock_blur.enable();
        }
        if (this._prefs.BLUR_OVERVIEW.get()) {
            this._overview_blur.enable();
        }
        if (this._prefs.BLUR_LOCKSCREEN.get()) {
            this._lockscreen_blur.enable();
        }
        if (this._prefs.BLUR_APPFOLDERS.get()) {
            this._appfolders_blur.enable();
        }
        if (this._prefs.BLUR_KEYBOARD.get()) {
            this._keyboard_blur.enable();
        }

        this._update_sigma();
        this._update_brightness();

        this._log("extension enabled.");
    }

    disable() {
        this._log("disabling extension...");

        this._panel_blur.disable();
        this._dash_blur.disable();
        this._dash_to_dock_blur.disable();
        this._overview_blur.disable();
        this._lockscreen_blur.disable();
        this._appfolders_blur.disable();
        this._keyboard_blur.disable();

        this._panel_blur = null;
        this._dash_blur = null;
        this._dash_to_dock_blur = null;
        this._overview_blur = null;
        this._lockscreen_blur = null;
        this._appfolders_blur = null;
        this._keyboard_blur = null;

        this._disconnect_settings();

        this._connections.forEach((connections) => {
            connections.disconnect_all();
        })
        this._connections = [];

        this._log("extension disabled.");

        this._prefs = null;
    }

    _connect_to_settings() {
        this._prefs.SIGMA.changed(() => {
            this._update_sigma();
        });
        this._prefs.BRIGHTNESS.changed(() => {
            this._update_brightness();
        });

        this._prefs.BLUR_DASH.changed(() => {
            if (this._prefs.BLUR_DASH.get()) {
                this._dash_blur.enable();
                this._dash_to_dock_blur.enable();
            } else {
                this._dash_blur.disable();
                this._dash_to_dock_blur.disable();
            }
        });
        this._prefs.BLUR_PANEL.changed(() => {
            if (this._prefs.BLUR_PANEL.get()) {
                this._panel_blur.enable();
            } else {
                this._panel_blur.disable();
            }
        });
        this._prefs.BLUR_OVERVIEW.changed(() => {
            if (this._prefs.BLUR_OVERVIEW.get()) {
                this._overview_blur.enable();
            } else {
                this._overview_blur.disable();
            }
        });
        this._prefs.BLUR_LOCKSCREEN.changed(() => {
            if (this._prefs.BLUR_LOCKSCREEN.get()) {
                this._lockscreen_blur.enable();
            } else {
                this._lockscreen_blur.disable();
            }
        });
        this._prefs.BLUR_APPFOLDERS.changed(() => {
            if (this._prefs.BLUR_APPFOLDERS.get()) {
                this._appfolders_blur.enable();
            } else {
                this._appfolders_blur.disable();
            }
        });
        this._prefs.BLUR_KEYBOARD.changed(() => {
            if (this._prefs.BLUR_KEYBOARD.get()) {
                this._keyboard_blur.enable();
            } else {
                this._keyboard_blur.disable();
            }
        });
        this._prefs.DASH_OPACITY.changed(() => {
            this._dash_blur.update();
        });
        this._prefs.STATIC_BLUR.changed(() => {
            this._panel_blur.change_blur_type();
        });
    }

    _disconnect_settings() {
        this._prefs.SIGMA.disconnect();
        this._prefs.BRIGHTNESS.disconnect();
    }

    _update_sigma() {
        let sigma = this._prefs.SIGMA.get();

        this._panel_blur.set_sigma(sigma);
        this._dash_to_dock_blur.set_sigma(sigma);
        this._overview_blur.set_sigma(sigma);
        this._lockscreen_blur.set_sigma(sigma);
        this._appfolders_blur.set_sigma(sigma);
        this._keyboard_blur.set_sigma(sigma);
    }

    _update_brightness() {
        let brightness = this._prefs.BRIGHTNESS.get();

        this._panel_blur.set_brightness(brightness);
        this._dash_to_dock_blur.set_brightness(brightness);
        this._overview_blur.set_brightness(brightness);
        this._lockscreen_blur.set_brightness(brightness);
        this._appfolders_blur.set_brightness(brightness);
        this._keyboard_blur.set_brightness(brightness);
    }

    _log(str) {
        if (this._prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}


// Called on gnome-shell loading, even if extension is deactivated
function init() {
    return new Extension();
}
