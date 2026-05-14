import GLib from 'gi://GLib';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { DummyPipeline } from '../conveniences/dummy_pipeline.js';
import { PaintSignals } from '../conveniences/paint_signals.js';

const SHELL_STYLE_CLASSES = [
    'popup-menu',
    'quick-toggle-menu-container',
    'candidate-popup-boxpointer'
];

const SHELL_TARGET_STYLE_CLASSES = [
    'popup-menu-content',
    'quick-settings',
    'quick-toggle-menu',
    'notification-banner',
    'candidate-popup-content'
];

const SHELL_CHILD_STYLE_CLASSES = [
    'osd-window',
    'resize-popup',
    'switcher-list',
    'workspace-switcher',
    'modal-dialog',
    'run-dialog'
];

const SHELL_BACKGROUND_STYLES = [
    'bms-shell-background-transparent',
    'bms-shell-background-light',
    'bms-shell-background-dark'
];

const SHELL_GROUPS = [
    () => Main.uiGroup,
    () => Main.layoutManager?.uiGroup,
];

export const ShellBlur = class ShellBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.paint_signals = new PaintSignals(connections);
        this.surfaces = new Map();
        this.containers = new Set();
        this.enabled = false;
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this._log("blurring shell surfaces");

        Main.uiGroup.add_style_class_name('bms-shell-blur-enabled');
        this.update_background();

        this.track_container(Main.uiGroup);
        this.track_container(Main.layoutManager?.modalDialogGroup);
        this.track_container(Main.messageTray?._bannerBin);
        this.track_quick_settings();

        this.enabled = true;
    }

    track_container(container) {
        if (!container || this.containers.has(container))
            return;

        this.containers.add(container);

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

        this.track_container(actor._delegate?._overlay);

        if (this.has_style_class(actor, 'switcher-popup'))
            this.track_container(actor);

        this.get_blur_targets(actor).forEach(target => this.blur_actor(target, actor));
    }

    queue_try_blur(actor) {
        this.try_blur(actor);

        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            try {
                if (this.enabled)
                    this.try_blur(actor);
            } catch (e) { }

            return GLib.SOURCE_REMOVE;
        });
    }

    blur_actor(target, root_actor) {
        if (!target || this.surfaces.has(target))
            return;

        const blur_actor = new St.Widget({
            name: 'bms-shell-blurred-widget',
            reactive: false,
        });
        blur_actor.add_style_class_name('bms-shell-blurred-widget');

        const pipeline = new DummyPipeline(
            this.effects_manager,
            this.settings.shell,
            blur_actor
        );

        const corner_effect = this.effects_manager.new_corner_effect({
            radius: this.settings.shell.CORNER_RADIUS,
        });
        blur_actor.add_effect(corner_effect);

        const { parent, sibling } = this.get_overlay_parent(root_actor);
        parent.add_child(blur_actor);
        this.set_blur_actor_position(blur_actor, parent, sibling);

        target.add_style_class_name?.('bms-shell-blur');

        if (this.settings.HACKS_LEVEL === 1)
            this.paint_signals.connect(blur_actor, pipeline.effect);

        const surface = {
            target,
            root_actor,
            blur_actor,
            parent,
            sibling,
            pipeline,
            corner_effect,
            signal_ids: [],
            corner_changed_id: this.settings.shell.settings.connect(
                'changed::corner-radius',
                () => corner_effect.radius = this.settings.shell.CORNER_RADIUS
            ),
        };
        this.surfaces.set(target, surface);

        this.update_surface(surface);

        this.connect_surface_actor(surface, target);
        this.connect_surface_actor(surface, root_actor);
        this.connect_surface_ancestors(surface);

        this.connections.connect(
            target,
            'destroy',
            () => this.destroy_blur(target, true)
        );
    }

    connect_surface_ancestors(surface) {
        let actor = surface.target.get_parent?.();
        while (actor && actor !== surface.parent) {
            this.connect_surface_actor(surface, actor);
            actor = actor.get_parent?.();
        }
    }

    connect_surface_actor(surface, actor) {
        if (!actor || surface.signal_ids.some(([connected_actor]) => connected_actor === actor))
            return;

        [
            'notify::allocation',
            'notify::position',
            'notify::size',
            'notify::visible',
            'notify::opacity',
            'notify::translation-x',
            'notify::translation-y',
            'notify::scale-x',
            'notify::scale-y',
        ].forEach(signal => {
            try {
                const id = actor.connect(signal, () => this.update_surface(surface));
                surface.signal_ids.push([actor, id]);
            } catch (e) { }
        });
    }

    get_overlay_parent(root_actor) {
        let actor = root_actor;
        while (actor?.get_parent?.()) {
            const parent = actor.get_parent();
            if (SHELL_GROUPS.some(get_group => parent === get_group()))
                return { parent, sibling: actor };

            actor = parent;
        }

        return { parent: Main.uiGroup, sibling: null };
    }

    set_blur_actor_position(blur_actor, parent, sibling) {
        if (sibling)
            parent.set_child_below_sibling(blur_actor, sibling);
        else
            parent.set_child_below_sibling(blur_actor, null);
    }

    update_surface(surface) {
        const { target, root_actor, blur_actor, parent, pipeline } = surface;

        try {
            if (!this.surfaces.has(target))
                return;

            if (!target.visible || !target.mapped || !target.has_allocation()) {
                blur_actor.hide();
                return;
            }

            const [target_x, target_y] = target.get_transformed_position();
            const [target_width, target_height] = target.get_transformed_size();
            let parent_x = 0;
            let parent_y = 0;

            if (parent.get_transformed_position) {
                [parent_x, parent_y] = parent.get_transformed_position();
            }

            blur_actor.set_position(
                Math.round(target_x - parent_x),
                Math.round(target_y - parent_y)
            );
            blur_actor.set_size(Math.ceil(target_width), Math.ceil(target_height));
            blur_actor.opacity = root_actor.opacity;
            blur_actor.show();
            pipeline.repaint_effect();
        } catch (e) {
            blur_actor.hide();
        }
    }

    get_blur_targets(actor) {
        const delegate = actor._delegate;
        const targets = [];

        if (SHELL_TARGET_STYLE_CLASSES.some(style => this.has_style_class(delegate?.box, style)))
            targets.push(delegate.box);

        if (SHELL_TARGET_STYLE_CLASSES.some(style => this.has_style_class(actor, style)))
            targets.push(actor);

        if (SHELL_CHILD_STYLE_CLASSES.some(style => this.has_style_class(actor, style)))
            targets.push(actor);

        if (SHELL_CHILD_STYLE_CLASSES.some(style => this.has_style_class(actor.dialogLayout, style)))
            targets.push(actor.dialogLayout);

        this.find_target_children(actor).forEach(target => targets.push(target));

        if (
            targets.length === 0
            && SHELL_STYLE_CLASSES.some(style => this.has_style_class(actor, style))
        )
            targets.push(actor);

        return [...new Set(targets)];
    }

    find_target_children(actor) {
        const targets = [];

        actor.get_children?.().forEach(child => {
            if (
                SHELL_TARGET_STYLE_CLASSES.some(style => this.has_style_class(child, style))
                || SHELL_CHILD_STYLE_CLASSES.some(style => this.has_style_class(child, style))
            )
                targets.push(child);

            this.find_target_children(child).forEach(target => targets.push(target));
        });

        return targets;
    }

    has_style_class(actor, style_class) {
        try {
            return (actor?.get_style_class_name?.() ?? '').split(/\s+/).includes(style_class);
        } catch (e) {
            return false;
        }
    }

    destroy_blur(actor, actor_already_destroyed = false) {
        const surface = this.surfaces.get(actor);
        if (!surface)
            return;

        try {
            this.paint_signals.disconnect_all_for_actor(surface.blur_actor);
        } catch (e) { }

        if (!actor_already_destroyed)
            actor.remove_style_class_name?.('bms-shell-blur');

        if (surface.corner_changed_id)
            this.settings.shell.settings.disconnect(surface.corner_changed_id);

        surface.signal_ids.forEach(([signal_actor, signal_id]) => {
            try {
                signal_actor.disconnect(signal_id);
            } catch (e) { }
        });
        surface.signal_ids = [];

        this.effects_manager.remove(surface.corner_effect);
        surface.pipeline.destroy();
        surface.blur_actor.destroy();
        this.surfaces.delete(actor);
    }

    update_background() {
        SHELL_BACKGROUND_STYLES.forEach(style => Main.uiGroup.remove_style_class_name(style));

        if (this.settings.shell.OVERRIDE_BACKGROUND)
            Main.uiGroup.add_style_class_name(
                SHELL_BACKGROUND_STYLES[this.settings.shell.STYLE_SHELL]
            );
    }

    disable() {
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

        this.connections.disconnect_all();
        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > shell]        ${str}`);
    }
};
