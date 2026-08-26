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
    int safe_factor = max(1, factor);

    vec2 adjusted_position = vec2(corrected_position / safe_factor);

    vec4 effect_color = get_texture_at_position(adjusted_position);
    cogl_color_out = mix(source_color, effect_color, opacity_factor);

    // round
    if (distance(vec2(corrected_position), (floor(adjusted_position) + 0.5) * float(safe_factor)) < float(safe_factor) / 2.5) {
        //cogl_color_out = get_texture_at_position(adjusted_position);
    } else {
        //cogl_color_out = vec4(0, 0, 0, 1);
    }

    // square
    if (mod(float(corrected_position.x), float(safe_factor)) >= 2.0 && mod(float(corrected_position.y), float(safe_factor)) >= 2.0) {
        //cogl_color_out = get_texture_at_position(adjusted_position);
    } else {
        //cogl_color_out = vec4(0, 0, 0, 1);
    }

    // local mix
    vec4 color = vec4(0.0);
    int count = 0;
    for (int i = -1; i <= 1; i++) {
        for (int j = -1; j <= 1; j++) {
            vec2 lookup_position = adjusted_position + vec2(float(i), float(j));
            if (all(greaterThanEqual(lookup_position, vec2(0.0, 0.0))) &&
                all(lessThan(lookup_position, vec2(width, height) / float(safe_factor)))) {
                color += get_texture_at_position(lookup_position);
                count += 1;
            }
        }
    }
    //cogl_color_out = color / count;
}
