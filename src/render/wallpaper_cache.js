import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import GDesktopEnums from 'gi://GDesktopEnums';
import Meta from 'gi://Meta';
import Shell from 'gi://Shell';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from '../conveniences/pipeline.js';
import { SurfaceShaderEffect } from './shader_effect.js';

const CAPTURE_SNIPPET = Cogl.Snippet.new(Cogl.SnippetHook.FRAGMENT, '', '');
const WallpaperCapture = GObject.registerClass({
    GTypeName: 'BmsWallpaperCapture',
}, class WallpaperCapture extends SurfaceShaderEffect {
    _init() {
        super._init();
        this.surfaceSnippet = CAPTURE_SNIPPET;
    }

    static get default_params() { return {}; }

    // Bake offscreen; nothing to draw on the desktop.
    vfunc_paint_target() {}
});

const WallpaperBakeActor = GObject.registerClass({
    GTypeName: 'BmsWallpaperBakeActor',
}, class WallpaperBakeActor extends Clutter.Actor {
    // Keep the source mapped, but only paint it through the clone.
    vfunc_paint(context) {
        this.filter.paint(context);
    }
});

class WallpaperBake {
    constructor(background, monitorIndex, file, effectsManager, pipelinesManager, pipelineId) {
        this.file = file;
        this.background = background;
        this.cancelled = false;
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        const start = () => {
            this.disconnectLoaded();
            try {
                const monitor = Main.layoutManager.monitors[monitorIndex];
                const content = new Meta.BackgroundContent({
                    meta_display: global.display,
                    monitor: monitorIndex,
                    background,
                });
                // Leave Shell's dimming and rounded corners out of the image.
                this.actor = new WallpaperBakeActor({
                    layout_manager: new Clutter.BinLayout(),
                    x: monitor.x, y: monitor.y,
                    width: monitor.width, height: monitor.height,
                });
                this.source = new Clutter.Actor({
                    content, width: monitor.width, height: monitor.height,
                });
                this.clone = new Clutter.Clone({
                    source: this.source, width: monitor.width, height: monitor.height,
                });
                this.actor.filter = this.clone;
                this.actor.add_child(this.source);
                this.actor.add_child(this.clone);
                this.capture = new WallpaperCapture();
                this.clone.add_effect(this.capture);
                this.pipeline = new Pipeline(effectsManager, pipelinesManager, pipelineId, this.clone);
                global.stage.add_child(this.actor);
                this.paintId = global.stage.connect('after-paint', () => {
                    const texture = this.capture.get_texture();
                    if (!texture)
                        return;
                    global.stage.disconnect(this.paintId);
                    this.paintId = 0;
                    this.save(texture).catch(error => this.fail(error));
                });
                this.clone.queue_redraw();
            } catch (error) {
                this.fail(error);
            }
        };
        if (background.isLoaded)
            start();
        else
            this.loadedId = background.connect('loaded', start);
    }

    disconnectLoaded() {
        if (this.loadedId)
            this.background.disconnect(this.loadedId);
        this.loadedId = 0;
    }

    async save(texture) {
        // This texture is read back, never sampled by an on-screen draw.
        this.capture.target.framebuffer.flush();
        const stream = this.file.replace(null, false, Gio.FileCreateFlags.PRIVATE, null);
        try {
            await Shell.Screenshot.composite_to_stream(
                texture, 0, 0, texture.get_width(), texture.get_height(),
                1, null, 0, 0, 1, stream);
        } finally {
            stream.close(null);
            this.clearActors();
        }
        if (this.cancelled)
            return;
        this.image = Meta.BackgroundImageCache.get_default().load(this.file);
        const finish = () => {
            if (this.imageLoadedId)
                this.image.disconnect(this.imageLoadedId);
            this.imageLoadedId = 0;
            if (!this.image.get_success()) {
                this.fail(new Error('Could not load the baked wallpaper'));
                return;
            }
            const background = new Meta.Background({ meta_display: global.display });
            background.set_file(this.file, GDesktopEnums.BackgroundStyle.STRETCHED);
            background.isLoaded = true;
            this.resolve(background);
        };
        if (this.image.is_loaded())
            finish();
        else
            this.imageLoadedId = this.image.connect('loaded', finish);
    }

    clearActors() {
        this.disconnectLoaded();
        if (this.paintId)
            global.stage.disconnect(this.paintId);
        this.paintId = 0;
        this.pipeline?.destroy();
        this.actor?.destroy();
        this.pipeline = this.actor = this.clone = this.source = this.capture = null;
    }

    fail(error) {
        this.clearActors();
        this.reject(error);
    }

    destroy() {
        this.cancelled = true;
        this.clearActors();
        if (this.imageLoadedId)
            this.image.disconnect(this.imageLoadedId);
        this.imageLoadedId = 0;
        Meta.BackgroundImageCache.get_default().purge(this.file);
        try {
            this.file.delete(null);
        } catch (error) {
            if (!error.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.NOT_FOUND))
                logError(error, '[Blur my Shell > wallpaper] could not remove cached image');
        }
        this.reject(new Error('Wallpaper bake cancelled'));
    }
}

// Share each monitor's image between the desktop and overview.
export class WallpaperCache {
    constructor(effectsManager, pipelinesManager, pipelineId) {
        this.effectsManager = effectsManager;
        this.pipelinesManager = pipelinesManager;
        this.pipelineId = pipelineId;
        this.records = new Map();
        this.directory = GLib.build_filenamev([
            GLib.get_user_cache_dir(), 'blur-my-shell', `wallpaper-${GLib.uuid_string_random()}`,
        ]);
        if (GLib.mkdir_with_parents(this.directory, 0o700) !== 0)
            throw new Error('Could not create the wallpaper cache directory');
    }

    subscribe(background, changed) {
        let record = this.records.get(background);
        if (!record) {
            record = { callbacks: new Set(), bakes: new Map() };
            record.changedId = background.connect('changed', () => {
                this.clearRecord(record);
                for (const callback of record.callbacks)
                    callback();
            });
            this.records.set(background, record);
        }
        record.callbacks.add(changed);
        return () => {
            record.callbacks.delete(changed);
            if (record.callbacks.size === 0) {
                background.disconnect(record.changedId);
                this.clearRecord(record);
                this.records.delete(background);
            }
        };
    }

    get(background, monitorIndex) {
        const record = this.records.get(background);
        if (!record || !Main.layoutManager.monitors[monitorIndex])
            return Promise.resolve(null);
        let bake = record.bakes.get(monitorIndex);
        if (!bake) {
            const file = Gio.File.new_for_path(GLib.build_filenamev([
                this.directory, `${GLib.uuid_string_random()}.png`,
            ]));
            bake = new WallpaperBake(background, monitorIndex, file,
                this.effectsManager, this.pipelinesManager, this.pipelineId);
            record.bakes.set(monitorIndex, bake);
        }
        return bake.promise;
    }

    clearRecord(record) {
        for (const bake of record.bakes.values())
            bake.destroy();
        record.bakes.clear();
    }

    refresh(pipelineId = this.pipelineId) {
        this.pipelineId = pipelineId;
        for (const record of this.records.values()) {
            this.clearRecord(record);
            for (const callback of record.callbacks)
                callback();
        }
    }

    destroy() {
        for (const [background, record] of this.records) {
            background.disconnect(record.changedId);
            this.clearRecord(record);
        }
        this.records.clear();
        Gio.File.new_for_path(this.directory).delete(null);
    }
}
