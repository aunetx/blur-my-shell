import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { PipelineGroup } from '../widgets/pipeline_group.js';
import { EffectsDialog } from '../widgets/effects_dialog.js';
import { initialize_legacy_blur_notice } from '../legacy_blur_notice.js';
import { create_pipeline_undo_toast } from '../widgets/pipeline_undo_toast.js';


export const Pipelines = GObject.registerClass({
    GTypeName: 'Pipelines',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../ui/pipelines.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'add_pipeline',
        'legacy_blur_notice'
    ],
}, class Pipelines extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, window) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.window = window;

        initialize_legacy_blur_notice(this._legacy_blur_notice, preferences.settings);

        this.pipelines_map = new Map;
        this._scroll_timeout_ids = new Set;
        this._deleted_pipelines = [];
        this._undo_toast = null;

        for (let pipeline_id in this.pipelines_manager.pipelines)
            this.add_pipeline(pipeline_id, false);

        this.preferences.connect('reset', _ => {
            this.pipelines_map.forEach((_infos, pid) => this.remove_pipeline(pid));
            for (let pipeline_id in this.pipelines_manager.pipelines)
                this.add_pipeline(pipeline_id, false);
            this.clear_pipeline_undo();
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

        if (scroll_to_bottom) {
            this.window.set_visible_page(this);
            const timeout_id = setTimeout(() => {
                this._scroll_timeout_ids.delete(timeout_id);
                if (!pipeline_group.get_root())
                    return;
                const scroll_adjustment = this.get_first_child().get_vadjustment();
                scroll_adjustment.value = scroll_adjustment.get_upper();
            }, 10);
            this._scroll_timeout_ids.add(timeout_id);
            pipeline_group._title.grab_focus();
        }
    }

    remove_pipeline(pipeline_id) {
        let pipeline_infos = this.pipelines_map.get(pipeline_id);
        if (pipeline_infos) {
            this.pipelines_manager.disconnect(pipeline_infos.pipeline_destroyed_id);
            this.pipelines_manager.disconnect(pipeline_infos.pipeline_renamed_id);
            pipeline_infos.pipeline_group.cleanup();
            this.remove(pipeline_infos.pipeline_group);
            this.pipelines_map.delete(pipeline_id);
        }
    }

    delete_pipeline(pipeline_id) {
        const pipeline = this.pipelines_manager.pipelines[pipeline_id];
        const components = this.preferences.keys
            .filter(bundle => bundle.schemas.some(key => key.name === 'pipeline'))
            .map(bundle => this.preferences[bundle.component.replaceAll('-', '_')])
            .filter(component => component.PIPELINE === pipeline_id);

        if (!this.pipelines_manager.delete_pipeline(pipeline_id))
            return;

        this._deleted_pipelines.push({ pipeline_id, pipeline, components });
        this.show_pipeline_undo();
    }

    show_pipeline_undo() {
        const deleted = this._deleted_pipelines.at(-1);
        const prev_toast = this._undo_toast;
        this._undo_toast = create_pipeline_undo_toast(
            deleted.pipeline.name,
            () => this.undo_pipeline_deletion(),
            toast => {
                // do not clear on dismiss when toast is being replaced
                if (this._undo_toast === toast) {
                    this._undo_toast = null;
                    this._deleted_pipelines = [];
                }
            }
        );
        prev_toast?.dismiss();
        this.window.add_toast(this._undo_toast);
    }

    undo_pipeline_deletion() {
        const deleted = this._deleted_pipelines.at(-1);
        if (!deleted || !this.pipelines_manager.restore_pipeline(deleted.pipeline_id, deleted.pipeline))
            return;

        this._deleted_pipelines.pop();
        for (const component of deleted.components)
            component.PIPELINE = deleted.pipeline_id;

        if (this._deleted_pipelines.length > 0)
            this.show_pipeline_undo();
        else
            this._undo_toast.dismiss();
    }

    clear_pipeline_undo() {
        this._deleted_pipelines = [];
        this._undo_toast?.dismiss();
    }

    rename_pipeline(pipeline_id, name) {
        let pipeline_infos = this.pipelines_map.get(pipeline_id);
        if (pipeline_infos)
            pipeline_infos.pipeline_group.set_title(GLib.markup_escape_text(name.length > 0 ? name : " ", -1));
    }

    open_effects_dialog(pipeline_id) {
        let dialog = new EffectsDialog(this.pipelines_manager, pipeline_id);
        dialog.present(this.window);
    }

    cleanup() {
        this._scroll_timeout_ids.forEach(timeout_id => clearTimeout(timeout_id));
        this._scroll_timeout_ids.clear();
        this.clear_pipeline_undo();
    }
});
