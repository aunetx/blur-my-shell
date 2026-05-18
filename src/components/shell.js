import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { ShellBlurSurface } from './shell_blur_surface.js';
import { ShellMessageStacks } from './shell_message_stacks.js';

const SHELL_STYLE_CLASSES = ['popup-menu', 'quick-toggle-menu-container', 'candidate-popup-boxpointer'];
const SHELL_TARGET_STYLE_CLASSES = ['popup-menu-content', 'quick-settings', 'quick-toggle-menu', 'notification-banner', 'candidate-popup-content'];
const SHELL_CHILD_STYLE_CLASSES = ['osd-window', 'resize-popup', 'switcher-list', 'workspace-switcher', 'modal-dialog', 'run-dialog'];
const SHELL_BACKGROUND_STYLES = ['bms-shell-background-transparent', 'bms-shell-background-light', 'bms-shell-background-dark'];
const SHELL_INTERNAL_STYLE_CLASSES = ['bms-shell-blurred-widget', 'bms-shell-tint-widget', 'bms-shell-backgroundgroup'];
const SHELL_INTERNAL_NAMES = ['bms-shell-blurred-widget', 'bms-shell-tint-widget', 'bms-shell-backgroundgroup'];
const SHELL_BACKGROUND_STYLE_AUTO = 3;
const DEFAULT_CORNER_RADIUS = { key: 'corner-radius', property: 'CORNER_RADIUS' };
const SHELL_CORNER_RADII = [
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
];

