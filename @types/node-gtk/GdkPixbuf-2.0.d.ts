/**
 * GdkPixbuf-2.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace GdkPixbuf {

export enum Colorspace {
    RGB,
}
export enum InterpType {
    NEAREST,
    TILES,
    BILINEAR,
    HYPER,
}
export enum PixbufAlphaMode {
    BILEVEL,
    FULL,
}
export enum PixbufError {
    CORRUPT_IMAGE,
    INSUFFICIENT_MEMORY,
    BAD_OPTION,
    UNKNOWN_TYPE,
    UNSUPPORTED_OPERATION,
    FAILED,
    INCOMPLETE_ANIMATION,
}
export enum PixbufRotation {
    NONE,
    COUNTERCLOCKWISE,
    UPSIDEDOWN,
    CLOCKWISE,
}
export enum PixbufFormatFlags {
    WRITABLE,
    SCALABLE,
    THREADSAFE,
}
export const PIXBUF_MAJOR: number
export const PIXBUF_MICRO: number
export const PIXBUF_MINOR: number
export const PIXBUF_VERSION: string
export function pixbufErrorQuark(): GLib.Quark
export interface PixbufDestroyNotify {
    (pixels: any): void
}
export interface PixbufModuleFillInfoFunc {
    (info: PixbufFormat): void
}
export interface PixbufModuleFillVtableFunc {
    (module: PixbufModule): void
}
export interface PixbufModulePreparedFunc {
    (pixbuf: Pixbuf, anim: PixbufAnimation): void
}
export interface PixbufModuleSizeFunc {
    (width: number, height: number): void
}
export interface PixbufModuleUpdatedFunc {
    (pixbuf: Pixbuf, x: number, y: number, width: number, height: number): void
}
export interface PixbufSaveFunc {
    (buf: any): boolean
}
export interface Pixbuf_ConstructProps extends GObject.Object_ConstructProps {
    bitsPerSample?: number
    colorspace?: Colorspace
    hasAlpha?: boolean
    height?: number
    nChannels?: number
    pixelBytes?: any
    pixels?: object
    rowstride?: number
    width?: number
}
export class Pixbuf {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf.Pixbuf */
    addAlpha(substituteColor: boolean, r: number, g: number, b: number): Pixbuf
    applyEmbeddedOrientation(): Pixbuf | null
    composite(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType, overallAlpha: number): void
    compositeColor(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType, overallAlpha: number, checkX: number, checkY: number, checkSize: number, color1: number, color2: number): void
    compositeColorSimple(destWidth: number, destHeight: number, interpType: InterpType, overallAlpha: number, checkSize: number, color1: number, color2: number): Pixbuf | null
    copy(): Pixbuf | null
    copyArea(srcX: number, srcY: number, width: number, height: number, destPixbuf: Pixbuf, destX: number, destY: number): void
    copyOptions(destPixbuf: Pixbuf): boolean
    fill(pixel: number): void
    flip(horizontal: boolean): Pixbuf | null
    getBitsPerSample(): number
    getByteLength(): number
    getColorspace(): Colorspace
    getHasAlpha(): boolean
    getHeight(): number
    getNChannels(): number
    getOption(key: string): string | null
    getOptions(): GLib.HashTable
    getPixels(): any
    getRowstride(): number
    getWidth(): number
    newSubpixbuf(srcX: number, srcY: number, width: number, height: number): Pixbuf
    readPixelBytes(): any
    readPixels(): number
    removeOption(key: string): boolean
    rotateSimple(angle: PixbufRotation): Pixbuf | null
    saturateAndPixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void
    saveToBufferv(type: string, optionKeys?: string[] | null, optionValues?: string[] | null): [ /* returnType */ boolean, /* buffer */ any ]
    saveToCallbackv(saveFunc: PixbufSaveFunc, type: string, optionKeys?: string[] | null, optionValues?: string[] | null): boolean
    saveToStreamv(stream: Gio.OutputStream, type: string, optionKeys?: string[] | null, optionValues?: string[] | null, cancellable?: Gio.Cancellable | null): boolean
    saveToStreamvAsync(stream: Gio.OutputStream, type: string, optionKeys?: string[] | null, optionValues?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    savev(filename: string, type: string, optionKeys?: string[] | null, optionValues?: string[] | null): boolean
    scale(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType): void
    scaleSimple(destWidth: number, destHeight: number, interpType: InterpType): Pixbuf | null
    setOption(key: string, value: string): boolean
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
    /* Methods of Gio.Icon */
    equal(icon2?: Gio.Icon | null): boolean
    serialize(): GLib.Variant | null
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of GdkPixbuf.Pixbuf */
    vfuncEqual(icon2?: Gio.Icon | null): boolean
    vfuncHash(): number
    vfuncSerialize(): GLib.Variant | null
    vfuncLoad(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    vfuncLoadAsync(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncLoadFinish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Pixbuf_ConstructProps)
    _init (config?: Pixbuf_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number): Pixbuf
    static newFromBytes(data: any, colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number, rowstride: number): Pixbuf
    static newFromData(data: any, colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number, rowstride: number, destroyFn?: PixbufDestroyNotify | null): Pixbuf
    static newFromFile(filename: string): Pixbuf
    static newFromFileAtScale(filename: string, width: number, height: number, preserveAspectRatio: boolean): Pixbuf
    static newFromFileAtSize(filename: string, width: number, height: number): Pixbuf
    static newFromInline(data: any, copyPixels: boolean): Pixbuf
    static newFromResource(resourcePath: string): Pixbuf
    static newFromResourceAtScale(resourcePath: string, width: number, height: number, preserveAspectRatio: boolean): Pixbuf
    static newFromStream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): Pixbuf
    static newFromStreamAtScale(stream: Gio.InputStream, width: number, height: number, preserveAspectRatio: boolean, cancellable?: Gio.Cancellable | null): Pixbuf
    static newFromStreamFinish(asyncResult: Gio.AsyncResult): Pixbuf
    static newFromXpmData(data: string[]): Pixbuf
    static calculateRowstride(colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number): number
    static getFileInfo(filename: string): [ /* returnType */ PixbufFormat | null, /* width */ number | null, /* height */ number | null ]
    static getFileInfoAsync(filename: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFileInfoFinish(asyncResult: Gio.AsyncResult): [ /* returnType */ PixbufFormat | null, /* width */ number, /* height */ number ]
    static getFormats(): PixbufFormat[]
    static initModules(path: string): boolean
    static newFromStreamAsync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newFromStreamAtScaleAsync(stream: Gio.InputStream, width: number, height: number, preserveAspectRatio: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static saveToStreamFinish(asyncResult: Gio.AsyncResult): boolean
    static deserialize(value: GLib.Variant): Gio.Icon | null
    static hash(icon: object): number
    static newForString(str: string): Gio.Icon
    static $gtype: GObject.Type
}
export interface PixbufAnimation_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufAnimation {
    /* Fields of GdkPixbuf.PixbufAnimation */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufAnimation */
    getHeight(): number
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    getStaticImage(): Pixbuf
    getWidth(): number
    isStaticImage(): boolean
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
    /* Virtual methods of GdkPixbuf.PixbufAnimation */
    vfuncGetIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    vfuncGetSize(width: number, height: number): void
    vfuncGetStaticImage(): Pixbuf
    vfuncIsStaticImage(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufAnimation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PixbufAnimation_ConstructProps)
    _init (config?: PixbufAnimation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromFile(filename: string): PixbufAnimation
    static newFromResource(resourcePath: string): PixbufAnimation
    static newFromStream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): PixbufAnimation
    static newFromStreamFinish(asyncResult: Gio.AsyncResult): PixbufAnimation
    static newFromStreamAsync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface PixbufAnimationIter_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufAnimationIter {
    /* Fields of GdkPixbuf.PixbufAnimationIter */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufAnimationIter */
    advance(currentTime?: GLib.TimeVal | null): boolean
    getDelayTime(): number
    getPixbuf(): Pixbuf
    onCurrentlyLoadingFrame(): boolean
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
    /* Virtual methods of GdkPixbuf.PixbufAnimationIter */
    vfuncAdvance(currentTime?: GLib.TimeVal | null): boolean
    vfuncGetDelayTime(): number
    vfuncGetPixbuf(): Pixbuf
    vfuncOnCurrentlyLoadingFrame(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufAnimationIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufAnimationIter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PixbufAnimationIter_ConstructProps)
    _init (config?: PixbufAnimationIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PixbufLoader_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufLoader {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufLoader */
    close(): boolean
    getAnimation(): PixbufAnimation | null
    getFormat(): PixbufFormat | null
    getPixbuf(): Pixbuf | null
    setSize(width: number, height: number): void
    write(buf: any): boolean
    writeBytes(buffer: any): boolean
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
    /* Virtual methods of GdkPixbuf.PixbufLoader */
    vfuncAreaPrepared(): void
    vfuncAreaUpdated(x: number, y: number, width: number, height: number): void
    vfuncClosed(): void
    vfuncSizePrepared(width: number, height: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GdkPixbuf.PixbufLoader */
    connect(sigName: "area-prepared", callback: (($obj: PixbufLoader) => void)): number
    connect_after(sigName: "area-prepared", callback: (($obj: PixbufLoader) => void)): number
    emit(sigName: "area-prepared"): void
    on(sigName: "area-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "area-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "area-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "area-updated", callback: (($obj: PixbufLoader, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "area-updated", callback: (($obj: PixbufLoader, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "area-updated", x: number, y: number, width: number, height: number): void
    on(sigName: "area-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "area-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "area-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "closed", callback: (($obj: PixbufLoader) => void)): number
    connect_after(sigName: "closed", callback: (($obj: PixbufLoader) => void)): number
    emit(sigName: "closed"): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-prepared", callback: (($obj: PixbufLoader, width: number, height: number) => void)): number
    connect_after(sigName: "size-prepared", callback: (($obj: PixbufLoader, width: number, height: number) => void)): number
    emit(sigName: "size-prepared", width: number, height: number): void
    on(sigName: "size-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufLoader, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PixbufLoader_ConstructProps)
    _init (config?: PixbufLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PixbufLoader
    static newWithMimeType(mimeType: string): PixbufLoader
    static newWithType(imageType: string): PixbufLoader
    static $gtype: GObject.Type
}
export interface PixbufNonAnim_ConstructProps extends PixbufAnimation_ConstructProps {
}
export class PixbufNonAnim {
    /* Fields of GdkPixbuf.PixbufAnimation */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufAnimation */
    getHeight(): number
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    getStaticImage(): Pixbuf
    getWidth(): number
    isStaticImage(): boolean
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
    /* Virtual methods of GdkPixbuf.PixbufAnimation */
    vfuncGetIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    vfuncGetSize(width: number, height: number): void
    vfuncGetStaticImage(): Pixbuf
    vfuncIsStaticImage(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufNonAnim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufNonAnim, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PixbufNonAnim_ConstructProps)
    _init (config?: PixbufNonAnim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pixbuf: Pixbuf): PixbufNonAnim
    static $gtype: GObject.Type
}
export interface PixbufSimpleAnim_ConstructProps extends PixbufAnimation_ConstructProps {
    loop?: boolean
}
export class PixbufSimpleAnim {
    /* Properties of GdkPixbuf.PixbufSimpleAnim */
    loop: boolean
    /* Fields of GdkPixbuf.PixbufAnimation */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufSimpleAnim */
    addFrame(pixbuf: Pixbuf): void
    getLoop(): boolean
    setLoop(loop: boolean): void
    /* Methods of GdkPixbuf.PixbufAnimation */
    getHeight(): number
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    getStaticImage(): Pixbuf
    getWidth(): number
    isStaticImage(): boolean
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
    /* Virtual methods of GdkPixbuf.PixbufAnimation */
    vfuncGetIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    vfuncGetSize(width: number, height: number): void
    vfuncGetStaticImage(): Pixbuf
    vfuncIsStaticImage(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::loop", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufSimpleAnim_ConstructProps)
    _init (config?: PixbufSimpleAnim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number, rate: number): PixbufSimpleAnim
    static $gtype: GObject.Type
}
export interface PixbufSimpleAnimIter_ConstructProps extends PixbufAnimationIter_ConstructProps {
}
export class PixbufSimpleAnimIter {
    /* Fields of GdkPixbuf.PixbufAnimationIter */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf.PixbufAnimationIter */
    advance(currentTime?: GLib.TimeVal | null): boolean
    getDelayTime(): number
    getPixbuf(): Pixbuf
    onCurrentlyLoadingFrame(): boolean
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
    /* Virtual methods of GdkPixbuf.PixbufAnimationIter */
    vfuncAdvance(currentTime?: GLib.TimeVal | null): boolean
    vfuncGetDelayTime(): number
    vfuncGetPixbuf(): Pixbuf
    vfuncOnCurrentlyLoadingFrame(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufSimpleAnimIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufSimpleAnimIter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PixbufSimpleAnimIter_ConstructProps)
    _init (config?: PixbufSimpleAnimIter_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class PixbufAnimationClass {
    /* Fields of GdkPixbuf.PixbufAnimationClass */
    parentClass: GObject.ObjectClass
    isStaticImage: (animation: PixbufAnimation) => boolean
    getStaticImage: (animation: PixbufAnimation) => Pixbuf
    getSize: (animation: PixbufAnimation, width: number, height: number) => void
    getIter: (animation: PixbufAnimation, startTime?: GLib.TimeVal | null) => PixbufAnimationIter
    static name: string
}
export abstract class PixbufAnimationIterClass {
    /* Fields of GdkPixbuf.PixbufAnimationIterClass */
    parentClass: GObject.ObjectClass
    getDelayTime: (iter: PixbufAnimationIter) => number
    getPixbuf: (iter: PixbufAnimationIter) => Pixbuf
    onCurrentlyLoadingFrame: (iter: PixbufAnimationIter) => boolean
    advance: (iter: PixbufAnimationIter, currentTime?: GLib.TimeVal | null) => boolean
    static name: string
}
export class PixbufFormat {
    /* Fields of GdkPixbuf.PixbufFormat */
    name: string
    signature: PixbufModulePattern
    domain: string
    description: string
    mimeTypes: string[]
    extensions: string[]
    flags: number
    disabled: boolean
    license: string
    /* Methods of GdkPixbuf.PixbufFormat */
    copy(): PixbufFormat
    free(): void
    getDescription(): string
    getExtensions(): string[]
    getLicense(): string
    getMimeTypes(): string[]
    getName(): string
    isDisabled(): boolean
    isSaveOptionSupported(optionKey: string): boolean
    isScalable(): boolean
    isWritable(): boolean
    setDisabled(disabled: boolean): void
    static name: string
}
export abstract class PixbufLoaderClass {
    /* Fields of GdkPixbuf.PixbufLoaderClass */
    parentClass: GObject.ObjectClass
    sizePrepared: (loader: PixbufLoader, width: number, height: number) => void
    areaPrepared: (loader: PixbufLoader) => void
    areaUpdated: (loader: PixbufLoader, x: number, y: number, width: number, height: number) => void
    closed: (loader: PixbufLoader) => void
    static name: string
}
export class PixbufModule {
    /* Fields of GdkPixbuf.PixbufModule */
    moduleName: string
    modulePath: string
    module: GModule.Module
    info: PixbufFormat
    stopLoad: (context: object) => boolean
    loadIncrement: (context: object, buf: number, size: number) => boolean
    save: (f: object, pixbuf: Pixbuf, paramKeys: string, paramValues: string) => boolean
    isSaveOptionSupported: (optionKey: string) => boolean
    static name: string
}
export class PixbufModulePattern {
    /* Fields of GdkPixbuf.PixbufModulePattern */
    prefix: string
    mask: string
    relevance: number
    static name: string
}
export abstract class PixbufSimpleAnimClass {
    static name: string
}
}