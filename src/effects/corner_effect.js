'use strict';

const { GLib, GObject, Clutter, Shell } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();


const SHADER_PATH = GLib.build_filenamev(
    [Me.path, 'effects', 'corner_effect.glsl']
);

const get_shader_source = _ => {
    try {
        return Shell.get_file_contents_utf8_sync(SHADER_PATH);
    } catch (e) {
        log(`[Blur my Shell] error loading shader from ${SHADER_PATH}: ${e}`);
        return null;
    }
};

var test = () => {
    let w = new imports.gi.St.Widget({
        width: 150,
        height: 150,
        x: 150,
        y: 150
    });
    global.w = w;
    w.style = "background-color:red;";

    imports.ui.main.uiGroup.add_child(w);

    let e = new global.blur_my_shell.corner_effect;
    e.set_uniform_value("width", 150.000001 / 2);
    e.set_uniform_value("height", 150.000001 / 2);

    w.add_effect(e);

    global.e = e;
};


var CornerEffect = new GObject.registerClass({
    GTypeName: "CornerEffect",
}, class CornerShader extends Clutter.ShaderEffect {
    _init(params) {
        super._init(params);
        this._source = get_shader_source();

        if (this._source)
            this.set_shader_source(this._source);
    }


    vfunc_paint_target(paint_node = null, paint_context = null) {
        this.set_uniform_value("tex", 0);

        if (paint_node && paint_context)
            super.vfunc_paint_target(paint_node, paint_context);
        else if (paint_node)
            super.vfunc_paint_target(paint_node);
        else
            super.vfunc_paint_target();
    }
});