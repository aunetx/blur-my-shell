/**
 * ClutterX11-8
 */

import * as Gjs from './Gjs';
import * as xlib from './xlib-2.0';
import * as CoglPango from './CoglPango-8';
import * as PangoCairo from './PangoCairo-1.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Cogl from './Cogl-8';
import * as Graphene from './Graphene-1.0';
import * as GL from './GL-1.0';
import * as Clutter from './Clutter-8';
import * as Json from './Json-1.0';
import * as Gio from './Gio-2.0';
import * as Atk from './Atk-1.0';

export enum FilterReturn {
    CONTINUE,
    TRANSLATE,
    REMOVE,
}
export function get_default_display(): xlib.Display
export function get_default_screen(): number
export function get_use_stereo_stage(): boolean
export function set_display(xdpy: xlib.Display): void
export function set_use_stereo_stage(use_stereo: boolean): void
export function trap_x_errors(): void
export function untrap_x_errors(): number
export interface FilterFunc {
    (xev: xlib.XEvent, cev: Clutter.Event): FilterReturn
}
export class XInputDevice {
    static name: string
}