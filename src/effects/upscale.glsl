uniform sampler2D tex;
int factor = 70;
uniform float width;
uniform float height;

#define CORRECTION 2.25

void main() {
    vec2 raw_uv = cogl_tex_coord0_in.st;

    vec2 raw_position = raw_uv * vec2(width + 3., height + 3.);
    vec2 corrected_position = raw_position - vec2(CORRECTION, CORRECTION);

    vec2 adjusted_position = corrected_position / factor;
    adjusted_position = min(adjusted_position, vec2(width / factor - 0.5, height / factor - 0.5));

    vec2 raw_adjusted_position = adjusted_position + vec2(CORRECTION, CORRECTION);
    vec2 raw_adjusted_uv = raw_adjusted_position / vec2(width + 3., height + 3.);

    cogl_color_out = texture2D(tex, raw_adjusted_uv);
}