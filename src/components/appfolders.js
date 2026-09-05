import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { DynamicPipeline } from '../render/dynamic_surface.js';

// TODO: Drop GNOME 46 backwards compatibility
const transparent = Clutter.Color ?
    Clutter.Color.from_pixel(0x00000000) :
    new Cogl.Color({
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0
    });
const FOLDER_DIALOG_ANIMATION_TIME = 200;

const DIALOGS_STYLES = [
    "appfolder-dialogs-transparent",
    "appfolder-dialogs-light",
    "appfolder-dialogs-dark"
];

function disconnect_timeline_signals(timeline) {
    (timeline._bms_signal_ids ?? []).forEach(id => {
        try {
            if (id && GObject.signal_handler_is_connected(timeline, id))
                timeline.disconnect(id);
        } catch (e) { }
    });
    timeline._bms_signal_ids = [];
}

function stop_blur_animation(dialog) {
    const timeline = dialog._bms_appfolder_blur_timeline;
    if (!timeline)
        return;

    dialog._bms_appfolder_blur_timeline = null;
    timeline.stop();
    disconnect_timeline_signals(timeline);
}

function animate_blur(dialog, target, mode) {
    stop_blur_animation(dialog);
    const pipeline = dialog._bms_appfolder_pipeline;
    const actor = pipeline?.contentActor;
    if (!actor)
        return;

    const start = pipeline.opacityFactor;
    const settings = St.Settings.get();
    const duration = settings.enable_animations
        ? FOLDER_DIALOG_ANIMATION_TIME * settings.slow_down_factor
        : 0;
    if (duration === 0 || start === target) {
        pipeline.set_opacity_factor(target);
        return;
    }
    const timeline = new Clutter.Timeline({
        actor,
        duration,
    });
    timeline.set_progress_mode(mode);
    const frame_id = timeline.connect('new-frame', () => {
        const progress = timeline.get_progress();
        pipeline.set_opacity_factor(start + (target - start) * progress);
    });
    const completed_id = timeline.connect('completed', () => {
        pipeline.set_opacity_factor(target);
        if (dialog._bms_appfolder_blur_timeline === timeline)
            dialog._bms_appfolder_blur_timeline = null;
        disconnect_timeline_signals(timeline);
    });
    timeline._bms_signal_ids = [frame_id, completed_id];
    dialog._bms_appfolder_blur_timeline = timeline;
    timeline.start();
}

function keep_dialog_background_transparent(dialog) {
    try {
        dialog.remove_transition('background-color');
        dialog.set_background_color(transparent);
    } catch (e) { }
}

function create_surface(dialog) {
    if (dialog._bms_appfolder_surface)
        return dialog._bms_appfolder_surface;

    const viewBox = dialog._viewBox;
    const container = viewBox?.get_parent?.();
    if (!viewBox || !container)
        return null;

    const surface = new St.Widget({
        layout_manager: new Clutter.BinLayout(),
        x_align: Clutter.ActorAlign.CENTER,
        y_align: Clutter.ActorAlign.CENTER,
    });
    container.remove_child(viewBox);
    surface.add_child(viewBox);
    container.set_child(surface);
    dialog._bms_appfolder_surface = surface;
    return surface;
}

function destroy_surface(dialog) {
    const surface = dialog._bms_appfolder_surface;
    if (!surface)
        return;

    const container = surface.get_parent();
    if (container && dialog._viewBox.get_parent() === surface) {
        surface.remove_child(dialog._viewBox);
        container.remove_child(surface);
        container.set_child(dialog._viewBox);
    }
    surface.destroy();
    dialog._bms_appfolder_surface = null;
}

const zoomAndFadeIn = function (...params) {
    const pipeline = this._bms_appfolder_pipeline;
    if (pipeline) {
        pipeline.attach_pipeline();
        if (!this._bms_appfolder_blur_timeline)
            pipeline.set_opacity_factor(0);
        animate_blur(this, 1, Clutter.AnimationMode.EASE_OUT_QUAD);
    }

    const result = this._bms_original_zoomAndFadeIn?.apply(this, params);
    if (
        this._bms_original_sourceMappedId === 0
        && !this._bms_created_sourceMappedId
        && this._sourceMappedId
    )
        this._bms_created_sourceMappedId = this._sourceMappedId;
    keep_dialog_background_transparent(this);
    return result;
};

const zoomAndFadeOut = function (...params) {
    if (this._isOpen && this._source?.mapped) {
        animate_blur(this, 0, Clutter.AnimationMode.EASE_IN_QUAD);
    }

    const result = this._bms_original_zoomAndFadeOut?.apply(this, params);
    keep_dialog_background_transparent(this);
    return result;
};


