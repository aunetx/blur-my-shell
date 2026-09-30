// Keep Shell's actor, content and animation handling; only swap the image.
export class WallpaperSurface {
    constructor(actor, cache) {
        this.actor = actor;
        this.cache = cache;
        this.generation = 0;
        this.contentId = actor.connect('notify::content', () => this.bindContent());
        this.bindContent();
    }

    bindContent() {
        this.unbindContent();
        this.content = this.actor.content;
        this.contentNotifyId = this.content.connect('notify::background', () => {
            if (!this.applying)
                this.bindContent();
        });
        this.original = this.content.background;
        // Static Shell wallpapers only. Leave slideshows and other providers alone.
        if (!this.original || typeof this.original.set_file !== 'function'
            || this.original.isLoaded === undefined
            || this.original._animation || this.original._file?.get_basename()?.endsWith('.xml'))
            return;
        this.unsubscribe = this.cache.subscribe(this.original, () => this.refresh());
        this.refresh();
    }

    setBackground(background) {
        this.applying = true;
        try {
            this.content.background = background;
        } finally {
            this.applying = false;
        }
    }

    async refresh() {
        const generation = ++this.generation;
        try {
            const background = await this.cache.get(this.original, this.content.monitor);
            if (generation !== this.generation || !background)
                return;
            this.baked = background;
            this.setBackground(background);
        } catch (error) {
            if (generation === this.generation) {
                this.setBackground(this.original);
                logError(error, '[Blur my Shell > wallpaper] could not bake wallpaper');
            }
        }
    }

    unbindContent() {
        ++this.generation;
        if (this.contentNotifyId)
            this.content.disconnect(this.contentNotifyId);
        this.contentNotifyId = 0;
        if (this.baked && this.content.background === this.baked)
            this.setBackground(this.original);
        this.unsubscribe?.();
        this.unsubscribe = null;
        this.baked = this.original = this.content = null;
    }

    destroy() {
        this.actor.disconnect(this.contentId);
        this.unbindContent();
        this.actor = this.cache = null;
    }
}
