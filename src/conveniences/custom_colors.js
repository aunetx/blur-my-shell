// Keep CSS generation separate from Shell actors so every value is validated
// before entering a stylesheet. GSettings color tuples use channels in [0, 1].
export const DEFAULT_BACKGROUND_COLOR = [100 / 255, 100 / 255, 100 / 255, 0.35];
export const DEFAULT_TEXT_COLOR = [1, 1, 1, 1];

export function normalizeColor(color, fallback = DEFAULT_BACKGROUND_COLOR) {
    return fallback.map((defaultValue, channel) => {
        const value = color?.[channel];
        return typeof value === 'number' && Number.isFinite(value)
            ? Math.max(0, Math.min(1, value)) : defaultValue;
    });
}

export function rgba(color) {
    const [red, green, blue, alpha] = normalizeColor(color);
    return `rgba(${Math.round(red * 255)}, ${Math.round(green * 255)}, ${Math.round(blue * 255)}, ${Number(alpha.toFixed(4))})`;
}

export function customColorTokens(background, text) {
    const bg = normalizeColor(background);
    const fg = normalizeColor(text, DEFAULT_TEXT_COLOR);
    // Derive interaction colors from the selected colors. Keep a visible
    // highlight even when the user chooses a completely transparent background.
    let highlight = fg;
    if (bg.slice(0, 3).every((value, index) => Math.abs(value - fg[index]) < 0.1)) {
        const contrast = (bg[0] + bg[1] + bg[2]) / 3 > 0.5 ? 0 : 1;
        highlight = [contrast, contrast, contrast, 1];
    }
    const blend = (amount, alpha) => rgba([
        ...bg.slice(0, 3).map((value, index) =>
            value * (1 - amount) + highlight[index] * amount),
        Math.min(1, alpha),
    ]);

    return {
        BACKGROUND: rgba(bg),
        TEXT: rgba(fg),
        ICON: rgba([...fg.slice(0, 3), fg[3] * 0.65]),
        HOVER: blend(0.14, Math.max(bg[3], 0.15)),
        ACTIVE: blend(0.20, Math.max(bg[3] + 0.05, 0.22)),
        PRESSED: blend(0.26, Math.max(bg[3] + 0.10, 0.30)),
    };
}

export function renderCustomStyle(template, background, text) {
    const tokens = customColorTokens(background, text);
    return template.replace(/@(BACKGROUND|TEXT|ICON|HOVER|ACTIVE|PRESSED)@/g,
        (_, name) => tokens[name]);
}
