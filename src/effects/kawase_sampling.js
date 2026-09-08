export function getKawaseOffset(level) {
    return level === 1 ? 1 : level < 4 ? 2 : 3;
}

export function getKawaseConfiguration(radius) {
    const variance = (radius / 4) ** 2;
    const kernelVariance = 35 / 24;
    const resamplingVariance = 5 / 4;
    const firstOffset = Math.sqrt(Math.max(1, Math.min(4,
        (variance - resamplingVariance) / kernelVariance)));
    let accumulatedVariance = 0;
    let passes = 0;
    let levelVariance;
    do {
        passes++;
        const offset = passes === 1 ? firstOffset : getKawaseOffset(passes);
        levelVariance = (kernelVariance * offset ** 2 + resamplingVariance) * 4 ** (passes - 1);
        if (accumulatedVariance + levelVariance >= variance)
            break;
        accumulatedVariance += levelVariance;
    } while (true);

    return { passes, offset: firstOffset, blend: (variance - accumulatedVariance) / levelVariance };
}
