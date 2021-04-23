/**
 * ClutterX11-8
 */

/// <reference types="node" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="CoglPango-8.d.ts" />
/// <reference path="PangoCairo-1.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Cogl-8.d.ts" />
/// <reference path="Graphene-1.0.d.ts" />
/// <reference path="GL-1.0.d.ts" />
/// <reference path="Clutter-8.d.ts" />
/// <reference path="Json-1.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />

declare namespace ClutterX11 {

export enum FilterReturn {
    CONTINUE,
    TRANSLATE,
    REMOVE,
}
export function getDefaultDisplay(): xlib.Display
export function getDefaultScreen(): number
export function getUseStereoStage(): boolean
export function setDisplay(xdpy: xlib.Display): void
export function setUseStereoStage(useStereo: boolean): void
export function trapXErrors(): void
export function untrapXErrors(): number
export interface FilterFunc {
    (xev: xlib.XEvent, cev: Clutter.Event): FilterReturn
}
export class XInputDevice {
    static name: string
}
}