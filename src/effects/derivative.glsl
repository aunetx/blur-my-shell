uniform sampler2D tex;
uniform int operation;
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

vec4 try_get_texture_at_position(vec2 position, inout int count) {
    if (any(greaterThanEqual(position, vec2(width, height))) ||
        any(lessThan(position, vec2(0.0, 0.0)))) {
        return vec4(0.0);
    } else {
        count++;
        return get_texture_at_position(position);
    }
}

ivec2 get_corrected_position() {
    vec2 raw_uv = cogl_tex_coord0_in.st;
    vec2 raw_position = raw_uv * vec2(width + SIZE_ADDITION, height + SIZE_ADDITION);
    return ivec2(raw_position - vec2(CORRECTION, CORRECTION));
}

void main() {
    ivec2 corrected_position = get_corrected_position();
    vec4 source_color = get_texture_at_position(vec2(corrected_position));
    vec4 effect_color = source_color;

    // 1-step derivative
    if (operation == 0) {
        vec4 color = vec4(0.0);
        int c = 0;
        color += try_get_texture_at_position(vec2(corrected_position) + vec2(0.0, 1.0), c);
        color -= try_get_texture_at_position(vec2(corrected_position) + vec2(0.0, 0.0), c);
        color += try_get_texture_at_position(vec2(corrected_position) + vec2(1.0, 0.0), c);
        color -= try_get_texture_at_position(vec2(corrected_position) + vec2(0.0, 0.0), c);
        if (c < 4) {
            color = vec4(0.0);
        }
        effect_color = vec4(color.xyz, source_color.a);
    } else
    // 2-step derivative
    if (operation == 1) {
        vec4 color = vec4(0.0);
        int c = 0;
        color += try_get_texture_at_position(vec2(corrected_position) + vec2(0.0, 1.0), c);
        color -= try_get_texture_at_position(vec2(corrected_position) + vec2(0.0, -1.0), c);
        color += try_get_texture_at_position(vec2(corrected_position) + vec2(1.0, 0.0), c);
        color -= try_get_texture_at_position(vec2(corrected_position) + vec2(-1.0, 0.0), c);
        if (c < 4) {
            color = vec4(0.0);
        }
        effect_color = vec4(color.xyz / 2.0, source_color.a);
    } else
    // laplacian
    if (operation == 2) {
        vec4 color = vec4(0.0);
        color = -4.0 * get_texture_at_position(vec2(corrected_position));
        color += get_texture_at_position(vec2(corrected_position) + vec2(0.0, 1.0));
        color += get_texture_at_position(vec2(corrected_position) + vec2(0.0, -1.0));
        color += get_texture_at_position(vec2(corrected_position) + vec2(1.0, 0.0));
        color += get_texture_at_position(vec2(corrected_position) + vec2(-1.0, 0.0));
        effect_color = vec4(color.xyz, source_color.a);
    }

    cogl_color_out = mix(source_color, effect_color, opacity_factor);
}
