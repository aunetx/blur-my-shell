uniform sampler2D tex;
uniform float sigma;
uniform float pixel_step;
uniform int dir;
uniform float brightness;

void main(void) {
    vec2 uv = cogl_tex_coord_in[0].xy;
    vec2 direction = vec2(dir, (1.0-dir));

    vec3 gauss_coefficient;
    gauss_coefficient.x = 1.0 / (sqrt (2.0 * 3.14159265) * sigma);
    gauss_coefficient.y = exp (-0.5 / (sigma * sigma));
    gauss_coefficient.z = gauss_coefficient.y * gauss_coefficient.y;

    float gauss_coefficient_total = gauss_coefficient.x;

    vec4 ret = texture2D (tex, uv) * gauss_coefficient.x;
    gauss_coefficient.xy *= gauss_coefficient.yz;

    int n_steps = int (ceil (1.5 * sigma)) * 2;

    for (int i = 1; i <= n_steps; i += 2) {
        float coefficient_subtotal = gauss_coefficient.x;
        gauss_coefficient.xy *= gauss_coefficient.yz;
        coefficient_subtotal += gauss_coefficient.x;
        
        float gauss_ratio = gauss_coefficient.x / coefficient_subtotal;
        
        float foffset = float (i) + gauss_ratio;
        vec2 offset = direction * foffset * pixel_step;
        
        ret += texture2D (tex, uv + offset) * coefficient_subtotal;
        ret += texture2D (tex, uv - offset) * coefficient_subtotal;
        
        gauss_coefficient_total += 2.0 * coefficient_subtotal;
        gauss_coefficient.xy *= gauss_coefficient.yz;
    }
    cogl_color_out = ret / gauss_coefficient_total;

    if(dir==1) {
        cogl_color_out.rgb *= brightness;
    }
}