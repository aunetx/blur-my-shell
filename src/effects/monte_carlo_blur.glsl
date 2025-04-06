uniform sampler2D tex;
uniform float radius;
uniform int iterations;
uniform float brightness;
uniform float width;
uniform float height;
uniform bool use_base_pixel;
uniform bool prefer_closer_pixels;

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
    vec2 dir;
    vec2 new_uv;
    int strength;

    int count = 0;
    vec4 c = vec4(0.);

    for (int i = 0; i < iterations; i++) {
        rv.x = rand(r);
        rv.y = rand(r) * 3.141592;
        dir = vec2(cos(rv.y), sin(rv.y));
        new_uv = uv + rv.x * dir * p;
        if (new_uv.x > 2. / width && new_uv.y > 2. / height && new_uv.x < 1. - 3. / width && new_uv.y < 1. - 3. / height) {
            strength = prefer_closer_pixels ? (iterations - i)^2 : 1;
            c += strength * texture2D(tex, new_uv);
            count += strength;
        }
    }

    if (count == 0 || use_base_pixel) {
        strength = prefer_closer_pixels ? (iterations + 1)^2 : 1;
        c += strength * texture2D(tex, uv);
        count += strength;
    }

    c.xyz *= brightness;
    cogl_color_out = c / count;
}