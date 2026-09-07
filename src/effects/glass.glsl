uniform sampler2D tex;

// Resolution
uniform float width;
uniform float height;

// Clipping
uniform float clip_x0;
uniform float clip_y0;
uniform float clip_width;
uniform float clip_height;

// Glass
uniform float radius;
uniform float refraction;
uniform float depth;
uniform float dispersion;
uniform float splay;

// Light
uniform float light_angle;
uniform float light_intensity;
uniform float light_ambient;
uniform float light_depth;
uniform float light_feather;

float sdf(vec2 p, vec2 b, float r) {
    vec2 d = abs(p) - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;   
}

float safe_sqrt(float val) {
    return sqrt(max(val, 0.0));
}

float nonzero(float val){
    return max(val, 000.1);
}

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
    // TODO: Clipping still got cut off
    float x0 = clip_x0 + 2.5;
    float y0 = clip_y0 + 2.0;
    float w = clip_width - 4.0;
    float h = clip_height - 3.0;

    // No clip rect set, fall back to full texture size
    if(clip_width < 0.0)
        w = width - 4.0;
    
    if(clip_height < 0.0)
        h = height - 3.0;
    
    return vec4(x0, y0, nonzero(w), nonzero(h));
}

void main() {
    vec2 resolution = vec2(width, height);
    vec2 uv = cogl_tex_coord_in[0].xy;

    vec4 bounding = get_clipped_bounding();

    vec2 glass_size = bounding.zw;
    vec2 half_size = glass_size * 0.5;
    float min_size = min(glass_size.x, glass_size.y);

    vec2 frag_coord = uv * resolution;
    vec2 glass_coord = frag_coord - (bounding.xy + half_size);

    float raw_sdf = sdf(glass_coord, half_size, radius);
    float inversed_sdf = -raw_sdf / min_size ;

    // Simple AA via smoothstep  
    float border_alpha = radius > 0.0 ? 1.0 - smoothstep(-0.5, 0.5, raw_sdf) : 1.0;
    if(border_alpha <= 0.0) 
        discard;   

    // Normalized local coordinate, [-1.0, 1.0]
    vec2 local_coord = glass_coord / half_size; 

    float max_depth = min(min_size * 0.5, 50.0);

    // Remap SDF to distance from the center point, 0.0 = center, 1.0 = border
    float edge_falloff = min(nonzero(depth), max_depth) / min_size;
    float dist_from_center = 1.0 - clamp(inversed_sdf / min(edge_falloff, 0.4), 0.0, 1.0); 

    // Apply displacement using sphere projection formula: y = 1.0 - sqrt(1.0 - x²)
    float sphere = 1.0 - safe_sqrt(1.0 - pow(dist_from_center, 2.0));
    float displacement = sphere * refraction;

    // Isolate wide axis refraction to edge band only, suppressing the flat center zone
    // Prevents wide shapes from refracting inward like an oval lens at splay = 0.0
    vec2 edge_mask = smoothstep(half_size - min_size, half_size, abs(glass_coord));
    vec2 reach = vec2(max_depth) * mix(edge_mask, vec2(1.0), splay) * 1.5;

    // Sample background at offset position to create the warping effect
    vec2 offset = local_coord * displacement * reach;
    vec2 glass_color_coord = frag_coord - offset;

    // Apply chromatic aberration to refracted edges only
    float edge = smoothstep(0.0, 0.02, inversed_sdf);
    vec2 shift = local_coord * edge * mix(0.0, 3.0, dispersion);
    vec4 base_color = getTextureColorAt(glass_color_coord);
    vec4 left_sample = getTextureColorAt(glass_color_coord - shift);
    vec4 right_sample = getTextureColorAt(glass_color_coord + shift);

    vec4 final_color = vec4(
      left_sample.r,
      base_color.g,
      right_sample.b,
      base_color.a
    );
 
    // Light effect
    float angle = atan(-local_coord.y, local_coord.x);
    float rim_light = sin(angle + light_angle);

    float hard_dist = 1.0 - clamp(inversed_sdf * min_size / nonzero(light_depth), 0.0, 1.0);
    float hard_mask = smoothstep(0.0, nonzero(light_feather) * 2.0, hard_dist);
    float soft_mask = smoothstep(0.0, 5.0, dist_from_center);

    float shine  = clamp( rim_light, 0.0, 1.0);
    float shadow = clamp(-rim_light, 0.0, 0.7);

    float rim_lit  = pow(shine,  4.0) * 0.5 + shine  * 0.75;
    float rim_fill = pow(shadow, 4.0) * 0.5 + shadow * 0.75;
    float rim_combined = rim_lit + rim_fill + light_ambient;

    final_color.rgb += hard_mask * light_intensity * rim_combined;
    final_color.rgb -= soft_mask * light_intensity * shine * 0.15;
    final_color.rgb += soft_mask * light_intensity * shadow * 0.65;

    cogl_color_out = mix(getTextureColorAt(frag_coord), final_color, border_alpha);
} 