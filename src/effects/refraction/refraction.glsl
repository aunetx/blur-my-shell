// GLSL port of liquidass 0.1.1b (Tweak.mm kShaderSrc) from Liquid (Gl)ass by
// winaviation (https://github.com/winaviation-tweaks/liquid-ass), blended on
// Blur my Shell's clutter pipeline.
//
// The copyright holder explicitly granted, in email and in pull request #987
// (2026-09-10), that this ported shader file may be re-licensed and
// redistributed under the GNU GPL v3 for Blur my Shell, with the same rights
// extending to anyone who reuses it from this repository. The original
// upstream project remains licensed under CC BY-NC 4.0
// (https://creativecommons.org/licenses/by-nc/4.0/).
//
// specular glare, fresnel glare with symmetric tapering edge pair, dark edge border
// and the colored edge glow are not part of the original shader.
uniform sampler2D tex;
uniform float width;
uniform float height;
uniform float strength;
uniform float edge_size;
uniform float falloff;
uniform float refraction_style;
uniform float corner_radius;
uniform int corners_top;
uniform int corners_bottom;
uniform float rim_width;
uniform float rgb_fringing;
uniform float gloss;
uniform float fresnel_angle;
uniform float fresnel_width;
uniform float specular_strength;
uniform float edge_shadow;
uniform float edge_glow;
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
uniform float scale_factor;

// Overall bend multiplier and edge-profile curve (< 1 reaches further inward).
const float BEND_SCALE = 1.4;
const float BEND_CURVE = 0.7;
// Max share of the bend used to split red and blue apart at the glass edge.
const float DISPERSION_RATIO = 0.9;
// Glare taper along the rim, in multiples of the corner radius: how early it
// starts thinning before the corner curve and how far its thin tail reaches
// down the side edge past the curve.
const float GLARE_TAPER_LEAD = 0.6;
const float GLARE_TAPER_TAIL = 1.0;
// Strength of the specular glare on the edge away from the light.
const float SPECULAR_FAR_SIDE = 0.6;
// Edge border fade-in around the end of the glare tail, in logical pixels
// (multiplied by the monitor scale): how far before the tail end it starts
// and how far past it it reaches full strength.
const float BORDER_FADE_LEAD = 45.0;
const float BORDER_FADE_TAIL = 8.0;

float quartzGlassEdgeProfile(float distanceFromEdge,
                             float refractionHeight) {
    float t = clamp(distanceFromEdge / max(refractionHeight, 0.001), 0.0, 1.0);
    return 1.0 - sqrt(t * (2.0 - t));
}

// 0.1.0b Snell-style displacement profile
float surfaceConvexSquircle(float x) {
    return pow(1.0 - pow(1.0 - x, 4.0), 0.25);
}

vec2 snellRefractRay(vec2 normal, float eta) {
    float cosI = -normal.y;
    float k = 1.0 - eta * eta * (1.0 - cosI * cosI);
    if (k < 0.0) return vec2(0.0);
    float sq = sqrt(k);
    return vec2(-(eta * cosI + sq) * normal.x,
                eta - (eta * cosI + sq) * normal.y);
}

float snellRawRefraction(float br, float gt, float bw, float eta) {
    float x = clamp(br, 0.05, 0.95);
    float y = surfaceConvexSquircle(x);
    float y2 = surfaceConvexSquircle(x + 0.001);
    float d = (y2 - y) / 0.001;
    float m = sqrt(d * d + 1.0);
    vec2 n = vec2(-d / m, -1.0 / m);
    vec2 r = snellRefractRay(n, eta);
    if (length(r) < 0.0001 || abs(r.y) < 0.0001) return 0.0;
    return r.x * (y * bw + gt) / r.y;
}

float snellDisplacementAtRatio(float br, float gt, float bw, float eta) {
    float peak = snellRawRefraction(0.05, gt, bw, eta);
    if (abs(peak) < 0.0001) return 0.0;
    float raw = snellRawRefraction(br, gt, bw, eta);
    return (raw / peak) * (1.0 - smoothstep(0.0, 1.0, br));
}

// Anti-aliased line hugging the glass edge; widthScale thins it (0 hides it).
float quartzGlassRing(float distanceFromEdge,
                      float bezelWidth,
                      float widthScale) {
    float ringWidth = clamp(bezelWidth * 0.24 * fresnel_width, 1.0,
                            2.5 * fresnel_width) * widthScale;
    if (ringWidth <= 0.001) return 0.0;
    float aa = 1.0;

    float outerCoverage = clamp(distanceFromEdge / aa + 0.5, 0.0, 1.0);
    float innerCoverage = clamp((ringWidth - distanceFromEdge) / aa + 0.5, 0.0, 1.0);
    float radial = clamp(distanceFromEdge / ringWidth, 0.0, 1.0);
    return outerCoverage * innerCoverage * (1.0 - radial);
}

