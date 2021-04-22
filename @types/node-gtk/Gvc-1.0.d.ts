/**
 * Gvc-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Gvc {

export enum MixerControlState {
    CLOSED,
    READY,
    CONNECTING,
    FAILED,
}
export enum MixerStreamState {
    INVALID,
    RUNNING,
    IDLE,
    SUSPENDED,
}
export enum MixerUIDeviceDirection {
    INPUT,
    OUTPUT,
}
export enum HeadsetPortChoice {
    NONE,
    HEADPHONES,
    HEADSET,
    MIC,
}
export const MIXER_UI_DEVICE_INVALID: number
export interface ChannelMap_ConstructProps extends GObject.Object_ConstructProps {
}
export class ChannelMap {
    /* Fields of Gvc.ChannelMap */
    parent: GObject.Object
    priv: ChannelMapPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gvc.ChannelMap */
    canBalance(): boolean
    canFade(): boolean
    getMapping(): string
    getNumChannels(): number
    getVolume(): number
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
    /* Virtual methods of Gvc.ChannelMap */
    vfuncVolumeChanged(set: boolean): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gvc.ChannelMap */
    connect(sigName: "volume-changed", callback: (($obj: ChannelMap, object: boolean) => void)): number
    connect_after(sigName: "volume-changed", callback: (($obj: ChannelMap, object: boolean) => void)): number
    emit(sigName: "volume-changed", object: boolean): void
    on(sigName: "volume-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChannelMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChannelMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ChannelMap_ConstructProps)
    _init (config?: ChannelMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ChannelMap
    static $gtype: GObject.Type
}
export interface MixerCard_ConstructProps extends GObject.Object_ConstructProps {
    iconName?: string
    id?: number
    index?: number
    name?: string
    paContext?: object
    profile?: string
}
export class MixerCard {
    /* Properties of Gvc.MixerCard */
    readonly humanProfile: string
    iconName: string
    name: string
    profile: string
    /* Fields of Gvc.MixerCard */
    parent: GObject.Object
    priv: MixerCardPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gvc.MixerCard */
    changeProfile(profile?: string | null): boolean
    getGicon(): Gio.Icon
    getIconName(): string
    getId(): number
    getIndex(): number
    getName(): string
    getPorts(): MixerCardPort[]
    getProfiles(): MixerCardProfile[]
    setIconName(name: string): boolean
    setName(name: string): boolean
    setPorts(ports: MixerCardPort[]): boolean
    setProfile(profile: string): boolean
    setProfiles(profiles: MixerCardProfile[]): boolean
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
    connect(sigName: "notify", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::human-profile", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::human-profile", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::human-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::human-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::human-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::profile", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MixerCard_ConstructProps)
    _init (config?: MixerCard_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerControl_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
}
export class MixerControl {
    /* Fields of Gvc.MixerControl */
    parent: GObject.Object
    priv: MixerControlPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gvc.MixerControl */
    changeInput(input: MixerUIDevice): void
    changeOutput(output: MixerUIDevice): void
    changeProfileOnSelectedDevice(device: MixerUIDevice, profile?: string | null): boolean
    close(): boolean
    getCards(): MixerCard[]
    getDefaultSink(): MixerStream
    getDefaultSource(): MixerStream
    getEventSinkInput(): MixerStream
    getSinkInputs(): MixerSinkInput[]
    getSinks(): MixerSink[]
    getSourceOutputs(): MixerSourceOutput[]
    getSources(): MixerSource[]
    getState(): MixerControlState
    getStreamFromDevice(device: MixerUIDevice): MixerStream
    getStreams(): MixerStream[]
    getVolMaxAmplified(): number
    getVolMaxNorm(): number
    lookupCardId(id: number): MixerCard
    lookupDeviceFromStream(stream: MixerStream): MixerUIDevice
    lookupInputId(id: number): MixerUIDevice
    lookupOutputId(id: number): MixerUIDevice
    lookupStreamId(id: number): MixerStream
    open(): boolean
    setDefaultSink(stream: MixerStream): boolean
    setDefaultSource(stream: MixerStream): boolean
    setHeadsetPort(id: number, choices: HeadsetPortChoice): void
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
    /* Virtual methods of Gvc.MixerControl */
    vfuncActiveInputUpdate(id: number): void
    vfuncActiveOutputUpdate(id: number): void
    vfuncAudioDeviceSelectionNeeded(id: number, showDialog: boolean, choices: HeadsetPortChoice): void
    vfuncCardAdded(id: number): void
    vfuncCardRemoved(id: number): void
    vfuncDefaultSinkChanged(id: number): void
    vfuncDefaultSourceChanged(id: number): void
    vfuncInputAdded(id: number): void
    vfuncInputRemoved(id: number): void
    vfuncOutputAdded(id: number): void
    vfuncOutputRemoved(id: number): void
    vfuncStateChanged(newState: MixerControlState): void
    vfuncStreamAdded(id: number): void
    vfuncStreamChanged(id: number): void
    vfuncStreamRemoved(id: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gvc.MixerControl */
    connect(sigName: "active-input-update", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "active-input-update", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "active-input-update", object: number): void
    on(sigName: "active-input-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-input-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-input-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "active-output-update", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "active-output-update", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "active-output-update", object: number): void
    on(sigName: "active-output-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-output-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-output-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "audio-device-selection-needed", callback: (($obj: MixerControl, object: number, p0: boolean, p1: number) => void)): number
    connect_after(sigName: "audio-device-selection-needed", callback: (($obj: MixerControl, object: number, p0: boolean, p1: number) => void)): number
    emit(sigName: "audio-device-selection-needed", object: number, p0: boolean, p1: number): void
    on(sigName: "audio-device-selection-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "audio-device-selection-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "audio-device-selection-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "card-added", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "card-added", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "card-added", object: number): void
    on(sigName: "card-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "card-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "card-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "card-removed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "card-removed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "card-removed", object: number): void
    on(sigName: "card-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "card-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "card-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "default-sink-changed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "default-sink-changed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "default-sink-changed", object: number): void
    on(sigName: "default-sink-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "default-sink-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "default-sink-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "default-source-changed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "default-source-changed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "default-source-changed", object: number): void
    on(sigName: "default-source-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "default-source-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "default-source-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "input-added", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "input-added", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "input-added", object: number): void
    on(sigName: "input-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "input-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "input-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "input-removed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "input-removed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "input-removed", object: number): void
    on(sigName: "input-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "input-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "input-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "output-added", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "output-added", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "output-added", object: number): void
    on(sigName: "output-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "output-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "output-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "output-removed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "output-removed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "output-removed", object: number): void
    on(sigName: "output-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "output-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "output-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-changed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "state-changed", object: number): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stream-added", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "stream-added", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "stream-added", object: number): void
    on(sigName: "stream-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stream-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stream-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stream-changed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "stream-changed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "stream-changed", object: number): void
    on(sigName: "stream-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stream-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stream-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stream-removed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "stream-removed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "stream-removed", object: number): void
    on(sigName: "stream-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stream-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stream-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerControl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerControl, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MixerControl_ConstructProps)
    _init (config?: MixerControl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): MixerControl
    static $gtype: GObject.Type
}
export interface MixerEventRole_ConstructProps extends MixerStream_ConstructProps {
    device?: string
}
export class MixerEventRole {
    /* Properties of Gvc.MixerEventRole */
    device: string
    /* Properties of Gvc.MixerStream */
    applicationId: string
    canDecibel: boolean
    cardIndex: number
    channelMap: ChannelMap
    decibel: number
    description: string
    formFactor: string
    iconName: string
    isEventStream: boolean
    isMuted: boolean
    isVirtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfsPath: string
    volume: number
    /* Fields of Gvc.MixerEventRole */
    parent: MixerStream
    priv: MixerEventRolePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    changeIsMuted(isMuted: boolean): boolean
    changePort(port: string): boolean
    getApplicationId(): string
    getBaseVolume(): number
    getCanDecibel(): boolean
    getCardIndex(): number
    getChannelMap(): ChannelMap
    getDecibel(): number
    getDescription(): string
    getFormFactor(): string
    getGicon(): Gio.Icon
    getIconName(): string
    getId(): number
    getIndex(): number
    getIsMuted(): boolean
    getName(): string
    getPort(): MixerStreamPort
    getPorts(): MixerStreamPort[]
    getState(): MixerStreamState
    getSysfsPath(): string
    getVolume(): number
    isRunning(): boolean
    pushVolume(): boolean
    setApplicationId(applicationId: string): boolean
    setBaseVolume(baseVolume: number): boolean
    setCanDecibel(canDecibel: boolean): boolean
    setCardIndex(cardIndex: number): boolean
    setDecibel(db: number): boolean
    setDescription(description: string): boolean
    setFormFactor(formFactor: string): boolean
    setIconName(name: string): boolean
    setIsEventStream(isEventStream: boolean): boolean
    setIsMuted(isMuted: boolean): boolean
    setIsVirtual(isEventStream: boolean): boolean
    setName(name: string): boolean
    setPort(port: string): boolean
    setPorts(ports: MixerStreamPort[]): boolean
    setState(state: MixerStreamState): boolean
    setSysfsPath(sysfsPath: string): boolean
    setVolume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfuncChangeIsMuted(isMuted: boolean): boolean
    vfuncChangePort(port: string): boolean
    vfuncPushVolume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::card-index", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channel-map", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decibel", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::form-factor", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-muted", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MixerEventRole_ConstructProps)
    _init (config?: MixerEventRole_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerSink_ConstructProps extends MixerStream_ConstructProps {
}
export class MixerSink {
    /* Properties of Gvc.MixerStream */
    applicationId: string
    canDecibel: boolean
    cardIndex: number
    channelMap: ChannelMap
    decibel: number
    description: string
    formFactor: string
    iconName: string
    isEventStream: boolean
    isMuted: boolean
    isVirtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfsPath: string
    volume: number
    /* Fields of Gvc.MixerSink */
    parent: MixerStream
    priv: MixerSinkPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    changeIsMuted(isMuted: boolean): boolean
    changePort(port: string): boolean
    getApplicationId(): string
    getBaseVolume(): number
    getCanDecibel(): boolean
    getCardIndex(): number
    getChannelMap(): ChannelMap
    getDecibel(): number
    getDescription(): string
    getFormFactor(): string
    getGicon(): Gio.Icon
    getIconName(): string
    getId(): number
    getIndex(): number
    getIsMuted(): boolean
    getName(): string
    getPort(): MixerStreamPort
    getPorts(): MixerStreamPort[]
    getState(): MixerStreamState
    getSysfsPath(): string
    getVolume(): number
    isRunning(): boolean
    pushVolume(): boolean
    setApplicationId(applicationId: string): boolean
    setBaseVolume(baseVolume: number): boolean
    setCanDecibel(canDecibel: boolean): boolean
    setCardIndex(cardIndex: number): boolean
    setDecibel(db: number): boolean
    setDescription(description: string): boolean
    setFormFactor(formFactor: string): boolean
    setIconName(name: string): boolean
    setIsEventStream(isEventStream: boolean): boolean
    setIsMuted(isMuted: boolean): boolean
    setIsVirtual(isEventStream: boolean): boolean
    setName(name: string): boolean
    setPort(port: string): boolean
    setPorts(ports: MixerStreamPort[]): boolean
    setState(state: MixerStreamState): boolean
    setSysfsPath(sysfsPath: string): boolean
    setVolume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfuncChangeIsMuted(isMuted: boolean): boolean
    vfuncChangePort(port: string): boolean
    vfuncPushVolume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::card-index", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channel-map", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decibel", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::form-factor", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-muted", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MixerSink_ConstructProps)
    _init (config?: MixerSink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerSinkInput_ConstructProps extends MixerStream_ConstructProps {
}
export class MixerSinkInput {
    /* Properties of Gvc.MixerStream */
    applicationId: string
    canDecibel: boolean
    cardIndex: number
    channelMap: ChannelMap
    decibel: number
    description: string
    formFactor: string
    iconName: string
    isEventStream: boolean
    isMuted: boolean
    isVirtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfsPath: string
    volume: number
    /* Fields of Gvc.MixerSinkInput */
    parent: MixerStream
    priv: MixerSinkInputPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    changeIsMuted(isMuted: boolean): boolean
    changePort(port: string): boolean
    getApplicationId(): string
    getBaseVolume(): number
    getCanDecibel(): boolean
    getCardIndex(): number
    getChannelMap(): ChannelMap
    getDecibel(): number
    getDescription(): string
    getFormFactor(): string
    getGicon(): Gio.Icon
    getIconName(): string
    getId(): number
    getIndex(): number
    getIsMuted(): boolean
    getName(): string
    getPort(): MixerStreamPort
    getPorts(): MixerStreamPort[]
    getState(): MixerStreamState
    getSysfsPath(): string
    getVolume(): number
    isRunning(): boolean
    pushVolume(): boolean
    setApplicationId(applicationId: string): boolean
    setBaseVolume(baseVolume: number): boolean
    setCanDecibel(canDecibel: boolean): boolean
    setCardIndex(cardIndex: number): boolean
    setDecibel(db: number): boolean
    setDescription(description: string): boolean
    setFormFactor(formFactor: string): boolean
    setIconName(name: string): boolean
    setIsEventStream(isEventStream: boolean): boolean
    setIsMuted(isMuted: boolean): boolean
    setIsVirtual(isEventStream: boolean): boolean
    setName(name: string): boolean
    setPort(port: string): boolean
    setPorts(ports: MixerStreamPort[]): boolean
    setState(state: MixerStreamState): boolean
    setSysfsPath(sysfsPath: string): boolean
    setVolume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfuncChangeIsMuted(isMuted: boolean): boolean
    vfuncChangePort(port: string): boolean
    vfuncPushVolume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::card-index", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channel-map", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decibel", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::form-factor", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-muted", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MixerSinkInput_ConstructProps)
    _init (config?: MixerSinkInput_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerSource_ConstructProps extends MixerStream_ConstructProps {
}
export class MixerSource {
    /* Properties of Gvc.MixerStream */
    applicationId: string
    canDecibel: boolean
    cardIndex: number
    channelMap: ChannelMap
    decibel: number
    description: string
    formFactor: string
    iconName: string
    isEventStream: boolean
    isMuted: boolean
    isVirtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfsPath: string
    volume: number
    /* Fields of Gvc.MixerSource */
    parent: MixerStream
    priv: MixerSourcePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    changeIsMuted(isMuted: boolean): boolean
    changePort(port: string): boolean
    getApplicationId(): string
    getBaseVolume(): number
    getCanDecibel(): boolean
    getCardIndex(): number
    getChannelMap(): ChannelMap
    getDecibel(): number
    getDescription(): string
    getFormFactor(): string
    getGicon(): Gio.Icon
    getIconName(): string
    getId(): number
    getIndex(): number
    getIsMuted(): boolean
    getName(): string
    getPort(): MixerStreamPort
    getPorts(): MixerStreamPort[]
    getState(): MixerStreamState
    getSysfsPath(): string
    getVolume(): number
    isRunning(): boolean
    pushVolume(): boolean
    setApplicationId(applicationId: string): boolean
    setBaseVolume(baseVolume: number): boolean
    setCanDecibel(canDecibel: boolean): boolean
    setCardIndex(cardIndex: number): boolean
    setDecibel(db: number): boolean
    setDescription(description: string): boolean
    setFormFactor(formFactor: string): boolean
    setIconName(name: string): boolean
    setIsEventStream(isEventStream: boolean): boolean
    setIsMuted(isMuted: boolean): boolean
    setIsVirtual(isEventStream: boolean): boolean
    setName(name: string): boolean
    setPort(port: string): boolean
    setPorts(ports: MixerStreamPort[]): boolean
    setState(state: MixerStreamState): boolean
    setSysfsPath(sysfsPath: string): boolean
    setVolume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfuncChangeIsMuted(isMuted: boolean): boolean
    vfuncChangePort(port: string): boolean
    vfuncPushVolume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::card-index", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channel-map", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decibel", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::form-factor", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-muted", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MixerSource_ConstructProps)
    _init (config?: MixerSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerSourceOutput_ConstructProps extends MixerStream_ConstructProps {
}
export class MixerSourceOutput {
    /* Properties of Gvc.MixerStream */
    applicationId: string
    canDecibel: boolean
    cardIndex: number
    channelMap: ChannelMap
    decibel: number
    description: string
    formFactor: string
    iconName: string
    isEventStream: boolean
    isMuted: boolean
    isVirtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfsPath: string
    volume: number
    /* Fields of Gvc.MixerSourceOutput */
    parent: MixerStream
    priv: MixerSourceOutputPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    changeIsMuted(isMuted: boolean): boolean
    changePort(port: string): boolean
    getApplicationId(): string
    getBaseVolume(): number
    getCanDecibel(): boolean
    getCardIndex(): number
    getChannelMap(): ChannelMap
    getDecibel(): number
    getDescription(): string
    getFormFactor(): string
    getGicon(): Gio.Icon
    getIconName(): string
    getId(): number
    getIndex(): number
    getIsMuted(): boolean
    getName(): string
    getPort(): MixerStreamPort
    getPorts(): MixerStreamPort[]
    getState(): MixerStreamState
    getSysfsPath(): string
    getVolume(): number
    isRunning(): boolean
    pushVolume(): boolean
    setApplicationId(applicationId: string): boolean
    setBaseVolume(baseVolume: number): boolean
    setCanDecibel(canDecibel: boolean): boolean
    setCardIndex(cardIndex: number): boolean
    setDecibel(db: number): boolean
    setDescription(description: string): boolean
    setFormFactor(formFactor: string): boolean
    setIconName(name: string): boolean
    setIsEventStream(isEventStream: boolean): boolean
    setIsMuted(isMuted: boolean): boolean
    setIsVirtual(isEventStream: boolean): boolean
    setName(name: string): boolean
    setPort(port: string): boolean
    setPorts(ports: MixerStreamPort[]): boolean
    setState(state: MixerStreamState): boolean
    setSysfsPath(sysfsPath: string): boolean
    setVolume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfuncChangeIsMuted(isMuted: boolean): boolean
    vfuncChangePort(port: string): boolean
    vfuncPushVolume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::card-index", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channel-map", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decibel", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::form-factor", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-muted", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MixerSourceOutput_ConstructProps)
    _init (config?: MixerSourceOutput_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerStream_ConstructProps extends GObject.Object_ConstructProps {
    applicationId?: string
    canDecibel?: boolean
    cardIndex?: number
    channelMap?: ChannelMap
    decibel?: number
    description?: string
    formFactor?: string
    iconName?: string
    id?: number
    index?: number
    isEventStream?: boolean
    isMuted?: boolean
    isVirtual?: boolean
    name?: string
    paContext?: object
    port?: string
    state?: MixerStreamState
    sysfsPath?: string
    volume?: number
}
export class MixerStream {
    /* Properties of Gvc.MixerStream */
    applicationId: string
    canDecibel: boolean
    cardIndex: number
    channelMap: ChannelMap
    decibel: number
    description: string
    formFactor: string
    iconName: string
    isEventStream: boolean
    isMuted: boolean
    isVirtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfsPath: string
    volume: number
    /* Fields of Gvc.MixerStream */
    parent: GObject.Object
    priv: MixerStreamPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    changeIsMuted(isMuted: boolean): boolean
    changePort(port: string): boolean
    getApplicationId(): string
    getBaseVolume(): number
    getCanDecibel(): boolean
    getCardIndex(): number
    getChannelMap(): ChannelMap
    getDecibel(): number
    getDescription(): string
    getFormFactor(): string
    getGicon(): Gio.Icon
    getIconName(): string
    getId(): number
    getIndex(): number
    getIsMuted(): boolean
    getName(): string
    getPort(): MixerStreamPort
    getPorts(): MixerStreamPort[]
    getState(): MixerStreamState
    getSysfsPath(): string
    getVolume(): number
    isRunning(): boolean
    pushVolume(): boolean
    setApplicationId(applicationId: string): boolean
    setBaseVolume(baseVolume: number): boolean
    setCanDecibel(canDecibel: boolean): boolean
    setCardIndex(cardIndex: number): boolean
    setDecibel(db: number): boolean
    setDescription(description: string): boolean
    setFormFactor(formFactor: string): boolean
    setIconName(name: string): boolean
    setIsEventStream(isEventStream: boolean): boolean
    setIsMuted(isMuted: boolean): boolean
    setIsVirtual(isEventStream: boolean): boolean
    setName(name: string): boolean
    setPort(port: string): boolean
    setPorts(ports: MixerStreamPort[]): boolean
    setState(state: MixerStreamState): boolean
    setSysfsPath(sysfsPath: string): boolean
    setVolume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfuncChangeIsMuted(isMuted: boolean): boolean
    vfuncChangePort(port: string): boolean
    vfuncPushVolume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::card-index", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::card-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channel-map", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decibel", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decibel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::form-factor", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-event-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-muted", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-virtual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sysfs-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MixerStream_ConstructProps)
    _init (config?: MixerStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerUIDevice_ConstructProps extends GObject.Object_ConstructProps {
    card?: object
    description?: string
    iconName?: string
    origin?: string
    portAvailable?: boolean
    portName?: string
    streamId?: number
    type?: number
}
export class MixerUIDevice {
    /* Properties of Gvc.MixerUIDevice */
    card: object
    description: string
    iconName: string
    origin: string
    portAvailable: boolean
    portName: string
    streamId: number
    type: number
    /* Fields of Gvc.MixerUIDevice */
    parentInstance: GObject.Object
    priv: MixerUIDevicePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gvc.MixerUIDevice */
    getActiveProfile(): string
    getBestProfile(selected: string | null, current: string): string
    getDescription(): string
    getGicon(): Gio.Icon
    getIconName(): string
    getId(): number
    getMatchingProfile(profile: string): string
    getOrigin(): string
    getPort(): string
    getProfiles(): MixerCardProfile[]
    getStreamId(): number
    getSupportedProfiles(): MixerCardProfile[]
    getTopPriorityProfile(): string
    getUserPreferredProfile(): string
    hasPorts(): boolean
    invalidateStream(): void
    isOutput(): boolean
    setProfiles(inProfiles: MixerCardProfile[]): void
    setUserPreferredProfile(profile: string): void
    shouldProfilesBeHidden(): boolean
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
    connect(sigName: "notify", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::card", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::card", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::card", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::card", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::origin", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port-available", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-available", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port-name", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-name", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stream-id", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-id", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stream-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stream-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stream-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MixerUIDevice_ConstructProps)
    _init (config?: MixerUIDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ChannelMapClass {
    /* Fields of Gvc.ChannelMapClass */
    parentClass: GObject.ObjectClass
    volumeChanged: (channelMap: ChannelMap, set: boolean) => void
    static name: string
}
export class ChannelMapPrivate {
    static name: string
}
export abstract class MixerCardClass {
    /* Fields of Gvc.MixerCardClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MixerCardPort {
    /* Fields of Gvc.MixerCardPort */
    port: string
    humanPort: string
    iconName: string
    priority: number
    available: number
    direction: number
    profiles: object[]
    static name: string
}
export class MixerCardPrivate {
    static name: string
}
export class MixerCardProfile {
    /* Fields of Gvc.MixerCardProfile */
    profile: string
    humanProfile: string
    status: string
    priority: number
    nSinks: number
    nSources: number
    /* Methods of Gvc.MixerCardProfile */
    compare(b: MixerCardProfile): number
    static name: string
}
export abstract class MixerControlClass {
    /* Fields of Gvc.MixerControlClass */
    parentClass: GObject.ObjectClass
    stateChanged: (control: MixerControl, newState: MixerControlState) => void
    streamAdded: (control: MixerControl, id: number) => void
    streamChanged: (control: MixerControl, id: number) => void
    streamRemoved: (control: MixerControl, id: number) => void
    cardAdded: (control: MixerControl, id: number) => void
    cardRemoved: (control: MixerControl, id: number) => void
    defaultSinkChanged: (control: MixerControl, id: number) => void
    defaultSourceChanged: (control: MixerControl, id: number) => void
    activeOutputUpdate: (control: MixerControl, id: number) => void
    activeInputUpdate: (control: MixerControl, id: number) => void
    outputAdded: (control: MixerControl, id: number) => void
    inputAdded: (control: MixerControl, id: number) => void
    outputRemoved: (control: MixerControl, id: number) => void
    inputRemoved: (control: MixerControl, id: number) => void
    audioDeviceSelectionNeeded: (control: MixerControl, id: number, showDialog: boolean, choices: HeadsetPortChoice) => void
    static name: string
}
export class MixerControlPrivate {
    static name: string
}
export abstract class MixerEventRoleClass {
    /* Fields of Gvc.MixerEventRoleClass */
    parentClass: MixerStreamClass
    static name: string
}
export class MixerEventRolePrivate {
    static name: string
}
export abstract class MixerSinkClass {
    /* Fields of Gvc.MixerSinkClass */
    parentClass: MixerStreamClass
    static name: string
}
export abstract class MixerSinkInputClass {
    /* Fields of Gvc.MixerSinkInputClass */
    parentClass: MixerStreamClass
    static name: string
}
export class MixerSinkInputPrivate {
    static name: string
}
export class MixerSinkPrivate {
    static name: string
}
export abstract class MixerSourceClass {
    /* Fields of Gvc.MixerSourceClass */
    parentClass: MixerStreamClass
    static name: string
}
export abstract class MixerSourceOutputClass {
    /* Fields of Gvc.MixerSourceOutputClass */
    parentClass: MixerStreamClass
    static name: string
}
export class MixerSourceOutputPrivate {
    static name: string
}
export class MixerSourcePrivate {
    static name: string
}
export abstract class MixerStreamClass {
    /* Fields of Gvc.MixerStreamClass */
    parentClass: GObject.ObjectClass
    pushVolume: (stream: MixerStream, operation?: object | null) => boolean
    changeIsMuted: (stream: MixerStream, isMuted: boolean) => boolean
    changePort: (stream: MixerStream, port: string) => boolean
    static name: string
}
export class MixerStreamPort {
    /* Fields of Gvc.MixerStreamPort */
    port: string
    humanPort: string
    priority: number
    available: boolean
    static name: string
}
export class MixerStreamPrivate {
    static name: string
}
export abstract class MixerUIDeviceClass {
    /* Fields of Gvc.MixerUIDeviceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MixerUIDevicePrivate {
    static name: string
}
}