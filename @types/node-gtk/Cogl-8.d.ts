/**
 * Cogl-8
 */

/// <reference types="node" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Graphene-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GL-1.0.d.ts" />

declare namespace Cogl {

export enum AttributeType {
    BYTE,
    UNSIGNED_BYTE,
    SHORT,
    UNSIGNED_SHORT,
    FLOAT,
}
export enum BitmapError {
    FAILED,
    UNKNOWN_TYPE,
    CORRUPT_IMAGE,
}
export enum BlendStringError {
    PARSE_ERROR,
    ARGUMENT_PARSE_ERROR,
    INVALID_ERROR,
    GPU_UNSUPPORTED_ERROR,
}
export enum DepthTestFunction {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
export enum FeatureID {
    OGL_FEATURE_ID_UNSIGNED_INT_INDICES,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_READ,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE,
    OGL_FEATURE_ID_FENCE,
    OGL_FEATURE_ID_TEXTURE_RG,
    OGL_FEATURE_ID_BUFFER_AGE,
    OGL_FEATURE_ID_TEXTURE_EGL_IMAGE_EXTERNAL,
    OGL_FEATURE_ID_BLIT_FRAMEBUFFER,
}
export enum FilterReturn {
    CONTINUE,
    REMOVE,
}
export enum FrameEvent {
    SYNC,
    COMPLETE,
}
export enum FramebufferError {
    FRAMEBUFFER_ERROR_ALLOCATE,
}
export enum GraphicsResetStatus {
    NO_ERROR,
    GUILTY_CONTEXT_RESET,
    INNOCENT_CONTEXT_RESET,
    UNKNOWN_CONTEXT_RESET,
    PURGED_CONTEXT_RESET,
}
export enum IndicesType {
    BYTE,
    SHORT,
    INT,
}
export enum MaterialAlphaFunc {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
export enum MaterialFilter {
    NEAREST,
    LINEAR,
    NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR,
}
export enum MaterialWrapMode {
    REPEAT,
    CLAMP_TO_EDGE,
    AUTOMATIC,
}
export enum PipelineAlphaFunc {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
export enum PipelineCullFaceMode {
    NONE,
    FRONT,
    BACK,
    BOTH,
}
export enum PipelineFilter {
    NEAREST,
    LINEAR,
    NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR,
}
export enum PipelineWrapMode {
    REPEAT,
    MIRRORED_REPEAT,
    CLAMP_TO_EDGE,
    AUTOMATIC,
}
export enum RendererError {
    XLIB_DISPLAY_OPEN,
    BAD_CONSTRAINT,
}
export enum ScanoutError {
    SCANOUT_ERROR_INHIBITED,
}
export enum ShaderType {
    VERTEX,
    FRAGMENT,
}
export enum StereoMode {
    BOTH,
    LEFT,
    RIGHT,
}
export enum SystemError {
    UNSUPPORTED,
    NO_MEMORY,
}
export enum TextureComponents {
    A,
    RG,
    RGB,
    RGBA,
    DEPTH,
}
export enum TextureError {
    SIZE,
    FORMAT,
    BAD_PARAMETER,
    TYPE,
}
export enum VerticesMode {
    POINTS,
    LINES,
    LINE_LOOP,
    LINE_STRIP,
    TRIANGLES,
    TRIANGLE_STRIP,
    TRIANGLE_FAN,
}
export enum Winding {
    CLOCKWISE,
    COUNTER_CLOCKWISE,
}
export enum WinsysFeature {
    MULTIPLE_ONSCREEN,
    VBLANK_COUNTER,
    VBLANK_WAIT,
    TEXTURE_FROM_PIXMAP,
    SWAP_BUFFERS_EVENT,
    SWAP_REGION,
    SWAP_REGION_THROTTLE,
    SWAP_REGION_SYNCHRONIZED,
    BUFFER_AGE,
    SYNC_AND_COMPLETE_EVENT,
    N_FEATURES,
}
export enum BufferBit {
    COLOR,
    DEPTH,
    STENCIL,
}
export enum BufferTarget {
    WINDOW_BUFFER,
    OFFSCREEN_BUFFER,
}
export enum EglImageFlags {
    NONE,
    NO_GET_DATA,
}
export enum PixelFormat {
    ANY,
    A_8,
    RGB_565,
    RGBA_4444,
    RGBA_5551,
    YUV,
    G_8,
    RG_88,
    RGB_888,
    BGR_888,
    RGBA_8888,
    BGRA_8888,
    ARGB_8888,
    ABGR_8888,
    RGBA_1010102,
    BGRA_1010102,
    ARGB_2101010,
    ABGR_2101010,
    RGBA_FP_16161616,
    BGRA_FP_16161616,
    ARGB_FP_16161616,
    ABGR_FP_16161616,
    RGBA_8888_PRE,
    BGRA_8888_PRE,
    ARGB_8888_PRE,
    ABGR_8888_PRE,
    RGBA_4444_PRE,
    RGBA_5551_PRE,
    RGBA_1010102_PRE,
    BGRA_1010102_PRE,
    ARGB_2101010_PRE,
    ABGR_2101010_PRE,
    RGBA_FP_16161616_PRE,
    BGRA_FP_16161616_PRE,
    ARGB_FP_16161616_PRE,
    ABGR_FP_16161616_PRE,
    DEPTH_16,
    DEPTH_32,
    DEPTH_24_STENCIL_8,
}
export enum ReadPixelsFlags {
    READ_PIXELS_COLOR_BUFFER,
}
export enum TextureFlags {
    NONE,
    NO_AUTO_MIPMAP,
    NO_SLICING,
    NO_ATLAS,
}
export const AFIRST_BIT: number
export const A_BIT: number
export const BGR_BIT: number
export const DEPTH_BIT: number
export const PIXEL_FORMAT_MAX_PLANES: number
export const PREMULT_BIT: number
export const STENCIL_BIT: number
export const TEXTURE_MAX_WASTE: number
export function blendStringErrorQuark(): number
export function blitFramebuffer(framebuffer: Framebuffer, dst: Framebuffer, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number): boolean
export function clutterWinsysHasFeatureCLUTTER(feature: WinsysFeature): boolean
export function colorEqual(v1?: object | null, v2?: object | null): boolean
export function colorInitFromHsl(hue: number, saturation: number, luminance: number): /* color */ Color
export function createProgram(): Handle
export function createShader(shaderType: ShaderType): Handle
export function debugObjectForeachType(func: DebugObjectForeachTypeCallback): void
export function debugObjectPrintInstances(): void
export function flush(): void
export function foreachFeature(context: Context, callback: FeatureCallback): void
export function getBackfaceCullingEnabled(): boolean
export function getDepthTestEnabled(): boolean
export function getGraphicsResetStatus(context: Context): GraphicsResetStatus
export function getOptionGroup(): GLib.OptionGroup
export function handleGetType(): GObject.Type
export function hasFeature(context: Context, feature: FeatureID): boolean
export function isBitmap(object?: object | null): boolean
export function isContext(object?: object | null): boolean
export function isFrameInfo(object?: object | null): boolean
export function isFramebuffer(object?: object | null): boolean
export function isPipeline(object?: object | null): boolean
export function isProgram(handle: Handle): boolean
export function isShader(handle: Handle): boolean
export function isTexture(object?: object | null): boolean
export function isTexture2d(object?: object | null): boolean
export function isTexture2dSliced(object?: object | null): boolean
export function pixelFormatGetBytesPerPixel(format: PixelFormat, plane: number): number
export function pixelFormatGetNPlanes(format: PixelFormat): number
export function pixelFormatToString(format: PixelFormat): string
export function programAttachShader(programHandle: Handle, shaderHandle: Handle): void
export function programGetUniformLocation(handle: Handle, uniformName: string): number
export function programLink(handle: Handle): void
export function programSetUniform1f(program: Handle, uniformLocation: number, value: number): void
export function programSetUniform1i(program: Handle, uniformLocation: number, value: number): void
export function programSetUniformFloat(program: Handle, uniformLocation: number, nComponents: number, value: number[]): void
export function programSetUniformInt(program: Handle, uniformLocation: number, nComponents: number, value: number[]): void
export function programSetUniformMatrix(program: Handle, uniformLocation: number, dimensions: number, transpose: boolean, value: number[]): void
export function scanoutErrorQuark(): GLib.Quark
export function setBackfaceCullingEnabled(setting: boolean): void
export function setDepthTestEnabled(setting: boolean): void
export function setTracingDisabledOnThread(data?: object | null): void
export function setTracingEnabledOnThread(data: object | null, group: string, filename: string): void
export function setTracingEnabledOnThreadWithFd(data: object | null, group: string, fd: number): void
export function shaderGetType(handle: Handle): ShaderType
export function shaderSource(shader: Handle, source: string): void
export function textureErrorQuark(): number
export function textureNewFromBitmap(bitmap: Bitmap, flags: TextureFlags, internalFormat: PixelFormat): Texture
export function textureNewFromData(width: number, height: number, flags: TextureFlags, format: PixelFormat, internalFormat: PixelFormat, rowstride: number, data: any): Texture
export function textureNewFromFile(filename: string, flags: TextureFlags, internalFormat: PixelFormat): Texture
export function textureNewWithSize(width: number, height: number, flags: TextureFlags, internalFormat: PixelFormat): Texture
export interface DebugObjectForeachTypeCallback {
    (info: DebugObjectTypeInfo): void
}
export interface FeatureCallback {
    (feature: FeatureID): void
}
export interface FrameCallback {
    (onscreen: Onscreen, event: FrameEvent, info: FrameInfo): void
}
export interface OnscreenDirtyCallback {
    (onscreen: Onscreen, info: OnscreenDirtyInfo): void
}
export interface PipelineLayerCallback {
    (pipeline: Pipeline, layerIndex: number): boolean
}
export interface Texture2DEGLImageExternalAlloc {
    (tex2d: Texture2D): boolean
}
export class Texture {
    /* Methods of Cogl.Texture */
    allocate(): boolean
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data?: any | null): number
    getGlTexture(): [ /* returnType */ boolean, /* outGlHandle */ number | null, /* outGlTarget */ number | null ]
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): boolean
    getWidth(): number
    isSliced(): boolean
    newFromSubTexture(subX: number, subY: number, subWidth: number, subHeight: number): Texture
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: any, level: number): boolean
    setPremultiplied(premultiplied: boolean): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: any): boolean
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): number
    static newFromBitmap(bitmap: Bitmap, flags: TextureFlags, internalFormat: PixelFormat): Texture
    static newFromData(width: number, height: number, flags: TextureFlags, format: PixelFormat, internalFormat: PixelFormat, rowstride: number, data: any): Texture
    static newFromFile(filename: string, flags: TextureFlags, internalFormat: PixelFormat): Texture
    static newWithSize(width: number, height: number, flags: TextureFlags, internalFormat: PixelFormat): Texture
}
export class Bitmap {
    /* Methods of Cogl.Bitmap */
    getFormat(): PixelFormat
    getHeight(): number
    getRowstride(): number
    getWidth(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromFile(filename: string): Bitmap
    static errorQuark(): number
    static getSizeFromFile(filename: string): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
}
export class Context {
    /* Methods of Cogl.Context */
    getNamedPipeline(key: PipelineKey): Pipeline
    isHardwareAccelerated(): boolean
    setNamedPipeline(key: PipelineKey, pipeline?: Pipeline | null): void
    static name: string
}
export class FrameInfo {
    /* Methods of Cogl.FrameInfo */
    getFrameCounter(): number
    getIsSymbolic(): boolean
    getPresentationTimeUs(): number
    getRefreshRate(): number
    getSequence(): number
    isHwClock(): boolean
    isVsync(): boolean
    isZeroCopy(): boolean
    static name: string
}
export interface Framebuffer_ConstructProps extends GObject.Object_ConstructProps {
    driverConfig?: object
    height?: number
    width?: number
}
export class Framebuffer {
    /* Properties of Cogl.Framebuffer */
    height: number
    width: number
    /* Fields of Cogl.Framebuffer */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cogl.Framebuffer */
    allocate(): boolean
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discardBuffers(buffers: number): void
    drawMultitexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, texCoords: number[], texCoordsLen: number): void
    drawRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number): void
    drawRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    drawTexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, s1: number, t1: number, s2: number, t2: number): void
    drawTexturedRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    finish(): void
    flush(): void
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    getAlphaBits(): number
    getBlueBits(): number
    getContext(): Context
    getDepthBits(): number
    getDepthWriteEnabled(): boolean
    getDitherEnabled(): boolean
    getGreenBits(): number
    getHeight(): number
    getIsStereo(): boolean
    getModelviewMatrix(): /* matrix */ Graphene.Matrix
    getProjectionMatrix(): /* matrix */ Graphene.Matrix
    getRedBits(): number
    getSamplesPerPixel(): number
    getStereoMode(): StereoMode
    getViewport4fv(): /* viewport */ number[]
    getViewportHeight(): number
    getViewportWidth(): number
    getViewportX(): number
    getViewportY(): number
    getWidth(): number
    identityMatrix(): void
    orthographic(x1: number, y1: number, x2: number, y2: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    popClip(): void
    popMatrix(): void
    pushMatrix(): void
    pushRectangleClip(x1: number, y1: number, x2: number, y2: number): void
    pushRegionClip(region: cairo.Region): void
    pushScissorClip(x: number, y: number, width: number, height: number): void
    readPixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): boolean
    readPixelsIntoBitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): boolean
    resolveSamples(): void
    resolveSamplesRegion(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotateEuler(euler: Graphene.Euler): void
    scale(x: number, y: number, z: number): void
    setDepthWriteEnabled(depthWriteEnabled: boolean): void
    setDitherEnabled(ditherEnabled: boolean): void
    setModelviewMatrix(matrix: Graphene.Matrix): void
    setProjectionMatrix(matrix: Graphene.Matrix): void
    setSamplesPerPixel(samplesPerPixel: number): void
    setStereoMode(stereoMode: StereoMode): void
    setViewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Graphene.Matrix): void
    translate(x: number, y: number, z: number): void
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
    /* Virtual methods of Cogl.Framebuffer */
    vfuncAllocate(): boolean
    vfuncIsYFlipped(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Cogl.Framebuffer */
    connect(sigName: "destroy", callback: (($obj: Framebuffer) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Framebuffer) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Framebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Framebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Framebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Framebuffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: Framebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Framebuffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Framebuffer_ConstructProps)
    _init (config?: Framebuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): number
    static $gtype: GObject.Type
}
export class Object {
    static name: string
}
export interface Offscreen_ConstructProps extends Framebuffer_ConstructProps {
}
export class Offscreen {
    /* Properties of Cogl.Framebuffer */
    height: number
    width: number
    /* Fields of Cogl.Framebuffer */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cogl.Framebuffer */
    allocate(): boolean
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discardBuffers(buffers: number): void
    drawMultitexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, texCoords: number[], texCoordsLen: number): void
    drawRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number): void
    drawRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    drawTexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, s1: number, t1: number, s2: number, t2: number): void
    drawTexturedRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    finish(): void
    flush(): void
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    getAlphaBits(): number
    getBlueBits(): number
    getContext(): Context
    getDepthBits(): number
    getDepthWriteEnabled(): boolean
    getDitherEnabled(): boolean
    getGreenBits(): number
    getHeight(): number
    getIsStereo(): boolean
    getModelviewMatrix(): /* matrix */ Graphene.Matrix
    getProjectionMatrix(): /* matrix */ Graphene.Matrix
    getRedBits(): number
    getSamplesPerPixel(): number
    getStereoMode(): StereoMode
    getViewport4fv(): /* viewport */ number[]
    getViewportHeight(): number
    getViewportWidth(): number
    getViewportX(): number
    getViewportY(): number
    getWidth(): number
    identityMatrix(): void
    orthographic(x1: number, y1: number, x2: number, y2: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    popClip(): void
    popMatrix(): void
    pushMatrix(): void
    pushRectangleClip(x1: number, y1: number, x2: number, y2: number): void
    pushRegionClip(region: cairo.Region): void
    pushScissorClip(x: number, y: number, width: number, height: number): void
    readPixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): boolean
    readPixelsIntoBitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): boolean
    resolveSamples(): void
    resolveSamplesRegion(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotateEuler(euler: Graphene.Euler): void
    scale(x: number, y: number, z: number): void
    setDepthWriteEnabled(depthWriteEnabled: boolean): void
    setDitherEnabled(ditherEnabled: boolean): void
    setModelviewMatrix(matrix: Graphene.Matrix): void
    setProjectionMatrix(matrix: Graphene.Matrix): void
    setSamplesPerPixel(samplesPerPixel: number): void
    setStereoMode(stereoMode: StereoMode): void
    setViewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Graphene.Matrix): void
    translate(x: number, y: number, z: number): void
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
    /* Virtual methods of Cogl.Framebuffer */
    vfuncAllocate(): boolean
    vfuncIsYFlipped(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Cogl.Framebuffer */
    connect(sigName: "destroy", callback: (($obj: Offscreen) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Offscreen) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Offscreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Offscreen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Offscreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Offscreen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: Offscreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Offscreen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Offscreen_ConstructProps)
    _init (config?: Offscreen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithTexture(texture: Texture): Offscreen
    static $gtype: GObject.Type
}
export interface Onscreen_ConstructProps extends Framebuffer_ConstructProps {
}
export class Onscreen {
    /* Properties of Cogl.Framebuffer */
    height: number
    width: number
    /* Fields of Cogl.Onscreen */
    parentInstance: Framebuffer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cogl.Onscreen */
    addDirtyCallback(callback: OnscreenDirtyCallback, destroy?: UserDataDestroyCallback | null): OnscreenDirtyClosure
    addFrameCallback(callback: FrameCallback, destroy?: UserDataDestroyCallback | null): FrameClosure
    getBufferAge(): number
    getFrameCounter(): number
    hide(): void
    removeDirtyCallback(closure: OnscreenDirtyClosure): void
    removeFrameCallback(closure: FrameClosure): void
    show(): void
    swapBuffers(frameInfo: FrameInfo, userData?: object | null): void
    swapBuffersWithDamage(rectangles: number, nRectangles: number, info: FrameInfo, userData?: object | null): void
    swapRegion(rectangles: number, nRectangles: number, info: FrameInfo, userData?: object | null): void
    /* Methods of Cogl.Framebuffer */
    allocate(): boolean
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discardBuffers(buffers: number): void
    drawMultitexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, texCoords: number[], texCoordsLen: number): void
    drawRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number): void
    drawRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    drawTexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, s1: number, t1: number, s2: number, t2: number): void
    drawTexturedRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    finish(): void
    flush(): void
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    getAlphaBits(): number
    getBlueBits(): number
    getContext(): Context
    getDepthBits(): number
    getDepthWriteEnabled(): boolean
    getDitherEnabled(): boolean
    getGreenBits(): number
    getHeight(): number
    getIsStereo(): boolean
    getModelviewMatrix(): /* matrix */ Graphene.Matrix
    getProjectionMatrix(): /* matrix */ Graphene.Matrix
    getRedBits(): number
    getSamplesPerPixel(): number
    getStereoMode(): StereoMode
    getViewport4fv(): /* viewport */ number[]
    getViewportHeight(): number
    getViewportWidth(): number
    getViewportX(): number
    getViewportY(): number
    getWidth(): number
    identityMatrix(): void
    orthographic(x1: number, y1: number, x2: number, y2: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    popClip(): void
    popMatrix(): void
    pushMatrix(): void
    pushRectangleClip(x1: number, y1: number, x2: number, y2: number): void
    pushRegionClip(region: cairo.Region): void
    pushScissorClip(x: number, y: number, width: number, height: number): void
    readPixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): boolean
    readPixelsIntoBitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): boolean
    resolveSamples(): void
    resolveSamplesRegion(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotateEuler(euler: Graphene.Euler): void
    scale(x: number, y: number, z: number): void
    setDepthWriteEnabled(depthWriteEnabled: boolean): void
    setDitherEnabled(ditherEnabled: boolean): void
    setModelviewMatrix(matrix: Graphene.Matrix): void
    setProjectionMatrix(matrix: Graphene.Matrix): void
    setSamplesPerPixel(samplesPerPixel: number): void
    setStereoMode(stereoMode: StereoMode): void
    setViewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Graphene.Matrix): void
    translate(x: number, y: number, z: number): void
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
    /* Virtual methods of Cogl.Onscreen */
    vfuncBind(): void
    vfuncGetBufferAge(): number
    vfuncSwapBuffersWithDamage(rectangles: number, nRectangles: number, info: FrameInfo): void
    vfuncSwapRegion(rectangles: number, nRectangles: number, info: FrameInfo): void
    /* Virtual methods of Cogl.Framebuffer */
    vfuncAllocate(): boolean
    vfuncIsYFlipped(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Cogl.Framebuffer */
    connect(sigName: "destroy", callback: (($obj: Onscreen) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Onscreen) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Onscreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Onscreen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Onscreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Onscreen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: Onscreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Onscreen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Onscreen_ConstructProps)
    _init (config?: Onscreen_ConstructProps): void
    static $gtype: GObject.Type
}
export class Pipeline {
    /* Methods of Cogl.Pipeline */
    copy(): Pipeline
    foreachLayer(callback: PipelineLayerCallback): void
    getAlphaTestFunction(): PipelineAlphaFunc
    getAlphaTestReference(): number
    getColor(): /* color */ Color
    getCullFaceMode(): PipelineCullFaceMode
    getFrontFaceWinding(): Winding
    getLayerMagFilter(layerIndex: number): PipelineFilter
    getLayerMinFilter(layerIndex: number): PipelineFilter
    getLayerPointSpriteCoordsEnabled(layerIndex: number): boolean
    getLayerTexture(layerIndex: number): Texture
    getLayerWrapModeS(layerIndex: number): PipelineWrapMode
    getLayerWrapModeT(layerIndex: number): PipelineWrapMode
    getNLayers(): number
    getPerVertexPointSize(): boolean
    getPointSize(): number
    getUniformLocation(uniformName: string): number
    getUserProgram(): Handle
    removeLayer(layerIndex: number): void
    setAlphaTestFunction(alphaFunc: PipelineAlphaFunc, alphaReference: number): void
    setBlend(blendString: string): boolean
    setBlendConstant(constantColor: Color): void
    setColor(color: Color): void
    setColor4f(red: number, green: number, blue: number, alpha: number): void
    setColor4ub(red: number, green: number, blue: number, alpha: number): void
    setCullFaceMode(cullFaceMode: PipelineCullFaceMode): void
    setFrontFaceWinding(frontWinding: Winding): void
    setLayerCombine(layerIndex: number, blendString: string): boolean
    setLayerCombineConstant(layerIndex: number, constant: Color): void
    setLayerFilters(layerIndex: number, minFilter: PipelineFilter, magFilter: PipelineFilter): void
    setLayerMatrix(layerIndex: number, matrix: Graphene.Matrix): void
    setLayerMaxMipmapLevel(layer: number, maxLevel: number): void
    setLayerNullTexture(layerIndex: number): void
    setLayerPointSpriteCoordsEnabled(layerIndex: number, enable: boolean): boolean
    setLayerTexture(layerIndex: number, texture: Texture): void
    setLayerWrapMode(layerIndex: number, mode: PipelineWrapMode): void
    setLayerWrapModeS(layerIndex: number, mode: PipelineWrapMode): void
    setLayerWrapModeT(layerIndex: number, mode: PipelineWrapMode): void
    setPerVertexPointSize(enable: boolean): boolean
    setPointSize(pointSize: number): void
    setUniform1f(uniformLocation: number, value: number): void
    setUniform1i(uniformLocation: number, value: number): void
    setUniformFloat(uniformLocation: number, nComponents: number, count: number, value: number): void
    setUniformInt(uniformLocation: number, nComponents: number, count: number, value: number): void
    setUniformMatrix(uniformLocation: number, dimensions: number, count: number, transpose: boolean, value: number): void
    setUserProgram(program: Handle): void
    static name: string
    static new(context: Context): Pipeline
    constructor(context: Context)
    /* Static methods and pseudo-constructors */
    static new(context: Context): Pipeline
}
export class Texture2D {
    /* Methods of Cogl.Texture2D */
    eglImageExternalAllocFinish(userData: object | null, destroy: GLib.DestroyNotify): void
    eglImageExternalBind(): void
    /* Methods of Cogl.Texture */
    allocate(): boolean
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data?: any | null): number
    getGlTexture(): [ /* returnType */ boolean, /* outGlHandle */ number | null, /* outGlTarget */ number | null ]
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): boolean
    getWidth(): number
    isSliced(): boolean
    newFromSubTexture(subX: number, subY: number, subWidth: number, subHeight: number): Texture
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: any, level: number): boolean
    setPremultiplied(premultiplied: boolean): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: any): boolean
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromBitmap(bitmap: Bitmap): Texture2D
    static errorQuark(): number
    static newFromBitmap(bitmap: Bitmap, flags: TextureFlags, internalFormat: PixelFormat): Texture
    static newFromData(width: number, height: number, flags: TextureFlags, format: PixelFormat, internalFormat: PixelFormat, rowstride: number, data: any): Texture
    static newFromFile(filename: string, flags: TextureFlags, internalFormat: PixelFormat): Texture
    static newWithSize(width: number, height: number, flags: TextureFlags, internalFormat: PixelFormat): Texture
}
export class Texture2DSliced {
    /* Methods of Cogl.Texture */
    allocate(): boolean
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data?: any | null): number
    getGlTexture(): [ /* returnType */ boolean, /* outGlHandle */ number | null, /* outGlTarget */ number | null ]
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): boolean
    getWidth(): number
    isSliced(): boolean
    newFromSubTexture(subX: number, subY: number, subWidth: number, subHeight: number): Texture
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: any, level: number): boolean
    setPremultiplied(premultiplied: boolean): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: any): boolean
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromBitmap(bmp: Bitmap, maxWaste: number): Texture2DSliced
    static errorQuark(): number
    static newFromBitmap(bitmap: Bitmap, flags: TextureFlags, internalFormat: PixelFormat): Texture
    static newFromData(width: number, height: number, flags: TextureFlags, format: PixelFormat, internalFormat: PixelFormat, rowstride: number, data: any): Texture
    static newFromFile(filename: string, flags: TextureFlags, internalFormat: PixelFormat): Texture
    static newWithSize(width: number, height: number, flags: TextureFlags, internalFormat: PixelFormat): Texture
}
export class Color {
    /* Methods of Cogl.Color */
    copy(): Color
    free(): void
    getAlpha(): number
    getAlphaByte(): number
    getAlphaFloat(): number
    getBlue(): number
    getBlueByte(): number
    getBlueFloat(): number
    getGreen(): number
    getGreenByte(): number
    getGreenFloat(): number
    getRed(): number
    getRedByte(): number
    getRedFloat(): number
    initFrom4f(red: number, green: number, blue: number, alpha: number): void
    initFrom4fv(colorArray: number): void
    initFrom4ub(red: number, green: number, blue: number, alpha: number): void
    premultiply(): void
    setAlpha(alpha: number): void
    setAlphaByte(alpha: number): void
    setAlphaFloat(alpha: number): void
    setBlue(blue: number): void
    setBlueByte(blue: number): void
    setBlueFloat(blue: number): void
    setGreen(green: number): void
    setGreenByte(green: number): void
    setGreenFloat(green: number): void
    setRed(red: number): void
    setRedByte(red: number): void
    setRedFloat(red: number): void
    toHsl(): [ /* hue */ number, /* saturation */ number, /* luminance */ number ]
    unpremultiply(): void
    static name: string
    static new(): Color
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Color
    static equal(v1?: object | null, v2?: object | null): boolean
    static initFromHsl(hue: number, saturation: number, luminance: number): /* color */ Color
}
export class DebugObjectTypeInfo {
    /* Fields of Cogl.DebugObjectTypeInfo */
    name: string
    instanceCount: number
    static name: string
}
export class DmaBufHandle {
    static name: string
}
export class FrameClosure {
    static name: string
}
export abstract class FramebufferClass {
    /* Fields of Cogl.FramebufferClass */
    allocate: (framebuffer: Framebuffer) => boolean
    isYFlipped: (framebuffer: Framebuffer) => boolean
    static name: string
}
export class FramebufferDriverConfig {
    static name: string
}
export class Material {
    /* Methods of Cogl.Material */
    setAlphaTestFunction(alphaFunc: MaterialAlphaFunc, alphaReference: number): void
    setBlend(blendString: string): boolean
    setBlendConstant(constantColor: Color): void
    setColor(color: Color): void
    setColor4ub(red: number, green: number, blue: number, alpha: number): void
    setLayer(layerIndex: number, texture: Handle): void
    setLayerCombine(layerIndex: number, blendString: string): boolean
    setLayerCombineConstant(layerIndex: number, constant: Color): void
    setLayerFilters(layerIndex: number, minFilter: MaterialFilter, magFilter: MaterialFilter): void
    setLayerMatrix(layerIndex: number, matrix: Graphene.Matrix): void
    setLayerPointSpriteCoordsEnabled(layerIndex: number, enable: boolean): boolean
    setPointSize(pointSize: number): void
    setUserProgram(program: Handle): void
    static name: string
    static new(): Material
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Material
}
export class MaterialLayer {
    static name: string
}
export abstract class OffscreenClass {
    /* Fields of Cogl.OffscreenClass */
    parentClass: FramebufferClass
    static name: string
}
export abstract class OnscreenClass {
    /* Fields of Cogl.OnscreenClass */
    bind: (onscreen: Onscreen) => void
    swapBuffersWithDamage: (onscreen: Onscreen, rectangles: number, nRectangles: number, info: FrameInfo) => void
    swapRegion: (onscreen: Onscreen, rectangles: number, nRectangles: number, info: FrameInfo) => void
    directScanout: (onscreen: Onscreen, scanout: Scanout, info: FrameInfo) => boolean
    getBufferAge: (onscreen: Onscreen) => number
    static name: string
}
export class OnscreenDirtyClosure {
    static name: string
}
export class OnscreenDirtyInfo {
    /* Fields of Cogl.OnscreenDirtyInfo */
    x: number
    y: number
    width: number
    height: number
    static name: string
}
export class Scanout {
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export class TextureVertex {
    /* Fields of Cogl.TextureVertex */
    x: number
    y: number
    z: number
    tx: number
    ty: number
    color: Color
    static name: string
}
export class UserDataKey {
    /* Fields of Cogl.UserDataKey */
    unused: number
    static name: string
}
export class _ColorSizeCheck {
    /* Fields of Cogl._ColorSizeCheck */
    compileTimeAssertCoglColorSize: number[]
    static name: string
}
export class _TextureVertexSizeCheck {
    /* Fields of Cogl._TextureVertexSizeCheck */
    compileTimeAssertCoglTextureVertexSize: number[]
    static name: string
}
type Angle = number
type Handle = object
type PipelineKey = string
type UserDataDestroyCallback = GLib.DestroyNotify
}