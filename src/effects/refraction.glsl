// GLSL port of liquidass 0.1.1b (Tweak.mm kShaderSrc), blended on Blur my
// Shell's clutter pipeline.
//
// Original shader: Liquid (Gl)ass by winaviation
// (https://github.com/winaviation-tweaks/liquid-ass)
// This is modified/adapted material. The copyright holder explicitly granted
// in email and in pull request #987 (2026-09-10) that the 0.1.1b shader and
// this GLSL port may be redistributed as part of Blur my Shell under the
// GNU GPL v3, with that permission extending to downstream users. Attribution
// to the original work must be retained.
//
// Optional specular glare (off by default) is an addition beyond the 0.1.1b
// port and is not part of the original shader.
//
// Original upstream license: CC BY-NC 4.0
//   https://creativecommons.org/licenses/by-nc/4.0/
// When this material is shared outside of Blur my Shell, the CC BY-NC 4.0
// conditions still apply: attribution (Section 3(a)) and NonCommercial
// use only (Section 2(a)(1)). The Licensor offers the material as-is and
// disclaims all warranties and liability (Section 5).
uniform sampler2D tex;
uniform float width;
uniform float height;
uniform float strength;
uniform float edge_size;
uniform float falloff;
uniform float corner_radius;
uniform int corners_top;
uniform int corners_bottom;
uniform float rim_width;
uniform float rgb_fringing;
uniform float gloss;
uniform float fresnel_angle;
uniform float fresnel_width;
uniform float specular_strength;
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

const float DISPERSION_SCALE = 20.0;

float quartzGlassEdgeProfile(float distanceFromEdge,
                             float refractionHeight) {
    float t = clamp(distanceFromEdge / max(refractionHeight, 0.001), 0.0, 1.0);
    return 1.0 - sqrt(t * (2.0 - t));
}

