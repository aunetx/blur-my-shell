import Adw from 'gi://Adw';
import Gdk from 'gi://Gdk';
import Gio from 'gi://Gio';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { get_supported_effects } from '../../effects/effects.js';


function create_effect_menu() {
    const menu = new Gio.Menu();
    const move = new Gio.Menu();
    move.append(_('Move Up'), 'effect.move-up');
    move.append(_('Move Down'), 'effect.move-down');
    menu.append_section(null, move);
    menu.append(_('Remove'), 'effect.remove');
    return menu;
}


export const EffectRow = GObject.registerClass({
    GTypeName: 'EffectRow',
}, class EffectRow extends Adw.ExpanderRow {
    constructor(effect, pipeline_page) {
        super({});

        this.SUPPORTED_EFFECTS = get_supported_effects(_);

        this.effect = effect;
        this.pipeline_id = pipeline_page.pipeline_id;
        this.pipelines_manager = pipeline_page.pipelines_manager;

        if (effect.type in this.SUPPORTED_EFFECTS) {
            this.set_title(this.SUPPORTED_EFFECTS[effect.type].name);
            this.set_subtitle(this.SUPPORTED_EFFECTS[effect.type].description);
            this.populate_options();
        }
        else {
            this._warn(`could not assign effect ${effect.type} to its correct name`);
            this.set_title(effect.type);
        }

        this.add_prefix(this.create_drag_handle());
        this.add_suffix(new Gtk.MenuButton({
            icon_name: 'view-more-symbolic',
            tooltip_text: _('Effect Menu'),
            menu_model: create_effect_menu(),
            valign: Gtk.Align.CENTER,
            css_classes: ['flat'],
        }));

        this.actions = new Gio.SimpleActionGroup();
        const add_action = (name, callback) => {
            const action = new Gio.SimpleAction({ name });
            action.connect('activate', callback);
            this.actions.add_action(action);
        };
        add_action('move-up', () => pipeline_page.move_effect(this, this.get_index() - 1));
        add_action('move-down', () => pipeline_page.move_effect(this, this.get_index() + 1));
        add_action('remove', () => pipeline_page.remove_effect(this));
        this.insert_action_group('effect', this.actions);

        const drop_target = Gtk.DropTarget.new(EffectRow.$gtype, Gdk.DragAction.MOVE);
        drop_target.connect('drop', (_target, row) => {
            if (row === this)
                return false;
            pipeline_page.move_effect(row, this.get_index());
            return true;
        });
        this.add_controller(drop_target);
    }

    create_drag_handle() {
        const handle = new Gtk.Image({
            icon_name: 'list-drag-handle-symbolic',
            css_classes: ['dim-label'],
        });
        const drag_source = new Gtk.DragSource({ actions: Gdk.DragAction.MOVE });
        drag_source.connect('prepare', (source, x, y) => {
            const [, row_x, row_y] = handle.translate_coordinates(this, x, y);
            source.set_icon(new Gtk.WidgetPaintable({ widget: this }), row_x, row_y);
            return Gdk.ContentProvider.new_for_value(this);
        });
        handle.add_controller(drag_source);
        handle.set_cursor_from_name('grab');
        return handle;
    }

    update_move_actions(index, count) {
        this.actions.lookup_action('move-up').enabled = index > 0;
        this.actions.lookup_action('move-down').enabled = index < count - 1;
    }

    populate_options() {
        const editable_params = this.SUPPORTED_EFFECTS[this.effect.type].editable_params;

        if (Object.keys(editable_params).length == 0)
            this.enable_expansion = false;

        for (const param_key in editable_params) {
            let param = editable_params[param_key];
            let row;
            switch (param.type) {
                case "integer":
                    row = new Adw.SpinRow({
                        adjustment: new Gtk.Adjustment({
                            lower: param.min,
                            upper: param.max,
                            step_increment: param.increment
                        })
                    });
                    row.adjustment.set_value(this.get_effect_param(param_key));
                    row.adjustment.connect(
                        'value-changed', () => this.set_effect_param(param_key, row.adjustment.value)
                    );
                    break;

                case "float":
                    row = new Adw.ActionRow;
                    let scale = new Gtk.Scale({
                        valign: Gtk.Align.CENTER,
                        hexpand: true,
                        width_request: 200,
                        draw_value: true,
                        value_pos: Gtk.PositionType.RIGHT,
                        digits: param.digits,
                        adjustment: new Gtk.Adjustment({
                            lower: param.min,
                            upper: param.max,
                            step_increment: param.increment,
                            page_increment: param.big_increment
                        })
                    });
                    // TODO check if it's a good idea to set the default parameter, as the "good"
                    // value really change depending on the user wallpaper... if so, do for dynamic
                    // blur too
                    scale.add_mark(
                        this.get_default_effect_param(param_key), Gtk.PositionType.BOTTOM, null
                    );
                    row.add_suffix(scale);
                    scale.adjustment.set_value(this.get_effect_param(param_key));
                    scale.adjustment.connect(
                        'value-changed', () => this.set_effect_param(param_key, scale.adjustment.value)
                    );
                    break;

                case "boolean":
                    row = new Adw.SwitchRow;
                    row.set_active(this.get_effect_param(param_key));
                    row.connect(
                        'notify::active', () => this.set_effect_param(param_key, row.active)
                    );
                    break;

                case "dropdown":
                    row = new Adw.ComboRow({ model: new Gtk.StringList });
                    param.options.forEach(option => row.model.append(option));
                    const selected = this.get_effect_param(param_key);
                    const default_selected = this.get_default_effect_param(param_key);
                    const is_valid_selection = value => Number.isInteger(value)
                        && value >= 0
                        && value < param.options.length;
                    row.selected = is_valid_selection(selected)
                        ? selected
                        : (is_valid_selection(default_selected) ? default_selected : 0);
                    row.connect(
                        'notify::selected', () => this.set_effect_param(param_key, row.selected)
                    );
                    break;

                case "rgba":
                    row = new Adw.ActionRow;
                    let color_button = new Gtk.ColorDialogButton({
                        valign: Gtk.Align.CENTER,
                        dialog: new Gtk.ColorDialog({ with_alpha: param.use_alpha }),
                    });
                    row.add_suffix(color_button);
                    let c = color_button.get_rgba().copy();
                    if (param.use_alpha)
                        [c.red, c.green, c.blue, c.alpha] = this.get_effect_param(param_key);
                    else
                        [c.red, c.green, c.blue] = this.get_effect_param(param_key);
                    color_button.set_rgba(c);
                    color_button.connect(
                        'notify::rgba', () => {
                            let c = color_button.get_rgba();
                            if (param.use_alpha)
                                this.set_effect_param(param_key, [c.red, c.green, c.blue, c.alpha]);
                            else
                                this.set_effect_param(param_key, [c.red, c.green, c.blue]);
                        }
                    );
                    break;

                default:
                    row = new Adw.ActionRow;
                    break;
            }
            row.set_title(param.name);
            row.set_subtitle(param.description);
            this.add_row(row);
        }
    }

    get_effect_param(key) {
        const effects = this.pipelines_manager.pipelines[this.pipeline_id].effects;
        const gsettings_effect = effects.find(e => e.id == this.effect.id);

        if (gsettings_effect?.params && key in gsettings_effect.params)
            return gsettings_effect.params[key];

        return this.get_default_effect_param(key);
    }

    get_default_effect_param(key) {
        return this.SUPPORTED_EFFECTS[this.effect.type].class.default_params[key];
    }

    set_effect_param(key, value) {
        // we must pay attention not to change the effects in the pipelines manager before updating
        // it in gsettings, else it won't be updated (or every effect will be)
        const effects = this.pipelines_manager.pipelines[this.pipeline_id].effects.map(effect => ({
            ...effect,
            params: {
                ...(effect.params ?? {}),
            },
        }));
        const effect_index = effects.findIndex(e => e.id == this.effect.id);

        if (effect_index >= 0) {
            effects[effect_index].params[key] = value;
        } else {
            this._warn(`effect not found when setting key ${key}`);
            return;
        }

        if (this.pipelines_manager.update_pipeline_effects(this.pipeline_id, effects))
            this.effect = effects[effect_index];
    }

    _warn(str) {
        console.warn(
            `[Blur my Shell > effect row]   pipeline '${this.pipeline_id}',`
            + ` effect '${this.effect.id}': ${str}`
        );
    }
});
