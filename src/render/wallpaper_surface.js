import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import GObject from 'gi://GObject';
import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Pipeline } from '../conveniences/pipeline.js';
import { SurfaceShaderEffect } from './shader_effect.js';

const CACHE_SNIPPET = Cogl.Snippet.new(Cogl.SnippetHook.FRAGMENT, '', '');
const MASK_SNIPPET = Cogl.Snippet.new(Cogl.SnippetHook.FRAGMENT, '', null);
MASK_SNIPPET.set_replace(`
    vec2 uv = cogl_tex_coord_in[0].st;
    cogl_color_out = texture2D(cogl_sampler1, uv)
        * texture2D(cogl_sampler0, uv).a * cogl_color_in.a;
`);

// let cacheDebugId = 0;

const WallpaperCacheEffect = GObject.registerClass({
    GTypeName: 'BmsWallpaperCacheEffect',
}, class WallpaperCacheEffect extends SurfaceShaderEffect {
    _init() {
        super._init();
        this.surfaceSnippet = CACHE_SNIPPET;
        // this._debugId = ++cacheDebugId;
        // this._debugUses = 0;
    }

    static get default_params() { return {}; }

    vfunc_paint(node, context, flags) {
        // const previousTarget = this.target;
        // const refresh = !this.sourceValid || Boolean(flags & Clutter.EffectPaintFlags.ACTOR_DIRTY);
        super.vfunc_paint(node, context, flags);
        // const used = !refresh && previousTarget === this.target;
        // if (!used) {
            // console.log(`[Blur my Shell > wallpaper #${this._debugId}] cache refreshed (used ${this._debugUses} times)`);
            // this._debugUses = 0;
        // } else {
            // this._debugUses++;
        // }
    }

    vfunc_paint_target() {}
});

const WallpaperMaskEffect = GObject.registerClass({
    GTypeName: 'BmsWallpaperMaskEffect',
}, class WallpaperMaskEffect extends SurfaceShaderEffect {
    _init(cache) {
        super._init();
        this.cache = cache;
        this.surfaceSnippet = MASK_SNIPPET;
    }

    static get default_params() { return {}; }

    vfunc_paint_target(node, context) {
        const pipeline = this.get_pipeline();
        pipeline.set_layer_texture(1, this.cache.get_texture());
        pipeline.set_layer_filters(1, Cogl.PipelineFilter.LINEAR, Cogl.PipelineFilter.LINEAR);
        pipeline.set_layer_wrap_mode(1, Cogl.PipelineWrapMode.CLAMP_TO_EDGE);
        super.vfunc_paint_target(node, context);
    }
});

const WallpaperInputEffect = GObject.registerClass({
    GTypeName: 'BmsWallpaperInputEffect',
}, class WallpaperInputEffect extends Clutter.Effect {
    _init(surface) {
        super._init();
        this.surface = surface;
    }

    vfunc_paint(_node, context) {
        this.surface.clone.paint(context);
        this.surface.maskClone.paint(context);
    }
});

const WallpaperLayout = GObject.registerClass({
    GTypeName: 'BmsWallpaperLayout',
}, class WallpaperLayout extends Clutter.BinLayout {
    _init(surface) {
        super._init();
        this.surface = surface;
    }

    vfunc_allocate(_actor, box) {
        const surface = this.surface;
        const monitor = Main.layoutManager.monitors[surface.content.monitor];
        if (!monitor)
            return;
        const fixed = new Clutter.ActorBox({ x1: 0, y1: 0, x2: monitor.width, y2: monitor.height });
        surface.source.allocate(fixed);
        surface.clone.allocate(fixed);
        surface.maskSource.allocate(box);
        surface.maskClone.allocate(box);
    }
});

const INPUT_PROPERTIES = [
    'background', 'vignette', 'brightness', 'vignette-sharpness',
    'gradient', 'gradient-height', 'gradient-max-darkness',
];

export class WallpaperSurface {
    constructor(actor, effectsManager, pipelinesManager, pipelineId) {
        this.actor = actor;
        this.previousLayout = actor.layout_manager;
        try {
            this.source = new Clutter.Actor({ name: 'bms-wallpaper-source', reactive: false });
            this.clone = new Clutter.Clone({ name: 'bms-wallpaper-filter', source: this.source });
            this.maskSource = new Clutter.Actor({ name: 'bms-wallpaper-mask', reactive: false });
            this.maskClone = new Clutter.Clone({ source: this.maskSource });
            this.bindContent();

            this.layout = new WallpaperLayout(this);
            actor.layout_manager = this.layout;
            for (const child of [this.source, this.clone, this.maskSource, this.maskClone])
                actor.add_child(child);

            this.cache = new WallpaperCacheEffect();
            this.clone.add_effect(this.cache);
            this.mask = new WallpaperMaskEffect(this.cache);
            this.maskClone.add_effect(this.mask);
            this.input = new WallpaperInputEffect(this);
            actor.add_effect(this.input);
            this.pipeline = new Pipeline(effectsManager, pipelinesManager, pipelineId, this.clone);
            this.contentId = actor.connect('notify::content', () => this.bindContent());
            this.monitorsId = Main.layoutManager.connect('monitors-changed', () => actor.queue_relayout());
        } catch (error) {
            this.destroy();
            throw error;
        }
    }

    bindContent() {
        if (this.contentNotifyId)
            this.content.disconnect(this.contentNotifyId);
        this.content = this.actor.content;
        this.source.content = new Meta.BackgroundContent({
            meta_display: global.display,
            monitor: this.content.monitor,
        });
        this.maskSource.content = this.content;
        const sync = name => {
            const key = name.replaceAll('-', '_');
            this.source.content[key] = this.content[key];
        };
        INPUT_PROPERTIES.forEach(sync);
        this.contentNotifyId = this.content.connect('notify', (_content, property) => {
            if (INPUT_PROPERTIES.includes(property.name))
                sync(property.name);
        });
        this.actor.queue_relayout();
    }

    change_pipeline_to(pipelineId) {
        this.pipeline.change_pipeline_to(pipelineId);
    }

    destroy() {
        if (!this.actor)
            return;
        this.pipeline?.destroy();
        if (this.contentId)
            this.actor.disconnect(this.contentId);
        if (this.contentNotifyId)
            this.content.disconnect(this.contentNotifyId);
        if (this.monitorsId)
            Main.layoutManager.disconnect(this.monitorsId);
        if (this.layout && this.actor.layout_manager === this.layout)
            this.actor.layout_manager = this.previousLayout;
        if (this.input?.get_actor() === this.actor)
            this.actor.remove_effect(this.input);
        for (const child of [this.clone, this.source, this.maskClone, this.maskSource])
            child?.destroy();
        if (this.input)
            this.input.surface = null;
        if (this.layout)
            this.layout.surface = null;
        this.actor = this.source = this.clone = this.maskSource = this.maskClone = null;
        this.pipeline = this.cache = this.mask = this.input = this.layout = this.content = null;
        this.previousLayout = null;
        this.contentId = this.contentNotifyId = this.monitorsId = 0;
    }
}
