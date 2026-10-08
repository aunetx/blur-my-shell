import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { get_component_style, connect_system_style_changes } from '../../conveniences/style.js';
import { has_style_class, is_internal_actor } from './actors.js';
import {
    DEFAULT_CORNER_RADIUS,
    POPUP_BACKGROUND_STYLES,
    POPUP_CORNER_RADII,
    POPUP_SURFACE_STYLES,
    PopupBlurTargets,
} from './targets.js';
import { PopupBlurSurface } from './blur_surface.js';
import { PopupBlurMessageStacks } from './message_stacks.js';

const KEYBOARD_STYLE_CLASS = 'bms-keyboard-surface';
const BACKGROUND_STYLE_CLASSES = [...POPUP_BACKGROUND_STYLES, ...POPUP_SURFACE_STYLES];

export const PopupBlur = class PopupBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.surfaces = new Map();
        this.containers = new Set();
        this.queued_actors = new Set();
        this.follow_up_actors = new Set();
        this.keyboard_actors = new Set();
        this.watched_actors = new WeakSet();
        this.message_stacks = new PopupBlurMessageStacks(connections);
        this.targets = new PopupBlurTargets();
        this.queue_id = 0;
        this.follow_up_queue_id = 0;
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

        this.update_background();
        connect_system_style_changes(this.connections, () => this.update_background());
        this.connections.connect(
            Main.layoutManager,
            'monitors-changed',
            () => this.surfaces.forEach(surface => surface.queue_update())
        );
        const radius_keys = new Set([
            'rounded-corners',
            DEFAULT_CORNER_RADIUS.key,
            ...POPUP_CORNER_RADII.map(radius => radius.key),
        ]);
        this.connections.connect(
            this.settings.popup.settings,
            [...radius_keys].map(key => `changed::${key}`),
            () => this.surfaces.forEach(surface => surface.update_settings())
        );

        this.track_container(Main.uiGroup);
        Main.osdWindowManager._osdWindows.forEach(window => this.track_container(window));
        this.track_container(Main.layoutManager.modalDialogGroup);
        this.track_container(Main.layoutManager.screenShieldGroup);
        this.track_container(Main.messageTray._bannerBin);
        this.track_container(Main.panel.statusArea.quickSettings.menu._overlay);
        this.track_container(global.window_group);
        this.track_keyboard();
    }

    track_container(container) {
        if (!container || this.containers.has(container))
            return;

        this.watch_actor(container);
        this.containers.add(container);
        this.message_stacks.track_container(container);

        container.get_children().forEach(child => this.try_blur(child));

        this.connections.connect(
            container,
            'child-added',
            (_, child) => this.queue_try_blur(child)
        );
    }

    track_keyboard() {
        const keyboard_box = Main.layoutManager.keyboardBox;
        this.track_container(keyboard_box);

        this.connections.connect(
            keyboard_box,
            'child-added',
            (_, child) => this.update_keyboard_style(child)
        );
        this.connections.connect(
            keyboard_box,
            'child-removed',
            (_, child) => {
                if (this.keyboard_actors.delete(child))
                    this.clear_keyboard_style(child);
            }
        );
    }

    try_blur(actor) {
        if (is_internal_actor(actor))
            return;

        this.message_stacks.scan(actor);
        this.track_container(actor._delegate?._overlay);

        const targets = this.targets.find(actor);

        if (
            this.targets.is_blur_target_actor(actor)
            || has_style_class(actor, 'switcher-popup')
            || actor.get_parent() === global.window_group
        )
            this.track_container(actor);

        targets.forEach(target => this.blur_actor(target, actor));
    }

    queue_try_blur(actor) {
        if (is_internal_actor(actor))
            return;

        this.watch_actor(actor);
        this.queued_actors.add(actor);
        if (this.queue_id)
            return;

        this.queue_id = global.compositor.get_laters().add(Meta.LaterType.BEFORE_REDRAW, () => {
            this.queue_id = 0;
            const actors = [...this.queued_actors];
            this.queued_actors.clear();

            actors.forEach(queued_actor => this.try_blur(queued_actor));
            this.queue_follow_up_blurs(actors);

            return GLib.SOURCE_REMOVE;
        });
    }

    queue_follow_up_blurs(actors) {
        actors.forEach(actor => this.follow_up_actors.add(actor));

        if (this.follow_up_queue_id || this.follow_up_actors.size === 0)
            return;

        this.follow_up_queue_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.follow_up_queue_id = 0;
            const follow_up_actors = [...this.follow_up_actors];
            this.follow_up_actors.clear();

            follow_up_actors.forEach(actor => this.try_blur(actor));

            return GLib.SOURCE_REMOVE;
        });
    }

    cancel_queued_blurs() {
        if (this.queue_id) {
            global.compositor.get_laters().remove(this.queue_id);
            this.queue_id = 0;
        }
        if (this.follow_up_queue_id) {
            GLib.source_remove(this.follow_up_queue_id);
            this.follow_up_queue_id = 0;
        }
        this.queued_actors.clear();
        this.follow_up_actors.clear();
    }

    blur_actor(target, root_actor) {
        if (this.surfaces.has(target))
            return;

        this.destroy_blurred_ancestors(target);

        const { parent, sibling } = this.get_overlay_parent(target);
        const surface = new PopupBlurSurface(
            this.settings,
            this.effects_manager,
            target,
            root_actor,
            parent,
            sibling,
            this.targets.get_corner_radius(target, root_actor),
            () => this.destroy_blur(target)
        );

        if (surface.enable())
            this.surfaces.set(target, surface);
    }

    destroy_blurred_ancestors(target) {
        for (let actor = target.get_parent(); actor; actor = actor.get_parent()) {
            if (this.surfaces.has(actor) && this.targets.prefers_descendant_targets(actor))
                this.destroy_blur(actor);
        }
    }

    get_overlay_parent(target) {
        if (has_style_class(target, 'screenshot-ui-panel')) {
            const parent = Main.screenshotUI;
            let sibling = target;
            while (sibling.get_parent() && sibling.get_parent() !== parent)
                sibling = sibling.get_parent();
            return { parent, sibling };
        }

        const overlay_groups = [
            Main.uiGroup,
            Main.layoutManager.modalDialogGroup,
            Main.layoutManager.screenShieldGroup,
        ];

        // A scan can discover several dialogs with a shared container as root.
        // Place each blur above earlier dialogs and below its own dialog.
        let actor = target;
        let child = null;
        for (let parent = actor.get_parent(); parent; parent = actor.get_parent()) {
            if (overlay_groups.includes(parent))
                return { parent, sibling: actor };

            if (parent === global.window_group)
                return { parent: actor, sibling: child ?? actor.get_last_child() };

            child = actor;
            actor = parent;
        }

        return { parent: Main.uiGroup, sibling: null };
    }

    watch_actor(actor) {
        if (this.watched_actors.has(actor))
            return;

        this.watched_actors.add(actor);
        this.connections.connect(actor, 'destroy', () => {
            this.containers.delete(actor);
            this.queued_actors.delete(actor);
            this.follow_up_actors.delete(actor);
            this.keyboard_actors.delete(actor);
        });
    }

    destroy_blur(target) {
        const surface = this.surfaces.get(target);
        if (!surface)
            return;

        this.surfaces.delete(target);
        surface.destroy();
    }

    reset() {
        if (!this.enabled)
            return;

        this.disable();
        this.reset_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.reset_id = 0;

            if (this.settings.popup.BLUR)
                this.enable();

            return GLib.SOURCE_REMOVE;
        });
    }

    update_pipeline() {
        this.surfaces.forEach(surface => surface.update_pipeline());
    }

    update_background() {
        BACKGROUND_STYLE_CLASSES.forEach(style => Main.uiGroup.remove_style_class_name(style));

        const background_style = this.get_background_style_class();
        if (background_style)
            Main.uiGroup.add_style_class_name(background_style);

        Main.layoutManager.keyboardBox.get_children()
            .forEach(actor => this.update_keyboard_style(actor, background_style));
        this.surfaces.forEach(surface => surface.update_settings());
    }

    get_background_style_class() {
        if (!this.settings.popup.OVERRIDE_BACKGROUND)
            return null;

        const styles = this.settings.popup.PRESERVE_SHELL_THEME
            ? POPUP_SURFACE_STYLES
            : POPUP_BACKGROUND_STYLES;
        return styles[get_component_style(this.settings.popup.STYLE_POPUP, POPUP_BACKGROUND_STYLES)];
    }

    update_keyboard_style(actor, background_style = this.get_background_style_class()) {
        this.watch_actor(actor);
        this.keyboard_actors.add(actor);
        BACKGROUND_STYLE_CLASSES.forEach(style => actor.remove_style_class_name(style));
        actor.add_style_class_name(KEYBOARD_STYLE_CLASS);
        if (background_style)
            actor.add_style_class_name(background_style);
    }

    clear_keyboard_style(actor) {
        actor.remove_style_class_name(KEYBOARD_STYLE_CLASS);
        BACKGROUND_STYLE_CLASSES.forEach(style => actor.remove_style_class_name(style));
    }

    disable() {
        if (this.reset_id) {
            GLib.source_remove(this.reset_id);
            this.reset_id = 0;
        }

        this.cancel_queued_blurs();

        if (!this.enabled) {
            this._log("blur already removed");
            return;
        }

        this._log("removing blur from popup surfaces");
        this.enabled = false;
        this.connections.disconnect_all();

        this.keyboard_actors.forEach(actor => this.clear_keyboard_style(actor));
        this.keyboard_actors.clear();
        BACKGROUND_STYLE_CLASSES.forEach(style => Main.uiGroup.remove_style_class_name(style));

        this.surfaces.forEach(surface => surface.destroy());
        this.surfaces.clear();
        this.containers.clear();
        this.watched_actors = new WeakSet();
        this.message_stacks.disable();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > popup blur]        ${str}`);
    }
};
