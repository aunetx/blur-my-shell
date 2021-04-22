/**
 * Gck-1
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Gck {

export enum BuilderFlags {
    NONE,
    SECURE_MEMORY,
}
export enum Error {
    PROBLEM,
}
export enum UriError {
    BAD_SCHEME,
    BAD_ENCODING,
    BAD_SYNTAX,
    BAD_VERSION,
    NOT_FOUND,
}
export enum SessionOptions {
    READ_ONLY,
    READ_WRITE,
    LOGIN_USER,
    AUTHENTICATE,
}
export enum UriFlags {
    FOR_OBJECT,
    FOR_TOKEN,
    FOR_MODULE,
    WITH_VERSION,
    FOR_ANY,
}
export const INVALID: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const URI_FOR_MODULE_WITH_VERSION: number
export const URI_FOR_OBJECT_ON_TOKEN: number
export const URI_FOR_OBJECT_ON_TOKEN_AND_MODULE: number
export const VENDOR_CODE: number
export function builderUnref(builder?: object | null): void
export function errorGetQuark(): GLib.Quark
export function listGetBoxedType(): GObject.Type
export function messageFromRv(rv: number): string
export function modulesEnumerateObjects(modules: Module[], attrs: Attributes, sessionOptions: SessionOptions): Enumerator
export function modulesEnumerateUri(modules: Module[], uri: string, sessionOptions: SessionOptions): Enumerator
export function modulesGetSlots(modules: Module[], tokenPresent: boolean): Slot[]
export function modulesInitializeRegistered(cancellable?: Gio.Cancellable | null): Module[]
export function modulesInitializeRegisteredAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function modulesInitializeRegisteredFinish(result: Gio.AsyncResult): Module[]
export function modulesObjectForUri(modules: Module[], uri: string, sessionOptions: SessionOptions): Object | null
export function modulesObjectsForUri(modules: Module[], uri: string, sessionOptions: SessionOptions): Object[]
export function modulesTokenForUri(modules: Module[], uri: string): Slot
export function modulesTokensForUri(modules: Module[], uri: string): Slot[]
export function objectsFromHandleArray(session: Session, objectHandles: number[]): Object[]
export function slotsEnumerateObjects(slots: Slot[], match: Attributes, options: SessionOptions): Enumerator
export function uriBuild(uriData: UriData, flags: UriFlags): string
export function uriErrorGetQuark(): GLib.Quark
export function uriParse(string: string, flags: UriFlags): UriData
export function valueToBoolean(value: any, result: boolean): boolean
export function valueToUlong(value: any, result: number): boolean
export interface Allocator {
    (data: object | null, length: number): object | null
}
export interface ObjectCache_ConstructProps extends Object_ConstructProps {
    attributes?: Attributes
}
export class ObjectCache {
    /* Properties of Gck.ObjectCache */
    attributes: Attributes
    /* Fields of Gck.Object */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gck.ObjectCache */
    fill(attrs: Attributes): void
    setAttributes(attrs?: Attributes | null): void
    update(attrTypes: number[], cancellable?: Gio.Cancellable | null): boolean
    updateAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateFinish(result: Gio.AsyncResult): boolean
    /* Methods of Gck.Object */
    cacheLookup(attrTypes: number[], cancellable?: Gio.Cancellable | null): Attributes
    cacheLookupAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cacheLookupFinish(result: Gio.AsyncResult): Attributes
    destroy(cancellable?: Gio.Cancellable | null): boolean
    destroyAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    destroyFinish(result: Gio.AsyncResult): boolean
    equal(object2: Object): boolean
    getAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getData(attrType: number, cancellable?: Gio.Cancellable | null): any
    getDataAsync(attrType: number, allocator: Allocator, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataFinish(result: Gio.AsyncResult): any
    getFinish(result: Gio.AsyncResult): Attributes
    getFull(attrTypes: number[], cancellable?: Gio.Cancellable | null): Attributes
    getHandle(): number
    getModule(): Module
    getSession(): Session
    getTemplate(attrType: number, cancellable?: Gio.Cancellable | null): Attributes
    getTemplateAsync(attrType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTemplateFinish(result: Gio.AsyncResult): Attributes
    hash(): number
    set(attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    setAsync(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setFinish(result: Gio.AsyncResult): boolean
    setTemplate(attrType: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    setTemplateAsync(attrType: number, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setTemplateFinish(result: Gio.AsyncResult): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
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
    /* Virtual methods of Gck.ObjectCache */
    vfuncFill(attrs: Attributes): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectCache_ConstructProps)
    _init (config?: ObjectCache_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Enumerator_ConstructProps extends GObject.Object_ConstructProps {
    chained?: Enumerator
    interaction?: Gio.TlsInteraction
}
export class Enumerator {
    /* Properties of Gck.Enumerator */
    chained: Enumerator
    interaction: Gio.TlsInteraction
    /* Fields of Gck.Enumerator */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gck.Enumerator */
    getChained(): Enumerator | null
    getInteraction(): Gio.TlsInteraction | null
    getObjectType(): GObject.Type
    next(cancellable?: Gio.Cancellable | null): Object | null
    nextAsync(maxObjects: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(result: Gio.AsyncResult): Object[]
    nextN(maxObjects: number, cancellable?: Gio.Cancellable | null): Object[]
    setChained(chained?: Enumerator | null): void
    setInteraction(interaction?: Gio.TlsInteraction | null): void
    setObjectType(objectType: GObject.Type, attrTypes: number[]): void
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chained", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chained", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interaction", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Enumerator_ConstructProps)
    _init (config?: Enumerator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Module_ConstructProps extends GObject.Object_ConstructProps {
    functions?: object
    path?: string
}
export class Module {
    /* Fields of Gck.Module */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gck.Module */
    equal(module2: Module): boolean
    getInfo(): ModuleInfo
    getPath(): string
    getSlots(tokenPresent: boolean): Slot[]
    hash(): number
    match(uri: UriData): boolean
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
    /* Virtual methods of Gck.Module */
    vfuncAuthenticateObject(object: Object, label: string, password: string): boolean
    vfuncAuthenticateSlot(slot: Slot, label: string, password: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gck.Module */
    connect(sigName: "authenticate-object", callback: (($obj: Module, object: Object, label: string, password?: object | null) => boolean)): number
    connect_after(sigName: "authenticate-object", callback: (($obj: Module, object: Object, label: string, password?: object | null) => boolean)): number
    emit(sigName: "authenticate-object", object: Object, label: string, password?: object | null): void
    on(sigName: "authenticate-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "authenticate-slot", callback: (($obj: Module, slot: Slot, string: string, password?: object | null) => boolean)): number
    connect_after(sigName: "authenticate-slot", callback: (($obj: Module, slot: Slot, string: string, password?: object | null) => boolean)): number
    emit(sigName: "authenticate-slot", slot: Slot, string: string, password?: object | null): void
    on(sigName: "authenticate-slot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate-slot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate-slot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Module_ConstructProps)
    _init (config?: Module_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static initialize(path: string, cancellable?: Gio.Cancellable | null): Module
    static initializeAsync(path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static initializeFinish(result: Gio.AsyncResult): Module | null
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
    handle?: number
    module?: Module
    session?: Session
}
export class Object {
    /* Fields of Gck.Object */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gck.Object */
    cacheLookup(attrTypes: number[], cancellable?: Gio.Cancellable | null): Attributes
    cacheLookupAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cacheLookupFinish(result: Gio.AsyncResult): Attributes
    destroy(cancellable?: Gio.Cancellable | null): boolean
    destroyAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    destroyFinish(result: Gio.AsyncResult): boolean
    equal(object2: Object): boolean
    getAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getData(attrType: number, cancellable?: Gio.Cancellable | null): any
    getDataAsync(attrType: number, allocator: Allocator, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataFinish(result: Gio.AsyncResult): any
    getFinish(result: Gio.AsyncResult): Attributes
    getFull(attrTypes: number[], cancellable?: Gio.Cancellable | null): Attributes
    getHandle(): number
    getModule(): Module
    getSession(): Session
    getTemplate(attrType: number, cancellable?: Gio.Cancellable | null): Attributes
    getTemplateAsync(attrType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTemplateFinish(result: Gio.AsyncResult): Attributes
    hash(): number
    set(attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    setAsync(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setFinish(result: Gio.AsyncResult): boolean
    setTemplate(attrType: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    setTemplateAsync(attrType: number, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setTemplateFinish(result: Gio.AsyncResult): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromHandle(session: Session, objectHandle: number): Object
    static $gtype: GObject.Type
}
export interface Password_ConstructProps extends Gio.TlsPassword_ConstructProps {
    key?: Object
    token?: Slot
}
export class Password {
    /* Properties of Gck.Password */
    readonly module: Module
    /* Properties of Gio.TlsPassword */
    description: string
    flags: Gio.TlsPasswordFlags
    warning: string
    /* Fields of Gck.Password */
    parent: Gio.TlsPassword
    /* Fields of Gio.TlsPassword */
    parentInstance: GObject.Object
    priv: Gio.TlsPasswordPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gck.Password */
    getKey(): Object
    getModule(): Module
    getToken(): Slot
    /* Methods of Gio.TlsPassword */
    getDescription(): string
    getFlags(): Gio.TlsPasswordFlags
    getValue(length?: number | null): number
    getWarning(): string
    setDescription(description: string): void
    setFlags(flags: Gio.TlsPasswordFlags): void
    setValue(value: any): void
    setValueFull(value: any, destroy?: GLib.DestroyNotify | null): void
    setWarning(warning: string): void
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
    /* Virtual methods of Gio.TlsPassword */
    vfuncGetDefaultWarning(): string
    vfuncGetValue(length?: number | null): number
    vfuncSetValue(value: any, destroy?: GLib.DestroyNotify | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::module", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Password_ConstructProps)
    _init (config?: Password_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    appData?: object
    handle?: number
    interaction?: Gio.TlsInteraction
    openingFlags?: number
    options?: SessionOptions
    slot?: Slot
}
export class Session {
    /* Properties of Gck.Session */
    interaction: Gio.TlsInteraction
    readonly module: Module
    /* Fields of Gck.Session */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gck.Session */
    createObject(attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    createObjectAsync(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createObjectFinish(result: Gio.AsyncResult): Object
    decrypt(key: Object, mechType: number, input: any, cancellable?: Gio.Cancellable | null): any
    decryptAsync(key: Object, mechanism: Mechanism, input: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decryptFinish(result: Gio.AsyncResult): any
    decryptFull(key: Object, mechanism: Mechanism, input: any, cancellable?: Gio.Cancellable | null): any
    deriveKey(base: Object, mechType: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    deriveKeyAsync(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deriveKeyFinish(result: Gio.AsyncResult): Object
    deriveKeyFull(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    encrypt(key: Object, mechType: number, input: any, cancellable?: Gio.Cancellable | null): any
    encryptAsync(key: Object, mechanism: Mechanism, input: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encryptFinish(result: Gio.AsyncResult): any
    encryptFull(key: Object, mechanism: Mechanism, input: any, cancellable?: Gio.Cancellable | null): any
    enumerateObjects(match: Attributes): Enumerator
    findHandles(match: Attributes, cancellable?: Gio.Cancellable | null): number[] | null
    findHandlesAsync(match: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findHandlesFinish(result: Gio.AsyncResult): number[] | null
    findObjects(match: Attributes, cancellable?: Gio.Cancellable | null): Object[]
    findObjectsAsync(match: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findObjectsFinish(result: Gio.AsyncResult): Object[]
    generateKeyPair(mechType: number, publicAttrs: Attributes, privateAttrs: Attributes, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* publicKey */ Object | null, /* privateKey */ Object | null ]
    generateKeyPairAsync(mechanism: Mechanism, publicAttrs: Attributes, privateAttrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateKeyPairFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* publicKey */ Object | null, /* privateKey */ Object | null ]
    generateKeyPairFull(mechanism: Mechanism, publicAttrs: Attributes, privateAttrs: Attributes, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* publicKey */ Object | null, /* privateKey */ Object | null ]
    getHandle(): number
    getInfo(): SessionInfo
    getInteraction(): Gio.TlsInteraction | null
    getModule(): Module
    getOptions(): SessionOptions
    getSlot(): Slot
    getState(): number
    initPin(pin: any | null, cancellable?: Gio.Cancellable | null): boolean
    initPinAsync(pin: any | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initPinFinish(result: Gio.AsyncResult): boolean
    login(userType: number, pin: any | null, cancellable?: Gio.Cancellable | null): boolean
    loginAsync(userType: number, pin: any | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loginFinish(result: Gio.AsyncResult): boolean
    loginInteractive(userType: number, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null): boolean
    loginInteractiveAsync(userType: number, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loginInteractiveFinish(result: Gio.AsyncResult): boolean
    logout(cancellable?: Gio.Cancellable | null): boolean
    logoutAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    logoutFinish(result: Gio.AsyncResult): boolean
    setInteraction(interaction?: Gio.TlsInteraction | null): void
    setPin(oldPin: any | null, newPin: any | null, cancellable?: Gio.Cancellable | null): boolean
    setPinAsync(oldPin: any | null, nOldPin: number, newPin: any | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setPinFinish(result: Gio.AsyncResult): boolean
    sign(key: Object, mechType: number, input: any, cancellable?: Gio.Cancellable | null): any
    signAsync(key: Object, mechanism: Mechanism, input: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    signFinish(result: Gio.AsyncResult): any
    signFull(key: Object, mechanism: Mechanism, input: any, nResult: number, cancellable?: Gio.Cancellable | null): number
    unwrapKey(wrapper: Object, mechType: number, input: any, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    unwrapKeyAsync(wrapper: Object, mechanism: Mechanism, input: any, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unwrapKeyFinish(result: Gio.AsyncResult): Object
    unwrapKeyFull(wrapper: Object, mechanism: Mechanism, input: any, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    verify(key: Object, mechType: number, input: any, signature: any, cancellable?: Gio.Cancellable | null): boolean
    verifyAsync(key: Object, mechanism: Mechanism, input: any, signature: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verifyFinish(result: Gio.AsyncResult): boolean
    verifyFull(key: Object, mechanism: Mechanism, input: any, signature: any, cancellable?: Gio.Cancellable | null): boolean
    wrapKey(wrapper: Object, mechType: number, wrapped: Object, cancellable?: Gio.Cancellable | null): any
    wrapKeyAsync(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    wrapKeyFinish(result: Gio.AsyncResult): any
    wrapKeyFull(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable?: Gio.Cancellable | null): any
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gck.Session */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gck.Session */
    connect(sigName: "discard-handle", callback: (($obj: Session, handle: number) => boolean)): number
    connect_after(sigName: "discard-handle", callback: (($obj: Session, handle: number) => boolean)): number
    emit(sigName: "discard-handle", handle: number): void
    on(sigName: "discard-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "discard-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "discard-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::module", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromHandle(slot: Slot, sessionHandle: number, options: SessionOptions): Session
    static open(slot: Slot, options: SessionOptions, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null): Session
    static openAsync(slot: Slot, options: SessionOptions, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static openFinish(result: Gio.AsyncResult): Session
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Slot_ConstructProps extends GObject.Object_ConstructProps {
    handle?: number
    module?: Module
}
export class Slot {
    /* Fields of Gck.Slot */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gck.Slot */
    enumerateObjects(match: Attributes, options: SessionOptions): Enumerator
    equal(slot2: Slot): boolean
    getHandle(): number
    getInfo(): SlotInfo
    getMechanismInfo(mechType: number): MechanismInfo
    getMechanisms(): number[]
    getModule(): Module
    getTokenInfo(): TokenInfo
    hasFlags(flags: number): boolean
    hash(): number
    match(uri: UriData): boolean
    openSession(options: SessionOptions, cancellable?: Gio.Cancellable | null): Session
    openSessionAsync(options: SessionOptions, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openSessionFinish(result: Gio.AsyncResult): Session
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Slot_ConstructProps)
    _init (config?: Slot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromHandle(module: Module, slotId: number): Slot
    static $gtype: GObject.Type
}
export class Attribute {
    /* Fields of Gck.Attribute */
    type: number
    value: any
    length: number
    /* Methods of Gck.Attribute */
    clear(): void
    dump(): void
    dup(): Attribute
    equal(attr2: Attribute): boolean
    free(): void
    getBoolean(): boolean
    getData(): any
    getDate(value: GLib.Date): void
    getString(): string | null
    getUlong(): number
    hash(): number
    initCopy(src: Attribute): void
    isInvalid(): boolean
    static name: string
    static new(attrType: number, value: number, length: number): Attribute
    constructor(attrType: number, value: number, length: number)
    /* Static methods and pseudo-constructors */
    static new(attrType: number, value: number, length: number): Attribute
    static newBoolean(attrType: number, value: boolean): Attribute
    static newDate(attrType: number, value: GLib.Date): Attribute
    static newEmpty(attrType: number): Attribute
    static newInvalid(attrType: number): Attribute
    static newString(attrType: number, value: string): Attribute
    static newUlong(attrType: number, value: number): Attribute
}
export class Attributes {
    /* Methods of Gck.Attributes */
    at(index: number): Attribute
    contains(match: Attribute): boolean
    count(): number
    dump(): void
    find(attrType: number): Attribute
    findBoolean(attrType: number): [ /* returnType */ boolean, /* value */ boolean ]
    findDate(attrType: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    findString(attrType: number): [ /* returnType */ boolean, /* value */ string ]
    findUlong(attrType: number): [ /* returnType */ boolean, /* value */ number ]
    ref(): Attributes
    refSink(): Attributes
    unref(): void
    static name: string
    static new(reserved: number): Attributes
    constructor(reserved: number)
    /* Static methods and pseudo-constructors */
    static new(reserved: number): Attributes
}
export class Builder {
    /* Methods of Gck.Builder */
    addAll(attrs: Attributes): void
    addAttribute(attr: Attribute): void
    addBoolean(attrType: number, value: boolean): void
    addData(attrType: number, value: any | null): void
    addDate(attrType: number, value: GLib.Date): void
    addEmpty(attrType: number): void
    addInvalid(attrType: number): void
    addOnly(attrs: Attributes, onlyTypes: number[]): void
    addString(attrType: number, value?: string | null): void
    addUlong(attrType: number, value: number): void
    clear(): void
    copy(): Builder
    end(): Attributes
    find(attrType: number): Attribute
    findBoolean(attrType: number): [ /* returnType */ boolean, /* value */ boolean ]
    findDate(attrType: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    findString(attrType: number): [ /* returnType */ boolean, /* value */ string ]
    findUlong(attrType: number): [ /* returnType */ boolean, /* value */ number ]
    init(): void
    initFull(flags: BuilderFlags): void
    ref(): Builder
    setAll(attrs: Attributes): void
    setBoolean(attrType: number, value: boolean): void
    setData(attrType: number, value: any | null): void
    setDate(attrType: number, value: GLib.Date): void
    setEmpty(attrType: number): void
    setInvalid(attrType: number): void
    setString(attrType: number, value: string): void
    setUlong(attrType: number, value: number): void
    steal(): Attributes
    takeData(attrType: number, value: any | null): void
    static name: string
    static new(flags: BuilderFlags): Builder
    constructor(flags: BuilderFlags)
    /* Static methods and pseudo-constructors */
    static new(flags: BuilderFlags): Builder
    static unref(builder?: object | null): void
}
export abstract class EnumeratorClass {
    /* Fields of Gck.EnumeratorClass */
    parent: GObject.ObjectClass
    static name: string
}
export class EnumeratorPrivate {
    static name: string
}
export class Mechanism {
    /* Fields of Gck.Mechanism */
    type: number
    parameter: object
    nParameter: number
    static name: string
}
export class MechanismInfo {
    /* Fields of Gck.MechanismInfo */
    minKeySize: number
    maxKeySize: number
    flags: number
    /* Methods of Gck.MechanismInfo */
    copy(): MechanismInfo
    free(): void
    static name: string
}
export abstract class ModuleClass {
    /* Fields of Gck.ModuleClass */
    parent: GObject.ObjectClass
    authenticateSlot: (self: Module, slot: Slot, label: string, password: string) => boolean
    authenticateObject: (self: Module, object: Object, label: string, password: string) => boolean
    static name: string
}
export class ModuleInfo {
    /* Fields of Gck.ModuleInfo */
    pkcs11VersionMajor: number
    pkcs11VersionMinor: number
    manufacturerId: string
    flags: number
    libraryDescription: string
    libraryVersionMajor: number
    libraryVersionMinor: number
    /* Methods of Gck.ModuleInfo */
    copy(): ModuleInfo
    free(): void
    static name: string
}
export class ModulePrivate {
    static name: string
}
export abstract class ObjectCacheIface {
    /* Fields of Gck.ObjectCacheIface */
    interface: GObject.TypeInterface
    defaultTypes: number[]
    nDefaultTypes: number
    fill: (object: ObjectCache, attrs: Attributes) => void
    static name: string
}
export abstract class ObjectClass {
    /* Fields of Gck.ObjectClass */
    parent: GObject.ObjectClass
    static name: string
}
export class ObjectPrivate {
    static name: string
}
export abstract class PasswordClass {
    /* Fields of Gck.PasswordClass */
    parent: Gio.TlsPasswordClass
    static name: string
}
export class PasswordPrivate {
    static name: string
}
export abstract class SessionClass {
    /* Fields of Gck.SessionClass */
    parent: GObject.ObjectClass
    static name: string
}
export class SessionInfo {
    /* Fields of Gck.SessionInfo */
    slotId: number
    state: number
    flags: number
    deviceError: number
    /* Methods of Gck.SessionInfo */
    copy(): SessionInfo
    free(): void
    static name: string
}
export class SessionPrivate {
    static name: string
}
export abstract class SlotClass {
    /* Fields of Gck.SlotClass */
    parent: GObject.ObjectClass
    static name: string
}
export class SlotInfo {
    /* Fields of Gck.SlotInfo */
    slotDescription: string
    manufacturerId: string
    flags: number
    hardwareVersionMajor: number
    hardwareVersionMinor: number
    firmwareVersionMajor: number
    firmwareVersionMinor: number
    /* Methods of Gck.SlotInfo */
    copy(): SlotInfo
    free(): void
    static name: string
}
export class SlotPrivate {
    static name: string
}
export class TokenInfo {
    /* Fields of Gck.TokenInfo */
    label: string
    manufacturerId: string
    model: string
    serialNumber: string
    flags: number
    maxSessionCount: number
    sessionCount: number
    maxRwSessionCount: number
    rwSessionCount: number
    maxPinLen: number
    minPinLen: number
    totalPublicMemory: number
    freePublicMemory: number
    totalPrivateMemory: number
    freePrivateMemory: number
    hardwareVersionMajor: number
    hardwareVersionMinor: number
    firmwareVersionMajor: number
    firmwareVersionMinor: number
    utcTime: number
    /* Methods of Gck.TokenInfo */
    copy(): TokenInfo
    free(): void
    static name: string
}
export class UriData {
    /* Fields of Gck.UriData */
    anyUnrecognized: boolean
    moduleInfo: ModuleInfo
    tokenInfo: TokenInfo
    attributes: Attributes
    /* Methods of Gck.UriData */
    copy(): UriData
    free(): void
    static name: string
    static new(): UriData
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): UriData
}
}