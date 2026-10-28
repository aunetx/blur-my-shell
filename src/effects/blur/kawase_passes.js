import * as utils from '../../conveniences/utils.js';
import { get_snippet } from '../../render/shader/snippet_cache.js';
import { addRectangle } from '../../render/paint_nodes.js';
import { ANTIALIASING_SOURCE } from '../../render/shader/antialiasing.js';
import { TEXTURE_REGION_SOURCE, textureRegionDeclarations } from '../../render/shader/texture_region.js';

const Clutter = await utils.import_in_shell_only('gi://Clutter');
const Cogl = await utils.import_in_shell_only('gi://Cogl');

export const SOURCE_REGION = 'source_region';
export const ORIGINAL_REGION = 'original_region';

const SOURCE_SAMPLING_DECLARATIONS = `
${textureRegionDeclarations(SOURCE_REGION)}
${TEXTURE_REGION_SOURCE}
#define source_sample(uv) bms_sample_region(cogl_sampler0, uv, ${SOURCE_REGION})
`;

const ORIGINAL_SAMPLING_DECLARATIONS = `
${textureRegionDeclarations(ORIGINAL_REGION)}
#define original_sample() bms_sample_region(cogl_sampler1, cogl_tex_coord1_in.xy * ${ORIGINAL_REGION}.xy, ${ORIGINAL_REGION})
`;

export const DOWNSAMPLE_DECLARATIONS = `
uniform float halfpixel_x;
uniform float halfpixel_y;
#define halfpixel vec2(halfpixel_x, halfpixel_y)
${SOURCE_SAMPLING_DECLARATIONS}
`;

export const DOWNSAMPLE_CODE = `
vec2 uv = cogl_tex_coord_in[0].xy * ${SOURCE_REGION}.xy;
vec4 sum = source_sample(uv) * 4.0;
sum += source_sample(uv - halfpixel * 2.0);
sum += source_sample(uv + halfpixel * 2.0);
sum += source_sample(uv + vec2(halfpixel.x, -halfpixel.y) * 2.0);
sum += source_sample(uv - vec2(halfpixel.x, -halfpixel.y) * 2.0);
cogl_color_out = sum / 8.0;
`;

export const UPSAMPLE_DECLARATIONS = `
uniform float halfpixel_x;
uniform float halfpixel_y;
#define halfpixel vec2(halfpixel_x, halfpixel_y)
uniform float level_blend;
${SOURCE_SAMPLING_DECLARATIONS}
${ORIGINAL_SAMPLING_DECLARATIONS}
`;

const UPSAMPLE_BODY = `
vec2 uv = cogl_tex_coord_in[0].xy * ${SOURCE_REGION}.xy;
vec4 sum = source_sample(uv - halfpixel);
sum += source_sample(uv + halfpixel);
sum += source_sample(uv + vec2(halfpixel.x, -halfpixel.y));
sum += source_sample(uv - vec2(halfpixel.x, -halfpixel.y));
vec4 color = sum / 4.0;
`;

export const UPSAMPLE_CODE = `${UPSAMPLE_BODY}
if (level_blend < 1.0)
    color = mix(original_sample(), color, level_blend);
cogl_color_out = color;
`;

export const UPSAMPLE_OUTPUT_DECLARATIONS = `${UPSAMPLE_DECLARATIONS}
uniform float opacity_factor;
uniform float brightness;
uniform float corner_radius;
uniform int corners_top;
uniform int corners_bottom;
uniform float output_width;
uniform float output_height;
uniform float mask_x;
uniform float mask_y;
uniform float mask_width;
uniform float mask_height;
${ANTIALIASING_SOURCE}

uniform float bms_resource_scale;

// interleaved gradient noise, breaking up the 8-bit steps a smooth gradient gets once it is darkened.
// It follows the blur rather than the framebuffer, which can start elsewhere for partial redraws.
float dither(vec2 position) {
    return fract(52.9829189 * fract(dot(position, vec2(0.06711056, 0.00583715)))) - 0.5;
}

// the coverage of the rounded surface, so that its corners don't need a pass of their own
float corner_coverage(vec2 position) {
    vec2 size = max(vec2(mask_width, mask_height), vec2(1.0));
    vec2 point = position - vec2(mask_x, mask_y) - size * 0.5;
    bool top = point.y < 0.0;
    float radius = (top ? corners_top : corners_bottom) != 0 ? corner_radius : 0.0;
    vec2 q = abs(point) - size * 0.5 + vec2(radius);
    float distance = length(max(q, vec2(0.0))) + min(max(q.x, q.y), 0.0) - radius;
    vec2 outside = max(q, vec2(0.0));
    float outside_length = length(outside);
    vec2 normal = outside_length > 0.0001 ? outside / outside_length
        : (q.x > q.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0));
    float antialias_width = bms_antialias_width(distance, position, normal * sign(point));
    return 1.0 - smoothstep(-antialias_width * 0.5, antialias_width * 0.5, distance);
}
`;

