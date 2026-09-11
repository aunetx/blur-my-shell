import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';

// Modal dialogs use a BinLayout, which can shrink an overlay to the group's
// preferred size. Its blur must instead cover the measured popup rectangle.
export const PopupBlurAllocation = GObject.registerClass(
class PopupBlurAllocation extends Clutter.Constraint {
    set_geometry(x, y, width, height) {
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
