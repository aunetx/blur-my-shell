/**
 * xlib-2.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />

declare namespace xlib {

export function openDisplay(): void
export class Display {
    static name: string
}
export class Screen {
    static name: string
}
export class Visual {
    static name: string
}
export class XConfigureEvent {
    static name: string
}
export class XImage {
    static name: string
}
export class XFontStruct {
    static name: string
}
export class XTrapezoid {
    static name: string
}
export class XVisualInfo {
    static name: string
}
export class XWindowAttributes {
    static name: string
}
export class XEvent {
    static name: string
}
type Atom = number
type Colormap = number
type Cursor = number
type Drawable = number
type GC = object
type KeyCode = number
type KeySym = number
type Picture = number
type Time = number
type VisualID = number
type Window = number
type XID = number
type Pixmap = number
}