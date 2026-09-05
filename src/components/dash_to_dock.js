import Meta from 'gi://Meta';
import GLib from 'gi://GLib';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Signals from 'resource:///org/gnome/shell/misc/signals.js';

import { Pipeline } from '../conveniences/pipeline.js';
import { DynamicPipeline } from '../render/dynamic_surface.js';
import { RoundedPipeline } from '../render/rounded_pipeline.js';
import {
    is_supported_dock_container,
    resolve_dock_target,
} from './dock_targets.js';

import { DockSurface } from './dock_surface.js';

export const DashBlur = class DashBlur extends Signals.EventEmitter {
    constructor(connections, settings, effects_manager) {
        super();
        this.dashes = [];
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.is_static = this.settings.dash_to_dock.STATIC_BLUR;
        this.enabled = false;
        this.pending_dash_containers = new Set();
        this.discovery_id = 0;
        this.native_dash = null;
        this.native_discovery_ids = [];
    }

    enable() {
        if (this.enabled)
            return;

        this.enabled = true;
        this.is_static = this.settings.dash_to_dock.STATIC_BLUR;
        this.connections.connect(Main.uiGroup, 'child-added', (_, actor) => {
            if (is_supported_dock_container(actor))
                this.try_blur(actor);
        });
        this.connections.connect(Main.extensionManager, 'extension-state-changed',
            () => this.queue_discovery());
        this.connections.connect(Main.layoutManager, 'monitors-changed',
            () => this.queue_discovery());

        this.blur_existing_dashes();
        this.connect_to_overview();

        this.update_size();

    }

    // Finds all existing dashes on every monitor, and call `try_blur` on them
    // We cannot only blur `Main.overview.dash`, as there could be several
    blur_existing_dashes() {
        this._log("searching for dash");

        // blur every dash found, filtered by name
        Main.uiGroup.get_children()
            .filter(is_supported_dock_container)
            .forEach(dash_container => this.try_blur(dash_container));

        const native_dash = Main.overview.dash;
        if (native_dash !== this.native_dash) {
            if (this.native_dash)
                this.native_discovery_ids.forEach(id =>
                    this.connections.disconnect(this.native_dash, id));
            this.native_dash = native_dash;
            this.native_discovery_ids = [];
            if (native_dash)
                this.native_discovery_ids = this.connections.connect(native_dash,
                    ['child-added', 'child-removed', 'notify::mapped'],
                    () => this.queue_discovery());
        }
        if (resolve_dock_target(native_dash))
            this.try_blur(native_dash);
    }

    queue_discovery() {
        if (!this.enabled || this.discovery_id)
            return;
        this.discovery_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.discovery_id = 0;
            this.blur_existing_dashes();
            return GLib.SOURCE_REMOVE;
        });
    }

    _has_valid_allocation(actor) {
        return actor &&
            (!actor.has_allocation || actor.has_allocation()) &&
            actor.width > 0 && actor.height > 0;
    }

    _defer_blur_until_allocated(dash_container) {
        if (dash_container._bms_pending_blur_setup) {
            dash_container._bms_defer_retry?.();
            return;
        }

        dash_container._bms_pending_blur_setup = true;
        this.pending_dash_containers.add(dash_container);

        const connections = [];
        let cleaned = false;
        let watched_content_parent = null;
        let watched_content = null;
        let watched_background = null;
        let parent_connections = [];
        let content_connections = [];
        let background_connections = [];

        const connect = (actor, signal, handler) => {
            if (!actor)
                return null;

            try {
                const record = { actor, id: actor.connect(signal, handler) };
                connections.push(record);
                return record;
            } catch (error) {
                this._log(`could not watch deferred dash signal ${signal}: ${error}`);
                return null;
            }
        };

        const disconnect = record => {
            if (!record?.id)
                return;

            try {
                record.actor.disconnect(record.id);
            } catch (error) {
                this._log(`deferred dash signal was already removed: ${error}`);
            }
            record.id = 0;
        };

        const disconnect_all = records => {
            records.forEach(disconnect);
            records.length = 0;
        };

        const cleanup = () => {
            if (cleaned)
                return;
            cleaned = true;
            this.pending_dash_containers.delete(dash_container);
            if (dash_container._bms_defer_cleanup === cleanup) {
                delete dash_container._bms_pending_blur_setup;
                delete dash_container._bms_defer_cleanup;
                delete dash_container._bms_defer_retry;
            }
            connections.forEach(disconnect);
            connections.length = 0;
        };

        let retry = null;
        const watch_current_actors = () => {
            const target = resolve_dock_target(dash_container);
            const content_parent = target?.content_parent ?? null;
            if (content_parent !== watched_content_parent) {
                disconnect_all(parent_connections);
                disconnect_all(content_connections);
                disconnect_all(background_connections);
                watched_content_parent = content_parent;
                watched_content = null;
                watched_background = null;
                if (content_parent) {
                    parent_connections = [
                        connect(content_parent, 'notify::allocation', retry),
                        connect(content_parent, 'child-added', retry),
                        connect(content_parent, 'child-removed', retry),
                    ].filter(Boolean);
                }
            }

            const content = target?.content ?? null;
            if (content !== watched_content) {
                disconnect_all(content_connections);
                disconnect_all(background_connections);
                watched_content = content;
                watched_background = null;
                if (content)
                    content_connections = [
                        connect(content, 'notify::allocation', retry),
                    ].filter(Boolean);
            }

            const background = target?.background ?? null;
            if (background !== watched_background) {
                disconnect_all(background_connections);
                watched_background = background;
                if (background)
                    background_connections = [
                        connect(background, 'notify::allocation', retry),
                    ].filter(Boolean);
            }

            return target;
        };

        retry = () => {
            if (cleaned || !dash_container._bms_pending_blur_setup)
                return;

            const target = watch_current_actors();
            if (!this._has_valid_allocation(dash_container) ||
                !this._has_valid_allocation(target?.content_parent) ||
                !this._has_valid_allocation(target?.content) ||
                !this._has_valid_allocation(target?.background))
                return;

            cleanup();
            this.queue_discovery();
        };

        connect(dash_container, 'notify::allocation', retry);
        connect(dash_container, 'destroy', cleanup);

        const slider = resolve_dock_target(dash_container)?.slider;
        if (slider) {
            connect(slider, 'notify::child', retry);
            connect(slider, 'child-added', retry);
            connect(slider, 'child-removed', retry);
        }

        dash_container._bms_defer_cleanup = cleanup;
        dash_container._bms_defer_retry = retry;
        retry();
    }

    // Tries to blur the dash contained in the given actor
    try_blur(dash_container) {
        const target = resolve_dock_target(dash_container);
        if (!target) {
            this._defer_blur_until_allocated(dash_container);
            return;
        }

        const {
            content: dash,
            content_parent: dash_box,
            background: dash_background,
        } = target;

        if (!dash ||
            !this._has_valid_allocation(dash_container) ||
            !this._has_valid_allocation(dash_box) ||
            !this._has_valid_allocation(dash) ||
            !this._has_valid_allocation(dash_background)) {
                this._defer_blur_until_allocated(dash_container);
                return;
        }

        dash_container._bms_defer_cleanup?.();

        let dash_exist = this.dashes.find(info => info.dash === dash);
        if (dash_exist) {
            if (dash_exist.dash_background === dash_background
                && dash_exist.background_group?.get_parent() === dash_box)
                return;
            dash_exist.remove_dash_blur();
        }

        let existing_bg = dash_box.get_children().find(child => 
            child.get_name() === "bms-dash-backgroundgroup"
            && child._bms_dock_target === dash
        );

        if (existing_bg) {
            if (dash_box.contains?.(existing_bg))
                dash_box.remove_child(existing_bg);
            
            existing_bg.destroy();
        }

        // verify that we did not already blur that dash
        this._log("supported dock found, blurring it");

        let infos = this.blur_dash_from(dash, dash_container, dash_background);
        if (infos) {
            this.dashes.push(infos);
            infos.schedule_update();
            this.update_background();
        }
    }

    // Blurs the dash and returns a `DockSurface` containing its information
    blur_dash_from(dash, dash_container, dash_background) {
        let blur_result = this.add_blur(dash, dash_container);
        if (!blur_result)
            return null;
        
        let [background, background_group, bg_manager] = blur_result;
        try {
            const target = resolve_dock_target(dash_container);
            target.content_parent.insert_child_below(background_group, target.sibling ?? dash);

            const infos = new DockSurface(
                this,
                dash,
                dash_container,
                dash_background,
                background,
                background_group,
                bg_manager
            );

            return infos;
        } catch (error) {
            this.destroy_blur_resources(background_group, bg_manager);
            this._warn(`could not create dash blur: ${error}`);
            return null;
        }
    }

    add_blur(dash, dash_container = null) {
        const target_actor = dash_container || dash;
        const monitor = Main.layoutManager.findMonitorForActor(target_actor) || Main.layoutManager.primaryMonitor;
        if (!monitor)
            return null;

        const background_group = new Meta.BackgroundGroup({
            name: 'bms-dash-backgroundgroup', width: 0, height: 0
        });
        background_group._bms_dock_target = dash;

        let background = null;
        let bg_manager = null;
        let pipeline = null;
        let rounded_pipeline = null;
        const static_blur = this.settings.dash_to_dock.STATIC_BLUR;
        try {
            if (static_blur) {
                const bg_manager_list = [];
                pipeline = new Pipeline(
                    this.effects_manager,
                    global.blur_my_shell._pipelines_manager,
                    this.settings.dash_to_dock.PIPELINE
                );
                background = pipeline.create_background_with_effects(
                    monitor.index, bg_manager_list,
                    background_group, 'bms-dash-blurred-widget'
                );
                bg_manager = bg_manager_list[0];
                rounded_pipeline = new RoundedPipeline(
                    this.effects_manager,
                    () => this.settings.dash_to_dock.CORNER_RADIUS
                );
                rounded_pipeline.bind(pipeline, background);
                if (bg_manager)
                    bg_manager._bms_rounded_pipeline = rounded_pipeline;
            } else {
                pipeline = new DynamicPipeline(
                    this.effects_manager,
                    global.blur_my_shell._pipelines_manager,
                    this.settings.dash_to_dock.PIPELINE,
                    {
                        corner_radius: this.settings.dash_to_dock.CORNER_RADIUS,
                    }
                );
                [background, bg_manager] = pipeline.create_background_with_effect(
                    background_group, 'bms-dash-blurred-widget'
                );
            }

            if (!background || !bg_manager)
                throw new Error('dash blur has no background owner');

            return [background, background_group, bg_manager];
        } catch (error) {
            try {
                rounded_pipeline?.destroy();
            } catch (e) { }
            try {
                pipeline?.destroy();
            } catch (e) { }
            if (bg_manager) {
                bg_manager._bms_pipeline = null;
                try {
                    bg_manager.destroy();
                } catch (e) { }
            }
            try {
                background_group.destroy_all_children();
                background_group.destroy();
            } catch (e) { }
            this._warn(`could not build dash blur: ${error}`);
            return null;
        }
    }

    destroy_blur_resources(background_group, bg_manager) {
        try {
            bg_manager?._bms_rounded_pipeline?.destroy();
        } catch (e) { }
        try {
            bg_manager?._bms_pipeline?.destroy();
        } catch (e) { }
        if (bg_manager) {
            bg_manager._bms_pipeline = null;
            try {
                bg_manager.destroy();
            } catch (e) { }
        }
        try {
            background_group.get_parent()?.remove_child(background_group);
            background_group.destroy_all_children();
            background_group.destroy();
        } catch (e) { }
    }

    change_blur_type() {
        this.is_static = this.settings.dash_to_dock.STATIC_BLUR;
        this.emit('change-blur-type');

        this.update_background();
    }

    /// Connect when overview if opened/closed to hide/show the blur accordingly
    connect_to_overview() {
        this.connections.disconnect_all_for(Main.overview);
        this.connections.connect(Main.overview, 'showing', () => this.queue_discovery());

        if (this.settings.dash_to_dock.UNBLUR_IN_OVERVIEW) {
            this.connections.connect(
                Main.overview, 'showing', _ => this.hide()
            );
            this.connections.connect(
                Main.overview, 'hidden', _ => this.show()
            );

            if (Main.overview.visible)
                this.hide();
            else
                this.show();
        } else {
            this.show();
        }
    };

    /// Updates the background to either remove it or not, according to the
    /// user preferences.
    update_background() {
        this._log("updating background");
        if (this.settings.dash_to_dock.OVERRIDE_BACKGROUND)
            this.emit('override-style');
        else
            this.emit('remove-style');
    }

    update_pipeline() {
        this.emit('update-pipeline');
    }

    update_corner_radius() {
        this.emit('update-corner-radius');
    }

    update_size() {
        this.emit('update-size');
    }

    show() {
        this.emit('show');
    }
    hide() {
        this.emit('hide');
    }

    disable() {
        if (!this.enabled)
            return;

        this._log("removing blur from dashes");

        if (this.discovery_id)
            GLib.Source.remove(this.discovery_id);
        this.discovery_id = 0;
        this.native_dash = null;

        this.emit('remove-dashes');

        [...this.pending_dash_containers].forEach(container =>
            container._bms_defer_cleanup?.()
        );
        this.pending_dash_containers.clear();

        this.dashes = [];
        this.connections.disconnect_all();

        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > dash manager] ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > dash manager] ${str}`);
    }
};
