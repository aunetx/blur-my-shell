import Meta from 'gi://Meta';
import Graphene from 'gi://Graphene';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Signals from 'resource:///org/gnome/shell/misc/signals.js';

import * as utils from '../conveniences/utils.js';

import { Pipeline } from '../conveniences/pipeline.js';
import { DynamicPipeline } from '../render/dynamic_surface.js';
import { RoundedPipeline } from '../render/rounded_pipeline.js';
import {
    is_supported_dock_container,
    resolve_dock_target,
} from './dock_targets.js';

const DASH_STYLES = [
    "transparent-dash",
    "light-dash",
    "dark-dash"
];

const GEOMETRY_SIGNALS = [
    'notify::allocation',
    'notify::position',
    'notify::size',
    'notify::translation-x',
    'notify::translation-y',
    'notify::scale-x',
    'notify::scale-y',
];


/// This type of object is created for every dash found, and talks to the main
/// DashBlur thanks to signals.
///
/// This allows to dynamically track the created dashes for each screen.
class DashInfos {
    constructor(
        dash_blur, dash, dash_container, dash_background,
        background, background_group, bg_manager
    ) {
        // the parent DashBlur object, to communicate
        this.dash_blur = dash_blur;
        this.dash = dash;
        this.dash_container = dash_container;
        this.dash_background = dash_background;
        this.background = background;
        this.background_group = background_group;
        this.bg_manager = bg_manager;
        this.settings = dash_blur.settings;

        this.updateId = 0;
        this._first_boot = true;
        this.geometry_signal_records = [];
        this.destroyed = false;

        this.connect_geometry_signals(
            dash,
            GEOMETRY_SIGNALS
        );
        const dash_box = dash.get_parent();
        if (dash_box && dash_box !== dash_container)
            this.connect_geometry_signals(
                dash_box,
                GEOMETRY_SIGNALS
            );
        if (dash_background !== dash)
            this.connect_geometry_signals(
                dash_background,
                GEOMETRY_SIGNALS
            );
        this.connect_geometry_signals(
            dash_container,
            [
                ...GEOMETRY_SIGNALS,
                'notify::style-class-name',
            ]
        );
        const slider = dash_container._slider;
        if (slider)
            this.connect_geometry_signals(
                slider,
                ['notify::slide-x', 'notify::allocation']
            );

        this.bg_allocation_id = 0;
        this.bg_destroy_id = 0;
        this.connect_background_group();

        let monitor = Main.layoutManager.findMonitorForActor(this.dash_container);
        this.current_monitor_index = monitor ? monitor.index : null;

        this.dash_destroy_id = dash.connect('destroy', () => this.remove_dash_blur(false));
        this.dash_blur_connections_ids = [];
        this.dash_blur_connections_ids.push(
            this.dash_blur.connect('remove-dashes', () => this.remove_dash_blur()),
            this.dash_blur.connect('override-style', () => this.override_style()),
            this.dash_blur.connect('remove-style', () => this.remove_style()),
            this.dash_blur.connect('show', () => this.background_group?.show()),
            this.dash_blur.connect('hide', () => this.background_group?.hide()),
            this.dash_blur.connect('update-size', () => this.schedule_update()),
            this.dash_blur.connect('change-blur-type', () => this.change_blur_type()),
            this.dash_blur.connect('update-pipeline', () => this.update_pipeline()),
            this.dash_blur.connect('update-corner-radius', () => this.update_corner_radius())
        );
    }

    connect_geometry_signals(actor, signals) {
        const ids = this.dash_blur.connections.connect(
            actor,
            signals,
            () => this.schedule_update()
        );
        this.geometry_signal_records.push({
            actor,
            ids: Array.isArray(ids) ? ids : [ids],
        });
    }

    schedule_update() {
        if (this.destroyed)
            return;

        this.clear_pending_idles();
        this.updateId = global.compositor.get_laters().add(Meta.LaterType.IDLE, () => {
            this.updateId = 0;
            this.update_size();
            return false;
        });
    }

    connect_background_group() {
        if (!this.background_group)
            return;

        this.bg_allocation_id = this.background_group.connect(
            'notify::allocation',
            () => this.schedule_update()
        );
        this.bg_destroy_id = this.background_group.connect('destroy', () => {
            this.background_group = null;
            this.bg_allocation_id = 0;
            this.bg_destroy_id = 0;
            if (!this.destroyed)
                this.remove_dash_blur();
        });
    }

    clear_pending_idles() {
        if (this.updateId) {
            global.compositor.get_laters().remove(this.updateId);
            this.updateId = 0;
        }
    }

