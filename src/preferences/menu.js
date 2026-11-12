import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import Gtk from 'gi://Gtk';
import Gio from 'gi://Gio';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { apply_settings, export_settings, read_settings } from '../settings/settings_file.js';
import { ui_resource } from './resources.js';


Gio._promisify(Gtk.FileDialog.prototype, 'open', 'open_finish');
Gio._promisify(Gtk.FileDialog.prototype, 'save', 'save_finish');
Gio._promisify(Gio.File.prototype, 'load_contents_async', 'load_contents_finish');
Gio._promisify(Gio.File.prototype, 'replace_contents_bytes_async', 'replace_contents_finish');

const EXPORTED_FILE_NAME = 'blur-my-shell.conf';

const LINKS = [
    {
        name: 'open-bug-report',
        link: 'https://github.com/aunetx/blur-my-shell/issues'
    },
    {
        name: 'open-readme',
        link: 'https://github.com/aunetx/blur-my-shell'
    },
    {
        name: 'open-license',
        link: 'https://github.com/aunetx/blur-my-shell/blob/master/LICENSE'
    },
];


export function addMenu(window, preferences) {
    const builder = new Gtk.Builder();

    // add a dummy page and remove it immediately, to access headerbar
    builder.add_from_resource(ui_resource('menu.ui'));
    let menu_util = builder.get_object('menu_util');
    window.add(menu_util);
    // the header bar is found by walking libadwaita's internal widget tree, which may change
    try {
        addMenuToHeader(window, builder);
    } catch (error) {
        console.warn(`[Blur my Shell > menu]         could not add the menu: ${error}`);
    }
    window.remove(menu_util);

    window.insert_action_group('prefs', createActions(window, preferences));
}

function addMenuToHeader(window, builder) {
    const page = builder.get_object('menu_util');
    const pages_stack = page.get_parent(); // AdwViewStack
    const content_stack = pages_stack.get_parent().get_parent(); // GtkStack
    const preferences = content_stack.get_parent(); // GtkBox
    const headerbar = preferences.get_first_child().get_next_sibling()
        .get_first_child().get_first_child().get_first_child(); // AdwHeaderBar
    headerbar.pack_end(builder.get_object('main_menu'));
}

function createActions(window, preferences) {
    const action_group = new Gio.SimpleActionGroup();

    action_group.add_action(preferences.settings.create_action('debug'));
    action_group.add_action(preferences.settings.create_action('power-saver'));

    const reset = new Gio.SimpleAction({ name: 'reset' });
    reset.connect('activate', () => confirmReset(window, preferences));
    action_group.add_action(reset);

    const export_preferences = new Gio.SimpleAction({ name: 'export' });
    export_preferences.connect('activate', () => exportPreferences(window, preferences));
    action_group.add_action(export_preferences);

    const import_preferences = new Gio.SimpleAction({ name: 'import' });
    import_preferences.connect('activate', () => importPreferences(window, preferences));
    action_group.add_action(import_preferences);

    LINKS.forEach(({ name, link }) => {
        const action = new Gio.SimpleAction({ name });
        action.connect(
            'activate',
            () => new Gtk.UriLauncher({ uri: link }).launch(window, null, null)
        );
        action_group.add_action(action);
    });

    return action_group;
}

function confirmReset(window, preferences) {
    const dialog = new Adw.AlertDialog({
        heading: _('Reset all preferences?'),
        body: _('Pipelines and component settings will return to their defaults.'),
    });
    dialog.add_response('cancel', _('Cancel'));
    dialog.add_response('reset', _('Reset'));
    dialog.set_response_appearance('reset', Adw.ResponseAppearance.DESTRUCTIVE);
    dialog.set_default_response('cancel');
    dialog.set_close_response('cancel');
    dialog.connect('response::reset', () => preferences.reset());
    dialog.present(window);
}

function showFileError(window, error, title) {
    if (error.matches?.(Gtk.DialogError, Gtk.DialogError.DISMISSED))
        return;

    console.warn(`[Blur my Shell > menu]         ${title}: ${error.message}`);
    window.add_toast(new Adw.Toast({ title }));
}

async function exportPreferences(window, preferences) {
    try {
        const dialog = new Gtk.FileDialog({ initial_name: EXPORTED_FILE_NAME });
        const file = await dialog.save(window, null);
        await file.replace_contents_bytes_async(
            new GLib.Bytes(new TextEncoder().encode(export_settings(preferences))),
            null,
            false,
            Gio.FileCreateFlags.REPLACE_DESTINATION,
            null
        );
        window.add_toast(new Adw.Toast({ title: _('Preferences exported') }));
    } catch (error) {
        showFileError(window, error, _('Could not export the preferences'));
    }
}

async function importPreferences(window, preferences) {
    try {
        const file = await new Gtk.FileDialog().open(window, null);
        const [bytes] = await file.load_contents_async(null);
        confirmImport(window, preferences, read_settings(preferences, bytes));
    } catch (error) {
        showFileError(window, error, _('Could not import this file'));
    }
}

function confirmImport(window, preferences, settings) {
    const dialog = new Adw.AlertDialog({
        heading: _('Import preferences?'),
        body: _('Your pipelines and component settings will be replaced by the ones in this file.'),
    });
    dialog.add_response('cancel', _('Cancel'));
    dialog.add_response('import', _('Import'));
    dialog.set_response_appearance('import', Adw.ResponseAppearance.DESTRUCTIVE);
    dialog.set_default_response('cancel');
    dialog.set_close_response('cancel');
    dialog.connect('response::import', () => {
        apply_settings(preferences, settings);
        window.add_toast(new Adw.Toast({ title: _('Preferences imported') }));
    });
    dialog.present(window);
}
