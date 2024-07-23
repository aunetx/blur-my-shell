schema = rdnn + '.gschema.xml'
schema_dir = datadir / 'glib-2.0' / 'schemas'

install_data(schema, install_dir : schema_dir)

gnome.post_install(glib_compile_schemas : true)
