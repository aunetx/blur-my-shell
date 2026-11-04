import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import {
    get_component_style,
    connect_system_style_changes,
} from '../../conveniences/style.js';
import { has_style_class, is_internal_actor } from './actors.js';
import {
    DEFAULT_CORNER_RADIUS,
    POPUP_BACKGROUND_STYLES,
    POPUP_SURFACE_STYLES,
    POPUP_SURFACE_TYPES,
    PopupBlurTargets,
} from './targets.js';
import { PopupBlurSurface } from './surface/blur_surface.js';
import { PopupBlurMessageStacks } from './message_stacks.js';
import { PopupUnblurredSurfaces } from './unblurred_surfaces.js';
import { DialogBackdrops } from './dialog_backdrops.js';

const KEYBOARD_STYLE_CLASS = 'bms-keyboard-surface';
const BLUR_PARENT_STYLE_CLASS = 'bms-popup-blur-parent';
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
        this.unblurred_surfaces = new PopupUnblurredSurfaces(settings);
        this.watched_actors = new WeakSet();
        this.rescanned_actors = new WeakSet();
        this.resized_actors = new WeakSet();
        this.blur_parents = new Set();
        this.message_stacks = new PopupBlurMessageStacks(connections);
        this.targets = new PopupBlurTargets();
        this.dialog_backdrops = new DialogBackdrops(settings, effects_manager);
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
        connect_system_style_changes(this.connections, () => {
            this.update_background();
            if (this.settings.popup.PIPELINE_AUTO_MODE)
                this.update_pipeline();
        });
        this.connections.connect(
            Main.layoutManager,
            'monitors-changed',
            () => this.surfaces.forEach(surface => surface.queue_update())
        );
        const radius_keys = new Set([
            'rounded-corners',
            DEFAULT_CORNER_RADIUS.key,
            ...POPUP_SURFACE_TYPES.map(type => type.key),
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

        if (this.settings.popup.BLUR_BEHIND_DIALOGS)
            this.dialog_backdrops.enable();
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
        this.connections.connect(container, 'child-removed', (_, child) => {
            // Destroy handlers have already forgotten actors removed during disposal.
            if (this.watched_actors.has(child) || this.surfaces.has(child))
                this.queue_try_blur(child);
        });
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

        if (!actor.get_stage()) {
            this.forget_detached_actor(actor);
            return;
        }

        this.message_stacks.scan(actor);
        this.track_container(actor._delegate?._overlay);

        const targets = this.targets.find(actor);

        if (
            this.targets.is_blur_target_actor(actor)
            || has_style_class(actor, 'switcher-popup')
            || actor.get_parent() === global.window_group
        )
            this.track_container(actor);

        if (targets.length > 0)
            this.rescan_when_shown(actor, targets.some(target => this.targets.is_opt_in(target)));

        targets.forEach(target => this.blur_actor(target, actor));
    }

    /// Other extensions may add or replace the surfaces they opt in while their popup lives, so
    /// a popup is searched again when it is shown, and when its size changes if it has them.
    rescan_when_shown(actor, has_opt_in_targets) {
        if (!this.rescanned_actors.has(actor)) {
            this.rescanned_actors.add(actor);
            this.connect_rescan(actor, 'notify::mapped');
        }

        if (has_opt_in_targets && !this.resized_actors.has(actor)) {
            this.resized_actors.add(actor);
            this.connect_rescan(actor, 'notify::allocation');
        }
    }

    connect_rescan(actor, signal) {
        this.connections.connect(actor, signal, () => {
            if (actor.mapped)
                this.queue_try_blur(actor);
        });
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
        actors.filter(actor => actor.get_stage())
            .forEach(actor => this.follow_up_actors.add(actor));

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

        const surface_type = this.targets.get_surface_type(target, root_actor);
        if (surface_type.blur_property && !this.settings.popup[surface_type.blur_property]) {
            this.watch_actor(target);
            this.unblurred_surfaces.add(target);
            return;
        }

        this.destroy_blurred_ancestors(target);

        const { parent, sibling } = this.get_overlay_parent(target);
        const surface = new PopupBlurSurface(
            this.settings,
            this.effects_manager,
            target,
            root_actor,
            parent,
            sibling,
            surface_type,
            () => this.destroy_blur(target)
        );

        if (surface.enable())
            this.surfaces.set(target, surface);
    }

    destroy_blurred_ancestors(target) {
        const is_opt_in = this.targets.is_opt_in(target);
        for (let actor = target.get_parent(); actor; actor = actor.get_parent()) {
            if (this.surfaces.has(actor) && (is_opt_in || this.targets.prefers_descendant_targets(actor)))
                this.destroy_blur(actor);
            if (is_opt_in && this.targets.is_blur_target_actor(actor))
                this.mark_blur_parent(actor);
        }
    }

    /// A popup surface whose opted in descendants are blurred instead has no background.
    mark_blur_parent(actor) {
        if (this.blur_parents.has(actor))
            return;

        this.blur_parents.add(actor);
        actor.add_style_class_name(BLUR_PARENT_STYLE_CLASS);
        this.connections.connect(actor, 'destroy', () => this.blur_parents.delete(actor));
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
            this.unblurred_surfaces.forget(actor);
            this.watched_actors.delete(actor);
        });
    }

    destroy_blur(target) {
        const surface = this.surfaces.get(target);
        if (!surface)
            return;

        this.surfaces.delete(target);
        surface.destroy();
    }

    forget_detached_actor(actor) {
        // The queued scan lets ordinary reparenting finish before releasing an offstage subtree.
        this.destroy_blur(actor);
        actor.get_children().forEach(child => this.forget_detached_actor(child));
        this.containers.delete(actor);
        this.queued_actors.delete(actor);
        this.follow_up_actors.delete(actor);
        if (this.keyboard_actors.delete(actor))
            this.clear_keyboard_style(actor);
        this.unblurred_surfaces.remove(actor);
        this.message_stacks.untrack_actor(actor);
        this.connections.disconnect_all_for(actor);
        this.watched_actors.delete(actor);
        this.rescanned_actors.delete(actor);
        this.resized_actors.delete(actor);
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
        this.dialog_backdrops.update_pipeline();
    }

    update_dialog_backdrops() {
        this.dialog_backdrops.disable();
        if (this.settings.popup.BLUR_BEHIND_DIALOGS)
            this.dialog_backdrops.enable();
    }

    update_background() {
        BACKGROUND_STYLE_CLASSES.forEach(style => Main.uiGroup.remove_style_class_name(style));

        const background_style = this.get_background_style_class();
        if (background_style)
            Main.uiGroup.add_style_class_name(background_style);

        Main.layoutManager.keyboardBox.get_children()
            .forEach(actor => this.update_keyboard_style(actor, background_style));
        this.surfaces.forEach(surface => surface.update_settings());
        this.unblurred_surfaces.update();
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

        this._log("removing blur from popup surfaces");
        this.enabled = false;
        this.connections.disconnect_all();
        this.dialog_backdrops.disable();

        this.keyboard_actors.forEach(actor => this.clear_keyboard_style(actor));
        this.keyboard_actors.clear();
        this.unblurred_surfaces.clear();
        BACKGROUND_STYLE_CLASSES.forEach(style => Main.uiGroup.remove_style_class_name(style));

        this.surfaces.forEach(surface => surface.destroy());
        this.surfaces.clear();
        this.containers.clear();
        this.watched_actors = new WeakSet();
        this.rescanned_actors = new WeakSet();
        this.resized_actors = new WeakSet();
        this.blur_parents.forEach(actor => actor.remove_style_class_name(BLUR_PARENT_STYLE_CLASS));
        this.blur_parents.clear();
        this.message_stacks.disable();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > popup blur]        ${str}`);
    }
};
