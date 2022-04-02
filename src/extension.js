'use strict';

const { St, Shell, Gio, Gtk } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const { Connections } = Me.imports.conveniences.connections;
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Panel = Me.imports.components.panel;
const Overview = Me.imports.components.overview;
const DashToDock = Me.imports.components.dash_to_dock;
const Lockscreen = Me.imports.components.lockscreen;
const AppFolders = Me.imports.components.appfolders;
const WindowList = Me.imports.components.window_list;
const Applications = Me.imports.components.applications;
const Screenshot = Me.imports.components.screenshot;

// This lists the components that need to be connected in order to either use
// general sigma/brightness or their own.
const INDEPENDENT_COMPONENTS = [
    "overview", "appfolder", "panel", "dash_to_dock", "applications",
    "lockscreen", "window_list", "screenshot"
];


/// The main extension class, created when the GNOME Shell is loaded.
class Extension {
    constructor() { }

    /// Enables the extension
    enable() {
        // create a Prefs instance, to manage extension's preferences
        // it needs to be loaded before logging, as it checks for DEBUG

        this._prefs = new Prefs(Keys);

        this._log("enabling extension...");

        // create main extension Connections instance

        this._connection = new Connections;

        // store it in a global array

        this._connections = [this._connection];

        // create an instance of each component, with its associated Connections

        let init = _ => {
            // create a Connections instance, to manage signals
            let connection = new Connections;

            // store it to keeps track of them globally
            this._connections.push(connection);

            return [connection, this._prefs];
        };

        this._panel_blur = new Panel.PanelBlur(...init());
        this._dash_to_dock_blur = new DashToDock.DashBlur(...init());
        this._overview_blur = new Overview.OverviewBlur(...init());
        this._lockscreen_blur = new Lockscreen.LockscreenBlur(...init());
        this._appfolder_blur = new AppFolders.AppFoldersBlur(...init());
        this._window_list_blur = new WindowList.WindowListBlur(...init());
        this._applications_blur = new Applications.ApplicationsBlur(...init());
        this._screenshot_blur = new Screenshot.ScreenshotBlur(...init());

        // connect each component to preferences change

        this._connect_to_settings();

        // enable every component
        // if the shell is still starting up, wait for it to be entirely loaded;
        // this should prevent bugs like #136 and #137
        if (Main.layoutManager._startingUp) {
            this._connection.connect(
                Main.layoutManager,
                'startup-complete',
                this._enable_components.bind(this)
            );
        } else {
            this._enable_components();
        }

        // try to enable the components as soon as possible anyway, this way the
        // overview may load before the user sees it
        try {
            if (this._prefs.OVERVIEW_BLUR.get() && !this._overview_blur.enabled)
                this._overview_blur.enable();
        } catch (e) { }
        try {
            if (this._prefs.PANEL_BLUR.get() && !this._panel_blur.enabled)
                this._panel_blur.enable();
        } catch (e) { }

        // add the extension to global to make it accessible to other extensions

        global.blur_my_shell = this;
    }

    /// Disables the extension
    disable() {
        this._log("disabling extension...");

        // disable every component

        this._panel_blur.disable();
        this._dash_to_dock_blur.disable();
        this._overview_blur.disable();
        this._lockscreen_blur.disable();
        this._appfolder_blur.disable();
        this._window_list_blur.disable();
        this._applications_blur.disable();
        this._screenshot_blur.disable();

        // untrack them

        this._panel_blur = null;
        this._dash_to_dock_blur = null;
        this._overview_blur = null;
        this._lockscreen_blur = null;
        this._appfolder_blur = null;
        this._window_list_blur = null;
        this._applications_blur = null;

        // make sure no settings change can re-enable them

        this._prefs.disconnect_all_settings();

        // force disconnecting every signal, even if component crashed

        this._connections.forEach((connections) => {
            connections.disconnect_all();
        });
        this._connections = [];

        // remove the extension from GJS's global

        delete global.blur_my_shell;

        this._log("extension disabled.");

        this._prefs = null;
    }

