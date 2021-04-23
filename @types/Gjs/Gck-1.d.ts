/**
 * Gck-1
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

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
export function builder_unref(builder?: object | null): void
export function error_get_quark(): GLib.Quark
export function list_get_boxed_type(): GObject.Type
export function message_from_rv(rv: number): string
export function modules_enumerate_objects(modules: Module[], attrs: Attributes, session_options: SessionOptions): Enumerator
export function modules_enumerate_uri(modules: Module[], uri: string, session_options: SessionOptions): Enumerator
export function modules_get_slots(modules: Module[], token_present: boolean): Slot[]
export function modules_initialize_registered(cancellable?: Gio.Cancellable | null): Module[]
export function modules_initialize_registered_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function modules_initialize_registered_finish(result: Gio.AsyncResult): Module[]
export function modules_object_for_uri(modules: Module[], uri: string, session_options: SessionOptions): Object | null
export function modules_objects_for_uri(modules: Module[], uri: string, session_options: SessionOptions): Object[]
export function modules_token_for_uri(modules: Module[], uri: string): Slot
export function modules_tokens_for_uri(modules: Module[], uri: string): Slot[]
export function objects_from_handle_array(session: Session, object_handles: number[]): Object[]
export function slots_enumerate_objects(slots: Slot[], match: Attributes, options: SessionOptions): Enumerator
export function uri_build(uri_data: UriData, flags: UriFlags): string
export function uri_error_get_quark(): GLib.Quark
export function uri_parse(string: string, flags: UriFlags): UriData
export function value_to_boolean(value: Uint8Array, result: boolean): boolean
export function value_to_ulong(value: Uint8Array, result: number): boolean
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck.ObjectCache */
    fill(attrs: Attributes): void
    set_attributes(attrs?: Attributes | null): void
    update(attr_types: number[], cancellable?: Gio.Cancellable | null): boolean
    update_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_finish(result: Gio.AsyncResult): boolean
    /* Methods of Gck.Object */
    cache_lookup(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes
    cache_lookup_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cache_lookup_finish(result: Gio.AsyncResult): Attributes
    destroy(cancellable?: Gio.Cancellable | null): boolean
    destroy_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    destroy_finish(result: Gio.AsyncResult): boolean
    equal(object2: Object): boolean
    get_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_data(attr_type: number, cancellable?: Gio.Cancellable | null): Uint8Array
    get_data_async(attr_type: number, allocator: Allocator, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_data_finish(result: Gio.AsyncResult): Uint8Array
    get_finish(result: Gio.AsyncResult): Attributes
    get_full(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes
    get_handle(): number
    get_module(): Module
    get_session(): Session
    get_template(attr_type: number, cancellable?: Gio.Cancellable | null): Attributes
    get_template_async(attr_type: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_template_finish(result: Gio.AsyncResult): Attributes
    hash(): number
    set(attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    set_async(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_finish(result: Gio.AsyncResult): boolean
    set_template(attr_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    set_template_async(attr_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_template_finish(result: Gio.AsyncResult): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gck.ObjectCache */
    vfunc_fill(attrs: Attributes): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attributes", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck.Enumerator */
    get_chained(): Enumerator | null
    get_interaction(): Gio.TlsInteraction | null
    get_object_type(): GObject.Type
    next(cancellable?: Gio.Cancellable | null): Object | null
    next_async(max_objects: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    next_finish(result: Gio.AsyncResult): Object[]
    next_n(max_objects: number, cancellable?: Gio.Cancellable | null): Object[]
    set_chained(chained?: Enumerator | null): void
    set_interaction(interaction?: Gio.TlsInteraction | null): void
    set_object_type(object_type: GObject.Type, attr_types: number[]): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::chained", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chained", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interaction", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck.Module */
    equal(module2: Module): boolean
    get_info(): ModuleInfo
    get_path(): string
    get_slots(token_present: boolean): Slot[]
    hash(): number
    match(uri: UriData): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gck.Module */
    vfunc_authenticate_object(object: Object, label: string, password: string): boolean
    vfunc_authenticate_slot(slot: Slot, label: string, password: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gck.Module */
    connect(sigName: "authenticate-object", callback: (($obj: Module, object: Object, label: string, password?: object | null) => boolean)): number
    connect_after(sigName: "authenticate-object", callback: (($obj: Module, object: Object, label: string, password?: object | null) => boolean)): number
    emit(sigName: "authenticate-object", object: Object, label: string, password?: object | null): void
    connect(sigName: "authenticate-slot", callback: (($obj: Module, slot: Slot, string: string, password?: object | null) => boolean)): number
    connect_after(sigName: "authenticate-slot", callback: (($obj: Module, slot: Slot, string: string, password?: object | null) => boolean)): number
    emit(sigName: "authenticate-slot", slot: Slot, string: string, password?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Module_ConstructProps)
    _init (config?: Module_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static initialize(path: string, cancellable?: Gio.Cancellable | null): Module
    static initialize_async(path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static initialize_finish(result: Gio.AsyncResult): Module | null
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck.Object */
    cache_lookup(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes
    cache_lookup_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cache_lookup_finish(result: Gio.AsyncResult): Attributes
    destroy(cancellable?: Gio.Cancellable | null): boolean
    destroy_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    destroy_finish(result: Gio.AsyncResult): boolean
    equal(object2: Object): boolean
    get_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_data(attr_type: number, cancellable?: Gio.Cancellable | null): Uint8Array
    get_data_async(attr_type: number, allocator: Allocator, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_data_finish(result: Gio.AsyncResult): Uint8Array
    get_finish(result: Gio.AsyncResult): Attributes
    get_full(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes
    get_handle(): number
    get_module(): Module
    get_session(): Session
    get_template(attr_type: number, cancellable?: Gio.Cancellable | null): Attributes
    get_template_async(attr_type: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_template_finish(result: Gio.AsyncResult): Attributes
    hash(): number
    set(attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    set_async(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_finish(result: Gio.AsyncResult): boolean
    set_template(attr_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    set_template_async(attr_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_template_finish(result: Gio.AsyncResult): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_handle(session: Session, object_handle: number): Object
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
    parent_instance: GObject.Object
    priv: Gio.TlsPasswordPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck.Password */
    get_key(): Object
    get_module(): Module
    get_token(): Slot
    /* Methods of Gio.TlsPassword */
    get_description(): string
    get_flags(): Gio.TlsPasswordFlags
    get_value(length?: number | null): number
    get_warning(): string
    set_description(description: string): void
    set_flags(flags: Gio.TlsPasswordFlags): void
    set_value(value: Uint8Array): void
    set_value_full(value: Uint8Array, destroy?: GLib.DestroyNotify | null): void
    set_warning(warning: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.TlsPassword */
    vfunc_get_default_warning(): string
    vfunc_get_value(length?: number | null): number
    vfunc_set_value(value: Uint8Array, destroy?: GLib.DestroyNotify | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::module", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Password_ConstructProps)
    _init (config?: Password_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    app_data?: object
    handle?: number
    interaction?: Gio.TlsInteraction
    opening_flags?: number
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck.Session */
    create_object(attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    create_object_async(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_object_finish(result: Gio.AsyncResult): Object
    decrypt(key: Object, mech_type: number, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    decrypt_async(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decrypt_finish(result: Gio.AsyncResult): Uint8Array
    decrypt_full(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    derive_key(base: Object, mech_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    derive_key_async(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    derive_key_finish(result: Gio.AsyncResult): Object
    derive_key_full(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    encrypt(key: Object, mech_type: number, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    encrypt_async(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encrypt_finish(result: Gio.AsyncResult): Uint8Array
    encrypt_full(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    enumerate_objects(match: Attributes): Enumerator
    find_handles(match: Attributes, cancellable?: Gio.Cancellable | null): number[] | null
    find_handles_async(match: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_handles_finish(result: Gio.AsyncResult): number[] | null
    find_objects(match: Attributes, cancellable?: Gio.Cancellable | null): Object[]
    find_objects_async(match: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_objects_finish(result: Gio.AsyncResult): Object[]
    generate_key_pair(mech_type: number, public_attrs: Attributes, private_attrs: Attributes, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* public_key */ Object | null, /* private_key */ Object | null ]
    generate_key_pair_async(mechanism: Mechanism, public_attrs: Attributes, private_attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generate_key_pair_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* public_key */ Object | null, /* private_key */ Object | null ]
    generate_key_pair_full(mechanism: Mechanism, public_attrs: Attributes, private_attrs: Attributes, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* public_key */ Object | null, /* private_key */ Object | null ]
    get_handle(): number
    get_info(): SessionInfo
    get_interaction(): Gio.TlsInteraction | null
    get_module(): Module
    get_options(): SessionOptions
    get_slot(): Slot
    get_state(): number
    init_pin(pin: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    init_pin_async(pin: Uint8Array | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_pin_finish(result: Gio.AsyncResult): boolean
    login(user_type: number, pin: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    login_async(user_type: number, pin: Uint8Array | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    login_finish(result: Gio.AsyncResult): boolean
    login_interactive(user_type: number, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null): boolean
    login_interactive_async(user_type: number, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    login_interactive_finish(result: Gio.AsyncResult): boolean
    logout(cancellable?: Gio.Cancellable | null): boolean
    logout_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    logout_finish(result: Gio.AsyncResult): boolean
    set_interaction(interaction?: Gio.TlsInteraction | null): void
    set_pin(old_pin: Uint8Array | null, new_pin: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    set_pin_async(old_pin: Uint8Array | null, n_old_pin: number, new_pin: Uint8Array | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_pin_finish(result: Gio.AsyncResult): boolean
    sign(key: Object, mech_type: number, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    sign_async(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sign_finish(result: Gio.AsyncResult): Uint8Array
    sign_full(key: Object, mechanism: Mechanism, input: Uint8Array, n_result: number, cancellable?: Gio.Cancellable | null): number
    unwrap_key(wrapper: Object, mech_type: number, input: Uint8Array, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    unwrap_key_async(wrapper: Object, mechanism: Mechanism, input: Uint8Array, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unwrap_key_finish(result: Gio.AsyncResult): Object
    unwrap_key_full(wrapper: Object, mechanism: Mechanism, input: Uint8Array, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    verify(key: Object, mech_type: number, input: Uint8Array, signature: Uint8Array, cancellable?: Gio.Cancellable | null): boolean
    verify_async(key: Object, mechanism: Mechanism, input: Uint8Array, signature: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_finish(result: Gio.AsyncResult): boolean
    verify_full(key: Object, mechanism: Mechanism, input: Uint8Array, signature: Uint8Array, cancellable?: Gio.Cancellable | null): boolean
    wrap_key(wrapper: Object, mech_type: number, wrapped: Object, cancellable?: Gio.Cancellable | null): Uint8Array
    wrap_key_async(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    wrap_key_finish(result: Gio.AsyncResult): Uint8Array
    wrap_key_full(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable?: Gio.Cancellable | null): Uint8Array
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gck.Session */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gck.Session */
    connect(sigName: "discard-handle", callback: (($obj: Session, handle: number) => boolean)): number
    connect_after(sigName: "discard-handle", callback: (($obj: Session, handle: number) => boolean)): number
    emit(sigName: "discard-handle", handle: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::module", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_handle(slot: Slot, session_handle: number, options: SessionOptions): Session
    static open(slot: Slot, options: SessionOptions, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null): Session
    static open_async(slot: Slot, options: SessionOptions, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static open_finish(result: Gio.AsyncResult): Session
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck.Slot */
    enumerate_objects(match: Attributes, options: SessionOptions): Enumerator
    equal(slot2: Slot): boolean
    get_handle(): number
    get_info(): SlotInfo
    get_mechanism_info(mech_type: number): MechanismInfo
    get_mechanisms(): number[]
    get_module(): Module
    get_token_info(): TokenInfo
    has_flags(flags: number): boolean
    hash(): number
    match(uri: UriData): boolean
    open_session(options: SessionOptions, cancellable?: Gio.Cancellable | null): Session
    open_session_async(options: SessionOptions, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_session_finish(result: Gio.AsyncResult): Session
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Slot_ConstructProps)
    _init (config?: Slot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_handle(module: Module, slot_id: number): Slot
    static $gtype: GObject.Type
}
export class Attribute {
    /* Fields of Gck.Attribute */
    type: number
    value: Uint8Array
    length: number
    /* Methods of Gck.Attribute */
    clear(): void
    dump(): void
    dup(): Attribute
    equal(attr2: Attribute): boolean
    free(): void
    get_boolean(): boolean
    get_data(): Uint8Array
    get_date(value: GLib.Date): void
    get_string(): string | null
    get_ulong(): number
    hash(): number
    init_copy(src: Attribute): void
    is_invalid(): boolean
    static name: string
    static new(attr_type: number, value: number, length: number): Attribute
    constructor(attr_type: number, value: number, length: number)
    /* Static methods and pseudo-constructors */
    static new(attr_type: number, value: number, length: number): Attribute
    static new_boolean(attr_type: number, value: boolean): Attribute
    static new_date(attr_type: number, value: GLib.Date): Attribute
    static new_empty(attr_type: number): Attribute
    static new_invalid(attr_type: number): Attribute
    static new_string(attr_type: number, value: string): Attribute
    static new_ulong(attr_type: number, value: number): Attribute
}
export class Attributes {
    /* Methods of Gck.Attributes */
    at(index: number): Attribute
    contains(match: Attribute): boolean
    count(): number
    dump(): void
    find(attr_type: number): Attribute
    find_boolean(attr_type: number): [ /* returnType */ boolean, /* value */ boolean ]
    find_date(attr_type: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    find_string(attr_type: number): [ /* returnType */ boolean, /* value */ string ]
    find_ulong(attr_type: number): [ /* returnType */ boolean, /* value */ number ]
    ref(): Attributes
    ref_sink(): Attributes
    to_string(): string
    unref(): void
    static name: string
    static new(reserved: number): Attributes
    constructor(reserved: number)
    /* Static methods and pseudo-constructors */
    static new(reserved: number): Attributes
}
export class Builder {
    /* Methods of Gck.Builder */
    add_all(attrs: Attributes): void
    add_attribute(attr: Attribute): void
    add_boolean(attr_type: number, value: boolean): void
    add_data(attr_type: number, value: Uint8Array | null): void
    add_date(attr_type: number, value: GLib.Date): void
    add_empty(attr_type: number): void
    add_invalid(attr_type: number): void
    add_only(attrs: Attributes, only_types: number[]): void
    add_string(attr_type: number, value?: string | null): void
    add_ulong(attr_type: number, value: number): void
    clear(): void
    copy(): Builder
    end(): Attributes
    find(attr_type: number): Attribute
    find_boolean(attr_type: number): [ /* returnType */ boolean, /* value */ boolean ]
    find_date(attr_type: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    find_string(attr_type: number): [ /* returnType */ boolean, /* value */ string ]
    find_ulong(attr_type: number): [ /* returnType */ boolean, /* value */ number ]
    init(): void
    init_full(flags: BuilderFlags): void
    ref(): Builder
    set_all(attrs: Attributes): void
    set_boolean(attr_type: number, value: boolean): void
    set_data(attr_type: number, value: Uint8Array | null): void
    set_date(attr_type: number, value: GLib.Date): void
    set_empty(attr_type: number): void
    set_invalid(attr_type: number): void
    set_string(attr_type: number, value: string): void
    set_ulong(attr_type: number, value: number): void
    steal(): Attributes
    take_data(attr_type: number, value: Uint8Array | null): void
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
    n_parameter: number
    static name: string
}
export class MechanismInfo {
    /* Fields of Gck.MechanismInfo */
    min_key_size: number
    max_key_size: number
    flags: number
    /* Methods of Gck.MechanismInfo */
    copy(): MechanismInfo
    free(): void
    static name: string
}
export abstract class ModuleClass {
    /* Fields of Gck.ModuleClass */
    parent: GObject.ObjectClass
    authenticate_slot: (self: Module, slot: Slot, label: string, password: string) => boolean
    authenticate_object: (self: Module, object: Object, label: string, password: string) => boolean
    static name: string
}
export class ModuleInfo {
    /* Fields of Gck.ModuleInfo */
    pkcs11_version_major: number
    pkcs11_version_minor: number
    manufacturer_id: string
    flags: number
    library_description: string
    library_version_major: number
    library_version_minor: number
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
    default_types: number[]
    n_default_types: number
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
    slot_id: number
    state: number
    flags: number
    device_error: number
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
    slot_description: string
    manufacturer_id: string
    flags: number
    hardware_version_major: number
    hardware_version_minor: number
    firmware_version_major: number
    firmware_version_minor: number
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
    manufacturer_id: string
    model: string
    serial_number: string
    flags: number
    max_session_count: number
    session_count: number
    max_rw_session_count: number
    rw_session_count: number
    max_pin_len: number
    min_pin_len: number
    total_public_memory: number
    free_public_memory: number
    total_private_memory: number
    free_private_memory: number
    hardware_version_major: number
    hardware_version_minor: number
    firmware_version_major: number
    firmware_version_minor: number
    utc_time: number
    /* Methods of Gck.TokenInfo */
    copy(): TokenInfo
    free(): void
    static name: string
}
export class UriData {
    /* Fields of Gck.UriData */
    any_unrecognized: boolean
    module_info: ModuleInfo
    token_info: TokenInfo
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