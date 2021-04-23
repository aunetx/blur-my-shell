/**
 * Cally-8
 */

/// <reference types="node" />
/// <reference path="CoglPango-8.d.ts" />
/// <reference path="PangoCairo-1.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Cogl-8.d.ts" />
/// <reference path="Graphene-1.0.d.ts" />
/// <reference path="GL-1.0.d.ts" />
/// <reference path="Clutter-8.d.ts" />
/// <reference path="Json-1.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />

declare namespace Cally {

export function accessibilityInit(): boolean
export function getCallyInitialized(): boolean
export interface ActionCallback {
    (callyActor: Actor): void
}
export interface ActionFunc {
    (callyActor: Actor): void
}
export interface Actor_ConstructProps extends Atk.GObjectAccessible_ConstructProps {
}
export class Actor {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Atk.Object
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk.Object */
    description: string
    name: string
    role: Atk.Role
    relationSet: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cally.Actor */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    removeAction(actionId: number): boolean
    removeActionByName(actionName: string): boolean
    /* Methods of Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Virtual methods of Cally.Actor */
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
    vfuncBoundsChanged(bounds: Atk.Rectangle): void
    vfuncContains(x: number, y: number, coordType: Atk.CoordType): boolean
    vfuncGetAlpha(): number
    vfuncGetExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetLayer(): Atk.Layer
    vfuncGetMdiZorder(): number
    vfuncGetPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetSize(): [ /* width */ number | null, /* height */ number | null ]
    vfuncGrabFocus(): boolean
    vfuncRefAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    vfuncRemoveFocusHandler(handlerId: number): void
    vfuncScrollTo(type: Atk.ScrollType): boolean
    vfuncScrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    vfuncSetExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    vfuncSetPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    vfuncSetSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged(child?: object | null): void
    vfuncChildrenChanged(changeIndex: number, changedChild?: object | null): void
    vfuncFocusEvent(focusIn: boolean): void
    vfuncGetAttributes(): Atk.AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Atk.Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Atk.Object
    vfuncGetRole(): Atk.Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: Atk.PropertyValues): void
    vfuncRefRelationSet(): Atk.RelationSet
    vfuncRefStateSet(): Atk.StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Atk.Object): void
    vfuncSetRole(role: Atk.Role): void
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
    connect(sigName: "active-descendant-changed", callback: (($obj: Actor, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Actor, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: Actor, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Actor, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: Actor, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Actor, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: Actor, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Actor, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: Actor, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Actor, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Actor) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: Actor, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Actor, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Actor_ConstructProps)
    _init (config?: Actor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Actor
    static $gtype: GObject.Type
}
export interface Clone_ConstructProps extends Actor_ConstructProps {
}
export class Clone {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Atk.Object
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk.Object */
    description: string
    name: string
    role: Atk.Role
    relationSet: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cally.Actor */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    removeAction(actionId: number): boolean
    removeActionByName(actionName: string): boolean
    /* Methods of Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Virtual methods of Cally.Clone */
    vfuncGetDescription(i: number): string | null
    vfunc_get_description(): string | null
    vfuncGetName(i: number): string | null
    vfunc_get_name(): string | null
    vfuncSetDescription(i: number, desc: string): boolean
    vfunc_set_description(description: string): boolean | null
    /* Virtual methods of Cally.Actor */
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
    vfuncBoundsChanged(bounds: Atk.Rectangle): void
    vfuncContains(x: number, y: number, coordType: Atk.CoordType): boolean
    vfuncGetAlpha(): number
    vfuncGetExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetLayer(): Atk.Layer
    vfuncGetMdiZorder(): number
    vfuncGetPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetSize(): [ /* width */ number | null, /* height */ number | null ]
    vfuncGrabFocus(): boolean
    vfuncRefAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    vfuncRemoveFocusHandler(handlerId: number): void
    vfuncScrollTo(type: Atk.ScrollType): boolean
    vfuncScrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    vfuncSetExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    vfuncSetPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    vfuncSetSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged(child?: object | null): void
    vfuncChildrenChanged(changeIndex: number, changedChild?: object | null): void
    vfuncFocusEvent(focusIn: boolean): void
    vfuncGetAttributes(): Atk.AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Atk.Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Atk.Object
    vfuncGetRole(): Atk.Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: Atk.PropertyValues): void
    vfuncRefRelationSet(): Atk.RelationSet
    vfuncRefStateSet(): Atk.StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Atk.Object): void
    vfuncSetRole(role: Atk.Role): void
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
    connect(sigName: "active-descendant-changed", callback: (($obj: Clone, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Clone, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: Clone, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Clone, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: Clone, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Clone, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: Clone, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Clone, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: Clone, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Clone, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: Clone) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Clone) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: Clone, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Clone, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Clone, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Clone_ConstructProps)
    _init (config?: Clone_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Clone
    static $gtype: GObject.Type
}
export interface Root_ConstructProps extends Atk.GObjectAccessible_ConstructProps {
}
export class Root {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Atk.Object
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk.Object */
    description: string
    name: string
    role: Atk.Role
    relationSet: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    vfuncGetAttributes(): Atk.AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Atk.Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Atk.Object
    vfuncGetRole(): Atk.Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: Atk.PropertyValues): void
    vfuncRefRelationSet(): Atk.RelationSet
    vfuncRefStateSet(): Atk.StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Atk.Object): void
    vfuncSetRole(role: Atk.Role): void
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
    connect(sigName: "active-descendant-changed", callback: (($obj: Root, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Root, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: Root, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Root, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: Root, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Root, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: Root, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Root, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: Root, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Root, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: Root) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Root) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Root, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Root_ConstructProps)
    _init (config?: Root_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Root
    static $gtype: GObject.Type
}
export interface Stage_ConstructProps extends Actor_ConstructProps {
}
export class Stage {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Atk.Object
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk.Object */
    description: string
    name: string
    role: Atk.Role
    relationSet: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cally.Actor */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    removeAction(actionId: number): boolean
    removeActionByName(actionName: string): boolean
    /* Methods of Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Virtual methods of Cally.Stage */
    vfuncGetDescription(i: number): string | null
    vfunc_get_description(): string | null
    vfuncGetName(i: number): string | null
    vfunc_get_name(): string | null
    vfuncSetDescription(i: number, desc: string): boolean
    vfunc_set_description(description: string): boolean | null
    /* Virtual methods of Cally.Actor */
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
    vfuncBoundsChanged(bounds: Atk.Rectangle): void
    vfuncContains(x: number, y: number, coordType: Atk.CoordType): boolean
    vfuncGetAlpha(): number
    vfuncGetExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetLayer(): Atk.Layer
    vfuncGetMdiZorder(): number
    vfuncGetPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetSize(): [ /* width */ number | null, /* height */ number | null ]
    vfuncGrabFocus(): boolean
    vfuncRefAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    vfuncRemoveFocusHandler(handlerId: number): void
    vfuncScrollTo(type: Atk.ScrollType): boolean
    vfuncScrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    vfuncSetExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    vfuncSetPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    vfuncSetSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged(child?: object | null): void
    vfuncChildrenChanged(changeIndex: number, changedChild?: object | null): void
    vfuncFocusEvent(focusIn: boolean): void
    vfuncGetAttributes(): Atk.AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Atk.Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Atk.Object
    vfuncGetRole(): Atk.Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: Atk.PropertyValues): void
    vfuncRefRelationSet(): Atk.RelationSet
    vfuncRefStateSet(): Atk.StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Atk.Object): void
    vfuncSetRole(role: Atk.Role): void
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
    connect(sigName: "active-descendant-changed", callback: (($obj: Stage, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Stage, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: Stage, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Stage, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: Stage, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Stage, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: Stage, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Stage, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: Stage, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Stage, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Stage) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: Stage, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Stage, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Window */
    connect(sigName: "activate", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Stage) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "create", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "create", callback: (($obj: Stage) => void)): number
    emit(sigName: "create"): void
    on(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deactivate", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: Stage) => void)): number
    emit(sigName: "deactivate"): void
    on(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Stage) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "maximize", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "maximize", callback: (($obj: Stage) => void)): number
    emit(sigName: "maximize"): void
    on(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "maximize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "minimize", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "minimize", callback: (($obj: Stage) => void)): number
    emit(sigName: "minimize"): void
    on(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "minimize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "move", callback: (($obj: Stage) => void)): number
    emit(sigName: "move"): void
    on(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resize", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "resize", callback: (($obj: Stage) => void)): number
    emit(sigName: "resize"): void
    on(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "restore", callback: (($obj: Stage) => void)): number
    connect_after(sigName: "restore", callback: (($obj: Stage) => void)): number
    emit(sigName: "restore"): void
    on(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Stage_ConstructProps)
    _init (config?: Stage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Stage
    static $gtype: GObject.Type
}
export interface Text_ConstructProps extends Actor_ConstructProps {
}
export class Text {
    /* Properties of Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Atk.Object
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk.GObjectAccessible */
    parent: Atk.Object
    /* Fields of Atk.Object */
    description: string
    name: string
    role: Atk.Role
    relationSet: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cally.Actor */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    removeAction(actionId: number): boolean
    removeActionByName(actionName: string): boolean
    /* Methods of Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    get_description(): string | null
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    get_name(): string | null
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    set_description(description: string): boolean | null
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Methods of Atk.EditableText */
    copyText(startPos: number, endPos: number): void
    cutText(startPos: number, endPos: number): void
    deleteText(startPos: number, endPos: number): void
    insertText(string: string, length: number, position: number): void
    pasteText(position: number): void
    setRunAttributes(attribSet: Atk.AttributeSet, startOffset: number, endOffset: number): boolean
    setTextContents(string: string): void
    /* Methods of Atk.Text */
    addSelection(startOffset: number, endOffset: number): boolean
    getBoundedRanges(rect: Atk.TextRectangle, coordType: Atk.CoordType, xClipType: Atk.TextClipType, yClipType: Atk.TextClipType): Atk.TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, coords: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getDefaultAttributes(): Atk.AttributeSet
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, coords: Atk.CoordType): number
    getRangeExtents(startOffset: number, endOffset: number, coordType: Atk.CoordType): /* rect */ Atk.TextRectangle
    getRunAttributes(offset: number): [ /* returnType */ Atk.AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    getSelection(selectionNum: number): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getStringAtOffset(offset: number, granularity: Atk.TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    getText(startOffset: number, endOffset: number): string
    getTextAfterOffset(offset: number, boundaryType: Atk.TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextAtOffset(offset: number, boundaryType: Atk.TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextBeforeOffset(offset: number, boundaryType: Atk.TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    removeSelection(selectionNum: number): boolean
    scrollSubstringTo(startOffset: number, endOffset: number, type: Atk.ScrollType): boolean
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: Atk.CoordType, x: number, y: number): boolean
    setCaretOffset(offset: number): boolean
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    /* Virtual methods of Cally.Text */
    vfuncCopyText(startPos: number, endPos: number): void
    vfuncCutText(startPos: number, endPos: number): void
    vfuncDeleteText(startPos: number, endPos: number): void
    vfuncInsertText(string: string, length: number, position: number): void
    vfuncPasteText(position: number): void
    vfuncSetRunAttributes(attribSet: Atk.AttributeSet, startOffset: number, endOffset: number): boolean
    vfuncSetTextContents(string: string): void
    vfuncAddSelection(startOffset: number, endOffset: number): boolean
    vfuncGetBoundedRanges(rect: Atk.TextRectangle, coordType: Atk.CoordType, xClipType: Atk.TextClipType, yClipType: Atk.TextClipType): Atk.TextRange[]
    vfuncGetCaretOffset(): number
    vfuncGetCharacterAtOffset(offset: number): number
    vfuncGetCharacterCount(): number
    vfuncGetCharacterExtents(offset: number, coords: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetDefaultAttributes(): Atk.AttributeSet
    vfuncGetNSelections(): number
    vfuncGetOffsetAtPoint(x: number, y: number, coords: Atk.CoordType): number
    vfuncGetRangeExtents(startOffset: number, endOffset: number, coordType: Atk.CoordType): /* rect */ Atk.TextRectangle
    vfuncGetRunAttributes(offset: number): [ /* returnType */ Atk.AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetSelection(selectionNum: number): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetStringAtOffset(offset: number, granularity: Atk.TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetText(startOffset: number, endOffset: number): string
    vfuncGetTextAfterOffset(offset: number, boundaryType: Atk.TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetTextAtOffset(offset: number, boundaryType: Atk.TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncGetTextBeforeOffset(offset: number, boundaryType: Atk.TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    vfuncRemoveSelection(selectionNum: number): boolean
    vfuncScrollSubstringTo(startOffset: number, endOffset: number, type: Atk.ScrollType): boolean
    vfuncScrollSubstringToPoint(startOffset: number, endOffset: number, coords: Atk.CoordType, x: number, y: number): boolean
    vfuncSetCaretOffset(offset: number): boolean
    vfuncSetSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    vfuncTextAttributesChanged(): void
    vfuncTextCaretMoved(location: number): void
    vfuncTextChanged(position: number, length: number): void
    vfuncTextSelectionChanged(): void
    vfuncGetDescription(i: number): string | null
    vfunc_get_description(): string | null
    vfuncGetName(i: number): string | null
    vfunc_get_name(): string | null
    vfuncSetDescription(i: number, desc: string): boolean
    vfunc_set_description(description: string): boolean | null
    /* Virtual methods of Cally.Actor */
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
    vfuncBoundsChanged(bounds: Atk.Rectangle): void
    vfuncContains(x: number, y: number, coordType: Atk.CoordType): boolean
    vfuncGetAlpha(): number
    vfuncGetExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncGetLayer(): Atk.Layer
    vfuncGetMdiZorder(): number
    vfuncGetPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfuncGetSize(): [ /* width */ number | null, /* height */ number | null ]
    vfuncGrabFocus(): boolean
    vfuncRefAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    vfuncRemoveFocusHandler(handlerId: number): void
    vfuncScrollTo(type: Atk.ScrollType): boolean
    vfuncScrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    vfuncSetExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    vfuncSetPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    vfuncSetSize(width: number, height: number): boolean
    /* Virtual methods of Atk.Object */
    vfuncActiveDescendantChanged(child?: object | null): void
    vfuncChildrenChanged(changeIndex: number, changedChild?: object | null): void
    vfuncFocusEvent(focusIn: boolean): void
    vfuncGetAttributes(): Atk.AttributeSet
    vfunc_get_description(): string | null
    vfuncGetIndexInParent(): number
    vfuncGetLayer(): Atk.Layer
    vfuncGetMdiZorder(): number
    vfuncGetNChildren(): number
    vfunc_get_name(): string | null
    vfuncGetObjectLocale(): string
    vfuncGetParent(): Atk.Object
    vfuncGetRole(): Atk.Role
    vfuncInitialize(data?: object | null): void
    vfuncPropertyChange(values: Atk.PropertyValues): void
    vfuncRefRelationSet(): Atk.RelationSet
    vfuncRefStateSet(): Atk.StateSet
    vfuncRemovePropertyChangeHandler(handlerId: number): void
    vfunc_set_description(description: string): boolean | null
    vfuncSetName(name: string): void
    vfuncSetParent(parent: Atk.Object): void
    vfuncSetRole(role: Atk.Role): void
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
    connect(sigName: "active-descendant-changed", callback: (($obj: Text, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Text, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    on(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "children-changed", callback: (($obj: Text, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Text, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    on(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-event", callback: (($obj: Text, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Text, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    on(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-change", callback: (($obj: Text, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Text, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    on(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-change", callback: (($obj: Text, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Text, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    on(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visible-data-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "visible-data-changed"): void
    on(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: Text, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Text, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    on(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Text_ConstructProps)
    _init (config?: Text_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Text
    static freeRanges(ranges: Atk.TextRange[]): void
    static $gtype: GObject.Type
}
export interface Util_ConstructProps extends Atk.Util_ConstructProps {
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
export abstract class ActorClass {
    /* Fields of Cally.ActorClass */
    notifyClutter: (object: GObject.Object, pspec: GObject.ParamSpec) => void
    focusClutter: (actor: Clutter.Actor, data: object) => boolean
    addActor: (container: Clutter.Actor, actor: Clutter.Actor, data: object) => number
    removeActor: (container: Clutter.Actor, actor: Clutter.Actor, data: object) => number
    static name: string
}
export class ActorPrivate {
    static name: string
}
export abstract class CloneClass {
    static name: string
}
export class ClonePrivate {
    static name: string
}
export abstract class RootClass {
    static name: string
}
export class RootPrivate {
    static name: string
}
export abstract class StageClass {
    static name: string
}
export class StagePrivate {
    static name: string
}
export abstract class TextClass {
    static name: string
}
export class TextPrivate {
    static name: string
}
export abstract class UtilClass {
    static name: string
}
export class UtilPrivate {
    static name: string
}
}