import St from 'gi://St';
import Meta from 'gi://Meta';
import Graphene from 'gi://Graphene';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Connections } from '../conveniences/connections.js';
import { has_valid_allocation, resolve_dock_target } from './dock_targets.js';
import { get_component_style } from '../conveniences/style.js';

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
    constructor(dash_blur, dash_container, target, blur) {
        this.dash_blur = dash_blur;
        this.dash = target.content;
        this.dash_container = dash_container;
        this.dash_background = target.background;
        this.settings = dash_blur.settings;
        this.connections = new Connections();
        this.update_id = 0;

        const schedule_update = () => this.schedule_update();
        this.connections.connect(this.dash, GEOMETRY_SIGNALS, schedule_update);
        const dash_box = this.dash.get_parent();
        if (dash_box !== dash_container)
            this.connections.connect(dash_box, GEOMETRY_SIGNALS, schedule_update);
        if (this.dash_background !== this.dash)
            this.connections.connect(this.dash_background, GEOMETRY_SIGNALS, schedule_update);
        this.connections.connect(
            dash_container,
            [...GEOMETRY_SIGNALS, 'notify::style-class-name'],
            schedule_update
        );
        const slider = dash_container._slider;
        if (slider)
            this.connections.connect(
                slider,
                ['notify::slide-x', 'notify::allocation'],
                schedule_update
            );
        for (const actor of new Set([this.dash, dash_container]))
            this.connections.connect(actor, ['child-added', 'child-removed'],
                () => this.dash_blur.queue_discovery());
        if (target.get_corner_radius)
            this.connections.connect(this.dash_background, 'style-changed',
                () => this.update_corner_radius());

        this.set_blur(blur);

        let monitor = Main.layoutManager.findMonitorForActor(dash_container);
        this.current_monitor_index = monitor ? monitor.index : null;

        this.connections.connect(this.dash, 'destroy', () => {
            this.remove_dash_blur();
            this.dash_blur.queue_discovery();
        });
        this.connections.connect(dash_blur, 'remove-dashes', () => this.remove_dash_blur());
        this.connections.connect(dash_blur, 'override-style', () => this.override_style());
        this.connections.connect(dash_blur, 'remove-style', () => this.remove_style());
        this.connections.connect(dash_blur, ['show', 'hide'], () => this.update_visibility());
        this.connections.connect(dash_blur, 'update-size', schedule_update);
        this.connections.connect(dash_blur, 'change-blur-type', () => this.change_blur_type());
        this.connections.connect(dash_blur, 'update-pipeline', () => this.update_pipeline());
        this.connections.connect(dash_blur, 'update-corner-radius', () => this.update_corner_radius());
        this.update_visibility();
    }

    set_blur({ background, background_group, bg_manager, pipeline, rounded_pipeline }) {
        this.background = background;
        this.background_group = background_group;
        this.bg_manager = bg_manager;
        this.pipeline = pipeline;
        this.rounded_pipeline = rounded_pipeline;

        this.connections.connect(background_group, 'notify::allocation', () => this.schedule_update());
        // destroyed with its parent, possibly before the dash itself
        this.connections.connect(background_group, 'destroy', () => this.remove_dash_blur());
    }

    schedule_update() {
        this.clear_pending_update();
        this.update_id = global.compositor.get_laters().add(Meta.LaterType.IDLE, () => {
            this.update_id = 0;
            this.update_size();
            return false;
        });
    }

    clear_pending_update() {
        if (this.update_id) {
            global.compositor.get_laters().remove(this.update_id);
            this.update_id = 0;
        }
    }

    // IMPORTANT: do never call this in a mutable `this.dash_blur.dashes.forEach`
    remove_dash_blur() {
        this.connections.disconnect_all();
        this.remove_style();
        this.destroy_dash();
        this.dash_blur.dashes.splice(this.dash_blur.dashes.indexOf(this), 1);
    }

    get_styled_actors() {
        return new Set([this.dash, this.dash_container, this.dash_background]
            .filter(actor => actor instanceof St.Widget));
    }

    override_style() {
        this.remove_style();

        const style_index = get_component_style(
            this.settings.dash_to_dock.STYLE_DASH_TO_DOCK,
            DASH_STYLES
        );

        const style = DASH_STYLES[style_index];

        // Dash to Dock owns its style class list. Replacing it removes the
        // extension's layout and border-radius rules. Add Blur My Shell's
        // visual modifier alongside the native classes instead.
        if (!style)
            return;

        this.get_styled_actors().forEach(actor => actor.add_style_class_name(style));
    }

    remove_style() {
        this.get_styled_actors().forEach(actor =>
            DASH_STYLES.forEach(style => actor.remove_style_class_name(style))
        );
    }

    destroy_dash() {
        this.clear_pending_update();
        if (!this.background_group)
            return;

        this.connections.disconnect_all_for(this.background_group);
        this.rounded_pipeline?.destroy();
        this.pipeline.destroy();
        this.bg_manager.destroy();
        this.background_group.destroy();

        this.background = null;
        this.background_group = null;
        this.bg_manager = null;
        this.pipeline = null;
        this.rounded_pipeline = null;
    }

    change_blur_type() {
        this.destroy_dash();

        const target = resolve_dock_target(this.dash_container);
        if (!target)
            return;

        const blur = this.dash_blur.add_blur(this.dash_container);
        if (!blur)
            return;

        target.content_parent.insert_child_below(blur.background_group, target.sibling ?? this.dash);
        this.set_blur(blur);

        if (this.settings.dash_to_dock.UNBLUR_IN_OVERVIEW && Main.overview.visible)
            this.background_group.hide();

        this.schedule_update();
    }

    update_pipeline() {
        this.pipeline?.change_pipeline_to(this.settings.dash_to_dock.PIPELINE);
        this.rounded_pipeline?.update();
    }

    update_corner_radius() {
        if (this.rounded_pipeline)
            this.rounded_pipeline.update();
        else
            this.pipeline?.set_corner_radius(
                this.dash_blur.get_corner_radius(this.dash_container)
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
        if (!this.background_group)
            return;

        this.update_visibility();

        if (!has_valid_allocation(this.dash_container) ||
            !has_valid_allocation(this.dash) ||
            !has_valid_allocation(this.dash_background))
            return;

        if (this.dash_blur.is_static) {
            let monitor = Main.layoutManager.findMonitorForActor(this.dash_container);
            if (!monitor) return;

            if (this.current_monitor_index !== monitor.index) {
                this.current_monitor_index = monitor.index;
                this.change_blur_type();
                return;
            }

            let dash_box = this.get_dash_position(monitor);
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
            this.background.set_position(geometry.x, geometry.y);
            this.background.set_size(geometry.width, geometry.height);
        }
    }

    get_dash_position(monitor) {
        let parent = this.background_group.get_parent();

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
        if (parent_scale_x <= 0 || parent_scale_y <= 0)
            return null;

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
        const parent = this.background_group.get_parent();
        const target = this.get_relative_geometry(this.dash_background, parent);
        const group = this.get_relative_geometry(this.background_group, parent);

        return {
            x: target.x - group.x,
            y: target.y - group.y,
            width: target.width,
            height: target.height,
        };
    }

    get_relative_geometry(actor, parent) {
        const { width, height } = actor;
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
        const x1 = Math.min(...xs);
        const y1 = Math.min(...ys);
        return {
            x: x1,
            y: y1,
            width: Math.max(...xs) - x1,
            height: Math.max(...ys) - y1,
        };
    }
}
