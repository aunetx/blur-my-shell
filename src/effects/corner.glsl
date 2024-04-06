// Heavily based on https://github.com/yilozt/rounded-window-corners
// which is itself based on upstream Mutter code

uniform sampler2D tex;
uniform float radius;
uniform float width;
uniform float height;
uniform bool corners_top;
uniform bool corners_bottom;

uniform float clip_x0;
uniform float clip_y0;
uniform float clip_width;
uniform float clip_height;

float circle_bounds(vec2 p, vec2 center, float clip_radius) {
    vec2 delta = p - center;
    float dist_squared = dot(delta, delta);

    float outer_radius = clip_radius + 0.5;
    if (dist_squared >= (outer_radius * outer_radius))
        return 0.0;

    float inner_radius = clip_radius - 0.5;
    if (dist_squared <= (inner_radius * inner_radius))
        return 1.0;

    return outer_radius - sqrt(dist_squared);
}

vec4 getTexture(vec2 uv) {
    if (uv.x < 2. / width)
        uv.x = 2. / width;

    if (uv.y < 2. / height)
        uv.y = 2. / height;

    if (uv.x > 1. - 3. / width)
        uv.x = 1. - 3. / width;

    if (uv.y > 1. - 3. / height)
        uv.y = 1. - 3. / height;

    return texture2D(tex, uv);
}

float rounded_rect_coverage(vec2 p, vec4 bounds, float clip_radius) {
    // Outside the bounds
    if (p.x < bounds.x || p.x > bounds.z || p.y < bounds.y || p.y > bounds.w) {
        return 0.;
    }

    vec2 center;

    float center_left = bounds.x + clip_radius;
    float center_right = bounds.z - clip_radius;

    if (p.x < center_left)
        center.x = center_left + 2.;
    else if (p.x > center_right)
        center.x = center_right - 1.;
    else
        return 1.0;

    float center_top = bounds.y + clip_radius;
    float center_bottom = bounds.w - clip_radius;

    if (corners_top && p.y < center_top)
        center.y = center_top + 2.;
    else if (corners_bottom && p.y > center_bottom)
        center.y = center_bottom - 1.;
    else
        return 1.0;

    return circle_bounds(p, center, clip_radius);
}

void main(void) {
    vec2 uv = cogl_tex_coord_in[0].xy;
    vec2 pos = uv * vec2(width, height);
    vec4 c = getTexture(uv);

    vec4 bounds;
    if (clip_width < 0. || clip_height < 0.) {
        bounds = vec4(clip_x0, clip_y0, clip_x0 + width, clip_y0 + height);
    } else {
        bounds = vec4(clip_x0, clip_y0, clip_x0 + clip_width, clip_y0 + clip_height);
    }

    float alpha = rounded_rect_coverage(pos, bounds, radius);

    cogl_color_out = vec4(c.rgb * alpha, min(alpha, c.a));
}