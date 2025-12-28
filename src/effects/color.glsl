uniform sampler2D tex;
uniform float red;
uniform float green;
uniform float blue;
uniform float blend;
uniform int mode;

const int NORMAL = 0;
const int MULTIPLY = 1;
const int SCREEN = 2;
const int OVERLAY = 3;
const int DARKEN = 4;
const int LIGHTEN = 5;
const int COLOR_DODGE = 6;
const int COLOR_BURN = 7;
const int HARD_LIGHT = 8;
const int SOFT_LIGHT = 9;
const int DIFFERENCE = 10;
const int EXCLUSION = 11;
const int HUE = 12;
const int SATURATION = 13;
const int COLOR = 14;
const int LUMINOSITY = 15;
const int PLUS_DARKER = 16;
const int PLUS_LIGHTER = 17;

vec3 rgb_to_hsl(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsl_to_rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float soft_light_channel(float base, float _blend) {
    if (_blend < 0.5) {
        return base - (1.0 - 2.0 * _blend) * base * (1.0 - base);
    } else {
        float d = (base < 0.25)
        ? ((16.0 * base - 12.0) * base + 4.0) * base
        : sqrt(base);
        return base + (2.0 * _blend - 1.0) * (d - base);
    }
}

vec3 get_blend(vec3 base, vec3 _blend) {
    if (mode == MULTIPLY) return base * _blend;
    if (mode == SCREEN) return 1 - (1 - base) * (1 - _blend);
    if (mode == OVERLAY) {
        vec3 result;
        result.r = base.r < 0.5 ? (2.0 * base.r * _blend.r) : (1.0 - 2.0 * (1.0 - base.r) * (1.0 - _blend.r));
        result.g = base.g < 0.5 ? (2.0 * base.g * _blend.g) : (1.0 - 2.0 * (1.0 - base.g) * (1.0 - _blend.g));
        result.b = base.b < 0.5 ? (2.0 * base.b * _blend.b) : (1.0 - 2.0 * (1.0 - base.b) * (1.0 - _blend.b));
        return result;
    }
    if (mode == DARKEN) return min(base, _blend);
    if (mode == LIGHTEN) return max(base, _blend);
    if (mode == COLOR_DODGE) return base / (1 - _blend);
    if (mode == COLOR_BURN) return 1 - (1 - base) / _blend;
    if (mode == HARD_LIGHT) {
        vec3 result;
        result.r = _blend.r < 0.5 ? (2.0 * base.r * _blend.r) : (1.0 - 2.0 * (1.0 - base.r) * (1.0 - _blend.r));
        result.g = _blend.g < 0.5 ? (2.0 * base.g * _blend.g) : (1.0 - 2.0 * (1.0 - base.g) * (1.0 - _blend.g));
        result.b = _blend.b < 0.5 ? (2.0 * base.b * _blend.b) : (1.0 - 2.0 * (1.0 - base.b) * (1.0 - _blend.b));
        return result;
    }
    if (mode == SOFT_LIGHT) {
        return vec3(soft_light_channel(base.r, _blend.r), soft_light_channel(base.g, _blend.g), soft_light_channel(base.b, _blend.b));
    }
    if (mode == DIFFERENCE) return abs(base - _blend);
    if (mode == EXCLUSION) return 0.5 - 2 * (base - 0.5) * (_blend - 0.5);
    if (mode == HUE) {
        vec3 base_hsl = rgb_to_hsl(base);
        vec3 blend_hsl = rgb_to_hsl(blend);
        return hsl_to_rgb(vec3(blend_hsl.x, base_hsl.y, base_hsl.z));
    }
    if (mode == SATURATION) {
        vec3 base_hsl = rgb_to_hsl(base);
        vec3 blend_hsl = rgb_to_hsl(blend);
        return hsl_to_rgb(vec3(base_hsl.x, blend_hsl.y, base_hsl.z));
    }
    if (mode == COLOR) {
        vec3 base_hsl = rgb_to_hsl(base);
        vec3 blend_hsl = rgb_to_hsl(blend);
        return hsl_to_rgb(vec3(blend_hsl.x, blend_hsl.y, base_hsl.z));
    }
    if (mode == LUMINOSITY) {
        vec3 base_hsl = rgb_to_hsl(base);
        vec3 blend_hsl = rgb_to_hsl(blend);
        return hsl_to_rgb(vec3(base_hsl.x, base_hsl.y, blend_hsl.z));
    }
    if (mode == PLUS_DARKER) return base + _blend - 1;
    if (mode == PLUS_LIGHTER) return base + _blend;
    return _blend; // For NORMAL
}

void main() {
    vec4 c = texture2D(tex, cogl_tex_coord_in[0].st);
    vec3 pix_color = c.xyz;
    vec3 color = get_blend(pix_color, vec3(red, green, blue));

    cogl_color_out = vec4(mix(pix_color, color, blend), 1.);
}