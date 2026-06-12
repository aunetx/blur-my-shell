import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Signals from 'resource:///org/gnome/shell/misc/signals.js';

import { BlurSurface } from '../conveniences/blur_surface.js';
import { SurfaceSettings } from '../conveniences/surface_settings.js';

const DASH_STYLES = [
    "transparent-dash",
    "light-dash",
    "dark-dash"
];


/// This type of object is created for every dash found, and talks to the main
/// DashBlur thanks to signals.
///
/// This allows to dynamically track the created dashes for each screen.
class DashInfos {
    constructor(
        dash_blur, dash, dash_container, dash_background,
        blur_surface
    ) {
        // the parent DashBlur object, to communicate
        this.dash_blur = dash_blur;
        this.dash = dash;
        this.dash_container = dash_container;
        this.dash_background = dash_background;
        this.blur_surface = blur_surface;
        this.background = blur_surface.actor;
        this.background_group = blur_surface.background_group;
        this.bg_manager = blur_surface.bg_manager;
        this.settings = dash_blur.settings;
        this.blur_settings = dash_blur.blur_settings;
        this.old_style = this.dash._background.style;

        this.dash_destroy_id = dash.connect('destroy', () => this.remove_dash_blur(false));
        this.dash_blur_connections_ids = [];
        this.dash_blur_connections_ids.push(
            this.dash_blur.connect('remove-dashes', () => this.remove_dash_blur()),
            this.dash_blur.connect('override-style', () => this.override_style()),
            this.dash_blur.connect('remove-style', () => this.remove_style()),
            this.dash_blur.connect('show', () => this.background_group.show()),
            this.dash_blur.connect('hide', () => this.background_group.hide()),
            this.dash_blur.connect('update-size', () => this.update_size()),
            this.dash_blur.connect('change-blur-type', () => this.change_blur_type()),
            this.dash_blur.connect('update-pipeline', () => this.update_pipeline()),
            this.dash_blur.connect('update-corner-radius', () => this.update_corner_radius())
        );
    }

    // IMPORTANT: do never call this in a mutable `this.dash_blur.forEach`
    remove_dash_blur(dash_not_already_destroyed = true) {
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
        if (this.dash_destroy_id)
            this.dash.disconnect(this.dash_destroy_id);
        this.dash_destroy_id = null;
    }

    override_style() {
        this.remove_style();

        this.dash.set_style_class_name(
            DASH_STYLES[this.get_dash_style()]
        );
    }

    get_dash_style() {
        const style = this.blur_settings.USE_GLOBAL ?
            this.blur_settings.BACKGROUND_STYLE :
            this.settings.dash_to_dock.STYLE_DASH_TO_DOCK;

        if (this.blur_settings.USE_GLOBAL && style === 3)
            return Main.getStyleVariant?.() === 'light' ? 1 : 2;
        if (style >= 0 && style < DASH_STYLES.length)
            return style;
        return 0;
    }

    remove_style() {
        this.dash._background.style = this.old_style;

        DASH_STYLES.forEach(
            style => this.dash.remove_style_class_name(style)
        );
    }

    lower_background() {
        const parent = this.background_group?.get_parent?.();
        if (!parent)
            return;

        try {
            parent.set_child_below_sibling(this.background_group, this.dash.get_parent?.() === parent ? this.dash : null);
        } catch (e) { }
    }

    destroy_dash(dash_not_already_destroyed = true) {
        this.blur_surface.destroy({ container_destroyed: !dash_not_already_destroyed });
    }

    change_blur_type() {
        this.destroy_dash();

        this.blur_surface = this.dash_blur.create_blur_surface(this.dash);
        this.background = this.blur_surface.actor;
        this.background_group = this.blur_surface.background_group;
        this.bg_manager = this.blur_surface.bg_manager;

        this.blur_surface.insert_group(this.dash.get_parent(), 0);
        this.lower_background();

        this.update_size();
    }

    update_pipeline() {
        this.blur_surface.update_pipeline(this.dash_blur.blur_settings.PIPELINE);
    }

    update_corner_radius() {
        this.blur_surface.update_corner_radius();
    }

    update_size() {
        if (this.dash_blur.is_static) {
            this.blur_surface.update_static_geometry(
                this.dash.get_parent(),
                this.get_dash_geometry()
            );
        } else {
            this.blur_surface.update_dynamic_geometry(
                this.dash.get_parent(),
                this.get_dash_geometry()
            );
        }

        this.background = this.blur_surface.actor;
        this.bg_manager = this.blur_surface.bg_manager;
        this.lower_background();
    }

    get_dash_geometry() {
        const monitor = Main.layoutManager.findMonitorForActor(this.dash_container);
        if (!monitor)
            return null;

        try {
            const [x, y] = this.dash_background.get_transformed_position();
            if (Number.isFinite(x) && Number.isFinite(y))
                return {
                    x,
                    y,
                    width: this.dash_background.width,
                    height: this.dash_background.height,
                    monitor_index: monitor.index,
                };
        } catch (e) { }

        const [x, y] = this.get_dash_position(this.dash_container, this.dash_background);
        return {
            x: monitor.x + x,
            y: monitor.y + y + this.dash.y + this.dash_background.y,
            width: this.dash_background.width,
            height: this.dash_background.height,
            monitor_index: monitor.index,
        };
    }

