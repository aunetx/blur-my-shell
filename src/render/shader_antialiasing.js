export const ANTIALIASING_SOURCE = `
#if defined(GL_ES) && __VERSION__ < 300
uniform float bms_viewport_width;
uniform float bms_viewport_height;
uniform float bms_origin_x;
uniform float bms_origin_y;
#endif

float bms_antialias_width(float distance, vec2 position, vec2 normal) {
#if defined(GL_ES) && __VERSION__ < 300
    vec4 clip = cogl_modelview_projection_matrix *
        vec4(position + vec2(bms_origin_x, bms_origin_y), 0.0, 1.0);
    vec2 ndc = clip.xy / clip.w;
    vec2 viewport = vec2(bms_viewport_width, bms_viewport_height) * 0.5;
    vec2 dx = (cogl_modelview_projection_matrix[0].xy -
        ndc * cogl_modelview_projection_matrix[0].w) * viewport / clip.w;
    vec2 dy = (cogl_modelview_projection_matrix[1].xy -
        ndc * cogl_modelview_projection_matrix[1].w) * viewport / clip.w;
    float determinant = dx.x * dy.y - dx.y * dy.x;
    vec2 gradient = vec2(dy.y * normal.x - dx.y * normal.y,
        dx.x * normal.y - dy.x * normal.x);
    return max((abs(gradient.x) + abs(gradient.y)) /
        max(abs(determinant), 0.000001), 0.0001);
#else
    return max(fwidth(distance), 0.0001);
#endif
}
`;
