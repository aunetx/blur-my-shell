import GLib from 'gi://GLib';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { ShellBlurSurface } from './shell_blur_surface.js';
import { ShellMessageStacks } from './shell_message_stacks.js';

const SHELL_STYLE_CLASSES = ['popup-menu', 'quick-toggle-menu-container', 'candidate-popup-boxpointer'];
const SHELL_TARGET_STYLE_CLASSES = ['popup-menu-content', 'quick-settings', 'quick-toggle-menu', 'notification-banner', 'candidate-popup-content'];
const SHELL_CHILD_STYLE_CLASSES = ['osd-window', 'resize-popup', 'switcher-list', 'workspace-switcher', 'modal-dialog', 'run-dialog'];
const SHELL_BACKGROUND_STYLES = ['bms-shell-background-transparent', 'bms-shell-background-light', 'bms-shell-background-dark'];

export const ShellBlur = class ShellBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.surfaces = new Map();
        this.containers = new Set();
        this.queued_actors = new WeakSet();
        this.message_stacks = new ShellMessageStacks(
            connections,
            (actor, style_class) => this.has_style_class(actor, style_class)
        );
        this.reset_id = 0;
        this.enabled = false;
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this._log("blurring shell surfaces");
        this.enabled = true;

        Main.uiGroup.add_style_class_name('bms-shell-blur-enabled');
        this.update_background();
        this.message_stacks.enable();

        this.track_container(Main.uiGroup);
        this.track_container(Main.layoutManager?.modalDialogGroup);
        this.track_container(Main.messageTray?._bannerBin);
        this.track_quick_settings();
    }

    track_container(container) {
        if (!container || this.containers.has(container))
            return;

        this.containers.add(container);
        this.message_stacks.track_container(container);

        container.get_children?.().forEach(child => this.try_blur(child));

        this.connections.connect(
            container,
            'child-added',
            (_, child) => this.queue_try_blur(child)
        );

        this.connections.connect(
            container,
            'destroy',
            () => this.containers.delete(container)
        );
    }

    track_quick_settings() {
        const menu = Main.panel?.statusArea?.quickSettings?.menu;
        this.track_container(menu?._overlay);
        menu?._overlay?.get_children().forEach(child => this.try_blur(child));
    }

    try_blur(actor) {
        if (!actor)
            return;

        this.message_stacks.scan(actor);
        this.track_container(actor._delegate?._overlay);

        if (this.has_style_class(actor, 'switcher-popup'))
            this.track_container(actor);

        this.get_blur_targets(actor).forEach(target => this.blur_actor(target, actor));
    }

    queue_try_blur(actor) {
        if (!actor || this.queued_actors.has(actor))
            return;

        this.queued_actors.add(actor);
        try {
            this.try_blur(actor);
        } catch (e) { }

        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            try {
                this.queued_actors.delete(actor);

                if (this.enabled)
                    this.try_blur(actor);
            } catch (e) { }

            return GLib.SOURCE_REMOVE;
        });
    }

    blur_actor(target, root_actor) {
        if (!target || this.surfaces.has(target))
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
    }

    get_overlay_parent(root_actor) {
        let actor = root_actor;
        while (actor?.get_parent?.()) {
            const parent = actor.get_parent();
            if (parent === Main.uiGroup || parent === Main.layoutManager?.uiGroup)
                return { parent, sibling: actor };

            actor = parent;
        }

        return { parent: Main.uiGroup, sibling: null };
    }

    get_blur_targets(actor) {
        const delegate = actor._delegate;
        const targets = [];

        if (this.has_any_style_class(delegate?.box, SHELL_TARGET_STYLE_CLASSES))
            this.add_target(targets, delegate.box);

        if (this.has_any_style_class(actor, SHELL_TARGET_STYLE_CLASSES))
            this.add_target(targets, actor);

        if (this.has_any_style_class(actor, SHELL_CHILD_STYLE_CLASSES))
            this.add_target(targets, actor);

        if (this.has_any_style_class(actor.dialogLayout, SHELL_CHILD_STYLE_CLASSES))
            this.add_target(targets, actor.dialogLayout);

        if (targets.length === 0)
            this.find_target_children(actor, targets);

        if (
            targets.length === 0
            && this.has_any_style_class(actor, SHELL_STYLE_CLASSES)
        )
            this.add_target(targets, actor);

        return targets;
    }

    find_target_children(actor, targets) {
        actor.get_children?.().forEach(child => {
            if (
                this.has_any_style_class(child, SHELL_TARGET_STYLE_CLASSES)
                || this.has_any_style_class(child, SHELL_CHILD_STYLE_CLASSES)
            ) {
                this.add_target(targets, child);
                return;
            }

            this.find_target_children(child, targets);
        });
    }

    add_target(targets, target) {
        if (target && !targets.includes(target))
            targets.push(target);
    }

    has_any_style_class(actor, style_classes) {
        return style_classes.some(style => this.has_style_class(actor, style));
    }

    has_style_class(actor, style_class) {
        try {
            if (actor?.has_style_class_name)
                return actor.has_style_class_name(style_class);

            return (actor?.get_style_class_name?.() ?? '').split(/\s+/).includes(style_class);
        } catch (e) {
            return false;
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
                SHELL_BACKGROUND_STYLES[this.settings.shell.STYLE_SHELL]
            );
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

        this._log("removing blur from shell surfaces");

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
