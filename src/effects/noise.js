import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';
import Shell from 'gi://Shell';


const SHADER_PATH = GLib.filename_from_uri(GLib.uri_resolve_relative(import.meta.url, 'noise.glsl', GLib.UriFlags.NONE))[0];

const get_shader_source = _ => {
    try {
        return Shell.get_file_contents_utf8_sync(SHADER_PATH);
    } catch (e) {
        console.warn(`[Blur my Shell] error loading shader from ${SHADER_PATH}: ${e}`);
        return null;
    }
};

export const NoiseEffect = new GObject.registerClass({
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
}, class NoiseEffect extends Clutter.ShaderEffect {
    constructor(params) {
        super(params);

        this._noise = null;
        this._lightness = null;

        this.noise = 'noise' in params ? params.noise : this.default_params.noise;
        this.lightness = 'lightness' in params ? params.lightness : this.default_params.lightness;

        // set shader source
        this._source = get_shader_source();
        if (this._source)
            this.set_shader_source(this._source);
    }

    get default_params() {
        return { noise: 0.4, lightness: 0.4 };
    }

    get noise() {
        return this._noise;
    }

    set noise(value) {
        if (this._noise !== value) {
            this._noise = value;

            this.set_uniform_value('noise', parseFloat(this._noise - 1e-6));
            this.set_enabled(this.noise > 0. && this.lightness != 1);
        }
    }

    get lightness() {
        return this._lightness;
    }

    set lightness(value) {
        if (this._lightness !== value) {
            this._lightness = value;

            this.set_uniform_value('lightness', parseFloat(this._lightness - 1e-6));
            this.set_enabled(this.noise > 0. && this.lightness != 1);
        }
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