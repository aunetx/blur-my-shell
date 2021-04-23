/**
 * CoglPango-8
 */

/// <reference types="node" />
/// <reference path="PangoCairo-1.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Cogl-8.d.ts" />
/// <reference path="Graphene-1.0.d.ts" />
/// <reference path="GL-1.0.d.ts" />

declare namespace CoglPango {

export function ensureGlyphCacheForLayout(layout: Pango.Layout): void
export function fontMapClearGlyphCache(fontMap: FontMap): void
export function fontMapCreateContext(fontMap: FontMap): Pango.Context
export function fontMapGetRenderer(fontMap: FontMap): Pango.Renderer
export function fontMapGetUseMipmapping(fontMap: FontMap): boolean
export function fontMapNew(): Pango.FontMap
export function fontMapSetResolution(fontMap: FontMap, dpi: number): void
export function fontMapSetUseMipmapping(fontMap: FontMap, value: boolean): void
export interface Renderer_ConstructProps extends Pango.Renderer_ConstructProps {
    context?: object
}
export class Renderer {
    /* Fields of Pango.Renderer */
    matrix: Pango.Matrix
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Pango.Renderer */
    activate(): void
    deactivate(): void
    drawErrorUnderline(x: number, y: number, width: number, height: number): void
    drawGlyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    drawGlyphItem(text: string | null, glyphItem: Pango.GlyphItem, x: number, y: number): void
    drawGlyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    drawLayout(layout: Pango.Layout, x: number, y: number): void
    drawLayoutLine(line: Pango.LayoutLine, x: number, y: number): void
    drawRectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    drawTrapezoid(part: Pango.RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    getAlpha(part: Pango.RenderPart): number
    getColor(part: Pango.RenderPart): Pango.Color | null
    getLayout(): Pango.Layout | null
    getLayoutLine(): Pango.LayoutLine | null
    getMatrix(): Pango.Matrix | null
    partChanged(part: Pango.RenderPart): void
    setAlpha(part: Pango.RenderPart, alpha: number): void
    setColor(part: Pango.RenderPart, color?: Pango.Color | null): void
    setMatrix(matrix?: Pango.Matrix | null): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Pango.Renderer */
    vfuncBegin(): void
    vfuncDrawErrorUnderline(x: number, y: number, width: number, height: number): void
    vfuncDrawGlyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    vfuncDrawGlyphItem(text: string | null, glyphItem: Pango.GlyphItem, x: number, y: number): void
    vfuncDrawGlyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    vfuncDrawRectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    vfuncDrawShape(attr: Pango.AttrShape, x: number, y: number): void
    vfuncDrawTrapezoid(part: Pango.RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    vfuncEnd(): void
    vfuncPartChanged(part: Pango.RenderPart): void
    vfuncPrepareRun(run: Pango.LayoutRun): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class RendererClass {
    static name: string
}
type FontMap = PangoCairo.FontMap
}