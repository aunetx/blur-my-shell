project('blur-my-shell')

gnome = import('gnome')
i18n = import('i18n')

uuid = 'blur-my-shell@aunetx'
rdnn = 'org.gnome.shell.extensions.blur-my-shell'

datadir = get_option('datadir')
extension_dir = datadir / 'gnome-shell' / 'extensions' / uuid

subdir('src')
subdir('resources')
subdir('schemas')
subdir('po')

install_data('metadata.json', install_dir : extension_dir)
