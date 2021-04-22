/**
 * Gio-2.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Gio {

export enum BusType {
    STARTER,
    NONE,
    SYSTEM,
    SESSION,
}
export enum ConverterResult {
    ERROR,
    CONVERTED,
    FINISHED,
    FLUSHED,
}
export enum CredentialsType {
    INVALID,
    LINUX_UCRED,
    FREEBSD_CMSGCRED,
    OPENBSD_SOCKPEERCRED,
    SOLARIS_UCRED,
    NETBSD_UNPCBID,
    APPLE_XUCRED,
}
export enum DBusError {
    FAILED,
    NO_MEMORY,
    SERVICE_UNKNOWN,
    NAME_HAS_NO_OWNER,
    NO_REPLY,
    IO_ERROR,
    BAD_ADDRESS,
    NOT_SUPPORTED,
    LIMITS_EXCEEDED,
    ACCESS_DENIED,
    AUTH_FAILED,
    NO_SERVER,
    TIMEOUT,
    NO_NETWORK,
    ADDRESS_IN_USE,
    DISCONNECTED,
    INVALID_ARGS,
    FILE_NOT_FOUND,
    FILE_EXISTS,
    UNKNOWN_METHOD,
    TIMED_OUT,
    MATCH_RULE_NOT_FOUND,
    MATCH_RULE_INVALID,
    SPAWN_EXEC_FAILED,
    SPAWN_FORK_FAILED,
    SPAWN_CHILD_EXITED,
    SPAWN_CHILD_SIGNALED,
    SPAWN_FAILED,
    SPAWN_SETUP_FAILED,
    SPAWN_CONFIG_INVALID,
    SPAWN_SERVICE_INVALID,
    SPAWN_SERVICE_NOT_FOUND,
    SPAWN_PERMISSIONS_INVALID,
    SPAWN_FILE_INVALID,
    SPAWN_NO_MEMORY,
    UNIX_PROCESS_ID_UNKNOWN,
    INVALID_SIGNATURE,
    INVALID_FILE_CONTENT,
    SELINUX_SECURITY_CONTEXT_UNKNOWN,
    ADT_AUDIT_DATA_UNKNOWN,
    OBJECT_PATH_IN_USE,
    UNKNOWN_OBJECT,
    UNKNOWN_INTERFACE,
    UNKNOWN_PROPERTY,
    PROPERTY_READ_ONLY,
}
export enum DBusMessageByteOrder {
    BIG_ENDIAN,
    LITTLE_ENDIAN,
}
export enum DBusMessageHeaderField {
    INVALID,
    PATH,
    INTERFACE,
    MEMBER,
    ERROR_NAME,
    REPLY_SERIAL,
    DESTINATION,
    SENDER,
    SIGNATURE,
    NUM_UNIX_FDS,
}
export enum DBusMessageType {
    INVALID,
    METHOD_CALL,
    METHOD_RETURN,
    ERROR,
    SIGNAL,
}
export enum DataStreamByteOrder {
    BIG_ENDIAN,
    LITTLE_ENDIAN,
    HOST_ENDIAN,
}
export enum DataStreamNewlineType {
    LF,
    CR,
    CR_LF,
    ANY,
}
export enum DriveStartStopType {
    UNKNOWN,
    SHUTDOWN,
    NETWORK,
    MULTIDISK,
    PASSWORD,
}
export enum EmblemOrigin {
    UNKNOWN,
    DEVICE,
    LIVEMETADATA,
    TAG,
}
export enum FileAttributeStatus {
    UNSET,
    SET,
    ERROR_SETTING,
}
export enum FileAttributeType {
    INVALID,
    STRING,
    BYTE_STRING,
    BOOLEAN,
    UINT32,
    INT32,
    UINT64,
    INT64,
    OBJECT,
    STRINGV,
}
export enum FileMonitorEvent {
    CHANGED,
    CHANGES_DONE_HINT,
    DELETED,
    CREATED,
    ATTRIBUTE_CHANGED,
    PRE_UNMOUNT,
    UNMOUNTED,
    MOVED,
    RENAMED,
    MOVED_IN,
    MOVED_OUT,
}
export enum FileType {
    UNKNOWN,
    REGULAR,
    DIRECTORY,
    SYMBOLIC_LINK,
    SPECIAL,
    SHORTCUT,
    MOUNTABLE,
}
export enum FilesystemPreviewType {
    IF_ALWAYS,
    IF_LOCAL,
    NEVER,
}
export enum IOErrorEnum {
    FAILED,
    NOT_FOUND,
    EXISTS,
    IS_DIRECTORY,
    NOT_DIRECTORY,
    NOT_EMPTY,
    NOT_REGULAR_FILE,
    NOT_SYMBOLIC_LINK,
    NOT_MOUNTABLE_FILE,
    FILENAME_TOO_LONG,
    INVALID_FILENAME,
    TOO_MANY_LINKS,
    NO_SPACE,
    INVALID_ARGUMENT,
    PERMISSION_DENIED,
    NOT_SUPPORTED,
    NOT_MOUNTED,
    ALREADY_MOUNTED,
    CLOSED,
    CANCELLED,
    PENDING,
    READ_ONLY,
    CANT_CREATE_BACKUP,
    WRONG_ETAG,
    TIMED_OUT,
    WOULD_RECURSE,
    BUSY,
    WOULD_BLOCK,
    HOST_NOT_FOUND,
    WOULD_MERGE,
    FAILED_HANDLED,
    TOO_MANY_OPEN_FILES,
    NOT_INITIALIZED,
    ADDRESS_IN_USE,
    PARTIAL_INPUT,
    INVALID_DATA,
    DBUS_ERROR,
    HOST_UNREACHABLE,
    NETWORK_UNREACHABLE,
    CONNECTION_REFUSED,
    PROXY_FAILED,
    PROXY_AUTH_FAILED,
    PROXY_NEED_AUTH,
    PROXY_NOT_ALLOWED,
    BROKEN_PIPE,
    CONNECTION_CLOSED,
    NOT_CONNECTED,
    MESSAGE_TOO_LARGE,
}
export enum IOModuleScopeFlags {
    NONE,
    BLOCK_DUPLICATES,
}
export enum MemoryMonitorWarningLevel {
    LOW,
    MEDIUM,
    CRITICAL,
}
export enum MountOperationResult {
    HANDLED,
    ABORTED,
    UNHANDLED,
}
export enum NetworkConnectivity {
    LOCAL,
    LIMITED,
    PORTAL,
    FULL,
}
export enum NotificationPriority {
    NORMAL,
    LOW,
    HIGH,
    URGENT,
}
export enum PasswordSave {
    NEVER,
    FOR_SESSION,
    PERMANENTLY,
}
export enum PollableReturn {
    FAILED,
    OK,
    WOULD_BLOCK,
}
export enum ResolverError {
    NOT_FOUND,
    TEMPORARY_FAILURE,
    INTERNAL,
}
export enum ResolverRecordType {
    SRV,
    MX,
    TXT,
    SOA,
    NS,
}
export enum ResourceError {
    NOT_FOUND,
    INTERNAL,
}
export enum SocketClientEvent {
    RESOLVING,
    RESOLVED,
    CONNECTING,
    CONNECTED,
    PROXY_NEGOTIATING,
    PROXY_NEGOTIATED,
    TLS_HANDSHAKING,
    TLS_HANDSHAKED,
    COMPLETE,
}
export enum SocketFamily {
    INVALID,
    UNIX,
    IPV4,
    IPV6,
}
export enum SocketListenerEvent {
    BINDING,
    BOUND,
    LISTENING,
    LISTENED,
}
export enum SocketProtocol {
    UNKNOWN,
    DEFAULT,
    TCP,
    UDP,
    SCTP,
}
export enum SocketType {
    INVALID,
    STREAM,
    DATAGRAM,
    SEQPACKET,
}
export enum TlsAuthenticationMode {
    NONE,
    REQUESTED,
    REQUIRED,
}
export enum TlsCertificateRequestFlags {
    NONE,
}
export enum TlsChannelBindingError {
    NOT_IMPLEMENTED,
    INVALID_STATE,
    NOT_AVAILABLE,
    NOT_SUPPORTED,
    GENERAL_ERROR,
}
export enum TlsChannelBindingType {
    UNIQUE,
    SERVER_END_POINT,
}
export enum TlsDatabaseLookupFlags {
    NONE,
    KEYPAIR,
}
export enum TlsError {
    UNAVAILABLE,
    MISC,
    BAD_CERTIFICATE,
    NOT_TLS,
    HANDSHAKE,
    CERTIFICATE_REQUIRED,
    EOF,
    INAPPROPRIATE_FALLBACK,
}
export enum TlsInteractionResult {
    UNHANDLED,
    HANDLED,
    FAILED,
}
export enum TlsRehandshakeMode {
    NEVER,
    SAFELY,
    UNSAFELY,
}
export enum UnixSocketAddressType {
    INVALID,
    ANONYMOUS,
    PATH,
    ABSTRACT,
    ABSTRACT_PADDED,
}
export enum ZlibCompressorFormat {
    ZLIB,
    GZIP,
    RAW,
}
export enum AppInfoCreateFlags {
    NONE,
    NEEDS_TERMINAL,
    SUPPORTS_URIS,
    SUPPORTS_STARTUP_NOTIFICATION,
}
export enum ApplicationFlags {
    FLAGS_NONE,
    IS_SERVICE,
    IS_LAUNCHER,
    HANDLES_OPEN,
    HANDLES_COMMAND_LINE,
    SEND_ENVIRONMENT,
    NON_UNIQUE,
    CAN_OVERRIDE_APP_ID,
    ALLOW_REPLACEMENT,
    REPLACE,
}
export enum AskPasswordFlags {
    NEED_PASSWORD,
    NEED_USERNAME,
    NEED_DOMAIN,
    SAVING_SUPPORTED,
    ANONYMOUS_SUPPORTED,
    TCRYPT,
}
export enum BusNameOwnerFlags {
    NONE,
    ALLOW_REPLACEMENT,
    REPLACE,
    DO_NOT_QUEUE,
}
export enum BusNameWatcherFlags {
    NONE,
    AUTO_START,
}
export enum ConverterFlags {
    NONE,
    INPUT_AT_END,
    FLUSH,
}
export enum DBusCallFlags {
    NONE,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
}
export enum DBusCapabilityFlags {
    NONE,
    UNIX_FD_PASSING,
}
export enum DBusConnectionFlags {
    NONE,
    AUTHENTICATION_CLIENT,
    AUTHENTICATION_SERVER,
    AUTHENTICATION_ALLOW_ANONYMOUS,
    MESSAGE_BUS_CONNECTION,
    DELAY_MESSAGE_PROCESSING,
    AUTHENTICATION_REQUIRE_SAME_USER,
}
export enum DBusInterfaceSkeletonFlags {
    NONE,
    HANDLE_METHOD_INVOCATIONS_IN_THREAD,
}
export enum DBusMessageFlags {
    NONE,
    NO_REPLY_EXPECTED,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
}
export enum DBusObjectManagerClientFlags {
    NONE,
    DO_NOT_AUTO_START,
}
export enum DBusPropertyInfoFlags {
    NONE,
    READABLE,
    WRITABLE,
}
export enum DBusProxyFlags {
    NONE,
    DO_NOT_LOAD_PROPERTIES,
    DO_NOT_CONNECT_SIGNALS,
    DO_NOT_AUTO_START,
    GET_INVALIDATED_PROPERTIES,
    DO_NOT_AUTO_START_AT_CONSTRUCTION,
}
export enum DBusSendMessageFlags {
    NONE,
    PRESERVE_SERIAL,
}
export enum DBusServerFlags {
    NONE,
    RUN_IN_THREAD,
    AUTHENTICATION_ALLOW_ANONYMOUS,
    AUTHENTICATION_REQUIRE_SAME_USER,
}
export enum DBusSignalFlags {
    NONE,
    NO_MATCH_RULE,
    MATCH_ARG0_NAMESPACE,
    MATCH_ARG0_PATH,
}
export enum DBusSubtreeFlags {
    NONE,
    DISPATCH_TO_UNENUMERATED_NODES,
}
export enum DriveStartFlags {
    NONE,
}
export enum FileAttributeInfoFlags {
    NONE,
    COPY_WITH_FILE,
    COPY_WHEN_MOVED,
}
export enum FileCopyFlags {
    NONE,
    OVERWRITE,
    BACKUP,
    NOFOLLOW_SYMLINKS,
    ALL_METADATA,
    NO_FALLBACK_FOR_MOVE,
    TARGET_DEFAULT_PERMS,
}
export enum FileCreateFlags {
    NONE,
    PRIVATE,
    REPLACE_DESTINATION,
}
export enum FileMeasureFlags {
    NONE,
    REPORT_ANY_ERROR,
    APPARENT_SIZE,
    NO_XDEV,
}
export enum FileMonitorFlags {
    NONE,
    WATCH_MOUNTS,
    SEND_MOVED,
    WATCH_HARD_LINKS,
    WATCH_MOVES,
}
export enum FileQueryInfoFlags {
    NONE,
    NOFOLLOW_SYMLINKS,
}
export enum IOStreamSpliceFlags {
    NONE,
    CLOSE_STREAM1,
    CLOSE_STREAM2,
    WAIT_FOR_BOTH,
}
export enum MountMountFlags {
    NONE,
}
export enum MountUnmountFlags {
    NONE,
    FORCE,
}
export enum OutputStreamSpliceFlags {
    NONE,
    CLOSE_SOURCE,
    CLOSE_TARGET,
}
export enum ResolverNameLookupFlags {
    DEFAULT,
    IPV4_ONLY,
    IPV6_ONLY,
}
export enum ResourceFlags {
    NONE,
    COMPRESSED,
}
export enum ResourceLookupFlags {
    NONE,
}
export enum SettingsBindFlags {
    DEFAULT,
    GET,
    SET,
    NO_SENSITIVITY,
    GET_NO_CHANGES,
    INVERT_BOOLEAN,
}
export enum SocketMsgFlags {
    NONE,
    OOB,
    PEEK,
    DONTROUTE,
}
export enum SubprocessFlags {
    NONE,
    STDIN_PIPE,
    STDIN_INHERIT,
    STDOUT_PIPE,
    STDOUT_SILENCE,
    STDERR_PIPE,
    STDERR_SILENCE,
    STDERR_MERGE,
    INHERIT_FDS,
}
export enum TestDBusFlags {
    NONE,
}
export enum TlsCertificateFlags {
    UNKNOWN_CA,
    BAD_IDENTITY,
    NOT_ACTIVATED,
    EXPIRED,
    REVOKED,
    INSECURE,
    GENERIC_ERROR,
    VALIDATE_ALL,
}
export enum TlsDatabaseVerifyFlags {
    NONE,
}
export enum TlsPasswordFlags {
    NONE,
    RETRY,
    MANY_TRIES,
    FINAL_TRY,
}
export const DBUS_METHOD_INVOCATION_HANDLED: boolean
export const DBUS_METHOD_INVOCATION_UNHANDLED: boolean
export const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string
export const DRIVE_IDENTIFIER_KIND_UNIX_DEVICE: string
export const FILE_ATTRIBUTE_ACCESS_CAN_DELETE: string
export const FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE: string
export const FILE_ATTRIBUTE_ACCESS_CAN_READ: string
export const FILE_ATTRIBUTE_ACCESS_CAN_RENAME: string
export const FILE_ATTRIBUTE_ACCESS_CAN_TRASH: string
export const FILE_ATTRIBUTE_ACCESS_CAN_WRITE: string
export const FILE_ATTRIBUTE_DOS_IS_ARCHIVE: string
export const FILE_ATTRIBUTE_DOS_IS_MOUNTPOINT: string
export const FILE_ATTRIBUTE_DOS_IS_SYSTEM: string
export const FILE_ATTRIBUTE_DOS_REPARSE_POINT_TAG: string
export const FILE_ATTRIBUTE_ETAG_VALUE: string
export const FILE_ATTRIBUTE_FILESYSTEM_FREE: string
export const FILE_ATTRIBUTE_FILESYSTEM_READONLY: string
export const FILE_ATTRIBUTE_FILESYSTEM_REMOTE: string
export const FILE_ATTRIBUTE_FILESYSTEM_SIZE: string
export const FILE_ATTRIBUTE_FILESYSTEM_TYPE: string
export const FILE_ATTRIBUTE_FILESYSTEM_USED: string
export const FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW: string
export const FILE_ATTRIBUTE_GVFS_BACKEND: string
export const FILE_ATTRIBUTE_ID_FILE: string
export const FILE_ATTRIBUTE_ID_FILESYSTEM: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_EJECT: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_MOUNT: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_POLL: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START_DEGRADED: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_STOP: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_UNMOUNT: string
export const FILE_ATTRIBUTE_MOUNTABLE_HAL_UDI: string
export const FILE_ATTRIBUTE_MOUNTABLE_IS_MEDIA_CHECK_AUTOMATIC: string
export const FILE_ATTRIBUTE_MOUNTABLE_START_STOP_TYPE: string
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE: string
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE_FILE: string
export const FILE_ATTRIBUTE_OWNER_GROUP: string
export const FILE_ATTRIBUTE_OWNER_USER: string
export const FILE_ATTRIBUTE_OWNER_USER_REAL: string
export const FILE_ATTRIBUTE_PREVIEW_ICON: string
export const FILE_ATTRIBUTE_RECENT_MODIFIED: string
export const FILE_ATTRIBUTE_SELINUX_CONTEXT: string
export const FILE_ATTRIBUTE_STANDARD_ALLOCATED_SIZE: string
export const FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE: string
export const FILE_ATTRIBUTE_STANDARD_COPY_NAME: string
export const FILE_ATTRIBUTE_STANDARD_DESCRIPTION: string
export const FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME: string
export const FILE_ATTRIBUTE_STANDARD_EDIT_NAME: string
export const FILE_ATTRIBUTE_STANDARD_FAST_CONTENT_TYPE: string
export const FILE_ATTRIBUTE_STANDARD_ICON: string
export const FILE_ATTRIBUTE_STANDARD_IS_BACKUP: string
export const FILE_ATTRIBUTE_STANDARD_IS_HIDDEN: string
export const FILE_ATTRIBUTE_STANDARD_IS_SYMLINK: string
export const FILE_ATTRIBUTE_STANDARD_IS_VIRTUAL: string
export const FILE_ATTRIBUTE_STANDARD_IS_VOLATILE: string
export const FILE_ATTRIBUTE_STANDARD_NAME: string
export const FILE_ATTRIBUTE_STANDARD_SIZE: string
export const FILE_ATTRIBUTE_STANDARD_SORT_ORDER: string
export const FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON: string
export const FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET: string
export const FILE_ATTRIBUTE_STANDARD_TARGET_URI: string
export const FILE_ATTRIBUTE_STANDARD_TYPE: string
export const FILE_ATTRIBUTE_THUMBNAILING_FAILED: string
export const FILE_ATTRIBUTE_THUMBNAIL_IS_VALID: string
export const FILE_ATTRIBUTE_THUMBNAIL_PATH: string
export const FILE_ATTRIBUTE_TIME_ACCESS: string
export const FILE_ATTRIBUTE_TIME_ACCESS_USEC: string
export const FILE_ATTRIBUTE_TIME_CHANGED: string
export const FILE_ATTRIBUTE_TIME_CHANGED_USEC: string
export const FILE_ATTRIBUTE_TIME_CREATED: string
export const FILE_ATTRIBUTE_TIME_CREATED_USEC: string
export const FILE_ATTRIBUTE_TIME_MODIFIED: string
export const FILE_ATTRIBUTE_TIME_MODIFIED_USEC: string
export const FILE_ATTRIBUTE_TRASH_DELETION_DATE: string
export const FILE_ATTRIBUTE_TRASH_ITEM_COUNT: string
export const FILE_ATTRIBUTE_TRASH_ORIG_PATH: string
export const FILE_ATTRIBUTE_UNIX_BLOCKS: string
export const FILE_ATTRIBUTE_UNIX_BLOCK_SIZE: string
export const FILE_ATTRIBUTE_UNIX_DEVICE: string
export const FILE_ATTRIBUTE_UNIX_GID: string
export const FILE_ATTRIBUTE_UNIX_INODE: string
export const FILE_ATTRIBUTE_UNIX_IS_MOUNTPOINT: string
export const FILE_ATTRIBUTE_UNIX_MODE: string
export const FILE_ATTRIBUTE_UNIX_NLINK: string
export const FILE_ATTRIBUTE_UNIX_RDEV: string
export const FILE_ATTRIBUTE_UNIX_UID: string
export const MEMORY_MONITOR_EXTENSION_POINT_NAME: string
export const MENU_ATTRIBUTE_ACTION: string
export const MENU_ATTRIBUTE_ACTION_NAMESPACE: string
export const MENU_ATTRIBUTE_ICON: string
export const MENU_ATTRIBUTE_LABEL: string
export const MENU_ATTRIBUTE_TARGET: string
export const MENU_LINK_SECTION: string
export const MENU_LINK_SUBMENU: string
export const NATIVE_VOLUME_MONITOR_EXTENSION_POINT_NAME: string
export const NETWORK_MONITOR_EXTENSION_POINT_NAME: string
export const PROXY_EXTENSION_POINT_NAME: string
export const PROXY_RESOLVER_EXTENSION_POINT_NAME: string
export const SETTINGS_BACKEND_EXTENSION_POINT_NAME: string
export const TLS_BACKEND_EXTENSION_POINT_NAME: string
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_CLIENT: string
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_SERVER: string
export const VFS_EXTENSION_POINT_NAME: string
export const VOLUME_IDENTIFIER_KIND_CLASS: string
export const VOLUME_IDENTIFIER_KIND_HAL_UDI: string
export const VOLUME_IDENTIFIER_KIND_LABEL: string
export const VOLUME_IDENTIFIER_KIND_NFS_MOUNT: string
export const VOLUME_IDENTIFIER_KIND_UNIX_DEVICE: string
export const VOLUME_IDENTIFIER_KIND_UUID: string
export const VOLUME_MONITOR_EXTENSION_POINT_NAME: string
export function actionNameIsValid(actionName: string): boolean
export function actionParseDetailedName(detailedName: string): [ /* returnType */ boolean, /* actionName */ string, /* targetValue */ GLib.Variant ]
export function actionPrintDetailedName(actionName: string, targetValue?: GLib.Variant | null): string
export function appInfoCreateFromCommandline(commandline: string, applicationName: string | null, flags: AppInfoCreateFlags): AppInfo
export function appInfoGetAll(): AppInfo[]
export function appInfoGetAllForType(contentType: string): AppInfo[]
export function appInfoGetDefaultForType(contentType: string, mustSupportUris: boolean): AppInfo | null
export function appInfoGetDefaultForUriScheme(uriScheme: string): AppInfo | null
export function appInfoGetFallbackForType(contentType: string): AppInfo[]
export function appInfoGetRecommendedForType(contentType: string): AppInfo[]
export function appInfoLaunchDefaultForUri(uri: string, context?: AppLaunchContext | null): boolean
export function appInfoLaunchDefaultForUriAsync(uri: string, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function appInfoLaunchDefaultForUriFinish(result: AsyncResult): boolean
export function appInfoResetTypeAssociations(contentType: string): void
export function asyncInitableNewvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function busGet(busType: BusType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function busGetFinish(res: AsyncResult): DBusConnection
export function busGetSync(busType: BusType, cancellable?: Cancellable | null): DBusConnection
export function busOwnNameOnConnection(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, nameAcquiredClosure?: Function, nameLostClosure?: Function): number
export function busOwnName(busType: BusType, name: string, flags: BusNameOwnerFlags, busAcquiredClosure?: Function, nameAcquiredClosure?: Function, nameLostClosure?: Function): number
export function busUnownName(ownerId: number): void
export function busUnwatchName(watcherId: number): void
export function busWatchNameOnConnection(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, nameAppearedClosure?: Function, nameVanishedClosure?: Function): number
export function busWatchName(busType: BusType, name: string, flags: BusNameWatcherFlags, nameAppearedClosure?: Function, nameVanishedClosure?: Function): number
export function contentTypeCanBeExecutable(type: string): boolean
export function contentTypeEquals(type1: string, type2: string): boolean
export function contentTypeFromMimeType(mimeType: string): string | null
export function contentTypeGetDescription(type: string): string
export function contentTypeGetGenericIconName(type: string): string | null
export function contentTypeGetIcon(type: string): Icon
export function contentTypeGetMimeDirs(): string[]
export function contentTypeGetMimeType(type: string): string | null
export function contentTypeGetSymbolicIcon(type: string): Icon
export function contentTypeGuess(filename: string | null, data: any | null): [ /* returnType */ string, /* resultUncertain */ boolean | null ]
export function contentTypeGuessForTree(root: File): string[]
export function contentTypeIsA(type: string, supertype: string): boolean
export function contentTypeIsMimeType(type: string, mimeType: string): boolean
export function contentTypeIsUnknown(type: string): boolean
export function contentTypeSetMimeDirs(dirs?: string[] | null): void
export function contentTypesGetRegistered(): string[]
export function dbusAddressEscapeValue(string: string): string
export function dbusAddressGetForBusSync(busType: BusType, cancellable?: Cancellable | null): string
export function dbusAddressGetStream(address: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function dbusAddressGetStreamFinish(res: AsyncResult): [ /* returnType */ IOStream, /* outGuid */ string | null ]
export function dbusAddressGetStreamSync(address: string, cancellable?: Cancellable | null): [ /* returnType */ IOStream, /* outGuid */ string | null ]
export function dbusAnnotationInfoLookup(annotations: DBusAnnotationInfo[] | null, name: string): string | null
export function dbusErrorEncodeGerror(error: GLib.Error): string
export function dbusErrorGetRemoteError(error: GLib.Error): string | null
export function dbusErrorIsRemoteError(error: GLib.Error): boolean
export function dbusErrorNewForDbusError(dbusErrorName: string, dbusErrorMessage: string): GLib.Error
export function dbusErrorQuark(): GLib.Quark
export function dbusErrorRegisterError(errorDomain: GLib.Quark, errorCode: number, dbusErrorName: string): boolean
export function dbusErrorRegisterErrorDomain(errorDomainQuarkName: string, quarkVolatile: number, entries: DBusErrorEntry[]): void
export function dbusErrorStripRemoteError(error: GLib.Error): boolean
export function dbusErrorUnregisterError(errorDomain: GLib.Quark, errorCode: number, dbusErrorName: string): boolean
export function dbusEscapeObjectPath(s: string): string
export function dbusEscapeObjectPathBytestring(bytes: any): string
export function dbusGenerateGuid(): string
export function dbusGvalueToGvariant(gvalue: any, type: GLib.VariantType): GLib.Variant
export function dbusGvariantToGvalue(value: GLib.Variant): /* outGvalue */ any
export function dbusIsAddress(string: string): boolean
export function dbusIsGuid(string: string): boolean
export function dbusIsInterfaceName(string: string): boolean
export function dbusIsMemberName(string: string): boolean
export function dbusIsName(string: string): boolean
export function dbusIsSupportedAddress(string: string): boolean
export function dbusIsUniqueName(string: string): boolean
export function dbusUnescapeObjectPath(s: string): any | null
export function dtlsClientConnectionNew(baseSocket: DatagramBased, serverIdentity?: SocketConnectable | null): DtlsClientConnection
export function dtlsServerConnectionNew(baseSocket: DatagramBased, certificate?: TlsCertificate | null): DtlsServerConnection
export function fileNewForCommandlineArg(arg: string): File
export function fileNewForCommandlineArgAndCwd(arg: string, cwd: string): File
export function fileNewForPath(path: string): File
export function fileNewForUri(uri: string): File
export function fileNewTmp(tmpl?: string | null): [ /* returnType */ File, /* iostream */ FileIOStream ]
export function fileParseName(parseName: string): File
export function iconDeserialize(value: GLib.Variant): Icon | null
export function iconHash(icon: object): number
export function iconNewForString(str: string): Icon
export function initableNewv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
export function ioErrorFromErrno(errNo: number): IOErrorEnum
export function ioErrorQuark(): GLib.Quark
export function ioExtensionPointImplement(extensionPointName: string, type: GObject.Type, extensionName: string, priority: number): IOExtension
export function ioExtensionPointLookup(name: string): IOExtensionPoint
export function ioExtensionPointRegister(name: string): IOExtensionPoint
export function ioModulesLoadAllInDirectory(dirname: string): IOModule[]
export function ioModulesLoadAllInDirectoryWithScope(dirname: string, scope: IOModuleScope): IOModule[]
export function ioModulesScanAllInDirectory(dirname: string): void
export function ioModulesScanAllInDirectoryWithScope(dirname: string, scope: IOModuleScope): void
export function ioSchedulerCancelAllJobs(): void
export function ioSchedulerPushJob(jobFunc: IOSchedulerJobFunc, ioPriority: number, cancellable?: Cancellable | null): void
export function keyfileSettingsBackendNew(filename: string, rootPath: string, rootGroup?: string | null): SettingsBackend
export function memoryMonitorDupDefault(): MemoryMonitor
export function memorySettingsBackendNew(): SettingsBackend
export function networkMonitorGetDefault(): NetworkMonitor
export function networkingInit(): void
export function nullSettingsBackendNew(): SettingsBackend
export function pollableSourceNew(pollableStream: GObject.Object): GLib.Source
export function pollableSourceNewFull(pollableStream: GObject.Object, childSource?: GLib.Source | null, cancellable?: Cancellable | null): GLib.Source
export function pollableStreamRead(stream: InputStream, buffer: any, blocking: boolean, cancellable?: Cancellable | null): number
export function pollableStreamWrite(stream: OutputStream, buffer: any, blocking: boolean, cancellable?: Cancellable | null): number
export function pollableStreamWriteAll(stream: OutputStream, buffer: any, blocking: boolean, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number ]
export function proxyGetDefaultForProtocol(protocol: string): Proxy | null
export function proxyResolverGetDefault(): ProxyResolver
export function resolverErrorQuark(): GLib.Quark
export function resourceErrorQuark(): GLib.Quark
export function resourceLoad(filename: string): Resource
export function resourcesEnumerateChildren(path: string, lookupFlags: ResourceLookupFlags): string[]
export function resourcesGetInfo(path: string, lookupFlags: ResourceLookupFlags): [ /* returnType */ boolean, /* size */ number | null, /* flags */ number | null ]
export function resourcesLookupData(path: string, lookupFlags: ResourceLookupFlags): any
export function resourcesOpenStream(path: string, lookupFlags: ResourceLookupFlags): InputStream
export function resourcesRegister(resource: Resource): void
export function resourcesUnregister(resource: Resource): void
export function settingsSchemaSourceGetDefault(): SettingsSchemaSource | null
export function simpleAsyncReportGerrorInIdle(object: GObject.Object | null, callback: AsyncReadyCallback | null, error: GLib.Error): void
export function tlsBackendGetDefault(): TlsBackend
export function tlsChannelBindingErrorQuark(): GLib.Quark
export function tlsClientConnectionNew(baseIoStream: IOStream, serverIdentity?: SocketConnectable | null): TlsClientConnection
export function tlsErrorQuark(): GLib.Quark
export function tlsFileDatabaseNew(anchors: string): TlsFileDatabase
export function tlsServerConnectionNew(baseIoStream: IOStream, certificate?: TlsCertificate | null): TlsServerConnection
export function unixIsMountPathSystemInternal(mountPath: string): boolean
export function unixIsSystemDevicePath(devicePath: string): boolean
export function unixIsSystemFsType(fsType: string): boolean
export function unixMountAt(mountPath: string): [ /* returnType */ UnixMountEntry, /* timeRead */ number | null ]
export function unixMountCompare(mount1: UnixMountEntry, mount2: UnixMountEntry): number
export function unixMountCopy(mountEntry: UnixMountEntry): UnixMountEntry
export function unixMountFor(filePath: string): [ /* returnType */ UnixMountEntry, /* timeRead */ number | null ]
export function unixMountFree(mountEntry: UnixMountEntry): void
export function unixMountGetDevicePath(mountEntry: UnixMountEntry): string
export function unixMountGetFsType(mountEntry: UnixMountEntry): string
export function unixMountGetMountPath(mountEntry: UnixMountEntry): string
export function unixMountGetOptions(mountEntry: UnixMountEntry): string | null
export function unixMountGetRootPath(mountEntry: UnixMountEntry): string | null
export function unixMountGuessCanEject(mountEntry: UnixMountEntry): boolean
export function unixMountGuessIcon(mountEntry: UnixMountEntry): Icon
export function unixMountGuessName(mountEntry: UnixMountEntry): string
export function unixMountGuessShouldDisplay(mountEntry: UnixMountEntry): boolean
export function unixMountGuessSymbolicIcon(mountEntry: UnixMountEntry): Icon
export function unixMountIsReadonly(mountEntry: UnixMountEntry): boolean
export function unixMountIsSystemInternal(mountEntry: UnixMountEntry): boolean
export function unixMountPointAt(mountPath: string): [ /* returnType */ UnixMountPoint | null, /* timeRead */ number | null ]
export function unixMountPointsChangedSince(time: number): boolean
export function unixMountPointsGet(): [ /* returnType */ UnixMountPoint[], /* timeRead */ number | null ]
export function unixMountsChangedSince(time: number): boolean
export function unixMountsGet(): [ /* returnType */ UnixMountEntry[], /* timeRead */ number | null ]
export interface AsyncReadyCallback {
    (sourceObject: GObject.Object | null, res: AsyncResult): void
}
export interface BusAcquiredCallback {
    (connection: DBusConnection, name: string): void
}
export interface BusNameAcquiredCallback {
    (connection: DBusConnection, name: string): void
}
export interface BusNameAppearedCallback {
    (connection: DBusConnection, name: string, nameOwner: string): void
}
export interface BusNameLostCallback {
    (connection: DBusConnection, name: string): void
}
export interface BusNameVanishedCallback {
    (connection: DBusConnection, name: string): void
}
export interface CancellableSourceFunc {
    (cancellable?: Cancellable | null): boolean
}
export interface DBusInterfaceGetPropertyFunc {
    (connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, error: GLib.Error): GLib.Variant
}
export interface DBusInterfaceMethodCallFunc {
    (connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant, invocation: DBusMethodInvocation): void
}
export interface DBusInterfaceSetPropertyFunc {
    (connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, value: GLib.Variant, error: GLib.Error): boolean
}
export interface DBusMessageFilterFunction {
    (connection: DBusConnection, message: DBusMessage, incoming: boolean): DBusMessage | null
}
export interface DBusProxyTypeFunc {
    (manager: DBusObjectManagerClient, objectPath: string, interfaceName?: string | null): GObject.Type
}
export interface DBusSignalCallback {
    (connection: DBusConnection, senderName: string | null, objectPath: string, interfaceName: string, signalName: string, parameters: GLib.Variant): void
}
export interface DBusSubtreeDispatchFunc {
    (connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, node: string, outUserData: object): DBusInterfaceVTable | null
}
export interface DBusSubtreeEnumerateFunc {
    (connection: DBusConnection, sender: string, objectPath: string): string[]
}
export interface DBusSubtreeIntrospectFunc {
    (connection: DBusConnection, sender: string, objectPath: string, node: string): DBusInterfaceInfo[] | null
}
export interface DatagramBasedSourceFunc {
    (datagramBased: DatagramBased, condition: GLib.IOCondition): boolean
}
export interface DesktopAppLaunchCallback {
    (appinfo: DesktopAppInfo, pid: GLib.Pid): void
}
export interface FileMeasureProgressCallback {
    (reporting: boolean, currentSize: number, numDirs: number, numFiles: number): void
}
export interface FileProgressCallback {
    (currentNumBytes: number, totalNumBytes: number): void
}
export interface FileReadMoreCallback {
    (fileContents: string, fileSize: number): boolean
}
export interface IOSchedulerJobFunc {
    (job: IOSchedulerJob, cancellable?: Cancellable | null): boolean
}
export interface PollableSourceFunc {
    (pollableStream: GObject.Object): boolean
}
export interface ReallocFunc {
    (data: object | null, size: number): object | null
}
export interface SettingsBindGetMapping {
    (value: any, variant: GLib.Variant): boolean
}
export interface SettingsBindSetMapping {
    (value: any, expectedType: GLib.VariantType): GLib.Variant
}
export interface SettingsGetMapping {
    (value: GLib.Variant): boolean
}
export interface SimpleAsyncThreadFunc {
    (res: SimpleAsyncResult, object: GObject.Object, cancellable?: Cancellable | null): void
}
export interface SocketSourceFunc {
    (socket: Socket, condition: GLib.IOCondition): boolean
}
export interface TaskThreadFunc {
    (task: Task, sourceObject: GObject.Object, taskData?: object | null, cancellable?: Cancellable | null): void
}
export interface VfsFileLookupFunc {
    (vfs: Vfs, identifier: string): File
}
export class Action {
    /* Properties of Gio.Action */
    readonly enabled: boolean
    readonly name: string
    readonly parameterType: GLib.VariantType
    readonly state: GLib.Variant
    readonly stateType: GLib.VariantType
    /* Methods of Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    changeState(value: GLib.Variant): void
    getEnabled(): boolean
    getName(): string
    getParameterType(): GLib.VariantType | null
    getState(): GLib.Variant | null
    getStateHint(): GLib.Variant | null
    getStateType(): GLib.VariantType | null
    /* Virtual methods of Gio.Action */
    vfuncActivate(parameter?: GLib.Variant | null): void
    vfuncChangeState(value: GLib.Variant): void
    vfuncGetEnabled(): boolean
    vfuncGetName(): string
    vfuncGetParameterType(): GLib.VariantType | null
    vfuncGetState(): GLib.Variant | null
    vfuncGetStateHint(): GLib.Variant | null
    vfuncGetStateType(): GLib.VariantType | null
    static name: string
    /* Static methods and pseudo-constructors */
    static nameIsValid(actionName: string): boolean
    static parseDetailedName(detailedName: string): [ /* returnType */ boolean, /* actionName */ string, /* targetValue */ GLib.Variant ]
    static printDetailedName(actionName: string, targetValue?: GLib.Variant | null): string
}
export class ActionGroup {
    /* Methods of Gio.ActionGroup */
    actionAdded(actionName: string): void
    actionEnabledChanged(actionName: string, enabled: boolean): void
    actionRemoved(actionName: string): void
    actionStateChanged(actionName: string, state: GLib.Variant): void
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    changeActionState(actionName: string, value: GLib.Variant): void
    getActionEnabled(actionName: string): boolean
    getActionParameterType(actionName: string): GLib.VariantType | null
    getActionState(actionName: string): GLib.Variant | null
    getActionStateHint(actionName: string): GLib.Variant | null
    getActionStateType(actionName: string): GLib.VariantType | null
    hasAction(actionName: string): boolean
    listActions(): string[]
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Virtual methods of Gio.ActionGroup */
    vfuncActionAdded(actionName: string): void
    vfuncActionEnabledChanged(actionName: string, enabled: boolean): void
    vfuncActionRemoved(actionName: string): void
    vfuncActionStateChanged(actionName: string, state: GLib.Variant): void
    vfuncActivateAction(actionName: string, parameter?: GLib.Variant | null): void
    vfuncChangeActionState(actionName: string, value: GLib.Variant): void
    vfuncGetActionEnabled(actionName: string): boolean
    vfuncGetActionParameterType(actionName: string): GLib.VariantType | null
    vfuncGetActionState(actionName: string): GLib.Variant | null
    vfuncGetActionStateHint(actionName: string): GLib.Variant | null
    vfuncGetActionStateType(actionName: string): GLib.VariantType | null
    vfuncHasAction(actionName: string): boolean
    vfuncListActions(): string[]
    vfuncQueryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: ActionGroup, actionName: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: ActionGroup, actionName: string) => void)): number
    emit(sigName: "action-added", actionName: string): void
    on(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-enabled-changed", callback: (($obj: ActionGroup, actionName: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: ActionGroup, actionName: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    on(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-removed", callback: (($obj: ActionGroup, actionName: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: ActionGroup, actionName: string) => void)): number
    emit(sigName: "action-removed", actionName: string): void
    on(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-state-changed", callback: (($obj: ActionGroup, actionName: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: ActionGroup, actionName: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    on(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class ActionMap {
    /* Methods of Gio.ActionMap */
    addAction(action: Action): void
    addActionEntries(entries: ActionEntry[], userData?: object | null): void
    lookupAction(actionName: string): Action | null
    removeAction(actionName: string): void
    /* Virtual methods of Gio.ActionMap */
    vfuncAddAction(action: Action): void
    vfuncLookupAction(actionName: string): Action | null
    vfuncRemoveAction(actionName: string): void
    static name: string
}
export class AppInfo {
    /* Methods of Gio.AppInfo */
    addSupportsType(contentType: string): boolean
    canDelete(): boolean
    canRemoveSupportsType(): boolean
    delete(): boolean
    dup(): AppInfo
    equal(appinfo2: AppInfo): boolean
    getCommandline(): string | null
    getDescription(): string | null
    getDisplayName(): string
    getExecutable(): string
    getIcon(): Icon | null
    getId(): string | null
    getName(): string
    getSupportedTypes(): string[]
    launch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    launchUris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    launchUrisAsync(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    launchUrisFinish(result: AsyncResult): boolean
    removeSupportsType(contentType: string): boolean
    setAsDefaultForExtension(extension: string): boolean
    setAsDefaultForType(contentType: string): boolean
    setAsLastUsedForType(contentType: string): boolean
    shouldShow(): boolean
    supportsFiles(): boolean
    supportsUris(): boolean
    /* Virtual methods of Gio.AppInfo */
    vfuncAddSupportsType(contentType: string): boolean
    vfuncCanDelete(): boolean
    vfuncCanRemoveSupportsType(): boolean
    vfuncDoDelete(): boolean
    vfuncDup(): AppInfo
    vfuncEqual(appinfo2: AppInfo): boolean
    vfuncGetCommandline(): string | null
    vfuncGetDescription(): string | null
    vfuncGetDisplayName(): string
    vfuncGetExecutable(): string
    vfuncGetIcon(): Icon | null
    vfuncGetId(): string | null
    vfuncGetName(): string
    vfuncGetSupportedTypes(): string[]
    vfuncLaunch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    vfuncLaunchUris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    vfuncLaunchUrisAsync(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLaunchUrisFinish(result: AsyncResult): boolean
    vfuncRemoveSupportsType(contentType: string): boolean
    vfuncSetAsDefaultForExtension(extension: string): boolean
    vfuncSetAsDefaultForType(contentType: string): boolean
    vfuncSetAsLastUsedForType(contentType: string): boolean
    vfuncShouldShow(): boolean
    vfuncSupportsFiles(): boolean
    vfuncSupportsUris(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static createFromCommandline(commandline: string, applicationName: string | null, flags: AppInfoCreateFlags): AppInfo
    static getAll(): AppInfo[]
    static getAllForType(contentType: string): AppInfo[]
    static getDefaultForType(contentType: string, mustSupportUris: boolean): AppInfo | null
    static getDefaultForUriScheme(uriScheme: string): AppInfo | null
    static getFallbackForType(contentType: string): AppInfo[]
    static getRecommendedForType(contentType: string): AppInfo[]
    static launchDefaultForUri(uri: string, context?: AppLaunchContext | null): boolean
    static launchDefaultForUriAsync(uri: string, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static launchDefaultForUriFinish(result: AsyncResult): boolean
    static resetTypeAssociations(contentType: string): void
}
export class AsyncInitable {
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    initFinish(res: AsyncResult): boolean
    newFinish(res: AsyncResult): GObject.Object
    /* Virtual methods of Gio.AsyncInitable */
    vfuncInitAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncInitFinish(res: AsyncResult): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
}
export class AsyncResult {
    /* Methods of Gio.AsyncResult */
    getSourceObject(): GObject.Object | null
    getUserData(): object | null
    isTagged(sourceTag?: object | null): boolean
    legacyPropagateError(): boolean
    /* Virtual methods of Gio.AsyncResult */
    vfuncGetSourceObject(): GObject.Object | null
    vfuncGetUserData(): object | null
    vfuncIsTagged(sourceTag?: object | null): boolean
    static name: string
}
export class Converter {
    /* Methods of Gio.Converter */
    convert(inbuf: any, outbuf: any, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    reset(): void
    /* Virtual methods of Gio.Converter */
    vfuncConvert(inbuf: any | null, outbuf: any | null, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    vfuncReset(): void
    static name: string
}
export class DBusInterface {
    /* Methods of Gio.DBusInterface */
    getObject(): DBusObject | null
    getInfo(): DBusInterfaceInfo
    setObject(object?: DBusObject | null): void
    /* Virtual methods of Gio.DBusInterface */
    vfuncDupObject(): DBusObject | null
    vfuncGetInfo(): DBusInterfaceInfo
    vfuncSetObject(object?: DBusObject | null): void
    static name: string
}
export class DBusObject {
    /* Methods of Gio.DBusObject */
    getInterface(interfaceName: string): DBusInterface | null
    getInterfaces(): DBusInterface[]
    getObjectPath(): string
    /* Virtual methods of Gio.DBusObject */
    vfuncGetInterface(interfaceName: string): DBusInterface | null
    vfuncGetInterfaces(): DBusInterface[]
    vfuncGetObjectPath(): string
    vfuncInterfaceAdded(interface: DBusInterface): void
    vfuncInterfaceRemoved(interface: DBusInterface): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class DBusObjectManager {
    /* Methods of Gio.DBusObjectManager */
    getInterface(objectPath: string, interfaceName: string): DBusInterface
    getObject(objectPath: string): DBusObject
    getObjectPath(): string
    getObjects(): DBusObject[]
    /* Virtual methods of Gio.DBusObjectManager */
    vfuncGetInterface(objectPath: string, interfaceName: string): DBusInterface
    vfuncGetObject(objectPath: string): DBusObject
    vfuncGetObjectPath(): string
    vfuncGetObjects(): DBusObject[]
    vfuncInterfaceAdded(object: DBusObject, interface: DBusInterface): void
    vfuncInterfaceRemoved(object: DBusObject, interface: DBusInterface): void
    vfuncObjectAdded(object: DBusObject): void
    vfuncObjectRemoved(object: DBusObject): void
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-added", callback: (($obj: DBusObjectManager, object: DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: DBusObjectManager, object: DBusObject) => void)): number
    emit(sigName: "object-added", object: DBusObject): void
    on(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-removed", callback: (($obj: DBusObjectManager, object: DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: DBusObjectManager, object: DBusObject) => void)): number
    emit(sigName: "object-removed", object: DBusObject): void
    on(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class DatagramBased {
    /* Methods of Gio.DatagramBased */
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    sendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.DatagramBased */
    vfuncConditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    vfuncConditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    vfuncCreateSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    vfuncReceiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfuncSendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    static name: string
}
export class DesktopAppInfoLookup {
    /* Methods of Gio.DesktopAppInfoLookup */
    getDefaultForUriScheme(uriScheme: string): AppInfo | null
    /* Virtual methods of Gio.DesktopAppInfoLookup */
    vfuncGetDefaultForUriScheme(uriScheme: string): AppInfo | null
    static name: string
}
export class Drive {
    /* Methods of Gio.Drive */
    canEject(): boolean
    canPollForMedia(): boolean
    canStart(): boolean
    canStartDegraded(): boolean
    canStop(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectFinish(result: AsyncResult): boolean
    ejectWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectWithOperationFinish(result: AsyncResult): boolean
    enumerateIdentifiers(): string[]
    getIcon(): Icon
    getIdentifier(kind: string): string | null
    getName(): string
    getSortKey(): string | null
    getStartStopType(): DriveStartStopType
    getSymbolicIcon(): Icon
    getVolumes(): Volume[]
    hasMedia(): boolean
    hasVolumes(): boolean
    isMediaCheckAutomatic(): boolean
    isMediaRemovable(): boolean
    isRemovable(): boolean
    pollForMedia(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    pollForMediaFinish(result: AsyncResult): boolean
    start(flags: DriveStartFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    startFinish(result: AsyncResult): boolean
    stop(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    stopFinish(result: AsyncResult): boolean
    /* Virtual methods of Gio.Drive */
    vfuncCanEject(): boolean
    vfuncCanPollForMedia(): boolean
    vfuncCanStart(): boolean
    vfuncCanStartDegraded(): boolean
    vfuncCanStop(): boolean
    vfuncChanged(): void
    vfuncDisconnected(): void
    vfuncEject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectButton(): void
    vfuncEjectFinish(result: AsyncResult): boolean
    vfuncEjectWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectWithOperationFinish(result: AsyncResult): boolean
    vfuncEnumerateIdentifiers(): string[]
    vfuncGetIcon(): Icon
    vfuncGetIdentifier(kind: string): string | null
    vfuncGetName(): string
    vfuncGetSortKey(): string | null
    vfuncGetStartStopType(): DriveStartStopType
    vfuncGetSymbolicIcon(): Icon
    vfuncGetVolumes(): Volume[]
    vfuncHasMedia(): boolean
    vfuncHasVolumes(): boolean
    vfuncIsMediaCheckAutomatic(): boolean
    vfuncIsMediaRemovable(): boolean
    vfuncIsRemovable(): boolean
    vfuncPollForMedia(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncPollForMediaFinish(result: AsyncResult): boolean
    vfuncStart(flags: DriveStartFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncStartFinish(result: AsyncResult): boolean
    vfuncStop(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncStopButton(): void
    vfuncStopFinish(result: AsyncResult): boolean
    /* Signals of Gio.Drive */
    connect(sigName: "changed", callback: (($obj: Drive) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Drive) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "disconnected", callback: (($obj: Drive) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Drive) => void)): number
    emit(sigName: "disconnected"): void
    on(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "eject-button", callback: (($obj: Drive) => void)): number
    connect_after(sigName: "eject-button", callback: (($obj: Drive) => void)): number
    emit(sigName: "eject-button"): void
    on(sigName: "eject-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "eject-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "eject-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stop-button", callback: (($obj: Drive) => void)): number
    connect_after(sigName: "stop-button", callback: (($obj: Drive) => void)): number
    emit(sigName: "stop-button"): void
    on(sigName: "stop-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stop-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stop-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class DtlsClientConnection {
    /* Properties of Gio.DtlsClientConnection */
    readonly acceptedCas: object[]
    serverIdentity: SocketConnectable
    validationFlags: TlsCertificateFlags
    /* Methods of Gio.DtlsClientConnection */
    getAcceptedCas(): any
    getServerIdentity(): SocketConnectable
    getValidationFlags(): TlsCertificateFlags
    setServerIdentity(identity: SocketConnectable): void
    setValidationFlags(flags: TlsCertificateFlags): void
    /* Methods of Gio.DatagramBased */
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    sendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.DatagramBased */
    vfuncConditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    vfuncConditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    vfuncCreateSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    vfuncReceiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfuncSendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    static name: string
}
export class DtlsConnection {
    /* Properties of Gio.DtlsConnection */
    advertisedProtocols: string[]
    certificate: TlsCertificate
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiatedProtocol: string
    readonly peerCertificate: TlsCertificate
    readonly peerCertificateErrors: TlsCertificateFlags
    rehandshakeMode: TlsRehandshakeMode
    requireCloseNotify: boolean
    /* Methods of Gio.DtlsConnection */
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate | null
    getChannelBindingData(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ any | null ]
    getDatabase(): TlsDatabase | null
    getInteraction(): TlsInteraction | null
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate | null
    getPeerCertificateErrors(): TlsCertificateFlags
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database?: TlsDatabase | null): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(requireCloseNotify: boolean): void
    shutdown(shutdownRead: boolean, shutdownWrite: boolean, cancellable?: Cancellable | null): boolean
    shutdownAsync(shutdownRead: boolean, shutdownWrite: boolean, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    shutdownFinish(result: AsyncResult): boolean
    /* Methods of Gio.DatagramBased */
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    sendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.DtlsConnection */
    vfuncAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfuncGetBindingData(type: TlsChannelBindingType, data: any): boolean
    vfuncGetNegotiatedProtocol(): string | null
    vfuncHandshake(cancellable?: Cancellable | null): boolean
    vfuncHandshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncHandshakeFinish(result: AsyncResult): boolean
    vfuncSetAdvertisedProtocols(protocols?: string[] | null): void
    vfuncShutdown(shutdownRead: boolean, shutdownWrite: boolean, cancellable?: Cancellable | null): boolean
    vfuncShutdownAsync(shutdownRead: boolean, shutdownWrite: boolean, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncShutdownFinish(result: AsyncResult): boolean
    /* Virtual methods of Gio.DatagramBased */
    vfuncConditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    vfuncConditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    vfuncCreateSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    vfuncReceiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfuncSendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Signals of Gio.DtlsConnection */
    connect(sigName: "accept-certificate", callback: (($obj: DtlsConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: DtlsConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", peerCert: TlsCertificate, errors: TlsCertificateFlags): void
    on(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class DtlsServerConnection {
    /* Properties of Gio.DtlsServerConnection */
    authenticationMode: TlsAuthenticationMode
    /* Methods of Gio.DatagramBased */
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    sendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.DatagramBased */
    vfuncConditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    vfuncConditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    vfuncCreateSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    vfuncReceiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfuncSendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    static name: string
}
export class File {
    /* Methods of Gio.File */
    appendTo(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    appendToAsync(flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    appendToFinish(res: AsyncResult): FileOutputStream
    buildAttributeListForCopy(flags: FileCopyFlags, cancellable?: Cancellable | null): string
    copy(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progressCallback?: FileProgressCallback | null): boolean
    copyAsync(destination: File, flags: FileCopyFlags, ioPriority: number, cancellable?: Cancellable | null): void
    copyAttributes(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null): boolean
    copyFinish(res: AsyncResult): boolean
    create(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    createAsync(flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    createFinish(res: AsyncResult): FileOutputStream
    createReadwrite(flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    createReadwriteAsync(flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    createReadwriteFinish(res: AsyncResult): FileIOStream
    delete(cancellable?: Cancellable | null): boolean
    deleteAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    deleteFinish(result: AsyncResult): boolean
    dup(): File
    ejectMountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectMountableFinish(result: AsyncResult): boolean
    ejectMountableWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectMountableWithOperationFinish(result: AsyncResult): boolean
    enumerateChildren(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileEnumerator
    enumerateChildrenAsync(attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    enumerateChildrenFinish(res: AsyncResult): FileEnumerator
    equal(file2: File): boolean
    findEnclosingMount(cancellable?: Cancellable | null): Mount
    findEnclosingMountAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    findEnclosingMountFinish(res: AsyncResult): Mount
    getBasename(): string | null
    getChild(name: string): File
    getChildForDisplayName(displayName: string): File
    getParent(): File | null
    getParseName(): string
    getPath(): string | null
    getRelativePath(descendant: File): string | null
    getUri(): string
    getUriScheme(): string | null
    hasParent(parent?: File | null): boolean
    hasPrefix(prefix: File): boolean
    hasUriScheme(uriScheme: string): boolean
    hash(): number
    isNative(): boolean
    loadBytes(cancellable?: Cancellable | null): [ /* returnType */ any, /* etagOut */ string | null ]
    loadBytesAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadBytesFinish(result: AsyncResult): [ /* returnType */ any, /* etagOut */ string | null ]
    loadContents(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* contents */ any, /* etagOut */ string | null ]
    loadContentsAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadContentsFinish(res: AsyncResult): [ /* returnType */ boolean, /* contents */ any, /* etagOut */ string | null ]
    loadPartialContentsFinish(res: AsyncResult): [ /* returnType */ boolean, /* contents */ any, /* etagOut */ string | null ]
    makeDirectory(cancellable?: Cancellable | null): boolean
    makeDirectoryAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    makeDirectoryFinish(result: AsyncResult): boolean
    makeDirectoryWithParents(cancellable?: Cancellable | null): boolean
    makeSymbolicLink(symlinkValue: string, cancellable?: Cancellable | null): boolean
    measureDiskUsageFinish(result: AsyncResult): [ /* returnType */ boolean, /* diskUsage */ number | null, /* numDirs */ number | null, /* numFiles */ number | null ]
    monitor(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    monitorDirectory(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    monitorFile(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    mountEnclosingVolume(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mountEnclosingVolumeFinish(result: AsyncResult): boolean
    mountMountable(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mountMountableFinish(result: AsyncResult): File
    move(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progressCallback?: FileProgressCallback | null): boolean
    openReadwrite(cancellable?: Cancellable | null): FileIOStream
    openReadwriteAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    openReadwriteFinish(res: AsyncResult): FileIOStream
    peekPath(): string | null
    pollMountable(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    pollMountableFinish(result: AsyncResult): boolean
    queryDefaultHandler(cancellable?: Cancellable | null): AppInfo
    queryDefaultHandlerAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryDefaultHandlerFinish(result: AsyncResult): AppInfo
    queryExists(cancellable?: Cancellable | null): boolean
    queryFileType(flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileType
    queryFilesystemInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryFilesystemInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryFilesystemInfoFinish(res: AsyncResult): FileInfo
    queryInfo(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(res: AsyncResult): FileInfo
    querySettableAttributes(cancellable?: Cancellable | null): FileAttributeInfoList
    queryWritableNamespaces(cancellable?: Cancellable | null): FileAttributeInfoList
    read(cancellable?: Cancellable | null): FileInputStream
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readFinish(res: AsyncResult): FileInputStream
    replace(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    replaceAsync(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceContents(contents: any, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* newEtag */ string | null ]
    replaceContentsAsync(contents: any, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceContentsBytesAsync(contents: any, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceContentsFinish(res: AsyncResult): [ /* returnType */ boolean, /* newEtag */ string | null ]
    replaceFinish(res: AsyncResult): FileOutputStream
    replaceReadwrite(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    replaceReadwriteAsync(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceReadwriteFinish(res: AsyncResult): FileIOStream
    resolveRelativePath(relativePath: string): File
    setAttribute(attribute: string, type: FileAttributeType, valueP: object | null, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeByteString(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeInt32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeInt64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeString(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeUint32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeUint64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributesAsync(info: FileInfo, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    setAttributesFinish(result: AsyncResult): [ /* returnType */ boolean, /* info */ FileInfo ]
    setAttributesFromInfo(info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setDisplayName(displayName: string, cancellable?: Cancellable | null): File
    setDisplayNameAsync(displayName: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    setDisplayNameFinish(res: AsyncResult): File
    startMountable(flags: DriveStartFlags, startOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    startMountableFinish(result: AsyncResult): boolean
    stopMountable(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    stopMountableFinish(result: AsyncResult): boolean
    supportsThreadContexts(): boolean
    trash(cancellable?: Cancellable | null): boolean
    trashAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    trashFinish(result: AsyncResult): boolean
    unmountMountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountMountableFinish(result: AsyncResult): boolean
    unmountMountableWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountMountableWithOperationFinish(result: AsyncResult): boolean
    /* Virtual methods of Gio.File */
    vfuncAppendTo(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    vfuncAppendToAsync(flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncAppendToFinish(res: AsyncResult): FileOutputStream
    vfuncCopy(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progressCallback?: FileProgressCallback | null): boolean
    vfuncCopyAsync(destination: File, flags: FileCopyFlags, ioPriority: number, cancellable?: Cancellable | null): void
    vfuncCopyFinish(res: AsyncResult): boolean
    vfuncCreate(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    vfuncCreateAsync(flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCreateFinish(res: AsyncResult): FileOutputStream
    vfuncCreateReadwrite(flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    vfuncCreateReadwriteAsync(flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCreateReadwriteFinish(res: AsyncResult): FileIOStream
    vfuncDeleteFile(cancellable?: Cancellable | null): boolean
    vfuncDeleteFileAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncDeleteFileFinish(result: AsyncResult): boolean
    vfuncDup(): File
    vfuncEjectMountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectMountableFinish(result: AsyncResult): boolean
    vfuncEjectMountableWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectMountableWithOperationFinish(result: AsyncResult): boolean
    vfuncEnumerateChildren(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileEnumerator
    vfuncEnumerateChildrenAsync(attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEnumerateChildrenFinish(res: AsyncResult): FileEnumerator
    vfuncEqual(file2: File): boolean
    vfuncFindEnclosingMount(cancellable?: Cancellable | null): Mount
    vfuncFindEnclosingMountAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFindEnclosingMountFinish(res: AsyncResult): Mount
    vfuncGetBasename(): string | null
    vfuncGetChildForDisplayName(displayName: string): File
    vfuncGetParent(): File | null
    vfuncGetParseName(): string
    vfuncGetPath(): string | null
    vfuncGetRelativePath(descendant: File): string | null
    vfuncGetUri(): string
    vfuncGetUriScheme(): string | null
    vfuncHasUriScheme(uriScheme: string): boolean
    vfuncHash(): number
    vfuncIsNative(): boolean
    vfuncMakeDirectory(cancellable?: Cancellable | null): boolean
    vfuncMakeDirectoryAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncMakeDirectoryFinish(result: AsyncResult): boolean
    vfuncMakeSymbolicLink(symlinkValue: string, cancellable?: Cancellable | null): boolean
    vfuncMeasureDiskUsageFinish(result: AsyncResult): [ /* returnType */ boolean, /* diskUsage */ number | null, /* numDirs */ number | null, /* numFiles */ number | null ]
    vfuncMonitorDir(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    vfuncMonitorFile(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    vfuncMountEnclosingVolume(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncMountEnclosingVolumeFinish(result: AsyncResult): boolean
    vfuncMountMountable(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncMountMountableFinish(result: AsyncResult): File
    vfuncMove(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progressCallback?: FileProgressCallback | null): boolean
    vfuncOpenReadwrite(cancellable?: Cancellable | null): FileIOStream
    vfuncOpenReadwriteAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncOpenReadwriteFinish(res: AsyncResult): FileIOStream
    vfuncPollMountable(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncPollMountableFinish(result: AsyncResult): boolean
    vfuncPrefixMatches(file: File): boolean
    vfuncQueryFilesystemInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfuncQueryFilesystemInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncQueryFilesystemInfoFinish(res: AsyncResult): FileInfo
    vfuncQueryInfo(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileInfo
    vfuncQueryInfoAsync(attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncQueryInfoFinish(res: AsyncResult): FileInfo
    vfuncQuerySettableAttributes(cancellable?: Cancellable | null): FileAttributeInfoList
    vfuncQueryWritableNamespaces(cancellable?: Cancellable | null): FileAttributeInfoList
    vfuncReadAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncReadFinish(res: AsyncResult): FileInputStream
    vfuncReadFn(cancellable?: Cancellable | null): FileInputStream
    vfuncReplace(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    vfuncReplaceAsync(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncReplaceFinish(res: AsyncResult): FileOutputStream
    vfuncReplaceReadwrite(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    vfuncReplaceReadwriteAsync(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncReplaceReadwriteFinish(res: AsyncResult): FileIOStream
    vfuncResolveRelativePath(relativePath: string): File
    vfuncSetAttribute(attribute: string, type: FileAttributeType, valueP: object | null, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    vfuncSetAttributesAsync(info: FileInfo, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSetAttributesFinish(result: AsyncResult): [ /* returnType */ boolean, /* info */ FileInfo ]
    vfuncSetAttributesFromInfo(info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    vfuncSetDisplayName(displayName: string, cancellable?: Cancellable | null): File
    vfuncSetDisplayNameAsync(displayName: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSetDisplayNameFinish(res: AsyncResult): File
    vfuncStartMountable(flags: DriveStartFlags, startOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncStartMountableFinish(result: AsyncResult): boolean
    vfuncStopMountable(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncStopMountableFinish(result: AsyncResult): boolean
    vfuncTrash(cancellable?: Cancellable | null): boolean
    vfuncTrashAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncTrashFinish(result: AsyncResult): boolean
    vfuncUnmountMountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncUnmountMountableFinish(result: AsyncResult): boolean
    vfuncUnmountMountableWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncUnmountMountableWithOperationFinish(result: AsyncResult): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newForCommandlineArg(arg: string): File
    static newForCommandlineArgAndCwd(arg: string, cwd: string): File
    static newForPath(path: string): File
    static newForUri(uri: string): File
    static newTmp(tmpl?: string | null): [ /* returnType */ File, /* iostream */ FileIOStream ]
    static parseName(parseName: string): File
}
export class FileDescriptorBased {
    /* Methods of Gio.FileDescriptorBased */
    getFd(): number
    /* Virtual methods of Gio.FileDescriptorBased */
    vfuncGetFd(): number
    static name: string
}
export class Icon {
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    /* Virtual methods of Gio.Icon */
    vfuncEqual(icon2?: Icon | null): boolean
    vfuncHash(): number
    vfuncSerialize(): GLib.Variant | null
    static name: string
    /* Static methods and pseudo-constructors */
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
}
export class Initable {
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.Initable */
    vfuncInit(cancellable?: Cancellable | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
}
export class ListModel {
    /* Methods of Gio.ListModel */
    getItemType(): GObject.Type
    getNItems(): number
    getItem(position: number): GObject.Object | null
    itemsChanged(position: number, removed: number, added: number): void
    /* Virtual methods of Gio.ListModel */
    vfuncGetItem(position: number): GObject.Object | null
    vfuncGetItemType(): GObject.Type
    vfuncGetNItems(): number
    /* Signals of Gio.ListModel */
    connect(sigName: "items-changed", callback: (($obj: ListModel, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: ListModel, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    on(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class LoadableIcon {
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    /* Virtual methods of Gio.LoadableIcon */
    vfuncLoad(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    vfuncLoadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLoadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of Gio.Icon */
    vfuncEqual(icon2?: Icon | null): boolean
    vfuncHash(): number
    vfuncSerialize(): GLib.Variant | null
    static name: string
}
export class MemoryMonitor {
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.MemoryMonitor */
    vfuncLowMemoryWarning(level: MemoryMonitorWarningLevel): void
    /* Virtual methods of Gio.Initable */
    vfuncInit(cancellable?: Cancellable | null): boolean
    /* Signals of Gio.MemoryMonitor */
    connect(sigName: "low-memory-warning", callback: (($obj: MemoryMonitor, level: MemoryMonitorWarningLevel) => void)): number
    connect_after(sigName: "low-memory-warning", callback: (($obj: MemoryMonitor, level: MemoryMonitorWarningLevel) => void)): number
    emit(sigName: "low-memory-warning", level: MemoryMonitorWarningLevel): void
    on(sigName: "low-memory-warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "low-memory-warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "low-memory-warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static dupDefault(): MemoryMonitor
}
export class Mount {
    /* Methods of Gio.Mount */
    canEject(): boolean
    canUnmount(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectFinish(result: AsyncResult): boolean
    ejectWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectWithOperationFinish(result: AsyncResult): boolean
    getDefaultLocation(): File
    getDrive(): Drive | null
    getIcon(): Icon
    getName(): string
    getRoot(): File
    getSortKey(): string | null
    getSymbolicIcon(): Icon
    getUuid(): string | null
    getVolume(): Volume | null
    guessContentType(forceRescan: boolean, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    guessContentTypeFinish(result: AsyncResult): string[]
    guessContentTypeSync(forceRescan: boolean, cancellable?: Cancellable | null): string[]
    isShadowed(): boolean
    remount(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    remountFinish(result: AsyncResult): boolean
    shadow(): void
    unmount(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountFinish(result: AsyncResult): boolean
    unmountWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountWithOperationFinish(result: AsyncResult): boolean
    unshadow(): void
    /* Virtual methods of Gio.Mount */
    vfuncCanEject(): boolean
    vfuncCanUnmount(): boolean
    vfuncChanged(): void
    vfuncEject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectFinish(result: AsyncResult): boolean
    vfuncEjectWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectWithOperationFinish(result: AsyncResult): boolean
    vfuncGetDefaultLocation(): File
    vfuncGetDrive(): Drive | null
    vfuncGetIcon(): Icon
    vfuncGetName(): string
    vfuncGetRoot(): File
    vfuncGetSortKey(): string | null
    vfuncGetSymbolicIcon(): Icon
    vfuncGetUuid(): string | null
    vfuncGetVolume(): Volume | null
    vfuncGuessContentType(forceRescan: boolean, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncGuessContentTypeFinish(result: AsyncResult): string[]
    vfuncGuessContentTypeSync(forceRescan: boolean, cancellable?: Cancellable | null): string[]
    vfuncPreUnmount(): void
    vfuncRemount(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncRemountFinish(result: AsyncResult): boolean
    vfuncUnmount(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncUnmountFinish(result: AsyncResult): boolean
    vfuncUnmountWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncUnmountWithOperationFinish(result: AsyncResult): boolean
    vfuncUnmounted(): void
    /* Signals of Gio.Mount */
    connect(sigName: "changed", callback: (($obj: Mount) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Mount) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pre-unmount", callback: (($obj: Mount) => void)): number
    connect_after(sigName: "pre-unmount", callback: (($obj: Mount) => void)): number
    emit(sigName: "pre-unmount"): void
    on(sigName: "pre-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pre-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pre-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmounted", callback: (($obj: Mount) => void)): number
    connect_after(sigName: "unmounted", callback: (($obj: Mount) => void)): number
    emit(sigName: "unmounted"): void
    on(sigName: "unmounted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmounted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmounted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class NetworkMonitor {
    /* Properties of Gio.NetworkMonitor */
    readonly connectivity: NetworkConnectivity
    readonly networkAvailable: boolean
    readonly networkMetered: boolean
    /* Methods of Gio.NetworkMonitor */
    canReach(connectable: SocketConnectable, cancellable?: Cancellable | null): boolean
    canReachAsync(connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    canReachFinish(result: AsyncResult): boolean
    getConnectivity(): NetworkConnectivity
    getNetworkAvailable(): boolean
    getNetworkMetered(): boolean
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.NetworkMonitor */
    vfuncCanReach(connectable: SocketConnectable, cancellable?: Cancellable | null): boolean
    vfuncCanReachAsync(connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCanReachFinish(result: AsyncResult): boolean
    vfuncNetworkChanged(networkAvailable: boolean): void
    /* Virtual methods of Gio.Initable */
    vfuncInit(cancellable?: Cancellable | null): boolean
    /* Signals of Gio.NetworkMonitor */
    connect(sigName: "network-changed", callback: (($obj: NetworkMonitor, networkAvailable: boolean) => void)): number
    connect_after(sigName: "network-changed", callback: (($obj: NetworkMonitor, networkAvailable: boolean) => void)): number
    emit(sigName: "network-changed", networkAvailable: boolean): void
    on(sigName: "network-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "network-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "network-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefault(): NetworkMonitor
}
export interface PollableInputStream_ConstructProps extends InputStream_ConstructProps {
}
export class PollableInputStream {
    /* Fields of Gio.InputStream */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(buffer: any, cancellable?: Cancellable | null): number
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Virtual methods of Gio.PollableInputStream */
    vfuncCanPoll(): boolean
    vfuncCreateSource(cancellable?: Cancellable | null): GLib.Source
    vfuncIsReadable(): boolean
    vfuncReadNonblocking(buffer: any | null): number
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish(result: AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PollableInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PollableInputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PollableInputStream_ConstructProps)
    _init (config?: PollableInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PollableOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
export class PollableOutputStream {
    /* Fields of Gio.OutputStream */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: any, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Virtual methods of Gio.PollableOutputStream */
    vfuncCanPoll(): boolean
    vfuncCreateSource(cancellable?: Cancellable | null): GLib.Source
    vfuncIsWritable(): boolean
    vfuncWriteNonblocking(buffer: any | null): number
    vfuncWritevNonblocking(vectors: OutputVector[]): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncFlush(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish(result: AsyncResult): boolean
    vfuncSplice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish(result: AsyncResult): number
    vfuncWriteAsync(buffer: any | null, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish(result: AsyncResult): number
    vfuncWriteFn(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PollableOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PollableOutputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PollableOutputStream_ConstructProps)
    _init (config?: PollableOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export class Proxy {
    /* Methods of Gio.Proxy */
    connect(connection: IOStream, proxyAddress: ProxyAddress, cancellable?: Cancellable | null): IOStream
    connectAsync(connection: IOStream, proxyAddress: ProxyAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): IOStream
    supportsHostname(): boolean
    /* Virtual methods of Gio.Proxy */
    vfuncConnect(connection: IOStream, proxyAddress: ProxyAddress, cancellable?: Cancellable | null): IOStream
    vfuncConnectAsync(connection: IOStream, proxyAddress: ProxyAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncConnectFinish(result: AsyncResult): IOStream
    vfuncSupportsHostname(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefaultForProtocol(protocol: string): Proxy | null
}
export class ProxyResolver {
    /* Methods of Gio.ProxyResolver */
    isSupported(): boolean
    lookup(uri: string, cancellable?: Cancellable | null): string[]
    lookupAsync(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupFinish(result: AsyncResult): string[]
    /* Virtual methods of Gio.ProxyResolver */
    vfuncIsSupported(): boolean
    vfuncLookup(uri: string, cancellable?: Cancellable | null): string[]
    vfuncLookupAsync(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupFinish(result: AsyncResult): string[]
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefault(): ProxyResolver
}
export class RemoteActionGroup {
    /* Methods of Gio.RemoteActionGroup */
    activateActionFull(actionName: string, parameter: GLib.Variant | null, platformData: GLib.Variant): void
    changeActionStateFull(actionName: string, value: GLib.Variant, platformData: GLib.Variant): void
    /* Methods of Gio.ActionGroup */
    actionAdded(actionName: string): void
    actionEnabledChanged(actionName: string, enabled: boolean): void
    actionRemoved(actionName: string): void
    actionStateChanged(actionName: string, state: GLib.Variant): void
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    changeActionState(actionName: string, value: GLib.Variant): void
    getActionEnabled(actionName: string): boolean
    getActionParameterType(actionName: string): GLib.VariantType | null
    getActionState(actionName: string): GLib.Variant | null
    getActionStateHint(actionName: string): GLib.Variant | null
    getActionStateType(actionName: string): GLib.VariantType | null
    hasAction(actionName: string): boolean
    listActions(): string[]
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Virtual methods of Gio.RemoteActionGroup */
    vfuncActivateActionFull(actionName: string, parameter: GLib.Variant | null, platformData: GLib.Variant): void
    vfuncChangeActionStateFull(actionName: string, value: GLib.Variant, platformData: GLib.Variant): void
    /* Virtual methods of Gio.ActionGroup */
    vfuncActionAdded(actionName: string): void
    vfuncActionEnabledChanged(actionName: string, enabled: boolean): void
    vfuncActionRemoved(actionName: string): void
    vfuncActionStateChanged(actionName: string, state: GLib.Variant): void
    vfuncActivateAction(actionName: string, parameter?: GLib.Variant | null): void
    vfuncChangeActionState(actionName: string, value: GLib.Variant): void
    vfuncGetActionEnabled(actionName: string): boolean
    vfuncGetActionParameterType(actionName: string): GLib.VariantType | null
    vfuncGetActionState(actionName: string): GLib.Variant | null
    vfuncGetActionStateHint(actionName: string): GLib.Variant | null
    vfuncGetActionStateType(actionName: string): GLib.VariantType | null
    vfuncHasAction(actionName: string): boolean
    vfuncListActions(): string[]
    vfuncQueryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: RemoteActionGroup, actionName: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: RemoteActionGroup, actionName: string) => void)): number
    emit(sigName: "action-added", actionName: string): void
    on(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-enabled-changed", callback: (($obj: RemoteActionGroup, actionName: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: RemoteActionGroup, actionName: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    on(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-removed", callback: (($obj: RemoteActionGroup, actionName: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: RemoteActionGroup, actionName: string) => void)): number
    emit(sigName: "action-removed", actionName: string): void
    on(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-state-changed", callback: (($obj: RemoteActionGroup, actionName: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: RemoteActionGroup, actionName: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    on(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Seekable {
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.Seekable */
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(offset: number, cancellable?: Cancellable | null): boolean
    static name: string
}
export class SocketConnectable {
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketConnectable */
    vfuncEnumerate(): SocketAddressEnumerator
    vfuncProxyEnumerate(): SocketAddressEnumerator
    vfuncToString(): string
    static name: string
}
export class TlsBackend {
    /* Methods of Gio.TlsBackend */
    getCertificateType(): GObject.Type
    getClientConnectionType(): GObject.Type
    getDefaultDatabase(): TlsDatabase
    getDtlsClientConnectionType(): GObject.Type
    getDtlsServerConnectionType(): GObject.Type
    getFileDatabaseType(): GObject.Type
    getServerConnectionType(): GObject.Type
    setDefaultDatabase(database?: TlsDatabase | null): void
    supportsDtls(): boolean
    supportsTls(): boolean
    /* Virtual methods of Gio.TlsBackend */
    vfuncGetDefaultDatabase(): TlsDatabase
    vfuncSupportsDtls(): boolean
    vfuncSupportsTls(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefault(): TlsBackend
}
export interface TlsClientConnection_ConstructProps extends TlsConnection_ConstructProps {
    serverIdentity?: SocketConnectable
    useSsl3?: boolean
    validationFlags?: TlsCertificateFlags
}
export class TlsClientConnection {
    /* Properties of Gio.TlsClientConnection */
    readonly acceptedCas: object[]
    serverIdentity: SocketConnectable
    useSsl3: boolean
    validationFlags: TlsCertificateFlags
    /* Properties of Gio.TlsConnection */
    advertisedProtocols: string[]
    certificate: TlsCertificate
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiatedProtocol: string
    readonly peerCertificate: TlsCertificate
    readonly peerCertificateErrors: TlsCertificateFlags
    rehandshakeMode: TlsRehandshakeMode
    requireCloseNotify: boolean
    useSystemCertdb: boolean
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio.TlsConnection */
    parentInstance: IOStream
    priv: TlsConnectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.TlsClientConnection */
    copySessionState(source: TlsClientConnection): void
    getAcceptedCas(): any
    getServerIdentity(): SocketConnectable | null
    getUseSsl3(): boolean
    getValidationFlags(): TlsCertificateFlags
    setServerIdentity(identity: SocketConnectable): void
    setUseSsl3(useSsl3: boolean): void
    setValidationFlags(flags: TlsCertificateFlags): void
    /* Methods of Gio.TlsConnection */
    emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate | null
    getChannelBindingData(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ any | null ]
    getDatabase(): TlsDatabase | null
    getInteraction(): TlsInteraction | null
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate | null
    getPeerCertificateErrors(): TlsCertificateFlags
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    getUseSystemCertdb(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database?: TlsDatabase | null): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(requireCloseNotify: boolean): void
    setUseSystemCertdb(useSystemCertdb: boolean): void
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.TlsClientConnection */
    vfuncCopySessionState(source: TlsClientConnection): void
    /* Virtual methods of Gio.TlsConnection */
    vfuncAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfuncGetBindingData(type: TlsChannelBindingType, data: any): boolean
    vfuncHandshake(cancellable?: Cancellable | null): boolean
    vfuncHandshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncHandshakeFinish(result: AsyncResult): boolean
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream(): InputStream
    vfuncGetOutputStream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.TlsConnection */
    connect(sigName: "accept-certificate", callback: (($obj: TlsClientConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: TlsClientConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", peerCert: TlsCertificate, errors: TlsCertificateFlags): void
    on(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accepted-cas", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepted-cas", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accepted-cas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accepted-cas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accepted-cas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-identity", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-identity", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-ssl3", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ssl3", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-ssl3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-ssl3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-ssl3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::validation-flags", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validation-flags", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::advertised-protocols", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::advertised-protocols", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::certificate", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::database", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interaction", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::negotiated-protocol", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-protocol", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rehandshake-mode", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rehandshake-mode", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-close-notify", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-close-notify", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-system-certdb", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-system-certdb", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TlsClientConnection_ConstructProps)
    _init (config?: TlsClientConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsFileDatabase_ConstructProps extends TlsDatabase_ConstructProps {
    anchors?: string
}
export class TlsFileDatabase {
    /* Properties of Gio.TlsFileDatabase */
    anchors: string
    /* Fields of Gio.TlsDatabase */
    parentInstance: GObject.Object
    priv: TlsDatabasePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.TlsDatabase */
    createCertificateHandle(certificate: TlsCertificate): string | null
    lookupCertificateForHandle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    lookupCertificateForHandleAsync(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificateForHandleFinish(result: AsyncResult): TlsCertificate
    lookupCertificateIssuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    lookupCertificateIssuerAsync(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificateIssuerFinish(result: AsyncResult): TlsCertificate
    lookupCertificatesIssuedBy(issuerRawDn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    lookupCertificatesIssuedByAsync(issuerRawDn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificatesIssuedByFinish(result: AsyncResult): TlsCertificate[]
    verifyChain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    verifyChainAsync(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    verifyChainFinish(result: AsyncResult): TlsCertificateFlags
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
    /* Virtual methods of Gio.TlsDatabase */
    vfuncCreateCertificateHandle(certificate: TlsCertificate): string | null
    vfuncLookupCertificateForHandle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    vfuncLookupCertificateForHandleAsync(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupCertificateForHandleFinish(result: AsyncResult): TlsCertificate
    vfuncLookupCertificateIssuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    vfuncLookupCertificateIssuerAsync(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupCertificateIssuerFinish(result: AsyncResult): TlsCertificate
    vfuncLookupCertificatesIssuedBy(issuerRawDn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    vfuncLookupCertificatesIssuedByAsync(issuerRawDn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupCertificatesIssuedByFinish(result: AsyncResult): TlsCertificate[]
    vfuncVerifyChain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    vfuncVerifyChainAsync(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncVerifyChainFinish(result: AsyncResult): TlsCertificateFlags
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsFileDatabase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsFileDatabase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchors", callback: (($obj: TlsFileDatabase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchors", callback: (($obj: TlsFileDatabase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TlsFileDatabase_ConstructProps)
    _init (config?: TlsFileDatabase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsServerConnection_ConstructProps extends TlsConnection_ConstructProps {
    authenticationMode?: TlsAuthenticationMode
}
export class TlsServerConnection {
    /* Properties of Gio.TlsServerConnection */
    authenticationMode: TlsAuthenticationMode
    /* Properties of Gio.TlsConnection */
    advertisedProtocols: string[]
    certificate: TlsCertificate
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiatedProtocol: string
    readonly peerCertificate: TlsCertificate
    readonly peerCertificateErrors: TlsCertificateFlags
    rehandshakeMode: TlsRehandshakeMode
    requireCloseNotify: boolean
    useSystemCertdb: boolean
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio.TlsConnection */
    parentInstance: IOStream
    priv: TlsConnectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.TlsConnection */
    emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate | null
    getChannelBindingData(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ any | null ]
    getDatabase(): TlsDatabase | null
    getInteraction(): TlsInteraction | null
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate | null
    getPeerCertificateErrors(): TlsCertificateFlags
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    getUseSystemCertdb(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database?: TlsDatabase | null): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(requireCloseNotify: boolean): void
    setUseSystemCertdb(useSystemCertdb: boolean): void
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.TlsConnection */
    vfuncAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfuncGetBindingData(type: TlsChannelBindingType, data: any): boolean
    vfuncHandshake(cancellable?: Cancellable | null): boolean
    vfuncHandshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncHandshakeFinish(result: AsyncResult): boolean
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream(): InputStream
    vfuncGetOutputStream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.TlsConnection */
    connect(sigName: "accept-certificate", callback: (($obj: TlsServerConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: TlsServerConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", peerCert: TlsCertificate, errors: TlsCertificateFlags): void
    on(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::authentication-mode", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authentication-mode", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authentication-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authentication-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authentication-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::advertised-protocols", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::advertised-protocols", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::certificate", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::database", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interaction", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::negotiated-protocol", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-protocol", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rehandshake-mode", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rehandshake-mode", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-close-notify", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-close-notify", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-system-certdb", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-system-certdb", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TlsServerConnection_ConstructProps)
    _init (config?: TlsServerConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export class Volume {
    /* Methods of Gio.Volume */
    canEject(): boolean
    canMount(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectFinish(result: AsyncResult): boolean
    ejectWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectWithOperationFinish(result: AsyncResult): boolean
    enumerateIdentifiers(): string[]
    getActivationRoot(): File | null
    getDrive(): Drive | null
    getIcon(): Icon
    getIdentifier(kind: string): string | null
    getMount(): Mount | null
    getName(): string
    getSortKey(): string | null
    getSymbolicIcon(): Icon
    getUuid(): string | null
    mount(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mountFinish(result: AsyncResult): boolean
    shouldAutomount(): boolean
    /* Virtual methods of Gio.Volume */
    vfuncCanEject(): boolean
    vfuncCanMount(): boolean
    vfuncChanged(): void
    vfuncEject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectFinish(result: AsyncResult): boolean
    vfuncEjectWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncEjectWithOperationFinish(result: AsyncResult): boolean
    vfuncEnumerateIdentifiers(): string[]
    vfuncGetActivationRoot(): File | null
    vfuncGetDrive(): Drive | null
    vfuncGetIcon(): Icon
    vfuncGetIdentifier(kind: string): string | null
    vfuncGetMount(): Mount | null
    vfuncGetName(): string
    vfuncGetSortKey(): string | null
    vfuncGetSymbolicIcon(): Icon
    vfuncGetUuid(): string | null
    vfuncMountFinish(result: AsyncResult): boolean
    vfuncMountFn(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncRemoved(): void
    vfuncShouldAutomount(): boolean
    /* Signals of Gio.Volume */
    connect(sigName: "changed", callback: (($obj: Volume) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Volume) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "removed", callback: (($obj: Volume) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Volume) => void)): number
    emit(sigName: "removed"): void
    on(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export interface AppInfoMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class AppInfoMonitor {
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppInfoMonitor */
    connect(sigName: "changed", callback: (($obj: AppInfoMonitor) => void)): number
    connect_after(sigName: "changed", callback: (($obj: AppInfoMonitor) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppInfoMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppInfoMonitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AppInfoMonitor_ConstructProps)
    _init (config?: AppInfoMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): AppInfoMonitor
    static $gtype: GObject.Type
}
export interface AppLaunchContext_ConstructProps extends GObject.Object_ConstructProps {
}
export class AppLaunchContext {
    /* Fields of Gio.AppLaunchContext */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.AppLaunchContext */
    getDisplay(info: AppInfo, files: File[]): string | null
    getEnvironment(): string[]
    getStartupNotifyId(info: AppInfo, files: File[]): string | null
    launchFailed(startupNotifyId: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
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
    /* Virtual methods of Gio.AppLaunchContext */
    vfuncGetDisplay(info: AppInfo, files: File[]): string | null
    vfuncGetStartupNotifyId(info: AppInfo, files: File[]): string | null
    vfuncLaunchFailed(startupNotifyId: string): void
    vfuncLaunched(info: AppInfo, platformData: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: (($obj: AppLaunchContext, startupNotifyId: string) => void)): number
    connect_after(sigName: "launch-failed", callback: (($obj: AppLaunchContext, startupNotifyId: string) => void)): number
    emit(sigName: "launch-failed", startupNotifyId: string): void
    on(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "launched", callback: (($obj: AppLaunchContext, info: AppInfo, platformData: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: (($obj: AppLaunchContext, info: AppInfo, platformData: GLib.Variant) => void)): number
    emit(sigName: "launched", info: AppInfo, platformData: GLib.Variant): void
    on(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AppLaunchContext_ConstructProps)
    _init (config?: AppLaunchContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AppLaunchContext
    static $gtype: GObject.Type
}
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
    actionGroup?: ActionGroup
    applicationId?: string
    flags?: ApplicationFlags
    inactivityTimeout?: number
    resourceBasePath?: string
}
export class Application {
    /* Properties of Gio.Application */
    actionGroup: ActionGroup
    applicationId: string
    flags: ApplicationFlags
    inactivityTimeout: number
    readonly isBusy: boolean
    readonly isRegistered: boolean
    readonly isRemote: boolean
    resourceBasePath: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Application */
    activate(): void
    addMainOption(longName: string, shortName: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, argDescription?: string | null): void
    addMainOptionEntries(entries: GLib.OptionEntry[]): void
    addOptionGroup(group: GLib.OptionGroup): void
    bindBusyProperty(object: GObject.Object, property: string): void
    getApplicationId(): string | null
    getDbusConnection(): DBusConnection | null
    getDbusObjectPath(): string | null
    getFlags(): ApplicationFlags
    getInactivityTimeout(): number
    getIsBusy(): boolean
    getIsRegistered(): boolean
    getIsRemote(): boolean
    getResourceBasePath(): string | null
    hold(): void
    markBusy(): void
    open(files: File[], hint: string): void
    quit(): void
    register(cancellable?: Cancellable | null): boolean
    release(): void
    run(argv?: string[] | null): number
    sendNotification(id: string | null, notification: Notification): void
    setActionGroup(actionGroup?: ActionGroup | null): void
    setApplicationId(applicationId?: string | null): void
    setDefault(): void
    setFlags(flags: ApplicationFlags): void
    setInactivityTimeout(inactivityTimeout: number): void
    setOptionContextDescription(description?: string | null): void
    setOptionContextParameterString(parameterString?: string | null): void
    setOptionContextSummary(summary?: string | null): void
    setResourceBasePath(resourcePath?: string | null): void
    unbindBusyProperty(object: GObject.Object, property: string): void
    unmarkBusy(): void
    withdrawNotification(id: string): void
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
    /* Methods of Gio.ActionGroup */
    actionAdded(actionName: string): void
    actionEnabledChanged(actionName: string, enabled: boolean): void
    actionRemoved(actionName: string): void
    actionStateChanged(actionName: string, state: GLib.Variant): void
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    changeActionState(actionName: string, value: GLib.Variant): void
    getActionEnabled(actionName: string): boolean
    getActionParameterType(actionName: string): GLib.VariantType | null
    getActionState(actionName: string): GLib.Variant | null
    getActionStateHint(actionName: string): GLib.Variant | null
    getActionStateType(actionName: string): GLib.VariantType | null
    hasAction(actionName: string): boolean
    listActions(): string[]
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.ActionMap */
    addAction(action: Action): void
    addActionEntries(entries: ActionEntry[], userData?: object | null): void
    lookupAction(actionName: string): Action | null
    removeAction(actionName: string): void
    /* Virtual methods of Gio.Application */
    vfuncActivate(): void
    vfuncAddPlatformData(builder: GLib.VariantBuilder): void
    vfuncAfterEmit(platformData: GLib.Variant): void
    vfuncBeforeEmit(platformData: GLib.Variant): void
    vfuncCommandLine(commandLine: ApplicationCommandLine): number
    vfuncDbusRegister(connection: DBusConnection, objectPath: string): boolean
    vfuncDbusUnregister(connection: DBusConnection, objectPath: string): void
    vfuncHandleLocalOptions(options: GLib.VariantDict): number
    vfuncLocalCommandLine(arguments_: string[]): [ /* returnType */ boolean, /* arguments_ */ string[], /* exitStatus */ number ]
    vfuncNameLost(): boolean
    vfuncOpen(files: File[], hint: string): void
    vfuncQuitMainloop(): void
    vfuncRunMainloop(): void
    vfuncShutdown(): void
    vfuncStartup(): void
    vfuncActionAdded(actionName: string): void
    vfuncActionEnabledChanged(actionName: string, enabled: boolean): void
    vfuncActionRemoved(actionName: string): void
    vfuncActionStateChanged(actionName: string, state: GLib.Variant): void
    vfuncActivateAction(actionName: string, parameter?: GLib.Variant | null): void
    vfuncChangeActionState(actionName: string, value: GLib.Variant): void
    vfuncGetActionEnabled(actionName: string): boolean
    vfuncGetActionParameterType(actionName: string): GLib.VariantType | null
    vfuncGetActionState(actionName: string): GLib.Variant | null
    vfuncGetActionStateHint(actionName: string): GLib.Variant | null
    vfuncGetActionStateType(actionName: string): GLib.VariantType | null
    vfuncHasAction(actionName: string): boolean
    vfuncListActions(): string[]
    vfuncQueryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    vfuncAddAction(action: Action): void
    vfuncLookupAction(actionName: string): Action | null
    vfuncRemoveAction(actionName: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Application */
    connect(sigName: "activate", callback: (($obj: Application) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Application) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "command-line", callback: (($obj: Application, commandLine: ApplicationCommandLine) => number)): number
    connect_after(sigName: "command-line", callback: (($obj: Application, commandLine: ApplicationCommandLine) => number)): number
    emit(sigName: "command-line", commandLine: ApplicationCommandLine): void
    on(sigName: "command-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "command-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "command-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-local-options", callback: (($obj: Application, options: GLib.VariantDict) => number)): number
    connect_after(sigName: "handle-local-options", callback: (($obj: Application, options: GLib.VariantDict) => number)): number
    emit(sigName: "handle-local-options", options: GLib.VariantDict): void
    on(sigName: "handle-local-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-local-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-local-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "name-lost", callback: (($obj: Application) => boolean)): number
    connect_after(sigName: "name-lost", callback: (($obj: Application) => boolean)): number
    emit(sigName: "name-lost"): void
    on(sigName: "name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open", callback: (($obj: Application, files: File[], hint: string) => void)): number
    connect_after(sigName: "open", callback: (($obj: Application, files: File[], hint: string) => void)): number
    emit(sigName: "open", files: File[], hint: string): void
    on(sigName: "open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "shutdown", callback: (($obj: Application) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: Application) => void)): number
    emit(sigName: "shutdown"): void
    on(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "startup", callback: (($obj: Application) => void)): number
    connect_after(sigName: "startup", callback: (($obj: Application) => void)): number
    emit(sigName: "startup"): void
    on(sigName: "startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: Application, actionName: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: Application, actionName: string) => void)): number
    emit(sigName: "action-added", actionName: string): void
    on(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-enabled-changed", callback: (($obj: Application, actionName: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: Application, actionName: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    on(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-removed", callback: (($obj: Application, actionName: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: Application, actionName: string) => void)): number
    emit(sigName: "action-removed", actionName: string): void
    on(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-state-changed", callback: (($obj: Application, actionName: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: Application, actionName: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    on(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(applicationId: string | null, flags: ApplicationFlags): Application
    static getDefault(): Application | null
    static idIsValid(applicationId: string): boolean
    static $gtype: GObject.Type
}
export interface ApplicationCommandLine_ConstructProps extends GObject.Object_ConstructProps {
    "arguments"?: GLib.Variant
    options?: GLib.Variant
    platformData?: GLib.Variant
}
export class ApplicationCommandLine {
    /* Properties of Gio.ApplicationCommandLine */
    readonly isRemote: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.ApplicationCommandLine */
    createFileForArg(arg: string): File
    getArguments(): string[]
    getCwd(): string | null
    getEnviron(): string[]
    getExitStatus(): number
    getIsRemote(): boolean
    getOptionsDict(): GLib.VariantDict
    getPlatformData(): GLib.Variant | null
    getStdin(): InputStream | null
    getenv(name: string): string | null
    setExitStatus(exitStatus: number): void
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
    /* Virtual methods of Gio.ApplicationCommandLine */
    vfuncGetStdin(): InputStream | null
    vfuncPrintLiteral(message: string): void
    vfuncPrinterrLiteral(message: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-remote", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ApplicationCommandLine_ConstructProps)
    _init (config?: ApplicationCommandLine_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BufferedInputStream_ConstructProps extends FilterInputStream_ConstructProps {
    bufferSize?: number
}
export class BufferedInputStream {
    /* Properties of Gio.BufferedInputStream */
    bufferSize: number
    /* Properties of Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio.BufferedInputStream */
    parentInstance: FilterInputStream
    /* Fields of Gio.FilterInputStream */
    baseStream: InputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.BufferedInputStream */
    fill(count: number, cancellable?: Cancellable | null): number
    fillAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    fillFinish(result: AsyncResult): number
    getAvailable(): number
    getBufferSize(): number
    peek(buffer: any, offset: number): number
    peekBuffer(): any
    readByte(cancellable?: Cancellable | null): number
    setBufferSize(size: number): void
    /* Methods of Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.BufferedInputStream */
    vfuncFill(count: number, cancellable?: Cancellable | null): number
    vfuncFillAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFillFinish(result: AsyncResult): number
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish(result: AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-base-stream", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BufferedInputStream_ConstructProps)
    _init (config?: BufferedInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: InputStream): BufferedInputStream
    static newSized(baseStream: InputStream, size: number): BufferedInputStream
    static $gtype: GObject.Type
}
export interface BufferedOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    autoGrow?: boolean
    bufferSize?: number
}
export class BufferedOutputStream {
    /* Properties of Gio.BufferedOutputStream */
    autoGrow: boolean
    bufferSize: number
    /* Fields of Gio.BufferedOutputStream */
    parentInstance: FilterOutputStream
    priv: BufferedOutputStreamPrivate
    /* Fields of Gio.FilterOutputStream */
    baseStream: OutputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.BufferedOutputStream */
    getAutoGrow(): boolean
    getBufferSize(): number
    setAutoGrow(autoGrow: boolean): void
    setBufferSize(size: number): void
    /* Methods of Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.BufferedOutputStream */
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncFlush(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish(result: AsyncResult): boolean
    vfuncSplice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish(result: AsyncResult): number
    vfuncWriteAsync(buffer: any | null, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish(result: AsyncResult): number
    vfuncWriteFn(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-grow", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-grow", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-grow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-grow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-grow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BufferedOutputStream_ConstructProps)
    _init (config?: BufferedOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: OutputStream): BufferedOutputStream
    static newSized(baseStream: OutputStream, size: number): BufferedOutputStream
    static $gtype: GObject.Type
}
export interface BytesIcon_ConstructProps extends GObject.Object_ConstructProps {
    bytes?: any
}
export class BytesIcon {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.BytesIcon */
    getBytes(): any
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
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of Gio.BytesIcon */
    vfuncEqual(icon2?: Icon | null): boolean
    vfuncHash(): number
    vfuncSerialize(): GLib.Variant | null
    vfuncLoad(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    vfuncLoadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLoadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BytesIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BytesIcon, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BytesIcon_ConstructProps)
    _init (config?: BytesIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bytes: any): BytesIcon
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
    static $gtype: GObject.Type
}
export interface Cancellable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Cancellable {
    /* Fields of Gio.Cancellable */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Cancellable */
    cancel(): void
    connect(callback: GObject.Callback): number
    disconnect(handlerId: number): void
    getFd(): number
    isCancelled(): boolean
    makePollfd(pollfd: GLib.PollFD): boolean
    popCurrent(): void
    pushCurrent(): void
    releaseFd(): void
    reset(): void
    setErrorIfCancelled(): boolean
    sourceNew(): GLib.Source
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
    /* Virtual methods of Gio.Cancellable */
    vfuncCancelled(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Cancellable */
    connect(sigName: "cancelled", callback: (($obj: Cancellable) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: Cancellable) => void)): number
    emit(sigName: "cancelled"): void
    on(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cancellable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cancellable, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Cancellable_ConstructProps)
    _init (config?: Cancellable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Cancellable
    static getCurrent(): Cancellable | null
    static $gtype: GObject.Type
}
export interface CharsetConverter_ConstructProps extends GObject.Object_ConstructProps {
    fromCharset?: string
    toCharset?: string
    useFallback?: boolean
}
export class CharsetConverter {
    /* Properties of Gio.CharsetConverter */
    useFallback: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.CharsetConverter */
    getNumFallbacks(): number
    getUseFallback(): boolean
    setUseFallback(useFallback: boolean): void
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
    /* Methods of Gio.Converter */
    convert(inbuf: any, outbuf: any, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    reset(): void
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.CharsetConverter */
    vfuncConvert(inbuf: any | null, outbuf: any | null, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    vfuncReset(): void
    vfuncInit(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-fallback", callback: (($obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-fallback", callback: (($obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CharsetConverter_ConstructProps)
    _init (config?: CharsetConverter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(toCharset: string, fromCharset: string): CharsetConverter
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ConverterInputStream_ConstructProps extends FilterInputStream_ConstructProps {
    converter?: Converter
}
export class ConverterInputStream {
    /* Properties of Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio.ConverterInputStream */
    parentInstance: FilterInputStream
    /* Fields of Gio.FilterInputStream */
    baseStream: InputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.ConverterInputStream */
    getConverter(): Converter
    /* Methods of Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(buffer: any, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.ConverterInputStream */
    vfuncCanPoll(): boolean
    vfuncCreateSource(cancellable?: Cancellable | null): GLib.Source
    vfuncIsReadable(): boolean
    vfuncReadNonblocking(buffer: any | null): number
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish(result: AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-base-stream", callback: (($obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ConverterInputStream_ConstructProps)
    _init (config?: ConverterInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: InputStream, converter: Converter): ConverterInputStream
    static $gtype: GObject.Type
}
export interface ConverterOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    converter?: Converter
}
export class ConverterOutputStream {
    /* Fields of Gio.ConverterOutputStream */
    parentInstance: FilterOutputStream
    /* Fields of Gio.FilterOutputStream */
    baseStream: OutputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.ConverterOutputStream */
    getConverter(): Converter
    /* Methods of Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: any, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    /* Virtual methods of Gio.ConverterOutputStream */
    vfuncCanPoll(): boolean
    vfuncCreateSource(cancellable?: Cancellable | null): GLib.Source
    vfuncIsWritable(): boolean
    vfuncWriteNonblocking(buffer: any | null): number
    vfuncWritevNonblocking(vectors: OutputVector[]): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncFlush(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish(result: AsyncResult): boolean
    vfuncSplice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish(result: AsyncResult): number
    vfuncWriteAsync(buffer: any | null, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish(result: AsyncResult): number
    vfuncWriteFn(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConverterOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConverterOutputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ConverterOutputStream_ConstructProps)
    _init (config?: ConverterOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: OutputStream, converter: Converter): ConverterOutputStream
    static $gtype: GObject.Type
}
export interface Credentials_ConstructProps extends GObject.Object_ConstructProps {
}
export class Credentials {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Credentials */
    getUnixPid(): number
    getUnixUser(): number
    isSameUser(otherCredentials: Credentials): boolean
    setNative(nativeType: CredentialsType, native: object): void
    setUnixUser(uid: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Credentials, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Credentials, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Credentials_ConstructProps)
    _init (config?: Credentials_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Credentials
    static $gtype: GObject.Type
}
export interface DBusActionGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusActionGroup {
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
    /* Methods of Gio.ActionGroup */
    actionAdded(actionName: string): void
    actionEnabledChanged(actionName: string, enabled: boolean): void
    actionRemoved(actionName: string): void
    actionStateChanged(actionName: string, state: GLib.Variant): void
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    changeActionState(actionName: string, value: GLib.Variant): void
    getActionEnabled(actionName: string): boolean
    getActionParameterType(actionName: string): GLib.VariantType | null
    getActionState(actionName: string): GLib.Variant | null
    getActionStateHint(actionName: string): GLib.Variant | null
    getActionStateType(actionName: string): GLib.VariantType | null
    hasAction(actionName: string): boolean
    listActions(): string[]
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.RemoteActionGroup */
    activateActionFull(actionName: string, parameter: GLib.Variant | null, platformData: GLib.Variant): void
    changeActionStateFull(actionName: string, value: GLib.Variant, platformData: GLib.Variant): void
    /* Virtual methods of Gio.DBusActionGroup */
    vfuncActionAdded(actionName: string): void
    vfuncActionEnabledChanged(actionName: string, enabled: boolean): void
    vfuncActionRemoved(actionName: string): void
    vfuncActionStateChanged(actionName: string, state: GLib.Variant): void
    vfuncActivateAction(actionName: string, parameter?: GLib.Variant | null): void
    vfuncChangeActionState(actionName: string, value: GLib.Variant): void
    vfuncGetActionEnabled(actionName: string): boolean
    vfuncGetActionParameterType(actionName: string): GLib.VariantType | null
    vfuncGetActionState(actionName: string): GLib.Variant | null
    vfuncGetActionStateHint(actionName: string): GLib.Variant | null
    vfuncGetActionStateType(actionName: string): GLib.VariantType | null
    vfuncHasAction(actionName: string): boolean
    vfuncListActions(): string[]
    vfuncQueryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    vfuncActivateActionFull(actionName: string, parameter: GLib.Variant | null, platformData: GLib.Variant): void
    vfuncChangeActionStateFull(actionName: string, value: GLib.Variant, platformData: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusActionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusActionGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: DBusActionGroup, actionName: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: DBusActionGroup, actionName: string) => void)): number
    emit(sigName: "action-added", actionName: string): void
    on(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-enabled-changed", callback: (($obj: DBusActionGroup, actionName: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: DBusActionGroup, actionName: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    on(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-removed", callback: (($obj: DBusActionGroup, actionName: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: DBusActionGroup, actionName: string) => void)): number
    emit(sigName: "action-removed", actionName: string): void
    on(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-state-changed", callback: (($obj: DBusActionGroup, actionName: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: DBusActionGroup, actionName: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    on(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusActionGroup_ConstructProps)
    _init (config?: DBusActionGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(connection: DBusConnection, busName: string | null, objectPath: string): DBusActionGroup
    static $gtype: GObject.Type
}
export interface DBusAuthObserver_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusAuthObserver {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusAuthObserver */
    allowMechanism(mechanism: string): boolean
    authorizeAuthenticatedPeer(stream: IOStream, credentials?: Credentials | null): boolean
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
    /* Signals of Gio.DBusAuthObserver */
    connect(sigName: "allow-mechanism", callback: (($obj: DBusAuthObserver, mechanism: string) => boolean)): number
    connect_after(sigName: "allow-mechanism", callback: (($obj: DBusAuthObserver, mechanism: string) => boolean)): number
    emit(sigName: "allow-mechanism", mechanism: string): void
    on(sigName: "allow-mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "allow-mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "allow-mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "authorize-authenticated-peer", callback: (($obj: DBusAuthObserver, stream: IOStream, credentials?: Credentials | null) => boolean)): number
    connect_after(sigName: "authorize-authenticated-peer", callback: (($obj: DBusAuthObserver, stream: IOStream, credentials?: Credentials | null) => boolean)): number
    emit(sigName: "authorize-authenticated-peer", stream: IOStream, credentials?: Credentials | null): void
    on(sigName: "authorize-authenticated-peer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authorize-authenticated-peer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authorize-authenticated-peer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusAuthObserver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusAuthObserver, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DBusAuthObserver_ConstructProps)
    _init (config?: DBusAuthObserver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DBusAuthObserver
    static $gtype: GObject.Type
}
export interface DBusConnection_ConstructProps extends GObject.Object_ConstructProps {
    address?: string
    authenticationObserver?: DBusAuthObserver
    exitOnClose?: boolean
    flags?: DBusConnectionFlags
    guid?: string
    stream?: IOStream
}
export class DBusConnection {
    /* Properties of Gio.DBusConnection */
    readonly capabilities: DBusCapabilityFlags
    readonly closed: boolean
    exitOnClose: boolean
    readonly uniqueName: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusConnection */
    addFilter(filterFunction: DBusMessageFilterFunction): number
    call(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant | null, replyType: GLib.VariantType | null, flags: DBusCallFlags, timeoutMsec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callFinish(res: AsyncResult): GLib.Variant
    callSync(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant | null, replyType: GLib.VariantType | null, flags: DBusCallFlags, timeoutMsec: number, cancellable?: Cancellable | null): GLib.Variant
    callWithUnixFdList(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant | null, replyType: GLib.VariantType | null, flags: DBusCallFlags, timeoutMsec: number, fdList?: UnixFDList | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ UnixFDList | null ]
    callWithUnixFdListSync(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant | null, replyType: GLib.VariantType | null, flags: DBusCallFlags, timeoutMsec: number, fdList?: UnixFDList | null, cancellable?: Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ UnixFDList | null ]
    close(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(res: AsyncResult): boolean
    closeSync(cancellable?: Cancellable | null): boolean
    emitSignal(destinationBusName: string | null, objectPath: string, interfaceName: string, signalName: string, parameters?: GLib.Variant | null): boolean
    exportActionGroup(objectPath: string, actionGroup: ActionGroup): number
    exportMenuModel(objectPath: string, menu: MenuModel): number
    flush(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(res: AsyncResult): boolean
    flushSync(cancellable?: Cancellable | null): boolean
    getCapabilities(): DBusCapabilityFlags
    getExitOnClose(): boolean
    getFlags(): DBusConnectionFlags
    getGuid(): string
    getLastSerial(): number
    getPeerCredentials(): Credentials | null
    getStream(): IOStream
    getUniqueName(): string | null
    isClosed(): boolean
    registerObject(objectPath: string, interfaceInfo: DBusInterfaceInfo, methodCallClosure?: Function, getPropertyClosure?: Function, setPropertyClosure?: Function): number
    registerSubtree(objectPath: string, vtable: DBusSubtreeVTable, flags: DBusSubtreeFlags, userData: object | null, userDataFreeFunc: GLib.DestroyNotify): number
    removeFilter(filterId: number): void
    sendMessage(message: DBusMessage, flags: DBusSendMessageFlags): [ /* returnType */ boolean, /* outSerial */ number | null ]
    sendMessageWithReply(message: DBusMessage, flags: DBusSendMessageFlags, timeoutMsec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* outSerial */ number | null
    sendMessageWithReplyFinish(res: AsyncResult): DBusMessage
    sendMessageWithReplySync(message: DBusMessage, flags: DBusSendMessageFlags, timeoutMsec: number, cancellable?: Cancellable | null): [ /* returnType */ DBusMessage, /* outSerial */ number | null ]
    setExitOnClose(exitOnClose: boolean): void
    signalSubscribe(sender: string | null, interfaceName: string | null, member: string | null, objectPath: string | null, arg0: string | null, flags: DBusSignalFlags, callback: DBusSignalCallback): number
    signalUnsubscribe(subscriptionId: number): void
    startMessageProcessing(): void
    unexportActionGroup(exportId: number): void
    unexportMenuModel(exportId: number): void
    unregisterObject(registrationId: number): boolean
    unregisterSubtree(registrationId: number): boolean
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
    initAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    initFinish(res: AsyncResult): boolean
    newFinish(res: AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DBusConnection */
    vfuncInitAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncInitFinish(res: AsyncResult): boolean
    vfuncInit(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusConnection */
    connect(sigName: "closed", callback: (($obj: DBusConnection, remotePeerVanished: boolean, error?: GLib.Error | null) => void)): number
    connect_after(sigName: "closed", callback: (($obj: DBusConnection, remotePeerVanished: boolean, error?: GLib.Error | null) => void)): number
    emit(sigName: "closed", remotePeerVanished: boolean, error?: GLib.Error | null): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exit-on-close", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exit-on-close", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exit-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exit-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exit-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unique-name", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-name", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unique-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unique-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unique-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusConnection_ConstructProps)
    _init (config?: DBusConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: AsyncResult): DBusConnection
    static newForAddressFinish(res: AsyncResult): DBusConnection
    static newForAddressSync(address: string, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusConnection
    static newSync(stream: IOStream, guid: string | null, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusConnection
    static newForAddress(address: string, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DBusInterfaceSkeleton_ConstructProps extends GObject.Object_ConstructProps {
    gFlags?: DBusInterfaceSkeletonFlags
}
export class DBusInterfaceSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: DBusInterfaceSkeletonFlags
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): DBusConnection | null
    getConnections(): DBusConnection[]
    getFlags(): DBusInterfaceSkeletonFlags
    getInfo(): DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: DBusConnection): boolean
    setFlags(flags: DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): DBusObject | null
    setObject(object?: DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: DBusMethodInvocation): boolean
    vfuncGetInfo(): DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    vfuncDupObject(): DBusObject | null
    vfuncSetObject(object?: DBusObject | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusInterfaceSkeleton_ConstructProps)
    _init (config?: DBusInterfaceSkeleton_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DBusMenuModel_ConstructProps extends MenuModel_ConstructProps {
}
export class DBusMenuModel {
    /* Fields of Gio.MenuModel */
    parentInstance: GObject.Object
    priv: MenuModelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.MenuModel */
    getItemAttributeValue(itemIndex: number, attribute: string, expectedType?: GLib.VariantType | null): GLib.Variant | null
    getItemLink(itemIndex: number, link: string): MenuModel | null
    getNItems(): number
    isMutable(): boolean
    itemsChanged(position: number, removed: number, added: number): void
    iterateItemAttributes(itemIndex: number): MenuAttributeIter
    iterateItemLinks(itemIndex: number): MenuLinkIter
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
    /* Virtual methods of Gio.MenuModel */
    vfuncGetItemAttributeValue(itemIndex: number, attribute: string, expectedType?: GLib.VariantType | null): GLib.Variant | null
    vfuncGetItemAttributes(itemIndex: number): /* attributes */ GLib.HashTable
    vfuncGetItemLink(itemIndex: number, link: string): MenuModel | null
    vfuncGetItemLinks(itemIndex: number): /* links */ GLib.HashTable
    vfuncGetNItems(): number
    vfuncIsMutable(): boolean
    vfuncIterateItemAttributes(itemIndex: number): MenuAttributeIter
    vfuncIterateItemLinks(itemIndex: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: (($obj: DBusMenuModel, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: DBusMenuModel, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    on(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusMenuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusMenuModel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DBusMenuModel_ConstructProps)
    _init (config?: DBusMenuModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(connection: DBusConnection, busName: string | null, objectPath: string): DBusMenuModel
    static $gtype: GObject.Type
}
export interface DBusMessage_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusMessage {
    /* Properties of Gio.DBusMessage */
    readonly locked: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusMessage */
    copy(): DBusMessage
    getArg0(): string | null
    getBody(): GLib.Variant | null
    getByteOrder(): DBusMessageByteOrder
    getDestination(): string | null
    getErrorName(): string | null
    getFlags(): DBusMessageFlags
    getHeader(headerField: DBusMessageHeaderField): GLib.Variant | null
    getHeaderFields(): any
    getInterface(): string | null
    getLocked(): boolean
    getMember(): string | null
    getMessageType(): DBusMessageType
    getNumUnixFds(): number
    getPath(): string | null
    getReplySerial(): number
    getSender(): string | null
    getSerial(): number
    getSignature(): string
    getUnixFdList(): UnixFDList | null
    lock(): void
    newMethodErrorLiteral(errorName: string, errorMessage: string): DBusMessage
    newMethodReply(): DBusMessage
    print(indent: number): string
    setBody(body: GLib.Variant): void
    setByteOrder(byteOrder: DBusMessageByteOrder): void
    setDestination(value?: string | null): void
    setErrorName(value: string): void
    setFlags(flags: DBusMessageFlags): void
    setHeader(headerField: DBusMessageHeaderField, value?: GLib.Variant | null): void
    setInterface(value?: string | null): void
    setMember(value?: string | null): void
    setMessageType(type: DBusMessageType): void
    setNumUnixFds(value: number): void
    setPath(value?: string | null): void
    setReplySerial(value: number): void
    setSender(value?: string | null): void
    setSerial(serial: number): void
    setSignature(value?: string | null): void
    setUnixFdList(fdList?: UnixFDList | null): void
    toBlob(capabilities: DBusCapabilityFlags): any
    toGerror(): boolean
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
    connect(sigName: "notify", callback: (($obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locked", callback: (($obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusMessage_ConstructProps)
    _init (config?: DBusMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DBusMessage
    static newFromBlob(blob: any, capabilities: DBusCapabilityFlags): DBusMessage
    static newMethodCall(name: string | null, path: string, interface: string | null, method: string): DBusMessage
    static newSignal(path: string, interface: string, signal: string): DBusMessage
    static bytesNeeded(blob: any): number
    static $gtype: GObject.Type
}
export interface DBusMethodInvocation_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusMethodInvocation {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusMethodInvocation */
    getConnection(): DBusConnection
    getInterfaceName(): string
    getMessage(): DBusMessage
    getMethodInfo(): DBusMethodInfo | null
    getMethodName(): string
    getObjectPath(): string
    getParameters(): GLib.Variant
    getPropertyInfo(): DBusPropertyInfo | null
    getSender(): string
    returnDbusError(errorName: string, errorMessage: string): void
    returnErrorLiteral(domain: GLib.Quark, code: number, message: string): void
    returnGerror(error: GLib.Error): void
    returnValue(parameters?: GLib.Variant | null): void
    returnValueWithUnixFdList(parameters?: GLib.Variant | null, fdList?: UnixFDList | null): void
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
    connect(sigName: "notify", callback: (($obj: DBusMethodInvocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusMethodInvocation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DBusMethodInvocation_ConstructProps)
    _init (config?: DBusMethodInvocation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DBusObjectManagerClient_ConstructProps extends GObject.Object_ConstructProps {
    busType?: BusType
    connection?: DBusConnection
    flags?: DBusObjectManagerClientFlags
    getProxyTypeDestroyNotify?: object
    getProxyTypeFunc?: object
    getProxyTypeUserData?: object
    name?: string
    objectPath?: string
}
export class DBusObjectManagerClient {
    /* Properties of Gio.DBusObjectManagerClient */
    readonly nameOwner: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerClient */
    getConnection(): DBusConnection
    getFlags(): DBusObjectManagerClientFlags
    getName(): string
    getNameOwner(): string | null
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
    initAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    initFinish(res: AsyncResult): boolean
    newFinish(res: AsyncResult): GObject.Object
    /* Methods of Gio.DBusObjectManager */
    getInterface(objectPath: string, interfaceName: string): DBusInterface
    getObject(objectPath: string): DBusObject
    getObjectPath(): string
    getObjects(): DBusObject[]
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DBusObjectManagerClient */
    vfuncInterfaceProxyPropertiesChanged(objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncInterfaceProxySignal(objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void
    vfuncInitAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncInitFinish(res: AsyncResult): boolean
    vfuncGetInterface(objectPath: string, interfaceName: string): DBusInterface
    vfuncGetObject(objectPath: string): DBusObject
    vfuncGetObjectPath(): string
    vfuncGetObjects(): DBusObject[]
    vfuncInterfaceAdded(object: DBusObject, interface: DBusInterface): void
    vfuncInterfaceRemoved(object: DBusObject, interface: DBusInterface): void
    vfuncObjectAdded(object: DBusObject): void
    vfuncObjectRemoved(object: DBusObject): void
    vfuncInit(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: (($obj: DBusObjectManagerClient, objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "interface-proxy-properties-changed", callback: (($obj: DBusObjectManagerClient, objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "interface-proxy-properties-changed", objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-proxy-signal", callback: (($obj: DBusObjectManagerClient, objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "interface-proxy-signal", callback: (($obj: DBusObjectManagerClient, objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "interface-proxy-signal", objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void
    on(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-added", callback: (($obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    emit(sigName: "object-added", object: DBusObject): void
    on(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-removed", callback: (($obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    emit(sigName: "object-removed", object: DBusObject): void
    on(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name-owner", callback: (($obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusObjectManagerClient_ConstructProps)
    _init (config?: DBusObjectManagerClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: AsyncResult): DBusObjectManagerClient
    static newForBusFinish(res: AsyncResult): DBusObjectManagerClient
    static newForBusSync(busType: BusType, flags: DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null): DBusObjectManagerClient
    static newSync(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string | null, objectPath: string, getProxyTypeFunc?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null): DBusObjectManagerClient
    static newForBus(busType: BusType, flags: DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DBusObjectManagerServer_ConstructProps extends GObject.Object_ConstructProps {
    connection?: DBusConnection
    objectPath?: string
}
export class DBusObjectManagerServer {
    /* Properties of Gio.DBusObjectManagerServer */
    connection: DBusConnection
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerServer */
    export(object: DBusObjectSkeleton): void
    exportUniquely(object: DBusObjectSkeleton): void
    getConnection(): DBusConnection
    isExported(object: DBusObjectSkeleton): boolean
    setConnection(connection?: DBusConnection | null): void
    unexport(objectPath: string): boolean
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
    /* Methods of Gio.DBusObjectManager */
    getInterface(objectPath: string, interfaceName: string): DBusInterface
    getObject(objectPath: string): DBusObject
    getObjectPath(): string
    getObjects(): DBusObject[]
    /* Virtual methods of Gio.DBusObjectManagerServer */
    vfuncGetInterface(objectPath: string, interfaceName: string): DBusInterface
    vfuncGetObject(objectPath: string): DBusObject
    vfuncGetObjectPath(): string
    vfuncGetObjects(): DBusObject[]
    vfuncInterfaceAdded(object: DBusObject, interface: DBusInterface): void
    vfuncInterfaceRemoved(object: DBusObject, interface: DBusInterface): void
    vfuncObjectAdded(object: DBusObject): void
    vfuncObjectRemoved(object: DBusObject): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-added", callback: (($obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    emit(sigName: "object-added", object: DBusObject): void
    on(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-removed", callback: (($obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    emit(sigName: "object-removed", object: DBusObject): void
    on(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: (($obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusObjectManagerServer_ConstructProps)
    _init (config?: DBusObjectManagerServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(objectPath: string): DBusObjectManagerServer
    static $gtype: GObject.Type
}
export interface DBusObjectProxy_ConstructProps extends GObject.Object_ConstructProps {
    gConnection?: DBusConnection
    gObjectPath?: string
}
export class DBusObjectProxy {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectProxy */
    getConnection(): DBusConnection
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
    /* Methods of Gio.DBusObject */
    getInterface(interfaceName: string): DBusInterface | null
    getInterfaces(): DBusInterface[]
    getObjectPath(): string
    /* Virtual methods of Gio.DBusObjectProxy */
    vfuncGetInterface(interfaceName: string): DBusInterface | null
    vfuncGetInterfaces(): DBusInterface[]
    vfuncGetObjectPath(): string
    vfuncInterfaceAdded(interface: DBusInterface): void
    vfuncInterfaceRemoved(interface: DBusInterface): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusObjectProxy_ConstructProps)
    _init (config?: DBusObjectProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusConnection, objectPath: string): DBusObjectProxy
    static $gtype: GObject.Type
}
export interface DBusObjectSkeleton_ConstructProps extends GObject.Object_ConstructProps {
    gObjectPath?: string
}
export class DBusObjectSkeleton {
    /* Properties of Gio.DBusObjectSkeleton */
    gObjectPath: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectSkeleton */
    addInterface(interface: DBusInterfaceSkeleton): void
    flush(): void
    removeInterface(interface: DBusInterfaceSkeleton): void
    removeInterfaceByName(interfaceName: string): void
    setObjectPath(objectPath: string): void
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
    /* Methods of Gio.DBusObject */
    getInterface(interfaceName: string): DBusInterface | null
    getInterfaces(): DBusInterface[]
    getObjectPath(): string
    /* Virtual methods of Gio.DBusObjectSkeleton */
    vfuncAuthorizeMethod(interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): boolean
    vfuncGetInterface(interfaceName: string): DBusInterface | null
    vfuncGetInterfaces(): DBusInterface[]
    vfuncGetObjectPath(): string
    vfuncInterfaceAdded(interface: DBusInterface): void
    vfuncInterfaceRemoved(interface: DBusInterface): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: (($obj: DBusObjectSkeleton, interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "authorize-method", callback: (($obj: DBusObjectSkeleton, interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    emit(sigName: "authorize-method", interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): void
    on(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-object-path", callback: (($obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusObjectSkeleton_ConstructProps)
    _init (config?: DBusObjectSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(objectPath: string): DBusObjectSkeleton
    static $gtype: GObject.Type
}
export interface DBusProxy_ConstructProps extends GObject.Object_ConstructProps {
    gBusType?: BusType
    gConnection?: DBusConnection
    gDefaultTimeout?: number
    gFlags?: DBusProxyFlags
    gInterfaceInfo?: DBusInterfaceInfo
    gInterfaceName?: string
    gName?: string
    gObjectPath?: string
}
export class DBusProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeoutMsec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callFinish(res: AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeoutMsec: number, cancellable?: Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeoutMsec: number, fdList?: UnixFDList | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeoutMsec: number, fdList?: UnixFDList | null, cancellable?: Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): DBusConnection
    getDefaultTimeout(): number
    getFlags(): DBusProxyFlags
    getInterfaceInfo(): DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: DBusInterfaceInfo | null): void
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
    initAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    initFinish(res: AsyncResult): boolean
    newFinish(res: AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): DBusObject | null
    getInfo(): DBusInterfaceInfo
    setObject(object?: DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    vfuncInitAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncInitFinish(res: AsyncResult): boolean
    vfuncDupObject(): DBusObject | null
    vfuncGetInfo(): DBusInterfaceInfo
    vfuncSetObject(object?: DBusObject | null): void
    vfuncInit(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: DBusProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DBusProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusProxy_ConstructProps)
    _init (config?: DBusProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: AsyncResult): DBusProxy
    static newForBusFinish(res: AsyncResult): DBusProxy
    static newForBusSync(busType: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Cancellable | null): DBusProxy
    static newSync(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Cancellable | null): DBusProxy
    static newForBus(busType: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DBusServer_ConstructProps extends GObject.Object_ConstructProps {
    address?: string
    authenticationObserver?: DBusAuthObserver
    flags?: DBusServerFlags
    guid?: string
}
export class DBusServer {
    /* Properties of Gio.DBusServer */
    readonly active: boolean
    readonly clientAddress: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusServer */
    getClientAddress(): string
    getFlags(): DBusServerFlags
    getGuid(): string
    isActive(): boolean
    start(): void
    stop(): void
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
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DBusServer */
    vfuncInit(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusServer */
    connect(sigName: "new-connection", callback: (($obj: DBusServer, connection: DBusConnection) => boolean)): number
    connect_after(sigName: "new-connection", callback: (($obj: DBusServer, connection: DBusConnection) => boolean)): number
    emit(sigName: "new-connection", connection: DBusConnection): void
    on(sigName: "new-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-address", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-address", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusServer_ConstructProps)
    _init (config?: DBusServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newSync(address: string, flags: DBusServerFlags, guid: string, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusServer
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DataInputStream_ConstructProps extends BufferedInputStream_ConstructProps {
    byteOrder?: DataStreamByteOrder
    newlineType?: DataStreamNewlineType
}
export class DataInputStream {
    /* Properties of Gio.DataInputStream */
    byteOrder: DataStreamByteOrder
    newlineType: DataStreamNewlineType
    /* Properties of Gio.BufferedInputStream */
    bufferSize: number
    /* Properties of Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio.DataInputStream */
    parentInstance: BufferedInputStream
    /* Fields of Gio.FilterInputStream */
    baseStream: InputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DataInputStream */
    getByteOrder(): DataStreamByteOrder
    getNewlineType(): DataStreamNewlineType
    readByte(cancellable?: Cancellable | null): number
    readInt16(cancellable?: Cancellable | null): number
    readInt32(cancellable?: Cancellable | null): number
    readInt64(cancellable?: Cancellable | null): number
    readLine(cancellable?: Cancellable | null): [ /* returnType */ any | null, /* length */ number | null ]
    readLineAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readLineFinish(result: AsyncResult): [ /* returnType */ any | null, /* length */ number | null ]
    readLineFinishUtf8(result: AsyncResult): [ /* returnType */ string | null, /* length */ number | null ]
    readLineUtf8(cancellable?: Cancellable | null): [ /* returnType */ string | null, /* length */ number | null ]
    readUint16(cancellable?: Cancellable | null): number
    readUint32(cancellable?: Cancellable | null): number
    readUint64(cancellable?: Cancellable | null): number
    readUntil(stopChars: string, cancellable?: Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    readUntilAsync(stopChars: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readUntilFinish(result: AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    readUpto(stopChars: string, stopCharsLen: number, cancellable?: Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    readUptoAsync(stopChars: string, stopCharsLen: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readUptoFinish(result: AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    setByteOrder(order: DataStreamByteOrder): void
    setNewlineType(type: DataStreamNewlineType): void
    /* Methods of Gio.BufferedInputStream */
    fill(count: number, cancellable?: Cancellable | null): number
    fillAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    fillFinish(result: AsyncResult): number
    getAvailable(): number
    getBufferSize(): number
    peek(buffer: any, offset: number): number
    peekBuffer(): any
    setBufferSize(size: number): void
    /* Methods of Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.BufferedInputStream */
    vfuncFill(count: number, cancellable?: Cancellable | null): number
    vfuncFillAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFillFinish(result: AsyncResult): number
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish(result: AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::byte-order", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::newline-type", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-base-stream", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataInputStream_ConstructProps)
    _init (config?: DataInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: InputStream): DataInputStream
    static $gtype: GObject.Type
}
export interface DataOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    byteOrder?: DataStreamByteOrder
}
export class DataOutputStream {
    /* Properties of Gio.DataOutputStream */
    byteOrder: DataStreamByteOrder
    /* Fields of Gio.DataOutputStream */
    parentInstance: FilterOutputStream
    /* Fields of Gio.FilterOutputStream */
    baseStream: OutputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DataOutputStream */
    getByteOrder(): DataStreamByteOrder
    putByte(data: number, cancellable?: Cancellable | null): boolean
    putInt16(data: number, cancellable?: Cancellable | null): boolean
    putInt32(data: number, cancellable?: Cancellable | null): boolean
    putInt64(data: number, cancellable?: Cancellable | null): boolean
    putString(str: string, cancellable?: Cancellable | null): boolean
    putUint16(data: number, cancellable?: Cancellable | null): boolean
    putUint32(data: number, cancellable?: Cancellable | null): boolean
    putUint64(data: number, cancellable?: Cancellable | null): boolean
    setByteOrder(order: DataStreamByteOrder): void
    /* Methods of Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DataOutputStream */
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncFlush(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish(result: AsyncResult): boolean
    vfuncSplice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish(result: AsyncResult): number
    vfuncWriteAsync(buffer: any | null, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish(result: AsyncResult): number
    vfuncWriteFn(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::byte-order", callback: (($obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataOutputStream_ConstructProps)
    _init (config?: DataOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: OutputStream): DataOutputStream
    static $gtype: GObject.Type
}
export interface DesktopAppInfo_ConstructProps extends GObject.Object_ConstructProps {
    filename?: string
}
export class DesktopAppInfo {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DesktopAppInfo */
    getActionName(actionName: string): string
    getBoolean(key: string): boolean
    getCategories(): string | null
    getFilename(): string | null
    getGenericName(): string | null
    getIsHidden(): boolean
    getKeywords(): string[]
    getLocaleString(key: string): string | null
    getNodisplay(): boolean
    getShowIn(desktopEnv?: string | null): boolean
    getStartupWmClass(): string | null
    getString(key: string): string | null
    getStringList(key: string): string[]
    hasKey(key: string): boolean
    launchAction(actionName: string, launchContext?: AppLaunchContext | null): void
    launchUrisAsManager(uris: string[], launchContext: AppLaunchContext | null, spawnFlags: GLib.SpawnFlags): boolean
    launchUrisAsManagerWithFds(uris: string[], launchContext: AppLaunchContext | null, spawnFlags: GLib.SpawnFlags, stdinFd: number, stdoutFd: number, stderrFd: number): boolean
    listActions(): string[]
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
    /* Methods of Gio.AppInfo */
    addSupportsType(contentType: string): boolean
    canDelete(): boolean
    canRemoveSupportsType(): boolean
    delete(): boolean
    dup(): AppInfo
    equal(appinfo2: AppInfo): boolean
    getCommandline(): string | null
    getDescription(): string | null
    getDisplayName(): string
    getExecutable(): string
    getIcon(): Icon | null
    getId(): string | null
    getName(): string
    getSupportedTypes(): string[]
    launch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    launchUris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    launchUrisAsync(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    launchUrisFinish(result: AsyncResult): boolean
    removeSupportsType(contentType: string): boolean
    setAsDefaultForExtension(extension: string): boolean
    setAsDefaultForType(contentType: string): boolean
    setAsLastUsedForType(contentType: string): boolean
    shouldShow(): boolean
    supportsFiles(): boolean
    supportsUris(): boolean
    /* Virtual methods of Gio.DesktopAppInfo */
    vfuncAddSupportsType(contentType: string): boolean
    vfuncCanDelete(): boolean
    vfuncCanRemoveSupportsType(): boolean
    vfuncDoDelete(): boolean
    vfuncDup(): AppInfo
    vfuncEqual(appinfo2: AppInfo): boolean
    vfuncGetCommandline(): string | null
    vfuncGetDescription(): string | null
    vfuncGetDisplayName(): string
    vfuncGetExecutable(): string
    vfuncGetIcon(): Icon | null
    vfuncGetId(): string | null
    vfuncGetName(): string
    vfuncGetSupportedTypes(): string[]
    vfuncLaunch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    vfuncLaunchUris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    vfuncLaunchUrisAsync(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLaunchUrisFinish(result: AsyncResult): boolean
    vfuncRemoveSupportsType(contentType: string): boolean
    vfuncSetAsDefaultForExtension(extension: string): boolean
    vfuncSetAsDefaultForType(contentType: string): boolean
    vfuncSetAsLastUsedForType(contentType: string): boolean
    vfuncShouldShow(): boolean
    vfuncSupportsFiles(): boolean
    vfuncSupportsUris(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DesktopAppInfo_ConstructProps)
    _init (config?: DesktopAppInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(desktopId: string): DesktopAppInfo
    static newFromFilename(filename: string): DesktopAppInfo
    static newFromKeyfile(keyFile: GLib.KeyFile): DesktopAppInfo
    static getImplementations(interface: string): DesktopAppInfo[]
    static search(searchString: string): any
    static setDesktopEnv(desktopEnv: string): void
    static createFromCommandline(commandline: string, applicationName: string | null, flags: AppInfoCreateFlags): AppInfo
    static getAll(): AppInfo[]
    static getAllForType(contentType: string): AppInfo[]
    static getDefaultForType(contentType: string, mustSupportUris: boolean): AppInfo | null
    static getDefaultForUriScheme(uriScheme: string): AppInfo | null
    static getFallbackForType(contentType: string): AppInfo[]
    static getRecommendedForType(contentType: string): AppInfo[]
    static launchDefaultForUri(uri: string, context?: AppLaunchContext | null): boolean
    static launchDefaultForUriAsync(uri: string, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static launchDefaultForUriFinish(result: AsyncResult): boolean
    static resetTypeAssociations(contentType: string): void
    static $gtype: GObject.Type
}
export interface Emblem_ConstructProps extends GObject.Object_ConstructProps {
    icon?: GObject.Object
    origin?: EmblemOrigin
}
export class Emblem {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Emblem */
    getIcon(): Icon
    getOrigin(): EmblemOrigin
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
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    /* Virtual methods of Gio.Emblem */
    vfuncEqual(icon2?: Icon | null): boolean
    vfuncHash(): number
    vfuncSerialize(): GLib.Variant | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Emblem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Emblem, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Emblem_ConstructProps)
    _init (config?: Emblem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(icon: Icon): Emblem
    static newWithOrigin(icon: Icon, origin: EmblemOrigin): Emblem
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
    static $gtype: GObject.Type
}
export interface EmblemedIcon_ConstructProps extends GObject.Object_ConstructProps {
    gicon?: Icon
}
export class EmblemedIcon {
    /* Fields of Gio.EmblemedIcon */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.EmblemedIcon */
    addEmblem(emblem: Emblem): void
    clearEmblems(): void
    getEmblems(): Emblem[]
    getIcon(): Icon
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
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    /* Virtual methods of Gio.EmblemedIcon */
    vfuncEqual(icon2?: Icon | null): boolean
    vfuncHash(): number
    vfuncSerialize(): GLib.Variant | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EmblemedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EmblemedIcon, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: EmblemedIcon_ConstructProps)
    _init (config?: EmblemedIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(icon: Icon, emblem?: Emblem | null): EmblemedIcon
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
    static $gtype: GObject.Type
}
export interface FileEnumerator_ConstructProps extends GObject.Object_ConstructProps {
    container?: File
}
export class FileEnumerator {
    /* Fields of Gio.FileEnumerator */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.FileEnumerator */
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getChild(info: FileInfo): File
    getContainer(): File
    hasPending(): boolean
    isClosed(): boolean
    iterate(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* outInfo */ FileInfo | null, /* outChild */ File | null ]
    nextFile(cancellable?: Cancellable | null): FileInfo | null
    nextFilesAsync(numFiles: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    nextFilesFinish(result: AsyncResult): FileInfo[]
    setPending(pending: boolean): void
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
    /* Virtual methods of Gio.FileEnumerator */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncNextFile(cancellable?: Cancellable | null): FileInfo | null
    vfuncNextFilesAsync(numFiles: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncNextFilesFinish(result: AsyncResult): FileInfo[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileEnumerator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FileEnumerator_ConstructProps)
    _init (config?: FileEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileIOStream_ConstructProps extends IOStream_ConstructProps {
}
export class FileIOStream {
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio.FileIOStream */
    parentInstance: IOStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.FileIOStream */
    getEtag(): string | null
    queryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(result: AsyncResult): FileInfo
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.FileIOStream */
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncGetEtag(): string | null
    vfuncQueryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfuncQueryInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncQueryInfoFinish(result: AsyncResult): FileInfo
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(size: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream(): InputStream
    vfuncGetOutputStream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileIOStream_ConstructProps)
    _init (config?: FileIOStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileIcon_ConstructProps extends GObject.Object_ConstructProps {
    file?: File
}
export class FileIcon {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.FileIcon */
    getFile(): File
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
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of Gio.FileIcon */
    vfuncEqual(icon2?: Icon | null): boolean
    vfuncHash(): number
    vfuncSerialize(): GLib.Variant | null
    vfuncLoad(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    vfuncLoadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLoadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileIcon, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FileIcon_ConstructProps)
    _init (config?: FileIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: File): FileIcon
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
    static $gtype: GObject.Type
}
export interface FileInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class FileInfo {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.FileInfo */
    clearStatus(): void
    copyInto(destInfo: FileInfo): void
    dup(): FileInfo
    getAttributeAsString(attribute: string): string | null
    getAttributeBoolean(attribute: string): boolean
    getAttributeByteString(attribute: string): string | null
    getAttributeData(attribute: string): [ /* returnType */ boolean, /* type */ FileAttributeType | null, /* valuePp */ object | null, /* status */ FileAttributeStatus | null ]
    getAttributeInt32(attribute: string): number
    getAttributeInt64(attribute: string): number
    getAttributeObject(attribute: string): GObject.Object | null
    getAttributeStatus(attribute: string): FileAttributeStatus
    getAttributeString(attribute: string): string | null
    getAttributeStringv(attribute: string): string[] | null
    getAttributeType(attribute: string): FileAttributeType
    getAttributeUint32(attribute: string): number
    getAttributeUint64(attribute: string): number
    getContentType(): string | null
    getDeletionDate(): GLib.DateTime | null
    getDisplayName(): string
    getEditName(): string
    getEtag(): string | null
    getFileType(): FileType
    getIcon(): Icon | null
    getIsBackup(): boolean
    getIsHidden(): boolean
    getIsSymlink(): boolean
    getModificationDateTime(): GLib.DateTime | null
    getModificationTime(): /* result */ GLib.TimeVal
    getName(): string
    getSize(): number
    getSortOrder(): number
    getSymbolicIcon(): Icon | null
    getSymlinkTarget(): string | null
    hasAttribute(attribute: string): boolean
    hasNamespace(nameSpace: string): boolean
    listAttributes(nameSpace?: string | null): string[] | null
    removeAttribute(attribute: string): void
    setAttribute(attribute: string, type: FileAttributeType, valueP: object): void
    setAttributeBoolean(attribute: string, attrValue: boolean): void
    setAttributeByteString(attribute: string, attrValue: string): void
    setAttributeInt32(attribute: string, attrValue: number): void
    setAttributeInt64(attribute: string, attrValue: number): void
    setAttributeMask(mask: FileAttributeMatcher): void
    setAttributeObject(attribute: string, attrValue: GObject.Object): void
    setAttributeStatus(attribute: string, status: FileAttributeStatus): boolean
    setAttributeString(attribute: string, attrValue: string): void
    setAttributeStringv(attribute: string, attrValue: string[]): void
    setAttributeUint32(attribute: string, attrValue: number): void
    setAttributeUint64(attribute: string, attrValue: number): void
    setContentType(contentType: string): void
    setDisplayName(displayName: string): void
    setEditName(editName: string): void
    setFileType(type: FileType): void
    setIcon(icon: Icon): void
    setIsHidden(isHidden: boolean): void
    setIsSymlink(isSymlink: boolean): void
    setModificationDateTime(mtime: GLib.DateTime): void
    setModificationTime(mtime: GLib.TimeVal): void
    setName(name: string): void
    setSize(size: number): void
    setSortOrder(sortOrder: number): void
    setSymbolicIcon(icon: Icon): void
    setSymlinkTarget(symlinkTarget: string): void
    unsetAttributeMask(): void
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
    connect(sigName: "notify", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FileInfo_ConstructProps)
    _init (config?: FileInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FileInfo
    static $gtype: GObject.Type
}
export interface FileInputStream_ConstructProps extends InputStream_ConstructProps {
}
export class FileInputStream {
    /* Fields of Gio.FileInputStream */
    parentInstance: InputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.FileInputStream */
    queryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(result: AsyncResult): FileInfo
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.FileInputStream */
    vfuncCanSeek(): boolean
    vfuncQueryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfuncQueryInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncQueryInfoFinish(result: AsyncResult): FileInfo
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell(): number
    vfuncCanTruncate(): boolean
    vfuncTruncateFn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish(result: AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileInputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FileInputStream_ConstructProps)
    _init (config?: FileInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileMonitor_ConstructProps extends GObject.Object_ConstructProps {
    rateLimit?: number
}
export class FileMonitor {
    /* Properties of Gio.FileMonitor */
    readonly cancelled: boolean
    rateLimit: number
    /* Fields of Gio.FileMonitor */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.FileMonitor */
    cancel(): boolean
    emitEvent(child: File, otherFile: File, eventType: FileMonitorEvent): void
    isCancelled(): boolean
    setRateLimit(limitMsecs: number): void
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
    /* Virtual methods of Gio.FileMonitor */
    vfuncCancel(): boolean
    vfuncChanged(file: File, otherFile: File, eventType: FileMonitorEvent): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.FileMonitor */
    connect(sigName: "changed", callback: (($obj: FileMonitor, file: File, otherFile: File | null, eventType: FileMonitorEvent) => void)): number
    connect_after(sigName: "changed", callback: (($obj: FileMonitor, file: File, otherFile: File | null, eventType: FileMonitorEvent) => void)): number
    emit(sigName: "changed", file: File, otherFile: File | null, eventType: FileMonitorEvent): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cancelled", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelled", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rate-limit", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate-limit", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rate-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rate-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rate-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileMonitor_ConstructProps)
    _init (config?: FileMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
export class FileOutputStream {
    /* Fields of Gio.FileOutputStream */
    parentInstance: OutputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.FileOutputStream */
    getEtag(): string | null
    queryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(result: AsyncResult): FileInfo
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.FileOutputStream */
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncGetEtag(): string | null
    vfuncQueryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfuncQueryInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncQueryInfoFinish(result: AsyncResult): FileInfo
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(size: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncFlush(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish(result: AsyncResult): boolean
    vfuncSplice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish(result: AsyncResult): number
    vfuncWriteAsync(buffer: any | null, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish(result: AsyncResult): number
    vfuncWriteFn(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileOutputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FileOutputStream_ConstructProps)
    _init (config?: FileOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FilenameCompleter_ConstructProps extends GObject.Object_ConstructProps {
}
export class FilenameCompleter {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.FilenameCompleter */
    getCompletionSuffix(initialText: string): string | null
    getCompletions(initialText: string): string[]
    setDirsOnly(dirsOnly: boolean): void
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
    /* Virtual methods of Gio.FilenameCompleter */
    vfuncGotCompletionData(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.FilenameCompleter */
    connect(sigName: "got-completion-data", callback: (($obj: FilenameCompleter) => void)): number
    connect_after(sigName: "got-completion-data", callback: (($obj: FilenameCompleter) => void)): number
    emit(sigName: "got-completion-data"): void
    on(sigName: "got-completion-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "got-completion-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "got-completion-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilenameCompleter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilenameCompleter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilenameCompleter_ConstructProps)
    _init (config?: FilenameCompleter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilenameCompleter
    static $gtype: GObject.Type
}
export interface FilterInputStream_ConstructProps extends InputStream_ConstructProps {
    baseStream?: InputStream
    closeBaseStream?: boolean
}
export class FilterInputStream {
    /* Properties of Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio.FilterInputStream */
    parentInstance: InputStream
    baseStream: InputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish(result: AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-base-stream", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilterInputStream_ConstructProps)
    _init (config?: FilterInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FilterOutputStream_ConstructProps extends OutputStream_ConstructProps {
    baseStream?: OutputStream
    closeBaseStream?: boolean
}
export class FilterOutputStream {
    /* Fields of Gio.FilterOutputStream */
    parentInstance: OutputStream
    baseStream: OutputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncFlush(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish(result: AsyncResult): boolean
    vfuncSplice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish(result: AsyncResult): number
    vfuncWriteAsync(buffer: any | null, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish(result: AsyncResult): number
    vfuncWriteFn(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterOutputStream_ConstructProps)
    _init (config?: FilterOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IOModule_ConstructProps extends GObject.TypeModule_ConstructProps {
}
export class IOModule {
    /* Fields of GObject.TypeModule */
    parentInstance: GObject.Object
    useCount: number
    typeInfos: object[]
    interfaceInfos: object[]
    name: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.IOModule */
    load(): void
    unload(): void
    /* Methods of GObject.TypeModule */
    addInterface(instanceType: GObject.Type, interfaceType: GObject.Type, interfaceInfo: GObject.InterfaceInfo): void
    registerEnum(name: string, constStaticValues: GObject.EnumValue): GObject.Type
    registerFlags(name: string, constStaticValues: GObject.FlagsValue): GObject.Type
    registerType(parentType: GObject.Type, typeName: string, typeInfo: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    setName(name: string): void
    unuse(): void
    use(): boolean
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
    /* Methods of GObject.TypePlugin */
    completeInterfaceInfo(instanceType: GObject.Type, interfaceType: GObject.Type, info: GObject.InterfaceInfo): void
    completeTypeInfo(gType: GObject.Type, info: GObject.TypeInfo, valueTable: GObject.TypeValueTable): void
    /* Virtual methods of GObject.TypeModule */
    vfuncLoad(): boolean
    vfuncUnload(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IOModule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IOModule, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: IOModule_ConstructProps)
    _init (config?: IOModule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): IOModule
    static query(): string[]
    static $gtype: GObject.Type
}
export interface IOStream_ConstructProps extends GObject.Object_ConstructProps {
}
export class IOStream {
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio.IOStream */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream(): InputStream
    vfuncGetOutputStream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IOStream_ConstructProps)
    _init (config?: IOStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static spliceFinish(result: AsyncResult): boolean
    static $gtype: GObject.Type
}
export interface InetAddress_ConstructProps extends GObject.Object_ConstructProps {
    bytes?: object
    family?: SocketFamily
}
export class InetAddress {
    /* Properties of Gio.InetAddress */
    readonly isAny: boolean
    readonly isLinkLocal: boolean
    readonly isLoopback: boolean
    readonly isMcGlobal: boolean
    readonly isMcLinkLocal: boolean
    readonly isMcNodeLocal: boolean
    readonly isMcOrgLocal: boolean
    readonly isMcSiteLocal: boolean
    readonly isMulticast: boolean
    readonly isSiteLocal: boolean
    /* Fields of Gio.InetAddress */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.InetAddress */
    equal(otherAddress: InetAddress): boolean
    getFamily(): SocketFamily
    getIsAny(): boolean
    getIsLinkLocal(): boolean
    getIsLoopback(): boolean
    getIsMcGlobal(): boolean
    getIsMcLinkLocal(): boolean
    getIsMcNodeLocal(): boolean
    getIsMcOrgLocal(): boolean
    getIsMcSiteLocal(): boolean
    getIsMulticast(): boolean
    getIsSiteLocal(): boolean
    getNativeSize(): number
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
    /* Virtual methods of Gio.InetAddress */
    vfuncToString(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-any", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-any", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-any", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-any", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-any", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-link-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-link-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-loopback", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loopback", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-mc-global", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-global", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-mc-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-mc-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-mc-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-mc-link-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-link-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-mc-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-mc-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-mc-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-mc-node-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-node-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-mc-node-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-mc-node-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-mc-node-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-mc-org-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-org-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-mc-org-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-mc-org-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-mc-org-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-mc-site-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-site-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-mc-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-mc-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-mc-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-multicast", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-multicast", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-multicast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-multicast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-multicast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-site-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-site-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InetAddress_ConstructProps)
    _init (config?: InetAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newAny(family: SocketFamily): InetAddress
    static newFromBytes(bytes: any, family: SocketFamily): InetAddress
    static newFromString(string: string): InetAddress
    static newLoopback(family: SocketFamily): InetAddress
    static $gtype: GObject.Type
}
export interface InetAddressMask_ConstructProps extends GObject.Object_ConstructProps {
    address?: InetAddress
    length?: number
}
export class InetAddressMask {
    /* Properties of Gio.InetAddressMask */
    address: InetAddress
    readonly family: SocketFamily
    length: number
    /* Fields of Gio.InetAddressMask */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.InetAddressMask */
    equal(mask2: InetAddressMask): boolean
    getAddress(): InetAddress
    getFamily(): SocketFamily
    getLength(): number
    matches(address: InetAddress): boolean
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
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.InetAddressMask */
    vfuncInit(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: InetAddressMask_ConstructProps)
    _init (config?: InetAddressMask_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(addr: InetAddress, length: number): InetAddressMask
    static newFromString(maskString: string): InetAddressMask
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface InetSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
    address?: InetAddress
    flowinfo?: number
    port?: number
    scopeId?: number
}
export class InetSocketAddress {
    /* Properties of Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio.InetSocketAddress */
    parentInstance: SocketAddress
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.InetSocketAddress */
    getAddress(): InetAddress
    getFlowinfo(): number
    getPort(): number
    getScopeId(): number
    /* Methods of Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketAddress */
    vfuncGetFamily(): SocketFamily
    vfuncGetNativeSize(): number
    vfuncToNative(dest: object | null, destlen: number): boolean
    vfuncEnumerate(): SocketAddressEnumerator
    vfuncProxyEnumerate(): SocketAddressEnumerator
    vfuncToString(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: (($obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InetSocketAddress_ConstructProps)
    _init (config?: InetSocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(address: InetAddress, port: number): InetSocketAddress
    static newFromString(address: string, port: number): InetSocketAddress
    static $gtype: GObject.Type
}
export interface InputStream_ConstructProps extends GObject.Object_ConstructProps {
}
export class InputStream {
    /* Fields of Gio.InputStream */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish(result: AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: InputStream_ConstructProps)
    _init (config?: InputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ListStore_ConstructProps extends GObject.Object_ConstructProps {
    itemType?: GObject.Type
}
export class ListStore {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.ListStore */
    append(item: GObject.Object): void
    find(item: GObject.Object): [ /* returnType */ boolean, /* position */ number | null ]
    findWithEqualFunc(item: GObject.Object, equalFunc: GLib.EqualFunc): [ /* returnType */ boolean, /* position */ number | null ]
    insert(position: number, item: GObject.Object): void
    insertSorted(item: GObject.Object, compareFunc: GLib.CompareDataFunc): number
    remove(position: number): void
    removeAll(): void
    sort(compareFunc: GLib.CompareDataFunc): void
    splice(position: number, nRemovals: number, additions: GObject.Object[]): void
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
    /* Methods of Gio.ListModel */
    getItemType(): GObject.Type
    getNItems(): number
    getItem(position: number): GObject.Object | null
    itemsChanged(position: number, removed: number, added: number): void
    /* Virtual methods of Gio.ListStore */
    vfuncGetItem(position: number): GObject.Object | null
    vfuncGetItemType(): GObject.Type
    vfuncGetNItems(): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ListStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ListStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.ListModel */
    connect(sigName: "items-changed", callback: (($obj: ListStore, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: ListStore, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    on(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ListStore_ConstructProps)
    _init (config?: ListStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(itemType: GObject.Type): ListStore
    static $gtype: GObject.Type
}
export interface MemoryInputStream_ConstructProps extends InputStream_ConstructProps {
}
export class MemoryInputStream {
    /* Fields of Gio.MemoryInputStream */
    parentInstance: InputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.MemoryInputStream */
    addBytes(bytes: any): void
    addData(data: any, destroy?: GLib.DestroyNotify | null): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(buffer: any, cancellable?: Cancellable | null): number
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.MemoryInputStream */
    vfuncCanPoll(): boolean
    vfuncCreateSource(cancellable?: Cancellable | null): GLib.Source
    vfuncIsReadable(): boolean
    vfuncReadNonblocking(buffer: any | null): number
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish(result: AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MemoryInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MemoryInputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MemoryInputStream_ConstructProps)
    _init (config?: MemoryInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MemoryInputStream
    static newFromBytes(bytes: any): MemoryInputStream
    static newFromData(data: any, destroy?: GLib.DestroyNotify | null): MemoryInputStream
    static $gtype: GObject.Type
}
export interface MemoryOutputStream_ConstructProps extends OutputStream_ConstructProps {
    data?: object
    size?: number
}
export class MemoryOutputStream {
    /* Properties of Gio.MemoryOutputStream */
    readonly dataSize: number
    /* Fields of Gio.MemoryOutputStream */
    parentInstance: OutputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.MemoryOutputStream */
    getData(): object | null
    getDataSize(): number
    getSize(): number
    stealAsBytes(): any
    stealData(): object | null
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: any, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.MemoryOutputStream */
    vfuncCanPoll(): boolean
    vfuncCreateSource(cancellable?: Cancellable | null): GLib.Source
    vfuncIsWritable(): boolean
    vfuncWriteNonblocking(buffer: any | null): number
    vfuncWritevNonblocking(vectors: OutputVector[]): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncFlush(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish(result: AsyncResult): boolean
    vfuncSplice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish(result: AsyncResult): number
    vfuncWriteAsync(buffer: any | null, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish(result: AsyncResult): number
    vfuncWriteFn(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data-size", callback: (($obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-size", callback: (($obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MemoryOutputStream_ConstructProps)
    _init (config?: MemoryOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newResizable(): MemoryOutputStream
    static $gtype: GObject.Type
}
export interface Menu_ConstructProps extends MenuModel_ConstructProps {
}
export class Menu {
    /* Fields of Gio.MenuModel */
    parentInstance: GObject.Object
    priv: MenuModelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Menu */
    append(label?: string | null, detailedAction?: string | null): void
    appendItem(item: MenuItem): void
    appendSection(label: string | null, section: MenuModel): void
    appendSubmenu(label: string | null, submenu: MenuModel): void
    freeze(): void
    insert(position: number, label?: string | null, detailedAction?: string | null): void
    insertItem(position: number, item: MenuItem): void
    insertSection(position: number, label: string | null, section: MenuModel): void
    insertSubmenu(position: number, label: string | null, submenu: MenuModel): void
    prepend(label?: string | null, detailedAction?: string | null): void
    prependItem(item: MenuItem): void
    prependSection(label: string | null, section: MenuModel): void
    prependSubmenu(label: string | null, submenu: MenuModel): void
    remove(position: number): void
    removeAll(): void
    /* Methods of Gio.MenuModel */
    getItemAttributeValue(itemIndex: number, attribute: string, expectedType?: GLib.VariantType | null): GLib.Variant | null
    getItemLink(itemIndex: number, link: string): MenuModel | null
    getNItems(): number
    isMutable(): boolean
    itemsChanged(position: number, removed: number, added: number): void
    iterateItemAttributes(itemIndex: number): MenuAttributeIter
    iterateItemLinks(itemIndex: number): MenuLinkIter
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
    /* Virtual methods of Gio.MenuModel */
    vfuncGetItemAttributeValue(itemIndex: number, attribute: string, expectedType?: GLib.VariantType | null): GLib.Variant | null
    vfuncGetItemAttributes(itemIndex: number): /* attributes */ GLib.HashTable
    vfuncGetItemLink(itemIndex: number, link: string): MenuModel | null
    vfuncGetItemLinks(itemIndex: number): /* links */ GLib.HashTable
    vfuncGetNItems(): number
    vfuncIsMutable(): boolean
    vfuncIterateItemAttributes(itemIndex: number): MenuAttributeIter
    vfuncIterateItemLinks(itemIndex: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: (($obj: Menu, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: Menu, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    on(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Menu_ConstructProps)
    _init (config?: Menu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Menu
    static $gtype: GObject.Type
}
export interface MenuAttributeIter_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuAttributeIter {
    /* Fields of Gio.MenuAttributeIter */
    parentInstance: GObject.Object
    priv: MenuAttributeIterPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.MenuAttributeIter */
    getName(): string
    getNext(): [ /* returnType */ boolean, /* outName */ string | null, /* value */ GLib.Variant | null ]
    getValue(): GLib.Variant
    next(): boolean
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
    /* Virtual methods of Gio.MenuAttributeIter */
    vfuncGetNext(): [ /* returnType */ boolean, /* outName */ string | null, /* value */ GLib.Variant | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuAttributeIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuAttributeIter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MenuAttributeIter_ConstructProps)
    _init (config?: MenuAttributeIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MenuItem_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuItem {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.MenuItem */
    getAttributeValue(attribute: string, expectedType?: GLib.VariantType | null): GLib.Variant | null
    getLink(link: string): MenuModel | null
    setActionAndTargetValue(action?: string | null, targetValue?: GLib.Variant | null): void
    setAttributeValue(attribute: string, value?: GLib.Variant | null): void
    setDetailedAction(detailedAction: string): void
    setIcon(icon: Icon): void
    setLabel(label?: string | null): void
    setLink(link: string, model?: MenuModel | null): void
    setSection(section?: MenuModel | null): void
    setSubmenu(submenu?: MenuModel | null): void
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
    connect(sigName: "notify", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MenuItem_ConstructProps)
    _init (config?: MenuItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(label?: string | null, detailedAction?: string | null): MenuItem
    static newFromModel(model: MenuModel, itemIndex: number): MenuItem
    static newSection(label: string | null, section: MenuModel): MenuItem
    static newSubmenu(label: string | null, submenu: MenuModel): MenuItem
    static $gtype: GObject.Type
}
export interface MenuLinkIter_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuLinkIter {
    /* Fields of Gio.MenuLinkIter */
    parentInstance: GObject.Object
    priv: MenuLinkIterPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.MenuLinkIter */
    getName(): string
    getNext(): [ /* returnType */ boolean, /* outLink */ string | null, /* value */ MenuModel | null ]
    getValue(): MenuModel
    next(): boolean
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
    /* Virtual methods of Gio.MenuLinkIter */
    vfuncGetNext(): [ /* returnType */ boolean, /* outLink */ string | null, /* value */ MenuModel | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuLinkIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuLinkIter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MenuLinkIter_ConstructProps)
    _init (config?: MenuLinkIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MenuModel_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuModel {
    /* Fields of Gio.MenuModel */
    parentInstance: GObject.Object
    priv: MenuModelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.MenuModel */
    getItemAttributeValue(itemIndex: number, attribute: string, expectedType?: GLib.VariantType | null): GLib.Variant | null
    getItemLink(itemIndex: number, link: string): MenuModel | null
    getNItems(): number
    isMutable(): boolean
    itemsChanged(position: number, removed: number, added: number): void
    iterateItemAttributes(itemIndex: number): MenuAttributeIter
    iterateItemLinks(itemIndex: number): MenuLinkIter
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
    /* Virtual methods of Gio.MenuModel */
    vfuncGetItemAttributeValue(itemIndex: number, attribute: string, expectedType?: GLib.VariantType | null): GLib.Variant | null
    vfuncGetItemAttributes(itemIndex: number): /* attributes */ GLib.HashTable
    vfuncGetItemLink(itemIndex: number, link: string): MenuModel | null
    vfuncGetItemLinks(itemIndex: number): /* links */ GLib.HashTable
    vfuncGetNItems(): number
    vfuncIsMutable(): boolean
    vfuncIterateItemAttributes(itemIndex: number): MenuAttributeIter
    vfuncIterateItemLinks(itemIndex: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: (($obj: MenuModel, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: MenuModel, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    on(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuModel, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MenuModel_ConstructProps)
    _init (config?: MenuModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MountOperation_ConstructProps extends GObject.Object_ConstructProps {
    anonymous?: boolean
    choice?: number
    domain?: string
    isTcryptHiddenVolume?: boolean
    isTcryptSystemVolume?: boolean
    password?: string
    passwordSave?: PasswordSave
    pim?: number
    username?: string
}
export class MountOperation {
    /* Properties of Gio.MountOperation */
    anonymous: boolean
    choice: number
    domain: string
    isTcryptHiddenVolume: boolean
    isTcryptSystemVolume: boolean
    password: string
    passwordSave: PasswordSave
    pim: number
    username: string
    /* Fields of Gio.MountOperation */
    parentInstance: GObject.Object
    priv: MountOperationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.MountOperation */
    getAnonymous(): boolean
    getChoice(): number
    getDomain(): string | null
    getIsTcryptHiddenVolume(): boolean
    getIsTcryptSystemVolume(): boolean
    getPassword(): string | null
    getPasswordSave(): PasswordSave
    getPim(): number
    getUsername(): string | null
    reply(result: MountOperationResult): void
    setAnonymous(anonymous: boolean): void
    setChoice(choice: number): void
    setDomain(domain?: string | null): void
    setIsTcryptHiddenVolume(hiddenVolume: boolean): void
    setIsTcryptSystemVolume(systemVolume: boolean): void
    setPassword(password?: string | null): void
    setPasswordSave(save: PasswordSave): void
    setPim(pim: number): void
    setUsername(username?: string | null): void
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
    /* Virtual methods of Gio.MountOperation */
    vfuncAborted(): void
    vfuncAskPassword(message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags): void
    vfuncAskQuestion(message: string, choices: string[]): void
    vfuncReply(result: MountOperationResult): void
    vfuncShowProcesses(message: string, processes: GLib.Pid[], choices: string[]): void
    vfuncShowUnmountProgress(message: string, timeLeft: number, bytesLeft: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MountOperation */
    connect(sigName: "aborted", callback: (($obj: MountOperation) => void)): number
    connect_after(sigName: "aborted", callback: (($obj: MountOperation) => void)): number
    emit(sigName: "aborted"): void
    on(sigName: "aborted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "aborted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "aborted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "ask-password", callback: (($obj: MountOperation, message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags) => void)): number
    connect_after(sigName: "ask-password", callback: (($obj: MountOperation, message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags) => void)): number
    emit(sigName: "ask-password", message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags): void
    on(sigName: "ask-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "ask-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "ask-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "ask-question", callback: (($obj: MountOperation, message: string, choices: string[]) => void)): number
    connect_after(sigName: "ask-question", callback: (($obj: MountOperation, message: string, choices: string[]) => void)): number
    emit(sigName: "ask-question", message: string, choices: string[]): void
    on(sigName: "ask-question", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "ask-question", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "ask-question", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reply", callback: (($obj: MountOperation, result: MountOperationResult) => void)): number
    connect_after(sigName: "reply", callback: (($obj: MountOperation, result: MountOperationResult) => void)): number
    emit(sigName: "reply", result: MountOperationResult): void
    on(sigName: "reply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-processes", callback: (($obj: MountOperation, message: string, processes: GLib.Pid[], choices: string[]) => void)): number
    connect_after(sigName: "show-processes", callback: (($obj: MountOperation, message: string, processes: GLib.Pid[], choices: string[]) => void)): number
    emit(sigName: "show-processes", message: string, processes: GLib.Pid[], choices: string[]): void
    on(sigName: "show-processes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-processes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-processes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-unmount-progress", callback: (($obj: MountOperation, message: string, timeLeft: number, bytesLeft: number) => void)): number
    connect_after(sigName: "show-unmount-progress", callback: (($obj: MountOperation, message: string, timeLeft: number, bytesLeft: number) => void)): number
    emit(sigName: "show-unmount-progress", message: string, timeLeft: number, bytesLeft: number): void
    on(sigName: "show-unmount-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-unmount-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-unmount-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anonymous", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anonymous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anonymous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anonymous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::choice", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::domain", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-tcrypt-hidden-volume", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-tcrypt-hidden-volume", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-tcrypt-hidden-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-tcrypt-hidden-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-tcrypt-hidden-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-tcrypt-system-volume", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-tcrypt-system-volume", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-tcrypt-system-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-tcrypt-system-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-tcrypt-system-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-save", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-save", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-save", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-save", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-save", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pim", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pim", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MountOperation_ConstructProps)
    _init (config?: MountOperation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MountOperation
    static $gtype: GObject.Type
}
export interface NativeSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
}
export class NativeSocketAddress {
    /* Properties of Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio.NativeSocketAddress */
    parentInstance: SocketAddress
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketAddress */
    vfuncGetFamily(): SocketFamily
    vfuncGetNativeSize(): number
    vfuncToNative(dest: object | null, destlen: number): boolean
    vfuncEnumerate(): SocketAddressEnumerator
    vfuncProxyEnumerate(): SocketAddressEnumerator
    vfuncToString(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: (($obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NativeSocketAddress_ConstructProps)
    _init (config?: NativeSocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(native: object | null, len: number): NativeSocketAddress
    static $gtype: GObject.Type
}
export interface NativeVolumeMonitor_ConstructProps extends VolumeMonitor_ConstructProps {
}
export class NativeVolumeMonitor {
    /* Fields of Gio.NativeVolumeMonitor */
    parentInstance: VolumeMonitor
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.VolumeMonitor */
    getConnectedDrives(): Drive[]
    getMountForUuid(uuid: string): Mount | null
    getMounts(): Mount[]
    getVolumeForUuid(uuid: string): Volume | null
    getVolumes(): Volume[]
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
    /* Virtual methods of Gio.VolumeMonitor */
    vfuncDriveChanged(drive: Drive): void
    vfuncDriveConnected(drive: Drive): void
    vfuncDriveDisconnected(drive: Drive): void
    vfuncDriveEjectButton(drive: Drive): void
    vfuncDriveStopButton(drive: Drive): void
    vfuncGetConnectedDrives(): Drive[]
    vfuncGetMountForUuid(uuid: string): Mount | null
    vfuncGetMounts(): Mount[]
    vfuncGetVolumeForUuid(uuid: string): Volume | null
    vfuncGetVolumes(): Volume[]
    vfuncMountAdded(mount: Mount): void
    vfuncMountChanged(mount: Mount): void
    vfuncMountPreUnmount(mount: Mount): void
    vfuncMountRemoved(mount: Mount): void
    vfuncVolumeAdded(volume: Volume): void
    vfuncVolumeChanged(volume: Volume): void
    vfuncVolumeRemoved(volume: Volume): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.VolumeMonitor */
    connect(sigName: "drive-changed", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-changed", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-changed", drive: Drive): void
    on(sigName: "drive-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drive-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drive-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drive-connected", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-connected", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-connected", drive: Drive): void
    on(sigName: "drive-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drive-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drive-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drive-disconnected", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-disconnected", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-disconnected", drive: Drive): void
    on(sigName: "drive-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drive-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drive-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drive-eject-button", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-eject-button", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-eject-button", drive: Drive): void
    on(sigName: "drive-eject-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drive-eject-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drive-eject-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drive-stop-button", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-stop-button", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-stop-button", drive: Drive): void
    on(sigName: "drive-stop-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drive-stop-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drive-stop-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mount-added", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-added", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-added", mount: Mount): void
    on(sigName: "mount-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mount-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mount-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mount-changed", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-changed", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-changed", mount: Mount): void
    on(sigName: "mount-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mount-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mount-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mount-pre-unmount", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-pre-unmount", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-pre-unmount", mount: Mount): void
    on(sigName: "mount-pre-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mount-pre-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mount-pre-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mount-removed", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-removed", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-removed", mount: Mount): void
    on(sigName: "mount-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mount-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mount-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "volume-added", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-added", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-added", volume: Volume): void
    on(sigName: "volume-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "volume-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "volume-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "volume-changed", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-changed", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-changed", volume: Volume): void
    on(sigName: "volume-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "volume-removed", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-removed", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-removed", volume: Volume): void
    on(sigName: "volume-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "volume-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "volume-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NativeVolumeMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NativeVolumeMonitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NativeVolumeMonitor_ConstructProps)
    _init (config?: NativeVolumeMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NetworkAddress_ConstructProps extends GObject.Object_ConstructProps {
    hostname?: string
    port?: number
    scheme?: string
}
export class NetworkAddress {
    /* Fields of Gio.NetworkAddress */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.NetworkAddress */
    getHostname(): string
    getPort(): number
    getScheme(): string | null
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.NetworkAddress */
    vfuncEnumerate(): SocketAddressEnumerator
    vfuncProxyEnumerate(): SocketAddressEnumerator
    vfuncToString(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkAddress, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NetworkAddress_ConstructProps)
    _init (config?: NetworkAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(hostname: string, port: number): NetworkAddress
    static newLoopback(port: number): NetworkAddress
    static parse(hostAndPort: string, defaultPort: number): NetworkAddress
    static parseUri(uri: string, defaultPort: number): NetworkAddress
    static $gtype: GObject.Type
}
export interface NetworkService_ConstructProps extends GObject.Object_ConstructProps {
    domain?: string
    protocol?: string
    scheme?: string
    service?: string
}
export class NetworkService {
    /* Properties of Gio.NetworkService */
    scheme: string
    /* Fields of Gio.NetworkService */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.NetworkService */
    getDomain(): string
    getProtocol(): string
    getScheme(): string
    getService(): string
    setScheme(scheme: string): void
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.NetworkService */
    vfuncEnumerate(): SocketAddressEnumerator
    vfuncProxyEnumerate(): SocketAddressEnumerator
    vfuncToString(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NetworkService_ConstructProps)
    _init (config?: NetworkService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: string, protocol: string, domain: string): NetworkService
    static $gtype: GObject.Type
}
export interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}
export class Notification {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Notification */
    addButton(label: string, detailedAction: string): void
    addButtonWithTarget(label: string, action: string, target?: GLib.Variant | null): void
    setBody(body?: string | null): void
    setDefaultAction(detailedAction: string): void
    setDefaultActionAndTarget(action: string, target?: GLib.Variant | null): void
    setIcon(icon: Icon): void
    setPriority(priority: NotificationPriority): void
    setTitle(title: string): void
    setUrgent(urgent: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string): Notification
    static $gtype: GObject.Type
}
export interface OutputStream_ConstructProps extends GObject.Object_ConstructProps {
}
export class OutputStream {
    /* Fields of Gio.OutputStream */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncFlush(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish(result: AsyncResult): boolean
    vfuncSplice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish(result: AsyncResult): number
    vfuncWriteAsync(buffer: any | null, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish(result: AsyncResult): number
    vfuncWriteFn(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: OutputStream_ConstructProps)
    _init (config?: OutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Permission_ConstructProps extends GObject.Object_ConstructProps {
}
export class Permission {
    /* Properties of Gio.Permission */
    readonly allowed: boolean
    readonly canAcquire: boolean
    readonly canRelease: boolean
    /* Fields of Gio.Permission */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Permission */
    acquire(cancellable?: Cancellable | null): boolean
    acquireAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acquireFinish(result: AsyncResult): boolean
    getAllowed(): boolean
    getCanAcquire(): boolean
    getCanRelease(): boolean
    implUpdate(allowed: boolean, canAcquire: boolean, canRelease: boolean): void
    release(cancellable?: Cancellable | null): boolean
    releaseAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    releaseFinish(result: AsyncResult): boolean
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
    /* Virtual methods of Gio.Permission */
    vfuncAcquire(cancellable?: Cancellable | null): boolean
    vfuncAcquireAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncAcquireFinish(result: AsyncResult): boolean
    vfuncRelease(cancellable?: Cancellable | null): boolean
    vfuncReleaseAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncReleaseFinish(result: AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allowed", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-acquire", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-acquire", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-release", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-release", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Permission_ConstructProps)
    _init (config?: Permission_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PropertyAction_ConstructProps extends GObject.Object_ConstructProps {
    invertBoolean?: boolean
    name?: string
    object?: GObject.Object
    propertyName?: string
}
export class PropertyAction {
    /* Properties of Gio.PropertyAction */
    readonly enabled: boolean
    readonly parameterType: GLib.VariantType
    readonly state: GLib.Variant
    readonly stateType: GLib.VariantType
    /* Properties of Gio.Action */
    readonly name: string
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
    /* Methods of Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    changeState(value: GLib.Variant): void
    getEnabled(): boolean
    getName(): string
    getParameterType(): GLib.VariantType | null
    getState(): GLib.Variant | null
    getStateHint(): GLib.Variant | null
    getStateType(): GLib.VariantType | null
    /* Virtual methods of Gio.PropertyAction */
    vfuncActivate(parameter?: GLib.Variant | null): void
    vfuncChangeState(value: GLib.Variant): void
    vfuncGetEnabled(): boolean
    vfuncGetName(): string
    vfuncGetParameterType(): GLib.VariantType | null
    vfuncGetState(): GLib.Variant | null
    vfuncGetStateHint(): GLib.Variant | null
    vfuncGetStateType(): GLib.VariantType | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameter-type", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameter-type", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state-type", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-type", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PropertyAction_ConstructProps)
    _init (config?: PropertyAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, object: GObject.Object, propertyName: string): PropertyAction
    static nameIsValid(actionName: string): boolean
    static parseDetailedName(detailedName: string): [ /* returnType */ boolean, /* actionName */ string, /* targetValue */ GLib.Variant ]
    static printDetailedName(actionName: string, targetValue?: GLib.Variant | null): string
    static $gtype: GObject.Type
}
export interface ProxyAddress_ConstructProps extends InetSocketAddress_ConstructProps {
    destinationHostname?: string
    destinationPort?: number
    destinationProtocol?: string
    password?: string
    protocol?: string
    uri?: string
    username?: string
}
export class ProxyAddress {
    /* Properties of Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio.ProxyAddress */
    parentInstance: InetSocketAddress
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.ProxyAddress */
    getDestinationHostname(): string
    getDestinationPort(): number
    getDestinationProtocol(): string
    getPassword(): string | null
    getProtocol(): string
    getUri(): string | null
    getUsername(): string | null
    /* Methods of Gio.InetSocketAddress */
    getAddress(): InetAddress
    getFlowinfo(): number
    getPort(): number
    getScopeId(): number
    /* Methods of Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketAddress */
    vfuncGetFamily(): SocketFamily
    vfuncGetNativeSize(): number
    vfuncToNative(dest: object | null, destlen: number): boolean
    vfuncEnumerate(): SocketAddressEnumerator
    vfuncProxyEnumerate(): SocketAddressEnumerator
    vfuncToString(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: (($obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyAddress_ConstructProps)
    _init (config?: ProxyAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(inetaddr: InetAddress, port: number, protocol: string, destHostname: string, destPort: number, username?: string | null, password?: string | null): ProxyAddress
    static new(address: InetAddress, port: number): ProxyAddress
    static $gtype: GObject.Type
}
export interface ProxyAddressEnumerator_ConstructProps extends SocketAddressEnumerator_ConstructProps {
    connectable?: SocketConnectable
    defaultPort?: number
    proxyResolver?: ProxyResolver
    uri?: string
}
export class ProxyAddressEnumerator {
    /* Properties of Gio.ProxyAddressEnumerator */
    proxyResolver: ProxyResolver
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SocketAddressEnumerator */
    next(cancellable?: Cancellable | null): SocketAddress
    nextAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    nextFinish(result: AsyncResult): SocketAddress
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
    /* Virtual methods of Gio.SocketAddressEnumerator */
    vfuncNext(cancellable?: Cancellable | null): SocketAddress
    vfuncNextAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncNextFinish(result: AsyncResult): SocketAddress
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyAddressEnumerator_ConstructProps)
    _init (config?: ProxyAddressEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Resolver_ConstructProps extends GObject.Object_ConstructProps {
}
export class Resolver {
    /* Fields of Gio.Resolver */
    parentInstance: GObject.Object
    priv: ResolverPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Resolver */
    lookupByAddress(address: InetAddress, cancellable?: Cancellable | null): string
    lookupByAddressAsync(address: InetAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupByAddressFinish(result: AsyncResult): string
    lookupByName(hostname: string, cancellable?: Cancellable | null): InetAddress[]
    lookupByNameAsync(hostname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupByNameFinish(result: AsyncResult): InetAddress[]
    lookupByNameWithFlags(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null): InetAddress[]
    lookupByNameWithFlagsAsync(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupByNameWithFlagsFinish(result: AsyncResult): InetAddress[]
    lookupRecords(rrname: string, recordType: ResolverRecordType, cancellable?: Cancellable | null): GLib.Variant[]
    lookupRecordsAsync(rrname: string, recordType: ResolverRecordType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupRecordsFinish(result: AsyncResult): GLib.Variant[]
    lookupService(service: string, protocol: string, domain: string, cancellable?: Cancellable | null): SrvTarget[]
    lookupServiceAsync(service: string, protocol: string, domain: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupServiceFinish(result: AsyncResult): SrvTarget[]
    setDefault(): void
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
    /* Virtual methods of Gio.Resolver */
    vfuncLookupByAddress(address: InetAddress, cancellable?: Cancellable | null): string
    vfuncLookupByAddressAsync(address: InetAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupByAddressFinish(result: AsyncResult): string
    vfuncLookupByName(hostname: string, cancellable?: Cancellable | null): InetAddress[]
    vfuncLookupByNameAsync(hostname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupByNameFinish(result: AsyncResult): InetAddress[]
    vfuncLookupByNameWithFlags(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null): InetAddress[]
    vfuncLookupByNameWithFlagsAsync(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupByNameWithFlagsFinish(result: AsyncResult): InetAddress[]
    vfuncLookupRecords(rrname: string, recordType: ResolverRecordType, cancellable?: Cancellable | null): GLib.Variant[]
    vfuncLookupRecordsAsync(rrname: string, recordType: ResolverRecordType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupRecordsFinish(result: AsyncResult): GLib.Variant[]
    vfuncLookupServiceAsync(rrname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupServiceFinish(result: AsyncResult): SrvTarget[]
    vfuncReload(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Resolver */
    connect(sigName: "reload", callback: (($obj: Resolver) => void)): number
    connect_after(sigName: "reload", callback: (($obj: Resolver) => void)): number
    emit(sigName: "reload"): void
    on(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Resolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Resolver, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Resolver_ConstructProps)
    _init (config?: Resolver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Resolver
    static $gtype: GObject.Type
}
export interface Settings_ConstructProps extends GObject.Object_ConstructProps {
    backend?: SettingsBackend
    path?: string
    schema?: string
    schemaId?: string
    settingsSchema?: SettingsSchema
}
export class Settings {
    /* Properties of Gio.Settings */
    readonly delayApply: boolean
    readonly hasUnapplied: boolean
    /* Fields of Gio.Settings */
    parentInstance: GObject.Object
    priv: SettingsPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Settings */
    apply(): void
    bind(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags): void
    bindWritable(key: string, object: GObject.Object, property: string, inverted: boolean): void
    createAction(key: string): Action
    delay(): void
    getBoolean(key: string): boolean
    getChild(name: string): Settings
    getDefaultValue(key: string): GLib.Variant | null
    getDouble(key: string): number
    getEnum(key: string): number
    getFlags(key: string): number
    getHasUnapplied(): boolean
    getInt(key: string): number
    getInt64(key: string): number
    getMapped(key: string, mapping: SettingsGetMapping): object | null
    getRange(key: string): GLib.Variant
    getString(key: string): string
    getStrv(key: string): string[]
    getUint(key: string): number
    getUint64(key: string): number
    getUserValue(key: string): GLib.Variant | null
    getValue(key: string): GLib.Variant
    isWritable(name: string): boolean
    listChildren(): string[]
    listKeys(): string[]
    rangeCheck(key: string, value: GLib.Variant): boolean
    reset(key: string): void
    revert(): void
    setBoolean(key: string, value: boolean): boolean
    setDouble(key: string, value: number): boolean
    setEnum(key: string, value: number): boolean
    setFlags(key: string, value: number): boolean
    setInt(key: string, value: number): boolean
    setInt64(key: string, value: number): boolean
    setString(key: string, value: string): boolean
    setStrv(key: string, value?: string[] | null): boolean
    setUint(key: string, value: number): boolean
    setUint64(key: string, value: number): boolean
    setValue(key: string, value: GLib.Variant): boolean
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
    /* Virtual methods of Gio.Settings */
    vfuncChangeEvent(keys: GLib.Quark, nKeys: number): boolean
    vfuncChanged(key: string): void
    vfuncWritableChangeEvent(key: GLib.Quark): boolean
    vfuncWritableChanged(key: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Settings */
    connect(sigName: "change-event", callback: (($obj: Settings, keys: GLib.Quark[] | null) => boolean)): number
    connect_after(sigName: "change-event", callback: (($obj: Settings, keys: GLib.Quark[] | null) => boolean)): number
    emit(sigName: "change-event", keys: GLib.Quark[] | null): void
    on(sigName: "change-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "change-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "change-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: Settings, key: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Settings, key: string) => void)): number
    emit(sigName: "changed", key: string): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "writable-change-event", callback: (($obj: Settings, key: number) => boolean)): number
    connect_after(sigName: "writable-change-event", callback: (($obj: Settings, key: number) => boolean)): number
    emit(sigName: "writable-change-event", key: number): void
    on(sigName: "writable-change-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "writable-change-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "writable-change-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "writable-changed", callback: (($obj: Settings, key: string) => void)): number
    connect_after(sigName: "writable-changed", callback: (($obj: Settings, key: string) => void)): number
    emit(sigName: "writable-changed", key: string): void
    on(sigName: "writable-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "writable-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "writable-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::delay-apply", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay-apply", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delay-apply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delay-apply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delay-apply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-unapplied", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-unapplied", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-unapplied", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-unapplied", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-unapplied", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(schemaId: string): Settings
    static newFull(schema: SettingsSchema, backend?: SettingsBackend | null, path?: string | null): Settings
    static newWithBackend(schemaId: string, backend: SettingsBackend): Settings
    static newWithBackendAndPath(schemaId: string, backend: SettingsBackend, path: string): Settings
    static newWithPath(schemaId: string, path: string): Settings
    static listRelocatableSchemas(): string[]
    static listSchemas(): string[]
    static sync(): void
    static unbind(object: GObject.Object, property: string): void
    static $gtype: GObject.Type
}
export interface SettingsBackend_ConstructProps extends GObject.Object_ConstructProps {
}
export class SettingsBackend {
    /* Fields of Gio.SettingsBackend */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SettingsBackend */
    changed(key: string, originTag?: object | null): void
    changedTree(tree: GLib.Tree, originTag?: object | null): void
    keysChanged(path: string, items: string[], originTag?: object | null): void
    pathChanged(path: string, originTag?: object | null): void
    pathWritableChanged(path: string): void
    writableChanged(key: string): void
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
    /* Virtual methods of Gio.SettingsBackend */
    vfuncGetWritable(key: string): boolean
    vfuncRead(key: string, expectedType: GLib.VariantType, defaultValue: boolean): GLib.Variant
    vfuncReadUserValue(key: string, expectedType: GLib.VariantType): GLib.Variant
    vfuncReset(key: string, originTag?: object | null): void
    vfuncSubscribe(name: string): void
    vfuncSync(): void
    vfuncUnsubscribe(name: string): void
    vfuncWrite(key: string, value: GLib.Variant, originTag?: object | null): boolean
    vfuncWriteTree(tree: GLib.Tree, originTag?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingsBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingsBackend, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SettingsBackend_ConstructProps)
    _init (config?: SettingsBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static flattenTree(tree: GLib.Tree): [ /* path */ string, /* keys */ string[], /* values */ GLib.Variant[] | null ]
    static getDefault(): SettingsBackend
    static $gtype: GObject.Type
}
export interface SimpleAction_ConstructProps extends GObject.Object_ConstructProps {
    enabled?: boolean
    name?: string
    parameterType?: GLib.VariantType
    state?: GLib.Variant
}
export class SimpleAction {
    /* Properties of Gio.SimpleAction */
    enabled: boolean
    state: GLib.Variant
    readonly stateType: GLib.VariantType
    /* Properties of Gio.Action */
    readonly name: string
    readonly parameterType: GLib.VariantType
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SimpleAction */
    setEnabled(enabled: boolean): void
    setState(value: GLib.Variant): void
    setStateHint(stateHint?: GLib.Variant | null): void
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
    /* Methods of Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    changeState(value: GLib.Variant): void
    getEnabled(): boolean
    getName(): string
    getParameterType(): GLib.VariantType | null
    getState(): GLib.Variant | null
    getStateHint(): GLib.Variant | null
    getStateType(): GLib.VariantType | null
    /* Virtual methods of Gio.SimpleAction */
    vfuncActivate(parameter?: GLib.Variant | null): void
    vfuncChangeState(value: GLib.Variant): void
    vfuncGetEnabled(): boolean
    vfuncGetName(): string
    vfuncGetParameterType(): GLib.VariantType | null
    vfuncGetState(): GLib.Variant | null
    vfuncGetStateHint(): GLib.Variant | null
    vfuncGetStateType(): GLib.VariantType | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SimpleAction */
    connect(sigName: "activate", callback: (($obj: SimpleAction, parameter?: GLib.Variant | null) => void)): number
    connect_after(sigName: "activate", callback: (($obj: SimpleAction, parameter?: GLib.Variant | null) => void)): number
    emit(sigName: "activate", parameter?: GLib.Variant | null): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "change-state", callback: (($obj: SimpleAction, value?: GLib.Variant | null) => void)): number
    connect_after(sigName: "change-state", callback: (($obj: SimpleAction, value?: GLib.Variant | null) => void)): number
    emit(sigName: "change-state", value?: GLib.Variant | null): void
    on(sigName: "change-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "change-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "change-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state-type", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-type", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameter-type", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameter-type", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleAction_ConstructProps)
    _init (config?: SimpleAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, parameterType?: GLib.VariantType | null): SimpleAction
    static newStateful(name: string, parameterType: GLib.VariantType | null, state: GLib.Variant): SimpleAction
    static nameIsValid(actionName: string): boolean
    static parseDetailedName(detailedName: string): [ /* returnType */ boolean, /* actionName */ string, /* targetValue */ GLib.Variant ]
    static printDetailedName(actionName: string, targetValue?: GLib.Variant | null): string
    static $gtype: GObject.Type
}
export interface SimpleActionGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleActionGroup {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SimpleActionGroup */
    addEntries(entries: ActionEntry[], userData?: object | null): void
    insert(action: Action): void
    lookup(actionName: string): Action
    remove(actionName: string): void
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
    /* Methods of Gio.ActionGroup */
    actionAdded(actionName: string): void
    actionEnabledChanged(actionName: string, enabled: boolean): void
    actionRemoved(actionName: string): void
    actionStateChanged(actionName: string, state: GLib.Variant): void
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    changeActionState(actionName: string, value: GLib.Variant): void
    getActionEnabled(actionName: string): boolean
    getActionParameterType(actionName: string): GLib.VariantType | null
    getActionState(actionName: string): GLib.Variant | null
    getActionStateHint(actionName: string): GLib.Variant | null
    getActionStateType(actionName: string): GLib.VariantType | null
    hasAction(actionName: string): boolean
    listActions(): string[]
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.ActionMap */
    addAction(action: Action): void
    addActionEntries(entries: ActionEntry[], userData?: object | null): void
    lookupAction(actionName: string): Action | null
    removeAction(actionName: string): void
    /* Virtual methods of Gio.SimpleActionGroup */
    vfuncActionAdded(actionName: string): void
    vfuncActionEnabledChanged(actionName: string, enabled: boolean): void
    vfuncActionRemoved(actionName: string): void
    vfuncActionStateChanged(actionName: string, state: GLib.Variant): void
    vfuncActivateAction(actionName: string, parameter?: GLib.Variant | null): void
    vfuncChangeActionState(actionName: string, value: GLib.Variant): void
    vfuncGetActionEnabled(actionName: string): boolean
    vfuncGetActionParameterType(actionName: string): GLib.VariantType | null
    vfuncGetActionState(actionName: string): GLib.Variant | null
    vfuncGetActionStateHint(actionName: string): GLib.Variant | null
    vfuncGetActionStateType(actionName: string): GLib.VariantType | null
    vfuncHasAction(actionName: string): boolean
    vfuncListActions(): string[]
    vfuncQueryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    vfuncAddAction(action: Action): void
    vfuncLookupAction(actionName: string): Action | null
    vfuncRemoveAction(actionName: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleActionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleActionGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: SimpleActionGroup, actionName: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: SimpleActionGroup, actionName: string) => void)): number
    emit(sigName: "action-added", actionName: string): void
    on(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-enabled-changed", callback: (($obj: SimpleActionGroup, actionName: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: SimpleActionGroup, actionName: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    on(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-removed", callback: (($obj: SimpleActionGroup, actionName: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: SimpleActionGroup, actionName: string) => void)): number
    emit(sigName: "action-removed", actionName: string): void
    on(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-state-changed", callback: (($obj: SimpleActionGroup, actionName: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: SimpleActionGroup, actionName: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    on(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleActionGroup_ConstructProps)
    _init (config?: SimpleActionGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleActionGroup
    static $gtype: GObject.Type
}
export interface SimpleAsyncResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleAsyncResult {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SimpleAsyncResult */
    complete(): void
    completeInIdle(): void
    getOpResGboolean(): boolean
    getOpResGssize(): number
    propagateError(): boolean
    setCheckCancellable(checkCancellable?: Cancellable | null): void
    setFromError(error: GLib.Error): void
    setHandleCancellation(handleCancellation: boolean): void
    setOpResGboolean(opRes: boolean): void
    setOpResGssize(opRes: number): void
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
    /* Methods of Gio.AsyncResult */
    getSourceObject(): GObject.Object | null
    getUserData(): object | null
    isTagged(sourceTag?: object | null): boolean
    legacyPropagateError(): boolean
    /* Virtual methods of Gio.SimpleAsyncResult */
    vfuncGetSourceObject(): GObject.Object | null
    vfuncGetUserData(): object | null
    vfuncIsTagged(sourceTag?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleAsyncResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleAsyncResult, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SimpleAsyncResult_ConstructProps)
    _init (config?: SimpleAsyncResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sourceObject?: GObject.Object | null, callback?: AsyncReadyCallback | null, sourceTag?: object | null): SimpleAsyncResult
    static newFromError(sourceObject: GObject.Object | null, callback: AsyncReadyCallback | null, error: GLib.Error): SimpleAsyncResult
    static isValid(result: AsyncResult, source?: GObject.Object | null, sourceTag?: object | null): boolean
    static $gtype: GObject.Type
}
export interface SimpleIOStream_ConstructProps extends IOStream_ConstructProps {
    inputStream?: InputStream
    outputStream?: OutputStream
}
export class SimpleIOStream {
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio.IOStream */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream(): InputStream
    vfuncGetOutputStream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleIOStream_ConstructProps)
    _init (config?: SimpleIOStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(inputStream: InputStream, outputStream: OutputStream): SimpleIOStream
    static $gtype: GObject.Type
}
export interface SimplePermission_ConstructProps extends Permission_ConstructProps {
}
export class SimplePermission {
    /* Properties of Gio.Permission */
    readonly allowed: boolean
    readonly canAcquire: boolean
    readonly canRelease: boolean
    /* Fields of Gio.Permission */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Permission */
    acquire(cancellable?: Cancellable | null): boolean
    acquireAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acquireFinish(result: AsyncResult): boolean
    getAllowed(): boolean
    getCanAcquire(): boolean
    getCanRelease(): boolean
    implUpdate(allowed: boolean, canAcquire: boolean, canRelease: boolean): void
    release(cancellable?: Cancellable | null): boolean
    releaseAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    releaseFinish(result: AsyncResult): boolean
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
    /* Virtual methods of Gio.Permission */
    vfuncAcquire(cancellable?: Cancellable | null): boolean
    vfuncAcquireAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncAcquireFinish(result: AsyncResult): boolean
    vfuncRelease(cancellable?: Cancellable | null): boolean
    vfuncReleaseAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncReleaseFinish(result: AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allowed", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-acquire", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-acquire", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-release", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-release", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimplePermission_ConstructProps)
    _init (config?: SimplePermission_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(allowed: boolean): SimplePermission
    static $gtype: GObject.Type
}
export interface SimpleProxyResolver_ConstructProps extends GObject.Object_ConstructProps {
    defaultProxy?: string
    ignoreHosts?: string[]
}
export class SimpleProxyResolver {
    /* Properties of Gio.SimpleProxyResolver */
    defaultProxy: string
    ignoreHosts: string[]
    /* Fields of Gio.SimpleProxyResolver */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SimpleProxyResolver */
    setDefaultProxy(defaultProxy: string): void
    setIgnoreHosts(ignoreHosts: string): void
    setUriProxy(uriScheme: string, proxy: string): void
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
    /* Methods of Gio.ProxyResolver */
    isSupported(): boolean
    lookup(uri: string, cancellable?: Cancellable | null): string[]
    lookupAsync(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupFinish(result: AsyncResult): string[]
    /* Virtual methods of Gio.SimpleProxyResolver */
    vfuncIsSupported(): boolean
    vfuncLookup(uri: string, cancellable?: Cancellable | null): string[]
    vfuncLookupAsync(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupFinish(result: AsyncResult): string[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-proxy", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-proxy", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-hosts", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-hosts", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleProxyResolver_ConstructProps)
    _init (config?: SimpleProxyResolver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): ProxyResolver
    static $gtype: GObject.Type
}
export interface Socket_ConstructProps extends GObject.Object_ConstructProps {
    blocking?: boolean
    broadcast?: boolean
    family?: SocketFamily
    fd?: number
    keepalive?: boolean
    listenBacklog?: number
    multicastLoopback?: boolean
    multicastTtl?: number
    protocol?: SocketProtocol
    timeout?: number
    ttl?: number
    type?: SocketType
}
export class Socket {
    /* Properties of Gio.Socket */
    blocking: boolean
    broadcast: boolean
    keepalive: boolean
    listenBacklog: number
    readonly localAddress: SocketAddress
    multicastLoopback: boolean
    multicastTtl: number
    readonly remoteAddress: SocketAddress
    timeout: number
    ttl: number
    /* Fields of Gio.Socket */
    parentInstance: GObject.Object
    priv: SocketPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Socket */
    accept(cancellable?: Cancellable | null): Socket
    bind(address: SocketAddress, allowReuse: boolean): boolean
    checkConnectResult(): boolean
    close(): boolean
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionTimedWait(condition: GLib.IOCondition, timeoutUs: number, cancellable?: Cancellable | null): boolean
    conditionWait(condition: GLib.IOCondition, cancellable?: Cancellable | null): boolean
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectionFactoryCreateConnection(): SocketConnection
    getAvailableBytes(): number
    getBlocking(): boolean
    getBroadcast(): boolean
    getCredentials(): Credentials
    getFamily(): SocketFamily
    getFd(): number
    getKeepalive(): boolean
    getListenBacklog(): number
    getLocalAddress(): SocketAddress
    getMulticastLoopback(): boolean
    getMulticastTtl(): number
    getOption(level: number, optname: number): [ /* returnType */ boolean, /* value */ number ]
    getProtocol(): SocketProtocol
    getRemoteAddress(): SocketAddress
    getSocketType(): SocketType
    getTimeout(): number
    getTtl(): number
    isClosed(): boolean
    isConnected(): boolean
    joinMulticastGroup(group: InetAddress, sourceSpecific: boolean, iface?: string | null): boolean
    joinMulticastGroupSsm(group: InetAddress, sourceSpecific?: InetAddress | null, iface?: string | null): boolean
    leaveMulticastGroup(group: InetAddress, sourceSpecific: boolean, iface?: string | null): boolean
    leaveMulticastGroupSsm(group: InetAddress, sourceSpecific?: InetAddress | null, iface?: string | null): boolean
    listen(): boolean
    receive(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    receiveFrom(cancellable?: Cancellable | null): [ /* returnType */ number, /* address */ SocketAddress | null, /* buffer */ any ]
    receiveMessage(vectors: InputVector[], flags: number, cancellable?: Cancellable | null): [ /* returnType */ number, /* address */ SocketAddress | null, /* messages */ SocketControlMessage[] | null, /* flags */ number ]
    receiveMessages(messages: InputMessage[], flags: number, cancellable?: Cancellable | null): number
    receiveWithBlocking(blocking: boolean, cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    send(buffer: any, cancellable?: Cancellable | null): number
    sendMessage(address: SocketAddress | null, vectors: OutputVector[], messages: SocketControlMessage[] | null, flags: number, cancellable?: Cancellable | null): number
    sendMessageWithTimeout(address: SocketAddress | null, vectors: OutputVector[], messages: SocketControlMessage[] | null, flags: number, timeoutUs: number, cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    sendMessages(messages: OutputMessage[], flags: number, cancellable?: Cancellable | null): number
    sendTo(address: SocketAddress | null, buffer: any, cancellable?: Cancellable | null): number
    sendWithBlocking(buffer: any, blocking: boolean, cancellable?: Cancellable | null): number
    setBlocking(blocking: boolean): void
    setBroadcast(broadcast: boolean): void
    setKeepalive(keepalive: boolean): void
    setListenBacklog(backlog: number): void
    setMulticastLoopback(loopback: boolean): void
    setMulticastTtl(ttl: number): void
    setOption(level: number, optname: number, value: number): boolean
    setTimeout(timeout: number): void
    setTtl(ttl: number): void
    shutdown(shutdownRead: boolean, shutdownWrite: boolean): boolean
    speaksIpv4(): boolean
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
    /* Methods of Gio.DatagramBased */
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.Socket */
    vfuncConditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    vfuncConditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    vfuncCreateSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    vfuncReceiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfuncSendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfuncInit(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocking", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocking", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::broadcast", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::broadcast", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::broadcast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::broadcast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::broadcast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keepalive", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keepalive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keepalive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keepalive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::listen-backlog", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-address", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-address", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::multicast-loopback", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::multicast-loopback", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::multicast-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::multicast-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::multicast-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::multicast-ttl", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::multicast-ttl", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::multicast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::multicast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::multicast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-address", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-address", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ttl", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ttl", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Socket_ConstructProps)
    _init (config?: Socket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(family: SocketFamily, type: SocketType, protocol: SocketProtocol): Socket
    static newFromFd(fd: number): Socket
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SocketAddress_ConstructProps extends GObject.Object_ConstructProps {
}
export class SocketAddress {
    /* Properties of Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio.SocketAddress */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketAddress */
    vfuncGetFamily(): SocketFamily
    vfuncGetNativeSize(): number
    vfuncToNative(dest: object | null, destlen: number): boolean
    vfuncEnumerate(): SocketAddressEnumerator
    vfuncProxyEnumerate(): SocketAddressEnumerator
    vfuncToString(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: (($obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocketAddress_ConstructProps)
    _init (config?: SocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromNative(native: object, len: number): SocketAddress
    static $gtype: GObject.Type
}
export interface SocketAddressEnumerator_ConstructProps extends GObject.Object_ConstructProps {
}
export class SocketAddressEnumerator {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SocketAddressEnumerator */
    next(cancellable?: Cancellable | null): SocketAddress
    nextAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    nextFinish(result: AsyncResult): SocketAddress
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
    /* Virtual methods of Gio.SocketAddressEnumerator */
    vfuncNext(cancellable?: Cancellable | null): SocketAddress
    vfuncNextAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncNextFinish(result: AsyncResult): SocketAddress
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SocketAddressEnumerator_ConstructProps)
    _init (config?: SocketAddressEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SocketClient_ConstructProps extends GObject.Object_ConstructProps {
    enableProxy?: boolean
    family?: SocketFamily
    localAddress?: SocketAddress
    protocol?: SocketProtocol
    proxyResolver?: ProxyResolver
    timeout?: number
    tls?: boolean
    tlsValidationFlags?: TlsCertificateFlags
    type?: SocketType
}
export class SocketClient {
    /* Properties of Gio.SocketClient */
    enableProxy: boolean
    family: SocketFamily
    localAddress: SocketAddress
    protocol: SocketProtocol
    proxyResolver: ProxyResolver
    timeout: number
    tls: boolean
    tlsValidationFlags: TlsCertificateFlags
    type: SocketType
    /* Fields of Gio.SocketClient */
    parentInstance: GObject.Object
    priv: SocketClientPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SocketClient */
    addApplicationProxy(protocol: string): void
    connect(connectable: SocketConnectable, cancellable?: Cancellable | null): SocketConnection
    connectAsync(connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): SocketConnection
    connectToHost(hostAndPort: string, defaultPort: number, cancellable?: Cancellable | null): SocketConnection
    connectToHostAsync(hostAndPort: string, defaultPort: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectToHostFinish(result: AsyncResult): SocketConnection
    connectToService(domain: string, service: string, cancellable?: Cancellable | null): SocketConnection
    connectToServiceAsync(domain: string, service: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectToServiceFinish(result: AsyncResult): SocketConnection
    connectToUri(uri: string, defaultPort: number, cancellable?: Cancellable | null): SocketConnection
    connectToUriAsync(uri: string, defaultPort: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectToUriFinish(result: AsyncResult): SocketConnection
    getEnableProxy(): boolean
    getFamily(): SocketFamily
    getLocalAddress(): SocketAddress | null
    getProtocol(): SocketProtocol
    getProxyResolver(): ProxyResolver
    getSocketType(): SocketType
    getTimeout(): number
    getTls(): boolean
    getTlsValidationFlags(): TlsCertificateFlags
    setEnableProxy(enable: boolean): void
    setFamily(family: SocketFamily): void
    setLocalAddress(address?: SocketAddress | null): void
    setProtocol(protocol: SocketProtocol): void
    setProxyResolver(proxyResolver?: ProxyResolver | null): void
    setSocketType(type: SocketType): void
    setTimeout(timeout: number): void
    setTls(tls: boolean): void
    setTlsValidationFlags(flags: TlsCertificateFlags): void
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
    /* Virtual methods of Gio.SocketClient */
    vfuncEvent(event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketClient */
    connect(sigName: "event", callback: (($obj: SocketClient, event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null) => void)): number
    connect_after(sigName: "event", callback: (($obj: SocketClient, event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null) => void)): number
    emit(sigName: "event", event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-proxy", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-proxy", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-address", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-address", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-validation-flags", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-validation-flags", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocketClient_ConstructProps)
    _init (config?: SocketClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SocketClient
    static $gtype: GObject.Type
}
export interface SocketConnection_ConstructProps extends IOStream_ConstructProps {
    socket?: Socket
}
export class SocketConnection {
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio.SocketConnection */
    parentInstance: IOStream
    priv: SocketConnectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream(): InputStream
    vfuncGetOutputStream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocketConnection_ConstructProps)
    _init (config?: SocketConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static factoryLookupType(family: SocketFamily, type: SocketType, protocolId: number): GObject.Type
    static factoryRegisterType(gType: GObject.Type, family: SocketFamily, type: SocketType, protocol: number): void
    static $gtype: GObject.Type
}
export interface SocketControlMessage_ConstructProps extends GObject.Object_ConstructProps {
}
export class SocketControlMessage {
    /* Fields of Gio.SocketControlMessage */
    parentInstance: GObject.Object
    priv: SocketControlMessagePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SocketControlMessage */
    getLevel(): number
    getMsgType(): number
    getSize(): number
    serialize(data: object): void
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
    /* Virtual methods of Gio.SocketControlMessage */
    vfuncGetLevel(): number
    vfuncGetSize(): number
    vfuncGetType(): number
    vfuncSerialize(data: object): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketControlMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketControlMessage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SocketControlMessage_ConstructProps)
    _init (config?: SocketControlMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static deserialize(level: number, type: number, data: any): SocketControlMessage
    static $gtype: GObject.Type
}
export interface SocketListener_ConstructProps extends GObject.Object_ConstructProps {
    listenBacklog?: number
}
export class SocketListener {
    /* Properties of Gio.SocketListener */
    listenBacklog: number
    /* Fields of Gio.SocketListener */
    parentInstance: GObject.Object
    priv: SocketListenerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptFinish(result: AsyncResult): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptSocket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    acceptSocketAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptSocketFinish(result: AsyncResult): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    addAddress(address: SocketAddress, type: SocketType, protocol: SocketProtocol, sourceObject?: GObject.Object | null): [ /* returnType */ boolean, /* effectiveAddress */ SocketAddress | null ]
    addAnyInetPort(sourceObject?: GObject.Object | null): number
    addInetPort(port: number, sourceObject?: GObject.Object | null): boolean
    addSocket(socket: Socket, sourceObject?: GObject.Object | null): boolean
    close(): void
    setBacklog(listenBacklog: number): void
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
    /* Virtual methods of Gio.SocketListener */
    vfuncChanged(): void
    vfuncEvent(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: (($obj: SocketListener, event: SocketListenerEvent, socket: Socket) => void)): number
    connect_after(sigName: "event", callback: (($obj: SocketListener, event: SocketListenerEvent, socket: Socket) => void)): number
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::listen-backlog", callback: (($obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: (($obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocketListener_ConstructProps)
    _init (config?: SocketListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SocketListener
    static $gtype: GObject.Type
}
export interface SocketService_ConstructProps extends SocketListener_ConstructProps {
    active?: boolean
}
export class SocketService {
    /* Properties of Gio.SocketService */
    active: boolean
    /* Properties of Gio.SocketListener */
    listenBacklog: number
    /* Fields of Gio.SocketService */
    parentInstance: SocketListener
    priv: SocketServicePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SocketService */
    isActive(): boolean
    start(): void
    stop(): void
    /* Methods of Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptFinish(result: AsyncResult): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptSocket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    acceptSocketAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptSocketFinish(result: AsyncResult): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    addAddress(address: SocketAddress, type: SocketType, protocol: SocketProtocol, sourceObject?: GObject.Object | null): [ /* returnType */ boolean, /* effectiveAddress */ SocketAddress | null ]
    addAnyInetPort(sourceObject?: GObject.Object | null): number
    addInetPort(port: number, sourceObject?: GObject.Object | null): boolean
    addSocket(socket: Socket, sourceObject?: GObject.Object | null): boolean
    close(): void
    setBacklog(listenBacklog: number): void
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
    /* Virtual methods of Gio.SocketService */
    vfuncIncoming(connection: SocketConnection, sourceObject: GObject.Object): boolean
    /* Virtual methods of Gio.SocketListener */
    vfuncChanged(): void
    vfuncEvent(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketService */
    connect(sigName: "incoming", callback: (($obj: SocketService, connection: SocketConnection, sourceObject?: GObject.Object | null) => boolean)): number
    connect_after(sigName: "incoming", callback: (($obj: SocketService, connection: SocketConnection, sourceObject?: GObject.Object | null) => boolean)): number
    emit(sigName: "incoming", connection: SocketConnection, sourceObject?: GObject.Object | null): void
    on(sigName: "incoming", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "incoming", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "incoming", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: (($obj: SocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    connect_after(sigName: "event", callback: (($obj: SocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::listen-backlog", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocketService_ConstructProps)
    _init (config?: SocketService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SocketService
    static $gtype: GObject.Type
}
export interface Subprocess_ConstructProps extends GObject.Object_ConstructProps {
    argv?: string[]
    flags?: SubprocessFlags
}
export class Subprocess {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Subprocess */
    communicate(stdinBuf?: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* stdoutBuf */ any, /* stderrBuf */ any ]
    communicateAsync(stdinBuf?: any, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    communicateFinish(result: AsyncResult): [ /* returnType */ boolean, /* stdoutBuf */ any, /* stderrBuf */ any ]
    communicateUtf8(stdinBuf?: string | null, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* stdoutBuf */ string | null, /* stderrBuf */ string | null ]
    communicateUtf8Async(stdinBuf?: string | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    communicateUtf8Finish(result: AsyncResult): [ /* returnType */ boolean, /* stdoutBuf */ string | null, /* stderrBuf */ string | null ]
    forceExit(): void
    getExitStatus(): number
    getIdentifier(): string | null
    getIfExited(): boolean
    getIfSignaled(): boolean
    getStatus(): number
    getStderrPipe(): InputStream | null
    getStdinPipe(): OutputStream | null
    getStdoutPipe(): InputStream | null
    getSuccessful(): boolean
    getTermSig(): number
    sendSignal(signalNum: number): void
    wait(cancellable?: Cancellable | null): boolean
    waitAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    waitCheck(cancellable?: Cancellable | null): boolean
    waitCheckAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    waitCheckFinish(result: AsyncResult): boolean
    waitFinish(result: AsyncResult): boolean
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
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.Subprocess */
    vfuncInit(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Subprocess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Subprocess, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Subprocess_ConstructProps)
    _init (config?: Subprocess_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(argv: string[], flags: SubprocessFlags): Subprocess
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SubprocessLauncher_ConstructProps extends GObject.Object_ConstructProps {
    flags?: SubprocessFlags
}
export class SubprocessLauncher {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SubprocessLauncher */
    close(): void
    getenv(variable: string): string | null
    setCwd(cwd: string): void
    setEnviron(env: string[]): void
    setFlags(flags: SubprocessFlags): void
    setStderrFilePath(path?: string | null): void
    setStdinFilePath(path: string): void
    setStdoutFilePath(path?: string | null): void
    setenv(variable: string, value: string, overwrite: boolean): void
    spawnv(argv: string[]): Subprocess
    takeFd(sourceFd: number, targetFd: number): void
    takeStderrFd(fd: number): void
    takeStdinFd(fd: number): void
    takeStdoutFd(fd: number): void
    unsetenv(variable: string): void
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
    connect(sigName: "notify", callback: (($obj: SubprocessLauncher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubprocessLauncher, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SubprocessLauncher_ConstructProps)
    _init (config?: SubprocessLauncher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: SubprocessFlags): SubprocessLauncher
    static $gtype: GObject.Type
}
export interface Task_ConstructProps extends GObject.Object_ConstructProps {
}
export class Task {
    /* Properties of Gio.Task */
    readonly completed: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Task */
    getCancellable(): Cancellable
    getCheckCancellable(): boolean
    getCompleted(): boolean
    getContext(): GLib.MainContext
    getName(): string | null
    getPriority(): number
    getReturnOnCancel(): boolean
    getSourceObject(): GObject.Object | null
    getSourceTag(): object | null
    getTaskData(): object | null
    hadError(): boolean
    propagateBoolean(): boolean
    propagateInt(): number
    propagatePointer(): object | null
    propagateValue(): [ /* returnType */ boolean, /* value */ any ]
    returnBoolean(result: boolean): void
    returnError(error: GLib.Error): void
    returnErrorIfCancelled(): boolean
    returnInt(result: number): void
    returnPointer(result?: object | null, resultDestroy?: GLib.DestroyNotify | null): void
    returnValue(result?: any): void
    runInThread(taskFunc: TaskThreadFunc): void
    runInThreadSync(taskFunc: TaskThreadFunc): void
    setCheckCancellable(checkCancellable: boolean): void
    setName(name?: string | null): void
    setPriority(priority: number): void
    setReturnOnCancel(returnOnCancel: boolean): boolean
    setSourceTag(sourceTag?: object | null): void
    setTaskData(taskData?: object | null, taskDataDestroy?: GLib.DestroyNotify | null): void
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
    /* Methods of Gio.AsyncResult */
    getUserData(): object | null
    isTagged(sourceTag?: object | null): boolean
    legacyPropagateError(): boolean
    /* Virtual methods of Gio.Task */
    vfuncGetSourceObject(): GObject.Object | null
    vfuncGetUserData(): object | null
    vfuncIsTagged(sourceTag?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completed", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sourceObject?: GObject.Object | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): Task
    static isValid(result: AsyncResult, sourceObject?: GObject.Object | null): boolean
    static reportError(sourceObject: GObject.Object | null, callback: AsyncReadyCallback | null, sourceTag: object | null, error: GLib.Error): void
    static $gtype: GObject.Type
}
export interface TcpConnection_ConstructProps extends SocketConnection_ConstructProps {
    gracefulDisconnect?: boolean
}
export class TcpConnection {
    /* Properties of Gio.TcpConnection */
    gracefulDisconnect: boolean
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio.TcpConnection */
    parentInstance: SocketConnection
    priv: TcpConnectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.TcpConnection */
    getGracefulDisconnect(): boolean
    setGracefulDisconnect(gracefulDisconnect: boolean): void
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream(): InputStream
    vfuncGetOutputStream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::graceful-disconnect", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::graceful-disconnect", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TcpConnection_ConstructProps)
    _init (config?: TcpConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TcpWrapperConnection_ConstructProps extends TcpConnection_ConstructProps {
    baseIoStream?: IOStream
}
export class TcpWrapperConnection {
    /* Properties of Gio.TcpConnection */
    gracefulDisconnect: boolean
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio.TcpWrapperConnection */
    parentInstance: TcpConnection
    priv: TcpWrapperConnectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.TcpWrapperConnection */
    getBaseIoStream(): IOStream
    /* Methods of Gio.TcpConnection */
    getGracefulDisconnect(): boolean
    setGracefulDisconnect(gracefulDisconnect: boolean): void
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream(): InputStream
    vfuncGetOutputStream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::graceful-disconnect", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::graceful-disconnect", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TcpWrapperConnection_ConstructProps)
    _init (config?: TcpWrapperConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseIoStream: IOStream, socket: Socket): TcpWrapperConnection
    static $gtype: GObject.Type
}
export interface TestDBus_ConstructProps extends GObject.Object_ConstructProps {
    flags?: TestDBusFlags
}
export class TestDBus {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.TestDBus */
    addServiceDir(path: string): void
    down(): void
    getBusAddress(): string | null
    getFlags(): TestDBusFlags
    stop(): void
    up(): void
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
    connect(sigName: "notify", callback: (($obj: TestDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TestDBus, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TestDBus_ConstructProps)
    _init (config?: TestDBus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: TestDBusFlags): TestDBus
    static unset(): void
    static $gtype: GObject.Type
}
export interface ThemedIcon_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    names?: string[]
    useDefaultFallbacks?: boolean
}
export class ThemedIcon {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.ThemedIcon */
    appendName(iconname: string): void
    getNames(): string[]
    prependName(iconname: string): void
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
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    /* Virtual methods of Gio.ThemedIcon */
    vfuncEqual(icon2?: Icon | null): boolean
    vfuncHash(): number
    vfuncSerialize(): GLib.Variant | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ThemedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ThemedIcon, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ThemedIcon_ConstructProps)
    _init (config?: ThemedIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(iconname: string): ThemedIcon
    static newFromNames(iconnames: string[]): ThemedIcon
    static newWithDefaultFallbacks(iconname: string): ThemedIcon
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
    static $gtype: GObject.Type
}
export interface ThreadedSocketService_ConstructProps extends SocketService_ConstructProps {
    maxThreads?: number
}
export class ThreadedSocketService {
    /* Properties of Gio.SocketService */
    active: boolean
    /* Properties of Gio.SocketListener */
    listenBacklog: number
    /* Fields of Gio.ThreadedSocketService */
    parentInstance: SocketService
    priv: ThreadedSocketServicePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.SocketService */
    isActive(): boolean
    start(): void
    stop(): void
    /* Methods of Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptFinish(result: AsyncResult): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptSocket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    acceptSocketAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptSocketFinish(result: AsyncResult): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    addAddress(address: SocketAddress, type: SocketType, protocol: SocketProtocol, sourceObject?: GObject.Object | null): [ /* returnType */ boolean, /* effectiveAddress */ SocketAddress | null ]
    addAnyInetPort(sourceObject?: GObject.Object | null): number
    addInetPort(port: number, sourceObject?: GObject.Object | null): boolean
    addSocket(socket: Socket, sourceObject?: GObject.Object | null): boolean
    close(): void
    setBacklog(listenBacklog: number): void
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
    /* Virtual methods of Gio.ThreadedSocketService */
    vfuncRun(connection: SocketConnection, sourceObject: GObject.Object): boolean
    /* Virtual methods of Gio.SocketService */
    vfuncIncoming(connection: SocketConnection, sourceObject: GObject.Object): boolean
    /* Virtual methods of Gio.SocketListener */
    vfuncChanged(): void
    vfuncEvent(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.ThreadedSocketService */
    connect(sigName: "run", callback: (($obj: ThreadedSocketService, connection: SocketConnection, sourceObject?: GObject.Object | null) => boolean)): number
    connect_after(sigName: "run", callback: (($obj: ThreadedSocketService, connection: SocketConnection, sourceObject?: GObject.Object | null) => boolean)): number
    emit(sigName: "run", connection: SocketConnection, sourceObject?: GObject.Object | null): void
    on(sigName: "run", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.SocketService */
    connect(sigName: "incoming", callback: (($obj: ThreadedSocketService, connection: SocketConnection, sourceObject?: GObject.Object | null) => boolean)): number
    connect_after(sigName: "incoming", callback: (($obj: ThreadedSocketService, connection: SocketConnection, sourceObject?: GObject.Object | null) => boolean)): number
    emit(sigName: "incoming", connection: SocketConnection, sourceObject?: GObject.Object | null): void
    on(sigName: "incoming", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "incoming", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "incoming", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: (($obj: ThreadedSocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    connect_after(sigName: "event", callback: (($obj: ThreadedSocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::listen-backlog", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ThreadedSocketService_ConstructProps)
    _init (config?: ThreadedSocketService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(maxThreads: number): ThreadedSocketService
    static new(): ThreadedSocketService
    static $gtype: GObject.Type
}
export interface TlsCertificate_ConstructProps extends GObject.Object_ConstructProps {
    certificate?: any
    certificatePem?: string
    issuer?: TlsCertificate
    pkcs11Uri?: string
    privateKey?: any
    privateKeyPem?: string
    privateKeyPkcs11Uri?: string
}
export class TlsCertificate {
    /* Fields of Gio.TlsCertificate */
    parentInstance: GObject.Object
    priv: TlsCertificatePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.TlsCertificate */
    getIssuer(): TlsCertificate | null
    isSame(certTwo: TlsCertificate): boolean
    verify(identity?: SocketConnectable | null, trustedCa?: TlsCertificate | null): TlsCertificateFlags
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
    /* Virtual methods of Gio.TlsCertificate */
    vfuncVerify(identity?: SocketConnectable | null, trustedCa?: TlsCertificate | null): TlsCertificateFlags
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsCertificate, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TlsCertificate_ConstructProps)
    _init (config?: TlsCertificate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromFile(file: string): TlsCertificate
    static newFromFiles(certFile: string, keyFile: string): TlsCertificate
    static newFromPem(data: string, length: number): TlsCertificate
    static newFromPkcs11Uris(pkcs11Uri: string, privateKeyPkcs11Uri?: string | null): TlsCertificate
    static listNewFromFile(file: string): TlsCertificate[]
    static $gtype: GObject.Type
}
export interface TlsConnection_ConstructProps extends IOStream_ConstructProps {
    advertisedProtocols?: string[]
    baseIoStream?: IOStream
    certificate?: TlsCertificate
    database?: TlsDatabase
    interaction?: TlsInteraction
    rehandshakeMode?: TlsRehandshakeMode
    requireCloseNotify?: boolean
    useSystemCertdb?: boolean
}
export class TlsConnection {
    /* Properties of Gio.TlsConnection */
    advertisedProtocols: string[]
    certificate: TlsCertificate
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiatedProtocol: string
    readonly peerCertificate: TlsCertificate
    readonly peerCertificateErrors: TlsCertificateFlags
    rehandshakeMode: TlsRehandshakeMode
    requireCloseNotify: boolean
    useSystemCertdb: boolean
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio.TlsConnection */
    parentInstance: IOStream
    priv: TlsConnectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.TlsConnection */
    emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate | null
    getChannelBindingData(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ any | null ]
    getDatabase(): TlsDatabase | null
    getInteraction(): TlsInteraction | null
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate | null
    getPeerCertificateErrors(): TlsCertificateFlags
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    getUseSystemCertdb(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database?: TlsDatabase | null): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(requireCloseNotify: boolean): void
    setUseSystemCertdb(useSystemCertdb: boolean): void
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.TlsConnection */
    vfuncAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfuncGetBindingData(type: TlsChannelBindingType, data: any): boolean
    vfuncHandshake(cancellable?: Cancellable | null): boolean
    vfuncHandshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncHandshakeFinish(result: AsyncResult): boolean
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream(): InputStream
    vfuncGetOutputStream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.TlsConnection */
    connect(sigName: "accept-certificate", callback: (($obj: TlsConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: TlsConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", peerCert: TlsCertificate, errors: TlsCertificateFlags): void
    on(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::advertised-protocols", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::advertised-protocols", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::certificate", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::database", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interaction", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::negotiated-protocol", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-protocol", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rehandshake-mode", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rehandshake-mode", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-close-notify", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-close-notify", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-system-certdb", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-system-certdb", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TlsConnection_ConstructProps)
    _init (config?: TlsConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsDatabase_ConstructProps extends GObject.Object_ConstructProps {
}
export class TlsDatabase {
    /* Fields of Gio.TlsDatabase */
    parentInstance: GObject.Object
    priv: TlsDatabasePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.TlsDatabase */
    createCertificateHandle(certificate: TlsCertificate): string | null
    lookupCertificateForHandle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    lookupCertificateForHandleAsync(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificateForHandleFinish(result: AsyncResult): TlsCertificate
    lookupCertificateIssuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    lookupCertificateIssuerAsync(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificateIssuerFinish(result: AsyncResult): TlsCertificate
    lookupCertificatesIssuedBy(issuerRawDn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    lookupCertificatesIssuedByAsync(issuerRawDn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificatesIssuedByFinish(result: AsyncResult): TlsCertificate[]
    verifyChain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    verifyChainAsync(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    verifyChainFinish(result: AsyncResult): TlsCertificateFlags
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
    /* Virtual methods of Gio.TlsDatabase */
    vfuncCreateCertificateHandle(certificate: TlsCertificate): string | null
    vfuncLookupCertificateForHandle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    vfuncLookupCertificateForHandleAsync(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupCertificateForHandleFinish(result: AsyncResult): TlsCertificate
    vfuncLookupCertificateIssuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    vfuncLookupCertificateIssuerAsync(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupCertificateIssuerFinish(result: AsyncResult): TlsCertificate
    vfuncLookupCertificatesIssuedBy(issuerRawDn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    vfuncLookupCertificatesIssuedByAsync(issuerRawDn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncLookupCertificatesIssuedByFinish(result: AsyncResult): TlsCertificate[]
    vfuncVerifyChain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    vfuncVerifyChainAsync(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncVerifyChainFinish(result: AsyncResult): TlsCertificateFlags
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsDatabase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsDatabase, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TlsDatabase_ConstructProps)
    _init (config?: TlsDatabase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsInteraction_ConstructProps extends GObject.Object_ConstructProps {
}
export class TlsInteraction {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.TlsInteraction */
    askPassword(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult
    askPasswordAsync(password: TlsPassword, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    askPasswordFinish(result: AsyncResult): TlsInteractionResult
    invokeAskPassword(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult
    invokeRequestCertificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null): TlsInteractionResult
    requestCertificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null): TlsInteractionResult
    requestCertificateAsync(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    requestCertificateFinish(result: AsyncResult): TlsInteractionResult
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
    /* Virtual methods of Gio.TlsInteraction */
    vfuncAskPassword(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult
    vfuncAskPasswordAsync(password: TlsPassword, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncAskPasswordFinish(result: AsyncResult): TlsInteractionResult
    vfuncRequestCertificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null): TlsInteractionResult
    vfuncRequestCertificateAsync(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncRequestCertificateFinish(result: AsyncResult): TlsInteractionResult
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsInteraction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsInteraction, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TlsInteraction_ConstructProps)
    _init (config?: TlsInteraction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsPassword_ConstructProps extends GObject.Object_ConstructProps {
    description?: string
    flags?: TlsPasswordFlags
    warning?: string
}
export class TlsPassword {
    /* Properties of Gio.TlsPassword */
    description: string
    flags: TlsPasswordFlags
    warning: string
    /* Fields of Gio.TlsPassword */
    parentInstance: GObject.Object
    priv: TlsPasswordPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.TlsPassword */
    getDescription(): string
    getFlags(): TlsPasswordFlags
    getValue(length?: number | null): number
    getWarning(): string
    setDescription(description: string): void
    setFlags(flags: TlsPasswordFlags): void
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
    connect(sigName: "notify", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TlsPassword_ConstructProps)
    _init (config?: TlsPassword_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: TlsPasswordFlags, description: string): TlsPassword
    static $gtype: GObject.Type
}
export interface UnixConnection_ConstructProps extends SocketConnection_ConstructProps {
}
export class UnixConnection {
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio.UnixConnection */
    parentInstance: SocketConnection
    priv: UnixConnectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.UnixConnection */
    receiveCredentials(cancellable?: Cancellable | null): Credentials
    receiveCredentialsAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    receiveCredentialsFinish(result: AsyncResult): Credentials
    receiveFd(cancellable?: Cancellable | null): number
    sendCredentials(cancellable?: Cancellable | null): boolean
    sendCredentialsAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    sendCredentialsFinish(result: AsyncResult): boolean
    sendFd(fd: number, cancellable?: Cancellable | null): boolean
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncGetInputStream(): InputStream
    vfuncGetOutputStream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixConnection_ConstructProps)
    _init (config?: UnixConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UnixCredentialsMessage_ConstructProps extends SocketControlMessage_ConstructProps {
    credentials?: Credentials
}
export class UnixCredentialsMessage {
    /* Fields of Gio.UnixCredentialsMessage */
    parentInstance: SocketControlMessage
    priv: UnixCredentialsMessagePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.UnixCredentialsMessage */
    getCredentials(): Credentials
    /* Methods of Gio.SocketControlMessage */
    getLevel(): number
    getMsgType(): number
    getSize(): number
    serialize(data: object): void
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
    /* Virtual methods of Gio.SocketControlMessage */
    vfuncGetLevel(): number
    vfuncGetSize(): number
    vfuncGetType(): number
    vfuncSerialize(data: object): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixCredentialsMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixCredentialsMessage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: UnixCredentialsMessage_ConstructProps)
    _init (config?: UnixCredentialsMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixCredentialsMessage
    static newWithCredentials(credentials: Credentials): UnixCredentialsMessage
    static isSupported(): boolean
    static $gtype: GObject.Type
}
export interface UnixFDList_ConstructProps extends GObject.Object_ConstructProps {
}
export class UnixFDList {
    /* Fields of Gio.UnixFDList */
    parentInstance: GObject.Object
    priv: UnixFDListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.UnixFDList */
    append(fd: number): number
    get(index: number): number
    getLength(): number
    peekFds(): number[]
    stealFds(): number[]
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
    connect(sigName: "notify", callback: (($obj: UnixFDList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixFDList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: UnixFDList_ConstructProps)
    _init (config?: UnixFDList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixFDList
    static newFromArray(fds: number[]): UnixFDList
    static $gtype: GObject.Type
}
export interface UnixFDMessage_ConstructProps extends SocketControlMessage_ConstructProps {
    fdList?: UnixFDList
}
export class UnixFDMessage {
    /* Fields of Gio.UnixFDMessage */
    parentInstance: SocketControlMessage
    priv: UnixFDMessagePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.UnixFDMessage */
    appendFd(fd: number): boolean
    getFdList(): UnixFDList
    stealFds(): number[]
    /* Methods of Gio.SocketControlMessage */
    getLevel(): number
    getMsgType(): number
    getSize(): number
    serialize(data: object): void
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
    /* Virtual methods of Gio.SocketControlMessage */
    vfuncGetLevel(): number
    vfuncGetSize(): number
    vfuncGetType(): number
    vfuncSerialize(data: object): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixFDMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixFDMessage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: UnixFDMessage_ConstructProps)
    _init (config?: UnixFDMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixFDMessage
    static newWithFdList(fdList: UnixFDList): UnixFDMessage
    static $gtype: GObject.Type
}
export interface UnixInputStream_ConstructProps extends InputStream_ConstructProps {
    closeFd?: boolean
    fd?: number
}
export class UnixInputStream {
    /* Properties of Gio.UnixInputStream */
    closeFd: boolean
    /* Fields of Gio.UnixInputStream */
    parentInstance: InputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.UnixInputStream */
    getCloseFd(): boolean
    getFd(): number
    setCloseFd(closeFd: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(buffer: any, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.UnixInputStream */
    vfuncGetFd(): number
    vfuncCanPoll(): boolean
    vfuncCreateSource(cancellable?: Cancellable | null): GLib.Source
    vfuncIsReadable(): boolean
    vfuncReadNonblocking(buffer: any | null): number
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish(result: AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSkipFinish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-fd", callback: (($obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: (($obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixInputStream_ConstructProps)
    _init (config?: UnixInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number, closeFd: boolean): UnixInputStream
    static $gtype: GObject.Type
}
export interface UnixMountMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class UnixMountMonitor {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.UnixMountMonitor */
    setRateLimit(limitMsec: number): void
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
    /* Signals of Gio.UnixMountMonitor */
    connect(sigName: "mountpoints-changed", callback: (($obj: UnixMountMonitor) => void)): number
    connect_after(sigName: "mountpoints-changed", callback: (($obj: UnixMountMonitor) => void)): number
    emit(sigName: "mountpoints-changed"): void
    on(sigName: "mountpoints-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mountpoints-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mountpoints-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mounts-changed", callback: (($obj: UnixMountMonitor) => void)): number
    connect_after(sigName: "mounts-changed", callback: (($obj: UnixMountMonitor) => void)): number
    emit(sigName: "mounts-changed"): void
    on(sigName: "mounts-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mounts-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mounts-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixMountMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixMountMonitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: UnixMountMonitor_ConstructProps)
    _init (config?: UnixMountMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixMountMonitor
    static get(): UnixMountMonitor
    static $gtype: GObject.Type
}
export interface UnixOutputStream_ConstructProps extends OutputStream_ConstructProps {
    closeFd?: boolean
    fd?: number
}
export class UnixOutputStream {
    /* Properties of Gio.UnixOutputStream */
    closeFd: boolean
    /* Fields of Gio.UnixOutputStream */
    parentInstance: OutputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.UnixOutputStream */
    getCloseFd(): boolean
    getFd(): number
    setCloseFd(closeFd: boolean): void
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: any, cancellable?: Cancellable | null): number
    writeAll(buffer: any, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: any, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    /* Virtual methods of Gio.UnixOutputStream */
    vfuncGetFd(): number
    vfuncCanPoll(): boolean
    vfuncCreateSource(cancellable?: Cancellable | null): GLib.Source
    vfuncIsWritable(): boolean
    vfuncWriteNonblocking(buffer: any | null): number
    vfuncWritevNonblocking(vectors: OutputVector[]): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncCloseFinish(result: AsyncResult): boolean
    vfuncCloseFn(cancellable?: Cancellable | null): boolean
    vfuncFlush(cancellable?: Cancellable | null): boolean
    vfuncFlushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncFlushFinish(result: AsyncResult): boolean
    vfuncSplice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfuncSpliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncSpliceFinish(result: AsyncResult): number
    vfuncWriteAsync(buffer: any | null, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWriteFinish(result: AsyncResult): number
    vfuncWriteFn(buffer: any | null, cancellable?: Cancellable | null): number
    vfuncWritevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfuncWritevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-fd", callback: (($obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: (($obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixOutputStream_ConstructProps)
    _init (config?: UnixOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number, closeFd: boolean): UnixOutputStream
    static $gtype: GObject.Type
}
export interface UnixSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
    abstract?: boolean
    addressType?: UnixSocketAddressType
    path?: string
    pathAsArray?: any
}
export class UnixSocketAddress {
    /* Properties of Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio.UnixSocketAddress */
    parentInstance: SocketAddress
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.UnixSocketAddress */
    getAddressType(): UnixSocketAddressType
    getIsAbstract(): boolean
    getPath(): string
    getPathLen(): number
    /* Methods of Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    /* Virtual methods of Gio.SocketAddress */
    vfuncGetFamily(): SocketFamily
    vfuncGetNativeSize(): number
    vfuncToNative(dest: object | null, destlen: number): boolean
    vfuncEnumerate(): SocketAddressEnumerator
    vfuncProxyEnumerate(): SocketAddressEnumerator
    vfuncToString(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: (($obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixSocketAddress_ConstructProps)
    _init (config?: UnixSocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string): UnixSocketAddress
    static newAbstract(path: number[]): UnixSocketAddress
    static newWithType(path: number[], type: UnixSocketAddressType): UnixSocketAddress
    static abstractNamesSupported(): boolean
    static $gtype: GObject.Type
}
export interface Vfs_ConstructProps extends GObject.Object_ConstructProps {
}
export class Vfs {
    /* Fields of Gio.Vfs */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.Vfs */
    getFileForPath(path: string): File
    getFileForUri(uri: string): File
    getSupportedUriSchemes(): string[]
    isActive(): boolean
    parseName(parseName: string): File
    registerUriScheme(scheme: string, uriFunc?: VfsFileLookupFunc | null, parseNameFunc?: VfsFileLookupFunc | null): boolean
    unregisterUriScheme(scheme: string): boolean
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
    /* Virtual methods of Gio.Vfs */
    vfuncAddWritableNamespaces(list: FileAttributeInfoList): void
    vfuncGetFileForPath(path: string): File
    vfuncGetFileForUri(uri: string): File
    vfuncGetSupportedUriSchemes(): string[]
    vfuncIsActive(): boolean
    vfuncLocalFileAddInfo(filename: string, device: number, attributeMatcher: FileAttributeMatcher, info: FileInfo, cancellable: Cancellable | null, extraData: object | null, freeExtraData: GLib.DestroyNotify): void
    vfuncLocalFileMoved(source: string, dest: string): void
    vfuncLocalFileRemoved(filename: string): void
    vfuncLocalFileSetAttributes(filename: string, info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    vfuncParseName(parseName: string): File
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Vfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Vfs, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Vfs_ConstructProps)
    _init (config?: Vfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Vfs
    static getLocal(): Vfs
    static $gtype: GObject.Type
}
export interface VolumeMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class VolumeMonitor {
    /* Fields of Gio.VolumeMonitor */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.VolumeMonitor */
    getConnectedDrives(): Drive[]
    getMountForUuid(uuid: string): Mount | null
    getMounts(): Mount[]
    getVolumeForUuid(uuid: string): Volume | null
    getVolumes(): Volume[]
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
    /* Virtual methods of Gio.VolumeMonitor */
    vfuncDriveChanged(drive: Drive): void
    vfuncDriveConnected(drive: Drive): void
    vfuncDriveDisconnected(drive: Drive): void
    vfuncDriveEjectButton(drive: Drive): void
    vfuncDriveStopButton(drive: Drive): void
    vfuncGetConnectedDrives(): Drive[]
    vfuncGetMountForUuid(uuid: string): Mount | null
    vfuncGetMounts(): Mount[]
    vfuncGetVolumeForUuid(uuid: string): Volume | null
    vfuncGetVolumes(): Volume[]
    vfuncMountAdded(mount: Mount): void
    vfuncMountChanged(mount: Mount): void
    vfuncMountPreUnmount(mount: Mount): void
    vfuncMountRemoved(mount: Mount): void
    vfuncVolumeAdded(volume: Volume): void
    vfuncVolumeChanged(volume: Volume): void
    vfuncVolumeRemoved(volume: Volume): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.VolumeMonitor */
    connect(sigName: "drive-changed", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-changed", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-changed", drive: Drive): void
    on(sigName: "drive-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drive-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drive-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drive-connected", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-connected", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-connected", drive: Drive): void
    on(sigName: "drive-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drive-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drive-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drive-disconnected", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-disconnected", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-disconnected", drive: Drive): void
    on(sigName: "drive-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drive-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drive-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drive-eject-button", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-eject-button", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-eject-button", drive: Drive): void
    on(sigName: "drive-eject-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drive-eject-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drive-eject-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drive-stop-button", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-stop-button", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-stop-button", drive: Drive): void
    on(sigName: "drive-stop-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drive-stop-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drive-stop-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mount-added", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-added", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-added", mount: Mount): void
    on(sigName: "mount-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mount-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mount-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mount-changed", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-changed", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-changed", mount: Mount): void
    on(sigName: "mount-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mount-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mount-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mount-pre-unmount", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-pre-unmount", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-pre-unmount", mount: Mount): void
    on(sigName: "mount-pre-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mount-pre-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mount-pre-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mount-removed", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-removed", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-removed", mount: Mount): void
    on(sigName: "mount-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mount-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mount-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "volume-added", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-added", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-added", volume: Volume): void
    on(sigName: "volume-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "volume-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "volume-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "volume-changed", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-changed", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-changed", volume: Volume): void
    on(sigName: "volume-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "volume-removed", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-removed", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-removed", volume: Volume): void
    on(sigName: "volume-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "volume-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "volume-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VolumeMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VolumeMonitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: VolumeMonitor_ConstructProps)
    _init (config?: VolumeMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static adoptOrphanMount(mount: Mount): Volume
    static get(): VolumeMonitor
    static $gtype: GObject.Type
}
export interface ZlibCompressor_ConstructProps extends GObject.Object_ConstructProps {
    fileInfo?: FileInfo
    format?: ZlibCompressorFormat
    level?: number
}
export class ZlibCompressor {
    /* Properties of Gio.ZlibCompressor */
    fileInfo: FileInfo
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.ZlibCompressor */
    getFileInfo(): FileInfo | null
    setFileInfo(fileInfo?: FileInfo | null): void
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
    /* Methods of Gio.Converter */
    convert(inbuf: any, outbuf: any, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    reset(): void
    /* Virtual methods of Gio.ZlibCompressor */
    vfuncConvert(inbuf: any | null, outbuf: any | null, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    vfuncReset(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-info", callback: (($obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-info", callback: (($obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ZlibCompressor_ConstructProps)
    _init (config?: ZlibCompressor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: ZlibCompressorFormat, level: number): ZlibCompressor
    static $gtype: GObject.Type
}
export interface ZlibDecompressor_ConstructProps extends GObject.Object_ConstructProps {
    format?: ZlibCompressorFormat
}
export class ZlibDecompressor {
    /* Properties of Gio.ZlibDecompressor */
    readonly fileInfo: FileInfo
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.ZlibDecompressor */
    getFileInfo(): FileInfo | null
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
    /* Methods of Gio.Converter */
    convert(inbuf: any, outbuf: any, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    reset(): void
    /* Virtual methods of Gio.ZlibDecompressor */
    vfuncConvert(inbuf: any | null, outbuf: any | null, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    vfuncReset(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-info", callback: (($obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-info", callback: (($obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ZlibDecompressor_ConstructProps)
    _init (config?: ZlibDecompressor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: ZlibCompressorFormat): ZlibDecompressor
    static $gtype: GObject.Type
}
export class ActionEntry {
    /* Fields of Gio.ActionEntry */
    name: string
    activate: (action: SimpleAction, parameter: GLib.Variant) => void
    parameterType: string
    state: string
    changeState: (action: SimpleAction, value: GLib.Variant) => void
    static name: string
}
export abstract class ActionGroupInterface {
    /* Fields of Gio.ActionGroupInterface */
    gIface: GObject.TypeInterface
    hasAction: (actionGroup: ActionGroup, actionName: string) => boolean
    listActions: (actionGroup: ActionGroup) => string[]
    getActionEnabled: (actionGroup: ActionGroup, actionName: string) => boolean
    getActionParameterType: (actionGroup: ActionGroup, actionName: string) => GLib.VariantType | null
    getActionStateType: (actionGroup: ActionGroup, actionName: string) => GLib.VariantType | null
    getActionStateHint: (actionGroup: ActionGroup, actionName: string) => GLib.Variant | null
    getActionState: (actionGroup: ActionGroup, actionName: string) => GLib.Variant | null
    changeActionState: (actionGroup: ActionGroup, actionName: string, value: GLib.Variant) => void
    activateAction: (actionGroup: ActionGroup, actionName: string, parameter?: GLib.Variant | null) => void
    actionAdded: (actionGroup: ActionGroup, actionName: string) => void
    actionRemoved: (actionGroup: ActionGroup, actionName: string) => void
    actionEnabledChanged: (actionGroup: ActionGroup, actionName: string, enabled: boolean) => void
    actionStateChanged: (actionGroup: ActionGroup, actionName: string, state: GLib.Variant) => void
    queryAction: (actionGroup: ActionGroup, actionName: string) => [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    static name: string
}
export abstract class ActionInterface {
    /* Fields of Gio.ActionInterface */
    gIface: GObject.TypeInterface
    getName: (action: Action) => string
    getParameterType: (action: Action) => GLib.VariantType | null
    getStateType: (action: Action) => GLib.VariantType | null
    getStateHint: (action: Action) => GLib.Variant | null
    getEnabled: (action: Action) => boolean
    getState: (action: Action) => GLib.Variant | null
    changeState: (action: Action, value: GLib.Variant) => void
    activate: (action: Action, parameter?: GLib.Variant | null) => void
    static name: string
}
export abstract class ActionMapInterface {
    /* Fields of Gio.ActionMapInterface */
    gIface: GObject.TypeInterface
    lookupAction: (actionMap: ActionMap, actionName: string) => Action | null
    addAction: (actionMap: ActionMap, action: Action) => void
    removeAction: (actionMap: ActionMap, actionName: string) => void
    static name: string
}
export abstract class AppInfoIface {
    /* Fields of Gio.AppInfoIface */
    gIface: GObject.TypeInterface
    dup: (appinfo: AppInfo) => AppInfo
    equal: (appinfo1: AppInfo, appinfo2: AppInfo) => boolean
    getId: (appinfo: AppInfo) => string | null
    getName: (appinfo: AppInfo) => string
    getDescription: (appinfo: AppInfo) => string | null
    getExecutable: (appinfo: AppInfo) => string
    getIcon: (appinfo: AppInfo) => Icon | null
    launch: (appinfo: AppInfo, files?: File[] | null, context?: AppLaunchContext | null) => boolean
    supportsUris: (appinfo: AppInfo) => boolean
    supportsFiles: (appinfo: AppInfo) => boolean
    launchUris: (appinfo: AppInfo, uris?: string[] | null, context?: AppLaunchContext | null) => boolean
    shouldShow: (appinfo: AppInfo) => boolean
    setAsDefaultForType: (appinfo: AppInfo, contentType: string) => boolean
    setAsDefaultForExtension: (appinfo: AppInfo, extension: string) => boolean
    addSupportsType: (appinfo: AppInfo, contentType: string) => boolean
    canRemoveSupportsType: (appinfo: AppInfo) => boolean
    removeSupportsType: (appinfo: AppInfo, contentType: string) => boolean
    canDelete: (appinfo: AppInfo) => boolean
    doDelete: (appinfo: AppInfo) => boolean
    getCommandline: (appinfo: AppInfo) => string | null
    getDisplayName: (appinfo: AppInfo) => string
    setAsLastUsedForType: (appinfo: AppInfo, contentType: string) => boolean
    getSupportedTypes: (appinfo: AppInfo) => string[]
    launchUrisAsync: (appinfo: AppInfo, uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    launchUrisFinish: (appinfo: AppInfo, result: AsyncResult) => boolean
    static name: string
}
export abstract class AppLaunchContextClass {
    /* Fields of Gio.AppLaunchContextClass */
    parentClass: GObject.ObjectClass
    getDisplay: (context: AppLaunchContext, info: AppInfo, files: File[]) => string | null
    getStartupNotifyId: (context: AppLaunchContext, info: AppInfo, files: File[]) => string | null
    launchFailed: (context: AppLaunchContext, startupNotifyId: string) => void
    launched: (context: AppLaunchContext, info: AppInfo, platformData: GLib.Variant) => void
    static name: string
}
export class AppLaunchContextPrivate {
    static name: string
}
export abstract class ApplicationClass {
    /* Fields of Gio.ApplicationClass */
    startup: (application: Application) => void
    activate: (application: Application) => void
    open: (application: Application, files: File[], hint: string) => void
    commandLine: (application: Application, commandLine: ApplicationCommandLine) => number
    localCommandLine: (application: Application, arguments_: string[]) => [ /* returnType */ boolean, /* arguments_ */ string[], /* exitStatus */ number ]
    beforeEmit: (application: Application, platformData: GLib.Variant) => void
    afterEmit: (application: Application, platformData: GLib.Variant) => void
    addPlatformData: (application: Application, builder: GLib.VariantBuilder) => void
    quitMainloop: (application: Application) => void
    runMainloop: (application: Application) => void
    shutdown: (application: Application) => void
    dbusRegister: (application: Application, connection: DBusConnection, objectPath: string) => boolean
    dbusUnregister: (application: Application, connection: DBusConnection, objectPath: string) => void
    handleLocalOptions: (application: Application, options: GLib.VariantDict) => number
    nameLost: (application: Application) => boolean
    static name: string
}
export abstract class ApplicationCommandLineClass {
    /* Fields of Gio.ApplicationCommandLineClass */
    printLiteral: (cmdline: ApplicationCommandLine, message: string) => void
    printerrLiteral: (cmdline: ApplicationCommandLine, message: string) => void
    getStdin: (cmdline: ApplicationCommandLine) => InputStream | null
    static name: string
}
export class ApplicationCommandLinePrivate {
    static name: string
}
export class ApplicationPrivate {
    static name: string
}
export abstract class AsyncInitableIface {
    /* Fields of Gio.AsyncInitableIface */
    gIface: GObject.TypeInterface
    initAsync: (initable: AsyncInitable, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    initFinish: (initable: AsyncInitable, res: AsyncResult) => boolean
    static name: string
}
export abstract class AsyncResultIface {
    /* Fields of Gio.AsyncResultIface */
    gIface: GObject.TypeInterface
    getUserData: (res: AsyncResult) => object | null
    getSourceObject: (res: AsyncResult) => GObject.Object | null
    isTagged: (res: AsyncResult, sourceTag?: object | null) => boolean
    static name: string
}
export abstract class BufferedInputStreamClass {
    /* Fields of Gio.BufferedInputStreamClass */
    parentClass: FilterInputStreamClass
    fill: (stream: BufferedInputStream, count: number, cancellable?: Cancellable | null) => number
    fillAsync: (stream: BufferedInputStream, count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    fillFinish: (stream: BufferedInputStream, result: AsyncResult) => number
    static name: string
}
export class BufferedInputStreamPrivate {
    static name: string
}
export abstract class BufferedOutputStreamClass {
    /* Fields of Gio.BufferedOutputStreamClass */
    parentClass: FilterOutputStreamClass
    static name: string
}
export class BufferedOutputStreamPrivate {
    static name: string
}
export abstract class CancellableClass {
    /* Fields of Gio.CancellableClass */
    parentClass: GObject.ObjectClass
    cancelled: (cancellable?: Cancellable | null) => void
    static name: string
}
export class CancellablePrivate {
    static name: string
}
export abstract class CharsetConverterClass {
    /* Fields of Gio.CharsetConverterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ConverterIface {
    /* Fields of Gio.ConverterIface */
    gIface: GObject.TypeInterface
    convert: (converter: Converter, inbuf: any | null, outbuf: any | null, flags: ConverterFlags) => [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    reset: (converter: Converter) => void
    static name: string
}
export abstract class ConverterInputStreamClass {
    /* Fields of Gio.ConverterInputStreamClass */
    parentClass: FilterInputStreamClass
    static name: string
}
export class ConverterInputStreamPrivate {
    static name: string
}
export abstract class ConverterOutputStreamClass {
    /* Fields of Gio.ConverterOutputStreamClass */
    parentClass: FilterOutputStreamClass
    static name: string
}
export class ConverterOutputStreamPrivate {
    static name: string
}
export abstract class CredentialsClass {
    static name: string
}
export class DBusAnnotationInfo {
    /* Fields of Gio.DBusAnnotationInfo */
    refCount: number
    key: string
    value: string
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusAnnotationInfo */
    ref(): DBusAnnotationInfo
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static lookup(annotations: DBusAnnotationInfo[] | null, name: string): string | null
}
export class DBusArgInfo {
    /* Fields of Gio.DBusArgInfo */
    refCount: number
    name: string
    signature: string
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusArgInfo */
    ref(): DBusArgInfo
    unref(): void
    static name: string
}
export class DBusErrorEntry {
    /* Fields of Gio.DBusErrorEntry */
    errorCode: number
    dbusErrorName: string
    static name: string
}
export abstract class DBusInterfaceIface {
    /* Fields of Gio.DBusInterfaceIface */
    parentIface: GObject.TypeInterface
    getInfo: (interface: DBusInterface) => DBusInterfaceInfo
    getObject: (interface: DBusInterface) => DBusObject | null
    setObject: (interface: DBusInterface, object?: DBusObject | null) => void
    dupObject: (interface: DBusInterface) => DBusObject | null
    static name: string
}
export class DBusInterfaceInfo {
    /* Fields of Gio.DBusInterfaceInfo */
    refCount: number
    name: string
    methods: DBusMethodInfo[]
    signals: DBusSignalInfo[]
    properties: DBusPropertyInfo[]
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusInterfaceInfo */
    cacheBuild(): void
    cacheRelease(): void
    generateXml(indent: number, stringBuilder: GLib.String): void
    lookupMethod(name: string): DBusMethodInfo | null
    lookupProperty(name: string): DBusPropertyInfo | null
    lookupSignal(name: string): DBusSignalInfo | null
    ref(): DBusInterfaceInfo
    unref(): void
    static name: string
}
export abstract class DBusInterfaceSkeletonClass {
    /* Fields of Gio.DBusInterfaceSkeletonClass */
    parentClass: GObject.ObjectClass
    getInfo: (interface: DBusInterfaceSkeleton) => DBusInterfaceInfo
    getProperties: (interface: DBusInterfaceSkeleton) => GLib.Variant
    flush: (interface: DBusInterfaceSkeleton) => void
    gAuthorizeMethod: (interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean
    static name: string
}
export class DBusInterfaceSkeletonPrivate {
    static name: string
}
export class DBusInterfaceVTable {
    /* Fields of Gio.DBusInterfaceVTable */
    methodCall: DBusInterfaceMethodCallFunc
    getProperty: DBusInterfaceGetPropertyFunc
    setProperty: DBusInterfaceSetPropertyFunc
    static name: string
}
export class DBusMethodInfo {
    /* Fields of Gio.DBusMethodInfo */
    refCount: number
    name: string
    inArgs: DBusArgInfo[]
    outArgs: DBusArgInfo[]
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusMethodInfo */
    ref(): DBusMethodInfo
    unref(): void
    static name: string
}
export class DBusNodeInfo {
    /* Fields of Gio.DBusNodeInfo */
    refCount: number
    path: string
    interfaces: DBusInterfaceInfo[]
    nodes: DBusNodeInfo[]
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusNodeInfo */
    generateXml(indent: number, stringBuilder: GLib.String): void
    lookupInterface(name: string): DBusInterfaceInfo | null
    ref(): DBusNodeInfo
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newForXml(xmlData: string): DBusNodeInfo
}
export abstract class DBusObjectIface {
    /* Fields of Gio.DBusObjectIface */
    parentIface: GObject.TypeInterface
    getObjectPath: (object: DBusObject) => string
    getInterfaces: (object: DBusObject) => DBusInterface[]
    getInterface: (object: DBusObject, interfaceName: string) => DBusInterface | null
    interfaceAdded: (object: DBusObject, interface: DBusInterface) => void
    interfaceRemoved: (object: DBusObject, interface: DBusInterface) => void
    static name: string
}
export abstract class DBusObjectManagerClientClass {
    /* Fields of Gio.DBusObjectManagerClientClass */
    parentClass: GObject.ObjectClass
    interfaceProxySignal: (manager: DBusObjectManagerClient, objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void
    interfaceProxyPropertiesChanged: (manager: DBusObjectManagerClient, objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string) => void
    static name: string
}
export class DBusObjectManagerClientPrivate {
    static name: string
}
export abstract class DBusObjectManagerIface {
    /* Fields of Gio.DBusObjectManagerIface */
    parentIface: GObject.TypeInterface
    getObjectPath: (manager: DBusObjectManager) => string
    getObjects: (manager: DBusObjectManager) => DBusObject[]
    getObject: (manager: DBusObjectManager, objectPath: string) => DBusObject
    getInterface: (manager: DBusObjectManager, objectPath: string, interfaceName: string) => DBusInterface
    objectAdded: (manager: DBusObjectManager, object: DBusObject) => void
    objectRemoved: (manager: DBusObjectManager, object: DBusObject) => void
    interfaceAdded: (manager: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void
    interfaceRemoved: (manager: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void
    static name: string
}
export abstract class DBusObjectManagerServerClass {
    /* Fields of Gio.DBusObjectManagerServerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DBusObjectManagerServerPrivate {
    static name: string
}
export abstract class DBusObjectProxyClass {
    /* Fields of Gio.DBusObjectProxyClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DBusObjectProxyPrivate {
    static name: string
}
export abstract class DBusObjectSkeletonClass {
    /* Fields of Gio.DBusObjectSkeletonClass */
    parentClass: GObject.ObjectClass
    authorizeMethod: (object: DBusObjectSkeleton, interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean
    static name: string
}
export class DBusObjectSkeletonPrivate {
    static name: string
}
export class DBusPropertyInfo {
    /* Fields of Gio.DBusPropertyInfo */
    refCount: number
    name: string
    signature: string
    flags: DBusPropertyInfoFlags
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusPropertyInfo */
    ref(): DBusPropertyInfo
    unref(): void
    static name: string
}
export abstract class DBusProxyClass {
    /* Fields of Gio.DBusProxyClass */
    gPropertiesChanged: (proxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string) => void
    gSignal: (proxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void
    static name: string
}
export class DBusProxyPrivate {
    static name: string
}
export class DBusSignalInfo {
    /* Fields of Gio.DBusSignalInfo */
    refCount: number
    name: string
    args: DBusArgInfo[]
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusSignalInfo */
    ref(): DBusSignalInfo
    unref(): void
    static name: string
}
export class DBusSubtreeVTable {
    /* Fields of Gio.DBusSubtreeVTable */
    enumerate: DBusSubtreeEnumerateFunc
    introspect: DBusSubtreeIntrospectFunc
    dispatch: DBusSubtreeDispatchFunc
    static name: string
}
export abstract class DataInputStreamClass {
    /* Fields of Gio.DataInputStreamClass */
    parentClass: BufferedInputStreamClass
    static name: string
}
export class DataInputStreamPrivate {
    static name: string
}
export abstract class DataOutputStreamClass {
    /* Fields of Gio.DataOutputStreamClass */
    parentClass: FilterOutputStreamClass
    static name: string
}
export class DataOutputStreamPrivate {
    static name: string
}
export abstract class DatagramBasedInterface {
    /* Fields of Gio.DatagramBasedInterface */
    gIface: GObject.TypeInterface
    receiveMessages: (datagramBased: DatagramBased, messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null) => number
    sendMessages: (datagramBased: DatagramBased, messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null) => number
    createSource: (datagramBased: DatagramBased, condition: GLib.IOCondition, cancellable?: Cancellable | null) => GLib.Source
    conditionCheck: (datagramBased: DatagramBased, condition: GLib.IOCondition) => GLib.IOCondition
    conditionWait: (datagramBased: DatagramBased, condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null) => boolean
    static name: string
}
export abstract class DesktopAppInfoClass {
    /* Fields of Gio.DesktopAppInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class DesktopAppInfoLookupIface {
    /* Fields of Gio.DesktopAppInfoLookupIface */
    gIface: GObject.TypeInterface
    getDefaultForUriScheme: (lookup: DesktopAppInfoLookup, uriScheme: string) => AppInfo | null
    static name: string
}
export abstract class DriveIface {
    /* Fields of Gio.DriveIface */
    gIface: GObject.TypeInterface
    changed: (drive: Drive) => void
    disconnected: (drive: Drive) => void
    ejectButton: (drive: Drive) => void
    getName: (drive: Drive) => string
    getIcon: (drive: Drive) => Icon
    hasVolumes: (drive: Drive) => boolean
    getVolumes: (drive: Drive) => Volume[]
    isMediaRemovable: (drive: Drive) => boolean
    hasMedia: (drive: Drive) => boolean
    isMediaCheckAutomatic: (drive: Drive) => boolean
    canEject: (drive: Drive) => boolean
    canPollForMedia: (drive: Drive) => boolean
    eject: (drive: Drive, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    ejectFinish: (drive: Drive, result: AsyncResult) => boolean
    pollForMedia: (drive: Drive, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    pollForMediaFinish: (drive: Drive, result: AsyncResult) => boolean
    getIdentifier: (drive: Drive, kind: string) => string | null
    enumerateIdentifiers: (drive: Drive) => string[]
    getStartStopType: (drive: Drive) => DriveStartStopType
    canStart: (drive: Drive) => boolean
    canStartDegraded: (drive: Drive) => boolean
    start: (drive: Drive, flags: DriveStartFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    startFinish: (drive: Drive, result: AsyncResult) => boolean
    canStop: (drive: Drive) => boolean
    stop: (drive: Drive, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    stopFinish: (drive: Drive, result: AsyncResult) => boolean
    stopButton: (drive: Drive) => void
    ejectWithOperation: (drive: Drive, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    ejectWithOperationFinish: (drive: Drive, result: AsyncResult) => boolean
    getSortKey: (drive: Drive) => string | null
    getSymbolicIcon: (drive: Drive) => Icon
    isRemovable: (drive: Drive) => boolean
    static name: string
}
export abstract class DtlsClientConnectionInterface {
    /* Fields of Gio.DtlsClientConnectionInterface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class DtlsConnectionInterface {
    /* Fields of Gio.DtlsConnectionInterface */
    gIface: GObject.TypeInterface
    acceptCertificate: (connection: DtlsConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean
    handshake: (conn: DtlsConnection, cancellable?: Cancellable | null) => boolean
    handshakeAsync: (conn: DtlsConnection, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    handshakeFinish: (conn: DtlsConnection, result: AsyncResult) => boolean
    shutdown: (conn: DtlsConnection, shutdownRead: boolean, shutdownWrite: boolean, cancellable?: Cancellable | null) => boolean
    shutdownAsync: (conn: DtlsConnection, shutdownRead: boolean, shutdownWrite: boolean, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    shutdownFinish: (conn: DtlsConnection, result: AsyncResult) => boolean
    setAdvertisedProtocols: (conn: DtlsConnection, protocols?: string[] | null) => void
    getNegotiatedProtocol: (conn: DtlsConnection) => string | null
    getBindingData: (conn: DtlsConnection, type: TlsChannelBindingType, data: any) => boolean
    static name: string
}
export abstract class DtlsServerConnectionInterface {
    /* Fields of Gio.DtlsServerConnectionInterface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class EmblemClass {
    static name: string
}
export abstract class EmblemedIconClass {
    /* Fields of Gio.EmblemedIconClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class EmblemedIconPrivate {
    static name: string
}
export class FileAttributeInfo {
    /* Fields of Gio.FileAttributeInfo */
    name: string
    type: FileAttributeType
    flags: FileAttributeInfoFlags
    static name: string
}
export class FileAttributeInfoList {
    /* Fields of Gio.FileAttributeInfoList */
    infos: FileAttributeInfo
    nInfos: number
    /* Methods of Gio.FileAttributeInfoList */
    add(name: string, type: FileAttributeType, flags: FileAttributeInfoFlags): void
    dup(): FileAttributeInfoList
    lookup(name: string): FileAttributeInfo
    ref(): FileAttributeInfoList
    unref(): void
    static name: string
    static new(): FileAttributeInfoList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FileAttributeInfoList
}
export class FileAttributeMatcher {
    /* Methods of Gio.FileAttributeMatcher */
    enumerateNamespace(ns: string): boolean
    enumerateNext(): string | null
    matches(attribute: string): boolean
    matchesOnly(attribute: string): boolean
    ref(): FileAttributeMatcher
    subtract(subtract?: FileAttributeMatcher | null): FileAttributeMatcher | null
    unref(): void
    static name: string
    static new(attributes: string): FileAttributeMatcher
    constructor(attributes: string)
    /* Static methods and pseudo-constructors */
    static new(attributes: string): FileAttributeMatcher
}
export abstract class FileDescriptorBasedIface {
    /* Fields of Gio.FileDescriptorBasedIface */
    gIface: GObject.TypeInterface
    getFd: (fdBased: FileDescriptorBased) => number
    static name: string
}
export abstract class FileEnumeratorClass {
    /* Fields of Gio.FileEnumeratorClass */
    parentClass: GObject.ObjectClass
    nextFile: (enumerator: FileEnumerator, cancellable?: Cancellable | null) => FileInfo | null
    closeFn: (enumerator: FileEnumerator, cancellable?: Cancellable | null) => boolean
    nextFilesAsync: (enumerator: FileEnumerator, numFiles: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    nextFilesFinish: (enumerator: FileEnumerator, result: AsyncResult) => FileInfo[]
    closeAsync: (enumerator: FileEnumerator, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    closeFinish: (enumerator: FileEnumerator, result: AsyncResult) => boolean
    static name: string
}
export class FileEnumeratorPrivate {
    static name: string
}
export abstract class FileIOStreamClass {
    /* Fields of Gio.FileIOStreamClass */
    parentClass: IOStreamClass
    tell: (stream: FileIOStream) => number
    canSeek: (stream: FileIOStream) => boolean
    seek: (stream: FileIOStream, offset: number, type: GLib.SeekType, cancellable?: Cancellable | null) => boolean
    canTruncate: (stream: FileIOStream) => boolean
    truncateFn: (stream: FileIOStream, size: number, cancellable?: Cancellable | null) => boolean
    queryInfo: (stream: FileIOStream, attributes: string, cancellable?: Cancellable | null) => FileInfo
    queryInfoAsync: (stream: FileIOStream, attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    queryInfoFinish: (stream: FileIOStream, result: AsyncResult) => FileInfo
    getEtag: (stream: FileIOStream) => string | null
    static name: string
}
export class FileIOStreamPrivate {
    static name: string
}
export abstract class FileIconClass {
    static name: string
}
export abstract class FileIface {
    /* Fields of Gio.FileIface */
    gIface: GObject.TypeInterface
    dup: (file: File) => File
    hash: (file: File) => number
    equal: (file1: File, file2: File) => boolean
    isNative: (file: File) => boolean
    hasUriScheme: (file: File, uriScheme: string) => boolean
    getUriScheme: (file: File) => string | null
    getBasename: (file: File) => string | null
    getPath: (file: File) => string | null
    getUri: (file: File) => string
    getParseName: (file: File) => string
    getParent: (file: File) => File | null
    prefixMatches: (prefix: File, file: File) => boolean
    getRelativePath: (parent: File, descendant: File) => string | null
    resolveRelativePath: (file: File, relativePath: string) => File
    getChildForDisplayName: (file: File, displayName: string) => File
    enumerateChildren: (file: File, attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null) => FileEnumerator
    enumerateChildrenAsync: (file: File, attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    enumerateChildrenFinish: (file: File, res: AsyncResult) => FileEnumerator
    queryInfo: (file: File, attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null) => FileInfo
    queryInfoAsync: (file: File, attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    queryInfoFinish: (file: File, res: AsyncResult) => FileInfo
    queryFilesystemInfo: (file: File, attributes: string, cancellable?: Cancellable | null) => FileInfo
    queryFilesystemInfoAsync: (file: File, attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    queryFilesystemInfoFinish: (file: File, res: AsyncResult) => FileInfo
    findEnclosingMount: (file: File, cancellable?: Cancellable | null) => Mount
    findEnclosingMountAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    findEnclosingMountFinish: (file: File, res: AsyncResult) => Mount
    setDisplayName: (file: File, displayName: string, cancellable?: Cancellable | null) => File
    setDisplayNameAsync: (file: File, displayName: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    setDisplayNameFinish: (file: File, res: AsyncResult) => File
    querySettableAttributes: (file: File, cancellable?: Cancellable | null) => FileAttributeInfoList
    queryWritableNamespaces: (file: File, cancellable?: Cancellable | null) => FileAttributeInfoList
    setAttribute: (file: File, attribute: string, type: FileAttributeType, valueP: object | null, flags: FileQueryInfoFlags, cancellable?: Cancellable | null) => boolean
    setAttributesFromInfo: (file: File, info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null) => boolean
    setAttributesAsync: (file: File, info: FileInfo, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    setAttributesFinish: (file: File, result: AsyncResult) => [ /* returnType */ boolean, /* info */ FileInfo ]
    readFn: (file: File, cancellable?: Cancellable | null) => FileInputStream
    readAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readFinish: (file: File, res: AsyncResult) => FileInputStream
    appendTo: (file: File, flags: FileCreateFlags, cancellable?: Cancellable | null) => FileOutputStream
    appendToAsync: (file: File, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    appendToFinish: (file: File, res: AsyncResult) => FileOutputStream
    create: (file: File, flags: FileCreateFlags, cancellable?: Cancellable | null) => FileOutputStream
    createAsync: (file: File, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    createFinish: (file: File, res: AsyncResult) => FileOutputStream
    replace: (file: File, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null) => FileOutputStream
    replaceAsync: (file: File, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    replaceFinish: (file: File, res: AsyncResult) => FileOutputStream
    deleteFile: (file: File, cancellable?: Cancellable | null) => boolean
    deleteFileAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    deleteFileFinish: (file: File, result: AsyncResult) => boolean
    trash: (file: File, cancellable?: Cancellable | null) => boolean
    trashAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    trashFinish: (file: File, result: AsyncResult) => boolean
    makeDirectory: (file: File, cancellable?: Cancellable | null) => boolean
    makeDirectoryAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    makeDirectoryFinish: (file: File, result: AsyncResult) => boolean
    makeSymbolicLink: (file: File, symlinkValue: string, cancellable?: Cancellable | null) => boolean
    copy: (source: File, destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progressCallback?: FileProgressCallback | null) => boolean
    copyAsync: (source: File, destination: File, flags: FileCopyFlags, ioPriority: number, cancellable?: Cancellable | null) => void
    copyFinish: (file: File, res: AsyncResult) => boolean
    move: (source: File, destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progressCallback?: FileProgressCallback | null) => boolean
    mountMountable: (file: File, flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    mountMountableFinish: (file: File, result: AsyncResult) => File
    unmountMountable: (file: File, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    unmountMountableFinish: (file: File, result: AsyncResult) => boolean
    ejectMountable: (file: File, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    ejectMountableFinish: (file: File, result: AsyncResult) => boolean
    mountEnclosingVolume: (location: File, flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    mountEnclosingVolumeFinish: (location: File, result: AsyncResult) => boolean
    monitorDir: (file: File, flags: FileMonitorFlags, cancellable?: Cancellable | null) => FileMonitor
    monitorFile: (file: File, flags: FileMonitorFlags, cancellable?: Cancellable | null) => FileMonitor
    openReadwrite: (file: File, cancellable?: Cancellable | null) => FileIOStream
    openReadwriteAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    openReadwriteFinish: (file: File, res: AsyncResult) => FileIOStream
    createReadwrite: (file: File, flags: FileCreateFlags, cancellable?: Cancellable | null) => FileIOStream
    createReadwriteAsync: (file: File, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    createReadwriteFinish: (file: File, res: AsyncResult) => FileIOStream
    replaceReadwrite: (file: File, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null) => FileIOStream
    replaceReadwriteAsync: (file: File, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    replaceReadwriteFinish: (file: File, res: AsyncResult) => FileIOStream
    startMountable: (file: File, flags: DriveStartFlags, startOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    startMountableFinish: (file: File, result: AsyncResult) => boolean
    stopMountable: (file: File, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    stopMountableFinish: (file: File, result: AsyncResult) => boolean
    supportsThreadContexts: boolean
    unmountMountableWithOperation: (file: File, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    unmountMountableWithOperationFinish: (file: File, result: AsyncResult) => boolean
    ejectMountableWithOperation: (file: File, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    ejectMountableWithOperationFinish: (file: File, result: AsyncResult) => boolean
    pollMountable: (file: File, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    pollMountableFinish: (file: File, result: AsyncResult) => boolean
    measureDiskUsageFinish: (file: File, result: AsyncResult) => [ /* returnType */ boolean, /* diskUsage */ number | null, /* numDirs */ number | null, /* numFiles */ number | null ]
    static name: string
}
export abstract class FileInfoClass {
    static name: string
}
export abstract class FileInputStreamClass {
    /* Fields of Gio.FileInputStreamClass */
    parentClass: InputStreamClass
    tell: (stream: FileInputStream) => number
    canSeek: (stream: FileInputStream) => boolean
    seek: (stream: FileInputStream, offset: number, type: GLib.SeekType, cancellable?: Cancellable | null) => boolean
    queryInfo: (stream: FileInputStream, attributes: string, cancellable?: Cancellable | null) => FileInfo
    queryInfoAsync: (stream: FileInputStream, attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    queryInfoFinish: (stream: FileInputStream, result: AsyncResult) => FileInfo
    static name: string
}
export class FileInputStreamPrivate {
    static name: string
}
export abstract class FileMonitorClass {
    /* Fields of Gio.FileMonitorClass */
    parentClass: GObject.ObjectClass
    changed: (monitor: FileMonitor, file: File, otherFile: File, eventType: FileMonitorEvent) => void
    cancel: (monitor: FileMonitor) => boolean
    static name: string
}
export class FileMonitorPrivate {
    static name: string
}
export abstract class FileOutputStreamClass {
    /* Fields of Gio.FileOutputStreamClass */
    parentClass: OutputStreamClass
    tell: (stream: FileOutputStream) => number
    canSeek: (stream: FileOutputStream) => boolean
    seek: (stream: FileOutputStream, offset: number, type: GLib.SeekType, cancellable?: Cancellable | null) => boolean
    canTruncate: (stream: FileOutputStream) => boolean
    truncateFn: (stream: FileOutputStream, size: number, cancellable?: Cancellable | null) => boolean
    queryInfo: (stream: FileOutputStream, attributes: string, cancellable?: Cancellable | null) => FileInfo
    queryInfoAsync: (stream: FileOutputStream, attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    queryInfoFinish: (stream: FileOutputStream, result: AsyncResult) => FileInfo
    getEtag: (stream: FileOutputStream) => string | null
    static name: string
}
export class FileOutputStreamPrivate {
    static name: string
}
export abstract class FilenameCompleterClass {
    /* Fields of Gio.FilenameCompleterClass */
    parentClass: GObject.ObjectClass
    gotCompletionData: (filenameCompleter: FilenameCompleter) => void
    static name: string
}
export abstract class FilterInputStreamClass {
    /* Fields of Gio.FilterInputStreamClass */
    parentClass: InputStreamClass
    static name: string
}
export abstract class FilterOutputStreamClass {
    /* Fields of Gio.FilterOutputStreamClass */
    parentClass: OutputStreamClass
    static name: string
}
export class IOExtension {
    /* Methods of Gio.IOExtension */
    getName(): string
    getPriority(): number
    getType(): GObject.Type
    static name: string
}
export class IOExtensionPoint {
    /* Methods of Gio.IOExtensionPoint */
    getExtensionByName(name: string): IOExtension
    getExtensions(): IOExtension[]
    getRequiredType(): GObject.Type
    setRequiredType(type: GObject.Type): void
    static name: string
    /* Static methods and pseudo-constructors */
    static implement(extensionPointName: string, type: GObject.Type, extensionName: string, priority: number): IOExtension
    static lookup(name: string): IOExtensionPoint
    static register(name: string): IOExtensionPoint
}
export abstract class IOModuleClass {
    static name: string
}
export class IOModuleScope {
    /* Methods of Gio.IOModuleScope */
    block(basename: string): void
    free(): void
    static name: string
}
export class IOSchedulerJob {
    /* Methods of Gio.IOSchedulerJob */
    sendToMainloop(func: GLib.SourceFunc): boolean
    sendToMainloopAsync(func: GLib.SourceFunc): void
    static name: string
}
export class IOStreamAdapter {
    static name: string
}
export abstract class IOStreamClass {
    /* Fields of Gio.IOStreamClass */
    parentClass: GObject.ObjectClass
    getInputStream: (stream: IOStream) => InputStream
    getOutputStream: (stream: IOStream) => OutputStream
    closeFn: (stream: IOStream, cancellable?: Cancellable | null) => boolean
    closeAsync: (stream: IOStream, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    closeFinish: (stream: IOStream, result: AsyncResult) => boolean
    static name: string
}
export class IOStreamPrivate {
    static name: string
}
export abstract class IconIface {
    /* Fields of Gio.IconIface */
    gIface: GObject.TypeInterface
    hash: (icon: Icon) => number
    equal: (icon1?: Icon | null, icon2?: Icon | null) => boolean
    serialize: (icon: Icon) => GLib.Variant | null
    static name: string
}
export abstract class InetAddressClass {
    /* Fields of Gio.InetAddressClass */
    parentClass: GObject.ObjectClass
    toBytes: (address: InetAddress) => number
    static name: string
}
export abstract class InetAddressMaskClass {
    /* Fields of Gio.InetAddressMaskClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class InetAddressMaskPrivate {
    static name: string
}
export class InetAddressPrivate {
    static name: string
}
export abstract class InetSocketAddressClass {
    /* Fields of Gio.InetSocketAddressClass */
    parentClass: SocketAddressClass
    static name: string
}
export class InetSocketAddressPrivate {
    static name: string
}
export abstract class InitableIface {
    /* Fields of Gio.InitableIface */
    gIface: GObject.TypeInterface
    init: (initable: Initable, cancellable?: Cancellable | null) => boolean
    static name: string
}
export class InputMessage {
    /* Fields of Gio.InputMessage */
    address: SocketAddress
    vectors: InputVector[]
    numVectors: number
    bytesReceived: number
    flags: number
    controlMessages: SocketControlMessage[]
    numControlMessages: number
    static name: string
}
export abstract class InputStreamClass {
    /* Fields of Gio.InputStreamClass */
    parentClass: GObject.ObjectClass
    readFn: (stream: InputStream, buffer: object | null, count: number, cancellable?: Cancellable | null) => number
    skip: (stream: InputStream, count: number, cancellable?: Cancellable | null) => number
    closeFn: (stream: InputStream, cancellable?: Cancellable | null) => boolean
    readAsync: (stream: InputStream, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => /* buffer */ any | null
    readFinish: (stream: InputStream, result: AsyncResult) => number
    skipAsync: (stream: InputStream, count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    skipFinish: (stream: InputStream, result: AsyncResult) => number
    closeAsync: (stream: InputStream, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    closeFinish: (stream: InputStream, result: AsyncResult) => boolean
    static name: string
}
export class InputStreamPrivate {
    static name: string
}
export class InputVector {
    /* Fields of Gio.InputVector */
    buffer: object
    size: number
    static name: string
}
export abstract class ListModelInterface {
    /* Fields of Gio.ListModelInterface */
    gIface: GObject.TypeInterface
    getItemType: (list: ListModel) => GObject.Type
    getNItems: (list: ListModel) => number
    getItem: (list: ListModel, position: number) => GObject.Object | null
    static name: string
}
export abstract class ListStoreClass {
    /* Fields of Gio.ListStoreClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class LoadableIconIface {
    /* Fields of Gio.LoadableIconIface */
    gIface: GObject.TypeInterface
    load: (icon: LoadableIcon, size: number, cancellable?: Cancellable | null) => [ /* returnType */ InputStream, /* type */ string | null ]
    loadAsync: (icon: LoadableIcon, size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    loadFinish: (icon: LoadableIcon, res: AsyncResult) => [ /* returnType */ InputStream, /* type */ string | null ]
    static name: string
}
export abstract class MemoryInputStreamClass {
    /* Fields of Gio.MemoryInputStreamClass */
    parentClass: InputStreamClass
    static name: string
}
export class MemoryInputStreamPrivate {
    static name: string
}
export abstract class MemoryMonitorInterface {
    /* Fields of Gio.MemoryMonitorInterface */
    lowMemoryWarning: (monitor: MemoryMonitor, level: MemoryMonitorWarningLevel) => void
    static name: string
}
export abstract class MemoryOutputStreamClass {
    /* Fields of Gio.MemoryOutputStreamClass */
    parentClass: OutputStreamClass
    static name: string
}
export class MemoryOutputStreamPrivate {
    static name: string
}
export abstract class MenuAttributeIterClass {
    /* Fields of Gio.MenuAttributeIterClass */
    parentClass: GObject.ObjectClass
    getNext: (iter: MenuAttributeIter) => [ /* returnType */ boolean, /* outName */ string | null, /* value */ GLib.Variant | null ]
    static name: string
}
export class MenuAttributeIterPrivate {
    static name: string
}
export abstract class MenuLinkIterClass {
    /* Fields of Gio.MenuLinkIterClass */
    parentClass: GObject.ObjectClass
    getNext: (iter: MenuLinkIter) => [ /* returnType */ boolean, /* outLink */ string | null, /* value */ MenuModel | null ]
    static name: string
}
export class MenuLinkIterPrivate {
    static name: string
}
export abstract class MenuModelClass {
    /* Fields of Gio.MenuModelClass */
    parentClass: GObject.ObjectClass
    isMutable: (model: MenuModel) => boolean
    getNItems: (model: MenuModel) => number
    getItemAttributes: (model: MenuModel, itemIndex: number) => /* attributes */ GLib.HashTable
    iterateItemAttributes: (model: MenuModel, itemIndex: number) => MenuAttributeIter
    getItemAttributeValue: (model: MenuModel, itemIndex: number, attribute: string, expectedType?: GLib.VariantType | null) => GLib.Variant | null
    getItemLinks: (model: MenuModel, itemIndex: number) => /* links */ GLib.HashTable
    iterateItemLinks: (model: MenuModel, itemIndex: number) => MenuLinkIter
    getItemLink: (model: MenuModel, itemIndex: number, link: string) => MenuModel | null
    static name: string
}
export class MenuModelPrivate {
    static name: string
}
export abstract class MountIface {
    /* Fields of Gio.MountIface */
    gIface: GObject.TypeInterface
    changed: (mount: Mount) => void
    unmounted: (mount: Mount) => void
    getRoot: (mount: Mount) => File
    getName: (mount: Mount) => string
    getIcon: (mount: Mount) => Icon
    getUuid: (mount: Mount) => string | null
    getVolume: (mount: Mount) => Volume | null
    getDrive: (mount: Mount) => Drive | null
    canUnmount: (mount: Mount) => boolean
    canEject: (mount: Mount) => boolean
    unmount: (mount: Mount, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    unmountFinish: (mount: Mount, result: AsyncResult) => boolean
    eject: (mount: Mount, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    ejectFinish: (mount: Mount, result: AsyncResult) => boolean
    remount: (mount: Mount, flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    remountFinish: (mount: Mount, result: AsyncResult) => boolean
    guessContentType: (mount: Mount, forceRescan: boolean, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    guessContentTypeFinish: (mount: Mount, result: AsyncResult) => string[]
    guessContentTypeSync: (mount: Mount, forceRescan: boolean, cancellable?: Cancellable | null) => string[]
    preUnmount: (mount: Mount) => void
    unmountWithOperation: (mount: Mount, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    unmountWithOperationFinish: (mount: Mount, result: AsyncResult) => boolean
    ejectWithOperation: (mount: Mount, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    ejectWithOperationFinish: (mount: Mount, result: AsyncResult) => boolean
    getDefaultLocation: (mount: Mount) => File
    getSortKey: (mount: Mount) => string | null
    getSymbolicIcon: (mount: Mount) => Icon
    static name: string
}
export abstract class MountOperationClass {
    /* Fields of Gio.MountOperationClass */
    parentClass: GObject.ObjectClass
    askPassword: (op: MountOperation, message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags) => void
    askQuestion: (op: MountOperation, message: string, choices: string[]) => void
    reply: (op: MountOperation, result: MountOperationResult) => void
    aborted: (op: MountOperation) => void
    showProcesses: (op: MountOperation, message: string, processes: GLib.Pid[], choices: string[]) => void
    showUnmountProgress: (op: MountOperation, message: string, timeLeft: number, bytesLeft: number) => void
    static name: string
}
export class MountOperationPrivate {
    static name: string
}
export abstract class NativeSocketAddressClass {
    /* Fields of Gio.NativeSocketAddressClass */
    parentClass: SocketAddressClass
    static name: string
}
export class NativeSocketAddressPrivate {
    static name: string
}
export abstract class NativeVolumeMonitorClass {
    /* Fields of Gio.NativeVolumeMonitorClass */
    parentClass: VolumeMonitorClass
    static name: string
}
export abstract class NetworkAddressClass {
    /* Fields of Gio.NetworkAddressClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class NetworkAddressPrivate {
    static name: string
}
export abstract class NetworkMonitorInterface {
    /* Fields of Gio.NetworkMonitorInterface */
    gIface: GObject.TypeInterface
    networkChanged: (monitor: NetworkMonitor, networkAvailable: boolean) => void
    canReach: (monitor: NetworkMonitor, connectable: SocketConnectable, cancellable?: Cancellable | null) => boolean
    canReachAsync: (monitor: NetworkMonitor, connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    canReachFinish: (monitor: NetworkMonitor, result: AsyncResult) => boolean
    static name: string
}
export abstract class NetworkServiceClass {
    /* Fields of Gio.NetworkServiceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class NetworkServicePrivate {
    static name: string
}
export class OutputMessage {
    /* Fields of Gio.OutputMessage */
    address: SocketAddress
    vectors: OutputVector
    numVectors: number
    bytesSent: number
    controlMessages: SocketControlMessage[]
    numControlMessages: number
    static name: string
}
export abstract class OutputStreamClass {
    /* Fields of Gio.OutputStreamClass */
    parentClass: GObject.ObjectClass
    writeFn: (stream: OutputStream, buffer: any | null, cancellable?: Cancellable | null) => number
    splice: (stream: OutputStream, source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null) => number
    flush: (stream: OutputStream, cancellable?: Cancellable | null) => boolean
    closeFn: (stream: OutputStream, cancellable?: Cancellable | null) => boolean
    writeAsync: (stream: OutputStream, buffer: any | null, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    writeFinish: (stream: OutputStream, result: AsyncResult) => number
    spliceAsync: (stream: OutputStream, source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    spliceFinish: (stream: OutputStream, result: AsyncResult) => number
    flushAsync: (stream: OutputStream, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    flushFinish: (stream: OutputStream, result: AsyncResult) => boolean
    closeAsync: (stream: OutputStream, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    closeFinish: (stream: OutputStream, result: AsyncResult) => boolean
    writevFn: (stream: OutputStream, vectors: OutputVector[], cancellable?: Cancellable | null) => [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync: (stream: OutputStream, vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    writevFinish: (stream: OutputStream, result: AsyncResult) => [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    static name: string
}
export class OutputStreamPrivate {
    static name: string
}
export class OutputVector {
    /* Fields of Gio.OutputVector */
    buffer: object
    size: number
    static name: string
}
export abstract class PermissionClass {
    /* Fields of Gio.PermissionClass */
    parentClass: GObject.ObjectClass
    acquire: (permission: Permission, cancellable?: Cancellable | null) => boolean
    acquireAsync: (permission: Permission, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    acquireFinish: (permission: Permission, result: AsyncResult) => boolean
    release: (permission: Permission, cancellable?: Cancellable | null) => boolean
    releaseAsync: (permission: Permission, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    releaseFinish: (permission: Permission, result: AsyncResult) => boolean
    reserved: object[]
    static name: string
}
export class PermissionPrivate {
    static name: string
}
export abstract class PollableInputStreamInterface {
    /* Fields of Gio.PollableInputStreamInterface */
    gIface: GObject.TypeInterface
    canPoll: (stream: PollableInputStream) => boolean
    isReadable: (stream: PollableInputStream) => boolean
    createSource: (stream: PollableInputStream, cancellable?: Cancellable | null) => GLib.Source
    readNonblocking: (stream: PollableInputStream, buffer: any | null) => number
    static name: string
}
export abstract class PollableOutputStreamInterface {
    /* Fields of Gio.PollableOutputStreamInterface */
    gIface: GObject.TypeInterface
    canPoll: (stream: PollableOutputStream) => boolean
    isWritable: (stream: PollableOutputStream) => boolean
    createSource: (stream: PollableOutputStream, cancellable?: Cancellable | null) => GLib.Source
    writeNonblocking: (stream: PollableOutputStream, buffer: any | null) => number
    writevNonblocking: (stream: PollableOutputStream, vectors: OutputVector[]) => [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    static name: string
}
export abstract class ProxyAddressClass {
    /* Fields of Gio.ProxyAddressClass */
    parentClass: InetSocketAddressClass
    static name: string
}
export abstract class ProxyAddressEnumeratorClass {
    static name: string
}
export class ProxyAddressEnumeratorPrivate {
    static name: string
}
export class ProxyAddressPrivate {
    static name: string
}
export abstract class ProxyInterface {
    /* Fields of Gio.ProxyInterface */
    gIface: GObject.TypeInterface
    connect: (proxy: Proxy, connection: IOStream, proxyAddress: ProxyAddress, cancellable?: Cancellable | null) => IOStream
    connectAsync: (proxy: Proxy, connection: IOStream, proxyAddress: ProxyAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    connectFinish: (proxy: Proxy, result: AsyncResult) => IOStream
    supportsHostname: (proxy: Proxy) => boolean
    static name: string
}
export abstract class ProxyResolverInterface {
    /* Fields of Gio.ProxyResolverInterface */
    gIface: GObject.TypeInterface
    isSupported: (resolver: ProxyResolver) => boolean
    lookup: (resolver: ProxyResolver, uri: string, cancellable?: Cancellable | null) => string[]
    lookupAsync: (resolver: ProxyResolver, uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    lookupFinish: (resolver: ProxyResolver, result: AsyncResult) => string[]
    static name: string
}
export abstract class RemoteActionGroupInterface {
    /* Fields of Gio.RemoteActionGroupInterface */
    gIface: GObject.TypeInterface
    activateActionFull: (remote: RemoteActionGroup, actionName: string, parameter: GLib.Variant | null, platformData: GLib.Variant) => void
    changeActionStateFull: (remote: RemoteActionGroup, actionName: string, value: GLib.Variant, platformData: GLib.Variant) => void
    static name: string
}
export abstract class ResolverClass {
    /* Fields of Gio.ResolverClass */
    parentClass: GObject.ObjectClass
    reload: (resolver: Resolver) => void
    lookupByName: (resolver: Resolver, hostname: string, cancellable?: Cancellable | null) => InetAddress[]
    lookupByNameAsync: (resolver: Resolver, hostname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    lookupByNameFinish: (resolver: Resolver, result: AsyncResult) => InetAddress[]
    lookupByAddress: (resolver: Resolver, address: InetAddress, cancellable?: Cancellable | null) => string
    lookupByAddressAsync: (resolver: Resolver, address: InetAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    lookupByAddressFinish: (resolver: Resolver, result: AsyncResult) => string
    lookupServiceAsync: (resolver: Resolver, rrname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    lookupServiceFinish: (resolver: Resolver, result: AsyncResult) => SrvTarget[]
    lookupRecords: (resolver: Resolver, rrname: string, recordType: ResolverRecordType, cancellable?: Cancellable | null) => GLib.Variant[]
    lookupRecordsAsync: (resolver: Resolver, rrname: string, recordType: ResolverRecordType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    lookupRecordsFinish: (resolver: Resolver, result: AsyncResult) => GLib.Variant[]
    lookupByNameWithFlagsAsync: (resolver: Resolver, hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    lookupByNameWithFlagsFinish: (resolver: Resolver, result: AsyncResult) => InetAddress[]
    lookupByNameWithFlags: (resolver: Resolver, hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null) => InetAddress[]
    static name: string
}
export class ResolverPrivate {
    static name: string
}
export class Resource {
    /* Methods of Gio.Resource */
    register(): void
    unregister(): void
    enumerateChildren(path: string, lookupFlags: ResourceLookupFlags): string[]
    getInfo(path: string, lookupFlags: ResourceLookupFlags): [ /* returnType */ boolean, /* size */ number | null, /* flags */ number | null ]
    lookupData(path: string, lookupFlags: ResourceLookupFlags): any
    openStream(path: string, lookupFlags: ResourceLookupFlags): InputStream
    ref(): Resource
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromData(data: any): Resource
    static load(filename: string): Resource
}
export abstract class SeekableIface {
    /* Fields of Gio.SeekableIface */
    gIface: GObject.TypeInterface
    tell: (seekable: Seekable) => number
    canSeek: (seekable: Seekable) => boolean
    seek: (seekable: Seekable, offset: number, type: GLib.SeekType, cancellable?: Cancellable | null) => boolean
    canTruncate: (seekable: Seekable) => boolean
    truncateFn: (seekable: Seekable, offset: number, cancellable?: Cancellable | null) => boolean
    static name: string
}
export abstract class SettingsBackendClass {
    /* Fields of Gio.SettingsBackendClass */
    parentClass: GObject.ObjectClass
    read: (backend: SettingsBackend, key: string, expectedType: GLib.VariantType, defaultValue: boolean) => GLib.Variant
    getWritable: (backend: SettingsBackend, key: string) => boolean
    write: (backend: SettingsBackend, key: string, value: GLib.Variant, originTag?: object | null) => boolean
    writeTree: (backend: SettingsBackend, tree: GLib.Tree, originTag?: object | null) => boolean
    reset: (backend: SettingsBackend, key: string, originTag?: object | null) => void
    subscribe: (backend: SettingsBackend, name: string) => void
    unsubscribe: (backend: SettingsBackend, name: string) => void
    sync: (backend: SettingsBackend) => void
    readUserValue: (backend: SettingsBackend, key: string, expectedType: GLib.VariantType) => GLib.Variant
    static name: string
}
export class SettingsBackendPrivate {
    static name: string
}
export abstract class SettingsClass {
    /* Fields of Gio.SettingsClass */
    parentClass: GObject.ObjectClass
    writableChanged: (settings: Settings, key: string) => void
    changed: (settings: Settings, key: string) => void
    writableChangeEvent: (settings: Settings, key: GLib.Quark) => boolean
    changeEvent: (settings: Settings, keys: GLib.Quark, nKeys: number) => boolean
    padding: object[]
    static name: string
}
export class SettingsPrivate {
    static name: string
}
export class SettingsSchema {
    /* Methods of Gio.SettingsSchema */
    getId(): string
    getKey(name: string): SettingsSchemaKey
    getPath(): string | null
    hasKey(name: string): boolean
    listChildren(): string[]
    listKeys(): string[]
    ref(): SettingsSchema
    unref(): void
    static name: string
}
export class SettingsSchemaKey {
    /* Methods of Gio.SettingsSchemaKey */
    getDefaultValue(): GLib.Variant
    getDescription(): string | null
    getName(): string
    getRange(): GLib.Variant
    getSummary(): string | null
    getValueType(): GLib.VariantType
    rangeCheck(value: GLib.Variant): boolean
    ref(): SettingsSchemaKey
    unref(): void
    static name: string
}
export class SettingsSchemaSource {
    /* Methods of Gio.SettingsSchemaSource */
    listSchemas(recursive: boolean): [ /* nonRelocatable */ string[], /* relocatable */ string[] ]
    lookup(schemaId: string, recursive: boolean): SettingsSchema | null
    ref(): SettingsSchemaSource
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromDirectory(directory: string, parent: SettingsSchemaSource | null, trusted: boolean): SettingsSchemaSource
    static getDefault(): SettingsSchemaSource | null
}
export abstract class SimpleActionGroupClass {
    static name: string
}
export class SimpleActionGroupPrivate {
    static name: string
}
export abstract class SimpleAsyncResultClass {
    static name: string
}
export abstract class SimpleProxyResolverClass {
    /* Fields of Gio.SimpleProxyResolverClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SimpleProxyResolverPrivate {
    static name: string
}
export abstract class SocketAddressClass {
    /* Fields of Gio.SocketAddressClass */
    parentClass: GObject.ObjectClass
    getFamily: (address: SocketAddress) => SocketFamily
    getNativeSize: (address: SocketAddress) => number
    toNative: (address: SocketAddress, dest: object | null, destlen: number) => boolean
    static name: string
}
export abstract class SocketAddressEnumeratorClass {
    /* Fields of Gio.SocketAddressEnumeratorClass */
    next: (enumerator: SocketAddressEnumerator, cancellable?: Cancellable | null) => SocketAddress
    nextAsync: (enumerator: SocketAddressEnumerator, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    nextFinish: (enumerator: SocketAddressEnumerator, result: AsyncResult) => SocketAddress
    static name: string
}
export abstract class SocketClass {
    /* Fields of Gio.SocketClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class SocketClientClass {
    /* Fields of Gio.SocketClientClass */
    parentClass: GObject.ObjectClass
    event: (client: SocketClient, event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream) => void
    static name: string
}
export class SocketClientPrivate {
    static name: string
}
export abstract class SocketConnectableIface {
    /* Fields of Gio.SocketConnectableIface */
    gIface: GObject.TypeInterface
    enumerate: (connectable: SocketConnectable) => SocketAddressEnumerator
    proxyEnumerate: (connectable: SocketConnectable) => SocketAddressEnumerator
    static name: string
}
export abstract class SocketConnectionClass {
    /* Fields of Gio.SocketConnectionClass */
    parentClass: IOStreamClass
    static name: string
}
export class SocketConnectionPrivate {
    static name: string
}
export abstract class SocketControlMessageClass {
    /* Fields of Gio.SocketControlMessageClass */
    parentClass: GObject.ObjectClass
    getSize: (message: SocketControlMessage) => number
    getLevel: (message: SocketControlMessage) => number
    getType: (message: SocketControlMessage) => number
    serialize: (message: SocketControlMessage, data: object) => void
    static name: string
}
export class SocketControlMessagePrivate {
    static name: string
}
export abstract class SocketListenerClass {
    /* Fields of Gio.SocketListenerClass */
    parentClass: GObject.ObjectClass
    changed: (listener: SocketListener) => void
    event: (listener: SocketListener, event: SocketListenerEvent, socket: Socket) => void
    static name: string
}
export class SocketListenerPrivate {
    static name: string
}
export class SocketPrivate {
    static name: string
}
export abstract class SocketServiceClass {
    /* Fields of Gio.SocketServiceClass */
    parentClass: SocketListenerClass
    incoming: (service: SocketService, connection: SocketConnection, sourceObject: GObject.Object) => boolean
    static name: string
}
export class SocketServicePrivate {
    static name: string
}
export class SrvTarget {
    /* Methods of Gio.SrvTarget */
    copy(): SrvTarget
    free(): void
    getHostname(): string
    getPort(): number
    getPriority(): number
    getWeight(): number
    static name: string
    static new(hostname: string, port: number, priority: number, weight: number): SrvTarget
    constructor(hostname: string, port: number, priority: number, weight: number)
    /* Static methods and pseudo-constructors */
    static new(hostname: string, port: number, priority: number, weight: number): SrvTarget
}
export class StaticResource {
    /* Methods of Gio.StaticResource */
    fini(): void
    getResource(): Resource
    init(): void
    static name: string
}
export abstract class TaskClass {
    static name: string
}
export abstract class TcpConnectionClass {
    /* Fields of Gio.TcpConnectionClass */
    parentClass: SocketConnectionClass
    static name: string
}
export class TcpConnectionPrivate {
    static name: string
}
export abstract class TcpWrapperConnectionClass {
    /* Fields of Gio.TcpWrapperConnectionClass */
    parentClass: TcpConnectionClass
    static name: string
}
export class TcpWrapperConnectionPrivate {
    static name: string
}
export abstract class ThemedIconClass {
    static name: string
}
export abstract class ThreadedSocketServiceClass {
    /* Fields of Gio.ThreadedSocketServiceClass */
    parentClass: SocketServiceClass
    run: (service: ThreadedSocketService, connection: SocketConnection, sourceObject: GObject.Object) => boolean
    static name: string
}
export class ThreadedSocketServicePrivate {
    static name: string
}
export abstract class TlsBackendInterface {
    /* Fields of Gio.TlsBackendInterface */
    gIface: GObject.TypeInterface
    supportsTls: (backend: TlsBackend) => boolean
    getCertificateType: () => GObject.Type
    getClientConnectionType: () => GObject.Type
    getServerConnectionType: () => GObject.Type
    getFileDatabaseType: () => GObject.Type
    getDefaultDatabase: (backend: TlsBackend) => TlsDatabase
    supportsDtls: (backend: TlsBackend) => boolean
    getDtlsClientConnectionType: () => GObject.Type
    getDtlsServerConnectionType: () => GObject.Type
    static name: string
}
export abstract class TlsCertificateClass {
    /* Fields of Gio.TlsCertificateClass */
    parentClass: GObject.ObjectClass
    verify: (cert: TlsCertificate, identity?: SocketConnectable | null, trustedCa?: TlsCertificate | null) => TlsCertificateFlags
    static name: string
}
export class TlsCertificatePrivate {
    static name: string
}
export abstract class TlsClientConnectionInterface {
    /* Fields of Gio.TlsClientConnectionInterface */
    gIface: GObject.TypeInterface
    copySessionState: (conn: TlsClientConnection, source: TlsClientConnection) => void
    static name: string
}
export abstract class TlsConnectionClass {
    /* Fields of Gio.TlsConnectionClass */
    parentClass: IOStreamClass
    acceptCertificate: (connection: TlsConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean
    handshake: (conn: TlsConnection, cancellable?: Cancellable | null) => boolean
    handshakeAsync: (conn: TlsConnection, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    handshakeFinish: (conn: TlsConnection, result: AsyncResult) => boolean
    getBindingData: (conn: TlsConnection, type: TlsChannelBindingType, data: any) => boolean
    static name: string
}
export class TlsConnectionPrivate {
    static name: string
}
export abstract class TlsDatabaseClass {
    /* Fields of Gio.TlsDatabaseClass */
    parentClass: GObject.ObjectClass
    verifyChain: (self: TlsDatabase, chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null) => TlsCertificateFlags
    verifyChainAsync: (self: TlsDatabase, chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    verifyChainFinish: (self: TlsDatabase, result: AsyncResult) => TlsCertificateFlags
    createCertificateHandle: (self: TlsDatabase, certificate: TlsCertificate) => string | null
    lookupCertificateForHandle: (self: TlsDatabase, handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null) => TlsCertificate | null
    lookupCertificateForHandleAsync: (self: TlsDatabase, handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    lookupCertificateForHandleFinish: (self: TlsDatabase, result: AsyncResult) => TlsCertificate
    lookupCertificateIssuer: (self: TlsDatabase, certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null) => TlsCertificate
    lookupCertificateIssuerAsync: (self: TlsDatabase, certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    lookupCertificateIssuerFinish: (self: TlsDatabase, result: AsyncResult) => TlsCertificate
    lookupCertificatesIssuedBy: (self: TlsDatabase, issuerRawDn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null) => TlsCertificate[]
    lookupCertificatesIssuedByAsync: (self: TlsDatabase, issuerRawDn: any, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    lookupCertificatesIssuedByFinish: (self: TlsDatabase, result: AsyncResult) => TlsCertificate[]
    static name: string
}
export class TlsDatabasePrivate {
    static name: string
}
export abstract class TlsFileDatabaseInterface {
    /* Fields of Gio.TlsFileDatabaseInterface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class TlsInteractionClass {
    /* Fields of Gio.TlsInteractionClass */
    askPassword: (interaction: TlsInteraction, password: TlsPassword, cancellable?: Cancellable | null) => TlsInteractionResult
    askPasswordAsync: (interaction: TlsInteraction, password: TlsPassword, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    askPasswordFinish: (interaction: TlsInteraction, result: AsyncResult) => TlsInteractionResult
    requestCertificate: (interaction: TlsInteraction, connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null) => TlsInteractionResult
    requestCertificateAsync: (interaction: TlsInteraction, connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    requestCertificateFinish: (interaction: TlsInteraction, result: AsyncResult) => TlsInteractionResult
    static name: string
}
export class TlsInteractionPrivate {
    static name: string
}
export abstract class TlsPasswordClass {
    /* Fields of Gio.TlsPasswordClass */
    parentClass: GObject.ObjectClass
    getValue: (password: TlsPassword, length?: number | null) => number
    setValue: (password: TlsPassword, value: any, destroy?: GLib.DestroyNotify | null) => void
    getDefaultWarning: (password: TlsPassword) => string
    static name: string
}
export class TlsPasswordPrivate {
    static name: string
}
export abstract class TlsServerConnectionInterface {
    /* Fields of Gio.TlsServerConnectionInterface */
    gIface: GObject.TypeInterface
    static name: string
}
export abstract class UnixConnectionClass {
    /* Fields of Gio.UnixConnectionClass */
    parentClass: SocketConnectionClass
    static name: string
}
export class UnixConnectionPrivate {
    static name: string
}
export abstract class UnixCredentialsMessageClass {
    /* Fields of Gio.UnixCredentialsMessageClass */
    parentClass: SocketControlMessageClass
    static name: string
}
export class UnixCredentialsMessagePrivate {
    static name: string
}
export abstract class UnixFDListClass {
    /* Fields of Gio.UnixFDListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class UnixFDListPrivate {
    static name: string
}
export abstract class UnixFDMessageClass {
    /* Fields of Gio.UnixFDMessageClass */
    parentClass: SocketControlMessageClass
    static name: string
}
export class UnixFDMessagePrivate {
    static name: string
}
export abstract class UnixInputStreamClass {
    /* Fields of Gio.UnixInputStreamClass */
    parentClass: InputStreamClass
    static name: string
}
export class UnixInputStreamPrivate {
    static name: string
}
export class UnixMountEntry {
    static name: string
}
export abstract class UnixMountMonitorClass {
    static name: string
}
export class UnixMountPoint {
    /* Methods of Gio.UnixMountPoint */
    compare(mount2: UnixMountPoint): number
    copy(): UnixMountPoint
    free(): void
    getDevicePath(): string
    getFsType(): string
    getMountPath(): string
    getOptions(): string | null
    guessCanEject(): boolean
    guessIcon(): Icon
    guessName(): string
    guessSymbolicIcon(): Icon
    isLoopback(): boolean
    isReadonly(): boolean
    isUserMountable(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static at(mountPath: string): [ /* returnType */ UnixMountPoint | null, /* timeRead */ number | null ]
}
export abstract class UnixOutputStreamClass {
    /* Fields of Gio.UnixOutputStreamClass */
    parentClass: OutputStreamClass
    static name: string
}
export class UnixOutputStreamPrivate {
    static name: string
}
export abstract class UnixSocketAddressClass {
    /* Fields of Gio.UnixSocketAddressClass */
    parentClass: SocketAddressClass
    static name: string
}
export class UnixSocketAddressPrivate {
    static name: string
}
export abstract class VfsClass {
    /* Fields of Gio.VfsClass */
    parentClass: GObject.ObjectClass
    isActive: (vfs: Vfs) => boolean
    getFileForPath: (vfs: Vfs, path: string) => File
    getFileForUri: (vfs: Vfs, uri: string) => File
    getSupportedUriSchemes: (vfs: Vfs) => string[]
    parseName: (vfs: Vfs, parseName: string) => File
    localFileAddInfo: (vfs: Vfs, filename: string, device: number, attributeMatcher: FileAttributeMatcher, info: FileInfo, cancellable: Cancellable | null, extraData: object | null, freeExtraData: GLib.DestroyNotify) => void
    addWritableNamespaces: (vfs: Vfs, list: FileAttributeInfoList) => void
    localFileSetAttributes: (vfs: Vfs, filename: string, info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null) => boolean
    localFileRemoved: (vfs: Vfs, filename: string) => void
    localFileMoved: (vfs: Vfs, source: string, dest: string) => void
    static name: string
}
export abstract class VolumeIface {
    /* Fields of Gio.VolumeIface */
    gIface: GObject.TypeInterface
    changed: (volume: Volume) => void
    removed: (volume: Volume) => void
    getName: (volume: Volume) => string
    getIcon: (volume: Volume) => Icon
    getUuid: (volume: Volume) => string | null
    getDrive: (volume: Volume) => Drive | null
    getMount: (volume: Volume) => Mount | null
    canMount: (volume: Volume) => boolean
    canEject: (volume: Volume) => boolean
    mountFn: (volume: Volume, flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    mountFinish: (volume: Volume, result: AsyncResult) => boolean
    eject: (volume: Volume, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    ejectFinish: (volume: Volume, result: AsyncResult) => boolean
    getIdentifier: (volume: Volume, kind: string) => string | null
    enumerateIdentifiers: (volume: Volume) => string[]
    shouldAutomount: (volume: Volume) => boolean
    getActivationRoot: (volume: Volume) => File | null
    ejectWithOperation: (volume: Volume, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    ejectWithOperationFinish: (volume: Volume, result: AsyncResult) => boolean
    getSortKey: (volume: Volume) => string | null
    getSymbolicIcon: (volume: Volume) => Icon
    static name: string
}
export abstract class VolumeMonitorClass {
    /* Fields of Gio.VolumeMonitorClass */
    parentClass: GObject.ObjectClass
    volumeAdded: (volumeMonitor: VolumeMonitor, volume: Volume) => void
    volumeRemoved: (volumeMonitor: VolumeMonitor, volume: Volume) => void
    volumeChanged: (volumeMonitor: VolumeMonitor, volume: Volume) => void
    mountAdded: (volumeMonitor: VolumeMonitor, mount: Mount) => void
    mountRemoved: (volumeMonitor: VolumeMonitor, mount: Mount) => void
    mountPreUnmount: (volumeMonitor: VolumeMonitor, mount: Mount) => void
    mountChanged: (volumeMonitor: VolumeMonitor, mount: Mount) => void
    driveConnected: (volumeMonitor: VolumeMonitor, drive: Drive) => void
    driveDisconnected: (volumeMonitor: VolumeMonitor, drive: Drive) => void
    driveChanged: (volumeMonitor: VolumeMonitor, drive: Drive) => void
    isSupported: () => boolean
    getConnectedDrives: (volumeMonitor: VolumeMonitor) => Drive[]
    getVolumes: (volumeMonitor: VolumeMonitor) => Volume[]
    getMounts: (volumeMonitor: VolumeMonitor) => Mount[]
    getVolumeForUuid: (volumeMonitor: VolumeMonitor, uuid: string) => Volume | null
    getMountForUuid: (volumeMonitor: VolumeMonitor, uuid: string) => Mount | null
    driveEjectButton: (volumeMonitor: VolumeMonitor, drive: Drive) => void
    driveStopButton: (volumeMonitor: VolumeMonitor, drive: Drive) => void
    static name: string
}
export abstract class ZlibCompressorClass {
    /* Fields of Gio.ZlibCompressorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ZlibDecompressorClass {
    /* Fields of Gio.ZlibDecompressorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}