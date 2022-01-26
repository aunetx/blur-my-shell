'use strict';

const { GObject, Gtk, Gio } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Extension = ExtensionUtils.getCurrentExtension();
const Settings = Extension.imports.settings;


var PreferencesDialog = class PreferencesDialog {
    constructor() {
        // load our resources

        this.resources = Gio.Resource.load(
            `${Extension.path}/blur-my-shell.gresource`
        );
        Gio.resources_register(this.resources);

        // Load the CSS file for the settings dialog.
        /*
        const styleProvider = Gtk.CssProvider.new();
        styleProvider.load_from_resource('/css/gtk.css');
        Gtk.StyleContext.add_provider_for_display(
        Gdk.Display.get_default(), styleProvider,
        Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION);
        */

        // Make sure custom icons are found.
        /*
        Gtk.IconTheme.get_for_display(Gdk.Display.get_default()).add_resource_path('/img');
        */

        // Register the template widgets used in the settings dialog.
        /*
        this._registerCustomClasses();
        */

        this.prefs = new Settings.Prefs();
        this.builder = new Gtk.Builder();

        // Load the general user interface files.
        this.builder.add_from_resource(`/ui/prefs.ui`);

        // This is our top-level widget which we will return later.
        this.widget = this.builder.get_object('settings-widget');

        // Some things can only be done once the widget is shown as we do not have access to
        // the toplevel widget before.
        this.widget.connect('realize', widget => {
            const window = widget.get_root();

            // Show the version number in the title bar.
            window.set_title(`Blur my Shell ${Me.metadata.version}`);

            // Add the main menu to the title bar.
            {
                // Add the menu button to the title bar.
                const menu = this.builder.get_object('menu-button');
                window.get_titlebar().pack_end(menu);

                // Populate the menu with actions.
                const group =
                    Gio.SimpleActionGroup.new();
                window.insert_action_group('prefs', group);

                const addAction = (name, uri) => {
                    const action = Gio.SimpleAction.new(name, null);
                    action.connect('activate', _ => Gtk.show_uri(null, uri, Gdk.CURRENT_TIME));
                    group.add_action(action);
                };

                addAction('homepage', 'https://github.com/aunetx/blur-my-shell');
                addAction('bugs', 'https://github.com/aunetx/blur-my-shell/issues');
                addAction('donate-kofi', 'https://ko-fi.com/aunetx');
                addAction('donate-github', 'https://github.com/sponsors/aunetx');
            }
        });

        // As we do not have something like a destructor, we just listen for the destroy
        // signal of our main widget.
        this.widget.connect('destroy', _ => {
            // unregister our resources
            Gio.resources_unregister(this.resources);
        });
    }

    _log(str) {
        if (config.DEBUG.get())
            log(`[Blur my Shell] ${str}`);
    }
};

function init() { }

function buildPrefsWidget() {
    let dialog = new PreferencesDialog;

    return dialog.widget;
}