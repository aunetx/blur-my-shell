import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';

// Modal dialogs use a BinLayout, which can resize or center blur overlays.
// Preserve the requested bounds for dynamic blur and static wallpaper containers.
export const PopupBlurAllocation = GObject.registerClass(
class PopupBlurAllocation extends Clutter.Constraint {
    set_geometry(x, y, width, height) {
        if (this.geometry?.x === x && this.geometry?.y === y
            && this.geometry?.width === width && this.geometry?.height === height)
            return;

        this.geometry = { x, y, width, height };
        this.actor?.queue_relayout();
    }

    vfunc_update_allocation(_actor, box) {
        if (this.geometry) {
            const { x, y, width, height } = this.geometry;
            box.init_rect(x, y, width, height);
        }
    }
});
