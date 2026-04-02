import GLib from 'gi://GLib';
import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Signals from 'resource:///org/gnome/shell/misc/signals.js';

import { PaintSignals } from '../conveniences/paint_signals.js';

import { Pipeline } from '../conveniences/pipeline.js';
import { DummyPipeline } from '../conveniences/dummy_pipeline.js';

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
        this.old_style = this.dash._background.style;
        this._update_retry_id = 0;

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
            this.dash_blur.connect('update-pipeline', () => this.update_pipeline())
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
        if (this._update_retry_id)
            GLib.source_remove(this._update_retry_id);
        this._update_retry_id = 0;
        if (this.dash_destroy_id)
            this.dash.disconnect(this.dash_destroy_id);
        this.dash_destroy_id = null;
    }

    override_style() {
        this.remove_style();

        this.dash.set_style_class_name(
            DASH_STYLES[this.settings.dash_to_dock.STYLE_DASH_TO_DOCK]
        );
    }

    remove_style() {
        this.dash._background.style = this.old_style;

        DASH_STYLES.forEach(
            style => this.dash.remove_style_class_name(style)
        );
    }

    destroy_dash(dash_not_already_destroyed = true) {
        if (!dash_not_already_destroyed)
            this.bg_manager.backgroundActor = null;

        this.paint_signals?.disconnect_all();
        this.dash.get_parent().remove_child(this.background_group);
        this.bg_manager._bms_pipeline.destroy();
        this.bg_manager.destroy();
        this.background_group.destroy();
    }

    change_blur_type() {
        this.destroy_dash();

        let [
            background, background_group, bg_manager, paint_signals
        ] = this.dash_blur.add_blur(this.dash);

        this.background = background;
        this.background_group = background_group;
        this.bg_manager = bg_manager;
        this.paint_signals = paint_signals;

        this.dash.get_parent().insert_child_at_index(this.background_group, 0);

        this.update_size();
    }

    update_pipeline() {
        this.bg_manager._bms_pipeline.change_pipeline_to(
            this.settings.dash_to_dock.PIPELINE
        );
    }

    update_size(attempt = 0) {
        if (!this.geometry_ready()) {
            this.background_group.hide();
            this.schedule_update_retry(attempt);
            return;
        }

        this.cancel_update_retry();
        if (this.dash_blur.is_static) {
            let position = this.get_dash_position(this.dash_container, this.dash_background);
            if (!position) {
                this.background_group.hide();
                this.schedule_update_retry(attempt);
                return;
            }

            let [x, y] = position;
            if (![x, y].every(Number.isFinite)) {
                this.background_group.hide();
                this.schedule_update_retry(attempt);
                return;
            }

            this.background.x = -x;
            this.background.y = -y;

            let clip_x = null;
            let clip_y = null;
            let clip_width = this.dash_background.width;
            let clip_height = this.dash_background.height;

            if (this.dash_container.get_style_class_name().includes("top")) {
                clip_x = x;
                clip_y = y + this.dash.y + this.dash_background.y;
            } else if (this.dash_container.get_style_class_name().includes("bottom")) {
                clip_x = x;
                clip_y = y + this.dash.y + this.dash_background.y;
            } else if (this.dash_container.get_style_class_name().includes("left")) {
                clip_x = x + this.dash.x + this.dash_background.x;
                clip_y = y + this.dash.y + this.dash_background.y;
            } else if (this.dash_container.get_style_class_name().includes("right")) {
                clip_x = x + this.dash.x + this.dash_background.x;
                clip_y = y + this.dash.y + this.dash_background.y;
            }

            if (![clip_x, clip_y, clip_width, clip_height].every(Number.isFinite) ||
                clip_width <= 0 || clip_height <= 0) {
                this.background_group.hide();
                this.schedule_update_retry(attempt);
                return;
            }

            this.background.set_clip(
                clip_x,
                clip_y,
                clip_width,
                clip_height
            );
        } else {
            if (![this.dash_background.width, this.dash_background.height,
                this.dash_background.x, this.dash_background.y,
                this.dash.y].every(Number.isFinite) ||
                this.dash_background.width <= 0 ||
                this.dash_background.height <= 0) {
                this.background_group.hide();
                this.schedule_update_retry(attempt);
                return;
            }
            this.background.width = this.dash_background.width;
            this.background.height = this.dash_background.height;

            this.background.x = this.dash_background.x;
            this.background.y = this.dash_background.y + this.dash.y;
        }

        if (!(this.settings.dash_to_dock.UNBLUR_IN_OVERVIEW && Main.overview.visible))
            this.background_group.show();
    }

    geometry_ready() {
        const monitor = Main.layoutManager.findMonitorForActor(this.dash_container);
        const dash_box = this.dash_container?._slider?.get_child();

        return !!(
            this.dash &&
            this.dash_container &&
            this.dash_background &&
            dash_box &&
            monitor &&
            Number.isFinite(this.dash_container.width) &&
            Number.isFinite(this.dash_container.height) &&
            Number.isFinite(this.dash.width) &&
            Number.isFinite(this.dash.height) &&
            Number.isFinite(this.dash_background.width) &&
            Number.isFinite(this.dash_background.height) &&
            this.dash_container.width > 0 &&
            this.dash_container.height > 0 &&
            this.dash.width > 0 &&
            this.dash.height > 0 &&
            this.dash_background.width > 0 &&
            this.dash_background.height > 0
        );
    }

    schedule_update_retry(attempt = 0, delay_ms = 120) {
        if (this._update_retry_id || !this.dash_blur.enabled)
            return;

        this._update_retry_id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay_ms, () => {
            this._update_retry_id = 0;

            if (!this.dash_blur.enabled)
                return GLib.SOURCE_REMOVE;

            if (attempt >= 14)
                return GLib.SOURCE_REMOVE;

            this.update_size(attempt + 1);
            return GLib.SOURCE_REMOVE;
        });
    }

    cancel_update_retry() {
        if (!this._update_retry_id)
            return;

        GLib.source_remove(this._update_retry_id);
        this._update_retry_id = 0;
    }

    get_dash_position(dash_container, dash_background) {
        var x, y;

        let monitor = Main.layoutManager.findMonitorForActor(dash_container);
        let dash_box = dash_container._slider.get_child();

        if (!monitor || !dash_box)
            return null;

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
        if (![x, y].every(Number.isFinite))
            return null;

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
    constructor(connections, settings, _) {
        super();
        this.dashes = [];
        this.connections = connections;
        this.settings = settings;
        this.paint_signals = new PaintSignals(connections);
        this.is_static = this.settings.dash_to_dock.STATIC_BLUR;
        this.enabled = false;
        this._pending_retries = new Map();
        this._refresh_all_id = 0;
    }

    enable() {
        this.enabled = true;
        this.connections.connect(Main.uiGroup, 'child-added', (_, actor) => {
            if (
                (actor.get_name() === "dashtodockContainer") &&
                (actor.constructor.name === 'DashToDock')
            )
                this.schedule_try_blur(actor);
        });

        this.blur_existing_dashes();
        this.connect_to_overview();
        this.connections.connect(Main.layoutManager, 'monitors-changed', () => this.queue_refresh_all());
        this.connections.connect(global.display, 'workareas-changed', () => this.queue_refresh_all());

        this.update_size();
    }

    // Finds all existing dashes on every monitor, and call `try_blur` on them
    // We cannot only blur `Main.overview.dash`, as there could be several
    blur_existing_dashes() {
        this._log("searching for dash");

        // blur every dash found, filtered by name
        Main.uiGroup.get_children().filter((child) => {
            return (child.get_name() === "dashtodockContainer") &&
                (child.constructor.name === 'DashToDock');
        }).forEach(dash_container => this.schedule_try_blur(dash_container));
    }

    // Tries to blur the dash contained in the given actor
    try_blur(dash_container, attempt = 0) {
        let { dash_box, dash, dash_background } =
            this.get_dash_parts(dash_container);

        if (!dash_box || !dash)
            return;

        // verify that we did not already blur that dash
        if (!dash_box.get_children().some(child =>
            child.get_name() === "bms-dash-backgroundgroup"
        )) {
            this._log("dash to dock found, blurring it");

            // Wait until the dock has a real allocation before creating the blur
            // background, otherwise the background actor gets inserted too early
            // and GNOME logs allocation warnings instead of showing the blur.
            if (!this.dash_actor_ready(dash, dash_container, dash_background)) {
                this.schedule_try_blur(dash_container, 700, attempt + 1);
                return;
            }

            this.cancel_retry(dash_container);
            GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
                if (!this.enabled)
                    return GLib.SOURCE_REMOVE;

                let {
                    dash_box: idle_dash_box,
                    dash: idle_dash,
                    dash_background: idle_dash_background
                } = this.get_dash_parts(dash_container);

                if (!idle_dash_box || !idle_dash)
                    return GLib.SOURCE_REMOVE;

                if (idle_dash_box.get_children().some(child =>
                    child.get_name() === "bms-dash-backgroundgroup"
                )) {
                    return GLib.SOURCE_REMOVE;
                }

                if (!this.dash_actor_ready(
                    idle_dash, dash_container, idle_dash_background
                )) {
                    this.schedule_try_blur(dash_container, 700, attempt + 1);
                    return GLib.SOURCE_REMOVE;
                }

                this.dashes.push(this.blur_dash_from(idle_dash, dash_container));
                return GLib.SOURCE_REMOVE;
            });
        }
    }

    // Blurs the dash and returns a `DashInfos` containing its information
    blur_dash_from(dash, dash_container) {
        let [background, background_group, bg_manager, paint_signals] = this.add_blur(dash);

        background_group.hide();

        // insert the background group to the right element
        dash.get_parent().insert_child_at_index(background_group, 0);

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

        const dash_background = dash.get_children().find(child => {
            return child.get_style_class_name() === 'dash-background';
        });

        // create infos
        let infos = new DashInfos(
            this,
            dash,
            dash_container,
            dash_background,
            background,
            background_group,
            bg_manager,
            paint_signals
        );
        GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            if (!this.enabled)
                return GLib.SOURCE_REMOVE;

            if (!this.dashes.includes(infos))
                return GLib.SOURCE_REMOVE;

            this.update_size();
            this.update_background();
            if (!(this.settings.dash_to_dock.UNBLUR_IN_OVERVIEW && Main.overview.visible))
                infos.background_group.show();
            return GLib.SOURCE_REMOVE;
        });

        // returns infos
        return infos;
    }

    add_blur(dash) {
        const monitor = Main.layoutManager.findMonitorForActor(dash);
        if (!monitor)
            return;

        const background_group = new Meta.BackgroundGroup({
            name: 'bms-dash-backgroundgroup', width: 0, height: 0
        });

        let background, bg_manager, paint_signals;
        let static_blur = this.settings.dash_to_dock.STATIC_BLUR;
        if (static_blur) {
            let bg_manager_list = [];
            const pipeline = new Pipeline(
                global.blur_my_shell._effects_manager,
                global.blur_my_shell._pipelines_manager,
                this.settings.dash_to_dock.PIPELINE
            );
            background = pipeline.create_background_with_effects(
                monitor.index, bg_manager_list,
                background_group, 'bms-dash-blurred-widget'
            );
            bg_manager = bg_manager_list[0];
        }
        else {
            const pipeline = new DummyPipeline(
                global.blur_my_shell._effects_manager,
                this.settings.dash_to_dock
            );
            [background, bg_manager] = pipeline.create_background_with_effect(
                background_group, 'bms-dash-blurred-widget'
            );

            paint_signals = new PaintSignals(this.connections);

            // HACK
            //
            //`Shell.BlurEffect` does not repaint when shadows are under it. [1]
            //
            // This does not entirely fix this bug (shadows caused by windows
            // still cause artifacts), but it prevents the shadows of the dash
            // buttons to cause artifacts on the dash itself
            //
            // [1]: https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (this.settings.HACKS_LEVEL === 1) {
                this._log("hack level 1");

                paint_signals.disconnect_all();
                paint_signals.connect(background, pipeline.effect);
            } else {
                paint_signals.disconnect_all();
            }
        }

        return [background, background_group, bg_manager, paint_signals];
    }

    dash_actor_ready(dash, dash_container, dash_background) {
        return !!(
            dash &&
            dash_background &&
            Main.layoutManager.findMonitorForActor(dash) &&
            dash_container.width > 0 &&
            dash_container.height > 0 &&
            dash.width > 0 &&
            dash.height > 0 &&
            dash_background.width > 0 &&
            dash_background.height > 0
        );
    }
    get_dash_parts(dash_container) {
        let dash_box = dash_container?._slider?.get_child();
        let dash = dash_box?.get_children().find(child => {
            return child.get_name() === 'dash';
        });
        let dash_background = dash?.get_children().find(child => {
            return child.get_style_class_name() === 'dash-background';
        });

        return { dash_box, dash, dash_background };
    }

    schedule_try_blur(dash_container, delay_ms = 1600, attempt = 0) {
        if (!this.enabled)
            return;
        this.cancel_retry(dash_container);

        this._log(`scheduling dock blur in ${delay_ms}ms (attempt ${attempt + 1})`);
        const retry_id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay_ms, () => {
            this._pending_retries.delete(dash_container);

            if (!this.enabled)
                return GLib.SOURCE_REMOVE;

            if (attempt >= 19) {
                let { dash, dash_background } = this.get_dash_parts(dash_container);
                this._warn(
                    `dash initialization exhausted attempts=${attempt + 1}, ` +
                    `container=${dash_container.width}x${dash_container.height}, ` +
                    `dash=${dash?.width ?? 0}x${dash?.height ?? 0}, ` +
                    `background=${dash_background?.width ?? 0}x${dash_background?.height ?? 0})`
                );
                return GLib.SOURCE_REMOVE;
            }
            this.try_blur(dash_container, attempt);
            return GLib.SOURCE_REMOVE;
        });

        this._pending_retries.set(dash_container, retry_id);
    }

    cancel_retry(dash_container) {
        const retry_id = this._pending_retries.get(dash_container);
        if (!retry_id)
            return;

        GLib.source_remove(retry_id);
        this._pending_retries.delete(dash_container);
    }

    queue_refresh_all(delay_ms = 180) {
        if (!this.enabled || this._refresh_all_id)
            return;

        this._refresh_all_id = GLib.timeout_add(GLib.PRIORITY_DEFAULT, delay_ms, () => {
            this._refresh_all_id = 0;

            if (!this.enabled)
                return GLib.SOURCE_REMOVE;

            this.blur_existing_dashes();
            this.update_size();
            this.update_background();
            return GLib.SOURCE_REMOVE;
        });
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
        this._log("removing blur from dashes");

        this.emit('remove-dashes');

        this.dashes = [];
        if (this._refresh_all_id)
            GLib.source_remove(this._refresh_all_id);
        this._refresh_all_id = 0;
        this._pending_retries.forEach(retry_id => GLib.source_remove(retry_id));
        this._pending_retries.clear();
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