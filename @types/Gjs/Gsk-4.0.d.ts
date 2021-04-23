/**
 * Gsk-4.0
 */

import * as Gjs from './Gjs';
import * as Graphene from './Graphene-1.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gdk from './Gdk-4.0';
import * as cairo from './cairo-1.0';
import * as PangoCairo from './PangoCairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';

export enum BlendMode {
    DEFAULT,
    MULTIPLY,
    SCREEN,
    OVERLAY,
    DARKEN,
    LIGHTEN,
    COLOR_DODGE,
    COLOR_BURN,
    HARD_LIGHT,
    SOFT_LIGHT,
    DIFFERENCE,
    EXCLUSION,
    COLOR,
    HUE,
    SATURATION,
    LUMINOSITY,
}
export enum Corner {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_RIGHT,
    BOTTOM_LEFT,
}
export enum GLUniformType {
    NONE,
    FLOAT,
    INT,
    UINT,
    BOOL,
    VEC2,
    VEC3,
    VEC4,
}
export enum RenderNodeType {
    NOT_A_RENDER_NODE,
    CONTAINER_NODE,
    CAIRO_NODE,
    COLOR_NODE,
    LINEAR_GRADIENT_NODE,
    REPEATING_LINEAR_GRADIENT_NODE,
    RADIAL_GRADIENT_NODE,
    REPEATING_RADIAL_GRADIENT_NODE,
    CONIC_GRADIENT_NODE,
    BORDER_NODE,
    TEXTURE_NODE,
    INSET_SHADOW_NODE,
    OUTSET_SHADOW_NODE,
    TRANSFORM_NODE,
    OPACITY_NODE,
    COLOR_MATRIX_NODE,
    REPEAT_NODE,
    CLIP_NODE,
    ROUNDED_CLIP_NODE,
    SHADOW_NODE,
    BLEND_NODE,
    CROSS_FADE_NODE,
    TEXT_NODE,
    BLUR_NODE,
    DEBUG_NODE,
    GL_SHADER_NODE,
}
export enum ScalingFilter {
    LINEAR,
    NEAREST,
    TRILINEAR,
}
export enum SerializationError {
    UNSUPPORTED_FORMAT,
    UNSUPPORTED_VERSION,
    INVALID_DATA,
}
export enum TransformCategory {
    UNKNOWN,
    ANY,
    /* 3D (invalid, starts with a number) */
    /* 2D (invalid, starts with a number) */
    /* 2D_AFFINE (invalid, starts with a number) */
    /* 2D_TRANSLATE (invalid, starts with a number) */
    IDENTITY,
}
export function serialization_error_quark(): GLib.Quark
export function transform_parse(string: string): [ /* returnType */ boolean, /* out_transform */ Transform ]
export interface ParseErrorFunc {
    (start: ParseLocation, end: ParseLocation, error: GLib.Error): void
}
export class BlendNode {
    /* Methods of Gsk.BlendNode */
    get_blend_mode(): BlendMode
    get_bottom_child(): RenderNode
    get_top_child(): RenderNode
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode): BlendNode
    constructor(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode)
    /* Static methods and pseudo-constructors */
    static new(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode): BlendNode
}
export class BlurNode {
    /* Methods of Gsk.BlurNode */
    get_child(): RenderNode
    get_radius(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, radius: number): BlurNode
    constructor(child: RenderNode, radius: number)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, radius: number): BlurNode
}
export class BorderNode {
    /* Methods of Gsk.BorderNode */
    get_colors(): Gdk.RGBA
    get_outline(): RoundedRect
    get_widths(): number[]
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[]): BorderNode
    constructor(outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[])
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[]): BorderNode
}
export interface BroadwayRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class BroadwayRenderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface: Gdk.Surface): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BroadwayRenderer_ConstructProps)
    _init (config?: BroadwayRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BroadwayRenderer
    static $gtype: GObject.Type
}
export class CairoNode {
    /* Methods of Gsk.CairoNode */
    get_draw_context(): cairo.Context
    get_surface(): cairo.Surface
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect): CairoNode
    constructor(bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect): CairoNode
}
export interface CairoRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class CairoRenderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface: Gdk.Surface): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CairoRenderer_ConstructProps)
    _init (config?: CairoRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CairoRenderer
    static $gtype: GObject.Type
}
export class ClipNode {
    /* Methods of Gsk.ClipNode */
    get_child(): RenderNode
    get_clip(): Graphene.Rect
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, clip: Graphene.Rect): ClipNode
    constructor(child: RenderNode, clip: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, clip: Graphene.Rect): ClipNode
}
export class ColorMatrixNode {
    /* Methods of Gsk.ColorMatrixNode */
    get_child(): RenderNode
    get_color_matrix(): Graphene.Matrix
    get_color_offset(): Graphene.Vec4
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4): ColorMatrixNode
    constructor(child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4): ColorMatrixNode
}
export class ColorNode {
    /* Methods of Gsk.ColorNode */
    get_color(): Gdk.RGBA
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode
    constructor(rgba: Gdk.RGBA, bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode
}
export class ConicGradientNode {
    /* Methods of Gsk.ConicGradientNode */
    get_angle(): number
    get_center(): Graphene.Point
    get_color_stops(): ColorStop[]
    get_n_color_stops(): number
    get_rotation(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, color_stops: ColorStop[]): ConicGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, color_stops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, color_stops: ColorStop[]): ConicGradientNode
}
export class ContainerNode {
    /* Methods of Gsk.ContainerNode */
    get_child(idx: number): RenderNode
    get_n_children(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(children: RenderNode[]): ContainerNode
    constructor(children: RenderNode[])
    /* Static methods and pseudo-constructors */
    static new(children: RenderNode[]): ContainerNode
}
export class CrossFadeNode {
    /* Methods of Gsk.CrossFadeNode */
    get_end_child(): RenderNode
    get_progress(): number
    get_start_child(): RenderNode
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(start: RenderNode, end: RenderNode, progress: number): CrossFadeNode
    constructor(start: RenderNode, end: RenderNode, progress: number)
    /* Static methods and pseudo-constructors */
    static new(start: RenderNode, end: RenderNode, progress: number): CrossFadeNode
}
export class DebugNode {
    /* Methods of Gsk.DebugNode */
    get_child(): RenderNode
    get_message(): string
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, message: string): DebugNode
    constructor(child: RenderNode, message: string)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, message: string): DebugNode
}
export interface GLRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class GLRenderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface: Gdk.Surface): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLRenderer_ConstructProps)
    _init (config?: GLRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GLRenderer
    static $gtype: GObject.Type
}
export interface GLShader_ConstructProps extends GObject.Object_ConstructProps {
    resource?: string
    source?: GLib.Bytes
}
export class GLShader {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.GLShader */
    compile(renderer: Renderer): boolean
    find_uniform_by_name(name: string): number
    get_arg_bool(args: GLib.Bytes, idx: number): boolean
    get_arg_float(args: GLib.Bytes, idx: number): number
    get_arg_int(args: GLib.Bytes, idx: number): number
    get_arg_uint(args: GLib.Bytes, idx: number): number
    get_arg_vec2(args: GLib.Bytes, idx: number, out_value: Graphene.Vec2): void
    get_arg_vec3(args: GLib.Bytes, idx: number, out_value: Graphene.Vec3): void
    get_arg_vec4(args: GLib.Bytes, idx: number, out_value: Graphene.Vec4): void
    get_args_size(): number
    get_n_textures(): number
    get_n_uniforms(): number
    get_resource(): string
    get_source(): GLib.Bytes
    get_uniform_name(idx: number): string
    get_uniform_offset(idx: number): number
    get_uniform_type(idx: number): GLUniformType
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
    connect(sigName: "notify", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLShader_ConstructProps)
    _init (config?: GLShader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_bytes(sourcecode: GLib.Bytes): GLShader
    static new_from_resource(resource_path: string): GLShader
    static $gtype: GObject.Type
}
export class GLShaderNode {
    /* Methods of Gsk.GLShaderNode */
    get_args(): GLib.Bytes
    get_child(idx: number): RenderNode
    get_n_children(): number
    get_shader(): GLShader
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(shader: GLShader, bounds: Graphene.Rect, args: GLib.Bytes, children: RenderNode[]): GLShaderNode
    constructor(shader: GLShader, bounds: Graphene.Rect, args: GLib.Bytes, children: RenderNode[])
    /* Static methods and pseudo-constructors */
    static new(shader: GLShader, bounds: Graphene.Rect, args: GLib.Bytes, children: RenderNode[]): GLShaderNode
}
export class InsetShadowNode {
    /* Methods of Gsk.InsetShadowNode */
    get_blur_radius(): number
    get_color(): Gdk.RGBA
    get_dx(): number
    get_dy(): number
    get_outline(): RoundedRect
    get_spread(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): InsetShadowNode
    constructor(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number)
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): InsetShadowNode
}
export class LinearGradientNode {
    /* Methods of Gsk.LinearGradientNode */
    get_color_stops(): ColorStop[]
    get_end(): Graphene.Point
    get_n_color_stops(): number
    get_start(): Graphene.Point
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): LinearGradientNode
    constructor(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): LinearGradientNode
}
export interface NglRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class NglRenderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface: Gdk.Surface): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NglRenderer_ConstructProps)
    _init (config?: NglRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NglRenderer
    static $gtype: GObject.Type
}
export class OpacityNode {
    /* Methods of Gsk.OpacityNode */
    get_child(): RenderNode
    get_opacity(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, opacity: number): OpacityNode
    constructor(child: RenderNode, opacity: number)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, opacity: number): OpacityNode
}
export class OutsetShadowNode {
    /* Methods of Gsk.OutsetShadowNode */
    get_blur_radius(): number
    get_color(): Gdk.RGBA
    get_dx(): number
    get_dy(): number
    get_outline(): RoundedRect
    get_spread(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): OutsetShadowNode
    constructor(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number)
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): OutsetShadowNode
}
export class RadialGradientNode {
    /* Methods of Gsk.RadialGradientNode */
    get_center(): Graphene.Point
    get_color_stops(): ColorStop[]
    get_end(): number
    get_hradius(): number
    get_n_color_stops(): number
    get_start(): number
    get_vradius(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RadialGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RadialGradientNode
}
export class RenderNode {
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static deserialize(bytes: GLib.Bytes): RenderNode | null
}
export interface Renderer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Renderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface: Gdk.Surface): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_surface(surface: Gdk.Surface): Renderer
    static $gtype: GObject.Type
}
export class RepeatNode {
    /* Methods of Gsk.RepeatNode */
    get_child(): RenderNode
    get_child_bounds(): Graphene.Rect
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, child: RenderNode, child_bounds?: Graphene.Rect | null): RepeatNode
    constructor(bounds: Graphene.Rect, child: RenderNode, child_bounds?: Graphene.Rect | null)
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, child: RenderNode, child_bounds?: Graphene.Rect | null): RepeatNode
}
export class RepeatingLinearGradientNode {
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): RepeatingLinearGradientNode
    constructor(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): RepeatingLinearGradientNode
}
export class RepeatingRadialGradientNode {
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RepeatingRadialGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RepeatingRadialGradientNode
}
export class RoundedClipNode {
    /* Methods of Gsk.RoundedClipNode */
    get_child(): RenderNode
    get_clip(): RoundedRect
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, clip: RoundedRect): RoundedClipNode
    constructor(child: RenderNode, clip: RoundedRect)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, clip: RoundedRect): RoundedClipNode
}
export class ShadowNode {
    /* Methods of Gsk.ShadowNode */
    get_child(): RenderNode
    get_n_shadows(): number
    get_shadow(i: number): Shadow
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, shadows: Shadow[]): ShadowNode
    constructor(child: RenderNode, shadows: Shadow[])
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, shadows: Shadow[]): ShadowNode
}
export class TextNode {
    /* Methods of Gsk.TextNode */
    get_color(): Gdk.RGBA
    get_font(): Pango.Font
    get_glyphs(): Pango.GlyphInfo[]
    get_num_glyphs(): number
    get_offset(): Graphene.Point
    has_color_glyphs(): boolean
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode
    constructor(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point)
    /* Static methods and pseudo-constructors */
    static new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode
}
export class TextureNode {
    /* Methods of Gsk.TextureNode */
    get_texture(): Gdk.Texture
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode
    constructor(texture: Gdk.Texture, bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode
}
export class TransformNode {
    /* Methods of Gsk.TransformNode */
    get_child(): RenderNode
    get_transform(): Transform
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    ref(): RenderNode
    serialize(): GLib.Bytes
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, transform: Transform): TransformNode
    constructor(child: RenderNode, transform: Transform)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, transform: Transform): TransformNode
}
export interface VulkanRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class VulkanRenderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface: Gdk.Surface): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanRenderer_ConstructProps)
    _init (config?: VulkanRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VulkanRenderer
    static $gtype: GObject.Type
}
export abstract class BroadwayRendererClass {
    static name: string
}
export abstract class CairoRendererClass {
    static name: string
}
export class ColorStop {
    /* Fields of Gsk.ColorStop */
    offset: number
    color: Gdk.RGBA
    static name: string
}
export abstract class GLRendererClass {
    static name: string
}
export abstract class GLShaderClass {
    /* Fields of Gsk.GLShaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class NglRendererClass {
    static name: string
}
export class ParseLocation {
    /* Fields of Gsk.ParseLocation */
    bytes: number
    chars: number
    lines: number
    line_bytes: number
    line_chars: number
    static name: string
}
export abstract class RendererClass {
    static name: string
}
export class RoundedRect {
    /* Fields of Gsk.RoundedRect */
    bounds: Graphene.Rect
    corner: Graphene.Size[]
    /* Methods of Gsk.RoundedRect */
    contains_point(point: Graphene.Point): boolean
    contains_rect(rect: Graphene.Rect): boolean
    init(bounds: Graphene.Rect, top_left: Graphene.Size, top_right: Graphene.Size, bottom_right: Graphene.Size, bottom_left: Graphene.Size): RoundedRect
    init_copy(src: RoundedRect): RoundedRect
    init_from_rect(bounds: Graphene.Rect, radius: number): RoundedRect
    intersects_rect(rect: Graphene.Rect): boolean
    is_rectilinear(): boolean
    normalize(): RoundedRect
    offset(dx: number, dy: number): RoundedRect
    shrink(top: number, right: number, bottom: number, left: number): RoundedRect
    static name: string
}
export class ShaderArgsBuilder {
    /* Methods of Gsk.ShaderArgsBuilder */
    ref(): ShaderArgsBuilder
    set_bool(idx: number, value: boolean): void
    set_float(idx: number, value: number): void
    set_int(idx: number, value: number): void
    set_uint(idx: number, value: number): void
    set_vec2(idx: number, value: Graphene.Vec2): void
    set_vec3(idx: number, value: Graphene.Vec3): void
    set_vec4(idx: number, value: Graphene.Vec4): void
    to_args(): GLib.Bytes
    unref(): void
    static name: string
    static new(shader: GLShader, initial_values?: GLib.Bytes | null): ShaderArgsBuilder
    constructor(shader: GLShader, initial_values?: GLib.Bytes | null)
    /* Static methods and pseudo-constructors */
    static new(shader: GLShader, initial_values?: GLib.Bytes | null): ShaderArgsBuilder
}
export class Shadow {
    /* Fields of Gsk.Shadow */
    color: Gdk.RGBA
    dx: number
    dy: number
    radius: number
    static name: string
}
export class Transform {
    /* Methods of Gsk.Transform */
    equal(second?: Transform | null): boolean
    get_category(): TransformCategory
    invert(): Transform | null
    matrix(matrix: Graphene.Matrix): Transform
    perspective(depth: number): Transform
    print(string: GLib.String): void
    ref(): Transform
    rotate(angle: number): Transform
    rotate_3d(angle: number, axis: Graphene.Vec3): Transform
    scale(factor_x: number, factor_y: number): Transform
    scale_3d(factor_x: number, factor_y: number, factor_z: number): Transform
    to_2d(): [ /* out_xx */ number, /* out_yx */ number, /* out_xy */ number, /* out_yy */ number, /* out_dx */ number, /* out_dy */ number ]
    to_affine(): [ /* out_scale_x */ number, /* out_scale_y */ number, /* out_dx */ number, /* out_dy */ number ]
    to_matrix(): /* out_matrix */ Graphene.Matrix
    to_string(): string
    to_translate(): [ /* out_dx */ number, /* out_dy */ number ]
    transform(other?: Transform | null): Transform
    transform_bounds(rect: Graphene.Rect): /* out_rect */ Graphene.Rect
    transform_point(point: Graphene.Point): /* out_point */ Graphene.Point
    translate(point: Graphene.Point): Transform
    translate_3d(point: Graphene.Point3D): Transform
    unref(): void
    static name: string
    static new(): Transform
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Transform
    static parse(string: string): [ /* returnType */ boolean, /* out_transform */ Transform ]
}
export abstract class VulkanRendererClass {
    static name: string
}