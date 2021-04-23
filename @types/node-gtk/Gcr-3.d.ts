/**
 * Gcr-3
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gck-1.d.ts" />

declare namespace Gcr {

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
export function certificateCompare(first?: Comparable | null, other?: Comparable | null): number
export function dataErrorGetDomain(): GLib.Quark
export function fingerprintFromAttributes(attrs: Gck.Attributes, checksumType: GLib.ChecksumType): any | null
export function fingerprintFromSubjectPublicKeyInfo(keyInfo: any, checksumType: GLib.ChecksumType): any | null
export function iconForToken(tokenInfo: Gck.TokenInfo): Gio.Icon
export function importerCreateForParsed(parsed: Parsed): Importer[]
export function importerQueueAndFilterForParsed(importers: Importer[], parsed: Parsed): Importer[]
export function importerRegister(importerType: GObject.Type, attrs: Gck.Attributes): void
export function importerRegisterWellKnown(): void
export function mockPrompterDisconnect(): void
export function mockPrompterExpectClose(): void
export function mockPrompterExpectConfirmCancel(): void
export function mockPrompterExpectPasswordCancel(): void
export function mockPrompterGetDelayMsec(): number
export function mockPrompterIsExpecting(): boolean
export function mockPrompterIsPrompting(): boolean
export function mockPrompterSetDelayMsec(delayMsec: number): void
export function mockPrompterStart(): string
export function mockPrompterStop(): void
export function parsedUnref(parsed?: object | null): void
export function pkcs11AddModule(module: Gck.Module): void
export function pkcs11AddModuleFromFile(modulePath: string, unused?: object | null): boolean
export function pkcs11GetModules(): Gck.Module[]
export function pkcs11GetTrustLookupSlots(): Gck.Slot[]
export function pkcs11GetTrustLookupUris(): string[] | null
export function pkcs11GetTrustStoreSlot(): Gck.Slot | null
export function pkcs11GetTrustStoreUri(): string | null
export function pkcs11Initialize(cancellable?: Gio.Cancellable | null): boolean
export function pkcs11InitializeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function pkcs11InitializeFinish(result: Gio.AsyncResult): boolean
export function pkcs11SetModules(modules: Gck.Module[]): void
export function pkcs11SetTrustLookupUris(pkcs11Uris?: string | null): void
export function pkcs11SetTrustStoreUri(pkcs11Uri?: string | null): void
export function trustAddPinnedCertificate(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null): boolean
export function trustAddPinnedCertificateAsync(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function trustAddPinnedCertificateFinish(result: Gio.AsyncResult): boolean
export function trustIsCertificateAnchored(certificate: Certificate, purpose: string, cancellable?: Gio.Cancellable | null): boolean
export function trustIsCertificateAnchoredAsync(certificate: Certificate, purpose: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function trustIsCertificateAnchoredFinish(result: Gio.AsyncResult): boolean
export function trustIsCertificatePinned(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null): boolean
export function trustIsCertificatePinnedAsync(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function trustIsCertificatePinnedFinish(result: Gio.AsyncResult): boolean
export function trustRemovePinnedCertificate(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null): boolean
export function trustRemovePinnedCertificateAsync(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function trustRemovePinnedCertificateFinish(result: Gio.AsyncResult): boolean
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
    getBasicConstraints(): [ /* returnType */ boolean, /* isCa */ boolean | null, /* pathLen */ number | null ]
    getDerData(): any
    getExpiryDate(): GLib.Date
    getFingerprint(type: GLib.ChecksumType): any
    getFingerprintHex(type: GLib.ChecksumType): string
    getIssuedDate(): GLib.Date
    getIssuerCn(): string
    getIssuerDn(): string
    getIssuerName(): string
    getIssuerPart(part: string): string | null
    getIssuerRaw(): any
    getKeySize(): number
    getMarkupText(): string
    getSerialNumber(): any
    getSerialNumberHex(): string
    getSubjectCn(): string
    getSubjectDn(): string
    getSubjectName(): string
    getSubjectPart(part: string): string | null
    getSubjectRaw(): any
    isIssuer(issuer: Certificate): boolean
    mixinEmitNotify(): void
    /* Methods of Gcr.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of Gcr.Certificate */
    vfuncGetDerData(): any
    /* Virtual methods of Gcr.Comparable */
    vfuncCompare(other?: Comparable | null): number
    static name: string
    /* Static methods and pseudo-constructors */
    static compare(first?: Comparable | null, other?: Comparable | null): number
}
export class Collection {
    /* Methods of Gcr.Collection */
    contains(object: GObject.Object): boolean
    emitAdded(object: GObject.Object): void
    emitRemoved(object: GObject.Object): void
    getLength(): number
    getObjects(): GObject.Object[]
    /* Virtual methods of Gcr.Collection */
    vfuncAdded(object: GObject.Object): void
    vfuncContains(object: GObject.Object): boolean
    vfuncGetLength(): number
    vfuncGetObjects(): GObject.Object[]
    vfuncRemoved(object: GObject.Object): void
    /* Signals of Gcr.Collection */
    connect(sigName: "added", callback: (($obj: Collection, object: GObject.Object) => void)): number
    connect_after(sigName: "added", callback: (($obj: Collection, object: GObject.Object) => void)): number
    emit(sigName: "added", object: GObject.Object): void
    on(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "removed", callback: (($obj: Collection, object: GObject.Object) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Collection, object: GObject.Object) => void)): number
    emit(sigName: "removed", object: GObject.Object): void
    on(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Comparable {
    /* Methods of Gcr.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of Gcr.Comparable */
    vfuncCompare(other?: Comparable | null): number
    static name: string
}
export interface ImportInteraction_ConstructProps extends Gio.TlsInteraction_ConstructProps {
}
export class ImportInteraction {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.ImportInteraction */
    supplement(builder: Gck.Builder, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    supplementAsync(builder: Gck.Builder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    supplementFinish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    supplementPrep(builder: Gck.Builder): void
    /* Methods of Gio.TlsInteraction */
    askPassword(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    askPasswordAsync(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    askPasswordFinish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    invokeAskPassword(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    invokeRequestCertificate(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    requestCertificate(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    requestCertificateAsync(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    requestCertificateFinish(result: Gio.AsyncResult): Gio.TlsInteractionResult
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
    /* Virtual methods of Gcr.ImportInteraction */
    vfuncSupplement(builder: Gck.Builder, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    vfuncSupplementAsync(builder: Gck.Builder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSupplementFinish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    vfuncSupplementPrep(builder: Gck.Builder): void
    /* Virtual methods of Gio.TlsInteraction */
    vfuncAskPassword(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    vfuncAskPasswordAsync(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncAskPasswordFinish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    vfuncRequestCertificate(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    vfuncRequestCertificateAsync(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRequestCertificateFinish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImportInteraction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImportInteraction, pspec: GObject.ParamSpec) => void)): number
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
    getInteraction(): Gio.TlsInteraction | null
    import(cancellable?: Gio.Cancellable | null): boolean
    importAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    importFinish(result: Gio.AsyncResult): boolean
    queueForParsed(parsed: Parsed): boolean
    setInteraction(interaction: Gio.TlsInteraction): void
    /* Virtual methods of Gcr.Importer */
    vfuncImportAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncImportFinish(result: Gio.AsyncResult): boolean
    vfuncImportSync(cancellable?: Gio.Cancellable | null): boolean
    vfuncQueueForParsed(parsed: Parsed): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static createForParsed(parsed: Parsed): Importer[]
    static queueAndFilterForParsed(importers: Importer[], parsed: Parsed): Importer[]
    static register(importerType: GObject.Type, attrs: Gck.Attributes): void
    static registerWellKnown(): void
}
export class Prompt {
    /* Properties of Gcr.Prompt */
    callerWindow: string
    cancelLabel: string
    choiceChosen: boolean
    choiceLabel: string
    continueLabel: string
    description: string
    message: string
    passwordNew: boolean
    readonly passwordStrength: number
    title: string
    warning: string
    /* Methods of Gcr.Prompt */
    close(): void
    confirm(cancellable?: Gio.Cancellable | null): PromptReply
    confirmAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    confirmFinish(result: Gio.AsyncResult): PromptReply
    confirmRun(cancellable?: Gio.Cancellable | null): PromptReply
    getCallerWindow(): string
    getCancelLabel(): string
    getChoiceChosen(): boolean
    getChoiceLabel(): string
    getContinueLabel(): string
    getDescription(): string
    getMessage(): string
    getPasswordNew(): boolean
    getPasswordStrength(): number
    getTitle(): string
    getWarning(): string
    password(cancellable?: Gio.Cancellable | null): string
    passwordAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    passwordFinish(result: Gio.AsyncResult): string
    passwordRun(cancellable?: Gio.Cancellable | null): string
    reset(): void
    setCallerWindow(windowId: string): void
    setCancelLabel(cancelLabel: string): void
    setChoiceChosen(chosen: boolean): void
    setChoiceLabel(choiceLabel?: string | null): void
    setContinueLabel(continueLabel: string): void
    setDescription(description: string): void
    setMessage(message: string): void
    setPasswordNew(newPassword: boolean): void
    setTitle(title: string): void
    setWarning(warning?: string | null): void
    /* Virtual methods of Gcr.Prompt */
    vfuncPromptClose(): void
    vfuncPromptConfirmAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncPromptConfirmFinish(result: Gio.AsyncResult): PromptReply
    vfuncPromptPasswordAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncPromptPasswordFinish(result: Gio.AsyncResult): string
    /* Signals of Gcr.Prompt */
    connect(sigName: "prompt-close", callback: (($obj: Prompt) => void)): number
    connect_after(sigName: "prompt-close", callback: (($obj: Prompt) => void)): number
    emit(sigName: "prompt-close"): void
    on(sigName: "prompt-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "prompt-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "prompt-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.CertificateChain */
    add(certificate: Certificate): void
    build(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable?: Gio.Cancellable | null): boolean
    buildAsync(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    buildFinish(result: Gio.AsyncResult): boolean
    getAnchor(): Certificate
    getCertificate(index: number): Certificate
    getEndpoint(): Certificate
    getLength(): number
    getStatus(): CertificateChainStatus
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
    connect(sigName: "notify", callback: (($obj: CertificateChain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CertificateChain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: CertificateChain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: CertificateChain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CertificateChain_ConstructProps)
    _init (config?: CertificateChain_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CertificateChain
    static $gtype: GObject.Type
}
export interface CertificateRequest_ConstructProps extends GObject.Object_ConstructProps {
    privateKey?: Gck.Object
}
export class CertificateRequest {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.CertificateRequest */
    complete(cancellable?: Gio.Cancellable | null): boolean
    completeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    completeFinish(result: Gio.AsyncResult): boolean
    encode(textual: boolean): any
    getFormat(): CertificateRequestFormat
    getPrivateKey(): Gck.Object
    setCn(cn: string): void
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
    connect(sigName: "notify", callback: (($obj: CertificateRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CertificateRequest, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CertificateRequest_ConstructProps)
    _init (config?: CertificateRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static capable(privateKey: Gck.Object, cancellable?: Gio.Cancellable | null): boolean
    static capableAsync(privateKey: Gck.Object, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static capableFinish(result: Gio.AsyncResult): boolean
    static prepare(format: CertificateRequestFormat, privateKey: Gck.Object): CertificateRequest
    static $gtype: GObject.Type
}
export interface FilterCollection_ConstructProps extends GObject.Object_ConstructProps {
    underlying?: Collection
}
export class FilterCollection {
    /* Fields of Gcr.FilterCollection */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.FilterCollection */
    getUnderlying(): Collection
    refilter(): void
    setCallback(callback: FilterCollectionFunc | null): void
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
    /* Methods of Gcr.Collection */
    contains(object: GObject.Object): boolean
    emitAdded(object: GObject.Object): void
    emitRemoved(object: GObject.Object): void
    getLength(): number
    getObjects(): GObject.Object[]
    /* Virtual methods of Gcr.FilterCollection */
    vfuncAdded(object: GObject.Object): void
    vfuncContains(object: GObject.Object): boolean
    vfuncGetLength(): number
    vfuncGetObjects(): GObject.Object[]
    vfuncRemoved(object: GObject.Object): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gcr.Collection */
    connect(sigName: "added", callback: (($obj: FilterCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "added", callback: (($obj: FilterCollection, object: GObject.Object) => void)): number
    emit(sigName: "added", object: GObject.Object): void
    on(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "removed", callback: (($obj: FilterCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "removed", callback: (($obj: FilterCollection, object: GObject.Object) => void)): number
    emit(sigName: "removed", object: GObject.Object): void
    on(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilterCollection_ConstructProps)
    _init (config?: FilterCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithCallback(underlying: Collection, callback: FilterCollectionFunc | null): FilterCollection
    static $gtype: GObject.Type
}
export interface Parser_ConstructProps extends GObject.Object_ConstructProps {
}
export class Parser {
    /* Properties of Gcr.Parser */
    readonly parsedAttributes: Gck.Attributes
    readonly parsedDescription: string
    readonly parsedLabel: string
    /* Fields of Gcr.Parser */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.Parser */
    addPassword(password?: string | null): void
    formatDisable(format: DataFormat): void
    formatEnable(format: DataFormat): void
    formatSupported(format: DataFormat): boolean
    getFilename(): string
    getParsed(): Parsed
    getParsedAttributes(): Gck.Attributes | null
    getParsedBlock(): any | null
    getParsedBytes(): any
    getParsedDescription(): string | null
    getParsedFormat(): DataFormat
    getParsedLabel(): string | null
    parseBytes(data: any): boolean
    parseData(data: any): boolean
    parseStream(input: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    parseStreamAsync(input: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    parseStreamFinish(result: Gio.AsyncResult): boolean
    setFilename(filename?: string | null): void
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
    /* Virtual methods of Gcr.Parser */
    vfuncAuthenticate(count: number): boolean
    vfuncParsed(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gcr.Parser */
    connect(sigName: "authenticate", callback: (($obj: Parser, count: number) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Parser, count: number) => boolean)): number
    emit(sigName: "authenticate", count: number): void
    on(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parsed", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "parsed", callback: (($obj: Parser) => void)): number
    emit(sigName: "parsed"): void
    on(sigName: "parsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parsed-attributes", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parsed-attributes", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parsed-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parsed-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parsed-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parsed-description", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parsed-description", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parsed-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parsed-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parsed-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parsed-label", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parsed-label", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parsed-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parsed-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parsed-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.Pkcs11Certificate */
    getAttributes(): Gck.Attributes
    /* Methods of Gck.Object */
    cacheLookup(attrTypes: number[], cancellable?: Gio.Cancellable | null): Gck.Attributes
    cacheLookupAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cacheLookupFinish(result: Gio.AsyncResult): Gck.Attributes
    destroy(cancellable?: Gio.Cancellable | null): boolean
    destroyAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    destroyFinish(result: Gio.AsyncResult): boolean
    equal(object2: Gck.Object): boolean
    getAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getData(attrType: number, cancellable?: Gio.Cancellable | null): any
    getDataAsync(attrType: number, allocator: Gck.Allocator, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataFinish(result: Gio.AsyncResult): any
    getFinish(result: Gio.AsyncResult): Gck.Attributes
    getFull(attrTypes: number[], cancellable?: Gio.Cancellable | null): Gck.Attributes
    getHandle(): number
    getModule(): Gck.Module
    getSession(): Gck.Session
    getTemplate(attrType: number, cancellable?: Gio.Cancellable | null): Gck.Attributes
    getTemplateAsync(attrType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTemplateFinish(result: Gio.AsyncResult): Gck.Attributes
    hash(): number
    set(attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null): boolean
    setAsync(attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setFinish(result: Gio.AsyncResult): boolean
    setTemplate(attrType: number, attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null): boolean
    setTemplateAsync(attrType: number, attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    /* Methods of Gcr.Certificate */
    getBasicConstraints(): [ /* returnType */ boolean, /* isCa */ boolean | null, /* pathLen */ number | null ]
    getDerData(): any
    getExpiryDate(): GLib.Date
    getFingerprint(type: GLib.ChecksumType): any
    getFingerprintHex(type: GLib.ChecksumType): string
    getIssuedDate(): GLib.Date
    getIssuerCn(): string
    getIssuerDn(): string
    getIssuerName(): string
    getIssuerPart(part: string): string | null
    getIssuerRaw(): any
    getKeySize(): number
    getMarkupText(): string
    getSerialNumber(): any
    getSerialNumberHex(): string
    getSubjectCn(): string
    getSubjectDn(): string
    getSubjectName(): string
    getSubjectPart(part: string): string | null
    getSubjectRaw(): any
    isIssuer(issuer: Certificate): boolean
    mixinEmitNotify(): void
    /* Methods of Gcr.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of Gcr.Pkcs11Certificate */
    vfuncGetDerData(): any
    vfuncCompare(other?: Comparable | null): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expiry", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expiry", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::issuer", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::issuer", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::markup", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: Pkcs11Certificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Pkcs11Certificate_ConstructProps)
    _init (config?: Pkcs11Certificate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static lookupIssuer(certificate: Certificate, cancellable?: Gio.Cancellable | null): Certificate
    static lookupIssuerAsync(certificate: Certificate, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static lookupIssuerFinish(result: Gio.AsyncResult): Certificate
    static compare(first?: Comparable | null, other?: Comparable | null): number
    static $gtype: GObject.Type
}
export interface SecretExchange_ConstructProps extends GObject.Object_ConstructProps {
    protocol?: string
}
export class SecretExchange {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.SecretExchange */
    begin(): string
    getProtocol(): string
    getSecret(): string[]
    receive(exchange: string): boolean
    send(secret: string | null, secretLen: number): string
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
    /* Virtual methods of Gcr.SecretExchange */
    vfuncDeriveTransportKey(peer: number, nPeer: number): boolean
    vfuncGenerateExchangeKey(scheme: string, publicKey: number, nPublicKey: number): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SecretExchange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SecretExchange, pspec: GObject.ParamSpec) => void)): number
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
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gcr.Certificate */
    getBasicConstraints(): [ /* returnType */ boolean, /* isCa */ boolean | null, /* pathLen */ number | null ]
    getDerData(): any
    getExpiryDate(): GLib.Date
    getFingerprint(type: GLib.ChecksumType): any
    getFingerprintHex(type: GLib.ChecksumType): string
    getIssuedDate(): GLib.Date
    getIssuerCn(): string
    getIssuerDn(): string
    getIssuerName(): string
    getIssuerPart(part: string): string | null
    getIssuerRaw(): any
    getKeySize(): number
    getMarkupText(): string
    getSerialNumber(): any
    getSerialNumberHex(): string
    getSubjectCn(): string
    getSubjectDn(): string
    getSubjectName(): string
    getSubjectPart(part: string): string | null
    getSubjectRaw(): any
    isIssuer(issuer: Certificate): boolean
    mixinEmitNotify(): void
    /* Methods of Gcr.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of Gcr.SimpleCertificate */
    vfuncGetDerData(): any
    vfuncCompare(other?: Comparable | null): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expiry", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expiry", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::issuer", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::issuer", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::markup", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: SimpleCertificate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleCertificate_ConstructProps)
    _init (config?: SimpleCertificate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: any): SimpleCertificate
    static compare(first?: Comparable | null, other?: Comparable | null): number
    static $gtype: GObject.Type
}
export interface SimpleCollection_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleCollection {
    /* Fields of Gcr.SimpleCollection */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.SimpleCollection */
    add(object: GObject.Object): void
    remove(object: GObject.Object): void
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
    /* Methods of Gcr.Collection */
    contains(object: GObject.Object): boolean
    emitAdded(object: GObject.Object): void
    emitRemoved(object: GObject.Object): void
    getLength(): number
    getObjects(): GObject.Object[]
    /* Virtual methods of Gcr.SimpleCollection */
    vfuncAdded(object: GObject.Object): void
    vfuncContains(object: GObject.Object): boolean
    vfuncGetLength(): number
    vfuncGetObjects(): GObject.Object[]
    vfuncRemoved(object: GObject.Object): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gcr.Collection */
    connect(sigName: "added", callback: (($obj: SimpleCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "added", callback: (($obj: SimpleCollection, object: GObject.Object) => void)): number
    emit(sigName: "added", object: GObject.Object): void
    on(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "removed", callback: (($obj: SimpleCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "removed", callback: (($obj: SimpleCollection, object: GObject.Object) => void)): number
    emit(sigName: "removed", object: GObject.Object): void
    on(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.SshAskpass */
    getInteraction(): Gio.TlsInteraction
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
    connect(sigName: "notify", callback: (($obj: SshAskpass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SshAskpass, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SshAskpass_ConstructProps)
    _init (config?: SshAskpass_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(interaction: Gio.TlsInteraction): SshAskpass
    static childSetup(askpass?: object | null): void
    static $gtype: GObject.Type
}
export interface SystemPrompt_ConstructProps extends GObject.Object_ConstructProps {
    busName?: string
    secretExchange?: SecretExchange
    timeoutSeconds?: number
    callerWindow?: string
    cancelLabel?: string
    choiceChosen?: boolean
    choiceLabel?: string
    continueLabel?: string
    description?: string
    message?: string
    passwordNew?: boolean
    title?: string
    warning?: string
}
export class SystemPrompt {
    /* Properties of Gcr.SystemPrompt */
    secretExchange: SecretExchange
    /* Properties of Gcr.Prompt */
    callerWindow: string
    cancelLabel: string
    choiceChosen: boolean
    choiceLabel: string
    continueLabel: string
    description: string
    message: string
    passwordNew: boolean
    readonly passwordStrength: number
    title: string
    warning: string
    /* Fields of Gcr.SystemPrompt */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.SystemPrompt */
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    getSecretExchange(): SecretExchange
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
    /* Methods of Gcr.Prompt */
    confirm(cancellable?: Gio.Cancellable | null): PromptReply
    confirmAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    confirmFinish(result: Gio.AsyncResult): PromptReply
    confirmRun(cancellable?: Gio.Cancellable | null): PromptReply
    getCallerWindow(): string
    getCancelLabel(): string
    getChoiceChosen(): boolean
    getChoiceLabel(): string
    getContinueLabel(): string
    getDescription(): string
    getMessage(): string
    getPasswordNew(): boolean
    getPasswordStrength(): number
    getTitle(): string
    getWarning(): string
    password(cancellable?: Gio.Cancellable | null): string
    passwordAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    passwordFinish(result: Gio.AsyncResult): string
    passwordRun(cancellable?: Gio.Cancellable | null): string
    reset(): void
    setCallerWindow(windowId: string): void
    setCancelLabel(cancelLabel: string): void
    setChoiceChosen(chosen: boolean): void
    setChoiceLabel(choiceLabel?: string | null): void
    setContinueLabel(continueLabel: string): void
    setDescription(description: string): void
    setMessage(message: string): void
    setPasswordNew(newPassword: boolean): void
    setTitle(title: string): void
    setWarning(warning?: string | null): void
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gcr.SystemPrompt */
    vfuncPromptClose(): void
    vfuncPromptConfirmAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncPromptConfirmFinish(result: Gio.AsyncResult): PromptReply
    vfuncPromptPasswordAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncPromptPasswordFinish(result: Gio.AsyncResult): string
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gcr.Prompt */
    connect(sigName: "prompt-close", callback: (($obj: SystemPrompt) => void)): number
    connect_after(sigName: "prompt-close", callback: (($obj: SystemPrompt) => void)): number
    emit(sigName: "prompt-close"): void
    on(sigName: "prompt-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "prompt-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "prompt-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::secret-exchange", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secret-exchange", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::secret-exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::secret-exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::secret-exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caller-window", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caller-window", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caller-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caller-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caller-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cancel-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancel-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancel-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancel-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancel-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::choice-chosen", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-chosen", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::choice-chosen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::choice-chosen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::choice-chosen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::choice-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::choice-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::choice-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::choice-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::continue-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continue-label", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::continue-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::continue-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::continue-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-new", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-new", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-new", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-new", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-new", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-strength", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-strength", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: SystemPrompt, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SystemPrompt_ConstructProps)
    _init (config?: SystemPrompt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorGetDomain(): GLib.Quark
    static open(timeoutSeconds: number, cancellable?: Gio.Cancellable | null): SystemPrompt
    static openAsync(timeoutSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static openFinish(result: Gio.AsyncResult): SystemPrompt
    static openForPrompter(prompterName: string | null, timeoutSeconds: number, cancellable?: Gio.Cancellable | null): SystemPrompt
    static openForPrompterAsync(prompterName: string | null, timeoutSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SystemPrompter_ConstructProps extends GObject.Object_ConstructProps {
    promptType?: GObject.Type
}
export class SystemPrompter {
    /* Properties of Gcr.SystemPrompter */
    readonly prompting: boolean
    /* Fields of Gcr.SystemPrompter */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.SystemPrompter */
    getMode(): SystemPrompterMode
    getPromptType(): GObject.Type
    getPrompting(): boolean
    register(connection: Gio.DBusConnection): void
    unregister(wait: boolean): void
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
    /* Signals of Gcr.SystemPrompter */
    connect(sigName: "new-prompt", callback: (($obj: SystemPrompter) => Prompt)): number
    connect_after(sigName: "new-prompt", callback: (($obj: SystemPrompter) => Prompt)): number
    emit(sigName: "new-prompt"): void
    on(sigName: "new-prompt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-prompt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-prompt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemPrompter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prompting", callback: (($obj: SystemPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prompting", callback: (($obj: SystemPrompter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prompting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prompting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prompting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SystemPrompter_ConstructProps)
    _init (config?: SystemPrompter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: SystemPrompterMode, promptType: GObject.Type): SystemPrompter
    static $gtype: GObject.Type
}
export interface UnionCollection_ConstructProps extends GObject.Object_ConstructProps {
}
export class UnionCollection {
    /* Fields of Gcr.UnionCollection */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr.UnionCollection */
    add(collection: Collection): void
    elements(): Collection[]
    have(collection: Collection): boolean
    remove(collection: Collection): void
    size(): number
    take(collection: Collection): void
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
    /* Methods of Gcr.Collection */
    contains(object: GObject.Object): boolean
    emitAdded(object: GObject.Object): void
    emitRemoved(object: GObject.Object): void
    getLength(): number
    getObjects(): GObject.Object[]
    /* Virtual methods of Gcr.UnionCollection */
    vfuncAdded(object: GObject.Object): void
    vfuncContains(object: GObject.Object): boolean
    vfuncGetLength(): number
    vfuncGetObjects(): GObject.Object[]
    vfuncRemoved(object: GObject.Object): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnionCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnionCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gcr.Collection */
    connect(sigName: "added", callback: (($obj: UnionCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "added", callback: (($obj: UnionCollection, object: GObject.Object) => void)): number
    emit(sigName: "added", object: GObject.Object): void
    on(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "removed", callback: (($obj: UnionCollection, object: GObject.Object) => void)): number
    connect_after(sigName: "removed", callback: (($obj: UnionCollection, object: GObject.Object) => void)): number
    emit(sigName: "removed", object: GObject.Object): void
    on(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnionCollection_ConstructProps)
    _init (config?: UnionCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnionCollection
    static $gtype: GObject.Type
}
export abstract class CertificateChainClass {
    /* Fields of Gcr.CertificateChainClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CertificateChainPrivate {
    static name: string
}
export abstract class CertificateIface {
    /* Fields of Gcr.CertificateIface */
    parent: GObject.TypeInterface
    getDerData: (self: Certificate) => any
    static name: string
}
export abstract class CertificateRequestClass {
    /* Fields of Gcr.CertificateRequestClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class CollectionIface {
    /* Fields of Gcr.CollectionIface */
    parent: GObject.TypeInterface
    added: (self: Collection, object: GObject.Object) => void
    removed: (self: Collection, object: GObject.Object) => void
    getLength: (self: Collection) => number
    getObjects: (self: Collection) => GObject.Object[]
    contains: (self: Collection, object: GObject.Object) => boolean
    static name: string
}
export class Column {
    /* Fields of Gcr.Column */
    propertyName: string
    propertyType: GObject.Type
    columnType: GObject.Type
    label: string
    flags: ColumnFlags
    transformer: GObject.ValueTransform
    userData: object
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
    parentClass: GObject.ObjectClass
    static name: string
}
export class FilterCollectionPrivate {
    static name: string
}
export abstract class ImportInteractionIface {
    /* Fields of Gcr.ImportInteractionIface */
    parent: GObject.TypeInterface
    supplementPrep: (interaction: ImportInteraction, builder: Gck.Builder) => void
    supplement: (interaction: ImportInteraction, builder: Gck.Builder, cancellable?: Gio.Cancellable | null) => Gio.TlsInteractionResult
    supplementAsync: (interaction: ImportInteraction, builder: Gck.Builder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    supplementFinish: (interaction: ImportInteraction, result: Gio.AsyncResult) => Gio.TlsInteractionResult
    static name: string
}
export abstract class ImporterIface {
    /* Fields of Gcr.ImporterIface */
    parent: GObject.TypeInterface
    queueForParsed: (importer: Importer, parsed: Parsed) => boolean
    importSync: (importer: Importer, cancellable?: Gio.Cancellable | null) => boolean
    importAsync: (importer: Importer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    importFinish: (importer: Importer, result: Gio.AsyncResult) => boolean
    static name: string
}
export class Parsed {
    /* Methods of Gcr.Parsed */
    getAttributes(): Gck.Attributes | null
    getBytes(): any
    getData(): any | null
    getDescription(): string | null
    getFilename(): string
    getFormat(): DataFormat
    getLabel(): string | null
    ref(): Parsed
    static name: string
    /* Static methods and pseudo-constructors */
    static unref(parsed?: object | null): void
}
export abstract class ParserClass {
    /* Fields of Gcr.ParserClass */
    parentClass: GObject.ObjectClass
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
    parentIface: GObject.TypeInterface
    promptPasswordAsync: (prompt: Prompt, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    promptPasswordFinish: (prompt: Prompt, result: Gio.AsyncResult) => string
    promptConfirmAsync: (prompt: Prompt, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    promptConfirmFinish: (prompt: Prompt, result: Gio.AsyncResult) => PromptReply
    promptClose: (prompt: Prompt) => void
    static name: string
}
export abstract class SecretExchangeClass {
    /* Fields of Gcr.SecretExchangeClass */
    generateExchangeKey: (exchange: SecretExchange, scheme: string, publicKey: number, nPublicKey: number) => boolean
    deriveTransportKey: (exchange: SecretExchange, peer: number, nPeer: number) => boolean
    static name: string
}
export class SecretExchangePrivate {
    static name: string
}
export abstract class SimpleCertificateClass {
    /* Fields of Gcr.SimpleCertificateClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SimpleCertificatePrivate {
    static name: string
}
export abstract class SimpleCollectionClass {
    /* Fields of Gcr.SimpleCollectionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SimpleCollectionPrivate {
    static name: string
}
export abstract class SshAskpassClass {
    /* Fields of Gcr.SshAskpassClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class SystemPromptClass {
    /* Fields of Gcr.SystemPromptClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SystemPromptPrivate {
    static name: string
}
export abstract class SystemPrompterClass {
    /* Fields of Gcr.SystemPrompterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SystemPrompterPrivate {
    static name: string
}
export abstract class UnionCollectionClass {
    /* Fields of Gcr.UnionCollectionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class UnionCollectionPrivate {
    static name: string
}
}