export const ShellBlur = class ShellBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.surfaces = new Map();
        this.containers = new Set();
        this.queued_actors = new WeakSet();
        this.watched_actors = new WeakSet();
        this.destroyed_actors = new WeakSet();
        this.interface_settings = new Gio.Settings({ schema_id: 'org.gnome.desktop.interface' });
        this.message_stacks = new ShellMessageStacks(connections);
        this.reset_id = 0;
        this.enabled = false;
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this._log("blurring popup surfaces");
        this.enabled = true;

        Main.uiGroup.add_style_class_name('bms-shell-blur-enabled');
        this.update_background();
        this.message_stacks.enable();
        this.connections.connect(
            this.interface_settings,
            'changed::color-scheme',
            () => this.update_background()
        );

        this.track_container(Main.uiGroup);
        this.track_container(Main.layoutManager?.modalDialogGroup);
        this.track_container(Main.messageTray?._bannerBin);
        this.track_quick_settings();
    }

    track_container(container) {
        if (!container || this.containers.has(container))
            return;
        if (!this.watch_actor(container))
            return;

        this.containers.add(container);
        this.message_stacks.track_container(container);

        this.get_children(container).forEach(child => this.try_blur(child));

        this.connections.connect(
            container,
            'child-added',
            (_, child) => this.queue_try_blur(child)
        );
    }

    track_quick_settings() {
        const menu = Main.panel?.statusArea?.quickSettings?.menu;
        this.track_container(menu?._overlay);
        this.get_children(menu?._overlay).forEach(child => this.try_blur(child));
    }

    try_blur(actor) {
        if (this.is_internal_actor(actor) || !this.watch_actor(actor))
            return;

        this.message_stacks.scan(actor);
        this.track_container(this.get_actor_overlay(actor));

        if (this.has_style_class(actor, 'switcher-popup'))
            this.track_container(actor);

        this.get_blur_targets(actor).forEach(target => this.blur_actor(target, actor));
    }

    queue_try_blur(actor) {
        if (this.is_internal_actor(actor) || !this.watch_actor(actor) || this.queued_actors.has(actor))
            return;

        this.queued_actors.add(actor);
        try {
            this.try_blur(actor);
        } catch (e) { }

        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            try {
                this.queued_actors.delete(actor);

                if (this.enabled && !this.destroyed_actors.has(actor) && !this.is_internal_actor(actor))
                    this.try_blur(actor);
            } catch (e) { }

            return GLib.SOURCE_REMOVE;
        });
    }

    blur_actor(target, root_actor) {
        if (
            this.is_internal_actor(target)
            || this.is_internal_actor(root_actor)
            || !this.watch_actor(target)
            || !this.watch_actor(root_actor)
            || this.surfaces.has(target)
        )
            return;

        const { parent, sibling } = this.get_overlay_parent(root_actor);
        const surface = new ShellBlurSurface(
            this.connections,
            this.settings,
            this.effects_manager,
            target,
            root_actor,
            parent,
            sibling,
            this.get_corner_radius(target, root_actor),
            () => this.enabled && this.surfaces.has(target)
        );

        this.surfaces.set(target, surface);

        if (!surface.enable()) {
            this.surfaces.delete(target);
            return;
        }

        this.connections.connect(
            target,
            'destroy',
            () => this.destroy_blur(target, true)
        );

        if (root_actor !== target) {
            this.connections.connect(
                root_actor,
                'destroy',
                () => this.destroy_blur(target, true)
            );
        }
    }

    get_overlay_parent(root_actor) {
        let actor = root_actor;
        while (actor && !this.destroyed_actors.has(actor)) {
            let parent = null;
            try {
                parent = actor.get_parent?.();
            } catch (e) {
                break;
            }

            if (!parent)
                break;

            if (parent === Main.uiGroup || parent === Main.layoutManager?.uiGroup)
                return { parent, sibling: actor };

            actor = parent;
        }

        return { parent: Main.uiGroup, sibling: null };
    }

    get_corner_radius(target, root_actor) {
        return SHELL_CORNER_RADII.find(radius =>
            this.has_any_style_class(target, radius.style_classes)
            || this.has_any_style_class(root_actor, radius.style_classes)
        ) ?? DEFAULT_CORNER_RADIUS;
    }

    get_blur_targets(actor) {
        if (this.is_internal_actor(actor) || !this.watch_actor(actor))
            return [];

        const delegate = this.get_actor_delegate(actor);
        const targets = [];

        if (this.watch_actor(delegate?.box) && this.has_any_style_class(delegate.box, SHELL_TARGET_STYLE_CLASSES))
            this.add_target(targets, delegate.box);

        if (this.has_any_style_class(actor, SHELL_TARGET_STYLE_CLASSES))
            this.add_target(targets, actor);

        if (this.has_any_style_class(actor, SHELL_CHILD_STYLE_CLASSES))
            this.add_target(targets, actor);

        const dialog_layout = this.get_actor_dialog_layout(actor);
        if (this.watch_actor(dialog_layout) && this.has_any_style_class(dialog_layout, SHELL_CHILD_STYLE_CLASSES))
            this.add_target(targets, dialog_layout);

        if (targets.length === 0)
            this.find_target_children(actor, targets);

        if (
            targets.length === 0
            && this.has_any_style_class(actor, SHELL_STYLE_CLASSES)
        )
            this.add_target(targets, actor);

        return targets;
    }

    find_target_children(actor, targets, seen = new WeakSet()) {
        if (this.is_internal_actor(actor) || !this.watch_actor(actor) || seen.has(actor))
            return;
        seen.add(actor);

        this.get_children(actor).forEach(child => {
            if (this.is_internal_actor(child) || !this.watch_actor(child))
                return;

            if (
                this.has_any_style_class(child, SHELL_TARGET_STYLE_CLASSES)
                || this.has_any_style_class(child, SHELL_CHILD_STYLE_CLASSES)
            ) {
                this.add_target(targets, child);
                return;
            }

            this.find_target_children(child, targets, seen);
        });
    }

    add_target(targets, target) {
        if (!this.is_internal_actor(target) && this.watch_actor(target) && !targets.includes(target))
            targets.push(target);
    }

    has_any_style_class(actor, style_classes) {
        return style_classes.some(style => this.has_style_class(actor, style));
    }

    has_style_class(actor, style_class) {
        if (!actor || this.destroyed_actors.has(actor))
            return false;

        try {
            if (actor?.has_style_class_name)
                return actor.has_style_class_name(style_class);

            return (actor?.get_style_class_name?.() ?? '').split(/\s+/).includes(style_class);
        } catch (e) {
            return false;
        }
    }

    is_internal_actor(actor) {
        if (!actor)
            return false;

        if (this.has_any_style_class(actor, SHELL_INTERNAL_STYLE_CLASSES))
            return true;

        try {
            return SHELL_INTERNAL_NAMES.includes(actor.name ?? actor.get_name?.());
        } catch (e) {
            return false;
        }
    }

    watch_actor(actor) {
        if (!actor || this.destroyed_actors.has(actor))
            return false;
        if (this.watched_actors.has(actor))
            return true;

        this.watched_actors.add(actor);
        try {
            this.connections.connect(actor, 'destroy', () => {
                this.destroyed_actors.add(actor);
                this.containers.delete(actor);
            });
        } catch (e) {
            return false;
        }

        return true;
    }

    get_children(actor) {
        if (!this.watch_actor(actor))
            return [];

        try {
            return actor.get_children?.() ?? [];
        } catch (e) {
            return [];
        }
    }

    get_actor_delegate(actor) {
        if (!this.watch_actor(actor))
            return null;

        try {
            return actor._delegate ?? null;
        } catch (e) {
            return null;
        }
    }

    get_actor_overlay(actor) {
        return this.get_actor_delegate(actor)?._overlay ?? null;
    }

    get_actor_dialog_layout(actor) {
        if (!this.watch_actor(actor))
            return null;

        try {
            return actor.dialogLayout ?? null;
        } catch (e) {
            return null;
        }
    }

    destroy_blur(actor, actor_already_destroyed = false) {
        const surface = this.surfaces.get(actor);
        if (!surface)
            return;

        surface.destroy(actor_already_destroyed);
        this.surfaces.delete(actor);
    }

    reset() {
        if (!this.enabled)
            return;

        this.disable();
        this.reset_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.reset_id = 0;

            if (this.settings.shell.BLUR)
                this.enable();

            return GLib.SOURCE_REMOVE;
        });
    }

    update_pipeline() {
        this.surfaces.forEach(surface => surface.update_pipeline());
    }

    update_background() {
        SHELL_BACKGROUND_STYLES.forEach(style => Main.uiGroup.remove_style_class_name(style));

        if (this.settings.shell.OVERRIDE_BACKGROUND)
            Main.uiGroup.add_style_class_name(
                SHELL_BACKGROUND_STYLES[this.get_background_style()]
            );
    }

    get_background_style() {
        if (this.settings.shell.STYLE_SHELL !== SHELL_BACKGROUND_STYLE_AUTO)
            return this.settings.shell.STYLE_SHELL;

        return this.interface_settings.get_string('color-scheme') === 'prefer-dark' ? 2 : 1;
    }

    disable() {
        if (this.reset_id) {
            GLib.source_remove(this.reset_id);
            this.reset_id = 0;
        }

        if (!this.enabled) {
            this._log("blur already removed");
            return;
        }

        this._log("removing blur from popup surfaces");

        Main.uiGroup.remove_style_class_name('bms-shell-blur-enabled');
        SHELL_BACKGROUND_STYLES.forEach(style => Main.uiGroup.remove_style_class_name(style));

        const actors = [...this.surfaces.keys()];
        actors.forEach(actor => this.destroy_blur(actor));
        this.surfaces.clear();
        this.containers.clear();
        this.message_stacks.disable();

        this.connections.disconnect_all();
        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > shell]        ${str}`);
    }
};
