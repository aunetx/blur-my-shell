import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { PipelineRow } from './pipeline_row.js';
import { PipelinePage } from './pipeline_page.js';
import { get_pipeline_users } from './components.js';


export const Pipelines = GObject.registerClass({
    GTypeName: 'Pipelines',
    Template: GLib.uri_resolve_relative(import.meta.url, '../../../ui/pages/pipelines/pipelines.ui', GLib.UriFlags.NONE),
    InternalChildren: [
        'pipelines_group',
        'add_pipeline'
    ],
}, class Pipelines extends Adw.PreferencesPage {
    constructor(preferences, pipelines_manager, window) {
        super({});

        this.preferences = preferences;
        this.pipelines_manager = pipelines_manager;
        this.window = window;

        this._rows = new Map;
        this._pages = new Map;
        this._deleted_pipelines = [];
        this._undo_toast = null;

        this.add_all_pipelines();

        this.preferences.connect('reset', () => {
            [...this._rows.keys()].forEach(id => this.remove_pipeline(id));
            this.add_all_pipelines();
            this.clear_pipeline_undo();
        });

        this._add_pipeline.connect('clicked', () => this.create_pipeline());

        this.pipelines_manager.connect(
            'pipeline-created',
            (_obj, id, _pipeline) => this.add_pipeline(id)
        );
    }

    add_all_pipelines() {
        for (const pipeline_id in this.pipelines_manager.pipelines)
            this.add_pipeline(pipeline_id);
    }

    add_pipeline(pipeline_id) {
        const row = new PipelineRow(this, this.pipelines_manager, pipeline_id);
        row.connect('activated', () => this.open_pipeline(pipeline_id));
        row.destroyed_id = this.pipelines_manager.connect(
            `${pipeline_id}::pipeline-destroyed`,
            () => this.remove_pipeline(pipeline_id)
        );
        this._rows.set(pipeline_id, row);
        this._pipelines_group.add(row);
    }

    remove_pipeline(pipeline_id) {
        const row = this._rows.get(pipeline_id);
        if (!row)
            return;

        this.pipelines_manager.disconnect(row.destroyed_id);
        row.cleanup();
        this._pipelines_group.remove(row);
        this._rows.delete(pipeline_id);

        this._pages.get(pipeline_id)?.cleanup();
        this._pages.delete(pipeline_id);
    }

    create_pipeline() {
        const pipeline_id = this.pipelines_manager.create_pipeline(_('New pipeline'));
        if (pipeline_id)
            this.open_pipeline(pipeline_id, true);
        return pipeline_id;
    }

    open_pipeline(pipeline_id, focus_name = false) {
        let page = this._pages.get(pipeline_id);
        if (!page) {
            page = new PipelinePage(this, this.pipelines_manager, this.preferences, pipeline_id);
            this._pages.set(pipeline_id, page);
        }
        if (focus_name)
            page.focus_name_on_show();
        this.window.push_subpage(page);
    }

    duplicate_pipeline(pipeline_id, open_copy) {
        const copy_id = this.pipelines_manager.duplicate_pipeline(pipeline_id);
        if (!copy_id || !open_copy)
            return;

        this.window.pop_subpage();
        this.open_pipeline(copy_id, true);
    }

    /// Deleting a pipeline that components use switches them to the default one, so it is confirmed
    /// first.
    delete_pipeline(pipeline_id) {
        const users = get_pipeline_users(this.preferences, pipeline_id);
        if (users.length === 0) {
            this.remove_pipeline_with_undo(pipeline_id, users);
            return;
        }

        const name = this.pipelines_manager.pipelines[pipeline_id].name;
        const dialog = new Adw.AlertDialog({
            heading: name.length > 0
                ? _('Delete “%s”?').replace('%s', () => name)
                : _('Delete this pipeline?'),
            body: _('It is used by %s, which will switch to the default pipeline.')
                .replace('%s', () => users.map(({ name }) => name).join(', ')),
        });
        dialog.add_response('cancel', _('Cancel'));
        dialog.add_response('delete', _('Delete'));
        dialog.set_response_appearance('delete', Adw.ResponseAppearance.DESTRUCTIVE);
        dialog.set_default_response('cancel');
        dialog.set_close_response('cancel');
        dialog.connect('response::delete', () => this.remove_pipeline_with_undo(pipeline_id, users));
        dialog.present(this.window);
    }

    remove_pipeline_with_undo(pipeline_id, users) {
        const pipeline = this.pipelines_manager.pipelines[pipeline_id];
        this.window.pop_subpage();
        if (!this.pipelines_manager.delete_pipeline(pipeline_id))
            return;

        const components = users.map(({ component }) => component);
        this._deleted_pipelines.push({ pipeline_id, pipeline, components });
        this.show_pipeline_undo();
    }

    show_pipeline_undo() {
        const deleted = this._deleted_pipelines.at(-1);
        const previous_toast = this._undo_toast;
        const toast = new Adw.Toast({
            title: GLib.markup_escape_text(
                deleted.pipeline.name.length > 0
                    ? _('"%s" deleted').replace('%s', () => deleted.pipeline.name)
                    : _('Pipeline deleted'),
                -1
            ),
            button_label: _('Undo'),
            priority: Adw.ToastPriority.HIGH,
            timeout: 5,
        });
        toast.connect('button-clicked', () => this.undo_pipeline_deletion());
        toast.connect('dismissed', () => {
            // a replaced toast is dismissed too, which must not clear the deletion history
            if (this._undo_toast === toast) {
                this._undo_toast = null;
                this._deleted_pipelines = [];
            }
        });
        this._undo_toast = toast;
        previous_toast?.dismiss();
        this.window.add_toast(toast);
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
    }

    clear_pipeline_undo() {
        this._deleted_pipelines = [];
        this._undo_toast?.dismiss();
    }

    cleanup() {
        this.clear_pipeline_undo();
        this._pages.forEach(page => page.cleanup());
    }
});