export const UPSAMPLE_OUTPUT_CODE = `
vec4 sourceColor = original_sample();
vec4 filteredColor = sourceColor;
if (level_blend > 0.0) {
    vec4 color = source_sample(cogl_tex_coord_in[0].xy * ${SOURCE_REGION}.xy);
    filteredColor = mix(sourceColor, color, level_blend);
}
filteredColor.rgb *= brightness;
cogl_color_out = mix(sourceColor, filteredColor, opacity_factor) * cogl_color_in.a;
vec2 position = cogl_tex_coord_in[0].xy * vec2(output_width, output_height);
cogl_color_out.rgb += dither(position * bms_resource_scale) * 2.0 / 255.0 * cogl_color_out.a;
if (corner_radius > 0.0)
    cogl_color_out *= corner_coverage(position);
`;

function createSnippet(declarations, code) {
    return get_snippet(`${declarations}\n${code}`, () => {
        const snippet = Cogl.Snippet.new(Cogl.SnippetHook.FRAGMENT, declarations, null);
        snippet.set_replace(code);
        return snippet;
    });
}

export function levelSize(size, level) {
    return Math.max(1, Math.ceil(size / 2 ** level));
}

export function resizeRenderTarget(target, level, width, height) {
    target.usedWidth = levelSize(width, level);
    target.usedHeight = levelSize(height, level);
    target.framebuffer.set_viewport(0, 0, target.usedWidth, target.usedHeight);
}

export function projectRenderTarget(target, bounds) {
    target.framebuffer.orthographic(bounds.x, bounds.y,
        bounds.x + bounds.width, bounds.y + bounds.height, -1, 1);
}

export function createRenderTarget(context, width, height) {
    const texture = Cogl.Texture2D.new_with_size(context, width, height);
    texture.set_components(Cogl.TextureComponents.RGBA);
    texture.allocate();

    const framebuffer = Cogl.Offscreen.new_with_texture(texture);
    framebuffer.allocate();

    const layerPipeline = Cogl.Pipeline.new(context);
    layerPipeline.set_layer_texture(0, texture);

    return { texture, framebuffer, layerPipeline, width, height, usedWidth: 0, usedHeight: 0 };
}

export function createPassPipeline(context, texture, declarations, code) {
    const pipeline = Cogl.Pipeline.new(context);
    pipeline.set_layer_texture(0, texture);
    pipeline.set_layer_filters(0, Cogl.PipelineFilter.LINEAR, Cogl.PipelineFilter.LINEAR);
    pipeline.set_layer_wrap_mode(0, Cogl.PipelineWrapMode.CLAMP_TO_EDGE);
    pipeline.add_snippet(createSnippet(declarations, code));
    return pipeline;
}

export function setFloat(pipeline, name, value) {
    pipeline.set_uniform_1f(pipeline.get_uniform_location(name), value);
}

export function setInt(pipeline, name, value) {
    pipeline.set_uniform_1i(pipeline.get_uniform_location(name), value);
}

// vec2 uniforms are split into two floats, as set_uniform_float() crashes on Mutter < 48.6/49.1
// (broken array introspection)
export function setVector2(pipeline, name, x, y) {
    setFloat(pipeline, `${name}_x`, x);
    setFloat(pipeline, `${name}_y`, y);
}

export function addPassNode(parent, target, pipeline, bounds, name) {
    const layerNode = Clutter.LayerNode.new_to_framebuffer(
        target.framebuffer,
        target.layerPipeline
    );
    layerNode.set_name(name);
    parent.add_child(layerNode);

    const pipelineNode = new Clutter.PipelineNode(pipeline);
    pipelineNode.set_name(`${name} sample`);
    addRectangle(pipelineNode, bounds.x, bounds.y, bounds.width, bounds.height);
    layerNode.add_child(pipelineNode);
}
