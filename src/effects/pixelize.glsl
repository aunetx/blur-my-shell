uniform sampler2D tex;
int divider = 70;
uniform float width;
uniform float height;

#define CORRECTION 2.25

vec4 getTextureByPosition(vec2 position) {
    vec2 raw_position = position + vec2(CORRECTION, CORRECTION);
    vec2 raw_uv = raw_position / vec2(width + 3., height + 3.);

    return texture2D(tex, raw_uv);
}

void main() {
    vec2 raw_uv = cogl_tex_coord0_in.st;
    vec2 raw_position = raw_uv * vec2(width + 3., height + 3.);
    vec2 corrected_position = raw_position - vec2(CORRECTION, CORRECTION);

    vec2 multiplied_position = corrected_position * divider;

    if (any(greaterThan(multiplied_position, vec2(width, height)))) {
        discard;
    }

    vec4 color = vec4(0.);
    int count = 0;
    for (int i = 0; i < divider; i++) {
        for (int j = 0; j < divider; j++) {
            vec2 lookup_position = multiplied_position + vec2(i, j);
            if (all(lessThan(lookup_position, vec2(width, height)))) {
                color += getTextureByPosition(lookup_position);
                count += 1;
            }
        }
    }

    cogl_color_out = color / count;
}