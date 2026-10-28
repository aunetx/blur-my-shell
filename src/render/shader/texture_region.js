import GLib from 'gi://GLib';

const TEXTURE_HEADROOM = 1.25;
const SHRINK_DELAY_US = 2000000;
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

/// Whether a texture can keep holding content of this size. It has to grow as soon as the content
/// doesn't fit, but only shrinks once the content has stayed under half its size for a while, so
/// that animations, which go through every size, don't reallocate it on every frame.
export function textureFits(owner, width, height, capacityWidth, capacityHeight) {
    if (width > capacityWidth || height > capacityHeight)
        return false;

    if (width * 2 > capacityWidth && height * 2 > capacityHeight) {
        owner.shrinkableSince = 0;
        return true;
    }

    const now = GLib.get_monotonic_time();
    owner.shrinkableSince ||= now;
    return now - owner.shrinkableSince < SHRINK_DELAY_US;
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

/// The headroom stops at the size of the largest view, unless the content is already bigger, like
/// the padded blur of a window taller than the screen.
export function getTextureCapacity(size, capacity, limit) {
    if (size > capacity) {
        const grown = Math.ceil(size * TEXTURE_HEADROOM);
        return size <= limit ? Math.min(grown, limit) : grown;
    }
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
