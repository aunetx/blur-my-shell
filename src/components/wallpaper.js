import Meta from 'gi://Meta';
import * as Background from 'resource:///org/gnome/shell/ui/background.js';

import { Pipeline } from '../conveniences/pipeline.js';


const background_manager_proto = Background.BackgroundManager.prototype;


export const WallpaperBlur = class WallpaperBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;

        this.pipelines = new Map();

        this.enabled = false;
        this.proto_patched = false;

        this.patch_generation = 0;
        this.active_patch_generation = null;

        this._original_CreateBackgroundActor = null;
        this._patched_CreateBackgroundActor = null;
    }

    enable() {
        if (this.enabled)
            return;

        this._log('blurring wallpaper');
        this.enabled = true;

        this.patch_background_manager();

        // backgrounds that already existed before the prototype was patched need to be handled once manually
        this.blur_existing_backgrounds();
    }

    patch_background_manager() {
        if (this.proto_patched)
            return;

        const originalCreateBackgroundActor = background_manager_proto._createBackgroundActor;

        if (typeof originalCreateBackgroundActor !== 'function')
            throw new Error('BackgroundManager._createBackgroundActor is unavailable');

        this._original_CreateBackgroundActor = originalCreateBackgroundActor;

        const wallpaper_blur = this;
        const generation = ++this.patch_generation;
        this.active_patch_generation = generation;

        this._patched_CreateBackgroundActor = function (...params) {
            const actor = originalCreateBackgroundActor.apply(this, params);
            if (wallpaper_blur.enabled && wallpaper_blur.active_patch_generation === generation)
                wallpaper_blur.try_blur(actor);
            return actor;
        };

        background_manager_proto._createBackgroundActor = this._patched_CreateBackgroundActor;

        this.proto_patched = true;
    }

    restore_patched_proto() {
        if (!this.proto_patched)
            return;

        if (background_manager_proto._createBackgroundActor === this._patched_CreateBackgroundActor)
            background_manager_proto._createBackgroundActor = this._original_CreateBackgroundActor;
        else if (background_manager_proto._createBackgroundActor !== this._original_CreateBackgroundActor)
            this._log('could not restore BackgroundManager._createBackgroundActor');

        this.proto_patched = false;
        this.active_patch_generation = null;

        this._original_CreateBackgroundActor = null;
        this._patched_CreateBackgroundActor = null;
    }

    blur_existing_backgrounds() {
        const actors = [global.stage];

        while (actors.length > 0) {
            const actor = actors.pop();

            if (actor instanceof Meta.BackgroundActor)
                this.try_blur(actor);

            const children = actor?.get_children?.();
            if (children)
                actors.push(...children);
        }
    }

    try_blur(actor) {
        if (!this.enabled)
            return;

        if (!(actor instanceof Meta.BackgroundActor))
            return;

        if (this.pipelines.has(actor))
            return;

        if (this.should_ignore(actor))
            return;

        this._log('found wallpaper actor to blur');

        let pipeline = null;

        try {
            pipeline = new Pipeline(
                this.effects_manager,
                global.blur_my_shell._pipelines_manager,
                this.settings.wallpaper.PIPELINE,
                actor
            );

            this.pipelines.set(actor, pipeline);

            this.connections.connect(actor, 'destroy', () => {
                this.pipelines.delete(actor);
                pipeline.destroy();
            });
        } catch (error) {
            pipeline?.destroy();
            this.pipelines.delete(actor);

            logError(error, '[Blur my Shell > wallpaper] failed to attach pipeline');
        }
    }

    should_ignore(actor) {
        let current = actor;

        while (current) {
            if (current._bms_skip_wallpaper_pipeline)
                return true;
            current = current.get_parent?.();
        }

        return false;
    }

    update_pipeline() {
        this.pipelines.forEach(pipeline => pipeline.change_pipeline_to(this.settings.wallpaper.PIPELINE));
    }

    disable() {
        if (!this.enabled) {
            this.restore_patched_proto();
            return;
        }

        this._log('removing blur from wallpaper');
        this.enabled = false;

        // stop affecting newly created backgrounds first
        this.restore_patched_proto();

        this.connections.disconnect_all();

        this.pipelines.forEach(pipeline => pipeline.destroy());
        this.pipelines.clear();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > wallpaper]    ${str}`);
    }
};
