/**
 * Graphene-1.0
 */

import * as Gjs from './Gjs';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

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
export function box_empty(): Box
export function box_infinite(): Box
export function box_minus_one(): Box
export function box_one(): Box
export function box_one_minus_one(): Box
export function box_zero(): Box
export function point3d_zero(): Point3D
export function point_zero(): Point
export function rect_alloc(): Rect
export function rect_zero(): Rect
export function size_zero(): Size
export function vec2_one(): Vec2
export function vec2_x_axis(): Vec2
export function vec2_y_axis(): Vec2
export function vec2_zero(): Vec2
export function vec3_one(): Vec3
export function vec3_x_axis(): Vec3
export function vec3_y_axis(): Vec3
export function vec3_z_axis(): Vec3
export function vec3_zero(): Vec3
export function vec4_one(): Vec4
export function vec4_w_axis(): Vec4
export function vec4_x_axis(): Vec4
export function vec4_y_axis(): Vec4
export function vec4_z_axis(): Vec4
export function vec4_zero(): Vec4
export class Box {
    /* Methods of Graphene.Box */
    contains_box(b: Box): boolean
    contains_point(point: Point3D): boolean
    equal(b: Box): boolean
    expand(point: Point3D): /* res */ Box
    expand_scalar(scalar: number): /* res */ Box
    expand_vec3(vec: Vec3): /* res */ Box
    free(): void
    get_bounding_sphere(): /* sphere */ Sphere
    get_center(): /* center */ Point3D
    get_depth(): number
    get_height(): number
    get_max(): /* max */ Point3D
    get_min(): /* min */ Point3D
    get_size(): /* size */ Vec3
    get_vertices(): /* vertices */ Vec3[]
    get_width(): number
    init(min?: Point3D | null, max?: Point3D | null): Box
    init_from_box(src: Box): Box
    init_from_points(points: Point3D[]): Box
    init_from_vec3(min?: Vec3 | null, max?: Vec3 | null): Box
    init_from_vectors(vectors: Vec3[]): Box
    intersection(b: Box): [ /* returnType */ boolean, /* res */ Box | null ]
    union(b: Box): /* res */ Box
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Box
    static empty(): Box
    static infinite(): Box
    static minus_one(): Box
    static one(): Box
    static one_minus_one(): Box
    static zero(): Box
}
export class Euler {
    /* Methods of Graphene.Euler */
    equal(b: Euler): boolean
    free(): void
    get_alpha(): number
    get_beta(): number
    get_gamma(): number
    get_order(): EulerOrder
    get_x(): number
    get_y(): number
    get_z(): number
    init(x: number, y: number, z: number): Euler
    init_from_euler(src?: Euler | null): Euler
    init_from_matrix(m: Matrix | null, order: EulerOrder): Euler
    init_from_quaternion(q: Quaternion | null, order: EulerOrder): Euler
    init_from_radians(x: number, y: number, z: number, order: EulerOrder): Euler
    init_from_vec3(v: Vec3 | null, order: EulerOrder): Euler
    init_with_order(x: number, y: number, z: number, order: EulerOrder): Euler
    reorder(order: EulerOrder): /* res */ Euler
    to_matrix(): /* res */ Matrix
    to_quaternion(): /* res */ Quaternion
    to_vec3(): /* res */ Vec3
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Euler
}
export class Frustum {
    /* Methods of Graphene.Frustum */
    contains_point(point: Point3D): boolean
    equal(b: Frustum): boolean
    free(): void
    get_planes(): /* planes */ Plane[]
    init(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane): Frustum
    init_from_frustum(src: Frustum): Frustum
    init_from_matrix(matrix: Matrix): Frustum
    intersects_box(box: Box): boolean
    intersects_sphere(sphere: Sphere): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Frustum
}
export class Matrix {
    /* Methods of Graphene.Matrix */
    decompose(): [ /* returnType */ boolean, /* translate */ Vec3, /* scale */ Vec3, /* rotate */ Quaternion, /* shear */ Vec3, /* perspective */ Vec4 ]
    determinant(): number
    equal(b: Matrix): boolean
    equal_fast(b: Matrix): boolean
    free(): void
    get_row(index_: number): /* res */ Vec4
    get_value(row: number, col: number): number
    get_x_scale(): number
    get_x_translation(): number
    get_y_scale(): number
    get_y_translation(): number
    get_z_scale(): number
    get_z_translation(): number
    init_from_2d(xx: number, yx: number, xy: number, yy: number, x_0: number, y_0: number): Matrix
    init_from_float(v: number[]): Matrix
    init_from_matrix(src: Matrix): Matrix
    init_from_vec4(v0: Vec4, v1: Vec4, v2: Vec4, v3: Vec4): Matrix
    init_frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): Matrix
    init_identity(): Matrix
    init_look_at(eye: Vec3, center: Vec3, up: Vec3): Matrix
    init_ortho(left: number, right: number, top: number, bottom: number, z_near: number, z_far: number): Matrix
    init_perspective(fovy: number, aspect: number, z_near: number, z_far: number): Matrix
    init_rotate(angle: number, axis: Vec3): Matrix
    init_scale(x: number, y: number, z: number): Matrix
    init_skew(x_skew: number, y_skew: number): Matrix
    init_translate(p: Point3D): Matrix
    interpolate(b: Matrix, factor: number): /* res */ Matrix
    inverse(): [ /* returnType */ boolean, /* res */ Matrix ]
    is_2d(): boolean
    is_backface_visible(): boolean
    is_identity(): boolean
    is_singular(): boolean
    multiply(b: Matrix): /* res */ Matrix
    near(b: Matrix, epsilon: number): boolean
    normalize(): /* res */ Matrix
    perspective(depth: number): /* res */ Matrix
    print(): void
    project_point(p: Point): /* res */ Point
    project_rect(r: Rect): /* res */ Quad
    project_rect_bounds(r: Rect): /* res */ Rect
    rotate(angle: number, axis: Vec3): void
    rotate_euler(e: Euler): void
    rotate_quaternion(q: Quaternion): void
    rotate_x(angle: number): void
    rotate_y(angle: number): void
    rotate_z(angle: number): void
    scale(factor_x: number, factor_y: number, factor_z: number): void
    skew_xy(factor: number): void
    skew_xz(factor: number): void
    skew_yz(factor: number): void
    to_2d(): [ /* returnType */ boolean, /* xx */ number, /* yx */ number, /* xy */ number, /* yy */ number, /* x_0 */ number, /* y_0 */ number ]
    to_float(): /* v */ number[]
    transform_bounds(r: Rect): /* res */ Rect
    transform_box(b: Box): /* res */ Box
    transform_point(p: Point): /* res */ Point
    transform_point3d(p: Point3D): /* res */ Point3D
    transform_ray(r: Ray): /* res */ Ray
    transform_rect(r: Rect): /* res */ Quad
    transform_sphere(s: Sphere): /* res */ Sphere
    transform_vec3(v: Vec3): /* res */ Vec3
    transform_vec4(v: Vec4): /* res */ Vec4
    translate(pos: Point3D): void
    transpose(): /* res */ Matrix
    unproject_point3d(modelview: Matrix, point: Point3D): /* res */ Point3D
    untransform_bounds(r: Rect, bounds: Rect): /* res */ Rect
    untransform_point(p: Point, bounds: Rect): [ /* returnType */ boolean, /* res */ Point ]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Matrix
}
export class Plane {
    /* Methods of Graphene.Plane */
    distance(point: Point3D): number
    equal(b: Plane): boolean
    free(): void
    get_constant(): number
    get_normal(): /* normal */ Vec3
    init(normal: Vec3 | null, constant: number): Plane
    init_from_plane(src: Plane): Plane
    init_from_point(normal: Vec3, point: Point3D): Plane
    init_from_points(a: Point3D, b: Point3D, c: Point3D): Plane
    init_from_vec4(src: Vec4): Plane
    negate(): /* res */ Plane
    normalize(): /* res */ Plane
    transform(matrix: Matrix, normal_matrix?: Matrix | null): /* res */ Plane
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Plane
}
export class Point {
    /* Fields of Graphene.Point */
    x: number
    y: number
    /* Methods of Graphene.Point */
    distance(b: Point): [ /* returnType */ number, /* d_x */ number | null, /* d_y */ number | null ]
    equal(b: Point): boolean
    free(): void
    init(x: number, y: number): Point
    init_from_point(src: Point): Point
    init_from_vec2(src: Vec2): Point
    interpolate(b: Point, factor: number): /* res */ Point
    near(b: Point, epsilon: number): boolean
    to_vec2(): /* v */ Vec2
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
    init_from_point(src: Point3D): Point3D
    init_from_vec3(v: Vec3): Point3D
    interpolate(b: Point3D, factor: number): /* res */ Point3D
    length(): number
    near(b: Point3D, epsilon: number): boolean
    normalize(): /* res */ Point3D
    normalize_viewport(viewport: Rect, z_near: number, z_far: number): /* res */ Point3D
    scale(factor: number): /* res */ Point3D
    to_vec3(): /* v */ Vec3
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
    get_point(index_: number): Point
    init(p1: Point, p2: Point, p3: Point, p4: Point): Quad
    init_from_points(points: Point[]): Quad
    init_from_rect(r: Rect): Quad
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
    init_from_angle_vec3(angle: number, axis: Vec3): Quaternion
    init_from_angles(deg_x: number, deg_y: number, deg_z: number): Quaternion
    init_from_euler(e: Euler): Quaternion
    init_from_matrix(m: Matrix): Quaternion
    init_from_quaternion(src: Quaternion): Quaternion
    init_from_radians(rad_x: number, rad_y: number, rad_z: number): Quaternion
    init_from_vec4(src: Vec4): Quaternion
    init_identity(): Quaternion
    invert(): /* res */ Quaternion
    multiply(b: Quaternion): /* res */ Quaternion
    normalize(): /* res */ Quaternion
    scale(factor: number): /* res */ Quaternion
    slerp(b: Quaternion, factor: number): /* res */ Quaternion
    to_angle_vec3(): [ /* angle */ number, /* axis */ Vec3 ]
    to_angles(): [ /* deg_x */ number | null, /* deg_y */ number | null, /* deg_z */ number | null ]
    to_matrix(): /* m */ Matrix
    to_radians(): [ /* rad_x */ number | null, /* rad_y */ number | null, /* rad_z */ number | null ]
    to_vec4(): /* res */ Vec4
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Quaternion
}
export class Ray {
    /* Methods of Graphene.Ray */
    equal(b: Ray): boolean
    free(): void
    get_closest_point_to_point(p: Point3D): /* res */ Point3D
    get_direction(): /* direction */ Vec3
    get_distance_to_plane(p: Plane): number
    get_distance_to_point(p: Point3D): number
    get_origin(): /* origin */ Point3D
    get_position_at(t: number): /* position */ Point3D
    init(origin?: Point3D | null, direction?: Vec3 | null): Ray
    init_from_ray(src: Ray): Ray
    init_from_vec3(origin?: Vec3 | null, direction?: Vec3 | null): Ray
    intersect_box(b: Box): [ /* returnType */ RayIntersectionKind, /* t_out */ number ]
    intersect_sphere(s: Sphere): [ /* returnType */ RayIntersectionKind, /* t_out */ number ]
    intersect_triangle(t: Triangle): [ /* returnType */ RayIntersectionKind, /* t_out */ number ]
    intersects_box(b: Box): boolean
    intersects_sphere(s: Sphere): boolean
    intersects_triangle(t: Triangle): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Ray
}
export class Rect {
    /* Fields of Graphene.Rect */
    origin: Point
    size: Size
    /* Methods of Graphene.Rect */
    contains_point(p: Point): boolean
    contains_rect(b: Rect): boolean
    equal(b: Rect): boolean
    expand(p: Point): /* res */ Rect
    free(): void
    get_area(): number
    get_bottom_left(): /* p */ Point
    get_bottom_right(): /* p */ Point
    get_center(): /* p */ Point
    get_height(): number
    get_top_left(): /* p */ Point
    get_top_right(): /* p */ Point
    get_vertices(): /* vertices */ Vec2[]
    get_width(): number
    get_x(): number
    get_y(): number
    init(x: number, y: number, width: number, height: number): Rect
    init_from_rect(src: Rect): Rect
    inset(d_x: number, d_y: number): Rect
    inset_r(d_x: number, d_y: number): /* res */ Rect
    interpolate(b: Rect, factor: number): /* res */ Rect
    intersection(b: Rect): [ /* returnType */ boolean, /* res */ Rect | null ]
    normalize(): Rect
    normalize_r(): /* res */ Rect
    offset(d_x: number, d_y: number): Rect
    offset_r(d_x: number, d_y: number): /* res */ Rect
    round(): /* res */ Rect
    round_extents(): /* res */ Rect
    round_to_pixel(): Rect
    scale(s_h: number, s_v: number): /* res */ Rect
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
    init_from_size(src: Size): Size
    interpolate(b: Size, factor: number): /* res */ Size
    scale(factor: number): /* res */ Size
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Size
    static zero(): Size
}
export class Sphere {
    /* Methods of Graphene.Sphere */
    contains_point(point: Point3D): boolean
    distance(point: Point3D): number
    equal(b: Sphere): boolean
    free(): void
    get_bounding_box(): /* box */ Box
    get_center(): /* center */ Point3D
    get_radius(): number
    init(center: Point3D | null, radius: number): Sphere
    init_from_points(points: Point3D[], center?: Point3D | null): Sphere
    init_from_vectors(vectors: Vec3[], center?: Point3D | null): Sphere
    is_empty(): boolean
    translate(point: Point3D): /* res */ Sphere
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Sphere
}
export class Triangle {
    /* Methods of Graphene.Triangle */
    contains_point(p: Point3D): boolean
    equal(b: Triangle): boolean
    free(): void
    get_area(): number
    get_barycoords(p?: Point3D | null): [ /* returnType */ boolean, /* res */ Vec2 ]
    get_bounding_box(): /* res */ Box
    get_midpoint(): /* res */ Point3D
    get_normal(): /* res */ Vec3
    get_plane(): /* res */ Plane
    get_points(): [ /* a */ Point3D | null, /* b */ Point3D | null, /* c */ Point3D | null ]
    get_uv(p: Point3D | null, uv_a: Vec2, uv_b: Vec2, uv_c: Vec2): [ /* returnType */ boolean, /* res */ Vec2 ]
    get_vertices(): [ /* a */ Vec3 | null, /* b */ Vec3 | null, /* c */ Vec3 | null ]
    init_from_float(a: number[], b: number[], c: number[]): Triangle
    init_from_point3d(a?: Point3D | null, b?: Point3D | null, c?: Point3D | null): Triangle
    init_from_vec3(a?: Vec3 | null, b?: Vec3 | null, c?: Vec3 | null): Triangle
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
    get_x(): number
    get_y(): number
    init(x: number, y: number): Vec2
    init_from_float(src: number[]): Vec2
    init_from_vec2(src: Vec2): Vec2
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
    to_float(): /* dest */ number[]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Vec2
    static one(): Vec2
    static x_axis(): Vec2
    static y_axis(): Vec2
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
    get_x(): number
    get_xy(): /* res */ Vec2
    get_xy0(): /* res */ Vec3
    get_xyz0(): /* res */ Vec4
    get_xyz1(): /* res */ Vec4
    get_xyzw(w: number): /* res */ Vec4
    get_y(): number
    get_z(): number
    init(x: number, y: number, z: number): Vec3
    init_from_float(src: number[]): Vec3
    init_from_vec3(src: Vec3): Vec3
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
    to_float(): /* dest */ number[]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Vec3
    static one(): Vec3
    static x_axis(): Vec3
    static y_axis(): Vec3
    static z_axis(): Vec3
    static zero(): Vec3
}
export class Vec4 {
    /* Methods of Graphene.Vec4 */
    add(b: Vec4): /* res */ Vec4
    divide(b: Vec4): /* res */ Vec4
    dot(b: Vec4): number
    equal(v2: Vec4): boolean
    free(): void
    get_w(): number
    get_x(): number
    get_xy(): /* res */ Vec2
    get_xyz(): /* res */ Vec3
    get_y(): number
    get_z(): number
    init(x: number, y: number, z: number, w: number): Vec4
    init_from_float(src: number[]): Vec4
    init_from_vec2(src: Vec2, z: number, w: number): Vec4
    init_from_vec3(src: Vec3, w: number): Vec4
    init_from_vec4(src: Vec4): Vec4
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
    to_float(): /* dest */ number[]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Vec4
    static one(): Vec4
    static w_axis(): Vec4
    static x_axis(): Vec4
    static y_axis(): Vec4
    static z_axis(): Vec4
    static zero(): Vec4
}