'use strict';

const { GLib, GObject, Gio, Clutter } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const Preferences = new Prefs(Keys);

/// New Clutter Shader Effect that simply mixes a color in, the class applies
/// the GLSL shader programmed into vfunc_get_static_shader_source and applies
/// it to an Actor.
///
/// Clutter Shader Source Code:
/// https://github.com/GNOME/clutter/blob/master/clutter/clutter-shader-effect.c
///
/// GJS Doc:
/// https://gjs-docs.gnome.org/clutter10~10_api/clutter.shadereffect
var ColorEffect = new GObject.registerClass({
    GTypeName: "ColorEffect",
    Properties: {
        'red': GObject.ParamSpec.double(
            `red`,
            `Red`,
            `Red value in shader`,
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            0.4,
        ),
        'green': GObject.ParamSpec.double(
            `green`,
            `Green`,
            `Green value in shader`,
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            0.4,
        ),
        'blue': GObject.ParamSpec.double(
            `blue`,
            `Blue`,
            `Blue value in shader`,
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            0.4,
        ),
        'blend': GObject.ParamSpec.double(
            `blend`,
            `Blend`,
            `Amount blending between the colors`,
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            0.4,
        ),
    }
}, class ColorShader extends Clutter.ShaderEffect {
    _init(color) {
        this._red = null;
        this._green = null;
        this._blue = null;
        this._blend = null;

        super._init();

        // set shader source

        this.set_shader_source(`
            uniform sampler2D tex;
            uniform float red;
            uniform float green;
            uniform float blue;
            uniform float blend;

            void main() {
                vec4 c = texture2D(tex, cogl_tex_coord_in[0].st);
                vec3 pix_color = vec3(c.x, c.y, c.z);

                vec3 color = vec3(red, green, blue);

                cogl_color_out = vec4(mix(pix_color, color, blend), 1.0);
            }
        `);

        // set shader values

        let [red, green, blue, alpha] = color;

        this.red = red;
        this.green = green;
        this.blue = blue;
        this.blend = alpha;
    }

    get red() {
        return this._red;
    }

    set red(value) {
        if (this._red !== value) {
            this._red = value;

            this.set_uniform_value('red', this._red);
        }
    }

    get green() {
        return this._green;
    }

    set green(value) {
        if (this._green !== value) {
            this._green = value;

            this.set_uniform_value('green', this._green);
        }
    }

    get blue() {
        return this._blue;
    }

    set blue(value) {
        if (this._blue !== value) {
            this._blue = value;

            this.set_uniform_value('blue', this._blue);
        }
    }

    get blend() {
        return this._blend;
    }

    set blend(value) {
        if (this._blend !== value) {
            this._blend = value;

            this.set_uniform_value('blend', this._blend);
        }
    }

    set_from_rgba(rgba) {
        let [r, g, b, a] = rgba;
        this.red = r;
        this.green = g;
        this.blue = b;
        this.blend = a;
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