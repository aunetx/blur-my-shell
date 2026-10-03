uniform sampler2D tex;
uniform int factor;
uniform float width;
uniform float height;
uniform float opacity_factor;

#define CORRECTION 2.25
#define SIZE_ADDITION 3.0

vec4 get_texture_at_position(vec2 position) {
    vec2 raw_position = position + vec2(CORRECTION, CORRECTION);
    vec2 raw_uv = raw_position / vec2(max(1.0, width + SIZE_ADDITION), max(1.0, height + SIZE_ADDITION));

    return texture2D(tex, raw_uv);
}

ivec2 get_corrected_position() {
    vec2 raw_uv = cogl_tex_coord0_in.st;
    vec2 raw_position = raw_uv * vec2(width + SIZE_ADDITION, height + SIZE_ADDITION);
    return ivec2(raw_position - vec2(CORRECTION, CORRECTION));
}

void main() {
    vec4 source_color = texture2D(tex, cogl_tex_coord0_in.st);
    ivec2 corrected_position = get_corrected_position();
    float safe_factor = max(1.0, float(factor));
    vec2 adjusted_position = floor(vec2(corrected_position) / safe_factor);

    vec4 effect_color = get_texture_at_position(adjusted_position);
    cogl_color_out = mix(source_color, effect_color, opacity_factor);
}
