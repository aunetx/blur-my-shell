uniform sampler2D tex;
uniform float sigma;
uniform int dir;
uniform float brightness;
uniform float width;
uniform float height;

vec4 getTexture(vec2 uv) {
    float w = max(1.0, width);
    float h = max(1.0, height);

    if (uv.x < 3. / w)
        uv.x = 3. / w;

    if (uv.y < 3. / h)
        uv.y = 3. / h;

    if (uv.x > 1. - 3. / w)
        uv.x = 1. - 3. / w;

    if (uv.y > 1. - 3. / h)
        uv.y = 1. - 3. / h;

    return texture2D(tex, uv);
}

void main(void) {
    vec2 uv = cogl_tex_coord_in[0].xy;
    vec2 direction = vec2(float(dir), 1.0 - float(dir));

    float w = max(1.0, width);
    float h = max(1.0, height);
    float pixel_step;
    if (dir == 0)
        pixel_step = 1.0 / h;
    else
        pixel_step = 1.0 / w;

    vec3 gauss_coefficient;
    gauss_coefficient.x = 1.0 / (sqrt(2.0 * 3.14159265) * sigma);
    gauss_coefficient.y = exp(-0.5 / (sigma * sigma));
    gauss_coefficient.z = gauss_coefficient.y * gauss_coefficient.y;

    float gauss_coefficient_total = gauss_coefficient.x;

    vec4 ret = getTexture(uv) * gauss_coefficient.x;
    gauss_coefficient.xy *= gauss_coefficient.yz;

    int n_steps = int(ceil(1.5 * sigma)) * 2;

    for (int i = 1; i <= n_steps; i += 2) {
        float coefficient_subtotal = gauss_coefficient.x;
        gauss_coefficient.xy *= gauss_coefficient.yz;
        coefficient_subtotal += gauss_coefficient.x;

        float gauss_ratio = gauss_coefficient.x / coefficient_subtotal;

        float foffset = float(i) + gauss_ratio;
        vec2 offset = direction * foffset * pixel_step;

        ret += getTexture(uv + offset) * coefficient_subtotal;
        ret += getTexture(uv - offset) * coefficient_subtotal;

        gauss_coefficient_total += 2.0 * coefficient_subtotal;
        gauss_coefficient.xy *= gauss_coefficient.yz;
    }
    vec4 outColor = ret / gauss_coefficient_total;

    // apply brightness on the second pass (dir==0 comes last)
    if (dir == 0) {
        outColor.rgb *= brightness;
    }

    cogl_color_out = outColor;
}
