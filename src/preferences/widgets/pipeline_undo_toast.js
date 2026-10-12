import GLib from 'gi://GLib';
import Gtk from 'gi://Gtk';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';


export function create_pipeline_undo_toast(pipeline_name, on_undo, on_dismissed) {
    const builder = new Gtk.Builder();
    builder.add_from_file(GLib.filename_from_uri(GLib.uri_resolve_relative(
        import.meta.url, '../../ui/pipeline-undo-toast.ui', GLib.UriFlags.NONE
    ))[0]);

    const toast = builder.get_object('undo_toast');
    const label = builder.get_object('undo_label');
    const button = builder.get_object('undo_button');
    label.label = pipeline_name.length > 0
        ? _('"%s" deleted').replace('%s', () => pipeline_name)
        : _('Pipeline deleted');
    label.tooltip_text = label.label;

    const undo_id = button.connect('clicked', on_undo);
    const dismissed_id = toast.connect('dismissed', () => {
        button.disconnect(undo_id);
        toast.disconnect(dismissed_id);
        on_dismissed(toast);
    });

    return toast;
}
