import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';


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
        this.pipelines_page = pipelines_page;

        this.create_pipelines_list();

        // display the correct pipeline name in the drop-down instead of their ids
        const closure_func = string_object => {
            const pipeline_id = string_object.get_string();
            if (pipeline_id == 'create_new')
                return _("Create new pipeline");
            if (pipeline_id in this.pipelines_manager.pipelines)
                return this.pipelines_manager.pipelines[pipeline_id].name;
            else
                return "";
        };

        const expression = new Gtk.ClosureExpression(GObject.TYPE_STRING, closure_func, []);
        this._pipeline_choose.expression = expression;

        // TODO fix the expression not being re-evaluated other than by setting it again
        this.pipelines_manager.connect(
            'pipeline-names-changed',
            () => this._pipeline_choose.expression = new Gtk.ClosureExpression(
                GObject.TYPE_STRING, closure_func, []
            )
        );

        this.preferences.PIPELINE_changed(() => this.on_settings_pipeline_changed());

        this.pipelines_manager.connect('pipeline-list-changed', () => this.create_pipelines_list());

        this._pipeline_choose.connect('notify::selected', () => this.on_selected_pipeline_changed());

        this._pipeline_edit.connect(
            'clicked',
            () => this.pipelines_page.open_effects_dialog(this.preferences.PIPELINE)
        );
    }

    on_selected_pipeline_changed() {
        if (!this._pipeline_choose.selected_item || this._is_creating_pipelines_list)
            return;

        const pipeline_id = this._pipeline_choose.selected_item.get_string();
        if (pipeline_id == 'create_new') {
            const id = this.pipelines_manager.create_pipeline(_("New pipeline"));
            this.preferences.PIPELINE = id;
        }
        else
            this.preferences.PIPELINE = pipeline_id;
    }

    on_settings_pipeline_changed() {
        for (let i = 0; i < this._pipeline_model.n_items; i++) {
            const pipeline_id = this._pipeline_model.get_string(i);
            // if we have more pipelines than we should have: rebuild...
            // that is the case when resetting the preferences for example
            if (!(pipeline_id in this.pipelines_manager)) {
                this.create_pipelines_list();
                return;
            }
            if (pipeline_id == this.preferences.PIPELINE)
                this._pipeline_choose.set_selected(i);
        }
    }

    create_pipelines_list() {
        // prevent the pipeline selector from being updated while re-creating the list
        this._is_creating_pipelines_list = true;

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

        // now update the drop-down selector
        this._is_creating_pipelines_list = false;
        this.on_selected_pipeline_changed();
    }
});