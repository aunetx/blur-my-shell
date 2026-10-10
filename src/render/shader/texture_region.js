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

export function textureFits(size, capacity) {
    return size <= capacity && size * 2 > capacity;
}

export function largestViewSize() {
    let width = 1;
    let height = 1;
    for (const view of global.stage.peek_stage_views()) {
        const framebuffer = view.get_framebuffer();
        width = Math.max(width, framebuffer.get_width());
        height = Math.max(height, framebuffer.get_height());
    }
    return { width, height };
}

export function getTextureCapacity(size, capacity, limit) {
    if (size > capacity)
        return Math.max(size, Math.min(Math.ceil(size * TEXTURE_HEADROOM), limit));
    if (size * 2 <= capacity)
        return size;
    return capacity;
}

export class TextureRegion {
    constructor(pipeline, name) {
        this.pipeline = pipeline;
        this.locations = REGION_COMPONENTS.map(component =>
            pipeline.get_uniform_location(`${name}_${component}`));
    }

    update({ usedWidth, usedHeight, width, height }) {
        const [scaleX, scaleY, maxX, maxY] = this.locations;
        this.pipeline.set_uniform_1f(scaleX, usedWidth / width);
        this.pipeline.set_uniform_1f(scaleY, usedHeight / height);
        this.pipeline.set_uniform_1f(maxX, (usedWidth - 0.5) / width);
        this.pipeline.set_uniform_1f(maxY, (usedHeight - 0.5) / height);
    }
}

export const SURFACE_TEXTURE_REGION = 'bms_surface_region';

export const SURFACE_SAMPLING_SOURCE = `${textureRegionDeclarations(SURFACE_TEXTURE_REGION)}
${TEXTURE_REGION_SOURCE}
vec4 bms_texture2D(sampler2D source, vec2 uv) {
    return bms_sample_region(source, uv * ${SURFACE_TEXTURE_REGION}.xy, ${SURFACE_TEXTURE_REGION});
}
`;
