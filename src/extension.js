'use strict';

const { St, Shell, Gio, Gtk, Meta, Clutter } = imports.gi;
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
        // add the extension to global to make it accessible to other extensions
        // create it first as it is very useful when debugging crashes

        global.blur_my_shell = this;

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

        // maybe disable clipped redraw

        this._update_clipped_redraws();

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
            if (this._prefs.overview.BLUR && !this._overview_blur.enabled)
                this._overview_blur.enable();
        } catch (e) { }
        try {
            if (this._prefs.dash_to_dock.BLUR
                && !this._dash_to_dock_blur.enabled)
                this._dash_to_dock_blur.enable();
        } catch (e) { }
        try {
            if (this._prefs.panel.BLUR && !this._panel_blur.enabled)
                this._panel_blur.enable();
        } catch (e) { }
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

        // remove the clipped redraws flag

        this._reenable_clipped_redraws();

        // remove the extension from GJS's global

        delete global.blur_my_shell;

        this._log("extension disabled.");

        this._prefs = null;
    }

    /// Restart the extension.
    _restart() {
        this._log("restarting...");

        this.disable();
        this.enable();

        this._log("restarted.");
    }

    /// Add or remove the clutter debug flag to disable clipped redraws.
    /// This will entirely fix the blur effect, but should not be used except if
    /// the user really needs it, as clipped redraws are a huge performance
    /// boost for the compositor.
    _update_clipped_redraws() {
        if (this._prefs.HACKS_LEVEL === 3)
            this._disable_clipped_redraws();
        else
            this._reenable_clipped_redraws();
    }

    /// Add the Clutter debug flag.
    _disable_clipped_redraws() {
        Meta.add_clutter_debug_flags(
            null, Clutter.DrawDebugFlag.DISABLE_CLIPPED_REDRAWS, null
        );
    }

    /// Remove the Clutter debug flag.
    _reenable_clipped_redraws() {
        Meta.remove_clutter_debug_flags(
            null, Clutter.DrawDebugFlag.DISABLE_CLIPPED_REDRAWS, null
        );
    }

    /// Enables every component needed, should be called when the shell is
    /// entirely loaded as the `enable` methods interact with it.
    _enable_components() {
        // enable each component if needed, and if it is not already enabled

        if (this._prefs.panel.BLUR && !this._panel_blur.enabled)
            this._panel_blur.enable();

        if (this._prefs.dash_to_dock.BLUR && !this._dash_to_dock_blur.enabled)
            this._dash_to_dock_blur.enable();

        if (this._prefs.overview.BLUR && !this._overview_blur.enabled)
            this._overview_blur.enable();

        if (this._prefs.lockscreen.BLUR)
            this._lockscreen_blur.enable();

        if (this._prefs.appfolder.BLUR)
            this._appfolder_blur.enable();

        if (this._prefs.applications.BLUR)
            this._applications_blur.enable();

        if (this._prefs.window_list.BLUR)
            this._window_list_blur.enable();

        if (this._prefs.screenshot.BLUR)
            this._screenshot_blur.enable();

        this._log("all components enabled.");
    }

    /// Updates needed things in each component when a preference changed
    _connect_to_settings() {

        // global blur values changed, update everybody

        this._prefs.SIGMA_changed(() => {
            this._update_sigma();
        });
        this._prefs.BRIGHTNESS_changed(() => {
            this._update_brightness();
        });
        this._prefs.COLOR_changed(() => {
            this._update_color();
        });
        this._prefs.NOISE_AMOUNT_changed(() => {
            this._update_noise_amount();
        });
        this._prefs.NOISE_LIGHTNESS_changed(() => {
            this._update_noise_lightness();
        });
        this._prefs.COLOR_AND_NOISE_changed(() => {
            // both updating noise amount and color calls `update_enabled` on
            // each color and noise effects
            this._update_noise_amount();
            this._update_color();
        });

        // restart the extension when hacks level is changed, easier than
        // restarting individual components and should not happen often either
        this._prefs.HACKS_LEVEL_changed(_ => this._restart());

        // connect each component to use the proper sigma/brightness/color

        INDEPENDENT_COMPONENTS.forEach(component => {
            this._connect_to_individual_settings(component);
        });

        // other component's preferences changed

        // ---------- OVERVIEW ----------

        // toggled on/off
        this._prefs.overview.BLUR_changed(() => {
            if (this._prefs.overview.BLUR) {
                this._overview_blur.enable();
            } else {
                this._overview_blur.disable();
            }
        });

        // overview components style changed
        this._prefs.overview.STYLE_COMPONENTS_changed(() => {
            if (this._prefs.overview.BLUR) {
                this._overview_blur.update_components_classname();
            }
        });


        // ---------- APPFOLDER ----------

        // toggled on/off
        this._prefs.appfolder.BLUR_changed(() => {
            if (this._prefs.appfolder.BLUR) {
                this._appfolder_blur.enable();
            } else {
                this._appfolder_blur.disable();
            }
        });

        // appfolder dialogs style changed
        this._prefs.appfolder.STYLE_DIALOGS_changed(() => {
            if (this._prefs.appfolder.BLUR)
                this._appfolder_blur.blur_appfolders();
        });


        // ---------- PANEL ----------

        // toggled on/off
        this._prefs.panel.BLUR_changed(() => {
            if (this._prefs.panel.BLUR) {
                this._panel_blur.enable();
            } else {
                this._panel_blur.disable();
            }
        });

        this._prefs.COLOR_AND_NOISE_changed(() => {
            // permits making sure that the blur is not washed out when disabling
            // the other effects
            if (this._prefs.panel.BLUR)
                this._panel_blur.invalidate_all_blur();
        });

        // static blur toggled on/off
        this._prefs.panel.STATIC_BLUR_changed(() => {
            if (this._prefs.panel.BLUR)
                this._panel_blur.update_all_blur_type();
        });

        // panel blur's overview connection toggled on/off
        this._prefs.panel.UNBLUR_IN_OVERVIEW_changed(() => {
            this._panel_blur.connect_to_windows_and_overview();
        });

        // panel override background toggled on/off
        this._prefs.panel.OVERRIDE_BACKGROUND_changed(() => {
            if (this._prefs.panel.BLUR)
                this._panel_blur.connect_to_windows_and_overview();
        });

        // panel style changed
        this._prefs.panel.STYLE_PANEL_changed(() => {
            if (this._prefs.panel.BLUR)
                this._panel_blur.connect_to_windows_and_overview();
        });

        // panel background's dynamic overriding toggled on/off
        this._prefs.panel.OVERRIDE_BACKGROUND_DYNAMICALLY_changed(() => {
            if (this._prefs.panel.BLUR)
                this._panel_blur.connect_to_windows_and_overview();
        });


        // ---------- DASH TO DOCK ----------

        // toggled on/off
        this._prefs.dash_to_dock.BLUR_changed(() => {
            if (this._prefs.dash_to_dock.BLUR) {
                this._dash_to_dock_blur.enable();
            } else {
                this._dash_to_dock_blur.disable();
            }
        });

        // TODO implement static blur for dash
        // static blur toggled on/off
        this._prefs.dash_to_dock.STATIC_BLUR_changed(() => {
            //if (this._prefs.dash_to_dock.BLUR)
            //    this._dash_to_dock_blur.change_blur_type();
        });

        // dash-to-dock override background toggled on/off
        this._prefs.dash_to_dock.OVERRIDE_BACKGROUND_changed(() => {
            if (this._prefs.dash_to_dock.BLUR)
                this._dash_to_dock_blur.update_background();
        });

        // dash-to-dock style changed
        this._prefs.dash_to_dock.STYLE_DASH_TO_DOCK_changed(() => {
            if (this._prefs.dash_to_dock.BLUR)
                this._dash_to_dock_blur.update_background();
        });

        // dash-to-dock blur's overview connection toggled on/off
        this._prefs.dash_to_dock.UNBLUR_IN_OVERVIEW_changed(() => {
            if (this._prefs.dash_to_dock.BLUR)
                this._dash_to_dock_blur.connect_to_overview();
        });


        // ---------- APPLICATIONS ----------

        // toggled on/off
        this._prefs.applications.BLUR_changed(() => {
            if (this._prefs.applications.BLUR) {
                this._applications_blur.enable();
            } else {
                this._applications_blur.disable();
            }
        });

        // application opacity changed
        this._prefs.applications.OPACITY_changed(_ => {
            if (this._prefs.applications.BLUR)
                this._applications_blur.set_opacity(
                    this._prefs.applications.OPACITY
                );
        });

        // application blur-on-overview changed
        this._prefs.applications.BLUR_ON_OVERVIEW_changed(_ => {
            if (this._prefs.applications.BLUR)
                this._applications_blur.connect_to_overview();
        });

        // application enable-all changed
        this._prefs.applications.ENABLE_ALL_changed(_ => {
            if (this._prefs.applications.BLUR)
                this._applications_blur.update_all_windows();
        });

        // application whitelist changed
        this._prefs.applications.WHITELIST_changed(_ => {
            if (
                this._prefs.applications.BLUR
                && !this._prefs.applications.ENABLE_ALL
            )
                this._applications_blur.update_all_windows();
        });

        // application blacklist changed
        this._prefs.applications.BLACKLIST_changed(_ => {
            if (
                this._prefs.applications.BLUR
                && this._prefs.applications.ENABLE_ALL
            )
                this._applications_blur.update_all_windows();
        });


        // ---------- LOCKSCREEN ----------

        // toggled on/off
        this._prefs.lockscreen.BLUR_changed(() => {
            if (this._prefs.lockscreen.BLUR) {
                this._lockscreen_blur.enable();
            } else {
                this._lockscreen_blur.disable();
            }
        });


        // ---------- WINDOW LIST ----------

        // toggled on/off
        this._prefs.window_list.BLUR_changed(() => {
            if (this._prefs.window_list.BLUR) {
                this._window_list_blur.enable();
            } else {
                this._window_list_blur.disable();
            }
        });


        // ---------- HIDETOPBAR ----------

        // toggled on/off
        this._prefs.hidetopbar.COMPATIBILITY_changed(() => {
            // no need to verify if it is enabled or not, it is done anyway
            this._panel_blur.connect_to_windows_and_overview();
        });


        // ---------- SCREENSHOT ----------

        // toggled on/off
        this._prefs.screenshot.BLUR_changed(() => {
            if (this._prefs.screenshot.BLUR) {
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
        // get component and preferences needed
        let component = this['_' + name + '_blur'];
        let component_prefs = this._prefs[name];

        // general values switch is toggled
        component_prefs.CUSTOMIZE_changed(() => {
            if (component_prefs.CUSTOMIZE) {
                component.set_sigma(component_prefs.SIGMA);
                component.set_brightness(component_prefs.BRIGHTNESS);
                component.set_color(component_prefs.COLOR);
                component.set_noise_amount(component_prefs.NOISE_AMOUNT);
                component.set_noise_lightness(component_prefs.NOISE_LIGHTNESS);
            }
            else {
                component.set_sigma(this._prefs.SIGMA);
                component.set_brightness(this._prefs.BRIGHTNESS);
                component.set_color(this._prefs.COLOR);
                component.set_noise_amount(this._prefs.NOISE_AMOUNT);
                component.set_noise_lightness(this._prefs.NOISE_LIGHTNESS);
            }
        });

        // sigma is changed
        component_prefs.SIGMA_changed(() => {
            if (component_prefs.CUSTOMIZE)
                component.set_sigma(component_prefs.SIGMA);
            else
                component.set_sigma(this._prefs.SIGMA);
        });

        // brightness is changed
        component_prefs.BRIGHTNESS_changed(() => {
            if (component_prefs.CUSTOMIZE)
                component.set_brightness(component_prefs.BRIGHTNESS);
            else
                component.set_brightness(this._prefs.BRIGHTNESS);
        });

        // color is changed
        component_prefs.COLOR_changed(() => {
            if (component_prefs.CUSTOMIZE)
                component.set_color(component_prefs.COLOR);
            else
                component.set_color(this._prefs.COLOR);
        });

        // noise amount is changed
        component_prefs.NOISE_AMOUNT_changed(() => {
            if (component_prefs.CUSTOMIZE)
                component.set_noise_amount(component_prefs.NOISE_AMOUNT);
            else
                component.set_noise_amount(this._prefs.NOISE_AMOUNT);
        });

        // noise lightness is changed
        component_prefs.NOISE_LIGHTNESS_changed(() => {
            if (component_prefs.CUSTOMIZE)
                component.set_noise_lightness(component_prefs.NOISE_LIGHTNESS);
            else
                component.set_noise_lightness(this._prefs.NOISE_LIGHTNESS);
        });
    }

    /// Update each component's sigma value
    _update_sigma() {
        INDEPENDENT_COMPONENTS.forEach(name => {
            // get component and preferences needed
            let component = this['_' + name + '_blur'];
            let component_prefs = this._prefs[name];

            // update sigma accordingly
            if (component_prefs.CUSTOMIZE) {
                component.set_sigma(component_prefs.SIGMA);
            }
            else {
                component.set_sigma(this._prefs.SIGMA);
            }
        });
    }

    /// Update each component's brightness value
    _update_brightness() {
        INDEPENDENT_COMPONENTS.forEach(name => {
            // get component and preferences needed
            let component = this['_' + name + '_blur'];
            let component_prefs = this._prefs[name];

            // update brightness accordingly
            if (component_prefs.CUSTOMIZE)
                component.set_brightness(component_prefs.BRIGHTNESS);
            else
                component.set_brightness(this._prefs.BRIGHTNESS);
        });
    }

    /// Update each component's color value
    _update_color() {
        INDEPENDENT_COMPONENTS.forEach(name => {
            // get component and preferences needed
            let component = this['_' + name + '_blur'];
            let component_prefs = this._prefs[name];

            // update color accordingly
            if (component_prefs.CUSTOMIZE)
                component.set_color(component_prefs.COLOR);
            else
                component.set_color(this._prefs.COLOR);
        });
    }

    /// Update each component's noise amount value
    _update_noise_amount() {
        INDEPENDENT_COMPONENTS.forEach(name => {
            // get component and preferences needed
            let component = this['_' + name + '_blur'];
            let component_prefs = this._prefs[name];

            // update color accordingly
            if (component_prefs.CUSTOMIZE)
                component.set_noise_amount(component_prefs.NOISE_AMOUNT);
            else
                component.set_noise_amount(this._prefs.NOISE_AMOUNT);
        });
    }

    /// Update each component's noise lightness value
    _update_noise_lightness() {
        INDEPENDENT_COMPONENTS.forEach(name => {
            // get component and preferences needed
            let component = this['_' + name + '_blur'];
            let component_prefs = this._prefs[name];

            // update color accordingly
            if (component_prefs.CUSTOMIZE)
                component.set_noise_lightness(component_prefs.NOISE_LIGHTNESS);
            else
                component.set_noise_lightness(this._prefs.NOISE_LIGHTNESS);
        });
    }

    _log(str) {
        if (this._prefs.DEBUG)
            log(`[Blur my Shell > extension]    ${str}`);
    }
}


// Called on gnome-shell loading, even if extension is deactivated
function init() {
    return new Extension();
}