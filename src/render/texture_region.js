const TEXTURE_HEADROOM = 1.25;
const REGION_COMPONENTS = ['scale_x', 'scale_y', 'max_x', 'max_y'];

export const TEXTURE_REGION_SOURCE = `
vec4 bms_sample_region(sampler2D sampler, vec2 uv, vec4 region) {
    return texture2D(sampler, min(uv, region.zw));
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

export function getTextureCapacity(size, capacity) {
    if (size <= capacity && size * 2 > capacity)
        return capacity;
    return Math.ceil(size * TEXTURE_HEADROOM);
}

export function setTextureRegion(pipeline, name, width, height, capacity_width, capacity_height) {
    const values = [
        width / capacity_width,
        height / capacity_height,
        (width - 0.5) / capacity_width,
        (height - 0.5) / capacity_height,
    ];
    REGION_COMPONENTS.forEach((component, index) => pipeline.set_uniform_1f(
        pipeline.get_uniform_location(`${name}_${component}`),
        values[index]
    ));
}

export const SURFACE_TEXTURE_REGION = 'bms_surface_region';

export const SURFACE_SAMPLING_SOURCE = `${textureRegionDeclarations(SURFACE_TEXTURE_REGION)}
${TEXTURE_REGION_SOURCE}
vec4 bms_texture2D(sampler2D sampler, vec2 uv) {
    return bms_sample_region(sampler, uv * ${SURFACE_TEXTURE_REGION}.xy, ${SURFACE_TEXTURE_REGION});
}
`;
