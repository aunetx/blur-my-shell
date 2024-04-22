uniform sampler2D tex;
uniform int factor;
uniform float width;
uniform float height;

#define CORRECTION 2.25
#define SIZE_ADDITION 3

vec4 get_texture_at_position(vec2 position) {
    vec2 raw_position = position + vec2(CORRECTION, CORRECTION);
    vec2 raw_uv = raw_position / vec2(width + SIZE_ADDITION, height + SIZE_ADDITION);

    return texture2D(tex, raw_uv);
}

ivec2 get_corrected_position() {
    vec2 raw_uv = cogl_tex_coord0_in.st;
    vec2 raw_position = raw_uv * vec2(width + SIZE_ADDITION, height + SIZE_ADDITION);
    return ivec2(raw_position - vec2(CORRECTION, CORRECTION));
}

void main() {
    ivec2 corrected_position = get_corrected_position();

    vec2 adjusted_position = corrected_position / factor;

    cogl_color_out = get_texture_at_position(adjusted_position);
}