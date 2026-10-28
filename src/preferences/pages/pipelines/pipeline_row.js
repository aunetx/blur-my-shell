import Adw from 'gi://Adw';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { get_supported_effects } from '../../../effects/effects.js';


export const PipelineRow = GObject.registerClass({
    GTypeName: 'PipelineRow',
}, class PipelineRow extends Adw.ActionRow {
    constructor(pipelines_page, pipelines_manager, pipeline_id) {
        super({ activatable: true });

        this._supported_effects = get_supported_effects(_);
        this._pipelines_manager = pipelines_manager;
        this.pipeline_id = pipeline_id;

        this.add_suffix(this.create_menu_button(pipelines_page));
        this.add_suffix(new Gtk.Image({ icon_name: 'go-next-symbolic' }));

        const pipeline = pipelines_manager.pipelines[pipeline_id];
        this.update_name(pipeline.name);
        this.update_effects(pipeline.effects);

        this._handlers = [
            pipelines_manager.connect(
                `${pipeline_id}::pipeline-renamed`,
                (_obj, name) => this.update_name(name)
            ),
            pipelines_manager.connect(
                `${pipeline_id}::pipeline-updated`,
                (_obj, updated) => this.update_effects(updated.effects)
            ),
        ];
    }

    create_menu_button(pipelines_page) {
        const menu = new Gio.Menu();
        menu.append(_('Duplicate'), 'pipeline-row.duplicate');
        const remove_item = Gio.MenuItem.new(_('Delete'), 'pipeline-row.delete');
        remove_item.set_attribute_value('hidden-when', GLib.Variant.new_string('action-disabled'));
        menu.append_item(remove_item);

        const actions = new Gio.SimpleActionGroup();
        const duplicate = new Gio.SimpleAction({ name: 'duplicate' });
        duplicate.connect('activate', () => pipelines_page.duplicate_pipeline(this.pipeline_id, false));
        actions.add_action(duplicate);
        const remove = new Gio.SimpleAction({
            name: 'delete',
            enabled: this.pipeline_id !== 'pipeline_default',
        });
        remove.connect('activate', () => pipelines_page.delete_pipeline(this.pipeline_id));
        actions.add_action(remove);
        this.insert_action_group('pipeline-row', actions);

        return new Gtk.MenuButton({
            icon_name: 'view-more-symbolic',
            tooltip_text: _('Pipeline Menu'),
            menu_model: menu,
            valign: Gtk.Align.CENTER,
            css_classes: ['flat'],
        });
    }

    update_name(name) {
        this.title = GLib.markup_escape_text(name.length > 0 ? name : _('Pipeline'), -1);
    }

    update_effects(effects) {
        this.subtitle = effects.length > 0
            ? effects.map(effect => this._supported_effects[effect.type]?.name ?? _('Unknown effect')).join(', ')
            : _('No effects yet');
    }

    cleanup() {
        this._handlers.forEach(id => this._pipelines_manager.disconnect(id));
    }
});
