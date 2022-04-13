'use strict';

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { Type } = Me.imports.conveniences.settings;

// This lists the preferences keys
var Keys = [
    { type: Type.I, name: "sigma" },
    { type: Type.D, name: "brightness" },
    { type: Type.I, name: "hacks-level" },

    { type: Type.B, name: "overview-blur" },
    { type: Type.B, name: "overview-customize" },
    { type: Type.I, name: "overview-sigma" },
    { type: Type.D, name: "overview-brightness" },
    { type: Type.I, name: "overview-style-components" },

    { type: Type.B, name: "appfolder-blur" },
    { type: Type.B, name: "appfolder-customize" },
    { type: Type.I, name: "appfolder-sigma" },
    { type: Type.D, name: "appfolder-brightness" },
    { type: Type.D, name: "appfolder-dialog-opacity" },

    { type: Type.B, name: "panel-blur" },
    { type: Type.B, name: "panel-customize" },
    { type: Type.I, name: "panel-sigma" },
    { type: Type.D, name: "panel-brightness" },
    { type: Type.B, name: "panel-static-blur" },
    { type: Type.B, name: "panel-unblur-in-overview" },

    { type: Type.B, name: "dash-to-dock-blur" },
    { type: Type.B, name: "dash-to-dock-customize" },
    { type: Type.I, name: "dash-to-dock-sigma" },
    { type: Type.D, name: "dash-to-dock-brightness" },
    { type: Type.B, name: "dash-to-dock-static-blur" },
    { type: Type.B, name: "dash-to-dock-unblur-in-overview" },
    { type: Type.B, name: "dash-to-dock-override-background" },

    { type: Type.B, name: "applications-blur" },
    { type: Type.B, name: "applications-customize" },
    { type: Type.I, name: "applications-sigma" },
    { type: Type.D, name: "applications-brightness" },
    { type: Type.S, name: "applications-whitelist" },

    { type: Type.B, name: "lockscreen-blur" },
    { type: Type.B, name: "lockscreen-customize" },
    { type: Type.I, name: "lockscreen-sigma" },
    { type: Type.D, name: "lockscreen-brightness" },

    { type: Type.B, name: "window-list-blur" },
    { type: Type.B, name: "window-list-customize" },
    { type: Type.I, name: "window-list-sigma" },
    { type: Type.D, name: "window-list-brightness" },

    { type: Type.B, name: "screenshot-blur" },
    { type: Type.B, name: "screenshot-customize" },
    { type: Type.I, name: "screenshot-sigma" },
    { type: Type.D, name: "screenshot-brightness" },

    { type: Type.B, name: "hidetopbar-compatibility" },

    { type: Type.B, name: "debug" },
];