    get_dash_position(dash_container, dash_background) {
        var x, y;

        let monitor = Main.layoutManager.findMonitorForActor(dash_container);
        let dash_box = dash_container._slider.get_child();

        if (dash_container.get_style_class_name().includes("top")) {
            x = (monitor.width - dash_background.width) / 2;
            y = dash_box.y;
        } else if (dash_container.get_style_class_name().includes("bottom")) {
            x = (monitor.width - dash_background.width) / 2;
            y = monitor.height - dash_container.height;
        } else if (dash_container.get_style_class_name().includes("left")) {
            x = dash_box.x;
            y = dash_container.y + (dash_container.height - dash_background.height) / 2 - dash_background.y;
        } else if (dash_container.get_style_class_name().includes("right")) {
            x = monitor.width - dash_container.width;
            y = dash_container.y + (dash_container.height - dash_background.height) / 2 - dash_background.y;
        }

        return [x, y];
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
        this.blur_settings = new SurfaceSettings(settings, 'dash-to-dock');
        this.effects_manager = effects_manager;
        this.is_static = this.blur_settings.STATIC_BLUR;
        this.enabled = false;
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this.connections.connect(Main.uiGroup, 'child-added', (_, actor) => {
            if (
                (actor.get_name() === "dashtodockContainer") &&
                (actor.constructor.name === 'DashToDock')
            )
                this.try_blur(actor);
        });

        this.blur_existing_dashes();
        this.connect_to_overview();

        this.update_size();

        this.enabled = true;
    }

    // Finds all existing dashes on every monitor, and call `try_blur` on them
    // We cannot only blur `Main.overview.dash`, as there could be several
    blur_existing_dashes() {
        this._log("searching for dash");

        // blur every dash found, filtered by name
        Main.uiGroup.get_children().filter((child) => {
            return (child.get_name() === "dashtodockContainer") &&
                (child.constructor.name === 'DashToDock');
        }).forEach(dash_container => this.try_blur(dash_container));
    }

    // Tries to blur the dash contained in the given actor
    try_blur(dash_container) {
        let dash_box = dash_container._slider.get_child();

        // verify that we did not already blur that dash
        if (!dash_box.get_children().some(child =>
            child.get_name() === "bms-dash-backgroundgroup"
        )) {
            this._log("dash to dock found, blurring it");

            // finally blur the dash
            let dash = dash_box.get_children().find(child => {
                return child.get_name() === 'dash';
            });

            const dash_infos = this.blur_dash_from(dash, dash_container);
            if (dash_infos)
                this.dashes.push(dash_infos);
        }
    }

    // Blurs the dash and returns a `DashInfos` containing its information
    blur_dash_from(dash, dash_container) {
        if (!dash)
            return null;

        const dash_background = dash.get_children().find(child => {
            return child.get_style_class_name() === 'dash-background';
        });
        if (!dash_background)
            return null;

        const blur_surface = this.create_blur_surface(dash);
        if (!blur_surface)
            return null;

        // insert the background group to the right element
        blur_surface.insert_group(dash.get_parent(), 0);

        // updates size and position on change
        this.connections.connect(
            dash,
            ['notify::width', 'notify::height'],
            _ => this.update_size()
        );
        this.connections.connect(
            dash_container,
            ['notify::width', 'notify::height', 'notify::y', 'notify::x'],
            _ => this.update_size()
        );

        // create infos
        let infos = new DashInfos(
            this,
            dash,
            dash_container,
            dash_background,
            blur_surface
        );

        this.update_size();
        this.update_background();
        infos.lower_background();

        // returns infos
        return infos;
    }

    create_blur_surface(dash) {
        const monitor = Main.layoutManager.findMonitorForActor(dash);
        if (!monitor)
            return;

        let static_blur = this.blur_settings.STATIC_BLUR;
        const blur_surface = new BlurSurface({
            connections: this.connections,
            component_settings: this.blur_settings,
            effects_manager: this.effects_manager,
            pipeline_manager: global.blur_my_shell._pipelines_manager,
            widget_name: 'bms-dash-blurred-widget',
            group_name: 'bms-dash-backgroundgroup',
            use_absolute_position: false,
        }).create({
            container: dash.get_parent(),
            monitor_index: monitor.index,
            pipeline_id: this.blur_settings.PIPELINE,
            static_blur,
        });

        return blur_surface;
    }

    change_blur_type() {
        this.is_static = this.blur_settings.STATIC_BLUR;
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
        }
    };

    /// Updates the background to either remove it or not, according to the
    /// user preferences.
    update_background() {
        this._log("updating background");
        if (this.blur_settings.OVERRIDE_BACKGROUND)
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
        if (!this.enabled) {
            this._log("blur already removed");
            return;
        }

        this._log("removing blur from dashes");

        this.emit('remove-dashes');

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
