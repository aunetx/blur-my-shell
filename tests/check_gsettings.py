#!/usr/bin/env python3
"""Compile and exercise custom colour schemas using real GLib/Gio.

This uses an in-process memory backend, never the user's dconf database.
It does not emulate GNOME Shell, GTK4, or visual rendering.
"""
import ctypes as C
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import xml.etree.ElementTree as ET

os.environ['GSETTINGS_BACKEND'] = 'memory'
root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parent.parent
temporary = tempfile.TemporaryDirectory(prefix='bms-schema-test-')
output = Path(temporary.name)
source = root / 'schemas/org.gnome.shell.extensions.blur-my-shell.gschema.xml'
shutil.copyfile(source, output / source.name)
compiler = shutil.which('glib-compile-schemas') or '/usr/lib/x86_64-linux-gnu/glib-2.0/glib-compile-schemas'
subprocess.run([compiler, '--strict', str(output)], check=True)

glib = C.CDLL('libglib-2.0.so.0')
gio = C.CDLL('libgio-2.0.so.0')
gobject = C.CDLL('libgobject-2.0.so.0')

def bind(lib, name, result, *args):
    fn = getattr(lib, name)
    fn.restype = result
    fn.argtypes = args
    return fn

class Error(C.Structure):
    _fields_ = [('domain', C.c_uint), ('code', C.c_int), ('message', C.c_char_p)]

errorp = C.POINTER(Error)
new_source = bind(gio, 'g_settings_schema_source_new_from_directory', C.c_void_p, C.c_char_p, C.c_void_p, C.c_int, C.POINTER(errorp))
lookup = bind(gio, 'g_settings_schema_source_lookup', C.c_void_p, C.c_void_p, C.c_char_p, C.c_int)
new_settings = bind(gio, 'g_settings_new_full', C.c_void_p, C.c_void_p, C.c_void_p, C.c_char_p)
get_value = bind(gio, 'g_settings_get_value', C.c_void_p, C.c_void_p, C.c_char_p)
get_default = bind(gio, 'g_settings_get_default_value', C.c_void_p, C.c_void_p, C.c_char_p)
set_value = bind(gio, 'g_settings_set_value', C.c_int, C.c_void_p, C.c_char_p, C.c_void_p)
get_int = bind(gio, 'g_settings_get_int', C.c_int, C.c_void_p, C.c_char_p)
set_int = bind(gio, 'g_settings_set_int', C.c_int, C.c_void_p, C.c_char_p, C.c_int)
reset = bind(gio, 'g_settings_reset', None, C.c_void_p, C.c_char_p)
sync = bind(gio, 'g_settings_sync', None)
unref_schema = bind(gio, 'g_settings_schema_unref', None, C.c_void_p)
unref_source = bind(gio, 'g_settings_schema_source_unref', None, C.c_void_p)
unref_object = bind(gobject, 'g_object_unref', None, C.c_void_p)
parse_variant = bind(glib, 'g_variant_parse', C.c_void_p, C.c_void_p, C.c_char_p, C.c_void_p, C.c_void_p, C.POINTER(errorp))
ref_sink = bind(glib, 'g_variant_ref_sink', C.c_void_p, C.c_void_p)
unref_variant = bind(glib, 'g_variant_unref', None, C.c_void_p)
get_type = bind(glib, 'g_variant_get_type_string', C.c_char_p, C.c_void_p)
children = bind(glib, 'g_variant_n_children', C.c_size_t, C.c_void_p)
child_value = bind(glib, 'g_variant_get_child_value', C.c_void_p, C.c_void_p, C.c_size_t)
get_double = bind(glib, 'g_variant_get_double', C.c_double, C.c_void_p)

def raise_error(error):
    if error:
        raise RuntimeError(error.contents.message.decode())

def variant_for(tuple_value):
    error = errorp()
    value = parse_variant(None, str(tuple(tuple_value)).encode(), None, None, C.byref(error))
    raise_error(error)
    assert value
    return ref_sink(value)

def unpack_tuple(value):
    assert value and get_type(value) == b'(dddd)'
    assert children(value) == 4
    result = []
    for i in range(4):
        item = child_value(value, i)
        result.append(get_double(item))
        unref_variant(item)
    unref_variant(value)
    return tuple(result)

error = errorp()
schema_source = new_source(str(output).encode(), None, 1, C.byref(error))
raise_error(error)
assert schema_source

results = []
document = ET.parse(source)
tests = [(0.0, 0.0, 0.0, 0.0), (1.0, 1.0, 1.0, 1.0), (0.2, 0.5, 0.75, 0.4)]
for component, style_key in [('overview', 'style-components'), ('appfolder', 'style-dialogs')]:
    schema_id = 'org.gnome.shell.extensions.blur-my-shell.' + component
    schema_node = document.find(f"./schema[@id='{schema_id}']")
    assert schema_node is not None
    for key in ['custom-background-color', 'custom-text-color']:
        assert schema_node.find(f"./key[@name='{key}']") is not None, f'Missing schema key: {component}.{key}'
    schema = lookup(schema_source, schema_id.encode(), 0)
    assert schema
    settings = new_settings(schema, None, None)
    # Original integer style choices retain their storage values; Custom is appended.
    assert get_int(settings, style_key.encode()) == 1
    for style in range(5):
        assert set_int(settings, style_key.encode(), style)
        other = new_settings(schema, None, None)
        assert get_int(other, style_key.encode()) == style
        unref_object(other)
    reset(settings, style_key.encode())
    assert get_int(settings, style_key.encode()) == 1
    for key in ['custom-background-color', 'custom-text-color']:
        default = unpack_tuple(get_default(settings, key.encode()))
        assert unpack_tuple(get_value(settings, key.encode())) == default
        for rgba in tests:
            value = variant_for(rgba)
            assert set_value(settings, key.encode(), value)
            unref_variant(value)
            sync()
            other = new_settings(schema, None, None)
            assert unpack_tuple(get_value(other, key.encode())) == rgba
            unref_object(other)
        reset(settings, key.encode())
        assert unpack_tuple(get_value(settings, key.encode())) == default
        results.append({'schema': component, 'key': key, 'default': default, 'roundtrip_samples': len(tests), 'reset': 'passed'})
    unref_object(settings)
    unref_schema(schema)
unref_source(schema_source)
print(json.dumps({'strict_compile': 'passed', 'backend': 'memory', 'style_indices': [0, 1, 2, 3, 4], 'checks': results}, indent=2))
