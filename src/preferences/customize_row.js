'use strict';

const { Adw, GLib, GObject } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();

var CustomizeRow = GObject.registerClass({
    GTypeName: 'CustomizeRow',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'customize-row.ui'])}`,
    InternalChildren: [
        'sigma',
        'brightness',
        'color'
    ],
}, class CustomizeRow extends Adw.ExpanderRow { });
