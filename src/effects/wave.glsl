uniform sampler2D tex;

// Resolution
uniform float width;
uniform float height;

// Displacement
uniform float strength;
uniform float noise_scale;
uniform float grain;
uniform float saturation;
uniform float brightness;
uniform float zoom;
uniform float dispersion;

// Time
uniform float time;

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

// Implementation taken from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    
	return res*res;
}

// Implementation taken from https://thebookofshaders.com/13/
#define OCTAVES 1
float fbm(vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;

    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}

vec3 czm_luminance(vec3 color, float amount) {
    // Algorithm from Chapter 10 of Graphics Shaders.
    float lum = dot(color, vec3(0.2125, 0.7154, 0.0721));
    return mix(vec3(lum), color, amount);
}

void main() {
    vec2 resolution = vec2(width, height);
    vec2 uv = cogl_tex_coord_in[0].xy;

    vec2 half_size = resolution * 0.5;

    vec2 frag_coord = uv * resolution;
    vec2 local_coord = frag_coord / half_size; // Normalized local coordinate, [-1.0, 1.0]
    
    // Wavy displacement using fbm
    vec2 scaled_coord = frag_coord * mix(0.01, 0.1, noise_scale);
    vec2 flow = vec2(
      fbm(scaled_coord + vec2(time, 0.0)),
      fbm(scaled_coord + vec2(0.0, time))
    );
    vec2 flow_offset = 1.0 - flow * 0.5 * strength + noise(frag_coord) * grain * 0.2;
      
    // Zoom
    vec2 local_offset = frag_coord - half_size;  
    vec2 zoomed_local = local_offset / max(zoom, 0.0001);
    
    // Sampling
    vec2 sample_coord = half_size + zoomed_local * flow_offset;

    // Chromatic aberration 
    vec2 shift = local_coord * mix(0.0, 3.0, dispersion);
    vec4 base_color = getTextureColorAt(sample_coord);
    vec4 left_sample = getTextureColorAt(sample_coord - shift);
    vec4 right_sample = getTextureColorAt(sample_coord + shift);

    vec4 final_color = vec4(
        left_sample.r,
        base_color.g,
        right_sample.b,
        base_color.a
    );
    
    vec3 desaturated = czm_luminance(final_color.rgb, saturation); 
    cogl_color_out = vec4(desaturated* (1.0 + brightness * 2.0), final_color.a);
} 