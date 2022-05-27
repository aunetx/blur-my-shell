uniform sampler2D tex;

uniform float width;
uniform float height;
uniform float radius = 10;

vec2 pixel_coord = cogl_tex_coord_in[0].xy;
vec2 uv = pixel_coord * vec2(width, height);

bool is_corner_to(float x, float y) {
    return distance(uv, vec2(x, y)) > radius;
}

void main() {
    vec4 pixel_color = texture2D(tex, pixel_coord);
    float opacity = 1.;

    // check if in the corners, and exclude the included circle
    if(uv.x <= radius && uv.y <= radius) {
        // top left
        if(is_corner_to(radius, radius)) {
            opacity = 0.;
        }
    } else if(uv.x >= width - radius && uv.y <= radius) {
        // top right
        if(is_corner_to(width - radius, radius)) {
            opacity = 0.;
        }
    } else if(uv.x <= radius && uv.y >= height - radius) {
        // bottom left
        if(is_corner_to(radius, height - radius)) {
            opacity = 0.;
        }
    } else if(uv.x >= width - radius && uv.y >= height - radius) {
        // bottom right
        if(is_corner_to(width - radius, height - radius)) {
            opacity = 0.;
        }
    }

    cogl_color_out = vec4(pixel_color * opacity);
}