/**
 * Pango-1.0
 */

/// <reference types="node" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Pango {

export enum Alignment {
    LEFT,
    CENTER,
    RIGHT,
}
export enum AttrType {
    INVALID,
    LANGUAGE,
    FAMILY,
    STYLE,
    WEIGHT,
    VARIANT,
    STRETCH,
    SIZE,
    FONT_DESC,
    FOREGROUND,
    BACKGROUND,
    UNDERLINE,
    STRIKETHROUGH,
    RISE,
    SHAPE,
    SCALE,
    FALLBACK,
    LETTER_SPACING,
    UNDERLINE_COLOR,
    STRIKETHROUGH_COLOR,
    ABSOLUTE_SIZE,
    GRAVITY,
    GRAVITY_HINT,
    FONT_FEATURES,
    FOREGROUND_ALPHA,
    BACKGROUND_ALPHA,
    ALLOW_BREAKS,
    SHOW,
    INSERT_HYPHENS,
    OVERLINE,
    OVERLINE_COLOR,
}
export enum BidiType {
    L,
    LRE,
    LRO,
    R,
    AL,
    RLE,
    RLO,
    PDF,
    EN,
    ES,
    ET,
    AN,
    CS,
    NSM,
    BN,
    B,
    S,
    WS,
    ON,
}
export enum CoverageLevel {
    NONE,
    FALLBACK,
    APPROXIMATE,
    EXACT,
}
export enum Direction {
    LTR,
    RTL,
    TTB_LTR,
    TTB_RTL,
    WEAK_LTR,
    WEAK_RTL,
    NEUTRAL,
}
export enum EllipsizeMode {
    NONE,
    START,
    MIDDLE,
    END,
}
export enum Gravity {
    SOUTH,
    EAST,
    NORTH,
    WEST,
    AUTO,
}
export enum GravityHint {
    NATURAL,
    STRONG,
    LINE,
}
export enum Overline {
    NONE,
    SINGLE,
}
export enum RenderPart {
    FOREGROUND,
    BACKGROUND,
    UNDERLINE,
    STRIKETHROUGH,
    OVERLINE,
}
export enum Script {
    INVALID_CODE,
    COMMON,
    INHERITED,
    ARABIC,
    ARMENIAN,
    BENGALI,
    BOPOMOFO,
    CHEROKEE,
    COPTIC,
    CYRILLIC,
    DESERET,
    DEVANAGARI,
    ETHIOPIC,
    GEORGIAN,
    GOTHIC,
    GREEK,
    GUJARATI,
    GURMUKHI,
    HAN,
    HANGUL,
    HEBREW,
    HIRAGANA,
    KANNADA,
    KATAKANA,
    KHMER,
    LAO,
    LATIN,
    MALAYALAM,
    MONGOLIAN,
    MYANMAR,
    OGHAM,
    OLD_ITALIC,
    ORIYA,
    RUNIC,
    SINHALA,
    SYRIAC,
    TAMIL,
    TELUGU,
    THAANA,
    THAI,
    TIBETAN,
    CANADIAN_ABORIGINAL,
    YI,
    TAGALOG,
    HANUNOO,
    BUHID,
    TAGBANWA,
    BRAILLE,
    CYPRIOT,
    LIMBU,
    OSMANYA,
    SHAVIAN,
    LINEAR_B,
    TAI_LE,
    UGARITIC,
    NEW_TAI_LUE,
    BUGINESE,
    GLAGOLITIC,
    TIFINAGH,
    SYLOTI_NAGRI,
    OLD_PERSIAN,
    KHAROSHTHI,
    UNKNOWN,
    BALINESE,
    CUNEIFORM,
    PHOENICIAN,
    PHAGS_PA,
    NKO,
    KAYAH_LI,
    LEPCHA,
    REJANG,
    SUNDANESE,
    SAURASHTRA,
    CHAM,
    OL_CHIKI,
    VAI,
    CARIAN,
    LYCIAN,
    LYDIAN,
    BATAK,
    BRAHMI,
    MANDAIC,
    CHAKMA,
    MEROITIC_CURSIVE,
    MEROITIC_HIEROGLYPHS,
    MIAO,
    SHARADA,
    SORA_SOMPENG,
    TAKRI,
    BASSA_VAH,
    CAUCASIAN_ALBANIAN,
    DUPLOYAN,
    ELBASAN,
    GRANTHA,
    KHOJKI,
    KHUDAWADI,
    LINEAR_A,
    MAHAJANI,
    MANICHAEAN,
    MENDE_KIKAKUI,
    MODI,
    MRO,
    NABATAEAN,
    OLD_NORTH_ARABIAN,
    OLD_PERMIC,
    PAHAWH_HMONG,
    PALMYRENE,
    PAU_CIN_HAU,
    PSALTER_PAHLAVI,
    SIDDHAM,
    TIRHUTA,
    WARANG_CITI,
    AHOM,
    ANATOLIAN_HIEROGLYPHS,
    HATRAN,
    MULTANI,
    OLD_HUNGARIAN,
    SIGNWRITING,
}
export enum Stretch {
    ULTRA_CONDENSED,
    EXTRA_CONDENSED,
    CONDENSED,
    SEMI_CONDENSED,
    NORMAL,
    SEMI_EXPANDED,
    EXPANDED,
    EXTRA_EXPANDED,
    ULTRA_EXPANDED,
}
export enum Style {
    NORMAL,
    OBLIQUE,
    ITALIC,
}
export enum TabAlign {
    LEFT,
}
export enum Underline {
    NONE,
    SINGLE,
    DOUBLE,
    LOW,
    ERROR,
    SINGLE_LINE,
    DOUBLE_LINE,
    ERROR_LINE,
}
export enum Variant {
    NORMAL,
    SMALL_CAPS,
}
export enum Weight {
    THIN,
    ULTRALIGHT,
    LIGHT,
    SEMILIGHT,
    BOOK,
    NORMAL,
    MEDIUM,
    SEMIBOLD,
    BOLD,
    ULTRABOLD,
    HEAVY,
    ULTRAHEAVY,
}
export enum WrapMode {
    WORD,
    CHAR,
    WORD_CHAR,
}
export enum FontMask {
    FAMILY,
    STYLE,
    VARIANT,
    WEIGHT,
    STRETCH,
    SIZE,
    GRAVITY,
    VARIATIONS,
}
export enum ShapeFlags {
    NONE,
    ROUND_POSITIONS,
}
export enum ShowFlags {
    NONE,
    SPACES,
    LINE_BREAKS,
    IGNORABLES,
}
export const ANALYSIS_FLAG_CENTERED_BASELINE: number
export const ANALYSIS_FLAG_IS_ELLIPSIS: number
export const ANALYSIS_FLAG_NEED_HYPHEN: number
export const ATTR_INDEX_FROM_TEXT_BEGINNING: number
export const ATTR_INDEX_TO_TEXT_END: number
export const GLYPH_EMPTY: Glyph
export const GLYPH_INVALID_INPUT: Glyph
export const GLYPH_UNKNOWN_FLAG: Glyph
export const SCALE: number
export const VERSION_MAJOR: number
export const VERSION_MICRO: number
export const VERSION_MINOR: number
export const VERSION_STRING: string
export function attrAllowBreaksNew(allowBreaks: boolean): Attribute
export function attrBackgroundAlphaNew(alpha: number): Attribute
export function attrBackgroundNew(red: number, green: number, blue: number): Attribute
export function attrFallbackNew(enableFallback: boolean): Attribute
export function attrFamilyNew(family: string): Attribute
export function attrFontDescNew(desc: FontDescription): Attribute
export function attrFontFeaturesNew(features: string): Attribute
export function attrForegroundAlphaNew(alpha: number): Attribute
export function attrForegroundNew(red: number, green: number, blue: number): Attribute
export function attrGravityHintNew(hint: GravityHint): Attribute
export function attrGravityNew(gravity: Gravity): Attribute
export function attrInsertHyphensNew(insertHyphens: boolean): Attribute
export function attrLanguageNew(language: Language): Attribute
export function attrLetterSpacingNew(letterSpacing: number): Attribute
export function attrOverlineColorNew(red: number, green: number, blue: number): Attribute
export function attrOverlineNew(overline: Overline): Attribute
export function attrRiseNew(rise: number): Attribute
export function attrScaleNew(scaleFactor: number): Attribute
export function attrShapeNew(inkRect: Rectangle, logicalRect: Rectangle): Attribute
export function attrShapeNewWithData(inkRect: Rectangle, logicalRect: Rectangle, data?: object | null, copyFunc?: AttrDataCopyFunc | null): Attribute
export function attrShowNew(flags: ShowFlags): Attribute
export function attrSizeNew(size: number): Attribute
export function attrSizeNewAbsolute(size: number): Attribute
export function attrStretchNew(stretch: Stretch): Attribute
export function attrStrikethroughColorNew(red: number, green: number, blue: number): Attribute
export function attrStrikethroughNew(strikethrough: boolean): Attribute
export function attrStyleNew(style: Style): Attribute
export function attrTypeGetName(type: AttrType): string | null
export function attrTypeRegister(name: string): AttrType
export function attrUnderlineColorNew(red: number, green: number, blue: number): Attribute
export function attrUnderlineNew(underline: Underline): Attribute
export function attrVariantNew(variant: Variant): Attribute
export function attrWeightNew(weight: Weight): Attribute
export function bidiTypeForUnichar(ch: number): BidiType
export function break_TODO(text: string, length: number, analysis: Analysis, attrs: LogAttr[]): void
export function defaultBreak(text: string, length: number, analysis: Analysis | null, attrs: LogAttr, attrsLen: number): void
export function extentsToPixels(inclusive?: Rectangle | null, nearest?: Rectangle | null): void
export function findBaseDir(text: string, length: number): Direction
export function findParagraphBoundary(text: string, length: number): [ /* paragraphDelimiterIndex */ number, /* nextParagraphStart */ number ]
export function fontDescriptionFromString(str: string): FontDescription
export function getLogAttrs(text: string, length: number, level: number, language: Language, logAttrs: LogAttr[]): void
export function getMirrorChar(ch: number, mirroredCh: number): boolean
export function gravityGetForMatrix(matrix?: Matrix | null): Gravity
export function gravityGetForScript(script: Script, baseGravity: Gravity, hint: GravityHint): Gravity
export function gravityGetForScriptAndWidth(script: Script, wide: boolean, baseGravity: Gravity, hint: GravityHint): Gravity
export function gravityToRotation(gravity: Gravity): number
export function isZeroWidth(ch: number): boolean
export function itemize(context: Context, text: string, startIndex: number, length: number, attrs: AttrList, cachedIter?: AttrIterator | null): Item[]
export function itemizeWithBaseDir(context: Context, baseDir: Direction, text: string, startIndex: number, length: number, attrs: AttrList, cachedIter?: AttrIterator | null): Item[]
export function languageFromString(language?: string | null): Language | null
export function languageGetDefault(): Language
export function languageGetPreferred(): Language | null
export function log2visGetEmbeddingLevels(text: string, length: number, pbaseDir: Direction): number
export function markupParserFinish(context: GLib.MarkupParseContext): [ /* returnType */ boolean, /* attrList */ AttrList | null, /* text */ string | null, /* accelChar */ number | null ]
export function markupParserNew(accelMarker: number): GLib.MarkupParseContext
export function parseEnum(type: GObject.Type, str: string | null, warn: boolean): [ /* returnType */ boolean, /* value */ number | null, /* possibleValues */ string | null ]
export function parseMarkup(markupText: string, length: number, accelMarker: number): [ /* returnType */ boolean, /* attrList */ AttrList | null, /* text */ string | null, /* accelChar */ number | null ]
export function parseStretch(str: string, warn: boolean): [ /* returnType */ boolean, /* stretch */ Stretch ]
export function parseStyle(str: string, warn: boolean): [ /* returnType */ boolean, /* style */ Style ]
export function parseVariant(str: string, warn: boolean): [ /* returnType */ boolean, /* variant */ Variant ]
export function parseWeight(str: string, warn: boolean): [ /* returnType */ boolean, /* weight */ Weight ]
export function quantizeLineGeometry(thickness: number, position: number): [ /* thickness */ number, /* position */ number ]
export function readLine(stream: object | null, str: GLib.String): number
export function reorderItems(logicalItems: Item[]): Item[]
export function scanInt(pos: string): [ /* returnType */ boolean, /* pos */ string, /* out */ number ]
export function scanString(pos: string, out: GLib.String): [ /* returnType */ boolean, /* pos */ string ]
export function scanWord(pos: string, out: GLib.String): [ /* returnType */ boolean, /* pos */ string ]
export function scriptForUnichar(ch: number): Script
export function scriptGetSampleLanguage(script: Script): Language | null
export function shape(text: string, length: number, analysis: Analysis, glyphs: GlyphString): void
export function shapeFull(itemText: string, itemLength: number, paragraphText: string | null, paragraphLength: number, analysis: Analysis, glyphs: GlyphString): void
export function shapeWithFlags(itemText: string, itemLength: number, paragraphText: string | null, paragraphLength: number, analysis: Analysis, glyphs: GlyphString, flags: ShapeFlags): void
export function skipSpace(pos: string): [ /* returnType */ boolean, /* pos */ string ]
export function splitFileList(str: string): string[]
export function tailorBreak(text: string, length: number, analysis: Analysis, offset: number, logAttrs: LogAttr[]): void
export function trimString(str: string): string
export function unicharDirection(ch: number): Direction
export function unitsFromDouble(d: number): number
export function unitsToDouble(i: number): number
export function version(): number
export function versionCheck(requiredMajor: number, requiredMinor: number, requiredMicro: number): string | null
export function versionString(): string
export interface AttrDataCopyFunc {
    (): object | null
}
export interface AttrFilterFunc {
    (attribute: Attribute): boolean
}
export interface FontsetForeachFunc {
    (fontset: Fontset, font: Font): boolean
}
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
export class Context {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Pango.Context */
    changed(): void
    getBaseDir(): Direction
    getBaseGravity(): Gravity
    getFontDescription(): FontDescription
    getFontMap(): FontMap
    getGravity(): Gravity
    getGravityHint(): GravityHint
    getLanguage(): Language
    getMatrix(): Matrix | null
    getMetrics(desc?: FontDescription | null, language?: Language | null): FontMetrics
    getRoundGlyphPositions(): boolean
    getSerial(): number
    listFamilies(): /* families */ FontFamily[]
    loadFont(desc: FontDescription): Font | null
    loadFontset(desc: FontDescription, language: Language): Fontset | null
    setBaseDir(direction: Direction): void
    setBaseGravity(gravity: Gravity): void
    setFontDescription(desc: FontDescription): void
    setFontMap(fontMap: FontMap): void
    setGravityHint(hint: GravityHint): void
    setLanguage(language: Language): void
    setMatrix(matrix?: Matrix | null): void
    setRoundGlyphPositions(roundPositions: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Context
    static $gtype: GObject.Type
}
export interface Coverage_ConstructProps extends GObject.Object_ConstructProps {
}
export class Coverage {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Pango.Coverage */
    copy(): Coverage
    get(index: number): CoverageLevel
    max(other: Coverage): void
    ref(): Coverage
    set(index: number, level: CoverageLevel): void
    toBytes(): /* bytes */ any
    unref(): void
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
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
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
    connect(sigName: "notify", callback: (($obj: Coverage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Coverage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Coverage_ConstructProps)
    _init (config?: Coverage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Coverage
    static fromBytes(bytes: any): Coverage | null
    static $gtype: GObject.Type
}
export interface Font_ConstructProps extends GObject.Object_ConstructProps {
}
export class Font {
    /* Fields of Pango.Font */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Pango.Font */
    describe(): FontDescription
    describeWithAbsoluteSize(): FontDescription
    getCoverage(language: Language): Coverage
    getFace(): FontFace
    getFeatures(numFeatures: number): [ /* features */ HarfBuzz.feature_t[], /* numFeatures */ number ]
    getFontMap(): FontMap | null
    getGlyphExtents(glyph: Glyph): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getMetrics(language?: Language | null): FontMetrics
    hasChar(wc: number): boolean
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
    /* Virtual methods of Pango.Font */
    vfuncCreateHbFont(): HarfBuzz.font_t
    vfuncDescribe(): FontDescription
    vfuncDescribeAbsolute(): FontDescription
    vfuncGetCoverage(language: Language): Coverage
    vfuncGetFeatures(numFeatures: number): [ /* features */ HarfBuzz.feature_t[], /* numFeatures */ number ]
    vfuncGetFontMap(): FontMap | null
    vfuncGetGlyphExtents(glyph: Glyph): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    vfuncGetMetrics(language?: Language | null): FontMetrics
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Font_ConstructProps)
    _init (config?: Font_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static descriptionsFree(descs: FontDescription[] | null): void
    static $gtype: GObject.Type
}
export interface FontFace_ConstructProps extends GObject.Object_ConstructProps {
}
export class FontFace {
    /* Fields of Pango.FontFace */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Pango.FontFace */
    describe(): FontDescription
    getFaceName(): string
    getFamily(): FontFamily
    isSynthesized(): boolean
    listSizes(): /* sizes */ number[] | null
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
    /* Virtual methods of Pango.FontFace */
    vfuncDescribe(): FontDescription
    vfuncGetFaceName(): string
    vfuncGetFamily(): FontFamily
    vfuncIsSynthesized(): boolean
    vfuncListSizes(): /* sizes */ number[] | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FontFace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontFace, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FontFace_ConstructProps)
    _init (config?: FontFace_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FontFamily_ConstructProps extends GObject.Object_ConstructProps {
}
export class FontFamily {
    /* Fields of Pango.FontFamily */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Pango.FontFamily */
    getFace(name?: string | null): FontFace | null
    getName(): string
    isMonospace(): boolean
    isVariable(): boolean
    listFaces(): /* faces */ FontFace[] | null
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
    /* Virtual methods of Pango.FontFamily */
    vfuncGetFace(name?: string | null): FontFace | null
    vfuncGetName(): string
    vfuncIsMonospace(): boolean
    vfuncIsVariable(): boolean
    vfuncListFaces(): /* faces */ FontFace[] | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FontFamily, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontFamily, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FontFamily_ConstructProps)
    _init (config?: FontFamily_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FontMap_ConstructProps extends GObject.Object_ConstructProps {
}
export class FontMap {
    /* Fields of Pango.FontMap */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Pango.FontMap */
    changed(): void
    createContext(): Context
    getFamily(name: string): FontFamily
    getSerial(): number
    listFamilies(): /* families */ FontFamily[]
    loadFont(context: Context, desc: FontDescription): Font | null
    loadFontset(context: Context, desc: FontDescription, language: Language): Fontset | null
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
    /* Virtual methods of Pango.FontMap */
    vfuncChanged(): void
    vfuncGetFamily(name: string): FontFamily
    vfuncGetSerial(): number
    vfuncListFamilies(): /* families */ FontFamily[]
    vfuncLoadFont(context: Context, desc: FontDescription): Font | null
    vfuncLoadFontset(context: Context, desc: FontDescription, language: Language): Fontset | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FontMap_ConstructProps)
    _init (config?: FontMap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Fontset_ConstructProps extends GObject.Object_ConstructProps {
}
export class Fontset {
    /* Fields of Pango.Fontset */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Pango.Fontset */
    foreach(func: FontsetForeachFunc): void
    getFont(wc: number): Font
    getMetrics(): FontMetrics
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
    /* Virtual methods of Pango.Fontset */
    vfuncForeach(func: FontsetForeachFunc): void
    vfuncGetFont(wc: number): Font
    vfuncGetLanguage(): Language
    vfuncGetMetrics(): FontMetrics
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Fontset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Fontset, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Fontset_ConstructProps)
    _init (config?: Fontset_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FontsetSimple_ConstructProps extends Fontset_ConstructProps {
}
export class FontsetSimple {
    /* Fields of Pango.Fontset */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Pango.FontsetSimple */
    append(font: Font): void
    size(): number
    /* Methods of Pango.Fontset */
    foreach(func: FontsetForeachFunc): void
    getFont(wc: number): Font
    getMetrics(): FontMetrics
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
    /* Virtual methods of Pango.Fontset */
    vfuncForeach(func: FontsetForeachFunc): void
    vfuncGetFont(wc: number): Font
    vfuncGetLanguage(): Language
    vfuncGetMetrics(): FontMetrics
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FontsetSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontsetSimple, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FontsetSimple_ConstructProps)
    _init (config?: FontsetSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(language: Language): FontsetSimple
    static $gtype: GObject.Type
}
export interface Layout_ConstructProps extends GObject.Object_ConstructProps {
}
export class Layout {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Pango.Layout */
    contextChanged(): void
    copy(): Layout
    getAlignment(): Alignment
    getAttributes(): AttrList | null
    getAutoDir(): boolean
    getBaseline(): number
    getCharacterCount(): number
    getContext(): Context
    getCursorPos(index: number): [ /* strongPos */ Rectangle | null, /* weakPos */ Rectangle | null ]
    getDirection(index: number): Direction
    getEllipsize(): EllipsizeMode
    getExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getFontDescription(): FontDescription | null
    getHeight(): number
    getIndent(): number
    getIter(): LayoutIter
    getJustify(): boolean
    getLine(line: number): LayoutLine | null
    getLineCount(): number
    getLineReadonly(line: number): LayoutLine | null
    getLineSpacing(): number
    getLines(): LayoutLine[]
    getLinesReadonly(): LayoutLine[]
    getLogAttrs(): /* attrs */ LogAttr[]
    getLogAttrsReadonly(): LogAttr[]
    getPixelExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getPixelSize(): [ /* width */ number | null, /* height */ number | null ]
    getSerial(): number
    getSingleParagraphMode(): boolean
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getSpacing(): number
    getTabs(): TabArray | null
    getText(): string
    getUnknownGlyphsCount(): number
    getWidth(): number
    getWrap(): WrapMode
    indexToLineX(index: number, trailing: boolean): [ /* line */ number | null, /* xPos */ number | null ]
    indexToPos(index: number): /* pos */ Rectangle
    isEllipsized(): boolean
    isWrapped(): boolean
    moveCursorVisually(strong: boolean, oldIndex: number, oldTrailing: number, direction: number): [ /* newIndex */ number, /* newTrailing */ number ]
    setAlignment(alignment: Alignment): void
    setAttributes(attrs?: AttrList | null): void
    setAutoDir(autoDir: boolean): void
    setEllipsize(ellipsize: EllipsizeMode): void
    setFontDescription(desc?: FontDescription | null): void
    setHeight(height: number): void
    setIndent(indent: number): void
    setJustify(justify: boolean): void
    setLineSpacing(factor: number): void
    setMarkup(markup: string, length: number): void
    setMarkupWithAccel(markup: string, length: number, accelMarker: number): /* accelChar */ number | null
    setSingleParagraphMode(setting: boolean): void
    setSpacing(spacing: number): void
    setTabs(tabs?: TabArray | null): void
    setText(text: string, length: number): void
    setWidth(width: number): void
    setWrap(wrap: WrapMode): void
    xyToIndex(x: number, y: number): [ /* returnType */ boolean, /* index */ number, /* trailing */ number ]
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
    connect(sigName: "notify", callback: (($obj: Layout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Layout, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Layout_ConstructProps)
    _init (config?: Layout_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context): Layout
    static $gtype: GObject.Type
}
export interface Renderer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Renderer {
    /* Fields of Pango.Renderer */
    matrix: Matrix
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Pango.Renderer */
    activate(): void
    deactivate(): void
    drawErrorUnderline(x: number, y: number, width: number, height: number): void
    drawGlyph(font: Font, glyph: Glyph, x: number, y: number): void
    drawGlyphItem(text: string | null, glyphItem: GlyphItem, x: number, y: number): void
    drawGlyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    drawLayout(layout: Layout, x: number, y: number): void
    drawLayoutLine(line: LayoutLine, x: number, y: number): void
    drawRectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    drawTrapezoid(part: RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    getAlpha(part: RenderPart): number
    getColor(part: RenderPart): Color | null
    getLayout(): Layout | null
    getLayoutLine(): LayoutLine | null
    getMatrix(): Matrix | null
    partChanged(part: RenderPart): void
    setAlpha(part: RenderPart, alpha: number): void
    setColor(part: RenderPart, color?: Color | null): void
    setMatrix(matrix?: Matrix | null): void
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
    /* Virtual methods of Pango.Renderer */
    vfuncBegin(): void
    vfuncDrawErrorUnderline(x: number, y: number, width: number, height: number): void
    vfuncDrawGlyph(font: Font, glyph: Glyph, x: number, y: number): void
    vfuncDrawGlyphItem(text: string | null, glyphItem: GlyphItem, x: number, y: number): void
    vfuncDrawGlyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    vfuncDrawRectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    vfuncDrawShape(attr: AttrShape, x: number, y: number): void
    vfuncDrawTrapezoid(part: RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    vfuncEnd(): void
    vfuncPartChanged(part: RenderPart): void
    vfuncPrepareRun(run: LayoutRun): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    static $gtype: GObject.Type
}
export class Analysis {
    /* Fields of Pango.Analysis */
    shapeEngine: object
    langEngine: object
    font: Font
    level: number
    gravity: number
    flags: number
    script: number
    language: Language
    extraAttrs: object[]
    static name: string
}
export class AttrClass {
    /* Fields of Pango.AttrClass */
    type: AttrType
    copy: (attr: Attribute) => Attribute
    destroy: (attr: Attribute) => void
    equal: (attr1: Attribute, attr2: Attribute) => boolean
    static name: string
}
export class AttrColor {
    /* Fields of Pango.AttrColor */
    attr: Attribute
    color: Color
    static name: string
}
export class AttrFloat {
    /* Fields of Pango.AttrFloat */
    attr: Attribute
    value: number
    static name: string
}
export class AttrFontDesc {
    /* Fields of Pango.AttrFontDesc */
    attr: Attribute
    desc: FontDescription
    static name: string
}
export class AttrFontFeatures {
    /* Fields of Pango.AttrFontFeatures */
    attr: Attribute
    features: string
    static name: string
}
export class AttrInt {
    /* Fields of Pango.AttrInt */
    attr: Attribute
    value: number
    static name: string
}
export class AttrIterator {
    /* Methods of Pango.AttrIterator */
    copy(): AttrIterator
    destroy(): void
    get(type: AttrType): Attribute | null
    getAttrs(): Attribute[]
    getFont(desc: FontDescription, language?: Language | null, extraAttrs?: Attribute[] | null): void
    next(): boolean
    range(): [ /* start */ number, /* end */ number ]
    static name: string
}
export class AttrLanguage {
    /* Fields of Pango.AttrLanguage */
    attr: Attribute
    value: Language
    static name: string
}
export class AttrList {
    /* Methods of Pango.AttrList */
    change(attr: Attribute): void
    copy(): AttrList | null
    equal(otherList: AttrList): boolean
    filter(func: AttrFilterFunc): AttrList | null
    getAttributes(): Attribute[]
    getIterator(): AttrIterator
    insert(attr: Attribute): void
    insertBefore(attr: Attribute): void
    ref(): AttrList
    splice(other: AttrList, pos: number, len: number): void
    unref(): void
    update(pos: number, remove: number, add: number): void
    static name: string
    static new(): AttrList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AttrList
}
export class AttrShape {
    /* Fields of Pango.AttrShape */
    attr: Attribute
    inkRect: Rectangle
    logicalRect: Rectangle
    data: object
    copyFunc: AttrDataCopyFunc
    destroyFunc: GLib.DestroyNotify
    static name: string
    /* Static methods and pseudo-constructors */
    static newWithData(inkRect: Rectangle, logicalRect: Rectangle, data?: object | null, copyFunc?: AttrDataCopyFunc | null): Attribute
}
export class AttrSize {
    /* Fields of Pango.AttrSize */
    attr: Attribute
    size: number
    absolute: number
    static name: string
    /* Static methods and pseudo-constructors */
    static newAbsolute(size: number): Attribute
}
export class AttrString {
    /* Fields of Pango.AttrString */
    attr: Attribute
    value: string
    static name: string
}
export class Attribute {
    /* Fields of Pango.Attribute */
    klass: AttrClass
    startIndex: number
    endIndex: number
    /* Methods of Pango.Attribute */
    copy(): Attribute
    destroy(): void
    equal(attr2: Attribute): boolean
    init(klass: AttrClass): void
    static name: string
}
export class Color {
    /* Fields of Pango.Color */
    red: number
    green: number
    blue: number
    /* Methods of Pango.Color */
    copy(): Color | null
    free(): void
    parse(spec: string): boolean
    parseWithAlpha(spec: string): [ /* returnType */ boolean, /* alpha */ number | null ]
    static name: string
}
export abstract class ContextClass {
    static name: string
}
export abstract class FontClass {
    /* Fields of Pango.FontClass */
    parentClass: GObject.ObjectClass
    describe: (font: Font) => FontDescription
    getCoverage: (font: Font, language: Language) => Coverage
    getGlyphExtents: (font: Font | null, glyph: Glyph) => [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getMetrics: (font?: Font | null, language?: Language | null) => FontMetrics
    getFontMap: (font?: Font | null) => FontMap | null
    describeAbsolute: (font: Font) => FontDescription
    getFeatures: (font: Font, numFeatures: number) => [ /* features */ HarfBuzz.feature_t[], /* numFeatures */ number ]
    createHbFont: (font: Font) => HarfBuzz.font_t
    static name: string
}
export class FontDescription {
    /* Methods of Pango.FontDescription */
    betterMatch(oldMatch: FontDescription | null, newMatch: FontDescription): boolean
    copy(): FontDescription | null
    copyStatic(): FontDescription | null
    equal(desc2: FontDescription): boolean
    free(): void
    getFamily(): string | null
    getGravity(): Gravity
    getSetFields(): FontMask
    getSize(): number
    getSizeIsAbsolute(): boolean
    getStretch(): Stretch
    getStyle(): Style
    getVariant(): Variant
    getVariations(): string | null
    getWeight(): Weight
    hash(): number
    merge(descToMerge: FontDescription | null, replaceExisting: boolean): void
    mergeStatic(descToMerge: FontDescription, replaceExisting: boolean): void
    setAbsoluteSize(size: number): void
    setFamily(family: string): void
    setFamilyStatic(family: string): void
    setGravity(gravity: Gravity): void
    setSize(size: number): void
    setStretch(stretch: Stretch): void
    setStyle(style: Style): void
    setVariant(variant: Variant): void
    setVariations(variations: string): void
    setVariationsStatic(variations: string): void
    setWeight(weight: Weight): void
    toFilename(): string
    unsetFields(toUnset: FontMask): void
    static name: string
    static new(): FontDescription
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FontDescription
    static fromString(str: string): FontDescription
}
export abstract class FontFaceClass {
    /* Fields of Pango.FontFaceClass */
    parentClass: GObject.ObjectClass
    getFaceName: (face: FontFace) => string
    describe: (face: FontFace) => FontDescription
    listSizes: (face: FontFace) => /* sizes */ number[] | null
    isSynthesized: (face: FontFace) => boolean
    getFamily: (face: FontFace) => FontFamily
    static name: string
}
export abstract class FontFamilyClass {
    /* Fields of Pango.FontFamilyClass */
    parentClass: GObject.ObjectClass
    listFaces: (family: FontFamily) => /* faces */ FontFace[] | null
    getName: (family: FontFamily) => string
    isMonospace: (family: FontFamily) => boolean
    isVariable: (family: FontFamily) => boolean
    getFace: (family: FontFamily, name?: string | null) => FontFace | null
    static name: string
}
export abstract class FontMapClass {
    /* Fields of Pango.FontMapClass */
    parentClass: GObject.ObjectClass
    loadFont: (fontmap: FontMap, context: Context, desc: FontDescription) => Font | null
    listFamilies: (fontmap: FontMap) => /* families */ FontFamily[]
    loadFontset: (fontmap: FontMap, context: Context, desc: FontDescription, language: Language) => Fontset | null
    shapeEngineType: string
    getSerial: (fontmap: FontMap) => number
    changed: (fontmap: FontMap) => void
    getFamily: (fontmap: FontMap, name: string) => FontFamily
    static name: string
}
export class FontMetrics {
    /* Methods of Pango.FontMetrics */
    getApproximateCharWidth(): number
    getApproximateDigitWidth(): number
    getAscent(): number
    getDescent(): number
    getHeight(): number
    getStrikethroughPosition(): number
    getStrikethroughThickness(): number
    getUnderlinePosition(): number
    getUnderlineThickness(): number
    ref(): FontMetrics | null
    unref(): void
    static name: string
}
export abstract class FontsetClass {
    /* Fields of Pango.FontsetClass */
    parentClass: GObject.ObjectClass
    getFont: (fontset: Fontset, wc: number) => Font
    getMetrics: (fontset: Fontset) => FontMetrics
    getLanguage: (fontset: Fontset) => Language
    foreach: (fontset: Fontset, func: FontsetForeachFunc) => void
    static name: string
}
export abstract class FontsetSimpleClass {
    static name: string
}
export class GlyphGeometry {
    /* Fields of Pango.GlyphGeometry */
    width: GlyphUnit
    xOffset: GlyphUnit
    yOffset: GlyphUnit
    static name: string
}
export class GlyphInfo {
    /* Fields of Pango.GlyphInfo */
    glyph: Glyph
    geometry: GlyphGeometry
    attr: GlyphVisAttr
    static name: string
}
export class GlyphItem {
    /* Fields of Pango.GlyphItem */
    item: Item
    glyphs: GlyphString
    /* Methods of Pango.GlyphItem */
    applyAttrs(text: string, list: AttrList): GlyphItem[]
    copy(): GlyphItem | null
    free(): void
    getLogicalWidths(text: string, logicalWidths: number[]): void
    letterSpace(text: string, logAttrs: LogAttr[], letterSpacing: number): void
    split(text: string, splitIndex: number): GlyphItem
    static name: string
}
export class GlyphItemIter {
    /* Fields of Pango.GlyphItemIter */
    glyphItem: GlyphItem
    text: string
    startGlyph: number
    startIndex: number
    startChar: number
    endGlyph: number
    endIndex: number
    endChar: number
    /* Methods of Pango.GlyphItemIter */
    copy(): GlyphItemIter | null
    free(): void
    initEnd(glyphItem: GlyphItem, text: string): boolean
    initStart(glyphItem: GlyphItem, text: string): boolean
    nextCluster(): boolean
    prevCluster(): boolean
    static name: string
}
export class GlyphString {
    /* Fields of Pango.GlyphString */
    numGlyphs: number
    glyphs: GlyphInfo[]
    logClusters: number
    /* Methods of Pango.GlyphString */
    copy(): GlyphString | null
    extents(font: Font): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    extentsRange(start: number, end: number, font: Font): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    free(): void
    getLogicalWidths(text: string, length: number, embeddingLevel: number, logicalWidths: number[]): void
    getWidth(): number
    indexToX(text: string, length: number, analysis: Analysis, index: number, trailing: boolean): /* xPos */ number
    setSize(newLen: number): void
    xToIndex(text: string, length: number, analysis: Analysis, xPos: number): [ /* index */ number, /* trailing */ number ]
    static name: string
    static new(): GlyphString
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): GlyphString
}
export class GlyphVisAttr {
    /* Fields of Pango.GlyphVisAttr */
    isClusterStart: number
    static name: string
}
export class Item {
    /* Fields of Pango.Item */
    offset: number
    length: number
    numChars: number
    analysis: Analysis
    /* Methods of Pango.Item */
    applyAttrs(iter: AttrIterator): void
    copy(): Item | null
    free(): void
    split(splitIndex: number, splitOffset: number): Item
    static name: string
    static new(): Item
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Item
}
export class Language {
    /* Methods of Pango.Language */
    getSampleString(): string
    getScripts(): Script[] | null
    includesScript(script: Script): boolean
    matches(rangeList: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static fromString(language?: string | null): Language | null
    static getDefault(): Language
    static getPreferred(): Language | null
}
export abstract class LayoutClass {
    static name: string
}
export class LayoutIter {
    /* Methods of Pango.LayoutIter */
    atLastLine(): boolean
    copy(): LayoutIter | null
    free(): void
    getBaseline(): number
    getCharExtents(): /* logicalRect */ Rectangle
    getClusterExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getIndex(): number
    getLayout(): Layout
    getLayoutExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getLine(): LayoutLine
    getLineExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getLineReadonly(): LayoutLine
    getLineYrange(): [ /* y0 */ number | null, /* y1 */ number | null ]
    getRun(): LayoutRun | null
    getRunExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getRunReadonly(): LayoutRun | null
    nextChar(): boolean
    nextCluster(): boolean
    nextLine(): boolean
    nextRun(): boolean
    static name: string
}
export class LayoutLine {
    /* Fields of Pango.LayoutLine */
    layout: Layout
    startIndex: number
    length: number
    runs: LayoutRun[]
    isParagraphStart: number
    resolvedDir: number
    /* Methods of Pango.LayoutLine */
    getExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getHeight(): /* height */ number | null
    getPixelExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getXRanges(startIndex: number, endIndex: number): /* ranges */ number[]
    indexToX(index: number, trailing: boolean): /* xPos */ number
    ref(): LayoutLine
    unref(): void
    xToIndex(xPos: number): [ /* returnType */ boolean, /* index */ number, /* trailing */ number ]
    static name: string
}
export class LogAttr {
    /* Fields of Pango.LogAttr */
    isLineBreak: number
    isMandatoryBreak: number
    isCharBreak: number
    isWhite: number
    isCursorPosition: number
    isWordStart: number
    isWordEnd: number
    isSentenceBoundary: number
    isSentenceStart: number
    isSentenceEnd: number
    backspaceDeletesCharacter: number
    isExpandableSpace: number
    isWordBoundary: number
    static name: string
}
export class Matrix {
    /* Fields of Pango.Matrix */
    xx: number
    xy: number
    yx: number
    yy: number
    x0: number
    y0: number
    /* Methods of Pango.Matrix */
    concat(newMatrix: Matrix): void
    copy(): Matrix | null
    free(): void
    getFontScaleFactor(): number
    getFontScaleFactors(): [ /* xscale */ number | null, /* yscale */ number | null ]
    rotate(degrees: number): void
    scale(scaleX: number, scaleY: number): void
    transformDistance(dx: number, dy: number): [ /* dx */ number, /* dy */ number ]
    transformPixelRectangle(rect?: Rectangle | null): /* rect */ Rectangle | null
    transformPoint(x: number, y: number): [ /* x */ number, /* y */ number ]
    transformRectangle(rect?: Rectangle | null): /* rect */ Rectangle | null
    translate(tx: number, ty: number): void
    static name: string
}
export class Rectangle {
    /* Fields of Pango.Rectangle */
    x: number
    y: number
    width: number
    height: number
    static name: string
}
export abstract class RendererClass {
    /* Fields of Pango.RendererClass */
    drawGlyphs: (renderer: Renderer, font: Font, glyphs: GlyphString, x: number, y: number) => void
    drawRectangle: (renderer: Renderer, part: RenderPart, x: number, y: number, width: number, height: number) => void
    drawErrorUnderline: (renderer: Renderer, x: number, y: number, width: number, height: number) => void
    drawShape: (renderer: Renderer, attr: AttrShape, x: number, y: number) => void
    drawTrapezoid: (renderer: Renderer, part: RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number) => void
    drawGlyph: (renderer: Renderer, font: Font, glyph: Glyph, x: number, y: number) => void
    partChanged: (renderer: Renderer, part: RenderPart) => void
    begin: (renderer: Renderer) => void
    end: (renderer: Renderer) => void
    prepareRun: (renderer: Renderer, run: LayoutRun) => void
    drawGlyphItem: (renderer: Renderer, text: string | null, glyphItem: GlyphItem, x: number, y: number) => void
    static name: string
}
export class RendererPrivate {
    static name: string
}
export class ScriptIter {
    /* Methods of Pango.ScriptIter */
    free(): void
    getRange(): [ /* start */ string | null, /* end */ string | null, /* script */ Script | null ]
    next(): boolean
    static name: string
    static new(text: string, length: number): ScriptIter
    constructor(text: string, length: number)
    /* Static methods and pseudo-constructors */
    static new(text: string, length: number): ScriptIter
}
export class TabArray {
    /* Methods of Pango.TabArray */
    copy(): TabArray
    free(): void
    getPositionsInPixels(): boolean
    getSize(): number
    getTab(tabIndex: number): [ /* alignment */ TabAlign | null, /* location */ number | null ]
    getTabs(): [ /* alignments */ TabAlign | null, /* locations */ number[] | null ]
    resize(newSize: number): void
    setTab(tabIndex: number, alignment: TabAlign, location: number): void
    static name: string
    static new(initialSize: number, positionsInPixels: boolean): TabArray
    constructor(initialSize: number, positionsInPixels: boolean)
    /* Static methods and pseudo-constructors */
    static new(initialSize: number, positionsInPixels: boolean): TabArray
}
type Glyph = number
type GlyphUnit = number
type LayoutRun = GlyphItem
}