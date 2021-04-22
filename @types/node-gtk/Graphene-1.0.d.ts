/**
 * Graphene-1.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Graphene {

export enum EulerOrder {
    DEFAULT,
    XYZ,
    YZX,
    ZXY,
    XZY,
    YXZ,
    ZYX,
    SXYZ,
    SXYX,
    SXZY,
    SXZX,
    SYZX,
    SYZY,
    SYXZ,
    SYXY,
    SZXY,
    SZXZ,
    SZYX,
    SZYZ,
    RZYX,
    RXYX,
    RYZX,
    RXZX,
    RXZY,
    RYZY,
    RZXY,
    RYXY,
    RYXZ,
    RZXZ,
    RXYZ,
    RZYZ,
}
export enum RayIntersectionKind {
    NONE,
    ENTER,
    LEAVE,
}
export const PI: number
export const PI_2: number
export const VEC2_LEN: number
export const VEC3_LEN: number
export const VEC4_LEN: number
export function boxEmpty(): Box
export function boxInfinite(): Box
export function boxMinusOne(): Box
export function boxOne(): Box
export function boxOneMinusOne(): Box
export function boxZero(): Box
export function point3dZero(): Point3D
export function pointZero(): Point
export function rectAlloc(): Rect
export function rectZero(): Rect
export function sizeZero(): Size
export function vec2One(): Vec2
export function vec2XAxis(): Vec2
export function vec2YAxis(): Vec2
export function vec2Zero(): Vec2
export function vec3One(): Vec3
export function vec3XAxis(): Vec3
export function vec3YAxis(): Vec3
export function vec3ZAxis(): Vec3
export function vec3Zero(): Vec3
export function vec4One(): Vec4
export function vec4WAxis(): Vec4
export function vec4XAxis(): Vec4
export function vec4YAxis(): Vec4
export function vec4ZAxis(): Vec4
export function vec4Zero(): Vec4
export class Box {
    /* Methods of Graphene.Box */
    containsBox(b: Box): boolean
    containsPoint(point: Point3D): boolean
    equal(b: Box): boolean
    expand(point: Point3D): /* res */ Box
    expandScalar(scalar: number): /* res */ Box
    expandVec3(vec: Vec3): /* res */ Box
    free(): void
    getBoundingSphere(): /* sphere */ Sphere
    getCenter(): /* center */ Point3D
    getDepth(): number
    getHeight(): number
    getMax(): /* max */ Point3D
    getMin(): /* min */ Point3D
    getSize(): /* size */ Vec3
    getVertices(): /* vertices */ Vec3[]
    getWidth(): number
    init(min?: Point3D | null, max?: Point3D | null): Box
    initFromBox(src: Box): Box
    initFromPoints(points: Point3D[]): Box
    initFromVec3(min?: Vec3 | null, max?: Vec3 | null): Box
    initFromVectors(vectors: Vec3[]): Box
    intersection(b: Box): [ /* returnType */ boolean, /* res */ Box | null ]
    union(b: Box): /* res */ Box
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Box
    static empty(): Box
    static infinite(): Box
    static minusOne(): Box
    static one(): Box
    static oneMinusOne(): Box
    static zero(): Box
}
export class Euler {
    /* Methods of Graphene.Euler */
    equal(b: Euler): boolean
    free(): void
    getAlpha(): number
    getBeta(): number
    getGamma(): number
    getOrder(): EulerOrder
    getX(): number
    getY(): number
    getZ(): number
    init(x: number, y: number, z: number): Euler
    initFromEuler(src?: Euler | null): Euler
    initFromMatrix(m: Matrix | null, order: EulerOrder): Euler
    initFromQuaternion(q: Quaternion | null, order: EulerOrder): Euler
    initFromRadians(x: number, y: number, z: number, order: EulerOrder): Euler
    initFromVec3(v: Vec3 | null, order: EulerOrder): Euler
    initWithOrder(x: number, y: number, z: number, order: EulerOrder): Euler
    reorder(order: EulerOrder): /* res */ Euler
    toMatrix(): /* res */ Matrix
    toQuaternion(): /* res */ Quaternion
    toVec3(): /* res */ Vec3
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Euler
}
export class Frustum {
    /* Methods of Graphene.Frustum */
    containsPoint(point: Point3D): boolean
    equal(b: Frustum): boolean
    free(): void
    getPlanes(): /* planes */ Plane[]
    init(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane): Frustum
    initFromFrustum(src: Frustum): Frustum
    initFromMatrix(matrix: Matrix): Frustum
    intersectsBox(box: Box): boolean
    intersectsSphere(sphere: Sphere): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Frustum
}
export class Matrix {
    /* Methods of Graphene.Matrix */
    decompose(): [ /* returnType */ boolean, /* translate */ Vec3, /* scale */ Vec3, /* rotate */ Quaternion, /* shear */ Vec3, /* perspective */ Vec4 ]
    determinant(): number
    equal(b: Matrix): boolean
    equalFast(b: Matrix): boolean
    free(): void
    getRow(index: number): /* res */ Vec4
    getValue(row: number, col: number): number
    getXScale(): number
    getXTranslation(): number
    getYScale(): number
    getYTranslation(): number
    getZScale(): number
    getZTranslation(): number
    initFrom2d(xx: number, yx: number, xy: number, yy: number, x0: number, y0: number): Matrix
    initFromFloat(v: number[]): Matrix
    initFromMatrix(src: Matrix): Matrix
    initFromVec4(v0: Vec4, v1: Vec4, v2: Vec4, v3: Vec4): Matrix
    initFrustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): Matrix
    initIdentity(): Matrix
    initLookAt(eye: Vec3, center: Vec3, up: Vec3): Matrix
    initOrtho(left: number, right: number, top: number, bottom: number, zNear: number, zFar: number): Matrix
    initPerspective(fovy: number, aspect: number, zNear: number, zFar: number): Matrix
    initRotate(angle: number, axis: Vec3): Matrix
    initScale(x: number, y: number, z: number): Matrix
    initSkew(xSkew: number, ySkew: number): Matrix
    initTranslate(p: Point3D): Matrix
    interpolate(b: Matrix, factor: number): /* res */ Matrix
    inverse(): [ /* returnType */ boolean, /* res */ Matrix ]
    is2d(): boolean
    isBackfaceVisible(): boolean
    isIdentity(): boolean
    isSingular(): boolean
    multiply(b: Matrix): /* res */ Matrix
    near(b: Matrix, epsilon: number): boolean
    normalize(): /* res */ Matrix
    perspective(depth: number): /* res */ Matrix
    print(): void
    projectPoint(p: Point): /* res */ Point
    projectRect(r: Rect): /* res */ Quad
    projectRectBounds(r: Rect): /* res */ Rect
    rotate(angle: number, axis: Vec3): void
    rotateEuler(e: Euler): void
    rotateQuaternion(q: Quaternion): void
    rotateX(angle: number): void
    rotateY(angle: number): void
    rotateZ(angle: number): void
    scale(factorX: number, factorY: number, factorZ: number): void
    skewXy(factor: number): void
    skewXz(factor: number): void
    skewYz(factor: number): void
    to2d(): [ /* returnType */ boolean, /* xx */ number, /* yx */ number, /* xy */ number, /* yy */ number, /* x0 */ number, /* y0 */ number ]
    toFloat(): /* v */ number[]
    transformBounds(r: Rect): /* res */ Rect
    transformBox(b: Box): /* res */ Box
    transformPoint(p: Point): /* res */ Point
    transformPoint3d(p: Point3D): /* res */ Point3D
    transformRay(r: Ray): /* res */ Ray
    transformRect(r: Rect): /* res */ Quad
    transformSphere(s: Sphere): /* res */ Sphere
    transformVec3(v: Vec3): /* res */ Vec3
    transformVec4(v: Vec4): /* res */ Vec4
    translate(pos: Point3D): void
    transpose(): /* res */ Matrix
    unprojectPoint3d(modelview: Matrix, point: Point3D): /* res */ Point3D
    untransformBounds(r: Rect, bounds: Rect): /* res */ Rect
    untransformPoint(p: Point, bounds: Rect): [ /* returnType */ boolean, /* res */ Point ]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Matrix
}
export class Plane {
    /* Methods of Graphene.Plane */
    distance(point: Point3D): number
    equal(b: Plane): boolean
    free(): void
    getConstant(): number
    getNormal(): /* normal */ Vec3
    init(normal: Vec3 | null, constant: number): Plane
    initFromPlane(src: Plane): Plane
    initFromPoint(normal: Vec3, point: Point3D): Plane
    initFromPoints(a: Point3D, b: Point3D, c: Point3D): Plane
    initFromVec4(src: Vec4): Plane
    negate(): /* res */ Plane
    normalize(): /* res */ Plane
    transform(matrix: Matrix, normalMatrix?: Matrix | null): /* res */ Plane
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Plane
}
export class Point {
    /* Fields of Graphene.Point */
    x: number
    y: number
    /* Methods of Graphene.Point */
    distance(b: Point): [ /* returnType */ number, /* dX */ number | null, /* dY */ number | null ]
    equal(b: Point): boolean
    free(): void
    init(x: number, y: number): Point
    initFromPoint(src: Point): Point
    initFromVec2(src: Vec2): Point
    interpolate(b: Point, factor: number): /* res */ Point
    near(b: Point, epsilon: number): boolean
    toVec2(): /* v */ Vec2
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Point
    static zero(): Point
}
export class Point3D {
    /* Fields of Graphene.Point3D */
    x: number
    y: number
    z: number
    /* Methods of Graphene.Point3D */
    cross(b: Point3D): /* res */ Point3D
    distance(b: Point3D): [ /* returnType */ number, /* delta */ Vec3 | null ]
    dot(b: Point3D): number
    equal(b: Point3D): boolean
    free(): void
    init(x: number, y: number, z: number): Point3D
    initFromPoint(src: Point3D): Point3D
    initFromVec3(v: Vec3): Point3D
    interpolate(b: Point3D, factor: number): /* res */ Point3D
    length(): number
    near(b: Point3D, epsilon: number): boolean
    normalize(): /* res */ Point3D
    normalizeViewport(viewport: Rect, zNear: number, zFar: number): /* res */ Point3D
    scale(factor: number): /* res */ Point3D
    toVec3(): /* v */ Vec3
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Point3D
    static zero(): Point3D
}
export class Quad {
    /* Methods of Graphene.Quad */
    bounds(): /* r */ Rect
    contains(p: Point): boolean
    free(): void
    getPoint(index: number): Point
    init(p1: Point, p2: Point, p3: Point, p4: Point): Quad
    initFromPoints(points: Point[]): Quad
    initFromRect(r: Rect): Quad
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Quad
}
export class Quaternion {
    /* Methods of Graphene.Quaternion */
    add(b: Quaternion): /* res */ Quaternion
    dot(b: Quaternion): number
    equal(b: Quaternion): boolean
    free(): void
    init(x: number, y: number, z: number, w: number): Quaternion
    initFromAngleVec3(angle: number, axis: Vec3): Quaternion
    initFromAngles(degX: number, degY: number, degZ: number): Quaternion
    initFromEuler(e: Euler): Quaternion
    initFromMatrix(m: Matrix): Quaternion
    initFromQuaternion(src: Quaternion): Quaternion
    initFromRadians(radX: number, radY: number, radZ: number): Quaternion
    initFromVec4(src: Vec4): Quaternion
    initIdentity(): Quaternion
    invert(): /* res */ Quaternion
    multiply(b: Quaternion): /* res */ Quaternion
    normalize(): /* res */ Quaternion
    scale(factor: number): /* res */ Quaternion
    slerp(b: Quaternion, factor: number): /* res */ Quaternion
    toAngleVec3(): [ /* angle */ number, /* axis */ Vec3 ]
    toAngles(): [ /* degX */ number | null, /* degY */ number | null, /* degZ */ number | null ]
    toMatrix(): /* m */ Matrix
    toRadians(): [ /* radX */ number | null, /* radY */ number | null, /* radZ */ number | null ]
    toVec4(): /* res */ Vec4
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Quaternion
}
export class Ray {
    /* Methods of Graphene.Ray */
    equal(b: Ray): boolean
    free(): void
    getClosestPointToPoint(p: Point3D): /* res */ Point3D
    getDirection(): /* direction */ Vec3
    getDistanceToPlane(p: Plane): number
    getDistanceToPoint(p: Point3D): number
    getOrigin(): /* origin */ Point3D
    getPositionAt(t: number): /* position */ Point3D
    init(origin?: Point3D | null, direction?: Vec3 | null): Ray
    initFromRay(src: Ray): Ray
    initFromVec3(origin?: Vec3 | null, direction?: Vec3 | null): Ray
    intersectBox(b: Box): [ /* returnType */ RayIntersectionKind, /* tOut */ number ]
    intersectSphere(s: Sphere): [ /* returnType */ RayIntersectionKind, /* tOut */ number ]
    intersectTriangle(t: Triangle): [ /* returnType */ RayIntersectionKind, /* tOut */ number ]
    intersectsBox(b: Box): boolean
    intersectsSphere(s: Sphere): boolean
    intersectsTriangle(t: Triangle): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Ray
}
export class Rect {
    /* Fields of Graphene.Rect */
    origin: Point
    size: Size
    /* Methods of Graphene.Rect */
    containsPoint(p: Point): boolean
    containsRect(b: Rect): boolean
    equal(b: Rect): boolean
    expand(p: Point): /* res */ Rect
    free(): void
    getArea(): number
    getBottomLeft(): /* p */ Point
    getBottomRight(): /* p */ Point
    getCenter(): /* p */ Point
    getHeight(): number
    getTopLeft(): /* p */ Point
    getTopRight(): /* p */ Point
    getVertices(): /* vertices */ Vec2[]
    getWidth(): number
    getX(): number
    getY(): number
    init(x: number, y: number, width: number, height: number): Rect
    initFromRect(src: Rect): Rect
    inset(dX: number, dY: number): Rect
    insetR(dX: number, dY: number): /* res */ Rect
    interpolate(b: Rect, factor: number): /* res */ Rect
    intersection(b: Rect): [ /* returnType */ boolean, /* res */ Rect | null ]
    normalize(): Rect
    normalizeR(): /* res */ Rect
    offset(dX: number, dY: number): Rect
    offsetR(dX: number, dY: number): /* res */ Rect
    round(): /* res */ Rect
    roundExtents(): /* res */ Rect
    roundToPixel(): Rect
    scale(sH: number, sV: number): /* res */ Rect
    union(b: Rect): /* res */ Rect
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Rect
    static zero(): Rect
}
export class Simd4F {
    static name: string
}
export class Simd4X4F {
    static name: string
}
export class Size {
    /* Fields of Graphene.Size */
    width: number
    height: number
    /* Methods of Graphene.Size */
    equal(b: Size): boolean
    free(): void
    init(width: number, height: number): Size
    initFromSize(src: Size): Size
    interpolate(b: Size, factor: number): /* res */ Size
    scale(factor: number): /* res */ Size
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Size
    static zero(): Size
}
export class Sphere {
    /* Methods of Graphene.Sphere */
    containsPoint(point: Point3D): boolean
    distance(point: Point3D): number
    equal(b: Sphere): boolean
    free(): void
    getBoundingBox(): /* box */ Box
    getCenter(): /* center */ Point3D
    getRadius(): number
    init(center: Point3D | null, radius: number): Sphere
    initFromPoints(points: Point3D[], center?: Point3D | null): Sphere
    initFromVectors(vectors: Vec3[], center?: Point3D | null): Sphere
    isEmpty(): boolean
    translate(point: Point3D): /* res */ Sphere
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Sphere
}
export class Triangle {
    /* Methods of Graphene.Triangle */
    containsPoint(p: Point3D): boolean
    equal(b: Triangle): boolean
    free(): void
    getArea(): number
    getBarycoords(p?: Point3D | null): [ /* returnType */ boolean, /* res */ Vec2 ]
    getBoundingBox(): /* res */ Box
    getMidpoint(): /* res */ Point3D
    getNormal(): /* res */ Vec3
    getPlane(): /* res */ Plane
    getPoints(): [ /* a */ Point3D | null, /* b */ Point3D | null, /* c */ Point3D | null ]
    getUv(p: Point3D | null, uvA: Vec2, uvB: Vec2, uvC: Vec2): [ /* returnType */ boolean, /* res */ Vec2 ]
    getVertices(): [ /* a */ Vec3 | null, /* b */ Vec3 | null, /* c */ Vec3 | null ]
    initFromFloat(a: number[], b: number[], c: number[]): Triangle
    initFromPoint3d(a?: Point3D | null, b?: Point3D | null, c?: Point3D | null): Triangle
    initFromVec3(a?: Vec3 | null, b?: Vec3 | null, c?: Vec3 | null): Triangle
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Triangle
}
export class Vec2 {
    /* Methods of Graphene.Vec2 */
    add(b: Vec2): /* res */ Vec2
    divide(b: Vec2): /* res */ Vec2
    dot(b: Vec2): number
    equal(v2: Vec2): boolean
    free(): void
    getX(): number
    getY(): number
    init(x: number, y: number): Vec2
    initFromFloat(src: number[]): Vec2
    initFromVec2(src: Vec2): Vec2
    interpolate(v2: Vec2, factor: number): /* res */ Vec2
    length(): number
    max(b: Vec2): /* res */ Vec2
    min(b: Vec2): /* res */ Vec2
    multiply(b: Vec2): /* res */ Vec2
    near(v2: Vec2, epsilon: number): boolean
    negate(): /* res */ Vec2
    normalize(): /* res */ Vec2
    scale(factor: number): /* res */ Vec2
    subtract(b: Vec2): /* res */ Vec2
    toFloat(): /* dest */ number[]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Vec2
    static one(): Vec2
    static xAxis(): Vec2
    static yAxis(): Vec2
    static zero(): Vec2
}
export class Vec3 {
    /* Methods of Graphene.Vec3 */
    add(b: Vec3): /* res */ Vec3
    cross(b: Vec3): /* res */ Vec3
    divide(b: Vec3): /* res */ Vec3
    dot(b: Vec3): number
    equal(v2: Vec3): boolean
    free(): void
    getX(): number
    getXy(): /* res */ Vec2
    getXy0(): /* res */ Vec3
    getXyz0(): /* res */ Vec4
    getXyz1(): /* res */ Vec4
    getXyzw(w: number): /* res */ Vec4
    getY(): number
    getZ(): number
    init(x: number, y: number, z: number): Vec3
    initFromFloat(src: number[]): Vec3
    initFromVec3(src: Vec3): Vec3
    interpolate(v2: Vec3, factor: number): /* res */ Vec3
    length(): number
    max(b: Vec3): /* res */ Vec3
    min(b: Vec3): /* res */ Vec3
    multiply(b: Vec3): /* res */ Vec3
    near(v2: Vec3, epsilon: number): boolean
    negate(): /* res */ Vec3
    normalize(): /* res */ Vec3
    scale(factor: number): /* res */ Vec3
    subtract(b: Vec3): /* res */ Vec3
    toFloat(): /* dest */ number[]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Vec3
    static one(): Vec3
    static xAxis(): Vec3
    static yAxis(): Vec3
    static zAxis(): Vec3
    static zero(): Vec3
}
export class Vec4 {
    /* Methods of Graphene.Vec4 */
    add(b: Vec4): /* res */ Vec4
    divide(b: Vec4): /* res */ Vec4
    dot(b: Vec4): number
    equal(v2: Vec4): boolean
    free(): void
    getW(): number
    getX(): number
    getXy(): /* res */ Vec2
    getXyz(): /* res */ Vec3
    getY(): number
    getZ(): number
    init(x: number, y: number, z: number, w: number): Vec4
    initFromFloat(src: number[]): Vec4
    initFromVec2(src: Vec2, z: number, w: number): Vec4
    initFromVec3(src: Vec3, w: number): Vec4
    initFromVec4(src: Vec4): Vec4
    interpolate(v2: Vec4, factor: number): /* res */ Vec4
    length(): number
    max(b: Vec4): /* res */ Vec4
    min(b: Vec4): /* res */ Vec4
    multiply(b: Vec4): /* res */ Vec4
    near(v2: Vec4, epsilon: number): boolean
    negate(): /* res */ Vec4
    normalize(): /* res */ Vec4
    scale(factor: number): /* res */ Vec4
    subtract(b: Vec4): /* res */ Vec4
    toFloat(): /* dest */ number[]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Vec4
    static one(): Vec4
    static wAxis(): Vec4
    static xAxis(): Vec4
    static yAxis(): Vec4
    static zAxis(): Vec4
    static zero(): Vec4
}
}