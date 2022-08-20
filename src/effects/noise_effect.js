'use strict';

const { GLib, GObject, Gio, Clutter, Shell } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;


const SHADER_PATH = GLib.build_filenamev(
    [Me.path, 'effects', 'noise_effect.glsl']
);

const get_shader_source = _ => {
    try {
        return Shell.get_file_contents_utf8_sync(SHADER_PATH);
    } catch (e) {
        log(`[Blur my Shell] error loading shader from ${SHADER_PATH}: ${e}`);
        return null;
    }
};

var NoiseEffect = new GObject.registerClass({
    GTypeName: "NoiseEffect",
    Properties: {
        'noise': GObject.ParamSpec.double(
            `noise`,
            `Noise`,
            `Amount of noise integrated with the image`,
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            0.4,
        ),
        'lightness': GObject.ParamSpec.double(
            `lightness`,
            `Lightness`,
            `Lightness of the grey used for the noise`,
            GObject.ParamFlags.READWRITE,
            0.0, 2.0,
            0.4,
        ),
    }
}, class NoiseShader extends Clutter.ShaderEffect {
    _init(params) {
        this._noise = null;
        this._lightness = null;

        this._static = true;
        this._prefs = new Prefs(Keys);

        super._init(params);

        // set shader source
        this._source = get_shader_source();
        if (this._source)
            this.set_shader_source(this._source);

        this.update_enabled();
    }

    get noise() {
        return this._noise;
    }

    set noise(value) {
        if (this._noise !== value) {
            this._noise = value;

            this.set_uniform_value('noise', parseFloat(this._noise - 1e-6));
        }
        this.update_enabled();
    }

    get lightness() {
        return this._lightness;
    }

    set lightness(value) {
        if (this._lightness !== value) {
            this._lightness = value;

            this.set_uniform_value('lightness', parseFloat(this._lightness - 1e-6));
        }
    }

    update_enabled() {
        this.set_enabled(
            this.noise > 0 &&
            this._prefs.COLOR_AND_NOISE &&
            this._static
        );
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