    /// Enables every component needed, should be called when the shell is
    /// entirely loaded as the `enable` methods interact with it.
    _enable_components() {
        // enable each component if needed, and if it is not already enabled

        if (this._prefs.PANEL_BLUR.get() && !this._panel_blur.enabled)
            this._panel_blur.enable();

        if (this._prefs.DASH_TO_DOCK_BLUR.get()) {
            this._dash_to_dock_blur.enable();
        }

        if (this._prefs.OVERVIEW_BLUR.get() && !this._overview_blur.enabled)
            this._overview_blur.enable();

        if (this._prefs.LOCKSCREEN_BLUR.get())
            this._lockscreen_blur.enable();

        if (this._prefs.APPFOLDER_BLUR.get())
            this._appfolder_blur.enable();

        if (this._prefs.APPLICATIONS_BLUR.get())
            this._applications_blur.enable();

        if (this._prefs.WINDOW_LIST_BLUR.get())
            this._window_list_blur.enable();

        if (this._prefs.SCREENSHOT_BLUR.get())
            this._screenshot_blur.enable();

        // update the sigma and brightness values of each component

        this._update_sigma();
        this._update_brightness();

        this._log("all components enabled.");
    }

    /// Updates needed things in each component when a preference changed
    _connect_to_settings() {

        // global blur values changed, update everybody

        this._prefs.SIGMA.changed(() => {
            this._update_sigma();
        });
        this._prefs.BRIGHTNESS.changed(() => {
            this._update_brightness();
        });

        // connect each component to use the proper sigma/brightness values

        INDEPENDENT_COMPONENTS.forEach(component => {
            this._connect_to_individual_settings(component);
        });

        // other component's preferences changed

        // ---------- OVERVIEW ----------

        // toggled on/off
        this._prefs.OVERVIEW_BLUR.changed(() => {
            if (this._prefs.OVERVIEW_BLUR.get()) {
                this._overview_blur.enable();
            } else {
                this._overview_blur.disable();
            }
        });

        // overview components style changed
        this._prefs.OVERVIEW_STYLE_COMPONENTS.changed(() => {
            if (this._prefs.OVERVIEW_BLUR.get()) {
                this._overview_blur.update_components_classname();
            }
        });


        // ---------- APPFOLDER ----------

        // toggled on/off
        this._prefs.APPFOLDER_BLUR.changed(() => {
            if (this._prefs.APPFOLDER_BLUR.get()) {
                this._appfolder_blur.enable();
            } else {
                this._appfolder_blur.disable();
            }
        });

        // changed dialog opacity
        this._prefs.APPFOLDER_DIALOG_OPACITY.changed(() => {
            if (this._prefs.APPFOLDER_BLUR.get())
                this._appfolder_blur.blur_appfolders();
        });


        // ---------- PANEL ----------

        // toggled on/off
        this._prefs.PANEL_BLUR.changed(() => {
            if (this._prefs.PANEL_BLUR.get()) {
                this._panel_blur.enable();
            } else {
                this._panel_blur.disable();
            }
        });

        // static blur toggled on/off
        this._prefs.PANEL_STATIC_BLUR.changed(() => {
            if (this._prefs.PANEL_BLUR.get())
                this._panel_blur.change_blur_type();
        });

        // panel blur's overview connection toggled on/off
        this._prefs.PANEL_UNBLUR_IN_OVERVIEW.changed(() => {
            this._panel_blur.connect_to_overview();
        });


        // ---------- DASH TO DOCK ----------

        // toggled on/off
        this._prefs.DASH_TO_DOCK_BLUR.changed(() => {
            if (this._prefs.DASH_TO_DOCK_BLUR.get()) {
                this._dash_to_dock_blur.enable();
            } else {
                this._dash_to_dock_blur.disable();
            }
        });

        // TODO implement static blur for dash
        // static blur toggled on/off
        this._prefs.DASH_TO_DOCK_STATIC_BLUR.changed(() => {
            //if (this._prefs.DASH_TO_DOCK_BLUR.get())
            //    this._dash_to_dock_blur.change_blur_type();
        });

        // dash-to-dock override background toggled on/off
        this._prefs.DASH_TO_DOCK_OVERRIDE_BACKGROUND.changed(() => {
            if (this._prefs.DASH_TO_DOCK_BLUR.get())
                this._dash_to_dock_blur.update_background();
        });

        // dash-to-dock blur's overview connection toggled on/off
        this._prefs.DASH_TO_DOCK_UNBLUR_IN_OVERVIEW.changed(() => {
            if (this._prefs.DASH_TO_DOCK_BLUR.get())
                this._dash_to_dock_blur.connect_to_overview();
        });


        // ---------- APPLICATIONS ----------

        // toggled on/off
        this._prefs.APPLICATIONS_BLUR.changed(() => {
            if (this._prefs.APPLICATIONS_BLUR.get()) {
                this._applications_blur.enable();
            } else {
                this._applications_blur.disable();
            }
        });

        // application whitelist changed
        this._prefs.APPLICATIONS_WHITELIST.changed(_ => {
            if (this._prefs.APPLICATIONS_BLUR.get())
                this._applications_blur.update_all_windows();
        });


        // ---------- LOCKSCREEN ----------

        // toggled on/off
        this._prefs.LOCKSCREEN_BLUR.changed(() => {
            if (this._prefs.LOCKSCREEN_BLUR.get()) {
                this._lockscreen_blur.enable();
            } else {
                this._lockscreen_blur.disable();
            }
        });


        // ---------- WINDOW LIST ----------

        // toggled on/off
        this._prefs.WINDOW_LIST_BLUR.changed(() => {
            if (this._prefs.WINDOW_LIST_BLUR.get()) {
                this._window_list_blur.enable();
            } else {
                this._window_list_blur.disable();
            }
        });


        // ---------- HIDETOPBAR ----------

        // toggled on/off
        this._prefs.HIDETOPBAR_COMPATIBILITY.changed(() => {
            // no need to verify if it is enabled or not, it is done anyway
            this._panel_blur.connect_to_overview();
        });


        // ---------- SCREENSHOT ----------

        // toggled on/off
        this._prefs.SCREENSHOT_BLUR.changed(() => {
            if (this._prefs.SCREENSHOT_BLUR.get()) {
                this._screenshot_blur.enable();
            } else {
                this._screenshot_blur.disable();
            }
        });
    }

