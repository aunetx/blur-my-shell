import Adw from 'gi://Adw';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { get_supported_effects } from '../../effects/effects.js';


export const EffectRow = GObject.registerClass({
    GTypeName: 'EffectRow',
    InternalChildren: [],
}, class EffectRow extends Adw.ExpanderRow {
    constructor(effect, effects_dialog) {
        super({});

        this.SUPPORTED_EFFECTS = get_supported_effects(_);

        this.effect = effect;
        this.effects_dialog = effects_dialog;
        this.pipeline_id = effects_dialog.pipeline_id;
        this.pipelines_manager = effects_dialog.pipelines_manager;

        if (effect.type in this.SUPPORTED_EFFECTS) {
            this.set_title(this.SUPPORTED_EFFECTS[effect.type].name);
            this.set_subtitle(this.SUPPORTED_EFFECTS[effect.type].description);
            this.populate_options();
        }
        else {
            this._warn(`could not assign effect ${effect.type} to its correct name`);
            this.set_title(effect.type);
        }

        let prefix_bin = new Gtk.Box({
            spacing: 6
        });
        this.add_prefix(prefix_bin);

        let move_bin = new Gtk.Box({
            orientation: Gtk.Orientation.VERTICAL,
            'width-request': 38,
            'height-request': 38,
            'margin-top': 6,
            'margin-bottom': 6
        });
        prefix_bin.append(move_bin);
        move_bin.add_css_class('linked');

        this._move_up_button = new Gtk.Button({
            'icon-name': 'go-up-symbolic',
            'width-request': 38,
            'height-request': 19
        });
        this._move_down_button = new Gtk.Button({
            'icon-name': 'go-down-symbolic',
            'width-request': 38,
            'height-request': 19
        });
        this._move_up_button.add_css_class('flat');
        this._move_down_button.add_css_class('flat');
        move_bin.append(this._move_up_button);
        move_bin.append(this._move_down_button);

        this._move_up_button.connect('clicked', () => effects_dialog.move_row_by(this, -1));
        this._move_down_button.connect('clicked', () => effects_dialog.move_row_by(this, +1));

        let remove_button = new Gtk.Button({
            'icon-name': 'remove-row-symbolic',
            'width-request': 38,
            'height-request': 38,
            'margin-top': 6,
            'margin-bottom': 6,
            'valign': Gtk.Align.CENTER
        });
        prefix_bin.append(remove_button);
        remove_button.add_css_class('destructive-action');

        remove_button.connect('clicked', () => effects_dialog.remove_row(this));
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
                    row.selected = this.get_effect_param(param_key);
                    row.connect(
                        'notify::selected', () => this.set_effect_param(param_key, row.selected)
                    );
                    break;

                case "rgba":
                    row = new Adw.ActionRow;
                    let color_button = new Gtk.ColorButton({
                        valign: Gtk.Align.CENTER,
                        width_request: 75,
                        height_request: 45,
                        show_editor: true,
                        use_alpha: true
                    });
                    row.add_suffix(color_button);
                    // set original color
                    let c = color_button.get_rgba().copy();
                    [c.red, c.green, c.blue, c.alpha] = this.get_effect_param(param_key);
                    color_button.set_rgba(c);
                    // update on on 'color-set'
                    color_button.connect(
                        'color-set', () => {
                            let c = color_button.get_rgba();
                            this.set_effect_param(param_key, [c.red, c.green, c.blue, c.alpha]);
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
        let effects = this.pipelines_manager.pipelines[this.pipeline_id].effects;
        const gsettings_effect = effects.find(e => e.id == this.effect.id);

        if ('params' in gsettings_effect && key in gsettings_effect.params)
            return gsettings_effect.params[key];
        else
            return this.get_default_effect_param(key);
    }

    get_default_effect_param(key) {
        return this.SUPPORTED_EFFECTS[this.effect.type].class.default_params[key];
    }

    set_effect_param(key, value) {
        // we must pay attention not to change the effects in the pipelines manager before updating
        // it in gsettings, else it won't be updated (or every effect will be)
        let effects = this.pipelines_manager.pipelines[this.pipeline_id].effects;
        const effect_index = effects.findIndex(e => e.id == this.effect.id);

        if (effect_index >= 0) {
            effects[effect_index] = {
                ...this.effect, params: { ...this.effect.params }
            };
            effects[effect_index].params[key] = value;
            this.effect = effects[effect_index];
        }
        else
            this._warn(`effect not found when setting key ${key}`);

        this.pipelines_manager.update_pipeline_effects(this.pipeline_id, effects, false);
    }

    _warn(str) {
        console.warn(
            `[Blur my Shell > effect row]   pipeline '${this.pipeline_id}',`
            + ` effect '${this.effect.id}': ${str}`
        );
    }
});
