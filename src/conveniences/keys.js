'use strict';

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { Type } = Me.imports.conveniences.settings;

// This lists the preferences keys
var Keys = [
    {
        component: "general", schemas: [
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
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
            { type: Type.I, name: "style-components" },
        ]
    },
    {
        component: "appfolder", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.D, name: "dialog-opacity" },
        ]
    },
    {
        component: "panel", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.C, name: "background-color" },
            { type: Type.B, name: "static-blur" },
            { type: Type.B, name: "unblur-in-overview" },
        ]
    },
    {
        component: "dash-to-dock", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.B, name: "static-blur" },
            { type: Type.B, name: "unblur-in-overview" },
            { type: Type.B, name: "override-background" },
        ]
    },
    {
        component: "applications", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
            { type: Type.S, name: "whitelist" },
        ]
    },
    {
        component: "lockscreen", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
        ]
    },
    {
        component: "window-list", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
        ]
    },
    {
        component: "screenshot", schemas: [
            { type: Type.B, name: "blur" },
            { type: Type.B, name: "customize" },
            { type: Type.I, name: "sigma" },
            { type: Type.D, name: "brightness" },
        ]
    },
    {
        component: "hidetopbar", schemas: [
            { type: Type.B, name: "compatibility" },
        ]
    },
];