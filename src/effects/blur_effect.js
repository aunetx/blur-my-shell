import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Clutter from 'gi://Clutter';
import Shell from 'gi://Shell';
//import Cogl from 'gi://Cogl';

const SHADER_PATH = GLib.filename_from_uri(GLib.uri_resolve_relative(import.meta.url, 'blur_effect.glsl', GLib.UriFlags.NONE))[0];


const get_shader_source = _ => {
    try {
        return Shell.get_file_contents_utf8_sync(SHADER_PATH);
    } catch (e) {
        console.warn(`[Blur my Shell] error loading shader from ${SHADER_PATH}: ${e}`);
        return null;
    }
};

export const BlurEffect = new GObject.registerClass({
    GTypeName: "BlurEffect",
    Properties: {
        'pixel_step': GObject.ParamSpec.double(
            `pixel_step`,
            `Pixel step`,
            `Pixel step`,
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            0.0,
        ),
        'sigma': GObject.ParamSpec.double(
            `sigma`,
            `sigma`,
            `Blur sigma`,
            GObject.ParamFlags.READWRITE,
            0.0, 2000.0,
            200.0,
        ),
        'brightness': GObject.ParamSpec.double(
            `brightness`,
            `Brightness`,
            `Blur brightness`,
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            0.6,
        ),
        'direction': GObject.ParamSpec.double(
            `direction`,
            `Direction`,
            `Blur direction`,
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            0.0,
        ),
    }
}, class BlurEffect extends Clutter.ShaderEffect {
    constructor(params, settings) {
        super(params);

        this._pixel_step = null;
        this._sigma = null;
        this._brightness = null;
        this._direction = null;

        this._static = true;
        this._settings = settings;

        this._tex = null;

        if (params.pixel_step)
            this.pixel_step = params.pixel_step;
        if (params.sigma)
            this.sigma = params.sigma;  
        if (params.brightness)
            this.brightness = params.brightness;  
        if (params.direction)
            this.direction = params.direction;    

        // set shader source
        this._source = get_shader_source();
        if (this._source)
            this.set_shader_source(this._source);
    }

    get pixel_step() {
        return this._pixel_step;
    }

    set pixel_step(value) {
        if (this._pixel_step !== value) {
            this._pixel_step = value;

            this.set_uniform_value('pixel_step', parseFloat(this._pixel_step-1e-6));
        }
    }

    get sigma() {
        return this._sigma;
    }

    set sigma(value) {
        if (this._sigma !== value) {
            this._sigma = value;

            this.set_uniform_value('sigma', parseFloat(this._sigma-1e-6));
        }
    }

    get brightness() {
        return this._brightness;
    }

    set brightness(value) {
        if (this._brightness !== value) {
            this._brightness = value;

            this.set_uniform_value('brightness', parseFloat(this._brightness-1e-6));
        }
    }

    get direction() {
        return this._direction;
    }

    set direction(value) {
        if (this._direction !== value) {
            this._direction = value;

            this.set_uniform_value('dir', this._direction);
        }
    }


    vfunc_paint_target(paint_node = null, paint_context = null) {
        /*let tex = this.get_pipeline().get_layer_texture(0);
        if(tex !== null) {
            this._tex = tex;
        }
        console.log("blur original texture width, height: ", this._tex.get_width(), this._tex.get_height());
        
        let data = new Uint8Array(this._tex.get_width()*this._tex.get_height()*24);
        this._tex.get_data(Cogl.PixelFormat.RGB_888, this._tex.get_width()*24, data);

        let new_tex_img = new Clutter.Image();
        new_tex_img.set_data(
            data,
            Cogl.PixelFormat.RGB_888,
            this._tex.get_width(), this._tex.get_height(), this._tex.get_width()*24
        );
        

        this.get_pipeline().set_layer_texture(0,new_tex);

        //Invalid uniform of type 'CoglTexture2D' for name 'tex'
        //this.set_uniform_value("tex", this._tex);
        */
        this.set_uniform_value("tex", 0);

        if (paint_node && paint_context)
            super.vfunc_paint_target(paint_node, paint_context);
        else if (paint_node)
            super.vfunc_paint_target(paint_node);
        else
            super.vfunc_paint_target();
    }
});