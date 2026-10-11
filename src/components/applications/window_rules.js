import Meta from 'gi://Meta';

const BLURRED_FRAME_TYPES = [
    Meta.FrameType.NORMAL,
    Meta.FrameType.DIALOG,
    Meta.FrameType.MODAL_DIALOG,
];

/// Converts a case-insensitive wildcard pattern, where `*` matches any sequence and `?` any single
/// character, to a RegExp.
function wildcard_to_regex(pattern) {
    const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&');
    const regex = '^' + escaped.replace(/\*/g, '.*').replace(/\?/g, '.') + '$';
    return new RegExp(regex, 'i');
}

function matches_any(value, patterns) {
    return Boolean(value) && patterns.some(pattern => pattern.test(value));
}

/// Decides which windows are blurred: when blurring every window, those not in the blacklist,
/// else only those in the whitelist.
export class WindowRules {
    constructor(settings) {
        this.settings = settings;
        this.update();
    }

    update() {
        this.whitelist = this.settings.applications.WHITELIST.map(wildcard_to_regex);
        this.blacklist = this.settings.applications.BLACKLIST.map(wildcard_to_regex);
    }

    matches(meta_window) {
        const wm_class = meta_window.get_wm_class();
        const listed = this.settings.applications.ENABLE_ALL
            ? !matches_any(wm_class, this.blacklist)
            : matches_any(wm_class, this.whitelist);
        return wm_class !== ''
            && listed
            && BLURRED_FRAME_TYPES.includes(meta_window.get_frame_type());
    }
}
