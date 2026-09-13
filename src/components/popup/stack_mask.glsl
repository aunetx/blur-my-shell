uniform sampler2D tex;
uniform float texture_x;
uniform float texture_y;
uniform float texture_width;
uniform float texture_height;
uniform float cover_x;
uniform float cover_y;
uniform float cover_width;
uniform float cover_height;
uniform float radius_tl;
uniform float radius_tr;
uniform float radius_br;
uniform float radius_bl;
uniform float scale_x;
uniform float scale_y;

void main(void) {
    vec2 uv = cogl_tex_coord_in[0].xy;
    vec2 pos = vec2(texture_x, texture_y) + uv * vec2(texture_width, texture_height);
    vec2 p = (pos - vec2(cover_x, cover_y)) / vec2(scale_x, scale_y);
    vec2 size = vec2(cover_width, cover_height) / vec2(scale_x, scale_y);

    // Select the theme radius for this quadrant: TL, TR, BR, BL.
    float radius = p.y < size.y * 0.5
        ? (p.x < size.x * 0.5 ? radius_tl : radius_tr)
        : (p.x < size.x * 0.5 ? radius_bl : radius_br);
    vec2 q = abs(p - size * 0.5) - size * 0.5 + radius;
    float distance = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
    float uncovered = smoothstep(-0.5, 0.5, distance);

    // Cogl textures use premultiplied alpha; mask all four channels.
    cogl_color_out = cogl_color_in * texture2D(tex, uv) * uncovered;
}
