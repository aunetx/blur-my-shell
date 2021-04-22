/**
 * Meta-8
 */

import * as Gjs from './Gjs';
import * as xlib from './xlib-2.0';
import * as xfixes from './xfixes-4.0';
import * as Gtk from './Gtk-3.0';
import * as Gdk from './Gdk-3.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';
import * as GDesktopEnums from './GDesktopEnums-3.0';
import * as CoglPango from './CoglPango-8';
import * as PangoCairo from './PangoCairo-1.0';
import * as Cogl from './Cogl-8';
import * as Graphene from './Graphene-1.0';
import * as GL from './GL-1.0';
import * as Clutter from './Clutter-8';
import * as Json from './Json-1.0';

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
export function add_clutter_debug_flags(debug_flags: Clutter.DebugFlag, draw_flags: Clutter.DrawDebugFlag, pick_flags: Clutter.PickDebugFlag): void
export function add_debug_paint_flag(flag: DebugPaintFlag): void
export function add_verbose_topic(topic: DebugTopic): void
export function clutter_init(): void
export function disable_unredirect_for_display(display: Display): void
export function enable_unredirect_for_display(display: Display): void
export function exit(code: ExitCode): void
export function external_binding_name_for_action(keybinding_action: number): string
export function finalize(): void
export function focus_stage_window(display: Display, timestamp: number): void
export function frame_type_to_string(type: FrameType): string
export function g_utf8_strndup(src: string, n: number): string
export function get_backend(): Backend
export function get_debug_paint_flags(): DebugPaintFlag
export function get_exit_code(): ExitCode
export function get_feedback_group_for_display(display: Display): Clutter.Actor
export function get_locale_direction(): LocaleDirection
export function get_replace_current_wm(): boolean
export function get_stage_for_display(display: Display): Clutter.Actor
export function get_top_window_group_for_display(display: Display): Clutter.Actor
export function get_window_actors(display: Display): Clutter.Actor[]
export function get_window_group_for_display(display: Display): Clutter.Actor
export function gravity_to_string(gravity: Gravity): string
export function is_restart(): boolean
export function is_syncing(): boolean
export function is_topic_enabled(topic: DebugTopic): boolean
export function is_verbose(): boolean
export function is_wayland_compositor(): boolean
export function keybindings_set_custom_handler(name: string, handler: KeyHandlerFunc | null): boolean
export function later_add(when: LaterType, func: GLib.SourceFunc): number
export function later_remove(later_id: number): void
export function pop_no_msg_prefix(): void
export function preference_to_string(pref: Preference): string
export function prefs_bell_is_audible(): boolean
export function prefs_change_workspace_name(i: number, name: string): void
export function prefs_get_action_double_click_titlebar(): GDesktopEnums.TitlebarAction
export function prefs_get_action_middle_click_titlebar(): GDesktopEnums.TitlebarAction
export function prefs_get_action_right_click_titlebar(): GDesktopEnums.TitlebarAction
export function prefs_get_attach_modal_dialogs(): boolean
export function prefs_get_auto_maximize(): boolean
export function prefs_get_auto_raise(): boolean
export function prefs_get_auto_raise_delay(): number
export function prefs_get_button_layout(): /* button_layout */ ButtonLayout
export function prefs_get_center_new_windows(): boolean
export function prefs_get_check_alive_timeout(): number
export function prefs_get_compositing_manager(): boolean
export function prefs_get_cursor_size(): number
export function prefs_get_cursor_theme(): string
export function prefs_get_disable_workarounds(): boolean
export function prefs_get_drag_threshold(): number
export function prefs_get_draggable_border_width(): number
export function prefs_get_dynamic_workspaces(): boolean
export function prefs_get_edge_tiling(): boolean
export function prefs_get_focus_change_on_pointer_rest(): boolean
export function prefs_get_focus_mode(): GDesktopEnums.FocusMode
export function prefs_get_focus_new_windows(): GDesktopEnums.FocusNewWindows
export function prefs_get_force_fullscreen(): boolean
export function prefs_get_gnome_accessibility(): boolean
export function prefs_get_gnome_animations(): boolean
export function prefs_get_keybinding_action(name: string): KeyBindingAction
export function prefs_get_mouse_button_menu(): number
export function prefs_get_mouse_button_mods(): VirtualModifier
export function prefs_get_mouse_button_resize(): number
export function prefs_get_num_workspaces(): number
export function prefs_get_raise_on_click(): boolean
export function prefs_get_show_fallback_app_menu(): boolean
export function prefs_get_titlebar_font(): Pango.FontDescription
export function prefs_get_visual_bell(): boolean
export function prefs_get_visual_bell_type(): GDesktopEnums.VisualBellType
export function prefs_get_workspace_name(i: number): string
export function prefs_get_workspaces_only_on_primary(): boolean
export function prefs_init(): void
export function prefs_set_force_fullscreen(whether: boolean): void
export function prefs_set_num_workspaces(n_workspaces: number): void
export function prefs_set_show_fallback_app_menu(whether: boolean): void
export function push_no_msg_prefix(): void
export function quit(code: ExitCode): void
export function rect(x: number, y: number, width: number, height: number): Rectangle
export function register_with_session(): void
export function remove_clutter_debug_flags(debug_flags: Clutter.DebugFlag, draw_flags: Clutter.DrawDebugFlag, pick_flags: Clutter.PickDebugFlag): void
export function remove_debug_paint_flag(flag: DebugPaintFlag): void
export function remove_verbose_topic(topic: DebugTopic): void
export function restart(message?: string | null): void
export function run_main_loop(): void
export function start(): void
export function test_init(): void
export function unsigned_long_equal(v1?: object | null, v2?: object | null): number
export function unsigned_long_hash(v?: object | null): number
export function x11_error_trap_pop(x11_display: X11Display): void
export function x11_error_trap_pop_with_return(x11_display: X11Display): number
export function x11_error_trap_push(x11_display: X11Display): void
export function x11_init_gdk_display(): boolean
export interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, watch_id: number): void
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
    is_visible(): boolean
    response(response: CloseDialogResponse): void
    show(): void
    /* Virtual methods of Meta.CloseDialog */
    vfunc_focus(): void
    vfunc_hide(): void
    vfunc_show(): void
    /* Signals of Meta.CloseDialog */
    connect(sigName: "response", callback: (($obj: CloseDialog, object: CloseDialogResponse) => void)): number
    connect_after(sigName: "response", callback: (($obj: CloseDialog, object: CloseDialogResponse) => void)): number
    emit(sigName: "response", object: CloseDialogResponse): void
    static name: string
}
export class InhibitShortcutsDialog {
    /* Methods of Meta.InhibitShortcutsDialog */
    hide(): void
    response(response: InhibitShortcutsDialogResponse): void
    show(): void
    /* Virtual methods of Meta.InhibitShortcutsDialog */
    vfunc_hide(): void
    vfunc_show(): void
    /* Signals of Meta.InhibitShortcutsDialog */
    connect(sigName: "response", callback: (($obj: InhibitShortcutsDialog, object: InhibitShortcutsDialogResponse) => void)): number
    connect_after(sigName: "response", callback: (($obj: InhibitShortcutsDialog, object: InhibitShortcutsDialogResponse) => void)): number
    emit(sigName: "response", object: InhibitShortcutsDialogResponse): void
    static name: string
}
export interface Backend_ConstructProps extends GObject.Object_ConstructProps {
}
export class Backend {
    /* Fields of Meta.Backend */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.Backend */
    get_dnd(): Dnd
    get_remote_access_controller(): RemoteAccessController
    get_stage(): Clutter.Actor
    is_rendering_hardware_accelerated(): boolean
    lock_layout_group(idx: number): void
    set_keymap(layouts: string, variants: string, options: string): void
    set_numlock(numlock_state: boolean): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Meta.Backend */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.Backend */
    connect(sigName: "gpu-added", callback: (($obj: Backend, gpu: any) => void)): number
    connect_after(sigName: "gpu-added", callback: (($obj: Backend, gpu: any) => void)): number
    emit(sigName: "gpu-added", gpu: any): void
    connect(sigName: "keymap-changed", callback: (($obj: Backend) => void)): number
    connect_after(sigName: "keymap-changed", callback: (($obj: Backend) => void)): number
    emit(sigName: "keymap-changed"): void
    connect(sigName: "keymap-layout-group-changed", callback: (($obj: Backend, object: number) => void)): number
    connect_after(sigName: "keymap-layout-group-changed", callback: (($obj: Backend, object: number) => void)): number
    emit(sigName: "keymap-layout-group-changed", object: number): void
    connect(sigName: "last-device-changed", callback: (($obj: Backend, object: Clutter.InputDevice) => void)): number
    connect_after(sigName: "last-device-changed", callback: (($obj: Backend, object: Clutter.InputDevice) => void)): number
    emit(sigName: "last-device-changed", object: Clutter.InputDevice): void
    connect(sigName: "lid-is-closed-changed", callback: (($obj: Backend, object: boolean) => void)): number
    connect_after(sigName: "lid-is-closed-changed", callback: (($obj: Backend, object: boolean) => void)): number
    emit(sigName: "lid-is-closed-changed", object: boolean): void
    connect(sigName: "prepare-shutdown", callback: (($obj: Backend) => void)): number
    connect_after(sigName: "prepare-shutdown", callback: (($obj: Backend) => void)): number
    emit(sigName: "prepare-shutdown"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Backend_ConstructProps)
    _init (config?: Backend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Background_ConstructProps extends GObject.Object_ConstructProps {
    meta_display?: Display
}
export class Background {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.Background */
    set_blend(file1: Gio.File, file2: Gio.File, blend_factor: number, style: GDesktopEnums.BackgroundStyle): void
    set_color(color: Clutter.Color): void
    set_file(file: Gio.File | null, style: GDesktopEnums.BackgroundStyle): void
    set_gradient(shading_direction: GDesktopEnums.BackgroundShading, color: Clutter.Color, second_color: Clutter.Color): void
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
    /* Signals of Meta.Background */
    connect(sigName: "changed", callback: (($obj: Background) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Background) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Background, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Background, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Background_ConstructProps)
    _init (config?: Background_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: Display): Background
    static refresh_all(): void
    static $gtype: GObject.Type
}
export interface BackgroundActor_ConstructProps extends Clutter.Actor_ConstructProps {
    meta_display?: Display
    monitor?: number
}
export class BackgroundActor {
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    background_color: Clutter.Color
    readonly background_color_set: boolean
    child_transform: Graphene.Matrix
    readonly child_transform_set: boolean
    clip_rect: Graphene.Rect
    clip_to_allocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly content_box: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Clutter.Actor
    layout_manager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: Clutter.ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: Graphene.Point
    pivot_point_z: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Graphene.Size
    text_direction: Clutter.TextDirection
    transform: Graphene.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    x_expand: boolean
    y: number
    y_align: Clutter.ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Actor */
    add_action(action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Clutter.Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    apply_transform_to_point(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bind_model(model: Gio.ListModel | null, create_child_func: Clutter.ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor): boolean
    continue_paint(paint_context: Clutter.PaintContext): void
    continue_pick(pick_context: Clutter.PickContext): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): /* verts */ Graphene.Point3D[]
    get_accessible(): Atk.Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): /* box */ Clutter.ActorBox
    get_background_color(): /* color */ Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor
    get_child_transform(): /* transform */ Graphene.Matrix
    get_children(): Clutter.Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.Content
    get_content_box(): /* box */ Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ Clutter.ScalingFilter | null, /* mag_filter */ Clutter.ScalingFilter | null ]
    get_default_paint_volume(): Clutter.PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor
    get_fixed_position(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_height(): number
    get_last_child(): Clutter.Actor
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): /* margin */ Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Clutter.Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Clutter.Actor
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_z(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Clutter.Stage
    get_text_direction(): Clutter.TextDirection
    get_transform(): /* transform */ Graphene.Matrix
    get_transformed_extents(): /* rect */ Graphene.Rect
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor): Clutter.PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Clutter.Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    grab_key_focus(): void
    has_accessible(): boolean
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_damage(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_mapped_clones(): boolean
    has_overlaps(): boolean
    hide(): void
    inhibit_culling(): void
    insert_child_above(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insert_child_at_index(child: Clutter.Actor, index_: number): void
    insert_child_below(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: Clutter.StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(paint_context: Clutter.PaintContext): void
    peek_stage_views(): Clutter.StageView[]
    pick(pick_context: Clutter.PickContext): void
    pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Clutter.Actor, new_child: Clutter.Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox): void
    set_background_color(color?: Clutter.Color | null): void
    set_child_above_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_at_index(child: Clutter.Actor, index_: number): void
    set_child_below_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_transform(transform?: Graphene.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.Content | null): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager | null): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: Graphene.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: Clutter.PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    find_property(property_name: string): GObject.ParamSpec
    get_actor(): Clutter.Actor
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Clutter.Actor): void
    child_get_property(child: Clutter.Actor, property: string, value: any): void
    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Clutter.Actor, property: string, value: any): void
    create_child_meta(actor: Clutter.Actor): void
    destroy_child_meta(actor: Clutter.Actor): void
    find_child_by_name(child_name: string): Clutter.Actor
    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    remove_actor(actor: Clutter.Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Meta.BackgroundActor */
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_actor(): Clutter.Actor
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Clutter.Actor): void
    vfunc_actor_removed(actor: Clutter.Actor): void
    vfunc_add(actor: Clutter.Actor): void
    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Clutter.Actor): void
    vfunc_destroy_child_meta(actor: Clutter.Actor): void
    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_remove(actor: Clutter.Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: Clutter.ActorBox): void
    vfunc_apply_transform(matrix: Graphene.Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(paint_context: Clutter.PaintContext): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor): void
    vfunc_pick(pick_context: Clutter.PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: BackgroundActor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: BackgroundActor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: BackgroundActor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: BackgroundActor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: BackgroundActor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: BackgroundActor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "hide", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: BackgroundActor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: BackgroundActor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: BackgroundActor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: BackgroundActor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: BackgroundActor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: BackgroundActor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: BackgroundActor, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: BackgroundActor, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "parent-set", callback: (($obj: BackgroundActor, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: BackgroundActor, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: BackgroundActor, pick_context: Clutter.PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: BackgroundActor, pick_context: Clutter.PickContext) => void)): number
    emit(sigName: "pick", pick_context: Clutter.PickContext): void
    connect(sigName: "queue-relayout", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "realize", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "resource-scale-changed", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "resource-scale-changed"): void
    connect(sigName: "scroll-event", callback: (($obj: BackgroundActor, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: BackgroundActor, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "show", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "stage-views-changed", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "stage-views-changed"): void
    connect(sigName: "touch-event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: BackgroundActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: BackgroundActor, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: BackgroundActor, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: BackgroundActor) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: BackgroundActor) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: BackgroundActor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: BackgroundActor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: BackgroundActor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: BackgroundActor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: BackgroundActor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: BackgroundActor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actions", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackgroundActor_ConstructProps)
    _init (config?: BackgroundActor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: Display, monitor: number): BackgroundActor
    static new(): BackgroundActor
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface BackgroundContent_ConstructProps extends GObject.Object_ConstructProps {
    background?: Background
    brightness?: number
    gradient?: boolean
    gradient_height?: number
    gradient_max_darkness?: number
    meta_display?: Display
    monitor?: number
    rounded_clip_radius?: number
    vignette?: boolean
    vignette_sharpness?: number
}
export class BackgroundContent {
    /* Properties of Meta.BackgroundContent */
    background: Background
    brightness: number
    gradient: boolean
    gradient_height: number
    gradient_max_darkness: number
    rounded_clip_radius: number
    vignette: boolean
    vignette_sharpness: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.BackgroundContent */
    set_background(background: Background): void
    set_gradient(enabled: boolean, height: number, tone_start: number): void
    set_rounded_clip_bounds(bounds?: Graphene.Rect | null): void
    set_rounded_clip_radius(radius: number): void
    set_vignette(enabled: boolean, brightness: number, sharpness: number): void
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
    /* Methods of Clutter.Content */
    get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    invalidate(): void
    invalidate_size(): void
    /* Virtual methods of Meta.BackgroundContent */
    vfunc_attached(actor: Clutter.Actor): void
    vfunc_detached(actor: Clutter.Actor): void
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    vfunc_invalidate(): void
    vfunc_invalidate_size(): void
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode, paint_context: Clutter.PaintContext): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Content */
    connect(sigName: "attached", callback: (($obj: BackgroundContent, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: BackgroundContent, actor: Clutter.Actor) => void)): number
    emit(sigName: "attached", actor: Clutter.Actor): void
    connect(sigName: "detached", callback: (($obj: BackgroundContent, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: BackgroundContent, actor: Clutter.Actor) => void)): number
    emit(sigName: "detached", actor: Clutter.Actor): void
    connect(sigName: "notify::background", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::brightness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::brightness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gradient", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gradient", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gradient-height", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gradient-height", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gradient-max-darkness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gradient-max-darkness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rounded-clip-radius", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rounded-clip-radius", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vignette", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vignette", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vignette-sharpness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vignette-sharpness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    background_color: Clutter.Color
    readonly background_color_set: boolean
    child_transform: Graphene.Matrix
    readonly child_transform_set: boolean
    clip_rect: Graphene.Rect
    clip_to_allocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly content_box: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Clutter.Actor
    layout_manager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: Clutter.ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: Graphene.Point
    pivot_point_z: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Graphene.Size
    text_direction: Clutter.TextDirection
    transform: Graphene.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    x_expand: boolean
    y: number
    y_align: Clutter.ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Meta.BackgroundGroup */
    parent_instance: Clutter.Actor
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Actor */
    add_action(action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Clutter.Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    apply_transform_to_point(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bind_model(model: Gio.ListModel | null, create_child_func: Clutter.ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor): boolean
    continue_paint(paint_context: Clutter.PaintContext): void
    continue_pick(pick_context: Clutter.PickContext): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): /* verts */ Graphene.Point3D[]
    get_accessible(): Atk.Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): /* box */ Clutter.ActorBox
    get_background_color(): /* color */ Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor
    get_child_transform(): /* transform */ Graphene.Matrix
    get_children(): Clutter.Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.Content
    get_content_box(): /* box */ Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ Clutter.ScalingFilter | null, /* mag_filter */ Clutter.ScalingFilter | null ]
    get_default_paint_volume(): Clutter.PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor
    get_fixed_position(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_height(): number
    get_last_child(): Clutter.Actor
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): /* margin */ Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Clutter.Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Clutter.Actor
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_z(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Clutter.Stage
    get_text_direction(): Clutter.TextDirection
    get_transform(): /* transform */ Graphene.Matrix
    get_transformed_extents(): /* rect */ Graphene.Rect
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor): Clutter.PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Clutter.Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    grab_key_focus(): void
    has_accessible(): boolean
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_damage(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_mapped_clones(): boolean
    has_overlaps(): boolean
    hide(): void
    inhibit_culling(): void
    insert_child_above(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insert_child_at_index(child: Clutter.Actor, index_: number): void
    insert_child_below(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: Clutter.StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(paint_context: Clutter.PaintContext): void
    peek_stage_views(): Clutter.StageView[]
    pick(pick_context: Clutter.PickContext): void
    pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Clutter.Actor, new_child: Clutter.Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox): void
    set_background_color(color?: Clutter.Color | null): void
    set_child_above_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_at_index(child: Clutter.Actor, index_: number): void
    set_child_below_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_transform(transform?: Graphene.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.Content | null): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager | null): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: Graphene.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: Clutter.PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    find_property(property_name: string): GObject.ParamSpec
    get_actor(): Clutter.Actor
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Clutter.Actor): void
    child_get_property(child: Clutter.Actor, property: string, value: any): void
    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Clutter.Actor, property: string, value: any): void
    create_child_meta(actor: Clutter.Actor): void
    destroy_child_meta(actor: Clutter.Actor): void
    find_child_by_name(child_name: string): Clutter.Actor
    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    remove_actor(actor: Clutter.Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Meta.BackgroundGroup */
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_actor(): Clutter.Actor
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Clutter.Actor): void
    vfunc_actor_removed(actor: Clutter.Actor): void
    vfunc_add(actor: Clutter.Actor): void
    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Clutter.Actor): void
    vfunc_destroy_child_meta(actor: Clutter.Actor): void
    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_remove(actor: Clutter.Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: Clutter.ActorBox): void
    vfunc_apply_transform(matrix: Graphene.Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(paint_context: Clutter.PaintContext): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor): void
    vfunc_pick(pick_context: Clutter.PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: BackgroundGroup, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: BackgroundGroup, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: BackgroundGroup, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: BackgroundGroup, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: BackgroundGroup, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: BackgroundGroup, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "hide", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: BackgroundGroup, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: BackgroundGroup, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: BackgroundGroup, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: BackgroundGroup, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: BackgroundGroup, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: BackgroundGroup, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: BackgroundGroup, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: BackgroundGroup, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "parent-set", callback: (($obj: BackgroundGroup, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: BackgroundGroup, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: BackgroundGroup, pick_context: Clutter.PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: BackgroundGroup, pick_context: Clutter.PickContext) => void)): number
    emit(sigName: "pick", pick_context: Clutter.PickContext): void
    connect(sigName: "queue-relayout", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "realize", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "resource-scale-changed", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "resource-scale-changed"): void
    connect(sigName: "scroll-event", callback: (($obj: BackgroundGroup, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: BackgroundGroup, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "show", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "stage-views-changed", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "stage-views-changed"): void
    connect(sigName: "touch-event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: BackgroundGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: BackgroundGroup, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: BackgroundGroup, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: BackgroundGroup) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: BackgroundGroup) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: BackgroundGroup, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: BackgroundGroup, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: BackgroundGroup, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: BackgroundGroup, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: BackgroundGroup, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: BackgroundGroup, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actions", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackgroundGroup_ConstructProps)
    _init (config?: BackgroundGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BackgroundGroup
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface BackgroundImage_ConstructProps extends GObject.Object_ConstructProps {
}
export class BackgroundImage {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.BackgroundImage */
    get_success(): boolean
    get_texture(): Cogl.Texture
    is_loaded(): boolean
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
    /* Signals of Meta.BackgroundImage */
    connect(sigName: "loaded", callback: (($obj: BackgroundImage) => void)): number
    connect_after(sigName: "loaded", callback: (($obj: BackgroundImage) => void)): number
    emit(sigName: "loaded"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackgroundImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackgroundImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackgroundImage_ConstructProps)
    _init (config?: BackgroundImage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BackgroundImageCache_ConstructProps extends GObject.Object_ConstructProps {
}
export class BackgroundImageCache {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.BackgroundImageCache */
    load(file: Gio.File): BackgroundImage
    purge(file: Gio.File): void
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
    connect(sigName: "notify", callback: (($obj: BackgroundImageCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackgroundImageCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackgroundImageCache_ConstructProps)
    _init (config?: BackgroundImageCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): BackgroundImageCache
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.Barrier */
    destroy(): void
    is_active(): boolean
    release(event: BarrierEvent): void
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
    /* Signals of Meta.Barrier */
    connect(sigName: "hit", callback: (($obj: Barrier, event: BarrierEvent) => void)): number
    connect_after(sigName: "hit", callback: (($obj: Barrier, event: BarrierEvent) => void)): number
    emit(sigName: "hit", event: BarrierEvent): void
    connect(sigName: "left", callback: (($obj: Barrier, event: BarrierEvent) => void)): number
    connect_after(sigName: "left", callback: (($obj: Barrier, event: BarrierEvent) => void)): number
    emit(sigName: "left", event: BarrierEvent): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.Compositor */
    add_window(window: Window): void
    destroy(): void
    filter_keybinding(binding: KeyBinding): boolean
    flash_display(display: Display): void
    hide_tile_preview(): void
    hide_window(window: Window, effect: CompEffect): void
    manage(): void
    queue_frame_drawn(window: Window, no_delay_frame: boolean): void
    remove_window(window: Window): void
    show_tile_preview(window: Window, tile_rect: Rectangle, tile_monitor_number: number): void
    show_window(window: Window, effect: CompEffect): void
    show_window_menu(window: Window, menu: WindowMenuType, x: number, y: number): void
    show_window_menu_for_rect(window: Window, menu: WindowMenuType, rect: Rectangle): void
    size_change_window(window: Window, which_change: SizeChange, old_frame_rect: Rectangle, old_buffer_rect: Rectangle): void
    switch_workspace(from: Workspace, to: Workspace, direction: MotionDirection): void
    sync_stack(stack: object[]): void
    sync_updates_frozen(window: Window): void
    sync_window_geometry(window: Window, did_placement: boolean): void
    unmanage(): void
    window_opacity_changed(window: Window): void
    window_shape_changed(window: Window): void
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
    connect(sigName: "notify", callback: (($obj: Compositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Compositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.CursorTracker */
    get_hot(): [ /* x */ number, /* y */ number ]
    get_pointer(coords: Graphene.Point, mods: Clutter.ModifierType): void
    get_pointer_visible(): boolean
    get_sprite(): Cogl.Texture
    set_pointer_visible(visible: boolean): void
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
    /* Signals of Meta.CursorTracker */
    connect(sigName: "cursor-changed", callback: (($obj: CursorTracker) => void)): number
    connect_after(sigName: "cursor-changed", callback: (($obj: CursorTracker) => void)): number
    emit(sigName: "cursor-changed"): void
    connect(sigName: "position-invalidated", callback: (($obj: CursorTracker) => void)): number
    connect_after(sigName: "position-invalidated", callback: (($obj: CursorTracker) => void)): number
    emit(sigName: "position-invalidated"): void
    connect(sigName: "visibility-changed", callback: (($obj: CursorTracker) => void)): number
    connect_after(sigName: "visibility-changed", callback: (($obj: CursorTracker) => void)): number
    emit(sigName: "visibility-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CursorTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CursorTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CursorTracker_ConstructProps)
    _init (config?: CursorTracker_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_for_display(display: Display): CursorTracker
    static $gtype: GObject.Type
}
export interface Display_ConstructProps extends GObject.Object_ConstructProps {
}
export class Display {
    /* Properties of Meta.Display */
    readonly compositor_modifiers: Clutter.ModifierType
    readonly focus_window: Window
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.Display */
    add_ignored_crossing_serial(serial: number): void
    add_keybinding(name: string, settings: Gio.Settings, flags: KeyBindingFlags, handler: KeyHandlerFunc): number
    begin_grab_op(window: Window, op: GrabOp, pointer_already_grabbed: boolean, frame_action: boolean, button: number, modmask: number, timestamp: number, root_x: number, root_y: number): boolean
    clear_mouse_mode(): void
    close(timestamp: number): void
    end_grab_op(timestamp: number): void
    focus_default_window(timestamp: number): void
    freeze_keyboard(timestamp: number): void
    get_compositor_modifiers(): Clutter.ModifierType
    get_current_monitor(): number
    get_current_time(): number
    get_current_time_roundtrip(): number
    get_focus_window(): Window
    get_grab_op(): GrabOp
    get_keybinding_action(keycode: number, mask: number): number
    get_last_user_time(): number
    get_monitor_geometry(monitor: number): /* geometry */ Rectangle
    get_monitor_in_fullscreen(monitor: number): boolean
    get_monitor_index_for_rect(rect: Rectangle): number
    get_monitor_neighbor_index(which_monitor: number, dir: DisplayDirection): number
    get_monitor_scale(monitor: number): number
    get_n_monitors(): number
    get_pad_action_label(pad: Clutter.InputDevice, action_type: PadActionType, action_number: number): string
    get_primary_monitor(): number
    get_selection(): Selection
    get_size(): [ /* width */ number, /* height */ number ]
    get_sound_player(): SoundPlayer
    get_tab_current(type: TabList, workspace: Workspace): Window
    get_tab_list(type: TabList, workspace?: Workspace | null): Window[]
    get_tab_next(type: TabList, workspace: Workspace, window: Window | null, backward: boolean): Window
    get_workspace_manager(): WorkspaceManager
    grab_accelerator(accelerator: string, flags: KeyBindingFlags): number
    is_pointer_emulating_sequence(sequence?: Clutter.EventSequence | null): boolean
    remove_keybinding(name: string): boolean
    request_pad_osd(pad: Clutter.InputDevice, edition_mode: boolean): void
    set_cursor(cursor: Cursor): void
    set_input_focus(window: Window, focus_frame: boolean, timestamp: number): void
    sort_windows_by_stacking(windows: Window[]): Window[]
    supports_extended_barriers(): boolean
    unfreeze_keyboard(timestamp: number): void
    ungrab_accelerator(action_id: number): boolean
    ungrab_keyboard(timestamp: number): void
    unset_input_focus(timestamp: number): void
    xserver_time_is_before(time1: number, time2: number): boolean
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
    /* Signals of Meta.Display */
    connect(sigName: "accelerator-activated", callback: (($obj: Display, object: number, p0: Clutter.InputDevice, p1: number) => void)): number
    connect_after(sigName: "accelerator-activated", callback: (($obj: Display, object: number, p0: Clutter.InputDevice, p1: number) => void)): number
    emit(sigName: "accelerator-activated", object: number, p0: Clutter.InputDevice, p1: number): void
    connect(sigName: "closing", callback: (($obj: Display) => void)): number
    connect_after(sigName: "closing", callback: (($obj: Display) => void)): number
    emit(sigName: "closing"): void
    connect(sigName: "cursor-updated", callback: (($obj: Display) => void)): number
    connect_after(sigName: "cursor-updated", callback: (($obj: Display) => void)): number
    emit(sigName: "cursor-updated"): void
    connect(sigName: "gl-video-memory-purged", callback: (($obj: Display) => void)): number
    connect_after(sigName: "gl-video-memory-purged", callback: (($obj: Display) => void)): number
    emit(sigName: "gl-video-memory-purged"): void
    connect(sigName: "grab-op-begin", callback: (($obj: Display, object: Window, p0: GrabOp) => void)): number
    connect_after(sigName: "grab-op-begin", callback: (($obj: Display, object: Window, p0: GrabOp) => void)): number
    emit(sigName: "grab-op-begin", object: Window, p0: GrabOp): void
    connect(sigName: "grab-op-end", callback: (($obj: Display, object: Window, p0: GrabOp) => void)): number
    connect_after(sigName: "grab-op-end", callback: (($obj: Display, object: Window, p0: GrabOp) => void)): number
    emit(sigName: "grab-op-end", object: Window, p0: GrabOp): void
    connect(sigName: "in-fullscreen-changed", callback: (($obj: Display) => void)): number
    connect_after(sigName: "in-fullscreen-changed", callback: (($obj: Display) => void)): number
    emit(sigName: "in-fullscreen-changed"): void
    connect(sigName: "init-xserver", callback: (($obj: Display, object: Gio.Task) => boolean)): number
    connect_after(sigName: "init-xserver", callback: (($obj: Display, object: Gio.Task) => boolean)): number
    emit(sigName: "init-xserver", object: Gio.Task): void
    connect(sigName: "modifiers-accelerator-activated", callback: (($obj: Display) => boolean)): number
    connect_after(sigName: "modifiers-accelerator-activated", callback: (($obj: Display) => boolean)): number
    emit(sigName: "modifiers-accelerator-activated"): void
    connect(sigName: "overlay-key", callback: (($obj: Display) => void)): number
    connect_after(sigName: "overlay-key", callback: (($obj: Display) => void)): number
    emit(sigName: "overlay-key"): void
    connect(sigName: "pad-mode-switch", callback: (($obj: Display, object: Clutter.InputDevice, p0: number, p1: number) => void)): number
    connect_after(sigName: "pad-mode-switch", callback: (($obj: Display, object: Clutter.InputDevice, p0: number, p1: number) => void)): number
    emit(sigName: "pad-mode-switch", object: Clutter.InputDevice, p0: number, p1: number): void
    connect(sigName: "restacked", callback: (($obj: Display) => void)): number
    connect_after(sigName: "restacked", callback: (($obj: Display) => void)): number
    emit(sigName: "restacked"): void
    connect(sigName: "restart", callback: (($obj: Display) => boolean)): number
    connect_after(sigName: "restart", callback: (($obj: Display) => boolean)): number
    emit(sigName: "restart"): void
    connect(sigName: "show-osd", callback: (($obj: Display, object: number, p0: string, p1: string) => void)): number
    connect_after(sigName: "show-osd", callback: (($obj: Display, object: number, p0: string, p1: string) => void)): number
    emit(sigName: "show-osd", object: number, p0: string, p1: string): void
    connect(sigName: "show-pad-osd", callback: (($obj: Display, pad: Clutter.InputDevice, settings: Gio.Settings, layout_path: string, edition_mode: boolean, monitor_idx: number) => Clutter.Actor | null)): number
    connect_after(sigName: "show-pad-osd", callback: (($obj: Display, pad: Clutter.InputDevice, settings: Gio.Settings, layout_path: string, edition_mode: boolean, monitor_idx: number) => Clutter.Actor | null)): number
    emit(sigName: "show-pad-osd", pad: Clutter.InputDevice, settings: Gio.Settings, layout_path: string, edition_mode: boolean, monitor_idx: number): void
    connect(sigName: "show-resize-popup", callback: (($obj: Display, object: boolean, p0: Rectangle, p1: number, p2: number) => boolean)): number
    connect_after(sigName: "show-resize-popup", callback: (($obj: Display, object: boolean, p0: Rectangle, p1: number, p2: number) => boolean)): number
    emit(sigName: "show-resize-popup", object: boolean, p0: Rectangle, p1: number, p2: number): void
    connect(sigName: "show-restart-message", callback: (($obj: Display, message?: string | null) => boolean)): number
    connect_after(sigName: "show-restart-message", callback: (($obj: Display, message?: string | null) => boolean)): number
    emit(sigName: "show-restart-message", message?: string | null): void
    connect(sigName: "showing-desktop-changed", callback: (($obj: Display) => void)): number
    connect_after(sigName: "showing-desktop-changed", callback: (($obj: Display) => void)): number
    emit(sigName: "showing-desktop-changed"): void
    connect(sigName: "window-created", callback: (($obj: Display, object: Window) => void)): number
    connect_after(sigName: "window-created", callback: (($obj: Display, object: Window) => void)): number
    emit(sigName: "window-created", object: Window): void
    connect(sigName: "window-demands-attention", callback: (($obj: Display, object: Window) => void)): number
    connect_after(sigName: "window-demands-attention", callback: (($obj: Display, object: Window) => void)): number
    emit(sigName: "window-demands-attention", object: Window): void
    connect(sigName: "window-entered-monitor", callback: (($obj: Display, object: number, p0: Window) => void)): number
    connect_after(sigName: "window-entered-monitor", callback: (($obj: Display, object: number, p0: Window) => void)): number
    emit(sigName: "window-entered-monitor", object: number, p0: Window): void
    connect(sigName: "window-left-monitor", callback: (($obj: Display, object: number, p0: Window) => void)): number
    connect_after(sigName: "window-left-monitor", callback: (($obj: Display, object: number, p0: Window) => void)): number
    emit(sigName: "window-left-monitor", object: number, p0: Window): void
    connect(sigName: "window-marked-urgent", callback: (($obj: Display, object: Window) => void)): number
    connect_after(sigName: "window-marked-urgent", callback: (($obj: Display, object: Window) => void)): number
    emit(sigName: "window-marked-urgent", object: Window): void
    connect(sigName: "workareas-changed", callback: (($obj: Display) => void)): number
    connect_after(sigName: "workareas-changed", callback: (($obj: Display) => void)): number
    emit(sigName: "workareas-changed"): void
    connect(sigName: "x11-display-closing", callback: (($obj: Display) => void)): number
    connect_after(sigName: "x11-display-closing", callback: (($obj: Display) => void)): number
    emit(sigName: "x11-display-closing"): void
    connect(sigName: "x11-display-opened", callback: (($obj: Display) => void)): number
    connect_after(sigName: "x11-display-opened", callback: (($obj: Display) => void)): number
    emit(sigName: "x11-display-opened"): void
    connect(sigName: "x11-display-setup", callback: (($obj: Display) => void)): number
    connect_after(sigName: "x11-display-setup", callback: (($obj: Display) => void)): number
    emit(sigName: "x11-display-setup"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compositor-modifiers", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compositor-modifiers", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Display_ConstructProps)
    _init (config?: Display_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Dnd_ConstructProps extends GObject.Object_ConstructProps {
}
export class Dnd {
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.Dnd */
    connect(sigName: "dnd-enter", callback: (($obj: Dnd) => void)): number
    connect_after(sigName: "dnd-enter", callback: (($obj: Dnd) => void)): number
    emit(sigName: "dnd-enter"): void
    connect(sigName: "dnd-leave", callback: (($obj: Dnd) => void)): number
    connect_after(sigName: "dnd-leave", callback: (($obj: Dnd) => void)): number
    emit(sigName: "dnd-leave"): void
    connect(sigName: "dnd-position-change", callback: (($obj: Dnd, object: number, p0: number) => void)): number
    connect_after(sigName: "dnd-position-change", callback: (($obj: Dnd, object: number, p0: number) => void)): number
    emit(sigName: "dnd-position-change", object: number, p0: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Dnd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Dnd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.IdleMonitor */
    add_idle_watch(interval_msec: number, callback: IdleMonitorWatchFunc | null): number
    add_user_active_watch(callback: IdleMonitorWatchFunc | null): number
    get_idletime(): number
    remove_watch(id: number): void
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
    connect(sigName: "notify", callback: (($obj: IdleMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IdleMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IdleMonitor_ConstructProps)
    _init (config?: IdleMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_core(): IdleMonitor
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
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.LaunchContext */
    set_timestamp(timestamp: number): void
    set_workspace(workspace: Workspace): void
    /* Methods of Gio.AppLaunchContext */
    get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    get_environment(): string[]
    get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    launch_failed(startup_notify_id: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
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
    /* Virtual methods of Gio.AppLaunchContext */
    vfunc_get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfunc_get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfunc_launch_failed(startup_notify_id: string): void
    vfunc_launched(info: Gio.AppInfo, platform_data: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: (($obj: LaunchContext, startup_notify_id: string) => void)): number
    connect_after(sigName: "launch-failed", callback: (($obj: LaunchContext, startup_notify_id: string) => void)): number
    emit(sigName: "launch-failed", startup_notify_id: string): void
    connect(sigName: "launched", callback: (($obj: LaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: (($obj: LaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    emit(sigName: "launched", info: Gio.AppInfo, platform_data: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::timestamp", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::workspace", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workspace", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly panel_orientation_managed: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.MonitorManager */
    can_switch_config(): boolean
    get_is_builtin_display_on(): boolean
    get_monitor_for_connector(connector: string): number
    get_panel_orientation_managed(): boolean
    get_switch_config(): MonitorSwitchConfigType
    switch_config(config_type: MonitorSwitchConfigType): void
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
    /* Signals of Meta.MonitorManager */
    connect(sigName: "confirm-display-change", callback: (($obj: MonitorManager) => void)): number
    connect_after(sigName: "confirm-display-change", callback: (($obj: MonitorManager) => void)): number
    emit(sigName: "confirm-display-change"): void
    connect(sigName: "monitors-changed", callback: (($obj: MonitorManager) => void)): number
    connect_after(sigName: "monitors-changed", callback: (($obj: MonitorManager) => void)): number
    emit(sigName: "monitors-changed"): void
    connect(sigName: "monitors-changed-internal", callback: (($obj: MonitorManager) => void)): number
    connect_after(sigName: "monitors-changed-internal", callback: (($obj: MonitorManager) => void)): number
    emit(sigName: "monitors-changed-internal"): void
    connect(sigName: "power-save-mode-changed", callback: (($obj: MonitorManager) => void)): number
    connect_after(sigName: "power-save-mode-changed", callback: (($obj: MonitorManager) => void)): number
    emit(sigName: "power-save-mode-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::panel-orientation-managed", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::panel-orientation-managed", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MonitorManager_ConstructProps)
    _init (config?: MonitorManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): MonitorManager
    static get_display_configuration_timeout(): number
    static $gtype: GObject.Type
}
export interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
}
export class Plugin {
    /* Fields of Meta.Plugin */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.Plugin */
    begin_modal(options: ModalOptions, timestamp: number): boolean
    complete_display_change(ok: boolean): void
    destroy_completed(actor: WindowActor): void
    end_modal(timestamp: number): void
    get_display(): Display
    get_info(): PluginInfo
    map_completed(actor: WindowActor): void
    minimize_completed(actor: WindowActor): void
    size_change_completed(actor: WindowActor): void
    switch_workspace_completed(): void
    unminimize_completed(actor: WindowActor): void
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
    /* Virtual methods of Meta.Plugin */
    vfunc_confirm_display_change(): void
    vfunc_destroy(actor: WindowActor): void
    vfunc_hide_tile_preview(): void
    vfunc_keybinding_filter(binding: KeyBinding): boolean
    vfunc_kill_switch_workspace(): void
    vfunc_kill_window_effects(actor: WindowActor): void
    vfunc_locate_pointer(): void
    vfunc_map(actor: WindowActor): void
    vfunc_minimize(actor: WindowActor): void
    vfunc_plugin_info(): PluginInfo
    vfunc_show_tile_preview(window: Window, tile_rect: Rectangle, tile_monitor_number: number): void
    vfunc_show_window_menu(window: Window, menu: WindowMenuType, x: number, y: number): void
    vfunc_show_window_menu_for_rect(window: Window, menu: WindowMenuType, rect: Rectangle): void
    vfunc_size_change(actor: WindowActor, which_change: SizeChange, old_frame_rect: Rectangle, old_buffer_rect: Rectangle): void
    vfunc_size_changed(actor: WindowActor): void
    vfunc_start(): void
    vfunc_switch_workspace(from: number, to: number, direction: MotionDirection): void
    vfunc_unminimize(actor: WindowActor): void
    vfunc_xevent_filter(event: xlib.XEvent): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static manager_set_plugin_type(gtype: GObject.Type): void
    static $gtype: GObject.Type
}
export interface RemoteAccessController_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteAccessController {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.RemoteAccessController */
    inhibit_remote_access(): void
    uninhibit_remote_access(): void
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
    /* Signals of Meta.RemoteAccessController */
    connect(sigName: "new-handle", callback: (($obj: RemoteAccessController, object: RemoteAccessHandle) => void)): number
    connect_after(sigName: "new-handle", callback: (($obj: RemoteAccessController, object: RemoteAccessHandle) => void)): number
    emit(sigName: "new-handle", object: RemoteAccessHandle): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteAccessController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteAccessController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteAccessController_ConstructProps)
    _init (config?: RemoteAccessController_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RemoteAccessHandle_ConstructProps extends GObject.Object_ConstructProps {
    is_recording?: boolean
}
export class RemoteAccessHandle {
    /* Fields of Meta.RemoteAccessHandle */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.RemoteAccessHandle */
    get_disable_animations(): boolean
    stop(): void
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
    /* Virtual methods of Meta.RemoteAccessHandle */
    vfunc_stop(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.RemoteAccessHandle */
    connect(sigName: "stopped", callback: (($obj: RemoteAccessHandle) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: RemoteAccessHandle) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteAccessHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteAccessHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteAccessHandle_ConstructProps)
    _init (config?: RemoteAccessHandle_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Selection_ConstructProps extends GObject.Object_ConstructProps {
}
export class Selection {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.Selection */
    get_mimetypes(selection_type: SelectionType): string[]
    set_owner(selection_type: SelectionType, owner: SelectionSource): void
    transfer_async(selection_type: SelectionType, mimetype: string, size: number, output: Gio.OutputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transfer_finish(result: Gio.AsyncResult): boolean
    unset_owner(selection_type: SelectionType, owner: SelectionSource): void
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
    /* Signals of Meta.Selection */
    connect(sigName: "owner-changed", callback: (($obj: Selection, object: number, p0: SelectionSource) => void)): number
    connect_after(sigName: "owner-changed", callback: (($obj: Selection, object: number, p0: SelectionSource) => void)): number
    emit(sigName: "owner-changed", object: number, p0: SelectionSource): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Selection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Selection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.SelectionSource */
    get_mimetypes(): string[]
    is_active(): boolean
    read_async(mimetype: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_finish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Virtual methods of Meta.SelectionSource */
    vfunc_activated(): void
    vfunc_deactivated(): void
    vfunc_get_mimetypes(): string[]
    vfunc_read_async(mimetype: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_read_finish(result: Gio.AsyncResult): Gio.InputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.SelectionSource */
    connect(sigName: "activated", callback: (($obj: SelectionSource) => void)): number
    connect_after(sigName: "activated", callback: (($obj: SelectionSource) => void)): number
    emit(sigName: "activated"): void
    connect(sigName: "deactivated", callback: (($obj: SelectionSource) => void)): number
    connect_after(sigName: "deactivated", callback: (($obj: SelectionSource) => void)): number
    emit(sigName: "deactivated"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SelectionSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SelectionSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SelectionSource_ConstructProps)
    _init (config?: SelectionSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SelectionSourceMemory_ConstructProps extends SelectionSource_ConstructProps {
}
export class SelectionSourceMemory {
    /* Fields of Meta.SelectionSource */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.SelectionSource */
    get_mimetypes(): string[]
    is_active(): boolean
    read_async(mimetype: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_finish(result: Gio.AsyncResult): Gio.InputStream
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
    /* Virtual methods of Meta.SelectionSource */
    vfunc_activated(): void
    vfunc_deactivated(): void
    vfunc_get_mimetypes(): string[]
    vfunc_read_async(mimetype: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_read_finish(result: Gio.AsyncResult): Gio.InputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.SelectionSource */
    connect(sigName: "activated", callback: (($obj: SelectionSourceMemory) => void)): number
    connect_after(sigName: "activated", callback: (($obj: SelectionSourceMemory) => void)): number
    emit(sigName: "activated"): void
    connect(sigName: "deactivated", callback: (($obj: SelectionSourceMemory) => void)): number
    connect_after(sigName: "deactivated", callback: (($obj: SelectionSourceMemory) => void)): number
    emit(sigName: "deactivated"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SelectionSourceMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SelectionSourceMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SelectionSourceMemory_ConstructProps)
    _init (config?: SelectionSourceMemory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mimetype: string, content: GLib.Bytes): SelectionSourceMemory
    static $gtype: GObject.Type
}
export interface ShadowFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class ShadowFactory {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.ShadowFactory */
    get_params(class_name: string, focused: boolean): /* params */ ShadowParams
    get_shadow(shape: WindowShape, width: number, height: number, class_name: string, focused: boolean): Shadow
    set_params(class_name: string, focused: boolean, params: ShadowParams): void
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
    /* Signals of Meta.ShadowFactory */
    connect(sigName: "changed", callback: (($obj: ShadowFactory) => void)): number
    connect_after(sigName: "changed", callback: (($obj: ShadowFactory) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ShadowFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ShadowFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ShadowFactory_ConstructProps)
    _init (config?: ShadowFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ShadowFactory
    static get_default(): ShadowFactory
    static $gtype: GObject.Type
}
export interface ShapedTexture_ConstructProps extends GObject.Object_ConstructProps {
}
export class ShapedTexture {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.ShapedTexture */
    get_image(clip?: cairo.RectangleInt | null): cairo.Surface | null
    get_texture(): Cogl.Texture
    set_create_mipmaps(create_mipmaps: boolean): void
    set_mask_texture(mask_texture: Cogl.Texture): void
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
    /* Methods of Clutter.Content */
    get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    invalidate(): void
    invalidate_size(): void
    /* Virtual methods of Meta.ShapedTexture */
    vfunc_attached(actor: Clutter.Actor): void
    vfunc_detached(actor: Clutter.Actor): void
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    vfunc_invalidate(): void
    vfunc_invalidate_size(): void
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode, paint_context: Clutter.PaintContext): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.ShapedTexture */
    connect(sigName: "size-changed", callback: (($obj: ShapedTexture) => void)): number
    connect_after(sigName: "size-changed", callback: (($obj: ShapedTexture) => void)): number
    emit(sigName: "size-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ShapedTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ShapedTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Content */
    connect(sigName: "attached", callback: (($obj: ShapedTexture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: ShapedTexture, actor: Clutter.Actor) => void)): number
    emit(sigName: "attached", actor: Clutter.Actor): void
    connect(sigName: "detached", callback: (($obj: ShapedTexture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: ShapedTexture, actor: Clutter.Actor) => void)): number
    emit(sigName: "detached", actor: Clutter.Actor): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ShapedTexture_ConstructProps)
    _init (config?: ShapedTexture_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SoundPlayer_ConstructProps extends GObject.Object_ConstructProps {
}
export class SoundPlayer {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.SoundPlayer */
    play_from_file(file: Gio.File, description: string, cancellable?: Gio.Cancellable | null): void
    play_from_theme(name: string, description: string, cancellable?: Gio.Cancellable | null): void
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
    connect(sigName: "notify", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SoundPlayer_ConstructProps)
    _init (config?: SoundPlayer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Stage_ConstructProps extends Clutter.Stage_ConstructProps {
}
export class Stage {
    /* Properties of Clutter.Stage */
    key_focus: Clutter.Actor
    readonly perspective: Clutter.Perspective
    title: string
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    background_color: Clutter.Color
    readonly background_color_set: boolean
    child_transform: Graphene.Matrix
    readonly child_transform_set: boolean
    clip_rect: Graphene.Rect
    clip_to_allocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly content_box: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Clutter.Actor
    layout_manager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: Clutter.ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: Graphene.Point
    pivot_point_z: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Graphene.Size
    text_direction: Clutter.TextDirection
    transform: Graphene.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    x_expand: boolean
    y: number
    y_align: Clutter.ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Stage */
    capture_into(rect: cairo.RectangleInt, data: number): void
    capture_view_into(view: Clutter.StageView, rect: cairo.RectangleInt, data: number, stride: number): void
    clear_stage_views(): void
    ensure_viewport(): void
    event(event: Clutter.Event): boolean
    get_actor_at_pos(pick_mode: Clutter.PickMode, x: number, y: number): Clutter.Actor
    get_capture_final_size(rect: cairo.RectangleInt): [ /* returnType */ boolean, /* out_width */ number | null, /* out_height */ number | null, /* out_scale */ number | null ]
    get_device_actor(device: Clutter.InputDevice, sequence?: Clutter.EventSequence | null): Clutter.Actor
    get_frame_counter(): number
    get_key_focus(): Clutter.Actor
    get_minimum_size(): [ /* width */ number, /* height */ number ]
    get_motion_events_enabled(): boolean
    get_perspective(): /* perspective */ Clutter.Perspective | null
    get_throttle_motion_events(): boolean
    get_title(): string
    get_use_alpha(): boolean
    paint_to_buffer(rect: cairo.RectangleInt, scale: number, data: Uint8Array, stride: number, format: Cogl.PixelFormat, paint_flags: Clutter.PaintFlag): [ /* returnType */ boolean, /* data */ Uint8Array ]
    paint_to_framebuffer(framebuffer: Cogl.Framebuffer, rect: cairo.RectangleInt, scale: number, paint_flags: Clutter.PaintFlag): void
    read_pixels(x: number, y: number, width: number, height: number): Uint8Array
    repick_device(device: Clutter.InputDevice): void
    schedule_update(): void
    set_key_focus(actor?: Clutter.Actor | null): void
    set_minimum_size(width: number, height: number): void
    set_motion_events_enabled(enabled: boolean): void
    set_throttle_motion_events(throttle: boolean): void
    set_title(title: string): void
    set_use_alpha(use_alpha: boolean): void
    update_device(device: Clutter.InputDevice, sequence: Clutter.EventSequence, point: Graphene.Point, time: number, new_actor: Clutter.Actor, emit_crossing: boolean): void
    /* Methods of Clutter.Actor */
    add_action(action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Clutter.Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    apply_transform_to_point(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bind_model(model: Gio.ListModel | null, create_child_func: Clutter.ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor): boolean
    continue_paint(paint_context: Clutter.PaintContext): void
    continue_pick(pick_context: Clutter.PickContext): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    get_abs_allocation_vertices(): /* verts */ Graphene.Point3D[]
    get_accessible(): Atk.Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): /* box */ Clutter.ActorBox
    get_background_color(): /* color */ Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor
    get_child_transform(): /* transform */ Graphene.Matrix
    get_children(): Clutter.Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.Content
    get_content_box(): /* box */ Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ Clutter.ScalingFilter | null, /* mag_filter */ Clutter.ScalingFilter | null ]
    get_default_paint_volume(): Clutter.PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor
    get_fixed_position(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_height(): number
    get_last_child(): Clutter.Actor
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): /* margin */ Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Clutter.Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Clutter.Actor
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_z(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Clutter.Stage
    get_text_direction(): Clutter.TextDirection
    get_transform(): /* transform */ Graphene.Matrix
    get_transformed_extents(): /* rect */ Graphene.Rect
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor): Clutter.PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Clutter.Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    grab_key_focus(): void
    has_accessible(): boolean
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_damage(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_mapped_clones(): boolean
    has_overlaps(): boolean
    hide(): void
    inhibit_culling(): void
    insert_child_above(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insert_child_at_index(child: Clutter.Actor, index_: number): void
    insert_child_below(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: Clutter.StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(paint_context: Clutter.PaintContext): void
    peek_stage_views(): Clutter.StageView[]
    pick(pick_context: Clutter.PickContext): void
    pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Clutter.Actor, new_child: Clutter.Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox): void
    set_background_color(color?: Clutter.Color | null): void
    set_child_above_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_at_index(child: Clutter.Actor, index_: number): void
    set_child_below_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_transform(transform?: Graphene.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.Content | null): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager | null): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: Graphene.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: Clutter.PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    find_property(property_name: string): GObject.ParamSpec
    get_actor(): Clutter.Actor
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Clutter.Actor): void
    child_get_property(child: Clutter.Actor, property: string, value: any): void
    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Clutter.Actor, property: string, value: any): void
    create_child_meta(actor: Clutter.Actor): void
    destroy_child_meta(actor: Clutter.Actor): void
    find_child_by_name(child_name: string): Clutter.Actor
    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    remove_actor(actor: Clutter.Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Meta.Stage */
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_actor(): Clutter.Actor
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Clutter.Actor): void
    vfunc_actor_removed(actor: Clutter.Actor): void
    vfunc_add(actor: Clutter.Actor): void
    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Clutter.Actor): void
    vfunc_destroy_child_meta(actor: Clutter.Actor): void
    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_remove(actor: Clutter.Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of Clutter.Stage */
    vfunc_activate(): void
    vfunc_before_paint(view: Clutter.StageView): void
    vfunc_deactivate(): void
    vfunc_paint_view(view: Clutter.StageView, redraw_clip: cairo.Region): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: Clutter.ActorBox): void
    vfunc_apply_transform(matrix: Graphene.Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(paint_context: Clutter.PaintContext): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor): void
    vfunc_pick(pick_context: Clutter.PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.Stage */
    connect(sigName: "actors-painted", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "actors-painted", callback: (($obj: Stage) => void)): number
    emit(sigName: "actors-painted"): void
    /* Signals of Clutter.Stage */
    connect(sigName: "activate", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Stage) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "after-paint", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    connect_after(sigName: "after-paint", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    emit(sigName: "after-paint", view: Clutter.StageView): void
    connect(sigName: "after-update", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    connect_after(sigName: "after-update", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    emit(sigName: "after-update", view: Clutter.StageView): void
    connect(sigName: "before-paint", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    connect_after(sigName: "before-paint", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    emit(sigName: "before-paint", view: Clutter.StageView): void
    connect(sigName: "before-update", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    connect_after(sigName: "before-update", callback: (($obj: Stage, view: Clutter.StageView) => void)): number
    emit(sigName: "before-update", view: Clutter.StageView): void
    connect(sigName: "deactivate", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: Stage) => void)): number
    emit(sigName: "deactivate"): void
    connect(sigName: "gl-video-memory-purged", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "gl-video-memory-purged", callback: (($obj: Stage) => void)): number
    emit(sigName: "gl-video-memory-purged"): void
    connect(sigName: "paint-view", callback: (($obj: Stage, view: Clutter.StageView, redraw_clip: cairo.Region) => void)): number
    connect_after(sigName: "paint-view", callback: (($obj: Stage, view: Clutter.StageView, redraw_clip: cairo.Region) => void)): number
    emit(sigName: "paint-view", view: Clutter.StageView, redraw_clip: cairo.Region): void
    connect(sigName: "presented", callback: (($obj: Stage, view: Clutter.StageView, frame_info?: object | null) => void)): number
    connect_after(sigName: "presented", callback: (($obj: Stage, view: Clutter.StageView, frame_info?: object | null) => void)): number
    emit(sigName: "presented", view: Clutter.StageView, frame_info?: object | null): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: Stage, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Stage, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Stage, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Stage, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Stage) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Stage, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Stage, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Stage) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Stage) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Stage) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Stage, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Stage, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Stage, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Stage, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Stage, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Stage, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Stage, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Stage, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "parent-set", callback: (($obj: Stage, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Stage, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Stage, pick_context: Clutter.PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Stage, pick_context: Clutter.PickContext) => void)): number
    emit(sigName: "pick", pick_context: Clutter.PickContext): void
    connect(sigName: "queue-relayout", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Stage) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Stage) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "resource-scale-changed", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: Stage) => void)): number
    emit(sigName: "resource-scale-changed"): void
    connect(sigName: "scroll-event", callback: (($obj: Stage, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Stage, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "show", callback: (($obj: Stage) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "stage-views-changed", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: Stage) => void)): number
    emit(sigName: "stage-views-changed"): void
    connect(sigName: "touch-event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Stage, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Stage, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Stage, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Stage) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Stage) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Stage, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Stage, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Stage, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Stage, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Stage, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Stage, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key-focus", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-focus", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::perspective", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perspective", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stage_ConstructProps)
    _init (config?: Stage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static is_focused(display: Display): boolean
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface StartupNotification_ConstructProps extends GObject.Object_ConstructProps {
    display?: Display
}
export class StartupNotification {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.StartupNotification */
    create_launcher(): LaunchContext
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
    /* Signals of Meta.StartupNotification */
    connect(sigName: "changed", callback: (($obj: StartupNotification, object?: object | null) => void)): number
    connect_after(sigName: "changed", callback: (($obj: StartupNotification, object?: object | null) => void)): number
    emit(sigName: "changed", object?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StartupNotification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StartupNotification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StartupNotification_ConstructProps)
    _init (config?: StartupNotification_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StartupSequence_ConstructProps extends GObject.Object_ConstructProps {
    application_id?: string
    icon_name?: string
    id?: string
    name?: string
    timestamp?: number
    wmclass?: string
    workspace?: number
}
export class StartupSequence {
    /* Fields of Meta.StartupSequence */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.StartupSequence */
    complete(): void
    get_application_id(): string
    get_completed(): boolean
    get_icon_name(): string
    get_id(): string
    get_name(): string
    get_timestamp(): number
    get_wmclass(): string
    get_workspace(): number
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
    /* Signals of Meta.StartupSequence */
    connect(sigName: "complete", callback: (($obj: StartupSequence) => void)): number
    connect_after(sigName: "complete", callback: (($obj: StartupSequence) => void)): number
    emit(sigName: "complete"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StartupSequence_ConstructProps)
    _init (config?: StartupSequence_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandClient_ConstructProps extends GObject.Object_ConstructProps {
}
export class WaylandClient {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.WaylandClient */
    hide_from_window_list(window: Window): void
    owns_window(window: Window): boolean
    show_in_window_list(window: Window): void
    spawnv(display: Display, argv: string[]): Gio.Subprocess
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
    connect(sigName: "notify", callback: (($obj: WaylandClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly appears_focused: boolean
    readonly decorated: boolean
    readonly demands_attention: boolean
    readonly fullscreen: boolean
    readonly gtk_app_menu_object_path: string
    readonly gtk_application_id: string
    readonly gtk_application_object_path: string
    readonly gtk_menubar_object_path: string
    readonly gtk_unique_bus_name: string
    readonly gtk_window_object_path: string
    readonly icon: object
    readonly maximized_horizontally: boolean
    readonly maximized_vertically: boolean
    readonly mini_icon: object
    readonly minimized: boolean
    readonly mutter_hints: string
    readonly on_all_workspaces: boolean
    readonly resizeable: boolean
    readonly skip_taskbar: boolean
    readonly title: string
    readonly urgent: boolean
    readonly user_time: number
    readonly window_type: WindowType
    readonly wm_class: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.Window */
    activate(current_time: number): void
    activate_with_workspace(current_time: number, workspace: Workspace): void
    allows_move(): boolean
    allows_resize(): boolean
    begin_grab_op(op: GrabOp, frame_action: boolean, timestamp: number): void
    can_close(): boolean
    can_maximize(): boolean
    can_minimize(): boolean
    can_shade(): boolean
    change_workspace(workspace: Workspace): void
    change_workspace_by_index(space_index: number, append: boolean): void
    check_alive(timestamp: number): void
    client_rect_to_frame_rect(client_rect: Rectangle): /* frame_rect */ Rectangle
    compute_group(): void
    delete(timestamp: number): void
    find_root_ancestor(): Window
    focus(timestamp: number): void
    foreach_ancestor(func: WindowForeachFunc): void
    foreach_transient(func: WindowForeachFunc): void
    frame_rect_to_client_rect(frame_rect: Rectangle): /* client_rect */ Rectangle
    get_buffer_rect(): /* rect */ Rectangle
    get_client_machine(): string
    get_client_type(): WindowClientType
    get_compositor_private(): GObject.Object
    get_description(): string
    get_display(): Display
    get_frame_bounds(): cairo.Region | null
    get_frame_rect(): /* rect */ Rectangle
    get_frame_type(): FrameType
    get_gtk_app_menu_object_path(): string
    get_gtk_application_id(): string
    get_gtk_application_object_path(): string
    get_gtk_menubar_object_path(): string
    get_gtk_theme_variant(): string
    get_gtk_unique_bus_name(): string
    get_gtk_window_object_path(): string
    get_icon_geometry(): [ /* returnType */ boolean, /* rect */ Rectangle ]
    get_id(): number
    get_layer(): StackLayer
    get_maximized(): MaximizeFlags
    get_monitor(): number
    get_mutter_hints(): string
    get_pid(): number
    get_role(): string
    get_sandboxed_app_id(): string
    get_stable_sequence(): number
    get_startup_id(): string
    get_tile_match(): Window | null
    get_title(): string
    get_transient_for(): Window
    get_user_time(): number
    get_window_type(): WindowType
    get_wm_class(): string
    get_wm_class_instance(): string
    get_work_area_all_monitors(): /* area */ Rectangle
    get_work_area_current_monitor(): /* area */ Rectangle
    get_work_area_for_monitor(which_monitor: number): /* area */ Rectangle
    get_workspace(): Workspace
    group_leader_changed(): void
    has_focus(): boolean
    is_above(): boolean
    is_always_on_all_workspaces(): boolean
    is_ancestor_of_transient(transient: Window): boolean
    is_attached_dialog(): boolean
    is_client_decorated(): boolean
    is_fullscreen(): boolean
    is_hidden(): boolean
    is_monitor_sized(): boolean
    is_on_all_workspaces(): boolean
    is_on_primary_monitor(): boolean
    is_override_redirect(): boolean
    is_remote(): boolean
    is_screen_sized(): boolean
    is_shaded(): boolean
    is_skip_taskbar(): boolean
    kill(): void
    located_on_workspace(workspace: Workspace): boolean
    lower(): void
    make_above(): void
    make_fullscreen(): void
    maximize(directions: MaximizeFlags): void
    minimize(): void
    move_frame(user_op: boolean, root_x_nw: number, root_y_nw: number): void
    move_resize_frame(user_op: boolean, root_x_nw: number, root_y_nw: number, w: number, h: number): void
    move_to_monitor(monitor: number): void
    raise(): void
    set_compositor_private(priv: GObject.Object): void
    set_demands_attention(): void
    set_icon_geometry(rect?: Rectangle | null): void
    shade(timestamp: number): void
    shove_titlebar_onscreen(): void
    showing_on_its_workspace(): boolean
    shutdown_group(): void
    stick(): void
    titlebar_is_onscreen(): boolean
    unmake_above(): void
    unmake_fullscreen(): void
    unmaximize(directions: MaximizeFlags): void
    unminimize(): void
    unset_demands_attention(): void
    unshade(timestamp: number): void
    unstick(): void
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
    /* Signals of Meta.Window */
    connect(sigName: "focus", callback: (($obj: Window) => void)): number
    connect_after(sigName: "focus", callback: (($obj: Window) => void)): number
    emit(sigName: "focus"): void
    connect(sigName: "position-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "position-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "position-changed"): void
    connect(sigName: "raised", callback: (($obj: Window) => void)): number
    connect_after(sigName: "raised", callback: (($obj: Window) => void)): number
    emit(sigName: "raised"): void
    connect(sigName: "shown", callback: (($obj: Window) => void)): number
    connect_after(sigName: "shown", callback: (($obj: Window) => void)): number
    emit(sigName: "shown"): void
    connect(sigName: "size-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "size-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "size-changed"): void
    connect(sigName: "unmanaged", callback: (($obj: Window) => void)): number
    connect_after(sigName: "unmanaged", callback: (($obj: Window) => void)): number
    emit(sigName: "unmanaged"): void
    connect(sigName: "unmanaging", callback: (($obj: Window) => void)): number
    connect_after(sigName: "unmanaging", callback: (($obj: Window) => void)): number
    emit(sigName: "unmanaging"): void
    connect(sigName: "workspace-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "workspace-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "workspace-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::above", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::appears-focused", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::appears-focused", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::demands-attention", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::demands-attention", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gtk-app-menu-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-app-menu-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gtk-application-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-application-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gtk-application-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-application-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gtk-menubar-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-menubar-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gtk-unique-bus-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-unique-bus-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gtk-window-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-window-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maximized-horizontally", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized-horizontally", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maximized-vertically", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized-vertically", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mini-icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mini-icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minimized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mutter-hints", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutter-hints", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::on-all-workspaces", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-all-workspaces", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizeable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizeable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::skip-taskbar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-time", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-time", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-type", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wm-class", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wm-class", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WindowActor_ConstructProps extends Clutter.Actor_ConstructProps {
    meta_window?: Window
}
export class WindowActor {
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    background_color: Clutter.Color
    readonly background_color_set: boolean
    child_transform: Graphene.Matrix
    readonly child_transform_set: boolean
    clip_rect: Graphene.Rect
    clip_to_allocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly content_box: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Clutter.Actor
    layout_manager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: Clutter.ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: Graphene.Point
    pivot_point_z: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Graphene.Size
    text_direction: Clutter.TextDirection
    transform: Graphene.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    x_expand: boolean
    y: number
    y_align: Clutter.ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Meta.WindowActor */
    parent_instance: Clutter.Actor
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.WindowActor */
    freeze(): void
    get_image(clip?: cairo.RectangleInt | null): cairo.Surface | null
    get_meta_window(): Window
    get_texture(): ShapedTexture
    is_destroyed(): boolean
    sync_visibility(): void
    thaw(): void
    /* Methods of Clutter.Actor */
    add_action(action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Clutter.Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    apply_transform_to_point(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bind_model(model: Gio.ListModel | null, create_child_func: Clutter.ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor): boolean
    continue_paint(paint_context: Clutter.PaintContext): void
    continue_pick(pick_context: Clutter.PickContext): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): /* verts */ Graphene.Point3D[]
    get_accessible(): Atk.Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): /* box */ Clutter.ActorBox
    get_background_color(): /* color */ Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor
    get_child_transform(): /* transform */ Graphene.Matrix
    get_children(): Clutter.Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.Content
    get_content_box(): /* box */ Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ Clutter.ScalingFilter | null, /* mag_filter */ Clutter.ScalingFilter | null ]
    get_default_paint_volume(): Clutter.PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor
    get_fixed_position(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_height(): number
    get_last_child(): Clutter.Actor
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): /* margin */ Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Clutter.Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Clutter.Actor
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_z(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Clutter.Stage
    get_text_direction(): Clutter.TextDirection
    get_transform(): /* transform */ Graphene.Matrix
    get_transformed_extents(): /* rect */ Graphene.Rect
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor): Clutter.PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Clutter.Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    grab_key_focus(): void
    has_accessible(): boolean
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_damage(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_mapped_clones(): boolean
    has_overlaps(): boolean
    hide(): void
    inhibit_culling(): void
    insert_child_above(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insert_child_at_index(child: Clutter.Actor, index_: number): void
    insert_child_below(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: Clutter.StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(paint_context: Clutter.PaintContext): void
    peek_stage_views(): Clutter.StageView[]
    pick(pick_context: Clutter.PickContext): void
    pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Clutter.Actor, new_child: Clutter.Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox): void
    set_background_color(color?: Clutter.Color | null): void
    set_child_above_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_at_index(child: Clutter.Actor, index_: number): void
    set_child_below_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_transform(transform?: Graphene.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.Content | null): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager | null): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: Graphene.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: Clutter.PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    find_property(property_name: string): GObject.ParamSpec
    get_actor(): Clutter.Actor
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Clutter.Actor): void
    child_get_property(child: Clutter.Actor, property: string, value: any): void
    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Clutter.Actor, property: string, value: any): void
    create_child_meta(actor: Clutter.Actor): void
    destroy_child_meta(actor: Clutter.Actor): void
    find_child_by_name(child_name: string): Clutter.Actor
    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    remove_actor(actor: Clutter.Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Meta.WindowActor */
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_actor(): Clutter.Actor
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Clutter.Actor): void
    vfunc_actor_removed(actor: Clutter.Actor): void
    vfunc_add(actor: Clutter.Actor): void
    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Clutter.Actor): void
    vfunc_destroy_child_meta(actor: Clutter.Actor): void
    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_remove(actor: Clutter.Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: Clutter.ActorBox): void
    vfunc_apply_transform(matrix: Graphene.Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(paint_context: Clutter.PaintContext): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor): void
    vfunc_pick(pick_context: Clutter.PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Meta.WindowActor */
    connect(sigName: "damaged", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "damaged", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "damaged"): void
    connect(sigName: "effects-completed", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "effects-completed", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "effects-completed"): void
    connect(sigName: "first-frame", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "first-frame", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "first-frame"): void
    connect(sigName: "thawed", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "thawed", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "thawed"): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: WindowActor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: WindowActor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: WindowActor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: WindowActor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: WindowActor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: WindowActor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: WindowActor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: WindowActor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: WindowActor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: WindowActor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: WindowActor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: WindowActor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: WindowActor, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: WindowActor, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "parent-set", callback: (($obj: WindowActor, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: WindowActor, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: WindowActor, pick_context: Clutter.PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: WindowActor, pick_context: Clutter.PickContext) => void)): number
    emit(sigName: "pick", pick_context: Clutter.PickContext): void
    connect(sigName: "queue-relayout", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "resource-scale-changed", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "resource-scale-changed"): void
    connect(sigName: "scroll-event", callback: (($obj: WindowActor, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: WindowActor, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "show", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "stage-views-changed", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "stage-views-changed"): void
    connect(sigName: "touch-event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: WindowActor, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: WindowActor, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: WindowActor, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: WindowActor) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WindowActor) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: WindowActor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: WindowActor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: WindowActor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: WindowActor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: WindowActor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: WindowActor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actions", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WindowActor_ConstructProps)
    _init (config?: WindowActor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface WindowGroup_ConstructProps extends Clutter.Actor_ConstructProps {
}
export class WindowGroup {
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    background_color: Clutter.Color
    readonly background_color_set: boolean
    child_transform: Graphene.Matrix
    readonly child_transform_set: boolean
    clip_rect: Graphene.Rect
    clip_to_allocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly content_box: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Clutter.Actor
    layout_manager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: Clutter.ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: Graphene.Point
    pivot_point_z: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Graphene.Size
    text_direction: Clutter.TextDirection
    transform: Graphene.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    x_expand: boolean
    y: number
    y_align: Clutter.ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Actor */
    add_action(action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Clutter.Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    apply_transform_to_point(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bind_model(model: Gio.ListModel | null, create_child_func: Clutter.ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor): boolean
    continue_paint(paint_context: Clutter.PaintContext): void
    continue_pick(pick_context: Clutter.PickContext): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): /* verts */ Graphene.Point3D[]
    get_accessible(): Atk.Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): /* box */ Clutter.ActorBox
    get_background_color(): /* color */ Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor
    get_child_transform(): /* transform */ Graphene.Matrix
    get_children(): Clutter.Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.Content
    get_content_box(): /* box */ Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ Clutter.ScalingFilter | null, /* mag_filter */ Clutter.ScalingFilter | null ]
    get_default_paint_volume(): Clutter.PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor
    get_fixed_position(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_height(): number
    get_last_child(): Clutter.Actor
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): /* margin */ Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Clutter.Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Clutter.Actor
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_z(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Clutter.Stage
    get_text_direction(): Clutter.TextDirection
    get_transform(): /* transform */ Graphene.Matrix
    get_transformed_extents(): /* rect */ Graphene.Rect
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor): Clutter.PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Clutter.Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    grab_key_focus(): void
    has_accessible(): boolean
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_damage(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_mapped_clones(): boolean
    has_overlaps(): boolean
    hide(): void
    inhibit_culling(): void
    insert_child_above(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insert_child_at_index(child: Clutter.Actor, index_: number): void
    insert_child_below(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: Clutter.StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(paint_context: Clutter.PaintContext): void
    peek_stage_views(): Clutter.StageView[]
    pick(pick_context: Clutter.PickContext): void
    pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Clutter.Actor, new_child: Clutter.Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox): void
    set_background_color(color?: Clutter.Color | null): void
    set_child_above_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_at_index(child: Clutter.Actor, index_: number): void
    set_child_below_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_transform(transform?: Graphene.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.Content | null): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager | null): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: Graphene.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: Clutter.PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    find_property(property_name: string): GObject.ParamSpec
    get_actor(): Clutter.Actor
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Clutter.Actor): void
    child_get_property(child: Clutter.Actor, property: string, value: any): void
    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Clutter.Actor, property: string, value: any): void
    create_child_meta(actor: Clutter.Actor): void
    destroy_child_meta(actor: Clutter.Actor): void
    find_child_by_name(child_name: string): Clutter.Actor
    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    remove_actor(actor: Clutter.Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Meta.WindowGroup */
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_actor(): Clutter.Actor
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Clutter.Actor): void
    vfunc_actor_removed(actor: Clutter.Actor): void
    vfunc_add(actor: Clutter.Actor): void
    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Clutter.Actor): void
    vfunc_destroy_child_meta(actor: Clutter.Actor): void
    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_remove(actor: Clutter.Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: Clutter.ActorBox): void
    vfunc_apply_transform(matrix: Graphene.Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(paint_context: Clutter.PaintContext): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor): void
    vfunc_pick(pick_context: Clutter.PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: WindowGroup, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: WindowGroup, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: WindowGroup, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: WindowGroup, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: WindowGroup, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: WindowGroup, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: WindowGroup, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: WindowGroup, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: WindowGroup, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: WindowGroup, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: WindowGroup, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: WindowGroup, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: WindowGroup, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: WindowGroup, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "parent-set", callback: (($obj: WindowGroup, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: WindowGroup, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: WindowGroup, pick_context: Clutter.PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: WindowGroup, pick_context: Clutter.PickContext) => void)): number
    emit(sigName: "pick", pick_context: Clutter.PickContext): void
    connect(sigName: "queue-relayout", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "resource-scale-changed", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "resource-scale-changed"): void
    connect(sigName: "scroll-event", callback: (($obj: WindowGroup, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: WindowGroup, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "show", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "stage-views-changed", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "stage-views-changed"): void
    connect(sigName: "touch-event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: WindowGroup, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: WindowGroup, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: WindowGroup, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: WindowGroup) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WindowGroup) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: WindowGroup, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: WindowGroup, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: WindowGroup, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: WindowGroup, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: WindowGroup, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: WindowGroup, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actions", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WindowGroup_ConstructProps)
    _init (config?: WindowGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface Workspace_ConstructProps extends GObject.Object_ConstructProps {
}
export class Workspace {
    /* Properties of Meta.Workspace */
    readonly active: boolean
    readonly n_windows: number
    readonly workspace_index: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.Workspace */
    activate(timestamp: number): void
    activate_with_focus(focus_this: Window, timestamp: number): void
    get_display(): Display
    get_neighbor(direction: MotionDirection): Workspace
    get_work_area_all_monitors(): /* area */ Rectangle
    get_work_area_for_monitor(which_monitor: number): /* area */ Rectangle
    index(): number
    list_windows(): Window[]
    set_builtin_struts(struts: Strut[]): void
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
    /* Signals of Meta.Workspace */
    connect(sigName: "window-added", callback: (($obj: Workspace, object: Window) => void)): number
    connect_after(sigName: "window-added", callback: (($obj: Workspace, object: Window) => void)): number
    emit(sigName: "window-added", object: Window): void
    connect(sigName: "window-removed", callback: (($obj: Workspace, object: Window) => void)): number
    connect_after(sigName: "window-removed", callback: (($obj: Workspace, object: Window) => void)): number
    emit(sigName: "window-removed", object: Window): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-windows", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-windows", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::workspace-index", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workspace-index", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Workspace_ConstructProps)
    _init (config?: Workspace_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WorkspaceManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class WorkspaceManager {
    /* Properties of Meta.WorkspaceManager */
    readonly layout_columns: number
    readonly layout_rows: number
    readonly n_workspaces: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.WorkspaceManager */
    append_new_workspace(activate: boolean, timestamp: number): Workspace
    get_active_workspace(): Workspace
    get_active_workspace_index(): number
    get_n_workspaces(): number
    get_workspace_by_index(index: number): Workspace | null
    override_workspace_layout(starting_corner: DisplayCorner, vertical_layout: boolean, n_rows: number, n_columns: number): void
    remove_workspace(workspace: Workspace, timestamp: number): void
    reorder_workspace(workspace: Workspace, new_index: number): void
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
    /* Signals of Meta.WorkspaceManager */
    connect(sigName: "active-workspace-changed", callback: (($obj: WorkspaceManager) => void)): number
    connect_after(sigName: "active-workspace-changed", callback: (($obj: WorkspaceManager) => void)): number
    emit(sigName: "active-workspace-changed"): void
    connect(sigName: "showing-desktop-changed", callback: (($obj: WorkspaceManager) => void)): number
    connect_after(sigName: "showing-desktop-changed", callback: (($obj: WorkspaceManager) => void)): number
    emit(sigName: "showing-desktop-changed"): void
    connect(sigName: "workspace-added", callback: (($obj: WorkspaceManager, object: number) => void)): number
    connect_after(sigName: "workspace-added", callback: (($obj: WorkspaceManager, object: number) => void)): number
    emit(sigName: "workspace-added", object: number): void
    connect(sigName: "workspace-removed", callback: (($obj: WorkspaceManager, object: number) => void)): number
    connect_after(sigName: "workspace-removed", callback: (($obj: WorkspaceManager, object: number) => void)): number
    emit(sigName: "workspace-removed", object: number): void
    connect(sigName: "workspace-switched", callback: (($obj: WorkspaceManager, object: number, p0: number, p1: MotionDirection) => void)): number
    connect_after(sigName: "workspace-switched", callback: (($obj: WorkspaceManager, object: number, p0: number, p1: MotionDirection) => void)): number
    emit(sigName: "workspace-switched", object: number, p0: number, p1: MotionDirection): void
    connect(sigName: "workspaces-reordered", callback: (($obj: WorkspaceManager) => void)): number
    connect_after(sigName: "workspaces-reordered", callback: (($obj: WorkspaceManager) => void)): number
    emit(sigName: "workspaces-reordered"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::layout-columns", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-columns", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-rows", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-rows", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-workspaces", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-workspaces", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WorkspaceManager_ConstructProps)
    _init (config?: WorkspaceManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Display_ConstructProps extends GObject.Object_ConstructProps {
}
export class X11Display {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Meta.X11Display */
    clear_stage_input_region(): void
    get_damage_event_base(): number
    get_screen_number(): number
    get_shape_event_base(): number
    has_shape(): boolean
    set_cm_selection(): void
    set_stage_input_region(region: xfixes.XserverRegion): void
    xwindow_is_a_no_focus_window(xwindow: xlib.Window): boolean
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
    connect(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    parent_class: Clutter.ActorClass
    static name: string
}
export abstract class BackgroundClass {
    /* Fields of Meta.BackgroundClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BackgroundContentClass {
    /* Fields of Meta.BackgroundContentClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BackgroundGroupClass {
    /* Fields of Meta.BackgroundGroupClass */
    parent_class: Clutter.ActorClass
    static name: string
}
export abstract class BackgroundImageCacheClass {
    /* Fields of Meta.BackgroundImageCacheClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BackgroundImageClass {
    /* Fields of Meta.BackgroundImageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BarrierClass {
    static name: string
}
export class BarrierEvent {
    /* Fields of Meta.BarrierEvent */
    event_id: number
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
    left_buttons: ButtonFunction[]
    left_buttons_has_spacer: boolean[]
    right_buttons: ButtonFunction[]
    right_buttons_has_spacer: boolean[]
    static name: string
}
export abstract class CloseDialogInterface {
    /* Fields of Meta.CloseDialogInterface */
    parent_iface: GObject.TypeInterface
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
    parent_class: GObject.ObjectClass
    static name: string
}
export class Edge {
    /* Fields of Meta.Edge */
    rect: Rectangle
    side_type: Side
    edge_type: EdgeType
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
    get_size(): number
    get_startup_id(): string
    list_windows(): Window[]
    update_layers(): void
    static name: string
}
export abstract class IdleMonitorClass {
    static name: string
}
export abstract class InhibitShortcutsDialogInterface {
    /* Fields of Meta.InhibitShortcutsDialogInterface */
    parent_iface: GObject.TypeInterface
    show: (dialog: InhibitShortcutsDialog) => void
    hide: (dialog: InhibitShortcutsDialog) => void
    static name: string
}
export class KeyBinding {
    /* Methods of Meta.KeyBinding */
    get_mask(): number
    get_modifiers(): VirtualModifier
    get_name(): string
    is_builtin(): boolean
    is_reversed(): boolean
    static name: string
}
export abstract class LaunchContextClass {
    /* Fields of Meta.LaunchContextClass */
    parent_class: Gio.AppLaunchContextClass
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
    size_changed: (plugin: Plugin, actor: WindowActor) => void
    size_change: (plugin: Plugin, actor: WindowActor, which_change: SizeChange, old_frame_rect: Rectangle, old_buffer_rect: Rectangle) => void
    map: (plugin: Plugin, actor: WindowActor) => void
    destroy: (plugin: Plugin, actor: WindowActor) => void
    switch_workspace: (plugin: Plugin, from: number, to: number, direction: MotionDirection) => void
    show_tile_preview: (plugin: Plugin, window: Window, tile_rect: Rectangle, tile_monitor_number: number) => void
    hide_tile_preview: (plugin: Plugin) => void
    show_window_menu: (plugin: Plugin, window: Window, menu: WindowMenuType, x: number, y: number) => void
    show_window_menu_for_rect: (plugin: Plugin, window: Window, menu: WindowMenuType, rect: Rectangle) => void
    kill_window_effects: (plugin: Plugin, actor: WindowActor) => void
    kill_switch_workspace: (plugin: Plugin) => void
    xevent_filter: (plugin: Plugin, event: xlib.XEvent) => boolean
    keybinding_filter: (plugin: Plugin, binding: KeyBinding) => boolean
    confirm_display_change: (plugin: Plugin) => void
    plugin_info: (plugin: Plugin) => PluginInfo
    locate_pointer: (plugin: Plugin) => void
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
    contains_rect(inner_rect: Rectangle): boolean
    copy(): Rectangle
    could_fit_rect(inner_rect: Rectangle): boolean
    equal(src2: Rectangle): boolean
    free(): void
    horiz_overlap(rect2: Rectangle): boolean
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle ]
    overlap(rect2: Rectangle): boolean
    union(rect2: Rectangle): /* dest */ Rectangle
    vert_overlap(rect2: Rectangle): boolean
    static name: string
}
export abstract class RemoteAccessControllerClass {
    /* Fields of Meta.RemoteAccessControllerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RemoteAccessHandleClass {
    /* Fields of Meta.RemoteAccessHandleClass */
    parent_class: GObject.ObjectClass
    stop: (handle: RemoteAccessHandle) => void
    static name: string
}
export abstract class SelectionClass {
    /* Fields of Meta.SelectionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SelectionSourceClass {
    /* Fields of Meta.SelectionSourceClass */
    parent_class: GObject.ObjectClass
    activated: (source: SelectionSource) => void
    deactivated: (source: SelectionSource) => void
    get_mimetypes: (source: SelectionSource) => string[]
    read_async: (source: SelectionSource, mimetype: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    read_finish: (source: SelectionSource, result: Gio.AsyncResult) => Gio.InputStream
    static name: string
}
export abstract class SelectionSourceMemoryClass {
    /* Fields of Meta.SelectionSourceMemoryClass */
    parent_class: SelectionSourceClass
    static name: string
}
export class Settings {
    /* Methods of Meta.Settings */
    get_font_dpi(): number
    get_ui_scaling_factor(): number
    static name: string
}
export class Shadow {
    /* Methods of Meta.Shadow */
    get_bounds(window_x: number, window_y: number, window_width: number, window_height: number, bounds: cairo.RectangleInt): void
    paint(framebuffer: Cogl.Framebuffer, window_x: number, window_y: number, window_width: number, window_height: number, opacity: number, clip: cairo.Region | null, clip_strictly: boolean): void
    ref(): Shadow
    unref(): void
    static name: string
}
export abstract class ShadowFactoryClass {
    /* Fields of Meta.ShadowFactoryClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ShadowParams {
    /* Fields of Meta.ShadowParams */
    radius: number
    top_fade: number
    x_offset: number
    y_offset: number
    opacity: number
    static name: string
}
export abstract class ShapedTextureClass {
    /* Fields of Meta.ShapedTextureClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SoundPlayerClass {
    /* Fields of Meta.SoundPlayerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class StageClass {
    /* Fields of Meta.StageClass */
    parent_class: Clutter.StageClass
    static name: string
}
export abstract class StartupNotificationClass {
    /* Fields of Meta.StartupNotificationClass */
    parent_class: GObject.ObjectClass
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
    parent_class: GObject.ObjectClass
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
    parent_class: Clutter.ActorClass
    static name: string
}
export class WindowShape {
    /* Methods of Meta.WindowShape */
    equal(shape_b: WindowShape): boolean
    get_borders(border_top: number, border_right: number, border_bottom: number, border_left: number): void
    hash(): number
    ref(): WindowShape
    to_region(center_width: number, center_height: number): cairo.Region
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
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class X11DisplayClass {
    /* Fields of Meta.X11DisplayClass */
    parent_class: GObject.ObjectClass
    static name: string
}