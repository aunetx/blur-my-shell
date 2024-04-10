import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { PipelineGroup } from './pipelines_management/pipeline_group.js';
import { EffectsDialog } from './pipelines_management/effects_dialog.js';


export const Pipelines = GObject.registerClass({
    GTypeName: 'Pipelines',
    Template: GLib.uri_resolve_relative(import.meta.url, '../ui/pipelines.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'add_pipeline'
    ],
}, class Pipelines extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, window) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.window = window;

        this.pipelines_map = new Map;

        for (let pipeline_id in this.pipelines_manager.pipelines)
            this.add_pipeline(pipeline_id, false);

        this.preferences.connect('reset', _ => {
            this.pipelines_map.forEach((_infos, pid) => this.remove_pipeline(pid));
            for (let pipeline_id in this.pipelines_manager.pipelines)
                this.add_pipeline(pipeline_id, false);
        });

        this._add_pipeline.connect(
            "clicked",
            () => this.pipelines_manager.create_pipeline(_("New pipeline"))
        );

        this.pipelines_manager.connect(
            "pipeline-created",
            (_obj, id, _pipeline) => this.add_pipeline(id, true)
        );
    }

    add_pipeline(pipeline_id, scroll_to_bottom) {
        let pipeline = this.pipelines_manager.pipelines[pipeline_id];
        let pipeline_group = new PipelineGroup(
            this.pipelines_manager, pipeline_id, pipeline, this
        );

        let pipeline_destroyed_id = this.pipelines_manager.connect(
            pipeline_id + "::pipeline-destroyed",
            () => this.remove_pipeline(pipeline_id)
        );

        let pipeline_renamed_id = this.pipelines_manager.connect(
            pipeline_id + "::pipeline-renamed",
            (_obj, name) => this.rename_pipeline(pipeline_id, name)
        );

        this.pipelines_map.set(pipeline_id, {
            pipeline_group, pipeline_destroyed_id, pipeline_renamed_id
        });

        this.add(pipeline_group);

        // scroll to the bottom of the page
        if (scroll_to_bottom) {
            this.window.set_visible_page(this);
            setTimeout(() => {
                const scroll_adjustment = this.get_first_child().get_vadjustment();
                scroll_adjustment.value = scroll_adjustment.get_upper();
            }, 10);
            pipeline_group._title.grab_focus();
        }
    }

    remove_pipeline(pipeline_id) {
        let pipeline_infos = this.pipelines_map.get(pipeline_id);
        if (pipeline_infos) {
            this.pipelines_manager.disconnect(pipeline_infos.pipeline_destroyed_id);
            this.remove(pipeline_infos.pipeline_group);
            this.pipelines_map.delete(pipeline_id);
        }
    }

    rename_pipeline(pipeline_id, name) {
        let pipeline_infos = this.pipelines_map.get(pipeline_id);
        if (pipeline_infos)
            pipeline_infos.pipeline_group.set_title(name.length > 0 ? name : " ");
    }

    open_effects_dialog(pipeline_id) {
        let dialog = new EffectsDialog(this.pipelines_manager, pipeline_id);
        dialog.present(this.window);
    }
});