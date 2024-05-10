uniform sampler2D tex;

vec3 hsl_to_rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main(void) {
    vec2 uv = cogl_tex_coord_in[0].xy;
    vec4 hsla = texture2D(tex, uv);
    vec4 rgba = vec4(hsl_to_rgb(hsla.xyz), hsla.w);
    cogl_color_out = rgba;
}