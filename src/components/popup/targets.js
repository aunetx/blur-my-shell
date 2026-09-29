import St from 'gi://St';

import { has_any_style_class, is_internal_actor } from './actors.js';

const POPUP_STYLE_CLASSES = ['popup-menu', 'quick-toggle-menu-container', 'candidate-popup-boxpointer'];
const POPUP_TARGET_STYLE_CLASSES = [
    'popup-menu-content', 'quick-settings', 'quick-toggle-menu', 'notification-banner',
    'candidate-popup-content', 'screenshot-ui-panel', 'bms-keyboard-surface',
];
const POPUP_CHILD_STYLE_CLASSES = ['osd-window', 'resize-popup', 'switcher-list', 'workspace-switcher', 'modal-dialog', 'run-dialog', 'clipboard-dialog'];
const POPUP_DESCENDANT_TARGET_STYLE_CLASSES = ['switcher-list'];

export const POPUP_BACKGROUND_STYLES = ['bms-popup-background-transparent', 'bms-popup-background-light', 'bms-popup-background-dark'];
export const POPUP_SURFACE_STYLES = POPUP_BACKGROUND_STYLES.map(
    style => style.replace('bms-popup-background-', 'bms-popup-surface-')
);
export const DEFAULT_CORNER_RADIUS = { key: 'corner-radius', property: 'CORNER_RADIUS' };
export const POPUP_CORNER_RADII = [
    {
        key: 'quick-settings-corner-radius',
        property: 'QUICK_SETTINGS_CORNER_RADIUS',
        style_classes: ['quick-settings', 'quick-toggle-menu', 'screenshot-ui-panel'],
    },
    {
        key: 'calendar-corner-radius',
        property: 'CALENDAR_CORNER_RADIUS',
        style_classes: ['datemenu-popover'],
    },
    {
        key: 'notification-corner-radius',
        property: 'NOTIFICATION_CORNER_RADIUS',
        style_classes: ['notification-banner', 'message', 'message-view', 'message-list'],
    },
    {
        key: 'candidate-corner-radius',
        property: 'CANDIDATE_CORNER_RADIUS',
        style_classes: ['candidate-popup-content', 'candidate-popup-boxpointer'],
    },
    {
        key: 'menu-corner-radius',
        property: 'MENU_CORNER_RADIUS',
        style_classes: ['popup-menu-content', 'popup-menu'],
    },
    {
        key: 'osd-corner-radius',
        property: 'OSD_CORNER_RADIUS',
        style_classes: ['switcher-list', 'workspace-switcher'],
    },
    {
        key: 'osd-window-corner-radius',
        property: 'OSD_WINDOW_CORNER_RADIUS',
        style_classes: ['osd-window'],
    },
    {
        key: 'resize-popup-corner-radius',
        property: 'RESIZE_POPUP_CORNER_RADIUS',
        style_classes: ['resize-popup'],
    },
    {
        key: 'dialog-corner-radius',
        property: 'DIALOG_CORNER_RADIUS',
        style_classes: ['modal-dialog', 'run-dialog', 'clipboard-dialog'],
    },
    {
        key: 'osk-corner-radius',
        property: 'OSK_CORNER_RADIUS',
        style_classes: ['bms-keyboard-surface'],
    },
];

export const PopupBlurTargets = class PopupBlurTargets {
    constructor() {
        this.style_cache = null;
    }

    find(actor) {
        this.style_cache = new WeakMap();
        const targets = this.find_actor(actor);
        this.style_cache = null;
        return [...targets];
    }

    find_actor(actor) {
        const targets = new Set();

        if (this.prefers_descendant_targets(actor)) {
            this.find_target_children(actor, targets);
            if (targets.size > 0)
                return targets;
        }

        const box = actor._delegate?.box;
        if (this.has_any_style_class(box, POPUP_TARGET_STYLE_CLASSES))
            targets.add(box);

        if (this.is_blur_target_actor(actor))
            targets.add(actor);

        const dialog_layout = actor.dialogLayout;
        if (this.has_any_style_class(dialog_layout, POPUP_CHILD_STYLE_CLASSES))
            targets.add(dialog_layout);

        if (targets.size === 0)
            this.find_target_children(actor, targets);

        if (targets.size === 0 && this.has_any_style_class(actor, POPUP_STYLE_CLASSES))
            targets.add(actor);

        return targets;
    }

    find_target_children(actor, targets) {
        const seen = new WeakSet();
        const stack = [];
        this.push_children(stack, actor.get_children());

        while (stack.length > 0) {
            const { actor: child, fallback_count } = stack.pop();
            if (is_internal_actor(child))
                continue;

            if (fallback_count !== null) {
                if (targets.size === fallback_count && this.is_blur_target_actor(child))
                    targets.add(child);
                continue;
            }

            if (seen.has(child))
                continue;
            seen.add(child);

            if (this.prefers_descendant_targets(child)) {
                const children = child.get_children();
                if (children.length > 0) {
                    stack.push({ actor: child, fallback_count: targets.size });
                    this.push_children(stack, children);
                    continue;
                }
            }

            if (this.is_blur_target_actor(child)) {
                targets.add(child);
                continue;
            }

            this.push_children(stack, child.get_children());
        }
    }

    push_children(stack, children) {
        for (let index = children.length - 1; index >= 0; index--)
            stack.push({ actor: children[index], fallback_count: null });
    }

    prefers_descendant_targets(actor) {
        return this.has_any_style_class(actor, POPUP_DESCENDANT_TARGET_STYLE_CLASSES);
    }

    is_blur_target_actor(actor) {
        return this.has_any_style_class(actor, POPUP_TARGET_STYLE_CLASSES)
            || this.has_any_style_class(actor, POPUP_CHILD_STYLE_CLASSES);
    }

    get_corner_radius(target, root_actor) {
        return POPUP_CORNER_RADII.find(radius =>
            has_any_style_class(target, radius.style_classes)
            || has_any_style_class(root_actor, radius.style_classes)
        ) ?? DEFAULT_CORNER_RADIUS;
    }

    has_any_style_class(actor, style_classes) {
        if (!this.style_cache)
            return has_any_style_class(actor, style_classes);
        if (!(actor instanceof St.Widget))
            return false;

        let classes = this.style_cache.get(actor);
        if (!classes) {
            classes = new Set(actor.get_style_class_name()?.split(/\s+/));
            this.style_cache.set(actor, classes);
        }
        return style_classes.some(style_class => classes.has(style_class));
    }
};
