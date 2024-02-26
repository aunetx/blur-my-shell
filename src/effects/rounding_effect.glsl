uniform sampler2D tex;
uniform float radius;
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

vec2 pixel_coord = cogl_tex_coord_in[0].xy;
vec2 pos = pixel_coord * vec2(width, height);

void main(void) {
    vec4 outColor = texture2D(tex, pixel_coord);

    // left side
    if (pos.x < radius) {
        // top left corner
        if (pos.y < radius) {
            outColor = shapeCorner(outColor, pos, vec2(radius + 2., radius + 2.), radius);
        // bottom left corner
        } else if (pos.y > height - radius) {
            outColor = shapeCorner(outColor, pos, vec2(radius + 2., height - radius - 1.), radius);
        }
    // right side
    } else if (pos.x > width - radius) {
        // top right corner
        if (pos.y < radius) {
            outColor = shapeCorner(outColor, pos, vec2(width - radius - 1., radius + 2.), radius);
        // bottom right corner
        } else if (pos.y > height - radius) {
            outColor = shapeCorner(outColor, pos, vec2(width - radius - 1., height - radius - 1.), radius);
        }
    }

    cogl_color_out = outColor;
}