import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { DynamicPipeline } from '../render/dynamic_surface.js';

const FOLDER_DIALOG_ANIMATION_TIME = 200;
const FOLDER_DIALOG_SHADE_FACTOR = 0.25;

const DIALOGS_STYLES = [
    "appfolder-dialogs-transparent",
    "appfolder-dialogs-light",
    "appfolder-dialogs-dark"
];

const AppFolderSurface = GObject.registerClass({
    GTypeName: 'BmsAppFolderSurface',
}, class AppFolderSurface extends St.Widget {
    vfunc_allocate(box) {
        super.vfunc_allocate(box);
        if (this.blurActor && this.viewBox)
            this.blurActor.allocate(this.viewBox.get_allocation_box());
    }
});

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

function update_corner_radius(dialog) {
    const scale = St.ThemeContext.get_for_stage(global.stage).scale_factor;
    const radius = dialog._viewBox.get_theme_node().get_border_radius(St.Corner.TOPLEFT);
    dialog._bms_appfolder_pipeline?.set_corner_radius(radius / scale);
}

function reduce_background_shade(dialog) {
    const transition = dialog.get_transition('background-color');
    const color = (transition
        ? transition.get_interval().peek_final_value()
        : dialog.get_background_color()).copy();
    color.alpha = Math.round(color.alpha * FOLDER_DIALOG_SHADE_FACTOR);
    if (transition)
        transition.set_to(color);
    else
        dialog.set_background_color(color);
}

const setLighterBackground = function (...params) {
    const result = this._bms_original_setLighterBackground.apply(this, params);
    reduce_background_shade(this);
    return result;
};

function create_surface(dialog) {
    if (dialog._bms_appfolder_surface)
        return dialog._bms_appfolder_surface;

    const viewBox = dialog._viewBox;
    const container = viewBox?.get_parent?.();
    if (!viewBox || container !== dialog.child)
        return null;

    const surface = new AppFolderSurface({
        layout_manager: new Clutter.BinLayout(),
        style_class: container.style_class,
        style: container.style,
        x_align: container.x_align,
        y_align: container.y_align,
        x_expand: container.x_expand,
        y_expand: container.y_expand,
    });
    surface.viewBox = viewBox;
    container.remove_child(viewBox);
    surface.add_child(viewBox);
    dialog.set_child(surface);
    dialog._bms_appfolder_original_container = container;
    dialog._bms_appfolder_surface = surface;
    return surface;
}

function destroy_surface(dialog) {
    const surface = dialog._bms_appfolder_surface;
    if (!surface)
        return;

    const container = dialog._bms_appfolder_original_container;
    if (dialog.child === surface && dialog._viewBox.get_parent() === surface) {
        surface.remove_child(dialog._viewBox);
        container.set_child(dialog._viewBox);
        dialog.set_child(container);
    }
    surface.destroy();
    dialog._bms_appfolder_surface = null;
    dialog._bms_appfolder_original_container = null;
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
    reduce_background_shade(this);
    if (
        this._bms_original_sourceMappedId === 0
        && !this._bms_created_sourceMappedId
        && this._sourceMappedId
    )
        this._bms_created_sourceMappedId = this._sourceMappedId;
    return result;
};

const zoomAndFadeOut = function (...params) {
    if (this._isOpen && this._source?.mapped) {
        animate_blur(this, 0, Clutter.AnimationMode.EASE_IN_QUAD);
    }

    const result = this._bms_original_zoomAndFadeOut?.apply(this, params);
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
                dialog._bms_original_setLighterBackground = dialog._setLighterBackground;
                dialog._bms_original_sourceMappedId = dialog._sourceMappedId;
                this.dialogs.add(dialog);
                this.connections.connect(dialog, 'destroy', () => {
                    stop_blur_animation(dialog);
                    dialog._bms_appfolder_pipeline?.destroy();
                    dialog._bms_appfolder_original_container?.destroy();
                    this.dialogs.delete(dialog);
                });
                this.connections.connect(dialog._viewBox, 'style-changed',
                    () => update_corner_radius(dialog));
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
                    { corner_radius: 0, fixed_blur_passes: true }
                );
                const surface = create_surface(dialog);
                if (!surface) {
                    pipeline.destroy();
                    continue;
                }
                const actor = pipeline.create_actor('bms-appfolder-blurred-widget');
                pipeline.ownsActor = true;
                surface.blurActor = actor;
                surface.insert_child_below(actor, dialog._viewBox);
                pipeline.attach_pipeline();
                dialog._bms_appfolder_pipeline = pipeline;
                update_corner_radius(dialog);
            }

            DIALOGS_STYLES.forEach(
                style => {
                    dialog._viewBox.remove_style_class_name(style);
                }
            );

            const styleIndex = this.settings.appfolder.STYLE_DIALOGS - 1;
            if (styleIndex >= 0) {
                const style = DIALOGS_STYLES[styleIndex];
                if (style) {
                    dialog._viewBox.add_style_class_name(style);
                }
            }

            dialog._zoomAndFadeIn = zoomAndFadeIn;
            dialog._zoomAndFadeOut = zoomAndFadeOut;
            if (dialog._setLighterBackground !== setLighterBackground) {
                dialog._setLighterBackground = setLighterBackground;
                if (dialog._isOpen)
                    dialog._setLighterBackground(false);
            }
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
            if (dialog._setLighterBackground === setLighterBackground) {
                dialog._setLighterBackground = dialog._bms_original_setLighterBackground;
                if (dialog._isOpen)
                    dialog._setLighterBackground(false);
            }
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
            delete dialog._bms_original_setLighterBackground;
            delete dialog._bms_original_sourceMappedId;
            delete dialog._bms_created_sourceMappedId;
        });
        this.dialogs.clear();

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > appfolders]   ${str}`);
    }
};