export const AppFoldersBlur = class AppFoldersBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.dialogs = new Set();
        this.blur_idle_id = 0;
        this.enabled = false;
    }

    enable() {
        if (this.enabled)
            return;

        this._log("blurring appfolders");
        this.enabled = true;

        const appDisplay = this.get_app_display();
        if (!appDisplay) {
            this.enabled = false;
            return;
        }

        if (appDisplay._folderIcons?.length > 0) {
            this.queue_blur_appfolders();
        }

        this.connections.connect(
            appDisplay, 'view-loaded', _ => this.queue_blur_appfolders()
        );
    }

    queue_blur_appfolders() {
        if (!this.enabled || this.blur_idle_id)
            return;

        this.blur_idle_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.blur_idle_id = 0;
            if (this.enabled)
                this.blur_appfolders();
            return GLib.SOURCE_REMOVE;
        });
    }

    get_app_display() {
        return Main.overview?._overview?.controls?._appDisplay
            ?? Main.overview?._overview?._controls?._appDisplay
            ?? null;
    }

    blur_appfolders() {
        const appDisplay = this.get_app_display();
        if (!appDisplay)
            return;

        for (const icon of appDisplay._folderIcons ?? []) {
            icon._ensureFolderDialog?.();
            const dialog = icon._dialog;
            if (!dialog?._viewBox)
                continue;

            if (!this.dialogs.has(dialog)) {
                dialog._bms_original_zoomAndFadeIn = dialog._zoomAndFadeIn;
                dialog._bms_original_zoomAndFadeOut = dialog._zoomAndFadeOut;
                dialog._bms_original_sourceMappedId = dialog._sourceMappedId;
                dialog._bms_original_backgroundColor = dialog.get_background_color?.() ?? null;
                this.dialogs.add(dialog);
                this.connections.connect(dialog, 'destroy', () => {
                    stop_blur_animation(dialog);
                    dialog._bms_appfolder_pipeline?.destroy();
                    this.dialogs.delete(dialog);
                });
                this.connections.connect(dialog, 'notify::mapped', () => {
                    if (!dialog.mapped) {
                        stop_blur_animation(dialog);
                        dialog._bms_appfolder_pipeline?.set_opacity_factor(0);
                    }
                });
            }

            let pipeline = dialog._bms_appfolder_pipeline;
            if (!pipeline) {
                pipeline = new DynamicPipeline(
                    this.effects_manager,
                    global.blur_my_shell._pipelines_manager,
                    this.settings.appfolder.PIPELINE,
                    { corner_radius: 24, fixed_blur_passes: true }
                );
                const surface = create_surface(dialog);
                if (!surface) {
                    pipeline.destroy();
                    continue;
                }
                pipeline.attach_to_container(
                    surface,
                    'bms-appfolder-blurred-widget'
                );
                dialog._bms_appfolder_pipeline = pipeline;
            }

            DIALOGS_STYLES.forEach(
                style => {
                    dialog._viewBox.remove_style_class_name(style);
                    pipeline.actor?.remove_style_class_name(style);
                }
            );

            const styleIndex = this.settings.appfolder.STYLE_DIALOGS - 1;
            if (styleIndex >= 0) {
                const style = DIALOGS_STYLES[styleIndex];
                if (style) {
                    dialog._viewBox.add_style_class_name(style);
                    pipeline.actor?.add_style_class_name(style);
                }
            }

            dialog._zoomAndFadeIn = zoomAndFadeIn;
            dialog._zoomAndFadeOut = zoomAndFadeOut;

        }
    };

    update_pipeline() {
        this.dialogs.forEach(dialog => {
            dialog._bms_appfolder_pipeline?.change_pipeline_to(
                this.settings.appfolder.PIPELINE
            );
        });
    }

    disable() {
        if (!this.enabled)
            return;

        this._log("removing blur from appfolders");
        this.enabled = false;

        if (this.blur_idle_id) {
            GLib.Source.remove(this.blur_idle_id);
            this.blur_idle_id = 0;
        }

        this.dialogs.forEach(dialog => {
            stop_blur_animation(dialog);
            if (
                dialog._bms_created_sourceMappedId
                && dialog._sourceMappedId === dialog._bms_created_sourceMappedId
            ) {
                try {
                    dialog._source.disconnect(dialog._sourceMappedId);
                } catch (e) { }
                dialog._sourceMappedId = 0;
            }
            if (dialog._zoomAndFadeIn === zoomAndFadeIn)
                dialog._zoomAndFadeIn = dialog._bms_original_zoomAndFadeIn;
            if (dialog._zoomAndFadeOut === zoomAndFadeOut)
                dialog._zoomAndFadeOut = dialog._bms_original_zoomAndFadeOut;
            if (dialog._bms_original_backgroundColor)
                dialog.set_background_color(dialog._bms_original_backgroundColor);
            dialog._bms_appfolder_pipeline?.destroy();
            dialog._bms_appfolder_pipeline = null;
            destroy_surface(dialog);
            try {
                DIALOGS_STYLES.forEach(
                    style => dialog._viewBox.remove_style_class_name(style)
                );
            } catch (e) { }
            delete dialog._bms_original_zoomAndFadeIn;
            delete dialog._bms_original_zoomAndFadeOut;
            delete dialog._bms_original_sourceMappedId;
            delete dialog._bms_created_sourceMappedId;
            delete dialog._bms_original_backgroundColor;
        });
        this.dialogs.clear();

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > appfolders]   ${str}`);
    }
};
