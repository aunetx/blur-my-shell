uniform sampler2D tex;
uniform float brightness_shift;
uniform float brightness_multiplicator;
uniform float contrast;
uniform float contrast_center;
uniform float saturation_multiplicator;

vec3 hsl_to_rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 rgb_to_hsl(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

void main() {
    vec4 c = texture2D(tex, cogl_tex_coord_in[0].st);

    vec3 pix_hsl = rgb_to_hsl(c.xyz) / c.a;
    pix_hsl.z = clamp(pix_hsl.z * brightness_multiplicator, 0., 1.);
    pix_hsl.z = clamp((pix_hsl.z - contrast_center) * contrast + contrast_center + brightness_shift, 0., 1.);
    pix_hsl.y = clamp(pix_hsl.y * saturation_multiplicator, 0., 1.);

    cogl_color_out = vec4(hsl_to_rgb(pix_hsl) * c.a, c.a);
}