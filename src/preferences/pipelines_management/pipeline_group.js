import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';


export const PipelineGroup = GObject.registerClass({
    GTypeName: 'PipelineGroup',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/pipeline-group.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        "title",
        "manage_effects"
    ],
}, class PipelineGroup extends Adw.PreferencesGroup {
    constructor(pipelines_manager, pipeline_id, pipeline, pipelines_page) {
        super({});

        this._pipelines_manager = pipelines_manager;
        this._pipelines_page = pipelines_page;

        // set the description
        this.set_description(`Pipeline id: "${pipeline_id}"`);

        // set the title and connect it to the text entry
        this.set_title(pipeline.name.length > 0 ? pipeline.name : " ");
        this._title.set_text(pipeline.name);
        this._title.connect(
            'changed',
            () => pipelines_manager.rename_pipeline(pipeline_id, this._title.get_text())
        );

        // the bin containing the actions
        let prefix_bin = new Gtk.Box;
        prefix_bin.add_css_class('linked');
        this._title.add_prefix(prefix_bin);

        // add a 'remove' button if we are not the default pipeline
        if (pipeline_id != "pipeline_default") {
            let remove_button = new Gtk.Button({
                'icon-name': 'remove-row-symbolic',
                'width-request': 38,
                'height-request': 38,
                'margin-top': 6,
                'margin-bottom': 6
            });
            remove_button.add_css_class('destructive-action');
            prefix_bin.append(remove_button);
            remove_button.connect('clicked', () => pipelines_manager.delete_pipeline(pipeline_id));
        }
        // add a 'duplicate' button
        let duplicate_button = new Gtk.Button({
            'icon-name': 'duplicate-row-symbolic',
            'width-request': 38,
            'height-request': 38,
            'margin-top': 6,
            'margin-bottom': 6
        });
        prefix_bin.append(duplicate_button);
        duplicate_button.connect('clicked', () => pipelines_manager.duplicate_pipeline(pipeline_id));

        this._manage_effects.connect(
            'clicked',
            () => pipelines_page.open_effects_dialog(pipeline_id)
        );
    }
});