float quartzGlassHighlight(float distanceFromEdge,
                           float bezelWidth,
                           vec2 surfaceNormal,
                           float strength,
                           float angle) {
    float normalLength = max(length(surfaceNormal), 0.001);
    vec2 normal = surfaceNormal / normalLength;
    float ringWidth = clamp(bezelWidth * 0.24 * fresnel_width, 1.0,
                            2.5 * fresnel_width);
    float aa = 1.0;

    float outerCoverage = clamp(distanceFromEdge / aa + 0.5, 0.0, 1.0);
    float radial = clamp(distanceFromEdge / ringWidth, 0.0, 1.0);
    float ring;
    if (ringWidth < 3.0) {
        float innerCoverage = clamp((ringWidth - distanceFromEdge) / aa + 0.5, 0.0, 1.0);
        ring = outerCoverage * innerCoverage;
        ring *= 1.0 - radial;
    } else {
        float decayRate = 3.0;
        ring = outerCoverage * exp(-decayRate * radial);
    }

    vec2 lightDirection = vec2(cos(angle), sin(angle));
    float cosT = clamp(dot(lightDirection, normal), 0.0, 1.0);
    float fresnelBase = 0.04;
    float schlick = fresnelBase + (1.0 - fresnelBase) * pow(1.0 - cosT, 3.0);
    float directional = clamp(0.05 + 0.95 * schlick, 0.0, 1.0);
    float highlight = ring * directional;

    float oppositeAttenuation = 1.35;
    highlight /= max(1.0 + (1.0 - highlight) * oppositeAttenuation,
                     0.0001);
    return highlight * max(strength, 0.0);
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
        -antialiasWidth * 0.5,
        antialiasWidth * 0.5,
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

vec4 sampleDispersed(vec2 sampleUV, vec2 dispPx, vec2 aberrationPx,
                     float dispersion) {
    vec2 greenUV = backdropSampleUV(sampleUV, dispPx);
    vec4 greenSample = sampleGlassBackdrop(greenUV);

    vec4 fallback = vec4(0.0);
    if (greenSample.a < 0.01) {
        fallback = sampleGlassBackdrop(sampleUV);
        if (fallback.a < 0.01)
            return vec4(0.0);
        greenSample = fallback;
    }

    vec4 bg = greenSample;
    if (dispersion > 0.001 && dot(dispPx, dispPx) > 0.0001) {
        vec3 accumulated = vec3(0.0);
        float accumulatedAlpha = 0.0;

        for (int i = 0; i < 3; i++) {
            float weight = 1.0 - float(i) / 3.0;
            vec2 uv = backdropSampleUV(sampleUV,
                                       dispPx + aberrationPx * weight);
            vec4 sample = sampleGlassBackdrop(uv);
            if (sample.a < 0.01)
                sample = fallback;
            accumulated.r += sample.r * weight;
            accumulated.g += sample.g * (1.0 - weight);
            accumulatedAlpha += sample.a;
        }

        for (int i = 0; i < 4; i++) {
            float weight = float(i) / 3.0;
            vec2 uv = backdropSampleUV(sampleUV,
                                       dispPx - aberrationPx * weight);
            vec4 sample = sampleGlassBackdrop(uv);
            if (sample.a < 0.01)
                sample = fallback;
            accumulated.g += sample.g * (1.0 - weight);
            accumulated.b += sample.b * weight;
            accumulatedAlpha += sample.a;
        }

        bg.rgb = accumulated * vec3(0.5, 1.0 / 3.0, 0.5);
        bg.a = accumulatedAlpha / 7.0;
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

    vec2 glassSize = max(bounds.zw - bounds.xy, vec2(1.0));
    vec2 glassPx = actorPx - bounds.xy;
    vec2 halfSize = glassSize * 0.5;
    vec2 localUV = glassPx / glassSize;

    float W = glassSize.x;
    float H = glassSize.y;
    float shortestSide = min(W, H);
    float R = clamp(corner_radius, 0.0, shortestSide * 0.5);
    float roundingRadius = R;
    if ((glassPx.y < H * 0.5 && corners_top == 0)
        || (glassPx.y >= H * 0.5 && corners_bottom == 0))
        roundingRadius = 0.0;
    float bezel = max(1.0, min(edge_size, shortestSide * 0.5));
    float glassThickness = max(0.5, edge_size * 0.55 * falloff);

    bool nearlySquare = abs(W - H) < max(4.0, shortestSide * 0.035);
    bool useCircularSurface = corners_top != 0 && corners_bottom != 0
        && nearlySquare && R >= shortestSide * 0.5 - 0.5;

    EdgeInfo edge = estimateAnalyticEdge(glassPx, halfSize, roundingRadius);
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
rimRadius = min(rimRadius, shortestSide * 0.5);
        if (R > 0.0 && (corners_top != 0 || corners_bottom != 0))
            rimRadius = min(rimRadius, max(1.0, R));
        refractionBand = rimRadius;
        edgeBand = clamp(1.0 - (distFromSide / rimRadius), 0.0, 1.0);
        if (roundingRadius == 0.0 && distFromSide < refractionBand) {
            vec2 sideDistances = min(glassPx, glassSize - glassPx);
            vec2 sideWeights = vec2(1.0) - smoothstep(vec2(0.0), vec2(refractionBand), sideDistances);
            vec2 sideNormal = sign(glassPx - halfSize) * sideWeights;
            dir = sideNormal / max(length(sideNormal), 0.0001);
        }
    }

if (!useCircularSurface && (roundingRadius == 0.0 || R < shortestSide * 0.45)
        && distFromSide >= refractionBand) {
        vec4 sourceSample = sampleGlassBackdrop(actorUV);
        vec2 flatUV = backdropSampleUV(actorUV, vec2(0.0));
        vec4 flatSample = sampleGlassBackdrop(flatUV);
        float finalOpacity = edgeOpacity * mix(sourceSample.a, flatSample.a,
                                               opacity_factor);
        vec3 effectRGB = applyTintAndShadow(flatSample.rgb, localUV);
        vec3 outRGB = mix(sourceSample.rgb, effectRGB, opacity_factor);

        cogl_color_out = vec4(outRGB * finalOpacity, finalOpacity);
        return;
    }

    float normDisp = distFromSide < refractionBand
        ? quartzGlassEdgeProfile(distFromSide,
                                 min(max(glassThickness, 1.0), refractionBand))
        : 0.0;
    float dispStrength = useCircularSurface ? edgeOpacity : edgeBand;
    vec2 dispPx = -dir * normDisp * refractionBand * strength * dispStrength;

    float dispersion = clamp(rgb_fringing * DISPERSION_SCALE, 0.0, 20.0);
    vec4 sourceColor = sampleGlassBackdrop(actorUV);
    vec2 aberrationPx = -dir * normDisp * dispersion * 8.0 * dispStrength;
    vec4 bgColor = sampleDispersed(actorUV, dispPx, aberrationPx, dispersion);

    vec3 outRGB = mix(bgColor.rgb, vec3(tint_r, tint_g, tint_b),
                      tint * tint_a);
    float highlight = quartzGlassHighlight(distFromSide, refractionBand, dir,
                                           gloss, fresnel_angle) *
                      edgeOpacity;
    float bgLuminance = luminance(outRGB);
    highlight *= mix(0.32, 1.0, bgLuminance);
    highlight = min(highlight, 0.22);
    outRGB = 1.0 - (1.0 - outRGB) * (1.0 - highlight);

    if (specular_strength > 0.001) {
        vec2 sourceDir = -vec2(cos(fresnel_angle), sin(fresnel_angle));
        vec2 sourcePos = vec2(localUV.x - 0.5, 0.5 - localUV.y) * 2.0;
        float sourceDist = length(sourcePos);
        vec2 sourceNormal = sourceDist > 0.001 ? sourcePos / sourceDist
                                              : vec2(0.0, 1.0);
        float glint = pow(clamp(dot(sourceDir, sourceNormal), 0.0, 1.0), 14.0)
                      * smoothstep(1.1, 0.4, sourceDist);
        outRGB = 1.0 - (1.0 - outRGB) * (1.0 - glint * specular_strength);
    }

    outRGB *= 1.0 - smoothstep(0.25, 1.0, localUV.y) * shadow * 0.20;
    outRGB = mix(sourceColor.rgb, outRGB, opacity_factor);

    float finalOpacity = edgeOpacity * mix(sourceColor.a, bgColor.a,
                                           opacity_factor);
    cogl_color_out = vec4(clamp(outRGB, 0.0, 1.0) * finalOpacity, finalOpacity);
}