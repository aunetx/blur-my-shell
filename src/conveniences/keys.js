import { Type } from './settings.js';

// This lists the preferences keys
export const KEYS = [
    {
        component: "general", schemas: [
            { type: Type.PIPELINES, name: "pipelines" },
            { type: Type.B, name: "disable-clipped-redraws" },
            { type: Type.B, name: "debug" },
            { type: Type.B, name: "profile-static-blur" },
            { type: Type.S, name: "profile-pipeline" },
            { type: Type.B, name: "profile-override-background" },
            { type: Type.I, name: "profile-background-style" },
        ]
    },
    {
        component: "overview", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.S, name: "pipeline" },
            { type: Type.I, name: "style-components" },
        ]
    },
    {
        component: "appfolder", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.I, name: "style-dialogs" },
        ]
    },
    {
        component: "panel", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "use-global" },
            { type: Type.B, name: "static-blur" },
            { type: Type.S, name: "pipeline" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.I, name: "corner-radius" },
            { type: Type.B, name: "unblur-in-overview" },
            { type: Type.B, name: "force-light-text" },
            { type: Type.B, name: "override-background" },
            { type: Type.I, name: "style-panel" },
            { type: Type.B, name: "override-background-dynamically" },
        ]
    },
    {
        component: "dash-to-dock", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "use-global" },
            { type: Type.B, name: "static-blur" },
            { type: Type.S, name: "pipeline" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.I, name: "corner-radius" },
            { type: Type.B, name: "unblur-in-overview" },
            { type: Type.B, name: "override-background" },
            { type: Type.I, name: "style-dash-to-dock" },
        ]
    },
    {
        component: "applications", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "use-global" },
            { type: Type.B, name: "static-blur" },
            { type: Type.S, name: "pipeline" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.I, name: "corner-radius" },
            { type: Type.B, name: "corner-when-maximized" },
            { type: Type.I, name: "opacity" },
            { type: Type.B, name: "dynamic-opacity" },
            { type: Type.B, name: "blur-on-overview" },
            { type: Type.B, name: "enable-all" },
            { type: Type.AS, name: "whitelist" },
            { type: Type.AS, name: "blacklist" },
        ]
    },
    {
        component: "lockscreen", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.S, name: "pipeline" },
        ]
    },
    {
        component: "window-list", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "use-global" },
            { type: Type.S, name: "pipeline" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.I, name: "corner-radius" },
        ]
    },
    {
        component: "coverflow-alt-tab", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.S, name: "pipeline" },
        ]
    },
    {
        component: "screenshot", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.S, name: "pipeline" },
        ]
    },
    {
        component: "popup", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "use-global" },
            { type: Type.B, name: "static-blur" },
            { type: Type.S, name: "pipeline" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.I, name: "corner-radius" },
            { type: Type.I, name: "menu-corner-radius" },
            { type: Type.I, name: "quick-settings-corner-radius" },
            { type: Type.I, name: "notification-corner-radius" },
            { type: Type.I, name: "osd-corner-radius" },
            { type: Type.I, name: "dialog-corner-radius" },
            { type: Type.B, name: "override-background" },
            { type: Type.I, name: "style-popup" },
        ]
    },
    {
        component: "hidetopbar", schemas: [
            { type: Type.B, name: "compatibility" },
        ]
    },
    {
        component: "dash-to-panel", schemas: [
            { type: Type.B, name: "blur-original-panel" },
        ]
    },
];


// This lists the deprecated preferences keys
export const DEPRECATED_KEYS = [
    {
        component: "general", schemas: [
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.I, name: "corner-radius" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
            { type: Type.B, name: "color-and-noise" },
        ]
    },
    {
        component: "overview", schemas: [
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
        ]
    },
    {
        component: "appfolder", schemas: [
            { type: Type.B, name: "customize" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
        ]
    },
    {
        component: "panel", schemas: [
            { type: Type.B, name: "customize" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
        ]
    },
    {
        component: "dash-to-dock", schemas: [
            { type: Type.B, name: "customize" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
            { type: Type.I, name: "corner-radius" },
        ]
    },
    {
        component: "applications", schemas: [
            { type: Type.B, name: "customize" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
        ]
    },
    {
        component: "lockscreen", schemas: [
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
        ]
    },
    {
        component: "window-list", schemas: [
            { type: Type.B, name: "customize" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
        ]
    },
    {
        component: "screenshot", schemas: [
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
        ]
    },
];
