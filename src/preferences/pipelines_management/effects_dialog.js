import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { EffectRow } from './effect_row.js';
import { SUPPORTED_EFFECTS } from '../../effects/effects.js';


export const EffectsDialog = GObject.registerClass({
    GTypeName: 'EffectsDialog',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/effects-dialog.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        "add_effect",
        "effects_list"
    ],
}, class EffectsDialog extends Adw.PreferencesDialog {
    constructor(pipelines_manager, pipeline_id) {
        super({});

        this.pipelines_manager = pipelines_manager;
        this.pipeline_id = pipeline_id;

        let pipeline = pipelines_manager.pipelines[pipeline_id];

        this.set_title(pipeline.name.length > 0 ? _(`Effects for "${pipeline.name}"`) : _("Effects"));

        pipeline.effects.forEach(effect => {
            const effect_row = new EffectRow(effect, this);
            this._effects_list.add(effect_row);
            this.update_rows_insensitive_mover(effect_row);
        });

        this._add_effect.connect('clicked', () => {
            let dialog = new Adw.Dialog({
                presentation_mode: Adw.DialogPresentationMode.BOTTOM_SHEET,
                follows_content_size: true
            });

            let page = new Adw.PreferencesPage;
            dialog.set_child(page);

            let group = new Adw.PreferencesGroup({
                title: _("Select effect to add")
            });
            page.add(group);

            for (const effect_type in SUPPORTED_EFFECTS) {
                let action_row = new Adw.ActionRow({
                    title: SUPPORTED_EFFECTS[effect_type].name
                });
                let select_button = new Gtk.Button({
                    'icon-name': 'select-row-symbolic',
                    'width-request': 38,
                    'height-request': 38,
                    'margin-top': 6,
                    'margin-bottom': 6
                });
                group.add(action_row);

                select_button.add_css_class('flat');
                action_row.add_suffix(select_button);
                action_row.set_activatable_widget(select_button);
                select_button.connect('clicked', () => {
                    this.append_effect(effect_type);
                    dialog.close();
                });
            }

            dialog.present(this);
        });
    }

    append_effect(effect_type) {
        const effect = {
            type: effect_type, id: "effect_" + ("" + Math.random()).slice(2, 16)
        };
        this.pipelines_manager.update_pipeline_effects(
            this.pipeline_id,
            [effect, ...this.pipelines_manager.pipelines[this.pipeline_id].effects]
        );

        const effect_row = new EffectRow(effect, this);
        this._effects_list.add(effect_row);
        this.update_rows_insensitive_mover(effect_row);
    }

    move_row_by(row, number) {
        const effects = this.pipelines_manager.pipelines[this.pipeline_id].effects;
        const effect_index = effects.findIndex(e => e.id == row.effect.id);

        if (effect_index >= 0) {
            effects.splice(effect_index, 1);
            effects.splice(effect_index + number, 0, row.effect);

            const listbox = row.get_parent();
            listbox.set_sort_func((row_a, row_b) => {
                const id_a = effects.findIndex(e => e.id == row_a.effect.id);
                const id_b = effects.findIndex(e => e.id == row_b.effect.id);
                return id_a > id_b;
            });

            this.update_rows_insensitive_mover(row);

            this.pipelines_manager.update_pipeline_effects(
                this.pipeline_id, effects
            );
        }
    }

    update_rows_insensitive_mover(any_row) {
        if (this._insensitive_top)
            this._insensitive_top.set_sensitive(true);
        if (this._insensitive_bottom)
            this._insensitive_bottom.set_sensitive(true);

        const listbox = any_row.get_parent();
        this._insensitive_top = listbox.get_first_child()._move_up_button;
        this._insensitive_top?.set_sensitive(false);
        this._insensitive_bottom = listbox.get_last_child()._move_down_button;
        this._insensitive_bottom?.set_sensitive(false);
    }

    remove_row(row) {
        const effects = this.pipelines_manager.pipelines[this.pipeline_id].effects;
        const effect_index = effects.findIndex(e => e.id == row.effect.id);

        if (effect_index >= 0) {
            effects.splice(effect_index, 1);
            this.pipelines_manager.update_pipeline_effects(
                this.pipeline_id, effects
            );
        }

        this._effects_list.remove(row);
    }
});
