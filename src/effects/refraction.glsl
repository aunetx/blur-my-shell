// GLSL port of winaviation-tweaks/liquidass Shared/LGMetalShaderSource.m.
// The sampling and blur pass are adapted for Blur my Shell's Clutter pipeline.
uniform sampler2D tex;
uniform float width;
uniform float height;
uniform float strength;
uniform float blur_radius;
uniform float edge_size;
uniform float falloff;
uniform float corner_radius;
uniform float rim_width;
uniform float rgb_fringing;
uniform float gloss;
uniform float tint;
uniform float shadow;
uniform int texture_repeat;
uniform int blur_direction;
uniform int private_pass;
uniform float clip_x0;
uniform float clip_y0;
uniform float clip_width;
uniform float clip_height;

const float PI = 3.14159265;
const float REFRACTIVE_INDEX = 1.52;

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
    vec3 lin = vec3(
        linearizeSRGB(rgb.r),
        linearizeSRGB(rgb.g),
        linearizeSRGB(rgb.b)
    );

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

    return clamp(vec3(
        gammaCorrectSRGB(lin.r),
        gammaCorrectSRGB(lin.g),
        gammaCorrectSRGB(lin.b)
    ), 0.0, 1.0);
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

vec2 resolveUV(vec2 uv) {
    if (texture_repeat == 1) {
        vec2 mirrored = abs(fract(uv * 0.5) * 2.0 - 1.0);
        return clampUV(mirrored);
    }

    return clampUV(uv);
}

vec4 sampleBackdrop(vec2 uv) {
    return texture2D(tex, resolveUV(uv));
}

vec4 sampleGlassBackdrop(vec2 uv) {
    if (blur_radius <= 0.01)
        return sampleBackdrop(uv);

    float sigma = max(0.1, blur_radius * 0.5);
    float pixelStep = blur_direction == 1 ? 1.0 / width : 1.0 / height;
    vec2 direction = vec2(float(blur_direction), 1.0 - float(blur_direction));

    vec3 gauss;
    gauss.x = 1.0 / (sqrt(2.0 * PI) * sigma);
    gauss.y = exp(-0.5 / (sigma * sigma));
    gauss.z = gauss.y * gauss.y;

    vec4 accum = sampleBackdrop(uv) * gauss.x;
    float weightSum = gauss.x;

    gauss.xy *= gauss.yz;

    int radius = int(ceil(1.5 * sigma)) * 2;
    for (int i = 1; i <= radius; i += 2) {
        float subtotal = gauss.x;

        gauss.xy *= gauss.yz;
        subtotal += gauss.x;

        float gaussRatio = gauss.x / subtotal;
        float offset = float(i) + gaussRatio;
        vec2 uvOffset = direction * offset * pixelStep;

        accum += sampleBackdrop(uv + uvOffset) * subtotal;
        accum += sampleBackdrop(uv - uvOffset) * subtotal;
        weightSum += subtotal * 2.0;

        gauss.xy *= gauss.yz;
    }

    return accum / weightSum;
}

float roundedRectDistance(vec2 p, vec2 halfSize, float radius) {
    radius = min(radius, min(halfSize.x, halfSize.y));
    vec2 q = abs(p) - halfSize + vec2(radius);
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
}

float roundedRectAlpha(float signedDistance, float feather) {
    return 1.0 - smoothstep(-feather, feather, signedDistance);
}

vec2 roundedRectNormal(vec2 p, vec2 halfSize, float radius) {
    float h = 1.0;
    vec2 grad = vec2(
        roundedRectDistance(p + vec2(h, 0.0), halfSize, radius) -
        roundedRectDistance(p - vec2(h, 0.0), halfSize, radius),
        roundedRectDistance(p + vec2(0.0, h), halfSize, radius) -
        roundedRectDistance(p - vec2(0.0, h), halfSize, radius)
    );

    return length(grad) > 0.0001 ? normalize(grad) : vec2(0.0, -1.0);
}

struct EdgeInfo {
    float distance;
    float alpha;
    vec2 dir;
};

EdgeInfo estimateAnalyticEdge(vec2 px, vec2 halfSize, float radius, float feather) {
    vec2 centered = px - halfSize;
    float signedDistance = roundedRectDistance(centered, halfSize, radius);

    EdgeInfo info;
    info.distance = max(0.0, -signedDistance);
    info.alpha = roundedRectAlpha(signedDistance, feather);
    info.dir = roundedRectNormal(centered, halfSize, radius);
    return info;
}

vec4 sampleDispersed(vec2 sampleUV, vec2 prismOffset, float dispersion) {
    vec4 bgColor = sampleGlassBackdrop(sampleUV);
    if (dispersion <= 0.0001)
        return bgColor;

    vec2 redUV = resolveUV(sampleUV - prismOffset * 0.55);
    vec2 blueUV = resolveUV(sampleUV + prismOffset * 0.55);
    vec3 dispersed = vec3(
        sampleGlassBackdrop(mix(sampleUV, redUV, dispersion * 80.0)).r,
        bgColor.g,
        sampleGlassBackdrop(mix(sampleUV, blueUV, dispersion * 80.0)).b
    );

    bgColor.rgb = mix(bgColor.rgb, dispersed, dispersion * 0.65);
    return bgColor;
}

