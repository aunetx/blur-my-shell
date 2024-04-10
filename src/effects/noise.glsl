uniform sampler2D tex;
uniform float noise;
uniform float lightness;

float PHI = 1.61803398874989484820459;
float SEED = 24;

float noise_gen(in vec2 xy) {
    float r = fract(tan(distance(xy * PHI, xy) * SEED) * xy.x);
    r = r != r ? 0.0 : r;
    return r;
}

void main() {
    vec4 c = texture2D(tex, cogl_tex_coord_in[0].st);
    vec3 pix_color = c.xyz;
    float blend = noise * (1. - noise_gen(gl_FragCoord.xy));

    cogl_color_out = vec4(mix(pix_color, lightness * pix_color, blend), 1.);
}