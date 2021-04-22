/**
 * Meta-8
 */

/// <reference types="node" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="xfixes-4.0.d.ts" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />
/// <reference path="GDesktopEnums-3.0.d.ts" />
/// <reference path="CoglPango-8.d.ts" />
/// <reference path="PangoCairo-1.0.d.ts" />
/// <reference path="Cogl-8.d.ts" />
/// <reference path="Graphene-1.0.d.ts" />
/// <reference path="GL-1.0.d.ts" />
/// <reference path="Clutter-8.d.ts" />
/// <reference path="Json-1.0.d.ts" />

declare namespace Meta {

export enum ButtonFunction {
    MENU,
    MINIMIZE,
    MAXIMIZE,
    CLOSE,
    LAST,
}
export enum CloseDialogResponse {
    WAIT,
    FORCE_CLOSE,
}
export enum CompEffect {
    CREATE,
    UNMINIMIZE,
    DESTROY,
    MINIMIZE,
    NONE,
}
export enum Cursor {
    NONE,
    DEFAULT,
    NORTH_RESIZE,
    SOUTH_RESIZE,
    WEST_RESIZE,
    EAST_RESIZE,
    SE_RESIZE,
    SW_RESIZE,
    NE_RESIZE,
    NW_RESIZE,
    MOVE_OR_RESIZE_WINDOW,
    BUSY,
    DND_IN_DRAG,
    DND_MOVE,
    DND_COPY,
    DND_UNSUPPORTED_TARGET,
    POINTING_HAND,
    CROSSHAIR,
    IBEAM,
    BLANK,
    LAST,
}
export enum DisplayCorner {
    TOPLEFT,
    TOPRIGHT,
    BOTTOMLEFT,
    BOTTOMRIGHT,
}
export enum DisplayDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
export enum EdgeType {
    WINDOW,
    MONITOR,
    SCREEN,
}
export enum ExitCode {
    SUCCESS,
    ERROR,
}
export enum FrameType {
    NORMAL,
    DIALOG,
    MODAL_DIALOG,
    UTILITY,
    MENU,
    BORDER,
    ATTACHED,
    LAST,
}
export enum GrabOp {
    NONE,
    WINDOW_BASE,
    COMPOSITOR,
    WAYLAND_POPUP,
    FRAME_BUTTON,
    MOVING,
    RESIZING_NW,
    RESIZING_N,
    RESIZING_NE,
    RESIZING_E,
    RESIZING_SW,
    RESIZING_S,
    RESIZING_SE,
    RESIZING_W,
    KEYBOARD_MOVING,
    KEYBOARD_RESIZING_UNKNOWN,
    KEYBOARD_RESIZING_NW,
    KEYBOARD_RESIZING_N,
    KEYBOARD_RESIZING_NE,
    KEYBOARD_RESIZING_E,
    KEYBOARD_RESIZING_SW,
    KEYBOARD_RESIZING_S,
    KEYBOARD_RESIZING_SE,
    KEYBOARD_RESIZING_W,
}
export enum Gravity {
    NONE,
    NORTH_WEST,
    NORTH,
    NORTH_EAST,
    WEST,
    CENTER,
    EAST,
    SOUTH_WEST,
    SOUTH,
    SOUTH_EAST,
    STATIC,
}
export enum InhibitShortcutsDialogResponse {
    ALLOW,
    DENY,
}
export enum KeyBindingAction {
    NONE,
    WORKSPACE_1,
    WORKSPACE_2,
    WORKSPACE_3,
    WORKSPACE_4,
    WORKSPACE_5,
    WORKSPACE_6,
    WORKSPACE_7,
    WORKSPACE_8,
    WORKSPACE_9,
    WORKSPACE_10,
    WORKSPACE_11,
    WORKSPACE_12,
    WORKSPACE_LEFT,
    WORKSPACE_RIGHT,
    WORKSPACE_UP,
    WORKSPACE_DOWN,
    WORKSPACE_LAST,
    SWITCH_APPLICATIONS,
    SWITCH_APPLICATIONS_BACKWARD,
    SWITCH_GROUP,
    SWITCH_GROUP_BACKWARD,
    SWITCH_WINDOWS,
    SWITCH_WINDOWS_BACKWARD,
    SWITCH_PANELS,
    SWITCH_PANELS_BACKWARD,
    CYCLE_GROUP,
    CYCLE_GROUP_BACKWARD,
    CYCLE_WINDOWS,
    CYCLE_WINDOWS_BACKWARD,
    CYCLE_PANELS,
    CYCLE_PANELS_BACKWARD,
    SHOW_DESKTOP,
    PANEL_MAIN_MENU,
    PANEL_RUN_DIALOG,
    TOGGLE_RECORDING,
    SET_SPEW_MARK,
    ACTIVATE_WINDOW_MENU,
    TOGGLE_FULLSCREEN,
    TOGGLE_MAXIMIZED,
    TOGGLE_TILED_LEFT,
    TOGGLE_TILED_RIGHT,
    TOGGLE_ABOVE,
    MAXIMIZE,
    UNMAXIMIZE,
    TOGGLE_SHADED,
    MINIMIZE,
    CLOSE,
    BEGIN_MOVE,
    BEGIN_RESIZE,
    TOGGLE_ON_ALL_WORKSPACES,
    MOVE_TO_WORKSPACE_1,
    MOVE_TO_WORKSPACE_2,
    MOVE_TO_WORKSPACE_3,
    MOVE_TO_WORKSPACE_4,
    MOVE_TO_WORKSPACE_5,
    MOVE_TO_WORKSPACE_6,
    MOVE_TO_WORKSPACE_7,
    MOVE_TO_WORKSPACE_8,
    MOVE_TO_WORKSPACE_9,
    MOVE_TO_WORKSPACE_10,
    MOVE_TO_WORKSPACE_11,
    MOVE_TO_WORKSPACE_12,
    MOVE_TO_WORKSPACE_LEFT,
    MOVE_TO_WORKSPACE_RIGHT,
    MOVE_TO_WORKSPACE_UP,
    MOVE_TO_WORKSPACE_DOWN,
    MOVE_TO_WORKSPACE_LAST,
    MOVE_TO_MONITOR_LEFT,
    MOVE_TO_MONITOR_RIGHT,
    MOVE_TO_MONITOR_UP,
    MOVE_TO_MONITOR_DOWN,
    RAISE_OR_LOWER,
    RAISE,
    LOWER,
    MAXIMIZE_VERTICALLY,
    MAXIMIZE_HORIZONTALLY,
    MOVE_TO_CORNER_NW,
    MOVE_TO_CORNER_NE,
    MOVE_TO_CORNER_SW,
    MOVE_TO_CORNER_SE,
    MOVE_TO_SIDE_N,
    MOVE_TO_SIDE_S,
    MOVE_TO_SIDE_E,
    MOVE_TO_SIDE_W,
    MOVE_TO_CENTER,
    OVERLAY_KEY,
    LOCATE_POINTER_KEY,
    ISO_NEXT_GROUP,
    ALWAYS_ON_TOP,
    SWITCH_MONITOR,
    ROTATE_MONITOR,
    LAST,
}
export enum LaterType {
    RESIZE,
    CALC_SHOWING,
    CHECK_FULLSCREEN,
    SYNC_STACK,
    BEFORE_REDRAW,
    IDLE,
}
export enum LocaleDirection {
    LTR,
    RTL,
}
export enum MonitorSwitchConfigType {
    ALL_MIRROR,
    ALL_LINEAR,
    EXTERNAL,
    BUILTIN,
    UNKNOWN,
}
export enum MotionDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    UP_LEFT,
    UP_RIGHT,
    DOWN_LEFT,
    DOWN_RIGHT,
}
export enum PadActionType {
    BUTTON,
    RING,
    STRIP,
}
export enum Preference {
    MOUSE_BUTTON_MODS,
    FOCUS_MODE,
    FOCUS_NEW_WINDOWS,
    ATTACH_MODAL_DIALOGS,
    RAISE_ON_CLICK,
    ACTION_DOUBLE_CLICK_TITLEBAR,
    ACTION_MIDDLE_CLICK_TITLEBAR,
    ACTION_RIGHT_CLICK_TITLEBAR,
    AUTO_RAISE,
    AUTO_RAISE_DELAY,
    FOCUS_CHANGE_ON_POINTER_REST,
    TITLEBAR_FONT,
    NUM_WORKSPACES,
    DYNAMIC_WORKSPACES,
    KEYBINDINGS,
    DISABLE_WORKAROUNDS,
    BUTTON_LAYOUT,
    WORKSPACE_NAMES,
    VISUAL_BELL,
    AUDIBLE_BELL,
    VISUAL_BELL_TYPE,
    GNOME_ACCESSIBILITY,
    GNOME_ANIMATIONS,
    CURSOR_THEME,
    CURSOR_SIZE,
    RESIZE_WITH_RIGHT_BUTTON,
    EDGE_TILING,
    FORCE_FULLSCREEN,
    WORKSPACES_ONLY_ON_PRIMARY,
    DRAGGABLE_BORDER_WIDTH,
    AUTO_MAXIMIZE,
    CENTER_NEW_WINDOWS,
    DRAG_THRESHOLD,
    LOCATE_POINTER,
    CHECK_ALIVE_TIMEOUT,
}
export enum SelectionType {
    SELECTION_PRIMARY,
    SELECTION_CLIPBOARD,
    SELECTION_DND,
    N_SELECTION_TYPES,
}
export enum ShadowMode {
    AUTO,
    FORCED_OFF,
    FORCED_ON,
}
export enum Side {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
}
export enum SizeChange {
    MAXIMIZE,
    UNMAXIMIZE,
    FULLSCREEN,
    UNFULLSCREEN,
}
export enum StackLayer {
    DESKTOP,
    BOTTOM,
    NORMAL,
    TOP,
    DOCK,
    OVERRIDE_REDIRECT,
    LAST,
}
export enum TabList {
    NORMAL,
    DOCKS,
    GROUP,
    NORMAL_ALL,
}
export enum TabShowType {
    ICON,
    INSTANTLY,
}
export enum WindowClientType {
    WAYLAND,
    X11,
}
export enum WindowMenuType {
    WM,
    APP,
}
export enum WindowType {
    NORMAL,
    DESKTOP,
    DOCK,
    DIALOG,
    MODAL_DIALOG,
    TOOLBAR,
    MENU,
    UTILITY,
    SPLASHSCREEN,
    DROPDOWN_MENU,
    POPUP_MENU,
    TOOLTIP,
    NOTIFICATION,
    COMBO,
    DND,
    OVERRIDE_OTHER,
}
export enum BarrierDirection {
    POSITIVE_X,
    POSITIVE_Y,
    NEGATIVE_X,
    NEGATIVE_Y,
}
export enum DebugPaintFlag {
    NONE,
    OPAQUE_REGION,
}
export enum DebugTopic {
    VERBOSE,
    FOCUS,
    WORKAREA,
    STACK,
    SM,
    EVENTS,
    WINDOW_STATE,
    WINDOW_OPS,
    GEOMETRY,
    PLACEMENT,
    PING,
    KEYBINDINGS,
    SYNC,
    STARTUP,
    PREFS,
    GROUPS,
    RESIZING,
    SHAPES,
    EDGE_RESISTANCE,
    DBUS,
    INPUT,
    WAYLAND,
    KMS,
    SCREEN_CAST,
    REMOTE_DESKTOP,
}
export enum Direction {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
    UP,
    DOWN,
    HORIZONTAL,
    VERTICAL,
}
export enum FrameFlags {
    ALLOWS_DELETE,
    ALLOWS_MENU,
    ALLOWS_MINIMIZE,
    ALLOWS_MAXIMIZE,
    ALLOWS_VERTICAL_RESIZE,
    ALLOWS_HORIZONTAL_RESIZE,
    HAS_FOCUS,
    SHADED,
    STUCK,
    MAXIMIZED,
    ALLOWS_SHADE,
    ALLOWS_MOVE,
    FULLSCREEN,
    ABOVE,
    TILED_LEFT,
    TILED_RIGHT,
}
export enum KeyBindingFlags {
    NONE,
    PER_WINDOW,
    BUILTIN,
    IS_REVERSED,
    NON_MASKABLE,
    IGNORE_AUTOREPEAT,
    NO_AUTO_GRAB,
}
export enum MaximizeFlags {
    HORIZONTAL,
    VERTICAL,
    BOTH,
}
export enum ModalOptions {
    POINTER_ALREADY_GRABBED,
    KEYBOARD_ALREADY_GRABBED,
}
export enum VirtualModifier {
    SHIFT_MASK,
    CONTROL_MASK,
    ALT_MASK,
    META_MASK,
    SUPER_MASK,
    HYPER_MASK,
    MOD2_MASK,
    MOD3_MASK,
    MOD4_MASK,
    MOD5_MASK,
}
export const CURRENT_TIME: number
export const DEFAULT_ICON_NAME: string
export const ICON_HEIGHT: number
export const ICON_WIDTH: number
export const MINI_ICON_HEIGHT: number
export const MINI_ICON_WIDTH: number
export const PRIORITY_BEFORE_REDRAW: number
export const PRIORITY_PREFS_NOTIFY: number
export const PRIORITY_REDRAW: number
export const PRIORITY_RESIZE: number
export const VIRTUAL_CORE_KEYBOARD_ID: number
export const VIRTUAL_CORE_POINTER_ID: number
export function addClutterDebugFlags(debugFlags: Clutter.DebugFlag, drawFlags: Clutter.DrawDebugFlag, pickFlags: Clutter.PickDebugFlag): void
export function addDebugPaintFlag(flag: DebugPaintFlag): void
export function addVerboseTopic(topic: DebugTopic): void
export function clutterInit(): void
export function disableUnredirectForDisplay(display: Display): void
export function enableUnredirectForDisplay(display: Display): void
export function exit(code: ExitCode): void
export function externalBindingNameForAction(keybindingAction: number): string
export function finalize(): void
export function focusStageWindow(display: Display, timestamp: number): void
export function frameTypeToString(type: FrameType): string
export function gUtf8Strndup(src: string, n: number): string
export function getBackend(): Backend
export function getDebugPaintFlags(): DebugPaintFlag
export function getExitCode(): ExitCode
export function getFeedbackGroupForDisplay(display: Display): Clutter.Actor
export function getLocaleDirection(): LocaleDirection
export function getReplaceCurrentWm(): boolean
export function getStageForDisplay(display: Display): Clutter.Actor
export function getTopWindowGroupForDisplay(display: Display): Clutter.Actor
export function getWindowActors(display: Display): Clutter.Actor[]
export function getWindowGroupForDisplay(display: Display): Clutter.Actor
export function gravityToString(gravity: Gravity): string
export function isRestart(): boolean
export function isSyncing(): boolean
export function isTopicEnabled(topic: DebugTopic): boolean
export function isVerbose(): boolean
export function isWaylandCompositor(): boolean
export function keybindingsSetCustomHandler(name: string, handler: KeyHandlerFunc | null): boolean
export function laterAdd(when: LaterType, func: GLib.SourceFunc): number
export function laterRemove(laterId: number): void
export function popNoMsgPrefix(): void
export function preferenceToString(pref: Preference): string
export function prefsBellIsAudible(): boolean
export function prefsChangeWorkspaceName(i: number, name: string): void
export function prefsGetActionDoubleClickTitlebar(): GDesktopEnums.TitlebarAction
export function prefsGetActionMiddleClickTitlebar(): GDesktopEnums.TitlebarAction
export function prefsGetActionRightClickTitlebar(): GDesktopEnums.TitlebarAction
export function prefsGetAttachModalDialogs(): boolean
export function prefsGetAutoMaximize(): boolean
export function prefsGetAutoRaise(): boolean
export function prefsGetAutoRaiseDelay(): number
export function prefsGetButtonLayout(): /* buttonLayout */ ButtonLayout
export function prefsGetCenterNewWindows(): boolean
export function prefsGetCheckAliveTimeout(): number
export function prefsGetCompositingManager(): boolean
export function prefsGetCursorSize(): number
export function prefsGetCursorTheme(): string
export function prefsGetDisableWorkarounds(): boolean
export function prefsGetDragThreshold(): number
export function prefsGetDraggableBorderWidth(): number
export function prefsGetDynamicWorkspaces(): boolean
export function prefsGetEdgeTiling(): boolean
export function prefsGetFocusChangeOnPointerRest(): boolean
export function prefsGetFocusMode(): GDesktopEnums.FocusMode
export function prefsGetFocusNewWindows(): GDesktopEnums.FocusNewWindows
export function prefsGetForceFullscreen(): boolean
export function prefsGetGnomeAccessibility(): boolean
export function prefsGetGnomeAnimations(): boolean
export function prefsGetKeybindingAction(name: string): KeyBindingAction
export function prefsGetMouseButtonMenu(): number
export function prefsGetMouseButtonMods(): VirtualModifier
export function prefsGetMouseButtonResize(): number
export function prefsGetNumWorkspaces(): number
export function prefsGetRaiseOnClick(): boolean
export function prefsGetShowFallbackAppMenu(): boolean
export function prefsGetTitlebarFont(): Pango.FontDescription
export function prefsGetVisualBell(): boolean
export function prefsGetVisualBellType(): GDesktopEnums.VisualBellType
export function prefsGetWorkspaceName(i: number): string
export function prefsGetWorkspacesOnlyOnPrimary(): boolean
export function prefsInit(): void
export function prefsSetForceFullscreen(whether: boolean): void
export function prefsSetNumWorkspaces(nWorkspaces: number): void
export function prefsSetShowFallbackAppMenu(whether: boolean): void
export function pushNoMsgPrefix(): void
export function quit(code: ExitCode): void
export function rect(x: number, y: number, width: number, height: number): Rectangle
export function registerWithSession(): void
export function removeClutterDebugFlags(debugFlags: Clutter.DebugFlag, drawFlags: Clutter.DrawDebugFlag, pickFlags: Clutter.PickDebugFlag): void
export function removeDebugPaintFlag(flag: DebugPaintFlag): void
export function removeVerboseTopic(topic: DebugTopic): void
export function restart(message?: string | null): void
export function runMainLoop(): void
export function start(): void
export function testInit(): void
export function unsignedLongEqual(v1?: object | null, v2?: object | null): number
export function unsignedLongHash(v?: object | null): number
export function x11ErrorTrapPop(x11Display: X11Display): void
export function x11ErrorTrapPopWithReturn(x11Display: X11Display): number
export function x11ErrorTrapPush(x11Display: X11Display): void
export function x11InitGdkDisplay(): boolean
export interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, watchId: number): void
}
export interface KeyHandlerFunc {
    (display: Display, window: Window, event: object | null, binding: KeyBinding): void
}
export interface PrefsChangedFunc {
    (pref: Preference): void
}
export interface WindowForeachFunc {
    (window: Window): boolean
}
export class CloseDialog {
    /* Methods of Meta.CloseDialog */
    focus(): void
    hide(): void
    isVisible(): boolean
    response(response: CloseDialogResponse): void
    show(): void
    /* Virtual methods of Meta.CloseDialog */
    vfuncFocus(): void
    vfuncHide(): void
    vfuncShow(): void
    /* Signals of Meta.CloseDialog */
    connect(sigName: "response", callback: (($obj: CloseDialog, object: CloseDialogResponse) => void)): number
    connect_after(sigName: "response", callback: (($obj: CloseDialog, object: CloseDialogResponse) => void)): number
    emit(sigName: "response", object: CloseDialogResponse): void
    on(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class InhibitShortcutsDialog {
    /* Methods of Meta.InhibitShortcutsDialog */
    hide(): void
    response(response: InhibitShortcutsDialogResponse): void
    show(): void
    /* Virtual methods of Meta.InhibitShortcutsDialog */
    vfuncHide(): void
    vfuncShow(): void
    /* Signals of Meta.InhibitShortcutsDialog */
    connect(sigName: "response", callback: (($obj: InhibitShortcutsDialog, object: InhibitShortcutsDialogResponse) => void)): number
    connect_after(sigName: "response", callback: (($obj: InhibitShortcutsDialog, object: InhibitShortcutsDialogResponse) => void)): number
    emit(sigName: "response", object: InhibitShortcutsDialogResponse): void
    on(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export interface Backend_ConstructProps extends GObject.Object_ConstructProps {
}
export class Backend {
    /* Fields of Meta.Backend */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.Backend */
    getDnd(): Dnd
    getRemoteAccessController(): RemoteAccessController
    getStage(): Clutter.Actor
    isRenderingHardwareAccelerated(): boolean
    lockLayoutGroup(idx: number): void
    setKeymap(layouts: string, variants: string, options: string): void
    setNumlock(numlockState: boolean): void
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
    /* Virtual methods of Meta.Backend */
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.Backend */
    connect(sigName: "gpu-added", callback: (($obj: Backend, gpu: any) => void)): number
    connect_after(sigName: "gpu-added", callback: (($obj: Backend, gpu: any) => void)): number
    emit(sigName: "gpu-added", gpu: any): void
    on(sigName: "gpu-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "gpu-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "gpu-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keymap-changed", callback: (($obj: Backend) => void)): number
    connect_after(sigName: "keymap-changed", callback: (($obj: Backend) => void)): number
    emit(sigName: "keymap-changed"): void
    on(sigName: "keymap-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keymap-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keymap-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keymap-layout-group-changed", callback: (($obj: Backend, object: number) => void)): number
    connect_after(sigName: "keymap-layout-group-changed", callback: (($obj: Backend, object: number) => void)): number
    emit(sigName: "keymap-layout-group-changed", object: number): void
    on(sigName: "keymap-layout-group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keymap-layout-group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keymap-layout-group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "last-device-changed", callback: (($obj: Backend, object: Clutter.InputDevice) => void)): number
    connect_after(sigName: "last-device-changed", callback: (($obj: Backend, object: Clutter.InputDevice) => void)): number
    emit(sigName: "last-device-changed", object: Clutter.InputDevice): void
    on(sigName: "last-device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "last-device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "last-device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "lid-is-closed-changed", callback: (($obj: Backend, object: boolean) => void)): number
    connect_after(sigName: "lid-is-closed-changed", callback: (($obj: Backend, object: boolean) => void)): number
    emit(sigName: "lid-is-closed-changed", object: boolean): void
    on(sigName: "lid-is-closed-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "lid-is-closed-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "lid-is-closed-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "prepare-shutdown", callback: (($obj: Backend) => void)): number
    connect_after(sigName: "prepare-shutdown", callback: (($obj: Backend) => void)): number
    emit(sigName: "prepare-shutdown"): void
    on(sigName: "prepare-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "prepare-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "prepare-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Backend_ConstructProps)
    _init (config?: Backend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Background_ConstructProps extends GObject.Object_ConstructProps {
    metaDisplay?: Display
}
export class Background {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.Background */
    setBlend(file1: Gio.File, file2: Gio.File, blendFactor: number, style: GDesktopEnums.BackgroundStyle): void
    setColor(color: Clutter.Color): void
    setFile(file: Gio.File | null, style: GDesktopEnums.BackgroundStyle): void
    setGradient(shadingDirection: GDesktopEnums.BackgroundShading, color: Clutter.Color, secondColor: Clutter.Color): void
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
    /* Signals of Meta.Background */
    connect(sigName: "changed", callback: (($obj: Background) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Background) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Background, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Background, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Background_ConstructProps)
    _init (config?: Background_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: Display): Background
    static refreshAll(): void
    static $gtype: GObject.Type
}
export interface BackgroundActor_ConstructProps extends Clutter.Actor_ConstructProps {
    metaDisplay?: Display
    monitor?: number
}
export class BackgroundActor {
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    backgroundColor: Clutter.Color
    readonly backgroundColorSet: boolean
    childTransform: Graphene.Matrix
    readonly childTransformSet: boolean
    clipRect: Graphene.Rect
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly contentBox: Clutter.ActorBox
    contentGravity: Clutter.ContentGravity
    contentRepeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly firstChild: Clutter.Actor
    fixedPositionSet: boolean
    fixedX: number
    fixedY: number
    readonly hasClip: boolean
    readonly hasPointer: boolean
    height: number
    readonly lastChild: Clutter.Actor
    layoutManager: Clutter.LayoutManager
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    marginBottom: number
    marginLeft: number
    marginRight: number
    marginTop: number
    minHeight: number
    minHeightSet: boolean
    minWidth: number
    minWidthSet: boolean
    minificationFilter: Clutter.ScalingFilter
    name: string
    naturalHeight: number
    naturalHeightSet: boolean
    naturalWidth: number
    naturalWidthSet: boolean
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivotPoint: Graphene.Point
    pivotPointZ: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    requestMode: Clutter.RequestMode
    rotationAngleX: number
    rotationAngleY: number
    rotationAngleZ: number
    scaleX: number
    scaleY: number
    scaleZ: number
    showOnSetParent: boolean
    size: Graphene.Size
    textDirection: Clutter.TextDirection
    transform: Graphene.Matrix
    readonly transformSet: boolean
    translationX: number
    translationY: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    xAlign: Clutter.ActorAlign
    xExpand: boolean
    y: number
    yAlign: Clutter.ActorAlign
    yExpand: boolean
    zPosition: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Clutter.Actor */
    addAction(action: Clutter.Action): void
    addActionWithName(name: string, action: Clutter.Action): void
    addChild(child: Clutter.Actor): void
    addConstraint(constraint: Clutter.Constraint): void
    addConstraintWithName(name: string, constraint: Clutter.Constraint): void
    addEffect(effect: Clutter.Effect): void
    addEffectWithName(name: string, effect: Clutter.Effect): void
    addTransition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocateAlignFill(box: Clutter.ActorBox, xAlign: number, yAlign: number, xFill: boolean, yFill: boolean): void
    allocateAvailableSize(x: number, y: number, availableWidth: number, availableHeight: number): void
    allocatePreferredSize(x: number, y: number): void
    applyRelativeTransformToPoint(ancestor: Clutter.Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    applyTransformToPoint(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bindModel(model: Gio.ListModel | null, createChildFunc: Clutter.ActorCreateChildFunc): void
    clearActions(): void
    clearConstraints(): void
    clearEffects(): void
    contains(descendant: Clutter.Actor): boolean
    continuePaint(paintContext: Clutter.PaintContext): void
    continuePick(pickContext: Clutter.PickContext): void
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyAllChildren(): void
    event(event: Clutter.Event, capture: boolean): boolean
    getAbsAllocationVertices(): /* verts */ Graphene.Point3D[]
    getAccessible(): Atk.Object
    getAction(name: string): Clutter.Action
    getActions(): Clutter.Action[]
    getAllocationBox(): /* box */ Clutter.ActorBox
    getBackgroundColor(): /* color */ Clutter.Color
    getChildAtIndex(index: number): Clutter.Actor
    getChildTransform(): /* transform */ Graphene.Matrix
    getChildren(): Clutter.Actor[]
    getClip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    getClipToAllocation(): boolean
    getConstraint(name: string): Clutter.Constraint
    getConstraints(): Clutter.Constraint[]
    getContent(): Clutter.Content
    getContentBox(): /* box */ Clutter.ActorBox
    getContentGravity(): Clutter.ContentGravity
    getContentRepeat(): Clutter.ContentRepeat
    getContentScalingFilters(): [ /* minFilter */ Clutter.ScalingFilter | null, /* magFilter */ Clutter.ScalingFilter | null ]
    getDefaultPaintVolume(): Clutter.PaintVolume
    getEasingDelay(): number
    getEasingDuration(): number
    getEasingMode(): Clutter.AnimationMode
    getEffect(name: string): Clutter.Effect
    getEffects(): Clutter.Effect[]
    getFirstChild(): Clutter.Actor
    getFixedPosition(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    getFixedPositionSet(): boolean
    getFlags(): Clutter.ActorFlags
    getHeight(): number
    getLastChild(): Clutter.Actor
    getLayoutManager(): Clutter.LayoutManager
    getMargin(): /* margin */ Clutter.Margin
    getMarginBottom(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginTop(): number
    getNChildren(): number
    getName(): string
    getNextSibling(): Clutter.Actor
    getOffscreenRedirect(): Clutter.OffscreenRedirect
    getOpacity(): number
    getOpacityOverride(): number
    getPaintBox(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    getPaintOpacity(): number
    getPaintVisibility(): boolean
    getPaintVolume(): Clutter.PaintVolume
    getPangoContext(): Pango.Context
    getParent(): Clutter.Actor
    getPivotPoint(): [ /* pivotX */ number | null, /* pivotY */ number | null ]
    getPivotPointZ(): number
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredSize(): [ /* minWidthP */ number | null, /* minHeightP */ number | null, /* naturalWidthP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    getPreviousSibling(): Clutter.Actor
    getReactive(): boolean
    getRequestMode(): Clutter.RequestMode
    getResourceScale(): number
    getRotationAngle(axis: Clutter.RotateAxis): number
    getScale(): [ /* scaleX */ number | null, /* scaleY */ number | null ]
    getScaleZ(): number
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getStage(): Clutter.Stage
    getTextDirection(): Clutter.TextDirection
    getTransform(): /* transform */ Graphene.Matrix
    getTransformedExtents(): /* rect */ Graphene.Rect
    getTransformedPaintVolume(relativeToAncestor: Clutter.Actor): Clutter.PaintVolume
    getTransformedPosition(): [ /* x */ number | null, /* y */ number | null ]
    getTransformedSize(): [ /* width */ number | null, /* height */ number | null ]
    getTransition(name: string): Clutter.Transition
    getTranslation(): [ /* translateX */ number | null, /* translateY */ number | null, /* translateZ */ number | null ]
    getWidth(): number
    getX(): number
    getXAlign(): Clutter.ActorAlign
    getXExpand(): boolean
    getY(): number
    getYAlign(): Clutter.ActorAlign
    getYExpand(): boolean
    getZPosition(): number
    grabKeyFocus(): void
    hasAccessible(): boolean
    hasActions(): boolean
    hasAllocation(): boolean
    hasConstraints(): boolean
    hasDamage(): boolean
    hasEffects(): boolean
    hasKeyFocus(): boolean
    hasMappedClones(): boolean
    hasOverlaps(): boolean
    hide(): void
    inhibitCulling(): void
    insertChildAbove(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insertChildAtIndex(child: Clutter.Actor, index: number): void
    insertChildBelow(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    invalidatePaintVolume(): void
    invalidateTransform(): void
    isEffectivelyOnStageView(view: Clutter.StageView): boolean
    isInClonePaint(): boolean
    isMapped(): boolean
    isRealized(): boolean
    isRotated(): boolean
    isScaled(): boolean
    isVisible(): boolean
    map(): void
    moveBy(dx: number, dy: number): void
    needsExpand(orientation: Clutter.Orientation): boolean
    paint(paintContext: Clutter.PaintContext): void
    peekStageViews(): Clutter.StageView[]
    pick(pickContext: Clutter.PickContext): void
    pickBox(pickContext: Clutter.PickContext, box: Clutter.ActorBox): void
    queueRedraw(): void
    queueRedrawWithClip(clip?: cairo.RectangleInt | null): void
    queueRelayout(): void
    realize(): void
    removeAction(action: Clutter.Action): void
    removeActionByName(name: string): void
    removeAllChildren(): void
    removeAllTransitions(): void
    removeChild(child: Clutter.Actor): void
    removeClip(): void
    removeConstraint(constraint: Clutter.Constraint): void
    removeConstraintByName(name: string): void
    removeEffect(effect: Clutter.Effect): void
    removeEffectByName(name: string): void
    removeTransition(name: string): void
    replaceChild(oldChild: Clutter.Actor, newChild: Clutter.Actor): void
    restoreEasingState(): void
    saveEasingState(): void
    setAllocation(box: Clutter.ActorBox): void
    setBackgroundColor(color?: Clutter.Color | null): void
    setChildAboveSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildAtIndex(child: Clutter.Actor, index: number): void
    setChildBelowSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildTransform(transform?: Graphene.Matrix | null): void
    setClip(xoff: number, yoff: number, width: number, height: number): void
    setClipToAllocation(clipSet: boolean): void
    setContent(content?: Clutter.Content | null): void
    setContentGravity(gravity: Clutter.ContentGravity): void
    setContentRepeat(repeat: Clutter.ContentRepeat): void
    setContentScalingFilters(minFilter: Clutter.ScalingFilter, magFilter: Clutter.ScalingFilter): void
    setEasingDelay(msecs: number): void
    setEasingDuration(msecs: number): void
    setEasingMode(mode: Clutter.AnimationMode): void
    setFixedPositionSet(isSet: boolean): void
    setFlags(flags: Clutter.ActorFlags): void
    setHeight(height: number): void
    setLayoutManager(manager?: Clutter.LayoutManager | null): void
    setMargin(margin: Clutter.Margin): void
    setMarginBottom(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOffscreenRedirect(redirect: Clutter.OffscreenRedirect): void
    setOpacity(opacity: number): void
    setOpacityOverride(opacity: number): void
    setPivotPoint(pivotX: number, pivotY: number): void
    setPivotPointZ(pivotZ: number): void
    setPosition(x: number, y: number): void
    setReactive(reactive: boolean): void
    setRequestMode(mode: Clutter.RequestMode): void
    setRotationAngle(axis: Clutter.RotateAxis, angle: number): void
    setScale(scaleX: number, scaleY: number): void
    setScaleZ(scaleZ: number): void
    setSize(width: number, height: number): void
    setTextDirection(textDir: Clutter.TextDirection): void
    setTransform(transform?: Graphene.Matrix | null): void
    setTranslation(translateX: number, translateY: number, translateZ: number): void
    setWidth(width: number): void
    setX(x: number): void
    setXAlign(xAlign: Clutter.ActorAlign): void
    setXExpand(expand: boolean): void
    setY(y: number): void
    setYAlign(yAlign: Clutter.ActorAlign): void
    setYExpand(expand: boolean): void
    setZPosition(zPosition: number): void
    shouldPick(pickContext: Clutter.PickContext): boolean
    show(): void
    transformStagePoint(x: number, y: number): [ /* returnType */ boolean, /* xOut */ number, /* yOut */ number ]
    uninhibitCulling(): void
    unmap(): void
    unrealize(): void
    unsetFlags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    findProperty(propertyName: string): GObject.ParamSpec
    getActor(): Clutter.Actor
    getInitialState(propertyName: string, value: any): void
    interpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    setFinalState(propertyName: string, value: any): void
    /* Methods of Clutter.Container */
    addActor(actor: Clutter.Actor): void
    childGetProperty(child: Clutter.Actor, property: string, value: any): void
    childNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    childSetProperty(child: Clutter.Actor, property: string, value: any): void
    createChildMeta(actor: Clutter.Actor): void
    destroyChildMeta(actor: Clutter.Actor): void
    findChildByName(childName: string): Clutter.Actor
    getChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    lowerChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raiseChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    removeActor(actor: Clutter.Actor): void
    sortDepthOrder(): void
    /* Methods of Clutter.Scriptable */
    getId(): string
    parseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    setCustomProperty(script: Clutter.Script, name: string, value: any): void
    setId(id: string): void
    /* Virtual methods of Meta.BackgroundActor */
    vfuncFindProperty(propertyName: string): GObject.ParamSpec
    vfuncGetActor(): Clutter.Actor
    vfuncGetInitialState(propertyName: string, value: any): void
    vfuncInterpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfuncSetFinalState(propertyName: string, value: any): void
    vfuncActorAdded(actor: Clutter.Actor): void
    vfuncActorRemoved(actor: Clutter.Actor): void
    vfuncAdd(actor: Clutter.Actor): void
    vfuncChildNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfuncCreateChildMeta(actor: Clutter.Actor): void
    vfuncDestroyChildMeta(actor: Clutter.Actor): void
    vfuncGetChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    vfuncLower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRaise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRemove(actor: Clutter.Actor): void
    vfuncSortDepthOrder(): void
    vfuncGetId(): string
    vfuncParseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfuncSetCustomProperty(script: Clutter.Script, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Clutter.Actor */
    vfuncAllocate(box: Clutter.ActorBox): void
    vfuncApplyTransform(matrix: Graphene.Matrix): void
    vfuncButtonPressEvent(event: Clutter.ButtonEvent): boolean
    vfuncButtonReleaseEvent(event: Clutter.ButtonEvent): boolean
    vfuncCalculateResourceScale(phase: number): number
    vfuncCapturedEvent(event: Clutter.Event): boolean
    vfuncDestroy(): void
    vfuncEnterEvent(event: Clutter.CrossingEvent): boolean
    vfuncEvent(event: Clutter.Event): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGetPaintVolume(volume: Clutter.PaintVolume): boolean
    vfuncGetPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    vfuncGetPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    vfuncHasAccessible(): boolean
    vfuncHasOverlaps(): boolean
    vfuncHide(): void
    vfuncHideAll(): void
    vfuncKeyFocusIn(): void
    vfuncKeyFocusOut(): void
    vfuncKeyPressEvent(event: Clutter.KeyEvent): boolean
    vfuncKeyReleaseEvent(event: Clutter.KeyEvent): boolean
    vfuncLeaveEvent(event: Clutter.CrossingEvent): boolean
    vfuncMap(): void
    vfuncMotionEvent(event: Clutter.MotionEvent): boolean
    vfuncPaint(paintContext: Clutter.PaintContext): void
    vfuncPaintNode(root: Clutter.PaintNode): void
    vfuncParentSet(oldParent: Clutter.Actor): void
    vfuncPick(pickContext: Clutter.PickContext): void
    vfuncQueueRelayout(): void
    vfuncRealize(): void
    vfuncResourceScaleChanged(): void
    vfuncScrollEvent(event: Clutter.ScrollEvent): boolean
    vfuncShow(): void
    vfuncTouchEvent(event: Clutter.TouchEvent): boolean
    vfuncUnmap(): void
    vfuncUnrealize(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: BackgroundActor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: BackgroundActor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: BackgroundActor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: BackgroundActor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "captured-event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    on(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-event", callback: (($obj: BackgroundActor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: BackgroundActor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    on(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "hide", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-in", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "key-focus-in"): void
    on(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-out", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "key-focus-out"): void
    on(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: BackgroundActor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: BackgroundActor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: BackgroundActor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: BackgroundActor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-event", callback: (($obj: BackgroundActor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: BackgroundActor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    on(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-event", callback: (($obj: BackgroundActor, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: BackgroundActor, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    on(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: BackgroundActor, oldParent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: BackgroundActor, oldParent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Clutter.Actor | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pick", callback: (($obj: BackgroundActor, pickContext: Clutter.PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: BackgroundActor, pickContext: Clutter.PickContext) => void)): number
    emit(sigName: "pick", pickContext: Clutter.PickContext): void
    on(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-relayout", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "queue-relayout"): void
    on(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "realize", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resource-scale-changed", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "resource-scale-changed"): void
    on(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: BackgroundActor, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: BackgroundActor, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "show", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stage-views-changed", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "stage-views-changed"): void
    on(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transition-stopped", callback: (($obj: BackgroundActor, name: string, isFinished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: BackgroundActor, name: string, isFinished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, isFinished: boolean): void
    on(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transitions-completed", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "transitions-completed"): void
    on(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: BackgroundActor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: BackgroundActor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    on(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "actor-removed", callback: (($obj: BackgroundActor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: BackgroundActor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    on(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: BackgroundActor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: BackgroundActor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actions", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-rect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::constraints", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-box", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-gravity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-repeat", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::effect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-clip", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-pointer", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::magnification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reactive", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realized", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-mode", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-direction", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::z-position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BackgroundActor_ConstructProps)
    _init (config?: BackgroundActor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: Display, monitor: number): BackgroundActor
    static new(): BackgroundActor
    static classFindChildProperty(klass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classListChildProperties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface BackgroundContent_ConstructProps extends GObject.Object_ConstructProps {
    background?: Background
    brightness?: number
    gradient?: boolean
    gradientHeight?: number
    gradientMaxDarkness?: number
    metaDisplay?: Display
    monitor?: number
    roundedClipRadius?: number
    vignette?: boolean
    vignetteSharpness?: number
}
export class BackgroundContent {
    /* Properties of Meta.BackgroundContent */
    background: Background
    brightness: number
    gradient: boolean
    gradientHeight: number
    gradientMaxDarkness: number
    roundedClipRadius: number
    vignette: boolean
    vignetteSharpness: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.BackgroundContent */
    setBackground(background: Background): void
    setGradient(enabled: boolean, height: number, toneStart: number): void
    setRoundedClipBounds(bounds?: Graphene.Rect | null): void
    setRoundedClipRadius(radius: number): void
    setVignette(enabled: boolean, brightness: number, sharpness: number): void
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
    /* Methods of Clutter.Content */
    getPreferredSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    invalidate(): void
    invalidateSize(): void
    /* Virtual methods of Meta.BackgroundContent */
    vfuncAttached(actor: Clutter.Actor): void
    vfuncDetached(actor: Clutter.Actor): void
    vfuncGetPreferredSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    vfuncInvalidate(): void
    vfuncInvalidateSize(): void
    vfuncPaintContent(actor: Clutter.Actor, node: Clutter.PaintNode, paintContext: Clutter.PaintContext): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Content */
    connect(sigName: "attached", callback: (($obj: BackgroundContent, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: BackgroundContent, actor: Clutter.Actor) => void)): number
    emit(sigName: "attached", actor: Clutter.Actor): void
    on(sigName: "attached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "attached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "attached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "detached", callback: (($obj: BackgroundContent, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: BackgroundContent, actor: Clutter.Actor) => void)): number
    emit(sigName: "detached", actor: Clutter.Actor): void
    on(sigName: "detached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "detached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "detached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::brightness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::brightness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::brightness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::brightness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::brightness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gradient", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gradient", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gradient", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gradient", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gradient", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gradient-height", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gradient-height", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gradient-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gradient-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gradient-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gradient-max-darkness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gradient-max-darkness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gradient-max-darkness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gradient-max-darkness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gradient-max-darkness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rounded-clip-radius", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rounded-clip-radius", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rounded-clip-radius", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rounded-clip-radius", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rounded-clip-radius", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vignette", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vignette", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vignette", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vignette", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vignette", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vignette-sharpness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vignette-sharpness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vignette-sharpness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vignette-sharpness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vignette-sharpness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BackgroundContent_ConstructProps)
    _init (config?: BackgroundContent_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BackgroundGroup_ConstructProps extends Clutter.Actor_ConstructProps {
}
export class BackgroundGroup {
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    backgroundColor: Clutter.Color
    readonly backgroundColorSet: boolean
    childTransform: Graphene.Matrix
    readonly childTransformSet: boolean
    clipRect: Graphene.Rect
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly contentBox: Clutter.ActorBox
    contentGravity: Clutter.ContentGravity
    contentRepeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly firstChild: Clutter.Actor
    fixedPositionSet: boolean
    fixedX: number
    fixedY: number
    readonly hasClip: boolean
    readonly hasPointer: boolean
    height: number
    readonly lastChild: Clutter.Actor
    layoutManager: Clutter.LayoutManager
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    marginBottom: number
    marginLeft: number
    marginRight: number
    marginTop: number
    minHeight: number
    minHeightSet: boolean
    minWidth: number
    minWidthSet: boolean
    minificationFilter: Clutter.ScalingFilter
    name: string
    naturalHeight: number
    naturalHeightSet: boolean
    naturalWidth: number
    naturalWidthSet: boolean
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivotPoint: Graphene.Point
    pivotPointZ: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    requestMode: Clutter.RequestMode
    rotationAngleX: number
    rotationAngleY: number
    rotationAngleZ: number
    scaleX: number
    scaleY: number
    scaleZ: number
    showOnSetParent: boolean
    size: Graphene.Size
    textDirection: Clutter.TextDirection
    transform: Graphene.Matrix
    readonly transformSet: boolean
    translationX: number
    translationY: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    xAlign: Clutter.ActorAlign
    xExpand: boolean
    y: number
    yAlign: Clutter.ActorAlign
    yExpand: boolean
    zPosition: number
    /* Fields of Meta.BackgroundGroup */
    parentInstance: Clutter.Actor
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Clutter.Actor */
    addAction(action: Clutter.Action): void
    addActionWithName(name: string, action: Clutter.Action): void
    addChild(child: Clutter.Actor): void
    addConstraint(constraint: Clutter.Constraint): void
    addConstraintWithName(name: string, constraint: Clutter.Constraint): void
    addEffect(effect: Clutter.Effect): void
    addEffectWithName(name: string, effect: Clutter.Effect): void
    addTransition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocateAlignFill(box: Clutter.ActorBox, xAlign: number, yAlign: number, xFill: boolean, yFill: boolean): void
    allocateAvailableSize(x: number, y: number, availableWidth: number, availableHeight: number): void
    allocatePreferredSize(x: number, y: number): void
    applyRelativeTransformToPoint(ancestor: Clutter.Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    applyTransformToPoint(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bindModel(model: Gio.ListModel | null, createChildFunc: Clutter.ActorCreateChildFunc): void
    clearActions(): void
    clearConstraints(): void
    clearEffects(): void
    contains(descendant: Clutter.Actor): boolean
    continuePaint(paintContext: Clutter.PaintContext): void
    continuePick(pickContext: Clutter.PickContext): void
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyAllChildren(): void
    event(event: Clutter.Event, capture: boolean): boolean
    getAbsAllocationVertices(): /* verts */ Graphene.Point3D[]
    getAccessible(): Atk.Object
    getAction(name: string): Clutter.Action
    getActions(): Clutter.Action[]
    getAllocationBox(): /* box */ Clutter.ActorBox
    getBackgroundColor(): /* color */ Clutter.Color
    getChildAtIndex(index: number): Clutter.Actor
    getChildTransform(): /* transform */ Graphene.Matrix
    getChildren(): Clutter.Actor[]
    getClip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    getClipToAllocation(): boolean
    getConstraint(name: string): Clutter.Constraint
    getConstraints(): Clutter.Constraint[]
    getContent(): Clutter.Content
    getContentBox(): /* box */ Clutter.ActorBox
    getContentGravity(): Clutter.ContentGravity
    getContentRepeat(): Clutter.ContentRepeat
    getContentScalingFilters(): [ /* minFilter */ Clutter.ScalingFilter | null, /* magFilter */ Clutter.ScalingFilter | null ]
    getDefaultPaintVolume(): Clutter.PaintVolume
    getEasingDelay(): number
    getEasingDuration(): number
    getEasingMode(): Clutter.AnimationMode
    getEffect(name: string): Clutter.Effect
    getEffects(): Clutter.Effect[]
    getFirstChild(): Clutter.Actor
    getFixedPosition(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    getFixedPositionSet(): boolean
    getFlags(): Clutter.ActorFlags
    getHeight(): number
    getLastChild(): Clutter.Actor
    getLayoutManager(): Clutter.LayoutManager
    getMargin(): /* margin */ Clutter.Margin
    getMarginBottom(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginTop(): number
    getNChildren(): number
    getName(): string
    getNextSibling(): Clutter.Actor
    getOffscreenRedirect(): Clutter.OffscreenRedirect
    getOpacity(): number
    getOpacityOverride(): number
    getPaintBox(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    getPaintOpacity(): number
    getPaintVisibility(): boolean
    getPaintVolume(): Clutter.PaintVolume
    getPangoContext(): Pango.Context
    getParent(): Clutter.Actor
    getPivotPoint(): [ /* pivotX */ number | null, /* pivotY */ number | null ]
    getPivotPointZ(): number
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredSize(): [ /* minWidthP */ number | null, /* minHeightP */ number | null, /* naturalWidthP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    getPreviousSibling(): Clutter.Actor
    getReactive(): boolean
    getRequestMode(): Clutter.RequestMode
    getResourceScale(): number
    getRotationAngle(axis: Clutter.RotateAxis): number
    getScale(): [ /* scaleX */ number | null, /* scaleY */ number | null ]
    getScaleZ(): number
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getStage(): Clutter.Stage
    getTextDirection(): Clutter.TextDirection
    getTransform(): /* transform */ Graphene.Matrix
    getTransformedExtents(): /* rect */ Graphene.Rect
    getTransformedPaintVolume(relativeToAncestor: Clutter.Actor): Clutter.PaintVolume
    getTransformedPosition(): [ /* x */ number | null, /* y */ number | null ]
    getTransformedSize(): [ /* width */ number | null, /* height */ number | null ]
    getTransition(name: string): Clutter.Transition
    getTranslation(): [ /* translateX */ number | null, /* translateY */ number | null, /* translateZ */ number | null ]
    getWidth(): number
    getX(): number
    getXAlign(): Clutter.ActorAlign
    getXExpand(): boolean
    getY(): number
    getYAlign(): Clutter.ActorAlign
    getYExpand(): boolean
    getZPosition(): number
    grabKeyFocus(): void
    hasAccessible(): boolean
    hasActions(): boolean
    hasAllocation(): boolean
    hasConstraints(): boolean
    hasDamage(): boolean
    hasEffects(): boolean
    hasKeyFocus(): boolean
    hasMappedClones(): boolean
    hasOverlaps(): boolean
    hide(): void
    inhibitCulling(): void
    insertChildAbove(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insertChildAtIndex(child: Clutter.Actor, index: number): void
    insertChildBelow(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    invalidatePaintVolume(): void
    invalidateTransform(): void
    isEffectivelyOnStageView(view: Clutter.StageView): boolean
    isInClonePaint(): boolean
    isMapped(): boolean
    isRealized(): boolean
    isRotated(): boolean
    isScaled(): boolean
    isVisible(): boolean
    map(): void
    moveBy(dx: number, dy: number): void
    needsExpand(orientation: Clutter.Orientation): boolean
    paint(paintContext: Clutter.PaintContext): void
    peekStageViews(): Clutter.StageView[]
    pick(pickContext: Clutter.PickContext): void
    pickBox(pickContext: Clutter.PickContext, box: Clutter.ActorBox): void
    queueRedraw(): void
    queueRedrawWithClip(clip?: cairo.RectangleInt | null): void
    queueRelayout(): void
    realize(): void
    removeAction(action: Clutter.Action): void
    removeActionByName(name: string): void
    removeAllChildren(): void
    removeAllTransitions(): void
    removeChild(child: Clutter.Actor): void
    removeClip(): void
    removeConstraint(constraint: Clutter.Constraint): void
    removeConstraintByName(name: string): void
    removeEffect(effect: Clutter.Effect): void
    removeEffectByName(name: string): void
    removeTransition(name: string): void
    replaceChild(oldChild: Clutter.Actor, newChild: Clutter.Actor): void
    restoreEasingState(): void
    saveEasingState(): void
    setAllocation(box: Clutter.ActorBox): void
    setBackgroundColor(color?: Clutter.Color | null): void
    setChildAboveSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildAtIndex(child: Clutter.Actor, index: number): void
    setChildBelowSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildTransform(transform?: Graphene.Matrix | null): void
    setClip(xoff: number, yoff: number, width: number, height: number): void
    setClipToAllocation(clipSet: boolean): void
    setContent(content?: Clutter.Content | null): void
    setContentGravity(gravity: Clutter.ContentGravity): void
    setContentRepeat(repeat: Clutter.ContentRepeat): void
    setContentScalingFilters(minFilter: Clutter.ScalingFilter, magFilter: Clutter.ScalingFilter): void
    setEasingDelay(msecs: number): void
    setEasingDuration(msecs: number): void
    setEasingMode(mode: Clutter.AnimationMode): void
    setFixedPositionSet(isSet: boolean): void
    setFlags(flags: Clutter.ActorFlags): void
    setHeight(height: number): void
    setLayoutManager(manager?: Clutter.LayoutManager | null): void
    setMargin(margin: Clutter.Margin): void
    setMarginBottom(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOffscreenRedirect(redirect: Clutter.OffscreenRedirect): void
    setOpacity(opacity: number): void
    setOpacityOverride(opacity: number): void
    setPivotPoint(pivotX: number, pivotY: number): void
    setPivotPointZ(pivotZ: number): void
    setPosition(x: number, y: number): void
    setReactive(reactive: boolean): void
    setRequestMode(mode: Clutter.RequestMode): void
    setRotationAngle(axis: Clutter.RotateAxis, angle: number): void
    setScale(scaleX: number, scaleY: number): void
    setScaleZ(scaleZ: number): void
    setSize(width: number, height: number): void
    setTextDirection(textDir: Clutter.TextDirection): void
    setTransform(transform?: Graphene.Matrix | null): void
    setTranslation(translateX: number, translateY: number, translateZ: number): void
    setWidth(width: number): void
    setX(x: number): void
    setXAlign(xAlign: Clutter.ActorAlign): void
    setXExpand(expand: boolean): void
    setY(y: number): void
    setYAlign(yAlign: Clutter.ActorAlign): void
    setYExpand(expand: boolean): void
    setZPosition(zPosition: number): void
    shouldPick(pickContext: Clutter.PickContext): boolean
    show(): void
    transformStagePoint(x: number, y: number): [ /* returnType */ boolean, /* xOut */ number, /* yOut */ number ]
    uninhibitCulling(): void
    unmap(): void
    unrealize(): void
    unsetFlags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    findProperty(propertyName: string): GObject.ParamSpec
    getActor(): Clutter.Actor
    getInitialState(propertyName: string, value: any): void
    interpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    setFinalState(propertyName: string, value: any): void
    /* Methods of Clutter.Container */
    addActor(actor: Clutter.Actor): void
    childGetProperty(child: Clutter.Actor, property: string, value: any): void
    childNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    childSetProperty(child: Clutter.Actor, property: string, value: any): void
    createChildMeta(actor: Clutter.Actor): void
    destroyChildMeta(actor: Clutter.Actor): void
    findChildByName(childName: string): Clutter.Actor
    getChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    lowerChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raiseChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    removeActor(actor: Clutter.Actor): void
    sortDepthOrder(): void
    /* Methods of Clutter.Scriptable */
    getId(): string
    parseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    setCustomProperty(script: Clutter.Script, name: string, value: any): void
    setId(id: string): void
    /* Virtual methods of Meta.BackgroundGroup */
    vfuncFindProperty(propertyName: string): GObject.ParamSpec
    vfuncGetActor(): Clutter.Actor
    vfuncGetInitialState(propertyName: string, value: any): void
    vfuncInterpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfuncSetFinalState(propertyName: string, value: any): void
    vfuncActorAdded(actor: Clutter.Actor): void
    vfuncActorRemoved(actor: Clutter.Actor): void
    vfuncAdd(actor: Clutter.Actor): void
    vfuncChildNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfuncCreateChildMeta(actor: Clutter.Actor): void
    vfuncDestroyChildMeta(actor: Clutter.Actor): void
    vfuncGetChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    vfuncLower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRaise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRemove(actor: Clutter.Actor): void
    vfuncSortDepthOrder(): void
    vfuncGetId(): string
    vfuncParseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfuncSetCustomProperty(script: Clutter.Script, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Clutter.Actor */
    vfuncAllocate(box: Clutter.ActorBox): void
    vfuncApplyTransform(matrix: Graphene.Matrix): void
    vfuncButtonPressEvent(event: Clutter.ButtonEvent): boolean
    vfuncButtonReleaseEvent(event: Clutter.ButtonEvent): boolean
    vfuncCalculateResourceScale(phase: number): number
    vfuncCapturedEvent(event: Clutter.Event): boolean
    vfuncDestroy(): void
    vfuncEnterEvent(event: Clutter.CrossingEvent): boolean
    vfuncEvent(event: Clutter.Event): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGetPaintVolume(volume: Clutter.PaintVolume): boolean
    vfuncGetPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    vfuncGetPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    vfuncHasAccessible(): boolean
    vfuncHasOverlaps(): boolean
    vfuncHide(): void
    vfuncHideAll(): void
    vfuncKeyFocusIn(): void
    vfuncKeyFocusOut(): void
    vfuncKeyPressEvent(event: Clutter.KeyEvent): boolean
    vfuncKeyReleaseEvent(event: Clutter.KeyEvent): boolean
    vfuncLeaveEvent(event: Clutter.CrossingEvent): boolean
    vfuncMap(): void
    vfuncMotionEvent(event: Clutter.MotionEvent): boolean
    vfuncPaint(paintContext: Clutter.PaintContext): void
    vfuncPaintNode(root: Clutter.PaintNode): void
    vfuncParentSet(oldParent: Clutter.Actor): void
    vfuncPick(pickContext: Clutter.PickContext): void
    vfuncQueueRelayout(): void
    vfuncRealize(): void
    vfuncResourceScaleChanged(): void
    vfuncScrollEvent(event: Clutter.ScrollEvent): boolean
    vfuncShow(): void
    vfuncTouchEvent(event: Clutter.TouchEvent): boolean
    vfuncUnmap(): void
    vfuncUnrealize(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: BackgroundGroup, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: BackgroundGroup, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: BackgroundGroup, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: BackgroundGroup, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "captured-event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    on(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-event", callback: (($obj: BackgroundGroup, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: BackgroundGroup, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    on(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "hide", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-in", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "key-focus-in"): void
    on(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-out", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "key-focus-out"): void
    on(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: BackgroundGroup, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: BackgroundGroup, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: BackgroundGroup, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: BackgroundGroup, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-event", callback: (($obj: BackgroundGroup, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: BackgroundGroup, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    on(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-event", callback: (($obj: BackgroundGroup, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: BackgroundGroup, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    on(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: BackgroundGroup, oldParent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: BackgroundGroup, oldParent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Clutter.Actor | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pick", callback: (($obj: BackgroundGroup, pickContext: Clutter.PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: BackgroundGroup, pickContext: Clutter.PickContext) => void)): number
    emit(sigName: "pick", pickContext: Clutter.PickContext): void
    on(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-relayout", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "queue-relayout"): void
    on(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "realize", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resource-scale-changed", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "resource-scale-changed"): void
    on(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: BackgroundGroup, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: BackgroundGroup, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "show", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stage-views-changed", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "stage-views-changed"): void
    on(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transition-stopped", callback: (($obj: BackgroundGroup, name: string, isFinished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: BackgroundGroup, name: string, isFinished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, isFinished: boolean): void
    on(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transitions-completed", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "transitions-completed"): void
    on(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: BackgroundGroup, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: BackgroundGroup, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    on(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "actor-removed", callback: (($obj: BackgroundGroup, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: BackgroundGroup, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    on(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: BackgroundGroup, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: BackgroundGroup, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actions", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-rect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::constraints", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-box", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-gravity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-repeat", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::effect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-clip", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-pointer", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::magnification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reactive", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realized", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-mode", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-direction", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::z-position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BackgroundGroup_ConstructProps)
    _init (config?: BackgroundGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BackgroundGroup
    static classFindChildProperty(klass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classListChildProperties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface BackgroundImage_ConstructProps extends GObject.Object_ConstructProps {
}
export class BackgroundImage {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.BackgroundImage */
    getSuccess(): boolean
    getTexture(): Cogl.Texture
    isLoaded(): boolean
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
    /* Signals of Meta.BackgroundImage */
    connect(sigName: "loaded", callback: (($obj: BackgroundImage) => void)): number
    connect_after(sigName: "loaded", callback: (($obj: BackgroundImage) => void)): number
    emit(sigName: "loaded"): void
    on(sigName: "loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackgroundImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackgroundImage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BackgroundImage_ConstructProps)
    _init (config?: BackgroundImage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BackgroundImageCache_ConstructProps extends GObject.Object_ConstructProps {
}
export class BackgroundImageCache {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.BackgroundImageCache */
    load(file: Gio.File): BackgroundImage
    purge(file: Gio.File): void
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
    connect(sigName: "notify", callback: (($obj: BackgroundImageCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackgroundImageCache, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BackgroundImageCache_ConstructProps)
    _init (config?: BackgroundImageCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): BackgroundImageCache
    static $gtype: GObject.Type
}
export interface Barrier_ConstructProps extends GObject.Object_ConstructProps {
    directions?: BarrierDirection
    display?: Display
    x1?: number
    x2?: number
    y1?: number
    y2?: number
}
export class Barrier {
    /* Fields of Meta.Barrier */
    parent: GObject.Object
    priv: BarrierPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.Barrier */
    destroy(): void
    isActive(): boolean
    release(event: BarrierEvent): void
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
    /* Signals of Meta.Barrier */
    connect(sigName: "hit", callback: (($obj: Barrier, event: BarrierEvent) => void)): number
    connect_after(sigName: "hit", callback: (($obj: Barrier, event: BarrierEvent) => void)): number
    emit(sigName: "hit", event: BarrierEvent): void
    on(sigName: "hit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "left", callback: (($obj: Barrier, event: BarrierEvent) => void)): number
    connect_after(sigName: "left", callback: (($obj: Barrier, event: BarrierEvent) => void)): number
    emit(sigName: "left", event: BarrierEvent): void
    on(sigName: "left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Barrier_ConstructProps)
    _init (config?: Barrier_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Compositor_ConstructProps extends GObject.Object_ConstructProps {
    backend?: Backend
    display?: Display
}
export class Compositor {
    /* Fields of Meta.Compositor */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.Compositor */
    addWindow(window: Window): void
    destroy(): void
    filterKeybinding(binding: KeyBinding): boolean
    flashDisplay(display: Display): void
    hideTilePreview(): void
    hideWindow(window: Window, effect: CompEffect): void
    manage(): void
    queueFrameDrawn(window: Window, noDelayFrame: boolean): void
    removeWindow(window: Window): void
    showTilePreview(window: Window, tileRect: Rectangle, tileMonitorNumber: number): void
    showWindow(window: Window, effect: CompEffect): void
    showWindowMenu(window: Window, menu: WindowMenuType, x: number, y: number): void
    showWindowMenuForRect(window: Window, menu: WindowMenuType, rect: Rectangle): void
    sizeChangeWindow(window: Window, whichChange: SizeChange, oldFrameRect: Rectangle, oldBufferRect: Rectangle): void
    switchWorkspace(from: Workspace, to: Workspace, direction: MotionDirection): void
    syncStack(stack: object[]): void
    syncUpdatesFrozen(window: Window): void
    syncWindowGeometry(window: Window, didPlacement: boolean): void
    unmanage(): void
    windowOpacityChanged(window: Window): void
    windowShapeChanged(window: Window): void
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
    connect(sigName: "notify", callback: (($obj: Compositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Compositor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Compositor_ConstructProps)
    _init (config?: Compositor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CursorTracker_ConstructProps extends GObject.Object_ConstructProps {
    backend?: Backend
}
export class CursorTracker {
    /* Fields of Meta.CursorTracker */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.CursorTracker */
    getHot(): [ /* x */ number, /* y */ number ]
    getPointer(coords: Graphene.Point, mods: Clutter.ModifierType): void
    getPointerVisible(): boolean
    getSprite(): Cogl.Texture
    setPointerVisible(visible: boolean): void
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
    /* Signals of Meta.CursorTracker */
    connect(sigName: "cursor-changed", callback: (($obj: CursorTracker) => void)): number
    connect_after(sigName: "cursor-changed", callback: (($obj: CursorTracker) => void)): number
    emit(sigName: "cursor-changed"): void
    on(sigName: "cursor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "position-invalidated", callback: (($obj: CursorTracker) => void)): number
    connect_after(sigName: "position-invalidated", callback: (($obj: CursorTracker) => void)): number
    emit(sigName: "position-invalidated"): void
    on(sigName: "position-invalidated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "position-invalidated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "position-invalidated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visibility-changed", callback: (($obj: CursorTracker) => void)): number
    connect_after(sigName: "visibility-changed", callback: (($obj: CursorTracker) => void)): number
    emit(sigName: "visibility-changed"): void
    on(sigName: "visibility-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visibility-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visibility-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CursorTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CursorTracker, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CursorTracker_ConstructProps)
    _init (config?: CursorTracker_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getForDisplay(display: Display): CursorTracker
    static $gtype: GObject.Type
}
export interface Display_ConstructProps extends GObject.Object_ConstructProps {
}
export class Display {
    /* Properties of Meta.Display */
    readonly compositorModifiers: Clutter.ModifierType
    readonly focusWindow: Window
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.Display */
    addIgnoredCrossingSerial(serial: number): void
    addKeybinding(name: string, settings: Gio.Settings, flags: KeyBindingFlags, handler: KeyHandlerFunc): number
    beginGrabOp(window: Window, op: GrabOp, pointerAlreadyGrabbed: boolean, frameAction: boolean, button: number, modmask: number, timestamp: number, rootX: number, rootY: number): boolean
    clearMouseMode(): void
    close(timestamp: number): void
    endGrabOp(timestamp: number): void
    focusDefaultWindow(timestamp: number): void
    freezeKeyboard(timestamp: number): void
    getCompositorModifiers(): Clutter.ModifierType
    getCurrentMonitor(): number
    getCurrentTime(): number
    getCurrentTimeRoundtrip(): number
    getFocusWindow(): Window
    getGrabOp(): GrabOp
    getKeybindingAction(keycode: number, mask: number): number
    getLastUserTime(): number
    getMonitorGeometry(monitor: number): /* geometry */ Rectangle
    getMonitorInFullscreen(monitor: number): boolean
    getMonitorIndexForRect(rect: Rectangle): number
    getMonitorNeighborIndex(whichMonitor: number, dir: DisplayDirection): number
    getMonitorScale(monitor: number): number
    getNMonitors(): number
    getPadActionLabel(pad: Clutter.InputDevice, actionType: PadActionType, actionNumber: number): string
    getPrimaryMonitor(): number
    getSelection(): Selection
    getSize(): [ /* width */ number, /* height */ number ]
    getSoundPlayer(): SoundPlayer
    getTabCurrent(type: TabList, workspace: Workspace): Window
    getTabList(type: TabList, workspace?: Workspace | null): Window[]
    getTabNext(type: TabList, workspace: Workspace, window: Window | null, backward: boolean): Window
    getWorkspaceManager(): WorkspaceManager
    grabAccelerator(accelerator: string, flags: KeyBindingFlags): number
    isPointerEmulatingSequence(sequence?: Clutter.EventSequence | null): boolean
    removeKeybinding(name: string): boolean
    requestPadOsd(pad: Clutter.InputDevice, editionMode: boolean): void
    setCursor(cursor: Cursor): void
    setInputFocus(window: Window, focusFrame: boolean, timestamp: number): void
    sortWindowsByStacking(windows: Window[]): Window[]
    supportsExtendedBarriers(): boolean
    unfreezeKeyboard(timestamp: number): void
    ungrabAccelerator(actionId: number): boolean
    ungrabKeyboard(timestamp: number): void
    unsetInputFocus(timestamp: number): void
    xserverTimeIsBefore(time1: number, time2: number): boolean
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
    /* Signals of Meta.Display */
    connect(sigName: "accelerator-activated", callback: (($obj: Display, object: number, p0: Clutter.InputDevice, p1: number) => void)): number
    connect_after(sigName: "accelerator-activated", callback: (($obj: Display, object: number, p0: Clutter.InputDevice, p1: number) => void)): number
    emit(sigName: "accelerator-activated", object: number, p0: Clutter.InputDevice, p1: number): void
    on(sigName: "accelerator-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accelerator-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accelerator-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "closing", callback: (($obj: Display) => void)): number
    connect_after(sigName: "closing", callback: (($obj: Display) => void)): number
    emit(sigName: "closing"): void
    on(sigName: "closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-updated", callback: (($obj: Display) => void)): number
    connect_after(sigName: "cursor-updated", callback: (($obj: Display) => void)): number
    emit(sigName: "cursor-updated"): void
    on(sigName: "cursor-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "gl-video-memory-purged", callback: (($obj: Display) => void)): number
    connect_after(sigName: "gl-video-memory-purged", callback: (($obj: Display) => void)): number
    emit(sigName: "gl-video-memory-purged"): void
    on(sigName: "gl-video-memory-purged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "gl-video-memory-purged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "gl-video-memory-purged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-op-begin", callback: (($obj: Display, object: Window, p0: GrabOp) => void)): number
    connect_after(sigName: "grab-op-begin", callback: (($obj: Display, object: Window, p0: GrabOp) => void)): number
    emit(sigName: "grab-op-begin", object: Window, p0: GrabOp): void
    on(sigName: "grab-op-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-op-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-op-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-op-end", callback: (($obj: Display, object: Window, p0: GrabOp) => void)): number
    connect_after(sigName: "grab-op-end", callback: (($obj: Display, object: Window, p0: GrabOp) => void)): number
    emit(sigName: "grab-op-end", object: Window, p0: GrabOp): void
    on(sigName: "grab-op-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-op-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-op-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "in-fullscreen-changed", callback: (($obj: Display) => void)): number
    connect_after(sigName: "in-fullscreen-changed", callback: (($obj: Display) => void)): number
    emit(sigName: "in-fullscreen-changed"): void
    on(sigName: "in-fullscreen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "in-fullscreen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "in-fullscreen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "init-xserver", callback: (($obj: Display, object: Gio.Task) => boolean)): number
    connect_after(sigName: "init-xserver", callback: (($obj: Display, object: Gio.Task) => boolean)): number
    emit(sigName: "init-xserver", object: Gio.Task): void
    on(sigName: "init-xserver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "init-xserver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "init-xserver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "modifiers-accelerator-activated", callback: (($obj: Display) => boolean)): number
    connect_after(sigName: "modifiers-accelerator-activated", callback: (($obj: Display) => boolean)): number
    emit(sigName: "modifiers-accelerator-activated"): void
    on(sigName: "modifiers-accelerator-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "modifiers-accelerator-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "modifiers-accelerator-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "overlay-key", callback: (($obj: Display) => void)): number
    connect_after(sigName: "overlay-key", callback: (($obj: Display) => void)): number
    emit(sigName: "overlay-key"): void
    on(sigName: "overlay-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "overlay-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "overlay-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-mode-switch", callback: (($obj: Display, object: Clutter.InputDevice, p0: number, p1: number) => void)): number
    connect_after(sigName: "pad-mode-switch", callback: (($obj: Display, object: Clutter.InputDevice, p0: number, p1: number) => void)): number
    emit(sigName: "pad-mode-switch", object: Clutter.InputDevice, p0: number, p1: number): void
    on(sigName: "pad-mode-switch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-mode-switch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-mode-switch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "restacked", callback: (($obj: Display) => void)): number
    connect_after(sigName: "restacked", callback: (($obj: Display) => void)): number
    emit(sigName: "restacked"): void
    on(sigName: "restacked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "restacked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "restacked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "restart", callback: (($obj: Display) => boolean)): number
    connect_after(sigName: "restart", callback: (($obj: Display) => boolean)): number
    emit(sigName: "restart"): void
    on(sigName: "restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-osd", callback: (($obj: Display, object: number, p0: string, p1: string) => void)): number
    connect_after(sigName: "show-osd", callback: (($obj: Display, object: number, p0: string, p1: string) => void)): number
    emit(sigName: "show-osd", object: number, p0: string, p1: string): void
    on(sigName: "show-osd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-osd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-osd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-pad-osd", callback: (($obj: Display, pad: Clutter.InputDevice, settings: Gio.Settings, layoutPath: string, editionMode: boolean, monitorIdx: number) => Clutter.Actor | null)): number
    connect_after(sigName: "show-pad-osd", callback: (($obj: Display, pad: Clutter.InputDevice, settings: Gio.Settings, layoutPath: string, editionMode: boolean, monitorIdx: number) => Clutter.Actor | null)): number
    emit(sigName: "show-pad-osd", pad: Clutter.InputDevice, settings: Gio.Settings, layoutPath: string, editionMode: boolean, monitorIdx: number): void
    on(sigName: "show-pad-osd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-pad-osd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-pad-osd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-resize-popup", callback: (($obj: Display, object: boolean, p0: Rectangle, p1: number, p2: number) => boolean)): number
    connect_after(sigName: "show-resize-popup", callback: (($obj: Display, object: boolean, p0: Rectangle, p1: number, p2: number) => boolean)): number
    emit(sigName: "show-resize-popup", object: boolean, p0: Rectangle, p1: number, p2: number): void
    on(sigName: "show-resize-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-resize-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-resize-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-restart-message", callback: (($obj: Display, message?: string | null) => boolean)): number
    connect_after(sigName: "show-restart-message", callback: (($obj: Display, message?: string | null) => boolean)): number
    emit(sigName: "show-restart-message", message?: string | null): void
    on(sigName: "show-restart-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-restart-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-restart-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "showing-desktop-changed", callback: (($obj: Display) => void)): number
    connect_after(sigName: "showing-desktop-changed", callback: (($obj: Display) => void)): number
    emit(sigName: "showing-desktop-changed"): void
    on(sigName: "showing-desktop-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "showing-desktop-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "showing-desktop-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-created", callback: (($obj: Display, object: Window) => void)): number
    connect_after(sigName: "window-created", callback: (($obj: Display, object: Window) => void)): number
    emit(sigName: "window-created", object: Window): void
    on(sigName: "window-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-demands-attention", callback: (($obj: Display, object: Window) => void)): number
    connect_after(sigName: "window-demands-attention", callback: (($obj: Display, object: Window) => void)): number
    emit(sigName: "window-demands-attention", object: Window): void
    on(sigName: "window-demands-attention", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-demands-attention", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-demands-attention", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-entered-monitor", callback: (($obj: Display, object: number, p0: Window) => void)): number
    connect_after(sigName: "window-entered-monitor", callback: (($obj: Display, object: number, p0: Window) => void)): number
    emit(sigName: "window-entered-monitor", object: number, p0: Window): void
    on(sigName: "window-entered-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-entered-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-entered-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-left-monitor", callback: (($obj: Display, object: number, p0: Window) => void)): number
    connect_after(sigName: "window-left-monitor", callback: (($obj: Display, object: number, p0: Window) => void)): number
    emit(sigName: "window-left-monitor", object: number, p0: Window): void
    on(sigName: "window-left-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-left-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-left-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-marked-urgent", callback: (($obj: Display, object: Window) => void)): number
    connect_after(sigName: "window-marked-urgent", callback: (($obj: Display, object: Window) => void)): number
    emit(sigName: "window-marked-urgent", object: Window): void
    on(sigName: "window-marked-urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-marked-urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-marked-urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "workareas-changed", callback: (($obj: Display) => void)): number
    connect_after(sigName: "workareas-changed", callback: (($obj: Display) => void)): number
    emit(sigName: "workareas-changed"): void
    on(sigName: "workareas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "workareas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "workareas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "x11-display-closing", callback: (($obj: Display) => void)): number
    connect_after(sigName: "x11-display-closing", callback: (($obj: Display) => void)): number
    emit(sigName: "x11-display-closing"): void
    on(sigName: "x11-display-closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "x11-display-closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "x11-display-closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "x11-display-opened", callback: (($obj: Display) => void)): number
    connect_after(sigName: "x11-display-opened", callback: (($obj: Display) => void)): number
    emit(sigName: "x11-display-opened"): void
    on(sigName: "x11-display-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "x11-display-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "x11-display-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "x11-display-setup", callback: (($obj: Display) => void)): number
    connect_after(sigName: "x11-display-setup", callback: (($obj: Display) => void)): number
    emit(sigName: "x11-display-setup"): void
    on(sigName: "x11-display-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "x11-display-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "x11-display-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compositor-modifiers", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compositor-modifiers", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compositor-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compositor-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compositor-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Display_ConstructProps)
    _init (config?: Display_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Dnd_ConstructProps extends GObject.Object_ConstructProps {
}
export class Dnd {
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
    /* Signals of Meta.Dnd */
    connect(sigName: "dnd-enter", callback: (($obj: Dnd) => void)): number
    connect_after(sigName: "dnd-enter", callback: (($obj: Dnd) => void)): number
    emit(sigName: "dnd-enter"): void
    on(sigName: "dnd-enter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dnd-enter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dnd-enter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dnd-leave", callback: (($obj: Dnd) => void)): number
    connect_after(sigName: "dnd-leave", callback: (($obj: Dnd) => void)): number
    emit(sigName: "dnd-leave"): void
    on(sigName: "dnd-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dnd-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dnd-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dnd-position-change", callback: (($obj: Dnd, object: number, p0: number) => void)): number
    connect_after(sigName: "dnd-position-change", callback: (($obj: Dnd, object: number, p0: number) => void)): number
    emit(sigName: "dnd-position-change", object: number, p0: number): void
    on(sigName: "dnd-position-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dnd-position-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dnd-position-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Dnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Dnd, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Dnd_ConstructProps)
    _init (config?: Dnd_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IdleMonitor_ConstructProps extends GObject.Object_ConstructProps {
    device?: Clutter.InputDevice
}
export class IdleMonitor {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.IdleMonitor */
    addIdleWatch(intervalMsec: number, callback: IdleMonitorWatchFunc | null): number
    addUserActiveWatch(callback: IdleMonitorWatchFunc | null): number
    getIdletime(): number
    removeWatch(id: number): void
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
    connect(sigName: "notify", callback: (($obj: IdleMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IdleMonitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: IdleMonitor_ConstructProps)
    _init (config?: IdleMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getCore(): IdleMonitor
    static $gtype: GObject.Type
}
export interface LaunchContext_ConstructProps extends Gio.AppLaunchContext_ConstructProps {
    display?: Display
    timestamp?: number
    workspace?: Workspace
}
export class LaunchContext {
    /* Properties of Meta.LaunchContext */
    timestamp: number
    workspace: Workspace
    /* Fields of Gio.AppLaunchContext */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.LaunchContext */
    setTimestamp(timestamp: number): void
    setWorkspace(workspace: Workspace): void
    /* Methods of Gio.AppLaunchContext */
    getDisplay(info: Gio.AppInfo, files: Gio.File[]): string | null
    getEnvironment(): string[]
    getStartupNotifyId(info: Gio.AppInfo, files: Gio.File[]): string | null
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
    vfuncGetDisplay(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfuncGetStartupNotifyId(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfuncLaunchFailed(startupNotifyId: string): void
    vfuncLaunched(info: Gio.AppInfo, platformData: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: (($obj: LaunchContext, startupNotifyId: string) => void)): number
    connect_after(sigName: "launch-failed", callback: (($obj: LaunchContext, startupNotifyId: string) => void)): number
    emit(sigName: "launch-failed", startupNotifyId: string): void
    on(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "launched", callback: (($obj: LaunchContext, info: Gio.AppInfo, platformData: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: (($obj: LaunchContext, info: Gio.AppInfo, platformData: GLib.Variant) => void)): number
    emit(sigName: "launched", info: Gio.AppInfo, platformData: GLib.Variant): void
    on(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::workspace", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workspace", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::workspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::workspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::workspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LaunchContext_ConstructProps)
    _init (config?: LaunchContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MonitorManager_ConstructProps extends GObject.Object_ConstructProps {
    backend?: Backend
}
export class MonitorManager {
    /* Properties of Meta.MonitorManager */
    readonly panelOrientationManaged: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.MonitorManager */
    canSwitchConfig(): boolean
    getIsBuiltinDisplayOn(): boolean
    getMonitorForConnector(connector: string): number
    getPanelOrientationManaged(): boolean
    getSwitchConfig(): MonitorSwitchConfigType
    switchConfig(configType: MonitorSwitchConfigType): void
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
    /* Signals of Meta.MonitorManager */
    connect(sigName: "confirm-display-change", callback: (($obj: MonitorManager) => void)): number
    connect_after(sigName: "confirm-display-change", callback: (($obj: MonitorManager) => void)): number
    emit(sigName: "confirm-display-change"): void
    on(sigName: "confirm-display-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "confirm-display-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "confirm-display-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "monitors-changed", callback: (($obj: MonitorManager) => void)): number
    connect_after(sigName: "monitors-changed", callback: (($obj: MonitorManager) => void)): number
    emit(sigName: "monitors-changed"): void
    on(sigName: "monitors-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "monitors-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "monitors-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "monitors-changed-internal", callback: (($obj: MonitorManager) => void)): number
    connect_after(sigName: "monitors-changed-internal", callback: (($obj: MonitorManager) => void)): number
    emit(sigName: "monitors-changed-internal"): void
    on(sigName: "monitors-changed-internal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "monitors-changed-internal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "monitors-changed-internal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "power-save-mode-changed", callback: (($obj: MonitorManager) => void)): number
    connect_after(sigName: "power-save-mode-changed", callback: (($obj: MonitorManager) => void)): number
    emit(sigName: "power-save-mode-changed"): void
    on(sigName: "power-save-mode-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "power-save-mode-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "power-save-mode-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::panel-orientation-managed", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::panel-orientation-managed", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::panel-orientation-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::panel-orientation-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::panel-orientation-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MonitorManager_ConstructProps)
    _init (config?: MonitorManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): MonitorManager
    static getDisplayConfigurationTimeout(): number
    static $gtype: GObject.Type
}
export interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
}
export class Plugin {
    /* Fields of Meta.Plugin */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.Plugin */
    beginModal(options: ModalOptions, timestamp: number): boolean
    completeDisplayChange(ok: boolean): void
    destroyCompleted(actor: WindowActor): void
    endModal(timestamp: number): void
    getDisplay(): Display
    getInfo(): PluginInfo
    mapCompleted(actor: WindowActor): void
    minimizeCompleted(actor: WindowActor): void
    sizeChangeCompleted(actor: WindowActor): void
    switchWorkspaceCompleted(): void
    unminimizeCompleted(actor: WindowActor): void
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
    /* Virtual methods of Meta.Plugin */
    vfuncConfirmDisplayChange(): void
    vfuncDestroy(actor: WindowActor): void
    vfuncHideTilePreview(): void
    vfuncKeybindingFilter(binding: KeyBinding): boolean
    vfuncKillSwitchWorkspace(): void
    vfuncKillWindowEffects(actor: WindowActor): void
    vfuncLocatePointer(): void
    vfuncMap(actor: WindowActor): void
    vfuncMinimize(actor: WindowActor): void
    vfuncPluginInfo(): PluginInfo
    vfuncShowTilePreview(window: Window, tileRect: Rectangle, tileMonitorNumber: number): void
    vfuncShowWindowMenu(window: Window, menu: WindowMenuType, x: number, y: number): void
    vfuncShowWindowMenuForRect(window: Window, menu: WindowMenuType, rect: Rectangle): void
    vfuncSizeChange(actor: WindowActor, whichChange: SizeChange, oldFrameRect: Rectangle, oldBufferRect: Rectangle): void
    vfuncSizeChanged(actor: WindowActor): void
    vfuncStart(): void
    vfuncSwitchWorkspace(from: number, to: number, direction: MotionDirection): void
    vfuncUnminimize(actor: WindowActor): void
    vfuncXeventFilter(event: xlib.XEvent): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static managerSetPluginType(gtype: GObject.Type): void
    static $gtype: GObject.Type
}
export interface RemoteAccessController_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteAccessController {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.RemoteAccessController */
    inhibitRemoteAccess(): void
    uninhibitRemoteAccess(): void
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
    /* Signals of Meta.RemoteAccessController */
    connect(sigName: "new-handle", callback: (($obj: RemoteAccessController, object: RemoteAccessHandle) => void)): number
    connect_after(sigName: "new-handle", callback: (($obj: RemoteAccessController, object: RemoteAccessHandle) => void)): number
    emit(sigName: "new-handle", object: RemoteAccessHandle): void
    on(sigName: "new-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteAccessController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteAccessController, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RemoteAccessController_ConstructProps)
    _init (config?: RemoteAccessController_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RemoteAccessHandle_ConstructProps extends GObject.Object_ConstructProps {
    isRecording?: boolean
}
export class RemoteAccessHandle {
    /* Fields of Meta.RemoteAccessHandle */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.RemoteAccessHandle */
    getDisableAnimations(): boolean
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
    /* Virtual methods of Meta.RemoteAccessHandle */
    vfuncStop(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.RemoteAccessHandle */
    connect(sigName: "stopped", callback: (($obj: RemoteAccessHandle) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: RemoteAccessHandle) => void)): number
    emit(sigName: "stopped"): void
    on(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteAccessHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteAccessHandle, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RemoteAccessHandle_ConstructProps)
    _init (config?: RemoteAccessHandle_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Selection_ConstructProps extends GObject.Object_ConstructProps {
}
export class Selection {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.Selection */
    getMimetypes(selectionType: SelectionType): string[]
    setOwner(selectionType: SelectionType, owner: SelectionSource): void
    transferAsync(selectionType: SelectionType, mimetype: string, size: number, output: Gio.OutputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transferFinish(result: Gio.AsyncResult): boolean
    unsetOwner(selectionType: SelectionType, owner: SelectionSource): void
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
    /* Signals of Meta.Selection */
    connect(sigName: "owner-changed", callback: (($obj: Selection, object: number, p0: SelectionSource) => void)): number
    connect_after(sigName: "owner-changed", callback: (($obj: Selection, object: number, p0: SelectionSource) => void)): number
    emit(sigName: "owner-changed", object: number, p0: SelectionSource): void
    on(sigName: "owner-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "owner-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "owner-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Selection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Selection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Selection_ConstructProps)
    _init (config?: Selection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: Display): Selection
    static $gtype: GObject.Type
}
export interface SelectionSource_ConstructProps extends GObject.Object_ConstructProps {
}
export class SelectionSource {
    /* Fields of Meta.SelectionSource */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.SelectionSource */
    getMimetypes(): string[]
    isActive(): boolean
    readAsync(mimetype: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readFinish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Virtual methods of Meta.SelectionSource */
    vfuncActivated(): void
    vfuncDeactivated(): void
    vfuncGetMimetypes(): string[]
    vfuncReadAsync(mimetype: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncReadFinish(result: Gio.AsyncResult): Gio.InputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.SelectionSource */
    connect(sigName: "activated", callback: (($obj: SelectionSource) => void)): number
    connect_after(sigName: "activated", callback: (($obj: SelectionSource) => void)): number
    emit(sigName: "activated"): void
    on(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deactivated", callback: (($obj: SelectionSource) => void)): number
    connect_after(sigName: "deactivated", callback: (($obj: SelectionSource) => void)): number
    emit(sigName: "deactivated"): void
    on(sigName: "deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SelectionSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SelectionSource, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SelectionSource_ConstructProps)
    _init (config?: SelectionSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SelectionSourceMemory_ConstructProps extends SelectionSource_ConstructProps {
}
export class SelectionSourceMemory {
    /* Fields of Meta.SelectionSource */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.SelectionSource */
    getMimetypes(): string[]
    isActive(): boolean
    readAsync(mimetype: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readFinish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Virtual methods of Meta.SelectionSource */
    vfuncActivated(): void
    vfuncDeactivated(): void
    vfuncGetMimetypes(): string[]
    vfuncReadAsync(mimetype: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncReadFinish(result: Gio.AsyncResult): Gio.InputStream
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.SelectionSource */
    connect(sigName: "activated", callback: (($obj: SelectionSourceMemory) => void)): number
    connect_after(sigName: "activated", callback: (($obj: SelectionSourceMemory) => void)): number
    emit(sigName: "activated"): void
    on(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deactivated", callback: (($obj: SelectionSourceMemory) => void)): number
    connect_after(sigName: "deactivated", callback: (($obj: SelectionSourceMemory) => void)): number
    emit(sigName: "deactivated"): void
    on(sigName: "deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SelectionSourceMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SelectionSourceMemory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SelectionSourceMemory_ConstructProps)
    _init (config?: SelectionSourceMemory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mimetype: string, content: any): SelectionSourceMemory
    static $gtype: GObject.Type
}
export interface ShadowFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class ShadowFactory {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.ShadowFactory */
    getParams(className: string, focused: boolean): /* params */ ShadowParams
    getShadow(shape: WindowShape, width: number, height: number, className: string, focused: boolean): Shadow
    setParams(className: string, focused: boolean, params: ShadowParams): void
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
    /* Signals of Meta.ShadowFactory */
    connect(sigName: "changed", callback: (($obj: ShadowFactory) => void)): number
    connect_after(sigName: "changed", callback: (($obj: ShadowFactory) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ShadowFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ShadowFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ShadowFactory_ConstructProps)
    _init (config?: ShadowFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ShadowFactory
    static getDefault(): ShadowFactory
    static $gtype: GObject.Type
}
export interface ShapedTexture_ConstructProps extends GObject.Object_ConstructProps {
}
export class ShapedTexture {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.ShapedTexture */
    getImage(clip?: cairo.RectangleInt | null): cairo.Surface | null
    getTexture(): Cogl.Texture
    setCreateMipmaps(createMipmaps: boolean): void
    setMaskTexture(maskTexture: Cogl.Texture): void
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
    /* Methods of Clutter.Content */
    getPreferredSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    invalidate(): void
    invalidateSize(): void
    /* Virtual methods of Meta.ShapedTexture */
    vfuncAttached(actor: Clutter.Actor): void
    vfuncDetached(actor: Clutter.Actor): void
    vfuncGetPreferredSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    vfuncInvalidate(): void
    vfuncInvalidateSize(): void
    vfuncPaintContent(actor: Clutter.Actor, node: Clutter.PaintNode, paintContext: Clutter.PaintContext): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.ShapedTexture */
    connect(sigName: "size-changed", callback: (($obj: ShapedTexture) => void)): number
    connect_after(sigName: "size-changed", callback: (($obj: ShapedTexture) => void)): number
    emit(sigName: "size-changed"): void
    on(sigName: "size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ShapedTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ShapedTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Content */
    connect(sigName: "attached", callback: (($obj: ShapedTexture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: ShapedTexture, actor: Clutter.Actor) => void)): number
    emit(sigName: "attached", actor: Clutter.Actor): void
    on(sigName: "attached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "attached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "attached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "detached", callback: (($obj: ShapedTexture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: ShapedTexture, actor: Clutter.Actor) => void)): number
    emit(sigName: "detached", actor: Clutter.Actor): void
    on(sigName: "detached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "detached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "detached", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ShapedTexture_ConstructProps)
    _init (config?: ShapedTexture_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SoundPlayer_ConstructProps extends GObject.Object_ConstructProps {
}
export class SoundPlayer {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.SoundPlayer */
    playFromFile(file: Gio.File, description: string, cancellable?: Gio.Cancellable | null): void
    playFromTheme(name: string, description: string, cancellable?: Gio.Cancellable | null): void
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
    connect(sigName: "notify", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SoundPlayer_ConstructProps)
    _init (config?: SoundPlayer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Stage_ConstructProps extends Clutter.Stage_ConstructProps {
}
export class Stage {
    /* Properties of Clutter.Stage */
    keyFocus: Clutter.Actor
    readonly perspective: Clutter.Perspective
    title: string
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    backgroundColor: Clutter.Color
    readonly backgroundColorSet: boolean
    childTransform: Graphene.Matrix
    readonly childTransformSet: boolean
    clipRect: Graphene.Rect
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly contentBox: Clutter.ActorBox
    contentGravity: Clutter.ContentGravity
    contentRepeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly firstChild: Clutter.Actor
    fixedPositionSet: boolean
    fixedX: number
    fixedY: number
    readonly hasClip: boolean
    readonly hasPointer: boolean
    height: number
    readonly lastChild: Clutter.Actor
    layoutManager: Clutter.LayoutManager
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    marginBottom: number
    marginLeft: number
    marginRight: number
    marginTop: number
    minHeight: number
    minHeightSet: boolean
    minWidth: number
    minWidthSet: boolean
    minificationFilter: Clutter.ScalingFilter
    name: string
    naturalHeight: number
    naturalHeightSet: boolean
    naturalWidth: number
    naturalWidthSet: boolean
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivotPoint: Graphene.Point
    pivotPointZ: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    requestMode: Clutter.RequestMode
    rotationAngleX: number
    rotationAngleY: number
    rotationAngleZ: number
    scaleX: number
    scaleY: number
    scaleZ: number
    showOnSetParent: boolean
    size: Graphene.Size
    textDirection: Clutter.TextDirection
    transform: Graphene.Matrix
    readonly transformSet: boolean
    translationX: number
    translationY: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    xAlign: Clutter.ActorAlign
    xExpand: boolean
    y: number
    yAlign: Clutter.ActorAlign
    yExpand: boolean
    zPosition: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Clutter.Stage */
    captureInto(rect: cairo.RectangleInt, data: number): void
    captureViewInto(view: Clutter.StageView, rect: cairo.RectangleInt, data: number, stride: number): void
    clearStageViews(): void
    ensureViewport(): void
    event(event: Clutter.Event): boolean
    getActorAtPos(pickMode: Clutter.PickMode, x: number, y: number): Clutter.Actor
    getCaptureFinalSize(rect: cairo.RectangleInt): [ /* returnType */ boolean, /* outWidth */ number | null, /* outHeight */ number | null, /* outScale */ number | null ]
    getDeviceActor(device: Clutter.InputDevice, sequence?: Clutter.EventSequence | null): Clutter.Actor
    getFrameCounter(): number
    getKeyFocus(): Clutter.Actor
    getMinimumSize(): [ /* width */ number, /* height */ number ]
    getMotionEventsEnabled(): boolean
    getPerspective(): /* perspective */ Clutter.Perspective | null
    getThrottleMotionEvents(): boolean
    getTitle(): string
    getUseAlpha(): boolean
    paintToBuffer(rect: cairo.RectangleInt, scale: number, data: any, stride: number, format: Cogl.PixelFormat, paintFlags: Clutter.PaintFlag): [ /* returnType */ boolean, /* data */ any ]
    paintToFramebuffer(framebuffer: Cogl.Framebuffer, rect: cairo.RectangleInt, scale: number, paintFlags: Clutter.PaintFlag): void
    readPixels(x: number, y: number, width: number, height: number): any
    repickDevice(device: Clutter.InputDevice): void
    scheduleUpdate(): void
    setKeyFocus(actor?: Clutter.Actor | null): void
    setMinimumSize(width: number, height: number): void
    setMotionEventsEnabled(enabled: boolean): void
    setThrottleMotionEvents(throttle: boolean): void
    setTitle(title: string): void
    setUseAlpha(useAlpha: boolean): void
    updateDevice(device: Clutter.InputDevice, sequence: Clutter.EventSequence, point: Graphene.Point, time: number, newActor: Clutter.Actor, emitCrossing: boolean): void
    /* Methods of Clutter.Actor */
    addAction(action: Clutter.Action): void
    addActionWithName(name: string, action: Clutter.Action): void
    addChild(child: Clutter.Actor): void
    addConstraint(constraint: Clutter.Constraint): void
    addConstraintWithName(name: string, constraint: Clutter.Constraint): void
    addEffect(effect: Clutter.Effect): void
    addEffectWithName(name: string, effect: Clutter.Effect): void
    addTransition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocateAlignFill(box: Clutter.ActorBox, xAlign: number, yAlign: number, xFill: boolean, yFill: boolean): void
    allocateAvailableSize(x: number, y: number, availableWidth: number, availableHeight: number): void
    allocatePreferredSize(x: number, y: number): void
    applyRelativeTransformToPoint(ancestor: Clutter.Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    applyTransformToPoint(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bindModel(model: Gio.ListModel | null, createChildFunc: Clutter.ActorCreateChildFunc): void
    clearActions(): void
    clearConstraints(): void
    clearEffects(): void
    contains(descendant: Clutter.Actor): boolean
    continuePaint(paintContext: Clutter.PaintContext): void
    continuePick(pickContext: Clutter.PickContext): void
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyAllChildren(): void
    getAbsAllocationVertices(): /* verts */ Graphene.Point3D[]
    getAccessible(): Atk.Object
    getAction(name: string): Clutter.Action
    getActions(): Clutter.Action[]
    getAllocationBox(): /* box */ Clutter.ActorBox
    getBackgroundColor(): /* color */ Clutter.Color
    getChildAtIndex(index: number): Clutter.Actor
    getChildTransform(): /* transform */ Graphene.Matrix
    getChildren(): Clutter.Actor[]
    getClip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    getClipToAllocation(): boolean
    getConstraint(name: string): Clutter.Constraint
    getConstraints(): Clutter.Constraint[]
    getContent(): Clutter.Content
    getContentBox(): /* box */ Clutter.ActorBox
    getContentGravity(): Clutter.ContentGravity
    getContentRepeat(): Clutter.ContentRepeat
    getContentScalingFilters(): [ /* minFilter */ Clutter.ScalingFilter | null, /* magFilter */ Clutter.ScalingFilter | null ]
    getDefaultPaintVolume(): Clutter.PaintVolume
    getEasingDelay(): number
    getEasingDuration(): number
    getEasingMode(): Clutter.AnimationMode
    getEffect(name: string): Clutter.Effect
    getEffects(): Clutter.Effect[]
    getFirstChild(): Clutter.Actor
    getFixedPosition(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    getFixedPositionSet(): boolean
    getFlags(): Clutter.ActorFlags
    getHeight(): number
    getLastChild(): Clutter.Actor
    getLayoutManager(): Clutter.LayoutManager
    getMargin(): /* margin */ Clutter.Margin
    getMarginBottom(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginTop(): number
    getNChildren(): number
    getName(): string
    getNextSibling(): Clutter.Actor
    getOffscreenRedirect(): Clutter.OffscreenRedirect
    getOpacity(): number
    getOpacityOverride(): number
    getPaintBox(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    getPaintOpacity(): number
    getPaintVisibility(): boolean
    getPaintVolume(): Clutter.PaintVolume
    getPangoContext(): Pango.Context
    getParent(): Clutter.Actor
    getPivotPoint(): [ /* pivotX */ number | null, /* pivotY */ number | null ]
    getPivotPointZ(): number
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredSize(): [ /* minWidthP */ number | null, /* minHeightP */ number | null, /* naturalWidthP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    getPreviousSibling(): Clutter.Actor
    getReactive(): boolean
    getRequestMode(): Clutter.RequestMode
    getResourceScale(): number
    getRotationAngle(axis: Clutter.RotateAxis): number
    getScale(): [ /* scaleX */ number | null, /* scaleY */ number | null ]
    getScaleZ(): number
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getStage(): Clutter.Stage
    getTextDirection(): Clutter.TextDirection
    getTransform(): /* transform */ Graphene.Matrix
    getTransformedExtents(): /* rect */ Graphene.Rect
    getTransformedPaintVolume(relativeToAncestor: Clutter.Actor): Clutter.PaintVolume
    getTransformedPosition(): [ /* x */ number | null, /* y */ number | null ]
    getTransformedSize(): [ /* width */ number | null, /* height */ number | null ]
    getTransition(name: string): Clutter.Transition
    getTranslation(): [ /* translateX */ number | null, /* translateY */ number | null, /* translateZ */ number | null ]
    getWidth(): number
    getX(): number
    getXAlign(): Clutter.ActorAlign
    getXExpand(): boolean
    getY(): number
    getYAlign(): Clutter.ActorAlign
    getYExpand(): boolean
    getZPosition(): number
    grabKeyFocus(): void
    hasAccessible(): boolean
    hasActions(): boolean
    hasAllocation(): boolean
    hasConstraints(): boolean
    hasDamage(): boolean
    hasEffects(): boolean
    hasKeyFocus(): boolean
    hasMappedClones(): boolean
    hasOverlaps(): boolean
    hide(): void
    inhibitCulling(): void
    insertChildAbove(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insertChildAtIndex(child: Clutter.Actor, index: number): void
    insertChildBelow(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    invalidatePaintVolume(): void
    invalidateTransform(): void
    isEffectivelyOnStageView(view: Clutter.StageView): boolean
    isInClonePaint(): boolean
    isMapped(): boolean
    isRealized(): boolean
    isRotated(): boolean
    isScaled(): boolean
    isVisible(): boolean
    map(): void
    moveBy(dx: number, dy: number): void
    needsExpand(orientation: Clutter.Orientation): boolean
    paint(paintContext: Clutter.PaintContext): void
    peekStageViews(): Clutter.StageView[]
    pick(pickContext: Clutter.PickContext): void
    pickBox(pickContext: Clutter.PickContext, box: Clutter.ActorBox): void
    queueRedraw(): void
    queueRedrawWithClip(clip?: cairo.RectangleInt | null): void
    queueRelayout(): void
    realize(): void
    removeAction(action: Clutter.Action): void
    removeActionByName(name: string): void
    removeAllChildren(): void
    removeAllTransitions(): void
    removeChild(child: Clutter.Actor): void
    removeClip(): void
    removeConstraint(constraint: Clutter.Constraint): void
    removeConstraintByName(name: string): void
    removeEffect(effect: Clutter.Effect): void
    removeEffectByName(name: string): void
    removeTransition(name: string): void
    replaceChild(oldChild: Clutter.Actor, newChild: Clutter.Actor): void
    restoreEasingState(): void
    saveEasingState(): void
    setAllocation(box: Clutter.ActorBox): void
    setBackgroundColor(color?: Clutter.Color | null): void
    setChildAboveSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildAtIndex(child: Clutter.Actor, index: number): void
    setChildBelowSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildTransform(transform?: Graphene.Matrix | null): void
    setClip(xoff: number, yoff: number, width: number, height: number): void
    setClipToAllocation(clipSet: boolean): void
    setContent(content?: Clutter.Content | null): void
    setContentGravity(gravity: Clutter.ContentGravity): void
    setContentRepeat(repeat: Clutter.ContentRepeat): void
    setContentScalingFilters(minFilter: Clutter.ScalingFilter, magFilter: Clutter.ScalingFilter): void
    setEasingDelay(msecs: number): void
    setEasingDuration(msecs: number): void
    setEasingMode(mode: Clutter.AnimationMode): void
    setFixedPositionSet(isSet: boolean): void
    setFlags(flags: Clutter.ActorFlags): void
    setHeight(height: number): void
    setLayoutManager(manager?: Clutter.LayoutManager | null): void
    setMargin(margin: Clutter.Margin): void
    setMarginBottom(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOffscreenRedirect(redirect: Clutter.OffscreenRedirect): void
    setOpacity(opacity: number): void
    setOpacityOverride(opacity: number): void
    setPivotPoint(pivotX: number, pivotY: number): void
    setPivotPointZ(pivotZ: number): void
    setPosition(x: number, y: number): void
    setReactive(reactive: boolean): void
    setRequestMode(mode: Clutter.RequestMode): void
    setRotationAngle(axis: Clutter.RotateAxis, angle: number): void
    setScale(scaleX: number, scaleY: number): void
    setScaleZ(scaleZ: number): void
    setSize(width: number, height: number): void
    setTextDirection(textDir: Clutter.TextDirection): void
    setTransform(transform?: Graphene.Matrix | null): void
    setTranslation(translateX: number, translateY: number, translateZ: number): void
    setWidth(width: number): void
    setX(x: number): void
    setXAlign(xAlign: Clutter.ActorAlign): void
    setXExpand(expand: boolean): void
    setY(y: number): void
    setYAlign(yAlign: Clutter.ActorAlign): void
    setYExpand(expand: boolean): void
    setZPosition(zPosition: number): void
    shouldPick(pickContext: Clutter.PickContext): boolean
    show(): void
    transformStagePoint(x: number, y: number): [ /* returnType */ boolean, /* xOut */ number, /* yOut */ number ]
    uninhibitCulling(): void
    unmap(): void
    unrealize(): void
    unsetFlags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    findProperty(propertyName: string): GObject.ParamSpec
    getActor(): Clutter.Actor
    getInitialState(propertyName: string, value: any): void
    interpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    setFinalState(propertyName: string, value: any): void
    /* Methods of Clutter.Container */
    addActor(actor: Clutter.Actor): void
    childGetProperty(child: Clutter.Actor, property: string, value: any): void
    childNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    childSetProperty(child: Clutter.Actor, property: string, value: any): void
    createChildMeta(actor: Clutter.Actor): void
    destroyChildMeta(actor: Clutter.Actor): void
    findChildByName(childName: string): Clutter.Actor
    getChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    lowerChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raiseChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    removeActor(actor: Clutter.Actor): void
    sortDepthOrder(): void
    /* Methods of Clutter.Scriptable */
    getId(): string
    parseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    setCustomProperty(script: Clutter.Script, name: string, value: any): void
    setId(id: string): void
    /* Virtual methods of Meta.Stage */
    vfuncFindProperty(propertyName: string): GObject.ParamSpec
    vfuncGetActor(): Clutter.Actor
    vfuncGetInitialState(propertyName: string, value: any): void
    vfuncInterpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfuncSetFinalState(propertyName: string, value: any): void
    vfuncActorAdded(actor: Clutter.Actor): void
    vfuncActorRemoved(actor: Clutter.Actor): void
    vfuncAdd(actor: Clutter.Actor): void
    vfuncChildNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfuncCreateChildMeta(actor: Clutter.Actor): void
    vfuncDestroyChildMeta(actor: Clutter.Actor): void
    vfuncGetChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    vfuncLower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRaise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRemove(actor: Clutter.Actor): void
    vfuncSortDepthOrder(): void
    vfuncGetId(): string
    vfuncParseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfuncSetCustomProperty(script: Clutter.Script, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Clutter.Stage */
    vfuncActivate(): void
    vfuncBeforePaint(view: Clutter.StageView): void
    vfuncDeactivate(): void
    vfuncPaintView(view: Clutter.StageView, redrawClip: cairo.Region): void
    /* Virtual methods of Clutter.Actor */
    vfuncAllocate(box: Clutter.ActorBox): void
    vfuncApplyTransform(matrix: Graphene.Matrix): void
    vfuncButtonPressEvent(event: Clutter.ButtonEvent): boolean
    vfuncButtonReleaseEvent(event: Clutter.ButtonEvent): boolean
    vfuncCalculateResourceScale(phase: number): number
    vfuncCapturedEvent(event: Clutter.Event): boolean
    vfuncDestroy(): void
    vfuncEnterEvent(event: Clutter.CrossingEvent): boolean
    vfuncEvent(event: Clutter.Event): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGetPaintVolume(volume: Clutter.PaintVolume): boolean
    vfuncGetPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    vfuncGetPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    vfuncHasAccessible(): boolean
    vfuncHasOverlaps(): boolean
    vfuncHide(): void
    vfuncHideAll(): void
    vfuncKeyFocusIn(): void
    vfuncKeyFocusOut(): void
    vfuncKeyPressEvent(event: Clutter.KeyEvent): boolean
    vfuncKeyReleaseEvent(event: Clutter.KeyEvent): boolean
    vfuncLeaveEvent(event: Clutter.CrossingEvent): boolean
    vfuncMap(): void
    vfuncMotionEvent(event: Clutter.MotionEvent): boolean
    vfuncPaint(paintContext: Clutter.PaintContext): void
    vfuncPaintNode(root: Clutter.PaintNode): void
    vfuncParentSet(oldParent: Clutter.Actor): void
    vfuncPick(pickContext: Clutter.PickContext): void
    vfuncQueueRelayout(): void
    vfuncRealize(): void
    vfuncResourceScaleChanged(): void
    vfuncScrollEvent(event: Clutter.ScrollEvent): boolean
    vfuncShow(): void
    vfuncTouchEvent(event: Clutter.TouchEvent): boolean
    vfuncUnmap(): void
    vfuncUnrealize(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.Stage */
    connect(sigName: "actors-painted", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "actors-painted", callback: (($obj: Stage) => void)): number
    emit(sigName: "actors-painted"): void
    on(sigName: "actors-painted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actors-painted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actors-painted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Stage */
    connect(sigName: "activate", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Stage) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "after-paint", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    connect_after(sigName: "after-paint", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    emit(sigName: "after-paint", view: Clutter.StageView): void
    on(sigName: "after-paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "after-paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "after-paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "after-update", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    connect_after(sigName: "after-update", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    emit(sigName: "after-update", view: Clutter.StageView): void
    on(sigName: "after-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "after-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "after-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "before-paint", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    connect_after(sigName: "before-paint", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    emit(sigName: "before-paint", view: Clutter.StageView): void
    on(sigName: "before-paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "before-paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "before-paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "before-update", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    connect_after(sigName: "before-update", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    emit(sigName: "before-update", view: Clutter.StageView): void
    on(sigName: "before-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "before-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "before-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deactivate", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: Stage) => void)): number
    emit(sigName: "deactivate"): void
    on(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "gl-video-memory-purged", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "gl-video-memory-purged", callback: (($obj: Stage) => void)): number
    emit(sigName: "gl-video-memory-purged"): void
    on(sigName: "gl-video-memory-purged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "gl-video-memory-purged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "gl-video-memory-purged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "paint-view", callback: (($obj: Stage, view: Clutter.StageView, redrawClip: cairo.Region) => void)): number
    connect_after(sigName: "paint-view", callback: (($obj: Stage, view: Clutter.StageView, redrawClip: cairo.Region) => void)): number
    emit(sigName: "paint-view", view: Clutter.StageView, redrawClip: cairo.Region): void
    on(sigName: "paint-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paint-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paint-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "presented", callback: (($obj: Stage, view: Clutter.StageView, frameInfo?: object | null) => void)): number
    connect_after(sigName: "presented", callback: (($obj: Stage, view: Clutter.StageView, frameInfo?: object | null) => void)): number
    emit(sigName: "presented", view: Clutter.StageView, frameInfo?: object | null): void
    on(sigName: "presented", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "presented", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "presented", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: Stage, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Stage, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: Stage, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Stage, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "captured-event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    on(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Stage) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-event", callback: (($obj: Stage, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Stage, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    on(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Stage) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-in", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Stage) => void)): number
    emit(sigName: "key-focus-in"): void
    on(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-out", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Stage) => void)): number
    emit(sigName: "key-focus-out"): void
    on(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: Stage, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Stage, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: Stage, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Stage, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-event", callback: (($obj: Stage, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Stage, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    on(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-event", callback: (($obj: Stage, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Stage, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    on(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: Stage, oldParent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Stage, oldParent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Clutter.Actor | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pick", callback: (($obj: Stage, pickContext: Clutter.PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Stage, pickContext: Clutter.PickContext) => void)): number
    emit(sigName: "pick", pickContext: Clutter.PickContext): void
    on(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-relayout", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Stage) => void)): number
    emit(sigName: "queue-relayout"): void
    on(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Stage) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resource-scale-changed", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: Stage) => void)): number
    emit(sigName: "resource-scale-changed"): void
    on(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: Stage, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Stage, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "show", callback: (($obj: Stage) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stage-views-changed", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: Stage) => void)): number
    emit(sigName: "stage-views-changed"): void
    on(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transition-stopped", callback: (($obj: Stage, name: string, isFinished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Stage, name: string, isFinished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, isFinished: boolean): void
    on(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transitions-completed", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Stage) => void)): number
    emit(sigName: "transitions-completed"): void
    on(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Stage) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Stage, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Stage, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    on(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "actor-removed", callback: (($obj: Stage, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Stage, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    on(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: Stage, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Stage, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-focus", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-focus", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perspective", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perspective", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perspective", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perspective", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perspective", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actions", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-rect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::constraints", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-box", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-gravity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-repeat", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::effect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-clip", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-pointer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::magnification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reactive", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realized", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-mode", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-direction", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::z-position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Stage_ConstructProps)
    _init (config?: Stage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static isFocused(display: Display): boolean
    static classFindChildProperty(klass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classListChildProperties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface StartupNotification_ConstructProps extends GObject.Object_ConstructProps {
    display?: Display
}
export class StartupNotification {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.StartupNotification */
    createLauncher(): LaunchContext
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
    /* Signals of Meta.StartupNotification */
    connect(sigName: "changed", callback: (($obj: StartupNotification, object?: object | null) => void)): number
    connect_after(sigName: "changed", callback: (($obj: StartupNotification, object?: object | null) => void)): number
    emit(sigName: "changed", object?: object | null): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StartupNotification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StartupNotification, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StartupNotification_ConstructProps)
    _init (config?: StartupNotification_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StartupSequence_ConstructProps extends GObject.Object_ConstructProps {
    applicationId?: string
    iconName?: string
    id?: string
    name?: string
    timestamp?: number
    wmclass?: string
    workspace?: number
}
export class StartupSequence {
    /* Fields of Meta.StartupSequence */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.StartupSequence */
    complete(): void
    getApplicationId(): string
    getCompleted(): boolean
    getIconName(): string
    getId(): string
    getName(): string
    getTimestamp(): number
    getWmclass(): string
    getWorkspace(): number
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
    /* Signals of Meta.StartupSequence */
    connect(sigName: "complete", callback: (($obj: StartupSequence) => void)): number
    connect_after(sigName: "complete", callback: (($obj: StartupSequence) => void)): number
    emit(sigName: "complete"): void
    on(sigName: "complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StartupSequence_ConstructProps)
    _init (config?: StartupSequence_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandClient_ConstructProps extends GObject.Object_ConstructProps {
}
export class WaylandClient {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.WaylandClient */
    hideFromWindowList(window: Window): void
    ownsWindow(window: Window): boolean
    showInWindowList(window: Window): void
    spawnv(display: Display, argv: string[]): Gio.Subprocess
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
    connect(sigName: "notify", callback: (($obj: WaylandClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandClient, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WaylandClient_ConstructProps)
    _init (config?: WaylandClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(launcher: Gio.SubprocessLauncher): WaylandClient
    static $gtype: GObject.Type
}
export interface Window_ConstructProps extends GObject.Object_ConstructProps {
}
export class Window {
    /* Properties of Meta.Window */
    readonly above: boolean
    readonly appearsFocused: boolean
    readonly decorated: boolean
    readonly demandsAttention: boolean
    readonly fullscreen: boolean
    readonly gtkAppMenuObjectPath: string
    readonly gtkApplicationId: string
    readonly gtkApplicationObjectPath: string
    readonly gtkMenubarObjectPath: string
    readonly gtkUniqueBusName: string
    readonly gtkWindowObjectPath: string
    readonly icon: object
    readonly maximizedHorizontally: boolean
    readonly maximizedVertically: boolean
    readonly miniIcon: object
    readonly minimized: boolean
    readonly mutterHints: string
    readonly onAllWorkspaces: boolean
    readonly resizeable: boolean
    readonly skipTaskbar: boolean
    readonly title: string
    readonly urgent: boolean
    readonly userTime: number
    readonly windowType: WindowType
    readonly wmClass: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.Window */
    activate(currentTime: number): void
    activateWithWorkspace(currentTime: number, workspace: Workspace): void
    allowsMove(): boolean
    allowsResize(): boolean
    beginGrabOp(op: GrabOp, frameAction: boolean, timestamp: number): void
    canClose(): boolean
    canMaximize(): boolean
    canMinimize(): boolean
    canShade(): boolean
    changeWorkspace(workspace: Workspace): void
    changeWorkspaceByIndex(spaceIndex: number, append: boolean): void
    checkAlive(timestamp: number): void
    clientRectToFrameRect(clientRect: Rectangle): /* frameRect */ Rectangle
    computeGroup(): void
    delete(timestamp: number): void
    findRootAncestor(): Window
    focus(timestamp: number): void
    foreachAncestor(func: WindowForeachFunc): void
    foreachTransient(func: WindowForeachFunc): void
    frameRectToClientRect(frameRect: Rectangle): /* clientRect */ Rectangle
    getBufferRect(): /* rect */ Rectangle
    getClientMachine(): string
    getClientType(): WindowClientType
    getCompositorPrivate(): GObject.Object
    getDescription(): string
    getDisplay(): Display
    getFrameBounds(): cairo.Region | null
    getFrameRect(): /* rect */ Rectangle
    getFrameType(): FrameType
    getGtkAppMenuObjectPath(): string
    getGtkApplicationId(): string
    getGtkApplicationObjectPath(): string
    getGtkMenubarObjectPath(): string
    getGtkThemeVariant(): string
    getGtkUniqueBusName(): string
    getGtkWindowObjectPath(): string
    getIconGeometry(): [ /* returnType */ boolean, /* rect */ Rectangle ]
    getId(): number
    getLayer(): StackLayer
    getMaximized(): MaximizeFlags
    getMonitor(): number
    getMutterHints(): string
    getPid(): number
    getRole(): string
    getSandboxedAppId(): string
    getStableSequence(): number
    getStartupId(): string
    getTileMatch(): Window | null
    getTitle(): string
    getTransientFor(): Window
    getUserTime(): number
    getWindowType(): WindowType
    getWmClass(): string
    getWmClassInstance(): string
    getWorkAreaAllMonitors(): /* area */ Rectangle
    getWorkAreaCurrentMonitor(): /* area */ Rectangle
    getWorkAreaForMonitor(whichMonitor: number): /* area */ Rectangle
    getWorkspace(): Workspace
    groupLeaderChanged(): void
    hasFocus(): boolean
    isAbove(): boolean
    isAlwaysOnAllWorkspaces(): boolean
    isAncestorOfTransient(transient: Window): boolean
    isAttachedDialog(): boolean
    isClientDecorated(): boolean
    isFullscreen(): boolean
    isHidden(): boolean
    isMonitorSized(): boolean
    isOnAllWorkspaces(): boolean
    isOnPrimaryMonitor(): boolean
    isOverrideRedirect(): boolean
    isRemote(): boolean
    isScreenSized(): boolean
    isShaded(): boolean
    isSkipTaskbar(): boolean
    kill(): void
    locatedOnWorkspace(workspace: Workspace): boolean
    lower(): void
    makeAbove(): void
    makeFullscreen(): void
    maximize(directions: MaximizeFlags): void
    minimize(): void
    moveFrame(userOp: boolean, rootXNw: number, rootYNw: number): void
    moveResizeFrame(userOp: boolean, rootXNw: number, rootYNw: number, w: number, h: number): void
    moveToMonitor(monitor: number): void
    raise(): void
    setCompositorPrivate(priv: GObject.Object): void
    setDemandsAttention(): void
    setIconGeometry(rect?: Rectangle | null): void
    shade(timestamp: number): void
    shoveTitlebarOnscreen(): void
    showingOnItsWorkspace(): boolean
    shutdownGroup(): void
    stick(): void
    titlebarIsOnscreen(): boolean
    unmakeAbove(): void
    unmakeFullscreen(): void
    unmaximize(directions: MaximizeFlags): void
    unminimize(): void
    unsetDemandsAttention(): void
    unshade(timestamp: number): void
    unstick(): void
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
    /* Signals of Meta.Window */
    connect(sigName: "focus", callback: (($obj: Window) => void)): number
    connect_after(sigName: "focus", callback: (($obj: Window) => void)): number
    emit(sigName: "focus"): void
    on(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "position-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "position-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "position-changed"): void
    on(sigName: "position-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "position-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "position-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "raised", callback: (($obj: Window) => void)): number
    connect_after(sigName: "raised", callback: (($obj: Window) => void)): number
    emit(sigName: "raised"): void
    on(sigName: "raised", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "raised", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "raised", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "shown", callback: (($obj: Window) => void)): number
    connect_after(sigName: "shown", callback: (($obj: Window) => void)): number
    emit(sigName: "shown"): void
    on(sigName: "shown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "shown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "shown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "size-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "size-changed"): void
    on(sigName: "size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmanaged", callback: (($obj: Window) => void)): number
    connect_after(sigName: "unmanaged", callback: (($obj: Window) => void)): number
    emit(sigName: "unmanaged"): void
    on(sigName: "unmanaged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmanaged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmanaged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmanaging", callback: (($obj: Window) => void)): number
    connect_after(sigName: "unmanaging", callback: (($obj: Window) => void)): number
    emit(sigName: "unmanaging"): void
    on(sigName: "unmanaging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmanaging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmanaging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "workspace-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "workspace-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "workspace-changed"): void
    on(sigName: "workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::above", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::above", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::above", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::above", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::appears-focused", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::appears-focused", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::appears-focused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::appears-focused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::appears-focused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::demands-attention", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::demands-attention", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::demands-attention", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::demands-attention", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::demands-attention", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gtk-app-menu-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-app-menu-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gtk-app-menu-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gtk-app-menu-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gtk-app-menu-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gtk-application-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-application-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gtk-application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gtk-application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gtk-application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gtk-application-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-application-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gtk-application-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gtk-application-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gtk-application-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gtk-menubar-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-menubar-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gtk-menubar-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gtk-menubar-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gtk-menubar-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gtk-unique-bus-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-unique-bus-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gtk-unique-bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gtk-unique-bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gtk-unique-bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gtk-window-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-window-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gtk-window-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gtk-window-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gtk-window-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maximized-horizontally", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized-horizontally", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maximized-horizontally", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maximized-horizontally", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maximized-horizontally", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maximized-vertically", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized-vertically", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maximized-vertically", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maximized-vertically", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maximized-vertically", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mini-icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mini-icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mini-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mini-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mini-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minimized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minimized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minimized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minimized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mutter-hints", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutter-hints", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mutter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mutter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mutter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::on-all-workspaces", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-all-workspaces", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::on-all-workspaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::on-all-workspaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::on-all-workspaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resizeable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizeable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resizeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resizeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resizeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::skip-taskbar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::skip-taskbar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::skip-taskbar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::skip-taskbar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-time", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-time", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-type", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wm-class", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wm-class", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wm-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wm-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wm-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WindowActor_ConstructProps extends Clutter.Actor_ConstructProps {
    metaWindow?: Window
}
export class WindowActor {
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    backgroundColor: Clutter.Color
    readonly backgroundColorSet: boolean
    childTransform: Graphene.Matrix
    readonly childTransformSet: boolean
    clipRect: Graphene.Rect
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly contentBox: Clutter.ActorBox
    contentGravity: Clutter.ContentGravity
    contentRepeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly firstChild: Clutter.Actor
    fixedPositionSet: boolean
    fixedX: number
    fixedY: number
    readonly hasClip: boolean
    readonly hasPointer: boolean
    height: number
    readonly lastChild: Clutter.Actor
    layoutManager: Clutter.LayoutManager
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    marginBottom: number
    marginLeft: number
    marginRight: number
    marginTop: number
    minHeight: number
    minHeightSet: boolean
    minWidth: number
    minWidthSet: boolean
    minificationFilter: Clutter.ScalingFilter
    name: string
    naturalHeight: number
    naturalHeightSet: boolean
    naturalWidth: number
    naturalWidthSet: boolean
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivotPoint: Graphene.Point
    pivotPointZ: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    requestMode: Clutter.RequestMode
    rotationAngleX: number
    rotationAngleY: number
    rotationAngleZ: number
    scaleX: number
    scaleY: number
    scaleZ: number
    showOnSetParent: boolean
    size: Graphene.Size
    textDirection: Clutter.TextDirection
    transform: Graphene.Matrix
    readonly transformSet: boolean
    translationX: number
    translationY: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    xAlign: Clutter.ActorAlign
    xExpand: boolean
    y: number
    yAlign: Clutter.ActorAlign
    yExpand: boolean
    zPosition: number
    /* Fields of Meta.WindowActor */
    parentInstance: Clutter.Actor
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.WindowActor */
    freeze(): void
    getImage(clip?: cairo.RectangleInt | null): cairo.Surface | null
    getMetaWindow(): Window
    getTexture(): ShapedTexture
    isDestroyed(): boolean
    syncVisibility(): void
    thaw(): void
    /* Methods of Clutter.Actor */
    addAction(action: Clutter.Action): void
    addActionWithName(name: string, action: Clutter.Action): void
    addChild(child: Clutter.Actor): void
    addConstraint(constraint: Clutter.Constraint): void
    addConstraintWithName(name: string, constraint: Clutter.Constraint): void
    addEffect(effect: Clutter.Effect): void
    addEffectWithName(name: string, effect: Clutter.Effect): void
    addTransition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocateAlignFill(box: Clutter.ActorBox, xAlign: number, yAlign: number, xFill: boolean, yFill: boolean): void
    allocateAvailableSize(x: number, y: number, availableWidth: number, availableHeight: number): void
    allocatePreferredSize(x: number, y: number): void
    applyRelativeTransformToPoint(ancestor: Clutter.Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    applyTransformToPoint(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bindModel(model: Gio.ListModel | null, createChildFunc: Clutter.ActorCreateChildFunc): void
    clearActions(): void
    clearConstraints(): void
    clearEffects(): void
    contains(descendant: Clutter.Actor): boolean
    continuePaint(paintContext: Clutter.PaintContext): void
    continuePick(pickContext: Clutter.PickContext): void
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyAllChildren(): void
    event(event: Clutter.Event, capture: boolean): boolean
    getAbsAllocationVertices(): /* verts */ Graphene.Point3D[]
    getAccessible(): Atk.Object
    getAction(name: string): Clutter.Action
    getActions(): Clutter.Action[]
    getAllocationBox(): /* box */ Clutter.ActorBox
    getBackgroundColor(): /* color */ Clutter.Color
    getChildAtIndex(index: number): Clutter.Actor
    getChildTransform(): /* transform */ Graphene.Matrix
    getChildren(): Clutter.Actor[]
    getClip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    getClipToAllocation(): boolean
    getConstraint(name: string): Clutter.Constraint
    getConstraints(): Clutter.Constraint[]
    getContent(): Clutter.Content
    getContentBox(): /* box */ Clutter.ActorBox
    getContentGravity(): Clutter.ContentGravity
    getContentRepeat(): Clutter.ContentRepeat
    getContentScalingFilters(): [ /* minFilter */ Clutter.ScalingFilter | null, /* magFilter */ Clutter.ScalingFilter | null ]
    getDefaultPaintVolume(): Clutter.PaintVolume
    getEasingDelay(): number
    getEasingDuration(): number
    getEasingMode(): Clutter.AnimationMode
    getEffect(name: string): Clutter.Effect
    getEffects(): Clutter.Effect[]
    getFirstChild(): Clutter.Actor
    getFixedPosition(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    getFixedPositionSet(): boolean
    getFlags(): Clutter.ActorFlags
    getHeight(): number
    getLastChild(): Clutter.Actor
    getLayoutManager(): Clutter.LayoutManager
    getMargin(): /* margin */ Clutter.Margin
    getMarginBottom(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginTop(): number
    getNChildren(): number
    getName(): string
    getNextSibling(): Clutter.Actor
    getOffscreenRedirect(): Clutter.OffscreenRedirect
    getOpacity(): number
    getOpacityOverride(): number
    getPaintBox(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    getPaintOpacity(): number
    getPaintVisibility(): boolean
    getPaintVolume(): Clutter.PaintVolume
    getPangoContext(): Pango.Context
    getParent(): Clutter.Actor
    getPivotPoint(): [ /* pivotX */ number | null, /* pivotY */ number | null ]
    getPivotPointZ(): number
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredSize(): [ /* minWidthP */ number | null, /* minHeightP */ number | null, /* naturalWidthP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    getPreviousSibling(): Clutter.Actor
    getReactive(): boolean
    getRequestMode(): Clutter.RequestMode
    getResourceScale(): number
    getRotationAngle(axis: Clutter.RotateAxis): number
    getScale(): [ /* scaleX */ number | null, /* scaleY */ number | null ]
    getScaleZ(): number
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getStage(): Clutter.Stage
    getTextDirection(): Clutter.TextDirection
    getTransform(): /* transform */ Graphene.Matrix
    getTransformedExtents(): /* rect */ Graphene.Rect
    getTransformedPaintVolume(relativeToAncestor: Clutter.Actor): Clutter.PaintVolume
    getTransformedPosition(): [ /* x */ number | null, /* y */ number | null ]
    getTransformedSize(): [ /* width */ number | null, /* height */ number | null ]
    getTransition(name: string): Clutter.Transition
    getTranslation(): [ /* translateX */ number | null, /* translateY */ number | null, /* translateZ */ number | null ]
    getWidth(): number
    getX(): number
    getXAlign(): Clutter.ActorAlign
    getXExpand(): boolean
    getY(): number
    getYAlign(): Clutter.ActorAlign
    getYExpand(): boolean
    getZPosition(): number
    grabKeyFocus(): void
    hasAccessible(): boolean
    hasActions(): boolean
    hasAllocation(): boolean
    hasConstraints(): boolean
    hasDamage(): boolean
    hasEffects(): boolean
    hasKeyFocus(): boolean
    hasMappedClones(): boolean
    hasOverlaps(): boolean
    hide(): void
    inhibitCulling(): void
    insertChildAbove(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insertChildAtIndex(child: Clutter.Actor, index: number): void
    insertChildBelow(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    invalidatePaintVolume(): void
    invalidateTransform(): void
    isEffectivelyOnStageView(view: Clutter.StageView): boolean
    isInClonePaint(): boolean
    isMapped(): boolean
    isRealized(): boolean
    isRotated(): boolean
    isScaled(): boolean
    isVisible(): boolean
    map(): void
    moveBy(dx: number, dy: number): void
    needsExpand(orientation: Clutter.Orientation): boolean
    paint(paintContext: Clutter.PaintContext): void
    peekStageViews(): Clutter.StageView[]
    pick(pickContext: Clutter.PickContext): void
    pickBox(pickContext: Clutter.PickContext, box: Clutter.ActorBox): void
    queueRedraw(): void
    queueRedrawWithClip(clip?: cairo.RectangleInt | null): void
    queueRelayout(): void
    realize(): void
    removeAction(action: Clutter.Action): void
    removeActionByName(name: string): void
    removeAllChildren(): void
    removeAllTransitions(): void
    removeChild(child: Clutter.Actor): void
    removeClip(): void
    removeConstraint(constraint: Clutter.Constraint): void
    removeConstraintByName(name: string): void
    removeEffect(effect: Clutter.Effect): void
    removeEffectByName(name: string): void
    removeTransition(name: string): void
    replaceChild(oldChild: Clutter.Actor, newChild: Clutter.Actor): void
    restoreEasingState(): void
    saveEasingState(): void
    setAllocation(box: Clutter.ActorBox): void
    setBackgroundColor(color?: Clutter.Color | null): void
    setChildAboveSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildAtIndex(child: Clutter.Actor, index: number): void
    setChildBelowSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildTransform(transform?: Graphene.Matrix | null): void
    setClip(xoff: number, yoff: number, width: number, height: number): void
    setClipToAllocation(clipSet: boolean): void
    setContent(content?: Clutter.Content | null): void
    setContentGravity(gravity: Clutter.ContentGravity): void
    setContentRepeat(repeat: Clutter.ContentRepeat): void
    setContentScalingFilters(minFilter: Clutter.ScalingFilter, magFilter: Clutter.ScalingFilter): void
    setEasingDelay(msecs: number): void
    setEasingDuration(msecs: number): void
    setEasingMode(mode: Clutter.AnimationMode): void
    setFixedPositionSet(isSet: boolean): void
    setFlags(flags: Clutter.ActorFlags): void
    setHeight(height: number): void
    setLayoutManager(manager?: Clutter.LayoutManager | null): void
    setMargin(margin: Clutter.Margin): void
    setMarginBottom(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOffscreenRedirect(redirect: Clutter.OffscreenRedirect): void
    setOpacity(opacity: number): void
    setOpacityOverride(opacity: number): void
    setPivotPoint(pivotX: number, pivotY: number): void
    setPivotPointZ(pivotZ: number): void
    setPosition(x: number, y: number): void
    setReactive(reactive: boolean): void
    setRequestMode(mode: Clutter.RequestMode): void
    setRotationAngle(axis: Clutter.RotateAxis, angle: number): void
    setScale(scaleX: number, scaleY: number): void
    setScaleZ(scaleZ: number): void
    setSize(width: number, height: number): void
    setTextDirection(textDir: Clutter.TextDirection): void
    setTransform(transform?: Graphene.Matrix | null): void
    setTranslation(translateX: number, translateY: number, translateZ: number): void
    setWidth(width: number): void
    setX(x: number): void
    setXAlign(xAlign: Clutter.ActorAlign): void
    setXExpand(expand: boolean): void
    setY(y: number): void
    setYAlign(yAlign: Clutter.ActorAlign): void
    setYExpand(expand: boolean): void
    setZPosition(zPosition: number): void
    shouldPick(pickContext: Clutter.PickContext): boolean
    show(): void
    transformStagePoint(x: number, y: number): [ /* returnType */ boolean, /* xOut */ number, /* yOut */ number ]
    uninhibitCulling(): void
    unmap(): void
    unrealize(): void
    unsetFlags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    findProperty(propertyName: string): GObject.ParamSpec
    getActor(): Clutter.Actor
    getInitialState(propertyName: string, value: any): void
    interpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    setFinalState(propertyName: string, value: any): void
    /* Methods of Clutter.Container */
    addActor(actor: Clutter.Actor): void
    childGetProperty(child: Clutter.Actor, property: string, value: any): void
    childNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    childSetProperty(child: Clutter.Actor, property: string, value: any): void
    createChildMeta(actor: Clutter.Actor): void
    destroyChildMeta(actor: Clutter.Actor): void
    findChildByName(childName: string): Clutter.Actor
    getChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    lowerChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raiseChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    removeActor(actor: Clutter.Actor): void
    sortDepthOrder(): void
    /* Methods of Clutter.Scriptable */
    getId(): string
    parseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    setCustomProperty(script: Clutter.Script, name: string, value: any): void
    setId(id: string): void
    /* Virtual methods of Meta.WindowActor */
    vfuncFindProperty(propertyName: string): GObject.ParamSpec
    vfuncGetActor(): Clutter.Actor
    vfuncGetInitialState(propertyName: string, value: any): void
    vfuncInterpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfuncSetFinalState(propertyName: string, value: any): void
    vfuncActorAdded(actor: Clutter.Actor): void
    vfuncActorRemoved(actor: Clutter.Actor): void
    vfuncAdd(actor: Clutter.Actor): void
    vfuncChildNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfuncCreateChildMeta(actor: Clutter.Actor): void
    vfuncDestroyChildMeta(actor: Clutter.Actor): void
    vfuncGetChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    vfuncLower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRaise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRemove(actor: Clutter.Actor): void
    vfuncSortDepthOrder(): void
    vfuncGetId(): string
    vfuncParseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfuncSetCustomProperty(script: Clutter.Script, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Clutter.Actor */
    vfuncAllocate(box: Clutter.ActorBox): void
    vfuncApplyTransform(matrix: Graphene.Matrix): void
    vfuncButtonPressEvent(event: Clutter.ButtonEvent): boolean
    vfuncButtonReleaseEvent(event: Clutter.ButtonEvent): boolean
    vfuncCalculateResourceScale(phase: number): number
    vfuncCapturedEvent(event: Clutter.Event): boolean
    vfuncDestroy(): void
    vfuncEnterEvent(event: Clutter.CrossingEvent): boolean
    vfuncEvent(event: Clutter.Event): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGetPaintVolume(volume: Clutter.PaintVolume): boolean
    vfuncGetPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    vfuncGetPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    vfuncHasAccessible(): boolean
    vfuncHasOverlaps(): boolean
    vfuncHide(): void
    vfuncHideAll(): void
    vfuncKeyFocusIn(): void
    vfuncKeyFocusOut(): void
    vfuncKeyPressEvent(event: Clutter.KeyEvent): boolean
    vfuncKeyReleaseEvent(event: Clutter.KeyEvent): boolean
    vfuncLeaveEvent(event: Clutter.CrossingEvent): boolean
    vfuncMap(): void
    vfuncMotionEvent(event: Clutter.MotionEvent): boolean
    vfuncPaint(paintContext: Clutter.PaintContext): void
    vfuncPaintNode(root: Clutter.PaintNode): void
    vfuncParentSet(oldParent: Clutter.Actor): void
    vfuncPick(pickContext: Clutter.PickContext): void
    vfuncQueueRelayout(): void
    vfuncRealize(): void
    vfuncResourceScaleChanged(): void
    vfuncScrollEvent(event: Clutter.ScrollEvent): boolean
    vfuncShow(): void
    vfuncTouchEvent(event: Clutter.TouchEvent): boolean
    vfuncUnmap(): void
    vfuncUnrealize(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.WindowActor */
    connect(sigName: "damaged", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "damaged", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "damaged"): void
    on(sigName: "damaged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "damaged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "damaged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "effects-completed", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "effects-completed", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "effects-completed"): void
    on(sigName: "effects-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "effects-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "effects-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "first-frame", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "first-frame", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "first-frame"): void
    on(sigName: "first-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "first-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "first-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "thawed", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "thawed", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "thawed"): void
    on(sigName: "thawed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "thawed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "thawed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: WindowActor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: WindowActor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: WindowActor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: WindowActor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "captured-event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    on(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-event", callback: (($obj: WindowActor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: WindowActor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    on(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-in", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "key-focus-in"): void
    on(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-out", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "key-focus-out"): void
    on(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: WindowActor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: WindowActor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: WindowActor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: WindowActor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-event", callback: (($obj: WindowActor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: WindowActor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    on(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-event", callback: (($obj: WindowActor, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: WindowActor, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    on(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: WindowActor, oldParent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: WindowActor, oldParent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Clutter.Actor | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pick", callback: (($obj: WindowActor, pickContext: Clutter.PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: WindowActor, pickContext: Clutter.PickContext) => void)): number
    emit(sigName: "pick", pickContext: Clutter.PickContext): void
    on(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-relayout", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "queue-relayout"): void
    on(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resource-scale-changed", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "resource-scale-changed"): void
    on(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: WindowActor, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: WindowActor, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "show", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stage-views-changed", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "stage-views-changed"): void
    on(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transition-stopped", callback: (($obj: WindowActor, name: string, isFinished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: WindowActor, name: string, isFinished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, isFinished: boolean): void
    on(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transitions-completed", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "transitions-completed"): void
    on(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: WindowActor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: WindowActor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    on(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "actor-removed", callback: (($obj: WindowActor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: WindowActor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    on(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: WindowActor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: WindowActor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actions", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-rect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::constraints", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-box", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-gravity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-repeat", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::effect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-position-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-clip", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-pointer", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::magnification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reactive", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realized", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-mode", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-direction", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::z-position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WindowActor_ConstructProps)
    _init (config?: WindowActor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(klass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classListChildProperties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface WindowGroup_ConstructProps extends Clutter.Actor_ConstructProps {
}
export class WindowGroup {
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    backgroundColor: Clutter.Color
    readonly backgroundColorSet: boolean
    childTransform: Graphene.Matrix
    readonly childTransformSet: boolean
    clipRect: Graphene.Rect
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly contentBox: Clutter.ActorBox
    contentGravity: Clutter.ContentGravity
    contentRepeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly firstChild: Clutter.Actor
    fixedPositionSet: boolean
    fixedX: number
    fixedY: number
    readonly hasClip: boolean
    readonly hasPointer: boolean
    height: number
    readonly lastChild: Clutter.Actor
    layoutManager: Clutter.LayoutManager
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    marginBottom: number
    marginLeft: number
    marginRight: number
    marginTop: number
    minHeight: number
    minHeightSet: boolean
    minWidth: number
    minWidthSet: boolean
    minificationFilter: Clutter.ScalingFilter
    name: string
    naturalHeight: number
    naturalHeightSet: boolean
    naturalWidth: number
    naturalWidthSet: boolean
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivotPoint: Graphene.Point
    pivotPointZ: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    requestMode: Clutter.RequestMode
    rotationAngleX: number
    rotationAngleY: number
    rotationAngleZ: number
    scaleX: number
    scaleY: number
    scaleZ: number
    showOnSetParent: boolean
    size: Graphene.Size
    textDirection: Clutter.TextDirection
    transform: Graphene.Matrix
    readonly transformSet: boolean
    translationX: number
    translationY: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    xAlign: Clutter.ActorAlign
    xExpand: boolean
    y: number
    yAlign: Clutter.ActorAlign
    yExpand: boolean
    zPosition: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Clutter.Actor */
    addAction(action: Clutter.Action): void
    addActionWithName(name: string, action: Clutter.Action): void
    addChild(child: Clutter.Actor): void
    addConstraint(constraint: Clutter.Constraint): void
    addConstraintWithName(name: string, constraint: Clutter.Constraint): void
    addEffect(effect: Clutter.Effect): void
    addEffectWithName(name: string, effect: Clutter.Effect): void
    addTransition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocateAlignFill(box: Clutter.ActorBox, xAlign: number, yAlign: number, xFill: boolean, yFill: boolean): void
    allocateAvailableSize(x: number, y: number, availableWidth: number, availableHeight: number): void
    allocatePreferredSize(x: number, y: number): void
    applyRelativeTransformToPoint(ancestor: Clutter.Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    applyTransformToPoint(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bindModel(model: Gio.ListModel | null, createChildFunc: Clutter.ActorCreateChildFunc): void
    clearActions(): void
    clearConstraints(): void
    clearEffects(): void
    contains(descendant: Clutter.Actor): boolean
    continuePaint(paintContext: Clutter.PaintContext): void
    continuePick(pickContext: Clutter.PickContext): void
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyAllChildren(): void
    event(event: Clutter.Event, capture: boolean): boolean
    getAbsAllocationVertices(): /* verts */ Graphene.Point3D[]
    getAccessible(): Atk.Object
    getAction(name: string): Clutter.Action
    getActions(): Clutter.Action[]
    getAllocationBox(): /* box */ Clutter.ActorBox
    getBackgroundColor(): /* color */ Clutter.Color
    getChildAtIndex(index: number): Clutter.Actor
    getChildTransform(): /* transform */ Graphene.Matrix
    getChildren(): Clutter.Actor[]
    getClip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    getClipToAllocation(): boolean
    getConstraint(name: string): Clutter.Constraint
    getConstraints(): Clutter.Constraint[]
    getContent(): Clutter.Content
    getContentBox(): /* box */ Clutter.ActorBox
    getContentGravity(): Clutter.ContentGravity
    getContentRepeat(): Clutter.ContentRepeat
    getContentScalingFilters(): [ /* minFilter */ Clutter.ScalingFilter | null, /* magFilter */ Clutter.ScalingFilter | null ]
    getDefaultPaintVolume(): Clutter.PaintVolume
    getEasingDelay(): number
    getEasingDuration(): number
    getEasingMode(): Clutter.AnimationMode
    getEffect(name: string): Clutter.Effect
    getEffects(): Clutter.Effect[]
    getFirstChild(): Clutter.Actor
    getFixedPosition(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    getFixedPositionSet(): boolean
    getFlags(): Clutter.ActorFlags
    getHeight(): number
    getLastChild(): Clutter.Actor
    getLayoutManager(): Clutter.LayoutManager
    getMargin(): /* margin */ Clutter.Margin
    getMarginBottom(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginTop(): number
    getNChildren(): number
    getName(): string
    getNextSibling(): Clutter.Actor
    getOffscreenRedirect(): Clutter.OffscreenRedirect
    getOpacity(): number
    getOpacityOverride(): number
    getPaintBox(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    getPaintOpacity(): number
    getPaintVisibility(): boolean
    getPaintVolume(): Clutter.PaintVolume
    getPangoContext(): Pango.Context
    getParent(): Clutter.Actor
    getPivotPoint(): [ /* pivotX */ number | null, /* pivotY */ number | null ]
    getPivotPointZ(): number
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredSize(): [ /* minWidthP */ number | null, /* minHeightP */ number | null, /* naturalWidthP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    getPreviousSibling(): Clutter.Actor
    getReactive(): boolean
    getRequestMode(): Clutter.RequestMode
    getResourceScale(): number
    getRotationAngle(axis: Clutter.RotateAxis): number
    getScale(): [ /* scaleX */ number | null, /* scaleY */ number | null ]
    getScaleZ(): number
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getStage(): Clutter.Stage
    getTextDirection(): Clutter.TextDirection
    getTransform(): /* transform */ Graphene.Matrix
    getTransformedExtents(): /* rect */ Graphene.Rect
    getTransformedPaintVolume(relativeToAncestor: Clutter.Actor): Clutter.PaintVolume
    getTransformedPosition(): [ /* x */ number | null, /* y */ number | null ]
    getTransformedSize(): [ /* width */ number | null, /* height */ number | null ]
    getTransition(name: string): Clutter.Transition
    getTranslation(): [ /* translateX */ number | null, /* translateY */ number | null, /* translateZ */ number | null ]
    getWidth(): number
    getX(): number
    getXAlign(): Clutter.ActorAlign
    getXExpand(): boolean
    getY(): number
    getYAlign(): Clutter.ActorAlign
    getYExpand(): boolean
    getZPosition(): number
    grabKeyFocus(): void
    hasAccessible(): boolean
    hasActions(): boolean
    hasAllocation(): boolean
    hasConstraints(): boolean
    hasDamage(): boolean
    hasEffects(): boolean
    hasKeyFocus(): boolean
    hasMappedClones(): boolean
    hasOverlaps(): boolean
    hide(): void
    inhibitCulling(): void
    insertChildAbove(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insertChildAtIndex(child: Clutter.Actor, index: number): void
    insertChildBelow(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    invalidatePaintVolume(): void
    invalidateTransform(): void
    isEffectivelyOnStageView(view: Clutter.StageView): boolean
    isInClonePaint(): boolean
    isMapped(): boolean
    isRealized(): boolean
    isRotated(): boolean
    isScaled(): boolean
    isVisible(): boolean
    map(): void
    moveBy(dx: number, dy: number): void
    needsExpand(orientation: Clutter.Orientation): boolean
    paint(paintContext: Clutter.PaintContext): void
    peekStageViews(): Clutter.StageView[]
    pick(pickContext: Clutter.PickContext): void
    pickBox(pickContext: Clutter.PickContext, box: Clutter.ActorBox): void
    queueRedraw(): void
    queueRedrawWithClip(clip?: cairo.RectangleInt | null): void
    queueRelayout(): void
    realize(): void
    removeAction(action: Clutter.Action): void
    removeActionByName(name: string): void
    removeAllChildren(): void
    removeAllTransitions(): void
    removeChild(child: Clutter.Actor): void
    removeClip(): void
    removeConstraint(constraint: Clutter.Constraint): void
    removeConstraintByName(name: string): void
    removeEffect(effect: Clutter.Effect): void
    removeEffectByName(name: string): void
    removeTransition(name: string): void
    replaceChild(oldChild: Clutter.Actor, newChild: Clutter.Actor): void
    restoreEasingState(): void
    saveEasingState(): void
    setAllocation(box: Clutter.ActorBox): void
    setBackgroundColor(color?: Clutter.Color | null): void
    setChildAboveSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildAtIndex(child: Clutter.Actor, index: number): void
    setChildBelowSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildTransform(transform?: Graphene.Matrix | null): void
    setClip(xoff: number, yoff: number, width: number, height: number): void
    setClipToAllocation(clipSet: boolean): void
    setContent(content?: Clutter.Content | null): void
    setContentGravity(gravity: Clutter.ContentGravity): void
    setContentRepeat(repeat: Clutter.ContentRepeat): void
    setContentScalingFilters(minFilter: Clutter.ScalingFilter, magFilter: Clutter.ScalingFilter): void
    setEasingDelay(msecs: number): void
    setEasingDuration(msecs: number): void
    setEasingMode(mode: Clutter.AnimationMode): void
    setFixedPositionSet(isSet: boolean): void
    setFlags(flags: Clutter.ActorFlags): void
    setHeight(height: number): void
    setLayoutManager(manager?: Clutter.LayoutManager | null): void
    setMargin(margin: Clutter.Margin): void
    setMarginBottom(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOffscreenRedirect(redirect: Clutter.OffscreenRedirect): void
    setOpacity(opacity: number): void
    setOpacityOverride(opacity: number): void
    setPivotPoint(pivotX: number, pivotY: number): void
    setPivotPointZ(pivotZ: number): void
    setPosition(x: number, y: number): void
    setReactive(reactive: boolean): void
    setRequestMode(mode: Clutter.RequestMode): void
    setRotationAngle(axis: Clutter.RotateAxis, angle: number): void
    setScale(scaleX: number, scaleY: number): void
    setScaleZ(scaleZ: number): void
    setSize(width: number, height: number): void
    setTextDirection(textDir: Clutter.TextDirection): void
    setTransform(transform?: Graphene.Matrix | null): void
    setTranslation(translateX: number, translateY: number, translateZ: number): void
    setWidth(width: number): void
    setX(x: number): void
    setXAlign(xAlign: Clutter.ActorAlign): void
    setXExpand(expand: boolean): void
    setY(y: number): void
    setYAlign(yAlign: Clutter.ActorAlign): void
    setYExpand(expand: boolean): void
    setZPosition(zPosition: number): void
    shouldPick(pickContext: Clutter.PickContext): boolean
    show(): void
    transformStagePoint(x: number, y: number): [ /* returnType */ boolean, /* xOut */ number, /* yOut */ number ]
    uninhibitCulling(): void
    unmap(): void
    unrealize(): void
    unsetFlags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    findProperty(propertyName: string): GObject.ParamSpec
    getActor(): Clutter.Actor
    getInitialState(propertyName: string, value: any): void
    interpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    setFinalState(propertyName: string, value: any): void
    /* Methods of Clutter.Container */
    addActor(actor: Clutter.Actor): void
    childGetProperty(child: Clutter.Actor, property: string, value: any): void
    childNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    childSetProperty(child: Clutter.Actor, property: string, value: any): void
    createChildMeta(actor: Clutter.Actor): void
    destroyChildMeta(actor: Clutter.Actor): void
    findChildByName(childName: string): Clutter.Actor
    getChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    lowerChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raiseChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    removeActor(actor: Clutter.Actor): void
    sortDepthOrder(): void
    /* Methods of Clutter.Scriptable */
    getId(): string
    parseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    setCustomProperty(script: Clutter.Script, name: string, value: any): void
    setId(id: string): void
    /* Virtual methods of Meta.WindowGroup */
    vfuncFindProperty(propertyName: string): GObject.ParamSpec
    vfuncGetActor(): Clutter.Actor
    vfuncGetInitialState(propertyName: string, value: any): void
    vfuncInterpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfuncSetFinalState(propertyName: string, value: any): void
    vfuncActorAdded(actor: Clutter.Actor): void
    vfuncActorRemoved(actor: Clutter.Actor): void
    vfuncAdd(actor: Clutter.Actor): void
    vfuncChildNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfuncCreateChildMeta(actor: Clutter.Actor): void
    vfuncDestroyChildMeta(actor: Clutter.Actor): void
    vfuncGetChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    vfuncLower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRaise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRemove(actor: Clutter.Actor): void
    vfuncSortDepthOrder(): void
    vfuncGetId(): string
    vfuncParseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfuncSetCustomProperty(script: Clutter.Script, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Clutter.Actor */
    vfuncAllocate(box: Clutter.ActorBox): void
    vfuncApplyTransform(matrix: Graphene.Matrix): void
    vfuncButtonPressEvent(event: Clutter.ButtonEvent): boolean
    vfuncButtonReleaseEvent(event: Clutter.ButtonEvent): boolean
    vfuncCalculateResourceScale(phase: number): number
    vfuncCapturedEvent(event: Clutter.Event): boolean
    vfuncDestroy(): void
    vfuncEnterEvent(event: Clutter.CrossingEvent): boolean
    vfuncEvent(event: Clutter.Event): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGetPaintVolume(volume: Clutter.PaintVolume): boolean
    vfuncGetPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    vfuncGetPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    vfuncHasAccessible(): boolean
    vfuncHasOverlaps(): boolean
    vfuncHide(): void
    vfuncHideAll(): void
    vfuncKeyFocusIn(): void
    vfuncKeyFocusOut(): void
    vfuncKeyPressEvent(event: Clutter.KeyEvent): boolean
    vfuncKeyReleaseEvent(event: Clutter.KeyEvent): boolean
    vfuncLeaveEvent(event: Clutter.CrossingEvent): boolean
    vfuncMap(): void
    vfuncMotionEvent(event: Clutter.MotionEvent): boolean
    vfuncPaint(paintContext: Clutter.PaintContext): void
    vfuncPaintNode(root: Clutter.PaintNode): void
    vfuncParentSet(oldParent: Clutter.Actor): void
    vfuncPick(pickContext: Clutter.PickContext): void
    vfuncQueueRelayout(): void
    vfuncRealize(): void
    vfuncResourceScaleChanged(): void
    vfuncScrollEvent(event: Clutter.ScrollEvent): boolean
    vfuncShow(): void
    vfuncTouchEvent(event: Clutter.TouchEvent): boolean
    vfuncUnmap(): void
    vfuncUnrealize(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: WindowGroup, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: WindowGroup, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: WindowGroup, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: WindowGroup, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "captured-event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    on(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-event", callback: (($obj: WindowGroup, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: WindowGroup, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    on(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-in", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "key-focus-in"): void
    on(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-out", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "key-focus-out"): void
    on(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: WindowGroup, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: WindowGroup, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: WindowGroup, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: WindowGroup, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-event", callback: (($obj: WindowGroup, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: WindowGroup, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    on(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-event", callback: (($obj: WindowGroup, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: WindowGroup, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    on(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: WindowGroup, oldParent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: WindowGroup, oldParent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Clutter.Actor | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pick", callback: (($obj: WindowGroup, pickContext: Clutter.PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: WindowGroup, pickContext: Clutter.PickContext) => void)): number
    emit(sigName: "pick", pickContext: Clutter.PickContext): void
    on(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-relayout", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "queue-relayout"): void
    on(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resource-scale-changed", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "resource-scale-changed"): void
    on(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-scale-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: WindowGroup, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: WindowGroup, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "show", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stage-views-changed", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "stage-views-changed"): void
    on(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stage-views-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transition-stopped", callback: (($obj: WindowGroup, name: string, isFinished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: WindowGroup, name: string, isFinished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, isFinished: boolean): void
    on(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transitions-completed", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "transitions-completed"): void
    on(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: WindowGroup, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: WindowGroup, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    on(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "actor-removed", callback: (($obj: WindowGroup, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: WindowGroup, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    on(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: WindowGroup, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: WindowGroup, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actions", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-rect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::constraints", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-box", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-gravity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-repeat", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::effect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-position-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-clip", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-pointer", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::magnification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reactive", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realized", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-mode", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-direction", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::z-position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WindowGroup_ConstructProps)
    _init (config?: WindowGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(klass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classListChildProperties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface Workspace_ConstructProps extends GObject.Object_ConstructProps {
}
export class Workspace {
    /* Properties of Meta.Workspace */
    readonly active: boolean
    readonly nWindows: number
    readonly workspaceIndex: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.Workspace */
    activate(timestamp: number): void
    activateWithFocus(focusThis: Window, timestamp: number): void
    getDisplay(): Display
    getNeighbor(direction: MotionDirection): Workspace
    getWorkAreaAllMonitors(): /* area */ Rectangle
    getWorkAreaForMonitor(whichMonitor: number): /* area */ Rectangle
    index(): number
    listWindows(): Window[]
    setBuiltinStruts(struts: Strut[]): void
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
    /* Signals of Meta.Workspace */
    connect(sigName: "window-added", callback: (($obj: Workspace, object: Window) => void)): number
    connect_after(sigName: "window-added", callback: (($obj: Workspace, object: Window) => void)): number
    emit(sigName: "window-added", object: Window): void
    on(sigName: "window-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-removed", callback: (($obj: Workspace, object: Window) => void)): number
    connect_after(sigName: "window-removed", callback: (($obj: Workspace, object: Window) => void)): number
    emit(sigName: "window-removed", object: Window): void
    on(sigName: "window-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-windows", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-windows", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-windows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-windows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-windows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::workspace-index", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workspace-index", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::workspace-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::workspace-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::workspace-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Workspace_ConstructProps)
    _init (config?: Workspace_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WorkspaceManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class WorkspaceManager {
    /* Properties of Meta.WorkspaceManager */
    readonly layoutColumns: number
    readonly layoutRows: number
    readonly nWorkspaces: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.WorkspaceManager */
    appendNewWorkspace(activate: boolean, timestamp: number): Workspace
    getActiveWorkspace(): Workspace
    getActiveWorkspaceIndex(): number
    getNWorkspaces(): number
    getWorkspaceByIndex(index: number): Workspace | null
    overrideWorkspaceLayout(startingCorner: DisplayCorner, verticalLayout: boolean, nRows: number, nColumns: number): void
    removeWorkspace(workspace: Workspace, timestamp: number): void
    reorderWorkspace(workspace: Workspace, newIndex: number): void
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
    /* Signals of Meta.WorkspaceManager */
    connect(sigName: "active-workspace-changed", callback: (($obj: WorkspaceManager) => void)): number
    connect_after(sigName: "active-workspace-changed", callback: (($obj: WorkspaceManager) => void)): number
    emit(sigName: "active-workspace-changed"): void
    on(sigName: "active-workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-workspace-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "showing-desktop-changed", callback: (($obj: WorkspaceManager) => void)): number
    connect_after(sigName: "showing-desktop-changed", callback: (($obj: WorkspaceManager) => void)): number
    emit(sigName: "showing-desktop-changed"): void
    on(sigName: "showing-desktop-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "showing-desktop-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "showing-desktop-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "workspace-added", callback: (($obj: WorkspaceManager, object: number) => void)): number
    connect_after(sigName: "workspace-added", callback: (($obj: WorkspaceManager, object: number) => void)): number
    emit(sigName: "workspace-added", object: number): void
    on(sigName: "workspace-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "workspace-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "workspace-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "workspace-removed", callback: (($obj: WorkspaceManager, object: number) => void)): number
    connect_after(sigName: "workspace-removed", callback: (($obj: WorkspaceManager, object: number) => void)): number
    emit(sigName: "workspace-removed", object: number): void
    on(sigName: "workspace-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "workspace-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "workspace-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "workspace-switched", callback: (($obj: WorkspaceManager, object: number, p0: number, p1: MotionDirection) => void)): number
    connect_after(sigName: "workspace-switched", callback: (($obj: WorkspaceManager, object: number, p0: number, p1: MotionDirection) => void)): number
    emit(sigName: "workspace-switched", object: number, p0: number, p1: MotionDirection): void
    on(sigName: "workspace-switched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "workspace-switched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "workspace-switched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "workspaces-reordered", callback: (($obj: WorkspaceManager) => void)): number
    connect_after(sigName: "workspaces-reordered", callback: (($obj: WorkspaceManager) => void)): number
    emit(sigName: "workspaces-reordered"): void
    on(sigName: "workspaces-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "workspaces-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "workspaces-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-columns", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-columns", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-rows", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-rows", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-workspaces", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-workspaces", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-workspaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-workspaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-workspaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WorkspaceManager_ConstructProps)
    _init (config?: WorkspaceManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Display_ConstructProps extends GObject.Object_ConstructProps {
}
export class X11Display {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Meta.X11Display */
    clearStageInputRegion(): void
    getDamageEventBase(): number
    getScreenNumber(): number
    getShapeEventBase(): number
    hasShape(): boolean
    setCmSelection(): void
    setStageInputRegion(region: xfixes.XserverRegion): void
    xwindowIsANoFocusWindow(xwindow: xlib.Window): boolean
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
    connect(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: X11Display_ConstructProps)
    _init (config?: X11Display_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class BackendClass {
    static name: string
}
export abstract class BackgroundActorClass {
    /* Fields of Meta.BackgroundActorClass */
    parentClass: Clutter.ActorClass
    static name: string
}
export abstract class BackgroundClass {
    /* Fields of Meta.BackgroundClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class BackgroundContentClass {
    /* Fields of Meta.BackgroundContentClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class BackgroundGroupClass {
    /* Fields of Meta.BackgroundGroupClass */
    parentClass: Clutter.ActorClass
    static name: string
}
export abstract class BackgroundImageCacheClass {
    /* Fields of Meta.BackgroundImageCacheClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class BackgroundImageClass {
    /* Fields of Meta.BackgroundImageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class BarrierClass {
    static name: string
}
export class BarrierEvent {
    /* Fields of Meta.BarrierEvent */
    eventId: number
    dt: number
    time: number
    x: number
    y: number
    dx: number
    dy: number
    released: boolean
    grabbed: boolean
    static name: string
}
export class BarrierPrivate {
    static name: string
}
export class ButtonLayout {
    /* Fields of Meta.ButtonLayout */
    leftButtons: ButtonFunction[]
    leftButtonsHasSpacer: boolean[]
    rightButtons: ButtonFunction[]
    rightButtonsHasSpacer: boolean[]
    static name: string
}
export abstract class CloseDialogInterface {
    /* Fields of Meta.CloseDialogInterface */
    parentIface: GObject.TypeInterface
    show: (dialog: CloseDialog) => void
    hide: (dialog: CloseDialog) => void
    focus: (dialog: CloseDialog) => void
    static name: string
}
export abstract class CompositorClass {
    static name: string
}
export abstract class CursorTrackerClass {
    static name: string
}
export abstract class DisplayClass {
    static name: string
}
export abstract class DndClass {
    /* Fields of Meta.DndClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Edge {
    /* Fields of Meta.Edge */
    rect: Rectangle
    sideType: Side
    edgeType: EdgeType
    static name: string
}
export class Frame {
    static name: string
}
export class FrameBorders {
    /* Fields of Meta.FrameBorders */
    visible: Gtk.Border
    invisible: Gtk.Border
    total: Gtk.Border
    /* Methods of Meta.FrameBorders */
    clear(): void
    static name: string
}
export class Group {
    /* Methods of Meta.Group */
    getSize(): number
    getStartupId(): string
    listWindows(): Window[]
    updateLayers(): void
    static name: string
}
export abstract class IdleMonitorClass {
    static name: string
}
export abstract class InhibitShortcutsDialogInterface {
    /* Fields of Meta.InhibitShortcutsDialogInterface */
    parentIface: GObject.TypeInterface
    show: (dialog: InhibitShortcutsDialog) => void
    hide: (dialog: InhibitShortcutsDialog) => void
    static name: string
}
export class KeyBinding {
    /* Methods of Meta.KeyBinding */
    getMask(): number
    getModifiers(): VirtualModifier
    getName(): string
    isBuiltin(): boolean
    isReversed(): boolean
    static name: string
}
export abstract class LaunchContextClass {
    /* Fields of Meta.LaunchContextClass */
    parentClass: Gio.AppLaunchContextClass
    static name: string
}
export abstract class MonitorManagerClass {
    static name: string
}
export abstract class PluginClass {
    /* Fields of Meta.PluginClass */
    start: (plugin: Plugin) => void
    minimize: (plugin: Plugin, actor: WindowActor) => void
    unminimize: (plugin: Plugin, actor: WindowActor) => void
    sizeChanged: (plugin: Plugin, actor: WindowActor) => void
    sizeChange: (plugin: Plugin, actor: WindowActor, whichChange: SizeChange, oldFrameRect: Rectangle, oldBufferRect: Rectangle) => void
    map: (plugin: Plugin, actor: WindowActor) => void
    destroy: (plugin: Plugin, actor: WindowActor) => void
    switchWorkspace: (plugin: Plugin, from: number, to: number, direction: MotionDirection) => void
    showTilePreview: (plugin: Plugin, window: Window, tileRect: Rectangle, tileMonitorNumber: number) => void
    hideTilePreview: (plugin: Plugin) => void
    showWindowMenu: (plugin: Plugin, window: Window, menu: WindowMenuType, x: number, y: number) => void
    showWindowMenuForRect: (plugin: Plugin, window: Window, menu: WindowMenuType, rect: Rectangle) => void
    killWindowEffects: (plugin: Plugin, actor: WindowActor) => void
    killSwitchWorkspace: (plugin: Plugin) => void
    xeventFilter: (plugin: Plugin, event: xlib.XEvent) => boolean
    keybindingFilter: (plugin: Plugin, binding: KeyBinding) => boolean
    confirmDisplayChange: (plugin: Plugin) => void
    pluginInfo: (plugin: Plugin) => PluginInfo
    locatePointer: (plugin: Plugin) => void
    static name: string
}
export class PluginInfo {
    /* Fields of Meta.PluginInfo */
    name: string
    version: string
    author: string
    license: string
    description: string
    static name: string
}
export class Rectangle {
    /* Fields of Meta.Rectangle */
    x: number
    y: number
    width: number
    height: number
    /* Methods of Meta.Rectangle */
    area(): number
    containsRect(innerRect: Rectangle): boolean
    copy(): Rectangle
    couldFitRect(innerRect: Rectangle): boolean
    equal(src2: Rectangle): boolean
    free(): void
    horizOverlap(rect2: Rectangle): boolean
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle ]
    overlap(rect2: Rectangle): boolean
    union(rect2: Rectangle): /* dest */ Rectangle
    vertOverlap(rect2: Rectangle): boolean
    static name: string
}
export abstract class RemoteAccessControllerClass {
    /* Fields of Meta.RemoteAccessControllerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class RemoteAccessHandleClass {
    /* Fields of Meta.RemoteAccessHandleClass */
    parentClass: GObject.ObjectClass
    stop: (handle: RemoteAccessHandle) => void
    static name: string
}
export abstract class SelectionClass {
    /* Fields of Meta.SelectionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class SelectionSourceClass {
    /* Fields of Meta.SelectionSourceClass */
    parentClass: GObject.ObjectClass
    activated: (source: SelectionSource) => void
    deactivated: (source: SelectionSource) => void
    getMimetypes: (source: SelectionSource) => string[]
    readAsync: (source: SelectionSource, mimetype: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readFinish: (source: SelectionSource, result: Gio.AsyncResult) => Gio.InputStream
    static name: string
}
export abstract class SelectionSourceMemoryClass {
    /* Fields of Meta.SelectionSourceMemoryClass */
    parentClass: SelectionSourceClass
    static name: string
}
export class Settings {
    /* Methods of Meta.Settings */
    getFontDpi(): number
    getUiScalingFactor(): number
    static name: string
}
export class Shadow {
    /* Methods of Meta.Shadow */
    getBounds(windowX: number, windowY: number, windowWidth: number, windowHeight: number, bounds: cairo.RectangleInt): void
    paint(framebuffer: Cogl.Framebuffer, windowX: number, windowY: number, windowWidth: number, windowHeight: number, opacity: number, clip: cairo.Region | null, clipStrictly: boolean): void
    ref(): Shadow
    unref(): void
    static name: string
}
export abstract class ShadowFactoryClass {
    /* Fields of Meta.ShadowFactoryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ShadowParams {
    /* Fields of Meta.ShadowParams */
    radius: number
    topFade: number
    xOffset: number
    yOffset: number
    opacity: number
    static name: string
}
export abstract class ShapedTextureClass {
    /* Fields of Meta.ShapedTextureClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class SoundPlayerClass {
    /* Fields of Meta.SoundPlayerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class StageClass {
    /* Fields of Meta.StageClass */
    parentClass: Clutter.StageClass
    static name: string
}
export abstract class StartupNotificationClass {
    /* Fields of Meta.StartupNotificationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class StartupSequenceClass {
    static name: string
}
export class Strut {
    /* Fields of Meta.Strut */
    rect: Rectangle
    side: Side
    static name: string
}
export class Theme {
    /* Methods of Meta.Theme */
    free(): void
    static name: string
}
export abstract class WaylandClientClass {
    /* Fields of Meta.WaylandClientClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class WindowActorClass {
    static name: string
}
export abstract class WindowClass {
    static name: string
}
export abstract class WindowGroupClass {
    /* Fields of Meta.WindowGroupClass */
    parentClass: Clutter.ActorClass
    static name: string
}
export class WindowShape {
    /* Methods of Meta.WindowShape */
    equal(shapeB: WindowShape): boolean
    getBorders(borderTop: number, borderRight: number, borderBottom: number, borderLeft: number): void
    hash(): number
    ref(): WindowShape
    toRegion(centerWidth: number, centerHeight: number): cairo.Region
    unref(): void
    static name: string
    static new(region: cairo.Region): WindowShape
    constructor(region: cairo.Region)
    /* Static methods and pseudo-constructors */
    static new(region: cairo.Region): WindowShape
}
export abstract class WorkspaceClass {
    static name: string
}
export abstract class WorkspaceManagerClass {
    /* Fields of Meta.WorkspaceManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class X11DisplayClass {
    /* Fields of Meta.X11DisplayClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}