    // IMPORTANT: do never call this in a mutable `this.dash_blur.forEach`
    remove_dash_blur(dash_not_already_destroyed = true) {
        if (this.destroyed)
            return;
        this.destroyed = true;

        // remove the style and destroy the effects
        this.remove_style();
        this.destroy_dash(dash_not_already_destroyed);

        // remove the dash infos from their list
        const dash_infos_index = this.dash_blur.dashes.indexOf(this);
        if (dash_infos_index >= 0)
            this.dash_blur.dashes.splice(dash_infos_index, 1);

        // disconnect everything
        this.dash_blur_connections_ids.forEach(id => { if (id) this.dash_blur.disconnect(id); });
        this.dash_blur_connections_ids = [];
        this.geometry_signal_records.forEach(({ actor, ids }) => {
            if (!dash_not_already_destroyed && actor === this.dash)
                return;
            ids.forEach(id => this.dash_blur.connections.disconnect(actor, id));
        });
        this.geometry_signal_records = [];
        if (dash_not_already_destroyed && this.dash_destroy_id) {
            try {
                this.dash.disconnect(this.dash_destroy_id);
            } catch (e) { }
        }
        this.dash_destroy_id = null;
    }

    override_style() {
        this.remove_style();

        const style = DASH_STYLES[
            this.settings.dash_to_dock.STYLE_DASH_TO_DOCK
        ];

        // Dash to Dock owns its style class list. Replacing it removes the
        // extension's layout and border-radius rules. Add Blur My Shell's
        // visual modifier alongside the native classes instead.
        if (!style)
            return;

        for (const actor of new Set([this.dash, this.dash_background])) {
            if (actor && !actor.has_style_class_name(style))
                actor.add_style_class_name(style);
        }
    }

    remove_style() {
        try {
            DASH_STYLES.forEach(style => {
                this.dash?.remove_style_class_name(style);
                this.dash_background?.remove_style_class_name(style);
            });
        } catch (error) {
            this._log(`dash style owner was already destroyed: ${error}`);
        }
    }

    destroy_dash(dash_not_already_destroyed = true) {
        this.clear_pending_idles();

        if (!dash_not_already_destroyed && this.bg_manager)
            this.bg_manager.backgroundActor = null;

        const background_group = this.background_group;
        this.background_group = null;
        if (background_group) {
            try {
                if (this.bg_allocation_id)
                    background_group.disconnect(this.bg_allocation_id);
                if (this.bg_destroy_id)
                    background_group.disconnect(this.bg_destroy_id);
                const parent = background_group.get_parent();
                parent?.remove_child(background_group);
            } catch (error) {
                this._log(`dash background was already detached: ${error}`);
            }
        }
        this.bg_allocation_id = 0;
        this.bg_destroy_id = 0;

        this.bg_manager?._bms_rounded_pipeline?.destroy();
        if (this.bg_manager?._bms_pipeline) {
            this.bg_manager._bms_pipeline.destroy();
            this.bg_manager._bms_pipeline = null;
        }

        try {
            this.bg_manager?.destroy();
        } catch (error) {
            this._log(`dash background manager was already destroyed: ${error}`);
        }
        try {
            background_group?.destroy();
        } catch (error) {
            this._log(`dash background actor was already destroyed: ${error}`);
        }
        this.background = null;
        this.bg_manager = null;
    }

    change_blur_type() {
        if (this.destroyed)
            return;

        this.destroy_dash();

        let blur_result = this.dash_blur.add_blur(this.dash, this.dash_container);
        if (!blur_result)
            return;

        let [background, background_group, bg_manager] = blur_result;

        this.background = background;
        this.background_group = background_group;
        this.bg_manager = bg_manager;

        const parent = this.dash.get_parent();
        if (!parent) {
            this.destroy_dash(false);
            return;
        }
        parent.insert_child_at_index(this.background_group, 0);

        if (this.settings.dash_to_dock.UNBLUR_IN_OVERVIEW && Main.overview.visible)
            this.background_group.hide();

        // Apply the layout instantly before drawing the first frame
        this.connect_background_group();

        this.schedule_update();
    }

    update_pipeline() {
        if (this.bg_manager?._bms_pipeline) {
            this.bg_manager._bms_pipeline.change_pipeline_to(
                this.settings.dash_to_dock.PIPELINE
            );
            this.bg_manager._bms_rounded_pipeline?.update();
        }
    }

    update_corner_radius() {
        if (this.bg_manager?._bms_rounded_pipeline)
            this.bg_manager._bms_rounded_pipeline.update();
        else
            this.bg_manager?._bms_pipeline?.set_corner_radius?.(
                this.settings.dash_to_dock.CORNER_RADIUS
            );
    }

