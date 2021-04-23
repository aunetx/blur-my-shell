/**
 * Atk-1.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Atk {

export enum CoordType {
    SCREEN,
    WINDOW,
    PARENT,
}
export enum KeyEventType {
    PRESS,
    RELEASE,
    LAST_DEFINED,
}
export enum Layer {
    INVALID,
    BACKGROUND,
    CANVAS,
    WIDGET,
    MDI,
    POPUP,
    OVERLAY,
    WINDOW,
}
export enum RelationType {
    NULL,
    CONTROLLED_BY,
    CONTROLLER_FOR,
    LABEL_FOR,
    LABELLED_BY,
    MEMBER_OF,
    NODE_CHILD_OF,
    FLOWS_TO,
    FLOWS_FROM,
    SUBWINDOW_OF,
    EMBEDS,
    EMBEDDED_BY,
    POPUP_FOR,
    PARENT_WINDOW_OF,
    DESCRIBED_BY,
    DESCRIPTION_FOR,
    NODE_PARENT_OF,
    DETAILS,
    DETAILS_FOR,
    ERROR_MESSAGE,
    ERROR_FOR,
    LAST_DEFINED,
}
export enum Role {
    INVALID,
    ACCELERATOR_LABEL,
    ALERT,
    ANIMATION,
    ARROW,
    CALENDAR,
    CANVAS,
    CHECK_BOX,
    CHECK_MENU_ITEM,
    COLOR_CHOOSER,
    COLUMN_HEADER,
    COMBO_BOX,
    DATE_EDITOR,
    DESKTOP_ICON,
    DESKTOP_FRAME,
    DIAL,
    DIALOG,
    DIRECTORY_PANE,
    DRAWING_AREA,
    FILE_CHOOSER,
    FILLER,
    FONT_CHOOSER,
    FRAME,
    GLASS_PANE,
    HTML_CONTAINER,
    ICON,
    IMAGE,
    INTERNAL_FRAME,
    LABEL,
    LAYERED_PANE,
    LIST,
    LIST_ITEM,
    MENU,
    MENU_BAR,
    MENU_ITEM,
    OPTION_PANE,
    PAGE_TAB,
    PAGE_TAB_LIST,
    PANEL,
    PASSWORD_TEXT,
    POPUP_MENU,
    PROGRESS_BAR,
    PUSH_BUTTON,
    RADIO_BUTTON,
    RADIO_MENU_ITEM,
    ROOT_PANE,
    ROW_HEADER,
    SCROLL_BAR,
    SCROLL_PANE,
    SEPARATOR,
    SLIDER,
    SPLIT_PANE,
    SPIN_BUTTON,
    STATUSBAR,
    TABLE,
    TABLE_CELL,
    TABLE_COLUMN_HEADER,
    TABLE_ROW_HEADER,
    TEAR_OFF_MENU_ITEM,
    TERMINAL,
    TEXT,
    TOGGLE_BUTTON,
    TOOL_BAR,
    TOOL_TIP,
    TREE,
    TREE_TABLE,
    UNKNOWN,
    VIEWPORT,
    WINDOW,
    HEADER,
    FOOTER,
    PARAGRAPH,
    RULER,
    APPLICATION,
    AUTOCOMPLETE,
    EDIT_BAR,
    EMBEDDED,
    ENTRY,
    CHART,
    CAPTION,
    DOCUMENT_FRAME,
    HEADING,
    PAGE,
    SECTION,
    REDUNDANT_OBJECT,
    FORM,
    LINK,
    INPUT_METHOD_WINDOW,
    TABLE_ROW,
    TREE_ITEM,
    DOCUMENT_SPREADSHEET,
    DOCUMENT_PRESENTATION,
    DOCUMENT_TEXT,
    DOCUMENT_WEB,
    DOCUMENT_EMAIL,
    COMMENT,
    LIST_BOX,
    GROUPING,
    IMAGE_MAP,
    NOTIFICATION,
    INFO_BAR,
    LEVEL_BAR,
    TITLE_BAR,
    BLOCK_QUOTE,
    AUDIO,
    VIDEO,
    DEFINITION,
    ARTICLE,
    LANDMARK,
    LOG,
    MARQUEE,
    MATH,
    RATING,
    TIMER,
    DESCRIPTION_LIST,
    DESCRIPTION_TERM,
    DESCRIPTION_VALUE,
    STATIC,
    MATH_FRACTION,
    MATH_ROOT,
    SUBSCRIPT,
    SUPERSCRIPT,
    FOOTNOTE,
    CONTENT_DELETION,
    CONTENT_INSERTION,
    MARK,
    SUGGESTION,
    LAST_DEFINED,
}
export enum ScrollType {
    TOP_LEFT,
    BOTTOM_RIGHT,
    TOP_EDGE,
    BOTTOM_EDGE,
    LEFT_EDGE,
    RIGHT_EDGE,
    ANYWHERE,
}
export enum StateType {
    INVALID,
    ACTIVE,
    ARMED,
    BUSY,
    CHECKED,
    DEFUNCT,
    EDITABLE,
    ENABLED,
    EXPANDABLE,
    EXPANDED,
    FOCUSABLE,
    FOCUSED,
    HORIZONTAL,
    ICONIFIED,
    MODAL,
    MULTI_LINE,
    MULTISELECTABLE,
    OPAQUE,
    PRESSED,
    RESIZABLE,
    SELECTABLE,
    SELECTED,
    SENSITIVE,
    SHOWING,
    SINGLE_LINE,
    STALE,
    TRANSIENT,
    VERTICAL,
    VISIBLE,
    MANAGES_DESCENDANTS,
    INDETERMINATE,
    TRUNCATED,
    REQUIRED,
    INVALID_ENTRY,
    SUPPORTS_AUTOCOMPLETION,
    SELECTABLE_TEXT,
    DEFAULT,
    ANIMATED,
    VISITED,
    CHECKABLE,
    HAS_POPUP,
    HAS_TOOLTIP,
    READ_ONLY,
    LAST_DEFINED,
}
export enum TextAttribute {
    INVALID,
    LEFT_MARGIN,
    RIGHT_MARGIN,
    INDENT,
    INVISIBLE,
    EDITABLE,
    PIXELS_ABOVE_LINES,
    PIXELS_BELOW_LINES,
    PIXELS_INSIDE_WRAP,
    BG_FULL_HEIGHT,
    RISE,
    UNDERLINE,
    STRIKETHROUGH,
    SIZE,
    SCALE,
    WEIGHT,
    LANGUAGE,
    FAMILY_NAME,
    BG_COLOR,
    FG_COLOR,
    BG_STIPPLE,
    FG_STIPPLE,
    WRAP_MODE,
    DIRECTION,
    JUSTIFICATION,
    STRETCH,
    VARIANT,
    STYLE,
    TEXT_POSITION,
    LAST_DEFINED,
}
export enum TextBoundary {
    CHAR,
    WORD_START,
    WORD_END,
    SENTENCE_START,
    SENTENCE_END,
    LINE_START,
    LINE_END,
}
export enum TextClipType {
    NONE,
    MIN,
    MAX,
    BOTH,
}
export enum TextGranularity {
    CHAR,
    WORD,
    SENTENCE,
    LINE,
    PARAGRAPH,
}
export enum ValueType {
    VERY_WEAK,
    WEAK,
    ACCEPTABLE,
    STRONG,
    VERY_STRONG,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
    VERY_BAD,
    BAD,
    GOOD,
    VERY_GOOD,
    BEST,
    LAST_DEFINED,
}
export enum HyperlinkStateFlags {
    INLINE,
}
export const BINARY_AGE: number
export const INTERFACE_AGE: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION_MIN_REQUIRED: number
export function attributeSetFree(attribSet: AttributeSet): void
export function focusTrackerNotify(object: Object): void
export function getBinaryAge(): number
export function getDefaultRegistry(): Registry
export function getFocusObject(): Object
export function getInterfaceAge(): number
export function getMajorVersion(): number
export function getMicroVersion(): number
export function getMinorVersion(): number
export function getRoot(): Object
export function getToolkitName(): string
export function getToolkitVersion(): string
export function getVersion(): string
export function relationTypeForName(name: string): RelationType
export function relationTypeGetName(type: RelationType): string
export function relationTypeRegister(name: string): RelationType
export function removeFocusTracker(trackerId: number): void
export function removeGlobalEventListener(listenerId: number): void
export function removeKeyEventListener(listenerId: number): void
export function roleForName(name: string): Role
export function roleGetLocalizedName(role: Role): string
export function roleGetName(role: Role): string
export function roleRegister(name: string): Role
export function stateTypeForName(name: string): StateType
export function stateTypeGetName(type: StateType): string
export function stateTypeRegister(name: string): StateType
export function textAttributeForName(name: string): TextAttribute
export function textAttributeGetName(attr: TextAttribute): string
export function textAttributeGetValue(attr: TextAttribute, index: number): string | null
export function textAttributeRegister(name: string): TextAttribute
export function textFreeRanges(ranges: TextRange[]): void
export function valueTypeGetLocalizedName(valueType: ValueType): string
export function valueTypeGetName(valueType: ValueType): string
export interface EventListener {
    (obj: Object): void
}
export interface EventListenerInit {
    (): void
}
export interface FocusHandler {
    (object: Object, focusIn: boolean): void
}
export interface Function {
    (): boolean
}
export interface KeySnoopFunc {
    (event: KeyEventStruct): number
}
export interface PropertyChangeHandler {
    (obj: Object, vals: PropertyValues): void
}
export class Action {
    /* Methods of Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Virtual methods of Atk.Action */
    vfuncDoAction(i: number): boolean
    vfuncGetDescription(i: number): string | null
    vfuncGetKeybinding(i: number): string | null
    vfuncGetLocalizedName(i: number): string | null
    vfuncGetNActions(): number
    vfuncGetName(i: number): string | null
    vfuncSetDescription(i: number, desc: string): boolean
    static name: string
}
export class Component {
    /* Methods of Atk.Component */
    contains(x: number, y: number, coordType: CoordType): boolean
    getAlpha(): number
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getLayer(): Layer
    getMdiZorder(): number
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    setPosition(x: number, y: number, coordType: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Component */
    vfuncBoundsChanged(bounds: Rectangle): void
    vfuncContains(x: number, y: number, coordType: CoordType): boolean
    vfuncGetAlpha(): number
    vfuncGetExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetLayer(): Layer
    vfuncGetMdiZorder(): number
    vfuncGetPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetSize(): [ /* width */ number | null, /* height */ number | null ]
    vfuncGrabFocus(): boolean
    vfuncRefAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    vfuncRemoveFocusHandler(handlerId: number): void
    vfuncScrollTo(type: ScrollType): boolean
    vfuncScrollToPoint(coords: CoordType, x: number, y: number): boolean
    vfuncSetExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    vfuncSetPosition(x: number, y: number, coordType: CoordType): boolean
    vfuncSetSize(width: number, height: number): boolean
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: Component, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Component, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Document {
    /* Methods of Atk.Document */
    getAttributeValue(attributeName: string): string | null
    getAttributes(): AttributeSet
    getCurrentPageNumber(): number
    getDocument(): object | null
    getDocumentType(): string
    getLocale(): string
    getPageCount(): number
    setAttributeValue(attributeName: string, attributeValue: string): boolean
    /* Virtual methods of Atk.Document */
    vfuncGetCurrentPageNumber(): number
    vfuncGetDocument(): object | null
    vfuncGetDocumentAttributeValue(attributeName: string): string | null
    vfuncGetDocumentAttributes(): AttributeSet
    vfuncGetDocumentLocale(): string
    vfuncGetDocumentType(): string
    vfuncGetPageCount(): number
    vfuncSetDocumentAttribute(attributeName: string, attributeValue: string): boolean
    /* Signals of Atk.Document */
    connect(sigName: "load-complete", callback: (($obj: Document) => void)): number
    connect_after(sigName: "load-complete", callback: (($obj: Document) => void)): number
    emit(sigName: "load-complete"): void
    on(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "load-stopped", callback: (($obj: Document) => void)): number
    connect_after(sigName: "load-stopped", callback: (($obj: Document) => void)): number
    emit(sigName: "load-stopped"): void
    on(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "page-changed", callback: (($obj: Document, pageNumber: number) => void)): number
    connect_after(sigName: "page-changed", callback: (($obj: Document, pageNumber: number) => void)): number
    emit(sigName: "page-changed", pageNumber: number): void
    on(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reload", callback: (($obj: Document) => void)): number
    connect_after(sigName: "reload", callback: (($obj: Document) => void)): number
    emit(sigName: "reload"): void
    on(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class EditableText {
    /* Methods of Atk.EditableText */
    copyText(startPos: number, endPos: number): void
    cutText(startPos: number, endPos: number): void
    deleteText(startPos: number, endPos: number): void
    insertText(string: string, length: number, position: number): void
    pasteText(position: number): void
    setRunAttributes(attribSet: AttributeSet, startOffset: number, endOffset: number): boolean
    setTextContents(string: string): void
    /* Virtual methods of Atk.EditableText */
    vfuncCopyText(startPos: number, endPos: number): void
    vfuncCutText(startPos: number, endPos: number): void
    vfuncDeleteText(startPos: number, endPos: number): void
    vfuncInsertText(string: string, length: number, position: number): void
    vfuncPasteText(position: number): void
    vfuncSetRunAttributes(attribSet: AttributeSet, startOffset: number, endOffset: number): boolean
    vfuncSetTextContents(string: string): void
    static name: string
}
export class HyperlinkImpl {
    /* Methods of Atk.HyperlinkImpl */
    getHyperlink(): Hyperlink
    /* Virtual methods of Atk.HyperlinkImpl */
    vfuncGetHyperlink(): Hyperlink
    static name: string
}
export class Hypertext {
    /* Methods of Atk.Hypertext */
    getLink(linkIndex: number): Hyperlink
    getLinkIndex(charIndex: number): number
    getNLinks(): number
    /* Virtual methods of Atk.Hypertext */
    vfuncGetLink(linkIndex: number): Hyperlink
    vfuncGetLinkIndex(charIndex: number): number
    vfuncGetNLinks(): number
    vfuncLinkSelected(linkIndex: number): void
    /* Signals of Atk.Hypertext */
    connect(sigName: "link-selected", callback: (($obj: Hypertext, arg1: number) => void)): number
    connect_after(sigName: "link-selected", callback: (($obj: Hypertext, arg1: number) => void)): number
    emit(sigName: "link-selected", arg1: number): void
    on(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Image {
    /* Methods of Atk.Image */
    getImageDescription(): string
    getImageLocale(): string | null
    getImagePosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getImageSize(): [ /* width */ number | null, /* height */ number | null ]
    setImageDescription(description: string): boolean
    /* Virtual methods of Atk.Image */
    vfuncGetImageDescription(): string
    vfuncGetImageLocale(): string | null
    vfuncGetImagePosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetImageSize(): [ /* width */ number | null, /* height */ number | null ]
    vfuncSetImageDescription(description: string): boolean
    static name: string
}
export class ImplementorIface {
    static name: string
}
export class Selection {
    /* Methods of Atk.Selection */
    addSelection(i: number): boolean
    clearSelection(): boolean
    getSelectionCount(): number
    isChildSelected(i: number): boolean
    refSelection(i: number): Object | null
    removeSelection(i: number): boolean
    selectAllSelection(): boolean
    /* Virtual methods of Atk.Selection */
    vfuncAddSelection(i: number): boolean
    vfuncClearSelection(): boolean
    vfuncGetSelectionCount(): number
    vfuncIsChildSelected(i: number): boolean
    vfuncRefSelection(i: number): Object | null
    vfuncRemoveSelection(i: number): boolean
    vfuncSelectAllSelection(): boolean
    vfuncSelectionChanged(): void
    /* Signals of Atk.Selection */
    connect(sigName: "selection-changed", callback: (($obj: Selection) => void)): number
    connect_after(sigName: "selection-changed", callback: (($obj: Selection) => void)): number
    emit(sigName: "selection-changed"): void
    on(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class StreamableContent {
    /* Methods of Atk.StreamableContent */
    getMimeType(i: number): string
    getNMimeTypes(): number
    getStream(mimeType: string): GLib.IOChannel
    getUri(mimeType: string): string | null
    /* Virtual methods of Atk.StreamableContent */
    vfuncGetMimeType(i: number): string
    vfuncGetNMimeTypes(): number
    vfuncGetStream(mimeType: string): GLib.IOChannel
    vfuncGetUri(mimeType: string): string | null
    static name: string
}
export class Table {
    /* Methods of Atk.Table */
    addColumnSelection(column: number): boolean
    addRowSelection(row: number): boolean
    getCaption(): Object | null
    getColumnAtIndex(index: number): number
    getColumnDescription(column: number): string
    getColumnExtentAt(row: number, column: number): number
    getColumnHeader(column: number): Object | null
    getIndexAt(row: number, column: number): number
    getNColumns(): number
    getNRows(): number
    getRowAtIndex(index: number): number
    getRowDescription(row: number): string | null
    getRowExtentAt(row: number, column: number): number
    getRowHeader(row: number): Object | null
    getSelectedColumns(selected: number): number
    getSelectedRows(selected: number): number
    getSummary(): Object
    isColumnSelected(column: number): boolean
    isRowSelected(row: number): boolean
    isSelected(row: number, column: number): boolean
    refAt(row: number, column: number): Object
    removeColumnSelection(column: number): boolean
    removeRowSelection(row: number): boolean
    setCaption(caption: Object): void
    setColumnDescription(column: number, description: string): void
    setColumnHeader(column: number, header: Object): void
    setRowDescription(row: number, description: string): void
    setRowHeader(row: number, header: Object): void
    setSummary(accessible: Object): void
    /* Virtual methods of Atk.Table */
    vfuncAddColumnSelection(column: number): boolean
    vfuncAddRowSelection(row: number): boolean
    vfuncColumnDeleted(column: number, numDeleted: number): void
    vfuncColumnInserted(column: number, numInserted: number): void
    vfuncColumnReordered(): void
    vfuncGetCaption(): Object | null
    vfuncGetColumnAtIndex(index: number): number
    vfuncGetColumnDescription(column: number): string
    vfuncGetColumnExtentAt(row: number, column: number): number
    vfuncGetColumnHeader(column: number): Object | null
    vfuncGetIndexAt(row: number, column: number): number
    vfuncGetNColumns(): number
    vfuncGetNRows(): number
    vfuncGetRowAtIndex(index: number): number
    vfuncGetRowDescription(row: number): string | null
    vfuncGetRowExtentAt(row: number, column: number): number
    vfuncGetRowHeader(row: number): Object | null
    vfuncGetSelectedColumns(selected: number): number
    vfuncGetSelectedRows(selected: number): number
    vfuncGetSummary(): Object
    vfuncIsColumnSelected(column: number): boolean
    vfuncIsRowSelected(row: number): boolean
    vfuncIsSelected(row: number, column: number): boolean
    vfuncModelChanged(): void
    vfuncRefAt(row: number, column: number): Object
    vfuncRemoveColumnSelection(column: number): boolean
    vfuncRemoveRowSelection(row: number): boolean
    vfuncRowDeleted(row: number, numDeleted: number): void
    vfuncRowInserted(row: number, numInserted: number): void
    vfuncRowReordered(): void
    vfuncSetCaption(caption: Object): void
    vfuncSetColumnDescription(column: number, description: string): void
    vfuncSetColumnHeader(column: number, header: Object): void
    vfuncSetRowDescription(row: number, description: string): void
    vfuncSetRowHeader(row: number, header: Object): void
    vfuncSetSummary(accessible: Object): void
    /* Signals of Atk.Table */
    connect(sigName: "column-deleted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-deleted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    on(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "column-inserted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-inserted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    on(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "column-reordered", callback: (($obj: Table) => void)): number
    connect_after(sigName: "column-reordered", callback: (($obj: Table) => void)): number
    emit(sigName: "column-reordered"): void
    on(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "model-changed", callback: (($obj: Table) => void)): number
    connect_after(sigName: "model-changed", callback: (($obj: Table) => void)): number
    emit(sigName: "model-changed"): void
    on(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-deleted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-deleted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    on(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-inserted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    on(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-reordered", callback: (($obj: Table) => void)): number
    connect_after(sigName: "row-reordered", callback: (($obj: Table) => void)): number
    emit(sigName: "row-reordered"): void
    on(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export interface TableCell_ConstructProps extends Object_ConstructProps {
}
export class TableCell {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Object
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk.Object */
    parent: GObject.Object
    description: string
    name: string
    role: Role
    relationSet: RelationSet
    layer: Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.TableCell */
    getColumnHeaderCells(): Object[]
    getColumnSpan(): number
    getPosition(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    getRowColumnSpan(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    getRowHeaderCells(): Object[]
    getRowSpan(): number
    getTable(): Object
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Virtual methods of Atk.TableCell */
    vfuncGetColumnHeaderCells(): Object[]
    vfuncGetColumnSpan(): number
    vfuncGetPosition(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    vfuncGetRowColumnSpan(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    vfuncGetRowHeaderCells(): Object[]
    vfuncGetRowSpan(): number
    vfuncGetTable(): Object
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged(child?: object | null): void
    vfuncChildrenChanged(changeIndex: number, changedChild?: object | null): void
    vfuncFocusEvent(focusIn: boolean): void
    vfuncGetAttributes(): AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Object
    vfuncGetRole(): Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: PropertyValues): void
    vfuncRefRelationSet(): RelationSet
    vfuncRefStateSet(): StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Object): void
    vfuncSetRole(role: Role): void
    vfuncStateChange(name: string, stateSet: boolean): void
    vfuncVisibleDataChanged(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: TableCell, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: TableCell, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: TableCell, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: TableCell, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: TableCell, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: TableCell, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: TableCell, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: TableCell, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: TableCell, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: TableCell, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: TableCell) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: TableCell) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TableCell_ConstructProps)
    _init (config?: TableCell_ConstructProps): void
    static $gtype: GObject.Type
}
export class Text {
    /* Methods of Atk.Text */
    addSelection(startOffset: number, endOffset: number): boolean
    getBoundedRanges(rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType): TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getDefaultAttributes(): AttributeSet
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, coords: CoordType): number
    getRangeExtents(startOffset: number, endOffset: number, coordType: CoordType): /* rect */ TextRectangle
    getRunAttributes(offset: number): [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    getSelection(selectionNum: number): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getStringAtOffset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    getText(startOffset: number, endOffset: number): string
    getTextAfterOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextAtOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextBeforeOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    removeSelection(selectionNum: number): boolean
    scrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
    setCaretOffset(offset: number): boolean
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    /* Virtual methods of Atk.Text */
    vfuncAddSelection(startOffset: number, endOffset: number): boolean
    vfuncGetBoundedRanges(rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType): TextRange[]
    vfuncGetCaretOffset(): number
    vfuncGetCharacterAtOffset(offset: number): number
    vfuncGetCharacterCount(): number
    vfuncGetCharacterExtents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetDefaultAttributes(): AttributeSet
    vfuncGetNSelections(): number
    vfuncGetOffsetAtPoint(x: number, y: number, coords: CoordType): number
    vfuncGetRangeExtents(startOffset: number, endOffset: number, coordType: CoordType): /* rect */ TextRectangle
    vfuncGetRunAttributes(offset: number): [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetSelection(selectionNum: number): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetStringAtOffset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetText(startOffset: number, endOffset: number): string
    vfuncGetTextAfterOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetTextAtOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetTextBeforeOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncRemoveSelection(selectionNum: number): boolean
    vfuncScrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    vfuncScrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
    vfuncSetCaretOffset(offset: number): boolean
    vfuncSetSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    vfuncTextAttributesChanged(): void
    vfuncTextCaretMoved(location: number): void
    vfuncTextChanged(position: number, length: number): void
    vfuncTextSelectionChanged(): void
    /* Signals of Atk.Text */
    connect(sigName: "text-attributes-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "text-attributes-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "text-attributes-changed"): void
    on(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-caret-moved", callback: (($obj: Text, arg1: number) => void)): number
    connect_after(sigName: "text-caret-moved", callback: (($obj: Text, arg1: number) => void)): number
    emit(sigName: "text-caret-moved", arg1: number): void
    on(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-changed", callback: (($obj: Text, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "text-changed", callback: (($obj: Text, arg1: number, arg2: number) => void)): number
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    on(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-insert", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-insert", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    on(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-remove", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-remove", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    on(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-selection-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "text-selection-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "text-selection-changed"): void
    on(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static freeRanges(ranges: TextRange[]): void
}
export class Value {
    /* Methods of Atk.Value */
    getCurrentValue(): /* value */ any
    getIncrement(): number
    getMaximumValue(): /* value */ any
    getMinimumIncrement(): /* value */ any
    getMinimumValue(): /* value */ any
    getRange(): Range | null
    getSubRanges(): Range[]
    getValueAndText(): [ /* value */ number, /* text */ string | null ]
    setCurrentValue(value: any): boolean
    setValue(newValue: number): void
    /* Virtual methods of Atk.Value */
    vfuncGetCurrentValue(): /* value */ any
    vfuncGetIncrement(): number
    vfuncGetMaximumValue(): /* value */ any
    vfuncGetMinimumIncrement(): /* value */ any
    vfuncGetMinimumValue(): /* value */ any
    vfuncGetRange(): Range | null
    vfuncGetSubRanges(): Range[]
    vfuncGetValueAndText(): [ /* value */ number, /* text */ string | null ]
    vfuncSetCurrentValue(value: any): boolean
    vfuncSetValue(newValue: number): void
    /* Signals of Atk.Value */
    connect(sigName: "value-changed", callback: (($obj: Value, value: number, text: string) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: Value, value: number, text: string) => void)): number
    emit(sigName: "value-changed", value: number, text: string): void
    on(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export interface Window_ConstructProps extends Object_ConstructProps {
}
export class Window {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Object
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk.Object */
    parent: GObject.Object
    description: string
    name: string
    role: Role
    relationSet: RelationSet
    layer: Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged(child?: object | null): void
    vfuncChildrenChanged(changeIndex: number, changedChild?: object | null): void
    vfuncFocusEvent(focusIn: boolean): void
    vfuncGetAttributes(): AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Object
    vfuncGetRole(): Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: PropertyValues): void
    vfuncRefRelationSet(): RelationSet
    vfuncRefStateSet(): StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Object): void
    vfuncSetRole(role: Role): void
    vfuncStateChange(name: string, stateSet: boolean): void
    vfuncVisibleDataChanged(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Window */
    connect(sigName: "activate", callback: (($obj: Window) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Window) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "create", callback: (($obj: Window) => void)): number
    connect_after(sigName: "create", callback: (($obj: Window) => void)): number
    emit(sigName: "create"): void
    on(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deactivate", callback: (($obj: Window) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: Window) => void)): number
    emit(sigName: "deactivate"): void
    on(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: Window) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Window) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "maximize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "maximize", callback: (($obj: Window) => void)): number
    emit(sigName: "maximize"): void
    on(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "minimize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "minimize", callback: (($obj: Window) => void)): number
    emit(sigName: "minimize"): void
    on(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move", callback: (($obj: Window) => void)): number
    connect_after(sigName: "move", callback: (($obj: Window) => void)): number
    emit(sigName: "move"): void
    on(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "resize", callback: (($obj: Window) => void)): number
    emit(sigName: "resize"): void
    on(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "restore", callback: (($obj: Window) => void)): number
    connect_after(sigName: "restore", callback: (($obj: Window) => void)): number
    emit(sigName: "restore"): void
    on(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: Window, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Window, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: Window, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Window, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: Window, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Window, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: Window, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Window, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: Window, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Window, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface GObjectAccessible_ConstructProps extends Object_ConstructProps {
}
export class GObjectAccessible {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Object
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk.GObjectAccessible */
    parent: Object
    /* Fields of Atk.Object */
    description: string
    name: string
    role: Role
    relationSet: RelationSet
    layer: Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged(child?: object | null): void
    vfuncChildrenChanged(changeIndex: number, changedChild?: object | null): void
    vfuncFocusEvent(focusIn: boolean): void
    vfuncGetAttributes(): AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Object
    vfuncGetRole(): Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: PropertyValues): void
    vfuncRefRelationSet(): RelationSet
    vfuncRefStateSet(): StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Object): void
    vfuncSetRole(role: Role): void
    vfuncStateChange(name: string, stateSet: boolean): void
    vfuncVisibleDataChanged(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: GObjectAccessible, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: GObjectAccessible, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: GObjectAccessible, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: GObjectAccessible, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: GObjectAccessible, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: GObjectAccessible, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: GObjectAccessible, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: GObjectAccessible, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: GObjectAccessible, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: GObjectAccessible, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: GObjectAccessible) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: GObjectAccessible) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GObjectAccessible_ConstructProps)
    _init (config?: GObjectAccessible_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static forObject(obj: GObject.Object): Object
    static $gtype: GObject.Type
}
export interface Hyperlink_ConstructProps extends GObject.Object_ConstructProps {
}
export class Hyperlink {
    /* Properties of Atk.Hyperlink */
    readonly endIndex: number
    readonly numberOfAnchors: number
    readonly selectedLink: boolean
    readonly startIndex: number
    /* Fields of Atk.Hyperlink */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.Hyperlink */
    getEndIndex(): number
    getNAnchors(): number
    getObject(i: number): Object
    getStartIndex(): number
    getUri(i: number): string
    isInline(): boolean
    isSelectedLink(): boolean
    isValid(): boolean
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
    /* Methods of Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Virtual methods of Atk.Hyperlink */
    vfuncGetEndIndex(): number
    vfuncGetNAnchors(): number
    vfuncGetObject(i: number): Object
    vfuncGetStartIndex(): number
    vfuncGetUri(i: number): string
    vfuncIsSelectedLink(): boolean
    vfuncIsValid(): boolean
    vfuncLinkActivated(): void
    vfuncLinkState(): number
    vfuncDoAction(i: number): boolean
    vfuncGetDescription(i: number): string | null
    vfuncGetKeybinding(i: number): string | null
    vfuncGetLocalizedName(i: number): string | null
    vfuncGetNActions(): number
    vfuncGetName(i: number): string | null
    vfuncSetDescription(i: number, desc: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Hyperlink */
    connect(sigName: "link-activated", callback: (($obj: Hyperlink) => void)): number
    connect_after(sigName: "link-activated", callback: (($obj: Hyperlink) => void)): number
    emit(sigName: "link-activated"): void
    on(sigName: "link-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "link-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "link-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-index", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-index", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::number-of-anchors", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number-of-anchors", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected-link", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-link", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Hyperlink_ConstructProps)
    _init (config?: Hyperlink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Misc_ConstructProps extends GObject.Object_ConstructProps {
}
export class Misc {
    /* Fields of Atk.Misc */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.Misc */
    threadsEnter(): void
    threadsLeave(): void
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
    /* Virtual methods of Atk.Misc */
    vfuncThreadsEnter(): void
    vfuncThreadsLeave(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Misc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Misc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Misc_ConstructProps)
    _init (config?: Misc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getInstance(): Misc
    static $gtype: GObject.Type
}
export interface NoOpObject_ConstructProps extends Object_ConstructProps {
}
export class NoOpObject {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Object
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk.NoOpObject */
    parent: Object
    /* Fields of Atk.Object */
    description: string
    name: string
    role: Role
    relationSet: RelationSet
    layer: Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Methods of Atk.Action */
    doAction(i: number): boolean
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    /* Methods of Atk.Component */
    contains(x: number, y: number, coordType: CoordType): boolean
    getAlpha(): number
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    setPosition(x: number, y: number, coordType: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Methods of Atk.Document */
    getAttributeValue(attributeName: string): string | null
    getCurrentPageNumber(): number
    getDocument(): object | null
    getDocumentType(): string
    getLocale(): string
    getPageCount(): number
    setAttributeValue(attributeName: string, attributeValue: string): boolean
    /* Methods of Atk.EditableText */
    copyText(startPos: number, endPos: number): void
    cutText(startPos: number, endPos: number): void
    deleteText(startPos: number, endPos: number): void
    insertText(string: string, length: number, position: number): void
    pasteText(position: number): void
    setRunAttributes(attribSet: AttributeSet, startOffset: number, endOffset: number): boolean
    setTextContents(string: string): void
    /* Methods of Atk.Hypertext */
    getLink(linkIndex: number): Hyperlink
    getLinkIndex(charIndex: number): number
    getNLinks(): number
    /* Methods of Atk.Image */
    getImageDescription(): string
    getImageLocale(): string | null
    getImagePosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getImageSize(): [ /* width */ number | null, /* height */ number | null ]
    setImageDescription(description: string): boolean
    /* Methods of Atk.Selection */
    addSelection(i: number): boolean
    clearSelection(): boolean
    getSelectionCount(): number
    isChildSelected(i: number): boolean
    refSelection(i: number): Object | null
    removeSelection(i: number): boolean
    selectAllSelection(): boolean
    /* Methods of Atk.Table */
    addColumnSelection(column: number): boolean
    addRowSelection(row: number): boolean
    getCaption(): Object | null
    getColumnAtIndex(index: number): number
    getColumnDescription(column: number): string
    getColumnExtentAt(row: number, column: number): number
    getColumnHeader(column: number): Object | null
    getIndexAt(row: number, column: number): number
    getNColumns(): number
    getNRows(): number
    getRowAtIndex(index: number): number
    getRowDescription(row: number): string | null
    getRowExtentAt(row: number, column: number): number
    getRowHeader(row: number): Object | null
    getSelectedColumns(selected: number): number
    getSelectedRows(selected: number): number
    getSummary(): Object
    isColumnSelected(column: number): boolean
    isRowSelected(row: number): boolean
    isSelected(row: number, column: number): boolean
    refAt(row: number, column: number): Object
    removeColumnSelection(column: number): boolean
    removeRowSelection(row: number): boolean
    setCaption(caption: Object): void
    setColumnDescription(column: number, description: string): void
    setColumnHeader(column: number, header: Object): void
    setRowDescription(row: number, description: string): void
    setRowHeader(row: number, header: Object): void
    setSummary(accessible: Object): void
    /* Methods of Atk.TableCell */
    getColumnHeaderCells(): Object[]
    getColumnSpan(): number
    getRowColumnSpan(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    getRowHeaderCells(): Object[]
    getRowSpan(): number
    getTable(): Object
    /* Methods of Atk.Text */
    getBoundedRanges(rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType): TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getDefaultAttributes(): AttributeSet
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, coords: CoordType): number
    getRangeExtents(startOffset: number, endOffset: number, coordType: CoordType): /* rect */ TextRectangle
    getRunAttributes(offset: number): [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    getSelection(selectionNum: number): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getStringAtOffset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    getText(startOffset: number, endOffset: number): string
    getTextAfterOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextAtOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextBeforeOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    scrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
    setCaretOffset(offset: number): boolean
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    /* Methods of Atk.Value */
    getCurrentValue(): /* value */ any
    getIncrement(): number
    getMaximumValue(): /* value */ any
    getMinimumIncrement(): /* value */ any
    getMinimumValue(): /* value */ any
    getRange(): Range | null
    getSubRanges(): Range[]
    getValueAndText(): [ /* value */ number, /* text */ string | null ]
    setCurrentValue(value: any): boolean
    setValue(newValue: number): void
    /* Virtual methods of Atk.NoOpObject */
    vfuncDoAction(i: number): boolean
    vfuncGetDescription(i: number): string | null
    vfunc_get_description(): string | null
    vfuncGetKeybinding(i: number): string | null
    vfuncGetLocalizedName(i: number): string | null
    vfuncGetNActions(): number
    vfuncGetName(i: number): string | null
    vfunc_get_name(): string | null
    vfuncSetDescription(i: number, desc: string): boolean
    vfunc_set_description(description: string): boolean | null
    vfuncBoundsChanged(bounds: Rectangle): void
    vfuncContains(x: number, y: number, coordType: CoordType): boolean
    vfuncGetAlpha(): number
    vfuncGetExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetLayer(): Layer
    vfuncGetMdiZorder(): number
    vfuncGetPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetPosition(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    vfuncGetSize(): [ /* width */ number | null, /* height */ number | null ]
    vfuncGrabFocus(): boolean
    vfuncRefAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    vfuncRemoveFocusHandler(handlerId: number): void
    vfuncScrollTo(type: ScrollType): boolean
    vfuncScrollToPoint(coords: CoordType, x: number, y: number): boolean
    vfuncSetExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    vfuncSetPosition(x: number, y: number, coordType: CoordType): boolean
    vfuncSetSize(width: number, height: number): boolean
    vfuncGetCurrentPageNumber(): number
    vfuncGetDocument(): object | null
    vfuncGetDocumentAttributeValue(attributeName: string): string | null
    vfuncGetDocumentAttributes(): AttributeSet
    vfuncGetDocumentLocale(): string
    vfuncGetDocumentType(): string
    vfuncGetPageCount(): number
    vfuncSetDocumentAttribute(attributeName: string, attributeValue: string): boolean
    vfuncCopyText(startPos: number, endPos: number): void
    vfuncCutText(startPos: number, endPos: number): void
    vfuncDeleteText(startPos: number, endPos: number): void
    vfuncInsertText(string: string, length: number, position: number): void
    vfuncPasteText(position: number): void
    vfuncSetRunAttributes(attribSet: AttributeSet, startOffset: number, endOffset: number): boolean
    vfuncSetTextContents(string: string): void
    vfuncGetLink(linkIndex: number): Hyperlink
    vfuncGetLinkIndex(charIndex: number): number
    vfuncGetNLinks(): number
    vfuncLinkSelected(linkIndex: number): void
    vfuncGetImageDescription(): string
    vfuncGetImageLocale(): string | null
    vfuncGetImagePosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetImageSize(): [ /* width */ number | null, /* height */ number | null ]
    vfuncSetImageDescription(description: string): boolean
    vfuncAddSelection(i: number): boolean
    vfuncAddSelection(startOffset: number, endOffset: number): boolean
    vfuncClearSelection(): boolean
    vfuncGetSelectionCount(): number
    vfuncIsChildSelected(i: number): boolean
    vfuncRefSelection(i: number): Object | null
    vfuncRemoveSelection(i: number): boolean
    vfuncSelectAllSelection(): boolean
    vfuncSelectionChanged(): void
    vfuncAddColumnSelection(column: number): boolean
    vfuncAddRowSelection(row: number): boolean
    vfuncColumnDeleted(column: number, numDeleted: number): void
    vfuncColumnInserted(column: number, numInserted: number): void
    vfuncColumnReordered(): void
    vfuncGetCaption(): Object | null
    vfuncGetColumnAtIndex(index: number): number
    vfuncGetColumnDescription(column: number): string
    vfuncGetColumnExtentAt(row: number, column: number): number
    vfuncGetColumnHeader(column: number): Object | null
    vfuncGetIndexAt(row: number, column: number): number
    vfuncGetNColumns(): number
    vfuncGetNRows(): number
    vfuncGetRowAtIndex(index: number): number
    vfuncGetRowDescription(row: number): string | null
    vfuncGetRowExtentAt(row: number, column: number): number
    vfuncGetRowHeader(row: number): Object | null
    vfuncGetSelectedColumns(selected: number): number
    vfuncGetSelectedRows(selected: number): number
    vfuncGetSummary(): Object
    vfuncIsColumnSelected(column: number): boolean
    vfuncIsRowSelected(row: number): boolean
    vfuncIsSelected(row: number, column: number): boolean
    vfuncModelChanged(): void
    vfuncRefAt(row: number, column: number): Object
    vfuncRemoveColumnSelection(column: number): boolean
    vfuncRemoveRowSelection(row: number): boolean
    vfuncRowDeleted(row: number, numDeleted: number): void
    vfuncRowInserted(row: number, numInserted: number): void
    vfuncRowReordered(): void
    vfuncSetCaption(caption: Object): void
    vfuncSetColumnDescription(column: number, description: string): void
    vfuncSetColumnHeader(column: number, header: Object): void
    vfuncSetRowDescription(row: number, description: string): void
    vfuncSetRowHeader(row: number, header: Object): void
    vfuncSetSummary(accessible: Object): void
    vfuncGetColumnHeaderCells(): Object[]
    vfuncGetColumnSpan(): number
    vfuncGetRowColumnSpan(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    vfuncGetRowHeaderCells(): Object[]
    vfuncGetRowSpan(): number
    vfuncGetTable(): Object
    vfuncGetBoundedRanges(rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType): TextRange[]
    vfuncGetCaretOffset(): number
    vfuncGetCharacterAtOffset(offset: number): number
    vfuncGetCharacterCount(): number
    vfuncGetCharacterExtents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetDefaultAttributes(): AttributeSet
    vfuncGetNSelections(): number
    vfuncGetOffsetAtPoint(x: number, y: number, coords: CoordType): number
    vfuncGetRangeExtents(startOffset: number, endOffset: number, coordType: CoordType): /* rect */ TextRectangle
    vfuncGetRunAttributes(offset: number): [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetSelection(selectionNum: number): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetStringAtOffset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetText(startOffset: number, endOffset: number): string
    vfuncGetTextAfterOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetTextAtOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetTextBeforeOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncScrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    vfuncScrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
    vfuncSetCaretOffset(offset: number): boolean
    vfuncSetSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    vfuncTextAttributesChanged(): void
    vfuncTextCaretMoved(location: number): void
    vfuncTextChanged(position: number, length: number): void
    vfuncTextSelectionChanged(): void
    vfuncGetCurrentValue(): /* value */ any
    vfuncGetIncrement(): number
    vfuncGetMaximumValue(): /* value */ any
    vfuncGetMinimumIncrement(): /* value */ any
    vfuncGetMinimumValue(): /* value */ any
    vfuncGetRange(): Range | null
    vfuncGetSubRanges(): Range[]
    vfuncGetValueAndText(): [ /* value */ number, /* text */ string | null ]
    vfuncSetCurrentValue(value: any): boolean
    vfuncSetValue(newValue: number): void
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged(child?: object | null): void
    vfuncChildrenChanged(changeIndex: number, changedChild?: object | null): void
    vfuncFocusEvent(focusIn: boolean): void
    vfuncGetAttributes(): AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Object
    vfuncGetRole(): Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: PropertyValues): void
    vfuncRefRelationSet(): RelationSet
    vfuncRefStateSet(): StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Object): void
    vfuncSetRole(role: Role): void
    vfuncStateChange(name: string, stateSet: boolean): void
    vfuncVisibleDataChanged(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: NoOpObject, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: NoOpObject, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: NoOpObject, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: NoOpObject, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: NoOpObject, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: NoOpObject, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: NoOpObject, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: NoOpObject, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: NoOpObject, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: NoOpObject, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: NoOpObject, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: NoOpObject, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Document */
    connect(sigName: "load-complete", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "load-complete", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "load-complete"): void
    on(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "load-stopped", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "load-stopped", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "load-stopped"): void
    on(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "page-changed", callback: (($obj: NoOpObject, pageNumber: number) => void)): number
    connect_after(sigName: "page-changed", callback: (($obj: NoOpObject, pageNumber: number) => void)): number
    emit(sigName: "page-changed", pageNumber: number): void
    on(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reload", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "reload", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "reload"): void
    on(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Hypertext */
    connect(sigName: "link-selected", callback: (($obj: NoOpObject, arg1: number) => void)): number
    connect_after(sigName: "link-selected", callback: (($obj: NoOpObject, arg1: number) => void)): number
    emit(sigName: "link-selected", arg1: number): void
    on(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "link-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Selection */
    connect(sigName: "selection-changed", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "selection-changed", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "selection-changed"): void
    on(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Table */
    connect(sigName: "column-deleted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-deleted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    on(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "column-inserted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-inserted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    on(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "column-reordered", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "column-reordered", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "column-reordered"): void
    on(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "column-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "model-changed", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "model-changed", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "model-changed"): void
    on(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "model-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-deleted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-deleted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    on(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-inserted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    on(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-reordered", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "row-reordered", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "row-reordered"): void
    on(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-reordered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Text */
    connect(sigName: "text-attributes-changed", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "text-attributes-changed", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "text-attributes-changed"): void
    on(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-attributes-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-caret-moved", callback: (($obj: NoOpObject, arg1: number) => void)): number
    connect_after(sigName: "text-caret-moved", callback: (($obj: NoOpObject, arg1: number) => void)): number
    emit(sigName: "text-caret-moved", arg1: number): void
    on(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-caret-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-changed", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "text-changed", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    on(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-insert", callback: (($obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-insert", callback: (($obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    on(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-insert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-remove", callback: (($obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-remove", callback: (($obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    on(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "text-selection-changed", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "text-selection-changed", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "text-selection-changed"): void
    on(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "text-selection-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Value */
    connect(sigName: "value-changed", callback: (($obj: NoOpObject, value: number, text: string) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: NoOpObject, value: number, text: string) => void)): number
    emit(sigName: "value-changed", value: number, text: string): void
    on(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Window */
    connect(sigName: "activate", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "activate", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "create", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "create", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "create"): void
    on(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deactivate", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "deactivate"): void
    on(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "maximize", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "maximize", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "maximize"): void
    on(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "minimize", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "minimize", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "minimize"): void
    on(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "move", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "move"): void
    on(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resize", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "resize", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "resize"): void
    on(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "restore", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "restore", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "restore"): void
    on(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NoOpObject_ConstructProps)
    _init (config?: NoOpObject_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(obj: GObject.Object): NoOpObject
    static freeRanges(ranges: TextRange[]): void
    static $gtype: GObject.Type
}
export interface NoOpObjectFactory_ConstructProps extends ObjectFactory_ConstructProps {
}
export class NoOpObjectFactory {
    /* Fields of Atk.NoOpObjectFactory */
    parent: ObjectFactory
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Object
    getAccessibleType(): GObject.Type
    invalidate(): void
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
    /* Virtual methods of Atk.ObjectFactory */
    vfuncInvalidate(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NoOpObjectFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NoOpObjectFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NoOpObjectFactory_ConstructProps)
    _init (config?: NoOpObjectFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NoOpObjectFactory
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
    accessibleDescription?: string
    accessibleName?: string
    accessibleParent?: Object
    accessibleRole?: Role
    accessibleTableCaption?: string
    accessibleTableCaptionObject?: Object
    accessibleTableColumnDescription?: string
    accessibleTableColumnHeader?: Object
    accessibleTableRowDescription?: string
    accessibleTableRowHeader?: Object
    accessibleTableSummary?: Object
    accessibleValue?: number
}
export class Object {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Object
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk.Object */
    parent: GObject.Object
    description: string
    name: string
    role: Role
    relationSet: RelationSet
    layer: Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged(child?: object | null): void
    vfuncChildrenChanged(changeIndex: number, changedChild?: object | null): void
    vfuncFocusEvent(focusIn: boolean): void
    vfuncGetAttributes(): AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Object
    vfuncGetRole(): Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: PropertyValues): void
    vfuncRefRelationSet(): RelationSet
    vfuncRefStateSet(): StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Object): void
    vfuncSetRole(role: Role): void
    vfuncStateChange(name: string, stateSet: boolean): void
    vfuncVisibleDataChanged(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: Object, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Object, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: Object, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Object, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: Object, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Object, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: Object, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Object, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: Object, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Object, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: Object) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Object) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ObjectFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class ObjectFactory {
    /* Fields of Atk.ObjectFactory */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Object
    getAccessibleType(): GObject.Type
    invalidate(): void
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
    /* Virtual methods of Atk.ObjectFactory */
    vfuncInvalidate(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ObjectFactory_ConstructProps)
    _init (config?: ObjectFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Plug_ConstructProps extends Object_ConstructProps {
}
export class Plug {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Object
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk.Plug */
    parent: Object
    /* Fields of Atk.Object */
    description: string
    name: string
    role: Role
    relationSet: RelationSet
    layer: Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.Plug */
    getId(): string
    setChild(child: Object): void
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Methods of Atk.Component */
    contains(x: number, y: number, coordType: CoordType): boolean
    getAlpha(): number
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    setPosition(x: number, y: number, coordType: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Plug */
    vfuncGetObjectId(): string
    vfuncBoundsChanged(bounds: Rectangle): void
    vfuncContains(x: number, y: number, coordType: CoordType): boolean
    vfuncGetAlpha(): number
    vfuncGetExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetLayer(): Layer
    vfuncGetMdiZorder(): number
    vfuncGetPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetSize(): [ /* width */ number | null, /* height */ number | null ]
    vfuncGrabFocus(): boolean
    vfuncRefAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    vfuncRemoveFocusHandler(handlerId: number): void
    vfuncScrollTo(type: ScrollType): boolean
    vfuncScrollToPoint(coords: CoordType, x: number, y: number): boolean
    vfuncSetExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    vfuncSetPosition(x: number, y: number, coordType: CoordType): boolean
    vfuncSetSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged(child?: object | null): void
    vfuncChildrenChanged(changeIndex: number, changedChild?: object | null): void
    vfuncFocusEvent(focusIn: boolean): void
    vfuncGetAttributes(): AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Object
    vfuncGetRole(): Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: PropertyValues): void
    vfuncRefRelationSet(): RelationSet
    vfuncRefStateSet(): StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Object): void
    vfuncSetRole(role: Role): void
    vfuncStateChange(name: string, stateSet: boolean): void
    vfuncVisibleDataChanged(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: Plug, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Plug, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: Plug, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Plug, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: Plug, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Plug, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: Plug, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Plug, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: Plug, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Plug, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: Plug) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Plug) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: Plug, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Plug, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Plug_ConstructProps)
    _init (config?: Plug_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Plug
    static $gtype: GObject.Type
}
export interface Registry_ConstructProps extends GObject.Object_ConstructProps {
}
export class Registry {
    /* Fields of Atk.Registry */
    parent: GObject.Object
    factoryTypeRegistry: GLib.HashTable
    factorySingletonCache: GLib.HashTable
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.Registry */
    getFactory(type: GObject.Type): ObjectFactory
    getFactoryType(type: GObject.Type): GObject.Type
    setFactoryType(type: GObject.Type, factoryType: GObject.Type): void
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
    connect(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Relation_ConstructProps extends GObject.Object_ConstructProps {
    relationType?: RelationType
    target?: GObject.ValueArray
}
export class Relation {
    /* Properties of Atk.Relation */
    relationType: RelationType
    target: GObject.ValueArray
    /* Fields of Atk.Relation */
    parent: GObject.Object
    relationship: RelationType
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.Relation */
    addTarget(target: Object): void
    getRelationType(): RelationType
    getTarget(): Object[]
    removeTarget(target: Object): boolean
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
    connect(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Relation_ConstructProps)
    _init (config?: Relation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(targets: Object[], relationship: RelationType): Relation
    static $gtype: GObject.Type
}
export interface RelationSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class RelationSet {
    /* Fields of Atk.RelationSet */
    parent: GObject.Object
    relations: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.RelationSet */
    add(relation: Relation): void
    addRelationByType(relationship: RelationType, target: Object): void
    contains(relationship: RelationType): boolean
    containsTarget(relationship: RelationType, target: Object): boolean
    getNRelations(): number
    getRelation(i: number): Relation
    getRelationByType(relationship: RelationType): Relation
    remove(relation: Relation): void
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
    connect(sigName: "notify", callback: (($obj: RelationSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RelationSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RelationSet_ConstructProps)
    _init (config?: RelationSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RelationSet
    static $gtype: GObject.Type
}
export interface Socket_ConstructProps extends Object_ConstructProps {
}
export class Socket {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Object
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk.Socket */
    parent: Object
    /* Fields of Atk.Object */
    description: string
    name: string
    role: Role
    relationSet: RelationSet
    layer: Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.Socket */
    embed(plugId: string): void
    isOccupied(): boolean
    /* Methods of Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Methods of Atk.Component */
    contains(x: number, y: number, coordType: CoordType): boolean
    getAlpha(): number
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    setPosition(x: number, y: number, coordType: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Socket */
    vfuncEmbed(plugId: string): void
    vfuncBoundsChanged(bounds: Rectangle): void
    vfuncContains(x: number, y: number, coordType: CoordType): boolean
    vfuncGetAlpha(): number
    vfuncGetExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetLayer(): Layer
    vfuncGetMdiZorder(): number
    vfuncGetPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetSize(): [ /* width */ number | null, /* height */ number | null ]
    vfuncGrabFocus(): boolean
    vfuncRefAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    vfuncRemoveFocusHandler(handlerId: number): void
    vfuncScrollTo(type: ScrollType): boolean
    vfuncScrollToPoint(coords: CoordType, x: number, y: number): boolean
    vfuncSetExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    vfuncSetPosition(x: number, y: number, coordType: CoordType): boolean
    vfuncSetSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged(child?: object | null): void
    vfuncChildrenChanged(changeIndex: number, changedChild?: object | null): void
    vfuncFocusEvent(focusIn: boolean): void
    vfuncGetAttributes(): AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Object
    vfuncGetRole(): Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: PropertyValues): void
    vfuncRefRelationSet(): RelationSet
    vfuncRefStateSet(): StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Object): void
    vfuncSetRole(role: Role): void
    vfuncStateChange(name: string, stateSet: boolean): void
    vfuncVisibleDataChanged(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: Socket, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Socket, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: Socket, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Socket, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: Socket, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Socket, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: Socket, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Socket, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: Socket, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Socket, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: Socket) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Socket) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: Socket, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Socket, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(): Socket
    static $gtype: GObject.Type
}
export interface StateSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class StateSet {
    /* Fields of Atk.StateSet */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.StateSet */
    addState(type: StateType): boolean
    addStates(types: StateType[]): void
    andSets(compareSet: StateSet): StateSet
    clearStates(): void
    containsState(type: StateType): boolean
    containsStates(types: StateType[]): boolean
    isEmpty(): boolean
    orSets(compareSet: StateSet): StateSet | null
    removeState(type: StateType): boolean
    xorSets(compareSet: StateSet): StateSet
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
    connect(sigName: "notify", callback: (($obj: StateSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StateSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: StateSet_ConstructProps)
    _init (config?: StateSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StateSet
    static $gtype: GObject.Type
}
export interface Util_ConstructProps extends GObject.Object_ConstructProps {
}
export class Util {
    /* Fields of Atk.Util */
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Util, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Util, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Util_ConstructProps)
    _init (config?: Util_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ActionIface {
    /* Fields of Atk.ActionIface */
    doAction: (action: Action, i: number) => boolean
    getNActions: (action: Action) => number
    getDescription: (action: Action, i: number) => string | null
    getName: (action: Action, i: number) => string | null
    getKeybinding: (action: Action, i: number) => string | null
    setDescription: (action: Action, i: number, desc: string) => boolean
    getLocalizedName: (action: Action, i: number) => string | null
    static name: string
}
export class Attribute {
    /* Fields of Atk.Attribute */
    name: string
    value: string
    static name: string
    /* Static methods and pseudo-constructors */
    static setFree(attribSet: AttributeSet): void
}
export abstract class ComponentIface {
    /* Fields of Atk.ComponentIface */
    contains: (component: Component, x: number, y: number, coordType: CoordType) => boolean
    refAccessibleAtPoint: (component: Component, x: number, y: number, coordType: CoordType) => Object | null
    getExtents: (component: Component, coordType: CoordType) => [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition: (component: Component, coordType: CoordType) => [ /* x */ number | null, /* y */ number | null ]
    getSize: (component: Component) => [ /* width */ number | null, /* height */ number | null ]
    grabFocus: (component: Component) => boolean
    removeFocusHandler: (component: Component, handlerId: number) => void
    setExtents: (component: Component, x: number, y: number, width: number, height: number, coordType: CoordType) => boolean
    setPosition: (component: Component, x: number, y: number, coordType: CoordType) => boolean
    setSize: (component: Component, width: number, height: number) => boolean
    getLayer: (component: Component) => Layer
    getMdiZorder: (component: Component) => number
    boundsChanged: (component: Component, bounds: Rectangle) => void
    getAlpha: (component: Component) => number
    scrollTo: (component: Component, type: ScrollType) => boolean
    scrollToPoint: (component: Component, coords: CoordType, x: number, y: number) => boolean
    static name: string
}
export abstract class DocumentIface {
    /* Fields of Atk.DocumentIface */
    parent: GObject.TypeInterface
    getDocumentType: (document: Document) => string
    getDocument: (document: Document) => object | null
    getDocumentLocale: (document: Document) => string
    getDocumentAttributes: (document: Document) => AttributeSet
    getDocumentAttributeValue: (document: Document, attributeName: string) => string | null
    setDocumentAttribute: (document: Document, attributeName: string, attributeValue: string) => boolean
    getCurrentPageNumber: (document: Document) => number
    getPageCount: (document: Document) => number
    static name: string
}
export abstract class EditableTextIface {
    /* Fields of Atk.EditableTextIface */
    parentInterface: GObject.TypeInterface
    setRunAttributes: (text: EditableText, attribSet: AttributeSet, startOffset: number, endOffset: number) => boolean
    setTextContents: (text: EditableText, string: string) => void
    insertText: (text: EditableText, string: string, length: number, position: number) => void
    copyText: (text: EditableText, startPos: number, endPos: number) => void
    cutText: (text: EditableText, startPos: number, endPos: number) => void
    deleteText: (text: EditableText, startPos: number, endPos: number) => void
    pasteText: (text: EditableText, position: number) => void
    static name: string
}
export abstract class GObjectAccessibleClass {
    /* Fields of Atk.GObjectAccessibleClass */
    parentClass: ObjectClass
    pad1: Function
    pad2: Function
    static name: string
}
export abstract class HyperlinkClass {
    /* Fields of Atk.HyperlinkClass */
    parent: GObject.ObjectClass
    getUri: (link: Hyperlink, i: number) => string
    getObject: (link: Hyperlink, i: number) => Object
    getEndIndex: (link: Hyperlink) => number
    getStartIndex: (link: Hyperlink) => number
    isValid: (link: Hyperlink) => boolean
    getNAnchors: (link: Hyperlink) => number
    linkState: (link: Hyperlink) => number
    isSelectedLink: (link: Hyperlink) => boolean
    linkActivated: (link: Hyperlink) => void
    pad1: Function
    static name: string
}
export abstract class HyperlinkImplIface {
    /* Fields of Atk.HyperlinkImplIface */
    parent: GObject.TypeInterface
    getHyperlink: (impl: HyperlinkImpl) => Hyperlink
    static name: string
}
export abstract class HypertextIface {
    /* Fields of Atk.HypertextIface */
    parent: GObject.TypeInterface
    getLink: (hypertext: Hypertext, linkIndex: number) => Hyperlink
    getNLinks: (hypertext: Hypertext) => number
    getLinkIndex: (hypertext: Hypertext, charIndex: number) => number
    linkSelected: (hypertext: Hypertext, linkIndex: number) => void
    static name: string
}
export abstract class ImageIface {
    /* Fields of Atk.ImageIface */
    parent: GObject.TypeInterface
    getImagePosition: (image: Image, coordType: CoordType) => [ /* x */ number | null, /* y */ number | null ]
    getImageDescription: (image: Image) => string
    getImageSize: (image: Image) => [ /* width */ number | null, /* height */ number | null ]
    setImageDescription: (image: Image, description: string) => boolean
    getImageLocale: (image: Image) => string | null
    static name: string
}
export class Implementor {
    /* Methods of Atk.Implementor */
    refAccessible(): Object
    static name: string
}
export class KeyEventStruct {
    /* Fields of Atk.KeyEventStruct */
    type: number
    state: number
    keyval: number
    length: number
    string: string
    keycode: number
    timestamp: number
    static name: string
}
export abstract class MiscClass {
    /* Fields of Atk.MiscClass */
    parent: GObject.ObjectClass
    threadsEnter: (misc: Misc) => void
    threadsLeave: (misc: Misc) => void
    vfuncs: object[]
    static name: string
}
export abstract class NoOpObjectClass {
    /* Fields of Atk.NoOpObjectClass */
    parentClass: ObjectClass
    static name: string
}
export abstract class NoOpObjectFactoryClass {
    /* Fields of Atk.NoOpObjectFactoryClass */
    parentClass: ObjectFactoryClass
    static name: string
}
export abstract class ObjectClass {
    /* Fields of Atk.ObjectClass */
    parent: GObject.ObjectClass
    getName: (accessible: Object) => string
    getDescription: (accessible: Object) => string
    getParent: (accessible: Object) => Object
    getNChildren: (accessible: Object) => number
    getIndexInParent: (accessible: Object) => number
    refRelationSet: (accessible: Object) => RelationSet
    getRole: (accessible: Object) => Role
    getLayer: (accessible: Object) => Layer
    getMdiZorder: (accessible: Object) => number
    refStateSet: (accessible: Object) => StateSet
    setName: (accessible: Object, name: string) => void
    setDescription: (accessible: Object, description: string) => void
    setParent: (accessible: Object, parent: Object) => void
    setRole: (accessible: Object, role: Role) => void
    removePropertyChangeHandler: (accessible: Object, handlerId: number) => void
    initialize: (accessible: Object, data?: object | null) => void
    childrenChanged: (accessible: Object, changeIndex: number, changedChild?: object | null) => void
    focusEvent: (accessible: Object, focusIn: boolean) => void
    propertyChange: (accessible: Object, values: PropertyValues) => void
    stateChange: (accessible: Object, name: string, stateSet: boolean) => void
    visibleDataChanged: (accessible: Object) => void
    activeDescendantChanged: (accessible: Object, child?: object | null) => void
    getAttributes: (accessible: Object) => AttributeSet
    getObjectLocale: (accessible: Object) => string
    pad1: Function
    static name: string
}
export abstract class ObjectFactoryClass {
    /* Fields of Atk.ObjectFactoryClass */
    parentClass: GObject.ObjectClass
    invalidate: (factory: ObjectFactory) => void
    getAccessibleType: () => GObject.Type
    pad1: Function
    pad2: Function
    static name: string
}
export abstract class PlugClass {
    /* Fields of Atk.PlugClass */
    parentClass: ObjectClass
    getObjectId: (obj: Plug) => string
    static name: string
}
export class PropertyValues {
    /* Fields of Atk.PropertyValues */
    propertyName: string
    oldValue: any
    newValue: any
    static name: string
}
export class Range {
    /* Methods of Atk.Range */
    copy(): Range
    free(): void
    getDescription(): string
    getLowerLimit(): number
    getUpperLimit(): number
    static name: string
    static new(lowerLimit: number, upperLimit: number, description: string): Range
    constructor(lowerLimit: number, upperLimit: number, description: string)
    /* Static methods and pseudo-constructors */
    static new(lowerLimit: number, upperLimit: number, description: string): Range
}
export class Rectangle {
    /* Fields of Atk.Rectangle */
    x: number
    y: number
    width: number
    height: number
    static name: string
}
export abstract class RegistryClass {
    /* Fields of Atk.RegistryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class RelationClass {
    /* Fields of Atk.RelationClass */
    parent: GObject.ObjectClass
    static name: string
}
export abstract class RelationSetClass {
    /* Fields of Atk.RelationSetClass */
    parent: GObject.ObjectClass
    pad1: Function
    pad2: Function
    static name: string
}
export abstract class SelectionIface {
    /* Fields of Atk.SelectionIface */
    parent: GObject.TypeInterface
    addSelection: (selection: Selection, i: number) => boolean
    clearSelection: (selection: Selection) => boolean
    refSelection: (selection: Selection, i: number) => Object | null
    getSelectionCount: (selection: Selection) => number
    isChildSelected: (selection: Selection, i: number) => boolean
    removeSelection: (selection: Selection, i: number) => boolean
    selectAllSelection: (selection: Selection) => boolean
    selectionChanged: (selection: Selection) => void
    static name: string
}
export abstract class SocketClass {
    /* Fields of Atk.SocketClass */
    parentClass: ObjectClass
    embed: (obj: Socket, plugId: string) => void
    static name: string
}
export abstract class StateSetClass {
    /* Fields of Atk.StateSetClass */
    parent: GObject.ObjectClass
    static name: string
}
export abstract class StreamableContentIface {
    /* Fields of Atk.StreamableContentIface */
    parent: GObject.TypeInterface
    getNMimeTypes: (streamable: StreamableContent) => number
    getMimeType: (streamable: StreamableContent, i: number) => string
    getStream: (streamable: StreamableContent, mimeType: string) => GLib.IOChannel
    getUri: (streamable: StreamableContent, mimeType: string) => string | null
    pad1: Function
    pad2: Function
    pad3: Function
    static name: string
}
export abstract class TableCellIface {
    /* Fields of Atk.TableCellIface */
    getColumnSpan: (cell: TableCell) => number
    getColumnHeaderCells: (cell: TableCell) => Object[]
    getPosition: (cell: TableCell) => [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    getRowSpan: (cell: TableCell) => number
    getRowHeaderCells: (cell: TableCell) => Object[]
    getRowColumnSpan: (cell: TableCell) => [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    getTable: (cell: TableCell) => Object
    static name: string
}
export abstract class TableIface {
    /* Fields of Atk.TableIface */
    parent: GObject.TypeInterface
    refAt: (table: Table, row: number, column: number) => Object
    getIndexAt: (table: Table, row: number, column: number) => number
    getColumnAtIndex: (table: Table, index: number) => number
    getRowAtIndex: (table: Table, index: number) => number
    getNColumns: (table: Table) => number
    getNRows: (table: Table) => number
    getColumnExtentAt: (table: Table, row: number, column: number) => number
    getRowExtentAt: (table: Table, row: number, column: number) => number
    getCaption: (table: Table) => Object | null
    getColumnDescription: (table: Table, column: number) => string
    getColumnHeader: (table: Table, column: number) => Object | null
    getRowDescription: (table: Table, row: number) => string | null
    getRowHeader: (table: Table, row: number) => Object | null
    getSummary: (table: Table) => Object
    setCaption: (table: Table, caption: Object) => void
    setColumnDescription: (table: Table, column: number, description: string) => void
    setColumnHeader: (table: Table, column: number, header: Object) => void
    setRowDescription: (table: Table, row: number, description: string) => void
    setRowHeader: (table: Table, row: number, header: Object) => void
    setSummary: (table: Table, accessible: Object) => void
    getSelectedColumns: (table: Table, selected: number) => number
    getSelectedRows: (table: Table, selected: number) => number
    isColumnSelected: (table: Table, column: number) => boolean
    isRowSelected: (table: Table, row: number) => boolean
    isSelected: (table: Table, row: number, column: number) => boolean
    addRowSelection: (table: Table, row: number) => boolean
    removeRowSelection: (table: Table, row: number) => boolean
    addColumnSelection: (table: Table, column: number) => boolean
    removeColumnSelection: (table: Table, column: number) => boolean
    rowInserted: (table: Table, row: number, numInserted: number) => void
    columnInserted: (table: Table, column: number, numInserted: number) => void
    rowDeleted: (table: Table, row: number, numDeleted: number) => void
    columnDeleted: (table: Table, column: number, numDeleted: number) => void
    rowReordered: (table: Table) => void
    columnReordered: (table: Table) => void
    modelChanged: (table: Table) => void
    static name: string
}
export abstract class TextIface {
    /* Fields of Atk.TextIface */
    parent: GObject.TypeInterface
    getText: (text: Text, startOffset: number, endOffset: number) => string
    getTextAfterOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextAtOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getCharacterAtOffset: (text: Text, offset: number) => number
    getTextBeforeOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getCaretOffset: (text: Text) => number
    getRunAttributes: (text: Text, offset: number) => [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    getDefaultAttributes: (text: Text) => AttributeSet
    getCharacterExtents: (text: Text, offset: number, coords: CoordType) => [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getCharacterCount: (text: Text) => number
    getOffsetAtPoint: (text: Text, x: number, y: number, coords: CoordType) => number
    getNSelections: (text: Text) => number
    getSelection: (text: Text, selectionNum: number) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    addSelection: (text: Text, startOffset: number, endOffset: number) => boolean
    removeSelection: (text: Text, selectionNum: number) => boolean
    setSelection: (text: Text, selectionNum: number, startOffset: number, endOffset: number) => boolean
    setCaretOffset: (text: Text, offset: number) => boolean
    textChanged: (text: Text, position: number, length: number) => void
    textCaretMoved: (text: Text, location: number) => void
    textSelectionChanged: (text: Text) => void
    textAttributesChanged: (text: Text) => void
    getRangeExtents: (text: Text, startOffset: number, endOffset: number, coordType: CoordType) => /* rect */ TextRectangle
    getBoundedRanges: (text: Text, rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType) => TextRange[]
    getStringAtOffset: (text: Text, offset: number, granularity: TextGranularity) => [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    scrollSubstringTo: (text: Text, startOffset: number, endOffset: number, type: ScrollType) => boolean
    scrollSubstringToPoint: (text: Text, startOffset: number, endOffset: number, coords: CoordType, x: number, y: number) => boolean
    static name: string
}
export class TextRange {
    /* Fields of Atk.TextRange */
    bounds: TextRectangle
    startOffset: number
    endOffset: number
    content: string
    static name: string
}
export class TextRectangle {
    /* Fields of Atk.TextRectangle */
    x: number
    y: number
    width: number
    height: number
    static name: string
}
export abstract class UtilClass {
    /* Fields of Atk.UtilClass */
    parent: GObject.ObjectClass
    removeGlobalEventListener: (listenerId: number) => void
    removeKeyEventListener: (listenerId: number) => void
    getToolkitName: () => string
    getToolkitVersion: () => string
    static name: string
}
export abstract class ValueIface {
    /* Fields of Atk.ValueIface */
    parent: GObject.TypeInterface
    getCurrentValue: (obj: Value) => /* value */ any
    getMaximumValue: (obj: Value) => /* value */ any
    getMinimumValue: (obj: Value) => /* value */ any
    setCurrentValue: (obj: Value, value: any) => boolean
    getMinimumIncrement: (obj: Value) => /* value */ any
    getValueAndText: (obj: Value) => [ /* value */ number, /* text */ string | null ]
    getRange: (obj: Value) => Range | null
    getIncrement: (obj: Value) => number
    getSubRanges: (obj: Value) => Range[]
    setValue: (obj: Value, newValue: number) => void
    static name: string
}
export abstract class WindowIface {
    /* Fields of Atk.WindowIface */
    parent: GObject.TypeInterface
    static name: string
}
type AttributeSet = any
type State = number
}