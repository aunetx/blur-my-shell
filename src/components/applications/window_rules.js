import Meta from 'gi://Meta';

const BLURRED_FRAME_TYPES = [
    Meta.FrameType.NORMAL,
    Meta.FrameType.DIALOG,
    Meta.FrameType.MODAL_DIALOG,
    Meta.FrameType.ATTACHED,
];

// GTK popovers and the menus of other Wayland clients
const POPUP_WINDOW_TYPES = [
    Meta.WindowType.DROPDOWN_MENU,
    Meta.WindowType.POPUP_MENU,
];

const TITLE_PREFIX = 'title:';

export function is_app_popup(meta_window) {
    return POPUP_WINDOW_TYPES.includes(meta_window.get_window_type())
        && meta_window.get_client_type() === Meta.WindowClientType.WAYLAND;
}

/// Converts a case-insensitive wildcard pattern, where `*` matches any sequence and `?` any single
/// character, to a RegExp.
function wildcard_to_regex(pattern) {
    const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&');
    const regex = '^' + escaped.replace(/\*/g, '.*').replace(/\?/g, '.') + '$';
    return new RegExp(regex, 'i');
}

/// An entry matches the window class, or the window title when it starts with `title:`.
function to_rule(entry) {
    const by_title = entry.startsWith(TITLE_PREFIX);
    const pattern = wildcard_to_regex(by_title ? entry.slice(TITLE_PREFIX.length) : entry);
    return meta_window => {
        const value = by_title ? meta_window.get_title() : meta_window.get_wm_class();
        return Boolean(value) && pattern.test(value);
    };
}

function matches_any(meta_window, rules) {
    return rules.some(rule => rule(meta_window));
}

/// Decides which windows are blurred: when blurring every window, those not in the blacklist,
/// else only those in the whitelist.
export class WindowRules {
    constructor(settings) {
        this.settings = settings;
        this.update();
    }

    update() {
        this.whitelist = this.settings.applications.WHITELIST.map(to_rule);
        this.blacklist = this.settings.applications.BLACKLIST.map(to_rule);
    }

    listed(meta_window) {
        return this.settings.applications.ENABLE_ALL
            ? !matches_any(meta_window, this.blacklist)
            : matches_any(meta_window, this.whitelist);
    }

    matches(meta_window) {
        return meta_window.get_wm_class() !== ''
            && this.listed(meta_window)
            && BLURRED_FRAME_TYPES.includes(meta_window.get_frame_type());
    }

    /// A popup follows the rules of the window it belongs to.
    matches_popup(meta_window) {
        return this.listed(meta_window.get_transient_for() ?? meta_window);
    }
}