void main() {
    vec2 actorSize = vec2(width, height);
    vec2 actorUV = cogl_tex_coord_in[0].xy;

    if (private_pass == 1) {
        cogl_color_out = sampleGlassBackdrop(actorUV);
        return;
    }

    vec2 actorPx = actorUV * actorSize;
    vec4 bounds = clip_width < 0.0 || clip_height < 0.0
        ? vec4(0.0, 0.0, width, height)
        : vec4(clip_x0, clip_y0, clip_x0 + clip_width, clip_y0 + clip_height);

    vec2 glassSize = max(bounds.zw - bounds.xy, vec2(1.0));
    vec2 glassPx = actorPx - bounds.xy;
    vec2 halfSize = glassSize * 0.5;
    vec2 localUV = glassPx / glassSize;

    float W = glassSize.x;
    float H = glassSize.y;
    float shortestSide = min(W, H);
    float R = min(corner_radius, shortestSide * 0.5);
    float bezel = max(1.0, min(edge_size, shortestSide * 0.5));
    float glassThickness = max(0.5, edge_size * 0.55 * falloff);
    float eta = 1.0 / REFRACTIVE_INDEX;
    float feather = max(1.25, min(bezel * 0.08, 4.0));

    EdgeInfo edge = estimateAnalyticEdge(glassPx, halfSize, R, feather);
    if (edge.alpha <= 0.0) {
        cogl_color_out = vec4(0.0);
        return;
    }

    bool nearlySquare = abs(W - H) < max(4.0, shortestSide * 0.035);
    bool useCircularSurface = nearlySquare && R >= shortestSide * 0.34;
    float distFromSide = edge.distance;
    float edgeOpacity = edge.alpha;
    float edgeBand = 1.0;
    float lensBezel = bezel;
    vec2 dir = edge.dir;

    if (useCircularSurface) {
        float circleRadius = shortestSide * 0.5;
        vec2 circleCenter = glassSize * 0.5;
        vec2 fromCenter = glassPx - circleCenter;
        float circleDistance = length(fromCenter);

        if (circleDistance > circleRadius + feather) {
            cogl_color_out = vec4(0.0);
            return;
        }

        distFromSide = max(0.0, circleRadius - circleDistance);
        dir = circleDistance > 0.001 ? normalize(fromCenter) : vec2(0.0, -1.0);
        edgeOpacity = clamp(1.0 - max(0.0, circleDistance - circleRadius), 0.0, 1.0);
        lensBezel = max(bezel, circleRadius);

        float rimRadius = max(1.0, bezel * 0.35);
        edgeBand = clamp(1.0 - (distFromSide / rimRadius), 0.0, 1.0);
    } else {
        float rimRadius = max(1.0, bezel * 0.35 * max(1.0, rim_width));
        edgeBand = clamp(1.0 - (distFromSide / rimRadius), 0.0, 1.0);
    }

    float bezelRatio = useCircularSurface
        ? clamp(distFromSide / lensBezel, 0.0, 1.0)
        : clamp(distFromSide / max(1.0, bezel * 0.35 * max(1.0, rim_width)), 0.0, 1.0);
    float normDisp = edgeBand > 0.001
        ? displacementAtRatio(bezelRatio, glassThickness, lensBezel, eta)
        : 0.0;
    float dispStrength = useCircularSurface ? edgeOpacity : edgeBand;
    vec2 dispPx = -dir * normDisp * lensBezel * strength * dispStrength;

    vec2 sampleUV = (actorPx + dispPx) / actorSize;
    vec2 prismOffset = dispPx / max(actorSize, vec2(1.0));
    float dispersion = clamp(rgb_fringing * length(prismOffset) * 24.0, 0.0, 0.012);
    vec4 bgColor = sampleDispersed(resolveUV(sampleUV), prismOffset, dispersion);

    float specularAngle = -0.85;
    vec2 lightDir = vec2(cos(specularAngle), -sin(specularAngle));
    vec2 specDir = dir;
    if (!useCircularSurface) {
        vec2 centerVec = (glassPx - halfSize) / max(glassSize, vec2(1.0));
        specDir = length(centerVec) > 0.001 ? normalize(centerVec) : dir;
    }

    float specDot = dot(specDir, lightDir);
    float roundedStrokePx = clamp(shortestSide * 0.018, 2.0, 5.5);
    float strokePx = useCircularSurface ? max(2.25, shortestSide * 0.040) : roundedStrokePx;
    float circularStrokeMask = clamp(1.0 - (distFromSide / strokePx), 0.0, 1.0);
    float strokeMask = useCircularSurface ? max(edgeBand, circularStrokeMask) : edgeBand;
    float lobeStart = 0.66;
    float lobeWidth = 0.20;
    float primary = smoothstep(lobeStart, lobeStart + lobeWidth, specDot);
    float secondary = smoothstep(lobeStart, lobeStart + lobeWidth, -specDot);
    float cornerSpec = smoothstep(0.46, 0.90, abs(specDot));
    float specLobe = useCircularSurface ? cornerSpec : max(primary, secondary);
    float fresnel = pow(clamp(1.0 - bezelRatio, 0.0, 1.0), 2.2) * edgeBand;
    float specular = specLobe * strokeMask * gloss * 1.15 * edgeOpacity;
    float highlight = specular + fresnel * 0.28;

    vec3 lch = srgbToLch(clamp(bgColor.rgb, 0.0, 1.0));
    lch.x = clamp(lch.x + highlight * 18.0, 0.0, 100.0);
    lch.y = max(0.0, lch.y - highlight * 4.0);

    vec3 shapedHighlight = lchToSrgb(lch);
    bgColor.rgb = mix(bgColor.rgb, shapedHighlight, clamp(highlight * 0.48, 0.0, 1.0));
    bgColor.rgb = mix(bgColor.rgb, vec3(0.92, 0.96, 1.0), tint * 0.22);
    bgColor.rgb *= 1.0 - smoothstep(0.25, 1.0, localUV.y) * shadow * 0.20;

    cogl_color_out = vec4(clamp(bgColor.rgb, 0.0, 1.0) * edgeOpacity, edgeOpacity);
}
