/**
 * PolkitAgent-1.0
 */

/// <reference types="node" />
/// <reference path="Polkit-1.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace PolkitAgent {

export enum RegisterFlags {
    NONE,
    RUN_IN_THREAD,
}
export function registerListener(listener: Listener, subject: Polkit.Subject, objectPath: string): boolean
export interface Listener_ConstructProps extends GObject.Object_ConstructProps {
}
export class Listener {
    /* Fields of PolkitAgent.Listener */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PolkitAgent.Listener */
    initiateAuthentication(actionId: string, message: string, iconName: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initiateAuthenticationFinish(res: Gio.AsyncResult): boolean
    register(flags: RegisterFlags, subject: Polkit.Subject, objectPath: string, cancellable?: Gio.Cancellable | null): object | null
    registerWithOptions(flags: RegisterFlags, subject: Polkit.Subject, objectPath: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): object | null
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
    /* Virtual methods of PolkitAgent.Listener */
    vfuncInitiateAuthentication(actionId: string, message: string, iconName: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitiateAuthenticationFinish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Listener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Listener, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Listener_ConstructProps)
    _init (config?: Listener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unregister(registrationHandle?: object | null): void
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    cookie?: string
    identity?: Polkit.Identity
}
export class Session {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PolkitAgent.Session */
    cancel(): void
    initiate(): void
    response(response: string): void
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
    /* Signals of PolkitAgent.Session */
    connect(sigName: "completed", callback: (($obj: Session, gainedAuthorization: boolean) => void)): number
    connect_after(sigName: "completed", callback: (($obj: Session, gainedAuthorization: boolean) => void)): number
    emit(sigName: "completed", gainedAuthorization: boolean): void
    on(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "request", callback: (($obj: Session, request: string, echoOn: boolean) => void)): number
    connect_after(sigName: "request", callback: (($obj: Session, request: string, echoOn: boolean) => void)): number
    emit(sigName: "request", request: string, echoOn: boolean): void
    on(sigName: "request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-error", callback: (($obj: Session, text: string) => void)): number
    connect_after(sigName: "show-error", callback: (($obj: Session, text: string) => void)): number
    emit(sigName: "show-error", text: string): void
    on(sigName: "show-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-info", callback: (($obj: Session, text: string) => void)): number
    connect_after(sigName: "show-info", callback: (($obj: Session, text: string) => void)): number
    emit(sigName: "show-info", text: string): void
    on(sigName: "show-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(identity: Polkit.Identity, cookie: string): Session
    static $gtype: GObject.Type
}
export interface TextListener_ConstructProps extends Listener_ConstructProps {
}
export class TextListener {
    /* Fields of PolkitAgent.Listener */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PolkitAgent.Listener */
    initiateAuthentication(actionId: string, message: string, iconName: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initiateAuthenticationFinish(res: Gio.AsyncResult): boolean
    register(flags: RegisterFlags, subject: Polkit.Subject, objectPath: string, cancellable?: Gio.Cancellable | null): object | null
    registerWithOptions(flags: RegisterFlags, subject: Polkit.Subject, objectPath: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): object | null
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of PolkitAgent.TextListener */
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of PolkitAgent.Listener */
    vfuncInitiateAuthentication(actionId: string, message: string, iconName: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitiateAuthenticationFinish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextListener, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TextListener_ConstructProps)
    _init (config?: TextListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): TextListener
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class ListenerClass {
    /* Fields of PolkitAgent.ListenerClass */
    parentClass: GObject.ObjectClass
    initiateAuthentication: (listener: Listener, actionId: string, message: string, iconName: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    initiateAuthenticationFinish: (listener: Listener, res: Gio.AsyncResult) => boolean
    static name: string
}
export abstract class SessionClass {
    static name: string
}
}