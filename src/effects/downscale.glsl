uniform sampler2D tex;
uniform int divider;
uniform float width;
uniform float height;
uniform int downsampling_mode;

#define CORRECTION 2.25
#define SIZE_ADDITION 3

vec4 get_texture_at_position(vec2 position) {
    vec2 raw_position = position + vec2(CORRECTION, CORRECTION);
    vec2 raw_uv = raw_position / vec2(width + SIZE_ADDITION, height + SIZE_ADDITION);

    return texture2D(tex, raw_uv);
}

vec2 get_corrected_position() {
    vec2 raw_uv = cogl_tex_coord0_in.st;
    vec2 raw_position = raw_uv * vec2(width + SIZE_ADDITION, height + SIZE_ADDITION);
    return raw_position - vec2(CORRECTION, CORRECTION);
}

void main() {
    ivec2 corrected_position = ivec2(get_corrected_position());
    vec2 multiplied_position = corrected_position * divider;

    if (any(greaterThan(multiplied_position, vec2(width, height)))) {
        discard;
    }

    // mode 0: boxcar downsampling
    if (downsampling_mode == 0) {

        vec4 color = vec4(0.);
        int count = 0;
        for (int i = 0; i < divider; i++) {
            for (int j = 0; j < divider; j++) {
                vec2 lookup_position = multiplied_position + vec2(i, j);
                if (all(greaterThanEqual(lookup_position, vec2(0, 0))) &&
                    all(lessThan(lookup_position, vec2(width, height)))) {
                    color += get_texture_at_position(lookup_position);
                    count += 1;
                }
            }
        }
        cogl_color_out = color / count;

    } else
    // mode 1: triangular downsampling
    if (downsampling_mode == 1) {

        vec4 color = vec4(0.);
        int count = 0;
        int force = 1;
        for (int i = 0; i < divider; i++) {
            for (int j = 0; j < divider; j++) {
                vec2 lookup_position = multiplied_position + vec2(i, j);
                if (all(greaterThanEqual(lookup_position, vec2(0, 0))) &&
                    all(lessThan(lookup_position, vec2(width, height)))) {
                    force = 1 + divider - int(abs(divider - i - j));
                    color += get_texture_at_position(lookup_position) * force;
                    count += force;
                }
            }
        }
        cogl_color_out = color / count;

    } else
    // mode 2: Dirac downsampling
    if (downsampling_mode == 2) {

        vec2 lookup_position = min(multiplied_position + vec2(divider, divider) / 2, vec2(width - 1, height - 1));
        cogl_color_out = get_texture_at_position(lookup_position);

    }
}