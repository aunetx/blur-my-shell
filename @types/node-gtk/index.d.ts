/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="Shell-0.1.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="Meta-8.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="St-1.0.d.ts" />
/// <reference path="Gtk-4.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="xfixes-4.0.d.ts" />
/// <reference path="Gdk-4.0.d.ts" />
/// <reference path="GDesktopEnums-3.0.d.ts" />
/// <reference path="CoglPango-8.d.ts" />
/// <reference path="Cogl-8.d.ts" />
/// <reference path="Clutter-8.d.ts" />
/// <reference path="Cally-8.d.ts" />
/// <reference path="PolkitAgent-1.0.d.ts" />
/// <reference path="NM-1.0.d.ts" />
/// <reference path="Gvc-1.0.d.ts" />
/// <reference path="Gcr-3.d.ts" />
/// <reference path="ClutterX11-8.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />
/// <reference path="PangoCairo-1.0.d.ts" />
/// <reference path="Graphene-1.0.d.ts" />
/// <reference path="GL-1.0.d.ts" />
/// <reference path="Json-1.0.d.ts" />
/// <reference path="Polkit-1.0.d.ts" />
/// <reference path="Gck-1.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Gsk-4.0.d.ts" />

declare module 'node-gtk' {
    export function require(ns: string, ver?: string): any;
        export function require(ns: 'Shell'): typeof Shell;
        export function require(ns: 'Shell', ver?: '0.1'): typeof Shell;
        export function require(ns: 'GLib'): typeof GLib;
        export function require(ns: 'GLib', ver?: '2.0'): typeof GLib;
        export function require(ns: 'Gio'): typeof Gio;
        export function require(ns: 'Gio', ver?: '2.0'): typeof Gio;
        export function require(ns: 'Meta'): typeof Meta;
        export function require(ns: 'Meta', ver?: '8'): typeof Meta;
        export function require(ns: 'GObject'): typeof GObject;
        export function require(ns: 'GObject', ver?: '2.0'): typeof GObject;
        export function require(ns: 'St'): typeof St;
        export function require(ns: 'St', ver?: '1.0'): typeof St;
        export function require(ns: 'Gtk'): typeof Gtk;
        export function require(ns: 'Gtk', ver?: '4.0'): typeof Gtk;
        export function require(ns: 'xlib'): typeof xlib;
        export function require(ns: 'xlib', ver?: '2.0'): typeof xlib;
        export function require(ns: 'xfixes'): typeof xfixes;
        export function require(ns: 'xfixes', ver?: '4.0'): typeof xfixes;
        export function require(ns: 'Gdk'): typeof Gdk;
        export function require(ns: 'Gdk', ver?: '4.0'): typeof Gdk;
        export function require(ns: 'GDesktopEnums'): typeof GDesktopEnums;
        export function require(ns: 'GDesktopEnums', ver?: '3.0'): typeof GDesktopEnums;
        export function require(ns: 'CoglPango'): typeof CoglPango;
        export function require(ns: 'CoglPango', ver?: '8'): typeof CoglPango;
        export function require(ns: 'Cogl'): typeof Cogl;
        export function require(ns: 'Cogl', ver?: '8'): typeof Cogl;
        export function require(ns: 'Clutter'): typeof Clutter;
        export function require(ns: 'Clutter', ver?: '8'): typeof Clutter;
        export function require(ns: 'Cally'): typeof Cally;
        export function require(ns: 'Cally', ver?: '8'): typeof Cally;
        export function require(ns: 'PolkitAgent'): typeof PolkitAgent;
        export function require(ns: 'PolkitAgent', ver?: '1.0'): typeof PolkitAgent;
        export function require(ns: 'NM'): typeof NM;
        export function require(ns: 'NM', ver?: '1.0'): typeof NM;
        export function require(ns: 'Gvc'): typeof Gvc;
        export function require(ns: 'Gvc', ver?: '1.0'): typeof Gvc;
        export function require(ns: 'Gcr'): typeof Gcr;
        export function require(ns: 'Gcr', ver?: '3'): typeof Gcr;
        export function require(ns: 'ClutterX11'): typeof ClutterX11;
        export function require(ns: 'ClutterX11', ver?: '8'): typeof ClutterX11;
        export function require(ns: 'cairo'): typeof cairo;
        export function require(ns: 'cairo', ver?: '1.0'): typeof cairo;
        export function require(ns: 'Pango'): typeof Pango;
        export function require(ns: 'Pango', ver?: '1.0'): typeof Pango;
        export function require(ns: 'GdkPixbuf'): typeof GdkPixbuf;
        export function require(ns: 'GdkPixbuf', ver?: '2.0'): typeof GdkPixbuf;
        export function require(ns: 'Atk'): typeof Atk;
        export function require(ns: 'Atk', ver?: '1.0'): typeof Atk;
        export function require(ns: 'PangoCairo'): typeof PangoCairo;
        export function require(ns: 'PangoCairo', ver?: '1.0'): typeof PangoCairo;
        export function require(ns: 'Graphene'): typeof Graphene;
        export function require(ns: 'Graphene', ver?: '1.0'): typeof Graphene;
        export function require(ns: 'GL'): typeof GL;
        export function require(ns: 'GL', ver?: '1.0'): typeof GL;
        export function require(ns: 'Json'): typeof Json;
        export function require(ns: 'Json', ver?: '1.0'): typeof Json;
        export function require(ns: 'Polkit'): typeof Polkit;
        export function require(ns: 'Polkit', ver?: '1.0'): typeof Polkit;
        export function require(ns: 'Gck'): typeof Gck;
        export function require(ns: 'Gck', ver?: '1'): typeof Gck;
        export function require(ns: 'HarfBuzz'): typeof HarfBuzz;
        export function require(ns: 'HarfBuzz', ver?: '0.0'): typeof HarfBuzz;
        export function require(ns: 'GModule'): typeof GModule;
        export function require(ns: 'GModule', ver?: '2.0'): typeof GModule;
        export function require(ns: 'Gsk'): typeof Gsk;
        export function require(ns: 'Gsk', ver?: '4.0'): typeof Gsk;
    export function startLoop(): void;
}
