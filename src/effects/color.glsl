uniform sampler2D tex;
uniform float red;
uniform float green;
uniform float blue;
uniform float blend;

void main() {
    vec4 c = texture2D(tex, cogl_tex_coord_in[0].st);
    vec3 pix_color = c.xyz;
    vec3 color = vec3(red, green, blue);

    cogl_color_out = vec4(mix(pix_color, color, blend), 1.);
}