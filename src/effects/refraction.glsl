// Adapted from winaviation-tweaks/liquidass Shared/LGMetalShaderSource.m.
// Blur my Shell gives us the current pipeline texture, so this GLSL version
// applies LiquidAss' bezel/refraction/specular model to that texture.
uniform sampler2D tex;
uniform float width;
uniform float height;
uniform float strength;
uniform float blur_radius;
uniform float edge_size;
uniform float falloff;
uniform float corner_radius;
uniform float rgb_fringing;
uniform float gloss;
uniform float tint;
uniform float shadow;
uniform int texture_repeat;
uniform float clip_x0;
uniform float clip_y0;
uniform float clip_width;
uniform float clip_height;

float surfaceConvexSquircle(float x) {
    return pow(1.0 - pow(1.0 - x, 4.0), 0.25);
}

vec2 refractRay(vec2 normal, float eta) {
    float cosI = -normal.y;
    float k = 1.0 - eta * eta * (1.0 - cosI * cosI);
    if (k < 0.0)
        return vec2(0.0);

    float kSqrt = sqrt(k);
    return vec2(
        -(eta * cosI + kSqrt) * normal.x,
        eta - (eta * cosI + kSqrt) * normal.y
    );
}

float rawRefraction(float bezelRatio, float glassThickness, float bezelWidth, float eta) {
    float x = clamp(bezelRatio, 0.05, 0.95);
    float y = surfaceConvexSquircle(x);
    float y2 = surfaceConvexSquircle(x + 0.001);
    float deriv = (y2 - y) / 0.001;
    float mag = sqrt(deriv * deriv + 1.0);
    vec2 n = vec2(-deriv / mag, -1.0 / mag);
    vec2 r = refractRay(n, eta);
    if (length(r) < 0.0001 || abs(r.y) < 0.0001)
        return 0.0;

    float remaining = y * bezelWidth + glassThickness;
    return r.x * (remaining / r.y);
}

float displacementAtRatio(float bezelRatio, float glassThickness, float bezelWidth, float eta) {
    float peak = rawRefraction(0.05, glassThickness, bezelWidth, eta);
    if (abs(peak) < 0.0001)
        return 0.0;

    float raw = rawRefraction(bezelRatio, glassThickness, bezelWidth, eta);
    float norm = raw / peak;
    float profileFalloff = 1.0 - smoothstep(0.0, 1.0, bezelRatio);
    return norm * profileFalloff;
}

float linearizeSRGB(float c) {
    return c > 0.04045 ? pow((c + 0.055) / 1.055, 2.4) : c / 12.92;
}

float gammaCorrectSRGB(float c) {
    return c <= 0.0031308 ? 12.92 * c : 1.055 * pow(c, 1.0 / 2.4) - 0.055;
}

vec3 srgbToXyz(vec3 rgb) {
    vec3 lin = vec3(linearizeSRGB(rgb.r), linearizeSRGB(rgb.g), linearizeSRGB(rgb.b));
    return vec3(
        dot(lin, vec3(0.4124, 0.3576, 0.1805)),
        dot(lin, vec3(0.2126, 0.7152, 0.0722)),
        dot(lin, vec3(0.0193, 0.1192, 0.9505))
    );
}

vec3 xyzToSrgb(vec3 xyz) {
    vec3 lin = vec3(
        dot(xyz, vec3( 3.2406, -1.5372, -0.4986)),
        dot(xyz, vec3(-0.9689,  1.8758,  0.0415)),
        dot(xyz, vec3( 0.0557, -0.2040,  1.0570))
    );
    return clamp(vec3(gammaCorrectSRGB(lin.r), gammaCorrectSRGB(lin.g), gammaCorrectSRGB(lin.b)), 0.0, 1.0);
}

float labF(float t) {
    return t > 0.00885645167 ? pow(t, 1.0 / 3.0) : (7.787037 * t + 16.0 / 116.0);
}

float labInvF(float t) {
    float t3 = t * t * t;
    return t3 > 0.00885645167 ? t3 : (t - 16.0 / 116.0) / 7.787037;
}

vec3 xyzToLab(vec3 xyz) {
    vec3 n = xyz / vec3(0.95047, 1.0, 1.08883);
    float fx = labF(n.x);
    float fy = labF(n.y);
    float fz = labF(n.z);
    return vec3(116.0 * fy - 16.0, 500.0 * (fx - fy), 200.0 * (fy - fz));
}

vec3 labToXyz(vec3 lab) {
    float fy = (lab.x + 16.0) / 116.0;
    float fx = fy + lab.y / 500.0;
    float fz = fy - lab.z / 200.0;
    return vec3(0.95047 * labInvF(fx), labInvF(fy), 1.08883 * labInvF(fz));
}

vec3 srgbToLch(vec3 rgb) {
    vec3 lab = xyzToLab(srgbToXyz(rgb));
    return vec3(lab.x, length(lab.yz), atan(lab.z, lab.y));
}

