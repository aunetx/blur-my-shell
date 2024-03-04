uniform sampler2D tex;
uniform float sigma;
uniform int dir;
uniform float brightness;
uniform float corner_radius;
uniform float width;
uniform float height;

float circleBounds(vec2 p, vec2 center, float clip_radius) {
    vec2 delta = p - center;
    float dist_squared = dot(delta, delta);

    float outer_radius = clip_radius + 0.5;
    if (dist_squared >= (outer_radius * outer_radius))
        return 0.0;

    float inner_radius = clip_radius - 0.5;
    if (dist_squared <= (inner_radius * inner_radius))
        return 1.0;

    return outer_radius - sqrt(dist_squared);
}

vec4 shapeCorner(vec4 pixel, vec2 p, vec2 center, float clip_radius) {
    float alpha = circleBounds(p, center, clip_radius);
    return vec4(pixel.rgb * alpha, min(alpha, pixel.a));
}

void main(void) {
    vec2 uv = cogl_tex_coord_in[0].xy;
    vec2 direction = vec2(dir, (1.0 - dir));

    float pixel_step;
    if (dir == 0)
        pixel_step = 1.0 / height;
    else
        pixel_step = 1.0 / width;

    vec3 gauss_coefficient;
    gauss_coefficient.x = 1.0 / (sqrt(2.0 * 3.14159265) * sigma);
    gauss_coefficient.y = exp(-0.5 / (sigma * sigma));
    gauss_coefficient.z = gauss_coefficient.y * gauss_coefficient.y;

    float gauss_coefficient_total = gauss_coefficient.x;

    vec4 ret = texture2D(tex, uv) * gauss_coefficient.x;
    gauss_coefficient.xy *= gauss_coefficient.yz;

    int n_steps = int(ceil(1.5 * sigma)) * 2;

    for (int i = 1; i <= n_steps; i += 2) {
        float coefficient_subtotal = gauss_coefficient.x;
        gauss_coefficient.xy *= gauss_coefficient.yz;
        coefficient_subtotal += gauss_coefficient.x;

        float gauss_ratio = gauss_coefficient.x / coefficient_subtotal;

        float foffset = float(i) + gauss_ratio;
        vec2 offset = direction * foffset * pixel_step;

        ret += texture2D(tex, uv + offset) * coefficient_subtotal;
        ret += texture2D(tex, uv - offset) * coefficient_subtotal;

        gauss_coefficient_total += 2.0 * coefficient_subtotal;
        gauss_coefficient.xy *= gauss_coefficient.yz;
    }
    vec4 outColor = ret / gauss_coefficient_total;

    // apply brightness and rounding on the second pass (dir==0 comes last)
    if (dir == 0) {
        vec2 pos = uv * vec2(width, height);

        // left side
        if (pos.x < corner_radius) {
            // top left corner
            if (pos.y < corner_radius) {
                outColor = shapeCorner(outColor, pos, vec2(corner_radius + 2., corner_radius + 2.), corner_radius);
            // bottom left corner
            } else if (pos.y > height - corner_radius) {
                outColor = shapeCorner(outColor, pos, vec2(corner_radius + 2., height - corner_radius - 1.), corner_radius);
            }
        // right side
        } else if (pos.x > width - corner_radius) {
            // top right corner
            if (pos.y < corner_radius) {
                outColor = shapeCorner(outColor, pos, vec2(width - corner_radius - 1., corner_radius + 2.), corner_radius);
            // bottom right corner
            } else if (pos.y > height - corner_radius) {
                outColor = shapeCorner(outColor, pos, vec2(width - corner_radius - 1., height - corner_radius - 1.), corner_radius);
            }
        }

        outColor.rgb *= brightness;
    }

    cogl_color_out = outColor;
}