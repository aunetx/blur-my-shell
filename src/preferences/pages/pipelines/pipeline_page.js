import Adw from 'gi://Adw';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { EffectRow } from '../../widgets/effect_row.js';
import { present_effect_chooser } from './effect_chooser.js';


function clone_effects(effects) {
    return effects.map(effect => ({
        ...effect,
        params: Object.fromEntries(
            Object.entries(effect.params ?? {}).map(([key, value]) => [
                key,
                Array.isArray(value) ? [...value] : value,
            ])
        ),
    }));
}


export const PipelinePage = GObject.registerClass({
    GTypeName: 'PipelinePage',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../../ui/pages/pipelines/pipeline-page.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'name',
        'id_row',
        'copy_id',
        'add_effect',
        'effects_list'
    ],
}, class PipelinePage extends Adw.NavigationPage {
    constructor(pipelines_page, pipelines_manager, preferences, pipeline_id) {
        super({});

        this.pipelines_manager = pipelines_manager;
        this.pipeline_id = pipeline_id;

        const pipeline = pipelines_manager.pipelines[pipeline_id];
        this.update_title(pipeline.name);
        this._name.text = pipeline.name;
        this._name.connect(
            'changed',
            () => pipelines_manager.rename_pipeline(pipeline_id, this._name.text)
        );
        this._id_row.subtitle = pipeline_id;
        preferences.settings.bind('debug', this._id_row, 'visible', Gio.SettingsBindFlags.GET);
        this._copy_id.connect('clicked', () => this.get_clipboard().set(pipeline_id));

        this._renamed_id = pipelines_manager.connect(
            `${pipeline_id}::pipeline-renamed`,
            (_obj, name) => this.update_title(name)
        );

        pipeline.effects.forEach(effect => this._effects_list.append(new EffectRow(effect, this)));
        this.update_move_actions();

        this._add_effect.connect(
            'clicked',
            () => present_effect_chooser(this, effect_type => this.append_effect(effect_type))
        );

        this._focus_name_on_show = false;
        this.connect('shown', () => this.focus_initial_widget());

        const actions = new Gio.SimpleActionGroup();
        const duplicate = new Gio.SimpleAction({ name: 'duplicate' });
        duplicate.connect('activate', () => pipelines_page.duplicate_pipeline(pipeline_id, true));
        actions.add_action(duplicate);
        const remove = new Gio.SimpleAction({
            name: 'delete',
            enabled: pipeline_id !== 'pipeline_default',
        });
        remove.connect('activate', () => pipelines_page.delete_pipeline(pipeline_id));
        actions.add_action(remove);
        this.insert_action_group('pipeline', actions);
    }

    update_title(name) {
        this.title = name.length > 0 ? name : _('Pipeline');
    }

    focus_name_on_show() {
        this._focus_name_on_show = true;
    }

    /// The name entry would otherwise take the focus and select its text every time the page opens
    focus_initial_widget() {
        if (this._focus_name_on_show) {
            this._name.grab_focus();
            this._name.select_region(0, -1);
        } else {
            this._name.select_region(0, 0);
            this._add_effect.grab_focus();
        }
        this._focus_name_on_show = false;
    }

    get effects() {
        return clone_effects(this.pipelines_manager.pipelines[this.pipeline_id].effects);
    }

    append_effect(effect_type) {
        const effect = {
            type: effect_type,
            id: `effect_${GLib.uuid_string_random()}`,
        };
        if (!this.pipelines_manager.update_pipeline_effects(
            this.pipeline_id, [...this.effects, effect]
        ))
            return;

        const row = new EffectRow(effect, this);
        this._effects_list.append(row);
        this.update_move_actions();
        row.expanded = row.enable_expansion;
    }

    move_effect(row, destination) {
        const effects = this.effects;
        const index = effects.findIndex(effect => effect.id === row.effect.id);
        if (index < 0)
            return;

        destination = Math.max(0, Math.min(destination, effects.length - 1));
        const [effect] = effects.splice(index, 1);
        effects.splice(destination, 0, effect);
        if (!this.pipelines_manager.update_pipeline_effects(this.pipeline_id, effects))
            return;

        row.effect = effect;
        this._effects_list.remove(row);
        this._effects_list.insert(row, destination);
        this.update_move_actions();
    }

    remove_effect(row) {
        const effects = this.effects.filter(effect => effect.id !== row.effect.id);
        if (!this.pipelines_manager.update_pipeline_effects(this.pipeline_id, effects))
            return;

        this._effects_list.remove(row);
        this.update_move_actions();
    }

    get effect_rows() {
        const rows = [];
        let row;
        while ((row = this._effects_list.get_row_at_index(rows.length)))
            rows.push(row);
        return rows;
    }

    update_move_actions() {
        const rows = this.effect_rows;
        rows.forEach((row, index) => row.update_move_actions(index, rows.length));
    }

    cleanup() {
        this.pipelines_manager.disconnect(this._renamed_id);
    }
});
