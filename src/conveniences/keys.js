import { Type } from './settings.js';

// This lists the preferences keys
export const Keys = [
    {
        component: "general", schemas: [
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
            { type: Type.B, name: "color-and-noise" },
            { type: Type.I, name: "hacks-level" },
            { type: Type.B, name: "debug" },
        ]
    },
    {
        component: "overview", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
            { type: Type.I, name: "style-components" },
        ]
    },
    {
        component: "appfolder", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
            { type: Type.I, name: "style-dialogs" },
        ]
    },
    {
        component: "panel", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
            { type: Type.B, name: "static-blur" },
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
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
            { type: Type.B, name: "static-blur" },
            { type: Type.B, name: "unblur-in-overview" },
            { type: Type.B, name: "override-background" },
            { type: Type.I, name: "style-dash-to-dock" },
            { type: Type.I, name: "corner-radius" },
        ]
    },
    {
        component: "applications", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
            { type: Type.I, name: "opacity" },
            { type: Type.B, name: "dynamic-opacity" },
            { type: Type.B, name: "blur-on-overview" },
            { type: Type.B, name: "enable-all" },
            { type: Type.ASD, name: "whitelist" },
            { type: Type.AS, name: "blacklist" },
        ]
    },
    {
        component: "lockscreen", schemas: [
            { type: Type.B, name: "blur" },
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
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
        ]
    },
    {
        component: "screenshot", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "color" },
            { type: Type.D, name: "noise-amount" },
            { type: Type.D, name: "noise-lightness" },
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