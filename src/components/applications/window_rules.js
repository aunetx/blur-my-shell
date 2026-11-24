import Meta from 'gi://Meta';

const BLURRED_FRAME_TYPES = [
    Meta.FrameType.NORMAL,
    Meta.FrameType.DIALOG,
    Meta.FrameType.MODAL_DIALOG,
    Meta.FrameType.ATTACHED,
    Meta.FrameType.UTILITY,
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

export function get_window_identifier(meta_window) {
    let id = meta_window.get_wm_class?.();
    if (!id && meta_window.get_gtk_application_id)
        id = meta_window.get_gtk_application_id();
    if (!id && meta_window.get_sandboxed_app_id)
        id = meta_window.get_sandboxed_app_id();
    if (!id && meta_window.get_wm_class_instance)
        id = meta_window.get_wm_class_instance();
    return id || '';
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
        if (by_title) {
            const value = meta_window.get_title?.();
            return Boolean(value) && pattern.test(value);
        }
        const wm_class = meta_window.get_wm_class?.();
        if (wm_class && pattern.test(wm_class))
            return true;
        const gtk_id = meta_window.get_gtk_application_id?.();
        if (gtk_id && pattern.test(gtk_id))
            return true;
        const sandbox_id = meta_window.get_sandboxed_app_id?.();
        if (sandbox_id && pattern.test(sandbox_id))
            return true;
        const instance = meta_window.get_wm_class_instance?.();
        if (instance && pattern.test(instance))
            return true;
        return false;
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
        return get_window_identifier(meta_window) !== ''
            && this.listed(meta_window)
            && BLURRED_FRAME_TYPES.includes(meta_window.get_frame_type());
    }

    /// A popup follows the rules of the window it belongs to, through any popups it opened from.
    matches_popup(meta_window) {
        return this.listed(meta_window.find_root_ancestor());
    }
}
