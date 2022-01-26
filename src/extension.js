'use strict';

const { St, Shell, Gio, Gtk } = imports.gi;
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
const WindowList = Me.imports.window_list;
const Applications = Me.imports.applications;

// This lists the components that need to be connected in order to either use
// general sigma/brightness or their own.
const INDEPENDENT_COMPONENTS = [
    "overview", "appfolder", "panel", "dash_to_dock", "applications",
    "lockscreen", "window_list"
];

/// The main extension class, created when the GNOME Shell is loaded.
class Extension {
    constructor() { }

    /// Enables the extension
    enable() {
        // load our resources

        this.resources = Gio.Resource.load(
            `${Me.path}/blur-my-shell.gresource`
        );
        Gio.resources_register(this.resources);

        // create a Prefs instance, to manage extension's preferences
        // it needs to be loaded before logging, as it checks for DEBUG

        this._prefs = new Settings.Prefs;

        this._log("enabling extension...");

        // create an instance of each component

        this._connections = [];

        let init = _ => {
            // create a Connections instance, to manage signals
            let connection = new Connections.Connections;

            // store it to keeps track of them globally
            this._connections.push(connection);

            return [connection, this._prefs];
        };

        this._panel_blur = new Panel.PanelBlur(...init());
        this._dash_blur = new Dash.DashBlur(...init());
        this._dash_to_dock_blur = new DashToDock.DashBlur(...init());
        this._overview_blur = new Overview.OverviewBlur(...init());
        this._lockscreen_blur = new Lockscreen.LockscreenBlur(...init());
        this._appfolder_blur = new AppFolders.AppFoldersBlur(...init());
        this._window_list_blur = new WindowList.WindowListBlur(...init());
        this._applications_blur = new Applications.ApplicationsBlur(...init());

        // connect each component to preferences change

        this._connect_to_settings();

        // enable each component if needed

        if (this._prefs.PANEL_BLUR.get())
            this._panel_blur.enable();

        if (this._prefs.DASH_BLUR.get()) {
            this._dash_blur.enable();
            this._dash_to_dock_blur.enable();
        }

        if (this._prefs.OVERVIEW_BLUR.get())
            this._overview_blur.enable();

        if (this._prefs.LOCKSCREEN_BLUR.get())
            this._lockscreen_blur.enable();

        if (this._prefs.APPFOLDER_BLUR.get())
            this._appfolder_blur.enable();

        if (this._prefs.APPLICATIONS_BLUR.get())
            this._applications_blur.enable();

        if (this._prefs.WINDOW_LIST_BLUR.get())
            this._window_list_blur.enable();

        // update the sigma and brightness values of each component

        this._update_sigma();
        this._update_brightness();

        // add the extension to global to make it accessible to other extensions

        global.blur_my_shell = this;

        this._log("extension enabled.");
    }

    /// Disables the extension
    disable() {
        this._log("disabling extension...");

        // unregister our resources
        Gio.resources_unregister(this.resources);

        // disable every component

        this._panel_blur.disable();
        this._dash_blur.disable();
        this._dash_to_dock_blur.disable();
        this._overview_blur.disable();
        this._lockscreen_blur.disable();
        this._appfolder_blur.disable();
        this._window_list_blur.disable();
        this._applications_blur.disable();

        // untrack them

        this._panel_blur = null;
        this._dash_blur = null;
        this._dash_to_dock_blur = null;
        this._overview_blur = null;
        this._lockscreen_blur = null;
        this._appfolder_blur = null;
        this._window_list_blur = null;
        this._applications_blur = null;

        // make sure no settings change can re-enable them

        this._prefs._disconnect_all_settings();

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


        // ---------- APPFOLDER ----------

        // toggled on/off
        this._prefs.APPFOLDER_BLUR.changed(() => {
            if (this._prefs.APPFOLDER_BLUR.get()) {
                this._appfolder_blur.enable();
            } else {
                this._appfolder_blur.disable();
            }
        });

        // TODO implement icon opacity
        // changed icon opacity
        this._prefs.APPFOLDER_ICON_OPACITY.changed(() => {
            this._appfolder_blur.blur_appfolders();
        });

        // changed dialog opacity
        this._prefs.APPFOLDER_DIALOG_OPACITY.changed(() => {
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
            this._panel_blur.change_blur_type();
        });


        // ---------- DASH ----------

        // toggled on/off
        // this enables both dash blur and dash-to-dock blur
        this._prefs.DASH_BLUR.changed(() => {
            if (this._prefs.DASH_BLUR.get()) {
                this._dash_blur.enable();
                this._dash_to_dock_blur.enable();
            } else {
                this._dash_blur.disable();
                this._dash_to_dock_blur.disable();
            }
        });

        // TODO implement static blur for dash
        // static blur toggled on/off
        this._prefs.DASH_TO_DOCK_STATIC_BLUR.changed(() => {
            //this._dash_to_dock_blur.change_blur_type();
        });

        // TODO implement dash opacity in overview for dash-to-dock
        // dash opacity changed
        this._prefs.DASH_OPACITY.changed(() => {
            this._dash_blur.update();
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
        this._prefs.HIDETOPBAR_BLUR.changed(() => {
            // no need to verify if it is enabled or not, it is done anyway
            this._panel_blur.connect_to_overview();
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

        let general_values = this._prefs[accessible_name + '_GENERAL_VALUES'],
            component_sigma = this._prefs[accessible_name + '_SIGMA'],
            component_brightness = this._prefs[accessible_name + '_BRIGHTNESS'],
            component = this['_' + name + '_blur'],
            general_sigma = this._prefs.SIGMA,
            general_brightness = this._prefs.BRIGHTNESS;

        // general values switch is toggled

        general_values.changed(() => {
            if (general_values.get()) {
                component.set_sigma(general_sigma.get());
                component.set_brightness(general_brightness.get());
            }
            else {
                component.set_sigma(component_sigma.get());
                component.set_brightness(component_brightness.get());
            }
        });

        // sigma is changed

        component_sigma.changed(() => {
            if (general_values.get())
                component.set_sigma(general_sigma.get());
            else
                component.set_sigma(component_sigma.get());
        });

        // brightness is changed

        component_brightness.changed(() => {
            if (general_values.get())
                component.set_brightness(general_brightness.get());
            else
                component.set_brightness(component_brightness.get());
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

        let general_values = this._prefs[accessible_name + '_GENERAL_VALUES'],
            component_sigma = this._prefs[accessible_name + '_SIGMA'],
            component = this['_' + name + '_blur'];

        // update sigma accordingly

        if (general_values.get())
            component.set_sigma(general_sigma.get());
        else
            component.set_sigma(component_sigma.get());
    }

    /// Update brightness for a given component
    _change_brightness_for(name, general_brightness) {
        const accessible_name = name.toUpperCase();

        // get component and preferences needed

        let general_values = this._prefs[accessible_name + '_GENERAL_VALUES'],
            component_brightness = this._prefs[accessible_name + '_BRIGHTNESS'],
            component = this['_' + name + '_blur'];

        // update brightness accordingly

        if (general_values.get())
            component.set_brightness(general_brightness.get());
        else
            component.set_brightness(component_brightness.get());
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