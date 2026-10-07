import Meta from 'gi://Meta';
import GLib from 'gi://GLib';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Signals from 'resource:///org/gnome/shell/misc/signals.js';

import { Connections } from '../conveniences/connections.js';
import { Pipeline } from '../conveniences/pipeline.js';
import { DynamicPipeline } from '../render/dynamic_surface.js';
import { RoundedPipeline } from '../render/rounded_pipeline.js';
import {
    get_dock_corners,
    is_dock_ready,
    is_supported_dock_container,
    resolve_dock_target,
} from './dock_targets.js';
import { connect_system_style_changes } from '../conveniences/style.js';

import { DockSurface } from './dock_surface.js';

const WATCHED_TARGET_SIGNALS = {
    content_parent: ['notify::allocation', 'child-added', 'child-removed'],
    content: ['notify::allocation'],
    background: ['notify::allocation'],
};

/// Watches a dock that is not built or allocated yet, and triggers a new discovery once it is.
class PendingDock {
    constructor(dash_blur, container) {
        this.dash_blur = dash_blur;
        this.container = container;
        this.connections = new Connections();
        this.target_watches = Object.keys(WATCHED_TARGET_SIGNALS).map(role => ({
            role,
            actor: null,
            connections: new Connections(),
        }));
        this.map_retry_id = 0;

        this.connections.connect(container, ['notify::allocation', 'child-added'],
            () => this.retry());
        this.connections.connect(container, 'notify::mapped', () => this.queue_map_retry());
        this.connections.connect(container, 'destroy', () => this.destroy());

        const slider = resolve_dock_target(container)?.slider;
        if (slider)
            this.connections.connect(slider, ['notify::child', 'child-added', 'child-removed'],
                () => this.retry());
    }

    retry() {
        const target = resolve_dock_target(this.container);
        this.watch_target(target);
        if (!is_dock_ready(this.container, target))
            return;

        this.destroy();
        this.dash_blur.queue_discovery();
    }

    watch_target(target) {
        this.target_watches.forEach(watch => {
            const actor = target?.[watch.role];
            if (actor === watch.actor)
                return;

            watch.connections.disconnect_all();
            watch.actor = actor;
            if (actor)
                watch.connections.connect(actor, WATCHED_TARGET_SIGNALS[watch.role],
                    () => this.retry());
        });
    }

    queue_map_retry() {
        if (!this.container.mapped || this.map_retry_id)
            return;

        this.map_retry_id = global.compositor.get_laters().add(
            Meta.LaterType.BEFORE_REDRAW,
            () => {
                this.map_retry_id = 0;
                this.dash_blur.queue_discovery();
                return GLib.SOURCE_REMOVE;
            }
        );
    }

    destroy() {
        if (this.map_retry_id) {
            global.compositor.get_laters().remove(this.map_retry_id);
            this.map_retry_id = 0;
        }
        this.connections.disconnect_all();
        this.target_watches.forEach(watch => watch.connections.disconnect_all());
        this.dash_blur.pending_docks.delete(this.container);
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
        this.pending_docks = new Map();
        this.discovery_id = 0;
        this.native_dash = null;
        this.native_dash_connections = new Connections();
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

        connect_system_style_changes(this.connections, () => {
            this.update_background();
        });

        this.update_size();
    }

    // Finds all existing dashes on every monitor, and call `try_blur` on them
    // We cannot only blur `Main.overview.dash`, as there could be several
    blur_existing_dashes() {
        this._log("searching for dash");

        Main.uiGroup.get_children()
            .filter(is_supported_dock_container)
            .forEach(dash_container => this.try_blur(dash_container));

        // Dash to Dock swaps the overview dash for its own one
        const native_dash = Main.overview.dash;
        if (native_dash !== this.native_dash) {
            this.native_dash_connections.disconnect_all();
            this.native_dash = native_dash;
            this.native_dash_connections.connect(native_dash,
                ['child-added', 'child-removed', 'notify::mapped'],
                () => this.queue_discovery());
        }
        if (resolve_dock_target(native_dash))
            this.try_blur(native_dash);
    }

    queue_discovery() {
        if (this.discovery_id)
            return;
        this.discovery_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.discovery_id = 0;
            this.blur_existing_dashes();
            return GLib.SOURCE_REMOVE;
        });
    }

    _defer_blur_until_allocated(dash_container) {
        let pending = this.pending_docks.get(dash_container);
        if (!pending) {
            pending = new PendingDock(this, dash_container);
            this.pending_docks.set(dash_container, pending);
        }
        pending.retry();
    }

    // Tries to blur the dash contained in the given actor
    try_blur(dash_container) {
        const target = resolve_dock_target(dash_container);
        if (!is_dock_ready(dash_container, target)) {
            this._defer_blur_until_allocated(dash_container);
            return;
        }

        this.pending_docks.get(dash_container)?.destroy();

        const {
            content: dash,
            content_parent: dash_box,
            background: dash_background,
        } = target;

        const dash_exist = this.dashes.find(infos => infos.dash === dash);
        if (dash_exist) {
            if (dash_exist.dash_background === dash_background
                && dash_exist.theme_manager === target.theme_manager
                && dash_exist.background_group?.get_parent() === dash_box)
                return;
            dash_exist.remove_dash_blur();
        }

        this._log("supported dock found, blurring it");

        const blur = this.add_blur(dash_container, target);
        if (!blur)
            return;

        dash_box.insert_child_below(blur.background_group, target.sibling ?? dash);
        const infos = new DockSurface(this, dash_container, target, blur);
        this.dashes.push(infos);
        infos.schedule_update();
        this.update_background();
    }

    add_blur(dash_container, target) {
        const corner_settings = get_dock_corners(target.background);
        const get_radius = () => corner_settings.radius;
        const get_corners = () => corner_settings.corners;
        const monitor = Main.layoutManager.findMonitorForActor(dash_container)
            ?? Main.layoutManager.primaryMonitor;
        if (!monitor)
            return null;

        const background_group = new Meta.BackgroundGroup({
            name: 'bms-dash-backgroundgroup', width: 0, height: 0
        });

        if (this.settings.dash_to_dock.STATIC_BLUR) {
            const bg_managers = [];
            const pipeline = new Pipeline(
                this.effects_manager,
                global.blur_my_shell._pipelines_manager,
                this.settings.dash_to_dock.PIPELINE
            );
            const background = pipeline.create_background_with_effects(
                monitor.index, bg_managers,
                background_group, 'bms-dash-blurred-widget'
            );
            const rounded_pipeline = new RoundedPipeline(
                this.effects_manager,
                get_radius,
                get_corners
            );
            rounded_pipeline.bind(pipeline, background);

            return {
                background,
                background_group,
                bg_manager: bg_managers[0],
                pipeline,
                rounded_pipeline,
                corner_settings,
            };
        }

        const pipeline = new DynamicPipeline(
            this.effects_manager,
            global.blur_my_shell._pipelines_manager,
            this.settings.dash_to_dock.PIPELINE,
            {
                corner_radius: get_radius(),
                get_corners,
            }
        );
        const [background, bg_manager] = pipeline.create_background_with_effect(
            background_group, 'bms-dash-blurred-widget'
        );

        return {
            background,
            background_group,
            bg_manager,
            pipeline,
            rounded_pipeline: null,
            corner_settings,
        };
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

        this.native_dash_connections.disconnect_all();
        this.native_dash = null;

        this.pending_docks.forEach(pending => pending.destroy());
        this.emit('remove-style');
        this.emit('remove-dashes');

        this.connections.disconnect_all();

        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > dash manager] ${str}`);
    }
};
