// Keep CSS generation separate from Shell actors so every value is validated
// before entering a stylesheet. GSettings color tuples use channels in [0, 1].
export const DEFAULT_BACKGROUND_COLOR = [100 / 255, 100 / 255, 100 / 255, 0.35];
export const DEFAULT_TEXT_COLOR = [1, 1, 1, 1];
export const DEFAULT_HIGHLIGHT_COLOR = [1, 1, 1, 0.15];

export function customStyleOptions(component) {
    return {
        textStyle: component.CUSTOM_TEXT_STYLE ?? 0,
        secondary: component.CUSTOM_SECONDARY_TEXT_COLOR ?? DEFAULT_TEXT_COLOR,
        secondaryStrength: component.CUSTOM_SECONDARY_TEXT_STRENGTH ?? 100,
        highlightStyle: component.CUSTOM_HIGHLIGHT_STYLE ?? 0,
        highlight: component.CUSTOM_HIGHLIGHT_COLOR ?? DEFAULT_HIGHLIGHT_COLOR,
    };
}

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

export function customColorTokens(background, text, options = {}) {
    const bg = normalizeColor(background);
    const fg = normalizeColor(text, DEFAULT_TEXT_COLOR);
    // Text is a foreground setting, not an accent color. Derive neutral
    // interaction states from the background alone, so changing text cannot
    // tint the Show Apps button or any other tile background.
    const luminance = bg[0] * 0.2126 + bg[1] * 0.7152 + bg[2] * 0.0722;
    const contrast = luminance > 0.5 ? 0 : 1;
    const highlight = [contrast, contrast, contrast, 1];
    const blend = (amount, alpha) => rgba([
        ...bg.slice(0, 3).map((value, index) =>
            value * (1 - amount) + highlight[index] * amount),
        Math.min(1, alpha),
    ]);

    const secondary = options.textStyle === 2
        ? normalizeColor(options.secondary, DEFAULT_TEXT_COLOR) : fg;
    const strength = Number.isFinite(options.secondaryStrength)
        ? Math.max(0, Math.min(100, options.secondaryStrength)) / 100 : 1;
    const muted = factor => rgba([...secondary.slice(0, 3), secondary[3] * factor * strength]);
    // Shell 50 uses different levels for entry hints, result descriptions,
    // search status and insensitive controls. Preserve those roles rather than
    // making every label the primary foreground color. Descriptions use the
    // equivalent 63% foreground contribution; Theme mode retains exact theme CSS.
    let hover = blend(0.14, Math.max(bg[3], 0.15));
    let active = blend(0.20, Math.max(bg[3] + 0.05, 0.22));
    let pressed = blend(0.26, Math.max(bg[3] + 0.10, 0.30));
    if (options.highlightStyle === 1) {
        const accent = normalizeColor(options.highlight, DEFAULT_HIGHLIGHT_COLOR);
        const target = accent[0] * 0.2126 + accent[1] * 0.7152 + accent[2] * 0.0722 > 0.5 ? 0 : 1;
        const state = (amount, extraAlpha) => rgba([
            ...accent.slice(0, 3).map(value => value * (1 - amount) + target * amount),
            Math.min(1, accent[3] + extraAlpha),
        ]);
        hover = rgba(accent);
        active = state(0.08, 0.07);
        pressed = state(0.16, 0.15);
    }

    return {
        BACKGROUND: rgba(bg),
        TEXT: rgba(fg),
        ICON: muted(0.7),
        HINT: muted(0.7),
        DESCRIPTION: muted(0.63),
        STATUS: muted(0.8),
        DISABLED: muted(0.5),
        HOVER: hover,
        ACTIVE: active,
        PRESSED: pressed,
    };
}

export function renderCustomStyle(template, background, text, options = {}) {
    // Theme mode emits no foreground overrides at all: native/custom themes,
    // selection colors, icon colors and high-contrast text remain in control.
    const textStyle = [1, 2].includes(options.textStyle) ? options.textStyle : 0;
    const prepared = template.replace(/\/\* CUSTOM_TEXT_BEGIN \*\/([\s\S]*?)\/\* CUSTOM_TEXT_END \*\//g,
        (_, block) => textStyle ? block : '');
    const tokens = customColorTokens(background, text, options);
    return prepared.replace(/@(BACKGROUND|TEXT|ICON|HINT|DESCRIPTION|STATUS|DISABLED|HOVER|ACTIVE|PRESSED)@/g,
        (_, name) => tokens[name]);
}