// Fresnel glare lit as a fixed 180 degree apart pair of edges along the light
// axis. taper (1 on the glare edges, 0 at the end of the tail) thins and
// fades the line through the corner curves and a little down the sides.
float quartzGlassHighlight(float distanceFromEdge,
                           float bezelWidth,
                           float taper,
                           float strength) {
    float highlight = quartzGlassRing(distanceFromEdge, bezelWidth, taper) *
                      sqrt(taper);

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
    return bms_texture2D(tex, resolveUV(uv));
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

float edgeCoverage(float signedDistance, vec2 position, vec2 normal) {
    float antialiasWidth = bms_antialias_width(signedDistance, position, normal);
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

EdgeInfo estimateAnalyticEdge(vec2 px, vec2 halfSize, float radius, vec2 actorPosition) {
    vec2 p = px - halfSize;
    vec2 core = max(halfSize - vec2(radius), vec2(0.0));
    float signedDistance = roundedBoxDistance(p, halfSize, radius);

    EdgeInfo info;
    info.distance = max(0.0, -signedDistance);

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

    info.alpha = edgeCoverage(signedDistance, actorPosition, info.dir);
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

// Light from colorful content under the glass, gathered a few steps inward
// from the edge. Returns a saturated color and, in alpha, how colorful it is,
// so neutral (white/gray/black) content does not light the rim.
vec4 edgeGlowColor(vec2 sampleUV, vec2 dir, float band) {
    vec3 gathered = vec3(0.0);
    for (int i = 1; i <= 3; i++) {
        vec2 inwardPx = -dir * band * float(i) * 0.6;
        gathered += sampleGlassBackdrop(backdropSampleUV(sampleUV, inwardPx)).rgb;
    }
    gathered /= 3.0;

    float maxC = max(gathered.r, max(gathered.g, gathered.b));
    float minC = min(gathered.r, min(gathered.g, gathered.b));
    float chroma = maxC - minC;
    vec3 vivid = chroma > 0.001
        ? (gathered - vec3(minC)) / chroma * maxC
        : gathered;
    return vec4(vivid, smoothstep(0.06, 0.4, chroma));
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

    EdgeInfo edge = estimateAnalyticEdge(glassPx, halfSize, roundingRadius, actorPx);
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
        edgeOpacity = edgeCoverage(circleDistance - circleRadius, actorPx, dir);

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
        ? pow(max(quartzGlassEdgeProfile(distFromSide,
                                         max(glassThickness, 1.0)), 0.0),
              BEND_CURVE)
        : 0.0;
    if (refraction_style > 0.001) {
        float bezelRatio = clamp(distFromSide / max(refractionBand, 0.001), 0.0, 1.0);
        float eta = 1.0 / 1.5;
        float snellDisp = (distFromSide < refractionBand)
            ? snellDisplacementAtRatio(bezelRatio, max(1.0, glassThickness),
                                       max(1.0, refractionBand), eta)
            : 0.0;
        normDisp = mix(normDisp, snellDisp, clamp(refraction_style, 0.0, 1.0));
    }
    float dispStrength = edgeBand;
    vec2 dispPx = -dir * normDisp * refractionBand * strength * dispStrength *
                  BEND_SCALE;

    // Dispersion follows the bend and is weighted toward the rim, so colors
    // spread out along the glass edge while the center stays clean.
    float dispersion = clamp(rgb_fringing, 0.0, 1.0) * DISPERSION_RATIO;
    vec4 sourceColor = sampleGlassBackdrop(actorUV);
    vec2 aberrationPx = dispPx * clamp(normDisp, 0.0, 1.0) * dispersion;
    vec4 bgColor = sampleDispersed(actorUV, dispPx, aberrationPx, dispersion);

    vec3 outRGB = mix(bgColor.rgb, vec3(tint_r, tint_g, tint_b),
                      tint * tint_a);

    // Facing of the edge relative to the fresnel glare axis: 1 on the lit
    // edge pair, 0 on the perpendicular (side) edges.
    vec2 glareAxis = vec2(cos(fresnel_angle), sin(fresnel_angle));
    float glareAxisDot = dot(glareAxis, dir);
    float glareFacing = abs(glareAxisDot);

    // Rim position measured from where the corner curve starts on the glare
    // edge (axis snapped to vertical/horizontal): < 0 on the straight glare
    // edge, 0..R*PI/2 along the curve, beyond that down the side edge.
    bool glareVertical = abs(glareAxis.y) >= abs(glareAxis.x);
    vec2 rimP = abs(glassPx - halfSize);
    vec2 straightHalf = max(halfSize - vec2(roundingRadius), vec2(0.0));
    vec2 litP = glareVertical ? rimP : rimP.yx;
    vec2 litStraight = glareVertical ? straightHalf : straightHalf.yx;
    vec2 litDir = glareVertical ? abs(dir) : abs(dir).yx;
    float rimPos = roundingRadius * atan(litDir.x, max(litDir.y, 0.0001)) +
                   min(litP.x - litStraight.x, 0.0) +
                   max(litStraight.y - litP.y, 0.0);

    float taperR = max(roundingRadius, 4.0);
    float glareLead = min(GLARE_TAPER_LEAD * taperR, litStraight.x);
    float glareTail = min(GLARE_TAPER_TAIL * taperR, litStraight.y);
    float glareTaper = 1.0 - smoothstep(-glareLead,
                                        roundingRadius * 1.5707963 + glareTail +
                                        0.001,
                                        rimPos);
    // Diagonal glare angles fall back to the plain facing taper.
    float offAxis = clamp((1.0 - max(abs(glareAxis.x), abs(glareAxis.y))) /
                          0.2928932, 0.0, 1.0);
    glareTaper = mix(glareTaper, glareFacing, offAxis);

    // Thin dark border on the straight side edges (the pair perpendicular to
    // the glare axis). It starts after the glare tail ends and thins in
    // gradually, so the glare keeps its tapering through the corners.
    if (edge_shadow > 0.001) {
        float scale = max(scale_factor, 1.0);
        float borderTaper = step(0.5, litDir.x) *
                            smoothstep(glareTail - BORDER_FADE_LEAD * scale,
                                       glareTail + BORDER_FADE_TAIL * scale,
                                       litStraight.y - litP.y);
        float lineWidth = clamp(refractionBand * 0.02, 0.5 * scale,
                                1.0 * scale) * borderTaper;
        float line = 1.0 - smoothstep(lineWidth - 0.5, lineWidth + 0.5,
                                      distFromSide);

        float darken = edge_shadow * line * borderTaper *
                       mix(0.5, 1.0, luminance(outRGB));
        outRGB *= 1.0 - darken;
    }

    // Colorful content under the glass lights up the rim. Pixels past the
    // glow width get no glow, so they skip the extra backdrop samples.
    float glowWidth = max(1.5, refractionBand * 0.6);
    if (edge_glow > 0.001 && distFromSide < glowWidth) {
        float glowBand = 1.0 - smoothstep(0.0, glowWidth, distFromSide);
        vec4 glow = edgeGlowColor(actorUV, dir, refractionBand);
        float glowAmount = glowBand * glowBand * glow.a * edge_glow * 0.85;
        outRGB = mix(outRGB, clamp(glow.rgb * 1.15, 0.0, 1.0), glowAmount);
    }

    float highlight = quartzGlassHighlight(distFromSide, refractionBand,
                                           glareTaper, gloss) *
                      edgeOpacity;
    float bgLuminance = luminance(outRGB);
    highlight *= mix(0.32, 1.0, bgLuminance);
    highlight = min(highlight, 0.35);
    outRGB = 1.0 - (1.0 - outRGB) * (1.0 - highlight);

    outRGB *= 1.0 - smoothstep(0.25, 1.0, localUV.y) * shadow * 0.20;

    // Specular glare: reflection of the light source on the same edge pair as
    // the fresnel glare. The edge facing the light is full strength, the far
    // edge (internal reflection) is dimmer. It shares the fresnel taper; the
    // soft bloom fades sooner so the tail is a crisp thin line. Reflected
    // light is white and does not depend on the backdrop brightness, so it is
    // added after the inner shadow.
    if (specular_strength > 0.001) {
        float side = glareAxisDot < 0.0 ? 1.0 : SPECULAR_FAR_SIDE;
        float core = quartzGlassRing(distFromSide, refractionBand, glareTaper) *
                     sqrt(glareTaper);
        float bloomWidth = max(1.5, refractionBand * 0.25);
        float bloom = exp(-distFromSide / bloomWidth) * 0.35 *
                      glareTaper * glareTaper;
        float specular = (core + bloom) * side * edgeOpacity *
                         specular_strength;
        specular = clamp(specular, 0.0, 0.85);
        outRGB = 1.0 - (1.0 - clamp(outRGB, 0.0, 1.0)) * (1.0 - specular);
    }
    outRGB = mix(sourceColor.rgb, outRGB, opacity_factor);

    float finalOpacity = edgeOpacity * mix(sourceColor.a, bgColor.a,
                                           opacity_factor);
    cogl_color_out = vec4(clamp(outRGB, 0.0, 1.0) * finalOpacity, finalOpacity);
}
