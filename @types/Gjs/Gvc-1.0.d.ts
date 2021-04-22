/**
 * Gvc-1.0
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

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
    g_type_instance: GObject.TypeInstance
    /* Methods of Gvc.ChannelMap */
    can_balance(): boolean
    can_fade(): boolean
    get_mapping(): string
    get_num_channels(): number
    get_volume(): number
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
    /* Virtual methods of Gvc.ChannelMap */
    vfunc_volume_changed(set: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gvc.ChannelMap */
    connect(sigName: "volume-changed", callback: (($obj: ChannelMap, object: boolean) => void)): number
    connect_after(sigName: "volume-changed", callback: (($obj: ChannelMap, object: boolean) => void)): number
    emit(sigName: "volume-changed", object: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChannelMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChannelMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChannelMap_ConstructProps)
    _init (config?: ChannelMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ChannelMap
    static $gtype: GObject.Type
}
export interface MixerCard_ConstructProps extends GObject.Object_ConstructProps {
    icon_name?: string
    id?: number
    index?: number
    name?: string
    pa_context?: object
    profile?: string
}
export class MixerCard {
    /* Properties of Gvc.MixerCard */
    readonly human_profile: string
    icon_name: string
    name: string
    profile: string
    /* Fields of Gvc.MixerCard */
    parent: GObject.Object
    priv: MixerCardPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gvc.MixerCard */
    change_profile(profile?: string | null): boolean
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_id(): number
    get_index(): number
    get_name(): string
    get_ports(): MixerCardPort[]
    get_profiles(): MixerCardProfile[]
    set_icon_name(name: string): boolean
    set_name(name: string): boolean
    set_ports(ports: MixerCardPort[]): boolean
    set_profile(profile: string): boolean
    set_profiles(profiles: MixerCardProfile[]): boolean
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
    connect(sigName: "notify", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::human-profile", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::human-profile", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profile", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile", callback: (($obj: MixerCard, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of Gvc.MixerControl */
    change_input(input: MixerUIDevice): void
    change_output(output: MixerUIDevice): void
    change_profile_on_selected_device(device: MixerUIDevice, profile?: string | null): boolean
    close(): boolean
    get_cards(): MixerCard[]
    get_default_sink(): MixerStream
    get_default_source(): MixerStream
    get_event_sink_input(): MixerStream
    get_sink_inputs(): MixerSinkInput[]
    get_sinks(): MixerSink[]
    get_source_outputs(): MixerSourceOutput[]
    get_sources(): MixerSource[]
    get_state(): MixerControlState
    get_stream_from_device(device: MixerUIDevice): MixerStream
    get_streams(): MixerStream[]
    get_vol_max_amplified(): number
    get_vol_max_norm(): number
    lookup_card_id(id: number): MixerCard
    lookup_device_from_stream(stream: MixerStream): MixerUIDevice
    lookup_input_id(id: number): MixerUIDevice
    lookup_output_id(id: number): MixerUIDevice
    lookup_stream_id(id: number): MixerStream
    open(): boolean
    set_default_sink(stream: MixerStream): boolean
    set_default_source(stream: MixerStream): boolean
    set_headset_port(id: number, choices: HeadsetPortChoice): void
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
    /* Virtual methods of Gvc.MixerControl */
    vfunc_active_input_update(id: number): void
    vfunc_active_output_update(id: number): void
    vfunc_audio_device_selection_needed(id: number, show_dialog: boolean, choices: HeadsetPortChoice): void
    vfunc_card_added(id: number): void
    vfunc_card_removed(id: number): void
    vfunc_default_sink_changed(id: number): void
    vfunc_default_source_changed(id: number): void
    vfunc_input_added(id: number): void
    vfunc_input_removed(id: number): void
    vfunc_output_added(id: number): void
    vfunc_output_removed(id: number): void
    vfunc_state_changed(new_state: MixerControlState): void
    vfunc_stream_added(id: number): void
    vfunc_stream_changed(id: number): void
    vfunc_stream_removed(id: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gvc.MixerControl */
    connect(sigName: "active-input-update", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "active-input-update", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "active-input-update", object: number): void
    connect(sigName: "active-output-update", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "active-output-update", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "active-output-update", object: number): void
    connect(sigName: "audio-device-selection-needed", callback: (($obj: MixerControl, object: number, p0: boolean, p1: number) => void)): number
    connect_after(sigName: "audio-device-selection-needed", callback: (($obj: MixerControl, object: number, p0: boolean, p1: number) => void)): number
    emit(sigName: "audio-device-selection-needed", object: number, p0: boolean, p1: number): void
    connect(sigName: "card-added", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "card-added", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "card-added", object: number): void
    connect(sigName: "card-removed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "card-removed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "card-removed", object: number): void
    connect(sigName: "default-sink-changed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "default-sink-changed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "default-sink-changed", object: number): void
    connect(sigName: "default-source-changed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "default-source-changed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "default-source-changed", object: number): void
    connect(sigName: "input-added", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "input-added", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "input-added", object: number): void
    connect(sigName: "input-removed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "input-removed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "input-removed", object: number): void
    connect(sigName: "output-added", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "output-added", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "output-added", object: number): void
    connect(sigName: "output-removed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "output-removed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "output-removed", object: number): void
    connect(sigName: "state-changed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "state-changed", object: number): void
    connect(sigName: "stream-added", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "stream-added", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "stream-added", object: number): void
    connect(sigName: "stream-changed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "stream-changed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "stream-changed", object: number): void
    connect(sigName: "stream-removed", callback: (($obj: MixerControl, object: number) => void)): number
    connect_after(sigName: "stream-removed", callback: (($obj: MixerControl, object: number) => void)): number
    emit(sigName: "stream-removed", object: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerControl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerControl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    application_id: string
    can_decibel: boolean
    card_index: number
    channel_map: ChannelMap
    decibel: number
    description: string
    form_factor: string
    icon_name: string
    is_event_stream: boolean
    is_muted: boolean
    is_virtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfs_path: string
    volume: number
    /* Fields of Gvc.MixerEventRole */
    parent: MixerStream
    priv: MixerEventRolePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    change_is_muted(is_muted: boolean): boolean
    change_port(port: string): boolean
    get_application_id(): string
    get_base_volume(): number
    get_can_decibel(): boolean
    get_card_index(): number
    get_channel_map(): ChannelMap
    get_decibel(): number
    get_description(): string
    get_form_factor(): string
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_id(): number
    get_index(): number
    get_is_muted(): boolean
    get_name(): string
    get_port(): MixerStreamPort
    get_ports(): MixerStreamPort[]
    get_state(): MixerStreamState
    get_sysfs_path(): string
    get_volume(): number
    is_running(): boolean
    push_volume(): boolean
    set_application_id(application_id: string): boolean
    set_base_volume(base_volume: number): boolean
    set_can_decibel(can_decibel: boolean): boolean
    set_card_index(card_index: number): boolean
    set_decibel(db: number): boolean
    set_description(description: string): boolean
    set_form_factor(form_factor: string): boolean
    set_icon_name(name: string): boolean
    set_is_event_stream(is_event_stream: boolean): boolean
    set_is_muted(is_muted: boolean): boolean
    set_is_virtual(is_event_stream: boolean): boolean
    set_name(name: string): boolean
    set_port(port: string): boolean
    set_ports(ports: MixerStreamPort[]): boolean
    set_state(state: MixerStreamState): boolean
    set_sysfs_path(sysfs_path: string): boolean
    set_volume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfunc_change_is_muted(is_muted: boolean): boolean
    vfunc_change_port(port: string): boolean
    vfunc_push_volume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application-id", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::card-index", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::channel-map", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decibel", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::form-factor", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-muted", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerEventRole, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MixerEventRole_ConstructProps)
    _init (config?: MixerEventRole_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerSink_ConstructProps extends MixerStream_ConstructProps {
}
export class MixerSink {
    /* Properties of Gvc.MixerStream */
    application_id: string
    can_decibel: boolean
    card_index: number
    channel_map: ChannelMap
    decibel: number
    description: string
    form_factor: string
    icon_name: string
    is_event_stream: boolean
    is_muted: boolean
    is_virtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfs_path: string
    volume: number
    /* Fields of Gvc.MixerSink */
    parent: MixerStream
    priv: MixerSinkPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    change_is_muted(is_muted: boolean): boolean
    change_port(port: string): boolean
    get_application_id(): string
    get_base_volume(): number
    get_can_decibel(): boolean
    get_card_index(): number
    get_channel_map(): ChannelMap
    get_decibel(): number
    get_description(): string
    get_form_factor(): string
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_id(): number
    get_index(): number
    get_is_muted(): boolean
    get_name(): string
    get_port(): MixerStreamPort
    get_ports(): MixerStreamPort[]
    get_state(): MixerStreamState
    get_sysfs_path(): string
    get_volume(): number
    is_running(): boolean
    push_volume(): boolean
    set_application_id(application_id: string): boolean
    set_base_volume(base_volume: number): boolean
    set_can_decibel(can_decibel: boolean): boolean
    set_card_index(card_index: number): boolean
    set_decibel(db: number): boolean
    set_description(description: string): boolean
    set_form_factor(form_factor: string): boolean
    set_icon_name(name: string): boolean
    set_is_event_stream(is_event_stream: boolean): boolean
    set_is_muted(is_muted: boolean): boolean
    set_is_virtual(is_event_stream: boolean): boolean
    set_name(name: string): boolean
    set_port(port: string): boolean
    set_ports(ports: MixerStreamPort[]): boolean
    set_state(state: MixerStreamState): boolean
    set_sysfs_path(sysfs_path: string): boolean
    set_volume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfunc_change_is_muted(is_muted: boolean): boolean
    vfunc_change_port(port: string): boolean
    vfunc_push_volume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application-id", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::card-index", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::channel-map", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decibel", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::form-factor", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-muted", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MixerSink_ConstructProps)
    _init (config?: MixerSink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerSinkInput_ConstructProps extends MixerStream_ConstructProps {
}
export class MixerSinkInput {
    /* Properties of Gvc.MixerStream */
    application_id: string
    can_decibel: boolean
    card_index: number
    channel_map: ChannelMap
    decibel: number
    description: string
    form_factor: string
    icon_name: string
    is_event_stream: boolean
    is_muted: boolean
    is_virtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfs_path: string
    volume: number
    /* Fields of Gvc.MixerSinkInput */
    parent: MixerStream
    priv: MixerSinkInputPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    change_is_muted(is_muted: boolean): boolean
    change_port(port: string): boolean
    get_application_id(): string
    get_base_volume(): number
    get_can_decibel(): boolean
    get_card_index(): number
    get_channel_map(): ChannelMap
    get_decibel(): number
    get_description(): string
    get_form_factor(): string
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_id(): number
    get_index(): number
    get_is_muted(): boolean
    get_name(): string
    get_port(): MixerStreamPort
    get_ports(): MixerStreamPort[]
    get_state(): MixerStreamState
    get_sysfs_path(): string
    get_volume(): number
    is_running(): boolean
    push_volume(): boolean
    set_application_id(application_id: string): boolean
    set_base_volume(base_volume: number): boolean
    set_can_decibel(can_decibel: boolean): boolean
    set_card_index(card_index: number): boolean
    set_decibel(db: number): boolean
    set_description(description: string): boolean
    set_form_factor(form_factor: string): boolean
    set_icon_name(name: string): boolean
    set_is_event_stream(is_event_stream: boolean): boolean
    set_is_muted(is_muted: boolean): boolean
    set_is_virtual(is_event_stream: boolean): boolean
    set_name(name: string): boolean
    set_port(port: string): boolean
    set_ports(ports: MixerStreamPort[]): boolean
    set_state(state: MixerStreamState): boolean
    set_sysfs_path(sysfs_path: string): boolean
    set_volume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfunc_change_is_muted(is_muted: boolean): boolean
    vfunc_change_port(port: string): boolean
    vfunc_push_volume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application-id", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::card-index", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::channel-map", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decibel", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::form-factor", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-muted", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MixerSinkInput_ConstructProps)
    _init (config?: MixerSinkInput_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerSource_ConstructProps extends MixerStream_ConstructProps {
}
export class MixerSource {
    /* Properties of Gvc.MixerStream */
    application_id: string
    can_decibel: boolean
    card_index: number
    channel_map: ChannelMap
    decibel: number
    description: string
    form_factor: string
    icon_name: string
    is_event_stream: boolean
    is_muted: boolean
    is_virtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfs_path: string
    volume: number
    /* Fields of Gvc.MixerSource */
    parent: MixerStream
    priv: MixerSourcePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    change_is_muted(is_muted: boolean): boolean
    change_port(port: string): boolean
    get_application_id(): string
    get_base_volume(): number
    get_can_decibel(): boolean
    get_card_index(): number
    get_channel_map(): ChannelMap
    get_decibel(): number
    get_description(): string
    get_form_factor(): string
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_id(): number
    get_index(): number
    get_is_muted(): boolean
    get_name(): string
    get_port(): MixerStreamPort
    get_ports(): MixerStreamPort[]
    get_state(): MixerStreamState
    get_sysfs_path(): string
    get_volume(): number
    is_running(): boolean
    push_volume(): boolean
    set_application_id(application_id: string): boolean
    set_base_volume(base_volume: number): boolean
    set_can_decibel(can_decibel: boolean): boolean
    set_card_index(card_index: number): boolean
    set_decibel(db: number): boolean
    set_description(description: string): boolean
    set_form_factor(form_factor: string): boolean
    set_icon_name(name: string): boolean
    set_is_event_stream(is_event_stream: boolean): boolean
    set_is_muted(is_muted: boolean): boolean
    set_is_virtual(is_event_stream: boolean): boolean
    set_name(name: string): boolean
    set_port(port: string): boolean
    set_ports(ports: MixerStreamPort[]): boolean
    set_state(state: MixerStreamState): boolean
    set_sysfs_path(sysfs_path: string): boolean
    set_volume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfunc_change_is_muted(is_muted: boolean): boolean
    vfunc_change_port(port: string): boolean
    vfunc_push_volume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application-id", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::card-index", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::channel-map", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decibel", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::form-factor", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-muted", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MixerSource_ConstructProps)
    _init (config?: MixerSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerSourceOutput_ConstructProps extends MixerStream_ConstructProps {
}
export class MixerSourceOutput {
    /* Properties of Gvc.MixerStream */
    application_id: string
    can_decibel: boolean
    card_index: number
    channel_map: ChannelMap
    decibel: number
    description: string
    form_factor: string
    icon_name: string
    is_event_stream: boolean
    is_muted: boolean
    is_virtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfs_path: string
    volume: number
    /* Fields of Gvc.MixerSourceOutput */
    parent: MixerStream
    priv: MixerSourceOutputPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    change_is_muted(is_muted: boolean): boolean
    change_port(port: string): boolean
    get_application_id(): string
    get_base_volume(): number
    get_can_decibel(): boolean
    get_card_index(): number
    get_channel_map(): ChannelMap
    get_decibel(): number
    get_description(): string
    get_form_factor(): string
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_id(): number
    get_index(): number
    get_is_muted(): boolean
    get_name(): string
    get_port(): MixerStreamPort
    get_ports(): MixerStreamPort[]
    get_state(): MixerStreamState
    get_sysfs_path(): string
    get_volume(): number
    is_running(): boolean
    push_volume(): boolean
    set_application_id(application_id: string): boolean
    set_base_volume(base_volume: number): boolean
    set_can_decibel(can_decibel: boolean): boolean
    set_card_index(card_index: number): boolean
    set_decibel(db: number): boolean
    set_description(description: string): boolean
    set_form_factor(form_factor: string): boolean
    set_icon_name(name: string): boolean
    set_is_event_stream(is_event_stream: boolean): boolean
    set_is_muted(is_muted: boolean): boolean
    set_is_virtual(is_event_stream: boolean): boolean
    set_name(name: string): boolean
    set_port(port: string): boolean
    set_ports(ports: MixerStreamPort[]): boolean
    set_state(state: MixerStreamState): boolean
    set_sysfs_path(sysfs_path: string): boolean
    set_volume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfunc_change_is_muted(is_muted: boolean): boolean
    vfunc_change_port(port: string): boolean
    vfunc_push_volume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application-id", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::card-index", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::channel-map", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decibel", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::form-factor", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-muted", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerSourceOutput, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MixerSourceOutput_ConstructProps)
    _init (config?: MixerSourceOutput_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerStream_ConstructProps extends GObject.Object_ConstructProps {
    application_id?: string
    can_decibel?: boolean
    card_index?: number
    channel_map?: ChannelMap
    decibel?: number
    description?: string
    form_factor?: string
    icon_name?: string
    id?: number
    index?: number
    is_event_stream?: boolean
    is_muted?: boolean
    is_virtual?: boolean
    name?: string
    pa_context?: object
    port?: string
    state?: MixerStreamState
    sysfs_path?: string
    volume?: number
}
export class MixerStream {
    /* Properties of Gvc.MixerStream */
    application_id: string
    can_decibel: boolean
    card_index: number
    channel_map: ChannelMap
    decibel: number
    description: string
    form_factor: string
    icon_name: string
    is_event_stream: boolean
    is_muted: boolean
    is_virtual: boolean
    name: string
    port: string
    state: MixerStreamState
    sysfs_path: string
    volume: number
    /* Fields of Gvc.MixerStream */
    parent: GObject.Object
    priv: MixerStreamPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gvc.MixerStream */
    change_is_muted(is_muted: boolean): boolean
    change_port(port: string): boolean
    get_application_id(): string
    get_base_volume(): number
    get_can_decibel(): boolean
    get_card_index(): number
    get_channel_map(): ChannelMap
    get_decibel(): number
    get_description(): string
    get_form_factor(): string
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_id(): number
    get_index(): number
    get_is_muted(): boolean
    get_name(): string
    get_port(): MixerStreamPort
    get_ports(): MixerStreamPort[]
    get_state(): MixerStreamState
    get_sysfs_path(): string
    get_volume(): number
    is_running(): boolean
    push_volume(): boolean
    set_application_id(application_id: string): boolean
    set_base_volume(base_volume: number): boolean
    set_can_decibel(can_decibel: boolean): boolean
    set_card_index(card_index: number): boolean
    set_decibel(db: number): boolean
    set_description(description: string): boolean
    set_form_factor(form_factor: string): boolean
    set_icon_name(name: string): boolean
    set_is_event_stream(is_event_stream: boolean): boolean
    set_is_muted(is_muted: boolean): boolean
    set_is_virtual(is_event_stream: boolean): boolean
    set_name(name: string): boolean
    set_port(port: string): boolean
    set_ports(ports: MixerStreamPort[]): boolean
    set_state(state: MixerStreamState): boolean
    set_sysfs_path(sysfs_path: string): boolean
    set_volume(volume: number): boolean
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
    /* Virtual methods of Gvc.MixerStream */
    vfunc_change_is_muted(is_muted: boolean): boolean
    vfunc_change_port(port: string): boolean
    vfunc_push_volume(operation?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application-id", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-decibel", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-decibel", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::card-index", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card-index", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::channel-map", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-map", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decibel", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decibel", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::form-factor", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-event-stream", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-event-stream", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-muted", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-virtual", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-virtual", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sysfs-path", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysfs-path", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MixerStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MixerStream_ConstructProps)
    _init (config?: MixerStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MixerUIDevice_ConstructProps extends GObject.Object_ConstructProps {
    card?: object
    description?: string
    icon_name?: string
    origin?: string
    port_available?: boolean
    port_name?: string
    stream_id?: number
    type?: number
}
export class MixerUIDevice {
    /* Properties of Gvc.MixerUIDevice */
    card: object
    description: string
    icon_name: string
    origin: string
    port_available: boolean
    port_name: string
    stream_id: number
    type: number
    /* Fields of Gvc.MixerUIDevice */
    parent_instance: GObject.Object
    priv: MixerUIDevicePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gvc.MixerUIDevice */
    get_active_profile(): string
    get_best_profile(selected: string | null, current: string): string
    get_description(): string
    get_gicon(): Gio.Icon
    get_icon_name(): string
    get_id(): number
    get_matching_profile(profile: string): string
    get_origin(): string
    get_port(): string
    get_profiles(): MixerCardProfile[]
    get_stream_id(): number
    get_supported_profiles(): MixerCardProfile[]
    get_top_priority_profile(): string
    get_user_preferred_profile(): string
    has_ports(): boolean
    invalidate_stream(): void
    is_output(): boolean
    set_profiles(in_profiles: MixerCardProfile[]): void
    set_user_preferred_profile(profile: string): void
    should_profiles_be_hidden(): boolean
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
    connect(sigName: "notify", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::card", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::card", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::origin", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port-available", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-available", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port-name", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-name", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stream-id", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-id", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MixerUIDevice_ConstructProps)
    _init (config?: MixerUIDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ChannelMapClass {
    /* Fields of Gvc.ChannelMapClass */
    parent_class: GObject.ObjectClass
    volume_changed: (channel_map: ChannelMap, set: boolean) => void
    static name: string
}
export class ChannelMapPrivate {
    static name: string
}
export abstract class MixerCardClass {
    /* Fields of Gvc.MixerCardClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MixerCardPort {
    /* Fields of Gvc.MixerCardPort */
    port: string
    human_port: string
    icon_name: string
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
    human_profile: string
    status: string
    priority: number
    n_sinks: number
    n_sources: number
    /* Methods of Gvc.MixerCardProfile */
    compare(b: MixerCardProfile): number
    static name: string
}
export abstract class MixerControlClass {
    /* Fields of Gvc.MixerControlClass */
    parent_class: GObject.ObjectClass
    state_changed: (control: MixerControl, new_state: MixerControlState) => void
    stream_added: (control: MixerControl, id: number) => void
    stream_changed: (control: MixerControl, id: number) => void
    stream_removed: (control: MixerControl, id: number) => void
    card_added: (control: MixerControl, id: number) => void
    card_removed: (control: MixerControl, id: number) => void
    default_sink_changed: (control: MixerControl, id: number) => void
    default_source_changed: (control: MixerControl, id: number) => void
    active_output_update: (control: MixerControl, id: number) => void
    active_input_update: (control: MixerControl, id: number) => void
    output_added: (control: MixerControl, id: number) => void
    input_added: (control: MixerControl, id: number) => void
    output_removed: (control: MixerControl, id: number) => void
    input_removed: (control: MixerControl, id: number) => void
    audio_device_selection_needed: (control: MixerControl, id: number, show_dialog: boolean, choices: HeadsetPortChoice) => void
    static name: string
}
export class MixerControlPrivate {
    static name: string
}
export abstract class MixerEventRoleClass {
    /* Fields of Gvc.MixerEventRoleClass */
    parent_class: MixerStreamClass
    static name: string
}
export class MixerEventRolePrivate {
    static name: string
}
export abstract class MixerSinkClass {
    /* Fields of Gvc.MixerSinkClass */
    parent_class: MixerStreamClass
    static name: string
}
export abstract class MixerSinkInputClass {
    /* Fields of Gvc.MixerSinkInputClass */
    parent_class: MixerStreamClass
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
    parent_class: MixerStreamClass
    static name: string
}
export abstract class MixerSourceOutputClass {
    /* Fields of Gvc.MixerSourceOutputClass */
    parent_class: MixerStreamClass
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
    parent_class: GObject.ObjectClass
    push_volume: (stream: MixerStream, operation?: object | null) => boolean
    change_is_muted: (stream: MixerStream, is_muted: boolean) => boolean
    change_port: (stream: MixerStream, port: string) => boolean
    static name: string
}
export class MixerStreamPort {
    /* Fields of Gvc.MixerStreamPort */
    port: string
    human_port: string
    priority: number
    available: boolean
    static name: string
}
export class MixerStreamPrivate {
    static name: string
}
export abstract class MixerUIDeviceClass {
    /* Fields of Gvc.MixerUIDeviceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MixerUIDevicePrivate {
    static name: string
}