vec3 lchToSrgb(vec3 lch) {
    vec3 lab = vec3(lch.x, cos(lch.z) * lch.y, sin(lch.z) * lch.y);
    return xyzToSrgb(labToXyz(lab));
}

float luminance(vec3 color) {
    return dot(color, vec3(0.2126, 0.7152, 0.0722));
}

vec2 clampUV(vec2 uv) {
    vec2 px = vec2(1.5 / width, 1.5 / height);
    return clamp(uv, px, vec2(1.0) - px);
}

vec2 sampleUV(vec2 uv) {
    if (texture_repeat == 1) {
        vec2 mirrored = abs(fract(uv * 0.5) * 2.0 - 1.0);
        return clampUV(mirrored);
    }

    return clampUV(uv);
}

vec4 sampleGlassBackdrop(vec2 uv) {
    if (blur_radius <= 0.01)
        return texture2D(tex, sampleUV(uv));

    float radius = min(blur_radius, min(width, height) * 0.18);
    vec2 step = radius / vec2(width, height);
    vec4 color = texture2D(tex, sampleUV(uv)) * 0.16;

    color += texture2D(tex, sampleUV(uv + vec2( 0.40,  0.00) * step)) * 0.10;
    color += texture2D(tex, sampleUV(uv + vec2(-0.40,  0.00) * step)) * 0.10;
    color += texture2D(tex, sampleUV(uv + vec2( 0.00,  0.40) * step)) * 0.10;
    color += texture2D(tex, sampleUV(uv + vec2( 0.00, -0.40) * step)) * 0.10;

    color += texture2D(tex, sampleUV(uv + vec2( 0.46,  0.46) * step)) * 0.075;
    color += texture2D(tex, sampleUV(uv + vec2(-0.46,  0.46) * step)) * 0.075;
    color += texture2D(tex, sampleUV(uv + vec2( 0.46, -0.46) * step)) * 0.075;
    color += texture2D(tex, sampleUV(uv + vec2(-0.46, -0.46) * step)) * 0.075;

    color += texture2D(tex, sampleUV(uv + vec2( 0.92,  0.18) * step)) * 0.045;
    color += texture2D(tex, sampleUV(uv + vec2(-0.92, -0.18) * step)) * 0.045;
    color += texture2D(tex, sampleUV(uv + vec2( 0.18, -0.92) * step)) * 0.045;
    color += texture2D(tex, sampleUV(uv + vec2(-0.18,  0.92) * step)) * 0.045;

    color += texture2D(tex, sampleUV(uv + vec2( 1.20,  0.70) * step)) * 0.025;
    color += texture2D(tex, sampleUV(uv + vec2(-1.20, -0.70) * step)) * 0.025;
    color += texture2D(tex, sampleUV(uv + vec2( 0.70, -1.20) * step)) * 0.025;
    color += texture2D(tex, sampleUV(uv + vec2(-0.70,  1.20) * step)) * 0.025;

    return color / 1.14;
}

float roundedRectDist(vec2 p, vec2 halfSize, float radius) {
    radius = min(radius, min(halfSize.x, halfSize.y));
    vec2 q = abs(p) - halfSize + vec2(radius);
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
}

vec2 roundedRectNormal(vec2 p, vec2 halfSize, float radius) {
    float h = 1.0;
    vec2 grad = vec2(
        roundedRectDist(p + vec2(h, 0.0), halfSize, radius) -
        roundedRectDist(p - vec2(h, 0.0), halfSize, radius),
        roundedRectDist(p + vec2(0.0, h), halfSize, radius) -
        roundedRectDist(p - vec2(0.0, h), halfSize, radius)
    );
    return length(grad) > 0.0001 ? normalize(grad) : vec2(0.0, -1.0);
}

vec4 sampleDispersed(vec2 uv, vec2 prismOffset, float dispersion) {
    vec4 base = sampleGlassBackdrop(sampleUV(uv));
    if (dispersion <= 0.0001)
        return base;

    vec2 redUV = sampleUV(uv - prismOffset * (0.75 + dispersion * 7.0));
    vec2 blueUV = sampleUV(uv + prismOffset * (0.75 + dispersion * 7.0));
    vec3 dispersed = vec3(
        sampleGlassBackdrop(redUV).r,
        base.g,
        sampleGlassBackdrop(blueUV).b
    );

    base.rgb = mix(base.rgb, dispersed, clamp(dispersion, 0.0, 1.0));
    return base;
}

vec2 wallpaperGlossDirection(vec2 uv, vec2 fallbackDir) {
    vec2 px = 1.0 / vec2(width, height);
    vec2 radius = px * max(12.0, min(min(width, height) * 0.04, blur_radius * 1.6 + 10.0));

    float left = luminance(sampleGlassBackdrop(uv - vec2(radius.x, 0.0)).rgb);
    float right = luminance(sampleGlassBackdrop(uv + vec2(radius.x, 0.0)).rgb);
    float top = luminance(sampleGlassBackdrop(uv - vec2(0.0, radius.y)).rgb);
    float bottom = luminance(sampleGlassBackdrop(uv + vec2(0.0, radius.y)).rgb);
    vec2 gradient = vec2(right - left, bottom - top);
    float contrast = length(gradient);

    if (contrast < 0.015)
        return fallbackDir;

    vec2 backdropDir = normalize(vec2(-gradient.x, gradient.y));
    return normalize(mix(fallbackDir, backdropDir, smoothstep(0.015, 0.13, contrast)));
}

