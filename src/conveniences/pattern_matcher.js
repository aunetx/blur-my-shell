function wildcard_to_regex(pattern) {
    const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`^${escaped.replace(/\*/g, '.*').replace(/\?/g, '.')}$`, 'i');
}

export const PatternMatcher = class PatternMatcher {
    constructor() {
        this.cache = new Map();
        this.patterns = [];
    }

    update(patterns) {
        this.patterns = patterns.map(pattern => {
            if (!this.cache.has(pattern))
                this.cache.set(pattern, wildcard_to_regex(pattern));

            return this.cache.get(pattern);
        });
    }

    matches(value) {
        return !!value && this.patterns.some(pattern => pattern.test(value));
    }
};
