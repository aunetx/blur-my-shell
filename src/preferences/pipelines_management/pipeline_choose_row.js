import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';


export const PipelineChooseRow = GObject.registerClass({
    GTypeName: 'PipelineChooseRow',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/pipeline-choose-row.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'pipeline_choose',
        'pipeline_model',
        'pipeline_edit'
    ],
}, class PipelineChooseRow extends Adw.ActionRow {
    initialize(preferences, pipelines_manager, pipelines_page) {
        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;

        this.create_pipelines_list();

        const expression = new Gtk.ClosureExpression(
            GObject.TYPE_STRING,
            string_object => {
                const pipeline_id = string_object.get_string();
                if (pipeline_id == 'create_new')
                    return "Create new pipeline";
                return this.pipelines_manager.pipelines[pipeline_id].name;
            },
            []
        );
        this._pipeline_choose.expression = expression;

        // TODO fix the expression not being re-evaluated other than by setting it again
        this.pipelines_manager.connect(
            'pipeline-names-changed',
            _ => this._pipeline_choose.expression = new Gtk.ClosureExpression(
                GObject.TYPE_STRING,
                string_object => {
                    const pipeline_id = string_object.get_string();
                    if (pipeline_id == 'create_new')
                        return "Create new pipeline";
                    return this.pipelines_manager.pipelines[pipeline_id].name;
                },
                []
            )
        );

        this.preferences.PIPELINE_changed(_ => {
            for (let i = 0; i < this._pipeline_model.n_items; i++) {
                const pipeline_id = this._pipeline_model.get_string(i);
                if (pipeline_id == this.preferences.PIPELINE)
                    this._pipeline_choose.set_selected(i);
            }
        });

        this.pipelines_manager.connect(
            'pipeline-list-changed',
            _ => this.create_pipelines_list()
        );

        this._pipeline_choose.connect('notify::selected', _ => {
            if (!this._pipeline_choose.selected_item)
                return;
            const pipeline_id = this._pipeline_choose.selected_item.get_string();
            if (pipeline_id == 'create_new') {
                const id = this.pipelines_manager.create_pipeline("New pipeline");
                this.preferences.PIPELINE = id;
            }
            else
                this.preferences.PIPELINE = pipeline_id;
        });

        this._pipeline_edit.connect(
            'clicked',
            _ => pipelines_page.open_effects_dialog(this.preferences.PIPELINE)
        );
    }

    create_pipelines_list() {
        // remove ancient items
        this._pipeline_model.splice(0, this._pipeline_model.n_items, null);

        // add new ones
        let i = 0;
        for (let pipeline_id in this.pipelines_manager.pipelines) {
            this._pipeline_model.append(pipeline_id);
            if (pipeline_id == this.preferences.PIPELINE)
                this._pipeline_choose.set_selected(i);
            i++;
        }
        this._pipeline_model.append('create_new');
    }
});