void main() {
    vec2 actorSize = vec2(width, height);
    vec2 actorUV = cogl_tex_coord_in[0].xy;
    vec2 actorPx = actorUV * actorSize;

    vec4 bounds = clip_width < 0.0 || clip_height < 0.0
        ? vec4(0.0, 0.0, width, height)
        : vec4(clip_x0, clip_y0, clip_x0 + clip_width, clip_y0 + clip_height);

    vec2 glassSize = max(bounds.zw - bounds.xy, vec2(1.0));
    vec2 glassPx = actorPx - bounds.xy;
    vec2 localUV = glassPx / glassSize;
    vec2 halfSize = glassSize * 0.5;
    float W = glassSize.x;
    float H = glassSize.y;
    float R = min(corner_radius, min(W, H) * 0.5);
    float bezel = max(1.0, min(edge_size, min(W, H) * 0.5));
    float glassThickness = max(0.5, edge_size * 0.55 * falloff);
    float eta = 1.0 / 1.52;

    vec2 centered = glassPx - halfSize;
    float signedDist = roundedRectDist(centered, halfSize, R);
    float feather = max(1.25, min(bezel * 0.08, 4.0));
    float edgeOpacity = 1.0 - smoothstep(-feather, feather, signedDist);
    if (edgeOpacity <= 0.0) {
        cogl_color_out = vec4(0.0);
        return;
    }

    float distFromSide = max(0.0, -signedDist);
    vec2 dir = roundedRectNormal(centered, halfSize, R);

    float bezelRatio = clamp(distFromSide / bezel, 0.0, 1.0);
    float normDisp = distFromSide < bezel
        ? displacementAtRatio(bezelRatio, glassThickness, bezel, eta)
        : 0.0;
    float dispStrength = edgeOpacity * strength;
    vec2 dispPx = -dir * normDisp * bezel * dispStrength;
    vec2 sample = sampleUV((actorPx + dispPx) / actorSize);

    vec2 prismOffset = dispPx / max(actorSize, vec2(1.0));
    float dispersion = clamp(rgb_fringing * length(prismOffset) * 96.0, 0.0, 0.85);
    vec4 bgColor = sampleDispersed(sample, prismOffset, dispersion);

    float specularAngle = -0.85;
    vec2 fallbackLightDir = vec2(cos(specularAngle), -sin(specularAngle));
    vec2 lightDir = wallpaperGlossDirection(actorUV, fallbackLightDir);
    float specDot = dot(dir, lightDir);
    float strokePx = 2.0;
    float strokeMask = clamp(1.0 - (distFromSide / strokePx), 0.0, 1.0);
    float lobeStart = 0.66;
    float lobeWidth = 0.20;
    float primary = smoothstep(lobeStart, lobeStart + lobeWidth, specDot);
    float secondary = smoothstep(lobeStart, lobeStart + lobeWidth, -specDot);
    float roundSpec = smoothstep(0.46, 0.90, abs(specDot));
    float cornerWeight = 1.0 - smoothstep(R * 0.45, R, min(min(glassPx.x, W - glassPx.x), min(glassPx.y, H - glassPx.y)));
    float specLobe = mix(primary + secondary, roundSpec, cornerWeight);
    float fresnel = pow(clamp(1.0 - bezelRatio, 0.0, 1.0), 2.2) * edgeOpacity;
    float specular = specLobe * strokeMask * gloss * 2.15 * edgeOpacity;
    float highlight = specular + fresnel * 0.34;

    vec3 lch = srgbToLch(clamp(bgColor.rgb, 0.0, 1.0));
    lch.x = clamp(lch.x + highlight * 36.0, 0.0, 100.0);
    lch.y = max(0.0, lch.y - highlight * 9.0);
    vec3 shapedHighlight = lchToSrgb(lch);
    bgColor.rgb = mix(bgColor.rgb, shapedHighlight, clamp(highlight * 0.70, 0.0, 1.0));

    float bodyMix = (1.0 - smoothstep(0.0, bezel, distFromSide)) * 0.10;
    bgColor.rgb = mix(bgColor.rgb, vec3(0.92, 0.96, 1.0), tint * 0.22 + bodyMix);
    bgColor.rgb *= 1.0 - smoothstep(0.25, 1.0, localUV.y) * shadow * 0.20;

    cogl_color_out = vec4(clamp(bgColor.rgb, 0.0, 1.0) * edgeOpacity, min(bgColor.a, edgeOpacity));
}
