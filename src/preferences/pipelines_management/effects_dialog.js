import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import Gio from 'gi://Gio';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { EffectRow } from './effect_row.js';
import { get_effects_groups, get_supported_effects } from '../../effects/effects.js';

export const EffectsDialog = GObject.registerClass({
    GTypeName: 'EffectsDialog',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/effects-dialog.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        "add_effect",
        "add_effect_alt_menu",
        "effects_list"
    ],
}, class EffectsDialog extends Adw.PreferencesDialog {
    constructor(pipelines_manager, pipeline_id) {
        super({});

        this.EFFECTS_GROUPS = get_effects_groups(_);
        this.SUPPORTED_EFFECTS = get_supported_effects(_);

        this.pipelines_manager = pipelines_manager;
        this.pipeline_id = pipeline_id;

        let pipeline = pipelines_manager.pipelines[pipeline_id];

        this.set_title(pipeline.name.length > 0 ? _(`Effects for "${pipeline.name}"`) : _("Effects"));

        pipeline.effects.forEach(effect => {
            const effect_row = new EffectRow(effect, this);
            this._effects_list.add(effect_row);
            this.update_rows_insensitive_mover(effect_row);
        });

        // setup advanced effects chooser action
        this.show_advanced_effects = false;
        let action_group = new Gio.SimpleActionGroup();
        this.insert_action_group('effects-dialog', action_group);
        let advanced_effects_action = Gio.SimpleAction.new_stateful(
            'advanced-effects-bool',
            null,
            GLib.Variant.new_boolean(this.show_advanced_effects)
        );
        advanced_effects_action.connect(
            'change-state',
            (_, state) => {
                this.show_advanced_effects = state.get_boolean();
                this.build_effects_chooser();
                advanced_effects_action.set_state(state);
            }
        );
        action_group.add_action(advanced_effects_action);

        this.build_effects_chooser();
        this._add_effect.connect('clicked', () => this.effects_chooser_dialog.present(this));
    }

    build_effects_chooser() {
        this.effects_chooser_dialog = new Adw.Dialog({
            presentation_mode: Adw.DialogPresentationMode.BOTTOM_SHEET,
            content_width: 450
        });

        let page = new Adw.PreferencesPage;
        this.effects_chooser_dialog.set_child(page);

        for (const effects_group in this.EFFECTS_GROUPS) {
            const group_infos = this.EFFECTS_GROUPS[effects_group];

            let group = new Adw.PreferencesGroup({
                title: group_infos.name
            });
            page.add(group);

            for (const effect_type of group_infos.contains) {
                if (!(effect_type in this.SUPPORTED_EFFECTS))
                    continue;

                if (!this.show_advanced_effects && this.SUPPORTED_EFFECTS[effect_type].is_advanced)
                    continue;

                let action_row = new Adw.ActionRow({
                    title: this.SUPPORTED_EFFECTS[effect_type].name,
                    subtitle: this.SUPPORTED_EFFECTS[effect_type].description
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
                    this.effects_chooser_dialog.close();
                });
            }
        }
    }

    append_effect(effect_type) {
        const effect = {
            type: effect_type, id: "effect_" + ("" + Math.random()).slice(2, 16)
        };
        this.pipelines_manager.update_pipeline_effects(
            this.pipeline_id,
            [...this.pipelines_manager.pipelines[this.pipeline_id].effects, effect]
        );

        const effect_row = new EffectRow(effect, this);
        this._effects_list.add(effect_row);
        this.move_row_by(effect_row, 0);
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
