uniform sampler2D tex;

// Resolution
uniform float width;
uniform float height;

// Clipping
uniform float clip_x0;
uniform float clip_y0;
uniform float clip_width;
uniform float clip_height;

// Vapor
uniform float frequency;
uniform float amplitude;
uniform int octaves;

uniform int vapor_octaves;
uniform float vapor_speed;

uniform float grain;
uniform float zoom;
uniform float dispersion;

uniform float saturation;
uniform float brightness;

// Time
uniform float time;

// Macro Constant
#define TIME_FACTOR 0.1
#define GLASS_REFERENCE_SIZE 300.0

vec4 getTextureColorAt(vec2 coord) {
    vec2 uv = coord / vec2(width, height);

    if (uv.x < 2. / width)
        uv.x = 2. / width;

    if (uv.y < 2. / height)
        uv.y = 2. / height;

    if (uv.x > 1. - 3. / width)
        uv.x = 1. - 3. / width;

    if (uv.y > 1. - 3. / height)
        uv.y = 1. - 3. / height;

    return texture2D(tex, uv);
}

vec4 get_clipped_bounding() {
    float x0 = clip_x0;
    float y0 = clip_y0;
    float w = clip_width;
    float h = clip_height;


    if(clip_width < 0.0)
        w = width;
    
    if(clip_height < 0.0)
        h = height;
    
    return vec4(x0, y0, w, h);
}

// Simplex noise implementation from webgl-noise:
// https://github.com/ashima/webgl-noise/blob/master/src/noise2D.glsl
// 
// Copyright (C) 2011 by Ashima Arts (Simplex noise)
// Copyright (C) 2011-2016 by Stefan Gustavson (Classic noise and others)
// 
// MIT LICENSE:
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
//    - https://github.com/ashima/webgl-noise/blob/master/LICENSE
//    - https://github.com/stegu/webgl-noise/blob/master/LICENSE

vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
    return mod289((x * 34.0 + 10.0) * x);
}

float snoise(vec2 v) {
    const vec4 C = vec4(
        0.211324865405187, // (3.0-sqrt(3.0))/6.0
        0.366025403784439, // 0.5*(sqrt(3.0)-1.0)
        -0.577350269189626, // -1.0 + 2.0 * C.x
        0.024390243902439
    ); // 1.0 / 41.0

    // First corner
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);

    // Other corners
    vec2 i1;
    i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;

    // Permutations
    i = mod289(i); // Avoid truncation effects in permutation
    vec3 p = permute(
        permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0)
    );

    vec3 m = max(
        0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)),
        0.0
    );
    m = m * m;
    m = m * m;

    // Gradients: 41 points uniformly over a line, mapped onto a diamond.
    // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    // Normalise gradients implicitly by scaling m
    // Approximation of: m *= inversesqrt( a0*a0 + h*h );
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

    // Compute final noise value at P
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float smoothAbs(float x, float k) {
    return sqrt(x * x + k * k) - k;
}

float fbm(
    vec2 coord,
    float amplitude,
    float frequency,
    int octaves,
    bool ridged
) {
    // Tuned props
    float a = 2.0 * amplitude;
    float f = 0.01 * frequency;
    float value = 0.0;

    for (int i = 0; i < octaves; i++) {
        float n = snoise(coord * f);
        value += a * (ridged ? smoothAbs(n, 1.5) : n);
        f *= 2.0; // lacunarity: frequency growth per octave
        a *= 0.5; // persistence: amplitude falloff per octave
    }

    return value;
}

vec3 czm_luminance(vec3 color, float amount) {
    float lum = dot(color, vec3(0.2125, 0.7154, 0.0721));
    return mix(vec3(lum), color, amount);
}

void main() {
    vec2 resolution = vec2(width, height);
    vec2 uv = cogl_tex_coord_in[0].xy;
    vec2 frag_coord = uv * resolution;

    vec4 bounding = get_clipped_bounding();

    vec2 surface_size = bounding.zw;
    vec2 surface_half = surface_size * 0.5;
    vec2 surface_center = bounding.xy + surface_half;
    vec2 surface_coord = frag_coord - surface_center;
    vec2 surface_local = surface_coord / surface_half;

    // Don't render outside the surface bounding
    if (
        surface_local.x < -1.0 ||
        surface_local.x > 1.0 ||
        surface_local.y < -1.0 ||
        surface_local.y > 1.0
    ) {
        discard;
    }

    float surface_max_size = max(surface_size.x, surface_size.y);
    float glass_scale = max(0.15, GLASS_REFERENCE_SIZE / surface_max_size);

    // Scale the surface based on reference size,
    // make it more subtle on smaller size and less subtle on bigger size
    vec2 surface_space = surface_coord * glass_scale;

    // This used to reduce displacement on bigger size, make the visual looks smoother
    float surface_large_factor = min(1.0, glass_scale);


    // Scaled Time;
    float scaled_time = time * TIME_FACTOR;

    // Wave: Big displacement on surface to create wavy looking like blob
    vec2 wave_displacement = vec2(
        fbm(
            surface_space + vec2(scaled_time, 0.0),
            amplitude * surface_large_factor,
            frequency * surface_large_factor,
            octaves,
            false
        ),
        fbm(
            surface_space + vec2(0.0, scaled_time),
            amplitude * surface_large_factor,
            frequency * surface_large_factor,
            octaves,
            false
        )
    );

    vec2 wave_offset = 1.0 - wave_displacement * 0.5;

    // Grain Texture
    if (grain > 0.0) {
        wave_offset += snoise(frag_coord) * grain * 0.05;
    }

    // Vapor: Smaller displacement, rough and misty looking texture
    float vapor_frequency = frequency * 3.0 * surface_large_factor;
    float vapor_amplitude = amplitude * 1.5 * surface_large_factor;

    float vapor_displacement =
        1.0 -
        fbm(
            surface_coord + vec2(0.0, scaled_time * vapor_speed),
            vapor_amplitude,
            vapor_frequency,
            vapor_octaves,
            true
        );

    // Zoom: Relative to surface
    vec2 zoomed_local = surface_coord / max(zoom, 0.001);

    // Sampling: Combine all effect;
    vec2 sample_coord =
        surface_center + zoomed_local * vapor_displacement * wave_offset;

    // Chromatic aberration
    vec4 base_color = getTextureColorAt(sample_coord);
    vec4 final_color = base_color;

    if (dispersion > 0.0) {
        vec2 shift = surface_local * mix(0.0, 3.0, dispersion);
        vec4 left_sample = getTextureColorAt(sample_coord - shift);
        vec4 right_sample = getTextureColorAt(sample_coord + shift);

        final_color = vec4(
            left_sample.r,
            base_color.g,
            right_sample.b,
            base_color.a
        );
    }
    
    // Simple color effect
    vec3 desaturated = czm_luminance(final_color.rgb, saturation);
    cogl_color_out = vec4(desaturated * brightness, final_color.a);
} 


