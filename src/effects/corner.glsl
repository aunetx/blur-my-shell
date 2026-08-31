uniform sampler2D tex;
uniform float radius;
uniform float width;
uniform float height;
uniform int corners_top;
uniform int corners_bottom;
uniform int straight_corners;

uniform float clip_x0;
uniform float clip_y0;
uniform float clip_width;
uniform float clip_height;

float roundedBoxDistance(vec2 point, vec2 halfSize, float cornerRadius) {
    vec2 q = abs(point) - halfSize + vec2(cornerRadius);
    return length(max(q, vec2(0.0)))
        + min(max(q.x, q.y), 0.0)
        - cornerRadius;
}

void main() {
    vec2 uv = cogl_tex_coord_in[0].xy;
    vec2 actorSize = vec2(max(1.0, width), max(1.0, height));
    vec2 position = uv * actorSize;
    vec4 bounds = clip_width < 0.0 || clip_height < 0.0
        ? vec4(0.0, 0.0, actorSize)
        : vec4(clip_x0, clip_y0, clip_x0 + clip_width, clip_y0 + clip_height);
    vec2 pixelSize = max(fwidth(position), vec2(0.0001));
    bounds.xy += pixelSize * 0.5;
    bounds.zw -= pixelSize * 0.5;
    vec2 size = max(bounds.zw - bounds.xy, vec2(1.0));
    vec2 local = position - bounds.xy;
    float cornerRadius = min(radius, min(size.x, size.y) * 0.5);

    if (straight_corners != 0
        || (local.y < size.y * 0.5 && corners_top == 0)
        || (local.y >= size.y * 0.5 && corners_bottom == 0))
        cornerRadius = 0.0;

    float distance = roundedBoxDistance(local - size * 0.5, size * 0.5, cornerRadius);
    float antialiasWidth = max(fwidth(distance), 0.0001);
    float coverage = 1.0 - smoothstep(
        -antialiasWidth * 0.75,
        antialiasWidth * 0.75,
        distance
    );
    cogl_color_out = texture2D(tex, uv) * coverage;
}
