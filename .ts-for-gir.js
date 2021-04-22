module.exports = {
    pretty: false,
    print: false,
    verbose: true,
    environments: ['gjs', 'node'],
    outdir: '@types',
    girDirectories: ['/usr/share/gir-1.0', '/usr/share/gnome-shell', '/usr/lib/mutter-8'],
    modules: ['Shell-0.1', 'GLib-2.0', 'Gio-2.0', 'Meta-8', 'GObject-2.0', 'St-1.0', 'Gtk-4.0'],
    ignore: [],
}
