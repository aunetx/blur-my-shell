import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import Meta from 'gi://Meta';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {
    POPUP_BACKGROUND_STYLES,
    PopupBlurTargets,
} from './targets.js';
import { SurfaceSettings } from '../../conveniences/surface_settings.js';
import { PopupBlurSurface } from './blur_surface.js';
import { PopupBlurMessageStacks } from './message_stacks.js';
const POPUP_INTERNAL_STYLE_CLASSES = ['bms-popup-blurred-widget', 'bms-popup-backgroundgroup'];
const POPUP_INTERNAL_NAMES = ['bms-popup-blurred-widget', 'bms-popup-backgroundgroup'];
export const PopupBlur = class PopupBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.blur_settings = new SurfaceSettings(settings, 'popup');
        this.effects_manager = effects_manager;
        this.surfaces = new Map();
        this.containers = new Set();
        this.queued_actors = new Set();
        this.watched_actors = new WeakSet();
        this.destroyed_actors = new WeakSet();
        this.interface_settings = new Gio.Settings({ schema_id: 'org.gnome.desktop.interface' });
        this.message_stacks = new PopupBlurMessageStacks(connections);
        this.targets = new PopupBlurTargets(this);
        this.queue_id = 0;
        this.follow_up_queue_id = 0;
        this.follow_up_actors = new Set();
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
        this.message_stacks.enable();
        this.connections.connect(
            this.interface_settings,
            'changed::color-scheme',
            () => this.update_background()
        );
        this.connections.connect(
            this.interface_settings,
            'changed::gtk-theme',
            () => this.update_background()
        );
        this.connections.connect(
            Main.sessionMode,
            'updated',
            () => this.update_background()
        );
        this.connections.connect(
            St.Settings.get(),
            'notify::color-scheme',
            () => this.update_background()
        );

        this.track_container(Main.uiGroup);
        this.track_container(Main.layoutManager?.uiGroup);
        this.track_container(Main.layoutManager?.panelBox);
        (Main.osdWindowManager?._osdWindows ?? []).forEach(window => this.track_container(window));
        this.track_container(Main.layoutManager?.modalDialogGroup);
        this.track_container(Main.messageTray?._bannerBin);
        this.track_quick_settings();
        this.track_container(global.window_group);
        this.connect_to_overview();
    }

    connect_to_overview() {
        const refresh_surfaces = () => {
            this.surfaces.forEach(surface => surface.queue_update({ force: true }));
        };

        this.connections.connect(Main.overview, 'showing', refresh_surfaces);
        this.connections.connect(Main.overview, 'hidden', refresh_surfaces);
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
    }

    try_blur(actor) {
        if (this.is_internal_actor(actor) || !this.watch_actor(actor))
            return;

        this.message_stacks.scan(actor);
        this.track_container(this.get_actor_overlay(actor));

        const targets = this.get_blur_targets(actor);

        if (this.targets.is_blur_target_actor(actor))
            this.track_container(actor);

        if (this.has_style_class(actor, 'switcher-popup'))
            this.track_container(actor);

        if (this.is_window_actor(actor))
            this.track_container(actor);

        targets.forEach(target => this.blur_actor(target, actor));
    }

    queue_try_blur(actor) {
        if (this.is_internal_actor(actor) || !this.watch_actor(actor))
            return;

        this.queued_actors.add(actor);
        if (this.queue_id)
            return;

        this.queue_id = global.compositor.get_laters().add(Meta.LaterType.BEFORE_REDRAW, () => {
            this.queue_id = 0;
            const actors = [...this.queued_actors];
            this.queued_actors.clear();

            this.try_blur_actors(actors);
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
            const actors = [...this.follow_up_actors];
            this.follow_up_actors.clear();

            this.try_blur_actors(actors);

            return GLib.SOURCE_REMOVE;
        });
    }

    try_blur_actors(actors) {
        if (!this.enabled)
            return;

        actors.forEach(actor => {
            try {
                if (!this.destroyed_actors.has(actor) && !this.is_internal_actor(actor))
                    this.try_blur(actor);
            } catch (e) { }
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
        if (
            this.is_internal_actor(target)
            || this.is_internal_actor(root_actor)
            || !this.watch_actor(target)
            || !this.watch_actor(root_actor)
        )
            return;

        if (this.surfaces.has(target))
            return;

        this.destroy_blurred_ancestors(target);

        const { parent, sibling } = this.get_overlay_parent(root_actor, target);
        const surface = new PopupBlurSurface(
            this.connections,
            this.settings,
            this.effects_manager,
            target,
            root_actor,
            parent,
            sibling,
            () => this.targets.get_corner_radius(target, root_actor),
            () => this.enabled && this.surfaces.has(target)
        );

        this.surfaces.set(target, surface);

        try {
            if (surface.enable())
                return this.connect_surface(target, root_actor);
        } catch (e) { }

        this.surfaces.delete(target);
        try {
            surface.destroy();
        } catch (e) { }
    }

    connect_surface(target, root_actor) {
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

    destroy_blurred_ancestors(actor) {
        try {
            actor = actor.get_parent?.();
        } catch (e) {
            return;
        }

        while (actor && !this.destroyed_actors.has(actor)) {
            if (this.surfaces.has(actor) && this.targets.prefers_descendant_targets(actor)) {
                this.destroy_blur(actor);
            }

            try {
                actor = actor.get_parent?.();
            } catch (e) {
                return;
            }
        }
    }

    get_overlay_parent(root_actor, target = null) {
        if (target) {
            const found = this.find_boxpointer_ancestor(target);
            if (found) {
                this._log(`get_overlay_parent: BoxPointer detected (${found.boxpointer.constructor.name}), adding blur as child of BoxPointer below bin`);
                return { parent: found.boxpointer, sibling: found.bin };
            }
        }

        this._log(`get_overlay_parent: no BoxPointer for target=${target?.constructor.name}, falling through`);

        let actor = root_actor;
        let child = null;
        while (actor && !this.destroyed_actors.has(actor)) {
            let parent = null;
            try {
                parent = actor.get_parent?.();
            } catch (e) {
                break;
            }

            if (!parent)
                break;

            if (
                parent === Main.uiGroup
                || parent === Main.layoutManager?.uiGroup
                || parent === Main.layoutManager?.panelBox
            )
                return { parent, sibling: actor };

            if (parent === global.window_group)
                return { parent: actor, sibling: child };

            child = actor;
            actor = parent;
        }

        return { parent: Main.uiGroup, sibling: null };
    }

    find_boxpointer_ancestor(actor) {
        let current = actor;
        while (current) {
            let bin = null;
            try { bin = current.bin; } catch (e) { }
            if (bin) {
                let children = [];
                try { children = current.get_children?.() ?? []; }
                catch (e) { }
                if (children.includes(bin))
                    return { boxpointer: current, bin };
            }

            let parent;
            try { parent = current.get_parent?.(); } catch (e) { return null; }
            if (!parent || parent === current)
                return null;
            current = parent;
        }
        return null;
    }

    get_blur_targets(actor) {
        return this.targets.find(actor);
    }

    has_any_style_class(actor, style_classes) {
        if (!actor || this.destroyed_actors.has(actor))
            return false;

        try {
            const class_names = actor.get_style_class_name?.();
            if (typeof class_names === 'string') {
                const normalized = ` ${class_names.trim().replace(/\s+/g, ' ')} `;
                return style_classes.some(style_class => normalized.includes(` ${style_class} `));
            }
        } catch (e) { }

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

    is_window_actor(actor) {
        try {
            return actor?.get_parent?.() === global.window_group;
        } catch (e) {
            return false;
        }
    }

    is_internal_actor(actor) {
        if (!actor)
            return false;

        if (this.has_any_style_class(actor, POPUP_INTERNAL_STYLE_CLASSES))
            return true;

        try {
            return POPUP_INTERNAL_NAMES.includes(actor.name ?? actor.get_name?.());
        } catch (e) {
            return false;
        }
    }

    watch_actor(actor) {
        if (!actor || this.destroyed_actors.has(actor))
            return false;
        if (this.watched_actors.has(actor))
            return true;

        try {
            this.connections.connect(actor, 'destroy', () => {
                this.destroyed_actors.add(actor);
                this.containers.delete(actor);
            });
        } catch (e) {
            return false;
        }

        this.watched_actors.add(actor);
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

        this.surfaces.delete(actor);
        try {
            surface.destroy(actor_already_destroyed);
        } catch (e) { }
    }

    reset() {
        if (!this.enabled)
            return;

        this.cancel_queued_blurs();

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
        POPUP_BACKGROUND_STYLES.forEach(style => Main.uiGroup.remove_style_class_name(style));

        if (this.blur_settings.OVERRIDE_BACKGROUND)
            Main.uiGroup.add_style_class_name(
                POPUP_BACKGROUND_STYLES[this.get_background_style()]
            );

        this.surfaces.forEach(surface => surface.update_settings());
    }

    get_background_style() {
        const style = this.blur_settings.USE_GLOBAL ?
            this.blur_settings.BACKGROUND_STYLE :
            this.settings.popup.STYLE_POPUP;
        if (style >= 0 && style < POPUP_BACKGROUND_STYLES.length)
            return style;

        const theme = St.ThemeContext.get_for_stage(global.stage).get_theme?.();
        let uri = theme?.default_stylesheet?.get_uri?.();
        if (theme?.application_stylesheet)
            uri = theme?.application_stylesheet?.get_uri?.();
        const lower_uri = typeof uri === 'string' ? uri.toLowerCase() : '';
        if (lower_uri.includes('yaru'))
            return lower_uri.includes('dark') ? 2 : 1;

        const shell_style = Main.getStyleVariant?.();
        if (shell_style === 'light')
            return 1;

        if (shell_style === 'dark')
            return 2;

        return this.interface_settings.get_string('color-scheme') === 'prefer-dark' ? 2 : 1;
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

        POPUP_BACKGROUND_STYLES.forEach(style => Main.uiGroup.remove_style_class_name(style));

        const actors = [...this.surfaces.keys()];
        actors.forEach(actor => this.destroy_blur(actor));
        this.surfaces.clear();
        this.containers.clear();
        this.watched_actors = new WeakSet();
        this.destroyed_actors = new WeakSet();
        this.message_stacks.disable();

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > popup blur]        ${str}`);
    }
};
