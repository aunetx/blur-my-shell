uniform sampler2D tex;
uniform float noise;
uniform float lightness;
uniform float opacity_factor;

const float PHI = 1.61803398874989484820459;
const float SEED = 24.0;

float noise_gen(in vec2 xy) {
    float r = fract(tan(distance(xy * PHI, xy) * SEED) * xy.x);
    r = r != r ? 0.0 : r;
    return r;
}

vec4 bms_noise(vec4 c, vec2 position, float amount, float lightness) {
    if (c.a <= 0.0)
        return c;

    float blend = amount * (1. - noise_gen(position));
    vec3 pix_color = c.rgb / c.a;
    return vec4(mix(pix_color, vec3(lightness), blend) * c.a, c.a);
}

void main() {
    cogl_color_out = bms_noise(bms_texture2D(tex, cogl_tex_coord_in[0].st), gl_FragCoord.xy,
        noise * opacity_factor, lightness);
}
