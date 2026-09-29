import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';

import { Pipeline } from '../conveniences/pipeline.js';

// temporary IDs to tell wallpaper caches apart in the logs
let cacheDebugId = 0;

// cache the finished blur
// actor/child redraws refresh it, things like moving windows reuse it
const WallpaperCacheEffect = GObject.registerClass({
    GTypeName: 'BmsWallpaperCacheEffect',
}, class WallpaperCacheEffect extends Clutter.OffscreenEffect {
    vfunc_paint(node, paintContext, flags) {
        this._debugId ??= ++cacheDebugId;
        const bypassed = Boolean(flags & Clutter.EffectPaintFlags.BYPASS_EFFECT);
        this._debugCacheUsed = !bypassed;
        super.vfunc_paint(node, paintContext, flags);
        const status = bypassed ? 'not used (bypassed)'
            : this._debugCacheUsed ? 'used' : 'not used (refresh)';
        console.log(`[Blur my Shell > wallpaper #${this._debugId}] cache ${status}`);
    }

    vfunc_pre_paint(...args) {
        // Clutter only enters this path when it needs to render fresh input
        this._debugCacheUsed = false;
        return super.vfunc_pre_paint(...args);
    }
});

const WallpaperInputEffect = GObject.registerClass({
    GTypeName: 'BmsWallpaperInputEffect',
}, class WallpaperInputEffect extends Clutter.Effect {
    _init(clone) {
        super._init();
        this.clone = clone;
    }

    vfunc_paint(_node, paintContext, _flags) {
        this.clone.paint(paintContext);
    }
});

export class WallpaperSurface {
    constructor(actor, effectsManager, pipelinesManager, pipelineId) {
        this.actor = actor;
        this.previousLayout = actor.layout_manager;

        try {
            this.source = new Clutter.Actor({
                name: 'bms-wallpaper-source',
                content: actor.content,
                reactive: false,
                x_expand: true,
                y_expand: true,
            });
            this.clone = new Clutter.Clone({
                name: 'bms-wallpaper-filter',
                source: this.source,
                reactive: false,
                x_expand: true,
                y_expand: true,
            });
            // keep both visible so layout works, but only paint the clone
            // source first, so clone reuses its size instead of its preferred size
            this.layout = new Clutter.BinLayout();
            actor.layout_manager = this.layout;
            actor.add_child(this.source);
            actor.add_child(this.clone);

            this.cache = new WallpaperCacheEffect();
            this.input = new WallpaperInputEffect(this.clone);
            actor.add_effect(this.cache);
            actor.add_effect(this.input);

            this.contentId = actor.connect('notify::content', () => {
                this.source.content = actor.content;
            });
            this.pipeline = new Pipeline(effectsManager, pipelinesManager, pipelineId, this.clone);
        } catch (error) {
            this.destroy();
            throw error;
        }
    }

    change_pipeline_to(pipelineId) {
        this.pipeline.change_pipeline_to(pipelineId);
    }

    destroy() {
        if (!this.actor)
            return;
        this.pipeline?.destroy();
        this.pipeline = null;
        if (this.contentId)
            this.actor.disconnect(this.contentId);
        if (this.layout && this.actor.layout_manager === this.layout)
            this.actor.layout_manager = this.previousLayout;
        if (this.input?.get_actor() === this.actor)
            this.actor.remove_effect(this.input);
        if (this.cache?.get_actor() === this.actor)
            this.actor.remove_effect(this.cache);
        this.clone?.destroy();
        this.source?.destroy();
        this.actor = null;
        this.clone = null;
        this.source = null;
        this.input = null;
        this.cache = null;
        this.layout = null;
        this.previousLayout = null;
        this.contentId = 0;
    }
}
