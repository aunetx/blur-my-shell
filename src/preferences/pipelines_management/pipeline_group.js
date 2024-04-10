import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { get_supported_effects } from '../../effects/effects.js';


export const PipelineGroup = GObject.registerClass({
    GTypeName: 'PipelineGroup',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/pipeline-group.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        "title",
        "effects_description_row",
        "manage_effects"
    ],
}, class PipelineGroup extends Adw.PreferencesGroup {
    constructor(pipelines_manager, pipeline_id, pipeline, pipelines_page) {
        super({});

        this.SUPPORTED_EFFECTS = get_supported_effects(_);

        this._pipelines_manager = pipelines_manager;
        this._pipelines_page = pipelines_page;
        this._pipeline_id = pipeline_id;

        // set the description
        this.set_description(_(`Pipeline id: "${pipeline_id}"`));

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

        this.update_effects_description_row();
        this._pipelines_manager.connect(
            pipeline_id + '::pipeline-updated',
            () => this.update_effects_description_row()
        );

        this._manage_effects.connect(
            'clicked',
            () => pipelines_page.open_effects_dialog(pipeline_id)
        );
    }

    update_effects_description_row() {
        const effects = this._pipelines_manager.pipelines[this._pipeline_id].effects;

        if (effects.length == 0)
            this._effects_description_row.set_title(_("No effect"));
        else if (effects.length == 1)
            this._effects_description_row.set_title(_("1 effect"));
        else
            this._effects_description_row.set_title(_(`${effects.length} effects`));

        let subtitle = "";
        effects.forEach(effect => {
            if (effect.type in this.SUPPORTED_EFFECTS)
                subtitle += _(`${this.SUPPORTED_EFFECTS[effect.type].name}, `);
            else
                subtitle += _("Unknown effect, ");
        });
        this._effects_description_row.set_subtitle(subtitle.slice(0, -2));
    }
});
