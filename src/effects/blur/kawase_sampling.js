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
