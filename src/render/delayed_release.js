import GLib from 'gi://GLib';

const RELEASE_DELAY_US = 5000000;

/// Frees the textures of something that stopped showing, once it has been unused for a little while
/// in case it shows up again, like a menu opened right after being closed.
export class DelayedRelease {
    constructor(release) {
        this.release = release;
        this.id = 0;
        this.lastUse = 0;
    }

    /// Starts the delay over, which is cheap enough to do on every paint.
    queue() {
        this.lastUse = GLib.get_monotonic_time();
        if (!this.id)
            this.schedule(RELEASE_DELAY_US);
    }

    schedule(delay) {
        this.id = GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT, Math.ceil(delay / 1000000), () => {
            this.id = 0;
            const remaining = this.lastUse + RELEASE_DELAY_US - GLib.get_monotonic_time();
            if (remaining > 0)
                this.schedule(remaining);
            else
                this.release();
            return GLib.SOURCE_REMOVE;
        });
    }

    cancel() {
        if (!this.id)
            return;

        GLib.source_remove(this.id);
        this.id = 0;
    }
}
