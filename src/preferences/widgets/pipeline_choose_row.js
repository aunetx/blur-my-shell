import Adw from 'gi://Adw';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { ui_template } from '../resources.js';


function initialize_pipeline_selector(
    widget,
    selector,
    model,
    edit_button,
    preferences,
    property,
    pipelines_manager,
    pipelines_page
) {
    const create_pipelines_list = () => {
        // prevent the pipeline selector from being updated while re-creating the list
        widget.is_creating_pipelines_list = true;

        model.splice(0, model.n_items, null);

        let i = 0;
        for (const pipeline_id in pipelines_manager.pipelines) {
            model.append(pipeline_id);
            if (pipeline_id == preferences[property])
                selector.set_selected(i);
            i++;
        }
        model.append('create_new');

        widget.is_creating_pipelines_list = false;
        on_selected_pipeline_changed();
    };

    const on_selected_pipeline_changed = () => {
        if (!selector.selected_item || widget.is_creating_pipelines_list)
            return;

        const pipeline_id = selector.selected_item.get_string();
        if (pipeline_id == 'create_new') {
            const id = pipelines_page.create_pipeline();
            if (id)
                preferences[property] = id;
        } else {
            preferences[property] = pipeline_id;
        }
    };

    const on_settings_pipeline_changed = () => {
        for (let i = 0; i < model.n_items; i++) {
            const pipeline_id = model.get_string(i);
            // if we have more pipelines than we should have: rebuild...
            // that is the case when resetting the preferences for example
            if (
                pipeline_id !== 'create_new' &&
                !(pipeline_id in pipelines_manager.pipelines)
            ) {
                create_pipelines_list();
                return;
            }
            if (pipeline_id == preferences[property])
                selector.set_selected(i);
        }
    };

    create_pipelines_list();

    // display the correct pipeline name in the drop-down instead of their ids
    const closure_func = string_object => {
        const pipeline_id = string_object.get_string();
        if (pipeline_id == 'create_new')
            return _("Create new pipeline");
        if (pipeline_id in pipelines_manager.pipelines)
            return pipelines_manager.pipelines[pipeline_id].name;
        else
            return "";
    };

    const expression = new Gtk.ClosureExpression(GObject.TYPE_STRING, closure_func, []);
    selector.expression = expression;

    // TODO fix the expression not being re-evaluated other than by setting it again
    pipelines_manager.connect(
        'pipeline-names-changed',
        () => selector.expression = new Gtk.ClosureExpression(
            GObject.TYPE_STRING, closure_func, []
        )
    );

    const change_callback_name = `${property}_changed`;
    if (typeof preferences[change_callback_name] === 'function')
        preferences[change_callback_name](on_settings_pipeline_changed);

    pipelines_manager.connect('pipeline-list-changed', () => create_pipelines_list());

    selector.connect('notify::selected', on_selected_pipeline_changed);

    edit_button.connect(
        'clicked',
        () => pipelines_page.open_pipeline(preferences[property])
    );
}


export const PipelineChooseRow = GObject.registerClass({
    GTypeName: 'PipelineChooseRow',
    Template: ui_template('widgets/pipeline-choose-row.ui'),
    InternalChildren: [
        'pipeline_choose',
        'pipeline_model',
        'pipeline_edit'
    ],
}, class PipelineChooseRow extends Adw.ActionRow {
    initialize(preferences, pipelines_manager, pipelines_page) {
        initialize_pipeline_selector(
            this,
            this._pipeline_choose,
            this._pipeline_model,
            this._pipeline_edit,
            preferences,
            'PIPELINE',
            pipelines_manager,
            pipelines_page
        );
    }
});

export const PipelineChooseAutoLightRow = GObject.registerClass({
    GTypeName: 'PipelineChooseAutoLightRow',
    Template: ui_template('widgets/pipeline-choose-auto-light-row.ui'),
    InternalChildren: [
        'pipeline_choose',
        'pipeline_model',
        'pipeline_edit'
    ],
}, class PipelineChooseAutoLightRow extends Adw.ActionRow {
    initialize(preferences, pipelines_manager, pipelines_page) {
        initialize_pipeline_selector(
            this,
            this._pipeline_choose,
            this._pipeline_model,
            this._pipeline_edit,
            preferences,
            'PIPELINE_LIGHT',
            pipelines_manager,
            pipelines_page
        );
    }
});

export const PipelineChooseAutoDarkRow = GObject.registerClass({
    GTypeName: 'PipelineChooseAutoDarkRow',
    Template: ui_template('widgets/pipeline-choose-auto-dark-row.ui'),
    InternalChildren: [
        'pipeline_choose',
        'pipeline_model',
        'pipeline_edit'
    ],
}, class PipelineChooseAutoDarkRow extends Adw.ActionRow {
    initialize(preferences, pipelines_manager, pipelines_page) {
        initialize_pipeline_selector(
            this,
            this._pipeline_choose,
            this._pipeline_model,
            this._pipeline_edit,
            preferences,
            'PIPELINE_DARK',
            pipelines_manager,
            pipelines_page
        );
    }
});
