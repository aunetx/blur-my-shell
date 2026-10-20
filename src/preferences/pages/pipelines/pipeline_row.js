import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { get_supported_effects } from '../../../effects/effects.js';


export const PipelineRow = GObject.registerClass({
    GTypeName: 'PipelineRow',
}, class PipelineRow extends Adw.ActionRow {
    constructor(pipelines_manager, pipeline_id) {
        super({ activatable: true });

        this._supported_effects = get_supported_effects(_);
        this._pipelines_manager = pipelines_manager;
        this.pipeline_id = pipeline_id;

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
