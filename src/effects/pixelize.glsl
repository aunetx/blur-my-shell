uniform sampler2D tex;
uniform int divider;
uniform float width;
uniform float height;

vec4 getTexture(vec2 uv) {
    if (uv.x < 3. / width)
        uv.x = 3. / width;

    if (uv.y < 3. / height)
        uv.y = 3. / height;

    if (uv.x > 1. - 3. / width)
        uv.x = 1. - 3. / width;

    if (uv.y > 1. - 3. / height)
        uv.y = 1. - 3. / height;

    return texture2D(tex, uv);
}

void main() {
    vec2 uv = cogl_tex_coord0_in.st;
    vec2 scaled_multiplier = vec2(width, height) / divider;
    vec2 new_uv = 0.5 + floor((uv - 0.5) * scaled_multiplier) / scaled_multiplier;
    cogl_color_out = getTexture(new_uv);
}