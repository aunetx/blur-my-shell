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

    // round
    if (distance(corrected_position, (floor(adjusted_position) + 0.5) * factor) < factor / 2.5) {
        //cogl_color_out = get_texture_at_position(adjusted_position);
    } else {
        //cogl_color_out = vec4(0, 0, 0, 1);
    }

    // square
    if (mod(corrected_position.x, factor) >= 2 && mod(corrected_position.y, factor) >= 2) {
        //cogl_color_out = get_texture_at_position(adjusted_position);
    } else {
        //cogl_color_out = vec4(0, 0, 0, 1);
    }

    // local mix
    vec4 color = vec4(0);
    int count = 0;
    for (int i = -1; i <= 1; i++) {
        for (int j = -1; j <= 1; j++) {
            vec2 lookup_position = adjusted_position + vec2(i, j);
            if (all(greaterThanEqual(lookup_position, vec2(0, 0))) &&
                all(lessThan(lookup_position, vec2(width, height) / factor))) {
                color += get_texture_at_position(lookup_position);
                count += 1;
            }
        }
    }
    //cogl_color_out = color / count;
}