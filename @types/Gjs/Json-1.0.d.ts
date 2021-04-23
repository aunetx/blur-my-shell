/**
 * Json-1.0
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

export enum NodeType {
    OBJECT,
    ARRAY,
    VALUE,
    NULL,
}
export enum ParserError {
    PARSE,
    TRAILING_COMMA,
    MISSING_COMMA,
    MISSING_COLON,
    INVALID_BAREWORD,
    EMPTY_MEMBER_NAME,
    INVALID_DATA,
    UNKNOWN,
}
export enum PathError {
    QUERY,
}
export enum ReaderError {
    NO_ARRAY,
    INVALID_INDEX,
    NO_OBJECT,
    INVALID_MEMBER,
    INVALID_NODE,
    NO_VALUE,
    INVALID_TYPE,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION_S: string
export function boxed_can_deserialize(gboxed_type: GObject.Type, node_type: NodeType): boolean
export function boxed_can_serialize(gboxed_type: GObject.Type): [ /* returnType */ boolean, /* node_type */ NodeType ]
export function boxed_deserialize(gboxed_type: GObject.Type, node: Node): object | null
export function boxed_serialize(gboxed_type: GObject.Type, boxed?: object | null): Node | null
export function construct_gobject(gtype: GObject.Type, data: string, length: number): GObject.Object
export function from_string(str: string): Node | null
export function gobject_deserialize(gtype: GObject.Type, node: Node): GObject.Object
export function gobject_from_data(gtype: GObject.Type, data: string, length: number): GObject.Object
export function gobject_serialize(gobject: GObject.Object): Node
export function gobject_to_data(gobject: GObject.Object): [ /* returnType */ string, /* length */ number ]
export function gvariant_deserialize(json_node: Node, signature?: string | null): GLib.Variant
export function gvariant_deserialize_data(json: string, length: number, signature?: string | null): GLib.Variant
export function gvariant_serialize(variant: GLib.Variant): Node
export function gvariant_serialize_data(variant: GLib.Variant): [ /* returnType */ string, /* length */ number | null ]
export function parser_error_quark(): GLib.Quark
export function path_error_quark(): GLib.Quark
export function reader_error_quark(): GLib.Quark
export function serialize_gobject(gobject: GObject.Object): [ /* returnType */ string, /* length */ number ]
export function string_compare(a: string, b: string): number
export function string_equal(a: string, b: string): boolean
export function string_hash(key: string): number
export function to_string(node: Node, pretty: boolean): string
export interface ArrayForeach {
    (array: Array, index_: number, element_node: Node): void
}
export interface BoxedDeserializeFunc {
    (node: Node): object | null
}
export interface BoxedSerializeFunc {
    (boxed?: object | null): Node
}
export interface ObjectForeach {
    (object: Object, member_name: string, member_node: Node): void
}
export class Serializable {
    /* Methods of Json.Serializable */
    default_deserialize_property(property_name: string, value: any, pspec: GObject.ParamSpec, property_node: Node): boolean
    default_serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Node | null
    deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [ /* returnType */ boolean, /* value */ any ]
    find_property(name: string): GObject.ParamSpec | null
    get_property(pspec: GObject.ParamSpec): /* value */ any
    list_properties(): GObject.ParamSpec[]
    serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Node
    set_property(pspec: GObject.ParamSpec, value: any): void
    /* Virtual methods of Json.Serializable */
    vfunc_deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [ /* returnType */ boolean, /* value */ any ]
    vfunc_find_property(name: string): GObject.ParamSpec | null
    vfunc_get_property(pspec: GObject.ParamSpec): /* value */ any
    vfunc_serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Node
    vfunc_set_property(pspec: GObject.ParamSpec, value: any): void
    static name: string
}
export interface Builder_ConstructProps extends GObject.Object_ConstructProps {
    immutable?: boolean
}
export class Builder {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Json.Builder */
    add_boolean_value(value: boolean): Builder | null
    add_double_value(value: number): Builder | null
    add_int_value(value: number): Builder | null
    add_null_value(): Builder | null
    add_string_value(value: string): Builder | null
    add_value(node: Node): Builder | null
    begin_array(): Builder | null
    begin_object(): Builder | null
    end_array(): Builder | null
    end_object(): Builder | null
    get_root(): Node | null
    reset(): void
    set_member_name(member_name: string): Builder | null
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
    connect(sigName: "notify", callback: (($obj: Builder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Builder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Builder_ConstructProps)
    _init (config?: Builder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Builder
    static new_immutable(): Builder
    static $gtype: GObject.Type
}
export interface Generator_ConstructProps extends GObject.Object_ConstructProps {
    indent?: number
    indent_char?: number
    pretty?: boolean
    root?: Node
}
export class Generator {
    /* Properties of Json.Generator */
    indent: number
    indent_char: number
    pretty: boolean
    root: Node
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Json.Generator */
    get_indent(): number
    get_indent_char(): number
    get_pretty(): boolean
    get_root(): Node | null
    set_indent(indent_level: number): void
    set_indent_char(indent_char: number): void
    set_pretty(is_pretty: boolean): void
    set_root(node: Node): void
    to_data(): [ /* returnType */ string, /* length */ number ]
    to_file(filename: string): boolean
    to_gstring(string: GLib.String): GLib.String
    to_stream(stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::indent", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent-char", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-char", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pretty", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Generator_ConstructProps)
    _init (config?: Generator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Generator
    static $gtype: GObject.Type
}
export interface Parser_ConstructProps extends GObject.Object_ConstructProps {
    immutable?: boolean
}
export class Parser {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Json.Parser */
    get_current_line(): number
    get_current_pos(): number
    get_root(): Node | null
    has_assignment(): [ /* returnType */ boolean, /* variable_name */ string | null ]
    load_from_data(data: string, length: number): boolean
    load_from_file(filename: string): boolean
    load_from_mapped_file(filename: string): boolean
    load_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    load_from_stream_async(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_from_stream_finish(result: Gio.AsyncResult): boolean
    steal_root(): Node | null
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
    /* Virtual methods of Json.Parser */
    vfunc_array_element(array: Array, index_: number): void
    vfunc_array_end(array: Array): void
    vfunc_array_start(): void
    vfunc_error(error: GLib.Error): void
    vfunc_object_end(object: Object): void
    vfunc_object_member(object: Object, member_name: string): void
    vfunc_object_start(): void
    vfunc_parse_end(): void
    vfunc_parse_start(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Json.Parser */
    connect(sigName: "array-element", callback: (($obj: Parser, array: Array, index_: number) => void)): number
    connect_after(sigName: "array-element", callback: (($obj: Parser, array: Array, index_: number) => void)): number
    emit(sigName: "array-element", array: Array, index_: number): void
    connect(sigName: "array-end", callback: (($obj: Parser, array: Array) => void)): number
    connect_after(sigName: "array-end", callback: (($obj: Parser, array: Array) => void)): number
    emit(sigName: "array-end", array: Array): void
    connect(sigName: "array-start", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "array-start", callback: (($obj: Parser) => void)): number
    emit(sigName: "array-start"): void
    connect(sigName: "error", callback: (($obj: Parser, error?: object | null) => void)): number
    connect_after(sigName: "error", callback: (($obj: Parser, error?: object | null) => void)): number
    emit(sigName: "error", error?: object | null): void
    connect(sigName: "object-end", callback: (($obj: Parser, object: Object) => void)): number
    connect_after(sigName: "object-end", callback: (($obj: Parser, object: Object) => void)): number
    emit(sigName: "object-end", object: Object): void
    connect(sigName: "object-member", callback: (($obj: Parser, object: Object, member_name: string) => void)): number
    connect_after(sigName: "object-member", callback: (($obj: Parser, object: Object, member_name: string) => void)): number
    emit(sigName: "object-member", object: Object, member_name: string): void
    connect(sigName: "object-start", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "object-start", callback: (($obj: Parser) => void)): number
    emit(sigName: "object-start"): void
    connect(sigName: "parse-end", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "parse-end", callback: (($obj: Parser) => void)): number
    emit(sigName: "parse-end"): void
    connect(sigName: "parse-start", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "parse-start", callback: (($obj: Parser) => void)): number
    emit(sigName: "parse-start"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static new_immutable(): Parser
    static $gtype: GObject.Type
}
export interface Path_ConstructProps extends GObject.Object_ConstructProps {
}
export class Path {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Json.Path */
    compile(expression: string): boolean
    match(root: Node): Node
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
    connect(sigName: "notify", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Path_ConstructProps)
    _init (config?: Path_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Path
    static query(expression: string, root: Node): Node
    static $gtype: GObject.Type
}
export interface Reader_ConstructProps extends GObject.Object_ConstructProps {
    root?: Node
}
export class Reader {
    /* Properties of Json.Reader */
    root: Node
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Json.Reader */
    count_elements(): number
    count_members(): number
    end_element(): void
    end_member(): void
    get_boolean_value(): boolean
    get_double_value(): number
    get_error(): GLib.Error | null
    get_int_value(): number
    get_member_name(): string | null
    get_null_value(): boolean
    get_string_value(): string
    get_value(): Node | null
    is_array(): boolean
    is_object(): boolean
    is_value(): boolean
    list_members(): string[]
    read_element(index_: number): boolean
    read_member(member_name: string): boolean
    set_root(root?: Node | null): void
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
    connect(sigName: "notify", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::root", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Reader_ConstructProps)
    _init (config?: Reader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node?: Node | null): Reader
    static $gtype: GObject.Type
}
export class Array {
    /* Methods of Json.Array */
    add_array_element(value?: Array | null): void
    add_boolean_element(value: boolean): void
    add_double_element(value: number): void
    add_element(node: Node): void
    add_int_element(value: number): void
    add_null_element(): void
    add_object_element(value: Object): void
    add_string_element(value: string): void
    dup_element(index_: number): Node
    equal(b: Array): boolean
    foreach_element(func: ArrayForeach): void
    get_array_element(index_: number): Array
    get_boolean_element(index_: number): boolean
    get_double_element(index_: number): number
    get_element(index_: number): Node
    get_elements(): Node[]
    get_int_element(index_: number): number
    get_length(): number
    get_null_element(index_: number): boolean
    get_object_element(index_: number): Object
    get_string_element(index_: number): string
    hash(): number
    is_immutable(): boolean
    ref(): Array
    remove_element(index_: number): void
    seal(): void
    unref(): void
    static name: string
    static new(): Array
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Array
    static sized_new(n_elements: number): Array
}
export abstract class BuilderClass {
    static name: string
}
export class BuilderPrivate {
    static name: string
}
export abstract class GeneratorClass {
    static name: string
}
export class GeneratorPrivate {
    static name: string
}
export class Node {
    /* Methods of Json.Node */
    copy(): Node
    dup_array(): Array | null
    dup_object(): Object | null
    dup_string(): string | null
    equal(b: Node): boolean
    free(): void
    get_array(): Array | null
    get_boolean(): boolean
    get_double(): number
    get_int(): number
    get_node_type(): NodeType
    get_object(): Object | null
    get_parent(): Node | null
    get_string(): string | null
    get_value(): /* value */ any
    get_value_type(): GObject.Type
    hash(): number
    init(type: NodeType): Node
    init_array(array?: Array | null): Node
    init_boolean(value: boolean): Node
    init_double(value: number): Node
    init_int(value: number): Node
    init_null(): Node
    init_object(object?: Object | null): Node
    init_string(value?: string | null): Node
    is_immutable(): boolean
    is_null(): boolean
    ref(): Node
    seal(): void
    set_array(array: Array): void
    set_boolean(value: boolean): void
    set_double(value: number): void
    set_int(value: number): void
    set_object(object?: Object | null): void
    set_parent(parent: Node): void
    set_string(value: string): void
    set_value(value: any): void
    take_array(array: Array): void
    take_object(object: Object): void
    type_name(): string
    unref(): void
    static name: string
    static new(type: NodeType): Node
    constructor(type: NodeType)
    /* Static methods and pseudo-constructors */
    static alloc(): Node
    static new(type: NodeType): Node
}
export class Object {
    /* Methods of Json.Object */
    add_member(member_name: string, node: Node): void
    dup_member(member_name: string): Node | null
    equal(b: Object): boolean
    foreach_member(func: ObjectForeach): void
    get_array_member(member_name: string): Array
    get_boolean_member(member_name: string): boolean
    get_boolean_member_with_default(member_name: string, default_value: boolean): boolean
    get_double_member(member_name: string): number
    get_double_member_with_default(member_name: string, default_value: number): number
    get_int_member(member_name: string): number
    get_int_member_with_default(member_name: string, default_value: number): number
    get_member(member_name: string): Node | null
    get_members(): string[] | null
    get_null_member(member_name: string): boolean
    get_object_member(member_name: string): Object | null
    get_size(): number
    get_string_member(member_name: string): string
    get_string_member_with_default(member_name: string, default_value: string): string
    get_values(): Node[] | null
    has_member(member_name: string): boolean
    hash(): number
    is_immutable(): boolean
    ref(): Object
    remove_member(member_name: string): void
    seal(): void
    set_array_member(member_name: string, value: Array): void
    set_boolean_member(member_name: string, value: boolean): void
    set_double_member(member_name: string, value: number): void
    set_int_member(member_name: string, value: number): void
    set_member(member_name: string, node: Node): void
    set_null_member(member_name: string): void
    set_object_member(member_name: string, value: Object): void
    set_string_member(member_name: string, value: string): void
    unref(): void
    static name: string
    static new(): Object
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Object
}
export class ObjectIter {
    /* Methods of Json.ObjectIter */
    init(object: Object): void
    init_ordered(object: Object): void
    next(): [ /* returnType */ boolean, /* member_name */ string | null, /* member_node */ Node | null ]
    next_ordered(): [ /* returnType */ boolean, /* member_name */ string | null, /* member_node */ Node | null ]
    static name: string
}
export abstract class ParserClass {
    /* Fields of Json.ParserClass */
    parse_start: (parser: Parser) => void
    object_start: (parser: Parser) => void
    object_member: (parser: Parser, object: Object, member_name: string) => void
    object_end: (parser: Parser, object: Object) => void
    array_start: (parser: Parser) => void
    array_element: (parser: Parser, array: Array, index_: number) => void
    array_end: (parser: Parser, array: Array) => void
    parse_end: (parser: Parser) => void
    error: (parser: Parser, error: GLib.Error) => void
    static name: string
}
export class ParserPrivate {
    static name: string
}
export abstract class PathClass {
    static name: string
}
export abstract class ReaderClass {
    static name: string
}
export class ReaderPrivate {
    static name: string
}
export abstract class SerializableIface {
    /* Fields of Json.SerializableIface */
    serialize_property: (serializable: Serializable, property_name: string, value: any, pspec: GObject.ParamSpec) => Node
    deserialize_property: (serializable: Serializable, property_name: string, pspec: GObject.ParamSpec, property_node: Node) => [ /* returnType */ boolean, /* value */ any ]
    find_property: (serializable: Serializable, name: string) => GObject.ParamSpec | null
    set_property: (serializable: Serializable, pspec: GObject.ParamSpec, value: any) => void
    get_property: (serializable: Serializable, pspec: GObject.ParamSpec) => /* value */ any
    static name: string
}