import Gio from 'gi://Gio';
import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { ApplicationsService } from '../../dbus/services.js';
import { Pipeline } from '../../pipelines/pipeline.js';
import { is_desktop_window } from '../../conveniences/window.js';
import { DynamicPipeline } from '../../render/dynamic_surface.js';
import { RoundedPipeline } from '../../render/rounded_pipeline.js';
import { WindowRules } from './window_rules.js';
import { BLUR_ACTOR_NAME, WindowOpacity } from './window_opacity.js';
import { compute_scale, place_dynamic_blur, place_static_blur } from './window_geometry.js';

export const ApplicationsBlur = class ApplicationsBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;

        this.meta_windows = new Set();
        this.blur_signal_ids = new Map();

        this.rules = new WindowRules(settings);
        this.window_opacity = new WindowOpacity();
        this.enabled = false;

        this.service = new ApplicationsService;
    }

    enable() {
        if (this.enabled)
            return;

        this._log("blurring applications...");
        this.enabled = true;

        this.mutter_gsettings = new Gio.Settings({ schema: 'org.gnome.mutter' });

        this.update_all_windows();

        this.connections.connect(
            global.display,
            'window-created',
            (_meta_display, meta_window) => {
                this._log("window created");
                this.track_new(meta_window);
            }
        );

        this.focused_window = null;
        this.init_dynamic_opacity();
        this.connections.connect(
            global.display,
            'focus-window',
            (_meta_display, meta_window, _p0) => {
                if (meta_window !== this.focused_window)
                    this.set_focus_for_window(meta_window);
            }
        );

        this.connect_to_overview();
    }

    enable_service() {
        this.service.export();
    }

    disable_service() {
        this.service.unexport();
    }

    /// Initializes the dynamic opacity for windows, without touching to the connections.
    /// This is used both when enabling the component, and when changing the dynamic-opacity pref.
    init_dynamic_opacity() {
        if (this.settings.applications.DYNAMIC_OPACITY) {
            if (global.display.focus_window)
                this.set_focus_for_window(global.display.focus_window);
        } else {
            if (this.focused_window)
                this.set_focus_for_window(null);
        }
    }

    /// Connect to the overview being opened/closed to force the blur being
    /// shown on every window of the workspaces viewer.
    connect_to_overview() {
        this.connections.disconnect_all_for(Main.overview);
        this.overview_visible = Main.overview.visible;

        const reconcile_windows = () => this.meta_windows.forEach(
            meta_window => this.reconcile_window_visibility(meta_window)
        );
        this.connections.connect(Main.overview, 'showing', _ => {
            this.overview_visible = true;
            reconcile_windows();
        });
        this.connections.connect(Main.overview, 'hidden', _ => {
            this.overview_visible = false;
            reconcile_windows();
        });

        this.meta_windows.forEach(meta_window =>
            this.reconcile_window_visibility(meta_window)
        );
    }

    /// Iterate through all existing windows and add blur as needed.
    update_all_windows() {
        this.rules.update();

        for (
            let i = 0;
            i < global.workspace_manager.get_n_workspaces();
            ++i
        ) {
            let workspace = global.workspace_manager.get_workspace_by_index(i);
            let windows = workspace.list_windows();

            windows.forEach(meta_window => this.track_new(meta_window));
        }
    }

    /// Adds the needed signals to every new tracked window, and adds blur if
    /// needed.
    track_new(meta_window) {
        if (this.meta_windows.has(meta_window)) {
            this.check_blur(meta_window);
            return;
        }

        this._log('new window tracked');

        this.meta_windows.add(meta_window);

        this.connections.connect(
            meta_window, 'notify::wm-class',
            _ => this.check_blur(meta_window)
        );
        this.connections.connect(
            meta_window, 'notify::window-type',
            _ => this.check_blur(meta_window)
        );
        this.connections.connect(
            meta_window, 'notify::gtk-application-id',
            _ => this.check_blur(meta_window)
        );

        this.connections.connect(
            meta_window, 'unmanaging',
            _ => this.untrack_meta_window(meta_window)
        );

        this.check_blur(meta_window);
    }

    connect_blur_signal(meta_window, object, signals, handler) {
        const ids = this.connections.connect(object, signals, handler);
        const records = this.blur_signal_ids.get(meta_window);
        [ids].flat().forEach(id => records.push({ object, id }));
    }

    connect_blur_signals(meta_window, window_actor) {
        this.blur_signal_ids.set(meta_window, []);
        this.connect_blur_signal(
            meta_window,
            meta_window,
            'size-changed',
            () => this.update_size(meta_window)
        );

        if (this.settings.applications.STATIC_BLUR) {
            this.connect_blur_signal(
                meta_window,
                meta_window,
                'position-changed',
                () => this.update_size(meta_window)
            );
        } else {
            const repaint = () => {
                if (meta_window.blur_actor.mapped)
                    meta_window.bg_manager._bms_pipeline.repaint_effect();
            };
            this.connect_blur_signal(
                meta_window,
                meta_window,
                'position-changed',
                repaint
            );
            this.connect_blur_signal(
                meta_window,
                window_actor,
                [
                    'notify::x',
                    'notify::y',
                    'notify::translation-x',
                    'notify::translation-y',
                    'notify::scale-x',
                    'notify::scale-y',
                ],
                repaint
            );
        }

        this.connect_blur_signal(
            meta_window,
            meta_window,
            ['notify::maximized-horizontally', 'notify::maximized-vertically'],
            () => this.update_corner_radius(meta_window)
        );
        this.connect_blur_signal(
            meta_window,
            meta_window,
            'notify::fullscreen',
            () => {
                this.update_corner_radius(meta_window);
                this.reconcile_window_visibility(meta_window);
            }
        );
        this.connect_blur_signal(
            meta_window,
            window_actor,
            'child-added',
            () => {
                if (this.settings.applications.STATIC_BLUR
                    && meta_window.get_client_type() === Meta.WindowClientType.X11)
                    window_actor.set_child_below_sibling(meta_window.blur_actor, null);
                this.reconcile_window_visibility(meta_window);
            }
        );
        this.connect_blur_signal(
            meta_window,
            window_actor,
            'child-removed',
            (_, child) => this.window_opacity.restore(window_actor, child)
        );
        this.connect_blur_signal(
            meta_window,
            window_actor,
            'notify::opacity',
            () => this.reconcile_window_visibility(meta_window)
        );
        this.connect_blur_signal(
            meta_window,
            window_actor,
            'notify::visible',
            () => this.reconcile_window_visibility(meta_window)
        );
    }

    /// Updates the size of the blur actor associated with a tracked window.
    update_size(meta_window) {
        const blur_actor = meta_window.blur_actor;

        if (this.settings.applications.STATIC_BLUR) {
            const bg_manager = meta_window.bg_manager;
            const bg_actor_monitor_index = bg_manager.backgroundActor.monitor;
            const window_monitor_index = meta_window.get_monitor();
            const monitor = Main.layoutManager.monitors[window_monitor_index];
            if (!monitor)
                return;

            if (bg_actor_monitor_index !== window_monitor_index) {
                this._log(`application switching to monitor: ${window_monitor_index}`);

                bg_manager._monitorIndex = window_monitor_index;
                bg_manager._updateBackgroundActor();
                blur_actor.width = monitor.width;
                blur_actor.height = monitor.height;
            }

            place_static_blur(
                blur_actor, meta_window, monitor, compute_scale(meta_window, this.mutter_gsettings)
            );
        } else {
            place_dynamic_blur(
                blur_actor, meta_window, compute_scale(meta_window, this.mutter_gsettings)
            );
        }
    }

    /// Adds or removes the blur of a tracked window, following the window rules.
    check_blur(meta_window) {
        if (!is_desktop_window(meta_window) && this.rules.matches(meta_window)) {
            if (!meta_window.blur_actor)
                this.create_blur_effect(meta_window);
        } else if (meta_window.blur_actor) {
            this.remove_blur(meta_window);
        }
    }

    /// Add the blur effect to the window.
    /// Accepts only tracked meta window that is NOT already blurred.
    create_blur_effect(meta_window) {
        const window_actor = meta_window.get_compositor_private();
        if (!window_actor)
            return;

        let blur_actor, bg_manager;
        let rounded_pipeline = null;

        if (this.settings.applications.STATIC_BLUR) {
            const pipeline = new Pipeline(
                this.effects_manager,
                global.blur_my_shell._pipelines_manager,
                this.settings.applications.PIPELINE
            );
            const bg_managers = [];
            blur_actor = pipeline.create_background_with_effects(
                meta_window.get_monitor(), bg_managers, window_actor,
                BLUR_ACTOR_NAME
            );
            bg_manager = bg_managers[0];
            rounded_pipeline = new RoundedPipeline(
                this.effects_manager,
                () => this.settings.applications.CORNER_RADIUS,
                () => this.settings.applications.ROUNDED_CORNERS
            );
            rounded_pipeline.bind(pipeline, blur_actor);
        } else {
            const pipeline = new DynamicPipeline(
                this.effects_manager,
                global.blur_my_shell._pipelines_manager,
                this.settings.applications.PIPELINE,
                {
                    corner_radius: this.settings.applications.CORNER_RADIUS,
                    get_corners: () => this.settings.applications.ROUNDED_CORNERS,
                }
            );
            [blur_actor, bg_manager] = pipeline.create_background_with_effect(
                window_actor, BLUR_ACTOR_NAME
            );
        }

        meta_window.blur_actor = blur_actor;
        meta_window.bg_manager = bg_manager;
        meta_window.bms_rounded_pipeline = rounded_pipeline;
        this.connect_blur_signals(meta_window, window_actor);

        if (!this.settings.applications.BLUR_ON_OVERVIEW && Main.overview.visible)
            blur_actor.hide();

        this.update_size(meta_window);
        this.update_corner_radius(meta_window);
        this.reconcile_window_visibility(meta_window);
    }

    /// Tells us we are focused on said window (which can be null if we are not focused anymore).
    /// It automatically removes the ancient focus.
    set_focus_for_window(meta_window) {
        this.focused_window = meta_window;

        this.meta_windows.forEach(tracked_window =>
            this.reconcile_window_visibility(tracked_window)
        );
    }

    /// Update the corner radius based on window state (0 for maximized/fullscreen)
    /// if the preferences say so.
    update_corner_radius(meta_window) {
        if (!meta_window.blur_actor)
            return;

        const is_maximized = meta_window.maximized_horizontally || meta_window.maximized_vertically;
        const is_fullscreen = meta_window.fullscreen;

        let use_0_radius = !this.settings.applications.CORNER_WHEN_MAXIMIZED && (is_maximized || is_fullscreen);

        if (this.settings.applications.STATIC_BLUR) {
            meta_window.bms_rounded_pipeline.update();
            meta_window.bms_rounded_pipeline.setStraightCorners(use_0_radius);
        } else {
            const pipeline = meta_window.bg_manager._bms_pipeline;
            pipeline.set_corner_radius(this.settings.applications.CORNER_RADIUS);
            pipeline.set_straight_corners(use_0_radius);
        }
    }

    reconcile_window_visibility(meta_window) {
        const blur_actor = meta_window.blur_actor;
        if (!blur_actor)
            return;

        const window_actor = meta_window.get_compositor_private();

        const is_focused = this.settings.applications.DYNAMIC_OPACITY
            && meta_window === this.focused_window;
        const is_fullscreen = this.settings.applications.UNBLUR_WHEN_FULLSCREEN
            && meta_window.fullscreen;
        const visible_for_blur = meta_window.showing_on_its_workspace()
            || (this.settings.applications.BLUR_ON_OVERVIEW && this.overview_visible);
        const show_blur = visible_for_blur
            && !is_focused
            && !is_fullscreen
            && (this.settings.applications.BLUR_ON_OVERVIEW || !this.overview_visible);

        if (show_blur)
            blur_actor.show();
        else
            blur_actor.hide();

        this.window_opacity.set(
            window_actor,
            show_blur ? this.settings.applications.OPACITY : 255,
            blur_actor
        );
    }

    /// Update all corners, to use when the setting has been changed.
    update_all_corner_radii() {
        this.meta_windows.forEach(
            meta_window => this.update_corner_radius(meta_window)
        )
    }

    update_fullscreen_status() {
        this.meta_windows.forEach(
            meta_window => this.reconcile_window_visibility(meta_window)
        );
    }

    /// Update the opacity of all window actors.
    set_opacity() {
        this.meta_windows.forEach(meta_window =>
            this.reconcile_window_visibility(meta_window)
        );
    }

    change_blur_type() {
        this._log("resetting...");

        this.disable();
        this.enable();
    }

    change_pipeline() {
        this.meta_windows.forEach(meta_window => {
            meta_window.bg_manager?._bms_pipeline.change_pipeline_to(
                this.settings.applications.PIPELINE
            );
            this.update_corner_radius(meta_window);
        });
    }

    /// Removes the blur actor to make a blurred window become normal again.
    /// It however does not untrack the meta window itself.
    remove_blur(meta_window) {
        const blur_actor = meta_window.blur_actor;
        if (!blur_actor)
            return;

        this._log('removing window blur');

        this.blur_signal_ids.get(meta_window).forEach(({ object, id }) =>
            this.connections.disconnect(object, id)
        );
        this.blur_signal_ids.delete(meta_window);

        this.window_opacity.set(meta_window.get_compositor_private(), 255, blur_actor);

        const bg_manager = meta_window.bg_manager;
        meta_window.bms_rounded_pipeline?.destroy();
        bg_manager._bms_pipeline.destroy();
        bg_manager.destroy();
        blur_actor.destroy();

        // the blur actor presence is how we know whether the window is blurred or not
        delete meta_window.blur_actor;
        delete meta_window.bg_manager;
        delete meta_window.bms_rounded_pipeline;
    }

    /// Kinda the same as `remove_blur`, but better: it also untracks the window.
    /// This needs to be called when the component is being disabled, else it
    /// would cause havoc by having untracked windows during normal operations,
    /// which is not the point at all!
    untrack_meta_window(meta_window) {
        this.remove_blur(meta_window);
        this.connections.disconnect_all_for(meta_window);
        this.meta_windows.delete(meta_window);
        if (this.focused_window === meta_window)
            this.focused_window = null;
    }

    disable() {
        if (!this.enabled)
            return;

        this._log("removing blur from applications...");
        this.enabled = false;

        delete this.mutter_gsettings;

        [...this.meta_windows].forEach(meta_window =>
            this.untrack_meta_window(meta_window)
        );

        this.connections.disconnect_all();
        this.window_opacity.clear();
    }

    destroy() {
        this.disable();
        this.disable_service();
        this.service = null;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > applications] ${str}`);
    }
};
