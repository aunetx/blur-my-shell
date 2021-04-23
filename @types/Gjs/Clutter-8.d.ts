/**
 * Clutter-8
 */

import * as Gjs from './Gjs';
import * as cairo from './cairo-1.0';
import * as Json from './Json-1.0';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GL from './GL-1.0';
import * as CoglPango from './CoglPango-8';
import * as PangoCairo from './PangoCairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as Cogl from './Cogl-8';
import * as Graphene from './Graphene-1.0';
import * as Atk from './Atk-1.0';

export enum ActorAlign {
    FILL,
    START,
    CENTER,
    END,
}
export enum AlignAxis {
    X_AXIS,
    Y_AXIS,
    BOTH,
}
export enum AnimationMode {
    CUSTOM_MODE,
    LINEAR,
    EASE_IN_QUAD,
    EASE_OUT_QUAD,
    EASE_IN_OUT_QUAD,
    EASE_IN_CUBIC,
    EASE_OUT_CUBIC,
    EASE_IN_OUT_CUBIC,
    EASE_IN_QUART,
    EASE_OUT_QUART,
    EASE_IN_OUT_QUART,
    EASE_IN_QUINT,
    EASE_OUT_QUINT,
    EASE_IN_OUT_QUINT,
    EASE_IN_SINE,
    EASE_OUT_SINE,
    EASE_IN_OUT_SINE,
    EASE_IN_EXPO,
    EASE_OUT_EXPO,
    EASE_IN_OUT_EXPO,
    EASE_IN_CIRC,
    EASE_OUT_CIRC,
    EASE_IN_OUT_CIRC,
    EASE_IN_ELASTIC,
    EASE_OUT_ELASTIC,
    EASE_IN_OUT_ELASTIC,
    EASE_IN_BACK,
    EASE_OUT_BACK,
    EASE_IN_OUT_BACK,
    EASE_IN_BOUNCE,
    EASE_OUT_BOUNCE,
    EASE_IN_OUT_BOUNCE,
    STEPS,
    STEP_START,
    STEP_END,
    CUBIC_BEZIER,
    EASE,
    EASE_IN,
    EASE_OUT,
    EASE_IN_OUT,
    ANIMATION_LAST,
}
export enum BinAlignment {
    FIXED,
    FILL,
    START,
    END,
    CENTER,
}
export enum BindCoordinate {
    X,
    Y,
    WIDTH,
    HEIGHT,
    POSITION,
    SIZE,
    ALL,
}
export enum BoxAlignment {
    START,
    END,
    CENTER,
}
export enum ButtonState {
    RELEASED,
    PRESSED,
}
export enum ContentGravity {
    TOP_LEFT,
    TOP,
    TOP_RIGHT,
    LEFT,
    CENTER,
    RIGHT,
    BOTTOM_LEFT,
    BOTTOM,
    BOTTOM_RIGHT,
    RESIZE_FILL,
    RESIZE_ASPECT,
}
export enum DragAxis {
    AXIS_NONE,
    X_AXIS,
    Y_AXIS,
}
export enum EventType {
    NOTHING,
    KEY_PRESS,
    KEY_RELEASE,
    MOTION,
    ENTER,
    LEAVE,
    BUTTON_PRESS,
    BUTTON_RELEASE,
    SCROLL,
    TOUCH_BEGIN,
    TOUCH_UPDATE,
    TOUCH_END,
    TOUCH_CANCEL,
    TOUCHPAD_PINCH,
    TOUCHPAD_SWIPE,
    PROXIMITY_IN,
    PROXIMITY_OUT,
    PAD_BUTTON_PRESS,
    PAD_BUTTON_RELEASE,
    PAD_STRIP,
    PAD_RING,
    DEVICE_ADDED,
    DEVICE_REMOVED,
    IM_COMMIT,
    IM_DELETE,
    IM_PREEDIT,
    EVENT_LAST,
}
export enum FlowOrientation {
    HORIZONTAL,
    VERTICAL,
}
export enum FrameResult {
    PENDING_PRESENTED,
    IDLE,
}
export enum GestureTriggerEdge {
    NONE,
    AFTER,
    BEFORE,
}
export enum Gravity {
    NONE,
    NORTH,
    NORTH_EAST,
    EAST,
    SOUTH_EAST,
    SOUTH,
    SOUTH_WEST,
    WEST,
    NORTH_WEST,
    CENTER,
}
export enum GridPosition {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
}
export enum ImageError {
    DATA,
}
export enum InitError {
    SUCCESS,
    ERROR_UNKNOWN,
    ERROR_THREADS,
    ERROR_BACKEND,
    ERROR_INTERNAL,
}
export enum InputAxis {
    IGNORE,
    X,
    Y,
    PRESSURE,
    XTILT,
    YTILT,
    WHEEL,
    DISTANCE,
    ROTATION,
    SLIDER,
    LAST,
}
export enum InputContentPurpose {
    NORMAL,
    ALPHA,
    DIGITS,
    NUMBER,
    PHONE,
    URL,
    EMAIL,
    NAME,
    PASSWORD,
    DATE,
    TIME,
    DATETIME,
    TERMINAL,
}
export enum InputDevicePadFeature {
    BUTTON,
    RING,
    STRIP,
}
export enum InputDevicePadSource {
    UNKNOWN,
    FINGER,
}
export enum InputDeviceToolType {
    NONE,
    PEN,
    ERASER,
    BRUSH,
    PENCIL,
    AIRBRUSH,
    MOUSE,
    LENS,
}
export enum InputDeviceType {
    POINTER_DEVICE,
    KEYBOARD_DEVICE,
    EXTENSION_DEVICE,
    JOYSTICK_DEVICE,
    TABLET_DEVICE,
    TOUCHPAD_DEVICE,
    TOUCHSCREEN_DEVICE,
    PEN_DEVICE,
    ERASER_DEVICE,
    CURSOR_DEVICE,
    PAD_DEVICE,
    N_DEVICE_TYPES,
}
export enum InputMode {
    LOGICAL,
    PHYSICAL,
    FLOATING,
}
export enum InputPanelState {
    OFF,
    ON,
    TOGGLE,
}
export enum Interpolation {
    LINEAR,
    CUBIC,
}
export enum KeyState {
    RELEASED,
    PRESSED,
}
export enum LongPressState {
    QUERY,
    ACTIVATE,
    CANCEL,
}
export enum Orientation {
    HORIZONTAL,
    VERTICAL,
}
export enum PanAxis {
    AXIS_NONE,
    X_AXIS,
    Y_AXIS,
    AXIS_AUTO,
}
export enum PathNodeType {
    MOVE_TO,
    LINE_TO,
    CURVE_TO,
    CLOSE,
    REL_MOVE_TO,
    REL_LINE_TO,
    REL_CURVE_TO,
}
export enum PickMode {
    NONE,
    REACTIVE,
    ALL,
}
export enum PointerA11yDwellClickType {
    NONE,
    PRIMARY,
    SECONDARY,
    MIDDLE,
    DOUBLE,
    DRAG,
}
export enum PointerA11yDwellDirection {
    NONE,
    LEFT,
    RIGHT,
    UP,
    DOWN,
}
export enum PointerA11yDwellMode {
    WINDOW,
    GESTURE,
}
export enum PointerA11yTimeoutType {
    SECONDARY_CLICK,
    DWELL,
    GESTURE,
}
export enum RequestMode {
    HEIGHT_FOR_WIDTH,
    WIDTH_FOR_HEIGHT,
    CONTENT_SIZE,
}
export enum RotateAxis {
    X_AXIS,
    Y_AXIS,
    Z_AXIS,
}
export enum RotateDirection {
    CW,
    CCW,
}
export enum ScalingFilter {
    LINEAR,
    NEAREST,
    TRILINEAR,
}
export enum ScriptError {
    TYPE_FUNCTION,
    PROPERTY,
    VALUE,
}
export enum ScrollDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    SMOOTH,
}
export enum ScrollSource {
    UNKNOWN,
    WHEEL,
    FINGER,
    CONTINUOUS,
}
export enum ShaderType {
    VERTEX_SHADER,
    FRAGMENT_SHADER,
}
export enum SnapEdge {
    TOP,
    RIGHT,
    BOTTOM,
    LEFT,
}
export enum StaticColor {
    WHITE,
    BLACK,
    RED,
    DARK_RED,
    GREEN,
    DARK_GREEN,
    BLUE,
    DARK_BLUE,
    CYAN,
    DARK_CYAN,
    MAGENTA,
    DARK_MAGENTA,
    YELLOW,
    DARK_YELLOW,
    GRAY,
    DARK_GRAY,
    LIGHT_GRAY,
    BUTTER,
    BUTTER_LIGHT,
    BUTTER_DARK,
    ORANGE,
    ORANGE_LIGHT,
    ORANGE_DARK,
    CHOCOLATE,
    CHOCOLATE_LIGHT,
    CHOCOLATE_DARK,
    CHAMELEON,
    CHAMELEON_LIGHT,
    CHAMELEON_DARK,
    SKY_BLUE,
    SKY_BLUE_LIGHT,
    SKY_BLUE_DARK,
    PLUM,
    PLUM_LIGHT,
    PLUM_DARK,
    SCARLET_RED,
    SCARLET_RED_LIGHT,
    SCARLET_RED_DARK,
    ALUMINIUM_1,
    ALUMINIUM_2,
    ALUMINIUM_3,
    ALUMINIUM_4,
    ALUMINIUM_5,
    ALUMINIUM_6,
    TRANSPARENT,
}
export enum StepMode {
    START,
    END,
}
export enum TextDirection {
    DEFAULT,
    LTR,
    RTL,
}
export enum TextureQuality {
    LOW,
    MEDIUM,
    HIGH,
}
export enum TimelineDirection {
    FORWARD,
    BACKWARD,
}
export enum TouchpadGesturePhase {
    BEGIN,
    UPDATE,
    END,
    CANCEL,
}
export enum UnitType {
    PIXEL,
    EM,
    MM,
    POINT,
    CM,
}
export enum ZoomAxis {
    X_AXIS,
    Y_AXIS,
    BOTH,
}
export enum ActorFlags {
    MAPPED,
    REALIZED,
    REACTIVE,
    VISIBLE,
    NO_LAYOUT,
}
export enum ContentRepeat {
    NONE,
    X_AXIS,
    Y_AXIS,
    BOTH,
}
export enum DebugFlag {
    MISC,
    ACTOR,
    TEXTURE,
    EVENT,
    PAINT,
    PANGO,
    BACKEND,
    SCHEDULER,
    SCRIPT,
    SHADER,
    MULTISTAGE,
    ANIMATION,
    LAYOUT,
    PICK,
    EVENTLOOP,
    CLIPPING,
    OOB_TRANSFORMS,
}
export enum DrawDebugFlag {
    DISABLE_SWAP_EVENTS,
    DISABLE_CLIPPED_REDRAWS,
    REDRAWS,
    PAINT_VOLUMES,
    DISABLE_CULLING,
    DISABLE_OFFSCREEN_REDIRECT,
    CONTINUOUS_REDRAW,
    PAINT_DEFORM_TILES,
    PAINT_DAMAGE_REGION,
}
export enum EffectPaintFlags {
    ACTOR_DIRTY,
    BYPASS_EFFECT,
}
export enum EventFlags {
    NONE,
    FLAG_SYNTHETIC,
    FLAG_INPUT_METHOD,
    FLAG_REPEATED,
    FLAG_RELATIVE_MOTION,
}
export enum FeatureFlags {
    STAGE_STATIC,
    STAGE_CURSOR,
    SHADERS_GLSL,
    OFFSCREEN,
    STAGE_MULTIPLE,
    SWAP_EVENTS,
}
export enum FrameInfoFlag {
    NONE,
    HW_CLOCK,
    ZERO_COPY,
    VSYNC,
}
export enum InputAxisFlags {
    NONE,
    X,
    Y,
    PRESSURE,
    XTILT,
    YTILT,
    WHEEL,
    DISTANCE,
    ROTATION,
    SLIDER,
}
export enum InputContentHintFlags {
    COMPLETION,
    SPELLCHECK,
    AUTO_CAPITALIZATION,
    LOWERCASE,
    UPPERCASE,
    TITLECASE,
    HIDDEN_TEXT,
    SENSITIVE_DATA,
    LATIN,
    MULTILINE,
}
export enum ModifierType {
    SHIFT_MASK,
    LOCK_MASK,
    CONTROL_MASK,
    MOD1_MASK,
    MOD2_MASK,
    MOD3_MASK,
    MOD4_MASK,
    MOD5_MASK,
    BUTTON1_MASK,
    BUTTON2_MASK,
    BUTTON3_MASK,
    BUTTON4_MASK,
    BUTTON5_MASK,
    MODIFIER_RESERVED_13_MASK,
    MODIFIER_RESERVED_14_MASK,
    MODIFIER_RESERVED_15_MASK,
    MODIFIER_RESERVED_16_MASK,
    MODIFIER_RESERVED_17_MASK,
    MODIFIER_RESERVED_18_MASK,
    MODIFIER_RESERVED_19_MASK,
    MODIFIER_RESERVED_20_MASK,
    MODIFIER_RESERVED_21_MASK,
    MODIFIER_RESERVED_22_MASK,
    MODIFIER_RESERVED_23_MASK,
    MODIFIER_RESERVED_24_MASK,
    MODIFIER_RESERVED_25_MASK,
    SUPER_MASK,
    HYPER_MASK,
    META_MASK,
    MODIFIER_RESERVED_29_MASK,
    RELEASE_MASK,
    MODIFIER_MASK,
}
export enum OffscreenRedirect {
    AUTOMATIC_FOR_OPACITY,
    ALWAYS,
    ON_IDLE,
}
export enum PaintFlag {
    NONE,
    NO_CURSORS,
    FORCE_CURSORS,
    CLEAR,
}
export enum PickDebugFlag {
    PICKING,
}
export enum PointerA11yFlags {
    SECONDARY_CLICK_ENABLED,
    DWELL_ENABLED,
}
export enum RepaintFlags {
    PRE_PAINT,
    POST_PAINT,
}
export enum ScrollFinishFlags {
    NONE,
    HORIZONTAL,
    VERTICAL,
}
export enum ScrollMode {
    NONE,
    HORIZONTALLY,
    VERTICALLY,
    BOTH,
}
export enum SwipeDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
export enum TextureFlags {
    NONE,
    RGB_FLAG_BGR,
    RGB_FLAG_PREMULT,
    YUV_FLAG_YUV2,
}
export enum VirtualDeviceType {
    NONE,
    KEYBOARD,
    POINTER,
    TOUCHSCREEN,
}
export const BUTTON_MIDDLE: number
export const BUTTON_PRIMARY: number
export const BUTTON_SECONDARY: number
export const COGL: string
export const CURRENT_TIME: number
export const EVENT_PROPAGATE: boolean
export const EVENT_STOP: boolean
export const FLAVOUR: string
export const HAS_WAYLAND_COMPOSITOR_SUPPORT: number
export const INPUT_EVDEV: string
export const INPUT_NULL: string
export const INPUT_X11: string
export const KEY_0: number
export const KEY_1: number
export const KEY_2: number
export const KEY_3: number
export const KEY_3270_AltCursor: number
export const KEY_3270_Attn: number
export const KEY_3270_BackTab: number
export const KEY_3270_ChangeScreen: number
export const KEY_3270_Copy: number
export const KEY_3270_CursorBlink: number
export const KEY_3270_CursorSelect: number
export const KEY_3270_DeleteWord: number
export const KEY_3270_Duplicate: number
export const KEY_3270_Enter: number
export const KEY_3270_EraseEOF: number
export const KEY_3270_EraseInput: number
export const KEY_3270_ExSelect: number
export const KEY_3270_FieldMark: number
export const KEY_3270_Ident: number
export const KEY_3270_Jump: number
export const KEY_3270_KeyClick: number
export const KEY_3270_Left2: number
export const KEY_3270_PA1: number
export const KEY_3270_PA2: number
export const KEY_3270_PA3: number
export const KEY_3270_Play: number
export const KEY_3270_PrintScreen: number
export const KEY_3270_Quit: number
export const KEY_3270_Record: number
export const KEY_3270_Reset: number
export const KEY_3270_Right2: number
export const KEY_3270_Rule: number
export const KEY_3270_Setup: number
export const KEY_3270_Test: number
export const KEY_4: number
export const KEY_5: number
export const KEY_6: number
export const KEY_7: number
export const KEY_8: number
export const KEY_9: number
export const KEY_A: number
export const KEY_AE: number
export const KEY_Aacute: number
export const KEY_Abelowdot: number
export const KEY_Abreve: number
export const KEY_Abreveacute: number
export const KEY_Abrevebelowdot: number
export const KEY_Abrevegrave: number
export const KEY_Abrevehook: number
export const KEY_Abrevetilde: number
export const KEY_AccessX_Enable: number
export const KEY_AccessX_Feedback_Enable: number
export const KEY_Acircumflex: number
export const KEY_Acircumflexacute: number
export const KEY_Acircumflexbelowdot: number
export const KEY_Acircumflexgrave: number
export const KEY_Acircumflexhook: number
export const KEY_Acircumflextilde: number
export const KEY_AddFavorite: number
export const KEY_Adiaeresis: number
export const KEY_Agrave: number
export const KEY_Ahook: number
export const KEY_Alt_L: number
export const KEY_Alt_R: number
export const KEY_Amacron: number
export const KEY_Aogonek: number
export const KEY_ApplicationLeft: number
export const KEY_ApplicationRight: number
export const KEY_Arabic_0: number
export const KEY_Arabic_1: number
export const KEY_Arabic_2: number
export const KEY_Arabic_3: number
export const KEY_Arabic_4: number
export const KEY_Arabic_5: number
export const KEY_Arabic_6: number
export const KEY_Arabic_7: number
export const KEY_Arabic_8: number
export const KEY_Arabic_9: number
export const KEY_Arabic_ain: number
export const KEY_Arabic_alef: number
export const KEY_Arabic_alefmaksura: number
export const KEY_Arabic_beh: number
export const KEY_Arabic_comma: number
export const KEY_Arabic_dad: number
export const KEY_Arabic_dal: number
export const KEY_Arabic_damma: number
export const KEY_Arabic_dammatan: number
export const KEY_Arabic_ddal: number
export const KEY_Arabic_farsi_yeh: number
export const KEY_Arabic_fatha: number
export const KEY_Arabic_fathatan: number
export const KEY_Arabic_feh: number
export const KEY_Arabic_fullstop: number
export const KEY_Arabic_gaf: number
export const KEY_Arabic_ghain: number
export const KEY_Arabic_ha: number
export const KEY_Arabic_hah: number
export const KEY_Arabic_hamza: number
export const KEY_Arabic_hamza_above: number
export const KEY_Arabic_hamza_below: number
export const KEY_Arabic_hamzaonalef: number
export const KEY_Arabic_hamzaonwaw: number
export const KEY_Arabic_hamzaonyeh: number
export const KEY_Arabic_hamzaunderalef: number
export const KEY_Arabic_heh: number
export const KEY_Arabic_heh_doachashmee: number
export const KEY_Arabic_heh_goal: number
export const KEY_Arabic_jeem: number
export const KEY_Arabic_jeh: number
export const KEY_Arabic_kaf: number
export const KEY_Arabic_kasra: number
export const KEY_Arabic_kasratan: number
export const KEY_Arabic_keheh: number
export const KEY_Arabic_khah: number
export const KEY_Arabic_lam: number
export const KEY_Arabic_madda_above: number
export const KEY_Arabic_maddaonalef: number
export const KEY_Arabic_meem: number
export const KEY_Arabic_noon: number
export const KEY_Arabic_noon_ghunna: number
export const KEY_Arabic_peh: number
export const KEY_Arabic_percent: number
export const KEY_Arabic_qaf: number
export const KEY_Arabic_question_mark: number
export const KEY_Arabic_ra: number
export const KEY_Arabic_rreh: number
export const KEY_Arabic_sad: number
export const KEY_Arabic_seen: number
export const KEY_Arabic_semicolon: number
export const KEY_Arabic_shadda: number
export const KEY_Arabic_sheen: number
export const KEY_Arabic_sukun: number
export const KEY_Arabic_superscript_alef: number
export const KEY_Arabic_switch: number
export const KEY_Arabic_tah: number
export const KEY_Arabic_tatweel: number
export const KEY_Arabic_tcheh: number
export const KEY_Arabic_teh: number
export const KEY_Arabic_tehmarbuta: number
export const KEY_Arabic_thal: number
export const KEY_Arabic_theh: number
export const KEY_Arabic_tteh: number
export const KEY_Arabic_veh: number
export const KEY_Arabic_waw: number
export const KEY_Arabic_yeh: number
export const KEY_Arabic_yeh_baree: number
export const KEY_Arabic_zah: number
export const KEY_Arabic_zain: number
export const KEY_Aring: number
export const KEY_Armenian_AT: number
export const KEY_Armenian_AYB: number
export const KEY_Armenian_BEN: number
export const KEY_Armenian_CHA: number
export const KEY_Armenian_DA: number
export const KEY_Armenian_DZA: number
export const KEY_Armenian_E: number
export const KEY_Armenian_FE: number
export const KEY_Armenian_GHAT: number
export const KEY_Armenian_GIM: number
export const KEY_Armenian_HI: number
export const KEY_Armenian_HO: number
export const KEY_Armenian_INI: number
export const KEY_Armenian_JE: number
export const KEY_Armenian_KE: number
export const KEY_Armenian_KEN: number
export const KEY_Armenian_KHE: number
export const KEY_Armenian_LYUN: number
export const KEY_Armenian_MEN: number
export const KEY_Armenian_NU: number
export const KEY_Armenian_O: number
export const KEY_Armenian_PE: number
export const KEY_Armenian_PYUR: number
export const KEY_Armenian_RA: number
export const KEY_Armenian_RE: number
export const KEY_Armenian_SE: number
export const KEY_Armenian_SHA: number
export const KEY_Armenian_TCHE: number
export const KEY_Armenian_TO: number
export const KEY_Armenian_TSA: number
export const KEY_Armenian_TSO: number
export const KEY_Armenian_TYUN: number
export const KEY_Armenian_VEV: number
export const KEY_Armenian_VO: number
export const KEY_Armenian_VYUN: number
export const KEY_Armenian_YECH: number
export const KEY_Armenian_ZA: number
export const KEY_Armenian_ZHE: number
export const KEY_Armenian_accent: number
export const KEY_Armenian_amanak: number
export const KEY_Armenian_apostrophe: number
export const KEY_Armenian_at: number
export const KEY_Armenian_ayb: number
export const KEY_Armenian_ben: number
export const KEY_Armenian_but: number
export const KEY_Armenian_cha: number
export const KEY_Armenian_da: number
export const KEY_Armenian_dza: number
export const KEY_Armenian_e: number
export const KEY_Armenian_exclam: number
export const KEY_Armenian_fe: number
export const KEY_Armenian_full_stop: number
export const KEY_Armenian_ghat: number
export const KEY_Armenian_gim: number
export const KEY_Armenian_hi: number
export const KEY_Armenian_ho: number
export const KEY_Armenian_hyphen: number
export const KEY_Armenian_ini: number
export const KEY_Armenian_je: number
export const KEY_Armenian_ke: number
export const KEY_Armenian_ken: number
export const KEY_Armenian_khe: number
export const KEY_Armenian_ligature_ew: number
export const KEY_Armenian_lyun: number
export const KEY_Armenian_men: number
export const KEY_Armenian_nu: number
export const KEY_Armenian_o: number
export const KEY_Armenian_paruyk: number
export const KEY_Armenian_pe: number
export const KEY_Armenian_pyur: number
export const KEY_Armenian_question: number
export const KEY_Armenian_ra: number
export const KEY_Armenian_re: number
export const KEY_Armenian_se: number
export const KEY_Armenian_separation_mark: number
export const KEY_Armenian_sha: number
export const KEY_Armenian_shesht: number
export const KEY_Armenian_tche: number
export const KEY_Armenian_to: number
export const KEY_Armenian_tsa: number
export const KEY_Armenian_tso: number
export const KEY_Armenian_tyun: number
export const KEY_Armenian_verjaket: number
export const KEY_Armenian_vev: number
export const KEY_Armenian_vo: number
export const KEY_Armenian_vyun: number
export const KEY_Armenian_yech: number
export const KEY_Armenian_yentamna: number
export const KEY_Armenian_za: number
export const KEY_Armenian_zhe: number
export const KEY_Atilde: number
export const KEY_AudibleBell_Enable: number
export const KEY_AudioCycleTrack: number
export const KEY_AudioForward: number
export const KEY_AudioLowerVolume: number
export const KEY_AudioMedia: number
export const KEY_AudioMicMute: number
export const KEY_AudioMute: number
export const KEY_AudioNext: number
export const KEY_AudioPause: number
export const KEY_AudioPlay: number
export const KEY_AudioPrev: number
export const KEY_AudioRaiseVolume: number
export const KEY_AudioRandomPlay: number
export const KEY_AudioRecord: number
export const KEY_AudioRepeat: number
export const KEY_AudioRewind: number
export const KEY_AudioStop: number
export const KEY_Away: number
export const KEY_B: number
export const KEY_Babovedot: number
export const KEY_Back: number
export const KEY_BackForward: number
export const KEY_BackSpace: number
export const KEY_Battery: number
export const KEY_Begin: number
export const KEY_Blue: number
export const KEY_Bluetooth: number
export const KEY_Book: number
export const KEY_BounceKeys_Enable: number
export const KEY_Break: number
export const KEY_BrightnessAdjust: number
export const KEY_Byelorussian_SHORTU: number
export const KEY_Byelorussian_shortu: number
export const KEY_C: number
export const KEY_CD: number
export const KEY_CH: number
export const KEY_C_H: number
export const KEY_C_h: number
export const KEY_Cabovedot: number
export const KEY_Cacute: number
export const KEY_Calculator: number
export const KEY_Calendar: number
export const KEY_Cancel: number
export const KEY_Caps_Lock: number
export const KEY_Ccaron: number
export const KEY_Ccedilla: number
export const KEY_Ccircumflex: number
export const KEY_Ch: number
export const KEY_Clear: number
export const KEY_ClearGrab: number
export const KEY_Close: number
export const KEY_Codeinput: number
export const KEY_ColonSign: number
export const KEY_Community: number
export const KEY_ContrastAdjust: number
export const KEY_Control_L: number
export const KEY_Control_R: number
export const KEY_Copy: number
export const KEY_CruzeiroSign: number
export const KEY_Cut: number
export const KEY_CycleAngle: number
export const KEY_Cyrillic_A: number
export const KEY_Cyrillic_BE: number
export const KEY_Cyrillic_CHE: number
export const KEY_Cyrillic_CHE_descender: number
export const KEY_Cyrillic_CHE_vertstroke: number
export const KEY_Cyrillic_DE: number
export const KEY_Cyrillic_DZHE: number
export const KEY_Cyrillic_E: number
export const KEY_Cyrillic_EF: number
export const KEY_Cyrillic_EL: number
export const KEY_Cyrillic_EM: number
export const KEY_Cyrillic_EN: number
export const KEY_Cyrillic_EN_descender: number
export const KEY_Cyrillic_ER: number
export const KEY_Cyrillic_ES: number
export const KEY_Cyrillic_GHE: number
export const KEY_Cyrillic_GHE_bar: number
export const KEY_Cyrillic_HA: number
export const KEY_Cyrillic_HARDSIGN: number
export const KEY_Cyrillic_HA_descender: number
export const KEY_Cyrillic_I: number
export const KEY_Cyrillic_IE: number
export const KEY_Cyrillic_IO: number
export const KEY_Cyrillic_I_macron: number
export const KEY_Cyrillic_JE: number
export const KEY_Cyrillic_KA: number
export const KEY_Cyrillic_KA_descender: number
export const KEY_Cyrillic_KA_vertstroke: number
export const KEY_Cyrillic_LJE: number
export const KEY_Cyrillic_NJE: number
export const KEY_Cyrillic_O: number
export const KEY_Cyrillic_O_bar: number
export const KEY_Cyrillic_PE: number
export const KEY_Cyrillic_SCHWA: number
export const KEY_Cyrillic_SHA: number
export const KEY_Cyrillic_SHCHA: number
export const KEY_Cyrillic_SHHA: number
export const KEY_Cyrillic_SHORTI: number
export const KEY_Cyrillic_SOFTSIGN: number
export const KEY_Cyrillic_TE: number
export const KEY_Cyrillic_TSE: number
export const KEY_Cyrillic_U: number
export const KEY_Cyrillic_U_macron: number
export const KEY_Cyrillic_U_straight: number
export const KEY_Cyrillic_U_straight_bar: number
export const KEY_Cyrillic_VE: number
export const KEY_Cyrillic_YA: number
export const KEY_Cyrillic_YERU: number
export const KEY_Cyrillic_YU: number
export const KEY_Cyrillic_ZE: number
export const KEY_Cyrillic_ZHE: number
export const KEY_Cyrillic_ZHE_descender: number
export const KEY_Cyrillic_a: number
export const KEY_Cyrillic_be: number
export const KEY_Cyrillic_che: number
export const KEY_Cyrillic_che_descender: number
export const KEY_Cyrillic_che_vertstroke: number
export const KEY_Cyrillic_de: number
export const KEY_Cyrillic_dzhe: number
export const KEY_Cyrillic_e: number
export const KEY_Cyrillic_ef: number
export const KEY_Cyrillic_el: number
export const KEY_Cyrillic_em: number
export const KEY_Cyrillic_en: number
export const KEY_Cyrillic_en_descender: number
export const KEY_Cyrillic_er: number
export const KEY_Cyrillic_es: number
export const KEY_Cyrillic_ghe: number
export const KEY_Cyrillic_ghe_bar: number
export const KEY_Cyrillic_ha: number
export const KEY_Cyrillic_ha_descender: number
export const KEY_Cyrillic_hardsign: number
export const KEY_Cyrillic_i: number
export const KEY_Cyrillic_i_macron: number
export const KEY_Cyrillic_ie: number
export const KEY_Cyrillic_io: number
export const KEY_Cyrillic_je: number
export const KEY_Cyrillic_ka: number
export const KEY_Cyrillic_ka_descender: number
export const KEY_Cyrillic_ka_vertstroke: number
export const KEY_Cyrillic_lje: number
export const KEY_Cyrillic_nje: number
export const KEY_Cyrillic_o: number
export const KEY_Cyrillic_o_bar: number
export const KEY_Cyrillic_pe: number
export const KEY_Cyrillic_schwa: number
export const KEY_Cyrillic_sha: number
export const KEY_Cyrillic_shcha: number
export const KEY_Cyrillic_shha: number
export const KEY_Cyrillic_shorti: number
export const KEY_Cyrillic_softsign: number
export const KEY_Cyrillic_te: number
export const KEY_Cyrillic_tse: number
export const KEY_Cyrillic_u: number
export const KEY_Cyrillic_u_macron: number
export const KEY_Cyrillic_u_straight: number
export const KEY_Cyrillic_u_straight_bar: number
export const KEY_Cyrillic_ve: number
export const KEY_Cyrillic_ya: number
export const KEY_Cyrillic_yeru: number
export const KEY_Cyrillic_yu: number
export const KEY_Cyrillic_ze: number
export const KEY_Cyrillic_zhe: number
export const KEY_Cyrillic_zhe_descender: number
export const KEY_D: number
export const KEY_DOS: number
export const KEY_Dabovedot: number
export const KEY_Dcaron: number
export const KEY_Delete: number
export const KEY_Display: number
export const KEY_Documents: number
export const KEY_DongSign: number
export const KEY_Down: number
export const KEY_Dstroke: number
export const KEY_E: number
export const KEY_ENG: number
export const KEY_ETH: number
export const KEY_EZH: number
export const KEY_Eabovedot: number
export const KEY_Eacute: number
export const KEY_Ebelowdot: number
export const KEY_Ecaron: number
export const KEY_Ecircumflex: number
export const KEY_Ecircumflexacute: number
export const KEY_Ecircumflexbelowdot: number
export const KEY_Ecircumflexgrave: number
export const KEY_Ecircumflexhook: number
export const KEY_Ecircumflextilde: number
export const KEY_EcuSign: number
export const KEY_Ediaeresis: number
export const KEY_Egrave: number
export const KEY_Ehook: number
export const KEY_Eisu_Shift: number
export const KEY_Eisu_toggle: number
export const KEY_Eject: number
export const KEY_Emacron: number
export const KEY_End: number
export const KEY_Eogonek: number
export const KEY_Escape: number
export const KEY_Eth: number
export const KEY_Etilde: number
export const KEY_EuroSign: number
export const KEY_Excel: number
export const KEY_Execute: number
export const KEY_Explorer: number
export const KEY_F: number
export const KEY_F1: number
export const KEY_F10: number
export const KEY_F11: number
export const KEY_F12: number
export const KEY_F13: number
export const KEY_F14: number
export const KEY_F15: number
export const KEY_F16: number
export const KEY_F17: number
export const KEY_F18: number
export const KEY_F19: number
export const KEY_F2: number
export const KEY_F20: number
export const KEY_F21: number
export const KEY_F22: number
export const KEY_F23: number
export const KEY_F24: number
export const KEY_F25: number
export const KEY_F26: number
export const KEY_F27: number
export const KEY_F28: number
export const KEY_F29: number
export const KEY_F3: number
export const KEY_F30: number
export const KEY_F31: number
export const KEY_F32: number
export const KEY_F33: number
export const KEY_F34: number
export const KEY_F35: number
export const KEY_F4: number
export const KEY_F5: number
export const KEY_F6: number
export const KEY_F7: number
export const KEY_F8: number
export const KEY_F9: number
export const KEY_FFrancSign: number
export const KEY_Fabovedot: number
export const KEY_Farsi_0: number
export const KEY_Farsi_1: number
export const KEY_Farsi_2: number
export const KEY_Farsi_3: number
export const KEY_Farsi_4: number
export const KEY_Farsi_5: number
export const KEY_Farsi_6: number
export const KEY_Farsi_7: number
export const KEY_Farsi_8: number
export const KEY_Farsi_9: number
export const KEY_Farsi_yeh: number
export const KEY_Favorites: number
export const KEY_Finance: number
export const KEY_Find: number
export const KEY_First_Virtual_Screen: number
export const KEY_Forward: number
export const KEY_FrameBack: number
export const KEY_FrameForward: number
export const KEY_G: number
export const KEY_Gabovedot: number
export const KEY_Game: number
export const KEY_Gbreve: number
export const KEY_Gcaron: number
export const KEY_Gcedilla: number
export const KEY_Gcircumflex: number
export const KEY_Georgian_an: number
export const KEY_Georgian_ban: number
export const KEY_Georgian_can: number
export const KEY_Georgian_char: number
export const KEY_Georgian_chin: number
export const KEY_Georgian_cil: number
export const KEY_Georgian_don: number
export const KEY_Georgian_en: number
export const KEY_Georgian_fi: number
export const KEY_Georgian_gan: number
export const KEY_Georgian_ghan: number
export const KEY_Georgian_hae: number
export const KEY_Georgian_har: number
export const KEY_Georgian_he: number
export const KEY_Georgian_hie: number
export const KEY_Georgian_hoe: number
export const KEY_Georgian_in: number
export const KEY_Georgian_jhan: number
export const KEY_Georgian_jil: number
export const KEY_Georgian_kan: number
export const KEY_Georgian_khar: number
export const KEY_Georgian_las: number
export const KEY_Georgian_man: number
export const KEY_Georgian_nar: number
export const KEY_Georgian_on: number
export const KEY_Georgian_par: number
export const KEY_Georgian_phar: number
export const KEY_Georgian_qar: number
export const KEY_Georgian_rae: number
export const KEY_Georgian_san: number
export const KEY_Georgian_shin: number
export const KEY_Georgian_tan: number
export const KEY_Georgian_tar: number
export const KEY_Georgian_un: number
export const KEY_Georgian_vin: number
export const KEY_Georgian_we: number
export const KEY_Georgian_xan: number
export const KEY_Georgian_zen: number
export const KEY_Georgian_zhar: number
export const KEY_Go: number
export const KEY_Greek_ALPHA: number
export const KEY_Greek_ALPHAaccent: number
export const KEY_Greek_BETA: number
export const KEY_Greek_CHI: number
export const KEY_Greek_DELTA: number
export const KEY_Greek_EPSILON: number
export const KEY_Greek_EPSILONaccent: number
export const KEY_Greek_ETA: number
export const KEY_Greek_ETAaccent: number
export const KEY_Greek_GAMMA: number
export const KEY_Greek_IOTA: number
export const KEY_Greek_IOTAaccent: number
export const KEY_Greek_IOTAdiaeresis: number
export const KEY_Greek_IOTAdieresis: number
export const KEY_Greek_KAPPA: number
export const KEY_Greek_LAMBDA: number
export const KEY_Greek_LAMDA: number
export const KEY_Greek_MU: number
export const KEY_Greek_NU: number
export const KEY_Greek_OMEGA: number
export const KEY_Greek_OMEGAaccent: number
export const KEY_Greek_OMICRON: number
export const KEY_Greek_OMICRONaccent: number
export const KEY_Greek_PHI: number
export const KEY_Greek_PI: number
export const KEY_Greek_PSI: number
export const KEY_Greek_RHO: number
export const KEY_Greek_SIGMA: number
export const KEY_Greek_TAU: number
export const KEY_Greek_THETA: number
export const KEY_Greek_UPSILON: number
export const KEY_Greek_UPSILONaccent: number
export const KEY_Greek_UPSILONdieresis: number
export const KEY_Greek_XI: number
export const KEY_Greek_ZETA: number
export const KEY_Greek_accentdieresis: number
export const KEY_Greek_alpha: number
export const KEY_Greek_alphaaccent: number
export const KEY_Greek_beta: number
export const KEY_Greek_chi: number
export const KEY_Greek_delta: number
export const KEY_Greek_epsilon: number
export const KEY_Greek_epsilonaccent: number
export const KEY_Greek_eta: number
export const KEY_Greek_etaaccent: number
export const KEY_Greek_finalsmallsigma: number
export const KEY_Greek_gamma: number
export const KEY_Greek_horizbar: number
export const KEY_Greek_iota: number
export const KEY_Greek_iotaaccent: number
export const KEY_Greek_iotaaccentdieresis: number
export const KEY_Greek_iotadieresis: number
export const KEY_Greek_kappa: number
export const KEY_Greek_lambda: number
export const KEY_Greek_lamda: number
export const KEY_Greek_mu: number
export const KEY_Greek_nu: number
export const KEY_Greek_omega: number
export const KEY_Greek_omegaaccent: number
export const KEY_Greek_omicron: number
export const KEY_Greek_omicronaccent: number
export const KEY_Greek_phi: number
export const KEY_Greek_pi: number
export const KEY_Greek_psi: number
export const KEY_Greek_rho: number
export const KEY_Greek_sigma: number
export const KEY_Greek_switch: number
export const KEY_Greek_tau: number
export const KEY_Greek_theta: number
export const KEY_Greek_upsilon: number
export const KEY_Greek_upsilonaccent: number
export const KEY_Greek_upsilonaccentdieresis: number
export const KEY_Greek_upsilondieresis: number
export const KEY_Greek_xi: number
export const KEY_Greek_zeta: number
export const KEY_Green: number
export const KEY_H: number
export const KEY_Hangul: number
export const KEY_Hangul_A: number
export const KEY_Hangul_AE: number
export const KEY_Hangul_AraeA: number
export const KEY_Hangul_AraeAE: number
export const KEY_Hangul_Banja: number
export const KEY_Hangul_Cieuc: number
export const KEY_Hangul_Codeinput: number
export const KEY_Hangul_Dikeud: number
export const KEY_Hangul_E: number
export const KEY_Hangul_EO: number
export const KEY_Hangul_EU: number
export const KEY_Hangul_End: number
export const KEY_Hangul_Hanja: number
export const KEY_Hangul_Hieuh: number
export const KEY_Hangul_I: number
export const KEY_Hangul_Ieung: number
export const KEY_Hangul_J_Cieuc: number
export const KEY_Hangul_J_Dikeud: number
export const KEY_Hangul_J_Hieuh: number
export const KEY_Hangul_J_Ieung: number
export const KEY_Hangul_J_Jieuj: number
export const KEY_Hangul_J_Khieuq: number
export const KEY_Hangul_J_Kiyeog: number
export const KEY_Hangul_J_KiyeogSios: number
export const KEY_Hangul_J_KkogjiDalrinIeung: number
export const KEY_Hangul_J_Mieum: number
export const KEY_Hangul_J_Nieun: number
export const KEY_Hangul_J_NieunHieuh: number
export const KEY_Hangul_J_NieunJieuj: number
export const KEY_Hangul_J_PanSios: number
export const KEY_Hangul_J_Phieuf: number
export const KEY_Hangul_J_Pieub: number
export const KEY_Hangul_J_PieubSios: number
export const KEY_Hangul_J_Rieul: number
export const KEY_Hangul_J_RieulHieuh: number
export const KEY_Hangul_J_RieulKiyeog: number
export const KEY_Hangul_J_RieulMieum: number
export const KEY_Hangul_J_RieulPhieuf: number
export const KEY_Hangul_J_RieulPieub: number
export const KEY_Hangul_J_RieulSios: number
export const KEY_Hangul_J_RieulTieut: number
export const KEY_Hangul_J_Sios: number
export const KEY_Hangul_J_SsangKiyeog: number
export const KEY_Hangul_J_SsangSios: number
export const KEY_Hangul_J_Tieut: number
export const KEY_Hangul_J_YeorinHieuh: number
export const KEY_Hangul_Jamo: number
export const KEY_Hangul_Jeonja: number
export const KEY_Hangul_Jieuj: number
export const KEY_Hangul_Khieuq: number
export const KEY_Hangul_Kiyeog: number
export const KEY_Hangul_KiyeogSios: number
export const KEY_Hangul_KkogjiDalrinIeung: number
export const KEY_Hangul_Mieum: number
export const KEY_Hangul_MultipleCandidate: number
export const KEY_Hangul_Nieun: number
export const KEY_Hangul_NieunHieuh: number
export const KEY_Hangul_NieunJieuj: number
export const KEY_Hangul_O: number
export const KEY_Hangul_OE: number
export const KEY_Hangul_PanSios: number
export const KEY_Hangul_Phieuf: number
export const KEY_Hangul_Pieub: number
export const KEY_Hangul_PieubSios: number
export const KEY_Hangul_PostHanja: number
export const KEY_Hangul_PreHanja: number
export const KEY_Hangul_PreviousCandidate: number
export const KEY_Hangul_Rieul: number
export const KEY_Hangul_RieulHieuh: number
export const KEY_Hangul_RieulKiyeog: number
export const KEY_Hangul_RieulMieum: number
export const KEY_Hangul_RieulPhieuf: number
export const KEY_Hangul_RieulPieub: number
export const KEY_Hangul_RieulSios: number
export const KEY_Hangul_RieulTieut: number
export const KEY_Hangul_RieulYeorinHieuh: number
export const KEY_Hangul_Romaja: number
export const KEY_Hangul_SingleCandidate: number
export const KEY_Hangul_Sios: number
export const KEY_Hangul_Special: number
export const KEY_Hangul_SsangDikeud: number
export const KEY_Hangul_SsangJieuj: number
export const KEY_Hangul_SsangKiyeog: number
export const KEY_Hangul_SsangPieub: number
export const KEY_Hangul_SsangSios: number
export const KEY_Hangul_Start: number
export const KEY_Hangul_SunkyeongeumMieum: number
export const KEY_Hangul_SunkyeongeumPhieuf: number
export const KEY_Hangul_SunkyeongeumPieub: number
export const KEY_Hangul_Tieut: number
export const KEY_Hangul_U: number
export const KEY_Hangul_WA: number
export const KEY_Hangul_WAE: number
export const KEY_Hangul_WE: number
export const KEY_Hangul_WEO: number
export const KEY_Hangul_WI: number
export const KEY_Hangul_YA: number
export const KEY_Hangul_YAE: number
export const KEY_Hangul_YE: number
export const KEY_Hangul_YEO: number
export const KEY_Hangul_YI: number
export const KEY_Hangul_YO: number
export const KEY_Hangul_YU: number
export const KEY_Hangul_YeorinHieuh: number
export const KEY_Hangul_switch: number
export const KEY_Hankaku: number
export const KEY_Hcircumflex: number
export const KEY_Hebrew_switch: number
export const KEY_Help: number
export const KEY_Henkan: number
export const KEY_Henkan_Mode: number
export const KEY_Hibernate: number
export const KEY_Hiragana: number
export const KEY_Hiragana_Katakana: number
export const KEY_History: number
export const KEY_Home: number
export const KEY_HomePage: number
export const KEY_HotLinks: number
export const KEY_Hstroke: number
export const KEY_Hyper_L: number
export const KEY_Hyper_R: number
export const KEY_I: number
export const KEY_ISO_Center_Object: number
export const KEY_ISO_Continuous_Underline: number
export const KEY_ISO_Discontinuous_Underline: number
export const KEY_ISO_Emphasize: number
export const KEY_ISO_Enter: number
export const KEY_ISO_Fast_Cursor_Down: number
export const KEY_ISO_Fast_Cursor_Left: number
export const KEY_ISO_Fast_Cursor_Right: number
export const KEY_ISO_Fast_Cursor_Up: number
export const KEY_ISO_First_Group: number
export const KEY_ISO_First_Group_Lock: number
export const KEY_ISO_Group_Latch: number
export const KEY_ISO_Group_Lock: number
export const KEY_ISO_Group_Shift: number
export const KEY_ISO_Last_Group: number
export const KEY_ISO_Last_Group_Lock: number
export const KEY_ISO_Left_Tab: number
export const KEY_ISO_Level2_Latch: number
export const KEY_ISO_Level3_Latch: number
export const KEY_ISO_Level3_Lock: number
export const KEY_ISO_Level3_Shift: number
export const KEY_ISO_Level5_Latch: number
export const KEY_ISO_Level5_Lock: number
export const KEY_ISO_Level5_Shift: number
export const KEY_ISO_Lock: number
export const KEY_ISO_Move_Line_Down: number
export const KEY_ISO_Move_Line_Up: number
export const KEY_ISO_Next_Group: number
export const KEY_ISO_Next_Group_Lock: number
export const KEY_ISO_Partial_Line_Down: number
export const KEY_ISO_Partial_Line_Up: number
export const KEY_ISO_Partial_Space_Left: number
export const KEY_ISO_Partial_Space_Right: number
export const KEY_ISO_Prev_Group: number
export const KEY_ISO_Prev_Group_Lock: number
export const KEY_ISO_Release_Both_Margins: number
export const KEY_ISO_Release_Margin_Left: number
export const KEY_ISO_Release_Margin_Right: number
export const KEY_ISO_Set_Margin_Left: number
export const KEY_ISO_Set_Margin_Right: number
export const KEY_Iabovedot: number
export const KEY_Iacute: number
export const KEY_Ibelowdot: number
export const KEY_Ibreve: number
export const KEY_Icircumflex: number
export const KEY_Idiaeresis: number
export const KEY_Igrave: number
export const KEY_Ihook: number
export const KEY_Imacron: number
export const KEY_Insert: number
export const KEY_Iogonek: number
export const KEY_Itilde: number
export const KEY_J: number
export const KEY_Jcircumflex: number
export const KEY_K: number
export const KEY_KP_0: number
export const KEY_KP_1: number
export const KEY_KP_2: number
export const KEY_KP_3: number
export const KEY_KP_4: number
export const KEY_KP_5: number
export const KEY_KP_6: number
export const KEY_KP_7: number
export const KEY_KP_8: number
export const KEY_KP_9: number
export const KEY_KP_Add: number
export const KEY_KP_Begin: number
export const KEY_KP_Decimal: number
export const KEY_KP_Delete: number
export const KEY_KP_Divide: number
export const KEY_KP_Down: number
export const KEY_KP_End: number
export const KEY_KP_Enter: number
export const KEY_KP_Equal: number
export const KEY_KP_F1: number
export const KEY_KP_F2: number
export const KEY_KP_F3: number
export const KEY_KP_F4: number
export const KEY_KP_Home: number
export const KEY_KP_Insert: number
export const KEY_KP_Left: number
export const KEY_KP_Multiply: number
export const KEY_KP_Next: number
export const KEY_KP_Page_Down: number
export const KEY_KP_Page_Up: number
export const KEY_KP_Prior: number
export const KEY_KP_Right: number
export const KEY_KP_Separator: number
export const KEY_KP_Space: number
export const KEY_KP_Subtract: number
export const KEY_KP_Tab: number
export const KEY_KP_Up: number
export const KEY_Kana_Lock: number
export const KEY_Kana_Shift: number
export const KEY_Kanji: number
export const KEY_Kanji_Bangou: number
export const KEY_Katakana: number
export const KEY_KbdBrightnessDown: number
export const KEY_KbdBrightnessUp: number
export const KEY_KbdLightOnOff: number
export const KEY_Kcedilla: number
export const KEY_Korean_Won: number
export const KEY_L: number
export const KEY_L1: number
export const KEY_L10: number
export const KEY_L2: number
export const KEY_L3: number
export const KEY_L4: number
export const KEY_L5: number
export const KEY_L6: number
export const KEY_L7: number
export const KEY_L8: number
export const KEY_L9: number
export const KEY_Lacute: number
export const KEY_Last_Virtual_Screen: number
export const KEY_Launch0: number
export const KEY_Launch1: number
export const KEY_Launch2: number
export const KEY_Launch3: number
export const KEY_Launch4: number
export const KEY_Launch5: number
export const KEY_Launch6: number
export const KEY_Launch7: number
export const KEY_Launch8: number
export const KEY_Launch9: number
export const KEY_LaunchA: number
export const KEY_LaunchB: number
export const KEY_LaunchC: number
export const KEY_LaunchD: number
export const KEY_LaunchE: number
export const KEY_LaunchF: number
export const KEY_Lbelowdot: number
export const KEY_Lcaron: number
export const KEY_Lcedilla: number
export const KEY_Left: number
export const KEY_LightBulb: number
export const KEY_Linefeed: number
export const KEY_LiraSign: number
export const KEY_LogGrabInfo: number
export const KEY_LogOff: number
export const KEY_LogWindowTree: number
export const KEY_Lstroke: number
export const KEY_M: number
export const KEY_Mabovedot: number
export const KEY_Macedonia_DSE: number
export const KEY_Macedonia_GJE: number
export const KEY_Macedonia_KJE: number
export const KEY_Macedonia_dse: number
export const KEY_Macedonia_gje: number
export const KEY_Macedonia_kje: number
export const KEY_Mae_Koho: number
export const KEY_Mail: number
export const KEY_MailForward: number
export const KEY_Market: number
export const KEY_Massyo: number
export const KEY_Meeting: number
export const KEY_Memo: number
export const KEY_Menu: number
export const KEY_MenuKB: number
export const KEY_MenuPB: number
export const KEY_Messenger: number
export const KEY_Meta_L: number
export const KEY_Meta_R: number
export const KEY_MillSign: number
export const KEY_ModeLock: number
export const KEY_Mode_switch: number
export const KEY_MonBrightnessDown: number
export const KEY_MonBrightnessUp: number
export const KEY_MouseKeys_Accel_Enable: number
export const KEY_MouseKeys_Enable: number
export const KEY_Muhenkan: number
export const KEY_Multi_key: number
export const KEY_MultipleCandidate: number
export const KEY_Music: number
export const KEY_MyComputer: number
export const KEY_MySites: number
export const KEY_N: number
export const KEY_Nacute: number
export const KEY_NairaSign: number
export const KEY_Ncaron: number
export const KEY_Ncedilla: number
export const KEY_New: number
export const KEY_NewSheqelSign: number
export const KEY_News: number
export const KEY_Next: number
export const KEY_Next_VMode: number
export const KEY_Next_Virtual_Screen: number
export const KEY_Ntilde: number
export const KEY_Num_Lock: number
export const KEY_O: number
export const KEY_OE: number
export const KEY_Oacute: number
export const KEY_Obarred: number
export const KEY_Obelowdot: number
export const KEY_Ocaron: number
export const KEY_Ocircumflex: number
export const KEY_Ocircumflexacute: number
export const KEY_Ocircumflexbelowdot: number
export const KEY_Ocircumflexgrave: number
export const KEY_Ocircumflexhook: number
export const KEY_Ocircumflextilde: number
export const KEY_Odiaeresis: number
export const KEY_Odoubleacute: number
export const KEY_OfficeHome: number
export const KEY_Ograve: number
export const KEY_Ohook: number
export const KEY_Ohorn: number
export const KEY_Ohornacute: number
export const KEY_Ohornbelowdot: number
export const KEY_Ohorngrave: number
export const KEY_Ohornhook: number
export const KEY_Ohorntilde: number
export const KEY_Omacron: number
export const KEY_Ooblique: number
export const KEY_Open: number
export const KEY_OpenURL: number
export const KEY_Option: number
export const KEY_Oslash: number
export const KEY_Otilde: number
export const KEY_Overlay1_Enable: number
export const KEY_Overlay2_Enable: number
export const KEY_P: number
export const KEY_Pabovedot: number
export const KEY_Page_Down: number
export const KEY_Page_Up: number
export const KEY_Paste: number
export const KEY_Pause: number
export const KEY_PesetaSign: number
export const KEY_Phone: number
export const KEY_Pictures: number
export const KEY_Pointer_Accelerate: number
export const KEY_Pointer_Button1: number
export const KEY_Pointer_Button2: number
export const KEY_Pointer_Button3: number
export const KEY_Pointer_Button4: number
export const KEY_Pointer_Button5: number
export const KEY_Pointer_Button_Dflt: number
export const KEY_Pointer_DblClick1: number
export const KEY_Pointer_DblClick2: number
export const KEY_Pointer_DblClick3: number
export const KEY_Pointer_DblClick4: number
export const KEY_Pointer_DblClick5: number
export const KEY_Pointer_DblClick_Dflt: number
export const KEY_Pointer_DfltBtnNext: number
export const KEY_Pointer_DfltBtnPrev: number
export const KEY_Pointer_Down: number
export const KEY_Pointer_DownLeft: number
export const KEY_Pointer_DownRight: number
export const KEY_Pointer_Drag1: number
export const KEY_Pointer_Drag2: number
export const KEY_Pointer_Drag3: number
export const KEY_Pointer_Drag4: number
export const KEY_Pointer_Drag5: number
export const KEY_Pointer_Drag_Dflt: number
export const KEY_Pointer_EnableKeys: number
export const KEY_Pointer_Left: number
export const KEY_Pointer_Right: number
export const KEY_Pointer_Up: number
export const KEY_Pointer_UpLeft: number
export const KEY_Pointer_UpRight: number
export const KEY_PowerDown: number
export const KEY_PowerOff: number
export const KEY_Prev_VMode: number
export const KEY_Prev_Virtual_Screen: number
export const KEY_PreviousCandidate: number
export const KEY_Print: number
export const KEY_Prior: number
export const KEY_Q: number
export const KEY_R: number
export const KEY_R1: number
export const KEY_R10: number
export const KEY_R11: number
export const KEY_R12: number
export const KEY_R13: number
export const KEY_R14: number
export const KEY_R15: number
export const KEY_R2: number
export const KEY_R3: number
export const KEY_R4: number
export const KEY_R5: number
export const KEY_R6: number
export const KEY_R7: number
export const KEY_R8: number
export const KEY_R9: number
export const KEY_Racute: number
export const KEY_Rcaron: number
export const KEY_Rcedilla: number
export const KEY_Red: number
export const KEY_Redo: number
export const KEY_Refresh: number
export const KEY_Reload: number
export const KEY_RepeatKeys_Enable: number
export const KEY_Reply: number
export const KEY_Return: number
export const KEY_Right: number
export const KEY_RockerDown: number
export const KEY_RockerEnter: number
export const KEY_RockerUp: number
export const KEY_Romaji: number
export const KEY_RotateWindows: number
export const KEY_RotationKB: number
export const KEY_RotationPB: number
export const KEY_RupeeSign: number
export const KEY_S: number
export const KEY_SCHWA: number
export const KEY_Sabovedot: number
export const KEY_Sacute: number
export const KEY_Save: number
export const KEY_Scaron: number
export const KEY_Scedilla: number
export const KEY_Scircumflex: number
export const KEY_ScreenSaver: number
export const KEY_ScrollClick: number
export const KEY_ScrollDown: number
export const KEY_ScrollUp: number
export const KEY_Scroll_Lock: number
export const KEY_Search: number
export const KEY_Select: number
export const KEY_SelectButton: number
export const KEY_Send: number
export const KEY_Serbian_DJE: number
export const KEY_Serbian_DZE: number
export const KEY_Serbian_JE: number
export const KEY_Serbian_LJE: number
export const KEY_Serbian_NJE: number
export const KEY_Serbian_TSHE: number
export const KEY_Serbian_dje: number
export const KEY_Serbian_dze: number
export const KEY_Serbian_je: number
export const KEY_Serbian_lje: number
export const KEY_Serbian_nje: number
export const KEY_Serbian_tshe: number
export const KEY_Shift_L: number
export const KEY_Shift_Lock: number
export const KEY_Shift_R: number
export const KEY_Shop: number
export const KEY_SingleCandidate: number
export const KEY_Sinh_a: number
export const KEY_Sinh_aa: number
export const KEY_Sinh_aa2: number
export const KEY_Sinh_ae: number
export const KEY_Sinh_ae2: number
export const KEY_Sinh_aee: number
export const KEY_Sinh_aee2: number
export const KEY_Sinh_ai: number
export const KEY_Sinh_ai2: number
export const KEY_Sinh_al: number
export const KEY_Sinh_au: number
export const KEY_Sinh_au2: number
export const KEY_Sinh_ba: number
export const KEY_Sinh_bha: number
export const KEY_Sinh_ca: number
export const KEY_Sinh_cha: number
export const KEY_Sinh_dda: number
export const KEY_Sinh_ddha: number
export const KEY_Sinh_dha: number
export const KEY_Sinh_dhha: number
export const KEY_Sinh_e: number
export const KEY_Sinh_e2: number
export const KEY_Sinh_ee: number
export const KEY_Sinh_ee2: number
export const KEY_Sinh_fa: number
export const KEY_Sinh_ga: number
export const KEY_Sinh_gha: number
export const KEY_Sinh_h2: number
export const KEY_Sinh_ha: number
export const KEY_Sinh_i: number
export const KEY_Sinh_i2: number
export const KEY_Sinh_ii: number
export const KEY_Sinh_ii2: number
export const KEY_Sinh_ja: number
export const KEY_Sinh_jha: number
export const KEY_Sinh_jnya: number
export const KEY_Sinh_ka: number
export const KEY_Sinh_kha: number
export const KEY_Sinh_kunddaliya: number
export const KEY_Sinh_la: number
export const KEY_Sinh_lla: number
export const KEY_Sinh_lu: number
export const KEY_Sinh_lu2: number
export const KEY_Sinh_luu: number
export const KEY_Sinh_luu2: number
export const KEY_Sinh_ma: number
export const KEY_Sinh_mba: number
export const KEY_Sinh_na: number
export const KEY_Sinh_ndda: number
export const KEY_Sinh_ndha: number
export const KEY_Sinh_ng: number
export const KEY_Sinh_ng2: number
export const KEY_Sinh_nga: number
export const KEY_Sinh_nja: number
export const KEY_Sinh_nna: number
export const KEY_Sinh_nya: number
export const KEY_Sinh_o: number
export const KEY_Sinh_o2: number
export const KEY_Sinh_oo: number
export const KEY_Sinh_oo2: number
export const KEY_Sinh_pa: number
export const KEY_Sinh_pha: number
export const KEY_Sinh_ra: number
export const KEY_Sinh_ri: number
export const KEY_Sinh_rii: number
export const KEY_Sinh_ru2: number
export const KEY_Sinh_ruu2: number
export const KEY_Sinh_sa: number
export const KEY_Sinh_sha: number
export const KEY_Sinh_ssha: number
export const KEY_Sinh_tha: number
export const KEY_Sinh_thha: number
export const KEY_Sinh_tta: number
export const KEY_Sinh_ttha: number
export const KEY_Sinh_u: number
export const KEY_Sinh_u2: number
export const KEY_Sinh_uu: number
export const KEY_Sinh_uu2: number
export const KEY_Sinh_va: number
export const KEY_Sinh_ya: number
export const KEY_Sleep: number
export const KEY_SlowKeys_Enable: number
export const KEY_Spell: number
export const KEY_SplitScreen: number
export const KEY_Standby: number
export const KEY_Start: number
export const KEY_StickyKeys_Enable: number
export const KEY_Stop: number
export const KEY_Subtitle: number
export const KEY_Super_L: number
export const KEY_Super_R: number
export const KEY_Support: number
export const KEY_Suspend: number
export const KEY_Switch_VT_1: number
export const KEY_Switch_VT_10: number
export const KEY_Switch_VT_11: number
export const KEY_Switch_VT_12: number
export const KEY_Switch_VT_2: number
export const KEY_Switch_VT_3: number
export const KEY_Switch_VT_4: number
export const KEY_Switch_VT_5: number
export const KEY_Switch_VT_6: number
export const KEY_Switch_VT_7: number
export const KEY_Switch_VT_8: number
export const KEY_Switch_VT_9: number
export const KEY_Sys_Req: number
export const KEY_T: number
export const KEY_THORN: number
export const KEY_Tab: number
export const KEY_Tabovedot: number
export const KEY_TaskPane: number
export const KEY_Tcaron: number
export const KEY_Tcedilla: number
export const KEY_Terminal: number
export const KEY_Terminate_Server: number
export const KEY_Thai_baht: number
export const KEY_Thai_bobaimai: number
export const KEY_Thai_chochan: number
export const KEY_Thai_chochang: number
export const KEY_Thai_choching: number
export const KEY_Thai_chochoe: number
export const KEY_Thai_dochada: number
export const KEY_Thai_dodek: number
export const KEY_Thai_fofa: number
export const KEY_Thai_fofan: number
export const KEY_Thai_hohip: number
export const KEY_Thai_honokhuk: number
export const KEY_Thai_khokhai: number
export const KEY_Thai_khokhon: number
export const KEY_Thai_khokhuat: number
export const KEY_Thai_khokhwai: number
export const KEY_Thai_khorakhang: number
export const KEY_Thai_kokai: number
export const KEY_Thai_lakkhangyao: number
export const KEY_Thai_lekchet: number
export const KEY_Thai_lekha: number
export const KEY_Thai_lekhok: number
export const KEY_Thai_lekkao: number
export const KEY_Thai_leknung: number
export const KEY_Thai_lekpaet: number
export const KEY_Thai_leksam: number
export const KEY_Thai_leksi: number
export const KEY_Thai_leksong: number
export const KEY_Thai_leksun: number
export const KEY_Thai_lochula: number
export const KEY_Thai_loling: number
export const KEY_Thai_lu: number
export const KEY_Thai_maichattawa: number
export const KEY_Thai_maiek: number
export const KEY_Thai_maihanakat: number
export const KEY_Thai_maihanakat_maitho: number
export const KEY_Thai_maitaikhu: number
export const KEY_Thai_maitho: number
export const KEY_Thai_maitri: number
export const KEY_Thai_maiyamok: number
export const KEY_Thai_moma: number
export const KEY_Thai_ngongu: number
export const KEY_Thai_nikhahit: number
export const KEY_Thai_nonen: number
export const KEY_Thai_nonu: number
export const KEY_Thai_oang: number
export const KEY_Thai_paiyannoi: number
export const KEY_Thai_phinthu: number
export const KEY_Thai_phophan: number
export const KEY_Thai_phophung: number
export const KEY_Thai_phosamphao: number
export const KEY_Thai_popla: number
export const KEY_Thai_rorua: number
export const KEY_Thai_ru: number
export const KEY_Thai_saraa: number
export const KEY_Thai_saraaa: number
export const KEY_Thai_saraae: number
export const KEY_Thai_saraaimaimalai: number
export const KEY_Thai_saraaimaimuan: number
export const KEY_Thai_saraam: number
export const KEY_Thai_sarae: number
export const KEY_Thai_sarai: number
export const KEY_Thai_saraii: number
export const KEY_Thai_sarao: number
export const KEY_Thai_sarau: number
export const KEY_Thai_saraue: number
export const KEY_Thai_sarauee: number
export const KEY_Thai_sarauu: number
export const KEY_Thai_sorusi: number
export const KEY_Thai_sosala: number
export const KEY_Thai_soso: number
export const KEY_Thai_sosua: number
export const KEY_Thai_thanthakhat: number
export const KEY_Thai_thonangmontho: number
export const KEY_Thai_thophuthao: number
export const KEY_Thai_thothahan: number
export const KEY_Thai_thothan: number
export const KEY_Thai_thothong: number
export const KEY_Thai_thothung: number
export const KEY_Thai_topatak: number
export const KEY_Thai_totao: number
export const KEY_Thai_wowaen: number
export const KEY_Thai_yoyak: number
export const KEY_Thai_yoying: number
export const KEY_Thorn: number
export const KEY_Time: number
export const KEY_ToDoList: number
export const KEY_Tools: number
export const KEY_TopMenu: number
export const KEY_TouchpadOff: number
export const KEY_TouchpadOn: number
export const KEY_TouchpadToggle: number
export const KEY_Touroku: number
export const KEY_Travel: number
export const KEY_Tslash: number
export const KEY_U: number
export const KEY_UWB: number
export const KEY_Uacute: number
export const KEY_Ubelowdot: number
export const KEY_Ubreve: number
export const KEY_Ucircumflex: number
export const KEY_Udiaeresis: number
export const KEY_Udoubleacute: number
export const KEY_Ugrave: number
export const KEY_Uhook: number
export const KEY_Uhorn: number
export const KEY_Uhornacute: number
export const KEY_Uhornbelowdot: number
export const KEY_Uhorngrave: number
export const KEY_Uhornhook: number
export const KEY_Uhorntilde: number
export const KEY_Ukrainian_GHE_WITH_UPTURN: number
export const KEY_Ukrainian_I: number
export const KEY_Ukrainian_IE: number
export const KEY_Ukrainian_YI: number
export const KEY_Ukrainian_ghe_with_upturn: number
export const KEY_Ukrainian_i: number
export const KEY_Ukrainian_ie: number
export const KEY_Ukrainian_yi: number
export const KEY_Ukranian_I: number
export const KEY_Ukranian_JE: number
export const KEY_Ukranian_YI: number
export const KEY_Ukranian_i: number
export const KEY_Ukranian_je: number
export const KEY_Ukranian_yi: number
export const KEY_Umacron: number
export const KEY_Undo: number
export const KEY_Ungrab: number
export const KEY_Uogonek: number
export const KEY_Up: number
export const KEY_Uring: number
export const KEY_User1KB: number
export const KEY_User2KB: number
export const KEY_UserPB: number
export const KEY_Utilde: number
export const KEY_V: number
export const KEY_VendorHome: number
export const KEY_Video: number
export const KEY_View: number
export const KEY_VoidSymbol: number
export const KEY_W: number
export const KEY_WLAN: number
export const KEY_WWW: number
export const KEY_Wacute: number
export const KEY_WakeUp: number
export const KEY_Wcircumflex: number
export const KEY_Wdiaeresis: number
export const KEY_WebCam: number
export const KEY_Wgrave: number
export const KEY_WheelButton: number
export const KEY_WindowClear: number
export const KEY_WonSign: number
export const KEY_Word: number
export const KEY_X: number
export const KEY_Xabovedot: number
export const KEY_Xfer: number
export const KEY_Y: number
export const KEY_Yacute: number
export const KEY_Ybelowdot: number
export const KEY_Ycircumflex: number
export const KEY_Ydiaeresis: number
export const KEY_Yellow: number
export const KEY_Ygrave: number
export const KEY_Yhook: number
export const KEY_Ytilde: number
export const KEY_Z: number
export const KEY_Zabovedot: number
export const KEY_Zacute: number
export const KEY_Zcaron: number
export const KEY_Zen_Koho: number
export const KEY_Zenkaku: number
export const KEY_Zenkaku_Hankaku: number
export const KEY_ZoomIn: number
export const KEY_ZoomOut: number
export const KEY_Zstroke: number
export const KEY_a: number
export const KEY_aacute: number
export const KEY_abelowdot: number
export const KEY_abovedot: number
export const KEY_abreve: number
export const KEY_abreveacute: number
export const KEY_abrevebelowdot: number
export const KEY_abrevegrave: number
export const KEY_abrevehook: number
export const KEY_abrevetilde: number
export const KEY_acircumflex: number
export const KEY_acircumflexacute: number
export const KEY_acircumflexbelowdot: number
export const KEY_acircumflexgrave: number
export const KEY_acircumflexhook: number
export const KEY_acircumflextilde: number
export const KEY_acute: number
export const KEY_adiaeresis: number
export const KEY_ae: number
export const KEY_agrave: number
export const KEY_ahook: number
export const KEY_amacron: number
export const KEY_ampersand: number
export const KEY_aogonek: number
export const KEY_apostrophe: number
export const KEY_approxeq: number
export const KEY_approximate: number
export const KEY_aring: number
export const KEY_asciicircum: number
export const KEY_asciitilde: number
export const KEY_asterisk: number
export const KEY_at: number
export const KEY_atilde: number
export const KEY_b: number
export const KEY_babovedot: number
export const KEY_backslash: number
export const KEY_ballotcross: number
export const KEY_bar: number
export const KEY_because: number
export const KEY_blank: number
export const KEY_botintegral: number
export const KEY_botleftparens: number
export const KEY_botleftsqbracket: number
export const KEY_botleftsummation: number
export const KEY_botrightparens: number
export const KEY_botrightsqbracket: number
export const KEY_botrightsummation: number
export const KEY_bott: number
export const KEY_botvertsummationconnector: number
export const KEY_braceleft: number
export const KEY_braceright: number
export const KEY_bracketleft: number
export const KEY_bracketright: number
export const KEY_braille_blank: number
export const KEY_braille_dot_1: number
export const KEY_braille_dot_10: number
export const KEY_braille_dot_2: number
export const KEY_braille_dot_3: number
export const KEY_braille_dot_4: number
export const KEY_braille_dot_5: number
export const KEY_braille_dot_6: number
export const KEY_braille_dot_7: number
export const KEY_braille_dot_8: number
export const KEY_braille_dot_9: number
export const KEY_braille_dots_1: number
export const KEY_braille_dots_12: number
export const KEY_braille_dots_123: number
export const KEY_braille_dots_1234: number
export const KEY_braille_dots_12345: number
export const KEY_braille_dots_123456: number
export const KEY_braille_dots_1234567: number
export const KEY_braille_dots_12345678: number
export const KEY_braille_dots_1234568: number
export const KEY_braille_dots_123457: number
export const KEY_braille_dots_1234578: number
export const KEY_braille_dots_123458: number
export const KEY_braille_dots_12346: number
export const KEY_braille_dots_123467: number
export const KEY_braille_dots_1234678: number
export const KEY_braille_dots_123468: number
export const KEY_braille_dots_12347: number
export const KEY_braille_dots_123478: number
export const KEY_braille_dots_12348: number
export const KEY_braille_dots_1235: number
export const KEY_braille_dots_12356: number
export const KEY_braille_dots_123567: number
export const KEY_braille_dots_1235678: number
export const KEY_braille_dots_123568: number
export const KEY_braille_dots_12357: number
export const KEY_braille_dots_123578: number
export const KEY_braille_dots_12358: number
export const KEY_braille_dots_1236: number
export const KEY_braille_dots_12367: number
export const KEY_braille_dots_123678: number
export const KEY_braille_dots_12368: number
export const KEY_braille_dots_1237: number
export const KEY_braille_dots_12378: number
export const KEY_braille_dots_1238: number
export const KEY_braille_dots_124: number
export const KEY_braille_dots_1245: number
export const KEY_braille_dots_12456: number
export const KEY_braille_dots_124567: number
export const KEY_braille_dots_1245678: number
export const KEY_braille_dots_124568: number
export const KEY_braille_dots_12457: number
export const KEY_braille_dots_124578: number
export const KEY_braille_dots_12458: number
export const KEY_braille_dots_1246: number
export const KEY_braille_dots_12467: number
export const KEY_braille_dots_124678: number
export const KEY_braille_dots_12468: number
export const KEY_braille_dots_1247: number
export const KEY_braille_dots_12478: number
export const KEY_braille_dots_1248: number
export const KEY_braille_dots_125: number
export const KEY_braille_dots_1256: number
export const KEY_braille_dots_12567: number
export const KEY_braille_dots_125678: number
export const KEY_braille_dots_12568: number
export const KEY_braille_dots_1257: number
export const KEY_braille_dots_12578: number
export const KEY_braille_dots_1258: number
export const KEY_braille_dots_126: number
export const KEY_braille_dots_1267: number
export const KEY_braille_dots_12678: number
export const KEY_braille_dots_1268: number
export const KEY_braille_dots_127: number
export const KEY_braille_dots_1278: number
export const KEY_braille_dots_128: number
export const KEY_braille_dots_13: number
export const KEY_braille_dots_134: number
export const KEY_braille_dots_1345: number
export const KEY_braille_dots_13456: number
export const KEY_braille_dots_134567: number
export const KEY_braille_dots_1345678: number
export const KEY_braille_dots_134568: number
export const KEY_braille_dots_13457: number
export const KEY_braille_dots_134578: number
export const KEY_braille_dots_13458: number
export const KEY_braille_dots_1346: number
export const KEY_braille_dots_13467: number
export const KEY_braille_dots_134678: number
export const KEY_braille_dots_13468: number
export const KEY_braille_dots_1347: number
export const KEY_braille_dots_13478: number
export const KEY_braille_dots_1348: number
export const KEY_braille_dots_135: number
export const KEY_braille_dots_1356: number
export const KEY_braille_dots_13567: number
export const KEY_braille_dots_135678: number
export const KEY_braille_dots_13568: number
export const KEY_braille_dots_1357: number
export const KEY_braille_dots_13578: number
export const KEY_braille_dots_1358: number
export const KEY_braille_dots_136: number
export const KEY_braille_dots_1367: number
export const KEY_braille_dots_13678: number
export const KEY_braille_dots_1368: number
export const KEY_braille_dots_137: number
export const KEY_braille_dots_1378: number
export const KEY_braille_dots_138: number
export const KEY_braille_dots_14: number
export const KEY_braille_dots_145: number
export const KEY_braille_dots_1456: number
export const KEY_braille_dots_14567: number
export const KEY_braille_dots_145678: number
export const KEY_braille_dots_14568: number
export const KEY_braille_dots_1457: number
export const KEY_braille_dots_14578: number
export const KEY_braille_dots_1458: number
export const KEY_braille_dots_146: number
export const KEY_braille_dots_1467: number
export const KEY_braille_dots_14678: number
export const KEY_braille_dots_1468: number
export const KEY_braille_dots_147: number
export const KEY_braille_dots_1478: number
export const KEY_braille_dots_148: number
export const KEY_braille_dots_15: number
export const KEY_braille_dots_156: number
export const KEY_braille_dots_1567: number
export const KEY_braille_dots_15678: number
export const KEY_braille_dots_1568: number
export const KEY_braille_dots_157: number
export const KEY_braille_dots_1578: number
export const KEY_braille_dots_158: number
export const KEY_braille_dots_16: number
export const KEY_braille_dots_167: number
export const KEY_braille_dots_1678: number
export const KEY_braille_dots_168: number
export const KEY_braille_dots_17: number
export const KEY_braille_dots_178: number
export const KEY_braille_dots_18: number
export const KEY_braille_dots_2: number
export const KEY_braille_dots_23: number
export const KEY_braille_dots_234: number
export const KEY_braille_dots_2345: number
export const KEY_braille_dots_23456: number
export const KEY_braille_dots_234567: number
export const KEY_braille_dots_2345678: number
export const KEY_braille_dots_234568: number
export const KEY_braille_dots_23457: number
export const KEY_braille_dots_234578: number
export const KEY_braille_dots_23458: number
export const KEY_braille_dots_2346: number
export const KEY_braille_dots_23467: number
export const KEY_braille_dots_234678: number
export const KEY_braille_dots_23468: number
export const KEY_braille_dots_2347: number
export const KEY_braille_dots_23478: number
export const KEY_braille_dots_2348: number
export const KEY_braille_dots_235: number
export const KEY_braille_dots_2356: number
export const KEY_braille_dots_23567: number
export const KEY_braille_dots_235678: number
export const KEY_braille_dots_23568: number
export const KEY_braille_dots_2357: number
export const KEY_braille_dots_23578: number
export const KEY_braille_dots_2358: number
export const KEY_braille_dots_236: number
export const KEY_braille_dots_2367: number
export const KEY_braille_dots_23678: number
export const KEY_braille_dots_2368: number
export const KEY_braille_dots_237: number
export const KEY_braille_dots_2378: number
export const KEY_braille_dots_238: number
export const KEY_braille_dots_24: number
export const KEY_braille_dots_245: number
export const KEY_braille_dots_2456: number
export const KEY_braille_dots_24567: number
export const KEY_braille_dots_245678: number
export const KEY_braille_dots_24568: number
export const KEY_braille_dots_2457: number
export const KEY_braille_dots_24578: number
export const KEY_braille_dots_2458: number
export const KEY_braille_dots_246: number
export const KEY_braille_dots_2467: number
export const KEY_braille_dots_24678: number
export const KEY_braille_dots_2468: number
export const KEY_braille_dots_247: number
export const KEY_braille_dots_2478: number
export const KEY_braille_dots_248: number
export const KEY_braille_dots_25: number
export const KEY_braille_dots_256: number
export const KEY_braille_dots_2567: number
export const KEY_braille_dots_25678: number
export const KEY_braille_dots_2568: number
export const KEY_braille_dots_257: number
export const KEY_braille_dots_2578: number
export const KEY_braille_dots_258: number
export const KEY_braille_dots_26: number
export const KEY_braille_dots_267: number
export const KEY_braille_dots_2678: number
export const KEY_braille_dots_268: number
export const KEY_braille_dots_27: number
export const KEY_braille_dots_278: number
export const KEY_braille_dots_28: number
export const KEY_braille_dots_3: number
export const KEY_braille_dots_34: number
export const KEY_braille_dots_345: number
export const KEY_braille_dots_3456: number
export const KEY_braille_dots_34567: number
export const KEY_braille_dots_345678: number
export const KEY_braille_dots_34568: number
export const KEY_braille_dots_3457: number
export const KEY_braille_dots_34578: number
export const KEY_braille_dots_3458: number
export const KEY_braille_dots_346: number
export const KEY_braille_dots_3467: number
export const KEY_braille_dots_34678: number
export const KEY_braille_dots_3468: number
export const KEY_braille_dots_347: number
export const KEY_braille_dots_3478: number
export const KEY_braille_dots_348: number
export const KEY_braille_dots_35: number
export const KEY_braille_dots_356: number
export const KEY_braille_dots_3567: number
export const KEY_braille_dots_35678: number
export const KEY_braille_dots_3568: number
export const KEY_braille_dots_357: number
export const KEY_braille_dots_3578: number
export const KEY_braille_dots_358: number
export const KEY_braille_dots_36: number
export const KEY_braille_dots_367: number
export const KEY_braille_dots_3678: number
export const KEY_braille_dots_368: number
export const KEY_braille_dots_37: number
export const KEY_braille_dots_378: number
export const KEY_braille_dots_38: number
export const KEY_braille_dots_4: number
export const KEY_braille_dots_45: number
export const KEY_braille_dots_456: number
export const KEY_braille_dots_4567: number
export const KEY_braille_dots_45678: number
export const KEY_braille_dots_4568: number
export const KEY_braille_dots_457: number
export const KEY_braille_dots_4578: number
export const KEY_braille_dots_458: number
export const KEY_braille_dots_46: number
export const KEY_braille_dots_467: number
export const KEY_braille_dots_4678: number
export const KEY_braille_dots_468: number
export const KEY_braille_dots_47: number
export const KEY_braille_dots_478: number
export const KEY_braille_dots_48: number
export const KEY_braille_dots_5: number
export const KEY_braille_dots_56: number
export const KEY_braille_dots_567: number
export const KEY_braille_dots_5678: number
export const KEY_braille_dots_568: number
export const KEY_braille_dots_57: number
export const KEY_braille_dots_578: number
export const KEY_braille_dots_58: number
export const KEY_braille_dots_6: number
export const KEY_braille_dots_67: number
export const KEY_braille_dots_678: number
export const KEY_braille_dots_68: number
export const KEY_braille_dots_7: number
export const KEY_braille_dots_78: number
export const KEY_braille_dots_8: number
export const KEY_breve: number
export const KEY_brokenbar: number
export const KEY_c: number
export const KEY_c_h: number
export const KEY_cabovedot: number
export const KEY_cacute: number
export const KEY_careof: number
export const KEY_caret: number
export const KEY_caron: number
export const KEY_ccaron: number
export const KEY_ccedilla: number
export const KEY_ccircumflex: number
export const KEY_cedilla: number
export const KEY_cent: number
export const KEY_ch: number
export const KEY_checkerboard: number
export const KEY_checkmark: number
export const KEY_circle: number
export const KEY_club: number
export const KEY_colon: number
export const KEY_comma: number
export const KEY_containsas: number
export const KEY_copyright: number
export const KEY_cr: number
export const KEY_crossinglines: number
export const KEY_cuberoot: number
export const KEY_currency: number
export const KEY_cursor: number
export const KEY_d: number
export const KEY_dabovedot: number
export const KEY_dagger: number
export const KEY_dcaron: number
export const KEY_dead_A: number
export const KEY_dead_E: number
export const KEY_dead_I: number
export const KEY_dead_O: number
export const KEY_dead_U: number
export const KEY_dead_a: number
export const KEY_dead_abovecomma: number
export const KEY_dead_abovedot: number
export const KEY_dead_abovereversedcomma: number
export const KEY_dead_abovering: number
export const KEY_dead_aboveverticalline: number
export const KEY_dead_acute: number
export const KEY_dead_belowbreve: number
export const KEY_dead_belowcircumflex: number
export const KEY_dead_belowcomma: number
export const KEY_dead_belowdiaeresis: number
export const KEY_dead_belowdot: number
export const KEY_dead_belowmacron: number
export const KEY_dead_belowring: number
export const KEY_dead_belowtilde: number
export const KEY_dead_belowverticalline: number
export const KEY_dead_breve: number
export const KEY_dead_capital_schwa: number
export const KEY_dead_caron: number
export const KEY_dead_cedilla: number
export const KEY_dead_circumflex: number
export const KEY_dead_currency: number
export const KEY_dead_dasia: number
export const KEY_dead_diaeresis: number
export const KEY_dead_doubleacute: number
export const KEY_dead_doublegrave: number
export const KEY_dead_e: number
export const KEY_dead_grave: number
export const KEY_dead_greek: number
export const KEY_dead_hook: number
export const KEY_dead_horn: number
export const KEY_dead_i: number
export const KEY_dead_invertedbreve: number
export const KEY_dead_iota: number
export const KEY_dead_longsolidusoverlay: number
export const KEY_dead_lowline: number
export const KEY_dead_macron: number
export const KEY_dead_o: number
export const KEY_dead_ogonek: number
export const KEY_dead_perispomeni: number
export const KEY_dead_psili: number
export const KEY_dead_semivoiced_sound: number
export const KEY_dead_small_schwa: number
export const KEY_dead_stroke: number
export const KEY_dead_tilde: number
export const KEY_dead_u: number
export const KEY_dead_voiced_sound: number
export const KEY_decimalpoint: number
export const KEY_degree: number
export const KEY_diaeresis: number
export const KEY_diamond: number
export const KEY_digitspace: number
export const KEY_dintegral: number
export const KEY_division: number
export const KEY_dollar: number
export const KEY_doubbaselinedot: number
export const KEY_doubleacute: number
export const KEY_doubledagger: number
export const KEY_doublelowquotemark: number
export const KEY_downarrow: number
export const KEY_downcaret: number
export const KEY_downshoe: number
export const KEY_downstile: number
export const KEY_downtack: number
export const KEY_dstroke: number
export const KEY_e: number
export const KEY_eabovedot: number
export const KEY_eacute: number
export const KEY_ebelowdot: number
export const KEY_ecaron: number
export const KEY_ecircumflex: number
export const KEY_ecircumflexacute: number
export const KEY_ecircumflexbelowdot: number
export const KEY_ecircumflexgrave: number
export const KEY_ecircumflexhook: number
export const KEY_ecircumflextilde: number
export const KEY_ediaeresis: number
export const KEY_egrave: number
export const KEY_ehook: number
export const KEY_eightsubscript: number
export const KEY_eightsuperior: number
export const KEY_elementof: number
export const KEY_ellipsis: number
export const KEY_em3space: number
export const KEY_em4space: number
export const KEY_emacron: number
export const KEY_emdash: number
export const KEY_emfilledcircle: number
export const KEY_emfilledrect: number
export const KEY_emopencircle: number
export const KEY_emopenrectangle: number
export const KEY_emptyset: number
export const KEY_emspace: number
export const KEY_endash: number
export const KEY_enfilledcircbullet: number
export const KEY_enfilledsqbullet: number
export const KEY_eng: number
export const KEY_enopencircbullet: number
export const KEY_enopensquarebullet: number
export const KEY_enspace: number
export const KEY_eogonek: number
export const KEY_equal: number
export const KEY_eth: number
export const KEY_etilde: number
export const KEY_exclam: number
export const KEY_exclamdown: number
export const KEY_ezh: number
export const KEY_f: number
export const KEY_fabovedot: number
export const KEY_femalesymbol: number
export const KEY_ff: number
export const KEY_figdash: number
export const KEY_filledlefttribullet: number
export const KEY_filledrectbullet: number
export const KEY_filledrighttribullet: number
export const KEY_filledtribulletdown: number
export const KEY_filledtribulletup: number
export const KEY_fiveeighths: number
export const KEY_fivesixths: number
export const KEY_fivesubscript: number
export const KEY_fivesuperior: number
export const KEY_fourfifths: number
export const KEY_foursubscript: number
export const KEY_foursuperior: number
export const KEY_fourthroot: number
export const KEY_function: number
export const KEY_g: number
export const KEY_gabovedot: number
export const KEY_gbreve: number
export const KEY_gcaron: number
export const KEY_gcedilla: number
export const KEY_gcircumflex: number
export const KEY_grave: number
export const KEY_greater: number
export const KEY_greaterthanequal: number
export const KEY_guillemotleft: number
export const KEY_guillemotright: number
export const KEY_h: number
export const KEY_hairspace: number
export const KEY_hcircumflex: number
export const KEY_heart: number
export const KEY_hebrew_aleph: number
export const KEY_hebrew_ayin: number
export const KEY_hebrew_bet: number
export const KEY_hebrew_beth: number
export const KEY_hebrew_chet: number
export const KEY_hebrew_dalet: number
export const KEY_hebrew_daleth: number
export const KEY_hebrew_doublelowline: number
export const KEY_hebrew_finalkaph: number
export const KEY_hebrew_finalmem: number
export const KEY_hebrew_finalnun: number
export const KEY_hebrew_finalpe: number
export const KEY_hebrew_finalzade: number
export const KEY_hebrew_finalzadi: number
export const KEY_hebrew_gimel: number
export const KEY_hebrew_gimmel: number
export const KEY_hebrew_he: number
export const KEY_hebrew_het: number
export const KEY_hebrew_kaph: number
export const KEY_hebrew_kuf: number
export const KEY_hebrew_lamed: number
export const KEY_hebrew_mem: number
export const KEY_hebrew_nun: number
export const KEY_hebrew_pe: number
export const KEY_hebrew_qoph: number
export const KEY_hebrew_resh: number
export const KEY_hebrew_samech: number
export const KEY_hebrew_samekh: number
export const KEY_hebrew_shin: number
export const KEY_hebrew_taf: number
export const KEY_hebrew_taw: number
export const KEY_hebrew_tet: number
export const KEY_hebrew_teth: number
export const KEY_hebrew_waw: number
export const KEY_hebrew_yod: number
export const KEY_hebrew_zade: number
export const KEY_hebrew_zadi: number
export const KEY_hebrew_zain: number
export const KEY_hebrew_zayin: number
export const KEY_hexagram: number
export const KEY_horizconnector: number
export const KEY_horizlinescan1: number
export const KEY_horizlinescan3: number
export const KEY_horizlinescan5: number
export const KEY_horizlinescan7: number
export const KEY_horizlinescan9: number
export const KEY_hstroke: number
export const KEY_ht: number
export const KEY_hyphen: number
export const KEY_i: number
export const KEY_iTouch: number
export const KEY_iacute: number
export const KEY_ibelowdot: number
export const KEY_ibreve: number
export const KEY_icircumflex: number
export const KEY_identical: number
export const KEY_idiaeresis: number
export const KEY_idotless: number
export const KEY_ifonlyif: number
export const KEY_igrave: number
export const KEY_ihook: number
export const KEY_imacron: number
export const KEY_implies: number
export const KEY_includedin: number
export const KEY_includes: number
export const KEY_infinity: number
export const KEY_integral: number
export const KEY_intersection: number
export const KEY_iogonek: number
export const KEY_itilde: number
export const KEY_j: number
export const KEY_jcircumflex: number
export const KEY_jot: number
export const KEY_k: number
export const KEY_kana_A: number
export const KEY_kana_CHI: number
export const KEY_kana_E: number
export const KEY_kana_FU: number
export const KEY_kana_HA: number
export const KEY_kana_HE: number
export const KEY_kana_HI: number
export const KEY_kana_HO: number
export const KEY_kana_HU: number
export const KEY_kana_I: number
export const KEY_kana_KA: number
export const KEY_kana_KE: number
export const KEY_kana_KI: number
export const KEY_kana_KO: number
export const KEY_kana_KU: number
export const KEY_kana_MA: number
export const KEY_kana_ME: number
export const KEY_kana_MI: number
export const KEY_kana_MO: number
export const KEY_kana_MU: number
export const KEY_kana_N: number
export const KEY_kana_NA: number
export const KEY_kana_NE: number
export const KEY_kana_NI: number
export const KEY_kana_NO: number
export const KEY_kana_NU: number
export const KEY_kana_O: number
export const KEY_kana_RA: number
export const KEY_kana_RE: number
export const KEY_kana_RI: number
export const KEY_kana_RO: number
export const KEY_kana_RU: number
export const KEY_kana_SA: number
export const KEY_kana_SE: number
export const KEY_kana_SHI: number
export const KEY_kana_SO: number
export const KEY_kana_SU: number
export const KEY_kana_TA: number
export const KEY_kana_TE: number
export const KEY_kana_TI: number
export const KEY_kana_TO: number
export const KEY_kana_TSU: number
export const KEY_kana_TU: number
export const KEY_kana_U: number
export const KEY_kana_WA: number
export const KEY_kana_WO: number
export const KEY_kana_YA: number
export const KEY_kana_YO: number
export const KEY_kana_YU: number
export const KEY_kana_a: number
export const KEY_kana_closingbracket: number
export const KEY_kana_comma: number
export const KEY_kana_conjunctive: number
export const KEY_kana_e: number
export const KEY_kana_fullstop: number
export const KEY_kana_i: number
export const KEY_kana_middledot: number
export const KEY_kana_o: number
export const KEY_kana_openingbracket: number
export const KEY_kana_switch: number
export const KEY_kana_tsu: number
export const KEY_kana_tu: number
export const KEY_kana_u: number
export const KEY_kana_ya: number
export const KEY_kana_yo: number
export const KEY_kana_yu: number
export const KEY_kappa: number
export const KEY_kcedilla: number
export const KEY_kra: number
export const KEY_l: number
export const KEY_lacute: number
export const KEY_latincross: number
export const KEY_lbelowdot: number
export const KEY_lcaron: number
export const KEY_lcedilla: number
export const KEY_leftanglebracket: number
export const KEY_leftarrow: number
export const KEY_leftcaret: number
export const KEY_leftdoublequotemark: number
export const KEY_leftmiddlecurlybrace: number
export const KEY_leftopentriangle: number
export const KEY_leftpointer: number
export const KEY_leftradical: number
export const KEY_leftshoe: number
export const KEY_leftsinglequotemark: number
export const KEY_leftt: number
export const KEY_lefttack: number
export const KEY_less: number
export const KEY_lessthanequal: number
export const KEY_lf: number
export const KEY_logicaland: number
export const KEY_logicalor: number
export const KEY_lowleftcorner: number
export const KEY_lowrightcorner: number
export const KEY_lstroke: number
export const KEY_m: number
export const KEY_mabovedot: number
export const KEY_macron: number
export const KEY_malesymbol: number
export const KEY_maltesecross: number
export const KEY_marker: number
export const KEY_masculine: number
export const KEY_minus: number
export const KEY_minutes: number
export const KEY_mu: number
export const KEY_multiply: number
export const KEY_musicalflat: number
export const KEY_musicalsharp: number
export const KEY_n: number
export const KEY_nabla: number
export const KEY_nacute: number
export const KEY_ncaron: number
export const KEY_ncedilla: number
export const KEY_ninesubscript: number
export const KEY_ninesuperior: number
export const KEY_nl: number
export const KEY_nobreakspace: number
export const KEY_notapproxeq: number
export const KEY_notelementof: number
export const KEY_notequal: number
export const KEY_notidentical: number
export const KEY_notsign: number
export const KEY_ntilde: number
export const KEY_numbersign: number
export const KEY_numerosign: number
export const KEY_o: number
export const KEY_oacute: number
export const KEY_obarred: number
export const KEY_obelowdot: number
export const KEY_ocaron: number
export const KEY_ocircumflex: number
export const KEY_ocircumflexacute: number
export const KEY_ocircumflexbelowdot: number
export const KEY_ocircumflexgrave: number
export const KEY_ocircumflexhook: number
export const KEY_ocircumflextilde: number
export const KEY_odiaeresis: number
export const KEY_odoubleacute: number
export const KEY_oe: number
export const KEY_ogonek: number
export const KEY_ograve: number
export const KEY_ohook: number
export const KEY_ohorn: number
export const KEY_ohornacute: number
export const KEY_ohornbelowdot: number
export const KEY_ohorngrave: number
export const KEY_ohornhook: number
export const KEY_ohorntilde: number
export const KEY_omacron: number
export const KEY_oneeighth: number
export const KEY_onefifth: number
export const KEY_onehalf: number
export const KEY_onequarter: number
export const KEY_onesixth: number
export const KEY_onesubscript: number
export const KEY_onesuperior: number
export const KEY_onethird: number
export const KEY_ooblique: number
export const KEY_openrectbullet: number
export const KEY_openstar: number
export const KEY_opentribulletdown: number
export const KEY_opentribulletup: number
export const KEY_ordfeminine: number
export const KEY_oslash: number
export const KEY_otilde: number
export const KEY_overbar: number
export const KEY_overline: number
export const KEY_p: number
export const KEY_pabovedot: number
export const KEY_paragraph: number
export const KEY_parenleft: number
export const KEY_parenright: number
export const KEY_partdifferential: number
export const KEY_partialderivative: number
export const KEY_percent: number
export const KEY_period: number
export const KEY_periodcentered: number
export const KEY_permille: number
export const KEY_phonographcopyright: number
export const KEY_plus: number
export const KEY_plusminus: number
export const KEY_prescription: number
export const KEY_prolongedsound: number
export const KEY_punctspace: number
export const KEY_q: number
export const KEY_quad: number
export const KEY_question: number
export const KEY_questiondown: number
export const KEY_quotedbl: number
export const KEY_quoteleft: number
export const KEY_quoteright: number
export const KEY_r: number
export const KEY_racute: number
export const KEY_radical: number
export const KEY_rcaron: number
export const KEY_rcedilla: number
export const KEY_registered: number
export const KEY_rightanglebracket: number
export const KEY_rightarrow: number
export const KEY_rightcaret: number
export const KEY_rightdoublequotemark: number
export const KEY_rightmiddlecurlybrace: number
export const KEY_rightmiddlesummation: number
export const KEY_rightopentriangle: number
export const KEY_rightpointer: number
export const KEY_rightshoe: number
export const KEY_rightsinglequotemark: number
export const KEY_rightt: number
export const KEY_righttack: number
export const KEY_s: number
export const KEY_sabovedot: number
export const KEY_sacute: number
export const KEY_scaron: number
export const KEY_scedilla: number
export const KEY_schwa: number
export const KEY_scircumflex: number
export const KEY_script_switch: number
export const KEY_seconds: number
export const KEY_section: number
export const KEY_semicolon: number
export const KEY_semivoicedsound: number
export const KEY_seveneighths: number
export const KEY_sevensubscript: number
export const KEY_sevensuperior: number
export const KEY_signaturemark: number
export const KEY_signifblank: number
export const KEY_similarequal: number
export const KEY_singlelowquotemark: number
export const KEY_sixsubscript: number
export const KEY_sixsuperior: number
export const KEY_slash: number
export const KEY_soliddiamond: number
export const KEY_space: number
export const KEY_squareroot: number
export const KEY_ssharp: number
export const KEY_sterling: number
export const KEY_stricteq: number
export const KEY_t: number
export const KEY_tabovedot: number
export const KEY_tcaron: number
export const KEY_tcedilla: number
export const KEY_telephone: number
export const KEY_telephonerecorder: number
export const KEY_therefore: number
export const KEY_thinspace: number
export const KEY_thorn: number
export const KEY_threeeighths: number
export const KEY_threefifths: number
export const KEY_threequarters: number
export const KEY_threesubscript: number
export const KEY_threesuperior: number
export const KEY_tintegral: number
export const KEY_topintegral: number
export const KEY_topleftparens: number
export const KEY_topleftradical: number
export const KEY_topleftsqbracket: number
export const KEY_topleftsummation: number
export const KEY_toprightparens: number
export const KEY_toprightsqbracket: number
export const KEY_toprightsummation: number
export const KEY_topt: number
export const KEY_topvertsummationconnector: number
export const KEY_trademark: number
export const KEY_trademarkincircle: number
export const KEY_tslash: number
export const KEY_twofifths: number
export const KEY_twosubscript: number
export const KEY_twosuperior: number
export const KEY_twothirds: number
export const KEY_u: number
export const KEY_uacute: number
export const KEY_ubelowdot: number
export const KEY_ubreve: number
export const KEY_ucircumflex: number
export const KEY_udiaeresis: number
export const KEY_udoubleacute: number
export const KEY_ugrave: number
export const KEY_uhook: number
export const KEY_uhorn: number
export const KEY_uhornacute: number
export const KEY_uhornbelowdot: number
export const KEY_uhorngrave: number
export const KEY_uhornhook: number
export const KEY_uhorntilde: number
export const KEY_umacron: number
export const KEY_underbar: number
export const KEY_underscore: number
export const KEY_union: number
export const KEY_uogonek: number
export const KEY_uparrow: number
export const KEY_upcaret: number
export const KEY_upleftcorner: number
export const KEY_uprightcorner: number
export const KEY_upshoe: number
export const KEY_upstile: number
export const KEY_uptack: number
export const KEY_uring: number
export const KEY_utilde: number
export const KEY_v: number
export const KEY_variation: number
export const KEY_vertbar: number
export const KEY_vertconnector: number
export const KEY_voicedsound: number
export const KEY_vt: number
export const KEY_w: number
export const KEY_wacute: number
export const KEY_wcircumflex: number
export const KEY_wdiaeresis: number
export const KEY_wgrave: number
export const KEY_x: number
export const KEY_xabovedot: number
export const KEY_y: number
export const KEY_yacute: number
export const KEY_ybelowdot: number
export const KEY_ycircumflex: number
export const KEY_ydiaeresis: number
export const KEY_yen: number
export const KEY_ygrave: number
export const KEY_yhook: number
export const KEY_ytilde: number
export const KEY_z: number
export const KEY_zabovedot: number
export const KEY_zacute: number
export const KEY_zcaron: number
export const KEY_zerosubscript: number
export const KEY_zerosuperior: number
export const KEY_zstroke: number
export const NO_FPU: number
export const PATH_RELATIVE: number
export const PRIORITY_REDRAW: number
export const STAGE_TYPE: string
export const VIRTUAL_INPUT_DEVICE_MAX_TOUCH_SLOTS: number
export const WINDOWING_EGL: string
export const WINDOWING_GLX: string
export const WINDOWING_X11: string
export function actor_box_alloc(): ActorBox
export function base_init(): void
export function cairo_clear(cr: cairo.Context): void
export function cairo_set_source_color(cr: cairo.Context, color: Color): void
export function color_from_hls(hue: number, luminance: number, saturation: number): /* color */ Color
export function color_from_pixel(pixel: number): /* color */ Color
export function color_from_string(str: string): [ /* returnType */ boolean, /* color */ Color ]
export function color_get_static(color: StaticColor): Color
export function container_class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
export function container_class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
export function disable_accessibility(): void
export function do_event(event: Event): void
export function event_add_filter(stage: Stage | null, func: EventFilterFunc): number
export function event_get(): Event
export function event_remove_filter(id: number): void
export function events_pending(): boolean
export function feature_available(feature: FeatureFlags): boolean
export function feature_get_all(): FeatureFlags
export function get_accessibility_enabled(): boolean
export function get_current_event(): Event
export function get_current_event_time(): number
export function get_default_backend(): Backend
export function get_default_frame_rate(): number
export function get_default_text_direction(): TextDirection
export function get_font_map(): Pango.FontMap
export function get_script_id(gobject: GObject.Object): string
export function image_error_quark(): GLib.Quark
export function init(argv?: string[] | null): [ /* returnType */ InitError, /* argv */ string[] | null ]
export function init_error_quark(): GLib.Quark
export function init_with_args(argv?: string[] | null, parameter_string?: string | null, entries?: GLib.OptionEntry[] | null, translation_domain?: string | null): [ /* returnType */ InitError, /* argv */ string[] | null ]
export function keysym_to_unicode(keyval: number): number
export function script_error_quark(): GLib.Quark
export function set_custom_backend_func(func?: object | null): void
export function threads_add_idle(priority: number, func: GLib.SourceFunc): number
export function threads_add_repaint_func(func: GLib.SourceFunc): number
export function threads_add_repaint_func_full(flags: RepaintFlags, func: GLib.SourceFunc): number
export function threads_add_timeout(priority: number, interval: number, func: GLib.SourceFunc): number
export function threads_remove_repaint_func(handle_id: number): void
export function unicode_to_keysym(wc: number): number
export function units_from_cm(cm: number): /* units */ Units
export function units_from_em(em: number): /* units */ Units
export function units_from_em_for_font(font_name: string | null, em: number): /* units */ Units
export function units_from_mm(mm: number): /* units */ Units
export function units_from_pixels(px: number): /* units */ Units
export function units_from_pt(pt: number): /* units */ Units
export function units_from_string(str: string): [ /* returnType */ boolean, /* units */ Units ]
export function value_dup_paint_node(value: any): PaintNode
export function value_get_color(value: any): Color
export function value_get_paint_node(value: any): PaintNode
export function value_get_shader_float(value: any): number[]
export function value_get_shader_int(value: any): number[]
export function value_get_shader_matrix(value: any): number[]
export function value_get_units(value: any): Units
export function value_set_color(value: any, color: Color): void
export function value_set_paint_node(value: any, node?: PaintNode | null): void
export function value_set_shader_float(value: any, floats: number[]): void
export function value_set_shader_int(value: any, ints: number[]): void
export function value_set_shader_matrix(value: any, matrix: number[]): void
export function value_set_units(value: any, units: Units): void
export function value_take_paint_node(value: any, node?: PaintNode | null): void
export interface ActorCreateChildFunc {
    (item: GObject.Object): Actor
}
export interface BindingActionFunc {
    (gobject: GObject.Object, action_name: string, key_val: number, modifiers: ModifierType): boolean
}
export interface Callback {
    (actor: Actor): void
}
export interface EventFilterFunc {
    (event: Event): boolean
}
export interface PathCallback {
    (node: PathNode): void
}
export interface ProgressFunc {
    (a: any, b: any, progress: number, retval: any): boolean
}
export interface ScriptConnectFunc {
    (script: Script, object: GObject.Object, signal_name: string, handler_name: string, connect_object: GObject.Object, flags: GObject.ConnectFlags): void
}
export interface TimelineProgressFunc {
    (timeline: Timeline, elapsed: number, total: number): number
}
export class Animatable {
    /* Methods of Clutter.Animatable */
    find_property(property_name: string): GObject.ParamSpec
    get_actor(): Actor
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Virtual methods of Clutter.Animatable */
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_actor(): Actor
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    static name: string
}
export class Container {
    /* Methods of Clutter.Container */
    add_actor(actor: Actor): void
    child_get_property(child: Actor, property: string, value: any): void
    child_notify(child: Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Actor, property: string, value: any): void
    create_child_meta(actor: Actor): void
    destroy_child_meta(actor: Actor): void
    find_child_by_name(child_name: string): Actor
    get_child_meta(actor: Actor): ChildMeta
    get_children(): Actor[]
    lower_child(actor: Actor, sibling?: Actor | null): void
    raise_child(actor: Actor, sibling?: Actor | null): void
    remove_actor(actor: Actor): void
    sort_depth_order(): void
    /* Virtual methods of Clutter.Container */
    vfunc_actor_added(actor: Actor): void
    vfunc_actor_removed(actor: Actor): void
    vfunc_add(actor: Actor): void
    vfunc_child_notify(child: Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Actor): void
    vfunc_destroy_child_meta(actor: Actor): void
    vfunc_get_child_meta(actor: Actor): ChildMeta
    vfunc_lower(actor: Actor, sibling?: Actor | null): void
    vfunc_raise(actor: Actor, sibling?: Actor | null): void
    vfunc_remove(actor: Actor): void
    vfunc_sort_depth_order(): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Container, actor: Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Container, actor: Actor) => void)): number
    emit(sigName: "actor-added", actor: Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Container, actor: Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Container, actor: Actor) => void)): number
    emit(sigName: "actor-removed", actor: Actor): void
    connect(sigName: "child-notify", callback: (($obj: Container, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Container, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Actor, pspec: GObject.ParamSpec): void
    static name: string
    /* Static methods and pseudo-constructors */
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
}
export class Content {
    /* Methods of Clutter.Content */
    get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    invalidate(): void
    invalidate_size(): void
    /* Virtual methods of Clutter.Content */
    vfunc_attached(actor: Actor): void
    vfunc_detached(actor: Actor): void
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    vfunc_invalidate(): void
    vfunc_invalidate_size(): void
    vfunc_paint_content(actor: Actor, node: PaintNode, paint_context: PaintContext): void
    /* Signals of Clutter.Content */
    connect(sigName: "attached", callback: (($obj: Content, actor: Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: Content, actor: Actor) => void)): number
    emit(sigName: "attached", actor: Actor): void
    connect(sigName: "detached", callback: (($obj: Content, actor: Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: Content, actor: Actor) => void)): number
    emit(sigName: "detached", actor: Actor): void
    static name: string
}
export class Scriptable {
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Scriptable */
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    static name: string
}
export interface Action_ConstructProps extends ActorMeta_ConstructProps {
}
export class Action {
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.Action */
    parent_instance: ActorMeta
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actor", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Action_ConstructProps)
    _init (config?: Action_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Actor_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    actions?: Action
    background_color?: Color
    child_transform?: Graphene.Matrix
    clip_rect?: Graphene.Rect
    clip_to_allocation?: boolean
    constraints?: Constraint
    content?: Content
    content_gravity?: ContentGravity
    content_repeat?: ContentRepeat
    effect?: Effect
    fixed_position_set?: boolean
    fixed_x?: number
    fixed_y?: number
    height?: number
    layout_manager?: LayoutManager
    magnification_filter?: ScalingFilter
    margin_bottom?: number
    margin_left?: number
    margin_right?: number
    margin_top?: number
    min_height?: number
    min_height_set?: boolean
    min_width?: number
    min_width_set?: boolean
    minification_filter?: ScalingFilter
    name?: string
    natural_height?: number
    natural_height_set?: boolean
    natural_width?: number
    natural_width_set?: boolean
    offscreen_redirect?: OffscreenRedirect
    opacity?: number
    pivot_point?: Graphene.Point
    pivot_point_z?: number
    position?: Graphene.Point
    reactive?: boolean
    request_mode?: RequestMode
    rotation_angle_x?: number
    rotation_angle_y?: number
    rotation_angle_z?: number
    scale_x?: number
    scale_y?: number
    scale_z?: number
    show_on_set_parent?: boolean
    size?: Graphene.Size
    text_direction?: TextDirection
    transform?: Graphene.Matrix
    translation_x?: number
    translation_y?: number
    translation_z?: number
    visible?: boolean
    width?: number
    x?: number
    x_align?: ActorAlign
    x_expand?: boolean
    y?: number
    y_align?: ActorAlign
    y_expand?: boolean
    z_position?: number
}
export class Actor {
    /* Properties of Clutter.Actor */
    actions: Action
    readonly allocation: ActorBox
    background_color: Color
    readonly background_color_set: boolean
    child_transform: Graphene.Matrix
    readonly child_transform_set: boolean
    clip_rect: Graphene.Rect
    clip_to_allocation: boolean
    constraints: Constraint
    content: Content
    readonly content_box: ActorBox
    content_gravity: ContentGravity
    content_repeat: ContentRepeat
    effect: Effect
    readonly first_child: Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Actor
    layout_manager: LayoutManager
    magnification_filter: ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: OffscreenRedirect
    opacity: number
    pivot_point: Graphene.Point
    pivot_point_z: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Graphene.Size
    text_direction: TextDirection
    transform: Graphene.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: ActorAlign
    x_expand: boolean
    y: number
    y_align: ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Actor */
    add_action(action: Action): void
    add_action_with_name(name: string, action: Action): void
    add_child(child: Actor): void
    add_constraint(constraint: Constraint): void
    add_constraint_with_name(name: string, constraint: Constraint): void
    add_effect(effect: Effect): void
    add_effect_with_name(name: string, effect: Effect): void
    add_transition(name: string, transition: Transition): void
    allocate(box: ActorBox): void
    allocate_align_fill(box: ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    apply_transform_to_point(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bind_model(model: Gio.ListModel | null, create_child_func: ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Actor): boolean
    continue_paint(paint_context: PaintContext): void
    continue_pick(pick_context: PickContext): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Event, capture: boolean): boolean
    get_abs_allocation_vertices(): /* verts */ Graphene.Point3D[]
    get_accessible(): Atk.Object
    get_action(name: string): Action
    get_actions(): Action[]
    get_allocation_box(): /* box */ ActorBox
    get_background_color(): /* color */ Color
    get_child_at_index(index_: number): Actor
    get_child_transform(): /* transform */ Graphene.Matrix
    get_children(): Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Constraint
    get_constraints(): Constraint[]
    get_content(): Content
    get_content_box(): /* box */ ActorBox
    get_content_gravity(): ContentGravity
    get_content_repeat(): ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ ScalingFilter | null, /* mag_filter */ ScalingFilter | null ]
    get_default_paint_volume(): PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): AnimationMode
    get_effect(name: string): Effect
    get_effects(): Effect[]
    get_first_child(): Actor
    get_fixed_position(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    get_fixed_position_set(): boolean
    get_flags(): ActorFlags
    get_height(): number
    get_last_child(): Actor
    get_layout_manager(): LayoutManager
    get_margin(): /* margin */ Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Actor
    get_offscreen_redirect(): OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Actor
    get_reactive(): boolean
    get_request_mode(): RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_z(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Stage
    get_text_direction(): TextDirection
    get_transform(): /* transform */ Graphene.Matrix
    get_transformed_extents(): /* rect */ Graphene.Rect
    get_transformed_paint_volume(relative_to_ancestor: Actor): PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): ActorAlign
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
    insert_child_above(child: Actor, sibling?: Actor | null): void
    insert_child_at_index(child: Actor, index_: number): void
    insert_child_below(child: Actor, sibling?: Actor | null): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Orientation): boolean
    paint(paint_context: PaintContext): void
    peek_stage_views(): StageView[]
    pick(pick_context: PickContext): void
    pick_box(pick_context: PickContext, box: ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Actor): void
    remove_clip(): void
    remove_constraint(constraint: Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Actor, new_child: Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: ActorBox): void
    set_background_color(color?: Color | null): void
    set_child_above_sibling(child: Actor, sibling?: Actor | null): void
    set_child_at_index(child: Actor, index_: number): void
    set_child_below_sibling(child: Actor, sibling?: Actor | null): void
    set_child_transform(transform?: Graphene.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Content | null): void
    set_content_gravity(gravity: ContentGravity): void
    set_content_repeat(repeat: ContentRepeat): void
    set_content_scaling_filters(min_filter: ScalingFilter, mag_filter: ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: LayoutManager | null): void
    set_margin(margin: Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: RequestMode): void
    set_rotation_angle(axis: RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: TextDirection): void
    set_transform(transform?: Graphene.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: ActorFlags): void
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
    get_actor(): Actor
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Actor): void
    child_get_property(child: Actor, property: string, value: any): void
    child_notify(child: Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Actor, property: string, value: any): void
    create_child_meta(actor: Actor): void
    destroy_child_meta(actor: Actor): void
    find_child_by_name(child_name: string): Actor
    get_child_meta(actor: Actor): ChildMeta
    lower_child(actor: Actor, sibling?: Actor | null): void
    raise_child(actor: Actor, sibling?: Actor | null): void
    remove_actor(actor: Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: ActorBox): void
    vfunc_apply_transform(matrix: Graphene.Matrix): void
    vfunc_button_press_event(event: ButtonEvent): boolean
    vfunc_button_release_event(event: ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: CrossingEvent): boolean
    vfunc_event(event: Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: KeyEvent): boolean
    vfunc_key_release_event(event: KeyEvent): boolean
    vfunc_leave_event(event: CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: MotionEvent): boolean
    vfunc_paint(paint_context: PaintContext): void
    vfunc_paint_node(root: PaintNode): void
    vfunc_parent_set(old_parent: Actor): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_actor(): Actor
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Actor): void
    vfunc_actor_removed(actor: Actor): void
    vfunc_add(actor: Actor): void
    vfunc_child_notify(child: Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Actor): void
    vfunc_destroy_child_meta(actor: Actor): void
    vfunc_get_child_meta(actor: Actor): ChildMeta
    vfunc_lower(actor: Actor, sibling?: Actor | null): void
    vfunc_raise(actor: Actor, sibling?: Actor | null): void
    vfunc_remove(actor: Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: Actor, event: ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Actor, event: ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Actor, event: ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Actor, event: ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Actor, event: Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Actor, event: Event) => boolean)): number
    emit(sigName: "captured-event", event: Event): void
    connect(sigName: "destroy", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Actor) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Actor, event: CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Actor, event: CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Actor, event: Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Actor, event: Event) => boolean)): number
    emit(sigName: "event", event: Event): void
    connect(sigName: "hide", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Actor) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Actor) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Actor) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Actor, event: KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Actor, event: KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Actor, event: KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Actor, event: KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Actor, event: CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Actor, event: CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Actor, event: MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Actor, event: MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: MotionEvent): void
    connect(sigName: "parent-set", callback: (($obj: Actor, old_parent?: Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Actor, old_parent?: Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Actor | null): void
    connect(sigName: "pick", callback: (($obj: Actor, pick_context: PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Actor, pick_context: PickContext) => void)): number
    emit(sigName: "pick", pick_context: PickContext): void
    connect(sigName: "queue-relayout", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Actor) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Actor) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "resource-scale-changed", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: Actor) => void)): number
    emit(sigName: "resource-scale-changed"): void
    connect(sigName: "scroll-event", callback: (($obj: Actor, event: ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Actor, event: ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "show", callback: (($obj: Actor) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "stage-views-changed", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: Actor) => void)): number
    emit(sigName: "stage-views-changed"): void
    connect(sigName: "touch-event", callback: (($obj: Actor, event: Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Actor, event: Event) => boolean)): number
    emit(sigName: "touch-event", event: Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Actor, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Actor, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Actor) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Actor) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Actor, actor: Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Actor, actor: Actor) => void)): number
    emit(sigName: "actor-added", actor: Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Actor, actor: Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Actor, actor: Actor) => void)): number
    emit(sigName: "actor-removed", actor: Actor): void
    connect(sigName: "child-notify", callback: (($obj: Actor, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Actor, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actions", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Actor_ConstructProps)
    _init (config?: Actor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Actor
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface ActorMeta_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    enabled?: boolean
    name?: string
}
export class ActorMeta {
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ActorMeta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActorMeta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actor", callback: (($obj: ActorMeta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: ActorMeta, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: ActorMeta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: ActorMeta, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ActorMeta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ActorMeta, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ActorMeta_ConstructProps)
    _init (config?: ActorMeta_ConstructProps): void
    static $gtype: GObject.Type
}
export class ActorNode {
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
    static new(actor: Actor, opacity: number): ActorNode
    constructor(actor: Actor, opacity: number)
    /* Static methods and pseudo-constructors */
    static new(actor: Actor, opacity: number): ActorNode
}
export interface AlignConstraint_ConstructProps extends Constraint_ConstructProps {
    align_axis?: AlignAxis
    factor?: number
    pivot_point?: Graphene.Point
    source?: Actor
}
export class AlignConstraint {
    /* Properties of Clutter.AlignConstraint */
    align_axis: AlignAxis
    factor: number
    pivot_point: Graphene.Point
    source: Actor
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.AlignConstraint */
    get_align_axis(): AlignAxis
    get_factor(): number
    get_pivot_point(): /* pivot_point */ Graphene.Point
    get_source(): Actor
    set_align_axis(axis: AlignAxis): void
    set_factor(factor: number): void
    set_pivot_point(pivot_point: Graphene.Point): void
    set_source(source?: Actor | null): void
    /* Methods of Clutter.Constraint */
    update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.Constraint */
    vfunc_update_allocation(actor: Actor, allocation: ActorBox): void
    vfunc_update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::align-axis", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align-axis", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::factor", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::factor", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AlignConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AlignConstraint_ConstructProps)
    _init (config?: AlignConstraint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Actor | null, axis: AlignAxis, factor: number): AlignConstraint
    static $gtype: GObject.Type
}
export interface Backend_ConstructProps extends GObject.Object_ConstructProps {
}
export class Backend {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Backend */
    get_default_seat(): Seat
    get_font_options(): cairo.FontOptions
    get_input_method(): InputMethod
    get_resolution(): number
    set_font_options(options: cairo.FontOptions): void
    set_input_method(method: InputMethod): void
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
    /* Signals of Clutter.Backend */
    connect(sigName: "font-changed", callback: (($obj: Backend) => void)): number
    connect_after(sigName: "font-changed", callback: (($obj: Backend) => void)): number
    emit(sigName: "font-changed"): void
    connect(sigName: "resolution-changed", callback: (($obj: Backend) => void)): number
    connect_after(sigName: "resolution-changed", callback: (($obj: Backend) => void)): number
    emit(sigName: "resolution-changed"): void
    connect(sigName: "settings-changed", callback: (($obj: Backend) => void)): number
    connect_after(sigName: "settings-changed", callback: (($obj: Backend) => void)): number
    emit(sigName: "settings-changed"): void
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
    static $gtype: GObject.Type
}
export interface BinLayout_ConstructProps extends LayoutManager_ConstructProps {
    x_align?: BinAlignment
    y_align?: BinAlignment
}
export class BinLayout {
    /* Properties of Clutter.BinLayout */
    x_align: BinAlignment
    y_align: BinAlignment
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.LayoutManager */
    allocate(container: Container, allocation: ActorBox): void
    child_get_property(container: Container, actor: Actor, property_name: string, value: any): void
    child_set_property(container: Container, actor: Actor, property_name: string, value: any): void
    find_child_property(name: string): GObject.ParamSpec
    get_child_meta(container: Container, actor: Actor): LayoutMeta
    get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    layout_changed(): void
    list_child_properties(): GObject.ParamSpec[]
    set_container(container?: Container | null): void
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
    /* Virtual methods of Clutter.LayoutManager */
    vfunc_allocate(container: Container, allocation: ActorBox): void
    vfunc_get_child_meta_type(): GObject.Type
    vfunc_get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    vfunc_get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    vfunc_layout_changed(): void
    vfunc_set_container(container?: Container | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.LayoutManager */
    connect(sigName: "layout-changed", callback: (($obj: BinLayout) => void)): number
    connect_after(sigName: "layout-changed", callback: (($obj: BinLayout) => void)): number
    emit(sigName: "layout-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BinLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BinLayout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::x-align", callback: (($obj: BinLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: BinLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: BinLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: BinLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BinLayout_ConstructProps)
    _init (config?: BinLayout_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(x_align: BinAlignment, y_align: BinAlignment): BinLayout
    static $gtype: GObject.Type
}
export interface BindConstraint_ConstructProps extends Constraint_ConstructProps {
    coordinate?: BindCoordinate
    offset?: number
    source?: Actor
}
export class BindConstraint {
    /* Properties of Clutter.BindConstraint */
    coordinate: BindCoordinate
    offset: number
    source: Actor
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.BindConstraint */
    get_coordinate(): BindCoordinate
    get_offset(): number
    get_source(): Actor
    set_coordinate(coordinate: BindCoordinate): void
    set_offset(offset: number): void
    set_source(source?: Actor | null): void
    /* Methods of Clutter.Constraint */
    update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.Constraint */
    vfunc_update_allocation(actor: Actor, allocation: ActorBox): void
    vfunc_update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::coordinate", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::coordinate", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BindConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BindConstraint_ConstructProps)
    _init (config?: BindConstraint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Actor | null, coordinate: BindCoordinate, offset: number): BindConstraint
    static $gtype: GObject.Type
}
export interface BindingPool_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
}
export class BindingPool {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.BindingPool */
    activate(key_val: number, modifiers: ModifierType, gobject: GObject.Object): boolean
    block_action(action_name: string): void
    find_action(key_val: number, modifiers: ModifierType): string
    install_action(action_name: string, key_val: number, modifiers: ModifierType, callback: BindingActionFunc): void
    install_closure(action_name: string, key_val: number, modifiers: ModifierType, closure: Function): void
    override_action(key_val: number, modifiers: ModifierType, callback: GObject.Callback): void
    override_closure(key_val: number, modifiers: ModifierType, closure: Function): void
    remove_action(key_val: number, modifiers: ModifierType): void
    unblock_action(action_name: string): void
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
    connect(sigName: "notify", callback: (($obj: BindingPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BindingPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BindingPool_ConstructProps)
    _init (config?: BindingPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): BindingPool
    static find(name: string): BindingPool
    static get_for_class(klass?: object | null): BindingPool
    static $gtype: GObject.Type
}
export class BlitNode {
    /* Methods of Clutter.BlitNode */
    add_blit_rectangle(src_x: number, src_y: number, dst_x: number, dst_y: number, width: number, height: number): void
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
    static new(src: Cogl.Framebuffer): BlitNode
    constructor(src: Cogl.Framebuffer)
    /* Static methods and pseudo-constructors */
    static new(src: Cogl.Framebuffer): BlitNode
}
export interface BlurEffect_ConstructProps extends OffscreenEffect_ConstructProps {
}
export class BlurEffect {
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.OffscreenEffect */
    create_texture(width: number, height: number): Cogl.Handle
    get_pipeline(): Cogl.Pipeline | null
    get_target_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    get_texture(): Cogl.Handle
    paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Methods of Clutter.Effect */
    queue_repaint(): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.OffscreenEffect */
    vfunc_create_texture(width: number, height: number): Cogl.Handle
    vfunc_paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Virtual methods of Clutter.Effect */
    vfunc_modify_paint_volume(volume: PaintVolume): boolean
    vfunc_paint(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_paint_node(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_post_paint(node: PaintNode, paint_context: PaintContext): void
    vfunc_pre_paint(node: PaintNode, paint_context: PaintContext): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlurEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlurEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actor", callback: (($obj: BlurEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: BlurEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: BlurEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: BlurEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BlurEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BlurEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BlurEffect_ConstructProps)
    _init (config?: BlurEffect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BlurEffect
    static $gtype: GObject.Type
}
export class BlurNode {
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
    static new(width: number, height: number, sigma: number): BlurNode
    constructor(width: number, height: number, sigma: number)
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number, sigma: number): BlurNode
    static new(projection: Graphene.Matrix, viewport: cairo.Rectangle, width: number, height: number, opacity: number): BlurNode
}
export interface BoxLayout_ConstructProps extends LayoutManager_ConstructProps {
    homogeneous?: boolean
    orientation?: Orientation
    pack_start?: boolean
    spacing?: number
}
export class BoxLayout {
    /* Properties of Clutter.BoxLayout */
    homogeneous: boolean
    orientation: Orientation
    pack_start: boolean
    spacing: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.BoxLayout */
    get_homogeneous(): boolean
    get_orientation(): Orientation
    get_pack_start(): boolean
    get_spacing(): number
    set_homogeneous(homogeneous: boolean): void
    set_orientation(orientation: Orientation): void
    set_pack_start(pack_start: boolean): void
    set_spacing(spacing: number): void
    /* Methods of Clutter.LayoutManager */
    allocate(container: Container, allocation: ActorBox): void
    child_get_property(container: Container, actor: Actor, property_name: string, value: any): void
    child_set_property(container: Container, actor: Actor, property_name: string, value: any): void
    find_child_property(name: string): GObject.ParamSpec
    get_child_meta(container: Container, actor: Actor): LayoutMeta
    get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    layout_changed(): void
    list_child_properties(): GObject.ParamSpec[]
    set_container(container?: Container | null): void
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
    /* Virtual methods of Clutter.LayoutManager */
    vfunc_allocate(container: Container, allocation: ActorBox): void
    vfunc_get_child_meta_type(): GObject.Type
    vfunc_get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    vfunc_get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    vfunc_layout_changed(): void
    vfunc_set_container(container?: Container | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.LayoutManager */
    connect(sigName: "layout-changed", callback: (($obj: BoxLayout) => void)): number
    connect_after(sigName: "layout-changed", callback: (($obj: BoxLayout) => void)): number
    emit(sigName: "layout-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BoxLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BoxLayout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::homogeneous", callback: (($obj: BoxLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: BoxLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: BoxLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: BoxLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pack-start", callback: (($obj: BoxLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pack-start", callback: (($obj: BoxLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: BoxLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: BoxLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BoxLayout_ConstructProps)
    _init (config?: BoxLayout_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BoxLayout
    static $gtype: GObject.Type
}
export interface BrightnessContrastEffect_ConstructProps extends OffscreenEffect_ConstructProps {
    brightness?: Color
    contrast?: Color
}
export class BrightnessContrastEffect {
    /* Properties of Clutter.BrightnessContrastEffect */
    brightness: Color
    contrast: Color
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.BrightnessContrastEffect */
    get_brightness(): [ /* red */ number | null, /* green */ number | null, /* blue */ number | null ]
    get_contrast(): [ /* red */ number | null, /* green */ number | null, /* blue */ number | null ]
    set_brightness(brightness: number): void
    set_brightness_full(red: number, green: number, blue: number): void
    set_contrast(contrast: number): void
    set_contrast_full(red: number, green: number, blue: number): void
    /* Methods of Clutter.OffscreenEffect */
    create_texture(width: number, height: number): Cogl.Handle
    get_pipeline(): Cogl.Pipeline | null
    get_target_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    get_texture(): Cogl.Handle
    paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Methods of Clutter.Effect */
    queue_repaint(): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.OffscreenEffect */
    vfunc_create_texture(width: number, height: number): Cogl.Handle
    vfunc_paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Virtual methods of Clutter.Effect */
    vfunc_modify_paint_volume(volume: PaintVolume): boolean
    vfunc_paint(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_paint_node(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_post_paint(node: PaintNode, paint_context: PaintContext): void
    vfunc_pre_paint(node: PaintNode, paint_context: PaintContext): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::brightness", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::brightness", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contrast", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contrast", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BrightnessContrastEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BrightnessContrastEffect_ConstructProps)
    _init (config?: BrightnessContrastEffect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BrightnessContrastEffect
    static $gtype: GObject.Type
}
export interface Canvas_ConstructProps extends GObject.Object_ConstructProps {
    height?: number
    scale_factor?: number
    width?: number
}
export class Canvas {
    /* Properties of Clutter.Canvas */
    height: number
    scale_factor: number
    width: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Canvas */
    get_scale_factor(): number
    set_scale_factor(scale: number): void
    set_size(width: number, height: number): boolean
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
    /* Virtual methods of Clutter.Canvas */
    vfunc_draw(cr: cairo.Context, width: number, height: number): boolean
    vfunc_attached(actor: Actor): void
    vfunc_detached(actor: Actor): void
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    vfunc_invalidate(): void
    vfunc_invalidate_size(): void
    vfunc_paint_content(actor: Actor, node: PaintNode, paint_context: PaintContext): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Canvas */
    connect(sigName: "draw", callback: (($obj: Canvas, cr: cairo.Context, width: number, height: number) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: Canvas, cr: cairo.Context, width: number, height: number) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context, width: number, height: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Content */
    connect(sigName: "attached", callback: (($obj: Canvas, actor: Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: Canvas, actor: Actor) => void)): number
    emit(sigName: "attached", actor: Actor): void
    connect(sigName: "detached", callback: (($obj: Canvas, actor: Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: Canvas, actor: Actor) => void)): number
    emit(sigName: "detached", actor: Actor): void
    connect(sigName: "notify::height", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Canvas_ConstructProps)
    _init (config?: Canvas_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ChildMeta_ConstructProps extends GObject.Object_ConstructProps {
    actor?: Actor
    container?: Container
}
export class ChildMeta {
    /* Fields of Clutter.ChildMeta */
    container: Container
    actor: Actor
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.ChildMeta */
    get_actor(): Actor
    get_container(): Container
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
    connect(sigName: "notify", callback: (($obj: ChildMeta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChildMeta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChildMeta_ConstructProps)
    _init (config?: ChildMeta_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClickAction_ConstructProps extends Action_ConstructProps {
    long_press_duration?: number
    long_press_threshold?: number
}
export class ClickAction {
    /* Properties of Clutter.ClickAction */
    readonly held: boolean
    long_press_duration: number
    long_press_threshold: number
    readonly pressed: boolean
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ClickAction */
    parent_instance: Action
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.ClickAction */
    get_button(): number
    get_coords(): [ /* press_x */ number, /* press_y */ number ]
    get_state(): ModifierType
    release(): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.ClickAction */
    vfunc_clicked(actor: Actor): void
    vfunc_long_press(actor: Actor, state: LongPressState): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.ClickAction */
    connect(sigName: "clicked", callback: (($obj: ClickAction, actor: Actor) => void)): number
    connect_after(sigName: "clicked", callback: (($obj: ClickAction, actor: Actor) => void)): number
    emit(sigName: "clicked", actor: Actor): void
    connect(sigName: "long-press", callback: (($obj: ClickAction, actor: Actor, state: LongPressState) => boolean)): number
    connect_after(sigName: "long-press", callback: (($obj: ClickAction, actor: Actor, state: LongPressState) => boolean)): number
    emit(sigName: "long-press", actor: Actor, state: LongPressState): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::held", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::held", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::long-press-duration", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::long-press-duration", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::long-press-threshold", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::long-press-threshold", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pressed", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pressed", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ClickAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClickAction_ConstructProps)
    _init (config?: ClickAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClickAction
    static $gtype: GObject.Type
}
export class ClipNode {
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
    static new(): ClipNode
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ClipNode
}
export interface Clone_ConstructProps extends Actor_ConstructProps {
    source?: Actor
}
export class Clone {
    /* Properties of Clutter.Clone */
    source: Actor
    /* Properties of Clutter.Actor */
    actions: Action
    readonly allocation: ActorBox
    background_color: Color
    readonly background_color_set: boolean
    child_transform: Graphene.Matrix
    readonly child_transform_set: boolean
    clip_rect: Graphene.Rect
    clip_to_allocation: boolean
    constraints: Constraint
    content: Content
    readonly content_box: ActorBox
    content_gravity: ContentGravity
    content_repeat: ContentRepeat
    effect: Effect
    readonly first_child: Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Actor
    layout_manager: LayoutManager
    magnification_filter: ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: OffscreenRedirect
    opacity: number
    pivot_point: Graphene.Point
    pivot_point_z: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Graphene.Size
    text_direction: TextDirection
    transform: Graphene.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: ActorAlign
    x_expand: boolean
    y: number
    y_align: ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Clone */
    get_source(): Actor
    set_source(source?: Actor | null): void
    /* Methods of Clutter.Actor */
    add_action(action: Action): void
    add_action_with_name(name: string, action: Action): void
    add_child(child: Actor): void
    add_constraint(constraint: Constraint): void
    add_constraint_with_name(name: string, constraint: Constraint): void
    add_effect(effect: Effect): void
    add_effect_with_name(name: string, effect: Effect): void
    add_transition(name: string, transition: Transition): void
    allocate(box: ActorBox): void
    allocate_align_fill(box: ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    apply_transform_to_point(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bind_model(model: Gio.ListModel | null, create_child_func: ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Actor): boolean
    continue_paint(paint_context: PaintContext): void
    continue_pick(pick_context: PickContext): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Event, capture: boolean): boolean
    get_abs_allocation_vertices(): /* verts */ Graphene.Point3D[]
    get_accessible(): Atk.Object
    get_action(name: string): Action
    get_actions(): Action[]
    get_allocation_box(): /* box */ ActorBox
    get_background_color(): /* color */ Color
    get_child_at_index(index_: number): Actor
    get_child_transform(): /* transform */ Graphene.Matrix
    get_children(): Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Constraint
    get_constraints(): Constraint[]
    get_content(): Content
    get_content_box(): /* box */ ActorBox
    get_content_gravity(): ContentGravity
    get_content_repeat(): ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ ScalingFilter | null, /* mag_filter */ ScalingFilter | null ]
    get_default_paint_volume(): PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): AnimationMode
    get_effect(name: string): Effect
    get_effects(): Effect[]
    get_first_child(): Actor
    get_fixed_position(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    get_fixed_position_set(): boolean
    get_flags(): ActorFlags
    get_height(): number
    get_last_child(): Actor
    get_layout_manager(): LayoutManager
    get_margin(): /* margin */ Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Actor
    get_offscreen_redirect(): OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Actor
    get_reactive(): boolean
    get_request_mode(): RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_z(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Stage
    get_text_direction(): TextDirection
    get_transform(): /* transform */ Graphene.Matrix
    get_transformed_extents(): /* rect */ Graphene.Rect
    get_transformed_paint_volume(relative_to_ancestor: Actor): PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): ActorAlign
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
    insert_child_above(child: Actor, sibling?: Actor | null): void
    insert_child_at_index(child: Actor, index_: number): void
    insert_child_below(child: Actor, sibling?: Actor | null): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Orientation): boolean
    paint(paint_context: PaintContext): void
    peek_stage_views(): StageView[]
    pick(pick_context: PickContext): void
    pick_box(pick_context: PickContext, box: ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Actor): void
    remove_clip(): void
    remove_constraint(constraint: Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Actor, new_child: Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: ActorBox): void
    set_background_color(color?: Color | null): void
    set_child_above_sibling(child: Actor, sibling?: Actor | null): void
    set_child_at_index(child: Actor, index_: number): void
    set_child_below_sibling(child: Actor, sibling?: Actor | null): void
    set_child_transform(transform?: Graphene.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Content | null): void
    set_content_gravity(gravity: ContentGravity): void
    set_content_repeat(repeat: ContentRepeat): void
    set_content_scaling_filters(min_filter: ScalingFilter, mag_filter: ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: LayoutManager | null): void
    set_margin(margin: Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: RequestMode): void
    set_rotation_angle(axis: RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: TextDirection): void
    set_transform(transform?: Graphene.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: ActorFlags): void
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
    get_actor(): Actor
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Actor): void
    child_get_property(child: Actor, property: string, value: any): void
    child_notify(child: Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Actor, property: string, value: any): void
    create_child_meta(actor: Actor): void
    destroy_child_meta(actor: Actor): void
    find_child_by_name(child_name: string): Actor
    get_child_meta(actor: Actor): ChildMeta
    lower_child(actor: Actor, sibling?: Actor | null): void
    raise_child(actor: Actor, sibling?: Actor | null): void
    remove_actor(actor: Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: ActorBox): void
    vfunc_apply_transform(matrix: Graphene.Matrix): void
    vfunc_button_press_event(event: ButtonEvent): boolean
    vfunc_button_release_event(event: ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: CrossingEvent): boolean
    vfunc_event(event: Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: KeyEvent): boolean
    vfunc_key_release_event(event: KeyEvent): boolean
    vfunc_leave_event(event: CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: MotionEvent): boolean
    vfunc_paint(paint_context: PaintContext): void
    vfunc_paint_node(root: PaintNode): void
    vfunc_parent_set(old_parent: Actor): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_actor(): Actor
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Actor): void
    vfunc_actor_removed(actor: Actor): void
    vfunc_add(actor: Actor): void
    vfunc_child_notify(child: Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Actor): void
    vfunc_destroy_child_meta(actor: Actor): void
    vfunc_get_child_meta(actor: Actor): ChildMeta
    vfunc_lower(actor: Actor, sibling?: Actor | null): void
    vfunc_raise(actor: Actor, sibling?: Actor | null): void
    vfunc_remove(actor: Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: Clone, event: ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Clone, event: ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Clone, event: ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Clone, event: ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Clone, event: Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Clone, event: Event) => boolean)): number
    emit(sigName: "captured-event", event: Event): void
    connect(sigName: "destroy", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Clone) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Clone, event: CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Clone, event: CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Clone, event: Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Clone, event: Event) => boolean)): number
    emit(sigName: "event", event: Event): void
    connect(sigName: "hide", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Clone) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Clone) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Clone) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Clone, event: KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Clone, event: KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Clone, event: KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Clone, event: KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Clone, event: CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Clone, event: CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Clone, event: MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Clone, event: MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: MotionEvent): void
    connect(sigName: "parent-set", callback: (($obj: Clone, old_parent?: Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Clone, old_parent?: Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Actor | null): void
    connect(sigName: "pick", callback: (($obj: Clone, pick_context: PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Clone, pick_context: PickContext) => void)): number
    emit(sigName: "pick", pick_context: PickContext): void
    connect(sigName: "queue-relayout", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Clone) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Clone) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "resource-scale-changed", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: Clone) => void)): number
    emit(sigName: "resource-scale-changed"): void
    connect(sigName: "scroll-event", callback: (($obj: Clone, event: ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Clone, event: ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "show", callback: (($obj: Clone) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "stage-views-changed", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: Clone) => void)): number
    emit(sigName: "stage-views-changed"): void
    connect(sigName: "touch-event", callback: (($obj: Clone, event: Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Clone, event: Event) => boolean)): number
    emit(sigName: "touch-event", event: Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Clone, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Clone, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Clone) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Clone) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Clone, actor: Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Clone, actor: Actor) => void)): number
    emit(sigName: "actor-added", actor: Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Clone, actor: Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Clone, actor: Actor) => void)): number
    emit(sigName: "actor-removed", actor: Actor): void
    connect(sigName: "child-notify", callback: (($obj: Clone, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Clone, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::source", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Clone_ConstructProps)
    _init (config?: Clone_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Actor): Clone
    static new(): Clone
    static $gtype: GObject.Type
}
export class ColorNode {
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
    static new(color?: Color | null): ColorNode
    constructor(color?: Color | null)
    /* Static methods and pseudo-constructors */
    static new(color?: Color | null): ColorNode
    static new(pipeline?: Cogl.Pipeline | null): ColorNode
}
export interface ColorizeEffect_ConstructProps extends OffscreenEffect_ConstructProps {
    tint?: Color
}
export class ColorizeEffect {
    /* Properties of Clutter.ColorizeEffect */
    tint: Color
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.ColorizeEffect */
    get_tint(): /* tint */ Color
    set_tint(tint: Color): void
    /* Methods of Clutter.OffscreenEffect */
    create_texture(width: number, height: number): Cogl.Handle
    get_pipeline(): Cogl.Pipeline | null
    get_target_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    get_texture(): Cogl.Handle
    paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Methods of Clutter.Effect */
    queue_repaint(): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.OffscreenEffect */
    vfunc_create_texture(width: number, height: number): Cogl.Handle
    vfunc_paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Virtual methods of Clutter.Effect */
    vfunc_modify_paint_volume(volume: PaintVolume): boolean
    vfunc_paint(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_paint_node(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_post_paint(node: PaintNode, paint_context: PaintContext): void
    vfunc_pre_paint(node: PaintNode, paint_context: PaintContext): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColorizeEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ColorizeEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::tint", callback: (($obj: ColorizeEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tint", callback: (($obj: ColorizeEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: ColorizeEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: ColorizeEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: ColorizeEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: ColorizeEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ColorizeEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ColorizeEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ColorizeEffect_ConstructProps)
    _init (config?: ColorizeEffect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(tint: Color): ColorizeEffect
    static $gtype: GObject.Type
}
export interface Constraint_ConstructProps extends ActorMeta_ConstructProps {
}
export class Constraint {
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Constraint */
    update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.Constraint */
    vfunc_update_allocation(actor: Actor, allocation: ActorBox): void
    vfunc_update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Constraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Constraint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actor", callback: (($obj: Constraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: Constraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: Constraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Constraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Constraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Constraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Constraint_ConstructProps)
    _init (config?: Constraint_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeformEffect_ConstructProps extends OffscreenEffect_ConstructProps {
    x_tiles?: number
    y_tiles?: number
}
export class DeformEffect {
    /* Properties of Clutter.DeformEffect */
    x_tiles: number
    y_tiles: number
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.DeformEffect */
    get_back_material(): Cogl.Handle
    get_n_tiles(): [ /* x_tiles */ number, /* y_tiles */ number ]
    invalidate(): void
    set_back_material(material?: Cogl.Handle | null): void
    set_n_tiles(x_tiles: number, y_tiles: number): void
    /* Methods of Clutter.OffscreenEffect */
    create_texture(width: number, height: number): Cogl.Handle
    get_pipeline(): Cogl.Pipeline | null
    get_target_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    get_texture(): Cogl.Handle
    paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Methods of Clutter.Effect */
    queue_repaint(): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.DeformEffect */
    vfunc_deform_vertex(width: number, height: number, vertex: Cogl.TextureVertex): void
    /* Virtual methods of Clutter.OffscreenEffect */
    vfunc_create_texture(width: number, height: number): Cogl.Handle
    vfunc_paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Virtual methods of Clutter.Effect */
    vfunc_modify_paint_volume(volume: PaintVolume): boolean
    vfunc_paint(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_paint_node(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_post_paint(node: PaintNode, paint_context: PaintContext): void
    vfunc_pre_paint(node: PaintNode, paint_context: PaintContext): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::x-tiles", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-tiles", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-tiles", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-tiles", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DeformEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeformEffect_ConstructProps)
    _init (config?: DeformEffect_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DesaturateEffect_ConstructProps extends OffscreenEffect_ConstructProps {
    factor?: number
}
export class DesaturateEffect {
    /* Properties of Clutter.DesaturateEffect */
    factor: number
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.DesaturateEffect */
    get_factor(): number
    set_factor(factor: number): void
    /* Methods of Clutter.OffscreenEffect */
    create_texture(width: number, height: number): Cogl.Handle
    get_pipeline(): Cogl.Pipeline | null
    get_target_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    get_texture(): Cogl.Handle
    paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Methods of Clutter.Effect */
    queue_repaint(): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.OffscreenEffect */
    vfunc_create_texture(width: number, height: number): Cogl.Handle
    vfunc_paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Virtual methods of Clutter.Effect */
    vfunc_modify_paint_volume(volume: PaintVolume): boolean
    vfunc_paint(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_paint_node(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_post_paint(node: PaintNode, paint_context: PaintContext): void
    vfunc_pre_paint(node: PaintNode, paint_context: PaintContext): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DesaturateEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DesaturateEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::factor", callback: (($obj: DesaturateEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::factor", callback: (($obj: DesaturateEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: DesaturateEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: DesaturateEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: DesaturateEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: DesaturateEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DesaturateEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DesaturateEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DesaturateEffect_ConstructProps)
    _init (config?: DesaturateEffect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(factor: number): DesaturateEffect
    static $gtype: GObject.Type
}
export interface Effect_ConstructProps extends ActorMeta_ConstructProps {
}
export class Effect {
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Effect */
    queue_repaint(): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.Effect */
    vfunc_modify_paint_volume(volume: PaintVolume): boolean
    vfunc_paint(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_paint_node(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_post_paint(node: PaintNode, paint_context: PaintContext): void
    vfunc_pre_paint(node: PaintNode, paint_context: PaintContext): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actor", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Effect_ConstructProps)
    _init (config?: Effect_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FixedLayout_ConstructProps extends LayoutManager_ConstructProps {
}
export class FixedLayout {
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.LayoutManager */
    allocate(container: Container, allocation: ActorBox): void
    child_get_property(container: Container, actor: Actor, property_name: string, value: any): void
    child_set_property(container: Container, actor: Actor, property_name: string, value: any): void
    find_child_property(name: string): GObject.ParamSpec
    get_child_meta(container: Container, actor: Actor): LayoutMeta
    get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    layout_changed(): void
    list_child_properties(): GObject.ParamSpec[]
    set_container(container?: Container | null): void
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
    /* Virtual methods of Clutter.LayoutManager */
    vfunc_allocate(container: Container, allocation: ActorBox): void
    vfunc_get_child_meta_type(): GObject.Type
    vfunc_get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    vfunc_get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    vfunc_layout_changed(): void
    vfunc_set_container(container?: Container | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.LayoutManager */
    connect(sigName: "layout-changed", callback: (($obj: FixedLayout) => void)): number
    connect_after(sigName: "layout-changed", callback: (($obj: FixedLayout) => void)): number
    emit(sigName: "layout-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FixedLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FixedLayout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FixedLayout_ConstructProps)
    _init (config?: FixedLayout_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FixedLayout
    static $gtype: GObject.Type
}
export interface FlowLayout_ConstructProps extends LayoutManager_ConstructProps {
    column_spacing?: number
    homogeneous?: boolean
    max_column_width?: number
    max_row_height?: number
    min_column_width?: number
    min_row_height?: number
    orientation?: FlowOrientation
    row_spacing?: number
    snap_to_grid?: boolean
}
export class FlowLayout {
    /* Properties of Clutter.FlowLayout */
    column_spacing: number
    homogeneous: boolean
    max_column_width: number
    max_row_height: number
    min_column_width: number
    min_row_height: number
    orientation: FlowOrientation
    row_spacing: number
    snap_to_grid: boolean
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.FlowLayout */
    get_column_spacing(): number
    get_column_width(): [ /* min_width */ number, /* max_width */ number ]
    get_homogeneous(): boolean
    get_orientation(): FlowOrientation
    get_row_height(): [ /* min_height */ number, /* max_height */ number ]
    get_row_spacing(): number
    get_snap_to_grid(): boolean
    set_column_spacing(spacing: number): void
    set_column_width(min_width: number, max_width: number): void
    set_homogeneous(homogeneous: boolean): void
    set_orientation(orientation: FlowOrientation): void
    set_row_height(min_height: number, max_height: number): void
    set_row_spacing(spacing: number): void
    set_snap_to_grid(snap_to_grid: boolean): void
    /* Methods of Clutter.LayoutManager */
    allocate(container: Container, allocation: ActorBox): void
    child_get_property(container: Container, actor: Actor, property_name: string, value: any): void
    child_set_property(container: Container, actor: Actor, property_name: string, value: any): void
    find_child_property(name: string): GObject.ParamSpec
    get_child_meta(container: Container, actor: Actor): LayoutMeta
    get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    layout_changed(): void
    list_child_properties(): GObject.ParamSpec[]
    set_container(container?: Container | null): void
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
    /* Virtual methods of Clutter.LayoutManager */
    vfunc_allocate(container: Container, allocation: ActorBox): void
    vfunc_get_child_meta_type(): GObject.Type
    vfunc_get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    vfunc_get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    vfunc_layout_changed(): void
    vfunc_set_container(container?: Container | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.LayoutManager */
    connect(sigName: "layout-changed", callback: (($obj: FlowLayout) => void)): number
    connect_after(sigName: "layout-changed", callback: (($obj: FlowLayout) => void)): number
    emit(sigName: "layout-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::column-spacing", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-column-width", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-column-width", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-row-height", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-row-height", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-column-width", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-column-width", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-row-height", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-row-height", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-spacing", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::snap-to-grid", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap-to-grid", callback: (($obj: FlowLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FlowLayout_ConstructProps)
    _init (config?: FlowLayout_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(orientation: FlowOrientation): FlowLayout
    static $gtype: GObject.Type
}
export interface FrameClock_ConstructProps extends GObject.Object_ConstructProps {
}
export class FrameClock {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.FrameClock */
    add_timeline(timeline: Timeline): void
    destroy(): void
    get_refresh_rate(): number
    inhibit(): void
    notify_ready(): void
    remove_timeline(timeline: Timeline): void
    schedule_update(): void
    schedule_update_now(): void
    uninhibit(): void
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
    /* Signals of Clutter.FrameClock */
    connect(sigName: "destroy", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FrameClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FrameClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FrameClock_ConstructProps)
    _init (config?: FrameClock_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GestureAction_ConstructProps extends Action_ConstructProps {
    n_touch_points?: number
    threshold_trigger_distance_x?: number
    threshold_trigger_distance_y?: number
    threshold_trigger_edge?: GestureTriggerEdge
}
export class GestureAction {
    /* Properties of Clutter.GestureAction */
    n_touch_points: number
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.GestureAction */
    parent_instance: Action
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.GestureAction */
    cancel(): void
    get_device(point: number): InputDevice
    get_last_event(point: number): Event
    get_motion_coords(point: number): [ /* motion_x */ number | null, /* motion_y */ number | null ]
    get_motion_delta(point: number): [ /* returnType */ number, /* delta_x */ number | null, /* delta_y */ number | null ]
    get_n_current_points(): number
    get_n_touch_points(): number
    get_press_coords(point: number): [ /* press_x */ number | null, /* press_y */ number | null ]
    get_release_coords(point: number): [ /* release_x */ number | null, /* release_y */ number | null ]
    get_sequence(point: number): EventSequence
    get_threshold_trigger_distance(): [ /* x */ number | null, /* y */ number | null ]
    get_threshold_trigger_edge(): GestureTriggerEdge
    get_threshold_trigger_egde(): GestureTriggerEdge
    get_velocity(point: number): [ /* returnType */ number, /* velocity_x */ number | null, /* velocity_y */ number | null ]
    set_n_touch_points(nb_points: number): void
    set_threshold_trigger_distance(x: number, y: number): void
    set_threshold_trigger_edge(edge: GestureTriggerEdge): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.GestureAction */
    vfunc_gesture_begin(actor: Actor): boolean
    vfunc_gesture_cancel(actor: Actor): void
    vfunc_gesture_end(actor: Actor): void
    vfunc_gesture_prepare(actor: Actor): boolean
    vfunc_gesture_progress(actor: Actor): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.GestureAction */
    connect(sigName: "gesture-begin", callback: (($obj: GestureAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-begin", callback: (($obj: GestureAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-begin", actor: Actor): void
    connect(sigName: "gesture-cancel", callback: (($obj: GestureAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-cancel", callback: (($obj: GestureAction, actor: Actor) => void)): number
    emit(sigName: "gesture-cancel", actor: Actor): void
    connect(sigName: "gesture-end", callback: (($obj: GestureAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-end", callback: (($obj: GestureAction, actor: Actor) => void)): number
    emit(sigName: "gesture-end", actor: Actor): void
    connect(sigName: "gesture-progress", callback: (($obj: GestureAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-progress", callback: (($obj: GestureAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-progress", actor: Actor): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GestureAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GestureAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::n-touch-points", callback: (($obj: GestureAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-touch-points", callback: (($obj: GestureAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: GestureAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: GestureAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: GestureAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: GestureAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GestureAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GestureAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GestureAction_ConstructProps)
    _init (config?: GestureAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GestureAction
    static $gtype: GObject.Type
}
export interface GridLayout_ConstructProps extends LayoutManager_ConstructProps {
    column_homogeneous?: boolean
    column_spacing?: number
    orientation?: Orientation
    row_homogeneous?: boolean
    row_spacing?: number
}
export class GridLayout {
    /* Properties of Clutter.GridLayout */
    column_homogeneous: boolean
    column_spacing: number
    orientation: Orientation
    row_homogeneous: boolean
    row_spacing: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.GridLayout */
    attach(child: Actor, left: number, top: number, width: number, height: number): void
    attach_next_to(child: Actor, sibling: Actor | null, side: GridPosition, width: number, height: number): void
    get_child_at(left: number, top: number): Actor
    get_column_homogeneous(): boolean
    get_column_spacing(): number
    get_orientation(): Orientation
    get_row_homogeneous(): boolean
    get_row_spacing(): number
    insert_column(position: number): void
    insert_next_to(sibling: Actor, side: GridPosition): void
    insert_row(position: number): void
    set_column_homogeneous(homogeneous: boolean): void
    set_column_spacing(spacing: number): void
    set_orientation(orientation: Orientation): void
    set_row_homogeneous(homogeneous: boolean): void
    set_row_spacing(spacing: number): void
    /* Methods of Clutter.LayoutManager */
    allocate(container: Container, allocation: ActorBox): void
    child_get_property(container: Container, actor: Actor, property_name: string, value: any): void
    child_set_property(container: Container, actor: Actor, property_name: string, value: any): void
    find_child_property(name: string): GObject.ParamSpec
    get_child_meta(container: Container, actor: Actor): LayoutMeta
    get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    layout_changed(): void
    list_child_properties(): GObject.ParamSpec[]
    set_container(container?: Container | null): void
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
    /* Virtual methods of Clutter.LayoutManager */
    vfunc_allocate(container: Container, allocation: ActorBox): void
    vfunc_get_child_meta_type(): GObject.Type
    vfunc_get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    vfunc_get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    vfunc_layout_changed(): void
    vfunc_set_container(container?: Container | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.LayoutManager */
    connect(sigName: "layout-changed", callback: (($obj: GridLayout) => void)): number
    connect_after(sigName: "layout-changed", callback: (($obj: GridLayout) => void)): number
    emit(sigName: "layout-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::column-spacing", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-homogeneous", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-spacing", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: GridLayout, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GridLayout_ConstructProps)
    _init (config?: GridLayout_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GridLayout
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
export class Image {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Image */
    get_texture(): Cogl.Texture
    set_area(data: Uint8Array, pixel_format: Cogl.PixelFormat, rect: cairo.RectangleInt, row_stride: number): boolean
    set_bytes(data: GLib.Bytes, pixel_format: Cogl.PixelFormat, width: number, height: number, row_stride: number): boolean
    set_data(data: Uint8Array, pixel_format: Cogl.PixelFormat, width: number, height: number, row_stride: number): boolean
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
    /* Virtual methods of Clutter.Image */
    vfunc_attached(actor: Actor): void
    vfunc_detached(actor: Actor): void
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    vfunc_invalidate(): void
    vfunc_invalidate_size(): void
    vfunc_paint_content(actor: Actor, node: PaintNode, paint_context: PaintContext): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Content */
    connect(sigName: "attached", callback: (($obj: Image, actor: Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: Image, actor: Actor) => void)): number
    emit(sigName: "attached", actor: Actor): void
    connect(sigName: "detached", callback: (($obj: Image, actor: Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: Image, actor: Actor) => void)): number
    emit(sigName: "detached", actor: Actor): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InputDevice_ConstructProps extends GObject.Object_ConstructProps {
    backend?: Backend
    device_mode?: InputMode
    device_node?: string
    device_type?: InputDeviceType
    has_cursor?: boolean
    n_buttons?: number
    n_mode_groups?: number
    n_rings?: number
    n_strips?: number
    name?: string
    product_id?: string
    seat?: Seat
    vendor_id?: string
}
export class InputDevice {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.InputDevice */
    get_axis(index_: number): InputAxis
    get_axis_value(axes: number, axis: InputAxis, value: number): boolean
    get_device_mode(): InputMode
    get_device_name(): string
    get_device_node(): string
    get_device_type(): InputDeviceType
    get_grabbed_actor(): Actor
    get_group_n_modes(group: number): number
    get_has_cursor(): boolean
    get_mode_switch_button_group(button: number): number
    get_n_axes(): number
    get_n_buttons(): number
    get_n_mode_groups(): number
    get_n_rings(): number
    get_n_strips(): number
    get_pad_feature_group(feature: InputDevicePadFeature, n_feature: number): number
    get_product_id(): string
    get_seat(): Seat
    get_vendor_id(): string
    grab(actor: Actor): void
    is_grouped(other_device: InputDevice): boolean
    is_mode_switch_button(group: number, button: number): boolean
    sequence_get_grabbed_actor(sequence: EventSequence): Actor
    sequence_grab(sequence: EventSequence, actor: Actor): void
    sequence_ungrab(sequence: EventSequence): void
    ungrab(): void
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
    /* Virtual methods of Clutter.InputDevice */
    vfunc_get_group_n_modes(group: number): number
    vfunc_get_pad_feature_group(feature: InputDevicePadFeature, n_feature: number): number
    vfunc_is_grouped(other_device: InputDevice): boolean
    vfunc_is_mode_switch_button(group: number, button: number): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputDevice_ConstructProps)
    _init (config?: InputDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InputDeviceTool_ConstructProps extends GObject.Object_ConstructProps {
    axes?: InputAxisFlags
    id?: number
    serial?: number
    type?: InputDeviceToolType
}
export class InputDeviceTool {
    /* Fields of Clutter.InputDeviceTool */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.InputDeviceTool */
    get_axes(): InputAxisFlags
    get_id(): number
    get_serial(): number
    get_tool_type(): InputDeviceToolType
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
    connect(sigName: "notify", callback: (($obj: InputDeviceTool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputDeviceTool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputDeviceTool_ConstructProps)
    _init (config?: InputDeviceTool_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InputFocus_ConstructProps extends GObject.Object_ConstructProps {
}
export class InputFocus {
    /* Fields of Clutter.InputFocus */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.InputFocus */
    filter_event(event: Event): boolean
    is_focused(): boolean
    reset(): void
    set_can_show_preedit(can_show_preedit: boolean): void
    set_content_hints(hint: InputContentHintFlags): void
    set_content_purpose(purpose: InputContentPurpose): void
    set_cursor_location(rect: Graphene.Rect): void
    set_input_panel_state(state: InputPanelState): void
    set_surrounding(text: string, cursor: number, anchor: number): void
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
    /* Virtual methods of Clutter.InputFocus */
    vfunc_commit_text(text: string): void
    vfunc_delete_surrounding(offset: number, len: number): void
    vfunc_focus_in(input_method: InputMethod): void
    vfunc_focus_out(): void
    vfunc_request_surrounding(): void
    vfunc_set_preedit_text(preedit: string, cursor: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputFocus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputFocus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputFocus_ConstructProps)
    _init (config?: InputFocus_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InputMethod_ConstructProps extends GObject.Object_ConstructProps {
    can_show_preedit?: boolean
    content_hints?: InputContentHintFlags
    content_purpose?: InputContentPurpose
}
export class InputMethod {
    /* Properties of Clutter.InputMethod */
    can_show_preedit: boolean
    content_hints: InputContentHintFlags
    content_purpose: InputContentPurpose
    /* Fields of Clutter.InputMethod */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.InputMethod */
    commit(text: string): void
    delete_surrounding(offset: number, len: number): void
    focus_in(focus: InputFocus): void
    focus_out(): void
    forward_key(keyval: number, keycode: number, state: number, time_: number, press: boolean): void
    notify_key_event(event: Event, filtered: boolean): void
    request_surrounding(): void
    set_input_panel_state(state: InputPanelState): void
    set_preedit_text(preedit: string | null, cursor: number): void
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
    /* Virtual methods of Clutter.InputMethod */
    vfunc_filter_key_event(key: Event): boolean
    vfunc_focus_in(actor: InputFocus): void
    vfunc_focus_out(): void
    vfunc_reset(): void
    vfunc_set_cursor_location(rect: Graphene.Rect): void
    vfunc_set_surrounding(text: string, cursor: number, anchor: number): void
    vfunc_update_content_hints(hint: InputContentHintFlags): void
    vfunc_update_content_purpose(purpose: InputContentPurpose): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.InputMethod */
    connect(sigName: "commit", callback: (($obj: InputMethod, object: string) => void)): number
    connect_after(sigName: "commit", callback: (($obj: InputMethod, object: string) => void)): number
    emit(sigName: "commit", object: string): void
    connect(sigName: "cursor-location-changed", callback: (($obj: InputMethod, object: Graphene.Rect) => void)): number
    connect_after(sigName: "cursor-location-changed", callback: (($obj: InputMethod, object: Graphene.Rect) => void)): number
    emit(sigName: "cursor-location-changed", object: Graphene.Rect): void
    connect(sigName: "delete-surrounding", callback: (($obj: InputMethod, object: number, p0: number) => void)): number
    connect_after(sigName: "delete-surrounding", callback: (($obj: InputMethod, object: number, p0: number) => void)): number
    emit(sigName: "delete-surrounding", object: number, p0: number): void
    connect(sigName: "input-panel-state", callback: (($obj: InputMethod, object: InputPanelState) => void)): number
    connect_after(sigName: "input-panel-state", callback: (($obj: InputMethod, object: InputPanelState) => void)): number
    emit(sigName: "input-panel-state", object: InputPanelState): void
    connect(sigName: "request-surrounding", callback: (($obj: InputMethod) => void)): number
    connect_after(sigName: "request-surrounding", callback: (($obj: InputMethod) => void)): number
    emit(sigName: "request-surrounding"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputMethod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputMethod, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-show-preedit", callback: (($obj: InputMethod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-show-preedit", callback: (($obj: InputMethod, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-hints", callback: (($obj: InputMethod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-hints", callback: (($obj: InputMethod, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-purpose", callback: (($obj: InputMethod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-purpose", callback: (($obj: InputMethod, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputMethod_ConstructProps)
    _init (config?: InputMethod_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Interval_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    final?: any
    initial?: any
    value_type?: GObject.Type
}
export class Interval {
    /* Properties of Clutter.Interval */
    final: any
    initial: any
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Interval */
    clone(): Interval
    compute(factor: number): any
    compute_value(factor: number): [ /* returnType */ boolean, /* value */ any ]
    get_final_value(): /* value */ any
    get_initial_value(): /* value */ any
    get_value_type(): GObject.Type
    is_valid(): boolean
    peek_final_value(): any
    peek_initial_value(): any
    set_final(value: any): void
    set_initial(value: any): void
    validate(pspec: GObject.ParamSpec): boolean
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
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Interval */
    vfunc_compute_value(factor: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_validate(pspec: GObject.ParamSpec): boolean
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Interval, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Interval, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::final", callback: (($obj: Interval, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: Interval, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::initial", callback: (($obj: Interval, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial", callback: (($obj: Interval, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Interval_ConstructProps)
    _init (config?: Interval_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_values(gtype: GObject.Type, initial?: any, final?: any): Interval
    static $gtype: GObject.Type
}
export interface KeyframeTransition_ConstructProps extends PropertyTransition_ConstructProps {
}
export class KeyframeTransition {
    /* Properties of Clutter.PropertyTransition */
    property_name: string
    /* Properties of Clutter.Transition */
    animatable: Animatable
    interval: Interval
    remove_on_complete: boolean
    /* Properties of Clutter.Timeline */
    actor: Actor
    auto_reverse: boolean
    delay: number
    direction: TimelineDirection
    duration: number
    frame_clock: FrameClock
    progress_mode: AnimationMode
    repeat_count: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.KeyframeTransition */
    clear(): void
    get_key_frame(index_: number): [ /* key */ number | null, /* mode */ AnimationMode | null, /* value */ any ]
    get_n_key_frames(): number
    set_key_frame(index_: number, key: number, mode: AnimationMode, value: any): void
    set_key_frames(key_frames: number[]): void
    set_modes(modes: AnimationMode[]): void
    set_values(values: any): void
    /* Methods of Clutter.PropertyTransition */
    get_property_name(): string
    set_property_name(property_name?: string | null): void
    /* Methods of Clutter.Transition */
    get_animatable(): Animatable
    get_interval(): Interval
    get_remove_on_complete(): boolean
    set_animatable(animatable?: Animatable | null): void
    set_from(value: any): void
    set_interval(interval?: Interval | null): void
    set_remove_on_complete(remove_complete: boolean): void
    set_to(value: any): void
    /* Methods of Clutter.Timeline */
    add_marker(marker_name: string, progress: number): void
    add_marker_at_time(marker_name: string, msecs: number): void
    advance(msecs: number): void
    advance_to_marker(marker_name: string): void
    get_actor(): Actor
    get_auto_reverse(): boolean
    get_cubic_bezier_progress(): [ /* returnType */ boolean, /* c_1 */ Graphene.Point, /* c_2 */ Graphene.Point ]
    get_current_repeat(): number
    get_delay(): number
    get_delta(): number
    get_direction(): TimelineDirection
    get_duration(): number
    get_duration_hint(): number
    get_elapsed_time(): number
    get_progress(): number
    get_progress_mode(): AnimationMode
    get_repeat_count(): number
    get_step_progress(): [ /* returnType */ boolean, /* n_steps */ number, /* step_mode */ StepMode ]
    has_marker(marker_name: string): boolean
    is_playing(): boolean
    list_markers(msecs: number): string[]
    pause(): void
    remove_marker(marker_name: string): void
    rewind(): void
    set_actor(actor?: Actor | null): void
    set_auto_reverse(reverse: boolean): void
    set_cubic_bezier_progress(c_1: Graphene.Point, c_2: Graphene.Point): void
    set_delay(msecs: number): void
    set_direction(direction: TimelineDirection): void
    set_duration(msecs: number): void
    set_frame_clock(frame_clock: FrameClock): void
    set_progress_func(func: TimelineProgressFunc | null): void
    set_progress_mode(mode: AnimationMode): void
    set_repeat_count(count: number): void
    set_step_progress(n_steps: number, step_mode: StepMode): void
    skip(msecs: number): void
    start(): void
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
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Transition */
    vfunc_attached(animatable: Animatable): void
    vfunc_compute_value(animatable: Animatable, interval: Interval, progress: number): void
    vfunc_detached(animatable: Animatable): void
    /* Virtual methods of Clutter.Timeline */
    vfunc_completed(): void
    vfunc_marker_reached(marker_name: string, msecs: number): void
    vfunc_new_frame(msecs: number): void
    vfunc_paused(): void
    vfunc_started(): void
    vfunc_stopped(is_finished: boolean): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Timeline */
    connect(sigName: "completed", callback: (($obj: KeyframeTransition) => void)): number
    connect_after(sigName: "completed", callback: (($obj: KeyframeTransition) => void)): number
    emit(sigName: "completed"): void
    connect(sigName: "marker-reached", callback: (($obj: KeyframeTransition, marker_name: string, msecs: number) => void)): number
    connect_after(sigName: "marker-reached", callback: (($obj: KeyframeTransition, marker_name: string, msecs: number) => void)): number
    emit(sigName: "marker-reached", marker_name: string, msecs: number): void
    connect(sigName: "new-frame", callback: (($obj: KeyframeTransition, msecs: number) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: KeyframeTransition, msecs: number) => void)): number
    emit(sigName: "new-frame", msecs: number): void
    connect(sigName: "paused", callback: (($obj: KeyframeTransition) => void)): number
    connect_after(sigName: "paused", callback: (($obj: KeyframeTransition) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "started", callback: (($obj: KeyframeTransition) => void)): number
    connect_after(sigName: "started", callback: (($obj: KeyframeTransition) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: KeyframeTransition, is_finished: boolean) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: KeyframeTransition, is_finished: boolean) => void)): number
    emit(sigName: "stopped", is_finished: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::property-name", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-name", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::animatable", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::animatable", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interval", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interval", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remove-on-complete", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-on-complete", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-reverse", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-reverse", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delay", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame-clock", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-clock", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-mode", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-mode", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-count", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-count", callback: (($obj: KeyframeTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KeyframeTransition_ConstructProps)
    _init (config?: KeyframeTransition_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(property_name: string): KeyframeTransition
    static new(property_name?: string | null): KeyframeTransition
    static new(duration_ms: number): KeyframeTransition
    static new_for_actor(actor: Actor, property_name?: string | null): KeyframeTransition
    static new_for_actor(actor: Actor, duration_ms: number): KeyframeTransition
    static $gtype: GObject.Type
}
export interface Keymap_ConstructProps extends GObject.Object_ConstructProps {
}
export class Keymap {
    /* Properties of Clutter.Keymap */
    readonly caps_lock_state: boolean
    readonly num_lock_state: boolean
    /* Fields of Clutter.Keymap */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Keymap */
    get_caps_lock_state(): boolean
    get_direction(): Pango.Direction
    get_num_lock_state(): boolean
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
    /* Virtual methods of Clutter.Keymap */
    vfunc_get_direction(): Pango.Direction
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Keymap */
    connect(sigName: "state-changed", callback: (($obj: Keymap) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Keymap) => void)): number
    emit(sigName: "state-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps-lock-state", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-lock-state", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Keymap_ConstructProps)
    _init (config?: Keymap_ConstructProps): void
    static $gtype: GObject.Type
}
export class LayerNode {
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
    static new(projection: Graphene.Matrix, viewport: cairo.Rectangle, width: number, height: number, opacity: number): LayerNode
    constructor(projection: Graphene.Matrix, viewport: cairo.Rectangle, width: number, height: number, opacity: number)
    /* Static methods and pseudo-constructors */
    static new(projection: Graphene.Matrix, viewport: cairo.Rectangle, width: number, height: number, opacity: number): LayerNode
    static new_to_framebuffer(framebuffer: Cogl.Framebuffer, pipeline: Cogl.Pipeline): LayerNode
}
export interface LayoutManager_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class LayoutManager {
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.LayoutManager */
    allocate(container: Container, allocation: ActorBox): void
    child_get_property(container: Container, actor: Actor, property_name: string, value: any): void
    child_set_property(container: Container, actor: Actor, property_name: string, value: any): void
    find_child_property(name: string): GObject.ParamSpec
    get_child_meta(container: Container, actor: Actor): LayoutMeta
    get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    layout_changed(): void
    list_child_properties(): GObject.ParamSpec[]
    set_container(container?: Container | null): void
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
    /* Virtual methods of Clutter.LayoutManager */
    vfunc_allocate(container: Container, allocation: ActorBox): void
    vfunc_get_child_meta_type(): GObject.Type
    vfunc_get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    vfunc_get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    vfunc_layout_changed(): void
    vfunc_set_container(container?: Container | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.LayoutManager */
    connect(sigName: "layout-changed", callback: (($obj: LayoutManager) => void)): number
    connect_after(sigName: "layout-changed", callback: (($obj: LayoutManager) => void)): number
    emit(sigName: "layout-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LayoutManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LayoutManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LayoutManager_ConstructProps)
    _init (config?: LayoutManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LayoutMeta_ConstructProps extends ChildMeta_ConstructProps {
    manager?: LayoutManager
}
export class LayoutMeta {
    /* Fields of Clutter.LayoutMeta */
    manager: LayoutManager
    /* Fields of Clutter.ChildMeta */
    container: Container
    actor: Actor
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.LayoutMeta */
    get_manager(): LayoutManager
    /* Methods of Clutter.ChildMeta */
    get_actor(): Actor
    get_container(): Container
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
    connect(sigName: "notify", callback: (($obj: LayoutMeta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LayoutMeta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LayoutMeta_ConstructProps)
    _init (config?: LayoutMeta_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OffscreenEffect_ConstructProps extends Effect_ConstructProps {
}
export class OffscreenEffect {
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.OffscreenEffect */
    create_texture(width: number, height: number): Cogl.Handle
    get_pipeline(): Cogl.Pipeline | null
    get_target_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    get_texture(): Cogl.Handle
    paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Methods of Clutter.Effect */
    queue_repaint(): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.OffscreenEffect */
    vfunc_create_texture(width: number, height: number): Cogl.Handle
    vfunc_paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Virtual methods of Clutter.Effect */
    vfunc_modify_paint_volume(volume: PaintVolume): boolean
    vfunc_paint(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_paint_node(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_post_paint(node: PaintNode, paint_context: PaintContext): void
    vfunc_pre_paint(node: PaintNode, paint_context: PaintContext): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OffscreenEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OffscreenEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actor", callback: (($obj: OffscreenEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: OffscreenEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: OffscreenEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: OffscreenEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OffscreenEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OffscreenEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OffscreenEffect_ConstructProps)
    _init (config?: OffscreenEffect_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PageTurnEffect_ConstructProps extends DeformEffect_ConstructProps {
    angle?: number
    period?: number
    radius?: number
}
export class PageTurnEffect {
    /* Properties of Clutter.PageTurnEffect */
    angle: number
    period: number
    radius: number
    /* Properties of Clutter.DeformEffect */
    x_tiles: number
    y_tiles: number
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.PageTurnEffect */
    get_angle(): number
    get_period(): number
    get_radius(): number
    set_angle(angle: number): void
    set_period(period: number): void
    set_radius(radius: number): void
    /* Methods of Clutter.DeformEffect */
    get_back_material(): Cogl.Handle
    get_n_tiles(): [ /* x_tiles */ number, /* y_tiles */ number ]
    invalidate(): void
    set_back_material(material?: Cogl.Handle | null): void
    set_n_tiles(x_tiles: number, y_tiles: number): void
    /* Methods of Clutter.OffscreenEffect */
    create_texture(width: number, height: number): Cogl.Handle
    get_pipeline(): Cogl.Pipeline | null
    get_target_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    get_texture(): Cogl.Handle
    paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Methods of Clutter.Effect */
    queue_repaint(): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.DeformEffect */
    vfunc_deform_vertex(width: number, height: number, vertex: Cogl.TextureVertex): void
    /* Virtual methods of Clutter.OffscreenEffect */
    vfunc_create_texture(width: number, height: number): Cogl.Handle
    vfunc_paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Virtual methods of Clutter.Effect */
    vfunc_modify_paint_volume(volume: PaintVolume): boolean
    vfunc_paint(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_paint_node(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_post_paint(node: PaintNode, paint_context: PaintContext): void
    vfunc_pre_paint(node: PaintNode, paint_context: PaintContext): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::angle", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::angle", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::period", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::period", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-tiles", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-tiles", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-tiles", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-tiles", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PageTurnEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PageTurnEffect_ConstructProps)
    _init (config?: PageTurnEffect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(period: number, angle: number, radius: number): PageTurnEffect
    static $gtype: GObject.Type
}
export class PaintNode {
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
}
export interface PanAction_ConstructProps extends GestureAction_ConstructProps {
    acceleration_factor?: number
    deceleration?: number
    interpolate?: boolean
    pan_axis?: PanAxis
}
export class PanAction {
    /* Properties of Clutter.PanAction */
    acceleration_factor: number
    deceleration: number
    interpolate: boolean
    pan_axis: PanAxis
    /* Properties of Clutter.GestureAction */
    n_touch_points: number
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.GestureAction */
    parent_instance: Action
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.PanAction */
    get_acceleration_factor(): number
    get_constrained_motion_delta(point: number): [ /* returnType */ number, /* delta_x */ number | null, /* delta_y */ number | null ]
    get_deceleration(): number
    get_interpolate(): boolean
    get_interpolated_coords(): [ /* interpolated_x */ number | null, /* interpolated_y */ number | null ]
    get_interpolated_delta(): [ /* returnType */ number, /* delta_x */ number | null, /* delta_y */ number | null ]
    get_motion_coords(point: number): [ /* motion_x */ number | null, /* motion_y */ number | null ]
    get_motion_delta(point: number): [ /* returnType */ number, /* delta_x */ number | null, /* delta_y */ number | null ]
    get_pan_axis(): PanAxis
    set_acceleration_factor(factor: number): void
    set_deceleration(rate: number): void
    set_interpolate(should_interpolate: boolean): void
    set_pan_axis(axis: PanAxis): void
    /* Methods of Clutter.GestureAction */
    cancel(): void
    get_device(point: number): InputDevice
    get_last_event(point: number): Event
    get_n_current_points(): number
    get_n_touch_points(): number
    get_press_coords(point: number): [ /* press_x */ number | null, /* press_y */ number | null ]
    get_release_coords(point: number): [ /* release_x */ number | null, /* release_y */ number | null ]
    get_sequence(point: number): EventSequence
    get_threshold_trigger_distance(): [ /* x */ number | null, /* y */ number | null ]
    get_threshold_trigger_edge(): GestureTriggerEdge
    get_threshold_trigger_egde(): GestureTriggerEdge
    get_velocity(point: number): [ /* returnType */ number, /* velocity_x */ number | null, /* velocity_y */ number | null ]
    set_n_touch_points(nb_points: number): void
    set_threshold_trigger_distance(x: number, y: number): void
    set_threshold_trigger_edge(edge: GestureTriggerEdge): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.PanAction */
    vfunc_pan(actor: Actor, is_interpolated: boolean): boolean
    vfunc_pan_stopped(actor: Actor): void
    /* Virtual methods of Clutter.GestureAction */
    vfunc_gesture_begin(actor: Actor): boolean
    vfunc_gesture_cancel(actor: Actor): void
    vfunc_gesture_end(actor: Actor): void
    vfunc_gesture_prepare(actor: Actor): boolean
    vfunc_gesture_progress(actor: Actor): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.PanAction */
    connect(sigName: "pan", callback: (($obj: PanAction, actor: Actor, is_interpolated: boolean) => boolean)): number
    connect_after(sigName: "pan", callback: (($obj: PanAction, actor: Actor, is_interpolated: boolean) => boolean)): number
    emit(sigName: "pan", actor: Actor, is_interpolated: boolean): void
    connect(sigName: "pan-stopped", callback: (($obj: PanAction, actor: Actor) => void)): number
    connect_after(sigName: "pan-stopped", callback: (($obj: PanAction, actor: Actor) => void)): number
    emit(sigName: "pan-stopped", actor: Actor): void
    /* Signals of Clutter.GestureAction */
    connect(sigName: "gesture-begin", callback: (($obj: PanAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-begin", callback: (($obj: PanAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-begin", actor: Actor): void
    connect(sigName: "gesture-cancel", callback: (($obj: PanAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-cancel", callback: (($obj: PanAction, actor: Actor) => void)): number
    emit(sigName: "gesture-cancel", actor: Actor): void
    connect(sigName: "gesture-end", callback: (($obj: PanAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-end", callback: (($obj: PanAction, actor: Actor) => void)): number
    emit(sigName: "gesture-end", actor: Actor): void
    connect(sigName: "gesture-progress", callback: (($obj: PanAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-progress", callback: (($obj: PanAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-progress", actor: Actor): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::acceleration-factor", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acceleration-factor", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deceleration", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deceleration", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interpolate", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpolate", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pan-axis", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pan-axis", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-touch-points", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-touch-points", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PanAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PanAction_ConstructProps)
    _init (config?: PanAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PanAction
    static $gtype: GObject.Type
}
export class ParamSpecColor {
    /* Fields of Clutter.ParamSpecColor */
    default_value: Color
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamSpecUnit {
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export interface Path_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    description?: string
}
export class Path {
    /* Properties of Clutter.Path */
    description: string
    readonly length: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Path */
    add_cairo_path(cpath: cairo.Path): void
    add_close(): void
    add_curve_to(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void
    add_line_to(x: number, y: number): void
    add_move_to(x: number, y: number): void
    add_node(node: PathNode): void
    add_rel_curve_to(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void
    add_rel_line_to(x: number, y: number): void
    add_rel_move_to(x: number, y: number): void
    add_string(str: string): boolean
    clear(): void
    foreach(callback: PathCallback): void
    get_description(): string
    get_length(): number
    get_n_nodes(): number
    get_node(index_: number): /* node */ PathNode
    get_nodes(): PathNode[]
    get_position(progress: number): [ /* returnType */ number, /* position */ Knot ]
    insert_node(index_: number, node: PathNode): void
    remove_node(index_: number): void
    replace_node(index_: number, node: PathNode): void
    set_description(str: string): boolean
    to_cairo_path(cr: cairo.Context): void
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
    connect(sigName: "notify::description", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Path_ConstructProps)
    _init (config?: Path_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Path
    static new_with_description(desc: string): Path
    static $gtype: GObject.Type
}
export interface PathConstraint_ConstructProps extends Constraint_ConstructProps {
    offset?: number
    path?: Path
}
export class PathConstraint {
    /* Properties of Clutter.PathConstraint */
    offset: number
    path: Path
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.PathConstraint */
    get_offset(): number
    get_path(): Path
    set_offset(offset: number): void
    set_path(path?: Path | null): void
    /* Methods of Clutter.Constraint */
    update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.Constraint */
    vfunc_update_allocation(actor: Actor, allocation: ActorBox): void
    vfunc_update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.PathConstraint */
    connect(sigName: "node-reached", callback: (($obj: PathConstraint, actor: Actor, index: number) => void)): number
    connect_after(sigName: "node-reached", callback: (($obj: PathConstraint, actor: Actor, index: number) => void)): number
    emit(sigName: "node-reached", actor: Actor, index: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::offset", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PathConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PathConstraint_ConstructProps)
    _init (config?: PathConstraint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: Path | null, offset: number): PathConstraint
    static $gtype: GObject.Type
}
export class PipelineNode {
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
    static new(pipeline?: Cogl.Pipeline | null): PipelineNode
    constructor(pipeline?: Cogl.Pipeline | null)
    /* Static methods and pseudo-constructors */
    static new(pipeline?: Cogl.Pipeline | null): PipelineNode
}
export interface PropertyTransition_ConstructProps extends Transition_ConstructProps {
    property_name?: string
}
export class PropertyTransition {
    /* Properties of Clutter.PropertyTransition */
    property_name: string
    /* Properties of Clutter.Transition */
    animatable: Animatable
    interval: Interval
    remove_on_complete: boolean
    /* Properties of Clutter.Timeline */
    actor: Actor
    auto_reverse: boolean
    delay: number
    direction: TimelineDirection
    duration: number
    frame_clock: FrameClock
    progress_mode: AnimationMode
    repeat_count: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.PropertyTransition */
    get_property_name(): string
    set_property_name(property_name?: string | null): void
    /* Methods of Clutter.Transition */
    get_animatable(): Animatable
    get_interval(): Interval
    get_remove_on_complete(): boolean
    set_animatable(animatable?: Animatable | null): void
    set_from(value: any): void
    set_interval(interval?: Interval | null): void
    set_remove_on_complete(remove_complete: boolean): void
    set_to(value: any): void
    /* Methods of Clutter.Timeline */
    add_marker(marker_name: string, progress: number): void
    add_marker_at_time(marker_name: string, msecs: number): void
    advance(msecs: number): void
    advance_to_marker(marker_name: string): void
    get_actor(): Actor
    get_auto_reverse(): boolean
    get_cubic_bezier_progress(): [ /* returnType */ boolean, /* c_1 */ Graphene.Point, /* c_2 */ Graphene.Point ]
    get_current_repeat(): number
    get_delay(): number
    get_delta(): number
    get_direction(): TimelineDirection
    get_duration(): number
    get_duration_hint(): number
    get_elapsed_time(): number
    get_progress(): number
    get_progress_mode(): AnimationMode
    get_repeat_count(): number
    get_step_progress(): [ /* returnType */ boolean, /* n_steps */ number, /* step_mode */ StepMode ]
    has_marker(marker_name: string): boolean
    is_playing(): boolean
    list_markers(msecs: number): string[]
    pause(): void
    remove_marker(marker_name: string): void
    rewind(): void
    set_actor(actor?: Actor | null): void
    set_auto_reverse(reverse: boolean): void
    set_cubic_bezier_progress(c_1: Graphene.Point, c_2: Graphene.Point): void
    set_delay(msecs: number): void
    set_direction(direction: TimelineDirection): void
    set_duration(msecs: number): void
    set_frame_clock(frame_clock: FrameClock): void
    set_progress_func(func: TimelineProgressFunc | null): void
    set_progress_mode(mode: AnimationMode): void
    set_repeat_count(count: number): void
    set_step_progress(n_steps: number, step_mode: StepMode): void
    skip(msecs: number): void
    start(): void
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
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Transition */
    vfunc_attached(animatable: Animatable): void
    vfunc_compute_value(animatable: Animatable, interval: Interval, progress: number): void
    vfunc_detached(animatable: Animatable): void
    /* Virtual methods of Clutter.Timeline */
    vfunc_completed(): void
    vfunc_marker_reached(marker_name: string, msecs: number): void
    vfunc_new_frame(msecs: number): void
    vfunc_paused(): void
    vfunc_started(): void
    vfunc_stopped(is_finished: boolean): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Timeline */
    connect(sigName: "completed", callback: (($obj: PropertyTransition) => void)): number
    connect_after(sigName: "completed", callback: (($obj: PropertyTransition) => void)): number
    emit(sigName: "completed"): void
    connect(sigName: "marker-reached", callback: (($obj: PropertyTransition, marker_name: string, msecs: number) => void)): number
    connect_after(sigName: "marker-reached", callback: (($obj: PropertyTransition, marker_name: string, msecs: number) => void)): number
    emit(sigName: "marker-reached", marker_name: string, msecs: number): void
    connect(sigName: "new-frame", callback: (($obj: PropertyTransition, msecs: number) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: PropertyTransition, msecs: number) => void)): number
    emit(sigName: "new-frame", msecs: number): void
    connect(sigName: "paused", callback: (($obj: PropertyTransition) => void)): number
    connect_after(sigName: "paused", callback: (($obj: PropertyTransition) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "started", callback: (($obj: PropertyTransition) => void)): number
    connect_after(sigName: "started", callback: (($obj: PropertyTransition) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: PropertyTransition, is_finished: boolean) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: PropertyTransition, is_finished: boolean) => void)): number
    emit(sigName: "stopped", is_finished: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::property-name", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-name", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::animatable", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::animatable", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interval", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interval", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remove-on-complete", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-on-complete", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-reverse", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-reverse", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delay", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame-clock", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-clock", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-mode", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-mode", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-count", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-count", callback: (($obj: PropertyTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PropertyTransition_ConstructProps)
    _init (config?: PropertyTransition_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(property_name?: string | null): PropertyTransition
    static new(duration_ms: number): PropertyTransition
    static new_for_actor(actor: Actor, property_name?: string | null): PropertyTransition
    static new_for_actor(actor: Actor, duration_ms: number): PropertyTransition
    static $gtype: GObject.Type
}
export class RootNode {
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
    static new(framebuffer: Cogl.Framebuffer, clear_color: Color, clear_flags: Cogl.BufferBit): RootNode
    constructor(framebuffer: Cogl.Framebuffer, clear_color: Color, clear_flags: Cogl.BufferBit)
    /* Static methods and pseudo-constructors */
    static new(framebuffer: Cogl.Framebuffer, clear_color: Color, clear_flags: Cogl.BufferBit): RootNode
}
export interface RotateAction_ConstructProps extends GestureAction_ConstructProps {
}
export class RotateAction {
    /* Properties of Clutter.GestureAction */
    n_touch_points: number
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.GestureAction */
    parent_instance: Action
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.GestureAction */
    cancel(): void
    get_device(point: number): InputDevice
    get_last_event(point: number): Event
    get_motion_coords(point: number): [ /* motion_x */ number | null, /* motion_y */ number | null ]
    get_motion_delta(point: number): [ /* returnType */ number, /* delta_x */ number | null, /* delta_y */ number | null ]
    get_n_current_points(): number
    get_n_touch_points(): number
    get_press_coords(point: number): [ /* press_x */ number | null, /* press_y */ number | null ]
    get_release_coords(point: number): [ /* release_x */ number | null, /* release_y */ number | null ]
    get_sequence(point: number): EventSequence
    get_threshold_trigger_distance(): [ /* x */ number | null, /* y */ number | null ]
    get_threshold_trigger_edge(): GestureTriggerEdge
    get_threshold_trigger_egde(): GestureTriggerEdge
    get_velocity(point: number): [ /* returnType */ number, /* velocity_x */ number | null, /* velocity_y */ number | null ]
    set_n_touch_points(nb_points: number): void
    set_threshold_trigger_distance(x: number, y: number): void
    set_threshold_trigger_edge(edge: GestureTriggerEdge): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.RotateAction */
    vfunc_rotate(actor: Actor, angle: number): boolean
    /* Virtual methods of Clutter.GestureAction */
    vfunc_gesture_begin(actor: Actor): boolean
    vfunc_gesture_cancel(actor: Actor): void
    vfunc_gesture_end(actor: Actor): void
    vfunc_gesture_prepare(actor: Actor): boolean
    vfunc_gesture_progress(actor: Actor): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.RotateAction */
    connect(sigName: "rotate", callback: (($obj: RotateAction, actor: Actor, angle: number) => boolean)): number
    connect_after(sigName: "rotate", callback: (($obj: RotateAction, actor: Actor, angle: number) => boolean)): number
    emit(sigName: "rotate", actor: Actor, angle: number): void
    /* Signals of Clutter.GestureAction */
    connect(sigName: "gesture-begin", callback: (($obj: RotateAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-begin", callback: (($obj: RotateAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-begin", actor: Actor): void
    connect(sigName: "gesture-cancel", callback: (($obj: RotateAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-cancel", callback: (($obj: RotateAction, actor: Actor) => void)): number
    emit(sigName: "gesture-cancel", actor: Actor): void
    connect(sigName: "gesture-end", callback: (($obj: RotateAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-end", callback: (($obj: RotateAction, actor: Actor) => void)): number
    emit(sigName: "gesture-end", actor: Actor): void
    connect(sigName: "gesture-progress", callback: (($obj: RotateAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-progress", callback: (($obj: RotateAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-progress", actor: Actor): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RotateAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RotateAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::n-touch-points", callback: (($obj: RotateAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-touch-points", callback: (($obj: RotateAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: RotateAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: RotateAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: RotateAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: RotateAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: RotateAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RotateAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RotateAction_ConstructProps)
    _init (config?: RotateAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RotateAction
    static $gtype: GObject.Type
}
export interface Script_ConstructProps extends GObject.Object_ConstructProps {
    translation_domain?: string
}
export class Script {
    /* Properties of Clutter.Script */
    readonly filename: string
    readonly filename_set: boolean
    translation_domain: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Script */
    add_search_paths(paths: string[]): void
    connect_signals(user_data?: object | null): void
    connect_signals_full(func: ScriptConnectFunc): void
    ensure_objects(): void
    get_object(name: string): GObject.Object
    get_translation_domain(): string
    get_type_from_name(type_name: string): GObject.Type
    list_objects(): GObject.Object[]
    load_from_data(data: string, length: number): number
    load_from_file(filename: string): number
    load_from_resource(resource_path: string): number
    lookup_filename(filename: string): string
    set_translation_domain(domain?: string | null): void
    unmerge_objects(merge_id: number): void
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
    /* Virtual methods of Clutter.Script */
    vfunc_get_type_from_name(type_name: string): GObject.Type
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Script, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Script, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filename", callback: (($obj: Script, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Script, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filename-set", callback: (($obj: Script, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename-set", callback: (($obj: Script, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-domain", callback: (($obj: Script, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-domain", callback: (($obj: Script, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Script_ConstructProps)
    _init (config?: Script_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Script
    static $gtype: GObject.Type
}
export interface ScrollActor_ConstructProps extends Actor_ConstructProps {
    scroll_mode?: ScrollMode
}
export class ScrollActor {
    /* Properties of Clutter.ScrollActor */
    scroll_mode: ScrollMode
    /* Properties of Clutter.Actor */
    actions: Action
    readonly allocation: ActorBox
    background_color: Color
    readonly background_color_set: boolean
    child_transform: Graphene.Matrix
    readonly child_transform_set: boolean
    clip_rect: Graphene.Rect
    clip_to_allocation: boolean
    constraints: Constraint
    content: Content
    readonly content_box: ActorBox
    content_gravity: ContentGravity
    content_repeat: ContentRepeat
    effect: Effect
    readonly first_child: Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Actor
    layout_manager: LayoutManager
    magnification_filter: ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: OffscreenRedirect
    opacity: number
    pivot_point: Graphene.Point
    pivot_point_z: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Graphene.Size
    text_direction: TextDirection
    transform: Graphene.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: ActorAlign
    x_expand: boolean
    y: number
    y_align: ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.ScrollActor */
    get_scroll_mode(): ScrollMode
    scroll_to_point(point: Graphene.Point): void
    scroll_to_rect(rect: Graphene.Rect): void
    set_scroll_mode(mode: ScrollMode): void
    /* Methods of Clutter.Actor */
    add_action(action: Action): void
    add_action_with_name(name: string, action: Action): void
    add_child(child: Actor): void
    add_constraint(constraint: Constraint): void
    add_constraint_with_name(name: string, constraint: Constraint): void
    add_effect(effect: Effect): void
    add_effect_with_name(name: string, effect: Effect): void
    add_transition(name: string, transition: Transition): void
    allocate(box: ActorBox): void
    allocate_align_fill(box: ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    apply_transform_to_point(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bind_model(model: Gio.ListModel | null, create_child_func: ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Actor): boolean
    continue_paint(paint_context: PaintContext): void
    continue_pick(pick_context: PickContext): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Event, capture: boolean): boolean
    get_abs_allocation_vertices(): /* verts */ Graphene.Point3D[]
    get_accessible(): Atk.Object
    get_action(name: string): Action
    get_actions(): Action[]
    get_allocation_box(): /* box */ ActorBox
    get_background_color(): /* color */ Color
    get_child_at_index(index_: number): Actor
    get_child_transform(): /* transform */ Graphene.Matrix
    get_children(): Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Constraint
    get_constraints(): Constraint[]
    get_content(): Content
    get_content_box(): /* box */ ActorBox
    get_content_gravity(): ContentGravity
    get_content_repeat(): ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ ScalingFilter | null, /* mag_filter */ ScalingFilter | null ]
    get_default_paint_volume(): PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): AnimationMode
    get_effect(name: string): Effect
    get_effects(): Effect[]
    get_first_child(): Actor
    get_fixed_position(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    get_fixed_position_set(): boolean
    get_flags(): ActorFlags
    get_height(): number
    get_last_child(): Actor
    get_layout_manager(): LayoutManager
    get_margin(): /* margin */ Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Actor
    get_offscreen_redirect(): OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Actor
    get_reactive(): boolean
    get_request_mode(): RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_z(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Stage
    get_text_direction(): TextDirection
    get_transform(): /* transform */ Graphene.Matrix
    get_transformed_extents(): /* rect */ Graphene.Rect
    get_transformed_paint_volume(relative_to_ancestor: Actor): PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): ActorAlign
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
    insert_child_above(child: Actor, sibling?: Actor | null): void
    insert_child_at_index(child: Actor, index_: number): void
    insert_child_below(child: Actor, sibling?: Actor | null): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Orientation): boolean
    paint(paint_context: PaintContext): void
    peek_stage_views(): StageView[]
    pick(pick_context: PickContext): void
    pick_box(pick_context: PickContext, box: ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Actor): void
    remove_clip(): void
    remove_constraint(constraint: Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Actor, new_child: Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: ActorBox): void
    set_background_color(color?: Color | null): void
    set_child_above_sibling(child: Actor, sibling?: Actor | null): void
    set_child_at_index(child: Actor, index_: number): void
    set_child_below_sibling(child: Actor, sibling?: Actor | null): void
    set_child_transform(transform?: Graphene.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Content | null): void
    set_content_gravity(gravity: ContentGravity): void
    set_content_repeat(repeat: ContentRepeat): void
    set_content_scaling_filters(min_filter: ScalingFilter, mag_filter: ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: LayoutManager | null): void
    set_margin(margin: Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: RequestMode): void
    set_rotation_angle(axis: RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: TextDirection): void
    set_transform(transform?: Graphene.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: ActorFlags): void
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
    get_actor(): Actor
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Actor): void
    child_get_property(child: Actor, property: string, value: any): void
    child_notify(child: Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Actor, property: string, value: any): void
    create_child_meta(actor: Actor): void
    destroy_child_meta(actor: Actor): void
    find_child_by_name(child_name: string): Actor
    get_child_meta(actor: Actor): ChildMeta
    lower_child(actor: Actor, sibling?: Actor | null): void
    raise_child(actor: Actor, sibling?: Actor | null): void
    remove_actor(actor: Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: ActorBox): void
    vfunc_apply_transform(matrix: Graphene.Matrix): void
    vfunc_button_press_event(event: ButtonEvent): boolean
    vfunc_button_release_event(event: ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: CrossingEvent): boolean
    vfunc_event(event: Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: KeyEvent): boolean
    vfunc_key_release_event(event: KeyEvent): boolean
    vfunc_leave_event(event: CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: MotionEvent): boolean
    vfunc_paint(paint_context: PaintContext): void
    vfunc_paint_node(root: PaintNode): void
    vfunc_parent_set(old_parent: Actor): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_actor(): Actor
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Actor): void
    vfunc_actor_removed(actor: Actor): void
    vfunc_add(actor: Actor): void
    vfunc_child_notify(child: Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Actor): void
    vfunc_destroy_child_meta(actor: Actor): void
    vfunc_get_child_meta(actor: Actor): ChildMeta
    vfunc_lower(actor: Actor, sibling?: Actor | null): void
    vfunc_raise(actor: Actor, sibling?: Actor | null): void
    vfunc_remove(actor: Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: ScrollActor, event: ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: ScrollActor, event: ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: ScrollActor, event: ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: ScrollActor, event: ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: ScrollActor, event: Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: ScrollActor, event: Event) => boolean)): number
    emit(sigName: "captured-event", event: Event): void
    connect(sigName: "destroy", callback: (($obj: ScrollActor) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ScrollActor) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: ScrollActor, event: CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: ScrollActor, event: CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: CrossingEvent): void
    connect(sigName: "event", callback: (($obj: ScrollActor, event: Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: ScrollActor, event: Event) => boolean)): number
    emit(sigName: "event", event: Event): void
    connect(sigName: "hide", callback: (($obj: ScrollActor) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ScrollActor) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: ScrollActor) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: ScrollActor) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: ScrollActor) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: ScrollActor) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: ScrollActor, event: KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: ScrollActor, event: KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: ScrollActor, event: KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: ScrollActor, event: KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: ScrollActor, event: CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: ScrollActor, event: CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: ScrollActor, event: MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: ScrollActor, event: MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: MotionEvent): void
    connect(sigName: "parent-set", callback: (($obj: ScrollActor, old_parent?: Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: ScrollActor, old_parent?: Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Actor | null): void
    connect(sigName: "pick", callback: (($obj: ScrollActor, pick_context: PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: ScrollActor, pick_context: PickContext) => void)): number
    emit(sigName: "pick", pick_context: PickContext): void
    connect(sigName: "queue-relayout", callback: (($obj: ScrollActor) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: ScrollActor) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: ScrollActor) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ScrollActor) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "resource-scale-changed", callback: (($obj: ScrollActor) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: ScrollActor) => void)): number
    emit(sigName: "resource-scale-changed"): void
    connect(sigName: "scroll-event", callback: (($obj: ScrollActor, event: ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: ScrollActor, event: ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: ScrollEvent): void
    connect(sigName: "show", callback: (($obj: ScrollActor) => void)): number
    connect_after(sigName: "show", callback: (($obj: ScrollActor) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "stage-views-changed", callback: (($obj: ScrollActor) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: ScrollActor) => void)): number
    emit(sigName: "stage-views-changed"): void
    connect(sigName: "touch-event", callback: (($obj: ScrollActor, event: Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: ScrollActor, event: Event) => boolean)): number
    emit(sigName: "touch-event", event: Event): void
    connect(sigName: "transition-stopped", callback: (($obj: ScrollActor, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: ScrollActor, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: ScrollActor) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: ScrollActor) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: ScrollActor) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ScrollActor) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: ScrollActor, actor: Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: ScrollActor, actor: Actor) => void)): number
    emit(sigName: "actor-added", actor: Actor): void
    connect(sigName: "actor-removed", callback: (($obj: ScrollActor, actor: Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: ScrollActor, actor: Actor) => void)): number
    emit(sigName: "actor-removed", actor: Actor): void
    connect(sigName: "child-notify", callback: (($obj: ScrollActor, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: ScrollActor, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scroll-mode", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-mode", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: ScrollActor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ScrollActor_ConstructProps)
    _init (config?: ScrollActor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ScrollActor
    static $gtype: GObject.Type
}
export interface Seat_ConstructProps extends GObject.Object_ConstructProps {
    backend?: Backend
}
export class Seat {
    /* Properties of Clutter.Seat */
    readonly touch_mode: boolean
    /* Fields of Clutter.Seat */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Seat */
    bell_notify(): void
    create_virtual_device(device_type: InputDeviceType): VirtualInputDevice
    ensure_a11y_state(): void
    get_keyboard(): InputDevice
    get_keymap(): Keymap
    get_pointer(): InputDevice
    get_pointer_a11y_settings(settings: PointerA11ySettings): void
    get_touch_mode(): boolean
    handle_event_post(event: Event): boolean
    inhibit_unfocus(): void
    is_unfocus_inhibited(): boolean
    list_devices(): InputDevice[]
    query_state(device: InputDevice, sequence: EventSequence, coords: Graphene.Point, modifiers: ModifierType): boolean
    set_pointer_a11y_dwell_click_type(click_type: PointerA11yDwellClickType): void
    set_pointer_a11y_settings(settings: PointerA11ySettings): void
    uninhibit_unfocus(): void
    warp_pointer(x: number, y: number): void
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
    /* Virtual methods of Clutter.Seat */
    vfunc_bell_notify(): void
    vfunc_create_virtual_device(device_type: InputDeviceType): VirtualInputDevice
    vfunc_get_keyboard(): InputDevice
    vfunc_get_keymap(): Keymap
    vfunc_get_pointer(): InputDevice
    vfunc_handle_event_post(event: Event): boolean
    vfunc_query_state(device: InputDevice, sequence: EventSequence, coords: Graphene.Point, modifiers: ModifierType): boolean
    vfunc_warp_pointer(x: number, y: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Seat */
    connect(sigName: "device-added", callback: (($obj: Seat, object: InputDevice) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Seat, object: InputDevice) => void)): number
    emit(sigName: "device-added", object: InputDevice): void
    connect(sigName: "device-removed", callback: (($obj: Seat, object: InputDevice) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Seat, object: InputDevice) => void)): number
    emit(sigName: "device-removed", object: InputDevice): void
    connect(sigName: "is-unfocus-inhibited-changed", callback: (($obj: Seat) => void)): number
    connect_after(sigName: "is-unfocus-inhibited-changed", callback: (($obj: Seat) => void)): number
    emit(sigName: "is-unfocus-inhibited-changed"): void
    connect(sigName: "kbd-a11y-flags-changed", callback: (($obj: Seat, settings_flags: number, changed_mask: number) => void)): number
    connect_after(sigName: "kbd-a11y-flags-changed", callback: (($obj: Seat, settings_flags: number, changed_mask: number) => void)): number
    emit(sigName: "kbd-a11y-flags-changed", settings_flags: number, changed_mask: number): void
    connect(sigName: "kbd-a11y-mods-state-changed", callback: (($obj: Seat, latched_mask: number, locked_mask: number) => void)): number
    connect_after(sigName: "kbd-a11y-mods-state-changed", callback: (($obj: Seat, latched_mask: number, locked_mask: number) => void)): number
    emit(sigName: "kbd-a11y-mods-state-changed", latched_mask: number, locked_mask: number): void
    connect(sigName: "ptr-a11y-dwell-click-type-changed", callback: (($obj: Seat, click_type: PointerA11yDwellClickType) => void)): number
    connect_after(sigName: "ptr-a11y-dwell-click-type-changed", callback: (($obj: Seat, click_type: PointerA11yDwellClickType) => void)): number
    emit(sigName: "ptr-a11y-dwell-click-type-changed", click_type: PointerA11yDwellClickType): void
    connect(sigName: "ptr-a11y-timeout-started", callback: (($obj: Seat, device: InputDevice, timeout_type: PointerA11yTimeoutType, delay: number) => void)): number
    connect_after(sigName: "ptr-a11y-timeout-started", callback: (($obj: Seat, device: InputDevice, timeout_type: PointerA11yTimeoutType, delay: number) => void)): number
    emit(sigName: "ptr-a11y-timeout-started", device: InputDevice, timeout_type: PointerA11yTimeoutType, delay: number): void
    connect(sigName: "ptr-a11y-timeout-stopped", callback: (($obj: Seat, device: InputDevice, timeout_type: PointerA11yTimeoutType, clicked: boolean) => void)): number
    connect_after(sigName: "ptr-a11y-timeout-stopped", callback: (($obj: Seat, device: InputDevice, timeout_type: PointerA11yTimeoutType, clicked: boolean) => void)): number
    emit(sigName: "ptr-a11y-timeout-stopped", device: InputDevice, timeout_type: PointerA11yTimeoutType, clicked: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Seat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Seat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::touch-mode", callback: (($obj: Seat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::touch-mode", callback: (($obj: Seat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Seat_ConstructProps)
    _init (config?: Seat_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Settings_ConstructProps extends GObject.Object_ConstructProps {
    backend?: Backend
    dnd_drag_threshold?: number
    double_click_distance?: number
    double_click_time?: number
    font_antialias?: number
    font_dpi?: number
    font_hint_style?: string
    font_hinting?: number
    font_name?: string
    font_subpixel_order?: string
    fontconfig_timestamp?: number
    long_press_duration?: number
    password_hint_time?: number
    unscaled_font_dpi?: number
}
export class Settings {
    /* Properties of Clutter.Settings */
    dnd_drag_threshold: number
    double_click_distance: number
    double_click_time: number
    font_antialias: number
    font_dpi: number
    font_hint_style: string
    font_hinting: number
    font_name: string
    font_subpixel_order: string
    fontconfig_timestamp: number
    long_press_duration: number
    password_hint_time: number
    unscaled_font_dpi: number
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dnd-drag-threshold", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dnd-drag-threshold", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-click-distance", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-click-distance", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-click-time", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-click-time", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-antialias", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-antialias", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-dpi", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-dpi", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-hint-style", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-hint-style", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-hinting", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-hinting", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-name", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-name", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-subpixel-order", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-subpixel-order", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fontconfig-timestamp", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fontconfig-timestamp", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::long-press-duration", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::long-press-duration", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-hint-time", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-hint-time", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unscaled-font-dpi", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unscaled-font-dpi", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Settings
    static $gtype: GObject.Type
}
export interface ShaderEffect_ConstructProps extends OffscreenEffect_ConstructProps {
    shader_type?: ShaderType
}
export class ShaderEffect {
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.ShaderEffect */
    get_program(): Cogl.Handle
    get_shader(): Cogl.Handle
    set_shader_source(source: string): boolean
    set_uniform_value(name: string, value: any): void
    /* Methods of Clutter.OffscreenEffect */
    create_texture(width: number, height: number): Cogl.Handle
    get_pipeline(): Cogl.Pipeline | null
    get_target_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    get_texture(): Cogl.Handle
    paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Methods of Clutter.Effect */
    queue_repaint(): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.ShaderEffect */
    vfunc_get_static_shader_source(): string
    /* Virtual methods of Clutter.OffscreenEffect */
    vfunc_create_texture(width: number, height: number): Cogl.Handle
    vfunc_paint_target(node: PaintNode, paint_context: PaintContext): void
    /* Virtual methods of Clutter.Effect */
    vfunc_modify_paint_volume(volume: PaintVolume): boolean
    vfunc_paint(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_paint_node(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_post_paint(node: PaintNode, paint_context: PaintContext): void
    vfunc_pre_paint(node: PaintNode, paint_context: PaintContext): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ShaderEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ShaderEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actor", callback: (($obj: ShaderEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: ShaderEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: ShaderEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: ShaderEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ShaderEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ShaderEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ShaderEffect_ConstructProps)
    _init (config?: ShaderEffect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(shader_type: ShaderType): ShaderEffect
    static $gtype: GObject.Type
}
export class ShaderFloat {
    static name: string
}
export class ShaderInt {
    static name: string
}
export class ShaderMatrix {
    static name: string
}
export interface SnapConstraint_ConstructProps extends Constraint_ConstructProps {
    from_edge?: SnapEdge
    offset?: number
    source?: Actor
    to_edge?: SnapEdge
}
export class SnapConstraint {
    /* Properties of Clutter.SnapConstraint */
    from_edge: SnapEdge
    offset: number
    source: Actor
    to_edge: SnapEdge
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.ActorMeta */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.SnapConstraint */
    get_edges(): [ /* from_edge */ SnapEdge, /* to_edge */ SnapEdge ]
    get_offset(): number
    get_source(): Actor
    set_edges(from_edge: SnapEdge, to_edge: SnapEdge): void
    set_offset(offset: number): void
    set_source(source?: Actor | null): void
    /* Methods of Clutter.Constraint */
    update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.Constraint */
    vfunc_update_allocation(actor: Actor, allocation: ActorBox): void
    vfunc_update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::from-edge", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-edge", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::to-edge", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to-edge", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SnapConstraint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SnapConstraint_ConstructProps)
    _init (config?: SnapConstraint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Actor | null, from_edge: SnapEdge, to_edge: SnapEdge, offset: number): SnapConstraint
    static $gtype: GObject.Type
}
export interface Stage_ConstructProps extends Actor_ConstructProps {
    key_focus?: Actor
    title?: string
}
export class Stage {
    /* Properties of Clutter.Stage */
    key_focus: Actor
    readonly perspective: Perspective
    title: string
    /* Properties of Clutter.Actor */
    actions: Action
    readonly allocation: ActorBox
    background_color: Color
    readonly background_color_set: boolean
    child_transform: Graphene.Matrix
    readonly child_transform_set: boolean
    clip_rect: Graphene.Rect
    clip_to_allocation: boolean
    constraints: Constraint
    content: Content
    readonly content_box: ActorBox
    content_gravity: ContentGravity
    content_repeat: ContentRepeat
    effect: Effect
    readonly first_child: Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Actor
    layout_manager: LayoutManager
    magnification_filter: ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: OffscreenRedirect
    opacity: number
    pivot_point: Graphene.Point
    pivot_point_z: number
    position: Graphene.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Graphene.Size
    text_direction: TextDirection
    transform: Graphene.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: ActorAlign
    x_expand: boolean
    y: number
    y_align: ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Stage */
    capture_into(rect: cairo.RectangleInt, data: number): void
    capture_view_into(view: StageView, rect: cairo.RectangleInt, data: number, stride: number): void
    clear_stage_views(): void
    ensure_viewport(): void
    event(event: Event): boolean
    get_actor_at_pos(pick_mode: PickMode, x: number, y: number): Actor
    get_capture_final_size(rect: cairo.RectangleInt): [ /* returnType */ boolean, /* out_width */ number | null, /* out_height */ number | null, /* out_scale */ number | null ]
    get_device_actor(device: InputDevice, sequence?: EventSequence | null): Actor
    get_frame_counter(): number
    get_key_focus(): Actor
    get_minimum_size(): [ /* width */ number, /* height */ number ]
    get_motion_events_enabled(): boolean
    get_perspective(): /* perspective */ Perspective | null
    get_throttle_motion_events(): boolean
    get_title(): string
    get_use_alpha(): boolean
    paint_to_buffer(rect: cairo.RectangleInt, scale: number, data: Uint8Array, stride: number, format: Cogl.PixelFormat, paint_flags: PaintFlag): [ /* returnType */ boolean, /* data */ Uint8Array ]
    paint_to_framebuffer(framebuffer: Cogl.Framebuffer, rect: cairo.RectangleInt, scale: number, paint_flags: PaintFlag): void
    read_pixels(x: number, y: number, width: number, height: number): Uint8Array
    repick_device(device: InputDevice): void
    schedule_update(): void
    set_key_focus(actor?: Actor | null): void
    set_minimum_size(width: number, height: number): void
    set_motion_events_enabled(enabled: boolean): void
    set_throttle_motion_events(throttle: boolean): void
    set_title(title: string): void
    set_use_alpha(use_alpha: boolean): void
    update_device(device: InputDevice, sequence: EventSequence, point: Graphene.Point, time: number, new_actor: Actor, emit_crossing: boolean): void
    /* Methods of Clutter.Actor */
    add_action(action: Action): void
    add_action_with_name(name: string, action: Action): void
    add_child(child: Actor): void
    add_constraint(constraint: Constraint): void
    add_constraint_with_name(name: string, constraint: Constraint): void
    add_effect(effect: Effect): void
    add_effect_with_name(name: string, effect: Effect): void
    add_transition(name: string, transition: Transition): void
    allocate(box: ActorBox): void
    allocate_align_fill(box: ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    apply_transform_to_point(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bind_model(model: Gio.ListModel | null, create_child_func: ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Actor): boolean
    continue_paint(paint_context: PaintContext): void
    continue_pick(pick_context: PickContext): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    get_abs_allocation_vertices(): /* verts */ Graphene.Point3D[]
    get_accessible(): Atk.Object
    get_action(name: string): Action
    get_actions(): Action[]
    get_allocation_box(): /* box */ ActorBox
    get_background_color(): /* color */ Color
    get_child_at_index(index_: number): Actor
    get_child_transform(): /* transform */ Graphene.Matrix
    get_children(): Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Constraint
    get_constraints(): Constraint[]
    get_content(): Content
    get_content_box(): /* box */ ActorBox
    get_content_gravity(): ContentGravity
    get_content_repeat(): ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ ScalingFilter | null, /* mag_filter */ ScalingFilter | null ]
    get_default_paint_volume(): PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): AnimationMode
    get_effect(name: string): Effect
    get_effects(): Effect[]
    get_first_child(): Actor
    get_fixed_position(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    get_fixed_position_set(): boolean
    get_flags(): ActorFlags
    get_height(): number
    get_last_child(): Actor
    get_layout_manager(): LayoutManager
    get_margin(): /* margin */ Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Actor
    get_offscreen_redirect(): OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Actor
    get_reactive(): boolean
    get_request_mode(): RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_z(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Stage
    get_text_direction(): TextDirection
    get_transform(): /* transform */ Graphene.Matrix
    get_transformed_extents(): /* rect */ Graphene.Rect
    get_transformed_paint_volume(relative_to_ancestor: Actor): PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): ActorAlign
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
    insert_child_above(child: Actor, sibling?: Actor | null): void
    insert_child_at_index(child: Actor, index_: number): void
    insert_child_below(child: Actor, sibling?: Actor | null): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Orientation): boolean
    paint(paint_context: PaintContext): void
    peek_stage_views(): StageView[]
    pick(pick_context: PickContext): void
    pick_box(pick_context: PickContext, box: ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Actor): void
    remove_clip(): void
    remove_constraint(constraint: Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Actor, new_child: Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: ActorBox): void
    set_background_color(color?: Color | null): void
    set_child_above_sibling(child: Actor, sibling?: Actor | null): void
    set_child_at_index(child: Actor, index_: number): void
    set_child_below_sibling(child: Actor, sibling?: Actor | null): void
    set_child_transform(transform?: Graphene.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Content | null): void
    set_content_gravity(gravity: ContentGravity): void
    set_content_repeat(repeat: ContentRepeat): void
    set_content_scaling_filters(min_filter: ScalingFilter, mag_filter: ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: LayoutManager | null): void
    set_margin(margin: Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: RequestMode): void
    set_rotation_angle(axis: RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: TextDirection): void
    set_transform(transform?: Graphene.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: ActorFlags): void
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
    get_actor(): Actor
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Actor): void
    child_get_property(child: Actor, property: string, value: any): void
    child_notify(child: Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Actor, property: string, value: any): void
    create_child_meta(actor: Actor): void
    destroy_child_meta(actor: Actor): void
    find_child_by_name(child_name: string): Actor
    get_child_meta(actor: Actor): ChildMeta
    lower_child(actor: Actor, sibling?: Actor | null): void
    raise_child(actor: Actor, sibling?: Actor | null): void
    remove_actor(actor: Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Stage */
    vfunc_activate(): void
    vfunc_before_paint(view: StageView): void
    vfunc_deactivate(): void
    vfunc_paint_view(view: StageView, redraw_clip: cairo.Region): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: ActorBox): void
    vfunc_apply_transform(matrix: Graphene.Matrix): void
    vfunc_button_press_event(event: ButtonEvent): boolean
    vfunc_button_release_event(event: ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: CrossingEvent): boolean
    vfunc_event(event: Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: KeyEvent): boolean
    vfunc_key_release_event(event: KeyEvent): boolean
    vfunc_leave_event(event: CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: MotionEvent): boolean
    vfunc_paint(paint_context: PaintContext): void
    vfunc_paint_node(root: PaintNode): void
    vfunc_parent_set(old_parent: Actor): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_actor(): Actor
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Actor): void
    vfunc_actor_removed(actor: Actor): void
    vfunc_add(actor: Actor): void
    vfunc_child_notify(child: Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Actor): void
    vfunc_destroy_child_meta(actor: Actor): void
    vfunc_get_child_meta(actor: Actor): ChildMeta
    vfunc_lower(actor: Actor, sibling?: Actor | null): void
    vfunc_raise(actor: Actor, sibling?: Actor | null): void
    vfunc_remove(actor: Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Stage */
    connect(sigName: "activate", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Stage) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "after-paint", callback: (($obj: Stage, view: StageView) => void)): number
    connect_after(sigName: "after-paint", callback: (($obj: Stage, view: StageView) => void)): number
    emit(sigName: "after-paint", view: StageView): void
    connect(sigName: "after-update", callback: (($obj: Stage, view: StageView) => void)): number
    connect_after(sigName: "after-update", callback: (($obj: Stage, view: StageView) => void)): number
    emit(sigName: "after-update", view: StageView): void
    connect(sigName: "before-paint", callback: (($obj: Stage, view: StageView) => void)): number
    connect_after(sigName: "before-paint", callback: (($obj: Stage, view: StageView) => void)): number
    emit(sigName: "before-paint", view: StageView): void
    connect(sigName: "before-update", callback: (($obj: Stage, view: StageView) => void)): number
    connect_after(sigName: "before-update", callback: (($obj: Stage, view: StageView) => void)): number
    emit(sigName: "before-update", view: StageView): void
    connect(sigName: "deactivate", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: Stage) => void)): number
    emit(sigName: "deactivate"): void
    connect(sigName: "gl-video-memory-purged", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "gl-video-memory-purged", callback: (($obj: Stage) => void)): number
    emit(sigName: "gl-video-memory-purged"): void
    connect(sigName: "paint-view", callback: (($obj: Stage, view: StageView, redraw_clip: cairo.Region) => void)): number
    connect_after(sigName: "paint-view", callback: (($obj: Stage, view: StageView, redraw_clip: cairo.Region) => void)): number
    emit(sigName: "paint-view", view: StageView, redraw_clip: cairo.Region): void
    connect(sigName: "presented", callback: (($obj: Stage, view: StageView, frame_info?: object | null) => void)): number
    connect_after(sigName: "presented", callback: (($obj: Stage, view: StageView, frame_info?: object | null) => void)): number
    emit(sigName: "presented", view: StageView, frame_info?: object | null): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: Stage, event: ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Stage, event: ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Stage, event: ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Stage, event: ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Stage, event: Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Stage, event: Event) => boolean)): number
    emit(sigName: "captured-event", event: Event): void
    connect(sigName: "destroy", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Stage) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Stage, event: CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Stage, event: CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Stage, event: Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Stage, event: Event) => boolean)): number
    emit(sigName: "event", event: Event): void
    connect(sigName: "hide", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Stage) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Stage) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Stage) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Stage, event: KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Stage, event: KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Stage, event: KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Stage, event: KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Stage, event: CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Stage, event: CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Stage, event: MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Stage, event: MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: MotionEvent): void
    connect(sigName: "parent-set", callback: (($obj: Stage, old_parent?: Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Stage, old_parent?: Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Actor | null): void
    connect(sigName: "pick", callback: (($obj: Stage, pick_context: PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Stage, pick_context: PickContext) => void)): number
    emit(sigName: "pick", pick_context: PickContext): void
    connect(sigName: "queue-relayout", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Stage) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Stage) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "resource-scale-changed", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: Stage) => void)): number
    emit(sigName: "resource-scale-changed"): void
    connect(sigName: "scroll-event", callback: (($obj: Stage, event: ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Stage, event: ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "show", callback: (($obj: Stage) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "stage-views-changed", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: Stage) => void)): number
    emit(sigName: "stage-views-changed"): void
    connect(sigName: "touch-event", callback: (($obj: Stage, event: Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Stage, event: Event) => boolean)): number
    emit(sigName: "touch-event", event: Event): void
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
    connect(sigName: "actor-added", callback: (($obj: Stage, actor: Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Stage, actor: Actor) => void)): number
    emit(sigName: "actor-added", actor: Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Stage, actor: Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Stage, actor: Actor) => void)): number
    emit(sigName: "actor-removed", actor: Actor): void
    connect(sigName: "child-notify", callback: (($obj: Stage, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Stage, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Actor, pspec: GObject.ParamSpec): void
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
    static $gtype: GObject.Type
}
export interface StageManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class StageManager {
    /* Properties of Clutter.StageManager */
    readonly default_stage: Stage
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.StageManager */
    get_default_stage(): Stage
    list_stages(): Stage[]
    peek_stages(): Stage[]
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
    /* Virtual methods of Clutter.StageManager */
    vfunc_stage_added(stage: Stage): void
    vfunc_stage_removed(stage: Stage): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.StageManager */
    connect(sigName: "stage-added", callback: (($obj: StageManager, stage: Stage) => void)): number
    connect_after(sigName: "stage-added", callback: (($obj: StageManager, stage: Stage) => void)): number
    emit(sigName: "stage-added", stage: Stage): void
    connect(sigName: "stage-removed", callback: (($obj: StageManager, stage: Stage) => void)): number
    connect_after(sigName: "stage-removed", callback: (($obj: StageManager, stage: Stage) => void)): number
    emit(sigName: "stage-removed", stage: Stage): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StageManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-stage", callback: (($obj: StageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-stage", callback: (($obj: StageManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StageManager_ConstructProps)
    _init (config?: StageManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): StageManager
    static $gtype: GObject.Type
}
export interface StageView_ConstructProps extends GObject.Object_ConstructProps {
    framebuffer?: Cogl.Framebuffer
    layout?: cairo.RectangleInt
    name?: string
    offscreen?: Cogl.Offscreen
    refresh_rate?: number
    scale?: number
    stage?: Stage
    use_shadowfb?: boolean
}
export class StageView {
    /* Properties of Clutter.StageView */
    framebuffer: Cogl.Framebuffer
    layout: cairo.RectangleInt
    refresh_rate: number
    scale: number
    /* Fields of Clutter.StageView */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.StageView */
    assign_next_scanout(scanout: Cogl.Scanout): void
    destroy(): void
    get_framebuffer(): Cogl.Framebuffer
    get_layout(rect: cairo.RectangleInt): void
    get_offscreen_transformation_matrix(matrix: Graphene.Matrix): void
    get_onscreen(): Cogl.Framebuffer
    get_refresh_rate(): number
    get_scale(): number
    invalidate_offscreen_blit_pipeline(): void
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
    /* Virtual methods of Clutter.StageView */
    vfunc_get_offscreen_transformation_matrix(matrix: Graphene.Matrix): void
    vfunc_setup_offscreen_blit_pipeline(pipeline: Cogl.Pipeline): void
    vfunc_transform_rect_to_onscreen(src_rect: cairo.RectangleInt, dst_width: number, dst_height: number, dst_rect: cairo.RectangleInt): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StageView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StageView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::framebuffer", callback: (($obj: StageView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::framebuffer", callback: (($obj: StageView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout", callback: (($obj: StageView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout", callback: (($obj: StageView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refresh-rate", callback: (($obj: StageView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: StageView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale", callback: (($obj: StageView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: StageView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StageView_ConstructProps)
    _init (config?: StageView_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SwipeAction_ConstructProps extends GestureAction_ConstructProps {
}
export class SwipeAction {
    /* Properties of Clutter.GestureAction */
    n_touch_points: number
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.GestureAction */
    parent_instance: Action
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.GestureAction */
    cancel(): void
    get_device(point: number): InputDevice
    get_last_event(point: number): Event
    get_motion_coords(point: number): [ /* motion_x */ number | null, /* motion_y */ number | null ]
    get_motion_delta(point: number): [ /* returnType */ number, /* delta_x */ number | null, /* delta_y */ number | null ]
    get_n_current_points(): number
    get_n_touch_points(): number
    get_press_coords(point: number): [ /* press_x */ number | null, /* press_y */ number | null ]
    get_release_coords(point: number): [ /* release_x */ number | null, /* release_y */ number | null ]
    get_sequence(point: number): EventSequence
    get_threshold_trigger_distance(): [ /* x */ number | null, /* y */ number | null ]
    get_threshold_trigger_edge(): GestureTriggerEdge
    get_threshold_trigger_egde(): GestureTriggerEdge
    get_velocity(point: number): [ /* returnType */ number, /* velocity_x */ number | null, /* velocity_y */ number | null ]
    set_n_touch_points(nb_points: number): void
    set_threshold_trigger_distance(x: number, y: number): void
    set_threshold_trigger_edge(edge: GestureTriggerEdge): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.SwipeAction */
    vfunc_swept(actor: Actor, direction: SwipeDirection): void
    vfunc_swipe(actor: Actor, direction: SwipeDirection): boolean
    /* Virtual methods of Clutter.GestureAction */
    vfunc_gesture_begin(actor: Actor): boolean
    vfunc_gesture_cancel(actor: Actor): void
    vfunc_gesture_end(actor: Actor): void
    vfunc_gesture_prepare(actor: Actor): boolean
    vfunc_gesture_progress(actor: Actor): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.SwipeAction */
    connect(sigName: "swept", callback: (($obj: SwipeAction, actor: Actor, direction: SwipeDirection) => void)): number
    connect_after(sigName: "swept", callback: (($obj: SwipeAction, actor: Actor, direction: SwipeDirection) => void)): number
    emit(sigName: "swept", actor: Actor, direction: SwipeDirection): void
    connect(sigName: "swipe", callback: (($obj: SwipeAction, actor: Actor, direction: SwipeDirection) => boolean)): number
    connect_after(sigName: "swipe", callback: (($obj: SwipeAction, actor: Actor, direction: SwipeDirection) => boolean)): number
    emit(sigName: "swipe", actor: Actor, direction: SwipeDirection): void
    /* Signals of Clutter.GestureAction */
    connect(sigName: "gesture-begin", callback: (($obj: SwipeAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-begin", callback: (($obj: SwipeAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-begin", actor: Actor): void
    connect(sigName: "gesture-cancel", callback: (($obj: SwipeAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-cancel", callback: (($obj: SwipeAction, actor: Actor) => void)): number
    emit(sigName: "gesture-cancel", actor: Actor): void
    connect(sigName: "gesture-end", callback: (($obj: SwipeAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-end", callback: (($obj: SwipeAction, actor: Actor) => void)): number
    emit(sigName: "gesture-end", actor: Actor): void
    connect(sigName: "gesture-progress", callback: (($obj: SwipeAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-progress", callback: (($obj: SwipeAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-progress", actor: Actor): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SwipeAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SwipeAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::n-touch-points", callback: (($obj: SwipeAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-touch-points", callback: (($obj: SwipeAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: SwipeAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: SwipeAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: SwipeAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: SwipeAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SwipeAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SwipeAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SwipeAction_ConstructProps)
    _init (config?: SwipeAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SwipeAction
    static $gtype: GObject.Type
}
export interface TapAction_ConstructProps extends GestureAction_ConstructProps {
}
export class TapAction {
    /* Properties of Clutter.GestureAction */
    n_touch_points: number
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.GestureAction */
    parent_instance: Action
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.GestureAction */
    cancel(): void
    get_device(point: number): InputDevice
    get_last_event(point: number): Event
    get_motion_coords(point: number): [ /* motion_x */ number | null, /* motion_y */ number | null ]
    get_motion_delta(point: number): [ /* returnType */ number, /* delta_x */ number | null, /* delta_y */ number | null ]
    get_n_current_points(): number
    get_n_touch_points(): number
    get_press_coords(point: number): [ /* press_x */ number | null, /* press_y */ number | null ]
    get_release_coords(point: number): [ /* release_x */ number | null, /* release_y */ number | null ]
    get_sequence(point: number): EventSequence
    get_threshold_trigger_distance(): [ /* x */ number | null, /* y */ number | null ]
    get_threshold_trigger_edge(): GestureTriggerEdge
    get_threshold_trigger_egde(): GestureTriggerEdge
    get_velocity(point: number): [ /* returnType */ number, /* velocity_x */ number | null, /* velocity_y */ number | null ]
    set_n_touch_points(nb_points: number): void
    set_threshold_trigger_distance(x: number, y: number): void
    set_threshold_trigger_edge(edge: GestureTriggerEdge): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.TapAction */
    vfunc_tap(actor: Actor): boolean
    /* Virtual methods of Clutter.GestureAction */
    vfunc_gesture_begin(actor: Actor): boolean
    vfunc_gesture_cancel(actor: Actor): void
    vfunc_gesture_end(actor: Actor): void
    vfunc_gesture_prepare(actor: Actor): boolean
    vfunc_gesture_progress(actor: Actor): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.TapAction */
    connect(sigName: "tap", callback: (($obj: TapAction, actor: Actor) => void)): number
    connect_after(sigName: "tap", callback: (($obj: TapAction, actor: Actor) => void)): number
    emit(sigName: "tap", actor: Actor): void
    /* Signals of Clutter.GestureAction */
    connect(sigName: "gesture-begin", callback: (($obj: TapAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-begin", callback: (($obj: TapAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-begin", actor: Actor): void
    connect(sigName: "gesture-cancel", callback: (($obj: TapAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-cancel", callback: (($obj: TapAction, actor: Actor) => void)): number
    emit(sigName: "gesture-cancel", actor: Actor): void
    connect(sigName: "gesture-end", callback: (($obj: TapAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-end", callback: (($obj: TapAction, actor: Actor) => void)): number
    emit(sigName: "gesture-end", actor: Actor): void
    connect(sigName: "gesture-progress", callback: (($obj: TapAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-progress", callback: (($obj: TapAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-progress", actor: Actor): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TapAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TapAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::n-touch-points", callback: (($obj: TapAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-touch-points", callback: (($obj: TapAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: TapAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: TapAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: TapAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: TapAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TapAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TapAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TapAction_ConstructProps)
    _init (config?: TapAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TapAction
    static $gtype: GObject.Type
}
export interface Text_ConstructProps extends Actor_ConstructProps {
    activatable?: boolean
    attributes?: Pango.AttrList
    buffer?: TextBuffer
    color?: Color
    cursor_color?: Color
    cursor_position?: number
    cursor_size?: number
    cursor_visible?: boolean
    editable?: boolean
    ellipsize?: Pango.EllipsizeMode
    font_description?: Pango.FontDescription
    font_name?: string
    input_hints?: InputContentHintFlags
    input_purpose?: InputContentPurpose
    justify?: boolean
    line_alignment?: Pango.Alignment
    line_wrap?: boolean
    line_wrap_mode?: Pango.WrapMode
    max_length?: number
    password_char?: number
    position?: number
    selectable?: boolean
    selected_text_color?: Color
    selection_bound?: number
    selection_color?: Color
    single_line_mode?: boolean
    text?: string
    use_markup?: boolean
}
export class Text {
    /* Properties of Clutter.Text */
    activatable: boolean
    attributes: Pango.AttrList
    buffer: TextBuffer
    color: Color
    cursor_color: Color
    readonly cursor_color_set: boolean
    cursor_position: number
    cursor_size: number
    cursor_visible: boolean
    editable: boolean
    ellipsize: Pango.EllipsizeMode
    font_description: Pango.FontDescription
    font_name: string
    input_hints: InputContentHintFlags
    input_purpose: InputContentPurpose
    justify: boolean
    line_alignment: Pango.Alignment
    line_wrap: boolean
    line_wrap_mode: Pango.WrapMode
    max_length: number
    password_char: number
    position: number
    selectable: boolean
    selected_text_color: Color
    readonly selected_text_color_set: boolean
    selection_bound: number
    selection_color: Color
    readonly selection_color_set: boolean
    single_line_mode: boolean
    text: string
    use_markup: boolean
    /* Properties of Clutter.Actor */
    actions: Action
    readonly allocation: ActorBox
    background_color: Color
    readonly background_color_set: boolean
    child_transform: Graphene.Matrix
    readonly child_transform_set: boolean
    clip_rect: Graphene.Rect
    clip_to_allocation: boolean
    constraints: Constraint
    content: Content
    readonly content_box: ActorBox
    content_gravity: ContentGravity
    content_repeat: ContentRepeat
    effect: Effect
    readonly first_child: Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Actor
    layout_manager: LayoutManager
    magnification_filter: ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: OffscreenRedirect
    opacity: number
    pivot_point: Graphene.Point
    pivot_point_z: number
    reactive: boolean
    readonly realized: boolean
    request_mode: RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Graphene.Size
    text_direction: TextDirection
    transform: Graphene.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: ActorAlign
    x_expand: boolean
    y: number
    y_align: ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Text */
    activate(): boolean
    coords_to_position(x: number, y: number): number
    delete_chars(n_chars: number): void
    delete_selection(): boolean
    delete_text(start_pos: number, end_pos: number): void
    get_activatable(): boolean
    get_attributes(): Pango.AttrList
    get_buffer(): TextBuffer
    get_chars(start_pos: number, end_pos: number): string
    get_color(): /* color */ Color
    get_cursor_color(): /* color */ Color
    get_cursor_position(): number
    get_cursor_rect(): /* rect */ Graphene.Rect
    get_cursor_size(): number
    get_cursor_visible(): boolean
    get_editable(): boolean
    get_ellipsize(): Pango.EllipsizeMode
    get_font_description(): Pango.FontDescription
    get_font_name(): string
    get_input_hints(): InputContentHintFlags
    get_input_purpose(): InputContentPurpose
    get_justify(): boolean
    get_layout(): Pango.Layout
    get_layout_offsets(): [ /* x */ number, /* y */ number ]
    get_line_alignment(): Pango.Alignment
    get_line_wrap(): boolean
    get_line_wrap_mode(): Pango.WrapMode
    get_max_length(): number
    get_password_char(): number
    get_selectable(): boolean
    get_selected_text_color(): /* color */ Color
    get_selection(): string
    get_selection_bound(): number
    get_selection_color(): /* color */ Color
    get_single_line_mode(): boolean
    get_text(): string
    get_use_markup(): boolean
    has_preedit(): boolean
    insert_text(text: string, position: number): void
    insert_unichar(wc: number): void
    position_to_coords(position: number): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* line_height */ number ]
    set_activatable(activatable: boolean): void
    set_attributes(attrs?: Pango.AttrList | null): void
    set_buffer(buffer: TextBuffer): void
    set_color(color: Color): void
    set_cursor_color(color?: Color | null): void
    set_cursor_position(position: number): void
    set_cursor_size(size: number): void
    set_cursor_visible(cursor_visible: boolean): void
    set_editable(editable: boolean): void
    set_ellipsize(mode: Pango.EllipsizeMode): void
    set_font_description(font_desc: Pango.FontDescription): void
    set_font_name(font_name?: string | null): void
    set_input_hints(hints: InputContentHintFlags): void
    set_input_purpose(purpose: InputContentPurpose): void
    set_justify(justify: boolean): void
    set_line_alignment(alignment: Pango.Alignment): void
    set_line_wrap(line_wrap: boolean): void
    set_line_wrap_mode(wrap_mode: Pango.WrapMode): void
    set_markup(markup?: string | null): void
    set_max_length(max: number): void
    set_password_char(wc: number): void
    set_preedit_string(preedit_str: string | null, preedit_attrs: Pango.AttrList | null, cursor_pos: number): void
    set_selectable(selectable: boolean): void
    set_selected_text_color(color?: Color | null): void
    set_selection(start_pos: number, end_pos: number): void
    set_selection_bound(selection_bound: number): void
    set_selection_color(color?: Color | null): void
    set_single_line_mode(single_line: boolean): void
    set_text(text?: string | null): void
    set_use_markup(setting: boolean): void
    /* Methods of Clutter.Actor */
    add_action(action: Action): void
    add_action_with_name(name: string, action: Action): void
    add_child(child: Actor): void
    add_constraint(constraint: Constraint): void
    add_constraint_with_name(name: string, constraint: Constraint): void
    add_effect(effect: Effect): void
    add_effect_with_name(name: string, effect: Effect): void
    add_transition(name: string, transition: Transition): void
    allocate(box: ActorBox): void
    allocate_align_fill(box: ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    allocate_preferred_size(x: number, y: number): void
    apply_relative_transform_to_point(ancestor: Actor | null, point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    apply_transform_to_point(point: Graphene.Point3D): /* vertex */ Graphene.Point3D
    bind_model(model: Gio.ListModel | null, create_child_func: ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Actor): boolean
    continue_paint(paint_context: PaintContext): void
    continue_pick(pick_context: PickContext): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    event(event: Event, capture: boolean): boolean
    get_abs_allocation_vertices(): /* verts */ Graphene.Point3D[]
    get_accessible(): Atk.Object
    get_action(name: string): Action
    get_actions(): Action[]
    get_allocation_box(): /* box */ ActorBox
    get_background_color(): /* color */ Color
    get_child_at_index(index_: number): Actor
    get_child_transform(): /* transform */ Graphene.Matrix
    get_children(): Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Constraint
    get_constraints(): Constraint[]
    get_content(): Content
    get_content_box(): /* box */ ActorBox
    get_content_gravity(): ContentGravity
    get_content_repeat(): ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ ScalingFilter | null, /* mag_filter */ ScalingFilter | null ]
    get_default_paint_volume(): PaintVolume
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): AnimationMode
    get_effect(name: string): Effect
    get_effects(): Effect[]
    get_first_child(): Actor
    get_fixed_position(): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    get_fixed_position_set(): boolean
    get_flags(): ActorFlags
    get_height(): number
    get_last_child(): Actor
    get_layout_manager(): LayoutManager
    get_margin(): /* margin */ Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Actor
    get_offscreen_redirect(): OffscreenRedirect
    get_opacity(): number
    get_opacity_override(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Actor
    get_reactive(): boolean
    get_request_mode(): RequestMode
    get_resource_scale(): number
    get_rotation_angle(axis: RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_z(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Stage
    get_text_direction(): TextDirection
    get_transform(): /* transform */ Graphene.Matrix
    get_transformed_extents(): /* rect */ Graphene.Rect
    get_transformed_paint_volume(relative_to_ancestor: Actor): PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): ActorAlign
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
    insert_child_above(child: Actor, sibling?: Actor | null): void
    insert_child_at_index(child: Actor, index_: number): void
    insert_child_below(child: Actor, sibling?: Actor | null): void
    invalidate_paint_volume(): void
    invalidate_transform(): void
    is_effectively_on_stage_view(view: StageView): boolean
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    map(): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Orientation): boolean
    paint(paint_context: PaintContext): void
    peek_stage_views(): StageView[]
    pick(pick_context: PickContext): void
    pick_box(pick_context: PickContext, box: ActorBox): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    realize(): void
    remove_action(action: Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Actor): void
    remove_clip(): void
    remove_constraint(constraint: Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    replace_child(old_child: Actor, new_child: Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: ActorBox): void
    set_background_color(color?: Color | null): void
    set_child_above_sibling(child: Actor, sibling?: Actor | null): void
    set_child_at_index(child: Actor, index_: number): void
    set_child_below_sibling(child: Actor, sibling?: Actor | null): void
    set_child_transform(transform?: Graphene.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Content | null): void
    set_content_gravity(gravity: ContentGravity): void
    set_content_repeat(repeat: ContentRepeat): void
    set_content_scaling_filters(min_filter: ScalingFilter, mag_filter: ScalingFilter): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: ActorFlags): void
    set_height(height: number): void
    set_layout_manager(manager?: LayoutManager | null): void
    set_margin(margin: Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_opacity_override(opacity: number): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: RequestMode): void
    set_rotation_angle(axis: RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_z(scale_z: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: TextDirection): void
    set_transform(transform?: Graphene.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    should_pick(pick_context: PickContext): boolean
    show(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    uninhibit_culling(): void
    unmap(): void
    unrealize(): void
    unset_flags(flags: ActorFlags): void
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
    get_actor(): Actor
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Actor): void
    child_get_property(child: Actor, property: string, value: any): void
    child_notify(child: Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Actor, property: string, value: any): void
    create_child_meta(actor: Actor): void
    destroy_child_meta(actor: Actor): void
    find_child_by_name(child_name: string): Actor
    get_child_meta(actor: Actor): ChildMeta
    lower_child(actor: Actor, sibling?: Actor | null): void
    raise_child(actor: Actor, sibling?: Actor | null): void
    remove_actor(actor: Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Text */
    vfunc_activate(): void
    vfunc_cursor_changed(): void
    vfunc_cursor_event(rect: Graphene.Rect): void
    vfunc_text_changed(): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: ActorBox): void
    vfunc_apply_transform(matrix: Graphene.Matrix): void
    vfunc_button_press_event(event: ButtonEvent): boolean
    vfunc_button_release_event(event: ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: CrossingEvent): boolean
    vfunc_event(event: Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_accessible(): boolean
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: KeyEvent): boolean
    vfunc_key_release_event(event: KeyEvent): boolean
    vfunc_leave_event(event: CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: MotionEvent): boolean
    vfunc_paint(paint_context: PaintContext): void
    vfunc_paint_node(root: PaintNode): void
    vfunc_parent_set(old_parent: Actor): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: ScrollEvent): boolean
    vfunc_show(): void
    vfunc_touch_event(event: TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_actor(): Actor
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Actor): void
    vfunc_actor_removed(actor: Actor): void
    vfunc_add(actor: Actor): void
    vfunc_child_notify(child: Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Actor): void
    vfunc_destroy_child_meta(actor: Actor): void
    vfunc_get_child_meta(actor: Actor): ChildMeta
    vfunc_lower(actor: Actor, sibling?: Actor | null): void
    vfunc_raise(actor: Actor, sibling?: Actor | null): void
    vfunc_remove(actor: Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Text */
    connect(sigName: "activate", callback: (($obj: Text) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Text) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "cursor-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "cursor-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "cursor-changed"): void
    connect(sigName: "cursor-event", callback: (($obj: Text, rect: Graphene.Rect) => void)): number
    connect_after(sigName: "cursor-event", callback: (($obj: Text, rect: Graphene.Rect) => void)): number
    emit(sigName: "cursor-event", rect: Graphene.Rect): void
    connect(sigName: "delete-text", callback: (($obj: Text, start_pos: number, end_pos: number) => void)): number
    connect_after(sigName: "delete-text", callback: (($obj: Text, start_pos: number, end_pos: number) => void)): number
    emit(sigName: "delete-text", start_pos: number, end_pos: number): void
    connect(sigName: "insert-text", callback: (($obj: Text, new_text: string, new_text_length: number, position?: object | null) => void)): number
    connect_after(sigName: "insert-text", callback: (($obj: Text, new_text: string, new_text_length: number, position?: object | null) => void)): number
    emit(sigName: "insert-text", new_text: string, new_text_length: number, position?: object | null): void
    connect(sigName: "text-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "text-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "text-changed"): void
    /* Signals of Clutter.Actor */
    connect(sigName: "button-press-event", callback: (($obj: Text, event: ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Text, event: ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Text, event: ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Text, event: ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Text, event: Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Text, event: Event) => boolean)): number
    emit(sigName: "captured-event", event: Event): void
    connect(sigName: "destroy", callback: (($obj: Text) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Text) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Text, event: CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Text, event: CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Text, event: Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Text, event: Event) => boolean)): number
    emit(sigName: "event", event: Event): void
    connect(sigName: "hide", callback: (($obj: Text) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Text) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Text) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Text) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Text) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Text) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Text, event: KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Text, event: KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Text, event: KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Text, event: KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Text, event: CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Text, event: CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Text, event: MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Text, event: MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: MotionEvent): void
    connect(sigName: "parent-set", callback: (($obj: Text, old_parent?: Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Text, old_parent?: Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Actor | null): void
    connect(sigName: "pick", callback: (($obj: Text, pick_context: PickContext) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Text, pick_context: PickContext) => void)): number
    emit(sigName: "pick", pick_context: PickContext): void
    connect(sigName: "queue-relayout", callback: (($obj: Text) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Text) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Text) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Text) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "resource-scale-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "resource-scale-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "resource-scale-changed"): void
    connect(sigName: "scroll-event", callback: (($obj: Text, event: ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Text, event: ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Text) => void)): number
    connect_after(sigName: "show", callback: (($obj: Text) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "stage-views-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "stage-views-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "stage-views-changed"): void
    connect(sigName: "touch-event", callback: (($obj: Text, event: Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Text, event: Event) => boolean)): number
    emit(sigName: "touch-event", event: Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Text, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Text, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Text) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Text) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Text) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Text, actor: Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Text, actor: Actor) => void)): number
    emit(sigName: "actor-added", actor: Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Text, actor: Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Text, actor: Actor) => void)): number
    emit(sigName: "actor-removed", actor: Actor): void
    connect(sigName: "child-notify", callback: (($obj: Text, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Text, actor: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::activatable", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-color", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-color", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-color-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-color-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-position", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-size", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-size", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-visible", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ellipsize", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-hints", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-purpose", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::justify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-alignment", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-alignment", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-wrap", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-wrap", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-wrap-mode", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-wrap-mode", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-length", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-char", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-char", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selectable", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected-text-color", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-text-color", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected-text-color-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-text-color-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selection-bound", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selection-color", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-color", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selection-color-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-color-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::single-line-mode", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-line-mode", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-markup", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Text_ConstructProps)
    _init (config?: Text_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Text
    static new_full(font_name: string, text: string, color: Color): Text
    static new_with_buffer(buffer: TextBuffer): Text
    static new_with_text(font_name: string | null, text: string): Text
    static $gtype: GObject.Type
}
export interface TextBuffer_ConstructProps extends GObject.Object_ConstructProps {
    max_length?: number
}
export class TextBuffer {
    /* Properties of Clutter.TextBuffer */
    readonly length: number
    max_length: number
    readonly text: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.TextBuffer */
    delete_text(position: number, n_chars: number): number
    emit_deleted_text(position: number, n_chars: number): void
    emit_inserted_text(position: number, chars: string, n_chars: number): void
    get_bytes(): number
    get_length(): number
    get_max_length(): number
    get_text(): string
    insert_text(position: number, chars: string, n_chars: number): number
    set_max_length(max_length: number): void
    set_text(chars: string, n_chars: number): void
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
    /* Virtual methods of Clutter.TextBuffer */
    vfunc_delete_text(position: number, n_chars: number): number
    vfunc_deleted_text(position: number, n_chars: number): void
    vfunc_get_length(): number
    vfunc_get_text(n_bytes: number): string
    vfunc_insert_text(position: number, chars: string, n_chars: number): number
    vfunc_inserted_text(position: number, chars: string, n_chars: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.TextBuffer */
    connect(sigName: "deleted-text", callback: (($obj: TextBuffer, position: number, n_chars: number) => void)): number
    connect_after(sigName: "deleted-text", callback: (($obj: TextBuffer, position: number, n_chars: number) => void)): number
    emit(sigName: "deleted-text", position: number, n_chars: number): void
    connect(sigName: "inserted-text", callback: (($obj: TextBuffer, position: number, chars: string, n_chars: number) => void)): number
    connect_after(sigName: "inserted-text", callback: (($obj: TextBuffer, position: number, chars: string, n_chars: number) => void)): number
    emit(sigName: "inserted-text", position: number, chars: string, n_chars: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::length", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-length", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: TextBuffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextBuffer_ConstructProps)
    _init (config?: TextBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextBuffer
    static new_with_text(text: string | null, text_len: number): TextBuffer
    static $gtype: GObject.Type
}
export class TextNode {
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
    static new(layout?: Pango.Layout | null, color?: Color | null): TextNode
    constructor(layout?: Pango.Layout | null, color?: Color | null)
    /* Static methods and pseudo-constructors */
    static new(layout?: Pango.Layout | null, color?: Color | null): TextNode
}
export class TextureNode {
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
    static new(texture: Cogl.Texture, color: Color | null, min_filter: ScalingFilter, mag_filter: ScalingFilter): TextureNode
    constructor(texture: Cogl.Texture, color: Color | null, min_filter: ScalingFilter, mag_filter: ScalingFilter)
    /* Static methods and pseudo-constructors */
    static new(texture: Cogl.Texture, color: Color | null, min_filter: ScalingFilter, mag_filter: ScalingFilter): TextureNode
    static new(pipeline?: Cogl.Pipeline | null): TextureNode
}
export interface Timeline_ConstructProps extends GObject.Object_ConstructProps {
    actor?: Actor
    auto_reverse?: boolean
    delay?: number
    direction?: TimelineDirection
    duration?: number
    frame_clock?: FrameClock
    progress_mode?: AnimationMode
    repeat_count?: number
}
export class Timeline {
    /* Properties of Clutter.Timeline */
    actor: Actor
    auto_reverse: boolean
    delay: number
    direction: TimelineDirection
    duration: number
    frame_clock: FrameClock
    progress_mode: AnimationMode
    repeat_count: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Timeline */
    add_marker(marker_name: string, progress: number): void
    add_marker_at_time(marker_name: string, msecs: number): void
    advance(msecs: number): void
    advance_to_marker(marker_name: string): void
    get_actor(): Actor
    get_auto_reverse(): boolean
    get_cubic_bezier_progress(): [ /* returnType */ boolean, /* c_1 */ Graphene.Point, /* c_2 */ Graphene.Point ]
    get_current_repeat(): number
    get_delay(): number
    get_delta(): number
    get_direction(): TimelineDirection
    get_duration(): number
    get_duration_hint(): number
    get_elapsed_time(): number
    get_progress(): number
    get_progress_mode(): AnimationMode
    get_repeat_count(): number
    get_step_progress(): [ /* returnType */ boolean, /* n_steps */ number, /* step_mode */ StepMode ]
    has_marker(marker_name: string): boolean
    is_playing(): boolean
    list_markers(msecs: number): string[]
    pause(): void
    remove_marker(marker_name: string): void
    rewind(): void
    set_actor(actor?: Actor | null): void
    set_auto_reverse(reverse: boolean): void
    set_cubic_bezier_progress(c_1: Graphene.Point, c_2: Graphene.Point): void
    set_delay(msecs: number): void
    set_direction(direction: TimelineDirection): void
    set_duration(msecs: number): void
    set_frame_clock(frame_clock: FrameClock): void
    set_progress_func(func: TimelineProgressFunc | null): void
    set_progress_mode(mode: AnimationMode): void
    set_repeat_count(count: number): void
    set_step_progress(n_steps: number, step_mode: StepMode): void
    skip(msecs: number): void
    start(): void
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
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Timeline */
    vfunc_completed(): void
    vfunc_marker_reached(marker_name: string, msecs: number): void
    vfunc_new_frame(msecs: number): void
    vfunc_paused(): void
    vfunc_started(): void
    vfunc_stopped(is_finished: boolean): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Timeline */
    connect(sigName: "completed", callback: (($obj: Timeline) => void)): number
    connect_after(sigName: "completed", callback: (($obj: Timeline) => void)): number
    emit(sigName: "completed"): void
    connect(sigName: "marker-reached", callback: (($obj: Timeline, marker_name: string, msecs: number) => void)): number
    connect_after(sigName: "marker-reached", callback: (($obj: Timeline, marker_name: string, msecs: number) => void)): number
    emit(sigName: "marker-reached", marker_name: string, msecs: number): void
    connect(sigName: "new-frame", callback: (($obj: Timeline, msecs: number) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: Timeline, msecs: number) => void)): number
    emit(sigName: "new-frame", msecs: number): void
    connect(sigName: "paused", callback: (($obj: Timeline) => void)): number
    connect_after(sigName: "paused", callback: (($obj: Timeline) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "started", callback: (($obj: Timeline) => void)): number
    connect_after(sigName: "started", callback: (($obj: Timeline) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: Timeline, is_finished: boolean) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Timeline, is_finished: boolean) => void)): number
    emit(sigName: "stopped", is_finished: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actor", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-reverse", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-reverse", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delay", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame-clock", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-clock", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-mode", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-mode", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-count", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-count", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Timeline_ConstructProps)
    _init (config?: Timeline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(duration_ms: number): Timeline
    static new_for_actor(actor: Actor, duration_ms: number): Timeline
    static new_for_frame_clock(frame_clock: FrameClock, duration_ms: number): Timeline
    static $gtype: GObject.Type
}
export class TransformNode {
    /* Methods of Clutter.PaintNode */
    add_child(child: PaintNode): void
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    add_rectangle(rect: ActorBox): void
    add_rectangles(coords: number[]): void
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    add_texture_rectangles(coords: number[]): void
    get_framebuffer(): Cogl.Framebuffer
    paint(paint_context: PaintContext): void
    ref(): PaintNode
    set_name(name: string): void
    unref(): void
    static name: string
    static new(projection: Graphene.Matrix): TransformNode
    constructor(projection: Graphene.Matrix)
    /* Static methods and pseudo-constructors */
    static new(projection: Graphene.Matrix): TransformNode
}
export interface Transition_ConstructProps extends Timeline_ConstructProps {
    animatable?: Animatable
    interval?: Interval
    remove_on_complete?: boolean
}
export class Transition {
    /* Properties of Clutter.Transition */
    animatable: Animatable
    interval: Interval
    remove_on_complete: boolean
    /* Properties of Clutter.Timeline */
    actor: Actor
    auto_reverse: boolean
    delay: number
    direction: TimelineDirection
    duration: number
    frame_clock: FrameClock
    progress_mode: AnimationMode
    repeat_count: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.Transition */
    get_animatable(): Animatable
    get_interval(): Interval
    get_remove_on_complete(): boolean
    set_animatable(animatable?: Animatable | null): void
    set_from(value: any): void
    set_interval(interval?: Interval | null): void
    set_remove_on_complete(remove_complete: boolean): void
    set_to(value: any): void
    /* Methods of Clutter.Timeline */
    add_marker(marker_name: string, progress: number): void
    add_marker_at_time(marker_name: string, msecs: number): void
    advance(msecs: number): void
    advance_to_marker(marker_name: string): void
    get_actor(): Actor
    get_auto_reverse(): boolean
    get_cubic_bezier_progress(): [ /* returnType */ boolean, /* c_1 */ Graphene.Point, /* c_2 */ Graphene.Point ]
    get_current_repeat(): number
    get_delay(): number
    get_delta(): number
    get_direction(): TimelineDirection
    get_duration(): number
    get_duration_hint(): number
    get_elapsed_time(): number
    get_progress(): number
    get_progress_mode(): AnimationMode
    get_repeat_count(): number
    get_step_progress(): [ /* returnType */ boolean, /* n_steps */ number, /* step_mode */ StepMode ]
    has_marker(marker_name: string): boolean
    is_playing(): boolean
    list_markers(msecs: number): string[]
    pause(): void
    remove_marker(marker_name: string): void
    rewind(): void
    set_actor(actor?: Actor | null): void
    set_auto_reverse(reverse: boolean): void
    set_cubic_bezier_progress(c_1: Graphene.Point, c_2: Graphene.Point): void
    set_delay(msecs: number): void
    set_direction(direction: TimelineDirection): void
    set_duration(msecs: number): void
    set_frame_clock(frame_clock: FrameClock): void
    set_progress_func(func: TimelineProgressFunc | null): void
    set_progress_mode(mode: AnimationMode): void
    set_repeat_count(count: number): void
    set_step_progress(n_steps: number, step_mode: StepMode): void
    skip(msecs: number): void
    start(): void
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
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Transition */
    vfunc_attached(animatable: Animatable): void
    vfunc_compute_value(animatable: Animatable, interval: Interval, progress: number): void
    vfunc_detached(animatable: Animatable): void
    /* Virtual methods of Clutter.Timeline */
    vfunc_completed(): void
    vfunc_marker_reached(marker_name: string, msecs: number): void
    vfunc_new_frame(msecs: number): void
    vfunc_paused(): void
    vfunc_started(): void
    vfunc_stopped(is_finished: boolean): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Timeline */
    connect(sigName: "completed", callback: (($obj: Transition) => void)): number
    connect_after(sigName: "completed", callback: (($obj: Transition) => void)): number
    emit(sigName: "completed"): void
    connect(sigName: "marker-reached", callback: (($obj: Transition, marker_name: string, msecs: number) => void)): number
    connect_after(sigName: "marker-reached", callback: (($obj: Transition, marker_name: string, msecs: number) => void)): number
    emit(sigName: "marker-reached", marker_name: string, msecs: number): void
    connect(sigName: "new-frame", callback: (($obj: Transition, msecs: number) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: Transition, msecs: number) => void)): number
    emit(sigName: "new-frame", msecs: number): void
    connect(sigName: "paused", callback: (($obj: Transition) => void)): number
    connect_after(sigName: "paused", callback: (($obj: Transition) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "started", callback: (($obj: Transition) => void)): number
    connect_after(sigName: "started", callback: (($obj: Transition) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: Transition, is_finished: boolean) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Transition, is_finished: boolean) => void)): number
    emit(sigName: "stopped", is_finished: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::animatable", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::animatable", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interval", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interval", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remove-on-complete", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-on-complete", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-reverse", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-reverse", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delay", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame-clock", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-clock", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-mode", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-mode", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-count", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-count", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transition_ConstructProps)
    _init (config?: Transition_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TransitionGroup_ConstructProps extends Transition_ConstructProps {
}
export class TransitionGroup {
    /* Properties of Clutter.Transition */
    animatable: Animatable
    interval: Interval
    remove_on_complete: boolean
    /* Properties of Clutter.Timeline */
    actor: Actor
    auto_reverse: boolean
    delay: number
    direction: TimelineDirection
    duration: number
    frame_clock: FrameClock
    progress_mode: AnimationMode
    repeat_count: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.TransitionGroup */
    add_transition(transition: Transition): void
    remove_all(): void
    remove_transition(transition: Transition): void
    /* Methods of Clutter.Transition */
    get_animatable(): Animatable
    get_interval(): Interval
    get_remove_on_complete(): boolean
    set_animatable(animatable?: Animatable | null): void
    set_from(value: any): void
    set_interval(interval?: Interval | null): void
    set_remove_on_complete(remove_complete: boolean): void
    set_to(value: any): void
    /* Methods of Clutter.Timeline */
    add_marker(marker_name: string, progress: number): void
    add_marker_at_time(marker_name: string, msecs: number): void
    advance(msecs: number): void
    advance_to_marker(marker_name: string): void
    get_actor(): Actor
    get_auto_reverse(): boolean
    get_cubic_bezier_progress(): [ /* returnType */ boolean, /* c_1 */ Graphene.Point, /* c_2 */ Graphene.Point ]
    get_current_repeat(): number
    get_delay(): number
    get_delta(): number
    get_direction(): TimelineDirection
    get_duration(): number
    get_duration_hint(): number
    get_elapsed_time(): number
    get_progress(): number
    get_progress_mode(): AnimationMode
    get_repeat_count(): number
    get_step_progress(): [ /* returnType */ boolean, /* n_steps */ number, /* step_mode */ StepMode ]
    has_marker(marker_name: string): boolean
    is_playing(): boolean
    list_markers(msecs: number): string[]
    pause(): void
    remove_marker(marker_name: string): void
    rewind(): void
    set_actor(actor?: Actor | null): void
    set_auto_reverse(reverse: boolean): void
    set_cubic_bezier_progress(c_1: Graphene.Point, c_2: Graphene.Point): void
    set_delay(msecs: number): void
    set_direction(direction: TimelineDirection): void
    set_duration(msecs: number): void
    set_frame_clock(frame_clock: FrameClock): void
    set_progress_func(func: TimelineProgressFunc | null): void
    set_progress_mode(mode: AnimationMode): void
    set_repeat_count(count: number): void
    set_step_progress(n_steps: number, step_mode: StepMode): void
    skip(msecs: number): void
    start(): void
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
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of Clutter.Transition */
    vfunc_attached(animatable: Animatable): void
    vfunc_compute_value(animatable: Animatable, interval: Interval, progress: number): void
    vfunc_detached(animatable: Animatable): void
    /* Virtual methods of Clutter.Timeline */
    vfunc_completed(): void
    vfunc_marker_reached(marker_name: string, msecs: number): void
    vfunc_new_frame(msecs: number): void
    vfunc_paused(): void
    vfunc_started(): void
    vfunc_stopped(is_finished: boolean): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Timeline */
    connect(sigName: "completed", callback: (($obj: TransitionGroup) => void)): number
    connect_after(sigName: "completed", callback: (($obj: TransitionGroup) => void)): number
    emit(sigName: "completed"): void
    connect(sigName: "marker-reached", callback: (($obj: TransitionGroup, marker_name: string, msecs: number) => void)): number
    connect_after(sigName: "marker-reached", callback: (($obj: TransitionGroup, marker_name: string, msecs: number) => void)): number
    emit(sigName: "marker-reached", marker_name: string, msecs: number): void
    connect(sigName: "new-frame", callback: (($obj: TransitionGroup, msecs: number) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: TransitionGroup, msecs: number) => void)): number
    emit(sigName: "new-frame", msecs: number): void
    connect(sigName: "paused", callback: (($obj: TransitionGroup) => void)): number
    connect_after(sigName: "paused", callback: (($obj: TransitionGroup) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "started", callback: (($obj: TransitionGroup) => void)): number
    connect_after(sigName: "started", callback: (($obj: TransitionGroup) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: TransitionGroup, is_finished: boolean) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: TransitionGroup, is_finished: boolean) => void)): number
    emit(sigName: "stopped", is_finished: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::animatable", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::animatable", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interval", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interval", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remove-on-complete", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-on-complete", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-reverse", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-reverse", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delay", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame-clock", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-clock", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-mode", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-mode", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-count", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-count", callback: (($obj: TransitionGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TransitionGroup_ConstructProps)
    _init (config?: TransitionGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TransitionGroup
    static new(duration_ms: number): TransitionGroup
    static $gtype: GObject.Type
}
export interface VirtualInputDevice_ConstructProps extends GObject.Object_ConstructProps {
    device_type?: InputDeviceType
    seat?: Seat
}
export class VirtualInputDevice {
    /* Fields of Clutter.VirtualInputDevice */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.VirtualInputDevice */
    get_device_type(): number
    notify_absolute_motion(time_us: number, x: number, y: number): void
    notify_button(time_us: number, button: number, button_state: ButtonState): void
    notify_discrete_scroll(time_us: number, direction: ScrollDirection, scroll_source: ScrollSource): void
    notify_key(time_us: number, key: number, key_state: KeyState): void
    notify_keyval(time_us: number, keyval: number, key_state: KeyState): void
    notify_relative_motion(time_us: number, dx: number, dy: number): void
    notify_scroll_continuous(time_us: number, dx: number, dy: number, scroll_source: ScrollSource, finish_flags: ScrollFinishFlags): void
    notify_touch_down(time_us: number, slot: number, x: number, y: number): void
    notify_touch_motion(time_us: number, slot: number, x: number, y: number): void
    notify_touch_up(time_us: number, slot: number): void
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
    /* Virtual methods of Clutter.VirtualInputDevice */
    vfunc_notify_absolute_motion(time_us: number, x: number, y: number): void
    vfunc_notify_button(time_us: number, button: number, button_state: ButtonState): void
    vfunc_notify_discrete_scroll(time_us: number, direction: ScrollDirection, scroll_source: ScrollSource): void
    vfunc_notify_key(time_us: number, key: number, key_state: KeyState): void
    vfunc_notify_keyval(time_us: number, keyval: number, key_state: KeyState): void
    vfunc_notify_relative_motion(time_us: number, dx: number, dy: number): void
    vfunc_notify_scroll_continuous(time_us: number, dx: number, dy: number, scroll_source: ScrollSource, finish_flags: ScrollFinishFlags): void
    vfunc_notify_touch_down(time_us: number, slot: number, x: number, y: number): void
    vfunc_notify_touch_motion(time_us: number, slot: number, x: number, y: number): void
    vfunc_notify_touch_up(time_us: number, slot: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VirtualInputDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VirtualInputDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VirtualInputDevice_ConstructProps)
    _init (config?: VirtualInputDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ZoomAction_ConstructProps extends GestureAction_ConstructProps {
    zoom_axis?: ZoomAxis
}
export class ZoomAction {
    /* Properties of Clutter.ZoomAction */
    zoom_axis: ZoomAxis
    /* Properties of Clutter.GestureAction */
    n_touch_points: number
    /* Properties of Clutter.ActorMeta */
    readonly actor: Actor
    enabled: boolean
    name: string
    /* Fields of Clutter.GestureAction */
    parent_instance: Action
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Clutter.ZoomAction */
    get_focal_point(): /* point */ Graphene.Point
    get_transformed_focal_point(): /* point */ Graphene.Point
    get_zoom_axis(): ZoomAxis
    set_zoom_axis(axis: ZoomAxis): void
    /* Methods of Clutter.GestureAction */
    cancel(): void
    get_device(point: number): InputDevice
    get_last_event(point: number): Event
    get_motion_coords(point: number): [ /* motion_x */ number | null, /* motion_y */ number | null ]
    get_motion_delta(point: number): [ /* returnType */ number, /* delta_x */ number | null, /* delta_y */ number | null ]
    get_n_current_points(): number
    get_n_touch_points(): number
    get_press_coords(point: number): [ /* press_x */ number | null, /* press_y */ number | null ]
    get_release_coords(point: number): [ /* release_x */ number | null, /* release_y */ number | null ]
    get_sequence(point: number): EventSequence
    get_threshold_trigger_distance(): [ /* x */ number | null, /* y */ number | null ]
    get_threshold_trigger_edge(): GestureTriggerEdge
    get_threshold_trigger_egde(): GestureTriggerEdge
    get_velocity(point: number): [ /* returnType */ number, /* velocity_x */ number | null, /* velocity_y */ number | null ]
    set_n_touch_points(nb_points: number): void
    set_threshold_trigger_distance(x: number, y: number): void
    set_threshold_trigger_edge(edge: GestureTriggerEdge): void
    /* Methods of Clutter.ActorMeta */
    get_actor(): Actor
    get_enabled(): boolean
    get_name(): string
    set_enabled(is_enabled: boolean): void
    set_name(name: string): void
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
    /* Virtual methods of Clutter.ZoomAction */
    vfunc_zoom(actor: Actor, focal_point: Graphene.Point, factor: number): boolean
    /* Virtual methods of Clutter.GestureAction */
    vfunc_gesture_begin(actor: Actor): boolean
    vfunc_gesture_cancel(actor: Actor): void
    vfunc_gesture_end(actor: Actor): void
    vfunc_gesture_prepare(actor: Actor): boolean
    vfunc_gesture_progress(actor: Actor): boolean
    /* Virtual methods of Clutter.ActorMeta */
    vfunc_set_actor(actor?: Actor | null): void
    vfunc_set_enabled(is_enabled: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.ZoomAction */
    connect(sigName: "zoom", callback: (($obj: ZoomAction, actor: Actor, focal_point: Graphene.Point, factor: number) => boolean)): number
    connect_after(sigName: "zoom", callback: (($obj: ZoomAction, actor: Actor, focal_point: Graphene.Point, factor: number) => boolean)): number
    emit(sigName: "zoom", actor: Actor, focal_point: Graphene.Point, factor: number): void
    /* Signals of Clutter.GestureAction */
    connect(sigName: "gesture-begin", callback: (($obj: ZoomAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-begin", callback: (($obj: ZoomAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-begin", actor: Actor): void
    connect(sigName: "gesture-cancel", callback: (($obj: ZoomAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-cancel", callback: (($obj: ZoomAction, actor: Actor) => void)): number
    emit(sigName: "gesture-cancel", actor: Actor): void
    connect(sigName: "gesture-end", callback: (($obj: ZoomAction, actor: Actor) => void)): number
    connect_after(sigName: "gesture-end", callback: (($obj: ZoomAction, actor: Actor) => void)): number
    emit(sigName: "gesture-end", actor: Actor): void
    connect(sigName: "gesture-progress", callback: (($obj: ZoomAction, actor: Actor) => boolean)): number
    connect_after(sigName: "gesture-progress", callback: (($obj: ZoomAction, actor: Actor) => boolean)): number
    emit(sigName: "gesture-progress", actor: Actor): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::zoom-axis", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-axis", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-touch-points", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-touch-points", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ZoomAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ZoomAction_ConstructProps)
    _init (config?: ZoomAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ZoomAction
    static $gtype: GObject.Type
}
export abstract class ActionClass {
    static name: string
}
export class ActorBox {
    /* Fields of Clutter.ActorBox */
    x1: number
    y1: number
    x2: number
    y2: number
    /* Methods of Clutter.ActorBox */
    clamp_to_pixel(): void
    contains(x: number, y: number): boolean
    copy(): ActorBox
    equal(box_b: ActorBox): boolean
    free(): void
    from_vertices(verts: Graphene.Point3D[]): void
    get_area(): number
    get_height(): number
    get_origin(): [ /* x */ number | null, /* y */ number | null ]
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_width(): number
    get_x(): number
    get_y(): number
    init(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox
    init_rect(x: number, y: number, width: number, height: number): void
    interpolate(final: ActorBox, progress: number): /* result */ ActorBox
    is_initialized(): boolean
    scale(scale: number): void
    set_origin(x: number, y: number): void
    set_size(width: number, height: number): void
    union(b: ActorBox): /* result */ ActorBox
    static name: string
    static new(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox
    constructor(x_1: number, y_1: number, x_2: number, y_2: number)
    /* Static methods and pseudo-constructors */
    static new(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox
    static alloc(): ActorBox
}
export abstract class ActorClass {
    /* Fields of Clutter.ActorClass */
    show: (self: Actor) => void
    hide: (self: Actor) => void
    hide_all: (self: Actor) => void
    realize: (self: Actor) => void
    unrealize: (self: Actor) => void
    map: (self: Actor) => void
    unmap: (self: Actor) => void
    paint: (self: Actor, paint_context: PaintContext) => void
    parent_set: (actor: Actor, old_parent: Actor) => void
    destroy: (self: Actor) => void
    pick: (actor: Actor, pick_context: PickContext) => void
    get_preferred_width: (self: Actor, for_height: number) => [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_preferred_height: (self: Actor, for_width: number) => [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    allocate: (self: Actor, box: ActorBox) => void
    apply_transform: (actor: Actor, matrix: Graphene.Matrix) => void
    event: (actor: Actor, event: Event) => boolean
    button_press_event: (actor: Actor, event: ButtonEvent) => boolean
    button_release_event: (actor: Actor, event: ButtonEvent) => boolean
    scroll_event: (actor: Actor, event: ScrollEvent) => boolean
    key_press_event: (actor: Actor, event: KeyEvent) => boolean
    key_release_event: (actor: Actor, event: KeyEvent) => boolean
    motion_event: (actor: Actor, event: MotionEvent) => boolean
    enter_event: (actor: Actor, event: CrossingEvent) => boolean
    leave_event: (actor: Actor, event: CrossingEvent) => boolean
    captured_event: (actor: Actor, event: Event) => boolean
    key_focus_in: (actor: Actor) => void
    key_focus_out: (actor: Actor) => void
    queue_relayout: (self: Actor) => void
    get_accessible: (self: Actor) => Atk.Object
    get_paint_volume: (actor: Actor, volume: PaintVolume) => boolean
    has_overlaps: (self: Actor) => boolean
    paint_node: (self: Actor, root: PaintNode) => void
    touch_event: (self: Actor, event: TouchEvent) => boolean
    has_accessible: (self: Actor) => boolean
    resource_scale_changed: (self: Actor) => void
    calculate_resource_scale: (self: Actor, phase: number) => number
    static name: string
}
export class ActorIter {
    /* Methods of Clutter.ActorIter */
    destroy(): void
    init(root: Actor): void
    is_valid(): boolean
    next(): [ /* returnType */ boolean, /* child */ Actor ]
    prev(): [ /* returnType */ boolean, /* child */ Actor ]
    remove(): void
    static name: string
}
export abstract class ActorMetaClass {
    /* Fields of Clutter.ActorMetaClass */
    set_actor: (meta: ActorMeta, actor?: Actor | null) => void
    set_enabled: (meta: ActorMeta, is_enabled: boolean) => void
    static name: string
}
export class ActorMetaPrivate {
    static name: string
}
export abstract class ActorNodeClass {
    static name: string
}
export class ActorPrivate {
    static name: string
}
export abstract class AlignConstraintClass {
    static name: string
}
export abstract class AnimatableInterface {
    /* Fields of Clutter.AnimatableInterface */
    find_property: (animatable: Animatable, property_name: string) => GObject.ParamSpec
    get_initial_state: (animatable: Animatable, property_name: string, value: any) => void
    set_final_state: (animatable: Animatable, property_name: string, value: any) => void
    interpolate_value: (animatable: Animatable, property_name: string, interval: Interval, progress: number) => [ /* returnType */ boolean, /* value */ any ]
    get_actor: (animatable: Animatable) => Actor
    static name: string
}
export class AnyEvent {
    /* Fields of Clutter.AnyEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    static name: string
}
export abstract class BackendClass {
    static name: string
}
export abstract class BinLayoutClass {
    static name: string
}
export class BinLayoutPrivate {
    static name: string
}
export abstract class BindConstraintClass {
    static name: string
}
export abstract class BindingPoolClass {
    static name: string
}
export abstract class BlitNodeClass {
    static name: string
}
export abstract class BlurEffectClass {
    static name: string
}
export abstract class BlurNodeClass {
    static name: string
}
export abstract class BoxLayoutClass {
    static name: string
}
export class BoxLayoutPrivate {
    static name: string
}
export abstract class BrightnessContrastEffectClass {
    static name: string
}
export class ButtonEvent {
    /* Fields of Clutter.ButtonEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    x: number
    y: number
    modifier_state: ModifierType
    button: number
    click_count: number
    axes: number
    device: InputDevice
    evdev_code: number
    static name: string
}
export abstract class CanvasClass {
    /* Fields of Clutter.CanvasClass */
    draw: (canvas: Canvas, cr: cairo.Context, width: number, height: number) => boolean
    static name: string
}
export class CanvasPrivate {
    static name: string
}
export class Capture {
    /* Fields of Clutter.Capture */
    image: cairo.Surface
    rect: cairo.RectangleInt
    static name: string
}
export abstract class ChildMetaClass {
    static name: string
}
export abstract class ClickActionClass {
    /* Fields of Clutter.ClickActionClass */
    clicked: (action: ClickAction, actor: Actor) => void
    long_press: (action: ClickAction, actor: Actor, state: LongPressState) => boolean
    static name: string
}
export class ClickActionPrivate {
    static name: string
}
export abstract class ClipNodeClass {
    static name: string
}
export abstract class CloneClass {
    static name: string
}
export class ClonePrivate {
    static name: string
}
export class Color {
    /* Fields of Clutter.Color */
    red: number
    green: number
    blue: number
    alpha: number
    /* Methods of Clutter.Color */
    add(b: Color): /* result */ Color
    copy(): Color
    darken(): /* result */ Color
    equal(v2: Color): boolean
    free(): void
    hash(): number
    init(red: number, green: number, blue: number, alpha: number): Color
    interpolate(final: Color, progress: number): /* result */ Color
    lighten(): /* result */ Color
    shade(factor: number): /* result */ Color
    subtract(b: Color): /* result */ Color
    to_hls(): [ /* hue */ number, /* luminance */ number, /* saturation */ number ]
    to_pixel(): number
    to_string(): string
    static name: string
    static new(red: number, green: number, blue: number, alpha: number): Color
    constructor(red: number, green: number, blue: number, alpha: number)
    /* Static methods and pseudo-constructors */
    static alloc(): Color
    static new(red: number, green: number, blue: number, alpha: number): Color
    static from_hls(hue: number, luminance: number, saturation: number): /* color */ Color
    static from_pixel(pixel: number): /* color */ Color
    static from_string(str: string): [ /* returnType */ boolean, /* color */ Color ]
    static get_static(color: StaticColor): Color
}
export abstract class ColorNodeClass {
    static name: string
}
export abstract class ColorizeEffectClass {
    static name: string
}
export abstract class ConstraintClass {
    /* Fields of Clutter.ConstraintClass */
    update_allocation: (constraint: Constraint, actor: Actor, allocation: ActorBox) => void
    update_preferred_size: (constraint: Constraint, actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number) => [ /* minimum_size */ number, /* natural_size */ number ]
    static name: string
}
export abstract class ContainerIface {
    /* Fields of Clutter.ContainerIface */
    add: (container: Container, actor: Actor) => void
    remove: (container: Container, actor: Actor) => void
    raise: (container: Container, actor: Actor, sibling?: Actor | null) => void
    lower: (container: Container, actor: Actor, sibling?: Actor | null) => void
    sort_depth_order: (container: Container) => void
    child_meta_type: GObject.Type
    create_child_meta: (container: Container, actor: Actor) => void
    destroy_child_meta: (container: Container, actor: Actor) => void
    get_child_meta: (container: Container, actor: Actor) => ChildMeta
    actor_added: (container: Container, actor: Actor) => void
    actor_removed: (container: Container, actor: Actor) => void
    child_notify: (container: Container, child: Actor, pspec: GObject.ParamSpec) => void
    static name: string
}
export abstract class ContentInterface {
    /* Fields of Clutter.ContentInterface */
    get_preferred_size: (content: Content) => [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    paint_content: (content: Content, actor: Actor, node: PaintNode, paint_context: PaintContext) => void
    attached: (content: Content, actor: Actor) => void
    detached: (content: Content, actor: Actor) => void
    invalidate: (content: Content) => void
    invalidate_size: (content: Content) => void
    static name: string
}
export class CrossingEvent {
    /* Fields of Clutter.CrossingEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    x: number
    y: number
    device: InputDevice
    sequence: EventSequence
    related: Actor
    static name: string
}
export abstract class DeformEffectClass {
    /* Fields of Clutter.DeformEffectClass */
    deform_vertex: (effect: DeformEffect, width: number, height: number, vertex: Cogl.TextureVertex) => void
    static name: string
}
export class DeformEffectPrivate {
    static name: string
}
export abstract class DesaturateEffectClass {
    static name: string
}
export class DeviceEvent {
    /* Fields of Clutter.DeviceEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    device: InputDevice
    static name: string
}
export abstract class EffectClass {
    /* Fields of Clutter.EffectClass */
    pre_paint: (effect: Effect, node: PaintNode, paint_context: PaintContext) => boolean
    post_paint: (effect: Effect, node: PaintNode, paint_context: PaintContext) => void
    modify_paint_volume: (effect: Effect, volume: PaintVolume) => boolean
    paint: (effect: Effect, node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags) => void
    paint_node: (effect: Effect, node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags) => void
    pick: (effect: Effect, pick_context: PickContext) => void
    static name: string
}
export class EventSequence {
    /* Methods of Clutter.EventSequence */
    get_slot(): number
    static name: string
}
export abstract class FixedLayoutClass {
    static name: string
}
export abstract class FlowLayoutClass {
    static name: string
}
export class FlowLayoutPrivate {
    static name: string
}
export class Frame {
    /* Methods of Clutter.Frame */
    has_result(): boolean
    set_result(result: FrameResult): void
    static name: string
}
export abstract class FrameClockClass {
    /* Fields of Clutter.FrameClockClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class FrameInfo {
    /* Fields of Clutter.FrameInfo */
    frame_counter: number
    presentation_time: number
    refresh_rate: number
    flags: FrameInfoFlag
    sequence: number
    static name: string
}
export class FrameListenerIface {
    /* Fields of Clutter.FrameListenerIface */
    before_frame: (frame_clock: FrameClock, frame_count: number) => void
    frame: (frame_clock: FrameClock, frame_count: number, time_us: number) => FrameResult
    static name: string
}
export abstract class GestureActionClass {
    /* Fields of Clutter.GestureActionClass */
    gesture_begin: (action: GestureAction, actor: Actor) => boolean
    gesture_progress: (action: GestureAction, actor: Actor) => boolean
    gesture_end: (action: GestureAction, actor: Actor) => void
    gesture_cancel: (action: GestureAction, actor: Actor) => void
    gesture_prepare: (action: GestureAction, actor: Actor) => boolean
    static name: string
}
export class GestureActionPrivate {
    static name: string
}
export abstract class GridLayoutClass {
    static name: string
}
export class GridLayoutPrivate {
    static name: string
}
export class IMEvent {
    /* Fields of Clutter.IMEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    text: string
    offset: number
    len: number
    static name: string
}
export abstract class ImageClass {
    static name: string
}
export class ImagePrivate {
    static name: string
}
export abstract class InputDeviceClass {
    /* Fields of Clutter.InputDeviceClass */
    parent_class: GObject.ObjectClass
    is_mode_switch_button: (device: InputDevice, group: number, button: number) => boolean
    get_group_n_modes: (device: InputDevice, group: number) => number
    is_grouped: (device: InputDevice, other_device: InputDevice) => boolean
    get_pad_feature_group: (device: InputDevice, feature: InputDevicePadFeature, n_feature: number) => number
    static name: string
}
export abstract class InputDeviceToolClass {
    /* Fields of Clutter.InputDeviceToolClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class InputFocusClass {
    /* Fields of Clutter.InputFocusClass */
    parent_class: GObject.ObjectClass
    iface: GObject.TypeInterface
    focus_in: (focus: InputFocus, input_method: InputMethod) => void
    focus_out: (focus: InputFocus) => void
    request_surrounding: (focus: InputFocus) => void
    delete_surrounding: (focus: InputFocus, offset: number, len: number) => void
    commit_text: (focus: InputFocus, text: string) => void
    set_preedit_text: (focus: InputFocus, preedit: string, cursor: number) => void
    static name: string
}
export abstract class InputMethodClass {
    /* Fields of Clutter.InputMethodClass */
    parent_class: GObject.ObjectClass
    focus_in: (im: InputMethod, actor: InputFocus) => void
    focus_out: (im: InputMethod) => void
    reset: (im: InputMethod) => void
    set_cursor_location: (im: InputMethod, rect: Graphene.Rect) => void
    set_surrounding: (im: InputMethod, text: string, cursor: number, anchor: number) => void
    update_content_hints: (im: InputMethod, hint: InputContentHintFlags) => void
    update_content_purpose: (im: InputMethod, purpose: InputContentPurpose) => void
    filter_key_event: (im: InputMethod, key: Event) => boolean
    static name: string
}
export abstract class IntervalClass {
    /* Fields of Clutter.IntervalClass */
    validate: (interval: Interval, pspec: GObject.ParamSpec) => boolean
    compute_value: (interval: Interval, factor: number) => [ /* returnType */ boolean, /* value */ any ]
    static name: string
}
export class IntervalPrivate {
    static name: string
}
export class KeyEvent {
    /* Fields of Clutter.KeyEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    modifier_state: ModifierType
    keyval: number
    hardware_keycode: number
    unicode_value: number
    evdev_code: number
    device: InputDevice
    static name: string
}
export abstract class KeyframeTransitionClass {
    static name: string
}
export class KeyframeTransitionPrivate {
    static name: string
}
export abstract class KeymapClass {
    /* Fields of Clutter.KeymapClass */
    parent_class: GObject.ObjectClass
    get_direction: (keymap: Keymap) => Pango.Direction
    static name: string
}
export class Knot {
    /* Fields of Clutter.Knot */
    x: number
    y: number
    /* Methods of Clutter.Knot */
    copy(): Knot
    equal(knot_b: Knot): boolean
    free(): void
    static name: string
}
export abstract class LayerNodeClass {
    static name: string
}
export abstract class LayoutManagerClass {
    /* Fields of Clutter.LayoutManagerClass */
    get_preferred_width: (manager: LayoutManager, container: Container, for_height: number) => [ /* min_width_p */ number | null, /* nat_width_p */ number | null ]
    get_preferred_height: (manager: LayoutManager, container: Container, for_width: number) => [ /* min_height_p */ number | null, /* nat_height_p */ number | null ]
    allocate: (manager: LayoutManager, container: Container, allocation: ActorBox) => void
    set_container: (manager: LayoutManager, container?: Container | null) => void
    get_child_meta_type: (manager: LayoutManager) => GObject.Type
    layout_changed: (manager: LayoutManager) => void
    static name: string
}
export abstract class LayoutMetaClass {
    static name: string
}
export class Margin {
    /* Fields of Clutter.Margin */
    left: number
    right: number
    top: number
    bottom: number
    /* Methods of Clutter.Margin */
    copy(): Margin
    free(): void
    static name: string
    static new(): Margin
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Margin
}
export class MotionEvent {
    /* Fields of Clutter.MotionEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    x: number
    y: number
    modifier_state: ModifierType
    axes: number
    device: InputDevice
    time_us: number
    dx: number
    dy: number
    dx_unaccel: number
    dy_unaccel: number
    static name: string
}
export abstract class OffscreenEffectClass {
    /* Fields of Clutter.OffscreenEffectClass */
    create_texture: (effect: OffscreenEffect, width: number, height: number) => Cogl.Handle
    paint_target: (effect: OffscreenEffect, node: PaintNode, paint_context: PaintContext) => void
    static name: string
}
export class OffscreenEffectPrivate {
    static name: string
}
export class PadButtonEvent {
    /* Fields of Clutter.PadButtonEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    button: number
    group: number
    device: InputDevice
    mode: number
    static name: string
}
export class PadRingEvent {
    /* Fields of Clutter.PadRingEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    device: InputDevice
    ring_source: InputDevicePadSource
    ring_number: number
    group: number
    angle: number
    mode: number
    static name: string
}
export class PadStripEvent {
    /* Fields of Clutter.PadStripEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    device: InputDevice
    strip_source: InputDevicePadSource
    strip_number: number
    group: number
    value: number
    mode: number
    static name: string
}
export abstract class PageTurnEffectClass {
    static name: string
}
export class PaintContext {
    /* Methods of Clutter.PaintContext */
    destroy(): void
    get_framebuffer(): Cogl.Framebuffer
    get_redraw_clip(): cairo.Region
    pop_framebuffer(): void
    push_framebuffer(framebuffer: Cogl.Framebuffer): void
    ref(): PaintContext
    unref(): void
    static name: string
}
export abstract class PaintNodeClass {
    static name: string
}
export class PaintNodePrivate {
    static name: string
}
export class PaintVolume {
    /* Methods of Clutter.PaintVolume */
    copy(): PaintVolume
    free(): void
    get_depth(): number
    get_height(): number
    get_origin(): /* vertex */ Graphene.Point3D
    get_width(): number
    set_depth(depth: number): void
    set_from_allocation(actor: Actor): boolean
    set_height(height: number): void
    set_origin(origin: Graphene.Point3D): void
    set_width(width: number): void
    union(another_pv: PaintVolume): void
    union_box(box: ActorBox): void
    static name: string
}
export abstract class PanActionClass {
    /* Fields of Clutter.PanActionClass */
    pan: (action: PanAction, actor: Actor, is_interpolated: boolean) => boolean
    pan_stopped: (action: PanAction, actor: Actor) => void
    static name: string
}
export class PanActionPrivate {
    static name: string
}
export class ParamSpecUnits {
    /* Fields of Clutter.ParamSpecUnits */
    default_type: UnitType
    default_value: number
    minimum: number
    maximum: number
    static name: string
}
export abstract class PathClass {
    static name: string
}
export abstract class PathConstraintClass {
    static name: string
}
export class PathNode {
    /* Fields of Clutter.PathNode */
    type: PathNodeType
    points: Knot[]
    /* Methods of Clutter.PathNode */
    copy(): PathNode
    equal(node_b: PathNode): boolean
    free(): void
    static name: string
}
export class PathPrivate {
    static name: string
}
export class Perspective {
    /* Fields of Clutter.Perspective */
    fovy: number
    aspect: number
    z_near: number
    z_far: number
    static name: string
}
export class PickContext {
    /* Methods of Clutter.PickContext */
    destroy(): void
    get_transform(): /* out_matrix */ Graphene.Matrix
    log_pick(box: ActorBox, actor: Actor): void
    pop_clip(): void
    pop_transform(): void
    push_clip(box: ActorBox): void
    push_transform(transform: Graphene.Matrix): void
    ref(): PickContext
    unref(): void
    static name: string
}
export abstract class PipelineNodeClass {
    static name: string
}
export class PointerA11ySettings {
    /* Fields of Clutter.PointerA11ySettings */
    controls: PointerA11yFlags
    dwell_click_type: PointerA11yDwellClickType
    dwell_mode: PointerA11yDwellMode
    dwell_gesture_single: PointerA11yDwellDirection
    dwell_gesture_double: PointerA11yDwellDirection
    dwell_gesture_drag: PointerA11yDwellDirection
    dwell_gesture_secondary: PointerA11yDwellDirection
    secondary_click_delay: number
    dwell_delay: number
    dwell_threshold: number
    static name: string
}
export abstract class PropertyTransitionClass {
    static name: string
}
export class PropertyTransitionPrivate {
    static name: string
}
export class ProximityEvent {
    /* Fields of Clutter.ProximityEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    device: InputDevice
    static name: string
}
export abstract class RootNodeClass {
    static name: string
}
export abstract class RotateActionClass {
    /* Fields of Clutter.RotateActionClass */
    rotate: (action: RotateAction, actor: Actor, angle: number) => boolean
    static name: string
}
export class RotateActionPrivate {
    static name: string
}
export abstract class ScriptClass {
    /* Fields of Clutter.ScriptClass */
    get_type_from_name: (script: Script, type_name: string) => GObject.Type
    static name: string
}
export class ScriptPrivate {
    static name: string
}
export abstract class ScriptableIface {
    /* Fields of Clutter.ScriptableIface */
    set_id: (scriptable: Scriptable, id_: string) => void
    get_id: (scriptable: Scriptable) => string
    parse_custom_node: (scriptable: Scriptable, script: Script, value: any, name: string, node: Json.Node) => boolean
    set_custom_property: (scriptable: Scriptable, script: Script, name: string, value: any) => void
    static name: string
}
export abstract class ScrollActorClass {
    static name: string
}
export class ScrollActorPrivate {
    static name: string
}
export class ScrollEvent {
    /* Fields of Clutter.ScrollEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    x: number
    y: number
    direction: ScrollDirection
    modifier_state: ModifierType
    axes: number
    device: InputDevice
    scroll_source: ScrollSource
    finish_flags: ScrollFinishFlags
    static name: string
}
export abstract class SeatClass {
    /* Fields of Clutter.SeatClass */
    parent_class: GObject.ObjectClass
    get_pointer: (seat: Seat) => InputDevice
    get_keyboard: (seat: Seat) => InputDevice
    bell_notify: (seat: Seat) => void
    get_keymap: (seat: Seat) => Keymap
    handle_event_post: (seat: Seat, event: Event) => boolean
    warp_pointer: (seat: Seat, x: number, y: number) => void
    query_state: (seat: Seat, device: InputDevice, sequence: EventSequence, coords: Graphene.Point, modifiers: ModifierType) => boolean
    create_virtual_device: (seat: Seat, device_type: InputDeviceType) => VirtualInputDevice
    get_supported_virtual_device_types: (seat: Seat) => VirtualDeviceType
    static name: string
}
export abstract class SettingsClass {
    static name: string
}
export class Shader {
    static name: string
}
export abstract class ShaderEffectClass {
    /* Fields of Clutter.ShaderEffectClass */
    get_static_shader_source: (effect: ShaderEffect) => string
    static name: string
}
export class ShaderEffectPrivate {
    static name: string
}
export abstract class SnapConstraintClass {
    static name: string
}
export abstract class StageClass {
    /* Fields of Clutter.StageClass */
    activate: (stage: Stage) => void
    deactivate: (stage: Stage) => void
    before_paint: (stage: Stage, view: StageView) => void
    paint_view: (stage: Stage, view: StageView, redraw_clip: cairo.Region) => void
    static name: string
}
export abstract class StageManagerClass {
    /* Fields of Clutter.StageManagerClass */
    stage_added: (stage_manager: StageManager, stage: Stage) => void
    stage_removed: (stage_manager: StageManager, stage: Stage) => void
    static name: string
}
export class StagePrivate {
    static name: string
}
export abstract class StageViewClass {
    /* Fields of Clutter.StageViewClass */
    parent_class: GObject.ObjectClass
    setup_offscreen_blit_pipeline: (view: StageView, pipeline: Cogl.Pipeline) => void
    get_offscreen_transformation_matrix: (view: StageView, matrix: Graphene.Matrix) => void
    transform_rect_to_onscreen: (view: StageView, src_rect: cairo.RectangleInt, dst_width: number, dst_height: number, dst_rect: cairo.RectangleInt) => void
    static name: string
}
export abstract class SwipeActionClass {
    /* Fields of Clutter.SwipeActionClass */
    swept: (action: SwipeAction, actor: Actor, direction: SwipeDirection) => void
    swipe: (action: SwipeAction, actor: Actor, direction: SwipeDirection) => boolean
    static name: string
}
export class SwipeActionPrivate {
    static name: string
}
export abstract class TapActionClass {
    /* Fields of Clutter.TapActionClass */
    tap: (action: TapAction, actor: Actor) => boolean
    static name: string
}
export class TapActionPrivate {
    static name: string
}
export abstract class TextBufferClass {
    /* Fields of Clutter.TextBufferClass */
    inserted_text: (buffer: TextBuffer, position: number, chars: string, n_chars: number) => void
    deleted_text: (buffer: TextBuffer, position: number, n_chars: number) => void
    get_text: (buffer: TextBuffer, n_bytes: number) => string
    get_length: (buffer: TextBuffer) => number
    insert_text: (buffer: TextBuffer, position: number, chars: string, n_chars: number) => number
    delete_text: (buffer: TextBuffer, position: number, n_chars: number) => number
    static name: string
}
export class TextBufferPrivate {
    static name: string
}
export abstract class TextClass {
    /* Fields of Clutter.TextClass */
    text_changed: (self: Text) => void
    activate: (self: Text) => void
    cursor_event: (self: Text, rect: Graphene.Rect) => void
    cursor_changed: (self: Text) => void
    static name: string
}
export abstract class TextNodeClass {
    static name: string
}
export class TextPrivate {
    static name: string
}
export abstract class TextureNodeClass {
    static name: string
}
export abstract class TimelineClass {
    /* Fields of Clutter.TimelineClass */
    started: (timeline: Timeline) => void
    completed: (timeline: Timeline) => void
    paused: (timeline: Timeline) => void
    new_frame: (timeline: Timeline, msecs: number) => void
    marker_reached: (timeline: Timeline, marker_name: string, msecs: number) => void
    stopped: (timeline: Timeline, is_finished: boolean) => void
    static name: string
}
export class TimelinePrivate {
    static name: string
}
export class TouchEvent {
    /* Fields of Clutter.TouchEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    x: number
    y: number
    sequence: EventSequence
    modifier_state: ModifierType
    axes: number
    device: InputDevice
    static name: string
}
export class TouchpadPinchEvent {
    /* Fields of Clutter.TouchpadPinchEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    phase: TouchpadGesturePhase
    x: number
    y: number
    dx: number
    dy: number
    dx_unaccel: number
    dy_unaccel: number
    angle_delta: number
    scale: number
    n_fingers: number
    static name: string
}
export class TouchpadSwipeEvent {
    /* Fields of Clutter.TouchpadSwipeEvent */
    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    source: Actor
    phase: TouchpadGesturePhase
    n_fingers: number
    x: number
    y: number
    dx: number
    dy: number
    dx_unaccel: number
    dy_unaccel: number
    static name: string
}
export abstract class TransformNodeClass {
    static name: string
}
export abstract class TransitionClass {
    /* Fields of Clutter.TransitionClass */
    attached: (transition: Transition, animatable: Animatable) => void
    detached: (transition: Transition, animatable: Animatable) => void
    compute_value: (transition: Transition, animatable: Animatable, interval: Interval, progress: number) => void
    static name: string
}
export abstract class TransitionGroupClass {
    static name: string
}
export class TransitionGroupPrivate {
    static name: string
}
export class TransitionPrivate {
    static name: string
}
export class Units {
    /* Methods of Clutter.Units */
    copy(): Units
    free(): void
    get_unit_type(): UnitType
    get_unit_value(): number
    to_pixels(): number
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static from_cm(cm: number): /* units */ Units
    static from_em(em: number): /* units */ Units
    static from_em_for_font(font_name: string | null, em: number): /* units */ Units
    static from_mm(mm: number): /* units */ Units
    static from_pixels(px: number): /* units */ Units
    static from_pt(pt: number): /* units */ Units
    static from_string(str: string): [ /* returnType */ boolean, /* units */ Units ]
}
export abstract class VirtualInputDeviceClass {
    /* Fields of Clutter.VirtualInputDeviceClass */
    parent_class: GObject.ObjectClass
    notify_relative_motion: (virtual_device: VirtualInputDevice, time_us: number, dx: number, dy: number) => void
    notify_absolute_motion: (virtual_device: VirtualInputDevice, time_us: number, x: number, y: number) => void
    notify_button: (virtual_device: VirtualInputDevice, time_us: number, button: number, button_state: ButtonState) => void
    notify_key: (virtual_device: VirtualInputDevice, time_us: number, key: number, key_state: KeyState) => void
    notify_keyval: (virtual_device: VirtualInputDevice, time_us: number, keyval: number, key_state: KeyState) => void
    notify_discrete_scroll: (virtual_device: VirtualInputDevice, time_us: number, direction: ScrollDirection, scroll_source: ScrollSource) => void
    notify_scroll_continuous: (virtual_device: VirtualInputDevice, time_us: number, dx: number, dy: number, scroll_source: ScrollSource, finish_flags: ScrollFinishFlags) => void
    notify_touch_down: (virtual_device: VirtualInputDevice, time_us: number, slot: number, x: number, y: number) => void
    notify_touch_motion: (virtual_device: VirtualInputDevice, time_us: number, slot: number, x: number, y: number) => void
    notify_touch_up: (virtual_device: VirtualInputDevice, time_us: number, slot: number) => void
    static name: string
}
export abstract class ZoomActionClass {
    /* Fields of Clutter.ZoomActionClass */
    zoom: (action: ZoomAction, actor: Actor, focal_point: Graphene.Point, factor: number) => boolean
    static name: string
}
export class ZoomActionPrivate {
    static name: string
}
export class Event {
    /* Methods of Clutter.Event */
    copy(): Event
    free(): void
    get_angle(target: Event): number
    get_axes(): [ /* returnType */ number, /* n_axes */ number ]
    get_button(): number
    get_click_count(): number
    get_coords(): [ /* x */ number, /* y */ number ]
    get_device(): InputDevice
    get_device_tool(): InputDeviceTool
    get_device_type(): InputDeviceType
    get_distance(target: Event): number
    get_event_code(): number
    get_event_sequence(): EventSequence
    get_flags(): EventFlags
    get_gesture_motion_delta(): [ /* dx */ number | null, /* dy */ number | null ]
    get_gesture_motion_delta_unaccelerated(): [ /* dx */ number | null, /* dy */ number | null ]
    get_gesture_phase(): TouchpadGesturePhase
    get_gesture_pinch_angle_delta(): number
    get_gesture_pinch_scale(): number
    get_key_code(): number
    get_key_symbol(): number
    get_key_unicode(): number
    get_mode_group(): number
    get_pad_event_details(): [ /* returnType */ boolean, /* number */ number | null, /* mode */ number | null, /* value */ number | null ]
    get_position(position: Graphene.Point): void
    get_related(): Actor
    get_relative_motion(dx: number, dy: number, dx_unaccel: number, dy_unaccel: number): boolean
    get_scroll_delta(): [ /* dx */ number, /* dy */ number ]
    get_scroll_direction(): ScrollDirection
    get_scroll_finish_flags(): ScrollFinishFlags
    get_scroll_source(): ScrollSource
    get_source(): Actor
    get_source_device(): InputDevice
    get_stage(): Stage
    get_state(): ModifierType
    get_state_full(): [ /* button_state */ ModifierType | null, /* base_state */ ModifierType | null, /* latched_state */ ModifierType | null, /* locked_state */ ModifierType | null, /* effective_state */ ModifierType | null ]
    get_time(): number
    get_time_us(): number
    get_touchpad_gesture_finger_count(): number
    has_control_modifier(): boolean
    has_shift_modifier(): boolean
    is_pointer_emulated(): boolean
    put(): void
    set_button(button: number): void
    set_coords(x: number, y: number): void
    set_device(device?: InputDevice | null): void
    set_device_tool(tool?: InputDeviceTool | null): void
    set_flags(flags: EventFlags): void
    set_key_code(key_code: number): void
    set_key_symbol(key_sym: number): void
    set_key_unicode(key_unicode: number): void
    set_related(actor?: Actor | null): void
    set_scroll_delta(dx: number, dy: number): void
    set_scroll_direction(direction: ScrollDirection): void
    set_source(actor?: Actor | null): void
    set_source_device(device?: InputDevice | null): void
    set_stage(stage?: Stage | null): void
    set_state(state: ModifierType): void
    set_time(time_: number): void
    type(): EventType
    static name: string
    static new(type: EventType): Event
    constructor(type: EventType)
    /* Static methods and pseudo-constructors */
    static new(type: EventType): Event
    static add_filter(stage: Stage | null, func: EventFilterFunc): number
    static get(): Event
    static remove_filter(id: number): void
}