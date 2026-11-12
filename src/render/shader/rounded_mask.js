import { ANTIALIASING_SOURCE } from './antialiasing.js';

/// The coverage of a rounded surface, so that its corners don't need a pass of their own.
export const ROUNDED_MASK_SOURCE = `
uniform float corner_radius;
uniform int corners_top;
uniform int corners_bottom;
uniform float mask_x;
uniform float mask_y;
uniform float mask_width;
uniform float mask_height;
${ANTIALIASING_SOURCE}

float corner_coverage(vec2 position) {
    vec2 size = max(vec2(mask_width, mask_height), vec2(1.0));
    vec2 point = position - vec2(mask_x, mask_y) - size * 0.5;
    bool top = point.y < 0.0;
    float radius = (top ? corners_top : corners_bottom) != 0 ? corner_radius : 0.0;
    vec2 q = abs(point) - size * 0.5 + vec2(radius);
    float distance = length(max(q, vec2(0.0))) + min(max(q.x, q.y), 0.0) - radius;
    vec2 outside = max(q, vec2(0.0));
    float outside_length = length(outside);
    vec2 normal = outside_length > 0.0001 ? outside / outside_length
        : (q.x > q.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0));
    float antialias_width = bms_antialias_width(distance, position, normal * sign(point));
    return 1.0 - smoothstep(-antialias_width * 0.5, antialias_width * 0.5, distance);
}
`;
