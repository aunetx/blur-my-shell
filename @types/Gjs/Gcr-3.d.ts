/**
 * Gcr-3
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gck from './Gck-1';

export enum CertificateChainStatus {
    UNKNOWN,
    INCOMPLETE,
    DISTRUSTED,
    SELFSIGNED,
    PINNED,
    ANCHORED,
}
export enum CertificateRequestFormat {
    CERTIFICATE_REQUEST_PKCS10,
}
export enum DataError {
    FAILURE,
    UNRECOGNIZED,
    CANCELLED,
    LOCKED,
}
export enum DataFormat {
    ALL,
    INVALID,
    DER_PRIVATE_KEY,
    DER_PRIVATE_KEY_RSA,
    DER_PRIVATE_KEY_DSA,
    DER_PRIVATE_KEY_EC,
    DER_SUBJECT_PUBLIC_KEY,
    DER_CERTIFICATE_X509,
    DER_PKCS7,
    DER_PKCS8,
    DER_PKCS8_PLAIN,
    DER_PKCS8_ENCRYPTED,
    DER_PKCS10,
    DER_SPKAC,
    BASE64_SPKAC,
    DER_PKCS12,
    OPENSSH_PUBLIC,
    OPENPGP_PACKET,
    OPENPGP_ARMOR,
    PEM,
    PEM_PRIVATE_KEY_RSA,
    PEM_PRIVATE_KEY_DSA,
    PEM_CERTIFICATE_X509,
    PEM_PKCS7,
    PEM_PKCS8_PLAIN,
    PEM_PKCS8_ENCRYPTED,
    PEM_PKCS12,
    PEM_PRIVATE_KEY,
    PEM_PKCS10,
    PEM_PRIVATE_KEY_EC,
    PEM_PUBLIC_KEY,
}
export enum PromptReply {
    CANCEL,
    CONTINUE,
}
export enum SystemPromptError {
    SYSTEM_PROMPT_IN_PROGRESS,
}
export enum SystemPrompterMode {
    SINGLE,
    MULTIPLE,
}
export enum CertificateChainFlags {
    NONE,
    NO_LOOKUPS,
}
export enum ColumnFlags {
    NONE,
    HIDDEN,
    SORTABLE,
}
export const ICON_CERTIFICATE: string
export const ICON_GNUPG: string
export const ICON_HOME_DIRECTORY: string
export const ICON_KEY: string
export const ICON_KEY_PAIR: string
export const ICON_PASSWORD: string
export const ICON_SMART_CARD: string
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const PURPOSE_CLIENT_AUTH: string
export const PURPOSE_CODE_SIGNING: string
export const PURPOSE_EMAIL: string
export const PURPOSE_SERVER_AUTH: string
export const SECRET_EXCHANGE_PROTOCOL_1: string
export const UNLOCK_OPTION_ALWAYS: string
export const UNLOCK_OPTION_IDLE: string
export const UNLOCK_OPTION_SESSION: string
export const UNLOCK_OPTION_TIMEOUT: string
export function certificate_compare(first?: Comparable | null, other?: Comparable | null): number
export function data_error_get_domain(): GLib.Quark
export function fingerprint_from_attributes(attrs: Gck.Attributes, checksum_type: GLib.ChecksumType): Uint8Array | null
export function fingerprint_from_subject_public_key_info(key_info: Uint8Array, checksum_type: GLib.ChecksumType): Uint8Array | null
export function icon_for_token(token_info: Gck.TokenInfo): Gio.Icon
export function importer_create_for_parsed(parsed: Parsed): Importer[]
export function importer_queue_and_filter_for_parsed(importers: Importer[], parsed: Parsed): Importer[]
export function importer_register(importer_type: GObject.Type, attrs: Gck.Attributes): void
export function importer_register_well_known(): void
export function mock_prompter_disconnect(): void
export function mock_prompter_expect_close(): void
export function mock_prompter_expect_confirm_cancel(): void
export function mock_prompter_expect_password_cancel(): void
export function mock_prompter_get_delay_msec(): number
export function mock_prompter_is_expecting(): boolean
export function mock_prompter_is_prompting(): boolean
export function mock_prompter_set_delay_msec(delay_msec: number): void
export function mock_prompter_start(): string
export function mock_prompter_stop(): void
export function parsed_unref(parsed?: object | null): void
export function pkcs11_add_module(module: Gck.Module): void
export function pkcs11_add_module_from_file(module_path: string, unused?: object | null): boolean
export function pkcs11_get_modules(): Gck.Module[]
export function pkcs11_get_trust_lookup_slots(): Gck.Slot[]
export function pkcs11_get_trust_lookup_uris(): string[] | null
export function pkcs11_get_trust_store_slot(): Gck.Slot | null
export function pkcs11_get_trust_store_uri(): string | null
export function pkcs11_initialize(cancellable?: Gio.Cancellable | null): boolean
export function pkcs11_initialize_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function pkcs11_initialize_finish(result: Gio.AsyncResult): boolean
export function pkcs11_set_modules(modules: Gck.Module[]): void
export function pkcs11_set_trust_lookup_uris(pkcs11_uris?: string | null): void
export function pkcs11_set_trust_store_uri(pkcs11_uri?: string | null): void
export function trust_add_pinned_certificate(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null): boolean
export function trust_add_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function trust_add_pinned_certificate_finish(result: Gio.AsyncResult): boolean
export function trust_is_certificate_anchored(certificate: Certificate, purpose: string, cancellable?: Gio.Cancellable | null): boolean
export function trust_is_certificate_anchored_async(certificate: Certificate, purpose: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function trust_is_certificate_anchored_finish(result: Gio.AsyncResult): boolean
export function trust_is_certificate_pinned(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null): boolean
export function trust_is_certificate_pinned_async(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function trust_is_certificate_pinned_finish(result: Gio.AsyncResult): boolean
export function trust_remove_pinned_certificate(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null): boolean
export function trust_remove_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function trust_remove_pinned_certificate_finish(result: Gio.AsyncResult): boolean
export interface FilterCollectionFunc {
    (object: GObject.Object): boolean
}
export class Certificate {
    /* Properties of Gcr.Certificate */
    readonly description: string
    readonly expiry: GLib.Date
    readonly icon: Gio.Icon
    readonly issuer: string
    readonly label: string
    readonly markup: string
    readonly subject: string
    /* Methods of Gcr.Certificate */
    get_basic_constraints(): [ /* returnType */ boolean, /* is_ca */ boolean | null, /* path_len */ number | null ]
    get_der_data(): Uint8Array
    get_expiry_date(): GLib.Date
    get_fingerprint(type: GLib.ChecksumType): Uint8Array
    get_fingerprint_hex(type: GLib.ChecksumType): string
    get_issued_date(): GLib.Date
    get_issuer_cn(): string
    get_issuer_dn(): string
    get_issuer_name(): string
    get_issuer_part(part: string): string | null
    get_issuer_raw(): Uint8Array
    get_key_size(): number
    get_markup_text(): string
    get_serial_number(): Uint8Array
    get_serial_number_hex(): string
    get_subject_cn(): string
    get_subject_dn(): string
    get_subject_name(): string
    get_subject_part(part: string): string | null
    get_subject_raw(): Uint8Array
    is_issuer(issuer: Certificate): boolean
    mixin_emit_notify(): void
    /* Methods of Gcr.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of Gcr.Certificate */
    vfunc_get_der_data(): Uint8Array
    /* Virtual methods of Gcr.Comparable */
    vfunc_compare(other?: Comparable | null): number
    static name: string
    /* Static methods and pseudo-constructors */
    static compare(first?: Comparable | null, other?: Comparable | null): number
}
export class Collection {
    /* Methods of Gcr.Collection */
    contains(object: GObject.Object): boolean
    emit_added(object: GObject.Object): void
    emit_removed(object: GObject.Object): void
    get_length(): number
    get_objects(): GObject.Object[]
    /* Virtual methods of Gcr.Collection */
    vfunc_added(object: GObject.Object): void
    vfunc_contains(object: GObject.Object): boolean
    vfunc_get_length(): number
    vfunc_get_objects(): GObject.Object[]
    vfunc_removed(object: GObject.Object): void
    /* Signals of Gcr.Collection */
    connect(sigName: "added", callback: (($obj: Collection, object: GObject.Object) => void)): number
    connect_after(sigName: "added", callback: (($obj: Collection, object: GObject.Object) => void)): number
    emit(sigName: "added", object: GObject.Object): void
    connect(sigName: "removed", callback: (($obj: Collection, object: GObject.Object) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Collection, object: GObject.Object) => void)): number
    emit(sigName: "removed", object: GObject.Object): void
    static name: string
}
export class Comparable {
    /* Methods of Gcr.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of Gcr.Comparable */
    vfunc_compare(other?: Comparable | null): number
    static name: string
}
export interface ImportInteraction_ConstructProps extends Gio.TlsInteraction_ConstructProps {
}
export class ImportInteraction {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.ImportInteraction */
    supplement(builder: Gck.Builder, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    supplement_async(builder: Gck.Builder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    supplement_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    supplement_prep(builder: Gck.Builder): void
    /* Methods of Gio.TlsInteraction */
    ask_password(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    ask_password_async(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    ask_password_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    invoke_ask_password(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    invoke_request_certificate(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    request_certificate(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    request_certificate_async(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    request_certificate_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult
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
    /* Virtual methods of Gcr.ImportInteraction */
    vfunc_supplement(builder: Gck.Builder, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    vfunc_supplement_async(builder: Gck.Builder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_supplement_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    vfunc_supplement_prep(builder: Gck.Builder): void
    /* Virtual methods of Gio.TlsInteraction */
    vfunc_ask_password(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    vfunc_ask_password_async(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_ask_password_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    vfunc_request_certificate(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    vfunc_request_certificate_async(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_request_certificate_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImportInteraction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImportInteraction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ImportInteraction_ConstructProps)
    _init (config?: ImportInteraction_ConstructProps): void
    static $gtype: GObject.Type
}
export class Importer {
    /* Properties of Gcr.Importer */
    readonly icon: Gio.Icon
    interaction: Gio.TlsInteraction
    readonly label: string
    readonly uri: string
    /* Methods of Gcr.Importer */
    get_interaction(): Gio.TlsInteraction | null
    import(cancellable?: Gio.Cancellable | null): boolean
    import_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    import_finish(result: Gio.AsyncResult): boolean
    queue_for_parsed(parsed: Parsed): boolean
    set_interaction(interaction: Gio.TlsInteraction): void
    /* Virtual methods of Gcr.Importer */
    vfunc_import_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_import_finish(result: Gio.AsyncResult): boolean
    vfunc_import_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_queue_for_parsed(parsed: Parsed): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static create_for_parsed(parsed: Parsed): Importer[]
    static queue_and_filter_for_parsed(importers: Importer[], parsed: Parsed): Importer[]
    static register(importer_type: GObject.Type, attrs: Gck.Attributes): void
    static register_well_known(): void
}
export class Prompt {
    /* Properties of Gcr.Prompt */
    caller_window: string
    cancel_label: string
    choice_chosen: boolean
    choice_label: string
    continue_label: string
    description: string
    message: string
    password_new: boolean
    readonly password_strength: number
    title: string
    warning: string
    /* Methods of Gcr.Prompt */
    close(): void
    confirm(cancellable?: Gio.Cancellable | null): PromptReply
    confirm_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    confirm_finish(result: Gio.AsyncResult): PromptReply
    confirm_run(cancellable?: Gio.Cancellable | null): PromptReply
    get_caller_window(): string
    get_cancel_label(): string
    get_choice_chosen(): boolean
    get_choice_label(): string
    get_continue_label(): string
    get_description(): string
    get_message(): string
    get_password_new(): boolean
    get_password_strength(): number
    get_title(): string
    get_warning(): string
    password(cancellable?: Gio.Cancellable | null): string
    password_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    password_finish(result: Gio.AsyncResult): string
    password_run(cancellable?: Gio.Cancellable | null): string
    reset(): void
    set_caller_window(window_id: string): void
    set_cancel_label(cancel_label: string): void
    set_choice_chosen(chosen: boolean): void
    set_choice_label(choice_label?: string | null): void
    set_continue_label(continue_label: string): void
    set_description(description: string): void
    set_message(message: string): void
    set_password_new(new_password: boolean): void
    set_title(title: string): void
    set_warning(warning?: string | null): void
    /* Virtual methods of Gcr.Prompt */
    vfunc_prompt_close(): void
    vfunc_prompt_confirm_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_prompt_confirm_finish(result: Gio.AsyncResult): PromptReply
    vfunc_prompt_password_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_prompt_password_finish(result: Gio.AsyncResult): string
    /* Signals of Gcr.Prompt */
    connect(sigName: "prompt-close", callback: (($obj: Prompt) => void)): number
    connect_after(sigName: "prompt-close", callback: (($obj: Prompt) => void)): number
    emit(sigName: "prompt-close"): void
    static name: string
}
export interface CertificateChain_ConstructProps extends GObject.Object_ConstructProps {
}
export class CertificateChain {
    /* Properties of Gcr.CertificateChain */
    readonly length: number
    /* Fields of Gcr.CertificateChain */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.CertificateChain */
    add(certificate: Certificate): void
    build(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable?: Gio.Cancellable | null): boolean
    build_async(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    build_finish(result: Gio.AsyncResult): boolean
    get_anchor(): Certificate
    get_certificate(index: number): Certificate
    get_endpoint(): Certificate
    get_length(): number
    get_status(): CertificateChainStatus
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
    connect(sigName: "notify", callback: (($obj: CertificateChain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CertificateChain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::length", callback: (($obj: CertificateChain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: CertificateChain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CertificateChain_ConstructProps)
    _init (config?: CertificateChain_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CertificateChain
    static $gtype: GObject.Type
}
export interface CertificateRequest_ConstructProps extends GObject.Object_ConstructProps {
    private_key?: Gck.Object
}
export class CertificateRequest {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.CertificateRequest */
    complete(cancellable?: Gio.Cancellable | null): boolean
    complete_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    complete_finish(result: Gio.AsyncResult): boolean
    encode(textual: boolean): Uint8Array
    get_format(): CertificateRequestFormat
    get_private_key(): Gck.Object
    set_cn(cn: string): void
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
    connect(sigName: "notify", callback: (($obj: CertificateRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CertificateRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CertificateRequest_ConstructProps)
    _init (config?: CertificateRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static capable(private_key: Gck.Object, cancellable?: Gio.Cancellable | null): boolean
    static capable_async(private_key: Gck.Object, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static capable_finish(result: Gio.AsyncResult): boolean
    static prepare(format: CertificateRequestFormat, private_key: Gck.Object): CertificateRequest
    static $gtype: GObject.Type
}
export interface FilterCollection_ConstructProps extends GObject.Object_ConstructProps {
    underlying?: Collection
}
export class FilterCollection {
    /* Fields of Gcr.FilterCollection */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.FilterCollection */
    get_underlying(): Collection
    refilter(): void
    set_callback(callback: FilterCollectionFunc | null): void
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
    /* Methods of Gcr.Collection */
    contains(object: GObject.Object): boolean
    emit_added(object: GObject.Object): void
    emit_removed(object: GObject.Object): void
    get_length(): number
    get_objects(): GObject.Object[]
    /* Virtual methods of Gcr.FilterCollection */
    vfunc_added(object: GObject.Object): void
    vfunc_contains(object: GObject.Object): boolean
    vfunc_get_length(): number
    vfunc_get_objects(): GObject.Object[]
    vfunc_removed(object: GObject.Object): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gcr.Collection */
    connect(sigName: "added", callback: (($obj: FilterCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "added", callback: (($obj: FilterCollection, object: GObject.Object) => void)): number
    emit(sigName: "added", object: GObject.Object): void
    connect(sigName: "removed", callback: (($obj: FilterCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "removed", callback: (($obj: FilterCollection, object: GObject.Object) => void)): number
    emit(sigName: "removed", object: GObject.Object): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterCollection_ConstructProps)
    _init (config?: FilterCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_callback(underlying: Collection, callback: FilterCollectionFunc | null): FilterCollection
    static $gtype: GObject.Type
}
export interface Parser_ConstructProps extends GObject.Object_ConstructProps {
}
export class Parser {
    /* Properties of Gcr.Parser */
    readonly parsed_attributes: Gck.Attributes
    readonly parsed_description: string
    readonly parsed_label: string
    /* Fields of Gcr.Parser */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.Parser */
    add_password(password?: string | null): void
    format_disable(format: DataFormat): void
    format_enable(format: DataFormat): void
    format_supported(format: DataFormat): boolean
    get_filename(): string
    get_parsed(): Parsed
    get_parsed_attributes(): Gck.Attributes | null
    get_parsed_block(): Uint8Array | null
    get_parsed_bytes(): GLib.Bytes
    get_parsed_description(): string | null
    get_parsed_format(): DataFormat
    get_parsed_label(): string | null
    parse_bytes(data: GLib.Bytes): boolean
    parse_data(data: Uint8Array): boolean
    parse_stream(input: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    parse_stream_async(input: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    parse_stream_finish(result: Gio.AsyncResult): boolean
    set_filename(filename?: string | null): void
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
    /* Virtual methods of Gcr.Parser */
    vfunc_authenticate(count: number): boolean
    vfunc_parsed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gcr.Parser */
    connect(sigName: "authenticate", callback: (($obj: Parser, count: number) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Parser, count: number) => boolean)): number
    emit(sigName: "authenticate", count: number): void
    connect(sigName: "parsed", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "parsed", callback: (($obj: Parser) => void)): number
    emit(sigName: "parsed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parsed-attributes", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parsed-attributes", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parsed-description", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parsed-description", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parsed-label", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parsed-label", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static $gtype: GObject.Type
}
export interface Pkcs11Certificate_ConstructProps extends Gck.Object_ConstructProps {
    attributes?: Gck.Attributes
}
export class Pkcs11Certificate {
    /* Properties of Gcr.Certificate */
    readonly description: string
    readonly expiry: GLib.Date
    readonly icon: Gio.Icon
    readonly issuer: string
    readonly label: string
    readonly markup: string
    readonly subject: string
    /* Fields of Gcr.Pkcs11Certificate */
    parent: Gck.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.Pkcs11Certificate */
    get_attributes(): Gck.Attributes
    /* Methods of Gck.Object */
    cache_lookup(attr_types: number[], cancellable?: Gio.Cancellable | null): Gck.Attributes
    cache_lookup_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cache_lookup_finish(result: Gio.AsyncResult): Gck.Attributes
    destroy(cancellable?: Gio.Cancellable | null): boolean
    destroy_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    destroy_finish(result: Gio.AsyncResult): boolean
    equal(object2: Gck.Object): boolean
    get_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_data(attr_type: number, cancellable?: Gio.Cancellable | null): Uint8Array
    get_data_async(attr_type: number, allocator: Gck.Allocator, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_data_finish(result: Gio.AsyncResult): Uint8Array
    get_finish(result: Gio.AsyncResult): Gck.Attributes
    get_full(attr_types: number[], cancellable?: Gio.Cancellable | null): Gck.Attributes
    get_handle(): number
    get_module(): Gck.Module
    get_session(): Gck.Session
    get_template(attr_type: number, cancellable?: Gio.Cancellable | null): Gck.Attributes
    get_template_async(attr_type: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_template_finish(result: Gio.AsyncResult): Gck.Attributes
    hash(): number
    set(attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null): boolean
    set_async(attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_finish(result: Gio.AsyncResult): boolean
    set_template(attr_type: number, attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null): boolean
    set_template_async(attr_type: number, attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    /* Methods of Gcr.Certificate */
    get_basic_constraints(): [ /* returnType */ boolean, /* is_ca */ boolean | null, /* path_len */ number | null ]
    get_der_data(): Uint8Array
    get_expiry_date(): GLib.Date
    get_fingerprint(type: GLib.ChecksumType): Uint8Array
    get_fingerprint_hex(type: GLib.ChecksumType): string
    get_issued_date(): GLib.Date
    get_issuer_cn(): string
    get_issuer_dn(): string
    get_issuer_name(): string
    get_issuer_part(part: string): string | null
    get_issuer_raw(): Uint8Array
    get_key_size(): number
    get_markup_text(): string
    get_serial_number(): Uint8Array
    get_serial_number_hex(): string
    get_subject_cn(): string
    get_subject_dn(): string
    get_subject_name(): string
    get_subject_part(part: string): string | null
    get_subject_raw(): Uint8Array
    is_issuer(issuer: Certificate): boolean
    mixin_emit_notify(): void
    /* Methods of Gcr.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of Gcr.Pkcs11Certificate */
    vfunc_get_der_data(): Uint8Array
    vfunc_compare(other?: Comparable | null): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expiry", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expiry", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::issuer", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::issuer", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::markup", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pkcs11Certificate_ConstructProps)
    _init (config?: Pkcs11Certificate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static lookup_issuer(certificate: Certificate, cancellable?: Gio.Cancellable | null): Certificate
    static lookup_issuer_async(certificate: Certificate, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static lookup_issuer_finish(result: Gio.AsyncResult): Certificate
    static compare(first?: Comparable | null, other?: Comparable | null): number
    static $gtype: GObject.Type
}
export interface SecretExchange_ConstructProps extends GObject.Object_ConstructProps {
    protocol?: string
}
export class SecretExchange {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.SecretExchange */
    begin(): string
    get_protocol(): string
    get_secret(): string[]
    receive(exchange: string): boolean
    send(secret: string | null, secret_len: number): string
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
    /* Virtual methods of Gcr.SecretExchange */
    vfunc_derive_transport_key(peer: number, n_peer: number): boolean
    vfunc_generate_exchange_key(scheme: string, public_key: number, n_public_key: number): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SecretExchange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SecretExchange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SecretExchange_ConstructProps)
    _init (config?: SecretExchange_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(protocol?: string | null): SecretExchange
    static $gtype: GObject.Type
}
export interface SimpleCertificate_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleCertificate {
    /* Properties of Gcr.Certificate */
    readonly description: string
    readonly expiry: GLib.Date
    readonly icon: Gio.Icon
    readonly issuer: string
    readonly label: string
    readonly markup: string
    readonly subject: string
    /* Fields of Gcr.SimpleCertificate */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gcr.Certificate */
    get_basic_constraints(): [ /* returnType */ boolean, /* is_ca */ boolean | null, /* path_len */ number | null ]
    get_der_data(): Uint8Array
    get_expiry_date(): GLib.Date
    get_fingerprint(type: GLib.ChecksumType): Uint8Array
    get_fingerprint_hex(type: GLib.ChecksumType): string
    get_issued_date(): GLib.Date
    get_issuer_cn(): string
    get_issuer_dn(): string
    get_issuer_name(): string
    get_issuer_part(part: string): string | null
    get_issuer_raw(): Uint8Array
    get_key_size(): number
    get_markup_text(): string
    get_serial_number(): Uint8Array
    get_serial_number_hex(): string
    get_subject_cn(): string
    get_subject_dn(): string
    get_subject_name(): string
    get_subject_part(part: string): string | null
    get_subject_raw(): Uint8Array
    is_issuer(issuer: Certificate): boolean
    mixin_emit_notify(): void
    /* Methods of Gcr.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of Gcr.SimpleCertificate */
    vfunc_get_der_data(): Uint8Array
    vfunc_compare(other?: Comparable | null): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expiry", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expiry", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::issuer", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::issuer", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::markup", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleCertificate_ConstructProps)
    _init (config?: SimpleCertificate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array): SimpleCertificate
    static compare(first?: Comparable | null, other?: Comparable | null): number
    static $gtype: GObject.Type
}
export interface SimpleCollection_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleCollection {
    /* Fields of Gcr.SimpleCollection */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.SimpleCollection */
    add(object: GObject.Object): void
    remove(object: GObject.Object): void
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
    /* Methods of Gcr.Collection */
    contains(object: GObject.Object): boolean
    emit_added(object: GObject.Object): void
    emit_removed(object: GObject.Object): void
    get_length(): number
    get_objects(): GObject.Object[]
    /* Virtual methods of Gcr.SimpleCollection */
    vfunc_added(object: GObject.Object): void
    vfunc_contains(object: GObject.Object): boolean
    vfunc_get_length(): number
    vfunc_get_objects(): GObject.Object[]
    vfunc_removed(object: GObject.Object): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gcr.Collection */
    connect(sigName: "added", callback: (($obj: SimpleCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "added", callback: (($obj: SimpleCollection, object: GObject.Object) => void)): number
    emit(sigName: "added", object: GObject.Object): void
    connect(sigName: "removed", callback: (($obj: SimpleCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "removed", callback: (($obj: SimpleCollection, object: GObject.Object) => void)): number
    emit(sigName: "removed", object: GObject.Object): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleCollection_ConstructProps)
    _init (config?: SimpleCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleCollection
    static $gtype: GObject.Type
}
export interface SshAskpass_ConstructProps extends GObject.Object_ConstructProps {
    interaction?: Gio.TlsInteraction
}
export class SshAskpass {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.SshAskpass */
    get_interaction(): Gio.TlsInteraction
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
    connect(sigName: "notify", callback: (($obj: SshAskpass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SshAskpass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SshAskpass_ConstructProps)
    _init (config?: SshAskpass_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(interaction: Gio.TlsInteraction): SshAskpass
    static child_setup(askpass?: object | null): void
    static $gtype: GObject.Type
}
export interface SystemPrompt_ConstructProps extends GObject.Object_ConstructProps {
    bus_name?: string
    secret_exchange?: SecretExchange
    timeout_seconds?: number
    caller_window?: string
    cancel_label?: string
    choice_chosen?: boolean
    choice_label?: string
    continue_label?: string
    description?: string
    message?: string
    password_new?: boolean
    title?: string
    warning?: string
}
export class SystemPrompt {
    /* Properties of Gcr.SystemPrompt */
    secret_exchange: SecretExchange
    /* Properties of Gcr.Prompt */
    caller_window: string
    cancel_label: string
    choice_chosen: boolean
    choice_label: string
    continue_label: string
    description: string
    message: string
    password_new: boolean
    readonly password_strength: number
    title: string
    warning: string
    /* Fields of Gcr.SystemPrompt */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.SystemPrompt */
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    get_secret_exchange(): SecretExchange
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
    /* Methods of Gcr.Prompt */
    confirm(cancellable?: Gio.Cancellable | null): PromptReply
    confirm_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    confirm_finish(result: Gio.AsyncResult): PromptReply
    confirm_run(cancellable?: Gio.Cancellable | null): PromptReply
    get_caller_window(): string
    get_cancel_label(): string
    get_choice_chosen(): boolean
    get_choice_label(): string
    get_continue_label(): string
    get_description(): string
    get_message(): string
    get_password_new(): boolean
    get_password_strength(): number
    get_title(): string
    get_warning(): string
    password(cancellable?: Gio.Cancellable | null): string
    password_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    password_finish(result: Gio.AsyncResult): string
    password_run(cancellable?: Gio.Cancellable | null): string
    reset(): void
    set_caller_window(window_id: string): void
    set_cancel_label(cancel_label: string): void
    set_choice_chosen(chosen: boolean): void
    set_choice_label(choice_label?: string | null): void
    set_continue_label(continue_label: string): void
    set_description(description: string): void
    set_message(message: string): void
    set_password_new(new_password: boolean): void
    set_title(title: string): void
    set_warning(warning?: string | null): void
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gcr.SystemPrompt */
    vfunc_prompt_close(): void
    vfunc_prompt_confirm_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_prompt_confirm_finish(result: Gio.AsyncResult): PromptReply
    vfunc_prompt_password_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_prompt_password_finish(result: Gio.AsyncResult): string
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gcr.Prompt */
    connect(sigName: "prompt-close", callback: (($obj: SystemPrompt) => void)): number
    connect_after(sigName: "prompt-close", callback: (($obj: SystemPrompt) => void)): number
    emit(sigName: "prompt-close"): void
    connect(sigName: "notify::secret-exchange", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secret-exchange", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caller-window", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caller-window", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cancel-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancel-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::choice-chosen", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-chosen", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::choice-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::continue-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continue-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-new", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-new", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-strength", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-strength", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SystemPrompt_ConstructProps)
    _init (config?: SystemPrompt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_get_domain(): GLib.Quark
    static open(timeout_seconds: number, cancellable?: Gio.Cancellable | null): SystemPrompt
    static open_async(timeout_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static open_finish(result: Gio.AsyncResult): SystemPrompt
    static open_for_prompter(prompter_name: string | null, timeout_seconds: number, cancellable?: Gio.Cancellable | null): SystemPrompt
    static open_for_prompter_async(prompter_name: string | null, timeout_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SystemPrompter_ConstructProps extends GObject.Object_ConstructProps {
    prompt_type?: GObject.Type
}
export class SystemPrompter {
    /* Properties of Gcr.SystemPrompter */
    readonly prompting: boolean
    /* Fields of Gcr.SystemPrompter */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.SystemPrompter */
    get_mode(): SystemPrompterMode
    get_prompt_type(): GObject.Type
    get_prompting(): boolean
    register(connection: Gio.DBusConnection): void
    unregister(wait: boolean): void
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
    /* Signals of Gcr.SystemPrompter */
    connect(sigName: "new-prompt", callback: (($obj: SystemPrompter) => Prompt)): number
    connect_after(sigName: "new-prompt", callback: (($obj: SystemPrompter) => Prompt)): number
    emit(sigName: "new-prompt"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemPrompter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::prompting", callback: (($obj: SystemPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prompting", callback: (($obj: SystemPrompter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SystemPrompter_ConstructProps)
    _init (config?: SystemPrompter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: SystemPrompterMode, prompt_type: GObject.Type): SystemPrompter
    static $gtype: GObject.Type
}
export interface UnionCollection_ConstructProps extends GObject.Object_ConstructProps {
}
export class UnionCollection {
    /* Fields of Gcr.UnionCollection */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gcr.UnionCollection */
    add(collection: Collection): void
    elements(): Collection[]
    have(collection: Collection): boolean
    remove(collection: Collection): void
    size(): number
    take(collection: Collection): void
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
    /* Methods of Gcr.Collection */
    contains(object: GObject.Object): boolean
    emit_added(object: GObject.Object): void
    emit_removed(object: GObject.Object): void
    get_length(): number
    get_objects(): GObject.Object[]
    /* Virtual methods of Gcr.UnionCollection */
    vfunc_added(object: GObject.Object): void
    vfunc_contains(object: GObject.Object): boolean
    vfunc_get_length(): number
    vfunc_get_objects(): GObject.Object[]
    vfunc_removed(object: GObject.Object): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnionCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnionCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gcr.Collection */
    connect(sigName: "added", callback: (($obj: UnionCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "added", callback: (($obj: UnionCollection, object: GObject.Object) => void)): number
    emit(sigName: "added", object: GObject.Object): void
    connect(sigName: "removed", callback: (($obj: UnionCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "removed", callback: (($obj: UnionCollection, object: GObject.Object) => void)): number
    emit(sigName: "removed", object: GObject.Object): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnionCollection_ConstructProps)
    _init (config?: UnionCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnionCollection
    static $gtype: GObject.Type
}
export abstract class CertificateChainClass {
    /* Fields of Gcr.CertificateChainClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CertificateChainPrivate {
    static name: string
}
export abstract class CertificateIface {
    /* Fields of Gcr.CertificateIface */
    parent: GObject.TypeInterface
    get_der_data: (self: Certificate) => Uint8Array
    static name: string
}
export abstract class CertificateRequestClass {
    /* Fields of Gcr.CertificateRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CollectionIface {
    /* Fields of Gcr.CollectionIface */
    parent: GObject.TypeInterface
    added: (self: Collection, object: GObject.Object) => void
    removed: (self: Collection, object: GObject.Object) => void
    get_length: (self: Collection) => number
    get_objects: (self: Collection) => GObject.Object[]
    contains: (self: Collection, object: GObject.Object) => boolean
    static name: string
}
export class Column {
    /* Fields of Gcr.Column */
    property_name: string
    property_type: GObject.Type
    column_type: GObject.Type
    label: string
    flags: ColumnFlags
    transformer: GObject.ValueTransform
    user_data: object
    static name: string
}
export abstract class ComparableIface {
    /* Fields of Gcr.ComparableIface */
    parent: GObject.TypeInterface
    compare: (self: Comparable, other?: Comparable | null) => number
    static name: string
}
export abstract class FilterCollectionClass {
    /* Fields of Gcr.FilterCollectionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class FilterCollectionPrivate {
    static name: string
}
export abstract class ImportInteractionIface {
    /* Fields of Gcr.ImportInteractionIface */
    parent: GObject.TypeInterface
    supplement_prep: (interaction: ImportInteraction, builder: Gck.Builder) => void
    supplement: (interaction: ImportInteraction, builder: Gck.Builder, cancellable?: Gio.Cancellable | null) => Gio.TlsInteractionResult
    supplement_async: (interaction: ImportInteraction, builder: Gck.Builder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    supplement_finish: (interaction: ImportInteraction, result: Gio.AsyncResult) => Gio.TlsInteractionResult
    static name: string
}
export abstract class ImporterIface {
    /* Fields of Gcr.ImporterIface */
    parent: GObject.TypeInterface
    queue_for_parsed: (importer: Importer, parsed: Parsed) => boolean
    import_sync: (importer: Importer, cancellable?: Gio.Cancellable | null) => boolean
    import_async: (importer: Importer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    import_finish: (importer: Importer, result: Gio.AsyncResult) => boolean
    static name: string
}
export class Parsed {
    /* Methods of Gcr.Parsed */
    get_attributes(): Gck.Attributes | null
    get_bytes(): GLib.Bytes
    get_data(): Uint8Array | null
    get_description(): string | null
    get_filename(): string
    get_format(): DataFormat
    get_label(): string | null
    ref(): Parsed
    static name: string
    /* Static methods and pseudo-constructors */
    static unref(parsed?: object | null): void
}
export abstract class ParserClass {
    /* Fields of Gcr.ParserClass */
    parent_class: GObject.ObjectClass
    authenticate: (self: Parser, count: number) => boolean
    parsed: (self: Parser) => void
    static name: string
}
export class ParserPrivate {
    static name: string
}
export abstract class Pkcs11CertificateClass {
    static name: string
}
export class Pkcs11CertificatePrivate {
    static name: string
}
export abstract class PromptIface {
    /* Fields of Gcr.PromptIface */
    parent_iface: GObject.TypeInterface
    prompt_password_async: (prompt: Prompt, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    prompt_password_finish: (prompt: Prompt, result: Gio.AsyncResult) => string
    prompt_confirm_async: (prompt: Prompt, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    prompt_confirm_finish: (prompt: Prompt, result: Gio.AsyncResult) => PromptReply
    prompt_close: (prompt: Prompt) => void
    static name: string
}
export abstract class SecretExchangeClass {
    /* Fields of Gcr.SecretExchangeClass */
    generate_exchange_key: (exchange: SecretExchange, scheme: string, public_key: number, n_public_key: number) => boolean
    derive_transport_key: (exchange: SecretExchange, peer: number, n_peer: number) => boolean
    static name: string
}
export class SecretExchangePrivate {
    static name: string
}
export abstract class SimpleCertificateClass {
    /* Fields of Gcr.SimpleCertificateClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SimpleCertificatePrivate {
    static name: string
}
export abstract class SimpleCollectionClass {
    /* Fields of Gcr.SimpleCollectionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SimpleCollectionPrivate {
    static name: string
}
export abstract class SshAskpassClass {
    /* Fields of Gcr.SshAskpassClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SystemPromptClass {
    /* Fields of Gcr.SystemPromptClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SystemPromptPrivate {
    static name: string
}
export abstract class SystemPrompterClass {
    /* Fields of Gcr.SystemPrompterClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SystemPrompterPrivate {
    static name: string
}
export abstract class UnionCollectionClass {
    /* Fields of Gcr.UnionCollectionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class UnionCollectionPrivate {
    static name: string
}