    update_size() {
        if (!this.background || !this.background_group || !this.bg_manager)
            return;

        if (!this.dash_blur._has_valid_allocation(this.dash_container) ||
            !this.dash_blur._has_valid_allocation(this.dash) ||
            !this.dash_blur._has_valid_allocation(this.dash_background))
            return;

        if (this.dash_blur.is_static) {
            let monitor = Main.layoutManager.findMonitorForActor(this.dash_container);
            if (!monitor) return;

            if (this.current_monitor_index !== monitor.index) {
                this.current_monitor_index = monitor.index;
                this.change_blur_type(); 
                return;
            }

            let dash_box = this.get_dash_position(this.dash_container);
            if (!dash_box)
                return;

            const inset = utils.static_blur_clip_inset();
            const clip_x = Math.floor(dash_box.clip_x) - inset;
            const clip_y = Math.floor(dash_box.clip_y) - inset;
            const clip_w = Math.ceil(dash_box.clip_width) + inset * 2;
            const clip_h = Math.ceil(dash_box.clip_height) + inset * 2;

            this.background.set_pivot_point(0, 0);
            this.background.scale_x = 1 / dash_box.parent_scale_x;
            this.background.scale_y = 1 / dash_box.parent_scale_y;
            this.background.x = dash_box.background_x + inset / dash_box.parent_scale_x;
            this.background.y = dash_box.background_y + inset / dash_box.parent_scale_y;

            this.background.set_clip(clip_x, clip_y, clip_w, clip_h);
        } else {
            const geometry = this.get_dynamic_geometry();
            if (!geometry)
                return;

            this.background.set_position(geometry.x, geometry.y);
            this.background.set_size(geometry.width, geometry.height);
        }
        
        if (this._first_boot) {
            if (this.settings.dash_to_dock.UNBLUR_IN_OVERVIEW && Main.overview.visible) {
                this.background_group?.hide();
            }
            this._first_boot = false;
        }
    }

    get_dash_position(dash_container) {
        let monitor = Main.layoutManager.findMonitorForActor(this.dash_container);
        if (!monitor)
            return;

        let parent = this.background_group?.get_parent();
        if (!parent)
            return;

        let [parent_stage_x, parent_stage_y] = parent.get_transformed_position();
        let [parent_stage_width, parent_stage_height] = parent.get_transformed_size();
        let [bg_stage_x, bg_stage_y] = this.dash_background.get_transformed_position();
        let [bg_stage_width, bg_stage_height] = this.dash_background.get_transformed_size();

        const parent_scale_x = parent.width > 0
            ? parent_stage_width / parent.width
            : 1;
        const parent_scale_y = parent.height > 0
            ? parent_stage_height / parent.height
            : 1;
        if (
            !Number.isFinite(parent_scale_x) || parent_scale_x <= 0 ||
            !Number.isFinite(parent_scale_y) || parent_scale_y <= 0
        )
            return;

        let background_x = (monitor.x - parent_stage_x) / parent_scale_x;
        let background_y = (monitor.y - parent_stage_y) / parent_scale_y;

        let clip_x = bg_stage_x - monitor.x;
        let clip_y = bg_stage_y - monitor.y;

        return {
            background_x,
            background_y,
            clip_x,
            clip_y,
            clip_width: bg_stage_width,
            clip_height: bg_stage_height,
            parent_scale_x,
            parent_scale_y,
        };
    }

    get_dynamic_geometry() {
        const parent = this.background_group?.get_parent();
        if (!parent)
            return null;

        const target = this.get_relative_geometry(this.dash_background, parent);
        const group = this.get_relative_geometry(this.background_group, parent);
        if (!target || !group)
            return null;

        return {
            x: target.x - group.x,
            y: target.y - group.y,
            width: target.width,
            height: target.height,
        };
    }

    get_relative_geometry(actor, parent) {
        const width = actor?.width ?? 0;
        const height = actor?.height ?? 0;
        if (
            !actor ||
            actor !== this.background_group && (width <= 0 || height <= 0)
        )
            return null;

        try {
            const corners = [
                [0, 0],
                [width, 0],
                [0, height],
                [width, height],
            ].map(([x, y]) => actor.apply_relative_transform_to_point(
                parent,
                new Graphene.Point3D({ x, y })
            ));
            const xs = corners.map(point => point.x);
            const ys = corners.map(point => point.y);
            if ([...xs, ...ys].every(Number.isFinite)) {
                const x1 = Math.min(...xs);
                const x2 = Math.max(...xs);
                const y1 = Math.min(...ys);
                const y2 = Math.max(...ys);
                return { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
            }
        } catch (error) {
            this._log(`could not transform dash geometry: ${error}`);
        }

        let current = actor;
        let x = 0;
        let y = 0;
        while (current && current !== parent) {
            x += current.x;
            y += current.y;
            current = current.get_parent();
        }
        if (current !== parent)
            return null;

        return { x, y, width, height };
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > dash]         ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > dash] ${str}`);
    }
}

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
            this.try_blur(dash_container);
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
        if (dash_exist)
            return;

        let existing_bg = dash_box.get_children().find(child => 
            child.get_name() === "bms-dash-backgroundgroup"
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

    // Blurs the dash and returns a `DashInfos` containing its information
    blur_dash_from(dash, dash_container, dash_background) {
        let blur_result = this.add_blur(dash, dash_container);
        if (!blur_result)
            return null;
        
        let [background, background_group, bg_manager] = blur_result;
        try {
            dash.get_parent().insert_child_at_index(background_group, 0);

            const infos = new DashInfos(
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