    /// Select the component by its name and connect it to its preferences
    /// changes for general values, sigma and brightness.
    ///
    /// Doing this in such a way is less accessible but prevents a lot of
    /// boilerplate and headaches.
    _connect_to_individual_settings(name) {
        const accessible_name = name.toUpperCase();

        // get component and preferences needed

        let customize = this._prefs[accessible_name + '_CUSTOMIZE'],
            component_sigma = this._prefs[accessible_name + '_SIGMA'],
            component_brightness = this._prefs[accessible_name + '_BRIGHTNESS'],
            component = this['_' + name + '_blur'],
            general_sigma = this._prefs.SIGMA,
            general_brightness = this._prefs.BRIGHTNESS;

        // general values switch is toggled

        customize.changed(() => {
            if (customize.get()) {
                component.set_sigma(component_sigma.get());
                component.set_brightness(component_brightness.get());
            }
            else {
                component.set_sigma(general_sigma.get());
                component.set_brightness(general_brightness.get());
            }
        });

        // sigma is changed

        component_sigma.changed(() => {
            if (customize.get())
                component.set_sigma(component_sigma.get());
            else
                component.set_sigma(general_sigma.get());
        });

        // brightness is changed

        component_brightness.changed(() => {
            if (customize.get())
                component.set_brightness(component_brightness.get());
            else
                component.set_brightness(general_brightness.get());
        });
    }

    /// Update each component's sigma value
    _update_sigma() {
        let general_sigma = this._prefs.SIGMA;

        INDEPENDENT_COMPONENTS.forEach(component => {
            this._change_sigma_for(component, general_sigma);
        });
    }

    /// Update each component's brightness value
    _update_brightness() {
        let general_brightness = this._prefs.BRIGHTNESS;

        INDEPENDENT_COMPONENTS.forEach(component => {
            this._change_brightness_for(component, general_brightness);
        });
    }

    /// Update sigma for a given component
    _change_sigma_for(name, general_sigma) {
        const accessible_name = name.toUpperCase();

        // get component and preferences needed

        let customize = this._prefs[accessible_name + '_CUSTOMIZE'],
            component_sigma = this._prefs[accessible_name + '_SIGMA'],
            component = this['_' + name + '_blur'];

        // update sigma accordingly

        if (customize.get())
            component.set_sigma(component_sigma.get());
        else
            component.set_sigma(general_sigma.get());
    }

    /// Update brightness for a given component
    _change_brightness_for(name, general_brightness) {
        const accessible_name = name.toUpperCase();

        // get component and preferences needed

        let customize = this._prefs[accessible_name + '_CUSTOMIZE'],
            component_brightness = this._prefs[accessible_name + '_BRIGHTNESS'],
            component = this['_' + name + '_blur'];

        // update brightness accordingly

        if (customize.get())
            component.set_brightness(component_brightness.get());
        else
            component.set_brightness(general_brightness.get());
    }

    _log(str) {
        if (this._prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`);
    }
}


// Called on gnome-shell loading, even if extension is deactivated
function init() {
    return new Extension();
}