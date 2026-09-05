// GLSL port of winaviation-tweaks/liquidass LiquidAssBackboardd/Tweak.mm kShaderSrc.
uniform sampler2D tex;
uniform float width;
uniform float height;
uniform float strength;
uniform float edge_size;
uniform float falloff;
uniform float corner_radius;
uniform float rim_width;
uniform float rgb_fringing;
uniform float gloss;
uniform float tint;
uniform float tint_r;
uniform float tint_g;
uniform float tint_b;
uniform float tint_a;
uniform float backdrop_zoom;
uniform float shadow;
uniform float opacity_factor;
uniform int texture_repeat;
uniform float clip_x0;
uniform float clip_y0;
uniform float clip_width;
uniform float clip_height;

const float REFRACTIVE_INDEX = 1.52;
const float DISPERSION_SCALE = 20.0;

const float kDispersionRedIndex = 0.98;
const float kDispersionGreenIndex = 1.00;
const float kDispersionBlueIndex = 1.02;

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

float fresnelAtRatio(float bezelRatio, float refractiveIndex) {
    float x = clamp(bezelRatio, 0.02, 0.98);
    float y0 = surfaceConvexSquircle(max(0.001, x - 0.001));
    float y1 = surfaceConvexSquircle(min(0.999, x + 0.001));
    float slope = (y1 - y0) / 0.002;
    float cosTheta = inversesqrt(1.0 + slope * slope);
    float f0Base = (refractiveIndex - 1.0) / (refractiveIndex + 1.0);
    float f0 = f0Base * f0Base;
    float grazing = pow(1.0 - clamp(cosTheta, 0.0, 1.0), 5.0);
    float fresnel = f0 + (1.0 - f0) * grazing;
    return fresnel * (1.0 - smoothstep(0.0, 1.0, bezelRatio));
}

float dispersionOffsetScale(float channelIndex, float strengthValue) {
    return 1.0 - (channelIndex - 1.0) * strengthValue;
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
        vec2 mirrored = 1.0 - abs(fract(uv * 0.5) * 2.0 - 1.0);
        return clampUV(mirrored);
    }

    return clampUV(uv);
}

vec4 sampleBackdrop(vec2 uv) {
    return texture2D(tex, resolveUV(uv));
}

vec4 sampleGlassBackdrop(vec2 uv) {
    vec4 sampleColor = sampleBackdrop(uv);
    return vec4(sampleColor.a > 0.0001 ? sampleColor.rgb / sampleColor.a : vec3(0.0), sampleColor.a);
}

float roundedBoxDistance(vec2 p, vec2 halfSize, float radius) {
    radius = min(radius, min(halfSize.x, halfSize.y));
    vec2 q = abs(p) - halfSize + vec2(radius);
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
}

float edgeCoverage(float signedDistance) {
    float antialiasWidth = max(fwidth(signedDistance), 0.0001);
    return 1.0 - smoothstep(
        -antialiasWidth * 0.75,
        antialiasWidth * 0.75,
        signedDistance
    );
}

struct EdgeInfo {
    float distance;
    float alpha;
    vec2 dir;
};

EdgeInfo estimateAnalyticEdge(vec2 px, vec2 halfSize, float radius) {
    vec2 p = px - halfSize;
    vec2 core = max(halfSize - vec2(radius), vec2(0.0));
    float signedDistance = roundedBoxDistance(p, halfSize, radius);

    EdgeInfo info;
    info.distance = max(0.0, -signedDistance);
    info.alpha = edgeCoverage(signedDistance);

    vec2 nearestCore = clamp(p, -core, core);
    vec2 normalDelta = p - nearestCore;

    float normalLength = length(normalDelta);

    if (normalLength > 0.001) {
        info.dir = normalDelta / normalLength;
    } else {
        vec2 lensPx = px;
        float dL = lensPx.x;
        float dR = halfSize.x * 2.0 - lensPx.x;
        float dT = lensPx.y;
        float dB = halfSize.y * 2.0 - lensPx.y;
        float dm = min(min(dL, dR), min(dT, dB));

        info.dir = vec2(
            (dL < dR && dL == dm) ? -1.0 : (dR <= dL && dR == dm) ? 1.0 : 0.0,
            (dT < dB && dT == dm) ? -1.0 : (dB <= dT && dB == dm) ? 1.0 : 0.0
        );
    }

    return info;
}

vec2 backdropSampleUV(vec2 sampleUV, vec2 displacementPx) {
    vec2 displaced = sampleUV + displacementPx / vec2(width, height);
    float zoom = max(backdrop_zoom, 0.01);

    displaced = vec2(0.5) + (displaced - vec2(0.5)) / zoom;
    return displaced;
}

vec4 sampleDispersed(vec2 sampleUV, vec2 dispPx, float dispersion) {
    float greenScale = dispersionOffsetScale(kDispersionGreenIndex, dispersion);
    vec2 greenUV = backdropSampleUV(sampleUV, dispPx * greenScale);
    vec4 greenSample = sampleGlassBackdrop(greenUV);

    vec4 bg = greenSample;
    if (dispersion > 0.001 && dot(dispPx, dispPx) > 0.0001) {
        float redScale = dispersionOffsetScale(kDispersionRedIndex, dispersion);
        float blueScale = dispersionOffsetScale(kDispersionBlueIndex, dispersion);

        vec2 redUV = backdropSampleUV(sampleUV, dispPx * redScale);
        vec2 blueUV = backdropSampleUV(sampleUV, dispPx * blueScale);
        vec4 redSample = sampleGlassBackdrop(redUV);
        vec4 blueSample = sampleGlassBackdrop(blueUV);

        bg.r = redSample.r;
        bg.g = greenSample.g;
        bg.b = blueSample.b;
        bg.a = greenSample.a;
    }
    return bg;
}

