/**
 * CoglPango-8
 */

import * as Gjs from './Gjs';
import * as PangoCairo from './PangoCairo-1.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Cogl from './Cogl-8';
import * as Graphene from './Graphene-1.0';
import * as GL from './GL-1.0';

export function ensure_glyph_cache_for_layout(layout: Pango.Layout): void
export function font_map_clear_glyph_cache(font_map: FontMap): void
export function font_map_create_context(font_map: FontMap): Pango.Context
export function font_map_get_renderer(font_map: FontMap): Pango.Renderer
export function font_map_get_use_mipmapping(font_map: FontMap): boolean
export function font_map_new(): Pango.FontMap
export function font_map_set_resolution(font_map: FontMap, dpi: number): void
export function font_map_set_use_mipmapping(font_map: FontMap, value: boolean): void
export interface Renderer_ConstructProps extends Pango.Renderer_ConstructProps {
    context?: object
}
export class Renderer {
    /* Fields of Pango.Renderer */
    matrix: Pango.Matrix
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Pango.Renderer */
    activate(): void
    deactivate(): void
    draw_error_underline(x: number, y: number, width: number, height: number): void
    draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void
    draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    draw_layout(layout: Pango.Layout, x: number, y: number): void
    draw_layout_line(line: Pango.LayoutLine, x: number, y: number): void
    draw_rectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    draw_trapezoid(part: Pango.RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    get_alpha(part: Pango.RenderPart): number
    get_color(part: Pango.RenderPart): Pango.Color | null
    get_layout(): Pango.Layout | null
    get_layout_line(): Pango.LayoutLine | null
    get_matrix(): Pango.Matrix | null
    part_changed(part: Pango.RenderPart): void
    set_alpha(part: Pango.RenderPart, alpha: number): void
    set_color(part: Pango.RenderPart, color?: Pango.Color | null): void
    set_matrix(matrix?: Pango.Matrix | null): void
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
    /* Virtual methods of Pango.Renderer */
    vfunc_begin(): void
    vfunc_draw_error_underline(x: number, y: number, width: number, height: number): void
    vfunc_draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    vfunc_draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void
    vfunc_draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    vfunc_draw_rectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    vfunc_draw_shape(attr: Pango.AttrShape, x: number, y: number): void
    vfunc_draw_trapezoid(part: Pango.RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    vfunc_end(): void
    vfunc_part_changed(part: Pango.RenderPart): void
    vfunc_prepare_run(run: Pango.LayoutRun): void
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class RendererClass {
    static name: string
}
type FontMap = PangoCairo.FontMap