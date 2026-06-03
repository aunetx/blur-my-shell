import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { BlurSurface } from '../conveniences/blur_surface.js';
import { SurfaceSettings } from '../conveniences/surface_settings.js';


export const WindowListBlur = class WindowListBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.blur_settings = new SurfaceSettings(settings, 'window-list');
        this.effects_manager = effects_manager;
        this.surfaces = [];
        this.enabled = false;
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this._log("blurring window list");

        Main.layoutManager.uiGroup.get_children().forEach(
            child => this.try_blur(child)
        );

        this.connections.connect(
            Main.layoutManager.uiGroup,
            'child-added',
            (_, child) => this.try_blur(child)
        );

        this.connections.connect(Main.overview, 'showing', _ => {
            this.hide();
        });
        this.connections.connect(Main.overview, 'hidden', _ => {
            this.show();
        });

        this.enabled = true;
    }

    is_window_list_actor(actor) {
        return actor?._windowList && typeof actor._windowList.get_children === 'function';
    }

    try_blur(actor) {
        if (
            this.is_window_list_actor(actor) &&
            actor.style !== "background:transparent;" &&
            !actor._bms_blur_surface
        ) {
            this._log("found window list to blur");

            const surface = this.create_blur_surface(actor);
            if (!surface)
                return;

            actor.set_style("background:transparent;");

            actor._windowList.get_children().forEach(
                window => this.style_window_button(window)
            );

            this.connections.connect(
                actor._windowList,
                'child-added',
                (_, window) => this.style_window_button(window)
            );

            this.connections.connect(
                actor,
                'destroy',
                _ => this.destroy_blur(surface, true)
            );

            this.connections.connect(
                actor,
                ['notify::width', 'notify::height', 'notify::allocation'],
                _ => this.update_size(surface)
            );
        }
    }

    create_blur_surface(actor) {
        const monitor = Main.layoutManager.findMonitorForActor(actor) ?? Main.layoutManager.primaryMonitor;
        if (!monitor)
            return null;

        const surface = new BlurSurface({
            connections: this.connections,
            component_settings: this.blur_settings,
            effects_manager: this.effects_manager,
            pipeline_manager: global.blur_my_shell._pipelines_manager,
            widget_name: 'bms-window-list-blurred-widget',
            use_absolute_position: false,
        }).create({
            container: actor,
            monitor_index: monitor.index,
            pipeline_id: this.blur_settings.PIPELINE,
            static_blur: false,
        });
        surface.window_list_actor = actor;
        actor._bms_blur_surface = surface;
        this.surfaces.push(surface);
        this.update_size(surface);
        return surface;
    }

    update_size(surface) {
        const actor = surface.window_list_actor;
        if (!actor)
            return;

        surface.update_local_geometry({
            x: 0,
            y: 0,
            width: actor.width,
            height: actor.height,
        });
    }

    style_window_button(window) {
        window.get_child_at_index(0).set_style(
            "box-shadow:none; background-color:rgba(0,0,0,0.2); border-radius:5px;"
        );
    }

    destroy_blur(surface, actor_destroyed = false) {
        const actor = surface.window_list_actor;
        if (!actor_destroyed)
            this.remove_style(actor);

        surface.destroy({ container_destroyed: actor_destroyed });
        if (actor?._bms_blur_surface === surface)
            delete actor._bms_blur_surface;

        let index = this.surfaces.indexOf(surface);
        if (index >= 0)
            this.surfaces.splice(index, 1);
    }

    remove_style(actor) {
        if (
            this.is_window_list_actor(actor) &&
            actor.style === "background:transparent;"
        ) {
            actor.style = null;
            actor._windowList.get_children().forEach(
                child => child.get_child_at_index(0).set_style(null)
            );
        }
    }

    hide() {
        this.surfaces.forEach(surface => surface.hide_surface());
    }

    show() {
        this.surfaces.forEach(surface => this.update_size(surface));
    }

    update_pipeline() {
        this.surfaces.forEach(surface =>
            surface.update_pipeline(this.blur_settings.PIPELINE)
        );
    }

    disable() {
        if (!this.enabled) {
            this._log("blur already removed");
            return;
        }

        this._log("removing blur from window list");

        const immutable_surfaces = [...this.surfaces];
        immutable_surfaces.forEach(surface => this.destroy_blur(surface));

        this.surfaces = [];
        this.connections.disconnect_all();
        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > window list]  ${str}`);
    }
};
