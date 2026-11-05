import Gio from 'gi://Gio';

import { Connections } from '../../conveniences/connections.js';
import { get_pipeline_id } from '../../conveniences/style.js';
import { DynamicPipeline } from '../../render/dynamic_surface.js';
import { is_app_popup } from './window_rules.js';
import { attach_popup_mask } from './popup_mask.js';
import { compute_scale, place_dynamic_blur } from './window_geometry.js';

const BLUR_ACTOR_NAME = 'bms-app-menu-blurred-widget';

/// Blurs the menus of applications, like GTK popovers, which are windows of their own.
export class ApplicationMenus {
    constructor(settings, effects_manager, rules) {
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.rules = rules;
        this.connections = new Connections();
        // every window can turn out to be a menu, the blurred ones are mapped to their blur
        this.windows = new Map();
    }

    enable() {
        this.mutter_gsettings = new Gio.Settings({ schema: 'org.gnome.mutter' });

        global.get_window_actors().forEach(window_actor => this.track(window_actor.meta_window));
        this.connections.connect(
            global.display,
            'window-created',
            (_display, meta_window) => this.track(meta_window)
        );
    }

    /// The window type of a popup is only known some time after it is created.
    track(meta_window) {
        this.windows.set(meta_window, null);
        this.connections.connect(
            meta_window, 'notify::window-type',
            () => this.check_blur(meta_window)
        );
        this.connections.connect(
            meta_window, 'unmanaging',
            () => this.untrack(meta_window)
        );
        this.check_blur(meta_window);
    }

    check_blur(meta_window) {
        if (
            !this.windows.get(meta_window)
            && is_app_popup(meta_window)
            && this.rules.matches_popup(meta_window)
        )
            this.blur(meta_window);
    }

    blur(meta_window) {
        const window_actor = meta_window.get_compositor_private();
        const pipeline = new DynamicPipeline(
            this.effects_manager,
            global.blur_my_shell._pipelines_manager,
            get_pipeline_id(this.settings.applications),
            { corner_radius: this.settings.applications.MENU_CORNER_RADIUS }
        );
        const [blur_actor, bg_manager] = pipeline.create_background_with_effect(
            window_actor, BLUR_ACTOR_NAME
        );
        attach_popup_mask(pipeline, meta_window);
        this.windows.set(meta_window, { window_actor, pipeline, blur_actor, bg_manager });

        const update_size = () => place_dynamic_blur(
            blur_actor, meta_window, compute_scale(meta_window, this.mutter_gsettings)
        );
        const repaint = () => {
            if (blur_actor.mapped)
                pipeline.repaint_effect();
        };
        this.connections.connect(meta_window, 'size-changed', update_size);
        this.connections.connect(meta_window, 'position-changed', repaint);
        this.connections.connect(window_actor, ['notify::x', 'notify::y'], repaint);
        update_size();
    }

    untrack(meta_window) {
        const menu = this.windows.get(meta_window);
        this.windows.delete(meta_window);
        this.connections.disconnect_all_for(meta_window);
        if (!menu)
            return;

        this.connections.disconnect_all_for(menu.window_actor);
        menu.pipeline.destroy();
        menu.bg_manager.destroy();
        menu.blur_actor.destroy();
    }

    update_pipeline() {
        this.windows.forEach(menu => menu?.pipeline.change_pipeline_to(
            get_pipeline_id(this.settings.applications)
        ));
    }

    update_corner_radius() {
        this.windows.forEach(menu => menu?.pipeline.set_corner_radius(
            this.settings.applications.MENU_CORNER_RADIUS
        ));
    }

    disable() {
        [...this.windows.keys()].forEach(meta_window => this.untrack(meta_window));
        this.connections.disconnect_all();
        delete this.mutter_gsettings;
    }
}
