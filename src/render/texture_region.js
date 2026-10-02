const TEXTURE_HEADROOM = 1.25;
const REGION_COMPONENTS = ['scale_x', 'scale_y', 'max_x', 'max_y'];

export const TEXTURE_REGION_SOURCE = `
vec4 bms_sample_region(sampler2D source, vec2 uv, vec4 region) {
    return texture2D(source, min(uv, region.zw));
}
`;

export function textureRegionDeclarations(name) {
    const uniforms = REGION_COMPONENTS
        .map(component => `uniform float ${name}_${component};`)
        .join('\n');
    const components = REGION_COMPONENTS
        .map(component => `${name}_${component}`)
        .join(', ');
    return `${uniforms}\n#define ${name} vec4(${components})\n`;
}

export function getTextureCapacity(size, capacity, limit) {
    if (size > capacity && capacity > 0)
        return Math.max(size, Math.min(Math.ceil(size * TEXTURE_HEADROOM), limit));
    if (size > capacity || size * 2 <= capacity)
        return size;
    return capacity;
}

export function setTextureRegion(pipeline, name, width, height, capacityWidth, capacityHeight) {
    const values = [
        width / capacityWidth,
        height / capacityHeight,
        (width - 0.5) / capacityWidth,
        (height - 0.5) / capacityHeight,
    ];
    REGION_COMPONENTS.forEach((component, index) => pipeline.set_uniform_1f(
        pipeline.get_uniform_location(`${name}_${component}`),
        values[index]
    ));
}

export const SURFACE_TEXTURE_REGION = 'bms_surface_region';

export const SURFACE_SAMPLING_SOURCE = `${textureRegionDeclarations(SURFACE_TEXTURE_REGION)}
${TEXTURE_REGION_SOURCE}
vec4 bms_texture2D(sampler2D source, vec2 uv) {
    return bms_sample_region(source, uv * ${SURFACE_TEXTURE_REGION}.xy, ${SURFACE_TEXTURE_REGION});
}
`;
