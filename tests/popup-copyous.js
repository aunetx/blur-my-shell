// Run with: gjs -m tests/popup-copyous.js
import { PopupBlurTargets } from '../src/components/popup/targets.js';
import { PopupBlurSurfaceStyle } from '../src/components/popup/surface_style.js';

function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}

function actor(classes = '', children = []) {
    return {
        get_style_class_name: () => classes,
        get_children: () => children,
    };
}

const settings = { popup: { BLUR_COPYOUS: true, OVERRIDE_BACKGROUND: true } };
const owner = {
    settings,
    is_internal_actor: () => false,
    watch_actor: target => !!target,
    get_actor_delegate: target => target._delegate,
    get_actor_dialog_layout: target => target.dialogLayout,
};
const targets = new PopupBlurTargets(owner);
const clipboard = actor('clipboard-dialog horizontal', [actor('clipboard-item')]);
const wrapper = actor('', [clipboard]);
const menu = actor('popup-menu-content');

assert(targets.find(wrapper)[0] === clipboard, 'Find Copyous inside its modal wrapper');
assert(targets.find(clipboard).length === 1, 'Blur the dialog once, without blurring its cards');
assert(targets.get_corner_radius(clipboard, wrapper).key === 'dialog-corner-radius',
    'Use the dialog corner radius');
settings.popup.BLUR_COPYOUS = false;
assert(targets.find(wrapper).length === 0, 'Do not blur Copyous when disabled');
assert(!targets.is_blur_target_actor(clipboard), 'Do not track disabled Copyous as a target');
assert(targets.find(menu)[0] === menu, 'Keep regular popup blur enabled');
settings.popup.BLUR_COPYOUS = true;
assert(targets.find(wrapper)[0] === clipboard, 'Rediscover an existing dialog after enabling');
const vertical = actor('clipboard-dialog vertical');
assert(targets.find(actor('', [vertical]))[0] === vertical, 'Support vertical Copyous layouts');

let inline_style = 'margin: 10px;';
let on_style_changed = () => {};
const styled_target = {
    get_style_class_name: () => 'clipboard-dialog',
    get_style: () => inline_style,
    set_style: value => {
        inline_style = value;
        on_style_changed();
    },
};
const surface = { settings, target: styled_target, get_corner_radius: () => 18, get_background_style: () => 2 };
const style = new PopupBlurSurfaceStyle(surface);
style.capture_target_style();
on_style_changed = () => style.update_target_style();
style.update_target_style();
assert(inline_style === 'margin: 10px;border-radius: 18px;background-color: rgba(45, 45, 50, 0.22);', 'Preserve original margins');
styled_target.set_style('margin: 20px;');
assert(inline_style === 'margin: 20px;border-radius: 18px;background-color: rgba(45, 45, 50, 0.22);', 'Preserve live margin updates');
settings.popup.OVERRIDE_BACKGROUND = false;
style.update_target_style();
assert(inline_style === 'margin: 20px;', 'Restore the latest margins when override is disabled');
settings.popup.OVERRIDE_BACKGROUND = true;
style.update_target_style();
surface.destroyed = true;
style.restore_target_style();
assert(inline_style === 'margin: 20px;', 'Restore Copyous styling on surface destruction');

print('Copyous popup detection and style lifecycle checks passed');
