uniform sampler2D tex;
uniform float radius;
uniform int iterations;
uniform float brightness;
uniform float width;
uniform float height;
uniform bool use_base_pixel;

float srand(vec2 a) {
    return sin(dot(a, vec2(1233.224, 1743.335)));
}

float rand(inout float r) {
    r = fract(3712.65 * r + 0.61432);
    return (r - 0.5) * 2.0;
}

void main() {
    vec2 uv = cogl_tex_coord0_in.st;
    vec2 p = 16 * radius / vec2(width, height);
    float r = srand(uv);
    vec2 rv;

    int count = 0;
    vec4 c = vec4(0.);

    for (int i = 0; i < iterations; i++) {
        rv.x = rand(r);
        rv.y = rand(r);
        vec2 new_uv = uv + rv * p;
        if (new_uv.x > 2. / width && new_uv.y > 2. / height && new_uv.x < 1. - 3. / width && new_uv.y < 1. - 3. / height) {
            c += texture2D(tex, new_uv);
            count += 1;
        }
    }

    if (count == 0 || use_base_pixel) {
        c += texture2D(tex, uv);
        count += 1;
    }

    c.xyz *= brightness;
    cogl_color_out = c / count;
}