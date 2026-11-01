import Adw from 'gi://Adw';
import Gtk from 'gi://Gtk';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';


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
    builder.add_from_file(GLib.filename_from_uri(GLib.uri_resolve_relative(import.meta.url, '../ui/menu.ui', GLib.UriFlags.NONE))[0]);
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
