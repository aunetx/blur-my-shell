const POPUP_STYLE_CLASSES = ['popup-menu', 'quick-toggle-menu-container', 'candidate-popup-boxpointer'];
const POPUP_TARGET_STYLE_CLASSES = ['popup-menu-content', 'quick-settings', 'quick-toggle-menu', 'notification-banner', 'candidate-popup-content', 'dash-background', 'plank-like-dock-bg'];
const POPUP_CHILD_STYLE_CLASSES = ['osd-window', 'resize-popup', 'switcher-list', 'workspace-switcher', 'modal-dialog', 'run-dialog'];
const POPUP_DESCENDANT_TARGET_STYLE_CLASSES = ['switcher-list'];

export const POPUP_BACKGROUND_STYLES = ['bms-popup-background-transparent', 'bms-popup-background-light', 'bms-popup-background-dark'];
export const POPUP_BACKGROUND_STYLE_AUTO = 3;
export const DEFAULT_CORNER_RADIUS = { key: 'corner-radius', property: 'CORNER_RADIUS' };
export const POPUP_CORNER_RADII = [
    {
        key: 'quick-settings-corner-radius',
        property: 'QUICK_SETTINGS_CORNER_RADIUS',
        style_classes: ['quick-settings', 'quick-toggle-menu', 'datemenu-popover'],
    },
    {
        key: 'notification-corner-radius',
        property: 'NOTIFICATION_CORNER_RADIUS',
        style_classes: ['notification-banner', 'message', 'message-view', 'message-list'],
    },
    {
        key: 'menu-corner-radius',
        property: 'MENU_CORNER_RADIUS',
        style_classes: ['popup-menu-content', 'popup-menu', 'candidate-popup-content', 'candidate-popup-boxpointer'],
    },
    {
        key: 'osd-corner-radius',
        property: 'OSD_CORNER_RADIUS',
        style_classes: ['osd-window', 'resize-popup', 'switcher-list', 'workspace-switcher'],
    },
    {
        key: 'dialog-corner-radius',
        property: 'DIALOG_CORNER_RADIUS',
        style_classes: ['modal-dialog', 'run-dialog'],
    },
    {
        key: 'dash-corner-radius',
        property: 'DASH_CORNER_RADIUS',
        style_classes: ['dash-background', 'plank-like-dock-bg'],
    },
];

export const PopupBlurTargets = class PopupBlurTargets {
    constructor(actor) {
        this.actor = actor;
        this.style_cache = null;
    }

    find(actor) {
        return this.with_style_cache(() => this.find_actor(actor));
    }

    find_actor(actor) {
        if (this.actor.is_internal_actor(actor) || !this.actor.watch_actor(actor))
            return [];

        const targets = this.create_targets();
        const delegate = this.actor.get_actor_delegate(actor);

        if (this.prefers_descendant_targets(actor)) {
            this.find_target_children(actor, targets);
            if (targets.actors.length > 0)
                return targets.actors;
        }

        if (this.actor.watch_actor(delegate?.box) && this.has_any_style_class(delegate.box, POPUP_TARGET_STYLE_CLASSES))
            this.add(targets, delegate.box);

        if (this.has_any_style_class(actor, POPUP_TARGET_STYLE_CLASSES))
            this.add(targets, actor);

        if (this.has_any_style_class(actor, POPUP_CHILD_STYLE_CLASSES))
            this.add(targets, actor);

        const dialog_layout = this.actor.get_actor_dialog_layout(actor);
        if (this.actor.watch_actor(dialog_layout) && this.has_any_style_class(dialog_layout, POPUP_CHILD_STYLE_CLASSES))
            this.add(targets, dialog_layout);

        if (targets.actors.length === 0)
            this.find_target_children(actor, targets);

        if (
            targets.actors.length === 0
            && this.has_any_style_class(actor, POPUP_STYLE_CLASSES)
        )
            this.add(targets, actor);

        return targets.actors;
    }

    find_target_children(actor, targets, seen = new WeakSet()) {
        const stack = this.get_children(actor)
            .slice()
            .reverse()
            .map(child => ({ actor: child, fallback_count: null }));

        while (stack.length > 0) {
            const { actor: child, fallback_count } = stack.pop();
            if (
                !child
                || this.actor.is_internal_actor(child)
            )
                continue;

            if (fallback_count !== null) {
                if (
                    targets.actors.length === fallback_count
                    && this.is_blur_target_actor(child)
                )
                    this.add(targets, child);
                continue;
            }

            if (seen.has(child))
                continue;

            seen.add(child);

            if (this.prefers_descendant_targets(child)) {
                const children = this.get_children(child);
                if (children.length > 0) {
                    stack.push({
                        actor: child,
                        fallback_count: targets.actors.length,
                    });
                    this.push_children(stack, children);
                    continue;
                }
            }

            if (this.is_blur_target_actor(child)) {
                this.add(targets, child);
                continue;
            }

            this.push_children(stack, this.get_children(child));
        }
    }

    prefers_descendant_targets(actor) {
        return this.has_any_style_class(actor, POPUP_DESCENDANT_TARGET_STYLE_CLASSES);
    }

    is_blur_target_actor(actor) {
        return (
            this.has_any_style_class(actor, POPUP_TARGET_STYLE_CLASSES)
            || this.has_any_style_class(actor, POPUP_CHILD_STYLE_CLASSES)
        );
    }

    get_corner_radius(target, root_actor) {
        return POPUP_CORNER_RADII.find(radius =>
            this.has_any_style_class(target, radius.style_classes)
            || this.has_any_style_class(root_actor, radius.style_classes)
        ) ?? DEFAULT_CORNER_RADIUS;
    }

    with_style_cache(callback) {
        const previous_cache = this.style_cache;
        this.style_cache = new WeakMap();

        try {
            return callback();
        } finally {
            this.style_cache = previous_cache;
        }
    }

    has_any_style_class(actor, style_classes) {
        if (!actor)
            return false;

        const classes = this.get_style_classes(actor);
        if (classes)
            return style_classes.some(style_class => classes.has(style_class));

        return style_classes.some(style_class => this.has_style_class(actor, style_class));
    }

    has_style_class(actor, style_class) {
        try {
            if (actor?.has_style_class_name)
                return actor.has_style_class_name(style_class);

            return (actor?.get_style_class_name?.() ?? '').split(/\s+/).includes(style_class);
        } catch (e) { }

        return false;
    }

    get_style_classes(actor) {
        if (!actor || !this.style_cache)
            return null;

        if (this.style_cache.has(actor))
            return this.style_cache.get(actor);

        try {
            const class_names = actor.get_style_class_name?.();
            if (typeof class_names !== 'string') {
                this.style_cache.set(actor, null);
                return null;
            }

            const classes = new Set(class_names.split(/\s+/).filter(Boolean));
            this.style_cache.set(actor, classes);
            return classes;
        } catch (e) {
            this.style_cache.set(actor, null);
            return null;
        }
    }

    create_targets() {
        return {
            actors: [],
            seen: new WeakSet(),
        };
    }

    get_children(actor) {
        try {
            return actor?.get_children?.() ?? [];
        } catch (e) {
            return [];
        }
    }

    push_children(stack, children) {
        children
            .slice()
            .reverse()
            .forEach(child => stack.push({ actor: child, fallback_count: null }));
    }

    add(targets, target) {
        if (
            this.actor.is_internal_actor(target)
            || !this.actor.watch_actor(target)
            || targets.seen.has(target)
        )
            return;

        targets.seen.add(target);
        targets.actors.push(target);
    }
};
