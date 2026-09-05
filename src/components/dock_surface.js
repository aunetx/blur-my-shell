import Meta from 'gi://Meta';
import Graphene from 'gi://Graphene';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { resolve_dock_target } from './dock_targets.js';

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
    'notify::opacity',
    'notify::visible',
    'notify::mapped',
];


/// This type of object is created for every dash found, and talks to the main
/// DashBlur thanks to signals.
///
/// This allows to dynamically track the created dashes for each screen.
export class DockSurface {
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
        for (const actor of new Set([dash, dash_container]))
            this.connect_geometry_signals(actor, ['child-added', 'child-removed'],
                () => this.dash_blur.queue_discovery());

        this.bg_allocation_id = 0;
        this.bg_destroy_id = 0;
        this.connect_background_group();

        let monitor = Main.layoutManager.findMonitorForActor(this.dash_container);
        this.current_monitor_index = monitor ? monitor.index : null;

        this.dash_destroy_id = dash.connect('destroy', () => {
            this.remove_dash_blur(false);
            this.dash_blur.queue_discovery();
        });
        this.dash_blur_connections_ids = [];
        this.dash_blur_connections_ids.push(
            this.dash_blur.connect('remove-dashes', () => this.remove_dash_blur()),
            this.dash_blur.connect('override-style', () => this.override_style()),
            this.dash_blur.connect('remove-style', () => this.remove_style()),
            this.dash_blur.connect('show', () => this.update_visibility()),
            this.dash_blur.connect('hide', () => this.update_visibility()),
            this.dash_blur.connect('update-size', () => this.schedule_update()),
            this.dash_blur.connect('change-blur-type', () => this.change_blur_type()),
            this.dash_blur.connect('update-pipeline', () => this.update_pipeline()),
            this.dash_blur.connect('update-corner-radius', () => this.update_corner_radius())
        );
        this.update_visibility();
    }

    connect_geometry_signals(actor, signals, callback = () => this.schedule_update()) {
        const ids = this.dash_blur.connections.connect(
            actor,
            signals,
            callback
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

        const target = resolve_dock_target(this.dash_container);
        const parent = target?.content_parent;
        if (!parent) {
            this.destroy_dash(false);
            return;
        }
        parent.insert_child_below(this.background_group, target.sibling ?? this.dash);

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

    update_visibility() {
        if (!this.background_group)
            return;

        let opacity = 255;
        let visible = true;
        let ancestor = this.dash;
        const parent = this.background_group.get_parent();
        while (ancestor && ancestor !== parent) {
            opacity = Math.round(opacity * ancestor.opacity / 255);
            visible &&= ancestor.visible;
            ancestor = ancestor.get_parent();
        }
        this.background_group.opacity = opacity;
        this.background_group.visible = visible
            && !(this.settings.dash_to_dock.UNBLUR_IN_OVERVIEW && Main.overview.visible);
    }

    update_size() {
        if (!this.background || !this.background_group || !this.bg_manager)
            return;

        this.update_visibility();

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

            const clip_x = Math.floor(dash_box.clip_x);
            const clip_y = Math.floor(dash_box.clip_y);
            const clip_w = Math.ceil(dash_box.clip_width);
            const clip_h = Math.ceil(dash_box.clip_height);

            this.background.set_pivot_point(0, 0);
            this.background.scale_x = 1 / dash_box.parent_scale_x;
            this.background.scale_y = 1 / dash_box.parent_scale_y;
            this.background.x = dash_box.background_x;
            this.background.y = dash_box.background_y;

            this.background.set_clip(clip_x, clip_y, clip_w, clip_h);
        } else {
            const geometry = this.get_dynamic_geometry();
            if (!geometry)
                return;

            this.background.set_position(geometry.x, geometry.y);
            this.background.set_size(geometry.width, geometry.height);
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