vec3 applyTintAndShadow(vec3 sample, vec2 localUV) {
    vec3 tintColor = vec3(tint_r, tint_g, tint_b);
    vec3 outRGB = mix(sample, tintColor, tint * tint_a);

    outRGB *= 1.0 - smoothstep(0.25, 1.0, localUV.y) * shadow * 0.20;

    return clamp(outRGB, 0.0, 1.0);
}

void main() {
    vec2 actorSize = vec2(width, height);
    vec2 actorUV = cogl_tex_coord_in[0].xy;

    vec2 actorPx = actorUV * actorSize;
    vec4 bounds = clip_width < 0.0 || clip_height < 0.0
        ? vec4(0.0, 0.0, width, height)
        : vec4(clip_x0, clip_y0, clip_x0 + clip_width, clip_y0 + clip_height);

    vec2 pixelSize = max(fwidth(actorPx), vec2(0.0001));
    bounds.xy += pixelSize * 0.5;
    bounds.zw -= pixelSize * 0.5;

    vec2 glassSize = max(bounds.zw - bounds.xy, vec2(1.0));
    vec2 glassPx = actorPx - bounds.xy;
    vec2 halfSize = glassSize * 0.5;
    vec2 localUV = glassPx / glassSize;

    float W = glassSize.x;
    float H = glassSize.y;
    float shortestSide = min(W, H);
    float R = clamp(corner_radius, 0.0, shortestSide * 0.5);
    float bezel = max(1.0, min(edge_size, shortestSide * 0.5));
    float glassThickness = max(0.5, edge_size * 0.55 * falloff);
    float eta = 1.0 / REFRACTIVE_INDEX;

    bool nearlySquare = abs(W - H) < max(4.0, shortestSide * 0.035);
    bool useCircularSurface = nearlySquare && R >= shortestSide * 0.5 - 0.5;

    EdgeInfo edge = estimateAnalyticEdge(glassPx, halfSize, R);
    if (edge.alpha <= 0.0) {
        cogl_color_out = vec4(0.0);
        return;
    }

    float distFromSide = edge.distance;
    float edgeOpacity = edge.alpha;
    float edgeBand = 1.0;
    float refractionBand = bezel;
    vec2 dir = edge.dir;

    if (useCircularSurface) {
        float circleRadius = shortestSide * 0.5;
        vec2 circleCenter = glassSize * 0.5;
        vec2 fromCenter = glassPx - circleCenter;
        float circleDistance = length(fromCenter);

        if (circleDistance > circleRadius + 1.0) {
            cogl_color_out = vec4(0.0);
            return;
        }

        distFromSide = max(0.0, circleRadius - circleDistance);
        dir = circleDistance > 0.001 ? normalize(fromCenter) : vec2(0.0, -1.0);
        edgeOpacity = edgeCoverage(circleDistance - circleRadius);

        float rimRadius = max(1.0, bezel * 0.35);
        refractionBand = rimRadius;
        edgeBand = clamp(1.0 - (distFromSide / rimRadius), 0.0, 1.0);
    } else {
        float rimRadius = max(1.0, bezel * 0.35 * max(1.0, rim_width));
        rimRadius = min(rimRadius, max(1.0, R));
        refractionBand = rimRadius;
        edgeBand = clamp(1.0 - (distFromSide / rimRadius), 0.0, 1.0);
    }

    if (!useCircularSurface && R < shortestSide * 0.45 && distFromSide >= refractionBand) {
        vec4 sourceSample = sampleGlassBackdrop(actorUV);
        vec2 flatUV = backdropSampleUV(actorUV, vec2(0.0));
        vec4 flatSample = sampleGlassBackdrop(flatUV);
        float finalOpacity = edgeOpacity * mix(sourceSample.a, flatSample.a, opacity_factor);
        vec3 effectRGB = applyTintAndShadow(flatSample.rgb, localUV);
        vec3 outRGB = mix(sourceSample.rgb, effectRGB, opacity_factor);

        cogl_color_out = vec4(outRGB * finalOpacity, finalOpacity);
        return;
    }

    float bezelRatio = clamp(distFromSide / refractionBand, 0.0, 1.0);
    float normDisp = distFromSide < refractionBand
        ? displacementAtRatio(bezelRatio, glassThickness, refractionBand, eta)
        : 0.0;
    float dispStrength = useCircularSurface ? edgeOpacity : edgeBand;
    vec2 dispPx = -dir * normDisp * refractionBand * strength * dispStrength;

    float dispersion = clamp(rgb_fringing * DISPERSION_SCALE, 0.0, 20.0);
    vec4 sourceColor = sampleGlassBackdrop(actorUV);
    vec4 bgColor = sampleDispersed(actorUV, dispPx, dispersion);

    vec3 outRGB = mix(bgColor.rgb, vec3(tint_r, tint_g, tint_b), tint * tint_a);
    float fresnel = fresnelAtRatio(bezelRatio, REFRACTIVE_INDEX) * edgeOpacity;
    float bgLuminance = luminance(outRGB);
    float glare = clamp(fresnel * 0.70 * mix(0.40, 1.0, bgLuminance), 0.0, 0.18)
        * clamp(gloss, 0.0, 1.0);
    outRGB = 1.0 - (1.0 - outRGB) * (1.0 - glare);
    outRGB *= 1.0 - smoothstep(0.25, 1.0, localUV.y) * shadow * 0.20;
    outRGB = mix(sourceColor.rgb, outRGB, opacity_factor);

    float finalOpacity = edgeOpacity * mix(sourceColor.a, bgColor.a, opacity_factor);
    cogl_color_out = vec4(clamp(outRGB, 0.0, 1.0) * finalOpacity, finalOpacity);
}
