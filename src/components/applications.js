import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import Gio from 'gi://Gio';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Config from 'resource:///org/gnome/shell/misc/config.js';

import { ApplicationsService } from '../dbus/services.js';
import { BlurSurface } from '../conveniences/blur_surface.js';
import {
    invalidate_stacked_window_actors,
    is_bms_blur_child,
} from '../conveniences/live_window_source.js';
import { PatternMatcher } from '../conveniences/pattern_matcher.js';
import { SurfaceSettings } from '../conveniences/surface_settings.js';
import { ApplicationsDragTracker } from './applications_drag.js';
import { ApplicationsGeometryScheduler } from './applications_geometry.js';
import { ApplicationsLiveSurface } from './applications_live_surface.js';

export const ApplicationsBlur = class ApplicationsBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.blur_settings = new SurfaceSettings(settings, 'applications');
        this.effects_manager = effects_manager;

        this.tracked_windows = new Set();
        this._whitelist_matcher = new PatternMatcher();
        this._blacklist_matcher = new PatternMatcher();
        this.geometry_scheduler = new ApplicationsGeometryScheduler(
            meta_window => this.update_size(meta_window)
        );
        this.drag_tracker = new ApplicationsDragTracker(this);
        this._update_patterns();
        this.enabled = false;
    }

    _update_patterns() {
        const whitelist = this.settings.applications.WHITELIST || [];
        const blacklist = this.settings.applications.BLACKLIST || [];

        this._whitelist_matcher.update(whitelist);
        this._blacklist_matcher.update(blacklist);

        this._log(`Patterns updated - whitelist: ${whitelist.length}, blacklist: ${blacklist.length}`);
    }

    enable() {
        if (this.enabled) {
            this._log("blur already enabled");
            return;
        }

        this._log("blurring applications...");
        this.service = new ApplicationsService;
        this.service.export();

        this.mutter_gsettings = new Gio.Settings({ schema: 'org.gnome.mutter' });
        this.update_all_windows();
        this.connections.connect(
            global.display,
            'window-created',
            (_meta_display, meta_window) => {
                this._log("window created");

                if (meta_window)
                    this.track_new(meta_window);
            }
        );
        this.focused_meta_window = null;
        this.init_dynamic_opacity();
        this.connections.connect(
            global.display,
            'focus-window',
            (_meta_display, meta_window, _p0) => {
                if (meta_window && meta_window !== this.focused_meta_window)
                    this.set_focus_for_window(meta_window);
                else if (!meta_window)
                    this.set_focus_for_window(null);
            }
        );

        this.connect_to_overview();
        this.drag_tracker.enable();
        this.enabled = true;
    }
    init_dynamic_opacity() {
        if (this.settings.applications.DYNAMIC_OPACITY) {
            if (global.display.focus_window)
                this.set_focus_for_window(global.display.focus_window);
        } else {
            if (this.focused_meta_window)
                this.set_focus_for_window(null);
        }
    }
    connect_to_overview() {
        this.connections.disconnect_all_for(Main.overview);

        const on_overview_transition = () => {
            invalidate_stacked_window_actors();
            this.drag_tracker.sync_all_dynamic_surfaces(true);
            this.drag_tracker.schedule_all_dynamic_surfaces();
        };

        this.connections.connect(Main.overview, 'showing', on_overview_transition);
        this.connections.connect(Main.overview, 'hidden', on_overview_transition);

        if (this.settings.applications.BLUR_ON_OVERVIEW) {
            this.connections.connect(
                Main.overview, 'showing',
                _ => this.tracked_windows.forEach(meta_window => {
                    let window_actor = meta_window.get_compositor_private();
                    window_actor?.show();
                })
            );
            this.connections.connect(
                Main.overview, 'hidden',
                _ => {
                    this.tracked_windows.forEach(meta_window => {
                        let window_actor = meta_window.get_compositor_private();
                        if (!window_actor)
                            return;

                        if (
                            (!meta_window.get_workspace().active) || meta_window.minimized
                        )
                            window_actor.hide();
                        else
                            this.restore_window_content_visibility(window_actor);
                    });
                }
            );
        }
    }
    update_all_windows() {
        this._update_patterns();
        [...this.tracked_windows].forEach(meta_window => this.untrack_meta_window(meta_window));

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
    track_new(meta_window) {
        if (this.is_tracked(meta_window)) {
            this.check_blur(meta_window);
            return;
        }

        this._log(`new window tracked: ${meta_window.get_title?.() ?? 'unknown'}`);
        this.tracked_windows.add(meta_window);
        this.connections.connect(
            meta_window, 'notify::wm-class',
            _ => this.check_blur(meta_window)
        );
        this.connections.connect(
            meta_window,
            ['size-changed', 'position-changed'],
            _ => this.drag_tracker.queue_window_update(meta_window)
        );
        this.connections.connect(
            meta_window, 'unmanaging',
            _ => this.untrack_meta_window(meta_window)
        );

        this.check_blur(meta_window);

        if (this.blur_settings.STATIC_BLUR && meta_window.get_client_type() === Meta.WindowClientType.X11) {
            const window_actor = meta_window.get_compositor_private();
            this.connections.connect(window_actor, 'child-added', _ => {
                if (!meta_window.blur_actor) {
                    this._warn("can't move blur actor to back, it doesn't exist");
                    return;
                }

                window_actor.set_child_below_sibling(meta_window.blur_actor, null);
            });
        }
    }
    is_tracked(meta_window) {
        return this.tracked_windows.has(meta_window);
    }
    update_size(meta_window) {
        if (!this.is_tracked(meta_window)) {
            this.untrack_meta_window(meta_window);
            return;
        }

        const blur_actor = meta_window.blur_actor;
        if (!blur_actor)
            return;

        if (this.blur_settings.STATIC_BLUR) {
            const window_monitor_index = meta_window.get_monitor();
            const frame = meta_window.get_frame_rect();
            const buffer = meta_window.get_buffer_rect();
            meta_window.blur_surface.update_static_geometry(
                meta_window.get_compositor_private(),
                {
                    x: frame.x,
                    y: frame.y,
                    width: frame.width,
                    height: frame.height,
                    parent_x: buffer.x,
                    parent_y: buffer.y,
                    monitor_index: window_monitor_index,
                }
            );
            meta_window.blur_actor = meta_window.blur_surface.actor;
            meta_window.bg_manager = meta_window.blur_surface.bg_manager;
        } else {
            const allocation = this.compute_allocation(meta_window);
            const surface = meta_window.blur_surface;
            if (!surface.update_local_geometry(allocation)) {
                if (meta_window.blur_actor?.visible)
                    this.geometry_scheduler.queue(meta_window);
            }
        }
    }
    check_blur(meta_window) {
        const window_wm_class = meta_window.get_wm_class();
        const enable_all = this.settings.applications.ENABLE_ALL;
        if (window_wm_class)
            this._log(`window "${meta_window.get_title?.() ?? 'unknown'}" associated to wm class ${window_wm_class}`);
        if (
            window_wm_class !== ""
            && ((enable_all && !this._blacklist_matcher.matches(window_wm_class))
                || (!enable_all && this._whitelist_matcher.matches(window_wm_class))
            )
            && [
                Meta.FrameType.NORMAL,
                Meta.FrameType.DIALOG,
                Meta.FrameType.MODAL_DIALOG
            ].includes(meta_window.get_frame_type())
        ) {
            if (!meta_window.blur_actor)
                this.create_blur_effect(meta_window);
        }
        else if (meta_window.blur_actor)
            this.remove_blur(meta_window);
    }
    create_blur_effect(meta_window) {
        const window_actor = meta_window.get_compositor_private();
        if (!window_actor)
            return;

        const static_blur = this.blur_settings.STATIC_BLUR;
        const blur_surface = static_blur
            ? this.create_static_blur_surface(meta_window, window_actor)
            : this.create_dynamic_blur_surface(meta_window, window_actor);

        if (static_blur && !blur_surface.bg_manager)
            this._warn(`no bg_manager on blur creation for "${meta_window.get_title?.() ?? 'unknown'}"`);

        meta_window.blur_surface = blur_surface;
        meta_window.blur_actor = blur_surface.actor;
        meta_window.bg_manager = blur_surface.bg_manager;
        if (meta_window.blur_actor)
            meta_window.blur_actor._bms_is_blur_actor = true;
        const blur_actor = meta_window.blur_actor;
        if (this.settings.applications.BLUR_ON_OVERVIEW)
            this.enforce_window_visibility_on_overview_for(window_actor);
        this.set_window_opacity(window_actor, this.settings.applications.OPACITY);
        this.update_corner_radius(meta_window);
        this.connections.connect(
            meta_window, 'notify::maximized-horizontally',
            _ => this.update_corner_radius(meta_window)
        );
        this.connections.connect(
            meta_window, 'notify::maximized-vertically',
            _ => this.update_corner_radius(meta_window)
        );
        this.connections.connect(
            meta_window, 'notify::fullscreen',
            _ => this.update_corner_radius(meta_window)
        );
        this.connections.connect(
            window_actor, 'notify::opacity',
            _ => {
                if (this.focused_meta_window !== meta_window)
                    this.set_window_opacity(window_actor, this.settings.applications.OPACITY);
            }
        );
        this.connections.connect(
            window_actor, 'child-added',
            () => this.invalidate_window_content_children(window_actor)
        );
        this.connections.connect(
            window_actor, 'child-removed',
            () => this.invalidate_window_content_children(window_actor)
        );
        if (!window_actor.visible)
            blur_actor.hide();

        ['notify::allocation', 'notify::position', 'notify::x', 'notify::y'].forEach(signal =>
            this.connections.connect(
                window_actor,
                signal,
                _ => this.geometry_scheduler.queue(meta_window, static_blur)
            )
        );
        this.connections.connect(
            window_actor,
            'notify::visible',
            actor => {
                if (actor.visible) {
                    meta_window.blur_actor.show();
                    if (!static_blur) {
                        meta_window.blur_surface?.prepare_visible?.();
                        this.geometry_scheduler.schedule_settle(meta_window);
                    }
                } else {
                    meta_window.blur_actor.hide();
                }
            }
        );
        if (!static_blur) {
            this.connections.connect(
                window_actor,
                'notify::mapped',
                actor => {
                    if (actor.mapped && meta_window.blur_actor?.visible)
                        meta_window.blur_surface?.prepare_visible?.();
                }
            );
        }
        this.geometry_scheduler.queue(meta_window, static_blur);
        this.geometry_scheduler.schedule_settle(meta_window);
    }
    create_static_blur_surface(meta_window, window_actor) {
        return new BlurSurface({
            connections: this.connections,
            component_settings: this.blur_settings,
            effects_manager: this.effects_manager,
            pipeline_manager: global.blur_my_shell._pipelines_manager,
            widget_name: 'bms-application-blurred-widget',
            use_absolute_position: false,
        }).create({
            container: window_actor,
            monitor_index: meta_window.get_monitor(),
            pipeline_id: this.blur_settings.PIPELINE,
            static_blur: true,
        });
    }
    create_dynamic_blur_surface(meta_window, window_actor) {
        return new ApplicationsLiveSurface({
            effects_manager: this.effects_manager,
            blur_settings: this.blur_settings,
            pipeline_manager: global.blur_my_shell._pipelines_manager,
            meta_window,
            window_actor,
            get_corner_radius: () => this.get_corner_radius(meta_window),
        }).create();
    }
    set_focus_for_window(meta_window, focus = true) {
        let blur_actor = null;
        let window_actor = null;
        if (meta_window) {
            blur_actor = meta_window.blur_actor;
            window_actor = meta_window.get_compositor_private();
        }

        if (focus) {
            if (this.focused_meta_window)
                this.set_focus_for_window(this.focused_meta_window, false);
            this.focused_meta_window = meta_window;
            if (this.settings.applications.DYNAMIC_OPACITY && blur_actor) {
                blur_actor.hide();
                this.set_window_opacity(window_actor, 255);
                this.drag_tracker.sync_all_dynamic_surfaces(true);
                this.drag_tracker.schedule_all_dynamic_surfaces();
            }
        }
        else if (blur_actor) {
            this.set_window_opacity(window_actor, this.settings.applications.OPACITY);
            blur_actor.show();
            meta_window.blur_surface?.sync?.(true);
            this.drag_tracker.sync_all_dynamic_surfaces(true);
            this.drag_tracker.schedule_all_dynamic_surfaces();
        }
    }
    enforce_window_visibility_on_overview_for(window_actor) {
        this.connections.connect(window_actor, 'notify::visible',
            _ => {
                if (!this.settings.applications.BLUR_ON_OVERVIEW)
                    return;

                const content_actor = this.get_window_content_actor(window_actor);
                if (!content_actor)
                    return;

                if (!window_actor.visible && Main.overview.visible) {
                    window_actor.show();
                    content_actor.hide();
                } else if (window_actor.visible && !Main.overview.visible)
                    this.restore_window_content_visibility(window_actor);
            }
        );
    }
    restore_window_content_visibility(window_actor) {
        this.get_window_content_children(window_actor).forEach(child => {
            try {
                child.show();
            } catch (e) { }
        });
    }
    get_window_content_actor(window_actor) {
        try {
            const children = window_actor.get_children?.() ?? [];
            for (let i = children.length - 1; i >= 0; i--) {
                if (!is_bms_blur_child(children[i]))
                    return children[i];
            }
        } catch (e) { }
        return null;
    }
    get_window_content_children(window_actor) {
        if (!window_actor?._bms_content_children_cache)
            this.refresh_window_content_children(window_actor);
        return window_actor?._bms_content_children_cache ?? [];
    }
    refresh_window_content_children(window_actor) {
        if (!window_actor)
            return;
        window_actor._bms_content_children_cache = (window_actor.get_children?.() ?? [])
            .filter(child => !is_bms_blur_child(child));
    }
    invalidate_window_content_children(window_actor) {
        delete window_actor?._bms_content_children_cache;
    }
    update_corner_radius(meta_window) {
        meta_window.blur_surface?.update_corner_radius();
    }
    get_corner_radius(meta_window) {
        const is_maximized = meta_window.maximized_horizontally || meta_window.maximized_vertically;
        const is_fullscreen = meta_window.fullscreen;

        if (!this.settings.applications.CORNER_WHEN_MAXIMIZED && (is_maximized || is_fullscreen))
            return 0;

        return this.blur_settings.CORNER_RADIUS;
    }
    update_all_corner_radii() {
        this.tracked_windows.forEach(meta_window => this.update_corner_radius(meta_window));
    }
    set_window_opacity(window_actor, opacity) {
        this.get_window_content_children(window_actor).forEach(child => {
            if (child.opacity !== opacity) {
                child.queue_redraw?.();
                child.opacity = opacity;
                child.queue_redraw?.();
            }
        });
    }
    set_opacity() {
        let opacity = this.settings.applications.OPACITY;

        this.tracked_windows.forEach(meta_window => {
            if (meta_window !== this.focused_meta_window && meta_window.blur_actor) {
                let window_actor = meta_window.get_compositor_private();
                this.set_window_opacity(window_actor, opacity);
            }
        });
    }
    compute_scale(meta_window) {
        // TODO: Drop GNOME <50 compatibility
        const gnome_shell_major_version = parseInt(Config.PACKAGE_VERSION.split('.')[0]);
        const scale_monitor_framebuffer =
            gnome_shell_major_version >= 50 ||
            this.mutter_gsettings
                .get_strv('experimental-features')
                .includes('scale-monitor-framebuffer');
        const is_wayland = gnome_shell_major_version >= 50 || Meta.is_wayland_compositor();
        const monitor_index = meta_window.get_monitor();
        return !scale_monitor_framebuffer && is_wayland && meta_window.get_client_type() == 0
            ? Main.layoutManager.monitors[monitor_index].geometry_scale
            : 1;
    }
    compute_allocation(meta_window) {
        const scale = this.compute_scale(meta_window);

        let frame = meta_window.get_frame_rect();
        let buffer = meta_window.get_buffer_rect();

        return {
            x: (frame.x - buffer.x) / scale,
            y: (frame.y - buffer.y) / scale,
            width: frame.width / scale,
            height: frame.height / scale
        };
    }

    change_blur_type() {
        this._log("resetting...");
        this.disable();
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.enable();
            return GLib.SOURCE_REMOVE;
        });
    }

    change_pipeline() {
        this.tracked_windows.forEach(meta_window =>
            meta_window.blur_surface?.update_pipeline(this.blur_settings.PIPELINE)
        );
    }
    remove_blur(meta_window) {
        this._log(`removing blur for "${meta_window?.get_title?.() ?? 'unknown'}"`);
        if (!meta_window)
            return;

        this.geometry_scheduler.clear(meta_window);
        let window_actor = meta_window.get_compositor_private();
        let blur_surface = meta_window.blur_surface;

        if (meta_window.blur_actor && window_actor) {
            this.set_window_opacity(window_actor, 255);
            blur_surface?.destroy();
            delete meta_window.blur_surface;
            delete meta_window.blur_actor;
            delete meta_window.bg_manager;
            this.invalidate_window_content_children(window_actor);
            this.connections.disconnect_all_for(window_actor);
        }
    }
    untrack_meta_window(meta_window) {
        this.remove_blur(meta_window);
        if (!meta_window)
            return;

        this.connections.disconnect_all_for(meta_window);
        this.tracked_windows.delete(meta_window);
        if (this.focused_meta_window === meta_window)
            this.focused_meta_window = null;
    }

    disable() {
        if (!this.enabled) {
            this._log("blur already removed");
            return;
        }

        this._log("removing blur from applications...");

        this.service?.unexport();
        delete this.mutter_gsettings;
        this.drag_tracker.destroy();
        [...this.tracked_windows].forEach(meta_window => this.untrack_meta_window(meta_window));

        this.connections.disconnect_all();
        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > applications] ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > applications] ${str}`);
    }
};