export function getKawaseConfiguration(radius) {
    const variance = (radius / 4) ** 2;
    const firstLevelVariance = 3 / 2;
    if (variance <= firstLevelVariance)
        return { passes: 1, blend: variance / firstLevelVariance };

    let accumulatedVariance = firstLevelVariance;
    let passes = 2;
    let levelVariance = 10;
    while (accumulatedVariance + levelVariance < variance) {
        accumulatedVariance += levelVariance;
        levelVariance *= 4;
        passes++;
    }

    return { passes, blend: (variance - accumulatedVariance) / levelVariance };
}

export function getKawaseInputBounds(bounds, width, height, scale, passes) {
    // Cover the downsample and upsample taps, including linear filtering.
    // Align the crop to the coarsest sampling grid.
    const alignment = 2 ** passes;
    // The complete filter chain reaches less than four coarsest-level pixels.
    const padding = 4 * alignment;
    const left = Math.min(width * scale, Math.max(0,
        Math.floor((bounds.x * scale - padding) / alignment) * alignment));
    const top = Math.min(height * scale, Math.max(0,
        Math.floor((bounds.y * scale - padding) / alignment) * alignment));
    const right = Math.max(left, Math.min(width * scale,
        Math.ceil(((bounds.x + bounds.width) * scale + padding) / alignment) * alignment));
    const bottom = Math.max(top, Math.min(height * scale,
        Math.ceil(((bounds.y + bounds.height) * scale + padding) / alignment) * alignment));
    return {
        x: left / scale,
        y: top / scale,
        width: (right - left) / scale,
        height: (bottom - top) / scale,
    };
}
