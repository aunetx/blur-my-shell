import * as utils from '../../conveniences/utils.js';

const Clutter = await utils.import_in_shell_only('gi://Clutter');

export class WaveTicker {
    static tasks = new Set();
    static timeline = null;

    static add(task) {
        this.tasks.add(task);

        if (this.timeline) {
            return;
        }

        this.timeline = new Clutter.Timeline({
            actor: global.stage,
            duration: 5000,
            repeat_count: -1
        });

        this.timeline.connect('new-frame', timeline => {
            const delta = timeline.get_delta();
            for (const tick of this.tasks) {
                tick(delta);
            }
        });

        this.timeline.start();
    }

    static remove(task) {
        if (!this.tasks.delete(task) || this.tasks.size > 0) {
            return;
        }

        this.timeline.stop();
        this.timeline = null;
    }
}
