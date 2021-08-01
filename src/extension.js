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
const Applications = Me.imports.applications;
const PanelIndicator = Me.imports.panel_indicator;
const Other = Me.imports.other;

class Extension {
    constructor() { }

    enable() {
        this._log("enabling extension...");
        this._connections = [];
        this._prefs = new Settings.Prefs;

        this._panel_blur = new Panel.PanelBlur(new Connections.Connections);
        this._dash_blur = new Dash.DashBlur(new Connections.Connections);
        this._dash_to_dock_blur = new DashToDock.DashBlur(new Connections.Connections);
        this._overview_blur = new Overview.OverviewBlur(new Connections.Connections);
        this._lockscreen_blur = new Lockscreen.LockscreenBlur(new Connections.Connections);
        this._applications_blur = new Applications.ApplicationsBlur(new Connections.Connections);
        this._other_blur = new Other.OtherBlur(new Connections.Connections);
        this._panel_indicator = new PanelIndicator.PanelIndicator(new Connections.Connections);

        this._connections.push(this._panel_blur.connections, this._dash_blur.connections,
            this._dash_to_dock_blur.connections, this._overview_blur.connections,
            this._lockscreen_blur.connections,this._applications_blur.connections,
            this._other_blur.connections, this._panel_indicator.connections);

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
        if (this._prefs.BLUR_APPLICATIONS.get()) {
            this._applications_blur.enable();
        }
        if (this._prefs.BLUR_OTHER.get()) {
            this._other_blur.enable();
        }
        if (this._prefs.TOGGLE_APP_BLUR.get()) {
            this._panel_indicator.enable();
        }


        this._update_sigma();
        this._update_brightness();
        this._applications_blur.set_overrides(this._prefs.WINDOW_CLASS_OVERRIDES.get());
        this._log("extension enabled.");
    }

    disable() {
        this._log("disabling extension...");

        this._panel_blur.disable();
        this._dash_blur.disable();
        this._dash_to_dock_blur.disable();
        this._overview_blur.disable();
        this._lockscreen_blur.disable();
        this._applications_blur.disable();
        this._other_blur.disable();
        this._panel_indicator.disable();


        this._disconnect_settings();

        // in theory, this shouldn't be needed if we switch to making modules responsible for disconnecting their own
        // signals. For now, I will leave this small bit of code in. Calling disable on all modules has already
        // done the same thing
        this._connections.forEach((connections) => {
            connections.disconnect_all();
        })
        this._connections = [];
        this._log("extension disabled.");
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
        this._prefs.BLUR_APPLICATIONS.changed(() => {
            if (this._prefs.BLUR_APPLICATIONS.get()) {
                this._applications_blur.enable();
                this._panel_indicator.enable();
            } else {
                this._applications_blur.disable();
                this._panel_indicator.disable();
            }
        });
        this._prefs.WINDOW_CLASS_OVERRIDES.changed(() => {
            this._applications_blur.set_overrides(this._prefs.WINDOW_CLASS_OVERRIDES.get());
        });
        this._prefs.BLUR_OTHER.changed(() => {
            if (this._prefs.BLUR_OTHER.get()) {
                this._other_blur.enable();
            } else {
                this._other_blur.disable();
            }
        });
        this._prefs.TOGGLE_APP_BLUR.changed(() => {
            if (this._prefs.TOGGLE_APP_BLUR.get()) {
                this._panel_indicator.enable();
            } else {
                this._panel_indicator.disable();
            }
        });
        this._prefs.DASH_OPACITY.changed(() => {
            this._dash_blur.update();
        });
        this._prefs.STATIC_BLUR.changed(() => {
            this._panel_blur.change_blur_type()
        });
    }

    _disconnect_settings() {
        this._prefs.SIGMA.disconnect();
        this._prefs.BRIGHTNESS.disconnect();
        this._prefs.WINDOW_CLASS_OVERRIDES.disconnect();
    }

    _update_sigma() {
        let sigma = this._prefs.SIGMA.get();

        this._panel_blur.set_sigma(sigma);
        this._dash_to_dock_blur.set_sigma(sigma);
        this._overview_blur.set_sigma(sigma);
        this._lockscreen_blur.set_sigma(sigma);
        this._applications_blur.set_sigma(sigma);
        this._other_blur.set_sigma(sigma);
    }

    _update_brightness() {
        let brightness = this._prefs.BRIGHTNESS.get();

        this._panel_blur.set_brightness(brightness);
        this._dash_to_dock_blur.set_brightness(brightness);
        this._overview_blur.set_brightness(brightness);
        this._lockscreen_blur.set_brightness(brightness);
        this._applications_blur.set_brightness(brightness);
        this._other_blur.set_brightness(brightness);
    }

    _log(str) {
        log(`[Blur Me] ${str}`)
    }
}


// Called on gnome-shell loading, even if extension is deactivated
function init() {
    return new Extension();
}
